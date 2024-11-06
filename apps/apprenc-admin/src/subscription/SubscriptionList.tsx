import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const SubscriptionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Subscriptions"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="End Date" source="endDate" />
        <TextField label="ID" source="id" />
        <DateField source="startDate" label="Start Date" />
        <TextField label="Status" source="status" />
        <TextField label="Type" source="type" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>{" "}
      </Datagrid>
    </List>
  );
};
