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
  ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditVoteEntryBaseVirtualOwnerSetSelectorDialogActions,
  ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditVoteEntryBaseVirtualOwnerSetSelectorDialogProps,
} from '~/containers/Service/RatingVoteDefinition/RatingVoteDefinition_View_Edit/VoteEntryBase/Virtual/Owner/SetSelector/ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditVoteEntryBaseVirtualOwnerSetSelectorDialogContainer';
import { useCRUDDialog, useSnacks, useViewData } from '~/hooks';
import type {
  ServiceRatingVoteDefinition,
  ServiceRatingVoteDefinitionStored,
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import type { JudoRestResponse } from '~/services/data-api/rest';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { ServiceRatingVoteDefinitionServiceForOwnerImpl } from '~/services/data-axios/ServiceRatingVoteDefinitionServiceForOwnerImpl';
import { cleanUpPayload, isErrorNestedValidationError, processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';

export type ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditVoteEntryBaseVirtualOwnerSetSelectorDialogActionsExtended =
  ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditVoteEntryBaseVirtualOwnerSetSelectorDialogActions & {};

export const SERVICE_RATING_VOTE_DEFINITION_RATING_VOTE_DEFINITION_VIEW_EDIT_VOTE_ENTRY_BASE_VIRTUAL_OWNER_LINK_SET_SELECTOR_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_RATING_VOTE_DEFINITION_RATING_VOTE_DEFINITION_VIEW_EDIT_VOTE_ENTRY_BASE_VIRTUAL_OWNER_LINK_SET_SELECTOR_PAGE_ACTIONS_HOOK';
export type ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditVoteEntryBaseVirtualOwnerSetSelectorActionsHook = (
  ownerData: any,
  data: ServiceServiceUserStored[],
  editMode: boolean,
  selectionDiff: ServiceServiceUserStored[],
  submit: () => Promise<void>,
) => ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditVoteEntryBaseVirtualOwnerSetSelectorDialogActionsExtended;

export interface ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditVoteEntryBaseVirtualOwnerSetSelectorViewModel
  extends ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditVoteEntryBaseVirtualOwnerSetSelectorDialogProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setEditMode: Dispatch<SetStateAction<boolean>>;
  refresh: () => Promise<void>;
  submit: () => Promise<void>;
  isDraft?: boolean;
}

const ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditVoteEntryBaseVirtualOwnerSetSelectorViewModelContext =
  createContext<ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditVoteEntryBaseVirtualOwnerSetSelectorViewModel>(
    {} as any,
  );
export const useServiceRatingVoteDefinitionRatingVoteDefinition_View_EditVoteEntryBaseVirtualOwnerSetSelectorViewModel =
  () => {
    const context = useContext(
      ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditVoteEntryBaseVirtualOwnerSetSelectorViewModelContext,
    );
    if (!context) {
      throw new Error(
        'useServiceRatingVoteDefinitionRatingVoteDefinition_View_EditVoteEntryBaseVirtualOwnerSetSelectorViewModel must be used within a(n) ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditVoteEntryBaseVirtualOwnerSetSelectorViewModelProvider',
      );
    }
    return context;
  };

export const useServiceRatingVoteDefinitionRatingVoteDefinition_View_EditVoteEntryBaseVirtualOwnerLinkSetSelectorPage =
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
            <ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditVoteEntryBaseVirtualOwnerLinkSetSelectorPage
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

const ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditVoteEntryBaseVirtualOwnerSetSelectorDialogContainer =
  lazy(
    () =>
      import(
        '~/containers/Service/RatingVoteDefinition/RatingVoteDefinition_View_Edit/VoteEntryBase/Virtual/Owner/SetSelector/ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditVoteEntryBaseVirtualOwnerSetSelectorDialogContainer'
      ),
  );

export interface ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditVoteEntryBaseVirtualOwnerLinkSetSelectorPageProps {
  ownerData: any;

  alreadySelected: ServiceServiceUserStored[];

  isDraft?: boolean;
  ownerValidation?: (data: ServiceServiceUser) => Promise<void>;
  onClose: () => Promise<void>;
  onSubmit: (result?: ServiceServiceUserStored[], isDraft?: boolean, openCreated?: boolean) => Promise<void>;
}

// XMIID: User/(esm/_fOODEHz5Ee6Q9LyUVjs1Qw)/TabularReferenceFieldLinkSetSelectorPageDefinition
// Name: service::RatingVoteDefinition::RatingVoteDefinition_View_Edit::VoteEntryBase::virtual::owner::LinkSetSelectorPage
export default function ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditVoteEntryBaseVirtualOwnerLinkSetSelectorPage(
  props: ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditVoteEntryBaseVirtualOwnerLinkSetSelectorPageProps,
) {
  const { ownerData, alreadySelected, onClose, onSubmit, isDraft, ownerValidation } = props;

  // Services
  const serviceRatingVoteDefinitionServiceForOwnerImpl = useMemo(
    () => new ServiceRatingVoteDefinitionServiceForOwnerImpl(judoAxiosProvider),
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
    useTrackService<ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditVoteEntryBaseVirtualOwnerSetSelectorActionsHook>(
      `(${OBJECTCLASS}=${SERVICE_RATING_VOTE_DEFINITION_RATING_VOTE_DEFINITION_VIEW_EDIT_VOTE_ENTRY_BASE_VIRTUAL_OWNER_LINK_SET_SELECTOR_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
    );
  const customActions:
    | ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditVoteEntryBaseVirtualOwnerSetSelectorDialogActionsExtended
    | undefined = customActionsHook?.(ownerData, data, editMode, selectionDiff, submit);

  // Dialog hooks

  // Action section
  const getPageTitle = (): string => {
    return t('service.RatingVoteDefinition.RatingVoteDefinition_View_Edit.VoteEntryBase.virtual.owner.SetSelector', {
      defaultValue: 'Owner',
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
      return serviceRatingVoteDefinitionServiceForOwnerImpl.getRangeForOwner(
        cleanUpPayload(ownerData),
        queryCustomizer,
      );
    } catch (error: any) {
      handleError(error);
      return Promise.resolve({ data: [], headers: error.response?.headers, status: error.response?.status });
    }
  };

  const actions: ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditVoteEntryBaseVirtualOwnerSetSelectorDialogActions =
    {
      getPageTitle,
      backAction,
      setAction,
      filterAction,
      selectorRangeAction,
      ...(customActions ?? {}),
    };

  // ViewModel setup
  const viewModel: ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditVoteEntryBaseVirtualOwnerSetSelectorViewModel =
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
    <ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditVoteEntryBaseVirtualOwnerSetSelectorViewModelContext.Provider
      value={viewModel}
    >
      <Suspense>
        <div
          id="User/(esm/_fOODEHz5Ee6Q9LyUVjs1Qw)/TabularReferenceFieldLinkSetSelectorPageDefinition"
          data-page-name="service::RatingVoteDefinition::RatingVoteDefinition_View_Edit::VoteEntryBase::virtual::owner::LinkSetSelectorPage"
        />
        <ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditVoteEntryBaseVirtualOwnerSetSelectorDialogContainer
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
    </ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditVoteEntryBaseVirtualOwnerSetSelectorViewModelContext.Provider>
  );
}
