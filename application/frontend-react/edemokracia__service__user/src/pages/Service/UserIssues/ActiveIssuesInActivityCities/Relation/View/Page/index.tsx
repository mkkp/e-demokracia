//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPagesForRouting(#application)
// Path expression: 'src/pages/'+#pagePath(#self)+'/index.tsx'
// Template name: actor/src/pages/index.tsx
// Template file: actor/src/pages/index.tsx.hbs

import { useCallback, useEffect, useRef, useState, lazy, Suspense } from 'react';
import { OBJECTCLASS } from '@pandino/pandino-api';
import { useTrackService } from '@pandino/react-hooks';
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
import { routeToServiceIssueCommentsRelationViewPage } from '~/routes';
import { useServiceIssueIssue_View_EditCloseDebateInputForm } from '~/dialogs/Service/Issue/Issue_View_Edit/CloseDebate/Input/Form';
import { useServiceIssueIssue_View_EditCreateCommentInputForm } from '~/dialogs/Service/Issue/Issue_View_Edit/CreateComment/Input/Form';
import { useServiceIssueIssue_View_EditCreateConArgumentInputForm } from '~/dialogs/Service/Issue/Issue_View_Edit/CreateConArgument/Input/Form';
import { useServiceIssueIssue_View_EditCreateProArgumentInputForm } from '~/dialogs/Service/Issue/Issue_View_Edit/CreateProArgument/Input/Form';
import { useServiceIssueIssue_View_EditIssueIssueTypeTabularReferenceFieldLinkSetSelectorPage } from '~/dialogs/Service/Issue/Issue_View_Edit/Issue/IssueType/TabularReferenceField/Link/Set/Selector/Page';
import { useServiceIssueIssue_View_EditIssueOwnerTabularReferenceFieldLinkSetSelectorPage } from '~/dialogs/Service/Issue/Issue_View_Edit/Issue/Owner/TabularReferenceField/Link/Set/Selector/Page';
import { useServiceIssueIssue_View_EditOtherAreaCityTabularReferenceFieldLinkSetSelectorPage } from '~/dialogs/Service/Issue/Issue_View_Edit/Other/Area/City/TabularReferenceField/Link/Set/Selector/Page';
import { useServiceIssueIssue_View_EditOtherAreaCountyTabularReferenceFieldLinkSetSelectorPage } from '~/dialogs/Service/Issue/Issue_View_Edit/Other/Area/County/TabularReferenceField/Link/Set/Selector/Page';
import { useServiceIssueIssue_View_EditOtherAreaDistrictTabularReferenceFieldLinkSetSelectorPage } from '~/dialogs/Service/Issue/Issue_View_Edit/Other/Area/District/TabularReferenceField/Link/Set/Selector/Page';
import { useServiceIssueIssue_View_EditOtherCategoriesCategoriesTabularReferenceFieldTableSetSelectorPage } from '~/dialogs/Service/Issue/Issue_View_Edit/Other/Categories/Categories/TabularReferenceField/Table/Set/Selector/Page';
import { useServiceIssueAttachmentsRelationFormPage } from '~/dialogs/Service/Issue/Attachments/Relation/Form/Page';
import { useServiceIssueAttachmentsRelationViewPage } from '~/dialogs/Service/Issue/Attachments/Relation/View/Page';
import { useServiceIssueCategoriesRelationViewPage } from '~/dialogs/Service/Issue/Categories/Relation/View/Page';
import { useServiceIssueCityRelationViewPage } from '~/dialogs/Service/Issue/City/Relation/View/Page';
import { useServiceIssueConsRelationViewPage } from '~/dialogs/Service/Issue/Cons/Relation/View/Page';
import { useServiceIssueCountyRelationViewPage } from '~/dialogs/Service/Issue/County/Relation/View/Page';
import { useServiceIssueDistrictRelationViewPage } from '~/dialogs/Service/Issue/District/Relation/View/Page';
import { useServiceIssueIssueTypeRelationViewPage } from '~/dialogs/Service/Issue/IssueType/Relation/View/Page';
import { useServiceIssueOwnerRelationViewPage } from '~/dialogs/Service/Issue/Owner/Relation/View/Page';
import { useServiceIssueProsRelationViewPage } from '~/dialogs/Service/Issue/Pros/Relation/View/Page';
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
  ServiceUserIssues,
  ServiceUserIssuesStored,
  VoteType,
} from '~/services/data-api';
import { serviceIssueServiceImpl } from '~/services/data-axios';
export type ServiceIssueIssue_View_EditPageActionsExtended = ServiceIssueIssue_View_EditPageActions & {
  postActivateForIssueAction?: () => Promise<void>;
  postAddToFavoritesForIssueAction?: () => Promise<void>;
  postCloseVoteForIssueAction?: () => Promise<void>;
  postDeleteOrArchiveForIssueAction?: () => Promise<void>;
  postRemoveFromFavoritesForIssueAction?: () => Promise<void>;
};

export const SERVICE_USER_ISSUES_ACTIVE_ISSUES_IN_ACTIVITY_CITIES_RELATION_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'ServiceIssueIssue_View_EditActionsHook';
export type ServiceIssueIssue_View_EditActionsHook = (
  data: ServiceIssueStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof ServiceIssue, value: any) => void,
) => ServiceIssueIssue_View_EditPageActionsExtended;

export const convertServiceUserIssuesActiveIssuesInActivityCitiesRelationViewPagePayload = (
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

// XMIID: User/(esm/_jlpVUFrWEe6gN-oVBDDIOQ)/RelationFeatureView
// Name: service::UserIssues::activeIssuesInActivityCities::Relation::View::Page
// Access: false
// Single Access: false
export default function ServiceUserIssuesActiveIssuesInActivityCitiesRelationViewPage() {
  // Router params section
  const { signedIdentifier } = useParams();

  // Hooks section
  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();
  const { navigate, back: navigateBack } = useJudoNavigation();
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
      payloadDiff.current![attributeName] = convertServiceUserIssuesActiveIssuesInActivityCitiesRelationViewPagePayload(
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

  // Pandino Action overrides
  const { service: customActionsHook } = useTrackService<ServiceIssueIssue_View_EditActionsHook>(
    `(${OBJECTCLASS}=${SERVICE_USER_ISSUES_ACTIVE_ISSUES_IN_ACTIVITY_CITIES_RELATION_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const customActions: ServiceIssueIssue_View_EditPageActionsExtended | undefined = customActionsHook?.(
    data,
    editMode,
    storeDiff,
  );

  // Dialog hooks
  const openServiceIssueIssue_View_EditCloseDebateInputForm = useServiceIssueIssue_View_EditCloseDebateInputForm();
  const openServiceIssueIssue_View_EditCreateCommentInputForm = useServiceIssueIssue_View_EditCreateCommentInputForm();
  const openServiceIssueIssue_View_EditCreateConArgumentInputForm =
    useServiceIssueIssue_View_EditCreateConArgumentInputForm();
  const openServiceIssueIssue_View_EditCreateProArgumentInputForm =
    useServiceIssueIssue_View_EditCreateProArgumentInputForm();
  const openServiceIssueIssue_View_EditIssueIssueTypeTabularReferenceFieldLinkSetSelectorPage =
    useServiceIssueIssue_View_EditIssueIssueTypeTabularReferenceFieldLinkSetSelectorPage();
  const openServiceIssueIssue_View_EditIssueOwnerTabularReferenceFieldLinkSetSelectorPage =
    useServiceIssueIssue_View_EditIssueOwnerTabularReferenceFieldLinkSetSelectorPage();
  const openServiceIssueIssue_View_EditOtherAreaCityTabularReferenceFieldLinkSetSelectorPage =
    useServiceIssueIssue_View_EditOtherAreaCityTabularReferenceFieldLinkSetSelectorPage();
  const openServiceIssueIssue_View_EditOtherAreaCountyTabularReferenceFieldLinkSetSelectorPage =
    useServiceIssueIssue_View_EditOtherAreaCountyTabularReferenceFieldLinkSetSelectorPage();
  const openServiceIssueIssue_View_EditOtherAreaDistrictTabularReferenceFieldLinkSetSelectorPage =
    useServiceIssueIssue_View_EditOtherAreaDistrictTabularReferenceFieldLinkSetSelectorPage();
  const openServiceIssueIssue_View_EditOtherCategoriesCategoriesTabularReferenceFieldTableSetSelectorPage =
    useServiceIssueIssue_View_EditOtherCategoriesCategoriesTabularReferenceFieldTableSetSelectorPage();
  const openServiceIssueAttachmentsRelationFormPage = useServiceIssueAttachmentsRelationFormPage();
  const openServiceIssueAttachmentsRelationViewPage = useServiceIssueAttachmentsRelationViewPage();
  const openServiceIssueCategoriesRelationViewPage = useServiceIssueCategoriesRelationViewPage();
  const openServiceIssueCityRelationViewPage = useServiceIssueCityRelationViewPage();
  const openServiceIssueConsRelationViewPage = useServiceIssueConsRelationViewPage();
  const openServiceIssueCountyRelationViewPage = useServiceIssueCountyRelationViewPage();
  const openServiceIssueDistrictRelationViewPage = useServiceIssueDistrictRelationViewPage();
  const openServiceIssueIssueTypeRelationViewPage = useServiceIssueIssueTypeRelationViewPage();
  const openServiceIssueOwnerRelationViewPage = useServiceIssueOwnerRelationViewPage();
  const openServiceIssueProsRelationViewPage = useServiceIssueProsRelationViewPage();

  // Calculated section
  const title: string = t('service.Issue.Issue_View_Edit', { defaultValue: 'Issue View / Edit' });

  // Action section
  const backAction = async () => {
    navigateBack();
  };
  const refreshAction = async (queryCustomizer: ServiceIssueQueryCustomizer): Promise<ServiceIssueStored> => {
    try {
      setIsLoading(true);
      setEditMode(false);
      const result = await serviceIssueServiceImpl.refresh(
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
  const cancelAction = async () => {
    // no need to set editMode to false, given refresh should do it implicitly
    await refreshAction(processQueryCustomizer(pageQueryCustomizer));
  };
  const updateAction = async () => {
    setIsLoading(true);

    try {
      const res = await serviceIssueServiceImpl.update(payloadDiff.current);

      if (res) {
        enqueueSnackbar(t('judo.action.save.success', { defaultValue: 'Changes saved' }), {
          variant: 'success',
          ...toastConfig.success,
        });
        setValidation(new Map<keyof ServiceIssue, string>());
        await actions.refreshAction!(pageQueryCustomizer);
        setEditMode(false);
      }
    } catch (error) {
      handleError<ServiceIssue>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const addToFavoritesForIssueAction = async () => {
    try {
      setIsLoading(true);
      await serviceIssueServiceImpl.addToFavorites(data);

      if (customActions?.postAddToFavoritesForIssueAction) {
        await customActions.postAddToFavoritesForIssueAction();
      } else {
        enqueueSnackbar(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
          {
            variant: 'success',
            ...toastConfig.success,
          },
        );

        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
        }
      }
    } catch (error) {
      handleError<ServiceIssue>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const createProArgumentAction = async () => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCreateProArgumentInputForm(data);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const deleteOrArchiveForIssueAction = async () => {
    try {
      setIsLoading(true);
      await serviceIssueServiceImpl.deleteOrArchive(data);

      if (customActions?.postDeleteOrArchiveForIssueAction) {
        await customActions.postDeleteOrArchiveForIssueAction();
      } else {
        enqueueSnackbar(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
          {
            variant: 'success',
            ...toastConfig.success,
          },
        );

        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
        }
      }
    } catch (error) {
      handleError<ServiceIssue>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const createCommentAction = async () => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCreateCommentInputForm(data);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const removeFromFavoritesForIssueAction = async () => {
    try {
      setIsLoading(true);
      await serviceIssueServiceImpl.removeFromFavorites(data);

      if (customActions?.postRemoveFromFavoritesForIssueAction) {
        await customActions.postRemoveFromFavoritesForIssueAction();
      } else {
        enqueueSnackbar(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
          {
            variant: 'success',
            ...toastConfig.success,
          },
        );

        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
        }
      }
    } catch (error) {
      handleError<ServiceIssue>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const activateForIssueAction = async () => {
    try {
      setIsLoading(true);
      await serviceIssueServiceImpl.activate(data);

      if (customActions?.postActivateForIssueAction) {
        await customActions.postActivateForIssueAction();
      } else {
        enqueueSnackbar(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
          {
            variant: 'success',
            ...toastConfig.success,
          },
        );

        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
        }
      }
    } catch (error) {
      handleError<ServiceIssue>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const createConArgumentAction = async () => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCreateConArgumentInputForm(data);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const closeDebateAction = async () => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCloseDebateInputForm(data);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const closeVoteForIssueAction = async () => {
    try {
      setIsLoading(true);
      await serviceIssueServiceImpl.closeVote(data);

      if (customActions?.postCloseVoteForIssueAction) {
        await customActions.postCloseVoteForIssueAction();
      } else {
        enqueueSnackbar(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
          {
            variant: 'success',
            ...toastConfig.success,
          },
        );

        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
        }
      }
    } catch (error) {
      handleError<ServiceIssue>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const attachmentsOpenPageAction = async (target?: ServiceIssueAttachmentStored) => {
    await openServiceIssueAttachmentsRelationViewPage(target!);

    if (!editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const attachmentsFilterAction = async (
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
  const attachmentsOpenFormAction = async () => {
    const { result, data: returnedData } = await openServiceIssueAttachmentsRelationFormPage(data);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const attachmentsDeleteAction = async (target: ServiceIssueAttachmentStored, silentMode?: boolean) => {
    try {
      const confirmed = !silentMode
        ? await openConfirmDialog(
            'row-delete-action',
            t('judo.modal.confirm.confirm-delete', {
              defaultValue: 'Are you sure you would like to delete the selected element?',
            }),
            t('judo.modal.confirm.confirm-title', { defaultValue: 'Confirm action' }),
          )
        : true;
      if (confirmed) {
        await serviceIssueServiceImpl.deleteAttachments(target);

        if (!silentMode) {
          enqueueSnackbar(t('judo.action.delete.success', { defaultValue: 'Delete successful' }), {
            variant: 'success',
            ...toastConfig.success,
          });

          refreshAction(pageQueryCustomizer);
        }
      }
    } catch (error) {
      if (!silentMode) {
        handleError<ServiceIssueAttachment>(error, undefined, target);
      }
    }
  };
  const attachmentsBulkDeleteAction = async (
    selectedRows: ServiceIssueAttachmentStored[],
  ): Promise<DialogResult<Array<ServiceIssueAttachmentStored>>> => {
    return new Promise((resolve) => {
      openCRUDDialog<ServiceIssueAttachmentStored>({
        dialogTitle: t('service.Issue.Issue_View_Edit.other.attachments.attachments.BulkDelete', {
          defaultValue: 'Delete',
        }),
        itemTitleFn: (item) => item.link!,
        selectedItems: selectedRows,
        action: async (item, successHandler: () => void, errorHandler: (error: any) => void) => {
          try {
            if (actions.attachmentsDeleteAction) {
              await actions.attachmentsDeleteAction!(item, true);
            }
            successHandler();
          } catch (error) {
            errorHandler(error);
          }
        },
        onClose: async (needsRefresh) => {
          if (needsRefresh) {
            if (actions.refreshAction) {
              await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
            }
            resolve({
              result: 'submit',
              data: [],
            });
          } else {
            resolve({
              result: 'close',
              data: [],
            });
          }
        },
      });
    });
  };
  const districtOpenPageAction = async (target?: ServiceDistrictStored) => {
    await openServiceIssueDistrictRelationViewPage(target!);

    if (!editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const districtOpenSetSelectorAction = async () => {
    const { result, data: returnedData } =
      await openServiceIssueIssue_View_EditOtherAreaDistrictTabularReferenceFieldLinkSetSelectorPage(
        data,
        data.district ? [data.district] : [],
      );
    if (result === 'submit') {
      if (Array.isArray(returnedData) && returnedData.length) {
        storeDiff('district', returnedData[0]);
      }
    }
  };
  const districtAutocompleteRangeAction = async (
    queryCustomizer: ServiceDistrictQueryCustomizer,
  ): Promise<ServiceDistrictStored[]> => {
    try {
      return serviceIssueServiceImpl.getRangeForDistrict(data, queryCustomizer);
    } catch (error) {
      handleError(error);
      return Promise.resolve([]);
    }
  };
  const districtUnsetAction = async (target: ServiceDistrictStored) => {
    storeDiff('district', null);
  };
  const categoriesOpenPageAction = async (target?: ServiceIssueCategoryStored) => {
    await openServiceIssueCategoriesRelationViewPage(target!);

    if (!editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const categoriesFilterAction = async (
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
  const categoriesOpenAddSelectorAction = async () => {
    const { result, data: returnedData } =
      await openServiceIssueIssue_View_EditOtherCategoriesCategoriesTabularReferenceFieldTableSetSelectorPage(
        data,
        data.categories ?? [],
      );
    if (result === 'submit') {
      if (Array.isArray(returnedData) && returnedData.length) {
        storeDiff('categories', [...(data.categories || []), ...returnedData]);
      }
    }
  };

  const categoriesClearAction = async () => {
    storeDiff('categories', []);
  };
  const categoriesRemoveAction = async (target?: ServiceIssueCategoryStored, silentMode?: boolean) => {
    if (target) {
      const newList = (data?.categories ?? []).filter((c) => c.__identifier !== target!.__identifier);
      storeDiff('categories', newList);
    }
  };
  const categoriesBulkRemoveAction = async (
    selectedRows: ServiceIssueCategoryStored[],
  ): Promise<DialogResult<Array<ServiceIssueCategoryStored>>> => {
    return new Promise((resolve) => {
      const selectedIds = selectedRows.map((r) => r.__identifier);
      const newList = (data?.categories ?? []).filter((c) => !selectedIds.includes(c.__identifier));
      storeDiff('categories', newList);
      resolve({
        result: 'submit',
        data: [],
      });
    });
  };
  const issueTypeOpenPageAction = async (target?: ServiceIssueTypeStored) => {
    await openServiceIssueIssueTypeRelationViewPage(target!);

    if (!editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const issueTypeOpenSetSelectorAction = async () => {
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
  const issueTypeAutocompleteRangeAction = async (
    queryCustomizer: ServiceIssueTypeQueryCustomizer,
  ): Promise<ServiceIssueTypeStored[]> => {
    try {
      return serviceIssueServiceImpl.getRangeForIssueType(data, queryCustomizer);
    } catch (error) {
      handleError(error);
      return Promise.resolve([]);
    }
  };
  const issueTypeUnsetAction = async (target: ServiceIssueTypeStored) => {
    storeDiff('issueType', null);
  };
  const consOpenPageAction = async (target?: ServiceConStored) => {
    await openServiceIssueConsRelationViewPage(target!);

    if (!editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const consFilterAction = async (
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
  const consDeleteAction = async (target: ServiceConStored, silentMode?: boolean) => {
    try {
      const confirmed = !silentMode
        ? await openConfirmDialog(
            'row-delete-action',
            t('judo.modal.confirm.confirm-delete', {
              defaultValue: 'Are you sure you would like to delete the selected element?',
            }),
            t('judo.modal.confirm.confirm-title', { defaultValue: 'Confirm action' }),
          )
        : true;
      if (confirmed) {
        await serviceIssueServiceImpl.deleteCons(target);

        if (!silentMode) {
          enqueueSnackbar(t('judo.action.delete.success', { defaultValue: 'Delete successful' }), {
            variant: 'success',
            ...toastConfig.success,
          });

          refreshAction(pageQueryCustomizer);
        }
      }
    } catch (error) {
      if (!silentMode) {
        handleError<ServiceCon>(error, undefined, target);
      }
    }
  };
  const consBulkDeleteAction = async (
    selectedRows: ServiceConStored[],
  ): Promise<DialogResult<Array<ServiceConStored>>> => {
    return new Promise((resolve) => {
      openCRUDDialog<ServiceConStored>({
        dialogTitle: t('service.Issue.Issue_View_Edit.other.arguments.cons.table.cons.BulkDelete', {
          defaultValue: 'Delete',
        }),
        itemTitleFn: (item) => item.title!,
        selectedItems: selectedRows,
        action: async (item, successHandler: () => void, errorHandler: (error: any) => void) => {
          try {
            if (actions.consDeleteAction) {
              await actions.consDeleteAction!(item, true);
            }
            successHandler();
          } catch (error) {
            errorHandler(error);
          }
        },
        onClose: async (needsRefresh) => {
          if (needsRefresh) {
            if (actions.refreshAction) {
              await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
            }
            resolve({
              result: 'submit',
              data: [],
            });
          } else {
            resolve({
              result: 'close',
              data: [],
            });
          }
        },
      });
    });
  };
  const prosOpenPageAction = async (target?: ServiceProStored) => {
    await openServiceIssueProsRelationViewPage(target!);

    if (!editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const prosFilterAction = async (
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
  const prosDeleteAction = async (target: ServiceProStored, silentMode?: boolean) => {
    try {
      const confirmed = !silentMode
        ? await openConfirmDialog(
            'row-delete-action',
            t('judo.modal.confirm.confirm-delete', {
              defaultValue: 'Are you sure you would like to delete the selected element?',
            }),
            t('judo.modal.confirm.confirm-title', { defaultValue: 'Confirm action' }),
          )
        : true;
      if (confirmed) {
        await serviceIssueServiceImpl.deletePros(target);

        if (!silentMode) {
          enqueueSnackbar(t('judo.action.delete.success', { defaultValue: 'Delete successful' }), {
            variant: 'success',
            ...toastConfig.success,
          });

          refreshAction(pageQueryCustomizer);
        }
      }
    } catch (error) {
      if (!silentMode) {
        handleError<ServicePro>(error, undefined, target);
      }
    }
  };
  const prosBulkDeleteAction = async (
    selectedRows: ServiceProStored[],
  ): Promise<DialogResult<Array<ServiceProStored>>> => {
    return new Promise((resolve) => {
      openCRUDDialog<ServiceProStored>({
        dialogTitle: t('service.Issue.Issue_View_Edit.other.arguments.pros.table.pros.BulkDelete', {
          defaultValue: 'Delete',
        }),
        itemTitleFn: (item) => item.title!,
        selectedItems: selectedRows,
        action: async (item, successHandler: () => void, errorHandler: (error: any) => void) => {
          try {
            if (actions.prosDeleteAction) {
              await actions.prosDeleteAction!(item, true);
            }
            successHandler();
          } catch (error) {
            errorHandler(error);
          }
        },
        onClose: async (needsRefresh) => {
          if (needsRefresh) {
            if (actions.refreshAction) {
              await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
            }
            resolve({
              result: 'submit',
              data: [],
            });
          } else {
            resolve({
              result: 'close',
              data: [],
            });
          }
        },
      });
    });
  };
  const commentsOpenPageAction = async (target?: ServiceCommentStored) => {
    // if the `target` is missing we are likely navigating to a relation table page, in which case we need the owner's id
    navigate(routeToServiceIssueCommentsRelationViewPage((target || data).__signedIdentifier));
  };
  const commentsFilterAction = async (
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
  const cityOpenPageAction = async (target?: ServiceCityStored) => {
    await openServiceIssueCityRelationViewPage(target!);

    if (!editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const cityOpenSetSelectorAction = async () => {
    const { result, data: returnedData } =
      await openServiceIssueIssue_View_EditOtherAreaCityTabularReferenceFieldLinkSetSelectorPage(
        data,
        data.city ? [data.city] : [],
      );
    if (result === 'submit') {
      if (Array.isArray(returnedData) && returnedData.length) {
        storeDiff('city', returnedData[0]);
      }
    }
  };
  const cityAutocompleteRangeAction = async (
    queryCustomizer: ServiceCityQueryCustomizer,
  ): Promise<ServiceCityStored[]> => {
    try {
      return serviceIssueServiceImpl.getRangeForCity(data, queryCustomizer);
    } catch (error) {
      handleError(error);
      return Promise.resolve([]);
    }
  };
  const cityUnsetAction = async (target: ServiceCityStored) => {
    storeDiff('city', null);
  };
  const countyOpenPageAction = async (target?: ServiceCountyStored) => {
    await openServiceIssueCountyRelationViewPage(target!);

    if (!editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const countyOpenSetSelectorAction = async () => {
    const { result, data: returnedData } =
      await openServiceIssueIssue_View_EditOtherAreaCountyTabularReferenceFieldLinkSetSelectorPage(
        data,
        data.county ? [data.county] : [],
      );
    if (result === 'submit') {
      if (Array.isArray(returnedData) && returnedData.length) {
        storeDiff('county', returnedData[0]);
      }
    }
  };
  const countyAutocompleteRangeAction = async (
    queryCustomizer: ServiceCountyQueryCustomizer,
  ): Promise<ServiceCountyStored[]> => {
    try {
      return serviceIssueServiceImpl.getRangeForCounty(data, queryCustomizer);
    } catch (error) {
      handleError(error);
      return Promise.resolve([]);
    }
  };
  const countyUnsetAction = async (target: ServiceCountyStored) => {
    storeDiff('county', null);
  };
  const ownerOpenPageAction = async (target?: ServiceServiceUserStored) => {
    await openServiceIssueOwnerRelationViewPage(target!);

    if (!editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const ownerOpenSetSelectorAction = async () => {
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
  const ownerAutocompleteRangeAction = async (
    queryCustomizer: ServiceServiceUserQueryCustomizer,
  ): Promise<ServiceServiceUserStored[]> => {
    try {
      return serviceIssueServiceImpl.getRangeForOwner(data, queryCustomizer);
    } catch (error) {
      handleError(error);
      return Promise.resolve([]);
    }
  };
  const ownerUnsetAction = async (target: ServiceServiceUserStored) => {
    storeDiff('owner', null);
  };

  const actions: ServiceIssueIssue_View_EditPageActions = {
    backAction,
    refreshAction,
    cancelAction,
    updateAction,
    addToFavoritesForIssueAction,
    createProArgumentAction,
    deleteOrArchiveForIssueAction,
    createCommentAction,
    removeFromFavoritesForIssueAction,
    activateForIssueAction,
    createConArgumentAction,
    closeDebateAction,
    closeVoteForIssueAction,
    attachmentsOpenPageAction,
    attachmentsFilterAction,
    attachmentsOpenFormAction,
    attachmentsDeleteAction,
    attachmentsBulkDeleteAction,
    districtOpenPageAction,
    districtOpenSetSelectorAction,
    districtAutocompleteRangeAction,
    districtUnsetAction,
    categoriesOpenPageAction,
    categoriesFilterAction,
    categoriesOpenAddSelectorAction,
    categoriesClearAction,
    categoriesRemoveAction,
    categoriesBulkRemoveAction,
    issueTypeOpenPageAction,
    issueTypeOpenSetSelectorAction,
    issueTypeAutocompleteRangeAction,
    issueTypeUnsetAction,
    consOpenPageAction,
    consFilterAction,
    consDeleteAction,
    consBulkDeleteAction,
    prosOpenPageAction,
    prosFilterAction,
    prosDeleteAction,
    prosBulkDeleteAction,
    commentsOpenPageAction,
    commentsFilterAction,
    cityOpenPageAction,
    cityOpenSetSelectorAction,
    cityAutocompleteRangeAction,
    cityUnsetAction,
    countyOpenPageAction,
    countyOpenSetSelectorAction,
    countyAutocompleteRangeAction,
    countyUnsetAction,
    ownerOpenPageAction,
    ownerOpenSetSelectorAction,
    ownerAutocompleteRangeAction,
    ownerUnsetAction,
    ...(customActions ?? {}),
  };

  // Effect section
  useEffect(() => {
    (async () => {
      await actions.refreshAction!(pageQueryCustomizer);
    })();
  }, []);

  return (
    <div
      id="User/(esm/_jlpVUFrWEe6gN-oVBDDIOQ)/RelationFeatureView"
      data-page-name="service::UserIssues::activeIssuesInActivityCities::Relation::View::Page"
    >
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
    </div>
  );
}
