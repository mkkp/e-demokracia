import { type FC } from 'react';
import type { BundleContext } from '@pandino/pandino-api';
import { useTranslation } from 'react-i18next';
import Grid from '@mui/material/Grid';
import { type Filter, FilterType } from '~/components-api';
import type { ActionbarElementProps, CardProps, ToolbarElementProps } from '~/components-api/components/CardsContainer';
import { CardsFilter, type CardsFilterDefinition } from '~/components/widgets/CardsFilter';
import { useJudoNavigation } from '~/components';
import { useViewData } from '~/hooks';
import { mapCardsFiltersToFilters } from '~/utilities';
import { type ServiceIssueIssue_View_EditProsComponentCardsContainerConfigHook, SERVICE_ISSUE_ISSUE_VIEW_EDIT_PROS_COMPONENT_CARDS_CONTAINER_CONFIG_HOOK_INTERFACE_KEY } from '~/containers/Service/Issue/Issue_View_Edit/components/ServiceIssueIssue_View_EditProsComponent/customization';
import { type ServiceIssueIssue_View_EditProsComponentRowActionDefinitions } from '~/containers/Service/Issue/Issue_View_Edit/components/ServiceIssueIssue_View_EditProsComponent/types';
import { type ServiceProStored } from '~/services/data-api/model/ServicePro';
import { ArgumentCard } from '~/custom/components/ArgumentCard';

/**
 * XMIID: User/(esm/_qJPPBXjvEe6cB8og8p0UuQ)/TabularReferenceFieldRelationDefinedTable
 * Name: pros
 *
 * Notes:
 * Don't forget to remove unused hooks, and related imports afterwards to reduce build time and bundle size!
 */
export function registerServiceIssueIssue_View_EditProsComponentCardsContainerConfig(context: BundleContext) {
  context.registerService<ServiceIssueIssue_View_EditProsComponentCardsContainerConfigHook>(SERVICE_ISSUE_ISSUE_VIEW_EDIT_PROS_COMPONENT_CARDS_CONTAINER_CONFIG_HOOK_INTERFACE_KEY, serviceIssueIssue_View_EditProsComponentCardsContainerConfig);
}

const serviceIssueIssue_View_EditProsComponentCardsContainerConfig: ServiceIssueIssue_View_EditProsComponentCardsContainerConfigHook = () => {
  // call other hooks here
  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { getLatestViewData } = useViewData();

  return {
    // layout: 'horizontal',
    // showPagination: true,
    // ToolbarElement: ServiceIssueIssue_View_EditProsComponentToolbar,
    // ActionbarElement: ServiceIssueIssue_View_EditProsComponentActionBar,
    CardElement: ServiceIssueIssue_View_EditProsComponentCard,
  };
};

const ServiceIssueIssue_View_EditProsComponentActionBar: FC<ActionbarElementProps<ServiceProStored>> = (props) => {
  const { actions, columns, isLoading, refresh, handleSortModelChange, sortModel} = props;

  return (
    <div>{/* Implement your ActionBar here */}</div>
  );
};

const ServiceIssueIssue_View_EditProsComponentToolbar: FC<ToolbarElementProps<ServiceProStored>> = ({ handleFiltersChange }: ToolbarElementProps<ServiceProStored>) => {
  // We can call other hooks here
  const filterDefs: CardsFilterDefinition<ServiceProStored>[] = [];

  // We are using a built in component CardsFilter here, but we can implement anything
  return (
    <CardsFilter filterDefinitions={filterDefs} onFiltersChanged={(values: Record<string, any>) => {
      const newFilters: Filter[] = mapCardsFiltersToFilters(filterDefs, values);
      handleFiltersChange(newFilters);
    }} />
  );
};

const ServiceIssueIssue_View_EditProsComponentCard: FC<CardProps<ServiceProStored, ServiceIssueIssue_View_EditProsComponentRowActionDefinitions>> = ({ row, columns, onRowClick, actions }) => {
  // We can call other hooks here

  // Every custom Card component MUST be wrapped in a `<Grid item` with the appropriate `sm`, `md`, etc... values so that
  // elements are handled properly on all devices.
  return (
    <Grid item sm={12} md={12} lg={12} xl={12}>
      <ArgumentCard
        con={false}
        row={row}
        onRowClick={onRowClick}
        numberOfLikes={row.upVotes}
        numberOfDislikes={row.downVotes}
        onDislikeClick={() => actions.prosVoteDownForProAction?.(row)}
        onLikeClick={() => actions.prosVoteUpForProAction?.(row)}
      />
    </Grid>
  );
};
