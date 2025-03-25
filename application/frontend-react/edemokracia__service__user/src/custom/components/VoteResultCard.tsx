import React from 'react';
import { Card, CardContent, CardHeader, Typography, Box, useTheme, Button, Chip } from '@mui/material';
import { MdiIcon } from '~/components';
import { useTranslation } from 'react-i18next';
import { ServiceVoteDefinitionStored } from '~/services/data-api/model/ServiceVoteDefinition';

export interface AnswerItem {
  label: string;
  count: number;
  color?: string;
}

interface VoteResultsCardProps {
  answers: AnswerItem[];
  maxItems?: number;
  voteDefinition: ServiceVoteDefinitionStored;
  vote?: (row: ServiceVoteDefinitionStored) => Promise<void>;
  revoke?: (row: ServiceVoteDefinitionStored) => Promise<void>;
  voteValue?: string;
}

const DEFAULT_COLORS = [
  '#4CAF50', // green
  '#F44336', // red
  '#2196F3', // blue
  '#FFC107', // amber
  '#9C27B0', // purple
  '#00BCD4', // cyan
  '#FF9800', // orange
  '#795548', // brown
  '#607D8B', // blue grey
  '#9E9E9E', // grey
];

const VoteResultsCard: React.FC<VoteResultsCardProps> = ({ 
  answers, 
  maxItems = 10
  ,
  voteDefinition,
  vote,
  revoke,
  voteValue,
}) => {
  const theme = useTheme();
  const { t } = useTranslation();
  
  // Process answers
  const processedAnswers = answers
//    .sort((a, b) => b.count - a.count)
    .slice(0, maxItems)
    .map((answer, index) => ({
      ...answer,
      color: answer.color || DEFAULT_COLORS[index % DEFAULT_COLORS.length],
    }));

  function answerColor(voteValue: string | undefined): string | undefined { 
    if (!voteValue) {
        return undefined;
    }
    const ret = processedAnswers
    .filter((answer) => 
        answer.label == voteValue
    );
    if (ret.length > 0) {
        return ret[0].color
    } else {
        return undefined;
    }
 }


  const total = processedAnswers.reduce((sum, answer) => sum + answer.count, 0);
  const maxCount = Math.max(...processedAnswers.map(a => a.count), 0);

  const getWidth = (value: number): string => {
    if (maxCount === 0) return '0%';
    return `${(value / maxCount) * 100}%`;
  };

  const chipColor = answerColor(voteValue);

  return (
    <Card sx={{ maxWidth: 600, m: 0, backgroundColor: '#FFFFFF80' }}>
      {/* <CardHeader title="Voting Results" /> */}
      <CardContent>
        {/* Answers List */}
        {processedAnswers.map((answer) => (
          <Box key={answer.label} sx={{ mb: 0 }}>
            <Typography variant="caption" component="div">
              {answer.label} ({answer.count})
            </Typography>
            <Box
              sx={{
                height: 10,
                bgcolor: answer.color,
                borderRadius: 1,
                transition: 'width 0.5s ease',
                width: getWidth(answer.count),
              }}
            />
          </Box>
        ))}

        {/* Legend */}
        {/* <Box sx={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: 2, 
          mt: 2,
          mb: 2 
        }}>
          {processedAnswers.map((answer) => (
            <Box 
              key={answer.label} 
              sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
            >
              <Box
                sx={{
                  width: 16,
                  height: 10,
                  borderRadius: 1,
                  bgcolor: answer.color,
                }}
              />
              <Typography variant="caption">{answer.label}</Typography>
            </Box>
          ))}
        </Box> */}
        <Typography variant="body2"               
            sx={{
                fontWeight: 900,
                lineHeight: 1.2,
                my: 1.5,
                padding: 2,
              }}
        >
          {t('totalVotes', { defaultValue: 'Összesen:' })} {maxCount !== 0 && total}
          {maxCount === 0 && t('noVotes', { defaultValue: 'Nincsen szavazat' })}
        </Typography>
        <Box 
            sx={{
              height: '100%',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              p: 2, // Inner padding
              boxSizing: 'border-box'
            }}
          >
        {/* voteDefinition.currentUserYesNoAbstainVoteValue */}
          {voteValue  && (
            <Box
                sx={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    p: 2, // Inner padding
                    boxSizing: 'border-box'
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
                        voteValue
                    }
                    sx={{
                        backgroundColor: chipColor,
                        margin: 1,
                        fontWeight: 'bold',
                        '&:hover': {
                          opacity: 0.9
                        }
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
            {!voteValue && (
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
  );
};


export default VoteResultsCard;