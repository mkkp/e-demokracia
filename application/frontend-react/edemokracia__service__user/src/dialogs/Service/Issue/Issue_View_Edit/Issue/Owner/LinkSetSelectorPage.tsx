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
  ServiceIssueIssue_View_EditIssueOwnerSetSelectorDialogActions,
  ServiceIssueIssue_View_EditIssueOwnerSetSelectorDialogProps,
} from '~/containers/Service/Issue/Issue_View_Edit/Issue/Owner/SetSelector/ServiceIssueIssue_View_EditIssueOwnerSetSelectorDialogContainer';
import { useCRUDDialog, useSnacks, useViewData } from '~/hooks';
import type {
  ServiceIssue,
  ServiceIssueStored,
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import type { JudoRestResponse } from '~/services/data-api/rest';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { ServiceIssueServiceForOwnerImpl } from '~/services/data-axios/ServiceIssueServiceForOwnerImpl';
import { cleanUpPayload, isErrorNestedValidationError, processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';

export type ServiceIssueIssue_View_EditIssueOwnerSetSelectorDialogActionsExtended =
  ServiceIssueIssue_View_EditIssueOwnerSetSelectorDialogActions & {};

export const SERVICE_ISSUE_ISSUE_VIEW_EDIT_ISSUE_OWNER_LINK_SET_SELECTOR_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_ISSUE_ISSUE_VIEW_EDIT_ISSUE_OWNER_LINK_SET_SELECTOR_PAGE_ACTIONS_HOOK';
export type ServiceIssueIssue_View_EditIssueOwnerSetSelectorActionsHook = (
  ownerData: any,
  data: ServiceServiceUserStored[],
  editMode: boolean,
  selectionDiff: ServiceServiceUserStored[],
  submit: () => Promise<void>,
) => ServiceIssueIssue_View_EditIssueOwnerSetSelectorDialogActionsExtended;

export interface ServiceIssueIssue_View_EditIssueOwnerSetSelectorViewModel
  extends ServiceIssueIssue_View_EditIssueOwnerSetSelectorDialogProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setEditMode: Dispatch<SetStateAction<boolean>>;
  refresh: () => Promise<void>;
  submit: () => Promise<void>;
  isDraft?: boolean;
}

const ServiceIssueIssue_View_EditIssueOwnerSetSelectorViewModelContext =
  createContext<ServiceIssueIssue_View_EditIssueOwnerSetSelectorViewModel>({} as any);
export const useServiceIssueIssue_View_EditIssueOwnerSetSelectorViewModel = () => {
  const context = useContext(ServiceIssueIssue_View_EditIssueOwnerSetSelectorViewModelContext);
  if (!context) {
    throw new Error(
      'useServiceIssueIssue_View_EditIssueOwnerSetSelectorViewModel must be used within a(n) ServiceIssueIssue_View_EditIssueOwnerSetSelectorViewModelProvider',
    );
  }
  return context;
};

export const useServiceIssueIssue_View_EditIssueOwnerLinkSetSelectorPage = (): ((
  ownerData: any,
  alreadySelected: ServiceServiceUserStored[],
  isDraft?: boolean,
) => Promise<DialogResult<ServiceServiceUserStored[]>>) => {
  const [createDialog, closeDialog] = useDialog();

  return (ownerData: any, alreadySelected: ServiceServiceUserStored[], isDraft?: boolean) =>
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
          <ServiceIssueIssue_View_EditIssueOwnerLinkSetSelectorPage
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

const ServiceIssueIssue_View_EditIssueOwnerSetSelectorDialogContainer = lazy(
  () =>
    import(
      '~/containers/Service/Issue/Issue_View_Edit/Issue/Owner/SetSelector/ServiceIssueIssue_View_EditIssueOwnerSetSelectorDialogContainer'
    ),
);

export interface ServiceIssueIssue_View_EditIssueOwnerLinkSetSelectorPageProps {
  ownerData: any;

  alreadySelected: ServiceServiceUserStored[];

  isDraft?: boolean;
  ownerValidation?: (data: ServiceServiceUser) => Promise<void>;
  onClose: () => Promise<void>;
  onSubmit: (result?: ServiceServiceUserStored[], isDraft?: boolean) => Promise<void>;
}

// XMIID: User/(esm/_plsB8Id8Ee2kLcMqsIbMgQ)/TabularReferenceFieldLinkSetSelectorPageDefinition
// Name: service::Issue::Issue_View_Edit::issue::owner::LinkSetSelectorPage
export default function ServiceIssueIssue_View_EditIssueOwnerLinkSetSelectorPage(
  props: ServiceIssueIssue_View_EditIssueOwnerLinkSetSelectorPageProps,
) {
  const { ownerData, alreadySelected, onClose, onSubmit, isDraft, ownerValidation } = props;

  // Services
  const serviceIssueServiceForOwnerImpl = useMemo(() => new ServiceIssueServiceForOwnerImpl(judoAxiosProvider), []);

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
  const [data, setData] = useState<ServiceServiceUserStored[]>([]);
  const [selectionDiff, setSelectionDiff] = useState<ServiceServiceUserStored[]>([]);

  // Private actions
  const submit = async () => {};
  const refresh = async () => {
    setRefreshCounter((prev) => prev + 1);
  };

  // Validation
  const validate: (data: ServiceServiceUser) => Promise<void> = async (data) => {};

  // Pandino Action overrides
  const { service: customActionsHook } = useTrackService<ServiceIssueIssue_View_EditIssueOwnerSetSelectorActionsHook>(
    `(${OBJECTCLASS}=${SERVICE_ISSUE_ISSUE_VIEW_EDIT_ISSUE_OWNER_LINK_SET_SELECTOR_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const customActions: ServiceIssueIssue_View_EditIssueOwnerSetSelectorDialogActionsExtended | undefined =
    customActionsHook?.(ownerData, data, editMode, selectionDiff, submit);

  // Dialog hooks

  // Action section
  const getPageTitle = (): string => {
    return t('service.Issue.Issue_View_Edit.issue.owner.SetSelector', { defaultValue: 'Owner' });
  };
  const backAction = async () => {
    onClose();
  };
  const setAction = async (selected: ServiceServiceUserStored[]) => {
    onSubmit(selected);
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
    queryCustomizer: ServiceServiceUserQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceServiceUserStored[]>> => {
    try {
      return serviceIssueServiceForOwnerImpl.getRangeForOwner(cleanUpPayload(ownerData), queryCustomizer);
    } catch (error: any) {
      handleError(error);
      return Promise.resolve({ data: [], headers: error.response?.headers, status: error.response?.status });
    }
  };

  const actions: ServiceIssueIssue_View_EditIssueOwnerSetSelectorDialogActions = {
    getPageTitle,
    backAction,
    setAction,
    filterAction,
    selectorRangeAction,
    ...(customActions ?? {}),
  };

  // ViewModel setup
  const viewModel: ServiceIssueIssue_View_EditIssueOwnerSetSelectorViewModel = {
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
    <ServiceIssueIssue_View_EditIssueOwnerSetSelectorViewModelContext.Provider value={viewModel}>
      <Suspense>
        <div
          id="User/(esm/_plsB8Id8Ee2kLcMqsIbMgQ)/TabularReferenceFieldLinkSetSelectorPageDefinition"
          data-page-name="service::Issue::Issue_View_Edit::issue::owner::LinkSetSelectorPage"
        />
        <ServiceIssueIssue_View_EditIssueOwnerSetSelectorDialogContainer
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
    </ServiceIssueIssue_View_EditIssueOwnerSetSelectorViewModelContext.Provider>
  );
}
