import { CloseDebateInput, CloseDebateInputStored } from '~/services/data-api/model/CloseDebateInput';
import { VoteTypeOnCloseDebate } from '~/services/data-api/model/VoteTypeOnCloseDebate';

export async function setVoteType(
  data: CloseDebateInputStored,
  storeDiff: (attributeName: keyof CloseDebateInput, value: any) => void,
) {
  if (
    data.voteType !== undefined &&
    (data.voteType == VoteTypeOnCloseDebate.YES_NO || data.voteType == VoteTypeOnCloseDebate.YES_NO_ABSTAIN)
  ) {
    storeDiff('isRatingVote', false);
    storeDiff('isNonRatingVote', true);
    storeDiff('isSelectableAnswerVote', false);
    storeDiff('isNonSelectableAnswerVote', true);
  } else if (data.voteType !== undefined && data.voteType == VoteTypeOnCloseDebate.RATE) {
    storeDiff('isRatingVote', true);
    storeDiff('isNonRatingVote', false);
    storeDiff('isSelectableAnswerVote', false);
    storeDiff('isNonSelectableAnswerVote', true);
  } else if (data.voteType !== undefined && data.voteType == VoteTypeOnCloseDebate.SELECT_ANSWER) {
    storeDiff('isRatingVote', false);
    storeDiff('isNonRatingVote', true);
    storeDiff('isSelectableAnswerVote', true);
    storeDiff('isNonSelectableAnswerVote', false);
  }
}
