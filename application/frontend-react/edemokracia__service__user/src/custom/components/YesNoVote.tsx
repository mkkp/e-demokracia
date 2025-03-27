import { useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { useL10N } from '~/l10n/l10n-context';
import { _StringOperation } from '~/services/data-api/common';
import { ServiceVoteDefinitionStored } from '~/services/data-api/model/ServiceVoteDefinition';
import { VoteStatus } from '~/services/data-api/model/VoteStatus';
import VoteResultsCard from './VoteResultCard';

interface YesNoVoteProps {
  voteDefinition: ServiceVoteDefinitionStored;
  vote?: (row: ServiceVoteDefinitionStored) => Promise<void>;
  revoke?: (row: ServiceVoteDefinitionStored) => Promise<void>;
}

export function YesNoVote(props: YesNoVoteProps) {
  const { voteDefinition, vote, revoke } = props;
  const { t } = useTranslation();
  const { locale } = useL10N();
  const theme = useTheme();

  console.log(voteDefinition);

  if (voteDefinition.isYesNoType) {
    if (voteDefinition.status == VoteStatus.ACTIVE) {
      return (
        <VoteResultsCard
          answers={[
            {
              label: t('enumerations.YesNoVoteValue.YES', {
                defaultValue: 'Igen',
              }) as string,
              count: props.voteDefinition.sumOfYesNoVoteOfYes || 0,
            },
            {
              label: t('enumerations.YesNoVoteValue.NO', {
                defaultValue: 'Nem',
              }) as string,
              count: props.voteDefinition.sumOfYesNoVoteOfNo || 0,
            },
          ]}
          maxItems={8}
          voteDefinition={voteDefinition}
          vote={vote}
          revoke={revoke}
          voteValue={
            voteDefinition.currentUserYesNoVoteValue
              ? (t('enumerations.YesNoVoteValue.' + voteDefinition.currentUserYesNoVoteValue, {
                  defaultValue: voteDefinition.currentUserYesNoVoteValue,
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
