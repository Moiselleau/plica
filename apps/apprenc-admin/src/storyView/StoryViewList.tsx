import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { STORY_TITLE_FIELD } from "../story/StoryTitle";

export const StoryViewList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"StoryViews"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="ID" source="id" />
        <ReferenceField label="Story" source="story.id" reference="Story">
          <TextField source={STORY_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="viewedAt" label="Viewed At" />
        <TextField label="Viewer Id" source="viewerId" />{" "}
      </Datagrid>
    </List>
  );
};
