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
import { userServiceForUserIssuesImpl } from '~/services/data-axios';
export type ServiceUserIssuesUserIssues_View_EditPageActionsExtended =
  ServiceUserIssuesUserIssues_View_EditPageActions & {
    postActiveIssuesGlobalActivateForIssueAction?: (target: ServiceIssueStored) => Promise<void>;
    postActiveIssuesInActivityCitiesActivateForIssueAction?: (target: ServiceIssueStored) => Promise<void>;
    postActiveIssuesInActivityCountiesActivateForIssueAction?: (target: ServiceIssueStored) => Promise<void>;
    postActiveIssuesInActivityDistrictsActivateForIssueAction?: (target: ServiceIssueStored) => Promise<void>;
    postActiveIssuesInResidentCityActivateForIssueAction?: (target: ServiceIssueStored) => Promise<void>;
    postActiveIssuesInResidentCountyActivateForIssueAction?: (target: ServiceIssueStored) => Promise<void>;
    postActiveIssuesInResidentDistrictActivateForIssueAction?: (target: ServiceIssueStored) => Promise<void>;
    postOwnedIssuesActivateForIssueAction?: (target: ServiceIssueStored) => Promise<void>;
    postActiveIssuesGlobalAddToFavoritesForIssueAction?: (target: ServiceIssueStored) => Promise<void>;
    postActiveIssuesInActivityCitiesAddToFavoritesForIssueAction?: (target: ServiceIssueStored) => Promise<void>;
    postActiveIssuesInActivityCountiesAddToFavoritesForIssueAction?: (target: ServiceIssueStored) => Promise<void>;
    postActiveIssuesInActivityDistrictsAddToFavoritesForIssueAction?: (target: ServiceIssueStored) => Promise<void>;
    postActiveIssuesInResidentCityAddToFavoritesForIssueAction?: (target: ServiceIssueStored) => Promise<void>;
    postActiveIssuesInResidentCountyAddToFavoritesForIssueAction?: (target: ServiceIssueStored) => Promise<void>;
    postActiveIssuesInResidentDistrictAddToFavoritesForIssueAction?: (target: ServiceIssueStored) => Promise<void>;
    postOwnedIssuesAddToFavoritesForIssueAction?: (target: ServiceIssueStored) => Promise<void>;
    postActiveIssuesGlobalCloseVoteForIssueAction?: (target: ServiceIssueStored) => Promise<void>;
    postActiveIssuesInActivityCitiesCloseVoteForIssueAction?: (target: ServiceIssueStored) => Promise<void>;
    postActiveIssuesInActivityCountiesCloseVoteForIssueAction?: (target: ServiceIssueStored) => Promise<void>;
    postActiveIssuesInActivityDistrictsCloseVoteForIssueAction?: (target: ServiceIssueStored) => Promise<void>;
    postActiveIssuesInResidentCityCloseVoteForIssueAction?: (target: ServiceIssueStored) => Promise<void>;
    postActiveIssuesInResidentCountyCloseVoteForIssueAction?: (target: ServiceIssueStored) => Promise<void>;
    postActiveIssuesInResidentDistrictCloseVoteForIssueAction?: (target: ServiceIssueStored) => Promise<void>;
    postOwnedIssuesCloseVoteForIssueAction?: (target: ServiceIssueStored) => Promise<void>;
    postActiveIssuesGlobalDeleteOrArchiveForIssueAction?: (target: ServiceIssueStored) => Promise<void>;
    postActiveIssuesInActivityCitiesDeleteOrArchiveForIssueAction?: (target: ServiceIssueStored) => Promise<void>;
    postActiveIssuesInActivityCountiesDeleteOrArchiveForIssueAction?: (target: ServiceIssueStored) => Promise<void>;
    postActiveIssuesInActivityDistrictsDeleteOrArchiveForIssueAction?: (target: ServiceIssueStored) => Promise<void>;
    postActiveIssuesInResidentCityDeleteOrArchiveForIssueAction?: (target: ServiceIssueStored) => Promise<void>;
    postActiveIssuesInResidentCountyDeleteOrArchiveForIssueAction?: (target: ServiceIssueStored) => Promise<void>;
    postActiveIssuesInResidentDistrictDeleteOrArchiveForIssueAction?: (target: ServiceIssueStored) => Promise<void>;
    postOwnedIssuesDeleteOrArchiveForIssueAction?: (target: ServiceIssueStored) => Promise<void>;
    postActiveIssuesGlobalRemoveFromFavoritesForIssueAction?: (target: ServiceIssueStored) => Promise<void>;
    postActiveIssuesInActivityCitiesRemoveFromFavoritesForIssueAction?: (target: ServiceIssueStored) => Promise<void>;
    postActiveIssuesInActivityCountiesRemoveFromFavoritesForIssueAction?: (target: ServiceIssueStored) => Promise<void>;
    postActiveIssuesInActivityDistrictsRemoveFromFavoritesForIssueAction?: (
      target: ServiceIssueStored,
    ) => Promise<void>;
    postActiveIssuesInResidentCityRemoveFromFavoritesForIssueAction?: (target: ServiceIssueStored) => Promise<void>;
    postActiveIssuesInResidentCountyRemoveFromFavoritesForIssueAction?: (target: ServiceIssueStored) => Promise<void>;
    postActiveIssuesInResidentDistrictRemoveFromFavoritesForIssueAction?: (target: ServiceIssueStored) => Promise<void>;
    postOwnedIssuesRemoveFromFavoritesForIssueAction?: (target: ServiceIssueStored) => Promise<void>;
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
  const dateTypes: string[] = [];
  const dateTimeTypes: string[] = [];
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

const ServiceUserIssuesUserIssues_View_EditPageContainer = lazy(
  () =>
    import('~/containers/Service/UserIssues/UserIssues_View_Edit/ServiceUserIssuesUserIssues_View_EditPageContainer'),
);

// XMIID: User/(esm/_UUu7kFrMEe6_67aMO2jOsw)/AccessViewPageDefinition
// Name: service::User::userIssues::Access::View::Page
// Access: true
// Single Access: true
export default function ServiceUserUserIssuesAccessViewPage() {
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
  const activeIssuesInActivityCountiesAddToFavoritesForIssueAction = async (target?: ServiceIssueStored) => {
    try {
      setIsLoading(true);
      await userServiceForUserIssuesImpl.addToFavoritesForActiveIssuesInActivityCounties(target!);

      if (customActions?.postActiveIssuesInActivityCountiesAddToFavoritesForIssueAction) {
        await customActions.postActiveIssuesInActivityCountiesAddToFavoritesForIssueAction(target!);
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
  const activeIssuesInActivityCountiesDeleteOrArchiveForIssueAction = async (target?: ServiceIssueStored) => {
    try {
      setIsLoading(true);
      await userServiceForUserIssuesImpl.deleteOrArchiveForActiveIssuesInActivityCounties(target!);

      if (customActions?.postActiveIssuesInActivityCountiesDeleteOrArchiveForIssueAction) {
        await customActions.postActiveIssuesInActivityCountiesDeleteOrArchiveForIssueAction(target!);
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
      handleError<ServiceUserIssues>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const activeIssuesInActivityCountiesCreateCommentAction = async (target: ServiceIssueStored) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCreateCommentInputForm(target);
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
      handleError<ServiceUserIssues>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const activeIssuesInActivityCountiesActivateForIssueAction = async (target?: ServiceIssueStored) => {
    try {
      setIsLoading(true);
      await userServiceForUserIssuesImpl.activateForActiveIssuesInActivityCounties(target!);

      if (customActions?.postActiveIssuesInActivityCountiesActivateForIssueAction) {
        await customActions.postActiveIssuesInActivityCountiesActivateForIssueAction(target!);
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
  const activeIssuesInActivityCountiesCloseDebateAction = async (target: ServiceIssueStored) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCloseDebateInputForm(target);
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
  const ownedIssuesAddToFavoritesForIssueAction = async (target?: ServiceIssueStored) => {
    try {
      setIsLoading(true);
      await userServiceForUserIssuesImpl.addToFavoritesForOwnedIssues(target!);

      if (customActions?.postOwnedIssuesAddToFavoritesForIssueAction) {
        await customActions.postOwnedIssuesAddToFavoritesForIssueAction(target!);
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
  const ownedIssuesDeleteOrArchiveForIssueAction = async (target?: ServiceIssueStored) => {
    try {
      setIsLoading(true);
      await userServiceForUserIssuesImpl.deleteOrArchiveForOwnedIssues(target!);

      if (customActions?.postOwnedIssuesDeleteOrArchiveForIssueAction) {
        await customActions.postOwnedIssuesDeleteOrArchiveForIssueAction(target!);
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
      handleError<ServiceUserIssues>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const ownedIssuesCreateCommentAction = async (target: ServiceIssueStored) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCreateCommentInputForm(target);
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
      handleError<ServiceUserIssues>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const ownedIssuesActivateForIssueAction = async (target?: ServiceIssueStored) => {
    try {
      setIsLoading(true);
      await userServiceForUserIssuesImpl.activateForOwnedIssues(target!);

      if (customActions?.postOwnedIssuesActivateForIssueAction) {
        await customActions.postOwnedIssuesActivateForIssueAction(target!);
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
  const ownedIssuesCloseDebateAction = async (target: ServiceIssueStored) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCloseDebateInputForm(target);
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
      handleError<ServiceUserIssues>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
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
  const activeIssuesInResidentDistrictAddToFavoritesForIssueAction = async (target?: ServiceIssueStored) => {
    try {
      setIsLoading(true);
      await userServiceForUserIssuesImpl.addToFavoritesForActiveIssuesInResidentDistrict(target!);

      if (customActions?.postActiveIssuesInResidentDistrictAddToFavoritesForIssueAction) {
        await customActions.postActiveIssuesInResidentDistrictAddToFavoritesForIssueAction(target!);
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
  const activeIssuesInResidentDistrictDeleteOrArchiveForIssueAction = async (target?: ServiceIssueStored) => {
    try {
      setIsLoading(true);
      await userServiceForUserIssuesImpl.deleteOrArchiveForActiveIssuesInResidentDistrict(target!);

      if (customActions?.postActiveIssuesInResidentDistrictDeleteOrArchiveForIssueAction) {
        await customActions.postActiveIssuesInResidentDistrictDeleteOrArchiveForIssueAction(target!);
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
      handleError<ServiceUserIssues>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const activeIssuesInResidentDistrictCreateCommentAction = async (target: ServiceIssueStored) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCreateCommentInputForm(target);
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
      handleError<ServiceUserIssues>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const activeIssuesInResidentDistrictActivateForIssueAction = async (target?: ServiceIssueStored) => {
    try {
      setIsLoading(true);
      await userServiceForUserIssuesImpl.activateForActiveIssuesInResidentDistrict(target!);

      if (customActions?.postActiveIssuesInResidentDistrictActivateForIssueAction) {
        await customActions.postActiveIssuesInResidentDistrictActivateForIssueAction(target!);
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
  const activeIssuesInResidentDistrictCloseDebateAction = async (target: ServiceIssueStored) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCloseDebateInputForm(target);
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
  const activeIssuesInActivityCitiesAddToFavoritesForIssueAction = async (target?: ServiceIssueStored) => {
    try {
      setIsLoading(true);
      await userServiceForUserIssuesImpl.addToFavoritesForActiveIssuesInActivityCities(target!);

      if (customActions?.postActiveIssuesInActivityCitiesAddToFavoritesForIssueAction) {
        await customActions.postActiveIssuesInActivityCitiesAddToFavoritesForIssueAction(target!);
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
  const activeIssuesInActivityCitiesDeleteOrArchiveForIssueAction = async (target?: ServiceIssueStored) => {
    try {
      setIsLoading(true);
      await userServiceForUserIssuesImpl.deleteOrArchiveForActiveIssuesInActivityCities(target!);

      if (customActions?.postActiveIssuesInActivityCitiesDeleteOrArchiveForIssueAction) {
        await customActions.postActiveIssuesInActivityCitiesDeleteOrArchiveForIssueAction(target!);
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
      handleError<ServiceUserIssues>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const activeIssuesInActivityCitiesCreateCommentAction = async (target: ServiceIssueStored) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCreateCommentInputForm(target);
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
      handleError<ServiceUserIssues>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const activeIssuesInActivityCitiesActivateForIssueAction = async (target?: ServiceIssueStored) => {
    try {
      setIsLoading(true);
      await userServiceForUserIssuesImpl.activateForActiveIssuesInActivityCities(target!);

      if (customActions?.postActiveIssuesInActivityCitiesActivateForIssueAction) {
        await customActions.postActiveIssuesInActivityCitiesActivateForIssueAction(target!);
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
  const activeIssuesInActivityCitiesCloseDebateAction = async (target: ServiceIssueStored) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCloseDebateInputForm(target);
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
  const activeIssuesInActivityDistrictsAddToFavoritesForIssueAction = async (target?: ServiceIssueStored) => {
    try {
      setIsLoading(true);
      await userServiceForUserIssuesImpl.addToFavoritesForActiveIssuesInActivityDistricts(target!);

      if (customActions?.postActiveIssuesInActivityDistrictsAddToFavoritesForIssueAction) {
        await customActions.postActiveIssuesInActivityDistrictsAddToFavoritesForIssueAction(target!);
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
  const activeIssuesInActivityDistrictsDeleteOrArchiveForIssueAction = async (target?: ServiceIssueStored) => {
    try {
      setIsLoading(true);
      await userServiceForUserIssuesImpl.deleteOrArchiveForActiveIssuesInActivityDistricts(target!);

      if (customActions?.postActiveIssuesInActivityDistrictsDeleteOrArchiveForIssueAction) {
        await customActions.postActiveIssuesInActivityDistrictsDeleteOrArchiveForIssueAction(target!);
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
      handleError<ServiceUserIssues>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const activeIssuesInActivityDistrictsCreateCommentAction = async (target: ServiceIssueStored) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCreateCommentInputForm(target);
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
      handleError<ServiceUserIssues>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const activeIssuesInActivityDistrictsActivateForIssueAction = async (target?: ServiceIssueStored) => {
    try {
      setIsLoading(true);
      await userServiceForUserIssuesImpl.activateForActiveIssuesInActivityDistricts(target!);

      if (customActions?.postActiveIssuesInActivityDistrictsActivateForIssueAction) {
        await customActions.postActiveIssuesInActivityDistrictsActivateForIssueAction(target!);
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
  const activeIssuesInActivityDistrictsCloseDebateAction = async (target: ServiceIssueStored) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCloseDebateInputForm(target);
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
  const activeIssuesGlobalAddToFavoritesForIssueAction = async (target?: ServiceIssueStored) => {
    try {
      setIsLoading(true);
      await userServiceForUserIssuesImpl.addToFavoritesForActiveIssuesGlobal(target!);

      if (customActions?.postActiveIssuesGlobalAddToFavoritesForIssueAction) {
        await customActions.postActiveIssuesGlobalAddToFavoritesForIssueAction(target!);
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
  const activeIssuesGlobalDeleteOrArchiveForIssueAction = async (target?: ServiceIssueStored) => {
    try {
      setIsLoading(true);
      await userServiceForUserIssuesImpl.deleteOrArchiveForActiveIssuesGlobal(target!);

      if (customActions?.postActiveIssuesGlobalDeleteOrArchiveForIssueAction) {
        await customActions.postActiveIssuesGlobalDeleteOrArchiveForIssueAction(target!);
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
      handleError<ServiceUserIssues>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const activeIssuesGlobalCreateCommentAction = async (target: ServiceIssueStored) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCreateCommentInputForm(target);
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
      handleError<ServiceUserIssues>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const activeIssuesGlobalActivateForIssueAction = async (target?: ServiceIssueStored) => {
    try {
      setIsLoading(true);
      await userServiceForUserIssuesImpl.activateForActiveIssuesGlobal(target!);

      if (customActions?.postActiveIssuesGlobalActivateForIssueAction) {
        await customActions.postActiveIssuesGlobalActivateForIssueAction(target!);
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
  const activeIssuesGlobalCloseDebateAction = async (target: ServiceIssueStored) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCloseDebateInputForm(target);
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
  const activeIssuesInResidentCityAddToFavoritesForIssueAction = async (target?: ServiceIssueStored) => {
    try {
      setIsLoading(true);
      await userServiceForUserIssuesImpl.addToFavoritesForActiveIssuesInResidentCity(target!);

      if (customActions?.postActiveIssuesInResidentCityAddToFavoritesForIssueAction) {
        await customActions.postActiveIssuesInResidentCityAddToFavoritesForIssueAction(target!);
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
  const activeIssuesInResidentCityDeleteOrArchiveForIssueAction = async (target?: ServiceIssueStored) => {
    try {
      setIsLoading(true);
      await userServiceForUserIssuesImpl.deleteOrArchiveForActiveIssuesInResidentCity(target!);

      if (customActions?.postActiveIssuesInResidentCityDeleteOrArchiveForIssueAction) {
        await customActions.postActiveIssuesInResidentCityDeleteOrArchiveForIssueAction(target!);
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
      handleError<ServiceUserIssues>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const activeIssuesInResidentCityCreateCommentAction = async (target: ServiceIssueStored) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCreateCommentInputForm(target);
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
      handleError<ServiceUserIssues>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const activeIssuesInResidentCityActivateForIssueAction = async (target?: ServiceIssueStored) => {
    try {
      setIsLoading(true);
      await userServiceForUserIssuesImpl.activateForActiveIssuesInResidentCity(target!);

      if (customActions?.postActiveIssuesInResidentCityActivateForIssueAction) {
        await customActions.postActiveIssuesInResidentCityActivateForIssueAction(target!);
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
  const activeIssuesInResidentCityCloseDebateAction = async (target: ServiceIssueStored) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCloseDebateInputForm(target);
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
  const activeIssuesInResidentCountyAddToFavoritesForIssueAction = async (target?: ServiceIssueStored) => {
    try {
      setIsLoading(true);
      await userServiceForUserIssuesImpl.addToFavoritesForActiveIssuesInResidentCounty(target!);

      if (customActions?.postActiveIssuesInResidentCountyAddToFavoritesForIssueAction) {
        await customActions.postActiveIssuesInResidentCountyAddToFavoritesForIssueAction(target!);
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
  const activeIssuesInResidentCountyDeleteOrArchiveForIssueAction = async (target?: ServiceIssueStored) => {
    try {
      setIsLoading(true);
      await userServiceForUserIssuesImpl.deleteOrArchiveForActiveIssuesInResidentCounty(target!);

      if (customActions?.postActiveIssuesInResidentCountyDeleteOrArchiveForIssueAction) {
        await customActions.postActiveIssuesInResidentCountyDeleteOrArchiveForIssueAction(target!);
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
      handleError<ServiceUserIssues>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const activeIssuesInResidentCountyCreateCommentAction = async (target: ServiceIssueStored) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCreateCommentInputForm(target);
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
      handleError<ServiceUserIssues>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const activeIssuesInResidentCountyActivateForIssueAction = async (target?: ServiceIssueStored) => {
    try {
      setIsLoading(true);
      await userServiceForUserIssuesImpl.activateForActiveIssuesInResidentCounty(target!);

      if (customActions?.postActiveIssuesInResidentCountyActivateForIssueAction) {
        await customActions.postActiveIssuesInResidentCountyActivateForIssueAction(target!);
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
  const activeIssuesInResidentCountyCloseDebateAction = async (target: ServiceIssueStored) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCloseDebateInputForm(target);
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
    activeIssuesInActivityCountiesOpenPageAction,
    activeIssuesInActivityCountiesFilterAction,
    activeIssuesInActivityCountiesRefreshAction,
    activeIssuesInActivityCountiesAddToFavoritesForIssueAction,
    activeIssuesInActivityCountiesCreateProArgumentAction,
    activeIssuesInActivityCountiesDeleteOrArchiveForIssueAction,
    activeIssuesInActivityCountiesCreateCommentAction,
    activeIssuesInActivityCountiesRemoveFromFavoritesForIssueAction,
    activeIssuesInActivityCountiesActivateForIssueAction,
    activeIssuesInActivityCountiesCreateConArgumentAction,
    activeIssuesInActivityCountiesCloseDebateAction,
    activeIssuesInActivityCountiesCloseVoteForIssueAction,
    ownedIssuesOpenPageAction,
    ownedIssuesFilterAction,
    ownedIssuesRefreshAction,
    ownedIssuesAddToFavoritesForIssueAction,
    ownedIssuesCreateProArgumentAction,
    ownedIssuesDeleteOrArchiveForIssueAction,
    ownedIssuesCreateCommentAction,
    ownedIssuesRemoveFromFavoritesForIssueAction,
    ownedIssuesActivateForIssueAction,
    ownedIssuesCreateConArgumentAction,
    ownedIssuesCloseDebateAction,
    ownedIssuesCloseVoteForIssueAction,
    activeIssuesInResidentDistrictOpenPageAction,
    activeIssuesInResidentDistrictFilterAction,
    activeIssuesInResidentDistrictRefreshAction,
    activeIssuesInResidentDistrictAddToFavoritesForIssueAction,
    activeIssuesInResidentDistrictCreateProArgumentAction,
    activeIssuesInResidentDistrictDeleteOrArchiveForIssueAction,
    activeIssuesInResidentDistrictCreateCommentAction,
    activeIssuesInResidentDistrictRemoveFromFavoritesForIssueAction,
    activeIssuesInResidentDistrictActivateForIssueAction,
    activeIssuesInResidentDistrictCreateConArgumentAction,
    activeIssuesInResidentDistrictCloseDebateAction,
    activeIssuesInResidentDistrictCloseVoteForIssueAction,
    activeIssuesInActivityCitiesOpenPageAction,
    activeIssuesInActivityCitiesFilterAction,
    activeIssuesInActivityCitiesRefreshAction,
    activeIssuesInActivityCitiesAddToFavoritesForIssueAction,
    activeIssuesInActivityCitiesCreateProArgumentAction,
    activeIssuesInActivityCitiesDeleteOrArchiveForIssueAction,
    activeIssuesInActivityCitiesCreateCommentAction,
    activeIssuesInActivityCitiesRemoveFromFavoritesForIssueAction,
    activeIssuesInActivityCitiesActivateForIssueAction,
    activeIssuesInActivityCitiesCreateConArgumentAction,
    activeIssuesInActivityCitiesCloseDebateAction,
    activeIssuesInActivityCitiesCloseVoteForIssueAction,
    activeIssuesInActivityDistrictsOpenPageAction,
    activeIssuesInActivityDistrictsFilterAction,
    activeIssuesInActivityDistrictsRefreshAction,
    activeIssuesInActivityDistrictsAddToFavoritesForIssueAction,
    activeIssuesInActivityDistrictsCreateProArgumentAction,
    activeIssuesInActivityDistrictsDeleteOrArchiveForIssueAction,
    activeIssuesInActivityDistrictsCreateCommentAction,
    activeIssuesInActivityDistrictsRemoveFromFavoritesForIssueAction,
    activeIssuesInActivityDistrictsActivateForIssueAction,
    activeIssuesInActivityDistrictsCreateConArgumentAction,
    activeIssuesInActivityDistrictsCloseDebateAction,
    activeIssuesInActivityDistrictsCloseVoteForIssueAction,
    activeIssuesGlobalOpenPageAction,
    activeIssuesGlobalFilterAction,
    activeIssuesGlobalRefreshAction,
    activeIssuesGlobalAddToFavoritesForIssueAction,
    activeIssuesGlobalCreateProArgumentAction,
    activeIssuesGlobalDeleteOrArchiveForIssueAction,
    activeIssuesGlobalCreateCommentAction,
    activeIssuesGlobalRemoveFromFavoritesForIssueAction,
    activeIssuesGlobalActivateForIssueAction,
    activeIssuesGlobalCreateConArgumentAction,
    activeIssuesGlobalCloseDebateAction,
    activeIssuesGlobalCloseVoteForIssueAction,
    activeIssuesInResidentCityOpenPageAction,
    activeIssuesInResidentCityFilterAction,
    activeIssuesInResidentCityRefreshAction,
    activeIssuesInResidentCityAddToFavoritesForIssueAction,
    activeIssuesInResidentCityCreateProArgumentAction,
    activeIssuesInResidentCityDeleteOrArchiveForIssueAction,
    activeIssuesInResidentCityCreateCommentAction,
    activeIssuesInResidentCityRemoveFromFavoritesForIssueAction,
    activeIssuesInResidentCityActivateForIssueAction,
    activeIssuesInResidentCityCreateConArgumentAction,
    activeIssuesInResidentCityCloseDebateAction,
    activeIssuesInResidentCityCloseVoteForIssueAction,
    activeIssuesInResidentCountyOpenPageAction,
    activeIssuesInResidentCountyFilterAction,
    activeIssuesInResidentCountyRefreshAction,
    activeIssuesInResidentCountyAddToFavoritesForIssueAction,
    activeIssuesInResidentCountyCreateProArgumentAction,
    activeIssuesInResidentCountyDeleteOrArchiveForIssueAction,
    activeIssuesInResidentCountyCreateCommentAction,
    activeIssuesInResidentCountyRemoveFromFavoritesForIssueAction,
    activeIssuesInResidentCountyActivateForIssueAction,
    activeIssuesInResidentCountyCreateConArgumentAction,
    activeIssuesInResidentCountyCloseDebateAction,
    activeIssuesInResidentCountyCloseVoteForIssueAction,
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
      data-page-name="service::User::userIssues::Access::View::Page"
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
          />
        </PageContainerTransition>
      </Suspense>
    </div>
  );
}
