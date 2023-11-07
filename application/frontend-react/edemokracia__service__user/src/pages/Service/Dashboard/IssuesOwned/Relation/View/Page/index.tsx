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
import { useServiceIssueIssue_View_EditCloseDebateInputForm } from '~/dialogs/Service/Issue/Issue_View_Edit/CloseDebate/Input/Form';
import { useServiceIssueIssue_View_EditIssueIssueTypeTabularReferenceFieldLinkSetSelectorPage } from '~/dialogs/Service/Issue/Issue_View_Edit/Issue/IssueType/TabularReferenceField/Link/Set/Selector/Page';
import { useServiceIssueIssue_View_EditIssueOwnerTabularReferenceFieldLinkSetSelectorPage } from '~/dialogs/Service/Issue/Issue_View_Edit/Issue/Owner/TabularReferenceField/Link/Set/Selector/Page';
import { useServiceIssueIssueTypeRelationViewPage } from '~/dialogs/Service/Issue/IssueType/Relation/View/Page';
import { useServiceIssueOwnerRelationViewPage } from '~/dialogs/Service/Issue/Owner/Relation/View/Page';
import type { ServiceIssueIssue_View_EditPageActions } from '~/containers/Service/Issue/Issue_View_Edit/ServiceIssueIssue_View_EditPageContainer';
import type {
  IssueScope,
  IssueStatus,
  ServiceCity,
  ServiceCityQueryCustomizer,
  ServiceCityStored,
  ServiceComment,
  ServiceCommentQueryCustomizer,
  ServiceCommentStored,
  ServiceCon,
  ServiceConQueryCustomizer,
  ServiceConStored,
  ServiceCounty,
  ServiceCountyQueryCustomizer,
  ServiceCountyStored,
  ServiceDashboard,
  ServiceDashboardStored,
  ServiceDistrict,
  ServiceDistrictQueryCustomizer,
  ServiceDistrictStored,
  ServiceIssue,
  ServiceIssueAttachment,
  ServiceIssueAttachmentQueryCustomizer,
  ServiceIssueAttachmentStored,
  ServiceIssueCategory,
  ServiceIssueCategoryQueryCustomizer,
  ServiceIssueCategoryStored,
  ServiceIssueQueryCustomizer,
  ServiceIssueStored,
  ServiceIssueType,
  ServiceIssueTypeQueryCustomizer,
  ServiceIssueTypeStored,
  ServicePro,
  ServiceProQueryCustomizer,
  ServiceProStored,
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
  VoteType,
} from '~/services/data-api';
import { serviceDashboardServiceForIssuesOwnedImpl } from '~/services/data-axios';

export const convertServiceDashboardIssuesOwnedRelationViewPagePayload = (
  attributeName: keyof ServiceIssue,
  value: any,
): any => {
  const dateTypes: string[] = [];
  const dateTimeTypes: string[] = ['debateCloseAt'];
  const timeTypes: string[] = [];
  if (dateTypes.includes(attributeName as string)) {
    return uiDateToServiceDate(value);
  } else if (dateTimeTypes.includes(attributeName as string)) {
    return value;
  } else if (timeTypes.includes(attributeName as string)) {
    return uiTimeToServiceTime(value);
  }
  return value;
};

const ServiceIssueIssue_View_EditPageContainer = lazy(
  () => import('~/containers/Service/Issue/Issue_View_Edit/ServiceIssueIssue_View_EditPageContainer'),
);

// XMIID: User/(esm/_OQ7kkIyQEe2VSOmaAz6G9Q)/RelationFeatureView
// Name: service::Dashboard::issuesOwned::Relation::View::Page
export default function ServiceDashboardIssuesOwnedRelationViewPage() {
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
  const [data, setData] = useState<ServiceIssueStored>({ __signedIdentifier: signedIdentifier } as ServiceIssueStored);
  const [validation, setValidation] = useState<Map<keyof ServiceIssue, string>>(new Map<keyof ServiceIssue, string>());

  // Ref section
  const payloadDiff = useRef<Record<keyof ServiceIssueStored, any>>(
    {} as unknown as Record<keyof ServiceIssueStored, any>,
  );

  // Callback section
  const storeDiff: (attributeName: keyof ServiceIssue, value: any) => void = useCallback(
    (attributeName: keyof ServiceIssue, value: any) => {
      payloadDiff.current![attributeName] = convertServiceDashboardIssuesOwnedRelationViewPagePayload(
        attributeName,
        value,
      );
      setData((prevData) => ({
        ...prevData,
        [attributeName]: value,
      }));
      if (!editMode) {
        setEditMode(true);
      }
    },
    [data, editMode],
  );
  const isFormUpdateable = useCallback(() => {
    return true && typeof data?.__updateable === 'boolean' && data?.__updateable;
  }, [data]);
  const isFormDeleteable = useCallback(() => {
    return true && typeof data?.__deleteable === 'boolean' && data?.__deleteable;
  }, [data]);

  const pageQueryCustomizer: ServiceIssueQueryCustomizer = {
    _mask:
      '{defaultVoteType,created,description,title,status,cons{title,upVotes,downVotes},pros{title,upVotes,downVotes},attachments{link,file,type},categories{title,description},comments{comment,created,createdByName,upVotes,downVotes},issueType{title,description},owner{representation},city{representation},county{representation},district{representation}}',
  };

  // Dialog hooks
  const openServiceIssueIssue_View_EditCloseDebateInputForm = useServiceIssueIssue_View_EditCloseDebateInputForm();
  const openServiceIssueIssue_View_EditIssueIssueTypeTabularReferenceFieldLinkSetSelectorPage =
    useServiceIssueIssue_View_EditIssueIssueTypeTabularReferenceFieldLinkSetSelectorPage();
  const openServiceIssueIssue_View_EditIssueOwnerTabularReferenceFieldLinkSetSelectorPage =
    useServiceIssueIssue_View_EditIssueOwnerTabularReferenceFieldLinkSetSelectorPage();
  const openServiceIssueIssueTypeRelationViewPage = useServiceIssueIssueTypeRelationViewPage();
  const openServiceIssueOwnerRelationViewPage = useServiceIssueOwnerRelationViewPage();

  // Calculated section
  const title: string = t('Service.Issue.Issue_View_Edit', { defaultValue: 'Issue View / Edit' });

  // Action section
  const serviceIssueIssue_View_EditBack = async () => {
    back();
  };
  const serviceIssueIssue_View_EditRefresh = async (
    queryCustomizer: ServiceIssueQueryCustomizer,
  ): Promise<ServiceIssueStored> => {
    try {
      setIsLoading(true);
      setEditMode(false);
      const result = await serviceDashboardServiceForIssuesOwnedImpl.refresh(
        { __signedIdentifier: signedIdentifier } as JudoIdentifiable<any>,
        pageQueryCustomizer,
      );

      setData(result);

      // re-set payloadDiff
      payloadDiff.current = {
        __identifier: result.__identifier,
        __signedIdentifier: result.__signedIdentifier,
        __version: result.__version,
        __entityType: result.__entityType,
      } as Record<keyof ServiceIssueStored, any>;

      return result;
    } catch (error) {
      handleError(error);
      return Promise.reject(error);
    } finally {
      setIsLoading(false);
      setRefreshCounter((prevCounter) => prevCounter + 1);
    }
  };
  const serviceIssueIssue_View_EditCancel = async () => {
    // no need to set editMode to false, given refresh should do it implicitly
    await serviceIssueIssue_View_EditRefresh(processQueryCustomizer(pageQueryCustomizer));
  };
  const serviceIssueIssue_View_EditUpdate = async () => {
    setIsLoading(true);

    try {
      const res = await serviceDashboardServiceForIssuesOwnedImpl.update(payloadDiff.current);

      if (res) {
        enqueueSnackbar(t('judo.action.save.success', { defaultValue: 'Changes saved' }), {
          variant: 'success',
          ...toastConfig.success,
        });
        setValidation(new Map<keyof ServiceIssue, string>());
        await actions.serviceIssueIssue_View_EditRefresh!(pageQueryCustomizer);
        setEditMode(false);
      }
    } catch (error) {
      handleError<ServiceIssue>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const serviceIssueIssue_View_EditDelete = async () => {
    try {
      const confirmed = await openConfirmDialog(
        'row-delete-action',
        t('judo.modal.confirm.confirm-delete', {
          defaultValue: 'Are you sure you would like to delete the selected element?',
        }),
        t('judo.modal.confirm.confirm-title', { defaultValue: 'Confirm action' }),
      );
      if (confirmed) {
        await serviceDashboardServiceForIssuesOwnedImpl.delete(data);

        enqueueSnackbar(t('judo.action.delete.success', { defaultValue: 'Delete successful' }), {
          variant: 'success',
          ...toastConfig.success,
        });

        back();
      }
    } catch (error) {
      handleError(error, undefined, data);
    }
  };
  const serviceIssueIssue_View_EditActionsPageActionButtonsActivate = async () => {
    try {
      setIsLoading(true);
      await serviceDashboardServiceForIssuesOwnedImpl.activate(data);

      enqueueSnackbar(
        t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        {
          variant: 'success',
          ...toastConfig.success,
        },
      );

      if (!editMode) {
        await actions.serviceIssueIssue_View_EditRefresh!(processQueryCustomizer(pageQueryCustomizer));
      }
    } catch (error) {
      handleError<ServiceIssue>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const serviceIssueIssue_View_EditActionsPageActionButtonsCloseVote = async () => {
    try {
      setIsLoading(true);
      await serviceDashboardServiceForIssuesOwnedImpl.closeVote(data);

      enqueueSnackbar(
        t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        {
          variant: 'success',
          ...toastConfig.success,
        },
      );

      if (!editMode) {
        await actions.serviceIssueIssue_View_EditRefresh!(processQueryCustomizer(pageQueryCustomizer));
      }
    } catch (error) {
      handleError<ServiceIssue>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const serviceIssueIssue_View_EditActionsPageActionButtonsDeleteOrArchive = async () => {
    try {
      setIsLoading(true);
      await serviceDashboardServiceForIssuesOwnedImpl.deleteOrArchive(data);

      enqueueSnackbar(
        t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        {
          variant: 'success',
          ...toastConfig.success,
        },
      );

      if (!editMode) {
        await actions.serviceIssueIssue_View_EditRefresh!(processQueryCustomizer(pageQueryCustomizer));
      }
    } catch (error) {
      handleError<ServiceIssue>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const serviceIssueIssue_View_EditActionsPageActionButtonsRemoveFromFavorites = async () => {
    try {
      setIsLoading(true);
      await serviceDashboardServiceForIssuesOwnedImpl.removeFromFavorites(data);

      enqueueSnackbar(
        t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        {
          variant: 'success',
          ...toastConfig.success,
        },
      );

      if (!editMode) {
        await actions.serviceIssueIssue_View_EditRefresh!(processQueryCustomizer(pageQueryCustomizer));
      }
    } catch (error) {
      handleError<ServiceIssue>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const serviceIssueIssue_View_EditActionsPageActionButtonsCloseDebateOpenForm = async () => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCloseDebateInputForm(data);
    if (!editMode) {
      await actions.serviceIssueIssue_View_EditRefresh!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const serviceIssueIssue_View_EditActionsPageActionButtonsAddToFavorites = async () => {
    try {
      setIsLoading(true);
      await serviceDashboardServiceForIssuesOwnedImpl.addToFavorites(data);

      enqueueSnackbar(
        t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        {
          variant: 'success',
          ...toastConfig.success,
        },
      );

      if (!editMode) {
        await actions.serviceIssueIssue_View_EditRefresh!(processQueryCustomizer(pageQueryCustomizer));
      }
    } catch (error) {
      handleError<ServiceIssue>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const serviceIssueIssue_View_EditIssueOwnerView = async (target?: ServiceServiceUserStored) => {
    await openServiceIssueOwnerRelationViewPage(target!);

    if (!editMode) {
      await actions.serviceIssueIssue_View_EditRefresh!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const serviceIssueIssue_View_EditIssueOwnerSetOpenSelector = async () => {
    const { result, data: returnedData } =
      await openServiceIssueIssue_View_EditIssueOwnerTabularReferenceFieldLinkSetSelectorPage(
        data,
        data.owner ? [data.owner] : [],
      );
    if (result === 'submit') {
      if (Array.isArray(returnedData) && returnedData.length) {
        storeDiff('owner', returnedData[0]);
      }
    }
  };
  const serviceIssueIssue_View_EditIssueOwnerAutocomplete = async (
    queryCustomizer: ServiceServiceUserQueryCustomizer,
  ): Promise<ServiceServiceUserStored[]> => {
    try {
      return serviceDashboardServiceForIssuesOwnedImpl.getRangeForOwner(data, queryCustomizer);
    } catch (error) {
      handleError(error);
      return Promise.resolve([]);
    }
  };
  const serviceIssueIssue_View_EditIssueOwnerUnset = async (target: ServiceServiceUserStored) => {
    storeDiff('owner', null);
  };
  const serviceIssueIssue_View_EditIssueIssueTypeView = async (target?: ServiceIssueTypeStored) => {
    await openServiceIssueIssueTypeRelationViewPage(target!);

    if (!editMode) {
      await actions.serviceIssueIssue_View_EditRefresh!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const serviceIssueIssue_View_EditIssueIssueTypeSetOpenSelector = async () => {
    const { result, data: returnedData } =
      await openServiceIssueIssue_View_EditIssueIssueTypeTabularReferenceFieldLinkSetSelectorPage(
        data,
        data.issueType ? [data.issueType] : [],
      );
    if (result === 'submit') {
      if (Array.isArray(returnedData) && returnedData.length) {
        storeDiff('issueType', returnedData[0]);
      }
    }
  };
  const serviceIssueIssue_View_EditIssueIssueTypeAutocomplete = async (
    queryCustomizer: ServiceIssueTypeQueryCustomizer,
  ): Promise<ServiceIssueTypeStored[]> => {
    try {
      return serviceDashboardServiceForIssuesOwnedImpl.getRangeForIssueType(data, queryCustomizer);
    } catch (error) {
      handleError(error);
      return Promise.resolve([]);
    }
  };
  const serviceIssueIssue_View_EditIssueIssueTypeUnset = async (target: ServiceIssueTypeStored) => {
    storeDiff('issueType', null);
  };

  const actions: ServiceIssueIssue_View_EditPageActions = {
    serviceIssueIssue_View_EditBack,
    serviceIssueIssue_View_EditRefresh,
    serviceIssueIssue_View_EditCancel,
    serviceIssueIssue_View_EditUpdate,
    serviceIssueIssue_View_EditDelete,
    serviceIssueIssue_View_EditActionsPageActionButtonsActivate,
    serviceIssueIssue_View_EditActionsPageActionButtonsCloseVote,
    serviceIssueIssue_View_EditActionsPageActionButtonsDeleteOrArchive,
    serviceIssueIssue_View_EditActionsPageActionButtonsRemoveFromFavorites,
    serviceIssueIssue_View_EditActionsPageActionButtonsCloseDebateOpenForm,
    serviceIssueIssue_View_EditActionsPageActionButtonsAddToFavorites,
    serviceIssueIssue_View_EditIssueOwnerView,
    serviceIssueIssue_View_EditIssueOwnerSetOpenSelector,
    serviceIssueIssue_View_EditIssueOwnerAutocomplete,
    serviceIssueIssue_View_EditIssueOwnerUnset,
    serviceIssueIssue_View_EditIssueIssueTypeView,
    serviceIssueIssue_View_EditIssueIssueTypeSetOpenSelector,
    serviceIssueIssue_View_EditIssueIssueTypeAutocomplete,
    serviceIssueIssue_View_EditIssueIssueTypeUnset,
  };

  // Effect section
  useEffect(() => {
    (async () => {
      await actions.serviceIssueIssue_View_EditRefresh!(pageQueryCustomizer);
    })();
  }, []);

  return (
    <Suspense>
      <PageContainerTransition>
        <ServiceIssueIssue_View_EditPageContainer
          title={title}
          actions={actions}
          isLoading={isLoading}
          editMode={editMode}
          refreshCounter={refreshCounter}
          data={data}
          storeDiff={storeDiff}
          isFormUpdateable={isFormUpdateable}
          isFormDeleteable={isFormDeleteable}
          validation={validation}
          setValidation={setValidation}
        />
      </PageContainerTransition>
    </Suspense>
  );
}
