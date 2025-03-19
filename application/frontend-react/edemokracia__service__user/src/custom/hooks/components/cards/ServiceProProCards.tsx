import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import { BundleContext } from '@pandino/pandino-api';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CardProps, Filter, FilterType, ToolbarElementProps } from '~/components-api';
import { CardsFilter, CardsFilterDefinition } from '~/components/widgets';

import { useL10N } from '~/l10n/l10n-context';
import { _StringOperation } from '~/services/data-api/common';

import {
  SERVICE_PRO_PRO_VIEW_EDIT_PROS_COMPONENT_CARDS_CONTAINER_CONFIG_HOOK_INTERFACE_KEY,
  ServiceProPro_View_EditProsComponentCardsContainerConfigHook,
} from '~/containers/Service/Pro/Pro_View_Edit/components/ServiceProPro_View_EditProsComponent/customization';
import { ServiceProStored } from '~/services/data-api/model/ServicePro';
import { mapCardsFiltersToFilters } from '~/utilities';
import { ArgumentCard } from '../../../components/ArgumentCard';

export function registerProProCards(context: BundleContext) {
  context.registerService<ServiceProPro_View_EditProsComponentCardsContainerConfigHook>(
    SERVICE_PRO_PRO_VIEW_EDIT_PROS_COMPONENT_CARDS_CONTAINER_CONFIG_HOOK_INTERFACE_KEY,
    ProsCardsComponentCardsContainerConfigHook,
  );
}

export const ProsCardsComponentCardsContainerConfigHook: ServiceProPro_View_EditProsComponentCardsContainerConfigHook =
  () => {
    return {
      // ToolbarElement: CustomToolbar,
      CardElement: ProCard,
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
            label: t('cardsFilter.Title', { defaultValue: 'Cím' }),
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

function ProCard(props: CardProps<ServiceProStored, any>) {
  const { row, columns, onRowClick } = props;
  return (
    <ArgumentCard
      con={false}
      row={row}
      onRowClick={onRowClick}
      numberOfLikes={row.upVotes}
      numberOfDislikes={row.downVotes}
      onDislikeClick={undefined}
      onLikeClick={undefined}
    />
  );
}
