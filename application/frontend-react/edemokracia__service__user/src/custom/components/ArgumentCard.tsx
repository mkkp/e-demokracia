import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { MdiIcon } from '~/components';
import { ImageDisplay } from '~/components/widgets/ImageDisplay';
import conPng from '~/custom/assets/images/debate-con.png';
import proPng from '~/custom/assets/images/debate-pro.png';
import { BoldCardHeader } from '~/custom/components/BoldCardHeader';

import { useL10N } from '~/l10n/l10n-context';
import { _StringOperation } from '~/services/data-api/common';
import { ServiceConStored } from '~/services/data-api/model/ServiceCon';
import { ServiceProStored } from '~/services/data-api/model/ServicePro';

interface ArgumentCardProps {
  con: boolean;
  row: ServiceConStored | ServiceProStored;
  onRowClick: ((row: ServiceConStored | ServiceProStored) => void) | undefined;
  numberOfLikes: number | null | undefined;
  numberOfDislikes: number | null | undefined;
  onLikeClick: ((row: ServiceConStored | ServiceProStored) => void) | undefined;
  onDislikeClick: ((row: ServiceConStored | ServiceProStored) => void) | undefined;
}

export function ArgumentCard(props: ArgumentCardProps) {
  const { con, row, onRowClick, numberOfLikes, numberOfDislikes, onLikeClick, onDislikeClick } = props;
  const { t } = useTranslation();
  const { locale } = useL10N();

  const formatValue = useCallback((value: any) => {
    if (value instanceof Date) {
      return new Intl.DateTimeFormat(locale, {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      }).format(value);
    }
    if (value === undefined || value === null) {
      return '';
    }
    return value.toString();
  }, []);

  return (
    <Grid item sm={12} md={12} lg={12} xl={12}>
      <Card
        variant="outlined"
        sx={{
          backgroundImage: `url(${con ? conPng : proPng})`,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
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
          subheader={row.createdByName}
        />
        <CardContent sx={{ mt: 0, pt: 0 }}>
          <Stack direction="column" spacing={1}>
            <Box>
              <Typography variant={'h5'}>{row.title}</Typography>
            </Box>
            <Box>{row.description}</Box>
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
          <Button variant={'text'} size="small" onClick={() => onRowClick?.(row)}>
            Megtekintés
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
