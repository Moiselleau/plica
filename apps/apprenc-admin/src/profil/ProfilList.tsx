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

export const ProfilList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Profils"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="age" source="age" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="interets" source="interets" />
        <TextField label="localisation" source="localisation" />
        <TextField label="sexe" source="sexe" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="Utilisateurs" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>{" "}
      </Datagrid>
    </List>
  );
};
