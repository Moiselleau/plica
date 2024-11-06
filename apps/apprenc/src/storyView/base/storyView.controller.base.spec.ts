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
import { StoryViewController } from "../storyView.controller";
import { StoryViewService } from "../storyView.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  id: "exampleId",
  viewedAt: new Date(),
  viewerId: "exampleViewerId",
};
const CREATE_RESULT = {
  id: "exampleId",
  viewedAt: new Date(),
  viewerId: "exampleViewerId",
};
const FIND_MANY_RESULT = [
  {
    id: "exampleId",
    viewedAt: new Date(),
    viewerId: "exampleViewerId",
  },
];
const FIND_ONE_RESULT = {
  id: "exampleId",
  viewedAt: new Date(),
  viewerId: "exampleViewerId",
};

const service = {
  createStoryView() {
    return CREATE_RESULT;
  },
  storyViews: () => FIND_MANY_RESULT,
  storyView: ({ where }: { where: { id: string } }) => {
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

describe("StoryView", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: StoryViewService,
          useValue: service,
        },
      ],
      controllers: [StoryViewController],
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

  test("POST /storyViews", async () => {
    await request(app.getHttpServer())
      .post("/storyViews")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        viewedAt: CREATE_RESULT.viewedAt.toISOString(),
      });
  });

  test("GET /storyViews", async () => {
    await request(app.getHttpServer())
      .get("/storyViews")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          viewedAt: FIND_MANY_RESULT[0].viewedAt.toISOString(),
        },
      ]);
  });

  test("GET /storyViews/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/storyViews"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /storyViews/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/storyViews"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        viewedAt: FIND_ONE_RESULT.viewedAt.toISOString(),
      });
  });

  test("POST /storyViews existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/storyViews")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        viewedAt: CREATE_RESULT.viewedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/storyViews")
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
