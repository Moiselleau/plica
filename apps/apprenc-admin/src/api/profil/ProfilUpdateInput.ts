import { Decimal } from "decimal.js";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProfilUpdateInput = {
  age?: Decimal | null;
  description?: string | null;
  interets?: Array<
    | "Sport"
    | "Musique"
    | "Danse"
    | "Bar"
    | "Tv"
    | "Cinema"
    | "Karaoke"
    | "Dormir"
    | "Plage"
    | "Nature"
    | "JeuxVideo"
  >;
  localisation?: string | null;
  sexe?: Array<"Masculin" | "Feminin">;
  utilisateurs?: UserWhereUniqueInput | null;
};
