import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
  SelectInput,
  ReferenceInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";
import { StoryViewTitle } from "../storyView/StoryViewTitle";

export const StoryCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="Expires At" source="expiresAt" />
        <TextInput label="Media Url" source="mediaUrl" />
        <SelectInput
          source="type"
          label="Type"
          choices={[
            { label: "IMAGE", value: "IMAGE" },
            { label: "VIDEO", value: "VIDEO" },
            { label: "AUDIO", value: "AUDIO" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceArrayInput source="views" reference="StoryView">
          <SelectArrayInput
            optionText={StoryViewTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
