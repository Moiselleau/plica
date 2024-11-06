import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { StoryTitle } from "../story/StoryTitle";

export const StoryViewCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="story.id" reference="Story" label="Story">
          <SelectInput optionText={StoryTitle} />
        </ReferenceInput>
        <TextInput label="Viewer Id" source="viewerId" />
      </SimpleForm>
    </Create>
  );
};
