import { SocialAccount as TSocialAccount } from "../api/socialAccount/SocialAccount";

export const SOCIALACCOUNT_TITLE_FIELD = "providerId";

export const SocialAccountTitle = (record: TSocialAccount): string => {
  return record.providerId?.toString() || String(record.id);
};
