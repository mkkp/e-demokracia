import Grid from '@mui/material/Grid';
import type { BundleContext } from '@pandino/pandino-api';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useJudoNavigation } from '~/components';
import { type Filter, FilterType } from '~/components-api';
import type { ActionbarElementProps, CardProps, ToolbarElementProps } from '~/components-api/components/CardsContainer';
import { CardsFilter, type CardsFilterDefinition } from '~/components/widgets/CardsFilter';
import {
  SERVICE_USER_ISSUES_USER_ISSUES_VIEW_EDIT_ACTIVE_ISSUES_IN_ACTIVITY_COUNTIES_COMPONENT_CARDS_CONTAINER_CONFIG_HOOK_INTERFACE_KEY,
  type ServiceUserIssuesUserIssues_View_EditActiveIssuesInActivityCountiesComponentCardsContainerConfigHook,
} from '~/containers/Service/UserIssues/UserIssues_View_Edit/components/ServiceUserIssuesUserIssues_View_EditActiveIssuesInActivityCountiesComponent/customization';
import { type ServiceUserIssuesUserIssues_View_EditActiveIssuesInActivityCountiesComponentRowActionDefinitions } from '~/containers/Service/UserIssues/UserIssues_View_Edit/components/ServiceUserIssuesUserIssues_View_EditActiveIssuesInActivityCountiesComponent/types';
import { IssueCard } from '~/custom/components/IssueCard';
import { useViewData } from '~/hooks';
import { type ServiceIssueStored } from '~/services/data-api/model/ServiceIssue';
import { mapCardsFiltersToFilters } from '~/utilities';

/**
 * XMIID: User/(esm/_7CQ7UFrXEe6gN-oVBDDIOQ)/TabularReferenceFieldRelationDefinedTable
 * Name: activeIssuesInActivityCounties
 *
 * Notes:
 * Don't forget to remove unused hooks, and related imports afterwards to reduce build time and bundle size!
 */
export function registerServiceUserIssuesUserIssues_View_EditActiveIssuesInActivityCountiesComponentCardsContainerConfig(
  context: BundleContext,
) {
  context.registerService<ServiceUserIssuesUserIssues_View_EditActiveIssuesInActivityCountiesComponentCardsContainerConfigHook>(
    SERVICE_USER_ISSUES_USER_ISSUES_VIEW_EDIT_ACTIVE_ISSUES_IN_ACTIVITY_COUNTIES_COMPONENT_CARDS_CONTAINER_CONFIG_HOOK_INTERFACE_KEY,
    serviceUserIssuesUserIssues_View_EditActiveIssuesInActivityCountiesComponentCardsContainerConfig,
  );
}

const serviceUserIssuesUserIssues_View_EditActiveIssuesInActivityCountiesComponentCardsContainerConfig: ServiceUserIssuesUserIssues_View_EditActiveIssuesInActivityCountiesComponentCardsContainerConfigHook =
  () => {
    // call other hooks here
    const { t } = useTranslation();
    const { navigate, back } = useJudoNavigation();
    const { getLatestViewData } = useViewData();

    return {
      // layout: 'horizontal',
      // showPagination: true,
      // ToolbarElement: ServiceUserIssuesUserIssues_View_EditActiveIssuesInActivityCountiesComponentToolbar,
      // ActionbarElement: ServiceUserIssuesUserIssues_View_EditActiveIssuesInActivityCountiesComponentActionBar,
      CardElement: ServiceUserIssuesUserIssues_View_EditActiveIssuesInActivityCountiesComponentCard,
    };
  };

const ServiceUserIssuesUserIssues_View_EditActiveIssuesInActivityCountiesComponentActionBar: FC<
  ActionbarElementProps<ServiceIssueStored>
> = (props) => {
  const { actions, columns, isLoading, refresh, handleSortModelChange, sortModel } = props;

  return <div>{/* Implement your ActionBar here */}</div>;
};

const ServiceUserIssuesUserIssues_View_EditActiveIssuesInActivityCountiesComponentToolbar: FC<
  ToolbarElementProps<ServiceIssueStored>
> = ({ handleFiltersChange }: ToolbarElementProps<ServiceIssueStored>) => {
  // We can call other hooks here
  const filterDefs: CardsFilterDefinition<ServiceIssueStored>[] = [];

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
const ServiceUserIssuesUserIssues_View_EditActiveIssuesInActivityCountiesComponentCard: FC<
  CardProps<
    ServiceIssueStored,
    ServiceUserIssuesUserIssues_View_EditActiveIssuesInActivityCountiesComponentRowActionDefinitions
  >
> = ({ row, columns, onRowClick, actions }) => {
  // We can call other hooks here

  // Every custom Card component MUST be wrapped in a `<Grid item` with the appropriate `sm`, `md`, etc... values so that
  // elements are handled properly on all devices.
  return (
    <Grid item sm={12} md={6} lg={4} xl={4}>
      <IssueCard row={row} onRowClick={onRowClick}></IssueCard>
    </Grid>
  );
};
