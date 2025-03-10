import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { BundleContext } from '@pandino/pandino-api';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CardProps, Filter, FilterType, ToolbarElementProps } from '~/components-api';
import { CardsFilter, CardsFilterDefinition } from '~/components/widgets';
import { ImageDisplay } from '~/components/widgets/ImageDisplay';
import {
  SERVICE_ISSUE_ISSUE_VIEW_EDIT_PROS_COMPONENT_CARDS_CONTAINER_CONFIG_HOOK_INTERFACE_KEY,
  ServiceIssueIssue_View_EditProsComponentCardsContainerConfigHook,
} from '~/containers/Service/Issue/Issue_View_Edit/components/ServiceIssueIssue_View_EditProsComponent/customization';
import { BoldCardHeader } from '~/custom/components/BoldCardHeader';
import { useL10N } from '~/l10n/l10n-context';
import { _StringOperation } from '~/services/data-api/common';
import { ServiceProStored } from '~/services/data-api/model/ServicePro';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';

import { mapCardsFiltersToFilters } from '~/utilities';
import { argumentCard } from '../components/ArgumentCard';

export function registerServiceIssueProCards(context: BundleContext) {
  context.registerService<ServiceIssueIssue_View_EditProsComponentCardsContainerConfigHook>(
    SERVICE_ISSUE_ISSUE_VIEW_EDIT_PROS_COMPONENT_CARDS_CONTAINER_CONFIG_HOOK_INTERFACE_KEY,
    ProsCardsComponentCardsContainerConfigHook,
  );
}

export const ProsCardsComponentCardsContainerConfigHook: ServiceIssueIssue_View_EditProsComponentCardsContainerConfigHook =
  () => {
    return {
      //      ToolbarElement: CustomToolbar,
      CardElement: proCard,
    };
  };

function CustomToolbar({ handleFiltersChange }: ToolbarElementProps<ServiceProStored>) {
  const { t } = useTranslation();
  const { locale } = useL10N();

  const [filterDefs, setFilterDefs] = useState<CardsFilterDefinition<ServiceProStored>[]>([]);

  const collator = useMemo(() => new Intl.Collator([], { numeric: true }), []);

  useEffect(() => {
    (async () => {
      try {
        setFilterDefs([
          {
            type: FilterType.string,
            inputType: 'text',
            operator: _StringOperation.like,
            field: 'title',
            label: t('authorProductsCardsFilter.Title', { defaultValue: 'Cím' }),
            allowSearch: true,
            searchLabel: 'Keresés címben',
          },
        ]);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  const onFiltersChanged = useCallback(
    (values: Record<string, any>) => {
      const newFilters: Filter[] = mapCardsFiltersToFilters(filterDefs, values);
      handleFiltersChange(newFilters);
    },
    [filterDefs, setFilterDefs, handleFiltersChange],
  );

  return (
    <Grid container>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <CardsFilter filterDefinitions={filterDefs} onFiltersChanged={onFiltersChanged} />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

function proCard({ row, columns, onRowClick }: CardProps<ServiceProStored>) {
  return argumentCard(false, row, onRowClick, row.upVotes, row.downVotes, undefined, undefined);
}

function CustomCard({ row, columns, onRowClick }: CardProps<ServiceProStored>) {
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
    <Grid item sm={12} md={6} lg={4} xl={4}>
      <Card
        variant="outlined"
        sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
      >
        {/* <BoldCardHeader
          title={row.authorName}
          avatar={
            row.authorPicture ? (
              <ImageDisplay
                token={row.authorPicture}
                fallbackUrl={'avatar-fallback.jpg'}
                imageCSS={{ width: 32, height: 32, borderRadius: '50%', objectFit: 'cover' }}
              />
            ) : (
              <Avatar sx={{ bgcolor: (theme) => theme.palette.primary.main }}>{row.authorName?.substring(0, 1)}</Avatar>
            )
          }
          subheader={row.institutionName}
          // subheader={formatValue(row.createdAt)}
        /> */}
        <CardContent sx={{ mt: 0, pt: 0 }}>
          <Stack direction="column" spacing={1}>
            <Box>
              <Typography variant={'h5'}>{row.title}</Typography>
            </Box>
            {/* <Box>{row.goal}</Box>
            <Box>
              <Typography variant={'body1'} sx={{ fontWeight: 'bold' }}>
                Tantárgy:
              </Typography>
              <Stack direction="row" spacing={1}>
                {row.curriculum?.map((c) => (
                  <Chip key={c.name} label={c.name} variant="outlined" />
                ))}
              </Stack>
            </Box>
            <Box>
              <Typography variant={'body1'} sx={{ fontWeight: 'bold' }}>
                Célcsoport:
              </Typography>
              <Stack direction="row" spacing={1}>
                {row.audience?.map((c) => (
                  <Chip key={c.name} label={c.name} variant="outlined" />
                ))}
              </Stack>
            </Box>
            <Box sx={{ mt: 5 }}>
              <Typography sx={{ color: 'text.secondary', fontSize: 14 }}>Verzió: {row.version}</Typography>
            </Box> */}
          </Stack>
        </CardContent>
        <CardActions sx={{ justifyContent: 'end' }}>
          <Button variant={'text'} size="small" onClick={() => onRowClick?.(row)}>
            {t('argument.card.view', { defaultValue: 'View' })}
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
