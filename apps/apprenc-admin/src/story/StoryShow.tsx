import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { STORY_TITLE_FIELD } from "./StoryTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const StoryShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Expires At" source="expiresAt" />
        <TextField label="ID" source="id" />
        <TextField label="Media Url" source="mediaUrl" />
        <TextField label="Type" source="type" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="StoryView"
          target="storyId"
          label="StoryViews"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="ID" source="id" />
            <ReferenceField label="Story" source="story.id" reference="Story">
              <TextField source={STORY_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="viewedAt" label="Viewed At" />
            <TextField label="Viewer Id" source="viewerId" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
