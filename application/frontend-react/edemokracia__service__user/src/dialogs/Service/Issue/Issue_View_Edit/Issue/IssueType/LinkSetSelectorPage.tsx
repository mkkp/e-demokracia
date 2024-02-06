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
  ServiceIssueTypeIssueType_TableSetSelectorDialogActions,
  ServiceIssueTypeIssueType_TableSetSelectorDialogProps,
} from '~/containers/Service/IssueType/IssueType_Table/SetSelector/ServiceIssueTypeIssueType_TableSetSelectorDialogContainer';
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
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { ServiceIssueServiceForIssueTypeImpl } from '~/services/data-axios/ServiceIssueServiceForIssueTypeImpl';
import { cleanUpPayload, isErrorNestedValidationError, processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';

export type ServiceIssueTypeIssueType_TableSetSelectorDialogActionsExtended =
  ServiceIssueTypeIssueType_TableSetSelectorDialogActions & {};

export const SERVICE_ISSUE_ISSUE_VIEW_EDIT_ISSUE_ISSUE_TYPE_LINK_SET_SELECTOR_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_ISSUE_ISSUE_VIEW_EDIT_ISSUE_ISSUE_TYPE_LINK_SET_SELECTOR_PAGE_ACTIONS_HOOK';
export type ServiceIssueTypeIssueType_TableSetSelectorActionsHook = (
  ownerData: any,
  data: ServiceIssueTypeStored[],
  editMode: boolean,
  selectionDiff: ServiceIssueTypeStored[],
  submit: () => Promise<void>,
) => ServiceIssueTypeIssueType_TableSetSelectorDialogActionsExtended;

export interface ServiceIssueTypeIssueType_TableSetSelectorViewModel
  extends ServiceIssueTypeIssueType_TableSetSelectorDialogProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setEditMode: Dispatch<SetStateAction<boolean>>;
  refresh: () => Promise<void>;
  submit: () => Promise<void>;
  isDraft?: boolean;
}

const ServiceIssueTypeIssueType_TableSetSelectorViewModelContext =
  createContext<ServiceIssueTypeIssueType_TableSetSelectorViewModel>({} as any);
export const useServiceIssueTypeIssueType_TableSetSelectorViewModel = () => {
  const context = useContext(ServiceIssueTypeIssueType_TableSetSelectorViewModelContext);
  if (!context) {
    throw new Error(
      'useServiceIssueTypeIssueType_TableSetSelectorViewModel must be used within a(n) ServiceIssueTypeIssueType_TableSetSelectorViewModelProvider',
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

const ServiceIssueTypeIssueType_TableSetSelectorDialogContainer = lazy(
  () =>
    import(
      '~/containers/Service/IssueType/IssueType_Table/SetSelector/ServiceIssueTypeIssueType_TableSetSelectorDialogContainer'
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
  const { service: customActionsHook } = useTrackService<ServiceIssueTypeIssueType_TableSetSelectorActionsHook>(
    `(${OBJECTCLASS}=${SERVICE_ISSUE_ISSUE_VIEW_EDIT_ISSUE_ISSUE_TYPE_LINK_SET_SELECTOR_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const customActions: ServiceIssueTypeIssueType_TableSetSelectorDialogActionsExtended | undefined =
    customActionsHook?.(ownerData, data, editMode, selectionDiff, submit);

  // Dialog hooks

  // Action section
  const getPageTitle = (): string => {
    return t('service.IssueType.IssueType_Table.SetSelector', { defaultValue: 'IssueType Table' });
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
  ): Promise<ServiceIssueTypeStored[]> => {
    try {
      return serviceIssueServiceForIssueTypeImpl.getRangeForIssueType(cleanUpPayload(ownerData), queryCustomizer);
    } catch (error) {
      handleError(error);
      return Promise.resolve([]);
    }
  };

  const actions: ServiceIssueTypeIssueType_TableSetSelectorDialogActions = {
    getPageTitle,
    backAction,
    setAction,
    filterAction,
    selectorRangeAction,
    ...(customActions ?? {}),
  };

  // ViewModel setup
  const viewModel: ServiceIssueTypeIssueType_TableSetSelectorViewModel = {
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
    <ServiceIssueTypeIssueType_TableSetSelectorViewModelContext.Provider value={viewModel}>
      <Suspense>
        <div
          id="User/(esm/_FHpVENvSEe2Bgcx6em3jZg)/TabularReferenceFieldLinkSetSelectorPageDefinition"
          data-page-name="service::Issue::Issue_View_Edit::issue::issueType::LinkSetSelectorPage"
        />
        <ServiceIssueTypeIssueType_TableSetSelectorDialogContainer
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
    </ServiceIssueTypeIssueType_TableSetSelectorViewModelContext.Provider>
  );
}
