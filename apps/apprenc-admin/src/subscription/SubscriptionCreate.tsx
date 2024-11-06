import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const SubscriptionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="End Date" source="endDate" />
        <SelectInput
          source="status"
          label="Status"
          choices={[
            { label: "ACTIVE", value: "ACTIVE" },
            { label: "CANCELLED", value: "CANCELLED" },
            { label: "EXPIRED", value: "EXPIRED" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <SelectInput
          source="type"
          label="Type"
          choices={[
            { label: "FREE", value: "FREE" },
            { label: "PREMIUM", value: "PREMIUM" },
            { label: "VIP", value: "VIP" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
