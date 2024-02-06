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
  ServiceSimpleVoteSimpleVote_TableAddSelectorDialogActions,
  ServiceSimpleVoteSimpleVote_TableAddSelectorDialogProps,
} from '~/containers/Service/SimpleVote/SimpleVote_Table/AddSelector/ServiceSimpleVoteSimpleVote_TableAddSelectorDialogContainer';
import { useCRUDDialog, useSnacks, useViewData } from '~/hooks';
import type {
  ServiceServiceUser,
  ServiceServiceUserStored,
  ServiceSimpleVote,
  ServiceSimpleVoteQueryCustomizer,
  ServiceSimpleVoteStored,
  SimpleVoteType,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { ServiceServiceUserServiceForVotesImpl } from '~/services/data-axios/ServiceServiceUserServiceForVotesImpl';
import { cleanUpPayload, isErrorNestedValidationError, processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';

export type ServiceSimpleVoteSimpleVote_TableAddSelectorDialogActionsExtended =
  ServiceSimpleVoteSimpleVote_TableAddSelectorDialogActions & {};

export const SERVICE_SERVICE_USER_VOTES_ADD_SELECTOR_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_SERVICE_USER_VOTES_ADD_SELECTOR_PAGE_ACTIONS_HOOK';
export type ServiceSimpleVoteSimpleVote_TableAddSelectorActionsHook = (
  ownerData: any,
  data: ServiceSimpleVoteStored[],
  editMode: boolean,
  selectionDiff: ServiceSimpleVoteStored[],
  submit: () => Promise<void>,
) => ServiceSimpleVoteSimpleVote_TableAddSelectorDialogActionsExtended;

export interface ServiceSimpleVoteSimpleVote_TableAddSelectorViewModel
  extends ServiceSimpleVoteSimpleVote_TableAddSelectorDialogProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setEditMode: Dispatch<SetStateAction<boolean>>;
  refresh: () => Promise<void>;
  submit: () => Promise<void>;
  isDraft?: boolean;
}

const ServiceSimpleVoteSimpleVote_TableAddSelectorViewModelContext =
  createContext<ServiceSimpleVoteSimpleVote_TableAddSelectorViewModel>({} as any);
export const useServiceSimpleVoteSimpleVote_TableAddSelectorViewModel = () => {
  const context = useContext(ServiceSimpleVoteSimpleVote_TableAddSelectorViewModelContext);
  if (!context) {
    throw new Error(
      'useServiceSimpleVoteSimpleVote_TableAddSelectorViewModel must be used within a(n) ServiceSimpleVoteSimpleVote_TableAddSelectorViewModelProvider',
    );
  }
  return context;
};

export const useServiceServiceUserVotesAddSelectorPage = (): ((
  ownerData: any,
  alreadySelected: ServiceSimpleVoteStored[],
  isDraft?: boolean,
) => Promise<DialogResult<ServiceSimpleVoteStored[]>>) => {
  const [createDialog, closeDialog] = useDialog();

  return (ownerData: any, alreadySelected: ServiceSimpleVoteStored[], isDraft?: boolean) =>
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
          <ServiceServiceUserVotesAddSelectorPage
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

const ServiceSimpleVoteSimpleVote_TableAddSelectorDialogContainer = lazy(
  () =>
    import(
      '~/containers/Service/SimpleVote/SimpleVote_Table/AddSelector/ServiceSimpleVoteSimpleVote_TableAddSelectorDialogContainer'
    ),
);

export interface ServiceServiceUserVotesAddSelectorPageProps {
  ownerData: any;

  alreadySelected: ServiceSimpleVoteStored[];

  isDraft?: boolean;
  ownerValidation?: (data: ServiceSimpleVote) => Promise<void>;
  onClose: () => Promise<void>;
  onSubmit: (result?: ServiceSimpleVoteStored[], isDraft?: boolean) => Promise<void>;
}

// XMIID: User/(esm/_qcneEGksEe25ONJ3V89cVA)/RelationFeatureTableAddSelectorPageDefinition
// Name: service::ServiceUser::votes::AddSelectorPage
export default function ServiceServiceUserVotesAddSelectorPage(props: ServiceServiceUserVotesAddSelectorPageProps) {
  const { ownerData, alreadySelected, onClose, onSubmit, isDraft, ownerValidation } = props;

  // Services
  const serviceServiceUserServiceForVotesImpl = useMemo(
    () => new ServiceServiceUserServiceForVotesImpl(judoAxiosProvider),
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
  const [data, setData] = useState<ServiceSimpleVoteStored[]>([]);
  const [selectionDiff, setSelectionDiff] = useState<ServiceSimpleVoteStored[]>([]);

  // Private actions
  const submit = async () => {};
  const refresh = async () => {
    setRefreshCounter((prev) => prev + 1);
  };

  // Validation
  const validate: (data: ServiceSimpleVote) => Promise<void> = async (data) => {};

  // Pandino Action overrides
  const { service: customActionsHook } = useTrackService<ServiceSimpleVoteSimpleVote_TableAddSelectorActionsHook>(
    `(${OBJECTCLASS}=${SERVICE_SERVICE_USER_VOTES_ADD_SELECTOR_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const customActions: ServiceSimpleVoteSimpleVote_TableAddSelectorDialogActionsExtended | undefined =
    customActionsHook?.(ownerData, data, editMode, selectionDiff, submit);

  // Dialog hooks

  // Action section
  const getPageTitle = (): string => {
    return t('service.SimpleVote.SimpleVote_Table.AddSelector', { defaultValue: 'SimpleVote Table' });
  };
  const addAction = async (selected: ServiceSimpleVoteStored[]) => {
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
    queryCustomizer: ServiceSimpleVoteQueryCustomizer,
  ): Promise<ServiceSimpleVoteStored[]> => {
    try {
      return serviceServiceUserServiceForVotesImpl.getRangeForVotes(cleanUpPayload(ownerData), queryCustomizer);
    } catch (error) {
      handleError(error);
      return Promise.resolve([]);
    }
  };

  const actions: ServiceSimpleVoteSimpleVote_TableAddSelectorDialogActions = {
    getPageTitle,
    addAction,
    backAction,
    filterAction,
    selectorRangeAction,
    ...(customActions ?? {}),
  };

  // ViewModel setup
  const viewModel: ServiceSimpleVoteSimpleVote_TableAddSelectorViewModel = {
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
    <ServiceSimpleVoteSimpleVote_TableAddSelectorViewModelContext.Provider value={viewModel}>
      <Suspense>
        <div
          id="User/(esm/_qcneEGksEe25ONJ3V89cVA)/RelationFeatureTableAddSelectorPageDefinition"
          data-page-name="service::ServiceUser::votes::AddSelectorPage"
        />
        <ServiceSimpleVoteSimpleVote_TableAddSelectorDialogContainer
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
    </ServiceSimpleVoteSimpleVote_TableAddSelectorViewModelContext.Provider>
  );
}
