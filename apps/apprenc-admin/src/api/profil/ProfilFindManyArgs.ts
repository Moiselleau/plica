import { ProfilWhereInput } from "./ProfilWhereInput";
import { ProfilOrderByInput } from "./ProfilOrderByInput";

export type ProfilFindManyArgs = {
  where?: ProfilWhereInput;
  orderBy?: Array<ProfilOrderByInput>;
  skip?: number;
  take?: number;
};
