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
    if (voteDefinition.currentUserSelectAnswerVoteValue) {
      return (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            height: '100%',
          }}
        >
          <Typography
            variant="h5"
            component="div"
            sx={{
              fontWeight: 900,
              lineHeight: 1.2,
              my: 1.5,
              padding: 2,
            }}
          >
            {t('myvote', { defaultValue: 'Szavazatom:' }) as string}
          </Typography>

          <Chip
            label={voteDefinition.currentUserSelectAnswerVoteValue}
            // variant="outlined"
            color="warning"
            onClick={() => {
              props.revoke?.(props.voteDefinition);
            }}
          />
        </div>
      );
    } else if (voteDefinition.status == VoteStatus.ACTIVE) {
      return (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            height: '100%',
          }}
        >
          <Button
            sx={{}}
            variant={'contained'}
            size="small"
            startIcon={<MdiIcon path="vote" />}
            onClick={() => {
              vote?.(props.voteDefinition);
            }}
          >
            {t('vote', { defaultValue: 'Szavazok' }) as string}
          </Button>
        </div>
      );
    }
  } else {
    return <></>;
  }
}
