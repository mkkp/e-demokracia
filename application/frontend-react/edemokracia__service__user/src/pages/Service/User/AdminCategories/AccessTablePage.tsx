//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPagesForRouting(#application)
// Path expression: 'src/pages/'+#pagePath(#self)+'.tsx'
// Template name: actor/src/pages/index.tsx
// Template file: actor/src/pages/index.tsx.hbs

import { useState, useMemo, lazy, Suspense } from 'react';
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
import { useServiceUserAdminCategoriesAccessFormPage } from '~/dialogs/Service/User/AdminCategories/AccessFormPage';
import { useServiceUserAdminCategoriesAccessViewPage } from '~/dialogs/Service/User/AdminCategories/AccessViewPage';
import type { ServiceIssueCategoryIssueCategory_TablePageActions } from '~/containers/Service/IssueCategory/IssueCategory_Table/ServiceIssueCategoryIssueCategory_TablePageContainer';
import type {
  ServiceIssueCategory,
  ServiceIssueCategoryQueryCustomizer,
  ServiceIssueCategoryStored,
} from '~/services/data-api';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { UserServiceForAdminCategoriesImpl } from '~/services/data-axios/UserServiceForAdminCategoriesImpl';

export type ServiceIssueCategoryIssueCategory_TablePageActionsExtended =
  ServiceIssueCategoryIssueCategory_TablePageActions & {
    postRefreshAction?: (data: ServiceIssueCategoryStored[]) => Promise<void>;
  };

export const SERVICE_USER_ADMIN_CATEGORIES_ACCESS_TABLE_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'ServiceIssueCategoryIssueCategory_TableActionsHook';
export type ServiceIssueCategoryIssueCategory_TableActionsHook = (
  data: ServiceIssueCategoryStored[],
  editMode: boolean,
) => ServiceIssueCategoryIssueCategory_TablePageActionsExtended;

const ServiceIssueCategoryIssueCategory_TablePageContainer = lazy(
  () =>
    import(
      '~/containers/Service/IssueCategory/IssueCategory_Table/ServiceIssueCategoryIssueCategory_TablePageContainer'
    ),
);

// XMIID: User/(esm/_vWzZ8G4rEe2siJt-xjHAyw)/AccessTablePageDefinition
// Name: service::User::adminCategories::AccessTablePage
export default function ServiceUserAdminCategoriesAccessTablePage() {
  // Services
  const userServiceForAdminCategoriesImpl = useMemo(() => new UserServiceForAdminCategoriesImpl(judoAxiosProvider), []);

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
  const [data, setData] = useState<ServiceIssueCategoryStored[]>([]);

  // Pandino Action overrides
  const { service: customActionsHook } = useTrackService<ServiceIssueCategoryIssueCategory_TableActionsHook>(
    `(${OBJECTCLASS}=${SERVICE_USER_ADMIN_CATEGORIES_ACCESS_TABLE_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const customActions: ServiceIssueCategoryIssueCategory_TablePageActionsExtended | undefined = customActionsHook?.(
    data,
    editMode,
  );

  // Dialog hooks
  const openServiceUserAdminCategoriesAccessFormPage = useServiceUserAdminCategoriesAccessFormPage();
  const openServiceUserAdminCategoriesAccessViewPage = useServiceUserAdminCategoriesAccessViewPage();

  // Calculated section
  const title: string = t('service.IssueCategory.IssueCategory_Table', { defaultValue: 'IssueCategory Table' });

  // Private actions
  const submit = async () => {};

  // Action section
  const bulkDeleteAction = async (
    selectedRows: ServiceIssueCategoryStored[],
  ): Promise<DialogResult<Array<ServiceIssueCategoryStored>>> => {
    return new Promise((resolve) => {
      openCRUDDialog<ServiceIssueCategoryStored>({
        dialogTitle: t('service.IssueCategory.IssueCategory_Table.BulkDelete', { defaultValue: 'Delete' }),
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
    const { result, data: returnedData } = await openServiceUserAdminCategoriesAccessFormPage(data);
    if (result === 'submit') {
      setRefreshCounter((prev) => prev + 1);
    }
  };
  const deleteAction = async (target: ServiceIssueCategoryStored, silentMode?: boolean) => {
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
        await userServiceForAdminCategoriesImpl.delete(target);
        if (!silentMode) {
          showSuccessSnack(t('judo.action.delete.success', { defaultValue: 'Delete successful' }));
          setRefreshCounter((prev) => prev + 1);
        }
      }
    } catch (error) {
      if (!silentMode) {
        handleError<ServiceIssueCategory>(error, undefined, target);
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
  const refreshAction = async (
    queryCustomizer: ServiceIssueCategoryQueryCustomizer,
  ): Promise<ServiceIssueCategoryStored[]> => {
    try {
      setIsLoading(true);
      setEditMode(false);
      return userServiceForAdminCategoriesImpl.list(undefined, queryCustomizer);
    } catch (error) {
      handleError(error);
      return Promise.reject(error);
    } finally {
      setIsLoading(false);
      setRefreshCounter((prevCounter) => prevCounter + 1);
    }
  };
  const openPageAction = async (target?: ServiceIssueCategoryStored) => {
    await openServiceUserAdminCategoriesAccessViewPage(target!);
    setRefreshCounter((prev) => prev + 1);
  };

  const actions: ServiceIssueCategoryIssueCategory_TablePageActions = {
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
      id="User/(esm/_vWzZ8G4rEe2siJt-xjHAyw)/AccessTablePageDefinition"
      data-page-name="service::User::adminCategories::AccessTablePage"
    >
      <Suspense>
        <PageContainerTransition>
          <ServiceIssueCategoryIssueCategory_TablePageContainer
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
