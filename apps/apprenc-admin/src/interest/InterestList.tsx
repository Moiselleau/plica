import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const InterestList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Interests"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="Category" source="category" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />{" "}
      </Datagrid>
    </List>
  );
};
