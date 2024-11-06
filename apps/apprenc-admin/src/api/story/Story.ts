import { User } from "../user/User";
import { StoryView } from "../storyView/StoryView";

export type Story = {
  createdAt: Date;
  expiresAt: Date;
  id: string;
  mediaUrl: string;
  type?: "IMAGE" | "VIDEO" | "AUDIO";
  user?: User;
  views?: Array<StoryView>;
};
