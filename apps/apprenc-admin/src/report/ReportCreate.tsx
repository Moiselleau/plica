import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { UserTitle } from "../user/UserTitle";

export const ReportCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Description" source="description" />
        <TextInput label="Reason" source="reason" />
        <ReferenceInput
          source="reportedUser.id"
          reference="User"
          label="Reported User"
        >
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="Status" source="status" />
      </SimpleForm>
    </Create>
  );
};
