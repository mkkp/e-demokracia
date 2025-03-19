import { type FC } from 'react';
import type { BundleContext } from '@pandino/pandino-api';
import { useTranslation } from 'react-i18next';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { type Filter, FilterType } from '~/components-api';
import type { ActionbarElementProps, CardProps, ToolbarElementProps } from '~/components-api/components/CardsContainer';
import { CardsFilter, type CardsFilterDefinition } from '~/components/widgets/CardsFilter';
import { useJudoNavigation } from '~/components';
import { useViewData } from '~/hooks';
import { mapCardsFiltersToFilters } from '~/utilities';
import { type ServiceIssueIssue_View_EditCommentsComponentCardsContainerConfigHook, SERVICE_ISSUE_ISSUE_VIEW_EDIT_COMMENTS_COMPONENT_CARDS_CONTAINER_CONFIG_HOOK_INTERFACE_KEY } from '~/containers/Service/Issue/Issue_View_Edit/components/ServiceIssueIssue_View_EditCommentsComponent/customization';
import { type ServiceIssueIssue_View_EditCommentsComponentRowActionDefinitions } from '~/containers/Service/Issue/Issue_View_Edit/components/ServiceIssueIssue_View_EditCommentsComponent/types';
import { type ServiceCommentStored } from '~/services/data-api/model/ServiceComment';
import { CommentCard } from '~/custom/components/CommentCard';

/**
 * XMIID: User/(esm/_mvouIIybEe2VSOmaAz6G9Q)/TabularReferenceFieldRelationDefinedTable
 * Name: comments
 *
 * Notes:
 * Don't forget to remove unused hooks, and related imports afterwards to reduce build time and bundle size!
 */
export function registerServiceIssueIssue_View_EditCommentsComponentCardsContainerConfig(context: BundleContext) {
  context.registerService<ServiceIssueIssue_View_EditCommentsComponentCardsContainerConfigHook>(SERVICE_ISSUE_ISSUE_VIEW_EDIT_COMMENTS_COMPONENT_CARDS_CONTAINER_CONFIG_HOOK_INTERFACE_KEY, serviceIssueIssue_View_EditCommentsComponentCardsContainerConfig);
}

const serviceIssueIssue_View_EditCommentsComponentCardsContainerConfig: ServiceIssueIssue_View_EditCommentsComponentCardsContainerConfigHook = () => {
  // call other hooks here
  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { getLatestViewData } = useViewData();

  return {
    // layout: 'horizontal',
    // showPagination: true,
    // ToolbarElement: ServiceIssueIssue_View_EditCommentsComponentToolbar,
    // ActionbarElement: ServiceIssueIssue_View_EditCommentsComponentActionBar,
    CardElement: ServiceIssueIssue_View_EditCommentsComponentCard,
  };
};

const ServiceIssueIssue_View_EditCommentsComponentActionBar: FC<ActionbarElementProps<ServiceCommentStored>> = (props) => {
  const { actions, columns, isLoading, refresh, handleSortModelChange, sortModel} = props;

  return (
    <div>{/* Implement your ActionBar here */}</div>
  );
};

const ServiceIssueIssue_View_EditCommentsComponentToolbar: FC<ToolbarElementProps<ServiceCommentStored>> = ({ handleFiltersChange }: ToolbarElementProps<ServiceCommentStored>) => {
  // We can call other hooks here
  const filterDefs: CardsFilterDefinition<ServiceCommentStored>[] = [];

  // We are using a built in component CardsFilter here, but we can implement anything
  return (
    <CardsFilter filterDefinitions={filterDefs} onFiltersChanged={(values: Record<string, any>) => {
      const newFilters: Filter[] = mapCardsFiltersToFilters(filterDefs, values);
      handleFiltersChange(newFilters);
    }} />
  );
};

const ServiceIssueIssue_View_EditCommentsComponentCard: FC<CardProps<ServiceCommentStored, ServiceIssueIssue_View_EditCommentsComponentRowActionDefinitions>> = ({ row, columns, onRowClick, actions }) => {
  // We can call other hooks here

  // Every custom Card component MUST be wrapped in a `<Grid item` with the appropriate `sm`, `md`, etc... values so that
  // elements are handled properly on all devices.
  return (
    <Grid item sm={12} md={6} lg={4} xl={4}>
      <CommentCard 
        row={row}
        onRowClick={onRowClick}
        numberOfLikes={row.upVotes}
        numberOfDislikes={row.downVotes} 
        onLikeClick={undefined} 
        onDislikeClick={undefined}>        
      </CommentCard>
    </Grid>
  );
};
