import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const MessageCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
