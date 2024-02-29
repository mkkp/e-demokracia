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
  ServiceDashboardDashboard_View_EditSelectorVotesVotesTabBarMyVotesGroupOwnedVoteDefinitionsAddSelectorDialogActions,
  ServiceDashboardDashboard_View_EditSelectorVotesVotesTabBarMyVotesGroupOwnedVoteDefinitionsAddSelectorDialogProps,
} from '~/containers/Service/Dashboard/Dashboard_View_Edit/Selector/Votes/VotesTabBar/MyVotesGroup/OwnedVoteDefinitions/AddSelector/ServiceDashboardDashboard_View_EditSelectorVotesVotesTabBarMyVotesGroupOwnedVoteDefinitionsAddSelectorDialogContainer';
import { useCRUDDialog, useSnacks, useViewData } from '~/hooks';
import type {
  IssueScope,
  ServiceDashboard,
  ServiceDashboardStored,
  ServiceVoteDefinition,
  ServiceVoteDefinitionQueryCustomizer,
  ServiceVoteDefinitionStored,
  VoteStatus,
  VoteType,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import type { JudoRestResponse } from '~/services/data-api/rest';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { ServiceDashboardServiceForOwnedVoteDefinitionsImpl } from '~/services/data-axios/ServiceDashboardServiceForOwnedVoteDefinitionsImpl';
import { cleanUpPayload, isErrorNestedValidationError, processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';

export type ServiceDashboardDashboard_View_EditSelectorVotesVotesTabBarMyVotesGroupOwnedVoteDefinitionsAddSelectorDialogActionsExtended =
  ServiceDashboardDashboard_View_EditSelectorVotesVotesTabBarMyVotesGroupOwnedVoteDefinitionsAddSelectorDialogActions & {};

export const SERVICE_DASHBOARD_DASHBOARD_VIEW_EDIT_SELECTOR_VOTES_VOTES_TAB_BAR_MY_VOTES_GROUP_OWNED_VOTE_DEFINITIONS_TABLE_ADD_SELECTOR_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_DASHBOARD_DASHBOARD_VIEW_EDIT_SELECTOR_VOTES_VOTES_TAB_BAR_MY_VOTES_GROUP_OWNED_VOTE_DEFINITIONS_TABLE_ADD_SELECTOR_PAGE_ACTIONS_HOOK';
export type ServiceDashboardDashboard_View_EditSelectorVotesVotesTabBarMyVotesGroupOwnedVoteDefinitionsAddSelectorActionsHook =
  (
    ownerData: any,
    data: ServiceVoteDefinitionStored[],
    editMode: boolean,
    selectionDiff: ServiceVoteDefinitionStored[],
    submit: () => Promise<void>,
  ) => ServiceDashboardDashboard_View_EditSelectorVotesVotesTabBarMyVotesGroupOwnedVoteDefinitionsAddSelectorDialogActionsExtended;

export interface ServiceDashboardDashboard_View_EditSelectorVotesVotesTabBarMyVotesGroupOwnedVoteDefinitionsAddSelectorViewModel
  extends ServiceDashboardDashboard_View_EditSelectorVotesVotesTabBarMyVotesGroupOwnedVoteDefinitionsAddSelectorDialogProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setEditMode: Dispatch<SetStateAction<boolean>>;
  refresh: () => Promise<void>;
  submit: () => Promise<void>;
  isDraft?: boolean;
}

const ServiceDashboardDashboard_View_EditSelectorVotesVotesTabBarMyVotesGroupOwnedVoteDefinitionsAddSelectorViewModelContext =
  createContext<ServiceDashboardDashboard_View_EditSelectorVotesVotesTabBarMyVotesGroupOwnedVoteDefinitionsAddSelectorViewModel>(
    {} as any,
  );
export const useServiceDashboardDashboard_View_EditSelectorVotesVotesTabBarMyVotesGroupOwnedVoteDefinitionsAddSelectorViewModel =
  () => {
    const context = useContext(
      ServiceDashboardDashboard_View_EditSelectorVotesVotesTabBarMyVotesGroupOwnedVoteDefinitionsAddSelectorViewModelContext,
    );
    if (!context) {
      throw new Error(
        'useServiceDashboardDashboard_View_EditSelectorVotesVotesTabBarMyVotesGroupOwnedVoteDefinitionsAddSelectorViewModel must be used within a(n) ServiceDashboardDashboard_View_EditSelectorVotesVotesTabBarMyVotesGroupOwnedVoteDefinitionsAddSelectorViewModelProvider',
      );
    }
    return context;
  };

export const useServiceDashboardDashboard_View_EditSelectorVotesVotesTabBarMyVotesGroupOwnedVoteDefinitionsTableAddSelectorPage =
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
            <ServiceDashboardDashboard_View_EditSelectorVotesVotesTabBarMyVotesGroupOwnedVoteDefinitionsTableAddSelectorPage
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

const ServiceDashboardDashboard_View_EditSelectorVotesVotesTabBarMyVotesGroupOwnedVoteDefinitionsAddSelectorDialogContainer =
  lazy(
    () =>
      import(
        '~/containers/Service/Dashboard/Dashboard_View_Edit/Selector/Votes/VotesTabBar/MyVotesGroup/OwnedVoteDefinitions/AddSelector/ServiceDashboardDashboard_View_EditSelectorVotesVotesTabBarMyVotesGroupOwnedVoteDefinitionsAddSelectorDialogContainer'
      ),
  );

export interface ServiceDashboardDashboard_View_EditSelectorVotesVotesTabBarMyVotesGroupOwnedVoteDefinitionsTableAddSelectorPageProps {
  ownerData: any;

  alreadySelected: ServiceVoteDefinitionStored[];

  isDraft?: boolean;
  ownerValidation?: (data: ServiceVoteDefinition) => Promise<void>;
  onClose: () => Promise<void>;
  onSubmit: (result?: ServiceVoteDefinitionStored[], isDraft?: boolean, openCreated?: boolean) => Promise<void>;
}

// XMIID: User/(esm/_ZesvsGBWEe6M1JBD8stPIg)/TabularReferenceFieldTableAddSelectorPageDefinition
// Name: service::Dashboard::Dashboard_View_Edit::Selector::votes::votesTabBar::myVotesGroup::ownedVoteDefinitions::TableAddSelectorPage
export default function ServiceDashboardDashboard_View_EditSelectorVotesVotesTabBarMyVotesGroupOwnedVoteDefinitionsTableAddSelectorPage(
  props: ServiceDashboardDashboard_View_EditSelectorVotesVotesTabBarMyVotesGroupOwnedVoteDefinitionsTableAddSelectorPageProps,
) {
  const { ownerData, alreadySelected, onClose, onSubmit, isDraft, ownerValidation } = props;

  // Services
  const serviceDashboardServiceForOwnedVoteDefinitionsImpl = useMemo(
    () => new ServiceDashboardServiceForOwnedVoteDefinitionsImpl(judoAxiosProvider),
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
    useTrackService<ServiceDashboardDashboard_View_EditSelectorVotesVotesTabBarMyVotesGroupOwnedVoteDefinitionsAddSelectorActionsHook>(
      `(${OBJECTCLASS}=${SERVICE_DASHBOARD_DASHBOARD_VIEW_EDIT_SELECTOR_VOTES_VOTES_TAB_BAR_MY_VOTES_GROUP_OWNED_VOTE_DEFINITIONS_TABLE_ADD_SELECTOR_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
    );
  const customActions:
    | ServiceDashboardDashboard_View_EditSelectorVotesVotesTabBarMyVotesGroupOwnedVoteDefinitionsAddSelectorDialogActionsExtended
    | undefined = customActionsHook?.(ownerData, data, editMode, selectionDiff, submit);

  // Dialog hooks

  // Action section
  const getPageTitle = (): string => {
    return t(
      'service.Dashboard.Dashboard_View_Edit.Selector.votes.votesTabBar.myVotesGroup.ownedVoteDefinitions.AddSelector',
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
      return serviceDashboardServiceForOwnedVoteDefinitionsImpl.getRangeForOwnedVoteDefinitions(
        cleanUpPayload(ownerData),
        queryCustomizer,
      );
    } catch (error: any) {
      handleError(error);
      return Promise.resolve({ data: [], headers: error.response?.headers, status: error.response?.status });
    }
  };

  const actions: ServiceDashboardDashboard_View_EditSelectorVotesVotesTabBarMyVotesGroupOwnedVoteDefinitionsAddSelectorDialogActions =
    {
      getPageTitle,
      addAction,
      backAction,
      filterAction,
      selectorRangeAction,
      ...(customActions ?? {}),
    };

  // ViewModel setup
  const viewModel: ServiceDashboardDashboard_View_EditSelectorVotesVotesTabBarMyVotesGroupOwnedVoteDefinitionsAddSelectorViewModel =
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
    <ServiceDashboardDashboard_View_EditSelectorVotesVotesTabBarMyVotesGroupOwnedVoteDefinitionsAddSelectorViewModelContext.Provider
      value={viewModel}
    >
      <Suspense>
        <div
          id="User/(esm/_ZesvsGBWEe6M1JBD8stPIg)/TabularReferenceFieldTableAddSelectorPageDefinition"
          data-page-name="service::Dashboard::Dashboard_View_Edit::Selector::votes::votesTabBar::myVotesGroup::ownedVoteDefinitions::TableAddSelectorPage"
        />
        <ServiceDashboardDashboard_View_EditSelectorVotesVotesTabBarMyVotesGroupOwnedVoteDefinitionsAddSelectorDialogContainer
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
    </ServiceDashboardDashboard_View_EditSelectorVotesVotesTabBarMyVotesGroupOwnedVoteDefinitionsAddSelectorViewModelContext.Provider>
  );
}
