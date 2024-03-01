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
  ServiceUserManagerUserManager_View_EditPageActions,
  ServiceUserManagerUserManager_View_EditPageProps,
} from '~/containers/Service/UserManager/UserManager_View_Edit/ServiceUserManagerUserManager_View_EditPageContainer';
import { useServiceUserManagerUserManager_View_EditCreateUserInputForm } from '~/dialogs/Service/UserManager/UserManager_View_Edit/CreateUser/Input/Form';
import { useServiceUserManagerUsersRelationViewPage } from '~/dialogs/Service/UserManager/Users/RelationViewPage';
import { useCRUDDialog, useSnacks, useViewData } from '~/hooks';
import type {
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
  ServiceUserManager,
  ServiceUserManagerQueryCustomizer,
  ServiceUserManagerStored,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import type { JudoRestResponse } from '~/services/data-api/rest';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { UserServiceForAdminUserManagerImpl } from '~/services/data-axios/UserServiceForAdminUserManagerImpl';
import { PageContainerTransition } from '~/theme/animations';
import { cleanUpPayload, processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';

export type ServiceUserManagerUserManager_View_EditPageActionsExtended =
  ServiceUserManagerUserManager_View_EditPageActions & {
    postRefreshAction?: (
      data: ServiceUserManagerStored,
      storeDiff: (attributeName: keyof ServiceUserManager, value: any) => void,
      setValidation: Dispatch<SetStateAction<Map<keyof ServiceUserManager, string>>>,
    ) => Promise<void>;
  };

export const SERVICE_USER_ADMIN_USER_MANAGER_ACCESS_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_USER_ADMIN_USER_MANAGER_ACCESS_VIEW_PAGE_ACTIONS_HOOK';
export type ServiceUserManagerUserManager_View_EditActionsHook = (
  data: ServiceUserManagerStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof ServiceUserManager, value: any) => void,

  refresh: () => Promise<void>,
  submit: () => Promise<void>,
) => ServiceUserManagerUserManager_View_EditPageActionsExtended;

export interface ServiceUserManagerUserManager_View_EditViewModel
  extends ServiceUserManagerUserManager_View_EditPageProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setEditMode: Dispatch<SetStateAction<boolean>>;
  refresh: () => Promise<void>;
}

const ServiceUserManagerUserManager_View_EditViewModelContext =
  createContext<ServiceUserManagerUserManager_View_EditViewModel>({} as any);
export const useServiceUserManagerUserManager_View_EditViewModel = () => {
  const context = useContext(ServiceUserManagerUserManager_View_EditViewModelContext);
  if (!context) {
    throw new Error(
      'useServiceUserManagerUserManager_View_EditViewModel must be used within a(n) ServiceUserManagerUserManager_View_EditViewModelProvider',
    );
  }
  return context;
};

export const convertServiceUserAdminUserManagerAccessViewPagePayload = (
  attributeName: keyof ServiceUserManager,
  value: any,
): any => {
  return value;
};

const ServiceUserManagerUserManager_View_EditPageContainer = lazy(
  () =>
    import(
      '~/containers/Service/UserManager/UserManager_View_Edit/ServiceUserManagerUserManager_View_EditPageContainer'
    ),
);

// XMIID: User/(esm/_mGqscFvaEe6bTb-1BwQgmA)/AccessViewPageDefinition
// Name: service::User::adminUserManager::AccessViewPage
export default function ServiceUserAdminUserManagerAccessViewPage() {
  // Services
  const userServiceForAdminUserManagerImpl = useMemo(
    () => new UserServiceForAdminUserManagerImpl(judoAxiosProvider),
    [],
  );

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
  const [data, setData] = useState<ServiceUserManagerStored>({} as ServiceUserManagerStored);
  const [validation, setValidation] = useState<Map<keyof ServiceUserManager, string>>(
    new Map<keyof ServiceUserManager, string>(),
  );

  // Ref section
  const singletonHost = useRef<{ __signedIdentifier: string }>({} as unknown as { __signedIdentifier: string });
  const payloadDiff = useRef<Record<keyof ServiceUserManagerStored, any>>(
    {} as unknown as Record<keyof ServiceUserManagerStored, any>,
  );

  // Callback section
  const storeDiff: (attributeName: keyof ServiceUserManager, value: any) => void = useCallback(
    (attributeName: keyof ServiceUserManager, value: any) => {
      payloadDiff.current![attributeName] = convertServiceUserAdminUserManagerAccessViewPagePayload(
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
    return false && typeof data?.__deleteable === 'boolean' && data?.__deleteable;
  }, [data]);

  const getPageQueryCustomizer: () => ServiceUserManagerQueryCustomizer = () => ({
    _mask: actions.getMask ? actions.getMask!() : '{}',
  });

  // Private actions
  const submit = async () => {
    await updateAction();
  };
  const refresh = async () => {
    if (actions.refreshAction) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };

  // Pandino Action overrides
  const { service: customActionsHook } = useTrackService<ServiceUserManagerUserManager_View_EditActionsHook>(
    `(${OBJECTCLASS}=${SERVICE_USER_ADMIN_USER_MANAGER_ACCESS_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const customActions: ServiceUserManagerUserManager_View_EditPageActionsExtended | undefined = customActionsHook?.(
    data,
    editMode,
    storeDiff,
    refresh,
    submit,
  );

  // Dialog hooks
  const openServiceUserManagerUserManager_View_EditCreateUserInputForm =
    useServiceUserManagerUserManager_View_EditCreateUserInputForm();
  const openServiceUserManagerUsersRelationViewPage = useServiceUserManagerUsersRelationViewPage();

  // Action section
  const getPageTitle = (data: ServiceUserManager): string => {
    return t('service.UserManager.UserManager_View_Edit', { defaultValue: 'UserManager View / Edit' });
  };
  const backAction = async () => {
    navigateBack();
  };
  const cancelAction = async () => {
    // no need to set editMode to false, given refresh should do it implicitly
    await refreshAction(processQueryCustomizer(getPageQueryCustomizer()));
  };
  const refreshAction = async (
    queryCustomizer: ServiceUserManagerQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceUserManagerStored>> => {
    try {
      setIsLoading(true);
      setEditMode(false);
      const response = await userServiceForAdminUserManagerImpl.refresh(
        singletonHost.current,
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
      } as Record<keyof ServiceUserManagerStored, any>;
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
      const { data: res } = await userServiceForAdminUserManagerImpl.update(payloadDiff.current);
      if (res) {
        showSuccessSnack(t('judo.action.save.success', { defaultValue: 'Changes saved' }));
        setValidation(new Map<keyof ServiceUserManager, string>());
        setEditMode(false);
        await actions.refreshAction!(getPageQueryCustomizer());
      }
    } catch (error) {
      handleError<ServiceUserManager>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const usersFilterAction = async (
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
  const usersRefreshAction = async (
    queryCustomizer: ServiceServiceUserQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceServiceUserStored[]>> => {
    return userServiceForAdminUserManagerImpl.listUsers(singletonHost.current, queryCustomizer);
  };
  const usersOpenPageAction = async (target: ServiceServiceUser | ServiceServiceUserStored, isDraft?: boolean) => {
    if (isDraft && (!target || !(target as ServiceServiceUserStored).__signedIdentifier)) {
    } else if (!isDraft) {
      await openServiceUserManagerUsersRelationViewPage(target!);
      if (!editMode) {
        await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
      }
    }
  };
  const createUserAction = async (isDraft?: boolean, ownerValidation?: (data: any) => Promise<void>) => {
    const { result, data: returnedData } = await openServiceUserManagerUserManager_View_EditCreateUserInputForm(data);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(getPageQueryCustomizer()));
    }
  };
  const getSingletonPayload = async (): Promise<JudoIdentifiable<any>> => {
    const { data: sp } = await userServiceForAdminUserManagerImpl.refreshForAdminUserManager({
      _mask: '{}',
    });
    return sp;
  };

  const actions: ServiceUserManagerUserManager_View_EditPageActions = {
    getPageTitle,
    backAction,
    cancelAction,
    refreshAction,
    updateAction,
    usersFilterAction,
    usersRefreshAction,
    usersOpenPageAction,
    createUserAction,
    ...(customActions ?? {}),
  };

  // ViewModel setup
  const viewModel: ServiceUserManagerUserManager_View_EditViewModel = {
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
    <ServiceUserManagerUserManager_View_EditViewModelContext.Provider value={viewModel}>
      <Suspense>
        <div
          id="User/(esm/_mGqscFvaEe6bTb-1BwQgmA)/AccessViewPageDefinition"
          data-page-name="service::User::adminUserManager::AccessViewPage"
        />
        <PageContainerTransition>
          <ServiceUserManagerUserManager_View_EditPageContainer
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
    </ServiceUserManagerUserManager_View_EditViewModelContext.Provider>
  );
}
