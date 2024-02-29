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
  ServiceUserIssuesUserIssues_View_EditRootTabBarOwnedIssuesGroupOwnedIssuesAddSelectorDialogActions,
  ServiceUserIssuesUserIssues_View_EditRootTabBarOwnedIssuesGroupOwnedIssuesAddSelectorDialogProps,
} from '~/containers/Service/UserIssues/UserIssues_View_Edit/Root/TabBar/OwnedIssuesGroup/OwnedIssues/AddSelector/ServiceUserIssuesUserIssues_View_EditRootTabBarOwnedIssuesGroupOwnedIssuesAddSelectorDialogContainer';
import { useCRUDDialog, useSnacks, useViewData } from '~/hooks';
import type {
  IssueScope,
  IssueStatus,
  ServiceIssue,
  ServiceIssueQueryCustomizer,
  ServiceIssueStored,
  ServiceUserIssues,
  ServiceUserIssuesStored,
  VoteType,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import type { JudoRestResponse } from '~/services/data-api/rest';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { ServiceUserIssuesServiceForOwnedIssuesImpl } from '~/services/data-axios/ServiceUserIssuesServiceForOwnedIssuesImpl';
import { cleanUpPayload, isErrorNestedValidationError, processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';

export type ServiceUserIssuesUserIssues_View_EditRootTabBarOwnedIssuesGroupOwnedIssuesAddSelectorDialogActionsExtended =
  ServiceUserIssuesUserIssues_View_EditRootTabBarOwnedIssuesGroupOwnedIssuesAddSelectorDialogActions & {};

export const SERVICE_USER_ISSUES_USER_ISSUES_VIEW_EDIT_ROOT_TAB_BAR_OWNED_ISSUES_GROUP_OWNED_ISSUES_TABLE_ADD_SELECTOR_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_USER_ISSUES_USER_ISSUES_VIEW_EDIT_ROOT_TAB_BAR_OWNED_ISSUES_GROUP_OWNED_ISSUES_TABLE_ADD_SELECTOR_PAGE_ACTIONS_HOOK';
export type ServiceUserIssuesUserIssues_View_EditRootTabBarOwnedIssuesGroupOwnedIssuesAddSelectorActionsHook = (
  ownerData: any,
  data: ServiceIssueStored[],
  editMode: boolean,
  selectionDiff: ServiceIssueStored[],
  submit: () => Promise<void>,
) => ServiceUserIssuesUserIssues_View_EditRootTabBarOwnedIssuesGroupOwnedIssuesAddSelectorDialogActionsExtended;

export interface ServiceUserIssuesUserIssues_View_EditRootTabBarOwnedIssuesGroupOwnedIssuesAddSelectorViewModel
  extends ServiceUserIssuesUserIssues_View_EditRootTabBarOwnedIssuesGroupOwnedIssuesAddSelectorDialogProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setEditMode: Dispatch<SetStateAction<boolean>>;
  refresh: () => Promise<void>;
  submit: () => Promise<void>;
  isDraft?: boolean;
}

const ServiceUserIssuesUserIssues_View_EditRootTabBarOwnedIssuesGroupOwnedIssuesAddSelectorViewModelContext =
  createContext<ServiceUserIssuesUserIssues_View_EditRootTabBarOwnedIssuesGroupOwnedIssuesAddSelectorViewModel>(
    {} as any,
  );
export const useServiceUserIssuesUserIssues_View_EditRootTabBarOwnedIssuesGroupOwnedIssuesAddSelectorViewModel = () => {
  const context = useContext(
    ServiceUserIssuesUserIssues_View_EditRootTabBarOwnedIssuesGroupOwnedIssuesAddSelectorViewModelContext,
  );
  if (!context) {
    throw new Error(
      'useServiceUserIssuesUserIssues_View_EditRootTabBarOwnedIssuesGroupOwnedIssuesAddSelectorViewModel must be used within a(n) ServiceUserIssuesUserIssues_View_EditRootTabBarOwnedIssuesGroupOwnedIssuesAddSelectorViewModelProvider',
    );
  }
  return context;
};

export const useServiceUserIssuesUserIssues_View_EditRootTabBarOwnedIssuesGroupOwnedIssuesTableAddSelectorPage = (): ((
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
          <ServiceUserIssuesUserIssues_View_EditRootTabBarOwnedIssuesGroupOwnedIssuesTableAddSelectorPage
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

const ServiceUserIssuesUserIssues_View_EditRootTabBarOwnedIssuesGroupOwnedIssuesAddSelectorDialogContainer = lazy(
  () =>
    import(
      '~/containers/Service/UserIssues/UserIssues_View_Edit/Root/TabBar/OwnedIssuesGroup/OwnedIssues/AddSelector/ServiceUserIssuesUserIssues_View_EditRootTabBarOwnedIssuesGroupOwnedIssuesAddSelectorDialogContainer'
    ),
);

export interface ServiceUserIssuesUserIssues_View_EditRootTabBarOwnedIssuesGroupOwnedIssuesTableAddSelectorPageProps {
  ownerData: any;

  alreadySelected: ServiceIssueStored[];

  isDraft?: boolean;
  ownerValidation?: (data: ServiceIssue) => Promise<void>;
  onClose: () => Promise<void>;
  onSubmit: (result?: ServiceIssueStored[], isDraft?: boolean, openCreated?: boolean) => Promise<void>;
}

// XMIID: User/(esm/_h5rm8FrPEe6_67aMO2jOsw)/TabularReferenceFieldTableAddSelectorPageDefinition
// Name: service::UserIssues::UserIssues_View_Edit::root::tabBar::ownedIssuesGroup::ownedIssues::TableAddSelectorPage
export default function ServiceUserIssuesUserIssues_View_EditRootTabBarOwnedIssuesGroupOwnedIssuesTableAddSelectorPage(
  props: ServiceUserIssuesUserIssues_View_EditRootTabBarOwnedIssuesGroupOwnedIssuesTableAddSelectorPageProps,
) {
  const { ownerData, alreadySelected, onClose, onSubmit, isDraft, ownerValidation } = props;

  // Services
  const serviceUserIssuesServiceForOwnedIssuesImpl = useMemo(
    () => new ServiceUserIssuesServiceForOwnedIssuesImpl(judoAxiosProvider),
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
    useTrackService<ServiceUserIssuesUserIssues_View_EditRootTabBarOwnedIssuesGroupOwnedIssuesAddSelectorActionsHook>(
      `(${OBJECTCLASS}=${SERVICE_USER_ISSUES_USER_ISSUES_VIEW_EDIT_ROOT_TAB_BAR_OWNED_ISSUES_GROUP_OWNED_ISSUES_TABLE_ADD_SELECTOR_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
    );
  const customActions:
    | ServiceUserIssuesUserIssues_View_EditRootTabBarOwnedIssuesGroupOwnedIssuesAddSelectorDialogActionsExtended
    | undefined = customActionsHook?.(ownerData, data, editMode, selectionDiff, submit);

  // Dialog hooks

  // Action section
  const getPageTitle = (): string => {
    return t('service.UserIssues.UserIssues_View_Edit.root.tabBar.ownedIssuesGroup.ownedIssues.AddSelector', {
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
      return serviceUserIssuesServiceForOwnedIssuesImpl.getRangeForOwnedIssues(
        cleanUpPayload(ownerData),
        queryCustomizer,
      );
    } catch (error: any) {
      handleError(error);
      return Promise.resolve({ data: [], headers: error.response?.headers, status: error.response?.status });
    }
  };

  const actions: ServiceUserIssuesUserIssues_View_EditRootTabBarOwnedIssuesGroupOwnedIssuesAddSelectorDialogActions = {
    getPageTitle,
    addAction,
    backAction,
    filterAction,
    selectorRangeAction,
    ...(customActions ?? {}),
  };

  // ViewModel setup
  const viewModel: ServiceUserIssuesUserIssues_View_EditRootTabBarOwnedIssuesGroupOwnedIssuesAddSelectorViewModel = {
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
    <ServiceUserIssuesUserIssues_View_EditRootTabBarOwnedIssuesGroupOwnedIssuesAddSelectorViewModelContext.Provider
      value={viewModel}
    >
      <Suspense>
        <div
          id="User/(esm/_h5rm8FrPEe6_67aMO2jOsw)/TabularReferenceFieldTableAddSelectorPageDefinition"
          data-page-name="service::UserIssues::UserIssues_View_Edit::root::tabBar::ownedIssuesGroup::ownedIssues::TableAddSelectorPage"
        />
        <ServiceUserIssuesUserIssues_View_EditRootTabBarOwnedIssuesGroupOwnedIssuesAddSelectorDialogContainer
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
    </ServiceUserIssuesUserIssues_View_EditRootTabBarOwnedIssuesGroupOwnedIssuesAddSelectorViewModelContext.Provider>
  );
}
