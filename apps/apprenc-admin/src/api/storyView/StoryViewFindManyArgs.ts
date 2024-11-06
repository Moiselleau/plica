import { StoryViewWhereInput } from "./StoryViewWhereInput";
import { StoryViewOrderByInput } from "./StoryViewOrderByInput";

export type StoryViewFindManyArgs = {
  where?: StoryViewWhereInput;
  orderBy?: Array<StoryViewOrderByInput>;
  skip?: number;
  take?: number;
};
