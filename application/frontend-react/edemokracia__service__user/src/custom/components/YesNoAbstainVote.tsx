import { useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { useL10N } from '~/l10n/l10n-context';
import { _StringOperation } from '~/services/data-api/common';
import { ServiceVoteDefinitionStored } from '~/services/data-api/model/ServiceVoteDefinition';
import { VoteStatus } from '~/services/data-api/model/VoteStatus';

import VoteResultsCard from './VoteResultCard';

interface YesNoAbstainVoteProps {
  voteDefinition: ServiceVoteDefinitionStored;
  vote?: (row: ServiceVoteDefinitionStored) => Promise<void>;
  revoke?: (row: ServiceVoteDefinitionStored) => Promise<void>;
}

export function YesNoAbstainVote(props: YesNoAbstainVoteProps) {
  const { voteDefinition, vote, revoke } = props;
  const { t } = useTranslation();
  const { locale } = useL10N();
  const theme = useTheme();

  if (voteDefinition.isYesNoAbstainType) {
    if (voteDefinition.status == VoteStatus.ACTIVE) {
      return (
        <VoteResultsCard
          answers={[
            {
              label: t('enumerations.YesNoAbstainVoteValue.YES', {
                defaultValue: 'Igen',
              }) as string,
              count: props.voteDefinition.sumOfYesNoAbstainVoteOfYes || 0,
            },
            {
              label: t('enumerations.YesNoAbstainVoteValue.NO', {
                defaultValue: 'Nem',
              }) as string,
              count: props.voteDefinition.sumOfYesNoAbstainVoteOfNo || 0,
            },
            {
              label: t('enumerations.YesNoAbstainVoteValue.ABSTAIN', {
                defaultValue: 'Tartózkodás',
              }) as string,
              count: props.voteDefinition.sumOfYesNoAbstainVoteOfAbstain || 0,
            },
          ]}
          maxItems={8}
          voteDefinition={voteDefinition}
          vote={vote}
          revoke={revoke}
          voteValue={
            voteDefinition.currentUserYesNoAbstainVoteValue
              ? (t('enumerations.YesNoAbstainVoteValue.' + voteDefinition.currentUserYesNoAbstainVoteValue, {
                  defaultValue: voteDefinition.currentUserYesNoAbstainVoteValue,
                }) as string)
              : undefined
          }
        />
      );
    }
  } else {
    return <></>;
  }
}
