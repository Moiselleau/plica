import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  BooleanField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { PROFILE_TITLE_FIELD } from "../profile/ProfileTitle";

export const PhotoList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Photos"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="ID" source="id" />
        <BooleanField label="Is Main" source="isMain" />
        <ReferenceField label="Profile" source="profile.id" reference="Profile">
          <TextField source={PROFILE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Url" source="url" />
        <BooleanField label="Verified" source="verified" />{" "}
      </Datagrid>
    </List>
  );
};
