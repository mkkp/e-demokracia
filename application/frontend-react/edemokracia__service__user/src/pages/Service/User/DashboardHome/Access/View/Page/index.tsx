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
import type { ServiceDashboardDashboard_View_EditPageActions } from '~/containers/Service/Dashboard/Dashboard_View_Edit/ServiceDashboardDashboard_View_EditPageContainer';
import type {
  ServiceDashboard,
  ServiceDashboardQueryCustomizer,
  ServiceDashboardStored,
  ServiceIssue,
  ServiceIssueQueryCustomizer,
  ServiceIssueStored,
  ServiceVoteDefinition,
  ServiceVoteDefinitionQueryCustomizer,
  ServiceVoteDefinitionStored,
  ServiceVoteEntry,
  ServiceVoteEntryQueryCustomizer,
  ServiceVoteEntryStored,
} from '~/services/data-api';
import { userServiceForDashboardHomeImpl } from '~/services/data-axios';
export type ServiceDashboardDashboard_View_EditPageActionsExtended =
  ServiceDashboardDashboard_View_EditPageActions & {};

export const SERVICE_USER_DASHBOARD_HOME_ACCESS_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'ServiceDashboardDashboard_View_EditActionsHook';
export type ServiceDashboardDashboard_View_EditActionsHook = (
  data: ServiceDashboardStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof ServiceDashboard, value: any) => void,
) => ServiceDashboardDashboard_View_EditPageActionsExtended;

export const convertServiceUserDashboardHomeAccessViewPagePayload = (
  attributeName: keyof ServiceDashboard,
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

const ServiceDashboardDashboard_View_EditPageContainer = lazy(
  () => import('~/containers/Service/Dashboard/Dashboard_View_Edit/ServiceDashboardDashboard_View_EditPageContainer'),
);

// XMIID: User/(esm/_GgaEAIyPEe2VSOmaAz6G9Q)/AccessViewPageDefinition
// Name: service::User::dashboardHome::Access::View::Page
export default function ServiceUserDashboardHomeAccessViewPage() {
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
  const [data, setData] = useState<ServiceDashboardStored>({
    __signedIdentifier: signedIdentifier,
  } as ServiceDashboardStored);
  const [validation, setValidation] = useState<Map<keyof ServiceDashboard, string>>(
    new Map<keyof ServiceDashboard, string>(),
  );

  // Ref section
  const singletonHost = useRef<{ __signedIdentifier: string }>({} as unknown as { __signedIdentifier: string });
  const payloadDiff = useRef<Record<keyof ServiceDashboardStored, any>>(
    {} as unknown as Record<keyof ServiceDashboardStored, any>,
  );

  // Callback section
  const storeDiff: (attributeName: keyof ServiceDashboard, value: any) => void = useCallback(
    (attributeName: keyof ServiceDashboard, value: any) => {
      payloadDiff.current![attributeName] = convertServiceUserDashboardHomeAccessViewPagePayload(attributeName, value);
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

  const pageQueryCustomizer: ServiceDashboardQueryCustomizer = {
    _mask: '{}',
  };

  // Pandino Action overrides
  const { service: customActionsHook } = useTrackService<ServiceDashboardDashboard_View_EditActionsHook>(
    `(${OBJECTCLASS}=${SERVICE_USER_DASHBOARD_HOME_ACCESS_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const customActions: ServiceDashboardDashboard_View_EditPageActionsExtended | undefined = customActionsHook?.(
    data,
    editMode,
    storeDiff,
  );

  // Dialog hooks

  // Calculated section
  const title: string = t('service.Dashboard.Dashboard_View_Edit', { defaultValue: 'Dashboard View / Edit' });

  // Action section
  const backAction = async () => {
    navigateBack();
  };
  const refreshAction = async (queryCustomizer: ServiceDashboardQueryCustomizer): Promise<ServiceDashboardStored> => {
    try {
      setIsLoading(true);
      setEditMode(false);
      const result = await userServiceForDashboardHomeImpl.refresh(
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
      } as Record<keyof ServiceDashboardStored, any>;

      return result;
    } catch (error) {
      handleError(error);
      return Promise.reject(error);
    } finally {
      setIsLoading(false);
      setRefreshCounter((prevCounter) => prevCounter + 1);
    }
  };
  const getSingletonPayload = async (): Promise<JudoIdentifiable<any>> => {
    return await userServiceForDashboardHomeImpl.refreshForDashboardHome({
      _mask: '{}',
    });
  };

  const actions: ServiceDashboardDashboard_View_EditPageActions = {
    backAction,
    refreshAction,
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
      id="User/(esm/_GgaEAIyPEe2VSOmaAz6G9Q)/AccessViewPageDefinition"
      data-page-name="service::User::dashboardHome::Access::View::Page"
    >
      <Suspense>
        <PageContainerTransition>
          <ServiceDashboardDashboard_View_EditPageContainer
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
