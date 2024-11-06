import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { PROFILE_TITLE_FIELD } from "../profile/ProfileTitle";
import { SUBSCRIPTION_TITLE_FIELD } from "../subscription/SubscriptionTitle";

export const UserList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Users"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="Auth Method" source="authMethod" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <BooleanField label="Email Verified" source="emailVerified" />
        <TextField label="ID" source="id" />
        <TextField label="password " source="password" />
        <TextField label="Phone Number" source="phoneNumber" />
        <ReferenceField label="Profile" source="profile.id" reference="Profile">
          <TextField source={PROFILE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="roles" source="roles" />
        <ReferenceField
          label="Subscription"
          source="subscription.id"
          reference="Subscription"
        >
          <TextField source={SUBSCRIPTION_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Trust Score" source="trustScore" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="username" source="username" />
        <TextField
          label="Verification Status"
          source="verificationStatus"
        />{" "}
      </Datagrid>
    </List>
  );
};
