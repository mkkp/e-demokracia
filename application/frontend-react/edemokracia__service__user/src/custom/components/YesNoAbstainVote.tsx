import { Button, Chip, Icon, useTheme } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import { MdiIcon } from '~/components';

import { useL10N } from '~/l10n/l10n-context';
import { _StringOperation } from '~/services/data-api/common';
import { ServiceVoteDefinitionStored } from '~/services/data-api/model/ServiceVoteDefinition';
import { VoteStatus } from '~/services/data-api/model/VoteStatus';

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

  console.log(voteDefinition);

  if (voteDefinition.isYesNoAbstainType) {
    if (voteDefinition.currentUserYesNoAbstainVoteValue) {
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
            label={
              t('enumerations.YesNoAbstainVoteValue.' + voteDefinition.currentUserYesNoAbstainVoteValue, {
                defaultValue: voteDefinition.currentUserYesNoAbstainVoteValue,
              }) as string
            }
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
