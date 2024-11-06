import { Decimal } from "decimal.js";
import { User } from "../user/User";

export type Profil = {
  age: Decimal | null;
  createdAt: Date;
  description: string | null;
  id: string;
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
  localisation: string | null;
  sexe?: Array<"Masculin" | "Feminin">;
  updatedAt: Date;
  utilisateurs?: User | null;
};
