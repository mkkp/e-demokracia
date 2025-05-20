import Grid from '@mui/material/Grid';
import type { BundleContext } from '@pandino/pandino-api';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useJudoNavigation } from '~/components';
import { type Filter, FilterType } from '~/components-api';
import type { ActionbarElementProps, CardProps, ToolbarElementProps } from '~/components-api/components/CardsContainer';
import { CardsFilter, type CardsFilterDefinition } from '~/components/widgets/CardsFilter';
import {
  SERVICE_USER_VOTE_DEFINITION_USER_VOTE_DEFINITION_VIEW_EDIT_ACTIVE_VOTE_DEFINITIONS_GLOBAL_COMPONENT_CARDS_CONTAINER_CONFIG_HOOK_INTERFACE_KEY,
  type ServiceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsGlobalComponentCardsContainerConfigHook,
} from '~/containers/Service/UserVoteDefinition/UserVoteDefinition_View_Edit/components/ServiceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsGlobalComponent/customization';
import { ServiceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsGlobalComponentRowActionDefinitions } from '~/containers/Service/UserVoteDefinition/UserVoteDefinition_View_Edit/components/ServiceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsGlobalComponent/types';
import { VoteDefinitionCard } from '~/custom/components/VoteDefinitionCard';
import { useViewData } from '~/hooks';
import { type ServiceVoteDefinitionStored } from '~/services/data-api/model/ServiceVoteDefinition';
import { mapCardsFiltersToFilters } from '~/utilities';

/**
 * XMIID: User/(esm/_XdUIUF5JEe6vsex_cZNQbQ)/TabularReferenceFieldRelationDefinedTable
 * Name: activeVoteDefinitionsGlobal
 *
 * Notes:
 * Don't forget to remove unused hooks, and related imports afterwards to reduce build time and bundle size!
 */
export function registerServiceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsGlobalComponentCardsContainerConfig(
  context: BundleContext,
) {
  context.registerService<ServiceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsGlobalComponentCardsContainerConfigHook>(
    SERVICE_USER_VOTE_DEFINITION_USER_VOTE_DEFINITION_VIEW_EDIT_ACTIVE_VOTE_DEFINITIONS_GLOBAL_COMPONENT_CARDS_CONTAINER_CONFIG_HOOK_INTERFACE_KEY,
    serviceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsGlobalComponentCardsContainerConfig,
  );
}

const serviceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsGlobalComponentCardsContainerConfig: ServiceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsGlobalComponentCardsContainerConfigHook =
  () => {
    // call other hooks here
    const { t } = useTranslation();
    const { navigate, back } = useJudoNavigation();
    const { getLatestViewData } = useViewData();

    return {
      // layout: 'horizontal',
      // showPagination: true,
      // ToolbarElement: ServiceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsGlobalComponentToolbar,
      // ActionbarElement: ServiceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsGlobalComponentActionBar,
      CardElement: ServiceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsGlobalComponentCard,
    };
  };

const ServiceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsGlobalComponentActionBar: FC<
  ActionbarElementProps<ServiceVoteDefinitionStored>
> = (props) => {
  const { actions, columns, isLoading, refresh, handleSortModelChange, sortModel } = props;

  return <div>{/* Implement your ActionBar here */}</div>;
};

const ServiceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsGlobalComponentToolbar: FC<
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

const ServiceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsGlobalComponentCard: FC<
  CardProps<
    ServiceVoteDefinitionStored,
    ServiceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsGlobalComponentRowActionDefinitions
  >
> = ({ row, columns, onRowClick, actions }) => {
  // We can call other hooks here

  // Every custom Card component MUST be wrapped in a `<Grid item` with the appropriate `sm`, `md`, etc... values so that
  // elements are handled properly on all devices.
  return (
    <Grid item xs={8} sm={12} md={6} lg={4} xl={4}>
      <VoteDefinitionCard
        row={row}
        onRowClick={onRowClick}
        revokeVote={actions.activeVoteDefinitionsGlobalRevokeVoteForVoteDefinitionAction}
        voteRatingAction={actions.activeVoteDefinitionsGlobalVoteRatingAction}
        voteSelectAnswerAction={actions.activeVoteDefinitionsGlobalVoteSelectAnswerAction}
        voteYesNoAction={actions.activeVoteDefinitionsGlobalVoteYesNoAction}
        voteYesNoAbstainAction={actions.activeVoteDefinitionsGlobalVoteYesNoAbstainAction}
      ></VoteDefinitionCard>
    </Grid>
  );
};
