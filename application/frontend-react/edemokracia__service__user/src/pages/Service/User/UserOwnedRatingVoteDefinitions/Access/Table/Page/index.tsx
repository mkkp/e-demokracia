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
import { routeToServiceUserUserOwnedRatingVoteDefinitionsAccessViewPage } from '~/routes';
import { useServiceRatingVoteDefinitionRatingVoteDefinition_View_EditVoteInputForm } from '~/dialogs/Service/RatingVoteDefinition/RatingVoteDefinition_View_Edit/Vote/Input/Form';
import type { ServiceRatingVoteDefinitionRatingVoteDefinition_TablePageActions } from '~/containers/Service/RatingVoteDefinition/RatingVoteDefinition_Table/ServiceRatingVoteDefinitionRatingVoteDefinition_TablePageContainer';
import type {
  ServiceRatingVoteDefinition,
  ServiceRatingVoteDefinitionQueryCustomizer,
  ServiceRatingVoteDefinitionStored,
  VoteStatus,
} from '~/services/data-api';
import { userServiceForUserOwnedRatingVoteDefinitionsImpl } from '~/services/data-axios';

const ServiceRatingVoteDefinitionRatingVoteDefinition_TablePageContainer = lazy(
  () =>
    import(
      '~/containers/Service/RatingVoteDefinition/RatingVoteDefinition_Table/ServiceRatingVoteDefinitionRatingVoteDefinition_TablePageContainer'
    ),
);

// XMIID: User/(esm/_s3Fx0FuiEe6rLvwZQOpyUA)/AccessTablePageDefinition
// Name: service::User::userOwnedRatingVoteDefinitions::Access::Table::Page
export default function ServiceUserUserOwnedRatingVoteDefinitionsAccessTablePage() {
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
  const [data, setData] = useState<ServiceRatingVoteDefinitionStored[]>([]);

  // Dialog hooks
  const openServiceRatingVoteDefinitionRatingVoteDefinition_View_EditVoteInputForm =
    useServiceRatingVoteDefinitionRatingVoteDefinition_View_EditVoteInputForm();

  // Calculated section
  const title: string = t('Service.RatingVoteDefinition.RatingVoteDefinition_Table', {
    defaultValue: 'RatingVoteDefinition Table',
  });

  // Action section
  const serviceRatingVoteDefinitionRatingVoteDefinition_TableView = async (
    target?: ServiceRatingVoteDefinitionStored,
  ) => {
    // if the `target` is missing we are likely navigating to a relation table page, in which case we need the owner's id
    navigate(routeToServiceUserUserOwnedRatingVoteDefinitionsAccessViewPage(target!.__signedIdentifier));
  };
  const serviceRatingVoteDefinitionRatingVoteDefinition_TableTableFilter = async (
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
  const serviceRatingVoteDefinitionRatingVoteDefinition_TableTableRefresh = async (
    queryCustomizer: ServiceRatingVoteDefinitionQueryCustomizer,
  ): Promise<ServiceRatingVoteDefinitionStored[]> => {
    try {
      setIsLoading(true);
      setEditMode(false);
      return userServiceForUserOwnedRatingVoteDefinitionsImpl.list(undefined, queryCustomizer);
    } catch (error) {
      handleError(error);
      return Promise.reject(error);
    } finally {
      setIsLoading(false);
      setRefreshCounter((prevCounter) => prevCounter + 1);
    }
  };
  const serviceRatingVoteDefinitionRatingVoteDefinition_View_EditUserVoteEntryGroupUserVoteVirtualForUserVoteTakeBackVote =
    async (target?: ServiceRatingVoteDefinitionStored) => {
      try {
        setIsLoading(true);
        await userServiceForUserOwnedRatingVoteDefinitionsImpl.takeBackVote(target!);

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
  const serviceRatingVoteDefinitionRatingVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteOpenForm = async (
    target: ServiceRatingVoteDefinitionStored,
  ) => {
    const { result, data: returnedData } =
      await openServiceRatingVoteDefinitionRatingVoteDefinition_View_EditVoteInputForm(target);
    setRefreshCounter((prev) => prev + 1);
  };

  const actions: ServiceRatingVoteDefinitionRatingVoteDefinition_TablePageActions = {
    serviceRatingVoteDefinitionRatingVoteDefinition_TableView,
    serviceRatingVoteDefinitionRatingVoteDefinition_TableTableFilter,
    serviceRatingVoteDefinitionRatingVoteDefinition_TableTableRefresh,
    serviceRatingVoteDefinitionRatingVoteDefinition_View_EditUserVoteEntryGroupUserVoteVirtualForUserVoteTakeBackVote,
    serviceRatingVoteDefinitionRatingVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteOpenForm,
  };

  // Effect section

  return (
    <Suspense>
      <PageContainerTransition>
        <ServiceRatingVoteDefinitionRatingVoteDefinition_TablePageContainer
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
