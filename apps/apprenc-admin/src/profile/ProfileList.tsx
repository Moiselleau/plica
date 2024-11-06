import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { PREFERENCE_TITLE_FIELD } from "../preference/PreferenceTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const ProfileList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Profiles"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="Bio" source="bio" />
        <TextField label="Bio Audio" source="bioAudio" />
        <TextField label="Bio Video" source="bioVideo" />
        <TextField label="Birth Date" source="birthDate" />
        <TextField label="City" source="city" />
        <TextField label="Country" source="country" />
        <TextField label="First Name" source="firstName" />
        <TextField label="Gender" source="gender" />
        <TextField label="ID" source="id" />
        <DateField source="lastActive" label="Last Active" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Latitude" source="latitude" />
        <TextField label="Longitude" source="longitude" />
        <TextField label="Match Count" source="matchCount" />
        <ReferenceField
          label="Preferences"
          source="preference.id"
          reference="Preference"
        >
          <TextField source={PREFERENCE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="View Count" source="viewCount" />{" "}
      </Datagrid>
    </List>
  );
};
