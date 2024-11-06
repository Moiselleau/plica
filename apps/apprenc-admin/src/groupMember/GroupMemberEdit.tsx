import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { GroupTitle } from "../group/GroupTitle";
import { UserTitle } from "../user/UserTitle";

export const GroupMemberEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="group.id" reference="Group" label="Group">
          <SelectInput optionText={GroupTitle} />
        </ReferenceInput>
        <TextInput label="Role" source="role" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
