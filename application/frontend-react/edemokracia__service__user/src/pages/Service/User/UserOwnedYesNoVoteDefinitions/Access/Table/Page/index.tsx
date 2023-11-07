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
import { routeToServiceUserUserOwnedYesNoVoteDefinitionsAccessViewPage } from '~/routes';
import { useServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditVoteInputForm } from '~/dialogs/Service/YesNoVoteDefinition/YesNoVoteDefinition_View_Edit/Vote/Input/Form';
import type { ServiceYesNoVoteDefinitionYesNoVoteDefinition_TablePageActions } from '~/containers/Service/YesNoVoteDefinition/YesNoVoteDefinition_Table/ServiceYesNoVoteDefinitionYesNoVoteDefinition_TablePageContainer';
import type {
  ServiceYesNoVoteDefinition,
  ServiceYesNoVoteDefinitionQueryCustomizer,
  ServiceYesNoVoteDefinitionStored,
  VoteStatus,
} from '~/services/data-api';
import { userServiceForUserOwnedYesNoVoteDefinitionsImpl } from '~/services/data-axios';

const ServiceYesNoVoteDefinitionYesNoVoteDefinition_TablePageContainer = lazy(
  () =>
    import(
      '~/containers/Service/YesNoVoteDefinition/YesNoVoteDefinition_Table/ServiceYesNoVoteDefinitionYesNoVoteDefinition_TablePageContainer'
    ),
);

// XMIID: User/(esm/_zCZh0FoTEe6_67aMO2jOsw)/AccessTablePageDefinition
// Name: service::User::userOwnedYesNoVoteDefinitions::Access::Table::Page
export default function ServiceUserUserOwnedYesNoVoteDefinitionsAccessTablePage() {
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
  const [data, setData] = useState<ServiceYesNoVoteDefinitionStored[]>([]);

  // Dialog hooks
  const openServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditVoteInputForm =
    useServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditVoteInputForm();

  // Calculated section
  const title: string = t('Service.YesNoVoteDefinition.YesNoVoteDefinition_Table', {
    defaultValue: 'YesNoVoteDefinition Table',
  });

  // Action section
  const serviceYesNoVoteDefinitionYesNoVoteDefinition_TableView = async (target?: ServiceYesNoVoteDefinitionStored) => {
    // if the `target` is missing we are likely navigating to a relation table page, in which case we need the owner's id
    navigate(routeToServiceUserUserOwnedYesNoVoteDefinitionsAccessViewPage(target!.__signedIdentifier));
  };
  const serviceYesNoVoteDefinitionYesNoVoteDefinition_TableTableFilter = async (
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
  const serviceYesNoVoteDefinitionYesNoVoteDefinition_TableTableRefresh = async (
    queryCustomizer: ServiceYesNoVoteDefinitionQueryCustomizer,
  ): Promise<ServiceYesNoVoteDefinitionStored[]> => {
    try {
      setIsLoading(true);
      setEditMode(false);
      return userServiceForUserOwnedYesNoVoteDefinitionsImpl.list(undefined, queryCustomizer);
    } catch (error) {
      handleError(error);
      return Promise.reject(error);
    } finally {
      setIsLoading(false);
      setRefreshCounter((prevCounter) => prevCounter + 1);
    }
  };
  const serviceYesNoVoteDefinitionYesNoVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteOpenForm = async (
    target: ServiceYesNoVoteDefinitionStored,
  ) => {
    const { result, data: returnedData } =
      await openServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditVoteInputForm(target);
    setRefreshCounter((prev) => prev + 1);
  };
  const serviceYesNoVoteDefinitionYesNoVoteDefinition_View_EditUserVoteEntryGroupUserVoteVirtualForUserVoteTakeBackVote =
    async (target?: ServiceYesNoVoteDefinitionStored) => {
      try {
        setIsLoading(true);
        await userServiceForUserOwnedYesNoVoteDefinitionsImpl.takeBackVote(target!);

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

  const actions: ServiceYesNoVoteDefinitionYesNoVoteDefinition_TablePageActions = {
    serviceYesNoVoteDefinitionYesNoVoteDefinition_TableView,
    serviceYesNoVoteDefinitionYesNoVoteDefinition_TableTableFilter,
    serviceYesNoVoteDefinitionYesNoVoteDefinition_TableTableRefresh,
    serviceYesNoVoteDefinitionYesNoVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteOpenForm,
    serviceYesNoVoteDefinitionYesNoVoteDefinition_View_EditUserVoteEntryGroupUserVoteVirtualForUserVoteTakeBackVote,
  };

  // Effect section

  return (
    <Suspense>
      <PageContainerTransition>
        <ServiceYesNoVoteDefinitionYesNoVoteDefinition_TablePageContainer
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
