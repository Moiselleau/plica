import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  BooleanField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { PROFILE_TITLE_FIELD } from "../profile/ProfileTitle";

export const PreferenceList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Preferences"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="Custom Preferences" source="customPreferences" />
        <BooleanField label="Drinking" source="drinking" />
        <TextField label="Gender Preference" source="genderPreference" />
        <TextField label="ID" source="id" />
        <TextField label="Max Age" source="maxAge" />
        <TextField label="Max Distance" source="maxDistance" />
        <TextField label="Min Age" source="minAge" />
        <ReferenceField label="Profile" source="profile.id" reference="Profile">
          <TextField source={PROFILE_TITLE_FIELD} />
        </ReferenceField>
        <BooleanField label="Smoking" source="smoking" />{" "}
      </Datagrid>
    </List>
  );
};
