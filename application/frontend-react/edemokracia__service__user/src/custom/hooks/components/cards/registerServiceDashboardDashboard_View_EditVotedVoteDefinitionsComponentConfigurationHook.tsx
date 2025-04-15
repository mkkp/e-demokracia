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
  SERVICE_DASHBOARD_DASHBOARD_VIEW_EDIT_VOTED_VOTE_DEFINITIONS_COMPONENT_CARDS_CONTAINER_CONFIG_HOOK_INTERFACE_KEY,
  type ServiceDashboardDashboard_View_EditVotedVoteDefinitionsComponentCardsContainerConfigHook,
} from '~/containers/Service/Dashboard/Dashboard_View_Edit/components/ServiceDashboardDashboard_View_EditVotedVoteDefinitionsComponent/customization';
import { type ServiceDashboardDashboard_View_EditVotedVoteDefinitionsComponentRowActionDefinitions } from '~/containers/Service/Dashboard/Dashboard_View_Edit/components/ServiceDashboardDashboard_View_EditVotedVoteDefinitionsComponent/types';
import { VoteDefinitionCard } from '~/custom/components/VoteDefinitionCard';
import { useViewData } from '~/hooks';
import { type ServiceVoteDefinitionStored } from '~/services/data-api/model/ServiceVoteDefinition';
import { mapCardsFiltersToFilters } from '~/utilities';

/**
 * XMIID: User/(esm/_4zT40BcfEfC6AsuNlfsw6w)/TabularReferenceFieldRelationDefinedTable
 * Name: votedVoteDefinitions
 *
 * Notes:
 * Don't forget to remove unused hooks, and related imports afterwards to reduce build time and bundle size!
 */
export function registerServiceDashboardDashboard_View_EditVotedVoteDefinitionsComponentCardsContainerConfig(
  context: BundleContext,
) {
  context.registerService<ServiceDashboardDashboard_View_EditVotedVoteDefinitionsComponentCardsContainerConfigHook>(
    SERVICE_DASHBOARD_DASHBOARD_VIEW_EDIT_VOTED_VOTE_DEFINITIONS_COMPONENT_CARDS_CONTAINER_CONFIG_HOOK_INTERFACE_KEY,
    serviceDashboardDashboard_View_EditVotedVoteDefinitionsComponentCardsContainerConfig,
  );
}

const serviceDashboardDashboard_View_EditVotedVoteDefinitionsComponentCardsContainerConfig: ServiceDashboardDashboard_View_EditVotedVoteDefinitionsComponentCardsContainerConfigHook =
  () => {
    // call other hooks here
    const { t } = useTranslation();
    const { navigate, back } = useJudoNavigation();
    const { getLatestViewData } = useViewData();

    return {
      // layout: 'horizontal',
      // showPagination: true,
      // ToolbarElement: ServiceDashboardDashboard_View_EditVotedVoteDefinitionsComponentToolbar,
      // ActionbarElement: ServiceDashboardDashboard_View_EditVotedVoteDefinitionsComponentActionBar,
      CardElement: ServiceDashboardDashboard_View_EditVotedVoteDefinitionsComponentCard,
    };
  };

const ServiceDashboardDashboard_View_EditVotedVoteDefinitionsComponentActionBar: FC<
  ActionbarElementProps<ServiceVoteDefinitionStored>
> = (props) => {
  const { actions, columns, isLoading, refresh, handleSortModelChange, sortModel } = props;

  return <div>{/* Implement your ActionBar here */}</div>;
};

const ServiceDashboardDashboard_View_EditVotedVoteDefinitionsComponentToolbar: FC<
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

const ServiceDashboardDashboard_View_EditVotedVoteDefinitionsComponentCard: FC<
  CardProps<
    ServiceVoteDefinitionStored,
    ServiceDashboardDashboard_View_EditVotedVoteDefinitionsComponentRowActionDefinitions
  >
> = ({ row, columns, onRowClick, actions }) => {
  // We can call other hooks here

  // Every custom Card component MUST be wrapped in a `<Grid item` with the appropriate `sm`, `md`, etc... values so that
  // elements are handled properly on all devices.
  return (
    <Grid item sm={12} md={12} lg={6} xl={6}>
      <VoteDefinitionCard
        row={row}
        onRowClick={onRowClick}
        revokeVote={actions.votedVoteDefinitionsRevokeVoteForVoteDefinitionAction}
        voteRatingAction={actions.votedVoteDefinitionsVoteRatingAction}
        voteSelectAnswerAction={actions.votedVoteDefinitionsVoteSelectAnswerAction}
        voteYesNoAction={actions.votedVoteDefinitionsVoteYesNoAction}
        voteYesNoAbstainAction={actions.votedVoteDefinitionsVoteYesNoAbstainAction}
      ></VoteDefinitionCard>
    </Grid>
  );
};
