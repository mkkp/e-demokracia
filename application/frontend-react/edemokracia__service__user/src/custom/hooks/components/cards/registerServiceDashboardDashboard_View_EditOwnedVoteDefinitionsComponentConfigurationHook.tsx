import Grid from '@mui/material/Grid';
import type { BundleContext } from '@pandino/pandino-api';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useJudoNavigation } from '~/components';
import { type Filter, FilterType } from '~/components-api';
import type { ActionbarElementProps, CardProps, ToolbarElementProps } from '~/components-api/components/CardsContainer';
import { CardsFilter, type CardsFilterDefinition } from '~/components/widgets/CardsFilter';
import {
  SERVICE_DASHBOARD_DASHBOARD_VIEW_EDIT_OWNED_VOTE_DEFINITIONS_COMPONENT_CARDS_CONTAINER_CONFIG_HOOK_INTERFACE_KEY,
  type ServiceDashboardDashboard_View_EditOwnedVoteDefinitionsComponentCardsContainerConfigHook,
} from '~/containers/Service/Dashboard/Dashboard_View_Edit/components/ServiceDashboardDashboard_View_EditOwnedVoteDefinitionsComponent/customization';
import { ServiceDashboardDashboard_View_EditOwnedVoteDefinitionsComponentRowActionDefinitions } from '~/containers/Service/Dashboard/Dashboard_View_Edit/components/ServiceDashboardDashboard_View_EditOwnedVoteDefinitionsComponent/types';
import { VoteDefinitionCard } from '~/custom/components/VoteDefinitionCard';
import { useViewData } from '~/hooks';
import { type ServiceVoteDefinitionStored } from '~/services/data-api/model/ServiceVoteDefinition';
import { mapCardsFiltersToFilters } from '~/utilities';

/**
 * XMIID: User/(esm/_ZesvsGBWEe6M1JBD8stPIg)/TabularReferenceFieldRelationDefinedTable
 * Name: ownedVoteDefinitions
 *
 * Notes:
 * Don't forget to remove unused hooks, and related imports afterwards to reduce build time and bundle size!
 */
export function registerServiceDashboardDashboard_View_EditOwnedVoteDefinitionsComponentCardsContainerConfig(
  context: BundleContext,
) {
  context.registerService<ServiceDashboardDashboard_View_EditOwnedVoteDefinitionsComponentCardsContainerConfigHook>(
    SERVICE_DASHBOARD_DASHBOARD_VIEW_EDIT_OWNED_VOTE_DEFINITIONS_COMPONENT_CARDS_CONTAINER_CONFIG_HOOK_INTERFACE_KEY,
    serviceDashboardDashboard_View_EditOwnedVoteDefinitionsComponentCardsContainerConfig,
  );
}

const serviceDashboardDashboard_View_EditOwnedVoteDefinitionsComponentCardsContainerConfig: ServiceDashboardDashboard_View_EditOwnedVoteDefinitionsComponentCardsContainerConfigHook =
  () => {
    // call other hooks here
    const { t } = useTranslation();
    const { navigate, back } = useJudoNavigation();
    const { getLatestViewData } = useViewData();

    return {
      // layout: 'horizontal',
      // showPagination: true,
      // ToolbarElement: ServiceDashboardDashboard_View_EditOwnedVoteDefinitionsComponentToolbar,
      // ActionbarElement: ServiceDashboardDashboard_View_EditOwnedVoteDefinitionsComponentActionBar,
      CardElement: ServiceDashboardDashboard_View_EditOwnedVoteDefinitionsComponentCard,
    };
  };

const ServiceDashboardDashboard_View_EditOwnedVoteDefinitionsComponentActionBar: FC<
  ActionbarElementProps<ServiceVoteDefinitionStored>
> = (props) => {
  const { actions, columns, isLoading, refresh, handleSortModelChange, sortModel } = props;

  return <div>{/* Implement your ActionBar here */}</div>;
};

const ServiceDashboardDashboard_View_EditOwnedVoteDefinitionsComponentToolbar: FC<
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

const ServiceDashboardDashboard_View_EditOwnedVoteDefinitionsComponentCard: FC<
  CardProps<
    ServiceVoteDefinitionStored,
    ServiceDashboardDashboard_View_EditOwnedVoteDefinitionsComponentRowActionDefinitions
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
        voteRatingAction={actions.ownedVoteDefinitionsVoteRatingAction}
        voteSelectAnswerAction={actions.ownedVoteDefinitionsVoteSelectAnswerAction}
        voteYesNoAction={actions.ownedVoteDefinitionsVoteYesNoAction}
        voteYesNoAbstainAction={actions.ownedVoteDefinitionsVoteYesNoAbstainAction}
      ></VoteDefinitionCard>
    </Grid>
  );
};
