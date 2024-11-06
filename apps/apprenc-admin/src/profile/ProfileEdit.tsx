import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
  ReferenceInput,
} from "react-admin";

import { InterestTitle } from "../interest/InterestTitle";
import { PhotoTitle } from "../photo/PhotoTitle";
import { PreferenceTitle } from "../preference/PreferenceTitle";
import { UserTitle } from "../user/UserTitle";

export const ProfileEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Bio" source="bio" />
        <TextInput label="Bio Audio" source="bioAudio" />
        <TextInput label="Bio Video" source="bioVideo" />
        <DateTimeInput label="Birth Date" source="birthDate" />
        <TextInput label="City" source="city" />
        <TextInput label="Country" source="country" />
        <TextInput label="First Name" source="firstName" />
        <SelectInput
          source="gender"
          label="Gender"
          choices={[
            { label: "MALE", value: "MALE" },
            { label: "FEMALE", value: "FEMALE" },
            { label: "OTHER", value: "OTHER" },
            { label: "PREFER_NOT_TO_SAY", value: "PREFER_NOT_TO_SAY" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <ReferenceArrayInput source="interests" reference="Interest">
          <SelectArrayInput
            optionText={InterestTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Last Name" source="lastName" />
        <NumberInput label="Latitude" source="latitude" />
        <NumberInput label="Longitude" source="longitude" />
        <NumberInput step={1} label="Match Count" source="matchCount" />
        <ReferenceArrayInput source="photos" reference="Photo">
          <SelectArrayInput
            optionText={PhotoTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceInput
          source="preferences.id"
          reference="Preference"
          label="Preferences"
        >
          <SelectInput optionText={PreferenceTitle} />
        </ReferenceInput>
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="View Count" source="viewCount" />
      </SimpleForm>
    </Edit>
  );
};
