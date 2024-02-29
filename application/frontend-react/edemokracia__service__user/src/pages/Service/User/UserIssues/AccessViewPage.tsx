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
import { v4 as uuidv4 } from 'uuid';
import { useJudoNavigation } from '~/components';
import type { Filter, FilterOption } from '~/components-api';
import { useConfirmDialog, useFilterDialog } from '~/components/dialog';
import type {
  ServiceUserIssuesUserIssues_View_EditPageActions,
  ServiceUserIssuesUserIssues_View_EditPageProps,
} from '~/containers/Service/UserIssues/UserIssues_View_Edit/ServiceUserIssuesUserIssues_View_EditPageContainer';
import { useServiceIssueIssue_View_EditCloseDebateInputForm } from '~/dialogs/Service/Issue/Issue_View_Edit/CloseDebate/Input/Form';
import { useServiceIssueIssue_View_EditCreateCommentInputForm } from '~/dialogs/Service/Issue/Issue_View_Edit/CreateComment/Input/Form';
import { useServiceIssueIssue_View_EditCreateConArgumentInputForm } from '~/dialogs/Service/Issue/Issue_View_Edit/CreateConArgument/Input/Form';
import { useServiceIssueIssue_View_EditCreateProArgumentInputForm } from '~/dialogs/Service/Issue/Issue_View_Edit/CreateProArgument/Input/Form';
import { useServiceUserIssuesUserIssues_View_EditCreateIssueInputForm } from '~/dialogs/Service/UserIssues/UserIssues_View_Edit/CreateIssue/Input/Form';
import { useServiceUserIssuesUserIssues_View_EditRootTabBarOwnedIssuesGroupOwnedIssuesTableAddSelectorPage } from '~/dialogs/Service/UserIssues/UserIssues_View_Edit/Root/TabBar/OwnedIssuesGroup/OwnedIssues/TableAddSelectorPage';
import { useCRUDDialog, useSnacks, useViewData } from '~/hooks';
import { routeToServiceUserIssuesActiveIssuesGlobalRelationViewPage } from '~/routes';
import { routeToServiceUserIssuesActiveIssuesInActivityCitiesRelationViewPage } from '~/routes';
import { routeToServiceUserIssuesActiveIssuesInActivityCountiesRelationViewPage } from '~/routes';
import { routeToServiceUserIssuesActiveIssuesInActivityDistrictsRelationViewPage } from '~/routes';
import { routeToServiceUserIssuesActiveIssuesInResidentCityRelationViewPage } from '~/routes';
import { routeToServiceUserIssuesActiveIssuesInResidentCountyRelationViewPage } from '~/routes';
import { routeToServiceUserIssuesActiveIssuesInResidentDistrictRelationViewPage } from '~/routes';
import { routeToServiceUserIssuesOwnedIssuesRelationViewPage } from '~/routes';
import type {
  ServiceIssue,
  ServiceIssueQueryCustomizer,
  ServiceIssueStored,
  ServiceUserIssues,
  ServiceUserIssuesQueryCustomizer,
  ServiceUserIssuesStored,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import type { JudoRestResponse } from '~/services/data-api/rest';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { UserServiceForUserIssuesImpl } from '~/services/data-axios/UserServiceForUserIssuesImpl';
import { PageContainerTransition } from '~/theme/animations';
import { cleanUpPayload, processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';

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
  'SERVICE_USER_USER_ISSUES_ACCESS_VIEW_PAGE_ACTIONS_HOOK';
export type ServiceUserIssuesUserIssues_View_EditActionsHook = (
  data: ServiceUserIssuesStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof ServiceUserIssues, value: any) => void,

  refresh: () => Promise<void>,
  submit: () => Promise<void>,
) => ServiceUserIssuesUserIssues_View_EditPageActionsExtended;

export interface ServiceUserIssuesUserIssues_View_EditViewModel extends ServiceUserIssuesUserIssues_View_EditPageProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setEditMode: Dispatch<SetStateAction<boolean>>;
  refresh: () => Promise<void>;
}

const ServiceUserIssuesUserIssues_View_EditViewModelContext =
  createContext<ServiceUserIssuesUserIssues_View_EditViewModel>({} as any);
export const useServiceUserIssuesUserIssues_View_EditViewModel = () => {
  const context = useContext(ServiceUserIssuesUserIssues_View_EditViewModelContext);
  if (!context) {
    throw new Error(
      'useServiceUserIssuesUserIssues_View_EditViewModel must be used within a(n) ServiceUserIssuesUserIssues_View_EditViewModelProvider',
    );
  }
  return context;
};

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
  const { setLatestViewData } = useViewData();
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

  const getPageQueryCustomizer: () => ServiceUserIssuesQueryCustomizer = () => ({
    _mask: actions.getMask ? actions.getMask!() : '{}',
  });

  // Private actions
  const submit = async () => {};
  const refresh = async () => {
    if (actions.refreshAction) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };

  // Pandino Action overrides
  const { service: customActionsHook } = useTrackService<ServiceUserIssuesUserIssues_View_EditActionsHook>(
    `(${OBJECTCLASS}=${SERVICE_USER_USER_ISSUES_ACCESS_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const customActions: ServiceUserIssuesUserIssues_View_EditPageActionsExtended | undefined = customActionsHook?.(
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
  const openServiceUserIssuesUserIssues_View_EditCreateIssueInputForm =
    useServiceUserIssuesUserIssues_View_EditCreateIssueInputForm();
  const openServiceUserIssuesUserIssues_View_EditRootTabBarOwnedIssuesGroupOwnedIssuesTableAddSelectorPage =
    useServiceUserIssuesUserIssues_View_EditRootTabBarOwnedIssuesGroupOwnedIssuesTableAddSelectorPage();

  // Action section
  const getPageTitle = (data: ServiceUserIssues): string => {
    return t('service.UserIssues.UserIssues_View_Edit', { defaultValue: 'UserIssues View / Edit' });
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
          await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
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
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );

        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
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
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );

        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
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
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );

        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
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
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );

        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
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
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );

        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
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
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );

        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
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
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );

        if (!editMode) {
          await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
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
          await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
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
          await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
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
          await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
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
          await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
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
          await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
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
          await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
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
          await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
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
          await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
        }
      }
    } catch (error) {
      handleError<ServiceUserIssues>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const activeIssuesGlobalCloseDebateAction = async (
    target: ServiceIssueStored,
    templateDataOverride?: Partial<ServiceIssue>,
    isDraft?: boolean,
    ownerValidation?: (data: any) => Promise<void>,
  ) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCloseDebateInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };
  const activeIssuesInActivityCitiesCloseDebateAction = async (
    target: ServiceIssueStored,
    templateDataOverride?: Partial<ServiceIssue>,
    isDraft?: boolean,
    ownerValidation?: (data: any) => Promise<void>,
  ) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCloseDebateInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };
  const activeIssuesInActivityCountiesCloseDebateAction = async (
    target: ServiceIssueStored,
    templateDataOverride?: Partial<ServiceIssue>,
    isDraft?: boolean,
    ownerValidation?: (data: any) => Promise<void>,
  ) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCloseDebateInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };
  const activeIssuesInActivityDistrictsCloseDebateAction = async (
    target: ServiceIssueStored,
    templateDataOverride?: Partial<ServiceIssue>,
    isDraft?: boolean,
    ownerValidation?: (data: any) => Promise<void>,
  ) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCloseDebateInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };
  const activeIssuesInResidentCityCloseDebateAction = async (
    target: ServiceIssueStored,
    templateDataOverride?: Partial<ServiceIssue>,
    isDraft?: boolean,
    ownerValidation?: (data: any) => Promise<void>,
  ) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCloseDebateInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };
  const activeIssuesInResidentCountyCloseDebateAction = async (
    target: ServiceIssueStored,
    templateDataOverride?: Partial<ServiceIssue>,
    isDraft?: boolean,
    ownerValidation?: (data: any) => Promise<void>,
  ) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCloseDebateInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };
  const activeIssuesInResidentDistrictCloseDebateAction = async (
    target: ServiceIssueStored,
    templateDataOverride?: Partial<ServiceIssue>,
    isDraft?: boolean,
    ownerValidation?: (data: any) => Promise<void>,
  ) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCloseDebateInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };
  const ownedIssuesCloseDebateAction = async (
    target: ServiceIssueStored,
    templateDataOverride?: Partial<ServiceIssue>,
    isDraft?: boolean,
    ownerValidation?: (data: any) => Promise<void>,
  ) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCloseDebateInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
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
          await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
        }
      }
    } catch (error) {
      handleError<ServiceUserIssues>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
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
          await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
        }
      }
    } catch (error) {
      handleError<ServiceUserIssues>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
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
          await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
        }
      }
    } catch (error) {
      handleError<ServiceUserIssues>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
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
          await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
        }
      }
    } catch (error) {
      handleError<ServiceUserIssues>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
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
          await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
        }
      }
    } catch (error) {
      handleError<ServiceUserIssues>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
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
          await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
        }
      }
    } catch (error) {
      handleError<ServiceUserIssues>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
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
          await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
        }
      }
    } catch (error) {
      handleError<ServiceUserIssues>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
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
          await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
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
          await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
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
          await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
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
          await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
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
          await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
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
          await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
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
          await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
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
          await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
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
          await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
        }
      }
    } catch (error) {
      handleError<ServiceUserIssues>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const activeIssuesGlobalCreateConArgumentAction = async (
    target: ServiceIssueStored,
    templateDataOverride?: Partial<ServiceIssue>,
    isDraft?: boolean,
    ownerValidation?: (data: any) => Promise<void>,
  ) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCreateConArgumentInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };
  const activeIssuesInActivityCitiesCreateConArgumentAction = async (
    target: ServiceIssueStored,
    templateDataOverride?: Partial<ServiceIssue>,
    isDraft?: boolean,
    ownerValidation?: (data: any) => Promise<void>,
  ) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCreateConArgumentInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };
  const activeIssuesInActivityCountiesCreateConArgumentAction = async (
    target: ServiceIssueStored,
    templateDataOverride?: Partial<ServiceIssue>,
    isDraft?: boolean,
    ownerValidation?: (data: any) => Promise<void>,
  ) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCreateConArgumentInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };
  const activeIssuesInActivityDistrictsCreateConArgumentAction = async (
    target: ServiceIssueStored,
    templateDataOverride?: Partial<ServiceIssue>,
    isDraft?: boolean,
    ownerValidation?: (data: any) => Promise<void>,
  ) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCreateConArgumentInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };
  const activeIssuesInResidentCityCreateConArgumentAction = async (
    target: ServiceIssueStored,
    templateDataOverride?: Partial<ServiceIssue>,
    isDraft?: boolean,
    ownerValidation?: (data: any) => Promise<void>,
  ) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCreateConArgumentInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };
  const activeIssuesInResidentCountyCreateConArgumentAction = async (
    target: ServiceIssueStored,
    templateDataOverride?: Partial<ServiceIssue>,
    isDraft?: boolean,
    ownerValidation?: (data: any) => Promise<void>,
  ) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCreateConArgumentInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };
  const activeIssuesInResidentDistrictCreateConArgumentAction = async (
    target: ServiceIssueStored,
    templateDataOverride?: Partial<ServiceIssue>,
    isDraft?: boolean,
    ownerValidation?: (data: any) => Promise<void>,
  ) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCreateConArgumentInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };
  const ownedIssuesCreateConArgumentAction = async (
    target: ServiceIssueStored,
    templateDataOverride?: Partial<ServiceIssue>,
    isDraft?: boolean,
    ownerValidation?: (data: any) => Promise<void>,
  ) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCreateConArgumentInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };
  const activeIssuesGlobalCreateProArgumentAction = async (
    target: ServiceIssueStored,
    templateDataOverride?: Partial<ServiceIssue>,
    isDraft?: boolean,
    ownerValidation?: (data: any) => Promise<void>,
  ) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCreateProArgumentInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };
  const activeIssuesInActivityCitiesCreateProArgumentAction = async (
    target: ServiceIssueStored,
    templateDataOverride?: Partial<ServiceIssue>,
    isDraft?: boolean,
    ownerValidation?: (data: any) => Promise<void>,
  ) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCreateProArgumentInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };
  const activeIssuesInActivityCountiesCreateProArgumentAction = async (
    target: ServiceIssueStored,
    templateDataOverride?: Partial<ServiceIssue>,
    isDraft?: boolean,
    ownerValidation?: (data: any) => Promise<void>,
  ) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCreateProArgumentInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };
  const activeIssuesInActivityDistrictsCreateProArgumentAction = async (
    target: ServiceIssueStored,
    templateDataOverride?: Partial<ServiceIssue>,
    isDraft?: boolean,
    ownerValidation?: (data: any) => Promise<void>,
  ) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCreateProArgumentInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };
  const activeIssuesInResidentCityCreateProArgumentAction = async (
    target: ServiceIssueStored,
    templateDataOverride?: Partial<ServiceIssue>,
    isDraft?: boolean,
    ownerValidation?: (data: any) => Promise<void>,
  ) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCreateProArgumentInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };
  const activeIssuesInResidentCountyCreateProArgumentAction = async (
    target: ServiceIssueStored,
    templateDataOverride?: Partial<ServiceIssue>,
    isDraft?: boolean,
    ownerValidation?: (data: any) => Promise<void>,
  ) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCreateProArgumentInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };
  const activeIssuesInResidentDistrictCreateProArgumentAction = async (
    target: ServiceIssueStored,
    templateDataOverride?: Partial<ServiceIssue>,
    isDraft?: boolean,
    ownerValidation?: (data: any) => Promise<void>,
  ) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCreateProArgumentInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };
  const ownedIssuesCreateProArgumentAction = async (
    target: ServiceIssueStored,
    templateDataOverride?: Partial<ServiceIssue>,
    isDraft?: boolean,
    ownerValidation?: (data: any) => Promise<void>,
  ) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCreateProArgumentInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };
  const activeIssuesGlobalCreateCommentAction = async (
    target: ServiceIssueStored,
    templateDataOverride?: Partial<ServiceIssue>,
    isDraft?: boolean,
    ownerValidation?: (data: any) => Promise<void>,
  ) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCreateCommentInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };
  const activeIssuesInActivityCitiesCreateCommentAction = async (
    target: ServiceIssueStored,
    templateDataOverride?: Partial<ServiceIssue>,
    isDraft?: boolean,
    ownerValidation?: (data: any) => Promise<void>,
  ) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCreateCommentInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };
  const activeIssuesInActivityCountiesCreateCommentAction = async (
    target: ServiceIssueStored,
    templateDataOverride?: Partial<ServiceIssue>,
    isDraft?: boolean,
    ownerValidation?: (data: any) => Promise<void>,
  ) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCreateCommentInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };
  const activeIssuesInActivityDistrictsCreateCommentAction = async (
    target: ServiceIssueStored,
    templateDataOverride?: Partial<ServiceIssue>,
    isDraft?: boolean,
    ownerValidation?: (data: any) => Promise<void>,
  ) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCreateCommentInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };
  const activeIssuesInResidentCityCreateCommentAction = async (
    target: ServiceIssueStored,
    templateDataOverride?: Partial<ServiceIssue>,
    isDraft?: boolean,
    ownerValidation?: (data: any) => Promise<void>,
  ) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCreateCommentInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };
  const activeIssuesInResidentCountyCreateCommentAction = async (
    target: ServiceIssueStored,
    templateDataOverride?: Partial<ServiceIssue>,
    isDraft?: boolean,
    ownerValidation?: (data: any) => Promise<void>,
  ) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCreateCommentInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };
  const activeIssuesInResidentDistrictCreateCommentAction = async (
    target: ServiceIssueStored,
    templateDataOverride?: Partial<ServiceIssue>,
    isDraft?: boolean,
    ownerValidation?: (data: any) => Promise<void>,
  ) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCreateCommentInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };
  const ownedIssuesCreateCommentAction = async (
    target: ServiceIssueStored,
    templateDataOverride?: Partial<ServiceIssue>,
    isDraft?: boolean,
    ownerValidation?: (data: any) => Promise<void>,
  ) => {
    const { result, data: returnedData } = await openServiceIssueIssue_View_EditCreateCommentInputForm(target);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
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
          await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
        }
      }
    } catch (error) {
      handleError<ServiceUserIssues>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
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
          await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
        }
      }
    } catch (error) {
      handleError<ServiceUserIssues>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
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
          await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
        }
      }
    } catch (error) {
      handleError<ServiceUserIssues>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
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
          await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
        }
      }
    } catch (error) {
      handleError<ServiceUserIssues>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
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
          await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
        }
      }
    } catch (error) {
      handleError<ServiceUserIssues>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
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
          await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
        }
      }
    } catch (error) {
      handleError<ServiceUserIssues>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
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
          await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
        }
      }
    } catch (error) {
      handleError<ServiceUserIssues>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
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
          await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
        }
      }
    } catch (error) {
      handleError<ServiceUserIssues>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const backAction = async () => {
    navigateBack();
  };
  const refreshAction = async (
    queryCustomizer: ServiceUserIssuesQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceUserIssuesStored>> => {
    try {
      setIsLoading(true);
      setEditMode(false);
      const response = await userServiceForUserIssuesImpl.refresh(singletonHost.current, getPageQueryCustomizer());
      const { data: result } = response;
      setData(result);
      setLatestViewData(result);
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
  const createIssueAction = async (isDraft?: boolean, ownerValidation?: (data: any) => Promise<void>) => {
    const { result, data: returnedData } = await openServiceUserIssuesUserIssues_View_EditCreateIssueInputForm(data);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
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
  ): Promise<JudoRestResponse<ServiceIssueStored[]>> => {
    return userServiceForUserIssuesImpl.listActiveIssuesGlobal(singletonHost.current, queryCustomizer);
  };
  const activeIssuesGlobalOpenPageAction = async (target: ServiceIssue | ServiceIssueStored, isDraft?: boolean) => {
    if (isDraft && (!target || !(target as ServiceIssueStored).__signedIdentifier)) {
    } else if (!isDraft) {
      // if the `target` is missing we are likely navigating to a relation table page, in which case we need the owner's id
      navigate(
        routeToServiceUserIssuesActiveIssuesGlobalRelationViewPage(
          ((target as ServiceIssueStored) || data).__signedIdentifier,
        ),
      );
    }
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
  ): Promise<JudoRestResponse<ServiceIssueStored[]>> => {
    return userServiceForUserIssuesImpl.listActiveIssuesInActivityCities(singletonHost.current, queryCustomizer);
  };
  const activeIssuesInActivityCitiesOpenPageAction = async (
    target: ServiceIssue | ServiceIssueStored,
    isDraft?: boolean,
  ) => {
    if (isDraft && (!target || !(target as ServiceIssueStored).__signedIdentifier)) {
    } else if (!isDraft) {
      // if the `target` is missing we are likely navigating to a relation table page, in which case we need the owner's id
      navigate(
        routeToServiceUserIssuesActiveIssuesInActivityCitiesRelationViewPage(
          ((target as ServiceIssueStored) || data).__signedIdentifier,
        ),
      );
    }
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
  ): Promise<JudoRestResponse<ServiceIssueStored[]>> => {
    return userServiceForUserIssuesImpl.listActiveIssuesInActivityCounties(singletonHost.current, queryCustomizer);
  };
  const activeIssuesInActivityCountiesOpenPageAction = async (
    target: ServiceIssue | ServiceIssueStored,
    isDraft?: boolean,
  ) => {
    if (isDraft && (!target || !(target as ServiceIssueStored).__signedIdentifier)) {
    } else if (!isDraft) {
      // if the `target` is missing we are likely navigating to a relation table page, in which case we need the owner's id
      navigate(
        routeToServiceUserIssuesActiveIssuesInActivityCountiesRelationViewPage(
          ((target as ServiceIssueStored) || data).__signedIdentifier,
        ),
      );
    }
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
  ): Promise<JudoRestResponse<ServiceIssueStored[]>> => {
    return userServiceForUserIssuesImpl.listActiveIssuesInActivityDistricts(singletonHost.current, queryCustomizer);
  };
  const activeIssuesInActivityDistrictsOpenPageAction = async (
    target: ServiceIssue | ServiceIssueStored,
    isDraft?: boolean,
  ) => {
    if (isDraft && (!target || !(target as ServiceIssueStored).__signedIdentifier)) {
    } else if (!isDraft) {
      // if the `target` is missing we are likely navigating to a relation table page, in which case we need the owner's id
      navigate(
        routeToServiceUserIssuesActiveIssuesInActivityDistrictsRelationViewPage(
          ((target as ServiceIssueStored) || data).__signedIdentifier,
        ),
      );
    }
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
  ): Promise<JudoRestResponse<ServiceIssueStored[]>> => {
    return userServiceForUserIssuesImpl.listActiveIssuesInResidentCity(singletonHost.current, queryCustomizer);
  };
  const activeIssuesInResidentCityOpenPageAction = async (
    target: ServiceIssue | ServiceIssueStored,
    isDraft?: boolean,
  ) => {
    if (isDraft && (!target || !(target as ServiceIssueStored).__signedIdentifier)) {
    } else if (!isDraft) {
      // if the `target` is missing we are likely navigating to a relation table page, in which case we need the owner's id
      navigate(
        routeToServiceUserIssuesActiveIssuesInResidentCityRelationViewPage(
          ((target as ServiceIssueStored) || data).__signedIdentifier,
        ),
      );
    }
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
  ): Promise<JudoRestResponse<ServiceIssueStored[]>> => {
    return userServiceForUserIssuesImpl.listActiveIssuesInResidentCounty(singletonHost.current, queryCustomizer);
  };
  const activeIssuesInResidentCountyOpenPageAction = async (
    target: ServiceIssue | ServiceIssueStored,
    isDraft?: boolean,
  ) => {
    if (isDraft && (!target || !(target as ServiceIssueStored).__signedIdentifier)) {
    } else if (!isDraft) {
      // if the `target` is missing we are likely navigating to a relation table page, in which case we need the owner's id
      navigate(
        routeToServiceUserIssuesActiveIssuesInResidentCountyRelationViewPage(
          ((target as ServiceIssueStored) || data).__signedIdentifier,
        ),
      );
    }
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
  ): Promise<JudoRestResponse<ServiceIssueStored[]>> => {
    return userServiceForUserIssuesImpl.listActiveIssuesInResidentDistrict(singletonHost.current, queryCustomizer);
  };
  const activeIssuesInResidentDistrictOpenPageAction = async (
    target: ServiceIssue | ServiceIssueStored,
    isDraft?: boolean,
  ) => {
    if (isDraft && (!target || !(target as ServiceIssueStored).__signedIdentifier)) {
    } else if (!isDraft) {
      // if the `target` is missing we are likely navigating to a relation table page, in which case we need the owner's id
      navigate(
        routeToServiceUserIssuesActiveIssuesInResidentDistrictRelationViewPage(
          ((target as ServiceIssueStored) || data).__signedIdentifier,
        ),
      );
    }
  };
  const ownedIssuesOpenAddSelectorAction = async () => {
    const { result, data: returnedData } =
      await openServiceUserIssuesUserIssues_View_EditRootTabBarOwnedIssuesGroupOwnedIssuesTableAddSelectorPage(
        data,
        data.ownedIssues ?? [],
      );
    if (result === 'submit') {
      if (Array.isArray(returnedData) && returnedData.length) {
        try {
          setIsLoading(true);
          await userServiceForUserIssuesImpl.addOwnedIssues(data, returnedData);
          if (!editMode) {
            await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
          }
        } catch (e) {
          console.error(e);
        } finally {
          setIsLoading(false);
        }
      }
    }
  };

  const ownedIssuesBulkRemoveAction = async (
    selectedRows: ServiceIssueStored[],
  ): Promise<DialogResult<Array<ServiceIssueStored>>> => {
    return new Promise((resolve) => {
      openCRUDDialog<ServiceIssueStored>({
        dialogTitle: t('judo.action.bulk-remove', { defaultValue: 'Remove' }),
        itemTitleFn: (item) => item.countyRepresentation!,
        selectedItems: selectedRows,
        action: async (item, successHandler: () => void, errorHandler: (error: any) => void) => {
          try {
            if (actions.ownedIssuesRemoveAction) {
              await actions.ownedIssuesRemoveAction!(item, true);
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
            });
          }
        },
      });
    });
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
  ): Promise<JudoRestResponse<ServiceIssueStored[]>> => {
    return userServiceForUserIssuesImpl.listOwnedIssues(singletonHost.current, queryCustomizer);
  };
  const ownedIssuesRemoveAction = async (target?: ServiceIssueStored, silentMode?: boolean) => {
    if (target) {
      try {
        if (!silentMode) {
          setIsLoading(true);
        }
        await userServiceForUserIssuesImpl.removeOwnedIssues(data, [target!]);
        if (!silentMode) {
          if (!editMode) {
            await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
          }
        }
      } catch (error) {
        if (!silentMode) {
          handleError<ServiceIssue>(error, undefined, target);
        } else {
          throw error;
        }
      } finally {
        if (!silentMode) {
          setIsLoading(false);
        }
      }
    }
  };
  const ownedIssuesOpenPageAction = async (target: ServiceIssue | ServiceIssueStored, isDraft?: boolean) => {
    if (isDraft && (!target || !(target as ServiceIssueStored).__signedIdentifier)) {
    } else if (!isDraft) {
      // if the `target` is missing we are likely navigating to a relation table page, in which case we need the owner's id
      navigate(
        routeToServiceUserIssuesOwnedIssuesRelationViewPage(
          ((target as ServiceIssueStored) || data).__signedIdentifier,
        ),
      );
    }
  };
  const getSingletonPayload = async (): Promise<JudoIdentifiable<any>> => {
    const { data: sp } = await userServiceForUserIssuesImpl.refreshForUserIssues({
      _mask: '{}',
    });
    return sp;
  };

  const actions: ServiceUserIssuesUserIssues_View_EditPageActions = {
    getPageTitle,
    activeIssuesGlobalActivateForIssueAction,
    activeIssuesInActivityCitiesActivateForIssueAction,
    activeIssuesInActivityCountiesActivateForIssueAction,
    activeIssuesInActivityDistrictsActivateForIssueAction,
    activeIssuesInResidentCityActivateForIssueAction,
    activeIssuesInResidentCountyActivateForIssueAction,
    activeIssuesInResidentDistrictActivateForIssueAction,
    ownedIssuesActivateForIssueAction,
    activeIssuesGlobalAddToFavoritesForIssueAction,
    activeIssuesInActivityCitiesAddToFavoritesForIssueAction,
    activeIssuesInActivityCountiesAddToFavoritesForIssueAction,
    activeIssuesInActivityDistrictsAddToFavoritesForIssueAction,
    activeIssuesInResidentCityAddToFavoritesForIssueAction,
    activeIssuesInResidentCountyAddToFavoritesForIssueAction,
    activeIssuesInResidentDistrictAddToFavoritesForIssueAction,
    ownedIssuesAddToFavoritesForIssueAction,
    activeIssuesGlobalCloseDebateAction,
    activeIssuesInActivityCitiesCloseDebateAction,
    activeIssuesInActivityCountiesCloseDebateAction,
    activeIssuesInActivityDistrictsCloseDebateAction,
    activeIssuesInResidentCityCloseDebateAction,
    activeIssuesInResidentCountyCloseDebateAction,
    activeIssuesInResidentDistrictCloseDebateAction,
    ownedIssuesCloseDebateAction,
    activeIssuesGlobalCloseVoteForIssueAction,
    activeIssuesInActivityCitiesCloseVoteForIssueAction,
    activeIssuesInActivityCountiesCloseVoteForIssueAction,
    activeIssuesInActivityDistrictsCloseVoteForIssueAction,
    activeIssuesInResidentCityCloseVoteForIssueAction,
    activeIssuesInResidentCountyCloseVoteForIssueAction,
    activeIssuesInResidentDistrictCloseVoteForIssueAction,
    ownedIssuesCloseVoteForIssueAction,
    activeIssuesGlobalDeleteOrArchiveForIssueAction,
    activeIssuesInActivityCitiesDeleteOrArchiveForIssueAction,
    activeIssuesInActivityCountiesDeleteOrArchiveForIssueAction,
    activeIssuesInActivityDistrictsDeleteOrArchiveForIssueAction,
    activeIssuesInResidentCityDeleteOrArchiveForIssueAction,
    activeIssuesInResidentCountyDeleteOrArchiveForIssueAction,
    activeIssuesInResidentDistrictDeleteOrArchiveForIssueAction,
    ownedIssuesDeleteOrArchiveForIssueAction,
    activeIssuesGlobalCreateConArgumentAction,
    activeIssuesInActivityCitiesCreateConArgumentAction,
    activeIssuesInActivityCountiesCreateConArgumentAction,
    activeIssuesInActivityDistrictsCreateConArgumentAction,
    activeIssuesInResidentCityCreateConArgumentAction,
    activeIssuesInResidentCountyCreateConArgumentAction,
    activeIssuesInResidentDistrictCreateConArgumentAction,
    ownedIssuesCreateConArgumentAction,
    activeIssuesGlobalCreateProArgumentAction,
    activeIssuesInActivityCitiesCreateProArgumentAction,
    activeIssuesInActivityCountiesCreateProArgumentAction,
    activeIssuesInActivityDistrictsCreateProArgumentAction,
    activeIssuesInResidentCityCreateProArgumentAction,
    activeIssuesInResidentCountyCreateProArgumentAction,
    activeIssuesInResidentDistrictCreateProArgumentAction,
    ownedIssuesCreateProArgumentAction,
    activeIssuesGlobalCreateCommentAction,
    activeIssuesInActivityCitiesCreateCommentAction,
    activeIssuesInActivityCountiesCreateCommentAction,
    activeIssuesInActivityDistrictsCreateCommentAction,
    activeIssuesInResidentCityCreateCommentAction,
    activeIssuesInResidentCountyCreateCommentAction,
    activeIssuesInResidentDistrictCreateCommentAction,
    ownedIssuesCreateCommentAction,
    activeIssuesGlobalRemoveFromFavoritesForIssueAction,
    activeIssuesInActivityCitiesRemoveFromFavoritesForIssueAction,
    activeIssuesInActivityCountiesRemoveFromFavoritesForIssueAction,
    activeIssuesInActivityDistrictsRemoveFromFavoritesForIssueAction,
    activeIssuesInResidentCityRemoveFromFavoritesForIssueAction,
    activeIssuesInResidentCountyRemoveFromFavoritesForIssueAction,
    activeIssuesInResidentDistrictRemoveFromFavoritesForIssueAction,
    ownedIssuesRemoveFromFavoritesForIssueAction,
    backAction,
    refreshAction,
    createIssueAction,
    activeIssuesGlobalFilterAction,
    activeIssuesGlobalRefreshAction,
    activeIssuesGlobalOpenPageAction,
    activeIssuesInActivityCitiesFilterAction,
    activeIssuesInActivityCitiesRefreshAction,
    activeIssuesInActivityCitiesOpenPageAction,
    activeIssuesInActivityCountiesFilterAction,
    activeIssuesInActivityCountiesRefreshAction,
    activeIssuesInActivityCountiesOpenPageAction,
    activeIssuesInActivityDistrictsFilterAction,
    activeIssuesInActivityDistrictsRefreshAction,
    activeIssuesInActivityDistrictsOpenPageAction,
    activeIssuesInResidentCityFilterAction,
    activeIssuesInResidentCityRefreshAction,
    activeIssuesInResidentCityOpenPageAction,
    activeIssuesInResidentCountyFilterAction,
    activeIssuesInResidentCountyRefreshAction,
    activeIssuesInResidentCountyOpenPageAction,
    activeIssuesInResidentDistrictFilterAction,
    activeIssuesInResidentDistrictRefreshAction,
    activeIssuesInResidentDistrictOpenPageAction,
    ownedIssuesOpenAddSelectorAction,
    ownedIssuesBulkRemoveAction,
    ownedIssuesFilterAction,
    ownedIssuesRefreshAction,
    ownedIssuesRemoveAction,
    ownedIssuesOpenPageAction,
    ...(customActions ?? {}),
  };

  // ViewModel setup
  const viewModel: ServiceUserIssuesUserIssues_View_EditViewModel = {
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
      const res = await getSingletonPayload();
      if (res?.__signedIdentifier) {
        singletonHost.current = res;
      } else {
        navigate('*');
        return;
      }
      await actions.refreshAction!(getPageQueryCustomizer());
    })();
  }, []);

  return (
    <ServiceUserIssuesUserIssues_View_EditViewModelContext.Provider value={viewModel}>
      <Suspense>
        <div
          id="User/(esm/_UUu7kFrMEe6_67aMO2jOsw)/AccessViewPageDefinition"
          data-page-name="service::User::userIssues::AccessViewPage"
        />
        <PageContainerTransition>
          <ServiceUserIssuesUserIssues_View_EditPageContainer
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
    </ServiceUserIssuesUserIssues_View_EditViewModelContext.Provider>
  );
}
