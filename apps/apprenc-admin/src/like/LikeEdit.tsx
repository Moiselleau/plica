import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { UserTitle } from "../user/UserTitle";

export const LikeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
