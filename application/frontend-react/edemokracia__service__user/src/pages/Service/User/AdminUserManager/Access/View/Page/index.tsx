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
import { useServiceUserManagerUserManager_View_EditCreateUserInputForm } from '~/dialogs/Service/UserManager/UserManager_View_Edit/CreateUser/Input/Form';
import { useServiceUserManagerUsersRelationViewPage } from '~/dialogs/Service/UserManager/Users/Relation/View/Page';
import type { ServiceUserManagerUserManager_View_EditPageActions } from '~/containers/Service/UserManager/UserManager_View_Edit/ServiceUserManagerUserManager_View_EditPageContainer';
import type {
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
  ServiceUserManager,
  ServiceUserManagerQueryCustomizer,
  ServiceUserManagerStored,
} from '~/services/data-api';
import { userServiceForAdminUserManagerImpl } from '~/services/data-axios';
export type ServiceUserManagerUserManager_View_EditPageActionsExtended =
  ServiceUserManagerUserManager_View_EditPageActions & {};

export const SERVICE_USER_ADMIN_USER_MANAGER_ACCESS_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'ServiceUserManagerUserManager_View_EditActionsHook';
export type ServiceUserManagerUserManager_View_EditActionsHook = (
  data: ServiceUserManagerStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof ServiceUserManager, value: any) => void,
) => ServiceUserManagerUserManager_View_EditPageActionsExtended;

export const convertServiceUserAdminUserManagerAccessViewPagePayload = (
  attributeName: keyof ServiceUserManager,
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

const ServiceUserManagerUserManager_View_EditPageContainer = lazy(
  () =>
    import(
      '~/containers/Service/UserManager/UserManager_View_Edit/ServiceUserManagerUserManager_View_EditPageContainer'
    ),
);

// XMIID: User/(esm/_mGqscFvaEe6bTb-1BwQgmA)/AccessViewPageDefinition
// Name: service::User::adminUserManager::Access::View::Page
export default function ServiceUserAdminUserManagerAccessViewPage() {
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
  const [data, setData] = useState<ServiceUserManagerStored>({
    __signedIdentifier: signedIdentifier,
  } as ServiceUserManagerStored);
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

  const pageQueryCustomizer: ServiceUserManagerQueryCustomizer = {
    _mask: '{}',
  };

  // Pandino Action overrides
  const { service: customActionsHook } = useTrackService<ServiceUserManagerUserManager_View_EditActionsHook>(
    `(${OBJECTCLASS}=${SERVICE_USER_ADMIN_USER_MANAGER_ACCESS_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const customActions: ServiceUserManagerUserManager_View_EditPageActionsExtended | undefined = customActionsHook?.(
    data,
    editMode,
    storeDiff,
  );

  // Dialog hooks
  const openServiceUserManagerUserManager_View_EditCreateUserInputForm =
    useServiceUserManagerUserManager_View_EditCreateUserInputForm();
  const openServiceUserManagerUsersRelationViewPage = useServiceUserManagerUsersRelationViewPage();

  // Calculated section
  const title: string = t('service.UserManager.UserManager_View_Edit', { defaultValue: 'UserManager View / Edit' });

  // Action section
  const backAction = async () => {
    navigateBack();
  };
  const refreshAction = async (
    queryCustomizer: ServiceUserManagerQueryCustomizer,
  ): Promise<ServiceUserManagerStored> => {
    try {
      setIsLoading(true);
      setEditMode(false);
      const result = await userServiceForAdminUserManagerImpl.refresh(
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
      } as Record<keyof ServiceUserManagerStored, any>;

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
      const res = await userServiceForAdminUserManagerImpl.update(payloadDiff.current);

      if (res) {
        enqueueSnackbar(t('judo.action.save.success', { defaultValue: 'Changes saved' }), {
          variant: 'success',
          ...toastConfig.success,
        });
        setValidation(new Map<keyof ServiceUserManager, string>());
        await actions.refreshAction!(pageQueryCustomizer);
        setEditMode(false);
      }
    } catch (error) {
      handleError<ServiceUserManager>(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };
  const createUserAction = async () => {
    const { result, data: returnedData } = await openServiceUserManagerUserManager_View_EditCreateUserInputForm(data);
    if (result === 'submit' && !editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
    }
  };
  const usersOpenPageAction = async (target?: ServiceServiceUserStored) => {
    await openServiceUserManagerUsersRelationViewPage(target!);

    if (!editMode) {
      await actions.refreshAction!(processQueryCustomizer(pageQueryCustomizer));
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
  ): Promise<ServiceServiceUserStored[]> => {
    return userServiceForAdminUserManagerImpl.listUsers(
      { __signedIdentifier: signedIdentifier } as JudoIdentifiable<any>,
      queryCustomizer,
    );
  };
  const getSingletonPayload = async (): Promise<JudoIdentifiable<any>> => {
    return await userServiceForAdminUserManagerImpl.refreshForAdminUserManager({
      _mask: '{}',
    });
  };

  const actions: ServiceUserManagerUserManager_View_EditPageActions = {
    backAction,
    refreshAction,
    cancelAction,
    updateAction,
    createUserAction,
    usersOpenPageAction,
    usersFilterAction,
    usersRefreshAction,
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
      id="User/(esm/_mGqscFvaEe6bTb-1BwQgmA)/AccessViewPageDefinition"
      data-page-name="service::User::adminUserManager::Access::View::Page"
    >
      <Suspense>
        <PageContainerTransition>
          <ServiceUserManagerUserManager_View_EditPageContainer
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
