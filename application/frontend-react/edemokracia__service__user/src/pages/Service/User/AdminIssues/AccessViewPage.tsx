//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPagesForRouting(#application)
// Path expression: 'src/pages/'+#pagePath(#self)+'.tsx'
// Template name: actor/src/pages/index.tsx
// Template file: actor/src/pages/index.tsx.hbs

import type { GridFilterModel } from '@mui/x-data-grid';
import { OBJECTCLASS } from '@pandino/pandino-api';
import { useTrackService } from '@pandino/react-hooks';
import { Suspense, createContext, lazy, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import type { Dispatch, FC, ReactNode, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useJudoNavigation } from '~/components';
import type { Filter, FilterOption } from '~/components-api';
import { useConfirmDialog, useFilterDialog } from '~/components/dialog';
import type {
  ServiceIssueIssue_View_EditPageActions,
  ServiceIssueIssue_View_EditPageProps,
} from '~/containers/Service/Issue/Issue_View_Edit/ServiceIssueIssue_View_EditPageContainer';
import { useServiceIssueAttachmentsRelationFormPage } from '~/dialogs/Service/Issue/Attachments/RelationFormPage';
import { useServiceIssueAttachmentsRelationViewPage } from '~/dialogs/Service/Issue/Attachments/RelationViewPage';
import { useServiceIssueCategoriesRelationViewPage } from '~/dialogs/Service/Issue/Categories/RelationViewPage';
import { useServiceIssueCityRelationViewPage } from '~/dialogs/Service/Issue/City/RelationViewPage';
import { useServiceIssueConsRelationViewPage } from '~/dialogs/Service/Issue/Cons/RelationViewPage';
import { useServiceIssueCountyRelationViewPage } from '~/dialogs/Service/Issue/County/RelationViewPage';
import { useServiceIssueDistrictRelationViewPage } from '~/dialogs/Service/Issue/District/RelationViewPage';
import { useServiceIssueIssueTypeRelationViewPage } from '~/dialogs/Service/Issue/IssueType/RelationViewPage';
import { useServiceIssueIssue_View_EditCloseDebateInputForm } from '~/dialogs/Service/Issue/Issue_View_Edit/CloseDebate/Input/Form';
import { useServiceIssueIssue_View_EditCreateCommentInputForm } from '~/dialogs/Service/Issue/Issue_View_Edit/CreateComment/Input/Form';
import { useServiceIssueIssue_View_EditCreateConArgumentInputForm } from '~/dialogs/Service/Issue/Issue_View_Edit/CreateConArgument/Input/Form';
import { useServiceIssueIssue_View_EditCreateProArgumentInputForm } from '~/dialogs/Service/Issue/Issue_View_Edit/CreateProArgument/Input/Form';
import { useServiceIssueIssue_View_EditIssueIssueTypeLinkSetSelectorPage } from '~/dialogs/Service/Issue/Issue_View_Edit/Issue/IssueType/LinkSetSelectorPage';
import { useServiceIssueIssue_View_EditIssueOwnerLinkSetSelectorPage } from '~/dialogs/Service/Issue/Issue_View_Edit/Issue/Owner/LinkSetSelectorPage';
import { useServiceIssueIssue_View_EditOtherAreaCityLinkSetSelectorPage } from '~/dialogs/Service/Issue/Issue_View_Edit/Other/Area/City/LinkSetSelectorPage';
import { useServiceIssueIssue_View_EditOtherAreaCountyLinkSetSelectorPage } from '~/dialogs/Service/Issue/Issue_View_Edit/Other/Area/County/LinkSetSelectorPage';
import { useServiceIssueIssue_View_EditOtherAreaDistrictLinkSetSelectorPage } from '~/dialogs/Service/Issue/Issue_View_Edit/Other/Area/District/LinkSetSelectorPage';
import { useServiceIssueIssue_View_EditOtherCategoriesCategoriesTableAddSelectorPage } from '~/dialogs/Service/Issue/Issue_View_Edit/Other/Categories/Categories/TableAddSelectorPage';
import { useServiceIssueOwnerRelationViewPage } from '~/dialogs/Service/Issue/Owner/RelationViewPage';
import { useServiceIssueProsRelationViewPage } from '~/dialogs/Service/Issue/Pros/RelationViewPage';
import { useCRUDDialog, useSnacks, useViewData } from '~/hooks';
import { routeToServiceIssueCommentsRelationViewPage } from '~/routes';
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
  VoteType,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import type { JudoRestResponse } from '~/services/data-api/rest';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { UserServiceForAdminIssuesImpl } from '~/services/data-axios/UserServiceForAdminIssuesImpl';
import { PageContainerTransition } from '~/theme/animations';
import { cleanUpPayload, processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';

export type ServiceIssueIssue_View_EditPageActionsExtended = ServiceIssueIssue_View_EditPageActions & {
  postActivateForIssueAction?: () => Promise<void>;
  postAddToFavoritesForIssueAction?: () => Promise<void>;
  postCloseVoteForIssueAction?: () => Promise<void>;
  postDeleteOrArchiveForIssueAction?: () => Promise<void>;
  postRemoveFromFavoritesForIssueAction?: () => Promise<void>;
  postRefreshAction?: (
    data: ServiceIssueStored,
    storeDiff: (attributeName: keyof ServiceIssue, value: any) => void,
    setValidation: Dispatch<SetStateAction<Map<keyof ServiceIssue, string>>>,
  ) => Promise<void>;
};

export const SERVICE_USER_ADMIN_ISSUES_ACCESS_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_USER_ADMIN_ISSUES_ACCESS_VIEW_PAGE_ACTIONS_HOOK';
export type ServiceIssueIssue_View_EditActionsHook = (
  data: ServiceIssueStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof ServiceIssue, value: any) => void,

  refresh: () => Promise<void>,
  submit: () => Promise<void>,
) => ServiceIssueIssue_View_EditPageActionsExtended;

export interface ServiceIssueIssue_View_EditViewModel extends ServiceIssueIssue_View_EditPageProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setEditMode: Dispatch<SetStateAction<boolean>>;
  refresh: () => Promise<void>;
}

const ServiceIssueIssue_View_EditViewModelContext = createContext<ServiceIssueIssue_View_EditViewModel>({} as any);
export const useServiceIssueIssue_View_EditViewModel = () => {
  const context = useContext(ServiceIssueIssue_View_EditViewModelContext);
  if (!context) {
    throw new Error(
      'useServiceIssueIssue_View_EditViewModel must be used within a(n) ServiceIssueIssue_View_EditViewModelProvider',
    );
  }
  return context;
};

export const convertServiceUserAdminIssuesAccessViewPagePayload = (
  attributeName: keyof ServiceIssue,
  value: any,
): any => {
  const dateTimeTypes: string[] = ['debateCloseAt'];
  if (dateTimeTypes.includes(attributeName as string)) {
    return value;
  }
  return value;
};

const ServiceIssueIssue_View_EditPageContainer = lazy(
  () => import('~/containers/Service/Issue/Issue_View_Edit/ServiceIssueIssue_View_EditPageContainer'),
);

// XMIID: User/(esm/_iuCGQId_Ee2kLcMqsIbMgQ)/AccessViewPageDefinition
// Name: service::User::adminIssues::AccessViewPage
export default function ServiceUserAdminIssuesAccessViewPage() {
  // Router params section
  const { signedIdentifier } = useParams();

  // Services
  const userServiceForAdminIssuesImpl = useMemo(() => new UserServiceForAdminIssuesImpl(judoAxiosProvider), []);

  // Hooks section
  const { t } = useTranslation();
  const { showSuccessSnack, showErrorSnack } = useSnacks();
  const { navigate, back: navigateBack } = useJudoNavigation();
  const { openFilterDialog } = useFilterDialog();
  const { openConfirmDialog } = useConfirmDialog();
  const { setLatestViewData } = useViewData();
  const handleError = useErrorHandler();
  const openCRUDDialog = useCRUDDialog();

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
      payloadDiff.current![attributeName] = convertServiceUserAdminIssuesAccessViewPagePayload(attributeName, value);
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
    return false && typeof data?.__deleteable === 'boolean' && data?.__deleteable;
  }, [data]);

  const getPageQueryCustomizer: () => ServiceIssueQueryCustomizer = () => ({
    _mask: actions.getMask
      ? actions.getMask!()
      : '{created,defaultVoteType,description,isFavorite,isIssueActive,isIssueDeletable,isIssueDraft,isIssueNotActive,isIssueNotDeletable,isIssueNotDraft,isNotFavorite,isVoteClosable,isVoteNotClosable,status,title,cons{downVotes,title,upVotes},pros{downVotes,title,upVotes},attachments{file,link,type},categories{description,title},comments{comment,created,createdByName,downVotes,upVotes},issueType{description,title},owner{representation},city{representation},county{representation},district{representation}}',
  });

  // Private actions
  const submit = async () => {
    await updateAction();
    await deleteOrArchiveForIssueAction();
  };
  const refresh = async () => {
    if (actions.refreshAction) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };

  // Pandino Action overrides
  const { service: customActionsHook } = useTrackService<ServiceIssueIssue_View_EditActionsHook>(
    `(${OBJECTCLASS}=${SERVICE_USER_ADMIN_ISSUES_ACCESS_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const customActions: ServiceIssueIssue_View_EditPageActionsExtended | undefined = customActionsHook?.(
    data,
    editMode,
    storeDiff,
    refresh,
    submit,
  );

  // Dialog hooks
  const openServiceIssueIssue_View_EditCloseDebateInputForm = useServiceIssueIssue_View_EditCloseDebateInputForm();
  const openServiceIssueIssue_View_EditCreateCommentInputForm = useServiceIssueIssue_View_EditCreateCommentInputForm();
  const openServiceIssueIssue_View_EditCreateConArgumentInputForm =
    useServiceIssueIssue_View_EditCreateConArgumentInputForm();
  const openServiceIssueIssue_View_EditCreateProArgumentInputForm =
    useServiceIssueIssue_View_EditCreateProArgumentInputForm();
  const openServiceIssueIssue_View_EditIssueIssueTypeLinkSetSelectorPage =
    useServiceIssueIssue_View_EditIssueIssueTypeLinkSetSelectorPage();
  const openServiceIssueIssue_View_EditIssueOwnerLinkSetSelectorPage =
    useServiceIssueIssue_View_EditIssueOwnerLinkSetSelectorPage();
  const openServiceIssueIssue_View_EditOtherAreaCityLinkSetSelectorPage =
    useServiceIssueIssue_View_EditOtherAreaCityLinkSetSelectorPage();
  const openServiceIssueIssue_View_EditOtherAreaCountyLinkSetSelectorPage =
    useServiceIssueIssue_View_EditOtherAreaCountyLinkSetSelectorPage();
  const openServiceIssueIssue_View_EditOtherAreaDistrictLinkSetSelectorPage =
    useServiceIssueIssue_View_EditOtherAreaDistrictLinkSetSelectorPage();
  const openServiceIssueIssue_View_EditOtherCategoriesCategoriesTableAddSelectorPage =
    useServiceIssueIssue_View_EditOtherCategoriesCategoriesTableAddSelectorPage();
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

  // Action section
  const getPageTitle = (data: ServiceIssue): string => {
    return t('service.Issue.Issue_View_Edit', { defaultValue: 'Issue View / Edit' });
  };
  const activateForIssueAction = async () => {
    try {
      setIsLoading(true);
      await userServiceForAdminIssuesImpl.activate(data);
      if (customActions?.postActivateForIssueAction) {
        await customActions.postActivateForIssueAction();
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );

        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
        }
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
      await userServiceForAdminIssuesImpl.addToFavorites(data);
      if (customActions?.postAddToFavoritesForIssueAction) {
        await customActions.postAddToFavoritesForIssueAction();
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );

        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
        }
      }
    } catch (error) {
      handleError<ServiceIssue>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const closeDebateAction = async (isDraft?: boolean, ownerValidation?: (data: any) => Promise<void>) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCloseDebateInputForm(data);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };
  const closeVoteForIssueAction = async () => {
    try {
      setIsLoading(true);
      await userServiceForAdminIssuesImpl.closeVote(data);
      if (customActions?.postCloseVoteForIssueAction) {
        await customActions.postCloseVoteForIssueAction();
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );

        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
        }
      }
    } catch (error) {
      handleError<ServiceIssue>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const deleteOrArchiveForIssueAction = async () => {
    try {
      setIsLoading(true);
      await userServiceForAdminIssuesImpl.deleteOrArchive(data);
      if (customActions?.postDeleteOrArchiveForIssueAction) {
        await customActions.postDeleteOrArchiveForIssueAction();
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );

        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
        }
      }
    } catch (error) {
      handleError<ServiceIssue>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const issueTypeAutocompleteRangeAction = async (
    queryCustomizer: ServiceIssueTypeQueryCustomizer,
  ): Promise<ServiceIssueTypeStored[]> => {
    try {
      const { data: result } = await userServiceForAdminIssuesImpl.getRangeForIssueType(
        cleanUpPayload(data),
        queryCustomizer,
      );
      return result;
    } catch (error: any) {
      handleError(error);
      return Promise.resolve([]);
    }
  };
  const issueTypeOpenSetSelectorAction = async (): Promise<ServiceIssueTypeStored | undefined> => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditIssueIssueTypeLinkSetSelectorPage(
      data,
      data.issueType ? [data.issueType] : [],
    );
    if (result === 'submit') {
      if (Array.isArray(returnedData) && returnedData.length) {
        storeDiff('issueType', returnedData[0]);
        return returnedData[0];
      }
    }
    return undefined;
  };
  const issueTypeUnsetAction = async (target: ServiceIssueType | ServiceIssueTypeStored) => {
    storeDiff('issueType', null);
  };
  const issueTypeOpenPageAction = async (target: ServiceIssueType | ServiceIssueTypeStored, isDraft?: boolean) => {
    if (isDraft && (!target || !(target as ServiceIssueTypeStored).__signedIdentifier)) {
    } else if (!isDraft) {
      await openServiceIssueIssueTypeRelationViewPage(target!);
      if (!editMode) {
        await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
      }
    }
  };
  const ownerAutocompleteRangeAction = async (
    queryCustomizer: ServiceServiceUserQueryCustomizer,
  ): Promise<ServiceServiceUserStored[]> => {
    try {
      const { data: result } = await userServiceForAdminIssuesImpl.getRangeForOwner(
        cleanUpPayload(data),
        queryCustomizer,
      );
      return result;
    } catch (error: any) {
      handleError(error);
      return Promise.resolve([]);
    }
  };
  const ownerOpenSetSelectorAction = async (): Promise<ServiceServiceUserStored | undefined> => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditIssueOwnerLinkSetSelectorPage(
      data,
      data.owner ? [data.owner] : [],
    );
    if (result === 'submit') {
      if (Array.isArray(returnedData) && returnedData.length) {
        storeDiff('owner', returnedData[0]);
        return returnedData[0];
      }
    }
    return undefined;
  };
  const ownerUnsetAction = async (target: ServiceServiceUser | ServiceServiceUserStored) => {
    storeDiff('owner', null);
  };
  const ownerOpenPageAction = async (target: ServiceServiceUser | ServiceServiceUserStored, isDraft?: boolean) => {
    if (isDraft && (!target || !(target as ServiceServiceUserStored).__signedIdentifier)) {
    } else if (!isDraft) {
      await openServiceIssueOwnerRelationViewPage(target!);
      if (!editMode) {
        await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
      }
    }
  };
  const cityAutocompleteRangeAction = async (
    queryCustomizer: ServiceCityQueryCustomizer,
  ): Promise<ServiceCityStored[]> => {
    try {
      const { data: result } = await userServiceForAdminIssuesImpl.getRangeForCity(
        cleanUpPayload(data),
        queryCustomizer,
      );
      return result;
    } catch (error: any) {
      handleError(error);
      return Promise.resolve([]);
    }
  };
  const cityOpenSetSelectorAction = async (): Promise<ServiceCityStored | undefined> => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditOtherAreaCityLinkSetSelectorPage(
      data,
      data.city ? [data.city] : [],
    );
    if (result === 'submit') {
      if (Array.isArray(returnedData) && returnedData.length) {
        storeDiff('city', returnedData[0]);
        return returnedData[0];
      }
    }
    return undefined;
  };
  const cityUnsetAction = async (target: ServiceCity | ServiceCityStored) => {
    storeDiff('city', null);
  };
  const cityOpenPageAction = async (target: ServiceCity | ServiceCityStored, isDraft?: boolean) => {
    if (isDraft && (!target || !(target as ServiceCityStored).__signedIdentifier)) {
    } else if (!isDraft) {
      await openServiceIssueCityRelationViewPage(target!);
      if (!editMode) {
        await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
      }
    }
  };
  const countyAutocompleteRangeAction = async (
    queryCustomizer: ServiceCountyQueryCustomizer,
  ): Promise<ServiceCountyStored[]> => {
    try {
      const { data: result } = await userServiceForAdminIssuesImpl.getRangeForCounty(
        cleanUpPayload(data),
        queryCustomizer,
      );
      return result;
    } catch (error: any) {
      handleError(error);
      return Promise.resolve([]);
    }
  };
  const countyOpenSetSelectorAction = async (): Promise<ServiceCountyStored | undefined> => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditOtherAreaCountyLinkSetSelectorPage(
      data,
      data.county ? [data.county] : [],
    );
    if (result === 'submit') {
      if (Array.isArray(returnedData) && returnedData.length) {
        storeDiff('county', returnedData[0]);
        return returnedData[0];
      }
    }
    return undefined;
  };
  const countyUnsetAction = async (target: ServiceCounty | ServiceCountyStored) => {
    storeDiff('county', null);
  };
  const countyOpenPageAction = async (target: ServiceCounty | ServiceCountyStored, isDraft?: boolean) => {
    if (isDraft && (!target || !(target as ServiceCountyStored).__signedIdentifier)) {
    } else if (!isDraft) {
      await openServiceIssueCountyRelationViewPage(target!);
      if (!editMode) {
        await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
      }
    }
  };
  const districtAutocompleteRangeAction = async (
    queryCustomizer: ServiceDistrictQueryCustomizer,
  ): Promise<ServiceDistrictStored[]> => {
    try {
      const { data: result } = await userServiceForAdminIssuesImpl.getRangeForDistrict(
        cleanUpPayload(data),
        queryCustomizer,
      );
      return result;
    } catch (error: any) {
      handleError(error);
      return Promise.resolve([]);
    }
  };
  const districtOpenSetSelectorAction = async (): Promise<ServiceDistrictStored | undefined> => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditOtherAreaDistrictLinkSetSelectorPage(
      data,
      data.district ? [data.district] : [],
    );
    if (result === 'submit') {
      if (Array.isArray(returnedData) && returnedData.length) {
        storeDiff('district', returnedData[0]);
        return returnedData[0];
      }
    }
    return undefined;
  };
  const districtUnsetAction = async (target: ServiceDistrict | ServiceDistrictStored) => {
    storeDiff('district', null);
  };
  const districtOpenPageAction = async (target: ServiceDistrict | ServiceDistrictStored, isDraft?: boolean) => {
    if (isDraft && (!target || !(target as ServiceDistrictStored).__signedIdentifier)) {
    } else if (!isDraft) {
      await openServiceIssueDistrictRelationViewPage(target!);
      if (!editMode) {
        await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
      }
    }
  };
  const createConArgumentAction = async (isDraft?: boolean, ownerValidation?: (data: any) => Promise<void>) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCreateConArgumentInputForm(data);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };
  const consBulkDeleteAction = async (
    selectedRows: ServiceConStored[],
  ): Promise<DialogResult<Array<ServiceConStored>>> => {
    return new Promise((resolve) => {
      openCRUDDialog<ServiceConStored>({
        dialogTitle: t('judo.action.bulk-delete', { defaultValue: 'Delete' }),
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
              await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
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
        await userServiceForAdminIssuesImpl.deleteCons(target);
        if (!silentMode) {
          showSuccessSnack(t('judo.action.delete.success', { defaultValue: 'Delete successful' }));
          refreshAction(getPageQueryCustomizer());
        }
      }
    } catch (error) {
      if (!silentMode) {
        handleError<ServiceCon>(error, undefined, target);
      }
    }
  };
  const consOpenPageAction = async (target: ServiceCon | ServiceConStored, isDraft?: boolean) => {
    if (isDraft && (!target || !(target as ServiceConStored).__signedIdentifier)) {
    } else if (!isDraft) {
      await openServiceIssueConsRelationViewPage(target!);
      if (!editMode) {
        await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
      }
    }
  };
  const createProArgumentAction = async (isDraft?: boolean, ownerValidation?: (data: any) => Promise<void>) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCreateProArgumentInputForm(data);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };
  const prosBulkDeleteAction = async (
    selectedRows: ServiceProStored[],
  ): Promise<DialogResult<Array<ServiceProStored>>> => {
    return new Promise((resolve) => {
      openCRUDDialog<ServiceProStored>({
        dialogTitle: t('judo.action.bulk-delete', { defaultValue: 'Delete' }),
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
              await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
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
        await userServiceForAdminIssuesImpl.deletePros(target);
        if (!silentMode) {
          showSuccessSnack(t('judo.action.delete.success', { defaultValue: 'Delete successful' }));
          refreshAction(getPageQueryCustomizer());
        }
      }
    } catch (error) {
      if (!silentMode) {
        handleError<ServicePro>(error, undefined, target);
      }
    }
  };
  const prosOpenPageAction = async (target: ServicePro | ServiceProStored, isDraft?: boolean) => {
    if (isDraft && (!target || !(target as ServiceProStored).__signedIdentifier)) {
    } else if (!isDraft) {
      await openServiceIssueProsRelationViewPage(target!);
      if (!editMode) {
        await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
      }
    }
  };
  const attachmentsBulkDeleteAction = async (
    selectedRows: ServiceIssueAttachmentStored[],
  ): Promise<DialogResult<Array<ServiceIssueAttachmentStored>>> => {
    return new Promise((resolve) => {
      openCRUDDialog<ServiceIssueAttachmentStored>({
        dialogTitle: t('judo.action.bulk-delete', { defaultValue: 'Delete' }),
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
              await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
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
  const attachmentsOpenCreateFormAction = async (isDraft?: boolean, ownerValidation?: (data: any) => Promise<void>) => {
    const { result, data: returnedData } = await openServiceIssueAttachmentsRelationFormPage(data);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
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
        await userServiceForAdminIssuesImpl.deleteAttachments(target);
        if (!silentMode) {
          showSuccessSnack(t('judo.action.delete.success', { defaultValue: 'Delete successful' }));
          refreshAction(getPageQueryCustomizer());
        }
      }
    } catch (error) {
      if (!silentMode) {
        handleError<ServiceIssueAttachment>(error, undefined, target);
      }
    }
  };
  const attachmentsOpenPageAction = async (
    target: ServiceIssueAttachment | ServiceIssueAttachmentStored,
    isDraft?: boolean,
  ) => {
    if (isDraft && (!target || !(target as ServiceIssueAttachmentStored).__signedIdentifier)) {
      const { result, data: returnedData } = await openServiceIssueAttachmentsRelationFormPage(
        { __signedIdentifier: signedIdentifier } as JudoIdentifiable<any>,
        target,
        true,
      );
      // we might need to differentiate result handling between operation inputs and crud relation creates
      if (result === 'submit-draft' && returnedData) {
        const existingIndex = (payloadDiff.current.attachments || []).findIndex(
          (r: { __identifier?: string }) => r.__identifier === returnedData.__identifier,
        );
        if (existingIndex > -1) {
          payloadDiff.current.attachments[existingIndex] = {
            ...returnedData,
          };
        }
        storeDiff('attachments', [...(payloadDiff.current.attachments || [])]);
        return;
      }
    } else if (!isDraft) {
      await openServiceIssueAttachmentsRelationViewPage(target!);
      if (!editMode) {
        await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
      }
    }
  };
  const categoriesOpenAddSelectorAction = async () => {
    const { result, data: returnedData } =
      await openServiceIssueIssue_View_EditOtherCategoriesCategoriesTableAddSelectorPage(data, data.categories ?? []);
    if (result === 'submit') {
      if (Array.isArray(returnedData) && returnedData.length) {
        storeDiff('categories', [...(data.categories || []), ...returnedData]);
      }
    }
  };

  const categoriesBulkRemoveAction = async (
    selectedRows: ServiceIssueCategoryStored[],
  ): Promise<DialogResult<Array<ServiceIssueCategoryStored>>> => {
    return new Promise((resolve) => {
      const selectedIds = selectedRows.map((r) => r.__identifier);
      const newList = (data?.categories ?? []).filter((c: any) => !selectedIds.includes(c.__identifier));
      storeDiff('categories', newList);
      resolve({
        result: 'submit',
        data: [],
      });
    });
  };
  const categoriesClearAction = async () => {
    storeDiff('categories', []);
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
  const categoriesRemoveAction = async (target?: ServiceIssueCategoryStored, silentMode?: boolean) => {
    if (target) {
      const newList = (data?.categories ?? []).filter((c: any) => c.__identifier !== target!.__identifier);
      storeDiff('categories', newList);
    }
  };
  const categoriesOpenPageAction = async (
    target: ServiceIssueCategory | ServiceIssueCategoryStored,
    isDraft?: boolean,
  ) => {
    if (isDraft && (!target || !(target as ServiceIssueCategoryStored).__signedIdentifier)) {
    } else if (!isDraft) {
      await openServiceIssueCategoriesRelationViewPage(target!);
      if (!editMode) {
        await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
      }
    }
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
  const commentsOpenPageAction = async (target: ServiceComment | ServiceCommentStored, isDraft?: boolean) => {
    if (isDraft && (!target || !(target as ServiceCommentStored).__signedIdentifier)) {
    } else if (!isDraft) {
      // if the `target` is missing we are likely navigating to a relation table page, in which case we need the owner's id
      navigate(
        routeToServiceIssueCommentsRelationViewPage(((target as ServiceCommentStored) || data).__signedIdentifier),
      );
    }
  };
  const createCommentAction = async (isDraft?: boolean, ownerValidation?: (data: any) => Promise<void>) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCreateCommentInputForm(data);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };
  const removeFromFavoritesForIssueAction = async () => {
    try {
      setIsLoading(true);
      await userServiceForAdminIssuesImpl.removeFromFavorites(data);
      if (customActions?.postRemoveFromFavoritesForIssueAction) {
        await customActions.postRemoveFromFavoritesForIssueAction();
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );

        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
        }
      }
    } catch (error) {
      handleError<ServiceIssue>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const backAction = async () => {
    navigateBack();
  };
  const cancelAction = async () => {
    // no need to set editMode to false, given refresh should do it implicitly
    await refreshAction(processQueryCustomizer(getPageQueryCustomizer()));
  };
  const refreshAction = async (
    queryCustomizer: ServiceIssueQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceIssueStored>> => {
    try {
      setIsLoading(true);
      setEditMode(false);
      const response = await userServiceForAdminIssuesImpl.refresh(
        { __signedIdentifier: signedIdentifier } as JudoIdentifiable<any>,
        getPageQueryCustomizer(),
      );
      const { data: result } = response;
      setData(result);
      setLatestViewData(result);
      // re-set payloadDiff
      payloadDiff.current = {
        __identifier: result.__identifier,
        __signedIdentifier: result.__signedIdentifier,
        __version: result.__version,
        __entityType: result.__entityType,
      } as Record<keyof ServiceIssueStored, any>;
      if (customActions?.postRefreshAction) {
        await customActions?.postRefreshAction(result, storeDiff, setValidation);
      }
      return response;
    } catch (error) {
      handleError(error);
      setLatestViewData(null);
      return Promise.reject(error);
    } finally {
      setIsLoading(false);
      setRefreshCounter((prevCounter) => prevCounter + 1);
    }
  };
  const updateAction = async () => {
    setIsLoading(true);
    try {
      const { data: res } = await userServiceForAdminIssuesImpl.update(payloadDiff.current);
      if (res) {
        showSuccessSnack(t('judo.action.save.success', { defaultValue: 'Changes saved' }));
        setValidation(new Map<keyof ServiceIssue, string>());
        setEditMode(false);
        await actions.refreshAction!(getPageQueryCustomizer());
      }
    } catch (error) {
      handleError<ServiceIssue>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };

  const actions: ServiceIssueIssue_View_EditPageActions = {
    getPageTitle,
    activateForIssueAction,
    addToFavoritesForIssueAction,
    closeDebateAction,
    closeVoteForIssueAction,
    deleteOrArchiveForIssueAction,
    issueTypeAutocompleteRangeAction,
    issueTypeOpenSetSelectorAction,
    issueTypeUnsetAction,
    issueTypeOpenPageAction,
    ownerAutocompleteRangeAction,
    ownerOpenSetSelectorAction,
    ownerUnsetAction,
    ownerOpenPageAction,
    cityAutocompleteRangeAction,
    cityOpenSetSelectorAction,
    cityUnsetAction,
    cityOpenPageAction,
    countyAutocompleteRangeAction,
    countyOpenSetSelectorAction,
    countyUnsetAction,
    countyOpenPageAction,
    districtAutocompleteRangeAction,
    districtOpenSetSelectorAction,
    districtUnsetAction,
    districtOpenPageAction,
    createConArgumentAction,
    consBulkDeleteAction,
    consFilterAction,
    consDeleteAction,
    consOpenPageAction,
    createProArgumentAction,
    prosBulkDeleteAction,
    prosFilterAction,
    prosDeleteAction,
    prosOpenPageAction,
    attachmentsBulkDeleteAction,
    attachmentsOpenCreateFormAction,
    attachmentsFilterAction,
    attachmentsDeleteAction,
    attachmentsOpenPageAction,
    categoriesOpenAddSelectorAction,
    categoriesBulkRemoveAction,
    categoriesClearAction,
    categoriesFilterAction,
    categoriesRemoveAction,
    categoriesOpenPageAction,
    commentsFilterAction,
    commentsOpenPageAction,
    createCommentAction,
    removeFromFavoritesForIssueAction,
    backAction,
    cancelAction,
    refreshAction,
    updateAction,
    ...(customActions ?? {}),
  };

  // ViewModel setup
  const viewModel: ServiceIssueIssue_View_EditViewModel = {
    actions,
    isLoading,
    setIsLoading,
    refreshCounter,
    editMode,
    setEditMode,
    refresh,
    data,
    validation,
    setValidation,
    storeDiff,
    submit,
    isFormUpdateable,
    isFormDeleteable,
  };

  // Effect section
  useEffect(() => {
    (async () => {
      await actions.refreshAction!(getPageQueryCustomizer());
    })();
  }, []);

  return (
    <ServiceIssueIssue_View_EditViewModelContext.Provider value={viewModel}>
      <Suspense>
        <div
          id="User/(esm/_iuCGQId_Ee2kLcMqsIbMgQ)/AccessViewPageDefinition"
          data-page-name="service::User::adminIssues::AccessViewPage"
        />
        <PageContainerTransition>
          <ServiceIssueIssue_View_EditPageContainer
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
            submit={submit}
          />
        </PageContainerTransition>
      </Suspense>
    </ServiceIssueIssue_View_EditViewModelContext.Provider>
  );
}
