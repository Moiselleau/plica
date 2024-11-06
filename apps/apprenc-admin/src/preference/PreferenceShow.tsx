import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  BooleanField,
  ReferenceField,
} from "react-admin";
import { PROFILE_TITLE_FIELD } from "../profile/ProfileTitle";

export const PreferenceShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Custom Preferences" source="customPreferences" />
        <BooleanField label="Drinking" source="drinking" />
        <TextField label="Gender Preference" source="genderPreference" />
        <TextField label="ID" source="id" />
        <TextField label="Max Age" source="maxAge" />
        <TextField label="Max Distance" source="maxDistance" />
        <TextField label="Min Age" source="minAge" />
        <ReferenceField label="Profile" source="profile.id" reference="Profile">
          <TextField source={PROFILE_TITLE_FIELD} />
        </ReferenceField>
        <BooleanField label="Smoking" source="smoking" />
      </SimpleShowLayout>
    </Show>
  );
};
