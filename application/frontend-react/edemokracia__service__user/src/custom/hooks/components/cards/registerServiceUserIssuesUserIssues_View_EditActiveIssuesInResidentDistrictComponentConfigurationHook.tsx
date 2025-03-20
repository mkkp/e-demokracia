import Grid from '@mui/material/Grid';
import type { BundleContext } from '@pandino/pandino-api';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useJudoNavigation } from '~/components';
import { type Filter, FilterType } from '~/components-api';
import type { ActionbarElementProps, CardProps, ToolbarElementProps } from '~/components-api/components/CardsContainer';
import { CardsFilter, type CardsFilterDefinition } from '~/components/widgets/CardsFilter';
import {
  SERVICE_USER_ISSUES_USER_ISSUES_VIEW_EDIT_ACTIVE_ISSUES_IN_RESIDENT_DISTRICT_COMPONENT_CARDS_CONTAINER_CONFIG_HOOK_INTERFACE_KEY,
  type ServiceUserIssuesUserIssues_View_EditActiveIssuesInResidentDistrictComponentCardsContainerConfigHook,
} from '~/containers/Service/UserIssues/UserIssues_View_Edit/components/ServiceUserIssuesUserIssues_View_EditActiveIssuesInResidentDistrictComponent/customization';
import { type ServiceUserIssuesUserIssues_View_EditActiveIssuesInResidentDistrictComponentRowActionDefinitions } from '~/containers/Service/UserIssues/UserIssues_View_Edit/components/ServiceUserIssuesUserIssues_View_EditActiveIssuesInResidentDistrictComponent/types';
import { IssueCard } from '~/custom/components/IssueCard';
import { useViewData } from '~/hooks';
import { type ServiceIssueStored } from '~/services/data-api/model/ServiceIssue';
import { mapCardsFiltersToFilters } from '~/utilities';

/**
 * XMIID: User/(esm/_BZzIWFrcEe6gN-oVBDDIOQ)/TabularReferenceFieldRelationDefinedTable
 * Name: activeIssuesInResidentDistrict
 *
 * Notes:
 * Don't forget to remove unused hooks, and related imports afterwards to reduce build time and bundle size!
 */
export function registerServiceUserIssuesUserIssues_View_EditActiveIssuesInResidentDistrictComponentCardsContainerConfig(
  context: BundleContext,
) {
  context.registerService<ServiceUserIssuesUserIssues_View_EditActiveIssuesInResidentDistrictComponentCardsContainerConfigHook>(
    SERVICE_USER_ISSUES_USER_ISSUES_VIEW_EDIT_ACTIVE_ISSUES_IN_RESIDENT_DISTRICT_COMPONENT_CARDS_CONTAINER_CONFIG_HOOK_INTERFACE_KEY,
    serviceUserIssuesUserIssues_View_EditActiveIssuesInResidentDistrictComponentCardsContainerConfig,
  );
}

const serviceUserIssuesUserIssues_View_EditActiveIssuesInResidentDistrictComponentCardsContainerConfig: ServiceUserIssuesUserIssues_View_EditActiveIssuesInResidentDistrictComponentCardsContainerConfigHook =
  () => {
    // call other hooks here
    const { t } = useTranslation();
    const { navigate, back } = useJudoNavigation();
    const { getLatestViewData } = useViewData();

    return {
      // layout: 'horizontal',
      // showPagination: true,
      // ToolbarElement: ServiceUserIssuesUserIssues_View_EditActiveIssuesInResidentDistrictComponentToolbar,
      // ActionbarElement: ServiceUserIssuesUserIssues_View_EditActiveIssuesInResidentDistrictComponentActionBar,
      CardElement: ServiceUserIssuesUserIssues_View_EditActiveIssuesInResidentDistrictComponentCard,
    };
  };

const ServiceUserIssuesUserIssues_View_EditActiveIssuesInResidentDistrictComponentActionBar: FC<
  ActionbarElementProps<ServiceIssueStored>
> = (props) => {
  const { actions, columns, isLoading, refresh, handleSortModelChange, sortModel } = props;

  return <div>{/* Implement your ActionBar here */}</div>;
};

const ServiceUserIssuesUserIssues_View_EditActiveIssuesInResidentDistrictComponentToolbar: FC<
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

const ServiceUserIssuesUserIssues_View_EditActiveIssuesInResidentDistrictComponentCard: FC<
  CardProps<
    ServiceIssueStored,
    ServiceUserIssuesUserIssues_View_EditActiveIssuesInResidentDistrictComponentRowActionDefinitions
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
