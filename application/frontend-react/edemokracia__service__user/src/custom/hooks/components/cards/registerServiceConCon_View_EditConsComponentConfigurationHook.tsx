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
import { type ServiceConCon_View_EditConsComponentCardsContainerConfigHook, SERVICE_CON_CON_VIEW_EDIT_CONS_COMPONENT_CARDS_CONTAINER_CONFIG_HOOK_INTERFACE_KEY } from '~/containers/Service/Con/Con_View_Edit/components/ServiceConCon_View_EditConsComponent/customization';
import { type ServiceConCon_View_EditConsComponentRowActionDefinitions } from '~/containers/Service/Con/Con_View_Edit/components/ServiceConCon_View_EditConsComponent/types';
import { type ServiceConStored } from '~/services/data-api/model/ServiceCon';
import { ArgumentCard } from '~/custom/components/ArgumentCard';

/**
 * XMIID: User/(esm/_WieK4IfYEe2u0fVmwtP5bA)/TabularReferenceFieldRelationDefinedTable
 * Name: cons
 *
 * Notes:
 * Don't forget to remove unused hooks, and related imports afterwards to reduce build time and bundle size!
 */
export function registerServiceConCon_View_EditConsComponentCardsContainerConfig(context: BundleContext) {
  context.registerService<ServiceConCon_View_EditConsComponentCardsContainerConfigHook>(SERVICE_CON_CON_VIEW_EDIT_CONS_COMPONENT_CARDS_CONTAINER_CONFIG_HOOK_INTERFACE_KEY, serviceConCon_View_EditConsComponentCardsContainerConfig);
}

const serviceConCon_View_EditConsComponentCardsContainerConfig: ServiceConCon_View_EditConsComponentCardsContainerConfigHook = () => {
  // call other hooks here
  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { getLatestViewData } = useViewData();

  return {
    // layout: 'horizontal',
    // showPagination: true,
    // ToolbarElement: ServiceConCon_View_EditConsComponentToolbar,
    // ActionbarElement: ServiceConCon_View_EditConsComponentActionBar,
    CardElement: ServiceConCon_View_EditConsComponentCard,
  };
};

const ServiceConCon_View_EditConsComponentActionBar: FC<ActionbarElementProps<ServiceConStored>> = (props) => {
  const { actions, columns, isLoading, refresh, handleSortModelChange, sortModel} = props;

  return (
    <div>{/* Implement your ActionBar here */}</div>
  );
};

const ServiceConCon_View_EditConsComponentToolbar: FC<ToolbarElementProps<ServiceConStored>> = ({ handleFiltersChange }: ToolbarElementProps<ServiceConStored>) => {
  // We can call other hooks here
  const filterDefs: CardsFilterDefinition<ServiceConStored>[] = [];

  // We are using a built in component CardsFilter here, but we can implement anything
  return (
    <CardsFilter filterDefinitions={filterDefs} onFiltersChanged={(values: Record<string, any>) => {
      const newFilters: Filter[] = mapCardsFiltersToFilters(filterDefs, values);
      handleFiltersChange(newFilters);
    }} />
  );
};

const ServiceConCon_View_EditConsComponentCard: FC<CardProps<ServiceConStored, ServiceConCon_View_EditConsComponentRowActionDefinitions>> = ({ row, columns, onRowClick, actions }) => {
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
