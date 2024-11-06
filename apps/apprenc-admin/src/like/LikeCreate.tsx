import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { UserTitle } from "../user/UserTitle";

export const LikeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="receiver.id" reference="User" label="Receiver">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceInput source="sender.id" reference="User" label="Sender">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <SelectInput
          source="status"
          label="Status"
          choices={[
            { label: "PENDING", value: "PENDING" },
            { label: "ACCEPTED", value: "ACCEPTED" },
            { label: "REJECTED", value: "REJECTED" },
          ]}
          optionText="label"
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
