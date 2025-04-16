import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import type { BundleContext } from '@pandino/pandino-api';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useJudoNavigation } from '~/components';
import { type Filter, FilterType } from '~/components-api';
import type { ActionbarElementProps, CardProps, ToolbarElementProps } from '~/components-api/components/CardsContainer';
import { CardsFilter, type CardsFilterDefinition } from '~/components/widgets/CardsFilter';
import {
  SERVICE_PRO_PRO_VIEW_EDIT_CONS_COMPONENT_CARDS_CONTAINER_CONFIG_HOOK_INTERFACE_KEY,
  type ServiceProPro_View_EditConsComponentCardsContainerConfigHook,
} from '~/containers/Service/Pro/Pro_View_Edit/components/ServiceProPro_View_EditConsComponent/customization';
import { type ServiceProPro_View_EditConsComponentRowActionDefinitions } from '~/containers/Service/Pro/Pro_View_Edit/components/ServiceProPro_View_EditConsComponent/types';
import { ArgumentCard } from '~/custom/components/ArgumentCard';
import { useViewData } from '~/hooks';
import { type ServiceConStored } from '~/services/data-api/model/ServiceCon';
import { mapCardsFiltersToFilters } from '~/utilities';

/**
 * XMIID: User/(esm/_KRUbPXjvEe6cB8og8p0UuQ)/TabularReferenceFieldRelationDefinedTable
 * Name: cons
 *
 * Notes:
 * Don't forget to remove unused hooks, and related imports afterwards to reduce build time and bundle size!
 */
export function registerServiceProPro_View_EditConsComponentCardsContainerConfig(context: BundleContext) {
  context.registerService<ServiceProPro_View_EditConsComponentCardsContainerConfigHook>(
    SERVICE_PRO_PRO_VIEW_EDIT_CONS_COMPONENT_CARDS_CONTAINER_CONFIG_HOOK_INTERFACE_KEY,
    serviceProPro_View_EditConsComponentCardsContainerConfig,
  );
}

const serviceProPro_View_EditConsComponentCardsContainerConfig: ServiceProPro_View_EditConsComponentCardsContainerConfigHook =
  () => {
    // call other hooks here
    const { t } = useTranslation();
    const { navigate, back } = useJudoNavigation();
    const { getLatestViewData } = useViewData();

    return {
      // layout: 'horizontal',
      // showPagination: true,
      // ToolbarElement: ServiceProPro_View_EditConsComponentToolbar,
      // ActionbarElement: ServiceProPro_View_EditConsComponentActionBar,
      CardElement: ServiceProPro_View_EditConsComponentCard,
      showPagination: false,
    };
  };

const ServiceProPro_View_EditConsComponentActionBar: FC<ActionbarElementProps<ServiceConStored>> = (props) => {
  const { actions, columns, isLoading, refresh, handleSortModelChange, sortModel } = props;

  return <div>{/* Implement your ActionBar here */}</div>;
};

const ServiceProPro_View_EditConsComponentToolbar: FC<ToolbarElementProps<ServiceConStored>> = ({
  handleFiltersChange,
}: ToolbarElementProps<ServiceConStored>) => {
  // We can call other hooks here
  const filterDefs: CardsFilterDefinition<ServiceConStored>[] = [];

  // We are using a built in component CardsFilter here, but we can implement anything
  return (
    <CardsFilter
      filterDefinitions={filterDefs}
      onFiltersChanged={(values: Record<string, any>) => {
        const newFilters: Filter[] = mapCardsFiltersToFilters(filterDefs, values);
        handleFiltersChange(newFilters);
      }}
    />
  );
};

const ServiceProPro_View_EditConsComponentCard: FC<
  CardProps<ServiceConStored, ServiceProPro_View_EditConsComponentRowActionDefinitions>
> = ({ row, columns, onRowClick, actions }) => {
  // We can call other hooks here

  // Every custom Card component MUST be wrapped in a `<Grid item` with the appropriate `sm`, `md`, etc... values so that
  // elements are handled properly on all devices.
  return (
    <Grid item sm={12} md={6} lg={4} xl={4} sx={{ width: 1 }}>
      <ArgumentCard
        con={true}
        row={row}
        onRowClick={onRowClick}
        numberOfLikes={row.upVotes}
        numberOfDislikes={row.downVotes}
        onDislikeClick={() => actions.consVoteDownForConAction?.(row)}
        onLikeClick={() => actions.consVoteUpForConAction?.(row)}
      />
    </Grid>
  );
};
