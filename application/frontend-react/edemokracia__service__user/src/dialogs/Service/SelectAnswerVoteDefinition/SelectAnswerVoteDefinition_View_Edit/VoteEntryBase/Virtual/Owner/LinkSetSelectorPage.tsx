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
  ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntryBaseVirtualOwnerSetSelectorDialogActions,
  ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntryBaseVirtualOwnerSetSelectorDialogProps,
} from '~/containers/Service/SelectAnswerVoteDefinition/SelectAnswerVoteDefinition_View_Edit/VoteEntryBase/Virtual/Owner/SetSelector/ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntryBaseVirtualOwnerSetSelectorDialogContainer';
import { useCRUDDialog, useSnacks, useViewData } from '~/hooks';
import type {
  ServiceSelectAnswerVoteDefinition,
  ServiceSelectAnswerVoteDefinitionStored,
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import type { JudoRestResponse } from '~/services/data-api/rest';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { ServiceSelectAnswerVoteDefinitionServiceForOwnerImpl } from '~/services/data-axios/ServiceSelectAnswerVoteDefinitionServiceForOwnerImpl';
import { cleanUpPayload, isErrorNestedValidationError, processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';

export type ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntryBaseVirtualOwnerSetSelectorDialogActionsExtended =
  ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntryBaseVirtualOwnerSetSelectorDialogActions & {};

export const SERVICE_SELECT_ANSWER_VOTE_DEFINITION_SELECT_ANSWER_VOTE_DEFINITION_VIEW_EDIT_VOTE_ENTRY_BASE_VIRTUAL_OWNER_LINK_SET_SELECTOR_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_SELECT_ANSWER_VOTE_DEFINITION_SELECT_ANSWER_VOTE_DEFINITION_VIEW_EDIT_VOTE_ENTRY_BASE_VIRTUAL_OWNER_LINK_SET_SELECTOR_PAGE_ACTIONS_HOOK';
export type ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntryBaseVirtualOwnerSetSelectorActionsHook =
  (
    ownerData: any,
    data: ServiceServiceUserStored[],
    editMode: boolean,
    selectionDiff: ServiceServiceUserStored[],
    submit: () => Promise<void>,
  ) => ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntryBaseVirtualOwnerSetSelectorDialogActionsExtended;

export interface ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntryBaseVirtualOwnerSetSelectorViewModel
  extends ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntryBaseVirtualOwnerSetSelectorDialogProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setEditMode: Dispatch<SetStateAction<boolean>>;
  refresh: () => Promise<void>;
  submit: () => Promise<void>;
  isDraft?: boolean;
}

const ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntryBaseVirtualOwnerSetSelectorViewModelContext =
  createContext<ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntryBaseVirtualOwnerSetSelectorViewModel>(
    {} as any,
  );
export const useServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntryBaseVirtualOwnerSetSelectorViewModel =
  () => {
    const context = useContext(
      ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntryBaseVirtualOwnerSetSelectorViewModelContext,
    );
    if (!context) {
      throw new Error(
        'useServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntryBaseVirtualOwnerSetSelectorViewModel must be used within a(n) ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntryBaseVirtualOwnerSetSelectorViewModelProvider',
      );
    }
    return context;
  };

export const useServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntryBaseVirtualOwnerLinkSetSelectorPage =
  (): ((
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
            <ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntryBaseVirtualOwnerLinkSetSelectorPage
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

const ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntryBaseVirtualOwnerSetSelectorDialogContainer =
  lazy(
    () =>
      import(
        '~/containers/Service/SelectAnswerVoteDefinition/SelectAnswerVoteDefinition_View_Edit/VoteEntryBase/Virtual/Owner/SetSelector/ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntryBaseVirtualOwnerSetSelectorDialogContainer'
      ),
  );

export interface ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntryBaseVirtualOwnerLinkSetSelectorPageProps {
  ownerData: any;

  alreadySelected: ServiceServiceUserStored[];

  isDraft?: boolean;
  ownerValidation?: (data: ServiceServiceUser) => Promise<void>;
  onClose: () => Promise<void>;
  onSubmit: (result?: ServiceServiceUserStored[], isDraft?: boolean, openCreated?: boolean) => Promise<void>;
}

// XMIID: User/(esm/_EKuyIHz6Ee6Q9LyUVjs1Qw)/TabularReferenceFieldLinkSetSelectorPageDefinition
// Name: service::SelectAnswerVoteDefinition::SelectAnswerVoteDefinition_View_Edit::VoteEntryBase::virtual::owner::LinkSetSelectorPage
export default function ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntryBaseVirtualOwnerLinkSetSelectorPage(
  props: ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntryBaseVirtualOwnerLinkSetSelectorPageProps,
) {
  const { ownerData, alreadySelected, onClose, onSubmit, isDraft, ownerValidation } = props;

  // Services
  const serviceSelectAnswerVoteDefinitionServiceForOwnerImpl = useMemo(
    () => new ServiceSelectAnswerVoteDefinitionServiceForOwnerImpl(judoAxiosProvider),
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
    useTrackService<ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntryBaseVirtualOwnerSetSelectorActionsHook>(
      `(${OBJECTCLASS}=${SERVICE_SELECT_ANSWER_VOTE_DEFINITION_SELECT_ANSWER_VOTE_DEFINITION_VIEW_EDIT_VOTE_ENTRY_BASE_VIRTUAL_OWNER_LINK_SET_SELECTOR_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
    );
  const customActions:
    | ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntryBaseVirtualOwnerSetSelectorDialogActionsExtended
    | undefined = customActionsHook?.(ownerData, data, editMode, selectionDiff, submit);

  // Dialog hooks

  // Action section
  const getPageTitle = (): string => {
    return t(
      'service.SelectAnswerVoteDefinition.SelectAnswerVoteDefinition_View_Edit.VoteEntryBase.virtual.owner.SetSelector',
      { defaultValue: 'Owner' },
    );
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
      return serviceSelectAnswerVoteDefinitionServiceForOwnerImpl.getRangeForOwner(
        cleanUpPayload(ownerData),
        queryCustomizer,
      );
    } catch (error: any) {
      handleError(error);
      return Promise.resolve({ data: [], headers: error.response?.headers, status: error.response?.status });
    }
  };

  const actions: ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntryBaseVirtualOwnerSetSelectorDialogActions =
    {
      getPageTitle,
      backAction,
      setAction,
      filterAction,
      selectorRangeAction,
      ...(customActions ?? {}),
    };

  // ViewModel setup
  const viewModel: ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntryBaseVirtualOwnerSetSelectorViewModel =
    {
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
    <ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntryBaseVirtualOwnerSetSelectorViewModelContext.Provider
      value={viewModel}
    >
      <Suspense>
        <div
          id="User/(esm/_EKuyIHz6Ee6Q9LyUVjs1Qw)/TabularReferenceFieldLinkSetSelectorPageDefinition"
          data-page-name="service::SelectAnswerVoteDefinition::SelectAnswerVoteDefinition_View_Edit::VoteEntryBase::virtual::owner::LinkSetSelectorPage"
        />
        <ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntryBaseVirtualOwnerSetSelectorDialogContainer
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
    </ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntryBaseVirtualOwnerSetSelectorViewModelContext.Provider>
  );
}
