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
  ServiceYesNoVoteEntryYesNoVoteEntry_View_EditUserSetSelectorDialogActions,
  ServiceYesNoVoteEntryYesNoVoteEntry_View_EditUserSetSelectorDialogProps,
} from '~/containers/Service/YesNoVoteEntry/YesNoVoteEntry_View_Edit/User/SetSelector/ServiceYesNoVoteEntryYesNoVoteEntry_View_EditUserSetSelectorDialogContainer';
import { useCRUDDialog, useSnacks, useViewData } from '~/hooks';
import type {
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
  ServiceYesNoVoteEntry,
  ServiceYesNoVoteEntryStored,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import type { JudoRestResponse } from '~/services/data-api/rest';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { ServiceYesNoVoteEntryServiceForOwnerImpl } from '~/services/data-axios/ServiceYesNoVoteEntryServiceForOwnerImpl';
import { cleanUpPayload, isErrorNestedValidationError, processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';

export type ServiceYesNoVoteEntryYesNoVoteEntry_View_EditUserSetSelectorDialogActionsExtended =
  ServiceYesNoVoteEntryYesNoVoteEntry_View_EditUserSetSelectorDialogActions & {};

export const SERVICE_YES_NO_VOTE_ENTRY_YES_NO_VOTE_ENTRY_VIEW_EDIT_USER_LINK_SET_SELECTOR_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_YES_NO_VOTE_ENTRY_YES_NO_VOTE_ENTRY_VIEW_EDIT_USER_LINK_SET_SELECTOR_PAGE_ACTIONS_HOOK';
export type ServiceYesNoVoteEntryYesNoVoteEntry_View_EditUserSetSelectorActionsHook = (
  ownerData: any,
  data: ServiceServiceUserStored[],
  editMode: boolean,
  selectionDiff: ServiceServiceUserStored[],
  submit: () => Promise<void>,
) => ServiceYesNoVoteEntryYesNoVoteEntry_View_EditUserSetSelectorDialogActionsExtended;

export interface ServiceYesNoVoteEntryYesNoVoteEntry_View_EditUserSetSelectorViewModel
  extends ServiceYesNoVoteEntryYesNoVoteEntry_View_EditUserSetSelectorDialogProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setEditMode: Dispatch<SetStateAction<boolean>>;
  refresh: () => Promise<void>;
  submit: () => Promise<void>;
  isDraft?: boolean;
}

const ServiceYesNoVoteEntryYesNoVoteEntry_View_EditUserSetSelectorViewModelContext =
  createContext<ServiceYesNoVoteEntryYesNoVoteEntry_View_EditUserSetSelectorViewModel>({} as any);
export const useServiceYesNoVoteEntryYesNoVoteEntry_View_EditUserSetSelectorViewModel = () => {
  const context = useContext(ServiceYesNoVoteEntryYesNoVoteEntry_View_EditUserSetSelectorViewModelContext);
  if (!context) {
    throw new Error(
      'useServiceYesNoVoteEntryYesNoVoteEntry_View_EditUserSetSelectorViewModel must be used within a(n) ServiceYesNoVoteEntryYesNoVoteEntry_View_EditUserSetSelectorViewModelProvider',
    );
  }
  return context;
};

export const useServiceYesNoVoteEntryYesNoVoteEntry_View_EditUserLinkSetSelectorPage = (): ((
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
          <ServiceYesNoVoteEntryYesNoVoteEntry_View_EditUserLinkSetSelectorPage
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

const ServiceYesNoVoteEntryYesNoVoteEntry_View_EditUserSetSelectorDialogContainer = lazy(
  () =>
    import(
      '~/containers/Service/YesNoVoteEntry/YesNoVoteEntry_View_Edit/User/SetSelector/ServiceYesNoVoteEntryYesNoVoteEntry_View_EditUserSetSelectorDialogContainer'
    ),
);

export interface ServiceYesNoVoteEntryYesNoVoteEntry_View_EditUserLinkSetSelectorPageProps {
  ownerData: any;

  alreadySelected: ServiceServiceUserStored[];

  isDraft?: boolean;
  ownerValidation?: (data: ServiceServiceUser) => Promise<void>;
  onClose: () => Promise<void>;
  onSubmit: (result?: ServiceServiceUserStored[], isDraft?: boolean, openCreated?: boolean) => Promise<void>;
}

// XMIID: User/(esm/_88iwkFowEe6_67aMO2jOsw)/TabularReferenceFieldLinkSetSelectorPageDefinition
// Name: service::YesNoVoteEntry::YesNoVoteEntry_View_Edit::user::LinkSetSelectorPage
export default function ServiceYesNoVoteEntryYesNoVoteEntry_View_EditUserLinkSetSelectorPage(
  props: ServiceYesNoVoteEntryYesNoVoteEntry_View_EditUserLinkSetSelectorPageProps,
) {
  const { ownerData, alreadySelected, onClose, onSubmit, isDraft, ownerValidation } = props;

  // Services
  const serviceYesNoVoteEntryServiceForOwnerImpl = useMemo(
    () => new ServiceYesNoVoteEntryServiceForOwnerImpl(judoAxiosProvider),
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
  const { service: customActionsHook } =
    useTrackService<ServiceYesNoVoteEntryYesNoVoteEntry_View_EditUserSetSelectorActionsHook>(
      `(${OBJECTCLASS}=${SERVICE_YES_NO_VOTE_ENTRY_YES_NO_VOTE_ENTRY_VIEW_EDIT_USER_LINK_SET_SELECTOR_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
    );
  const customActions: ServiceYesNoVoteEntryYesNoVoteEntry_View_EditUserSetSelectorDialogActionsExtended | undefined =
    customActionsHook?.(ownerData, data, editMode, selectionDiff, submit);

  // Dialog hooks

  // Action section
  const getPageTitle = (): string => {
    return t('service.YesNoVoteEntry.YesNoVoteEntry_View_Edit.user.SetSelector', { defaultValue: 'User' });
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
      return serviceYesNoVoteEntryServiceForOwnerImpl.getRangeForOwner(cleanUpPayload(ownerData), queryCustomizer);
    } catch (error: any) {
      handleError(error);
      return Promise.resolve({ data: [], headers: error.response?.headers, status: error.response?.status });
    }
  };

  const actions: ServiceYesNoVoteEntryYesNoVoteEntry_View_EditUserSetSelectorDialogActions = {
    getPageTitle,
    backAction,
    setAction,
    filterAction,
    selectorRangeAction,
    ...(customActions ?? {}),
  };

  // ViewModel setup
  const viewModel: ServiceYesNoVoteEntryYesNoVoteEntry_View_EditUserSetSelectorViewModel = {
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
    <ServiceYesNoVoteEntryYesNoVoteEntry_View_EditUserSetSelectorViewModelContext.Provider value={viewModel}>
      <Suspense>
        <div
          id="User/(esm/_88iwkFowEe6_67aMO2jOsw)/TabularReferenceFieldLinkSetSelectorPageDefinition"
          data-page-name="service::YesNoVoteEntry::YesNoVoteEntry_View_Edit::user::LinkSetSelectorPage"
        />
        <ServiceYesNoVoteEntryYesNoVoteEntry_View_EditUserSetSelectorDialogContainer
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
    </ServiceYesNoVoteEntryYesNoVoteEntry_View_EditUserSetSelectorViewModelContext.Provider>
  );
}
