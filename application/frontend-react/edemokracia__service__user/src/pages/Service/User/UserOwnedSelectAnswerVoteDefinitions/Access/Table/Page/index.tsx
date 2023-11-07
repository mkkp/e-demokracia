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
import { routeToServiceUserUserOwnedSelectAnswerVoteDefinitionsAccessViewPage } from '~/routes';
import { useServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteRelationTableCallSelector } from '~/dialogs/Service/SelectAnswerVoteDefinition/SelectAnswerVoteDefinition_View_Edit/UserVoteEntryGroup/TakeVote/Vote/Relation/Table/CallSelector';
import type { ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_TablePageActions } from '~/containers/Service/SelectAnswerVoteDefinition/SelectAnswerVoteDefinition_Table/ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_TablePageContainer';
import type {
  ServiceSelectAnswerVoteDefinition,
  ServiceSelectAnswerVoteDefinitionQueryCustomizer,
  ServiceSelectAnswerVoteDefinitionStored,
  VoteStatus,
} from '~/services/data-api';
import { userServiceForUserOwnedSelectAnswerVoteDefinitionsImpl } from '~/services/data-axios';

const ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_TablePageContainer = lazy(
  () =>
    import(
      '~/containers/Service/SelectAnswerVoteDefinition/SelectAnswerVoteDefinition_Table/ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_TablePageContainer'
    ),
);

// XMIID: User/(esm/_jf3kwFuXEe6T042_LMmSdQ)/AccessTablePageDefinition
// Name: service::User::userOwnedSelectAnswerVoteDefinitions::Access::Table::Page
export default function ServiceUserUserOwnedSelectAnswerVoteDefinitionsAccessTablePage() {
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
  const [data, setData] = useState<ServiceSelectAnswerVoteDefinitionStored[]>([]);

  // Dialog hooks
  const openServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteRelationTableCallSelector =
    useServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteRelationTableCallSelector();

  // Calculated section
  const title: string = t('Service.SelectAnswerVoteDefinition.SelectAnswerVoteDefinition_Table', {
    defaultValue: 'SelectAnswerVoteDefinition Table',
  });

  // Action section
  const serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_TableView = async (
    target?: ServiceSelectAnswerVoteDefinitionStored,
  ) => {
    // if the `target` is missing we are likely navigating to a relation table page, in which case we need the owner's id
    navigate(routeToServiceUserUserOwnedSelectAnswerVoteDefinitionsAccessViewPage(target!.__signedIdentifier));
  };
  const serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_TableTableFilter = async (
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
  const serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_TableTableRefresh = async (
    queryCustomizer: ServiceSelectAnswerVoteDefinitionQueryCustomizer,
  ): Promise<ServiceSelectAnswerVoteDefinitionStored[]> => {
    try {
      setIsLoading(true);
      setEditMode(false);
      return userServiceForUserOwnedSelectAnswerVoteDefinitionsImpl.list(undefined, queryCustomizer);
    } catch (error) {
      handleError(error);
      return Promise.reject(error);
    } finally {
      setIsLoading(false);
      setRefreshCounter((prevCounter) => prevCounter + 1);
    }
  };
  const serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteOperationFormTableRowCallButtonOpenSelector =
    async () => {
      const { result, data: returnedData } =
        await openServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteRelationTableCallSelector(
          [],
        );
      if (result === 'submit') {
      }
    };
  const serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupUserVoteVirtualForUserVoteTakeBackVote =
    async (target?: ServiceSelectAnswerVoteDefinitionStored) => {
      try {
        setIsLoading(true);
        await userServiceForUserOwnedSelectAnswerVoteDefinitionsImpl.takeBackVote(target!);

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

  const actions: ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_TablePageActions = {
    serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_TableView,
    serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_TableTableFilter,
    serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_TableTableRefresh,
    serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteOperationFormTableRowCallButtonOpenSelector,
    serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupUserVoteVirtualForUserVoteTakeBackVote,
  };

  // Effect section

  return (
    <Suspense>
      <PageContainerTransition>
        <ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_TablePageContainer
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
