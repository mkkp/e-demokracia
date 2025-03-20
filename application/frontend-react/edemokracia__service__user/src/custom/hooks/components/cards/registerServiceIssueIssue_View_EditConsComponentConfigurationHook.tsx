import Grid from '@mui/material/Grid';
import type { BundleContext } from '@pandino/pandino-api';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useJudoNavigation } from '~/components';
import { type Filter, FilterType } from '~/components-api';
import type { ActionbarElementProps, CardProps, ToolbarElementProps } from '~/components-api/components/CardsContainer';
import { CardsFilter, type CardsFilterDefinition } from '~/components/widgets/CardsFilter';
import {
  SERVICE_ISSUE_ISSUE_VIEW_EDIT_CONS_COMPONENT_CARDS_CONTAINER_CONFIG_HOOK_INTERFACE_KEY,
  type ServiceIssueIssue_View_EditConsComponentCardsContainerConfigHook,
} from '~/containers/Service/Issue/Issue_View_Edit/components/ServiceIssueIssue_View_EditConsComponent/customization';
import { type ServiceIssueIssue_View_EditConsComponentRowActionDefinitions } from '~/containers/Service/Issue/Issue_View_Edit/components/ServiceIssueIssue_View_EditConsComponent/types';
import { ArgumentCard } from '~/custom/components/ArgumentCard';
import { useViewData } from '~/hooks';
import { type ServiceConStored } from '~/services/data-api/model/ServiceCon';
import { mapCardsFiltersToFilters } from '~/utilities';

/**
 * XMIID: User/(esm/_qJPPDXjvEe6cB8og8p0UuQ)/TabularReferenceFieldRelationDefinedTable
 * Name: cons
 *
 * Notes:
 * Don't forget to remove unused hooks, and related imports afterwards to reduce build time and bundle size!
 */
export function registerServiceIssueIssue_View_EditConsComponentCardsContainerConfig(context: BundleContext) {
  context.registerService<ServiceIssueIssue_View_EditConsComponentCardsContainerConfigHook>(
    SERVICE_ISSUE_ISSUE_VIEW_EDIT_CONS_COMPONENT_CARDS_CONTAINER_CONFIG_HOOK_INTERFACE_KEY,
    serviceIssueIssue_View_EditConsComponentCardsContainerConfig,
  );
}

const serviceIssueIssue_View_EditConsComponentCardsContainerConfig: ServiceIssueIssue_View_EditConsComponentCardsContainerConfigHook =
  () => {
    // call other hooks here
    const { t } = useTranslation();
    const { navigate, back } = useJudoNavigation();
    const { getLatestViewData } = useViewData();

    return {
      // layout: 'horizontal',
      // showPagination: true,
      // ToolbarElement: ServiceIssueIssue_View_EditConsComponentToolbar,
      // ActionbarElement: ServiceIssueIssue_View_EditConsComponentActionBar,
      CardElement: ServiceIssueIssue_View_EditConsComponentCard,
      showPagination: false,
    };
  };

const ServiceIssueIssue_View_EditConsComponentActionBar: FC<ActionbarElementProps<ServiceConStored>> = (props) => {
  const { actions, columns, isLoading, refresh, handleSortModelChange, sortModel } = props;

  return <div>{/* Implement your ActionBar here */}</div>;
};

const ServiceIssueIssue_View_EditConsComponentToolbar: FC<ToolbarElementProps<ServiceConStored>> = ({
  handleFiltersChange,
}: ToolbarElementProps<ServiceConStored>) => {
  // We can call other hooks here
  const filterDefs: CardsFilterDefinition<ServiceConStored>[] = [];

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

const ServiceIssueIssue_View_EditConsComponentCard: FC<
  CardProps<ServiceConStored, ServiceIssueIssue_View_EditConsComponentRowActionDefinitions>
> = ({ row, columns, onRowClick, actions }) => {
  // We can call other hooks here

  // Every custom Card component MUST be wrapped in a `<Grid item` with the appropriate `sm`, `md`, etc... values so that
  // elements are handled properly on all devices.
  return (
    <Grid item sm={12} md={12} lg={12} xl={12}>
      <ArgumentCard
        con={true}
        row={row}
        onRowClick={onRowClick}
        numberOfLikes={row.upVotes}
        numberOfDislikes={row.downVotes}
        onDislikeClick={() => actions.consVoteDownForConAction?.(row)}
        onLikeClick={() => actions.consVoteUpForConAction?.(row)}
      />
    </Grid>
  );
};
