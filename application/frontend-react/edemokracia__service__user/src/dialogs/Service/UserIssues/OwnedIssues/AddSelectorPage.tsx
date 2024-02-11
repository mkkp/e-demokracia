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
  ServiceIssueIssue_TableAddSelectorDialogActions,
  ServiceIssueIssue_TableAddSelectorDialogProps,
} from '~/containers/Service/Issue/Issue_Table/AddSelector/ServiceIssueIssue_TableAddSelectorDialogContainer';
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

export type ServiceIssueIssue_TableAddSelectorDialogActionsExtended =
  ServiceIssueIssue_TableAddSelectorDialogActions & {};

export const SERVICE_USER_ISSUES_OWNED_ISSUES_ADD_SELECTOR_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_USER_ISSUES_OWNED_ISSUES_ADD_SELECTOR_PAGE_ACTIONS_HOOK';
export type ServiceIssueIssue_TableAddSelectorActionsHook = (
  ownerData: any,
  data: ServiceIssueStored[],
  editMode: boolean,
  selectionDiff: ServiceIssueStored[],
  submit: () => Promise<void>,
) => ServiceIssueIssue_TableAddSelectorDialogActionsExtended;

export interface ServiceIssueIssue_TableAddSelectorViewModel extends ServiceIssueIssue_TableAddSelectorDialogProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setEditMode: Dispatch<SetStateAction<boolean>>;
  refresh: () => Promise<void>;
  submit: () => Promise<void>;
  isDraft?: boolean;
}

const ServiceIssueIssue_TableAddSelectorViewModelContext = createContext<ServiceIssueIssue_TableAddSelectorViewModel>(
  {} as any,
);
export const useServiceIssueIssue_TableAddSelectorViewModel = () => {
  const context = useContext(ServiceIssueIssue_TableAddSelectorViewModelContext);
  if (!context) {
    throw new Error(
      'useServiceIssueIssue_TableAddSelectorViewModel must be used within a(n) ServiceIssueIssue_TableAddSelectorViewModelProvider',
    );
  }
  return context;
};

export const useServiceUserIssuesOwnedIssuesAddSelectorPage = (): ((
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
          <ServiceUserIssuesOwnedIssuesAddSelectorPage
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

const ServiceIssueIssue_TableAddSelectorDialogContainer = lazy(
  () => import('~/containers/Service/Issue/Issue_Table/AddSelector/ServiceIssueIssue_TableAddSelectorDialogContainer'),
);

export interface ServiceUserIssuesOwnedIssuesAddSelectorPageProps {
  ownerData: any;

  alreadySelected: ServiceIssueStored[];

  isDraft?: boolean;
  ownerValidation?: (data: ServiceIssue) => Promise<void>;
  onClose: () => Promise<void>;
  onSubmit: (result?: ServiceIssueStored[], isDraft?: boolean) => Promise<void>;
}

// XMIID: User/(esm/_jK5OoVq4Ee6_67aMO2jOsw)/RelationFeatureTableAddSelectorPageDefinition
// Name: service::UserIssues::ownedIssues::AddSelectorPage
export default function ServiceUserIssuesOwnedIssuesAddSelectorPage(
  props: ServiceUserIssuesOwnedIssuesAddSelectorPageProps,
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
  const { service: customActionsHook } = useTrackService<ServiceIssueIssue_TableAddSelectorActionsHook>(
    `(${OBJECTCLASS}=${SERVICE_USER_ISSUES_OWNED_ISSUES_ADD_SELECTOR_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const customActions: ServiceIssueIssue_TableAddSelectorDialogActionsExtended | undefined = customActionsHook?.(
    ownerData,
    data,
    editMode,
    selectionDiff,
    submit,
  );

  // Dialog hooks

  // Action section
  const getPageTitle = (): string => {
    return t('service.Issue.Issue_Table.AddSelector', { defaultValue: 'Issue Table' });
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

  const actions: ServiceIssueIssue_TableAddSelectorDialogActions = {
    getPageTitle,
    addAction,
    backAction,
    filterAction,
    selectorRangeAction,
    ...(customActions ?? {}),
  };

  // ViewModel setup
  const viewModel: ServiceIssueIssue_TableAddSelectorViewModel = {
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
    <ServiceIssueIssue_TableAddSelectorViewModelContext.Provider value={viewModel}>
      <Suspense>
        <div
          id="User/(esm/_jK5OoVq4Ee6_67aMO2jOsw)/RelationFeatureTableAddSelectorPageDefinition"
          data-page-name="service::UserIssues::ownedIssues::AddSelectorPage"
        />
        <ServiceIssueIssue_TableAddSelectorDialogContainer
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
    </ServiceIssueIssue_TableAddSelectorViewModelContext.Provider>
  );
}
