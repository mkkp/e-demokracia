//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPagesForRouting(#application)
// Path expression: 'src/pages/'+#pagePath(#self)+'.tsx'
// Template name: actor/src/pages/index.tsx
// Template file: actor/src/pages/index.tsx.hbs

import { useState, lazy, Suspense } from 'react';
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
import { useServiceUserAdminIssueTypesAccessFormPage } from '~/dialogs/Service/User/AdminIssueTypes/AccessFormPage';
import { useServiceUserAdminIssueTypesAccessViewPage } from '~/dialogs/Service/User/AdminIssueTypes/AccessViewPage';
import type { ServiceIssueTypeIssueType_TablePageActions } from '~/containers/Service/IssueType/IssueType_Table/ServiceIssueTypeIssueType_TablePageContainer';
import type {
  ServiceIssueType,
  ServiceIssueTypeQueryCustomizer,
  ServiceIssueTypeStored,
  VoteType,
} from '~/services/data-api';
import { userServiceForAdminIssueTypesImpl } from '~/services/data-axios';
export type ServiceIssueTypeIssueType_TablePageActionsExtended = ServiceIssueTypeIssueType_TablePageActions & {};

export const SERVICE_USER_ADMIN_ISSUE_TYPES_ACCESS_TABLE_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'ServiceIssueTypeIssueType_TableActionsHook';
export type ServiceIssueTypeIssueType_TableActionsHook = (
  data: ServiceIssueTypeStored[],
  editMode: boolean,
) => ServiceIssueTypeIssueType_TablePageActionsExtended;

const ServiceIssueTypeIssueType_TablePageContainer = lazy(
  () => import('~/containers/Service/IssueType/IssueType_Table/ServiceIssueTypeIssueType_TablePageContainer'),
);

// XMIID: User/(esm/_-T3OwNu-Ee2Bgcx6em3jZg)/AccessTablePageDefinition
// Name: service::User::adminIssueTypes::AccessTablePage
export default function ServiceUserAdminIssueTypesAccessTablePage() {
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
  const [data, setData] = useState<ServiceIssueTypeStored[]>([]);

  // Pandino Action overrides
  const { service: customActionsHook } = useTrackService<ServiceIssueTypeIssueType_TableActionsHook>(
    `(${OBJECTCLASS}=${SERVICE_USER_ADMIN_ISSUE_TYPES_ACCESS_TABLE_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const customActions: ServiceIssueTypeIssueType_TablePageActionsExtended | undefined = customActionsHook?.(
    data,
    editMode,
  );

  // Dialog hooks
  const openServiceUserAdminIssueTypesAccessFormPage = useServiceUserAdminIssueTypesAccessFormPage();
  const openServiceUserAdminIssueTypesAccessViewPage = useServiceUserAdminIssueTypesAccessViewPage();

  // Calculated section
  const title: string = t('service.IssueType.IssueType_Table', { defaultValue: 'IssueType Table' });

  // Action section
  const bulkDeleteAction = async (
    selectedRows: ServiceIssueTypeStored[],
  ): Promise<DialogResult<Array<ServiceIssueTypeStored>>> => {
    return new Promise((resolve) => {
      openCRUDDialog<ServiceIssueTypeStored>({
        dialogTitle: t('service.IssueType.IssueType_Table.BulkDelete', { defaultValue: 'Delete' }),
        itemTitleFn: (item) => item.title!,
        selectedItems: selectedRows,
        action: async (item, successHandler: () => void, errorHandler: (error: any) => void) => {
          try {
            if (actions.deleteAction) {
              await actions.deleteAction!(item, true);
            }
            successHandler();
          } catch (error) {
            errorHandler(error);
          }
        },
        onClose: async (needsRefresh) => {
          if (needsRefresh) {
            setRefreshCounter((prev) => prev + 1);
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
  const openFormAction = async () => {
    const { result, data: returnedData } = await openServiceUserAdminIssueTypesAccessFormPage(data);
    if (result === 'submit') {
      setRefreshCounter((prev) => prev + 1);
    }
  };
  const deleteAction = async (target: ServiceIssueTypeStored, silentMode?: boolean) => {
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
        await userServiceForAdminIssueTypesImpl.delete(target);
        if (!silentMode) {
          showSuccessSnack(t('judo.action.delete.success', { defaultValue: 'Delete successful' }));
          setRefreshCounter((prev) => prev + 1);
        }
      }
    } catch (error) {
      if (!silentMode) {
        handleError<ServiceIssueType>(error, undefined, target);
      }
    }
  };
  const filterAction = async (
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
  const refreshAction = async (queryCustomizer: ServiceIssueTypeQueryCustomizer): Promise<ServiceIssueTypeStored[]> => {
    try {
      setIsLoading(true);
      setEditMode(false);
      return userServiceForAdminIssueTypesImpl.list(undefined, queryCustomizer);
    } catch (error) {
      handleError(error);
      return Promise.reject(error);
    } finally {
      setIsLoading(false);
      setRefreshCounter((prevCounter) => prevCounter + 1);
    }
  };
  const openPageAction = async (target?: ServiceIssueTypeStored) => {
    await openServiceUserAdminIssueTypesAccessViewPage(target!);
    setRefreshCounter((prev) => prev + 1);
  };

  const actions: ServiceIssueTypeIssueType_TablePageActions = {
    bulkDeleteAction,
    openFormAction,
    deleteAction,
    filterAction,
    refreshAction,
    openPageAction,
    ...(customActions ?? {}),
  };

  // Effect section

  return (
    <div
      id="User/(esm/_-T3OwNu-Ee2Bgcx6em3jZg)/AccessTablePageDefinition"
      data-page-name="service::User::adminIssueTypes::AccessTablePage"
    >
      <Suspense>
        <PageContainerTransition>
          <ServiceIssueTypeIssueType_TablePageContainer
            title={title}
            actions={actions}
            isLoading={isLoading}
            editMode={editMode}
            refreshCounter={refreshCounter}
          />
        </PageContainerTransition>
      </Suspense>
    </div>
  );
}
