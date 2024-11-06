import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  TextInput,
  ReferenceInput,
} from "react-admin";
import { UserTitle } from "../user/UserTitle";

export const SocialAccountEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <SelectInput
          source="provider"
          label="Provider"
          choices={[
            { label: "EMAIL", value: "EMAIL" },
            { label: "GOOGLE", value: "GOOGLE" },
            { label: "FACEBOOK", value: "FACEBOOK" },
            { label: "INSTAGRAM", value: "INSTAGRAM" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Provider Id" source="providerId" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
