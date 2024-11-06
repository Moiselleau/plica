import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const ProfilEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="age" source="age" />
        <TextInput label="description" multiline source="description" />
        <SelectArrayInput
          label="interets"
          source="interets"
          choices={[
            { label: "Sport", value: "Sport" },
            { label: "Musique", value: "Musique" },
            { label: "Danse", value: "Danse" },
            { label: "Bar", value: "Bar" },
            { label: "Tv", value: "Tv" },
            { label: "Cinéma", value: "Cinema" },
            { label: "Karaoké", value: "Karaoke" },
            { label: "Dormir", value: "Dormir" },
            { label: "Plage", value: "Plage" },
            { label: "Nature", value: "Nature" },
            { label: "Jeux vidéo", value: "JeuxVideo" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="localisation" source="localisation" />
        <SelectArrayInput
          label="sexe"
          source="sexe"
          choices={[
            { label: "masculin", value: "Masculin" },
            { label: "féminin", value: "Feminin" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <ReferenceInput
          source="utilisateurs.id"
          reference="User"
          label="Utilisateurs"
        >
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
