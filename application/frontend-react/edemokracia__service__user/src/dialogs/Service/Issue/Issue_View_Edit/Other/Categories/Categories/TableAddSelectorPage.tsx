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
  ServiceIssueCategoryIssueCategory_TableAddSelectorDialogActions,
  ServiceIssueCategoryIssueCategory_TableAddSelectorDialogProps,
} from '~/containers/Service/IssueCategory/IssueCategory_Table/AddSelector/ServiceIssueCategoryIssueCategory_TableAddSelectorDialogContainer';
import { useCRUDDialog, useSnacks, useViewData } from '~/hooks';
import type {
  ServiceIssue,
  ServiceIssueCategory,
  ServiceIssueCategoryQueryCustomizer,
  ServiceIssueCategoryStored,
  ServiceIssueStored,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { ServiceIssueServiceForCategoriesImpl } from '~/services/data-axios/ServiceIssueServiceForCategoriesImpl';
import { cleanUpPayload, isErrorNestedValidationError, processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';

export type ServiceIssueCategoryIssueCategory_TableAddSelectorDialogActionsExtended =
  ServiceIssueCategoryIssueCategory_TableAddSelectorDialogActions & {};

export const SERVICE_ISSUE_ISSUE_VIEW_EDIT_OTHER_CATEGORIES_CATEGORIES_TABLE_ADD_SELECTOR_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_ISSUE_ISSUE_VIEW_EDIT_OTHER_CATEGORIES_CATEGORIES_TABLE_ADD_SELECTOR_PAGE_ACTIONS_HOOK';
export type ServiceIssueCategoryIssueCategory_TableAddSelectorActionsHook = (
  ownerData: any,
  data: ServiceIssueCategoryStored[],
  editMode: boolean,
  selectionDiff: ServiceIssueCategoryStored[],
  submit: () => Promise<void>,
) => ServiceIssueCategoryIssueCategory_TableAddSelectorDialogActionsExtended;

export interface ServiceIssueCategoryIssueCategory_TableAddSelectorViewModel
  extends ServiceIssueCategoryIssueCategory_TableAddSelectorDialogProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setEditMode: Dispatch<SetStateAction<boolean>>;
  refresh: () => Promise<void>;
  submit: () => Promise<void>;
  isDraft?: boolean;
}

const ServiceIssueCategoryIssueCategory_TableAddSelectorViewModelContext =
  createContext<ServiceIssueCategoryIssueCategory_TableAddSelectorViewModel>({} as any);
export const useServiceIssueCategoryIssueCategory_TableAddSelectorViewModel = () => {
  const context = useContext(ServiceIssueCategoryIssueCategory_TableAddSelectorViewModelContext);
  if (!context) {
    throw new Error(
      'useServiceIssueCategoryIssueCategory_TableAddSelectorViewModel must be used within a(n) ServiceIssueCategoryIssueCategory_TableAddSelectorViewModelProvider',
    );
  }
  return context;
};

export const useServiceIssueIssue_View_EditOtherCategoriesCategoriesTableAddSelectorPage = (): ((
  ownerData: any,
  alreadySelected: ServiceIssueCategoryStored[],
  isDraft?: boolean,
) => Promise<DialogResult<ServiceIssueCategoryStored[]>>) => {
  const [createDialog, closeDialog] = useDialog();

  return (ownerData: any, alreadySelected: ServiceIssueCategoryStored[], isDraft?: boolean) =>
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
          <ServiceIssueIssue_View_EditOtherCategoriesCategoriesTableAddSelectorPage
            ownerData={ownerData}
            alreadySelected={alreadySelected}
            isDraft={isDraft}
            onClose={async () => {
              await closeDialog();
              resolve({
                result: 'close',
              });
            }}
            onSubmit={async (result, isDraft) => {
              await closeDialog();
              resolve({
                result: isDraft ? 'submit-draft' : 'submit',
                data: result,
              });
            }}
          />
        ),
      });
    });
};

const ServiceIssueCategoryIssueCategory_TableAddSelectorDialogContainer = lazy(
  () =>
    import(
      '~/containers/Service/IssueCategory/IssueCategory_Table/AddSelector/ServiceIssueCategoryIssueCategory_TableAddSelectorDialogContainer'
    ),
);

export interface ServiceIssueIssue_View_EditOtherCategoriesCategoriesTableAddSelectorPageProps {
  ownerData: any;

  alreadySelected: ServiceIssueCategoryStored[];

  isDraft?: boolean;
  ownerValidation?: (data: ServiceIssueCategory) => Promise<void>;
  onClose: () => Promise<void>;
  onSubmit: (result?: ServiceIssueCategoryStored[], isDraft?: boolean) => Promise<void>;
}

// XMIID: User/(esm/_LRJ3AId9Ee2kLcMqsIbMgQ)/TabularReferenceFieldTableAddSelectorPageDefinition
// Name: service::Issue::Issue_View_Edit::other::categories::categories::TableAddSelectorPage
export default function ServiceIssueIssue_View_EditOtherCategoriesCategoriesTableAddSelectorPage(
  props: ServiceIssueIssue_View_EditOtherCategoriesCategoriesTableAddSelectorPageProps,
) {
  const { ownerData, alreadySelected, onClose, onSubmit, isDraft, ownerValidation } = props;

  // Services
  const serviceIssueServiceForCategoriesImpl = useMemo(
    () => new ServiceIssueServiceForCategoriesImpl(judoAxiosProvider),
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
  const [data, setData] = useState<ServiceIssueCategoryStored[]>([]);
  const [selectionDiff, setSelectionDiff] = useState<ServiceIssueCategoryStored[]>([]);

  // Private actions
  const submit = async () => {};
  const refresh = async () => {
    setRefreshCounter((prev) => prev + 1);
  };

  // Validation
  const validate: (data: ServiceIssueCategory) => Promise<void> = async (data) => {};

  // Pandino Action overrides
  const { service: customActionsHook } = useTrackService<ServiceIssueCategoryIssueCategory_TableAddSelectorActionsHook>(
    `(${OBJECTCLASS}=${SERVICE_ISSUE_ISSUE_VIEW_EDIT_OTHER_CATEGORIES_CATEGORIES_TABLE_ADD_SELECTOR_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const customActions: ServiceIssueCategoryIssueCategory_TableAddSelectorDialogActionsExtended | undefined =
    customActionsHook?.(ownerData, data, editMode, selectionDiff, submit);

  // Dialog hooks

  // Action section
  const getPageTitle = (): string => {
    return t('service.IssueCategory.IssueCategory_Table.AddSelector', { defaultValue: 'IssueCategory Table' });
  };
  const addAction = async (selected: ServiceIssueCategoryStored[]) => {
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
    queryCustomizer: ServiceIssueCategoryQueryCustomizer,
  ): Promise<ServiceIssueCategoryStored[]> => {
    try {
      return serviceIssueServiceForCategoriesImpl.getRangeForCategories(cleanUpPayload(ownerData), queryCustomizer);
    } catch (error) {
      handleError(error);
      return Promise.resolve([]);
    }
  };

  const actions: ServiceIssueCategoryIssueCategory_TableAddSelectorDialogActions = {
    getPageTitle,
    addAction,
    backAction,
    filterAction,
    selectorRangeAction,
    ...(customActions ?? {}),
  };

  // ViewModel setup
  const viewModel: ServiceIssueCategoryIssueCategory_TableAddSelectorViewModel = {
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
    <ServiceIssueCategoryIssueCategory_TableAddSelectorViewModelContext.Provider value={viewModel}>
      <Suspense>
        <div
          id="User/(esm/_LRJ3AId9Ee2kLcMqsIbMgQ)/TabularReferenceFieldTableAddSelectorPageDefinition"
          data-page-name="service::Issue::Issue_View_Edit::other::categories::categories::TableAddSelectorPage"
        />
        <ServiceIssueCategoryIssueCategory_TableAddSelectorDialogContainer
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
    </ServiceIssueCategoryIssueCategory_TableAddSelectorViewModelContext.Provider>
  );
}
