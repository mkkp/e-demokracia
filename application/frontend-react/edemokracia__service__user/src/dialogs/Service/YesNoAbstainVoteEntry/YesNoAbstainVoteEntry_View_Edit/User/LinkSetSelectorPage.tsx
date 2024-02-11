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
  ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditUserSetSelectorDialogActions,
  ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditUserSetSelectorDialogProps,
} from '~/containers/Service/YesNoAbstainVoteEntry/YesNoAbstainVoteEntry_View_Edit/User/SetSelector/ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditUserSetSelectorDialogContainer';
import { useCRUDDialog, useSnacks, useViewData } from '~/hooks';
import type {
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
  ServiceYesNoAbstainVoteEntry,
  ServiceYesNoAbstainVoteEntryStored,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import type { JudoRestResponse } from '~/services/data-api/rest';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { ServiceYesNoAbstainVoteEntryServiceForOwnerImpl } from '~/services/data-axios/ServiceYesNoAbstainVoteEntryServiceForOwnerImpl';
import { cleanUpPayload, isErrorNestedValidationError, processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';

export type ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditUserSetSelectorDialogActionsExtended =
  ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditUserSetSelectorDialogActions & {};

export const SERVICE_YES_NO_ABSTAIN_VOTE_ENTRY_YES_NO_ABSTAIN_VOTE_ENTRY_VIEW_EDIT_USER_LINK_SET_SELECTOR_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_YES_NO_ABSTAIN_VOTE_ENTRY_YES_NO_ABSTAIN_VOTE_ENTRY_VIEW_EDIT_USER_LINK_SET_SELECTOR_PAGE_ACTIONS_HOOK';
export type ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditUserSetSelectorActionsHook = (
  ownerData: any,
  data: ServiceServiceUserStored[],
  editMode: boolean,
  selectionDiff: ServiceServiceUserStored[],
  submit: () => Promise<void>,
) => ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditUserSetSelectorDialogActionsExtended;

export interface ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditUserSetSelectorViewModel
  extends ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditUserSetSelectorDialogProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setEditMode: Dispatch<SetStateAction<boolean>>;
  refresh: () => Promise<void>;
  submit: () => Promise<void>;
  isDraft?: boolean;
}

const ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditUserSetSelectorViewModelContext =
  createContext<ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditUserSetSelectorViewModel>({} as any);
export const useServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditUserSetSelectorViewModel = () => {
  const context = useContext(
    ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditUserSetSelectorViewModelContext,
  );
  if (!context) {
    throw new Error(
      'useServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditUserSetSelectorViewModel must be used within a(n) ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditUserSetSelectorViewModelProvider',
    );
  }
  return context;
};

export const useServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditUserLinkSetSelectorPage = (): ((
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
          <ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditUserLinkSetSelectorPage
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

const ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditUserSetSelectorDialogContainer = lazy(
  () =>
    import(
      '~/containers/Service/YesNoAbstainVoteEntry/YesNoAbstainVoteEntry_View_Edit/User/SetSelector/ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditUserSetSelectorDialogContainer'
    ),
);

export interface ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditUserLinkSetSelectorPageProps {
  ownerData: any;

  alreadySelected: ServiceServiceUserStored[];

  isDraft?: boolean;
  ownerValidation?: (data: ServiceServiceUser) => Promise<void>;
  onClose: () => Promise<void>;
  onSubmit: (result?: ServiceServiceUserStored[], isDraft?: boolean) => Promise<void>;
}

// XMIID: User/(esm/_eryuAFskEe6Mx9dH3yj5gQ)/TabularReferenceFieldLinkSetSelectorPageDefinition
// Name: service::YesNoAbstainVoteEntry::YesNoAbstainVoteEntry_View_Edit::user::LinkSetSelectorPage
export default function ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditUserLinkSetSelectorPage(
  props: ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditUserLinkSetSelectorPageProps,
) {
  const { ownerData, alreadySelected, onClose, onSubmit, isDraft, ownerValidation } = props;

  // Services
  const serviceYesNoAbstainVoteEntryServiceForOwnerImpl = useMemo(
    () => new ServiceYesNoAbstainVoteEntryServiceForOwnerImpl(judoAxiosProvider),
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
    useTrackService<ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditUserSetSelectorActionsHook>(
      `(${OBJECTCLASS}=${SERVICE_YES_NO_ABSTAIN_VOTE_ENTRY_YES_NO_ABSTAIN_VOTE_ENTRY_VIEW_EDIT_USER_LINK_SET_SELECTOR_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
    );
  const customActions:
    | ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditUserSetSelectorDialogActionsExtended
    | undefined = customActionsHook?.(ownerData, data, editMode, selectionDiff, submit);

  // Dialog hooks

  // Action section
  const getPageTitle = (): string => {
    return t('service.YesNoAbstainVoteEntry.YesNoAbstainVoteEntry_View_Edit.user.SetSelector', {
      defaultValue: 'User',
    });
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
      return serviceYesNoAbstainVoteEntryServiceForOwnerImpl.getRangeForOwner(
        cleanUpPayload(ownerData),
        queryCustomizer,
      );
    } catch (error: any) {
      handleError(error);
      return Promise.resolve({ data: [], headers: error.response?.headers, status: error.response?.status });
    }
  };

  const actions: ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditUserSetSelectorDialogActions = {
    getPageTitle,
    backAction,
    setAction,
    filterAction,
    selectorRangeAction,
    ...(customActions ?? {}),
  };

  // ViewModel setup
  const viewModel: ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditUserSetSelectorViewModel = {
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
    <ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditUserSetSelectorViewModelContext.Provider
      value={viewModel}
    >
      <Suspense>
        <div
          id="User/(esm/_eryuAFskEe6Mx9dH3yj5gQ)/TabularReferenceFieldLinkSetSelectorPageDefinition"
          data-page-name="service::YesNoAbstainVoteEntry::YesNoAbstainVoteEntry_View_Edit::user::LinkSetSelectorPage"
        />
        <ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditUserSetSelectorDialogContainer
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
    </ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditUserSetSelectorViewModelContext.Provider>
  );
}
