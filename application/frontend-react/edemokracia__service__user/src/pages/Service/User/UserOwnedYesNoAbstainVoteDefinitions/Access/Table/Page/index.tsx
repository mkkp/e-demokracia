//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPagesForRouting(#application)
// Path expression: 'src/pages/'+#pagePath(#self)+'/index.tsx'
// Template name: actor/src/pages/index.tsx
// Template file: actor/src/pages/index.tsx.hbs

import { useCallback, useEffect, useRef, useState, lazy, Suspense } from 'react';
import { OBJECTCLASS } from '@pandino/pandino-api';
import type { JudoIdentifiable } from '@judo/data-api-common';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import type { GridFilterModel } from '@mui/x-data-grid';
import type { Filter, FilterOption } from '~/components-api';
import { useJudoNavigation } from '~/components';
import { useConfirmDialog, useDialog, useFilterDialog } from '~/components/dialog';
import { toastConfig } from '~/config';
import { useCRUDDialog } from '~/hooks';
import {
  passesLocalValidation,
  processQueryCustomizer,
  uiDateToServiceDate,
  uiTimeToServiceTime,
  useErrorHandler,
} from '~/utilities';
import type { DialogResult } from '~/utilities';
import { PageContainerTransition } from '~/theme/animations';
import { routeToServiceUserUserOwnedYesNoAbstainVoteDefinitionsAccessViewPage } from '~/routes';
import { useServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditVoteInputForm } from '~/dialogs/Service/YesNoAbstainVoteDefinition/YesNoAbstainVoteDefinition_View_Edit/Vote/Input/Form';
import type { ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_TablePageActions } from '~/containers/Service/YesNoAbstainVoteDefinition/YesNoAbstainVoteDefinition_Table/ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_TablePageContainer';
import type {
  ServiceYesNoAbstainVoteDefinition,
  ServiceYesNoAbstainVoteDefinitionQueryCustomizer,
  ServiceYesNoAbstainVoteDefinitionStored,
  VoteStatus,
} from '~/services/data-api';
import { userServiceForUserOwnedYesNoAbstainVoteDefinitionsImpl } from '~/services/data-axios';

const ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_TablePageContainer = lazy(
  () =>
    import(
      '~/containers/Service/YesNoAbstainVoteDefinition/YesNoAbstainVoteDefinition_Table/ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_TablePageContainer'
    ),
);

// XMIID: User/(esm/_9lF1oFuhEe6rLvwZQOpyUA)/AccessTablePageDefinition
// Name: service::User::userOwnedYesNoAbstainVoteDefinitions::Access::Table::Page
export default function ServiceUserUserOwnedYesNoAbstainVoteDefinitionsAccessTablePage() {
  // Hooks section
  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();
  const { navigate, back } = useJudoNavigation();
  const { openFilterDialog } = useFilterDialog();
  const { openConfirmDialog } = useConfirmDialog();
  const handleError = useErrorHandler();
  const openCRUDDialog = useCRUDDialog();
  const [createDialog, closeDialog] = useDialog();

  // State section
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [refreshCounter, setRefreshCounter] = useState<number>(0);
  const [data, setData] = useState<ServiceYesNoAbstainVoteDefinitionStored[]>([]);

  // Dialog hooks
  const openServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditVoteInputForm =
    useServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditVoteInputForm();

  // Calculated section
  const title: string = t('Service.YesNoAbstainVoteDefinition.YesNoAbstainVoteDefinition_Table', {
    defaultValue: 'YesNoAbstainVoteDefinition Table',
  });

  // Action section
  const serviceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_TableView = async (
    target?: ServiceYesNoAbstainVoteDefinitionStored,
  ) => {
    // if the `target` is missing we are likely navigating to a relation table page, in which case we need the owner's id
    navigate(routeToServiceUserUserOwnedYesNoAbstainVoteDefinitionsAccessViewPage(target!.__signedIdentifier));
  };
  const serviceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_TableTableFilter = async (
    id: string,
    filterOptions: FilterOption[],
    model?: GridFilterModel,
    filters?: Filter[],
  ): Promise<{ model?: GridFilterModel; filters?: Filter[] }> => {
    const newFilters = await openFilterDialog(id, filterOptions, filters);
    return {
      filters: newFilters,
    };
  };
  const serviceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_TableTableRefresh = async (
    queryCustomizer: ServiceYesNoAbstainVoteDefinitionQueryCustomizer,
  ): Promise<ServiceYesNoAbstainVoteDefinitionStored[]> => {
    try {
      setIsLoading(true);
      setEditMode(false);
      return userServiceForUserOwnedYesNoAbstainVoteDefinitionsImpl.list(undefined, queryCustomizer);
    } catch (error) {
      handleError(error);
      return Promise.reject(error);
    } finally {
      setIsLoading(false);
      setRefreshCounter((prevCounter) => prevCounter + 1);
    }
  };
  const serviceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditUserVoteEntryGroupUserVoteVirtualForUserVoteTakeBackVote =
    async (target?: ServiceYesNoAbstainVoteDefinitionStored) => {
      try {
        setIsLoading(true);
        await userServiceForUserOwnedYesNoAbstainVoteDefinitionsImpl.takeBackVote(target!);

        enqueueSnackbar(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
          {
            variant: 'success',
            ...toastConfig.success,
          },
        );

        setRefreshCounter((prev) => prev + 1);
      } catch (error) {
        handleError(error);
      } finally {
        setIsLoading(false);
      }
    };
  const serviceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteOpenForm =
    async (target: ServiceYesNoAbstainVoteDefinitionStored) => {
      const { result, data: returnedData } =
        await openServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditVoteInputForm(target);
      setRefreshCounter((prev) => prev + 1);
    };

  const actions: ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_TablePageActions = {
    serviceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_TableView,
    serviceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_TableTableFilter,
    serviceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_TableTableRefresh,
    serviceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditUserVoteEntryGroupUserVoteVirtualForUserVoteTakeBackVote,
    serviceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteOpenForm,
  };

  // Effect section

  return (
    <Suspense>
      <PageContainerTransition>
        <ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_TablePageContainer
          title={title}
          actions={actions}
          isLoading={isLoading}
          editMode={editMode}
          refreshCounter={refreshCounter}
        />
      </PageContainerTransition>
    </Suspense>
  );
}
