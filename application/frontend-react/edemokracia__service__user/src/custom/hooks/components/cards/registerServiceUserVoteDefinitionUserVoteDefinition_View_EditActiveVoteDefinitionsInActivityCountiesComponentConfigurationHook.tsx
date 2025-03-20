import Grid from '@mui/material/Grid';
import type { BundleContext } from '@pandino/pandino-api';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useJudoNavigation } from '~/components';
import { type Filter, FilterType } from '~/components-api';
import type { ActionbarElementProps, CardProps, ToolbarElementProps } from '~/components-api/components/CardsContainer';
import { CardsFilter, type CardsFilterDefinition } from '~/components/widgets/CardsFilter';
import {
  SERVICE_USER_VOTE_DEFINITION_USER_VOTE_DEFINITION_VIEW_EDIT_ACTIVE_VOTE_DEFINITIONS_IN_ACTIVITY_COUNTIES_COMPONENT_CARDS_CONTAINER_CONFIG_HOOK_INTERFACE_KEY,
  type ServiceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsInActivityCountiesComponentCardsContainerConfigHook,
} from '~/containers/Service/UserVoteDefinition/UserVoteDefinition_View_Edit/components/ServiceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsInActivityCountiesComponent/customization';
import { ServiceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsInActivityCountiesComponentRowActionDefinitions } from '~/containers/Service/UserVoteDefinition/UserVoteDefinition_View_Edit/components/ServiceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsInActivityCountiesComponent/types';
import { VoteDefinitionCard } from '~/custom/components/VoteDefinitionCard';
import { useViewData } from '~/hooks';
import { type ServiceVoteDefinitionStored } from '~/services/data-api/model/ServiceVoteDefinition';
import { mapCardsFiltersToFilters } from '~/utilities';

/**
 * XMIID: User/(esm/_SV-JIF5LEe6vsex_cZNQbQ)/TabularReferenceFieldRelationDefinedTable
 * Name: activeVoteDefinitionsInActivityCounties
 *
 * Notes:
 * Don't forget to remove unused hooks, and related imports afterwards to reduce build time and bundle size!
 */
export function registerServiceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsInActivityCountiesComponentCardsContainerConfig(
  context: BundleContext,
) {
  context.registerService<ServiceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsInActivityCountiesComponentCardsContainerConfigHook>(
    SERVICE_USER_VOTE_DEFINITION_USER_VOTE_DEFINITION_VIEW_EDIT_ACTIVE_VOTE_DEFINITIONS_IN_ACTIVITY_COUNTIES_COMPONENT_CARDS_CONTAINER_CONFIG_HOOK_INTERFACE_KEY,
    serviceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsInActivityCountiesComponentCardsContainerConfig,
  );
}

const serviceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsInActivityCountiesComponentCardsContainerConfig: ServiceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsInActivityCountiesComponentCardsContainerConfigHook =
  () => {
    // call other hooks here
    const { t } = useTranslation();
    const { navigate, back } = useJudoNavigation();
    const { getLatestViewData } = useViewData();

    return {
      // layout: 'horizontal',
      // showPagination: true,
      // ToolbarElement: ServiceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsInActivityCountiesComponentToolbar,
      // ActionbarElement: ServiceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsInActivityCountiesComponentActionBar,
      CardElement:
        ServiceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsInActivityCountiesComponentCard,
    };
  };

const ServiceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsInActivityCountiesComponentActionBar: FC<
  ActionbarElementProps<ServiceVoteDefinitionStored>
> = (props) => {
  const { actions, columns, isLoading, refresh, handleSortModelChange, sortModel } = props;

  return <div>{/* Implement your ActionBar here */}</div>;
};

const ServiceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsInActivityCountiesComponentToolbar: FC<
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

const ServiceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsInActivityCountiesComponentCard: FC<
  CardProps<
    ServiceVoteDefinitionStored,
    ServiceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsInActivityCountiesComponentRowActionDefinitions
  >
> = ({ row, columns, onRowClick, actions }) => {
  // We can call other hooks here

  // Every custom Card component MUST be wrapped in a `<Grid item` with the appropriate `sm`, `md`, etc... values so that
  // elements are handled properly on all devices.
  return (
    <Grid item sm={12} md={6} lg={4} xl={4}>
      <VoteDefinitionCard row={row} onRowClick={onRowClick}></VoteDefinitionCard>
    </Grid>
  );
};
