import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
  SelectInput,
} from "react-admin";

import { EventParticipantTitle } from "../eventParticipant/EventParticipantTitle";

export const EventEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="City" source="city" />
        <TextInput label="Country" source="country" />
        <TextInput label="Description" source="description" />
        <DateTimeInput label="End Date" source="endDate" />
        <NumberInput label="Latitude" source="latitude" />
        <NumberInput label="Longitude" source="longitude" />
        <NumberInput
          step={1}
          label="Max Participants"
          source="maxParticipants"
        />
        <ReferenceArrayInput source="participants" reference="EventParticipant">
          <SelectArrayInput
            optionText={EventParticipantTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <DateTimeInput label="Start Date" source="startDate" />
        <TextInput label="Title" source="title" />
        <SelectInput
          source="type"
          label="Type"
          choices={[
            { label: "SPEEDDATING", value: "SPEEDDATING" },
            { label: "SOCIAL", value: "SOCIAL" },
            { label: "WORKSHOP", value: "WORKSHOP" },
            { label: "OTHER", value: "OTHER" },
          ]}
          optionText="label"
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
