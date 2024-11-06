import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { StoryTitle } from "../story/StoryTitle";

export const StoryViewEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="story.id" reference="Story" label="Story">
          <SelectInput optionText={StoryTitle} />
        </ReferenceInput>
        <TextInput label="Viewer Id" source="viewerId" />
      </SimpleForm>
    </Edit>
  );
};
