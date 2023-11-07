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
import { routeToServiceUserIssuesActiveIssuesInResidentDistrictRelationViewPage } from '~/routes';
import { useServiceIssueIssue_View_EditCloseDebateInputForm } from '~/dialogs/Service/Issue/Issue_View_Edit/CloseDebate/Input/Form';
import type { ServiceIssueIssue_TablePageActions } from '~/containers/Service/Issue/Issue_Table/ServiceIssueIssue_TablePageContainer';
import type {
  IssueScope,
  IssueStatus,
  ServiceIssue,
  ServiceIssueQueryCustomizer,
  ServiceIssueStored,
  ServiceUserIssues,
  ServiceUserIssuesStored,
  VoteType,
} from '~/services/data-api';
import { serviceUserIssuesServiceForActiveIssuesInResidentDistrictImpl } from '~/services/data-axios';

const ServiceIssueIssue_TablePageContainer = lazy(
  () => import('~/containers/Service/Issue/Issue_Table/ServiceIssueIssue_TablePageContainer'),
);

// XMIID: User/(esm/_dmHCgFrbEe6gN-oVBDDIOQ)/RelationFeatureTable
// Name: service::UserIssues::activeIssuesInResidentDistrict::Relation::Table::Page
export default function ServiceUserIssuesActiveIssuesInResidentDistrictRelationTablePage() {
  // Router params section
  const { signedIdentifier } = useParams();

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
  const [data, setData] = useState<ServiceIssueStored[]>([]);

  // Dialog hooks
  const openServiceIssueIssue_View_EditCloseDebateInputForm = useServiceIssueIssue_View_EditCloseDebateInputForm();

  // Calculated section
  const title: string = t('Service.Issue.Issue_Table', { defaultValue: 'Issue Table' });

  // Action section
  const serviceIssueIssue_TableBack = async () => {
    back();
  };
  const serviceIssueIssue_TableView = async (target?: ServiceIssueStored) => {
    // if the `target` is missing we are likely navigating to a relation table page, in which case we need the owner's id
    navigate(routeToServiceUserIssuesActiveIssuesInResidentDistrictRelationViewPage(target!.__signedIdentifier));
  };
  const serviceIssueIssue_TableTableFilter = async (
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
  const serviceIssueIssue_TableTableRefresh = async (
    queryCustomizer: ServiceIssueQueryCustomizer,
  ): Promise<ServiceIssueStored[]> => {
    try {
      setIsLoading(true);
      setEditMode(false);
      return serviceUserIssuesServiceForActiveIssuesInResidentDistrictImpl.list(
        { __signedIdentifier: signedIdentifier } as JudoIdentifiable<any>,
        queryCustomizer,
      );
    } catch (error) {
      handleError(error);
      return Promise.reject(error);
    } finally {
      setIsLoading(false);
      setRefreshCounter((prevCounter) => prevCounter + 1);
    }
  };
  const serviceIssueIssue_View_EditActionsPageActionButtonsActivate = async (target?: ServiceIssueStored) => {
    try {
      setIsLoading(true);
      await serviceUserIssuesServiceForActiveIssuesInResidentDistrictImpl.activate(target!);

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
  const serviceIssueIssue_View_EditActionsPageActionButtonsCloseVote = async (target?: ServiceIssueStored) => {
    try {
      setIsLoading(true);
      await serviceUserIssuesServiceForActiveIssuesInResidentDistrictImpl.closeVote(target!);

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
  const serviceIssueIssue_View_EditActionsPageActionButtonsDeleteOrArchive = async (target?: ServiceIssueStored) => {
    try {
      setIsLoading(true);
      await serviceUserIssuesServiceForActiveIssuesInResidentDistrictImpl.deleteOrArchive(target!);

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
  const serviceIssueIssue_View_EditActionsPageActionButtonsRemoveFromFavorites = async (
    target?: ServiceIssueStored,
  ) => {
    try {
      setIsLoading(true);
      await serviceUserIssuesServiceForActiveIssuesInResidentDistrictImpl.removeFromFavorites(target!);

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
  const serviceIssueIssue_View_EditActionsPageActionButtonsCloseDebateOpenForm = async (target: ServiceIssueStored) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCloseDebateInputForm(target);
    setRefreshCounter((prev) => prev + 1);
  };
  const serviceIssueIssue_View_EditActionsPageActionButtonsAddToFavorites = async (target?: ServiceIssueStored) => {
    try {
      setIsLoading(true);
      await serviceUserIssuesServiceForActiveIssuesInResidentDistrictImpl.addToFavorites(target!);

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

  const actions: ServiceIssueIssue_TablePageActions = {
    serviceIssueIssue_TableBack,
    serviceIssueIssue_TableView,
    serviceIssueIssue_TableTableFilter,
    serviceIssueIssue_TableTableRefresh,
    serviceIssueIssue_View_EditActionsPageActionButtonsActivate,
    serviceIssueIssue_View_EditActionsPageActionButtonsCloseVote,
    serviceIssueIssue_View_EditActionsPageActionButtonsDeleteOrArchive,
    serviceIssueIssue_View_EditActionsPageActionButtonsRemoveFromFavorites,
    serviceIssueIssue_View_EditActionsPageActionButtonsCloseDebateOpenForm,
    serviceIssueIssue_View_EditActionsPageActionButtonsAddToFavorites,
  };

  // Effect section

  return (
    <Suspense>
      <PageContainerTransition>
        <ServiceIssueIssue_TablePageContainer
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
