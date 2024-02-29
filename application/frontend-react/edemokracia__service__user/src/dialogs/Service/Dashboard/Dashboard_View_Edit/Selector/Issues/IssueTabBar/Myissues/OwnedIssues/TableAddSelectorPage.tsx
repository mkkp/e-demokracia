//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPagesForDialogs(#application)
// Path expression: 'src/dialogs/'+#pagePath(#self)+'.tsx'
// Template name: actor/src/dialogs/index.tsx
// Template file: actor/src/dialogs/index.tsx.hbs

import type { GridFilterModel } from '@mui/x-data-grid';
import { OBJECTCLASS } from '@pandino/pandino-api';
import { useTrackService } from '@pandino/react-hooks';
import { Suspense, createContext, lazy, useContext, useMemo, useState } from 'react';
import type { Dispatch, FC, ReactNode, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { v4 as uuidv4 } from 'uuid';
import { useJudoNavigation } from '~/components';
import type { Filter, FilterOption } from '~/components-api';
import { useConfirmDialog, useDialog, useFilterDialog } from '~/components/dialog';
import type {
  ServiceDashboardDashboard_View_EditSelectorIssuesIssueTabBarMyissuesOwnedIssuesAddSelectorDialogActions,
  ServiceDashboardDashboard_View_EditSelectorIssuesIssueTabBarMyissuesOwnedIssuesAddSelectorDialogProps,
} from '~/containers/Service/Dashboard/Dashboard_View_Edit/Selector/Issues/IssueTabBar/Myissues/OwnedIssues/AddSelector/ServiceDashboardDashboard_View_EditSelectorIssuesIssueTabBarMyissuesOwnedIssuesAddSelectorDialogContainer';
import { useCRUDDialog, useSnacks, useViewData } from '~/hooks';
import type {
  IssueScope,
  IssueStatus,
  ServiceDashboard,
  ServiceDashboardStored,
  ServiceIssue,
  ServiceIssueQueryCustomizer,
  ServiceIssueStored,
  VoteType,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import type { JudoRestResponse } from '~/services/data-api/rest';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { ServiceDashboardServiceForOwnedIssuesImpl } from '~/services/data-axios/ServiceDashboardServiceForOwnedIssuesImpl';
import { cleanUpPayload, isErrorNestedValidationError, processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';

export type ServiceDashboardDashboard_View_EditSelectorIssuesIssueTabBarMyissuesOwnedIssuesAddSelectorDialogActionsExtended =
  ServiceDashboardDashboard_View_EditSelectorIssuesIssueTabBarMyissuesOwnedIssuesAddSelectorDialogActions & {};

export const SERVICE_DASHBOARD_DASHBOARD_VIEW_EDIT_SELECTOR_ISSUES_ISSUE_TAB_BAR_MYISSUES_OWNED_ISSUES_TABLE_ADD_SELECTOR_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_DASHBOARD_DASHBOARD_VIEW_EDIT_SELECTOR_ISSUES_ISSUE_TAB_BAR_MYISSUES_OWNED_ISSUES_TABLE_ADD_SELECTOR_PAGE_ACTIONS_HOOK';
export type ServiceDashboardDashboard_View_EditSelectorIssuesIssueTabBarMyissuesOwnedIssuesAddSelectorActionsHook = (
  ownerData: any,
  data: ServiceIssueStored[],
  editMode: boolean,
  selectionDiff: ServiceIssueStored[],
  submit: () => Promise<void>,
) => ServiceDashboardDashboard_View_EditSelectorIssuesIssueTabBarMyissuesOwnedIssuesAddSelectorDialogActionsExtended;

export interface ServiceDashboardDashboard_View_EditSelectorIssuesIssueTabBarMyissuesOwnedIssuesAddSelectorViewModel
  extends ServiceDashboardDashboard_View_EditSelectorIssuesIssueTabBarMyissuesOwnedIssuesAddSelectorDialogProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setEditMode: Dispatch<SetStateAction<boolean>>;
  refresh: () => Promise<void>;
  submit: () => Promise<void>;
  isDraft?: boolean;
}

const ServiceDashboardDashboard_View_EditSelectorIssuesIssueTabBarMyissuesOwnedIssuesAddSelectorViewModelContext =
  createContext<ServiceDashboardDashboard_View_EditSelectorIssuesIssueTabBarMyissuesOwnedIssuesAddSelectorViewModel>(
    {} as any,
  );
export const useServiceDashboardDashboard_View_EditSelectorIssuesIssueTabBarMyissuesOwnedIssuesAddSelectorViewModel =
  () => {
    const context = useContext(
      ServiceDashboardDashboard_View_EditSelectorIssuesIssueTabBarMyissuesOwnedIssuesAddSelectorViewModelContext,
    );
    if (!context) {
      throw new Error(
        'useServiceDashboardDashboard_View_EditSelectorIssuesIssueTabBarMyissuesOwnedIssuesAddSelectorViewModel must be used within a(n) ServiceDashboardDashboard_View_EditSelectorIssuesIssueTabBarMyissuesOwnedIssuesAddSelectorViewModelProvider',
      );
    }
    return context;
  };

export const useServiceDashboardDashboard_View_EditSelectorIssuesIssueTabBarMyissuesOwnedIssuesTableAddSelectorPage =
  (): ((
    ownerData: any,
    alreadySelected: ServiceIssueStored[],
    isDraft?: boolean,
  ) => Promise<DialogResult<ServiceIssueStored[]>>) => {
    const [createDialog, closeDialog] = useDialog();

    return (ownerData: any, alreadySelected: ServiceIssueStored[], isDraft?: boolean) =>
      new Promise((resolve) => {
        createDialog({
          fullWidth: true,
          maxWidth: 'md',
          onClose: async (event: object, reason: string) => {
            if (reason !== 'backdropClick') {
              await closeDialog();
              resolve({
                result: 'close',
              });
            }
          },
          children: (
            <ServiceDashboardDashboard_View_EditSelectorIssuesIssueTabBarMyissuesOwnedIssuesTableAddSelectorPage
              ownerData={ownerData}
              alreadySelected={alreadySelected}
              isDraft={isDraft}
              onClose={async () => {
                await closeDialog();
                resolve({
                  result: 'close',
                });
              }}
              onSubmit={async (result, isDraft, openCreated) => {
                await closeDialog();
                resolve({
                  result: isDraft ? 'submit-draft' : 'submit',
                  openCreated,
                  data: result,
                });
              }}
            />
          ),
        });
      });
  };

const ServiceDashboardDashboard_View_EditSelectorIssuesIssueTabBarMyissuesOwnedIssuesAddSelectorDialogContainer = lazy(
  () =>
    import(
      '~/containers/Service/Dashboard/Dashboard_View_Edit/Selector/Issues/IssueTabBar/Myissues/OwnedIssues/AddSelector/ServiceDashboardDashboard_View_EditSelectorIssuesIssueTabBarMyissuesOwnedIssuesAddSelectorDialogContainer'
    ),
);

export interface ServiceDashboardDashboard_View_EditSelectorIssuesIssueTabBarMyissuesOwnedIssuesTableAddSelectorPageProps {
  ownerData: any;

  alreadySelected: ServiceIssueStored[];

  isDraft?: boolean;
  ownerValidation?: (data: ServiceIssue) => Promise<void>;
  onClose: () => Promise<void>;
  onSubmit: (result?: ServiceIssueStored[], isDraft?: boolean, openCreated?: boolean) => Promise<void>;
}

// XMIID: User/(esm/_CTqMYFw4Ee6gN-oVBDDIOQ)/TabularReferenceFieldTableAddSelectorPageDefinition
// Name: service::Dashboard::Dashboard_View_Edit::Selector::issues::IssueTabBar::myissues::ownedIssues::TableAddSelectorPage
export default function ServiceDashboardDashboard_View_EditSelectorIssuesIssueTabBarMyissuesOwnedIssuesTableAddSelectorPage(
  props: ServiceDashboardDashboard_View_EditSelectorIssuesIssueTabBarMyissuesOwnedIssuesTableAddSelectorPageProps,
) {
  const { ownerData, alreadySelected, onClose, onSubmit, isDraft, ownerValidation } = props;

  // Services
  const serviceDashboardServiceForOwnedIssuesImpl = useMemo(
    () => new ServiceDashboardServiceForOwnedIssuesImpl(judoAxiosProvider),
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
  const [createDialog, closeDialog] = useDialog();

  // State section
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [refreshCounter, setRefreshCounter] = useState<number>(0);
  const [data, setData] = useState<ServiceIssueStored[]>([]);
  const [selectionDiff, setSelectionDiff] = useState<ServiceIssueStored[]>([]);

  // Private actions
  const submit = async () => {};
  const refresh = async () => {
    setRefreshCounter((prev) => prev + 1);
  };

  // Validation
  const validate: (data: ServiceIssue) => Promise<void> = async (data) => {};

  // Pandino Action overrides
  const { service: customActionsHook } =
    useTrackService<ServiceDashboardDashboard_View_EditSelectorIssuesIssueTabBarMyissuesOwnedIssuesAddSelectorActionsHook>(
      `(${OBJECTCLASS}=${SERVICE_DASHBOARD_DASHBOARD_VIEW_EDIT_SELECTOR_ISSUES_ISSUE_TAB_BAR_MYISSUES_OWNED_ISSUES_TABLE_ADD_SELECTOR_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
    );
  const customActions:
    | ServiceDashboardDashboard_View_EditSelectorIssuesIssueTabBarMyissuesOwnedIssuesAddSelectorDialogActionsExtended
    | undefined = customActionsHook?.(ownerData, data, editMode, selectionDiff, submit);

  // Dialog hooks

  // Action section
  const getPageTitle = (): string => {
    return t('service.Dashboard.Dashboard_View_Edit.Selector.issues.IssueTabBar.myissues.ownedIssues.AddSelector', {
      defaultValue: '',
    });
  };
  const addAction = async (selected: ServiceIssueStored[]) => {
    onSubmit(selected);
  };
  const backAction = async () => {
    onClose();
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
  const selectorRangeAction = async (
    queryCustomizer: ServiceIssueQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceIssueStored[]>> => {
    try {
      return serviceDashboardServiceForOwnedIssuesImpl.getRangeForOwnedIssues(
        cleanUpPayload(ownerData),
        queryCustomizer,
      );
    } catch (error: any) {
      handleError(error);
      return Promise.resolve({ data: [], headers: error.response?.headers, status: error.response?.status });
    }
  };

  const actions: ServiceDashboardDashboard_View_EditSelectorIssuesIssueTabBarMyissuesOwnedIssuesAddSelectorDialogActions =
    {
      getPageTitle,
      addAction,
      backAction,
      filterAction,
      selectorRangeAction,
      ...(customActions ?? {}),
    };

  // ViewModel setup
  const viewModel: ServiceDashboardDashboard_View_EditSelectorIssuesIssueTabBarMyissuesOwnedIssuesAddSelectorViewModel =
    {
      onClose,
      actions,
      ownerData,
      isLoading,
      setIsLoading,
      editMode,
      setEditMode,
      refresh,
      refreshCounter,
      submit,
      alreadySelected,
      selectionDiff,
      setSelectionDiff,
      isDraft,
    };

  // Effect section

  return (
    <ServiceDashboardDashboard_View_EditSelectorIssuesIssueTabBarMyissuesOwnedIssuesAddSelectorViewModelContext.Provider
      value={viewModel}
    >
      <Suspense>
        <div
          id="User/(esm/_CTqMYFw4Ee6gN-oVBDDIOQ)/TabularReferenceFieldTableAddSelectorPageDefinition"
          data-page-name="service::Dashboard::Dashboard_View_Edit::Selector::issues::IssueTabBar::myissues::ownedIssues::TableAddSelectorPage"
        />
        <ServiceDashboardDashboard_View_EditSelectorIssuesIssueTabBarMyissuesOwnedIssuesAddSelectorDialogContainer
          ownerData={ownerData}
          onClose={onClose}
          actions={actions}
          isLoading={isLoading}
          editMode={editMode}
          refreshCounter={refreshCounter}
          selectionDiff={selectionDiff}
          setSelectionDiff={setSelectionDiff}
          alreadySelected={alreadySelected}
          isDraft={isDraft}
        />
      </Suspense>
    </ServiceDashboardDashboard_View_EditSelectorIssuesIssueTabBarMyissuesOwnedIssuesAddSelectorViewModelContext.Provider>
  );
}
