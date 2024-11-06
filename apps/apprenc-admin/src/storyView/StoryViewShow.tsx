import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import { STORY_TITLE_FIELD } from "../story/StoryTitle";

export const StoryViewShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <ReferenceField label="Story" source="story.id" reference="Story">
          <TextField source={STORY_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="viewedAt" label="Viewed At" />
        <TextField label="Viewer Id" source="viewerId" />
      </SimpleShowLayout>
    </Show>
  );
};
