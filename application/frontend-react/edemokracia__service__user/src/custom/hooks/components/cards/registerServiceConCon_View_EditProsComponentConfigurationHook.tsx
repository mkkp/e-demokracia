import Grid from '@mui/material/Grid';
import type { BundleContext } from '@pandino/pandino-api';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useJudoNavigation } from '~/components';
import { type Filter, FilterType } from '~/components-api';
import type { ActionbarElementProps, CardProps, ToolbarElementProps } from '~/components-api/components/CardsContainer';
import { CardsFilter, type CardsFilterDefinition } from '~/components/widgets/CardsFilter';
import {
  SERVICE_CON_CON_VIEW_EDIT_PROS_COMPONENT_CARDS_CONTAINER_CONFIG_HOOK_INTERFACE_KEY,
  type ServiceConCon_View_EditProsComponentCardsContainerConfigHook,
} from '~/containers/Service/Con/Con_View_Edit/components/ServiceConCon_View_EditProsComponent/customization';
import { type ServiceConCon_View_EditProsComponentRowActionDefinitions } from '~/containers/Service/Con/Con_View_Edit/components/ServiceConCon_View_EditProsComponent/types';
import { ArgumentCard } from '~/custom/components/ArgumentCard';
import { useViewData } from '~/hooks';
import { type ServiceProStored } from '~/services/data-api/model/ServicePro';
import { mapCardsFiltersToFilters } from '~/utilities';

/**
 * XMIID: User/(esm/_WihOMIfYEe2u0fVmwtP5bA)/TabularReferenceFieldRelationDefinedTable
 * Name: pros
 *
 * Notes:
 * Don't forget to remove unused hooks, and related imports afterwards to reduce build time and bundle size!
 */
export function registerServiceConCon_View_EditProsComponentCardsContainerConfig(context: BundleContext) {
  context.registerService<ServiceConCon_View_EditProsComponentCardsContainerConfigHook>(
    SERVICE_CON_CON_VIEW_EDIT_PROS_COMPONENT_CARDS_CONTAINER_CONFIG_HOOK_INTERFACE_KEY,
    serviceConCon_View_EditProsComponentCardsContainerConfig,
  );
}

const serviceConCon_View_EditProsComponentCardsContainerConfig: ServiceConCon_View_EditProsComponentCardsContainerConfigHook =
  () => {
    // call other hooks here
    const { t } = useTranslation();
    const { navigate, back } = useJudoNavigation();
    const { getLatestViewData } = useViewData();

    return {
      // layout: 'horizontal',
      // showPagination: true,
      // ToolbarElement: ServiceConCon_View_EditProsComponentToolbar,
      // ActionbarElement: ServiceConCon_View_EditProsComponentActionBar,
      CardElement: ServiceConCon_View_EditProsComponentCard,
      showPagination: false,
    };
  };

const ServiceConCon_View_EditProsComponentActionBar: FC<ActionbarElementProps<ServiceProStored>> = (props) => {
  const { actions, columns, isLoading, refresh, handleSortModelChange, sortModel } = props;

  return <div>{/* Implement your ActionBar here */}</div>;
};

const ServiceConCon_View_EditProsComponentToolbar: FC<ToolbarElementProps<ServiceProStored>> = ({
  handleFiltersChange,
}: ToolbarElementProps<ServiceProStored>) => {
  // We can call other hooks here
  const filterDefs: CardsFilterDefinition<ServiceProStored>[] = [];

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

const ServiceConCon_View_EditProsComponentCard: FC<
  CardProps<ServiceProStored, ServiceConCon_View_EditProsComponentRowActionDefinitions>
> = ({ row, columns, onRowClick, actions }) => {
  // We can call other hooks here

  // Every custom Card component MUST be wrapped in a `<Grid item` with the appropriate `sm`, `md`, etc... values so that
  // elements are handled properly on all devices.
  return (
    <Grid item sm={12} md={12} lg={12} xl={12} sx={{ width: 'calc(100% - 1rem)', maxWidth: 'calc(100% - 1rem)' }}>
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
