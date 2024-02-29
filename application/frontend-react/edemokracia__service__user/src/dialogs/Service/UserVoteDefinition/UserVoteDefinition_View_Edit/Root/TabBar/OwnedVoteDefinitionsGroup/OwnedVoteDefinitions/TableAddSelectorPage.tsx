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
  ServiceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarOwnedVoteDefinitionsGroupOwnedVoteDefinitionsAddSelectorDialogActions,
  ServiceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarOwnedVoteDefinitionsGroupOwnedVoteDefinitionsAddSelectorDialogProps,
} from '~/containers/Service/UserVoteDefinition/UserVoteDefinition_View_Edit/Root/TabBar/OwnedVoteDefinitionsGroup/OwnedVoteDefinitions/AddSelector/ServiceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarOwnedVoteDefinitionsGroupOwnedVoteDefinitionsAddSelectorDialogContainer';
import { useCRUDDialog, useSnacks, useViewData } from '~/hooks';
import type {
  IssueScope,
  ServiceUserVoteDefinition,
  ServiceUserVoteDefinitionStored,
  ServiceVoteDefinition,
  ServiceVoteDefinitionQueryCustomizer,
  ServiceVoteDefinitionStored,
  VoteStatus,
  VoteType,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import type { JudoRestResponse } from '~/services/data-api/rest';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { ServiceUserVoteDefinitionServiceForOwnedVoteDefinitionsImpl } from '~/services/data-axios/ServiceUserVoteDefinitionServiceForOwnedVoteDefinitionsImpl';
import { cleanUpPayload, isErrorNestedValidationError, processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';

export type ServiceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarOwnedVoteDefinitionsGroupOwnedVoteDefinitionsAddSelectorDialogActionsExtended =
  ServiceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarOwnedVoteDefinitionsGroupOwnedVoteDefinitionsAddSelectorDialogActions & {};

export const SERVICE_USER_VOTE_DEFINITION_USER_VOTE_DEFINITION_VIEW_EDIT_ROOT_TAB_BAR_OWNED_VOTE_DEFINITIONS_GROUP_OWNED_VOTE_DEFINITIONS_TABLE_ADD_SELECTOR_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_USER_VOTE_DEFINITION_USER_VOTE_DEFINITION_VIEW_EDIT_ROOT_TAB_BAR_OWNED_VOTE_DEFINITIONS_GROUP_OWNED_VOTE_DEFINITIONS_TABLE_ADD_SELECTOR_PAGE_ACTIONS_HOOK';
export type ServiceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarOwnedVoteDefinitionsGroupOwnedVoteDefinitionsAddSelectorActionsHook =
  (
    ownerData: any,
    data: ServiceVoteDefinitionStored[],
    editMode: boolean,
    selectionDiff: ServiceVoteDefinitionStored[],
    submit: () => Promise<void>,
  ) => ServiceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarOwnedVoteDefinitionsGroupOwnedVoteDefinitionsAddSelectorDialogActionsExtended;

export interface ServiceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarOwnedVoteDefinitionsGroupOwnedVoteDefinitionsAddSelectorViewModel
  extends ServiceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarOwnedVoteDefinitionsGroupOwnedVoteDefinitionsAddSelectorDialogProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setEditMode: Dispatch<SetStateAction<boolean>>;
  refresh: () => Promise<void>;
  submit: () => Promise<void>;
  isDraft?: boolean;
}

const ServiceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarOwnedVoteDefinitionsGroupOwnedVoteDefinitionsAddSelectorViewModelContext =
  createContext<ServiceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarOwnedVoteDefinitionsGroupOwnedVoteDefinitionsAddSelectorViewModel>(
    {} as any,
  );
export const useServiceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarOwnedVoteDefinitionsGroupOwnedVoteDefinitionsAddSelectorViewModel =
  () => {
    const context = useContext(
      ServiceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarOwnedVoteDefinitionsGroupOwnedVoteDefinitionsAddSelectorViewModelContext,
    );
    if (!context) {
      throw new Error(
        'useServiceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarOwnedVoteDefinitionsGroupOwnedVoteDefinitionsAddSelectorViewModel must be used within a(n) ServiceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarOwnedVoteDefinitionsGroupOwnedVoteDefinitionsAddSelectorViewModelProvider',
      );
    }
    return context;
  };

export const useServiceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarOwnedVoteDefinitionsGroupOwnedVoteDefinitionsTableAddSelectorPage =
  (): ((
    ownerData: any,
    alreadySelected: ServiceVoteDefinitionStored[],
    isDraft?: boolean,
  ) => Promise<DialogResult<ServiceVoteDefinitionStored[]>>) => {
    const [createDialog, closeDialog] = useDialog();

    return (ownerData: any, alreadySelected: ServiceVoteDefinitionStored[], isDraft?: boolean) =>
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
            <ServiceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarOwnedVoteDefinitionsGroupOwnedVoteDefinitionsTableAddSelectorPage
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

const ServiceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarOwnedVoteDefinitionsGroupOwnedVoteDefinitionsAddSelectorDialogContainer =
  lazy(
    () =>
      import(
        '~/containers/Service/UserVoteDefinition/UserVoteDefinition_View_Edit/Root/TabBar/OwnedVoteDefinitionsGroup/OwnedVoteDefinitions/AddSelector/ServiceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarOwnedVoteDefinitionsGroupOwnedVoteDefinitionsAddSelectorDialogContainer'
      ),
  );

export interface ServiceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarOwnedVoteDefinitionsGroupOwnedVoteDefinitionsTableAddSelectorPageProps {
  ownerData: any;

  alreadySelected: ServiceVoteDefinitionStored[];

  isDraft?: boolean;
  ownerValidation?: (data: ServiceVoteDefinition) => Promise<void>;
  onClose: () => Promise<void>;
  onSubmit: (result?: ServiceVoteDefinitionStored[], isDraft?: boolean, openCreated?: boolean) => Promise<void>;
}

// XMIID: User/(esm/_GBBigF5HEe6vsex_cZNQbQ)/TabularReferenceFieldTableAddSelectorPageDefinition
// Name: service::UserVoteDefinition::UserVoteDefinition_View_Edit::root::tabBar::OwnedVoteDefinitionsGroup::ownedVoteDefinitions::TableAddSelectorPage
export default function ServiceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarOwnedVoteDefinitionsGroupOwnedVoteDefinitionsTableAddSelectorPage(
  props: ServiceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarOwnedVoteDefinitionsGroupOwnedVoteDefinitionsTableAddSelectorPageProps,
) {
  const { ownerData, alreadySelected, onClose, onSubmit, isDraft, ownerValidation } = props;

  // Services
  const serviceUserVoteDefinitionServiceForOwnedVoteDefinitionsImpl = useMemo(
    () => new ServiceUserVoteDefinitionServiceForOwnedVoteDefinitionsImpl(judoAxiosProvider),
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
  const [data, setData] = useState<ServiceVoteDefinitionStored[]>([]);
  const [selectionDiff, setSelectionDiff] = useState<ServiceVoteDefinitionStored[]>([]);

  // Private actions
  const submit = async () => {};
  const refresh = async () => {
    setRefreshCounter((prev) => prev + 1);
  };

  // Validation
  const validate: (data: ServiceVoteDefinition) => Promise<void> = async (data) => {};

  // Pandino Action overrides
  const { service: customActionsHook } =
    useTrackService<ServiceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarOwnedVoteDefinitionsGroupOwnedVoteDefinitionsAddSelectorActionsHook>(
      `(${OBJECTCLASS}=${SERVICE_USER_VOTE_DEFINITION_USER_VOTE_DEFINITION_VIEW_EDIT_ROOT_TAB_BAR_OWNED_VOTE_DEFINITIONS_GROUP_OWNED_VOTE_DEFINITIONS_TABLE_ADD_SELECTOR_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
    );
  const customActions:
    | ServiceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarOwnedVoteDefinitionsGroupOwnedVoteDefinitionsAddSelectorDialogActionsExtended
    | undefined = customActionsHook?.(ownerData, data, editMode, selectionDiff, submit);

  // Dialog hooks

  // Action section
  const getPageTitle = (): string => {
    return t(
      'service.UserVoteDefinition.UserVoteDefinition_View_Edit.root.tabBar.OwnedVoteDefinitionsGroup.ownedVoteDefinitions.AddSelector',
      { defaultValue: '' },
    );
  };
  const addAction = async (selected: ServiceVoteDefinitionStored[]) => {
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
    queryCustomizer: ServiceVoteDefinitionQueryCustomizer,
  ): Promise<JudoRestResponse<ServiceVoteDefinitionStored[]>> => {
    try {
      return serviceUserVoteDefinitionServiceForOwnedVoteDefinitionsImpl.getRangeForOwnedVoteDefinitions(
        cleanUpPayload(ownerData),
        queryCustomizer,
      );
    } catch (error: any) {
      handleError(error);
      return Promise.resolve({ data: [], headers: error.response?.headers, status: error.response?.status });
    }
  };

  const actions: ServiceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarOwnedVoteDefinitionsGroupOwnedVoteDefinitionsAddSelectorDialogActions =
    {
      getPageTitle,
      addAction,
      backAction,
      filterAction,
      selectorRangeAction,
      ...(customActions ?? {}),
    };

  // ViewModel setup
  const viewModel: ServiceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarOwnedVoteDefinitionsGroupOwnedVoteDefinitionsAddSelectorViewModel =
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
    <ServiceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarOwnedVoteDefinitionsGroupOwnedVoteDefinitionsAddSelectorViewModelContext.Provider
      value={viewModel}
    >
      <Suspense>
        <div
          id="User/(esm/_GBBigF5HEe6vsex_cZNQbQ)/TabularReferenceFieldTableAddSelectorPageDefinition"
          data-page-name="service::UserVoteDefinition::UserVoteDefinition_View_Edit::root::tabBar::OwnedVoteDefinitionsGroup::ownedVoteDefinitions::TableAddSelectorPage"
        />
        <ServiceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarOwnedVoteDefinitionsGroupOwnedVoteDefinitionsAddSelectorDialogContainer
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
    </ServiceUserVoteDefinitionUserVoteDefinition_View_EditRootTabBarOwnedVoteDefinitionsGroupOwnedVoteDefinitionsAddSelectorViewModelContext.Provider>
  );
}
