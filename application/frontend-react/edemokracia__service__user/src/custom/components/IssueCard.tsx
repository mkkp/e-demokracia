import { Icon, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MdiIcon } from '~/components';

import { Ribbon, RibbonContainer } from 'react-ribbons';
import { useL10N } from '~/l10n/l10n-context';
import { _StringOperation } from '~/services/data-api/common';
import { IssueScope } from '~/services/data-api/model/IssueScope';
import { IssueStatus } from '~/services/data-api/model/IssueStatus';
import { ServiceIssueStored } from '~/services/data-api/model/ServiceIssue';

interface IssueCardProps {
  row: ServiceIssueStored;
  onRowClick: ((row: ServiceIssueStored) => void) | undefined;
}

export function IssueCard(props: IssueCardProps) {
  const { row, onRowClick } = props;
  const { t } = useTranslation();
  const { locale } = useL10N();
  const theme = useTheme();

  var iconPath = 'earth';
  var title = 'Országos';
  if (row.scope == IssueScope.COUNTY) {
    iconPath = 'castle';
    title = row.countyRepresentation || '';
  } else if (row.scope == IssueScope.CITY) {
    iconPath = 'city';
    title = row.cityRepresentation || '';
  } else if (row.scope == IssueScope.DISTRICT) {
    iconPath = 'home-city';
    title = (row.cityRepresentation || '') + ' - ' + (row.districtRepresentation || '');
  }

  var ribbonBg = theme.palette.info.light;
  var ribbonColor = theme.palette.secondary.dark;
  var ribbonText = t('enumerations.IssueStatus.' + row.status?.toString());

  if (row.status == IssueStatus.CREATED) {
    ribbonBg = theme.palette.success.light;
    ribbonColor = theme.palette.secondary.dark;
  } else if (row.status == IssueStatus.ACTIVE) {
    ribbonBg = theme.palette.primary.light;
    ribbonColor = theme.palette.secondary.dark;
  } else if (row.status == IssueStatus.CLOSED) {
    ribbonBg = theme.palette.secondary.light;
    ribbonColor = theme.palette.primary.dark;
  } else if (row.status == IssueStatus.VOTING) {
    ribbonBg = theme.palette.info.main;
    ribbonColor = theme.palette.primary.dark;
  }

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
    <Card
      sx={{
        height: '100%',
        position: 'relative',
        // borderRadius: 4,
        overflow: 'hidden',
        bgcolor: theme.palette.grey[600],
        boxShadow: theme.shadows[6],
      }}
    >
      <Ribbon side="right" type="corner" size="large" backgroundColor={ribbonBg} withStripes={false}>
        <Typography
          variant="overline"
          component="div"
          sx={{
            letterSpacing: 0,
            fontWeight: 500,
            color: { ribbonColor },
          }}
        >
          {ribbonText}
        </Typography>
      </Ribbon>

      {/* Background Pattern with Icons */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 0.4,
          pointerEvents: 'none',
        }}
      >
        <MdiIcon
          path={iconPath}
          sx={{
            mr: 1,
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%) scale(4)',
          }}
        />

        {/* <Icon
          path={mdiCity}
          size={4}
          color={theme.palette.common.white}
          aria-hidden="true"
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%) scale(4)'
          }}
        /> */}
      </Box>

      {/* Main Content */}
      <CardContent
        sx={{
          position: 'relative',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          color: 'common.white',
          p: 4,
          zIndex: 1,
          opacity: 0.9,
          background: `linear-gradient(180deg, transparent 0%,${theme.palette.primary.light} 90%)`,
        }}
      >
        {/* Weather Icon */}
        {/* <Box sx={{ 
          position: 'absolute',
          top: 16,
          right: 16,
          bgcolor: 'rgba(255,255,255,0.2)',
          borderRadius: '50%',
          p: 1
        }}>
          <MdiIcon path="alert-circle-outline" sx={{ mr: 1 }} />
          <Icon
            path={mdiWeatherNight}
            size={1.2}
            color={theme.palette.common.white}
            aria-label="Night weather"
          />
        </Box> */}

        {/* Text Content */}
        <Typography
          variant="overline"
          component="div"
          sx={{
            letterSpacing: 2,
            fontWeight: 700,
            color: 'secondary.light',
          }}
        >
          {title}
        </Typography>

        <Typography
          variant="h5"
          component="div"
          sx={{
            fontWeight: 900,
            lineHeight: 1.2,
            my: 1.5,
          }}
        >
          {row.title}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            lineHeight: 1.4,
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {row.description}
        </Typography>
        <CardActions sx={{ justifyContent: 'end' }}>
          <Button
            sx={{}}
            variant={'contained'}
            size="small"
            startIcon={<MdiIcon path="eye" />}
            onClick={() => {
              onRowClick?.(row);
            }}
          >
            Megtekintés
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}
