import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { UserTitle } from "../user/UserTitle";

export const ReportEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
