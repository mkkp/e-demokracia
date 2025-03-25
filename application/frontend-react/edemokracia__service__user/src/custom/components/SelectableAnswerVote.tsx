import { Chip, Icon, useTheme } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Ribbon } from 'react-ribbons';
import { MdiIcon } from '~/components';

import { useL10N } from '~/l10n/l10n-context';
import { _StringOperation } from '~/services/data-api/common';
import { IssueScope } from '~/services/data-api/model/IssueScope';
import { ServiceVoteDefinitionStored } from '~/services/data-api/model/ServiceVoteDefinition';
import { VoteStatus } from '~/services/data-api/model/VoteStatus';
import VoteResultsCard, { AnswerItem } from './VoteResultCard';

interface SelectableAnswerVoteProps {
  voteDefinition: ServiceVoteDefinitionStored;
  vote?: (row: ServiceVoteDefinitionStored) => Promise<void>;
  revoke?: (row: ServiceVoteDefinitionStored) => Promise<void>;
}

export function SelectableAnswerVote(props: SelectableAnswerVoteProps) {
  const { voteDefinition, vote, revoke } = props;
  const { t } = useTranslation();
  const { locale } = useL10N();
  const theme = useTheme();

  if (voteDefinition.isSelectAnswerType) {
    if (voteDefinition.status == VoteStatus.ACTIVE) {
      const answers = voteDefinition.voteSelections?.map((answer) => (
        {
          label: answer.title,
          count: answer.sumOfVotes
        }
      )) as AnswerItem[];

      return (
        <VoteResultsCard 
          answers={answers}
          maxItems={8}
          voteDefinition={voteDefinition}
          vote={vote}
          revoke={revoke}
          voteValue={                    
            voteDefinition.currentUserSelectAnswerVoteValue ? voteDefinition.currentUserSelectAnswerVoteValue as string : undefined
            }
        />
      );
    }
    } else {
    return <></>;
  }
}
