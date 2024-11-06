import { Preference as TPreference } from "../api/preference/Preference";

export const PREFERENCE_TITLE_FIELD = "customPreferences";

export const PreferenceTitle = (record: TPreference): string => {
  return record.customPreferences?.toString() || String(record.id);
};
