import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const MessageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Content" source="content" />
        <TextInput label="Media Url" source="mediaUrl" />
        <DateTimeInput label="Read At" source="readAt" />
        <ReferenceInput source="receiver.id" reference="User" label="Receiver">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceInput source="sender.id" reference="User" label="Sender">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
