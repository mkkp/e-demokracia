//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPagesForRouting(#application)
// Path expression: 'src/pages/'+#pagePath(#self)+'.tsx'
// Template name: actor/src/pages/index.tsx
// Template file: actor/src/pages/index.tsx.hbs

import { useCallback, useEffect, useRef, useState, useMemo, lazy, Suspense } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import { OBJECTCLASS } from '@pandino/pandino-api';
import { useTrackService } from '@pandino/react-hooks';
import type { JudoIdentifiable } from '@judo/data-api-common';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import type { GridFilterModel } from '@mui/x-data-grid';
import type { Filter, FilterOption } from '~/components-api';
import { useJudoNavigation } from '~/components';
import { useConfirmDialog, useFilterDialog } from '~/components/dialog';
import { useSnacks, useCRUDDialog } from '~/hooks';
import { processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';
import { PageContainerTransition } from '~/theme/animations';
import { routeToServiceIssueCommentsRelationViewPage } from '~/routes';
import { useServiceConCon_View_EditCreateConArgumentInputForm } from '~/dialogs/Service/Con/Con_View_Edit/CreateConArgument/Input/Form';
import { useServiceConCon_View_EditCreateProArgumentInputForm } from '~/dialogs/Service/Con/Con_View_Edit/CreateProArgument/Input/Form';
import { useServiceIssueIssue_View_EditCloseDebateInputForm } from '~/dialogs/Service/Issue/Issue_View_Edit/CloseDebate/Input/Form';
import { useServiceIssueIssue_View_EditCreateCommentInputForm } from '~/dialogs/Service/Issue/Issue_View_Edit/CreateComment/Input/Form';
import { useServiceIssueIssue_View_EditCreateConArgumentInputForm } from '~/dialogs/Service/Issue/Issue_View_Edit/CreateConArgument/Input/Form';
import { useServiceIssueIssue_View_EditCreateProArgumentInputForm } from '~/dialogs/Service/Issue/Issue_View_Edit/CreateProArgument/Input/Form';
import { useServiceIssueIssue_View_EditIssueIssueTypeLinkSetSelectorPage } from '~/dialogs/Service/Issue/Issue_View_Edit/Issue/IssueType/LinkSetSelectorPage';
import { useServiceIssueIssue_View_EditIssueOwnerLinkSetSelectorPage } from '~/dialogs/Service/Issue/Issue_View_Edit/Issue/Owner/LinkSetSelectorPage';
import { useServiceIssueIssue_View_EditOtherAreaCityLinkSetSelectorPage } from '~/dialogs/Service/Issue/Issue_View_Edit/Other/Area/City/LinkSetSelectorPage';
import { useServiceIssueIssue_View_EditOtherAreaCountyLinkSetSelectorPage } from '~/dialogs/Service/Issue/Issue_View_Edit/Other/Area/County/LinkSetSelectorPage';
import { useServiceIssueIssue_View_EditOtherAreaDistrictLinkSetSelectorPage } from '~/dialogs/Service/Issue/Issue_View_Edit/Other/Area/District/LinkSetSelectorPage';
import { useServiceIssueIssue_View_EditOtherCategoriesCategoriesTableSetSelectorPage } from '~/dialogs/Service/Issue/Issue_View_Edit/Other/Categories/Categories/TableSetSelectorPage';
import { useServiceIssueAttachmentsRelationFormPage } from '~/dialogs/Service/Issue/Attachments/RelationFormPage';
import { useServiceIssueAttachmentsRelationViewPage } from '~/dialogs/Service/Issue/Attachments/RelationViewPage';
import { useServiceIssueCategoriesRelationViewPage } from '~/dialogs/Service/Issue/Categories/RelationViewPage';
import { useServiceIssueCityRelationViewPage } from '~/dialogs/Service/Issue/City/RelationViewPage';
import { useServiceIssueConsRelationViewPage } from '~/dialogs/Service/Issue/Cons/RelationViewPage';
import { useServiceIssueCountyRelationViewPage } from '~/dialogs/Service/Issue/County/RelationViewPage';
import { useServiceIssueDistrictRelationViewPage } from '~/dialogs/Service/Issue/District/RelationViewPage';
import { useServiceIssueIssueTypeRelationViewPage } from '~/dialogs/Service/Issue/IssueType/RelationViewPage';
import { useServiceIssueOwnerRelationViewPage } from '~/dialogs/Service/Issue/Owner/RelationViewPage';
import { useServiceIssueProsRelationViewPage } from '~/dialogs/Service/Issue/Pros/RelationViewPage';
import { useServiceProPro_View_EditCreateConArgumentInputForm } from '~/dialogs/Service/Pro/Pro_View_Edit/CreateConArgument/Input/Form';
import { useServiceProPro_View_EditCreateProArgumentInputForm } from '~/dialogs/Service/Pro/Pro_View_Edit/CreateProArgument/Input/Form';
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
  VoteType,
} from '~/services/data-api';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { ServiceIssueServiceImpl } from '~/services/data-axios/ServiceIssueServiceImpl';

export type ServiceIssueIssue_View_EditPageActionsExtended = ServiceIssueIssue_View_EditPageActions & {
  postCommentsVoteDownForCommentAction?: (data: ServiceCommentStored) => Promise<void>;
  postCommentsVoteUpForCommentAction?: (data: ServiceCommentStored) => Promise<void>;
  postConsVoteDownForConAction?: (data: ServiceConStored) => Promise<void>;
  postConsVoteUpForConAction?: (data: ServiceConStored) => Promise<void>;
  postActivateForIssueAction?: () => Promise<void>;
  postAddToFavoritesForIssueAction?: () => Promise<void>;
  postCloseVoteForIssueAction?: () => Promise<void>;
  postDeleteOrArchiveForIssueAction?: () => Promise<void>;
  postRemoveFromFavoritesForIssueAction?: () => Promise<void>;
  postProsVoteDownForProAction?: (data: ServiceProStored) => Promise<void>;
  postProsVoteUpForProAction?: (data: ServiceProStored) => Promise<void>;
  postRefreshAction?: (
    data: ServiceIssueStored,
    storeDiff: (attributeName: keyof ServiceIssue, value: any) => void,
    setValidation: Dispatch<SetStateAction<Map<keyof ServiceIssue, string>>>,
  ) => Promise<void>;
};

export const SERVICE_USER_ACTIVE_ISSUES_ACCESS_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'ServiceIssueIssue_View_EditActionsHook';
export type ServiceIssueIssue_View_EditActionsHook = (
  data: ServiceIssueStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof ServiceIssue, value: any) => void,
) => ServiceIssueIssue_View_EditPageActionsExtended;

export const convertServiceUserActiveIssuesAccessViewPagePayload = (
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

// XMIID: User/(esm/__g_vkFvLEe6jm_SkPSYEYw)/AccessViewPageDefinition
// Name: service::User::activeIssues::AccessViewPage
export default function ServiceUserActiveIssuesAccessViewPage() {
  // Router params section
  const { signedIdentifier } = useParams();

  // Services
  const serviceIssueServiceImpl = useMemo(() => new ServiceIssueServiceImpl(judoAxiosProvider), []);

  // Hooks section
  const { t } = useTranslation();
  const { showSuccessSnack, showErrorSnack } = useSnacks();
  const { navigate, back: navigateBack } = useJudoNavigation();
  const { openFilterDialog } = useFilterDialog();
  const { openConfirmDialog } = useConfirmDialog();
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
      payloadDiff.current![attributeName] = convertServiceUserActiveIssuesAccessViewPagePayload(attributeName, value);
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
      '{created,defaultVoteType,description,isFavorite,isIssueActive,isIssueDeletable,isIssueDraft,isIssueNotActive,isIssueNotDeletable,isIssueNotDraft,isNotFavorite,isVoteClosable,isVoteNotClosable,status,title,cons{title,upVotes,downVotes},pros{title,upVotes,downVotes},attachments{link,file,type},categories{title,description},comments{comment,created,createdByName,upVotes,downVotes},issueType{title,description},owner{representation},city{representation},county{representation},district{representation}}',
  };

  // Pandino Action overrides
  const { service: customActionsHook } = useTrackService<ServiceIssueIssue_View_EditActionsHook>(
    `(${OBJECTCLASS}=${SERVICE_USER_ACTIVE_ISSUES_ACCESS_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const customActions: ServiceIssueIssue_View_EditPageActionsExtended | undefined = customActionsHook?.(
    data,
    editMode,
    storeDiff,
  );

  // Dialog hooks
  const openServiceConCon_View_EditCreateConArgumentInputForm = useServiceConCon_View_EditCreateConArgumentInputForm();
  const openServiceConCon_View_EditCreateProArgumentInputForm = useServiceConCon_View_EditCreateProArgumentInputForm();
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
  const openServiceIssueIssue_View_EditOtherCategoriesCategoriesTableSetSelectorPage =
    useServiceIssueIssue_View_EditOtherCategoriesCategoriesTableSetSelectorPage();
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
  const openServiceProPro_View_EditCreateConArgumentInputForm = useServiceProPro_View_EditCreateConArgumentInputForm();
  const openServiceProPro_View_EditCreateProArgumentInputForm = useServiceProPro_View_EditCreateProArgumentInputForm();

  // Calculated section
  const title: string = t('service.Issue.Issue_View_Edit', { defaultValue: 'Issue View / Edit' });

  // Private actions
  const submit = async () => {};

  // Action section
  const commentsVoteDownForCommentAction = async (target?: ServiceCommentStored) => {
    try {
      setIsLoading(true);
      await serviceIssueServiceImpl.voteDownForComments(target!);
      if (customActions?.postCommentsVoteDownForCommentAction) {
        await customActions.postCommentsVoteDownForCommentAction(target!);
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
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
  const commentsVoteUpForCommentAction = async (target?: ServiceCommentStored) => {
    try {
      setIsLoading(true);
      await serviceIssueServiceImpl.voteUpForComments(target!);
      if (customActions?.postCommentsVoteUpForCommentAction) {
        await customActions.postCommentsVoteUpForCommentAction(target!);
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
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
  const consCreateConArgumentAction = async (target: ServiceConStored) => {
    const { result, data: returnedData } = await openServiceConCon_View_EditCreateConArgumentInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const consCreateProArgumentAction = async (target: ServiceConStored) => {
    const { result, data: returnedData } = await openServiceConCon_View_EditCreateProArgumentInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const consVoteDownForConAction = async (target?: ServiceConStored) => {
    try {
      setIsLoading(true);
      await serviceIssueServiceImpl.voteDownForCons(target!);
      if (customActions?.postConsVoteDownForConAction) {
        await customActions.postConsVoteDownForConAction(target!);
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
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
  const consVoteUpForConAction = async (target?: ServiceConStored) => {
    try {
      setIsLoading(true);
      await serviceIssueServiceImpl.voteUpForCons(target!);
      if (customActions?.postConsVoteUpForConAction) {
        await customActions.postConsVoteUpForConAction(target!);
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
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
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
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
  const addToFavoritesForIssueAction = async () => {
    try {
      setIsLoading(true);
      await serviceIssueServiceImpl.addToFavorites(data);
      if (customActions?.postAddToFavoritesForIssueAction) {
        await customActions.postAddToFavoritesForIssueAction();
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
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
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
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
  const deleteOrArchiveForIssueAction = async () => {
    try {
      setIsLoading(true);
      await serviceIssueServiceImpl.deleteOrArchive(data);
      if (customActions?.postDeleteOrArchiveForIssueAction) {
        await customActions.postDeleteOrArchiveForIssueAction();
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
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
  const removeFromFavoritesForIssueAction = async () => {
    try {
      setIsLoading(true);
      await serviceIssueServiceImpl.removeFromFavorites(data);
      if (customActions?.postRemoveFromFavoritesForIssueAction) {
        await customActions.postRemoveFromFavoritesForIssueAction();
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
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
  const issueTypeOpenSetSelectorAction = async () => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditIssueIssueTypeLinkSetSelectorPage(
      data,
      data.issueType ? [data.issueType] : [],
    );
    if (result === 'submit') {
      if (Array.isArray(returnedData) && returnedData.length) {
        storeDiff('issueType', returnedData[0]);
      }
    }
  };
  const issueTypeUnsetAction = async (target: ServiceIssueTypeStored) => {
    storeDiff('issueType', null);
  };
  const issueTypeOpenPageAction = async (target?: ServiceIssueTypeStored) => {
    await openServiceIssueIssueTypeRelationViewPage(target!);
    if (!editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
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
  const ownerOpenSetSelectorAction = async () => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditIssueOwnerLinkSetSelectorPage(
      data,
      data.owner ? [data.owner] : [],
    );
    if (result === 'submit') {
      if (Array.isArray(returnedData) && returnedData.length) {
        storeDiff('owner', returnedData[0]);
      }
    }
  };
  const ownerUnsetAction = async (target: ServiceServiceUserStored) => {
    storeDiff('owner', null);
  };
  const ownerOpenPageAction = async (target?: ServiceServiceUserStored) => {
    await openServiceIssueOwnerRelationViewPage(target!);
    if (!editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
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
  const cityOpenSetSelectorAction = async () => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditOtherAreaCityLinkSetSelectorPage(
      data,
      data.city ? [data.city] : [],
    );
    if (result === 'submit') {
      if (Array.isArray(returnedData) && returnedData.length) {
        storeDiff('city', returnedData[0]);
      }
    }
  };
  const cityUnsetAction = async (target: ServiceCityStored) => {
    storeDiff('city', null);
  };
  const cityOpenPageAction = async (target?: ServiceCityStored) => {
    await openServiceIssueCityRelationViewPage(target!);
    if (!editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
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
  const countyOpenSetSelectorAction = async () => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditOtherAreaCountyLinkSetSelectorPage(
      data,
      data.county ? [data.county] : [],
    );
    if (result === 'submit') {
      if (Array.isArray(returnedData) && returnedData.length) {
        storeDiff('county', returnedData[0]);
      }
    }
  };
  const countyUnsetAction = async (target: ServiceCountyStored) => {
    storeDiff('county', null);
  };
  const countyOpenPageAction = async (target?: ServiceCountyStored) => {
    await openServiceIssueCountyRelationViewPage(target!);
    if (!editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
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
  const districtOpenSetSelectorAction = async () => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditOtherAreaDistrictLinkSetSelectorPage(
      data,
      data.district ? [data.district] : [],
    );
    if (result === 'submit') {
      if (Array.isArray(returnedData) && returnedData.length) {
        storeDiff('district', returnedData[0]);
      }
    }
  };
  const districtUnsetAction = async (target: ServiceDistrictStored) => {
    storeDiff('district', null);
  };
  const districtOpenPageAction = async (target?: ServiceDistrictStored) => {
    await openServiceIssueDistrictRelationViewPage(target!);
    if (!editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const createConArgumentAction = async () => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCreateConArgumentInputForm(data);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
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
          showSuccessSnack(t('judo.action.delete.success', { defaultValue: 'Delete successful' }));
          refreshAction(pageQueryCustomizer);
        }
      }
    } catch (error) {
      if (!silentMode) {
        handleError<ServiceCon>(error, undefined, target);
      }
    }
  };
  const consOpenPageAction = async (target?: ServiceConStored) => {
    await openServiceIssueConsRelationViewPage(target!);
    if (!editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const createProArgumentAction = async () => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCreateProArgumentInputForm(data);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
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
          showSuccessSnack(t('judo.action.delete.success', { defaultValue: 'Delete successful' }));
          refreshAction(pageQueryCustomizer);
        }
      }
    } catch (error) {
      if (!silentMode) {
        handleError<ServicePro>(error, undefined, target);
      }
    }
  };
  const prosOpenPageAction = async (target?: ServiceProStored) => {
    await openServiceIssueProsRelationViewPage(target!);
    if (!editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
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
  const attachmentsOpenFormAction = async () => {
    const { result, data: returnedData } = await openServiceIssueAttachmentsRelationFormPage(data);
    if (result === 'submit' && !editMode) {
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
          showSuccessSnack(t('judo.action.delete.success', { defaultValue: 'Delete successful' }));
          refreshAction(pageQueryCustomizer);
        }
      }
    } catch (error) {
      if (!silentMode) {
        handleError<ServiceIssueAttachment>(error, undefined, target);
      }
    }
  };
  const attachmentsOpenPageAction = async (target?: ServiceIssueAttachmentStored) => {
    await openServiceIssueAttachmentsRelationViewPage(target!);
    if (!editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const categoriesOpenAddSelectorAction = async () => {
    const { result, data: returnedData } =
      await openServiceIssueIssue_View_EditOtherCategoriesCategoriesTableSetSelectorPage(data, data.categories ?? []);
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
      const newList = (data?.categories ?? []).filter((c) => !selectedIds.includes(c.__identifier));
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
      const newList = (data?.categories ?? []).filter((c) => c.__identifier !== target!.__identifier);
      storeDiff('categories', newList);
    }
  };
  const categoriesOpenPageAction = async (target?: ServiceIssueCategoryStored) => {
    await openServiceIssueCategoriesRelationViewPage(target!);
    if (!editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
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
  const commentsOpenPageAction = async (target?: ServiceCommentStored) => {
    // if the `target` is missing we are likely navigating to a relation table page, in which case we need the owner's id
    navigate(routeToServiceIssueCommentsRelationViewPage((target || data).__signedIdentifier));
  };
  const createCommentAction = async () => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCreateCommentInputForm(data);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const prosCreateConArgumentAction = async (target: ServiceProStored) => {
    const { result, data: returnedData } = await openServiceProPro_View_EditCreateConArgumentInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const prosCreateProArgumentAction = async (target: ServiceProStored) => {
    const { result, data: returnedData } = await openServiceProPro_View_EditCreateProArgumentInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const prosVoteDownForProAction = async (target?: ServiceProStored) => {
    try {
      setIsLoading(true);
      await serviceIssueServiceImpl.voteDownForPros(target!);
      if (customActions?.postProsVoteDownForProAction) {
        await customActions.postProsVoteDownForProAction(target!);
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
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
  const prosVoteUpForProAction = async (target?: ServiceProStored) => {
    try {
      setIsLoading(true);
      await serviceIssueServiceImpl.voteUpForPros(target!);
      if (customActions?.postProsVoteUpForProAction) {
        await customActions.postProsVoteUpForProAction(target!);
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
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
      if (customActions?.postRefreshAction) {
        await customActions?.postRefreshAction(result, storeDiff, setValidation);
      }
      return result;
    } catch (error) {
      handleError(error);
      return Promise.reject(error);
    } finally {
      setIsLoading(false);
      setRefreshCounter((prevCounter) => prevCounter + 1);
    }
  };

  const actions: ServiceIssueIssue_View_EditPageActions = {
    commentsVoteDownForCommentAction,
    commentsVoteUpForCommentAction,
    consCreateConArgumentAction,
    consCreateProArgumentAction,
    consVoteDownForConAction,
    consVoteUpForConAction,
    activateForIssueAction,
    addToFavoritesForIssueAction,
    closeDebateAction,
    closeVoteForIssueAction,
    deleteOrArchiveForIssueAction,
    removeFromFavoritesForIssueAction,
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
    attachmentsOpenFormAction,
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
    prosCreateConArgumentAction,
    prosCreateProArgumentAction,
    prosVoteDownForProAction,
    prosVoteUpForProAction,
    backAction,
    refreshAction,
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
      id="User/(esm/__g_vkFvLEe6jm_SkPSYEYw)/AccessViewPageDefinition"
      data-page-name="service::User::activeIssues::AccessViewPage"
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
            submit={submit}
          />
        </PageContainerTransition>
      </Suspense>
    </div>
  );
}
