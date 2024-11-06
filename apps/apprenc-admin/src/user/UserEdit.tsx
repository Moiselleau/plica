import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  BooleanInput,
  ReferenceInput,
  NumberInput,
} from "react-admin";

import { UserBadgeTitle } from "../userBadge/UserBadgeTitle";
import { EventParticipantTitle } from "../eventParticipant/EventParticipantTitle";
import { GroupMemberTitle } from "../groupMember/GroupMemberTitle";
import { NotificationTitle } from "../notification/NotificationTitle";
import { ProfileTitle } from "../profile/ProfileTitle";
import { LikeTitle } from "../like/LikeTitle";
import { MessageTitle } from "../message/MessageTitle";
import { ReportTitle } from "../report/ReportTitle";
import { SocialAccountTitle } from "../socialAccount/SocialAccountTitle";
import { StoryTitle } from "../story/StoryTitle";
import { SubscriptionTitle } from "../subscription/SubscriptionTitle";

export const UserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <SelectInput
          source="authMethod"
          label="Auth Method"
          choices={[
            { label: "EMAIL", value: "EMAIL" },
            { label: "GOOGLE", value: "GOOGLE" },
            { label: "FACEBOOK", value: "FACEBOOK" },
            { label: "INSTAGRAM", value: "INSTAGRAM" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <ReferenceArrayInput source="badges" reference="UserBadge">
          <SelectArrayInput
            optionText={UserBadgeTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Email" source="email" />
        <BooleanInput label="Email Verified" source="emailVerified" />
        <ReferenceArrayInput source="events" reference="EventParticipant">
          <SelectArrayInput
            optionText={EventParticipantTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="groups" reference="GroupMember">
          <SelectArrayInput
            optionText={GroupMemberTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="notifications" reference="Notification">
          <SelectArrayInput
            optionText={NotificationTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="password " source="password" />
        <TextInput label="Phone Number" source="phoneNumber" />
        <ReferenceInput source="profile.id" reference="Profile" label="Profile">
          <SelectInput optionText={ProfileTitle} />
        </ReferenceInput>
        <ReferenceArrayInput source="receivedLikes" reference="Like">
          <SelectArrayInput
            optionText={LikeTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="receivedMessages" reference="Message">
          <SelectArrayInput
            optionText={MessageTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="reports" reference="Report">
          <SelectArrayInput
            optionText={ReportTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="roles" source="roles" />
        <ReferenceArrayInput source="sentLikes" reference="Like">
          <SelectArrayInput
            optionText={LikeTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="sentMessages" reference="Message">
          <SelectArrayInput
            optionText={MessageTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="socialAccounts" reference="SocialAccount">
          <SelectArrayInput
            optionText={SocialAccountTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="stories" reference="Story">
          <SelectArrayInput
            optionText={StoryTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceInput
          source="subscription.id"
          reference="Subscription"
          label="Subscription"
        >
          <SelectInput optionText={SubscriptionTitle} />
        </ReferenceInput>
        <NumberInput label="Trust Score" source="trustScore" />
        <TextInput label="username" source="username" />
        <SelectInput
          source="verificationStatus"
          label="Verification Status"
          choices={[
            { label: "PENDING", value: "PENDING" },
            { label: "VERIFIED", value: "VERIFIED" },
            { label: "REJECTED", value: "REJECTED" },
          ]}
          optionText="label"
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
