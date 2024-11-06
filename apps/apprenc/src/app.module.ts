import { Module } from "@nestjs/common";
import { UserModule } from "./user/user.module";
import { ProfileModule } from "./profile/profile.module";
import { PreferenceModule } from "./preference/preference.module";
import { InterestModule } from "./interest/interest.module";
import { LikeModule } from "./like/like.module";
import { MessageModule } from "./message/message.module";
import { StoryModule } from "./story/story.module";
import { EventModule } from "./event/event.module";
import { GroupModule } from "./group/group.module";
import { SubscriptionModule } from "./subscription/subscription.module";
import { SocialAccountModule } from "./socialAccount/socialAccount.module";
import { PhotoModule } from "./photo/photo.module";
import { UserBadgeModule } from "./userBadge/userBadge.module";
import { StoryViewModule } from "./storyView/storyView.module";
import { EventParticipantModule } from "./eventParticipant/eventParticipant.module";
import { GroupMemberModule } from "./groupMember/groupMember.module";
import { NotificationModule } from "./notification/notification.module";
import { ReportModule } from "./report/report.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    UserModule,
    ProfileModule,
    PreferenceModule,
    InterestModule,
    LikeModule,
    MessageModule,
    StoryModule,
    EventModule,
    GroupModule,
    SubscriptionModule,
    SocialAccountModule,
    PhotoModule,
    UserBadgeModule,
    StoryViewModule,
    EventParticipantModule,
    GroupMemberModule,
    NotificationModule,
    ReportModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
