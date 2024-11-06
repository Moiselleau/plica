import { Match } from "../match/Match";

export type Message = {
  contenu: string | null;
  createdAt: Date;
  id: string;
  match?: Array<Match>;
  updatedAt: Date;
};
