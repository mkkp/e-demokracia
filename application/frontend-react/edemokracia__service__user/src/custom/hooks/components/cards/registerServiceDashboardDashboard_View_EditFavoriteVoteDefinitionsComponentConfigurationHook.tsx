import Grid from '@mui/material/Grid';
import type { BundleContext } from '@pandino/pandino-api';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useJudoNavigation } from '~/components';
import { type Filter, FilterType } from '~/components-api';
import type { ActionbarElementProps, CardProps, ToolbarElementProps } from '~/components-api/components/CardsContainer';
import { CardsFilter, type CardsFilterDefinition } from '~/components/widgets/CardsFilter';
import {
  SERVICE_DASHBOARD_DASHBOARD_VIEW_EDIT_FAVORITE_VOTE_DEFINITIONS_COMPONENT_CARDS_CONTAINER_CONFIG_HOOK_INTERFACE_KEY,
  type ServiceDashboardDashboard_View_EditFavoriteVoteDefinitionsComponentCardsContainerConfigHook,
} from '~/containers/Service/Dashboard/Dashboard_View_Edit/components/ServiceDashboardDashboard_View_EditFavoriteVoteDefinitionsComponent/customization';
import { type ServiceDashboardDashboard_View_EditFavoriteVoteDefinitionsComponentRowActionDefinitions } from '~/containers/Service/Dashboard/Dashboard_View_Edit/components/ServiceDashboardDashboard_View_EditFavoriteVoteDefinitionsComponent/types';
import { VoteDefinitionCard } from '~/custom/components/VoteDefinitionCard';
import { useViewData } from '~/hooks';
import { type ServiceVoteDefinitionStored } from '~/services/data-api/model/ServiceVoteDefinition';
import { mapCardsFiltersToFilters } from '~/utilities';

/**
 * XMIID: User/(esm/_vp60sGBWEe6M1JBD8stPIg)/TabularReferenceFieldRelationDefinedTable
 * Name: favoriteVoteDefinitions
 *
 * Notes:
 * Don't forget to remove unused hooks, and related imports afterwards to reduce build time and bundle size!
 */
export function registerServiceDashboardDashboard_View_EditFavoriteVoteDefinitionsComponentCardsContainerConfig(
  context: BundleContext,
) {
  context.registerService<ServiceDashboardDashboard_View_EditFavoriteVoteDefinitionsComponentCardsContainerConfigHook>(
    SERVICE_DASHBOARD_DASHBOARD_VIEW_EDIT_FAVORITE_VOTE_DEFINITIONS_COMPONENT_CARDS_CONTAINER_CONFIG_HOOK_INTERFACE_KEY,
    serviceDashboardDashboard_View_EditFavoriteVoteDefinitionsComponentCardsContainerConfig,
  );
}

const serviceDashboardDashboard_View_EditFavoriteVoteDefinitionsComponentCardsContainerConfig: ServiceDashboardDashboard_View_EditFavoriteVoteDefinitionsComponentCardsContainerConfigHook =
  () => {
    // call other hooks here
    const { t } = useTranslation();
    const { navigate, back } = useJudoNavigation();
    const { getLatestViewData } = useViewData();

    return {
      // layout: 'horizontal',
      // showPagination: true,
      // ToolbarElement: ServiceDashboardDashboard_View_EditFavoriteVoteDefinitionsComponentToolbar,
      // ActionbarElement: ServiceDashboardDashboard_View_EditFavoriteVoteDefinitionsComponentActionBar,
      CardElement: ServiceDashboardDashboard_View_EditFavoriteVoteDefinitionsComponentCard,
    };
  };

const ServiceDashboardDashboard_View_EditFavoriteVoteDefinitionsComponentActionBar: FC<
  ActionbarElementProps<ServiceVoteDefinitionStored>
> = (props) => {
  const { actions, columns, isLoading, refresh, handleSortModelChange, sortModel } = props;

  return <div>{/* Implement your ActionBar here */}</div>;
};

const ServiceDashboardDashboard_View_EditFavoriteVoteDefinitionsComponentToolbar: FC<
  ToolbarElementProps<ServiceVoteDefinitionStored>
> = ({ handleFiltersChange }: ToolbarElementProps<ServiceVoteDefinitionStored>) => {
  // We can call other hooks here
  const filterDefs: CardsFilterDefinition<ServiceVoteDefinitionStored>[] = [];

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

const ServiceDashboardDashboard_View_EditFavoriteVoteDefinitionsComponentCard: FC<
  CardProps<
    ServiceVoteDefinitionStored,
    ServiceDashboardDashboard_View_EditFavoriteVoteDefinitionsComponentRowActionDefinitions
  >
> = ({ row, columns, onRowClick, actions }) => {
  // We can call other hooks here

  // Every custom Card component MUST be wrapped in a `<Grid item` with the appropriate `sm`, `md`, etc... values so that
  // elements are handled properly on all devices.
  return (
    <Grid item sm={12} md={6} lg={4} xl={4}>
      <VoteDefinitionCard
        row={row}
        onRowClick={onRowClick}
        revokeVote={undefined}
        voteRatingAction={actions.favoriteVoteDefinitionsVoteRatingAction}
        voteSelectAnswerAction={actions.favoriteVoteDefinitionsVoteSelectAnswerAction}
        voteYesNoAction={actions.favoriteVoteDefinitionsVoteYesNoAction}
        voteYesNoAbstainAction={actions.favoriteVoteDefinitionsVoteYesNoAbstainAction}
      ></VoteDefinitionCard>
    </Grid>
  );
};
