import { UserBadgeUpdateManyWithoutUsersInput } from "./UserBadgeUpdateManyWithoutUsersInput";
import { EventParticipantUpdateManyWithoutUsersInput } from "./EventParticipantUpdateManyWithoutUsersInput";
import { GroupMemberUpdateManyWithoutUsersInput } from "./GroupMemberUpdateManyWithoutUsersInput";
import { NotificationUpdateManyWithoutUsersInput } from "./NotificationUpdateManyWithoutUsersInput";
import { ProfileWhereUniqueInput } from "../profile/ProfileWhereUniqueInput";
import { LikeUpdateManyWithoutUsersInput } from "./LikeUpdateManyWithoutUsersInput";
import { MessageUpdateManyWithoutUsersInput } from "./MessageUpdateManyWithoutUsersInput";
import { ReportUpdateManyWithoutUsersInput } from "./ReportUpdateManyWithoutUsersInput";
import { SocialAccountUpdateManyWithoutUsersInput } from "./SocialAccountUpdateManyWithoutUsersInput";
import { StoryUpdateManyWithoutUsersInput } from "./StoryUpdateManyWithoutUsersInput";
import { SubscriptionWhereUniqueInput } from "../subscription/SubscriptionWhereUniqueInput";

export type UserUpdateInput = {
  authMethod?: "EMAIL" | "GOOGLE" | "FACEBOOK" | "INSTAGRAM";
  badges?: UserBadgeUpdateManyWithoutUsersInput;
  email?: string;
  emailVerified?: boolean;
  events?: EventParticipantUpdateManyWithoutUsersInput;
  groups?: GroupMemberUpdateManyWithoutUsersInput;
  notifications?: NotificationUpdateManyWithoutUsersInput;
  password?: string | null;
  phoneNumber?: string | null;
  profile?: ProfileWhereUniqueInput | null;
  receivedLikes?: LikeUpdateManyWithoutUsersInput;
  receivedMessages?: MessageUpdateManyWithoutUsersInput;
  reports?: ReportUpdateManyWithoutUsersInput;
  roles?: string;
  sentLikes?: LikeUpdateManyWithoutUsersInput;
  sentMessages?: MessageUpdateManyWithoutUsersInput;
  socialAccounts?: SocialAccountUpdateManyWithoutUsersInput;
  stories?: StoryUpdateManyWithoutUsersInput;
  subscription?: SubscriptionWhereUniqueInput | null;
  trustScore?: number;
  username?: string;
  verificationStatus?: "PENDING" | "VERIFIED" | "REJECTED";
};
