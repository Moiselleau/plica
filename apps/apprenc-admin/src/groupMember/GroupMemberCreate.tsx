import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { GroupTitle } from "../group/GroupTitle";
import { UserTitle } from "../user/UserTitle";

export const GroupMemberCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="group.id" reference="Group" label="Group">
          <SelectInput optionText={GroupTitle} />
        </ReferenceInput>
        <TextInput label="Role" source="role" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
