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
  ServiceVoteDefinitionVoteDefinition_TableAddSelectorDialogActions,
  ServiceVoteDefinitionVoteDefinition_TableAddSelectorDialogProps,
} from '~/containers/Service/VoteDefinition/VoteDefinition_Table/AddSelector/ServiceVoteDefinitionVoteDefinition_TableAddSelectorDialogContainer';
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
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { ServiceDashboardServiceForFavoriteVoteDefinitionsImpl } from '~/services/data-axios/ServiceDashboardServiceForFavoriteVoteDefinitionsImpl';
import { cleanUpPayload, isErrorNestedValidationError, processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';

export type ServiceVoteDefinitionVoteDefinition_TableAddSelectorDialogActionsExtended =
  ServiceVoteDefinitionVoteDefinition_TableAddSelectorDialogActions & {};

export const SERVICE_DASHBOARD_DASHBOARD_VIEW_EDIT_SELECTOR_VOTES_VOTES_TAB_BAR_FAVORITE_VOTES_GROUP_FAVORITE_VOTE_DEFINITIONS_TABLE_ADD_SELECTOR_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_DASHBOARD_DASHBOARD_VIEW_EDIT_SELECTOR_VOTES_VOTES_TAB_BAR_FAVORITE_VOTES_GROUP_FAVORITE_VOTE_DEFINITIONS_TABLE_ADD_SELECTOR_PAGE_ACTIONS_HOOK';
export type ServiceVoteDefinitionVoteDefinition_TableAddSelectorActionsHook = (
  ownerData: any,
  data: ServiceVoteDefinitionStored[],
  editMode: boolean,
  selectionDiff: ServiceVoteDefinitionStored[],
  submit: () => Promise<void>,
) => ServiceVoteDefinitionVoteDefinition_TableAddSelectorDialogActionsExtended;

export interface ServiceVoteDefinitionVoteDefinition_TableAddSelectorViewModel
  extends ServiceVoteDefinitionVoteDefinition_TableAddSelectorDialogProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setEditMode: Dispatch<SetStateAction<boolean>>;
  refresh: () => Promise<void>;
  submit: () => Promise<void>;
  isDraft?: boolean;
}

const ServiceVoteDefinitionVoteDefinition_TableAddSelectorViewModelContext =
  createContext<ServiceVoteDefinitionVoteDefinition_TableAddSelectorViewModel>({} as any);
export const useServiceVoteDefinitionVoteDefinition_TableAddSelectorViewModel = () => {
  const context = useContext(ServiceVoteDefinitionVoteDefinition_TableAddSelectorViewModelContext);
  if (!context) {
    throw new Error(
      'useServiceVoteDefinitionVoteDefinition_TableAddSelectorViewModel must be used within a(n) ServiceVoteDefinitionVoteDefinition_TableAddSelectorViewModelProvider',
    );
  }
  return context;
};

export const useServiceDashboardDashboard_View_EditSelectorVotesVotesTabBarFavoriteVotesGroupFavoriteVoteDefinitionsTableAddSelectorPage =
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
            <ServiceDashboardDashboard_View_EditSelectorVotesVotesTabBarFavoriteVotesGroupFavoriteVoteDefinitionsTableAddSelectorPage
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

const ServiceVoteDefinitionVoteDefinition_TableAddSelectorDialogContainer = lazy(
  () =>
    import(
      '~/containers/Service/VoteDefinition/VoteDefinition_Table/AddSelector/ServiceVoteDefinitionVoteDefinition_TableAddSelectorDialogContainer'
    ),
);

export interface ServiceDashboardDashboard_View_EditSelectorVotesVotesTabBarFavoriteVotesGroupFavoriteVoteDefinitionsTableAddSelectorPageProps {
  ownerData: any;

  alreadySelected: ServiceVoteDefinitionStored[];

  isDraft?: boolean;
  ownerValidation?: (data: ServiceVoteDefinition) => Promise<void>;
  onClose: () => Promise<void>;
  onSubmit: (result?: ServiceVoteDefinitionStored[], isDraft?: boolean) => Promise<void>;
}

// XMIID: User/(esm/_vp60sGBWEe6M1JBD8stPIg)/TabularReferenceFieldTableAddSelectorPageDefinition
// Name: service::Dashboard::Dashboard_View_Edit::Selector::votes::votesTabBar::favoriteVotesGroup::favoriteVoteDefinitions::TableAddSelectorPage
export default function ServiceDashboardDashboard_View_EditSelectorVotesVotesTabBarFavoriteVotesGroupFavoriteVoteDefinitionsTableAddSelectorPage(
  props: ServiceDashboardDashboard_View_EditSelectorVotesVotesTabBarFavoriteVotesGroupFavoriteVoteDefinitionsTableAddSelectorPageProps,
) {
  const { ownerData, alreadySelected, onClose, onSubmit, isDraft, ownerValidation } = props;

  // Services
  const serviceDashboardServiceForFavoriteVoteDefinitionsImpl = useMemo(
    () => new ServiceDashboardServiceForFavoriteVoteDefinitionsImpl(judoAxiosProvider),
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
    useTrackService<ServiceVoteDefinitionVoteDefinition_TableAddSelectorActionsHook>(
      `(${OBJECTCLASS}=${SERVICE_DASHBOARD_DASHBOARD_VIEW_EDIT_SELECTOR_VOTES_VOTES_TAB_BAR_FAVORITE_VOTES_GROUP_FAVORITE_VOTE_DEFINITIONS_TABLE_ADD_SELECTOR_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
    );
  const customActions: ServiceVoteDefinitionVoteDefinition_TableAddSelectorDialogActionsExtended | undefined =
    customActionsHook?.(ownerData, data, editMode, selectionDiff, submit);

  // Dialog hooks

  // Action section
  const getPageTitle = (): string => {
    return t('service.VoteDefinition.VoteDefinition_Table.AddSelector', { defaultValue: 'VoteDefinition Table' });
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
  ): Promise<ServiceVoteDefinitionStored[]> => {
    try {
      return serviceDashboardServiceForFavoriteVoteDefinitionsImpl.getRangeForFavoriteVoteDefinitions(
        cleanUpPayload(ownerData),
        queryCustomizer,
      );
    } catch (error) {
      handleError(error);
      return Promise.resolve([]);
    }
  };

  const actions: ServiceVoteDefinitionVoteDefinition_TableAddSelectorDialogActions = {
    getPageTitle,
    addAction,
    backAction,
    filterAction,
    selectorRangeAction,
    ...(customActions ?? {}),
  };

  // ViewModel setup
  const viewModel: ServiceVoteDefinitionVoteDefinition_TableAddSelectorViewModel = {
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
    <ServiceVoteDefinitionVoteDefinition_TableAddSelectorViewModelContext.Provider value={viewModel}>
      <Suspense>
        <div
          id="User/(esm/_vp60sGBWEe6M1JBD8stPIg)/TabularReferenceFieldTableAddSelectorPageDefinition"
          data-page-name="service::Dashboard::Dashboard_View_Edit::Selector::votes::votesTabBar::favoriteVotesGroup::favoriteVoteDefinitions::TableAddSelectorPage"
        />
        <ServiceVoteDefinitionVoteDefinition_TableAddSelectorDialogContainer
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
    </ServiceVoteDefinitionVoteDefinition_TableAddSelectorViewModelContext.Provider>
  );
}
