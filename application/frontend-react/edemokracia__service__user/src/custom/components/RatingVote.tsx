import { Box, Button, Card, CardContent, Chip, Typography, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { useL10N } from '~/l10n/l10n-context';
import { _StringOperation } from '~/services/data-api/common';
import { ServiceVoteDefinitionStored } from '~/services/data-api/model/ServiceVoteDefinition';
import { VoteStatus } from '~/services/data-api/model/VoteStatus';

import { MdiIcon } from '~/components';
import { RatingVoteResultCard } from './RatingVoteResultCard';
import VoteResultsCard, { AnswerItem } from './VoteResultCard';

interface RatingVoteProps {
  voteDefinition: ServiceVoteDefinitionStored;
  vote?: (row: ServiceVoteDefinitionStored) => Promise<void>;
  revoke?: (row: ServiceVoteDefinitionStored) => Promise<void>;
}

// function generateRange(min: number, max: number, step: number): AnswerItem[] {
//   const result: AnswerItem[] = [];
//   for (let current = min; current <= max; current += step) {
//       result.push({
//            label: current as string,
//            count: 1,
//       } as AnswerItem);
//   }
//   return result;
// }

export function RatingVote(props: RatingVoteProps) {
  const { voteDefinition, vote, revoke } = props;
  const { t } = useTranslation();
  const { locale } = useL10N();
  const theme = useTheme();
  const chipColor = theme.palette.primary.light;

  if (voteDefinition.isRatingType) {
    if (voteDefinition.status == VoteStatus.ACTIVE) {
      return (
        <RatingVoteResultCard
          voteDefinition={voteDefinition}
          vote={vote}
          revoke={revoke}
          sumOfRating={voteDefinition.sumOfRating ?? 0}
          userValue={voteDefinition.currentUserRatingVoteValue}
          numberOfVotes={voteDefinition.numberOfVotes ?? 0}
        />
      );
    }
  } else {
    return <></>;
  }
}
