import Grid from '@mui/material/Grid';
import type { BundleContext } from '@pandino/pandino-api';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useJudoNavigation } from '~/components';
import { type Filter, FilterType } from '~/components-api';
import type { ActionbarElementProps, CardProps, ToolbarElementProps } from '~/components-api/components/CardsContainer';
import { CardsFilter, type CardsFilterDefinition } from '~/components/widgets/CardsFilter';
import {
  SERVICE_DASHBOARD_DASHBOARD_VIEW_EDIT_FAVORITE_ISSUES_COMPONENT_CARDS_CONTAINER_CONFIG_HOOK_INTERFACE_KEY,
  type ServiceDashboardDashboard_View_EditFavoriteIssuesComponentCardsContainerConfigHook,
} from '~/containers/Service/Dashboard/Dashboard_View_Edit/components/ServiceDashboardDashboard_View_EditFavoriteIssuesComponent/customization';
import { type ServiceDashboardDashboard_View_EditFavoriteIssuesComponentRowActionDefinitions } from '~/containers/Service/Dashboard/Dashboard_View_Edit/components/ServiceDashboardDashboard_View_EditFavoriteIssuesComponent/types';
import { IssueCard } from '~/custom/components/IssueCard';
import { useViewData } from '~/hooks';
import { type ServiceIssueStored } from '~/services/data-api/model/ServiceIssue';
import { mapCardsFiltersToFilters } from '~/utilities';

/**
 * XMIID: User/(esm/_7sPXAFw4Ee6gN-oVBDDIOQ)/TabularReferenceFieldRelationDefinedTable
 * Name: favoriteIssues
 *
 * Notes:
 * Don't forget to remove unused hooks, and related imports afterwards to reduce build time and bundle size!
 */
export function registerServiceDashboardDashboard_View_EditFavoriteIssuesComponentCardsContainerConfig(
  context: BundleContext,
) {
  context.registerService<ServiceDashboardDashboard_View_EditFavoriteIssuesComponentCardsContainerConfigHook>(
    SERVICE_DASHBOARD_DASHBOARD_VIEW_EDIT_FAVORITE_ISSUES_COMPONENT_CARDS_CONTAINER_CONFIG_HOOK_INTERFACE_KEY,
    serviceDashboardDashboard_View_EditFavoriteIssuesComponentCardsContainerConfig,
  );
}

const serviceDashboardDashboard_View_EditFavoriteIssuesComponentCardsContainerConfig: ServiceDashboardDashboard_View_EditFavoriteIssuesComponentCardsContainerConfigHook =
  () => {
    // call other hooks here
    const { t } = useTranslation();
    const { navigate, back } = useJudoNavigation();
    const { getLatestViewData } = useViewData();

    return {
      // layout: 'horizontal',
      // showPagination: true,
      // ToolbarElement: ServiceDashboardDashboard_View_EditFavoriteIssuesComponentToolbar,
      // ActionbarElement: ServiceDashboardDashboard_View_EditFavoriteIssuesComponentActionBar,
      CardElement: ServiceDashboardDashboard_View_EditFavoriteIssuesComponentCard,
    };
  };

const ServiceDashboardDashboard_View_EditFavoriteIssuesComponentActionBar: FC<
  ActionbarElementProps<ServiceIssueStored>
> = (props) => {
  const { actions, columns, isLoading, refresh, handleSortModelChange, sortModel } = props;

  return <div>{/* Implement your ActionBar here */}</div>;
};

const ServiceDashboardDashboard_View_EditFavoriteIssuesComponentToolbar: FC<
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

const ServiceDashboardDashboard_View_EditFavoriteIssuesComponentCard: FC<
  CardProps<ServiceIssueStored, ServiceDashboardDashboard_View_EditFavoriteIssuesComponentRowActionDefinitions>
> = ({ row, columns, onRowClick, actions }) => {
  // We can call other hooks here

  // Every custom Card component MUST be wrapped in a `<Grid item` with the appropriate `sm`, `md`, etc... values so that
  // elements are handled properly on all devices.
  return (
    <Grid item sm={12} md={12} lg={6} xl={6} sx={{ width: 1 }}>
      <IssueCard row={row} onRowClick={onRowClick}></IssueCard>
    </Grid>
  );
};
