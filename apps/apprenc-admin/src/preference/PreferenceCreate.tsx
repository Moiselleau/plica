import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ProfileTitle } from "../profile/ProfileTitle";

export const PreferenceCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Custom Preferences" source="customPreferences" />
        <BooleanInput label="Drinking" source="drinking" />
        <TextInput label="Gender Preference" source="genderPreference" />
        <NumberInput step={1} label="Max Age" source="maxAge" />
        <NumberInput step={1} label="Max Distance" source="maxDistance" />
        <NumberInput step={1} label="Min Age" source="minAge" />
        <ReferenceInput source="profile.id" reference="Profile" label="Profile">
          <SelectInput optionText={ProfileTitle} />
        </ReferenceInput>
        <BooleanInput label="Smoking" source="smoking" />
      </SimpleForm>
    </Create>
  );
};
