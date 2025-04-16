import { Box, Button, Card, CardContent, Chip, Typography, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { useL10N } from '~/l10n/l10n-context';
import { _StringOperation } from '~/services/data-api/common';
import { ServiceVoteDefinitionStored } from '~/services/data-api/model/ServiceVoteDefinition';
import { VoteStatus } from '~/services/data-api/model/VoteStatus';

import { MdiIcon } from '~/components';
import VoteResultsCard, { AnswerItem } from './VoteResultCard';
import { ServiceRatingVoteDefinitionStored } from '~/services/data-api/model/ServiceRatingVoteDefinition';
import internal from 'stream';

export type RatingVoteActionParameterType = ServiceVoteDefinitionStored | ServiceRatingVoteDefinitionStored

interface RatingVoteResultCardProps {
  voteDefinition: ServiceVoteDefinitionStored;
  vote?: (row: RatingVoteActionParameterType) => Promise<void>;
  revoke?: (row: RatingVoteActionParameterType) => Promise<void>;
  numberOfVotes: number;
  sumOfRating: number;
  userValue?: number | null;
}

export function RatingVoteResultCard(props: RatingVoteResultCardProps) {
  const { voteDefinition, vote, revoke, numberOfVotes, sumOfRating, userValue} = props;
  const { t } = useTranslation();
  const { locale } = useL10N();
  const theme = useTheme();
  const chipColor = theme.palette.primary.light;

  return (
    <>
      <Card sx={{ maxWidth: 600, m: 0, backgroundColor: '#FFFFFF80' }}>
        {/* <CardHeader title="Voting Results" /> */}
        <CardContent>
          <Typography
            variant="body2"
            sx={{
              fontWeight: 900,
              lineHeight: 1.2,
              my: 1.5,
              padding: 2,
            }}
          >
            {t('totalVotes', { defaultValue: 'Összesen: ' })}{' '}
            {numberOfVotes !== 0 && numberOfVotes}
            {numberOfVotes === 0 && t('noVotes', { defaultValue: 'Nincsen szavazat' })}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontWeight: 900,
              lineHeight: 1.2,
              my: 1.5,
              padding: 2,
            }}
          >
            {t('ratingVoteAvarage', { defaultValue: 'Átlag: ' })}{' '}
            {numberOfVotes !== 0 &&
              (sumOfRating ?? 0 / (numberOfVotes ?? 1))}
          </Typography>

          <Box
            sx={{
              height: '100%',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              p: 2, // Inner padding
              boxSizing: 'border-box',
            }}
          >
            {/* voteDefinition.currentUserYesNoAbstainVoteValue */}
            {userValue && (
              <Box
                sx={{
                  height: '100%',
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  p: 2, // Inner padding
                  boxSizing: 'border-box',
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
                  label={userValue}
                  sx={{
                    backgroundColor: chipColor,
                    margin: 1,
                    fontWeight: 'bold',
                    '&:hover': {
                      opacity: 0.9,
                    },
                  }}
                  // variant="outlined"
                  //color='warning'
                  //color={answerColor(voteValue) ? answerColor(voteValue) : 'warning' }
                  onDelete={() => {
                    revoke?.(voteDefinition);
                  }}
                />
              </Box>
            )}
            {!userValue && (
              <Box>
                <Button
                  sx={{}}
                  variant={'contained'}
                  size="small"
                  startIcon={<MdiIcon path="vote" />}
                  onClick={() => {
                    vote?.(voteDefinition);
                  }}
                >
                  {t('vote', { defaultValue: 'Szavazok' }) as string}
                </Button>
              </Box>
            )}
          </Box>
        </CardContent>
      </Card>
    </>
  );
}
