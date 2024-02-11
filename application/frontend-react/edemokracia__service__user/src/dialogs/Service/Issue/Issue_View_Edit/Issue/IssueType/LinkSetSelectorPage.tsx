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
  ServiceIssueIssue_View_EditIssueIssueTypeSetSelectorDialogActions,
  ServiceIssueIssue_View_EditIssueIssueTypeSetSelectorDialogProps,
} from '~/containers/Service/Issue/Issue_View_Edit/Issue/IssueType/SetSelector/ServiceIssueIssue_View_EditIssueIssueTypeSetSelectorDialogContainer';
import { useCRUDDialog, useSnacks, useViewData } from '~/hooks';
import type {
  ServiceIssue,
  ServiceIssueStored,
  ServiceIssueType,
  ServiceIssueTypeQueryCustomizer,
  ServiceIssueTypeStored,
  VoteType,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import type { JudoRestResponse } from '~/services/data-api/rest';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { ServiceIssueServiceForIssueTypeImpl } from '~/services/data-axios/ServiceIssueServiceForIssueTypeImpl';
import { cleanUpPayload, isErrorNestedValidationError, processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';

export type ServiceIssueIssue_View_EditIssueIssueTypeSetSelectorDialogActionsExtended =
  ServiceIssueIssue_View_EditIssueIssueTypeSetSelectorDialogActions & {};

export const SERVICE_ISSUE_ISSUE_VIEW_EDIT_ISSUE_ISSUE_TYPE_LINK_SET_SELECTOR_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_ISSUE_ISSUE_VIEW_EDIT_ISSUE_ISSUE_TYPE_LINK_SET_SELECTOR_PAGE_ACTIONS_HOOK';
export type ServiceIssueIssue_View_EditIssueIssueTypeSetSelectorActionsHook = (
  ownerData: any,
  data: ServiceIssueTypeStored[],
  editMode: boolean,
  selectionDiff: ServiceIssueTypeStored[],
  submit: () => Promise<void>,
) => ServiceIssueIssue_View_EditIssueIssueTypeSetSelectorDialogActionsExtended;

export interface ServiceIssueIssue_View_EditIssueIssueTypeSetSelectorViewModel
  extends ServiceIssueIssue_View_EditIssueIssueTypeSetSelectorDialogProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setEditMode: Dispatch<SetStateAction<boolean>>;
  refresh: () => Promise<void>;
  submit: () => Promise<void>;
  isDraft?: boolean;
}

const ServiceIssueIssue_View_EditIssueIssueTypeSetSelectorViewModelContext =
  createContext<ServiceIssueIssue_View_EditIssueIssueTypeSetSelectorViewModel>({} as any);
export const useServiceIssueIssue_View_EditIssueIssueTypeSetSelectorViewModel = () => {
  const context = useContext(ServiceIssueIssue_View_EditIssueIssueTypeSetSelectorViewModelContext);
  if (!context) {
    throw new Error(
      'useServiceIssueIssue_View_EditIssueIssueTypeSetSelectorViewModel must be used within a(n) ServiceIssueIssue_View_EditIssueIssueTypeSetSelectorViewModelProvider',
    );
  }
  return context;
};

export const useServiceIssueIssue_View_EditIssueIssueTypeLinkSetSelectorPage = (): ((
  ownerData: any,
  alreadySelected: ServiceIssueTypeStored[],
  isDraft?: boolean,
) => Promise<DialogResult<ServiceIssueTypeStored[]>>) => {
  const [createDialog, closeDialog] = useDialog();

  return (ownerData: any, alreadySelected: ServiceIssueTypeStored[], isDraft?: boolean) =>
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
          <ServiceIssueIssue_View_EditIssueIssueTypeLinkSetSelectorPage
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

const ServiceIssueIssue_View_EditIssueIssueTypeSetSelectorDialogContainer = lazy(
  () =>
    import(
      '~/containers/Service/Issue/Issue_View_Edit/Issue/IssueType/SetSelector/ServiceIssueIssue_View_EditIssueIssueTypeSetSelectorDialogContainer'
    ),
);

export interface ServiceIssueIssue_View_EditIssueIssueTypeLinkSetSelectorPageProps {
  ownerData: any;

  alreadySelected: ServiceIssueTypeStored[];

  isDraft?: boolean;
  ownerValidation?: (data: ServiceIssueType) => Promise<void>;
  onClose: () => Promise<void>;
  onSubmit: (result?: ServiceIssueTypeStored[], isDraft?: boolean) => Promise<void>;
}

// XMIID: User/(esm/_FHpVENvSEe2Bgcx6em3jZg)/TabularReferenceFieldLinkSetSelectorPageDefinition
// Name: service::Issue::Issue_View_Edit::issue::issueType::LinkSetSelectorPage
export default function ServiceIssueIssue_View_EditIssueIssueTypeLinkSetSelectorPage(
  props: ServiceIssueIssue_View_EditIssueIssueTypeLinkSetSelectorPageProps,
) {
  const { ownerData, alreadySelected, onClose, onSubmit, isDraft, ownerValidation } = props;

  // Services
  const serviceIssueServiceForIssueTypeImpl = useMemo(
    () => new ServiceIssueServiceForIssueTypeImpl(judoAxiosProvider),
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
  const [data, setData] = useState<ServiceIssueTypeStored[]>([]);
  const [selectionDiff, setSelectionDiff] = useState<ServiceIssueTypeStored[]>([]);

  // Private actions
  const submit = async () => {};
  const refresh = async () => {
    setRefreshCounter((prev) => prev + 1);
  };

  // Validation
  const validate: (data: ServiceIssueType) => Promise<void> = async (data) => {};

  // Pandino Action overrides
  const { service: customActionsHook } =
    useTrackService<ServiceIssueIssue_View_EditIssueIssueTypeSetSelectorActionsHook>(
      `(${OBJECTCLASS}=${SERVICE_ISSUE_ISSUE_VIEW_EDIT_ISSUE_ISSUE_TYPE_LINK_SET_SELECTOR_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
    );
  const customActions: ServiceIssueIssue_View_EditIssueIssueTypeSetSelectorDialogActionsExtended | undefined =
    customActionsHook?.(ownerData, data, editMode, selectionDiff, submit);

  // Dialog hooks

  // Action section
  const getPageTitle = (): string => {
    return t('service.Issue.Issue_View_Edit.issue.issueType.SetSelector', { defaultValue: 'Issue Type' });
  };
  const backAction = async () => {
    onClose();
  };
  const setAction = async (selected: ServiceIssueTypeStored[]) => {
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
    queryCustomizer: ServiceIssueTypeQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceIssueTypeStored[]>> => {
    try {
      return serviceIssueServiceForIssueTypeImpl.getRangeForIssueType(cleanUpPayload(ownerData), queryCustomizer);
    } catch (error: any) {
      handleError(error);
      return Promise.resolve({ data: [], headers: error.response?.headers, status: error.response?.status });
    }
  };

  const actions: ServiceIssueIssue_View_EditIssueIssueTypeSetSelectorDialogActions = {
    getPageTitle,
    backAction,
    setAction,
    filterAction,
    selectorRangeAction,
    ...(customActions ?? {}),
  };

  // ViewModel setup
  const viewModel: ServiceIssueIssue_View_EditIssueIssueTypeSetSelectorViewModel = {
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
    <ServiceIssueIssue_View_EditIssueIssueTypeSetSelectorViewModelContext.Provider value={viewModel}>
      <Suspense>
        <div
          id="User/(esm/_FHpVENvSEe2Bgcx6em3jZg)/TabularReferenceFieldLinkSetSelectorPageDefinition"
          data-page-name="service::Issue::Issue_View_Edit::issue::issueType::LinkSetSelectorPage"
        />
        <ServiceIssueIssue_View_EditIssueIssueTypeSetSelectorDialogContainer
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
    </ServiceIssueIssue_View_EditIssueIssueTypeSetSelectorViewModelContext.Provider>
  );
}
