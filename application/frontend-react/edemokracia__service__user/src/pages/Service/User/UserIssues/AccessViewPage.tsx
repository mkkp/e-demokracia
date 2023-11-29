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
import type { GridFilterModel } from '@mui/x-data-grid';
import type { Filter, FilterOption } from '~/components-api';
import { useJudoNavigation } from '~/components';
import { useConfirmDialog, useFilterDialog } from '~/components/dialog';
import { useSnacks, useCRUDDialog } from '~/hooks';
import { processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';
import { PageContainerTransition } from '~/theme/animations';
import { routeToServiceUserIssuesActiveIssuesGlobalRelationViewPage } from '~/routes';
import { routeToServiceUserIssuesActiveIssuesInActivityCitiesRelationViewPage } from '~/routes';
import { routeToServiceUserIssuesActiveIssuesInActivityCountiesRelationViewPage } from '~/routes';
import { routeToServiceUserIssuesActiveIssuesInActivityDistrictsRelationViewPage } from '~/routes';
import { routeToServiceUserIssuesActiveIssuesInResidentCityRelationViewPage } from '~/routes';
import { routeToServiceUserIssuesActiveIssuesInResidentCountyRelationViewPage } from '~/routes';
import { routeToServiceUserIssuesActiveIssuesInResidentDistrictRelationViewPage } from '~/routes';
import { routeToServiceUserIssuesOwnedIssuesRelationViewPage } from '~/routes';
import { useServiceIssueIssue_View_EditCloseDebateInputForm } from '~/dialogs/Service/Issue/Issue_View_Edit/CloseDebate/Input/Form';
import { useServiceIssueIssue_View_EditCreateCommentInputForm } from '~/dialogs/Service/Issue/Issue_View_Edit/CreateComment/Input/Form';
import { useServiceIssueIssue_View_EditCreateConArgumentInputForm } from '~/dialogs/Service/Issue/Issue_View_Edit/CreateConArgument/Input/Form';
import { useServiceIssueIssue_View_EditCreateProArgumentInputForm } from '~/dialogs/Service/Issue/Issue_View_Edit/CreateProArgument/Input/Form';
import { useServiceUserIssuesUserIssues_View_EditCreateIssueInputForm } from '~/dialogs/Service/UserIssues/UserIssues_View_Edit/CreateIssue/Input/Form';
import type { ServiceUserIssuesUserIssues_View_EditPageActions } from '~/containers/Service/UserIssues/UserIssues_View_Edit/ServiceUserIssuesUserIssues_View_EditPageContainer';
import type {
  ServiceIssue,
  ServiceIssueQueryCustomizer,
  ServiceIssueStored,
  ServiceUserIssues,
  ServiceUserIssuesQueryCustomizer,
  ServiceUserIssuesStored,
} from '~/services/data-api';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { UserServiceForUserIssuesImpl } from '~/services/data-axios/UserServiceForUserIssuesImpl';

export type ServiceUserIssuesUserIssues_View_EditPageActionsExtended =
  ServiceUserIssuesUserIssues_View_EditPageActions & {
    postActiveIssuesGlobalActivateForIssueAction?: (data: ServiceIssueStored) => Promise<void>;
    postActiveIssuesInActivityCitiesActivateForIssueAction?: (data: ServiceIssueStored) => Promise<void>;
    postActiveIssuesInActivityCountiesActivateForIssueAction?: (data: ServiceIssueStored) => Promise<void>;
    postActiveIssuesInActivityDistrictsActivateForIssueAction?: (data: ServiceIssueStored) => Promise<void>;
    postActiveIssuesInResidentCityActivateForIssueAction?: (data: ServiceIssueStored) => Promise<void>;
    postActiveIssuesInResidentCountyActivateForIssueAction?: (data: ServiceIssueStored) => Promise<void>;
    postActiveIssuesInResidentDistrictActivateForIssueAction?: (data: ServiceIssueStored) => Promise<void>;
    postOwnedIssuesActivateForIssueAction?: (data: ServiceIssueStored) => Promise<void>;
    postActiveIssuesGlobalAddToFavoritesForIssueAction?: (data: ServiceIssueStored) => Promise<void>;
    postActiveIssuesInActivityCitiesAddToFavoritesForIssueAction?: (data: ServiceIssueStored) => Promise<void>;
    postActiveIssuesInActivityCountiesAddToFavoritesForIssueAction?: (data: ServiceIssueStored) => Promise<void>;
    postActiveIssuesInActivityDistrictsAddToFavoritesForIssueAction?: (data: ServiceIssueStored) => Promise<void>;
    postActiveIssuesInResidentCityAddToFavoritesForIssueAction?: (data: ServiceIssueStored) => Promise<void>;
    postActiveIssuesInResidentCountyAddToFavoritesForIssueAction?: (data: ServiceIssueStored) => Promise<void>;
    postActiveIssuesInResidentDistrictAddToFavoritesForIssueAction?: (data: ServiceIssueStored) => Promise<void>;
    postOwnedIssuesAddToFavoritesForIssueAction?: (data: ServiceIssueStored) => Promise<void>;
    postActiveIssuesGlobalCloseVoteForIssueAction?: (data: ServiceIssueStored) => Promise<void>;
    postActiveIssuesInActivityCitiesCloseVoteForIssueAction?: (data: ServiceIssueStored) => Promise<void>;
    postActiveIssuesInActivityCountiesCloseVoteForIssueAction?: (data: ServiceIssueStored) => Promise<void>;
    postActiveIssuesInActivityDistrictsCloseVoteForIssueAction?: (data: ServiceIssueStored) => Promise<void>;
    postActiveIssuesInResidentCityCloseVoteForIssueAction?: (data: ServiceIssueStored) => Promise<void>;
    postActiveIssuesInResidentCountyCloseVoteForIssueAction?: (data: ServiceIssueStored) => Promise<void>;
    postActiveIssuesInResidentDistrictCloseVoteForIssueAction?: (data: ServiceIssueStored) => Promise<void>;
    postOwnedIssuesCloseVoteForIssueAction?: (data: ServiceIssueStored) => Promise<void>;
    postActiveIssuesGlobalDeleteOrArchiveForIssueAction?: (data: ServiceIssueStored) => Promise<void>;
    postActiveIssuesInActivityCitiesDeleteOrArchiveForIssueAction?: (data: ServiceIssueStored) => Promise<void>;
    postActiveIssuesInActivityCountiesDeleteOrArchiveForIssueAction?: (data: ServiceIssueStored) => Promise<void>;
    postActiveIssuesInActivityDistrictsDeleteOrArchiveForIssueAction?: (data: ServiceIssueStored) => Promise<void>;
    postActiveIssuesInResidentCityDeleteOrArchiveForIssueAction?: (data: ServiceIssueStored) => Promise<void>;
    postActiveIssuesInResidentCountyDeleteOrArchiveForIssueAction?: (data: ServiceIssueStored) => Promise<void>;
    postActiveIssuesInResidentDistrictDeleteOrArchiveForIssueAction?: (data: ServiceIssueStored) => Promise<void>;
    postOwnedIssuesDeleteOrArchiveForIssueAction?: (data: ServiceIssueStored) => Promise<void>;
    postActiveIssuesGlobalRemoveFromFavoritesForIssueAction?: (data: ServiceIssueStored) => Promise<void>;
    postActiveIssuesInActivityCitiesRemoveFromFavoritesForIssueAction?: (data: ServiceIssueStored) => Promise<void>;
    postActiveIssuesInActivityCountiesRemoveFromFavoritesForIssueAction?: (data: ServiceIssueStored) => Promise<void>;
    postActiveIssuesInActivityDistrictsRemoveFromFavoritesForIssueAction?: (data: ServiceIssueStored) => Promise<void>;
    postActiveIssuesInResidentCityRemoveFromFavoritesForIssueAction?: (data: ServiceIssueStored) => Promise<void>;
    postActiveIssuesInResidentCountyRemoveFromFavoritesForIssueAction?: (data: ServiceIssueStored) => Promise<void>;
    postActiveIssuesInResidentDistrictRemoveFromFavoritesForIssueAction?: (data: ServiceIssueStored) => Promise<void>;
    postOwnedIssuesRemoveFromFavoritesForIssueAction?: (data: ServiceIssueStored) => Promise<void>;
    postRefreshAction?: (
      data: ServiceUserIssuesStored,
      storeDiff: (attributeName: keyof ServiceUserIssues, value: any) => void,
      setValidation: Dispatch<SetStateAction<Map<keyof ServiceUserIssues, string>>>,
    ) => Promise<void>;
  };

export const SERVICE_USER_USER_ISSUES_ACCESS_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'ServiceUserIssuesUserIssues_View_EditActionsHook';
export type ServiceUserIssuesUserIssues_View_EditActionsHook = (
  data: ServiceUserIssuesStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof ServiceUserIssues, value: any) => void,
) => ServiceUserIssuesUserIssues_View_EditPageActionsExtended;

export const convertServiceUserUserIssuesAccessViewPagePayload = (
  attributeName: keyof ServiceUserIssues,
  value: any,
): any => {
  return value;
};

const ServiceUserIssuesUserIssues_View_EditPageContainer = lazy(
  () =>
    import('~/containers/Service/UserIssues/UserIssues_View_Edit/ServiceUserIssuesUserIssues_View_EditPageContainer'),
);

// XMIID: User/(esm/_UUu7kFrMEe6_67aMO2jOsw)/AccessViewPageDefinition
// Name: service::User::userIssues::AccessViewPage
export default function ServiceUserUserIssuesAccessViewPage() {
  // Services
  const userServiceForUserIssuesImpl = useMemo(() => new UserServiceForUserIssuesImpl(judoAxiosProvider), []);

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
  const [data, setData] = useState<ServiceUserIssuesStored>({} as ServiceUserIssuesStored);
  const [validation, setValidation] = useState<Map<keyof ServiceUserIssues, string>>(
    new Map<keyof ServiceUserIssues, string>(),
  );

  // Ref section
  const singletonHost = useRef<{ __signedIdentifier: string }>({} as unknown as { __signedIdentifier: string });
  const payloadDiff = useRef<Record<keyof ServiceUserIssuesStored, any>>(
    {} as unknown as Record<keyof ServiceUserIssuesStored, any>,
  );

  // Callback section
  const storeDiff: (attributeName: keyof ServiceUserIssues, value: any) => void = useCallback(
    (attributeName: keyof ServiceUserIssues, value: any) => {
      payloadDiff.current![attributeName] = convertServiceUserUserIssuesAccessViewPagePayload(attributeName, value);
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
    return false && typeof data?.__updateable === 'boolean' && data?.__updateable;
  }, [data]);
  const isFormDeleteable = useCallback(() => {
    return false && typeof data?.__deleteable === 'boolean' && data?.__deleteable;
  }, [data]);

  const pageQueryCustomizer: ServiceUserIssuesQueryCustomizer = {
    _mask: '{}',
  };

  // Pandino Action overrides
  const { service: customActionsHook } = useTrackService<ServiceUserIssuesUserIssues_View_EditActionsHook>(
    `(${OBJECTCLASS}=${SERVICE_USER_USER_ISSUES_ACCESS_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const customActions: ServiceUserIssuesUserIssues_View_EditPageActionsExtended | undefined = customActionsHook?.(
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
  const openServiceUserIssuesUserIssues_View_EditCreateIssueInputForm =
    useServiceUserIssuesUserIssues_View_EditCreateIssueInputForm();

  // Calculated section
  const title: string = t('service.UserIssues.UserIssues_View_Edit', { defaultValue: 'UserIssues View / Edit' });

  // Private actions
  const submit = async () => {};

  // Action section
  const backAction = async () => {
    navigateBack();
  };
  const refreshAction = async (queryCustomizer: ServiceUserIssuesQueryCustomizer): Promise<ServiceUserIssuesStored> => {
    try {
      setIsLoading(true);
      setEditMode(false);
      const result = await userServiceForUserIssuesImpl.refresh(singletonHost.current, pageQueryCustomizer);
      setData(result);
      // re-set payloadDiff
      payloadDiff.current = {
        __identifier: result.__identifier,
        __signedIdentifier: result.__signedIdentifier,
        __version: result.__version,
        __entityType: result.__entityType,
      } as Record<keyof ServiceUserIssuesStored, any>;
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
  const createIssueAction = async () => {
    const { result, data: returnedData } = await openServiceUserIssuesUserIssues_View_EditCreateIssueInputForm(data);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const activeIssuesInResidentDistrictOpenPageAction = async (target?: ServiceIssueStored) => {
    // if the `target` is missing we are likely navigating to a relation table page, in which case we need the owner's id
    navigate(
      routeToServiceUserIssuesActiveIssuesInResidentDistrictRelationViewPage((target || data).__signedIdentifier),
    );
  };
  const activeIssuesInResidentDistrictFilterAction = async (
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
  const activeIssuesInResidentDistrictRefreshAction = async (
    queryCustomizer: ServiceIssueQueryCustomizer,
  ): Promise<ServiceIssueStored[]> => {
    return userServiceForUserIssuesImpl.listActiveIssuesInResidentDistrict(singletonHost.current, queryCustomizer);
  };
  const activeIssuesInResidentDistrictCloseDebateAction = async (target: ServiceIssueStored) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCloseDebateInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const activeIssuesInResidentDistrictActivateForIssueAction = async (target?: ServiceIssueStored) => {
    try {
      setIsLoading(true);
      await userServiceForUserIssuesImpl.activateForActiveIssuesInResidentDistrict(target!);
      if (customActions?.postActiveIssuesInResidentDistrictActivateForIssueAction) {
        await customActions.postActiveIssuesInResidentDistrictActivateForIssueAction(target!);
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
        }
      }
    } catch (error) {
      handleError<ServiceUserIssues>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const activeIssuesInResidentDistrictCreateProArgumentAction = async (target: ServiceIssueStored) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCreateProArgumentInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const activeIssuesInResidentDistrictCreateCommentAction = async (target: ServiceIssueStored) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCreateCommentInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const activeIssuesInResidentDistrictCloseVoteForIssueAction = async (target?: ServiceIssueStored) => {
    try {
      setIsLoading(true);
      await userServiceForUserIssuesImpl.closeVoteForActiveIssuesInResidentDistrict(target!);
      if (customActions?.postActiveIssuesInResidentDistrictCloseVoteForIssueAction) {
        await customActions.postActiveIssuesInResidentDistrictCloseVoteForIssueAction(target!);
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
        }
      }
    } catch (error) {
      handleError<ServiceUserIssues>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const activeIssuesInResidentDistrictAddToFavoritesForIssueAction = async (target?: ServiceIssueStored) => {
    try {
      setIsLoading(true);
      await userServiceForUserIssuesImpl.addToFavoritesForActiveIssuesInResidentDistrict(target!);
      if (customActions?.postActiveIssuesInResidentDistrictAddToFavoritesForIssueAction) {
        await customActions.postActiveIssuesInResidentDistrictAddToFavoritesForIssueAction(target!);
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
        }
      }
    } catch (error) {
      handleError<ServiceUserIssues>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const activeIssuesInResidentDistrictDeleteOrArchiveForIssueAction = async (target?: ServiceIssueStored) => {
    try {
      setIsLoading(true);
      await userServiceForUserIssuesImpl.deleteOrArchiveForActiveIssuesInResidentDistrict(target!);
      if (customActions?.postActiveIssuesInResidentDistrictDeleteOrArchiveForIssueAction) {
        await customActions.postActiveIssuesInResidentDistrictDeleteOrArchiveForIssueAction(target!);
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
        }
      }
    } catch (error) {
      handleError<ServiceUserIssues>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const activeIssuesInResidentDistrictCreateConArgumentAction = async (target: ServiceIssueStored) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCreateConArgumentInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const activeIssuesInResidentDistrictRemoveFromFavoritesForIssueAction = async (target?: ServiceIssueStored) => {
    try {
      setIsLoading(true);
      await userServiceForUserIssuesImpl.removeFromFavoritesForActiveIssuesInResidentDistrict(target!);
      if (customActions?.postActiveIssuesInResidentDistrictRemoveFromFavoritesForIssueAction) {
        await customActions.postActiveIssuesInResidentDistrictRemoveFromFavoritesForIssueAction(target!);
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
        }
      }
    } catch (error) {
      handleError<ServiceUserIssues>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const ownedIssuesOpenPageAction = async (target?: ServiceIssueStored) => {
    // if the `target` is missing we are likely navigating to a relation table page, in which case we need the owner's id
    navigate(routeToServiceUserIssuesOwnedIssuesRelationViewPage((target || data).__signedIdentifier));
  };
  const ownedIssuesFilterAction = async (
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
  const ownedIssuesRefreshAction = async (
    queryCustomizer: ServiceIssueQueryCustomizer,
  ): Promise<ServiceIssueStored[]> => {
    return userServiceForUserIssuesImpl.listOwnedIssues(singletonHost.current, queryCustomizer);
  };
  const ownedIssuesCloseDebateAction = async (target: ServiceIssueStored) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCloseDebateInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const ownedIssuesActivateForIssueAction = async (target?: ServiceIssueStored) => {
    try {
      setIsLoading(true);
      await userServiceForUserIssuesImpl.activateForOwnedIssues(target!);
      if (customActions?.postOwnedIssuesActivateForIssueAction) {
        await customActions.postOwnedIssuesActivateForIssueAction(target!);
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
        }
      }
    } catch (error) {
      handleError<ServiceUserIssues>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const ownedIssuesCreateProArgumentAction = async (target: ServiceIssueStored) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCreateProArgumentInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const ownedIssuesCreateCommentAction = async (target: ServiceIssueStored) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCreateCommentInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const ownedIssuesCloseVoteForIssueAction = async (target?: ServiceIssueStored) => {
    try {
      setIsLoading(true);
      await userServiceForUserIssuesImpl.closeVoteForOwnedIssues(target!);
      if (customActions?.postOwnedIssuesCloseVoteForIssueAction) {
        await customActions.postOwnedIssuesCloseVoteForIssueAction(target!);
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
        }
      }
    } catch (error) {
      handleError<ServiceUserIssues>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const ownedIssuesAddToFavoritesForIssueAction = async (target?: ServiceIssueStored) => {
    try {
      setIsLoading(true);
      await userServiceForUserIssuesImpl.addToFavoritesForOwnedIssues(target!);
      if (customActions?.postOwnedIssuesAddToFavoritesForIssueAction) {
        await customActions.postOwnedIssuesAddToFavoritesForIssueAction(target!);
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
        }
      }
    } catch (error) {
      handleError<ServiceUserIssues>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const ownedIssuesDeleteOrArchiveForIssueAction = async (target?: ServiceIssueStored) => {
    try {
      setIsLoading(true);
      await userServiceForUserIssuesImpl.deleteOrArchiveForOwnedIssues(target!);
      if (customActions?.postOwnedIssuesDeleteOrArchiveForIssueAction) {
        await customActions.postOwnedIssuesDeleteOrArchiveForIssueAction(target!);
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
        }
      }
    } catch (error) {
      handleError<ServiceUserIssues>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const ownedIssuesCreateConArgumentAction = async (target: ServiceIssueStored) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCreateConArgumentInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const ownedIssuesRemoveFromFavoritesForIssueAction = async (target?: ServiceIssueStored) => {
    try {
      setIsLoading(true);
      await userServiceForUserIssuesImpl.removeFromFavoritesForOwnedIssues(target!);
      if (customActions?.postOwnedIssuesRemoveFromFavoritesForIssueAction) {
        await customActions.postOwnedIssuesRemoveFromFavoritesForIssueAction(target!);
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
        }
      }
    } catch (error) {
      handleError<ServiceUserIssues>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const activeIssuesInResidentCountyOpenPageAction = async (target?: ServiceIssueStored) => {
    // if the `target` is missing we are likely navigating to a relation table page, in which case we need the owner's id
    navigate(routeToServiceUserIssuesActiveIssuesInResidentCountyRelationViewPage((target || data).__signedIdentifier));
  };
  const activeIssuesInResidentCountyFilterAction = async (
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
  const activeIssuesInResidentCountyRefreshAction = async (
    queryCustomizer: ServiceIssueQueryCustomizer,
  ): Promise<ServiceIssueStored[]> => {
    return userServiceForUserIssuesImpl.listActiveIssuesInResidentCounty(singletonHost.current, queryCustomizer);
  };
  const activeIssuesInResidentCountyCloseDebateAction = async (target: ServiceIssueStored) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCloseDebateInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const activeIssuesInResidentCountyActivateForIssueAction = async (target?: ServiceIssueStored) => {
    try {
      setIsLoading(true);
      await userServiceForUserIssuesImpl.activateForActiveIssuesInResidentCounty(target!);
      if (customActions?.postActiveIssuesInResidentCountyActivateForIssueAction) {
        await customActions.postActiveIssuesInResidentCountyActivateForIssueAction(target!);
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
        }
      }
    } catch (error) {
      handleError<ServiceUserIssues>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const activeIssuesInResidentCountyCreateProArgumentAction = async (target: ServiceIssueStored) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCreateProArgumentInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const activeIssuesInResidentCountyCreateCommentAction = async (target: ServiceIssueStored) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCreateCommentInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const activeIssuesInResidentCountyCloseVoteForIssueAction = async (target?: ServiceIssueStored) => {
    try {
      setIsLoading(true);
      await userServiceForUserIssuesImpl.closeVoteForActiveIssuesInResidentCounty(target!);
      if (customActions?.postActiveIssuesInResidentCountyCloseVoteForIssueAction) {
        await customActions.postActiveIssuesInResidentCountyCloseVoteForIssueAction(target!);
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
        }
      }
    } catch (error) {
      handleError<ServiceUserIssues>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const activeIssuesInResidentCountyAddToFavoritesForIssueAction = async (target?: ServiceIssueStored) => {
    try {
      setIsLoading(true);
      await userServiceForUserIssuesImpl.addToFavoritesForActiveIssuesInResidentCounty(target!);
      if (customActions?.postActiveIssuesInResidentCountyAddToFavoritesForIssueAction) {
        await customActions.postActiveIssuesInResidentCountyAddToFavoritesForIssueAction(target!);
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
        }
      }
    } catch (error) {
      handleError<ServiceUserIssues>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const activeIssuesInResidentCountyDeleteOrArchiveForIssueAction = async (target?: ServiceIssueStored) => {
    try {
      setIsLoading(true);
      await userServiceForUserIssuesImpl.deleteOrArchiveForActiveIssuesInResidentCounty(target!);
      if (customActions?.postActiveIssuesInResidentCountyDeleteOrArchiveForIssueAction) {
        await customActions.postActiveIssuesInResidentCountyDeleteOrArchiveForIssueAction(target!);
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
        }
      }
    } catch (error) {
      handleError<ServiceUserIssues>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const activeIssuesInResidentCountyCreateConArgumentAction = async (target: ServiceIssueStored) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCreateConArgumentInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const activeIssuesInResidentCountyRemoveFromFavoritesForIssueAction = async (target?: ServiceIssueStored) => {
    try {
      setIsLoading(true);
      await userServiceForUserIssuesImpl.removeFromFavoritesForActiveIssuesInResidentCounty(target!);
      if (customActions?.postActiveIssuesInResidentCountyRemoveFromFavoritesForIssueAction) {
        await customActions.postActiveIssuesInResidentCountyRemoveFromFavoritesForIssueAction(target!);
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
        }
      }
    } catch (error) {
      handleError<ServiceUserIssues>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const activeIssuesGlobalOpenPageAction = async (target?: ServiceIssueStored) => {
    // if the `target` is missing we are likely navigating to a relation table page, in which case we need the owner's id
    navigate(routeToServiceUserIssuesActiveIssuesGlobalRelationViewPage((target || data).__signedIdentifier));
  };
  const activeIssuesGlobalFilterAction = async (
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
  const activeIssuesGlobalRefreshAction = async (
    queryCustomizer: ServiceIssueQueryCustomizer,
  ): Promise<ServiceIssueStored[]> => {
    return userServiceForUserIssuesImpl.listActiveIssuesGlobal(singletonHost.current, queryCustomizer);
  };
  const activeIssuesGlobalCloseDebateAction = async (target: ServiceIssueStored) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCloseDebateInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const activeIssuesGlobalActivateForIssueAction = async (target?: ServiceIssueStored) => {
    try {
      setIsLoading(true);
      await userServiceForUserIssuesImpl.activateForActiveIssuesGlobal(target!);
      if (customActions?.postActiveIssuesGlobalActivateForIssueAction) {
        await customActions.postActiveIssuesGlobalActivateForIssueAction(target!);
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
        }
      }
    } catch (error) {
      handleError<ServiceUserIssues>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const activeIssuesGlobalCreateProArgumentAction = async (target: ServiceIssueStored) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCreateProArgumentInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const activeIssuesGlobalCreateCommentAction = async (target: ServiceIssueStored) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCreateCommentInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const activeIssuesGlobalCloseVoteForIssueAction = async (target?: ServiceIssueStored) => {
    try {
      setIsLoading(true);
      await userServiceForUserIssuesImpl.closeVoteForActiveIssuesGlobal(target!);
      if (customActions?.postActiveIssuesGlobalCloseVoteForIssueAction) {
        await customActions.postActiveIssuesGlobalCloseVoteForIssueAction(target!);
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
        }
      }
    } catch (error) {
      handleError<ServiceUserIssues>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const activeIssuesGlobalAddToFavoritesForIssueAction = async (target?: ServiceIssueStored) => {
    try {
      setIsLoading(true);
      await userServiceForUserIssuesImpl.addToFavoritesForActiveIssuesGlobal(target!);
      if (customActions?.postActiveIssuesGlobalAddToFavoritesForIssueAction) {
        await customActions.postActiveIssuesGlobalAddToFavoritesForIssueAction(target!);
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
        }
      }
    } catch (error) {
      handleError<ServiceUserIssues>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const activeIssuesGlobalDeleteOrArchiveForIssueAction = async (target?: ServiceIssueStored) => {
    try {
      setIsLoading(true);
      await userServiceForUserIssuesImpl.deleteOrArchiveForActiveIssuesGlobal(target!);
      if (customActions?.postActiveIssuesGlobalDeleteOrArchiveForIssueAction) {
        await customActions.postActiveIssuesGlobalDeleteOrArchiveForIssueAction(target!);
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
        }
      }
    } catch (error) {
      handleError<ServiceUserIssues>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const activeIssuesGlobalCreateConArgumentAction = async (target: ServiceIssueStored) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCreateConArgumentInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const activeIssuesGlobalRemoveFromFavoritesForIssueAction = async (target?: ServiceIssueStored) => {
    try {
      setIsLoading(true);
      await userServiceForUserIssuesImpl.removeFromFavoritesForActiveIssuesGlobal(target!);
      if (customActions?.postActiveIssuesGlobalRemoveFromFavoritesForIssueAction) {
        await customActions.postActiveIssuesGlobalRemoveFromFavoritesForIssueAction(target!);
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
        }
      }
    } catch (error) {
      handleError<ServiceUserIssues>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const activeIssuesInActivityCitiesOpenPageAction = async (target?: ServiceIssueStored) => {
    // if the `target` is missing we are likely navigating to a relation table page, in which case we need the owner's id
    navigate(routeToServiceUserIssuesActiveIssuesInActivityCitiesRelationViewPage((target || data).__signedIdentifier));
  };
  const activeIssuesInActivityCitiesFilterAction = async (
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
  const activeIssuesInActivityCitiesRefreshAction = async (
    queryCustomizer: ServiceIssueQueryCustomizer,
  ): Promise<ServiceIssueStored[]> => {
    return userServiceForUserIssuesImpl.listActiveIssuesInActivityCities(singletonHost.current, queryCustomizer);
  };
  const activeIssuesInActivityCitiesCloseDebateAction = async (target: ServiceIssueStored) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCloseDebateInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const activeIssuesInActivityCitiesActivateForIssueAction = async (target?: ServiceIssueStored) => {
    try {
      setIsLoading(true);
      await userServiceForUserIssuesImpl.activateForActiveIssuesInActivityCities(target!);
      if (customActions?.postActiveIssuesInActivityCitiesActivateForIssueAction) {
        await customActions.postActiveIssuesInActivityCitiesActivateForIssueAction(target!);
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
        }
      }
    } catch (error) {
      handleError<ServiceUserIssues>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const activeIssuesInActivityCitiesCreateProArgumentAction = async (target: ServiceIssueStored) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCreateProArgumentInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const activeIssuesInActivityCitiesCreateCommentAction = async (target: ServiceIssueStored) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCreateCommentInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const activeIssuesInActivityCitiesCloseVoteForIssueAction = async (target?: ServiceIssueStored) => {
    try {
      setIsLoading(true);
      await userServiceForUserIssuesImpl.closeVoteForActiveIssuesInActivityCities(target!);
      if (customActions?.postActiveIssuesInActivityCitiesCloseVoteForIssueAction) {
        await customActions.postActiveIssuesInActivityCitiesCloseVoteForIssueAction(target!);
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
        }
      }
    } catch (error) {
      handleError<ServiceUserIssues>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const activeIssuesInActivityCitiesAddToFavoritesForIssueAction = async (target?: ServiceIssueStored) => {
    try {
      setIsLoading(true);
      await userServiceForUserIssuesImpl.addToFavoritesForActiveIssuesInActivityCities(target!);
      if (customActions?.postActiveIssuesInActivityCitiesAddToFavoritesForIssueAction) {
        await customActions.postActiveIssuesInActivityCitiesAddToFavoritesForIssueAction(target!);
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
        }
      }
    } catch (error) {
      handleError<ServiceUserIssues>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const activeIssuesInActivityCitiesDeleteOrArchiveForIssueAction = async (target?: ServiceIssueStored) => {
    try {
      setIsLoading(true);
      await userServiceForUserIssuesImpl.deleteOrArchiveForActiveIssuesInActivityCities(target!);
      if (customActions?.postActiveIssuesInActivityCitiesDeleteOrArchiveForIssueAction) {
        await customActions.postActiveIssuesInActivityCitiesDeleteOrArchiveForIssueAction(target!);
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
        }
      }
    } catch (error) {
      handleError<ServiceUserIssues>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const activeIssuesInActivityCitiesCreateConArgumentAction = async (target: ServiceIssueStored) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCreateConArgumentInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const activeIssuesInActivityCitiesRemoveFromFavoritesForIssueAction = async (target?: ServiceIssueStored) => {
    try {
      setIsLoading(true);
      await userServiceForUserIssuesImpl.removeFromFavoritesForActiveIssuesInActivityCities(target!);
      if (customActions?.postActiveIssuesInActivityCitiesRemoveFromFavoritesForIssueAction) {
        await customActions.postActiveIssuesInActivityCitiesRemoveFromFavoritesForIssueAction(target!);
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
        }
      }
    } catch (error) {
      handleError<ServiceUserIssues>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const activeIssuesInActivityCountiesOpenPageAction = async (target?: ServiceIssueStored) => {
    // if the `target` is missing we are likely navigating to a relation table page, in which case we need the owner's id
    navigate(
      routeToServiceUserIssuesActiveIssuesInActivityCountiesRelationViewPage((target || data).__signedIdentifier),
    );
  };
  const activeIssuesInActivityCountiesFilterAction = async (
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
  const activeIssuesInActivityCountiesRefreshAction = async (
    queryCustomizer: ServiceIssueQueryCustomizer,
  ): Promise<ServiceIssueStored[]> => {
    return userServiceForUserIssuesImpl.listActiveIssuesInActivityCounties(singletonHost.current, queryCustomizer);
  };
  const activeIssuesInActivityCountiesCloseDebateAction = async (target: ServiceIssueStored) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCloseDebateInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const activeIssuesInActivityCountiesActivateForIssueAction = async (target?: ServiceIssueStored) => {
    try {
      setIsLoading(true);
      await userServiceForUserIssuesImpl.activateForActiveIssuesInActivityCounties(target!);
      if (customActions?.postActiveIssuesInActivityCountiesActivateForIssueAction) {
        await customActions.postActiveIssuesInActivityCountiesActivateForIssueAction(target!);
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
        }
      }
    } catch (error) {
      handleError<ServiceUserIssues>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const activeIssuesInActivityCountiesCreateProArgumentAction = async (target: ServiceIssueStored) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCreateProArgumentInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const activeIssuesInActivityCountiesCreateCommentAction = async (target: ServiceIssueStored) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCreateCommentInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const activeIssuesInActivityCountiesCloseVoteForIssueAction = async (target?: ServiceIssueStored) => {
    try {
      setIsLoading(true);
      await userServiceForUserIssuesImpl.closeVoteForActiveIssuesInActivityCounties(target!);
      if (customActions?.postActiveIssuesInActivityCountiesCloseVoteForIssueAction) {
        await customActions.postActiveIssuesInActivityCountiesCloseVoteForIssueAction(target!);
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
        }
      }
    } catch (error) {
      handleError<ServiceUserIssues>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const activeIssuesInActivityCountiesAddToFavoritesForIssueAction = async (target?: ServiceIssueStored) => {
    try {
      setIsLoading(true);
      await userServiceForUserIssuesImpl.addToFavoritesForActiveIssuesInActivityCounties(target!);
      if (customActions?.postActiveIssuesInActivityCountiesAddToFavoritesForIssueAction) {
        await customActions.postActiveIssuesInActivityCountiesAddToFavoritesForIssueAction(target!);
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
        }
      }
    } catch (error) {
      handleError<ServiceUserIssues>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const activeIssuesInActivityCountiesDeleteOrArchiveForIssueAction = async (target?: ServiceIssueStored) => {
    try {
      setIsLoading(true);
      await userServiceForUserIssuesImpl.deleteOrArchiveForActiveIssuesInActivityCounties(target!);
      if (customActions?.postActiveIssuesInActivityCountiesDeleteOrArchiveForIssueAction) {
        await customActions.postActiveIssuesInActivityCountiesDeleteOrArchiveForIssueAction(target!);
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
        }
      }
    } catch (error) {
      handleError<ServiceUserIssues>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const activeIssuesInActivityCountiesCreateConArgumentAction = async (target: ServiceIssueStored) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCreateConArgumentInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const activeIssuesInActivityCountiesRemoveFromFavoritesForIssueAction = async (target?: ServiceIssueStored) => {
    try {
      setIsLoading(true);
      await userServiceForUserIssuesImpl.removeFromFavoritesForActiveIssuesInActivityCounties(target!);
      if (customActions?.postActiveIssuesInActivityCountiesRemoveFromFavoritesForIssueAction) {
        await customActions.postActiveIssuesInActivityCountiesRemoveFromFavoritesForIssueAction(target!);
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
        }
      }
    } catch (error) {
      handleError<ServiceUserIssues>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const activeIssuesInActivityDistrictsOpenPageAction = async (target?: ServiceIssueStored) => {
    // if the `target` is missing we are likely navigating to a relation table page, in which case we need the owner's id
    navigate(
      routeToServiceUserIssuesActiveIssuesInActivityDistrictsRelationViewPage((target || data).__signedIdentifier),
    );
  };
  const activeIssuesInActivityDistrictsFilterAction = async (
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
  const activeIssuesInActivityDistrictsRefreshAction = async (
    queryCustomizer: ServiceIssueQueryCustomizer,
  ): Promise<ServiceIssueStored[]> => {
    return userServiceForUserIssuesImpl.listActiveIssuesInActivityDistricts(singletonHost.current, queryCustomizer);
  };
  const activeIssuesInActivityDistrictsCloseDebateAction = async (target: ServiceIssueStored) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCloseDebateInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const activeIssuesInActivityDistrictsActivateForIssueAction = async (target?: ServiceIssueStored) => {
    try {
      setIsLoading(true);
      await userServiceForUserIssuesImpl.activateForActiveIssuesInActivityDistricts(target!);
      if (customActions?.postActiveIssuesInActivityDistrictsActivateForIssueAction) {
        await customActions.postActiveIssuesInActivityDistrictsActivateForIssueAction(target!);
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
        }
      }
    } catch (error) {
      handleError<ServiceUserIssues>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const activeIssuesInActivityDistrictsCreateProArgumentAction = async (target: ServiceIssueStored) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCreateProArgumentInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const activeIssuesInActivityDistrictsCreateCommentAction = async (target: ServiceIssueStored) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCreateCommentInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const activeIssuesInActivityDistrictsCloseVoteForIssueAction = async (target?: ServiceIssueStored) => {
    try {
      setIsLoading(true);
      await userServiceForUserIssuesImpl.closeVoteForActiveIssuesInActivityDistricts(target!);
      if (customActions?.postActiveIssuesInActivityDistrictsCloseVoteForIssueAction) {
        await customActions.postActiveIssuesInActivityDistrictsCloseVoteForIssueAction(target!);
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
        }
      }
    } catch (error) {
      handleError<ServiceUserIssues>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const activeIssuesInActivityDistrictsAddToFavoritesForIssueAction = async (target?: ServiceIssueStored) => {
    try {
      setIsLoading(true);
      await userServiceForUserIssuesImpl.addToFavoritesForActiveIssuesInActivityDistricts(target!);
      if (customActions?.postActiveIssuesInActivityDistrictsAddToFavoritesForIssueAction) {
        await customActions.postActiveIssuesInActivityDistrictsAddToFavoritesForIssueAction(target!);
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
        }
      }
    } catch (error) {
      handleError<ServiceUserIssues>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const activeIssuesInActivityDistrictsDeleteOrArchiveForIssueAction = async (target?: ServiceIssueStored) => {
    try {
      setIsLoading(true);
      await userServiceForUserIssuesImpl.deleteOrArchiveForActiveIssuesInActivityDistricts(target!);
      if (customActions?.postActiveIssuesInActivityDistrictsDeleteOrArchiveForIssueAction) {
        await customActions.postActiveIssuesInActivityDistrictsDeleteOrArchiveForIssueAction(target!);
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
        }
      }
    } catch (error) {
      handleError<ServiceUserIssues>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const activeIssuesInActivityDistrictsCreateConArgumentAction = async (target: ServiceIssueStored) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCreateConArgumentInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const activeIssuesInActivityDistrictsRemoveFromFavoritesForIssueAction = async (target?: ServiceIssueStored) => {
    try {
      setIsLoading(true);
      await userServiceForUserIssuesImpl.removeFromFavoritesForActiveIssuesInActivityDistricts(target!);
      if (customActions?.postActiveIssuesInActivityDistrictsRemoveFromFavoritesForIssueAction) {
        await customActions.postActiveIssuesInActivityDistrictsRemoveFromFavoritesForIssueAction(target!);
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
        }
      }
    } catch (error) {
      handleError<ServiceUserIssues>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const activeIssuesInResidentCityOpenPageAction = async (target?: ServiceIssueStored) => {
    // if the `target` is missing we are likely navigating to a relation table page, in which case we need the owner's id
    navigate(routeToServiceUserIssuesActiveIssuesInResidentCityRelationViewPage((target || data).__signedIdentifier));
  };
  const activeIssuesInResidentCityFilterAction = async (
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
  const activeIssuesInResidentCityRefreshAction = async (
    queryCustomizer: ServiceIssueQueryCustomizer,
  ): Promise<ServiceIssueStored[]> => {
    return userServiceForUserIssuesImpl.listActiveIssuesInResidentCity(singletonHost.current, queryCustomizer);
  };
  const activeIssuesInResidentCityCloseDebateAction = async (target: ServiceIssueStored) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCloseDebateInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const activeIssuesInResidentCityActivateForIssueAction = async (target?: ServiceIssueStored) => {
    try {
      setIsLoading(true);
      await userServiceForUserIssuesImpl.activateForActiveIssuesInResidentCity(target!);
      if (customActions?.postActiveIssuesInResidentCityActivateForIssueAction) {
        await customActions.postActiveIssuesInResidentCityActivateForIssueAction(target!);
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
        }
      }
    } catch (error) {
      handleError<ServiceUserIssues>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const activeIssuesInResidentCityCreateProArgumentAction = async (target: ServiceIssueStored) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCreateProArgumentInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const activeIssuesInResidentCityCreateCommentAction = async (target: ServiceIssueStored) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCreateCommentInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const activeIssuesInResidentCityCloseVoteForIssueAction = async (target?: ServiceIssueStored) => {
    try {
      setIsLoading(true);
      await userServiceForUserIssuesImpl.closeVoteForActiveIssuesInResidentCity(target!);
      if (customActions?.postActiveIssuesInResidentCityCloseVoteForIssueAction) {
        await customActions.postActiveIssuesInResidentCityCloseVoteForIssueAction(target!);
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
        }
      }
    } catch (error) {
      handleError<ServiceUserIssues>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const activeIssuesInResidentCityAddToFavoritesForIssueAction = async (target?: ServiceIssueStored) => {
    try {
      setIsLoading(true);
      await userServiceForUserIssuesImpl.addToFavoritesForActiveIssuesInResidentCity(target!);
      if (customActions?.postActiveIssuesInResidentCityAddToFavoritesForIssueAction) {
        await customActions.postActiveIssuesInResidentCityAddToFavoritesForIssueAction(target!);
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
        }
      }
    } catch (error) {
      handleError<ServiceUserIssues>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const activeIssuesInResidentCityDeleteOrArchiveForIssueAction = async (target?: ServiceIssueStored) => {
    try {
      setIsLoading(true);
      await userServiceForUserIssuesImpl.deleteOrArchiveForActiveIssuesInResidentCity(target!);
      if (customActions?.postActiveIssuesInResidentCityDeleteOrArchiveForIssueAction) {
        await customActions.postActiveIssuesInResidentCityDeleteOrArchiveForIssueAction(target!);
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
        }
      }
    } catch (error) {
      handleError<ServiceUserIssues>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const activeIssuesInResidentCityCreateConArgumentAction = async (target: ServiceIssueStored) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCreateConArgumentInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const activeIssuesInResidentCityRemoveFromFavoritesForIssueAction = async (target?: ServiceIssueStored) => {
    try {
      setIsLoading(true);
      await userServiceForUserIssuesImpl.removeFromFavoritesForActiveIssuesInResidentCity(target!);
      if (customActions?.postActiveIssuesInResidentCityRemoveFromFavoritesForIssueAction) {
        await customActions.postActiveIssuesInResidentCityRemoveFromFavoritesForIssueAction(target!);
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
        }
      }
    } catch (error) {
      handleError<ServiceUserIssues>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const getSingletonPayload = async (): Promise<JudoIdentifiable<any>> => {
    return await userServiceForUserIssuesImpl.refreshForUserIssues({
      _mask: '{}',
    });
  };

  const actions: ServiceUserIssuesUserIssues_View_EditPageActions = {
    backAction,
    refreshAction,
    createIssueAction,
    activeIssuesInResidentDistrictOpenPageAction,
    activeIssuesInResidentDistrictFilterAction,
    activeIssuesInResidentDistrictRefreshAction,
    activeIssuesInResidentDistrictCloseDebateAction,
    activeIssuesInResidentDistrictActivateForIssueAction,
    activeIssuesInResidentDistrictCreateProArgumentAction,
    activeIssuesInResidentDistrictCreateCommentAction,
    activeIssuesInResidentDistrictCloseVoteForIssueAction,
    activeIssuesInResidentDistrictAddToFavoritesForIssueAction,
    activeIssuesInResidentDistrictDeleteOrArchiveForIssueAction,
    activeIssuesInResidentDistrictCreateConArgumentAction,
    activeIssuesInResidentDistrictRemoveFromFavoritesForIssueAction,
    ownedIssuesOpenPageAction,
    ownedIssuesFilterAction,
    ownedIssuesRefreshAction,
    ownedIssuesCloseDebateAction,
    ownedIssuesActivateForIssueAction,
    ownedIssuesCreateProArgumentAction,
    ownedIssuesCreateCommentAction,
    ownedIssuesCloseVoteForIssueAction,
    ownedIssuesAddToFavoritesForIssueAction,
    ownedIssuesDeleteOrArchiveForIssueAction,
    ownedIssuesCreateConArgumentAction,
    ownedIssuesRemoveFromFavoritesForIssueAction,
    activeIssuesInResidentCountyOpenPageAction,
    activeIssuesInResidentCountyFilterAction,
    activeIssuesInResidentCountyRefreshAction,
    activeIssuesInResidentCountyCloseDebateAction,
    activeIssuesInResidentCountyActivateForIssueAction,
    activeIssuesInResidentCountyCreateProArgumentAction,
    activeIssuesInResidentCountyCreateCommentAction,
    activeIssuesInResidentCountyCloseVoteForIssueAction,
    activeIssuesInResidentCountyAddToFavoritesForIssueAction,
    activeIssuesInResidentCountyDeleteOrArchiveForIssueAction,
    activeIssuesInResidentCountyCreateConArgumentAction,
    activeIssuesInResidentCountyRemoveFromFavoritesForIssueAction,
    activeIssuesGlobalOpenPageAction,
    activeIssuesGlobalFilterAction,
    activeIssuesGlobalRefreshAction,
    activeIssuesGlobalCloseDebateAction,
    activeIssuesGlobalActivateForIssueAction,
    activeIssuesGlobalCreateProArgumentAction,
    activeIssuesGlobalCreateCommentAction,
    activeIssuesGlobalCloseVoteForIssueAction,
    activeIssuesGlobalAddToFavoritesForIssueAction,
    activeIssuesGlobalDeleteOrArchiveForIssueAction,
    activeIssuesGlobalCreateConArgumentAction,
    activeIssuesGlobalRemoveFromFavoritesForIssueAction,
    activeIssuesInActivityCitiesOpenPageAction,
    activeIssuesInActivityCitiesFilterAction,
    activeIssuesInActivityCitiesRefreshAction,
    activeIssuesInActivityCitiesCloseDebateAction,
    activeIssuesInActivityCitiesActivateForIssueAction,
    activeIssuesInActivityCitiesCreateProArgumentAction,
    activeIssuesInActivityCitiesCreateCommentAction,
    activeIssuesInActivityCitiesCloseVoteForIssueAction,
    activeIssuesInActivityCitiesAddToFavoritesForIssueAction,
    activeIssuesInActivityCitiesDeleteOrArchiveForIssueAction,
    activeIssuesInActivityCitiesCreateConArgumentAction,
    activeIssuesInActivityCitiesRemoveFromFavoritesForIssueAction,
    activeIssuesInActivityCountiesOpenPageAction,
    activeIssuesInActivityCountiesFilterAction,
    activeIssuesInActivityCountiesRefreshAction,
    activeIssuesInActivityCountiesCloseDebateAction,
    activeIssuesInActivityCountiesActivateForIssueAction,
    activeIssuesInActivityCountiesCreateProArgumentAction,
    activeIssuesInActivityCountiesCreateCommentAction,
    activeIssuesInActivityCountiesCloseVoteForIssueAction,
    activeIssuesInActivityCountiesAddToFavoritesForIssueAction,
    activeIssuesInActivityCountiesDeleteOrArchiveForIssueAction,
    activeIssuesInActivityCountiesCreateConArgumentAction,
    activeIssuesInActivityCountiesRemoveFromFavoritesForIssueAction,
    activeIssuesInActivityDistrictsOpenPageAction,
    activeIssuesInActivityDistrictsFilterAction,
    activeIssuesInActivityDistrictsRefreshAction,
    activeIssuesInActivityDistrictsCloseDebateAction,
    activeIssuesInActivityDistrictsActivateForIssueAction,
    activeIssuesInActivityDistrictsCreateProArgumentAction,
    activeIssuesInActivityDistrictsCreateCommentAction,
    activeIssuesInActivityDistrictsCloseVoteForIssueAction,
    activeIssuesInActivityDistrictsAddToFavoritesForIssueAction,
    activeIssuesInActivityDistrictsDeleteOrArchiveForIssueAction,
    activeIssuesInActivityDistrictsCreateConArgumentAction,
    activeIssuesInActivityDistrictsRemoveFromFavoritesForIssueAction,
    activeIssuesInResidentCityOpenPageAction,
    activeIssuesInResidentCityFilterAction,
    activeIssuesInResidentCityRefreshAction,
    activeIssuesInResidentCityCloseDebateAction,
    activeIssuesInResidentCityActivateForIssueAction,
    activeIssuesInResidentCityCreateProArgumentAction,
    activeIssuesInResidentCityCreateCommentAction,
    activeIssuesInResidentCityCloseVoteForIssueAction,
    activeIssuesInResidentCityAddToFavoritesForIssueAction,
    activeIssuesInResidentCityDeleteOrArchiveForIssueAction,
    activeIssuesInResidentCityCreateConArgumentAction,
    activeIssuesInResidentCityRemoveFromFavoritesForIssueAction,
    ...(customActions ?? {}),
  };

  // Effect section
  useEffect(() => {
    (async () => {
      const res = await getSingletonPayload();
      if (res?.__signedIdentifier) {
        singletonHost.current = res;
      } else {
        navigate('*');
        return;
      }
      await actions.refreshAction!(pageQueryCustomizer);
    })();
  }, []);

  return (
    <div
      id="User/(esm/_UUu7kFrMEe6_67aMO2jOsw)/AccessViewPageDefinition"
      data-page-name="service::User::userIssues::AccessViewPage"
    >
      <Suspense>
        <PageContainerTransition>
          <ServiceUserIssuesUserIssues_View_EditPageContainer
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
