import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
} from "react-admin";

import { PROFILE_TITLE_FIELD } from "./ProfileTitle";
import { PREFERENCE_TITLE_FIELD } from "../preference/PreferenceTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const ProfileShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Bio" source="bio" />
        <TextField label="Bio Audio" source="bioAudio" />
        <TextField label="Bio Video" source="bioVideo" />
        <TextField label="Birth Date" source="birthDate" />
        <TextField label="City" source="city" />
        <TextField label="Country" source="country" />
        <TextField label="First Name" source="firstName" />
        <TextField label="Gender" source="gender" />
        <TextField label="ID" source="id" />
        <DateField source="lastActive" label="Last Active" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Latitude" source="latitude" />
        <TextField label="Longitude" source="longitude" />
        <TextField label="Match Count" source="matchCount" />
        <ReferenceField
          label="Preferences"
          source="preference.id"
          reference="Preference"
        >
          <TextField source={PREFERENCE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="View Count" source="viewCount" />
        <ReferenceManyField reference="Photo" target="profileId" label="Photos">
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="ID" source="id" />
            <BooleanField label="Is Main" source="isMain" />
            <ReferenceField
              label="Profile"
              source="profile.id"
              reference="Profile"
            >
              <TextField source={PROFILE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Url" source="url" />
            <BooleanField label="Verified" source="verified" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
