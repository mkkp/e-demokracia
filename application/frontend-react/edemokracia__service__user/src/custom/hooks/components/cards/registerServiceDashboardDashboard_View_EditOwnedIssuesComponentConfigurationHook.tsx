import Grid from '@mui/material/Grid';
import type { BundleContext } from '@pandino/pandino-api';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useJudoNavigation } from '~/components';
import { type Filter, FilterType } from '~/components-api';
import type { ActionbarElementProps, CardProps, ToolbarElementProps } from '~/components-api/components/CardsContainer';
import { CardsFilter, type CardsFilterDefinition } from '~/components/widgets/CardsFilter';
import {
  SERVICE_DASHBOARD_DASHBOARD_VIEW_EDIT_OWNED_ISSUES_COMPONENT_CARDS_CONTAINER_CONFIG_HOOK_INTERFACE_KEY,
  type ServiceDashboardDashboard_View_EditOwnedIssuesComponentCardsContainerConfigHook,
} from '~/containers/Service/Dashboard/Dashboard_View_Edit/components/ServiceDashboardDashboard_View_EditOwnedIssuesComponent/customization';
import { type ServiceDashboardDashboard_View_EditOwnedIssuesComponentRowActionDefinitions } from '~/containers/Service/Dashboard/Dashboard_View_Edit/components/ServiceDashboardDashboard_View_EditOwnedIssuesComponent/types';
import { IssueCard } from '~/custom/components/IssueCard';
import { useViewData } from '~/hooks';
import { type ServiceIssueStored } from '~/services/data-api/model/ServiceIssue';
import { mapCardsFiltersToFilters } from '~/utilities';

/**
 * XMIID: User/(esm/_CTqMYFw4Ee6gN-oVBDDIOQ)/TabularReferenceFieldRelationDefinedTable
 * Name: ownedIssues
 *
 * Notes:
 * Don't forget to remove unused hooks, and related imports afterwards to reduce build time and bundle size!
 */
export function registerServiceDashboardDashboard_View_EditOwnedIssuesComponentCardsContainerConfig(
  context: BundleContext,
) {
  context.registerService<ServiceDashboardDashboard_View_EditOwnedIssuesComponentCardsContainerConfigHook>(
    SERVICE_DASHBOARD_DASHBOARD_VIEW_EDIT_OWNED_ISSUES_COMPONENT_CARDS_CONTAINER_CONFIG_HOOK_INTERFACE_KEY,
    serviceDashboardDashboard_View_EditOwnedIssuesComponentCardsContainerConfig,
  );
}

const serviceDashboardDashboard_View_EditOwnedIssuesComponentCardsContainerConfig: ServiceDashboardDashboard_View_EditOwnedIssuesComponentCardsContainerConfigHook =
  () => {
    // call other hooks here
    const { t } = useTranslation();
    const { navigate, back } = useJudoNavigation();
    const { getLatestViewData } = useViewData();

    return {
      // layout: 'horizontal',
      // showPagination: true,
      // ToolbarElement: ServiceDashboardDashboard_View_EditOwnedIssuesComponentToolbar,
      // ActionbarElement: ServiceDashboardDashboard_View_EditOwnedIssuesComponentActionBar,
      CardElement: ServiceDashboardDashboard_View_EditOwnedIssuesComponentCard,
    };
  };

const ServiceDashboardDashboard_View_EditOwnedIssuesComponentActionBar: FC<
  ActionbarElementProps<ServiceIssueStored>
> = (props) => {
  const { actions, columns, isLoading, refresh, handleSortModelChange, sortModel } = props;

  return <div>{/* Implement your ActionBar here */}</div>;
};

const ServiceDashboardDashboard_View_EditOwnedIssuesComponentToolbar: FC<ToolbarElementProps<ServiceIssueStored>> = ({
  handleFiltersChange,
}: ToolbarElementProps<ServiceIssueStored>) => {
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

const ServiceDashboardDashboard_View_EditOwnedIssuesComponentCard: FC<
  CardProps<ServiceIssueStored, ServiceDashboardDashboard_View_EditOwnedIssuesComponentRowActionDefinitions>
> = ({ row, columns, onRowClick, actions }) => {
  // We can call other hooks here

  // Every custom Card component MUST be wrapped in a `<Grid item` with the appropriate `sm`, `md`, etc... values so that
  // elements are handled properly on all devices.
  return (
    <Grid item xs={11} sm={12} md={6} lg={4} xl={4}>
      <IssueCard row={row} onRowClick={onRowClick}></IssueCard>
    </Grid>
  );
};
