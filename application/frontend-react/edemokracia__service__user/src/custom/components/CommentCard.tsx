import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MdiIcon } from '~/components';
import { ImageDisplay } from '~/components/widgets/ImageDisplay';
import commentPng from '~/custom/assets/images/comment.png';
import { BoldCardHeader } from '~/custom/components/BoldCardHeader';

import { useL10N } from '~/l10n/l10n-context';
import { _StringOperation } from '~/services/data-api/common';
import { ServiceCommentStored } from '~/services/data-api/model/ServiceComment';

interface CommentCardProps {
  row: ServiceCommentStored;
  onRowClick: ((row: ServiceCommentStored) => void) | undefined;
  numberOfLikes: number | null | undefined;
  numberOfDislikes: number | null | undefined;
  onLikeClick: ((row: ServiceCommentStored) => void) | undefined;
  onDislikeClick: ((row: ServiceCommentStored) => void) | undefined;
}

export function CommentCard(props: CommentCardProps) {
  const { row, onRowClick, numberOfLikes, numberOfDislikes, onLikeClick, onDislikeClick } = props;
  const { t } = useTranslation();
  const { locale } = useL10N();

  const formatValue = useCallback((value: any) => {
    if (value instanceof Date) {
      return new Intl.DateTimeFormat(locale, {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      }).format(value);
    }
    if (value === undefined || value === null) {
      return '';
    }
    return value.toString();
  }, []);

  return (
    <Card
      variant="outlined"
      // sx={{
      //   backgroundImage: `url(${commentPng})`,
      //   height: '100%',
      //   display: 'flex',
      //   flexDirection: 'column',
      //   justifyContent: 'space-between',
      // }}
    >
      <BoldCardHeader
        title={row.createdByName}
        avatar={
          null ? (
            <ImageDisplay
              token={''}
              fallbackUrl={'avatar-fallback.jpg'}
              imageCSS={{ width: 32, height: 32, borderRadius: '50%', objectFit: 'cover' }}
            />
          ) : (
            <Avatar sx={{ bgcolor: (theme) => theme.palette.primary.main }}>
              {row.createdByName?.substring(0, 1)}
            </Avatar>
          )
        }
        subheader={row.createdByUsername}
      />
      <CardContent sx={{ mt: 0, pt: 0 }}>
        <Stack direction="column" spacing={1}>
          <Box>
            <Typography variant={'h5'}>{formatValue(row.created)}</Typography>
          </Box>
          <Box>{row.comment}</Box>
        </Stack>
      </CardContent>
      <CardActions sx={{ justifyContent: 'end' }}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<MdiIcon path="thumb-up" />}
          onClick={() => onLikeClick?.(row)}
        >
          {numberOfLikes || 0}
        </Button>
        <Button
          variant="contained"
          color="primary"
          startIcon={<MdiIcon path="thumb-down" />}
          onClick={() => onDislikeClick?.(row)}
        >
          {numberOfDislikes || 0}
        </Button>
      </CardActions>
    </Card>
  );
}
