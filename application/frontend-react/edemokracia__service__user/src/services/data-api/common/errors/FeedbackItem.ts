import { FeedbackLevel } from './FeedbackLevel';

export interface FeedbackItem {
  code: string;
  level: FeedbackLevel;
  location: string;
}
