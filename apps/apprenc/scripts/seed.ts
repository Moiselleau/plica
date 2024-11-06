import * as dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
import { customSeed } from "./customSeed";
import { EnumUserAuthMethod } from "../src/user/base/EnumUserAuthMethod";
import { EnumUserVerificationStatus } from "../src/user/base/EnumUserVerificationStatus";

if (require.main === module) {
  dotenv.config();

  seed().catch((error) => {
    console.error(error);
    process.exit(1);
  });
}

async function seed() {
  console.info("Seeding database...");

  const client = new PrismaClient();
  const data = {
    authMethod: EnumUserAuthMethod.EMAIL,
    email: "example@example.com",
    emailVerified: false,
    roles: "",
    trustScore: 0,
    username: "",
    verificationStatus: EnumUserVerificationStatus.PENDING,
  };
  await client.user.upsert({
    where: {
      username: data.username,
    },
    update: {},
    create: data,
  });
  void client.$disconnect();

  console.info("Seeding database with custom seed...");
  customSeed();

  console.info("Seeded database successfully");
}
