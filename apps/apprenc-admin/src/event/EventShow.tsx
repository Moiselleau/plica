import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { EVENT_TITLE_FIELD } from "./EventTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const EventShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <TextField label="Type" source="type" />
        <ReferenceManyField
          reference="EventParticipant"
          target="eventId"
          label="EventParticipants"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField label="Event" source="event.id" reference="Event">
              <TextField source={EVENT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="Status" source="status" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
