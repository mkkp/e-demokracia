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
import { ServiceConStored } from '~/services/data-api/model/ServiceCon';

import {
  SERVICE_CON_CON_VIEW_EDIT_CONS_COMPONENT_CARDS_CONTAINER_CONFIG_HOOK_INTERFACE_KEY,
  ServiceConCon_View_EditConsComponentCardsContainerConfigHook,
} from '~/containers/Service/Con/Con_View_Edit/components/ServiceConCon_View_EditConsComponent/customization';
import { ServiceConCon_View_EditConsComponentRowActionDefinitions } from '~/containers/Service/Con/Con_View_Edit/components/ServiceConCon_View_EditConsComponent/types';
import { mapCardsFiltersToFilters } from '~/utilities';
import { ArgumentCard } from '../../../components/ArgumentCard';

export function registerConConCards(context: BundleContext) {
  context.registerService<ServiceConCon_View_EditConsComponentCardsContainerConfigHook>(
    SERVICE_CON_CON_VIEW_EDIT_CONS_COMPONENT_CARDS_CONTAINER_CONFIG_HOOK_INTERFACE_KEY,
    ConsCardsComponentCardsContainerConfigHook,
  );
}

export const ConsCardsComponentCardsContainerConfigHook: ServiceConCon_View_EditConsComponentCardsContainerConfigHook =
  () => {
    return {
      // ToolbarElement: CustomToolbar,
      CardElement: ConCard,
    };
  };

function CustomToolbar({ handleFiltersChange }: ToolbarElementProps<ServiceConStored>) {
  const { t } = useTranslation();
  const { locale } = useL10N();

  const [filterDefs, setFilterDefs] = useState<CardsFilterDefinition<ServiceConStored>[]>([]);

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

function ConCard(props: CardProps<ServiceConStored, ServiceConCon_View_EditConsComponentRowActionDefinitions>) {
  const { row, columns, onRowClick, actions } = props;
  return (
    <ArgumentCard
      con={true}
      row={row}
      onRowClick={onRowClick}
      numberOfLikes={row.upVotes}
      numberOfDislikes={row.downVotes}
      onDislikeClick={() => actions.consVoteDownForConAction?.(row)}
      onLikeClick={() => actions.consVoteUpForConAction?.(row)}
    />
  );
}
