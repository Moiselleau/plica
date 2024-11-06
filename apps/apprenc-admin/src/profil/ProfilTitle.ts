import { Profil as TProfil } from "../api/profil/Profil";

export const PROFIL_TITLE_FIELD = "id";

export const ProfilTitle = (record: TProfil): string => {
  return record.id?.toString() || String(record.id);
};
