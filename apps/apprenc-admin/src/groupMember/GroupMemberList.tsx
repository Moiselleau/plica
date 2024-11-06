import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { GROUP_TITLE_FIELD } from "../group/GroupTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const GroupMemberList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"GroupMembers"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <ReferenceField label="Group" source="group.id" reference="Group">
          <TextField source={GROUP_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <DateField source="joinedAt" label="Joined At" />
        <TextField label="Role" source="role" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>{" "}
      </Datagrid>
    </List>
  );
};
