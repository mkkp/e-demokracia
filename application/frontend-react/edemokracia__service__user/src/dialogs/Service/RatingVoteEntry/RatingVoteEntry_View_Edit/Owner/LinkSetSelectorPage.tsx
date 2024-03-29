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
  ServiceRatingVoteEntryRatingVoteEntry_View_EditOwnerSetSelectorDialogActions,
  ServiceRatingVoteEntryRatingVoteEntry_View_EditOwnerSetSelectorDialogProps,
} from '~/containers/Service/RatingVoteEntry/RatingVoteEntry_View_Edit/Owner/SetSelector/ServiceRatingVoteEntryRatingVoteEntry_View_EditOwnerSetSelectorDialogContainer';
import { useCRUDDialog, useSnacks, useViewData } from '~/hooks';
import type {
  ServiceRatingVoteEntry,
  ServiceRatingVoteEntryStored,
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import type { JudoRestResponse } from '~/services/data-api/rest';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { ServiceRatingVoteEntryServiceForOwnerImpl } from '~/services/data-axios/ServiceRatingVoteEntryServiceForOwnerImpl';
import { cleanUpPayload, isErrorNestedValidationError, processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';

export type ServiceRatingVoteEntryRatingVoteEntry_View_EditOwnerSetSelectorDialogActionsExtended =
  ServiceRatingVoteEntryRatingVoteEntry_View_EditOwnerSetSelectorDialogActions & {};

export const SERVICE_RATING_VOTE_ENTRY_RATING_VOTE_ENTRY_VIEW_EDIT_OWNER_LINK_SET_SELECTOR_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_RATING_VOTE_ENTRY_RATING_VOTE_ENTRY_VIEW_EDIT_OWNER_LINK_SET_SELECTOR_PAGE_ACTIONS_HOOK';
export type ServiceRatingVoteEntryRatingVoteEntry_View_EditOwnerSetSelectorActionsHook = (
  ownerData: any,
  data: ServiceServiceUserStored[],
  editMode: boolean,
  selectionDiff: ServiceServiceUserStored[],
  submit: () => Promise<void>,
) => ServiceRatingVoteEntryRatingVoteEntry_View_EditOwnerSetSelectorDialogActionsExtended;

export interface ServiceRatingVoteEntryRatingVoteEntry_View_EditOwnerSetSelectorViewModel
  extends ServiceRatingVoteEntryRatingVoteEntry_View_EditOwnerSetSelectorDialogProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setEditMode: Dispatch<SetStateAction<boolean>>;
  refresh: () => Promise<void>;
  submit: () => Promise<void>;
  isDraft?: boolean;
}

const ServiceRatingVoteEntryRatingVoteEntry_View_EditOwnerSetSelectorViewModelContext =
  createContext<ServiceRatingVoteEntryRatingVoteEntry_View_EditOwnerSetSelectorViewModel>({} as any);
export const useServiceRatingVoteEntryRatingVoteEntry_View_EditOwnerSetSelectorViewModel = () => {
  const context = useContext(ServiceRatingVoteEntryRatingVoteEntry_View_EditOwnerSetSelectorViewModelContext);
  if (!context) {
    throw new Error(
      'useServiceRatingVoteEntryRatingVoteEntry_View_EditOwnerSetSelectorViewModel must be used within a(n) ServiceRatingVoteEntryRatingVoteEntry_View_EditOwnerSetSelectorViewModelProvider',
    );
  }
  return context;
};

export const useServiceRatingVoteEntryRatingVoteEntry_View_EditOwnerLinkSetSelectorPage = (): ((
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
          <ServiceRatingVoteEntryRatingVoteEntry_View_EditOwnerLinkSetSelectorPage
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

const ServiceRatingVoteEntryRatingVoteEntry_View_EditOwnerSetSelectorDialogContainer = lazy(
  () =>
    import(
      '~/containers/Service/RatingVoteEntry/RatingVoteEntry_View_Edit/Owner/SetSelector/ServiceRatingVoteEntryRatingVoteEntry_View_EditOwnerSetSelectorDialogContainer'
    ),
);

export interface ServiceRatingVoteEntryRatingVoteEntry_View_EditOwnerLinkSetSelectorPageProps {
  ownerData: any;

  alreadySelected: ServiceServiceUserStored[];

  isDraft?: boolean;
  ownerValidation?: (data: ServiceServiceUser) => Promise<void>;
  onClose: () => Promise<void>;
  onSubmit: (result?: ServiceServiceUserStored[], isDraft?: boolean, openCreated?: boolean) => Promise<void>;
}

// XMIID: User/(esm/_L_YV8FuXEe6T042_LMmSdQ)/TabularReferenceFieldLinkSetSelectorPageDefinition
// Name: service::RatingVoteEntry::RatingVoteEntry_View_Edit::owner::LinkSetSelectorPage
export default function ServiceRatingVoteEntryRatingVoteEntry_View_EditOwnerLinkSetSelectorPage(
  props: ServiceRatingVoteEntryRatingVoteEntry_View_EditOwnerLinkSetSelectorPageProps,
) {
  const { ownerData, alreadySelected, onClose, onSubmit, isDraft, ownerValidation } = props;

  // Services
  const serviceRatingVoteEntryServiceForOwnerImpl = useMemo(
    () => new ServiceRatingVoteEntryServiceForOwnerImpl(judoAxiosProvider),
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
    useTrackService<ServiceRatingVoteEntryRatingVoteEntry_View_EditOwnerSetSelectorActionsHook>(
      `(${OBJECTCLASS}=${SERVICE_RATING_VOTE_ENTRY_RATING_VOTE_ENTRY_VIEW_EDIT_OWNER_LINK_SET_SELECTOR_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
    );
  const customActions:
    | ServiceRatingVoteEntryRatingVoteEntry_View_EditOwnerSetSelectorDialogActionsExtended
    | undefined = customActionsHook?.(ownerData, data, editMode, selectionDiff, submit);

  // Dialog hooks

  // Action section
  const getPageTitle = (): string => {
    return t('service.RatingVoteEntry.RatingVoteEntry_View_Edit.owner.SetSelector', { defaultValue: 'Owner' });
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
      return serviceRatingVoteEntryServiceForOwnerImpl.getRangeForOwner(cleanUpPayload(ownerData), queryCustomizer);
    } catch (error: any) {
      handleError(error);
      return Promise.resolve({ data: [], headers: error.response?.headers, status: error.response?.status });
    }
  };

  const actions: ServiceRatingVoteEntryRatingVoteEntry_View_EditOwnerSetSelectorDialogActions = {
    getPageTitle,
    backAction,
    setAction,
    filterAction,
    selectorRangeAction,
    ...(customActions ?? {}),
  };

  // ViewModel setup
  const viewModel: ServiceRatingVoteEntryRatingVoteEntry_View_EditOwnerSetSelectorViewModel = {
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
    <ServiceRatingVoteEntryRatingVoteEntry_View_EditOwnerSetSelectorViewModelContext.Provider value={viewModel}>
      <Suspense>
        <div
          id="User/(esm/_L_YV8FuXEe6T042_LMmSdQ)/TabularReferenceFieldLinkSetSelectorPageDefinition"
          data-page-name="service::RatingVoteEntry::RatingVoteEntry_View_Edit::owner::LinkSetSelectorPage"
        />
        <ServiceRatingVoteEntryRatingVoteEntry_View_EditOwnerSetSelectorDialogContainer
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
    </ServiceRatingVoteEntryRatingVoteEntry_View_EditOwnerSetSelectorViewModelContext.Provider>
  );
}
