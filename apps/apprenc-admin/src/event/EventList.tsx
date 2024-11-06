import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const EventList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Events"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="City" source="city" />
        <TextField label="Country" source="country" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="End Date" source="endDate" />
        <TextField label="ID" source="id" />
        <TextField label="Latitude" source="latitude" />
        <TextField label="Longitude" source="longitude" />
        <TextField label="Max Participants" source="maxParticipants" />
        <TextField label="Start Date" source="startDate" />
        <TextField label="Title" source="title" />
        <TextField label="Type" source="type" />{" "}
      </Datagrid>
    </List>
  );
};
