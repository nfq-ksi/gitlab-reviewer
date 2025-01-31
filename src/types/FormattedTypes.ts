import { ApproveType, EmojiType, MergeRequestType, ProjectType, User} from 'types/GitLabTypes';

export interface MergeRequest extends MergeRequestType {
  emojis: EmojiType[];
  upvoters: User[];
  downvoters: User[];
  approves: ApproveType;
}

export interface Project extends ProjectType {
  mergeRequests: MergeRequest[];
}
