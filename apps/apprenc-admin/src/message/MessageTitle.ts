import { Message as TMessage } from "../api/message/Message";

export const MESSAGE_TITLE_FIELD = "contenu";

export const MessageTitle = (record: TMessage): string => {
  return record.contenu?.toString() || String(record.id);
};
