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
import { Suspense, lazy, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { useJudoNavigation } from '~/components';
import type { Filter, FilterOption } from '~/components-api';
import { useConfirmDialog, useDialog, useFilterDialog } from '~/components/dialog';
import type { ServiceVoteDefinitionVoteDefinition_TableAddSelectorDialogActions } from '~/containers/Service/VoteDefinition/VoteDefinition_Table/AddSelector/ServiceVoteDefinitionVoteDefinition_TableAddSelectorDialogContainer';
import { useCRUDDialog, useSnacks } from '~/hooks';
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
import { ServiceDashboardServiceForOwnedVoteDefinitionsImpl } from '~/services/data-axios/ServiceDashboardServiceForOwnedVoteDefinitionsImpl';
import { processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';

export type ServiceVoteDefinitionVoteDefinition_TableAddSelectorDialogActionsExtended =
  ServiceVoteDefinitionVoteDefinition_TableAddSelectorDialogActions & {};

export const SERVICE_DASHBOARD_DASHBOARD_VIEW_EDIT_SELECTOR_VOTES_VOTES_TAB_BAR_MY_VOTES_GROUP_OWNED_VOTE_DEFINITIONS_TABLE_ADD_SELECTOR_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'ServiceVoteDefinitionVoteDefinition_TableAddSelectorActionsHook';
export type ServiceVoteDefinitionVoteDefinition_TableAddSelectorActionsHook = (
  ownerData: any,
  data: ServiceVoteDefinitionStored[],
  editMode: boolean,
  selectionDiff: ServiceVoteDefinitionStored[],
) => ServiceVoteDefinitionVoteDefinition_TableAddSelectorDialogActionsExtended;

export const useServiceDashboardDashboard_View_EditSelectorVotesVotesTabBarMyVotesGroupOwnedVoteDefinitionsTableAddSelectorPage =
  (): ((
    ownerData: any,
    alreadySelected: ServiceVoteDefinitionStored[],
  ) => Promise<DialogResult<ServiceVoteDefinitionStored[]>>) => {
    const [createDialog, closeDialog] = useDialog();

    return (ownerData: any, alreadySelected: ServiceVoteDefinitionStored[]) =>
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
              onClose={async () => {
                await closeDialog();
                resolve({
                  result: 'close',
                });
              }}
              onSubmit={async (result) => {
                await closeDialog();
                resolve({
                  result: 'submit',
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

export interface ServiceDashboardDashboard_View_EditSelectorVotesVotesTabBarMyVotesGroupOwnedVoteDefinitionsTableAddSelectorPageProps {
  ownerData: any;
  alreadySelected: ServiceVoteDefinitionStored[];
  onClose: () => Promise<void>;
  onSubmit: (result?: ServiceVoteDefinitionStored[]) => Promise<void>;
}

// XMIID: User/(esm/_ZesvsGBWEe6M1JBD8stPIg)/TabularReferenceFieldTableAddSelectorPageDefinition
// Name: service::Dashboard::Dashboard_View_Edit::Selector::votes::votesTabBar::myVotesGroup::ownedVoteDefinitions::TableAddSelectorPage
export default function ServiceDashboardDashboard_View_EditSelectorVotesVotesTabBarMyVotesGroupOwnedVoteDefinitionsTableAddSelectorPage(
  props: ServiceDashboardDashboard_View_EditSelectorVotesVotesTabBarMyVotesGroupOwnedVoteDefinitionsTableAddSelectorPageProps,
) {
  const { ownerData, alreadySelected, onClose, onSubmit } = props;

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
  const handleError = useErrorHandler();
  const openCRUDDialog = useCRUDDialog();
  const [createDialog, closeDialog] = useDialog();

  // State section
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [refreshCounter, setRefreshCounter] = useState<number>(0);
  const [data, setData] = useState<ServiceVoteDefinitionStored[]>([]);
  const [selectionDiff, setSelectionDiff] = useState<ServiceVoteDefinitionStored[]>([]);

  // Pandino Action overrides
  const { service: customActionsHook } =
    useTrackService<ServiceVoteDefinitionVoteDefinition_TableAddSelectorActionsHook>(
      `(${OBJECTCLASS}=${SERVICE_DASHBOARD_DASHBOARD_VIEW_EDIT_SELECTOR_VOTES_VOTES_TAB_BAR_MY_VOTES_GROUP_OWNED_VOTE_DEFINITIONS_TABLE_ADD_SELECTOR_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
    );
  const customActions: ServiceVoteDefinitionVoteDefinition_TableAddSelectorDialogActionsExtended | undefined =
    customActionsHook?.(ownerData, data, editMode, selectionDiff);

  // Dialog hooks

  // Calculated section
  const title: string = t('service.VoteDefinition.VoteDefinition_Table.AddSelector', {
    defaultValue: 'VoteDefinition Table',
  });

  // Private actions
  const submit = async () => {};

  // Action section
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
      return serviceDashboardServiceForOwnedVoteDefinitionsImpl.getRangeForOwnedVoteDefinitions(
        ownerData,
        queryCustomizer,
      );
    } catch (error) {
      handleError(error);
      return Promise.resolve([]);
    }
  };

  const actions: ServiceVoteDefinitionVoteDefinition_TableAddSelectorDialogActions = {
    addAction,
    backAction,
    filterAction,
    selectorRangeAction,
    ...(customActions ?? {}),
  };

  // Effect section

  return (
    <div
      id="User/(esm/_ZesvsGBWEe6M1JBD8stPIg)/TabularReferenceFieldTableAddSelectorPageDefinition"
      data-page-name="service::Dashboard::Dashboard_View_Edit::Selector::votes::votesTabBar::myVotesGroup::ownedVoteDefinitions::TableAddSelectorPage"
    >
      <Suspense>
        <ServiceVoteDefinitionVoteDefinition_TableAddSelectorDialogContainer
          ownerData={ownerData}
          onClose={onClose}
          title={title}
          actions={actions}
          isLoading={isLoading}
          editMode={editMode}
          refreshCounter={refreshCounter}
          selectionDiff={selectionDiff}
          setSelectionDiff={setSelectionDiff}
          alreadySelected={alreadySelected}
        />
      </Suspense>
    </div>
  );
}
