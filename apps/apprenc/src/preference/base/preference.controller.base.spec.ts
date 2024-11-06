import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { PreferenceController } from "../preference.controller";
import { PreferenceService } from "../preference.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  customPreferences: "exampleCustomPreferences",
  drinking: "true",
  genderPreference: "exampleGenderPreference",
  id: "exampleId",
  maxAge: 42,
  maxDistance: 42,
  minAge: 42,
  smoking: "true",
};
const CREATE_RESULT = {
  customPreferences: "exampleCustomPreferences",
  drinking: "true",
  genderPreference: "exampleGenderPreference",
  id: "exampleId",
  maxAge: 42,
  maxDistance: 42,
  minAge: 42,
  smoking: "true",
};
const FIND_MANY_RESULT = [
  {
    customPreferences: "exampleCustomPreferences",
    drinking: "true",
    genderPreference: "exampleGenderPreference",
    id: "exampleId",
    maxAge: 42,
    maxDistance: 42,
    minAge: 42,
    smoking: "true",
  },
];
const FIND_ONE_RESULT = {
  customPreferences: "exampleCustomPreferences",
  drinking: "true",
  genderPreference: "exampleGenderPreference",
  id: "exampleId",
  maxAge: 42,
  maxDistance: 42,
  minAge: 42,
  smoking: "true",
};

const service = {
  createPreference() {
    return CREATE_RESULT;
  },
  preferences: () => FIND_MANY_RESULT,
  preference: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("Preference", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: PreferenceService,
          useValue: service,
        },
      ],
      controllers: [PreferenceController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /preferences", async () => {
    await request(app.getHttpServer())
      .post("/preferences")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /preferences", async () => {
    await request(app.getHttpServer())
      .get("/preferences")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /preferences/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/preferences"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /preferences/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/preferences"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /preferences existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/preferences")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/preferences")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
