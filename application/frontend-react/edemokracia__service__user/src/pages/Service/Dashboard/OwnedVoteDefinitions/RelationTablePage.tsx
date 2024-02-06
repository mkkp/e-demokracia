//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPagesForRouting(#application)
// Path expression: 'src/pages/'+#pagePath(#self)+'.tsx'
// Template name: actor/src/pages/index.tsx
// Template file: actor/src/pages/index.tsx.hbs

import type { GridFilterModel } from '@mui/x-data-grid';
import { OBJECTCLASS } from '@pandino/pandino-api';
import { useTrackService } from '@pandino/react-hooks';
import { Suspense, createContext, lazy, useContext, useMemo, useState } from 'react';
import type { Dispatch, FC, ReactNode, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useJudoNavigation } from '~/components';
import type { Filter, FilterOption } from '~/components-api';
import { useConfirmDialog, useFilterDialog } from '~/components/dialog';
import type {
  ServiceVoteDefinitionVoteDefinition_TablePageActions,
  ServiceVoteDefinitionVoteDefinition_TablePageProps,
} from '~/containers/Service/VoteDefinition/VoteDefinition_Table/ServiceVoteDefinitionVoteDefinition_TablePageContainer';
import { useServiceDashboardOwnedVoteDefinitionsAddSelectorPage } from '~/dialogs/Service/Dashboard/OwnedVoteDefinitions/AddSelectorPage';
import { useServiceVoteDefinitionVoteDefinition_View_EditTabBarSelectanswervoteVoteSelectAnswerRelationTableCallSelector } from '~/dialogs/Service/VoteDefinition/VoteDefinition_View_Edit/TabBar/Selectanswervote/VoteSelectAnswer/Relation/Table/CallSelector';
import { useServiceVoteDefinitionVoteDefinition_View_EditVoteRatingInputForm } from '~/dialogs/Service/VoteDefinition/VoteDefinition_View_Edit/VoteRating/Input/Form';
import { useServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoInputForm } from '~/dialogs/Service/VoteDefinition/VoteDefinition_View_Edit/VoteYesNo/Input/Form';
import { useServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoAbstainInputForm } from '~/dialogs/Service/VoteDefinition/VoteDefinition_View_Edit/VoteYesNoAbstain/Input/Form';
import { useCRUDDialog, useSnacks, useViewData } from '~/hooks';
import { routeToServiceDashboardOwnedVoteDefinitionsRelationViewPage } from '~/routes';
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
import { PageContainerTransition } from '~/theme/animations';
import { cleanUpPayload, processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';

export type ServiceVoteDefinitionVoteDefinition_TablePageActionsExtended =
  ServiceVoteDefinitionVoteDefinition_TablePageActions & {
    postRefreshAction?: (data: ServiceVoteDefinitionStored[]) => Promise<void>;
  };

export const SERVICE_DASHBOARD_OWNED_VOTE_DEFINITIONS_RELATION_TABLE_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_DASHBOARD_OWNED_VOTE_DEFINITIONS_RELATION_TABLE_PAGE_ACTIONS_HOOK';
export type ServiceVoteDefinitionVoteDefinition_TableActionsHook = (
  data: ServiceVoteDefinitionStored[],
  editMode: boolean,
) => ServiceVoteDefinitionVoteDefinition_TablePageActionsExtended;

export interface ServiceVoteDefinitionVoteDefinition_TableViewModel
  extends ServiceVoteDefinitionVoteDefinition_TablePageProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setEditMode: Dispatch<SetStateAction<boolean>>;
  refresh: () => Promise<void>;
}

const ServiceVoteDefinitionVoteDefinition_TableViewModelContext =
  createContext<ServiceVoteDefinitionVoteDefinition_TableViewModel>({} as any);
export const useServiceVoteDefinitionVoteDefinition_TableViewModel = () => {
  const context = useContext(ServiceVoteDefinitionVoteDefinition_TableViewModelContext);
  if (!context) {
    throw new Error(
      'useServiceVoteDefinitionVoteDefinition_TableViewModel must be used within a(n) ServiceVoteDefinitionVoteDefinition_TableViewModelProvider',
    );
  }
  return context;
};

const ServiceVoteDefinitionVoteDefinition_TablePageContainer = lazy(
  () =>
    import(
      '~/containers/Service/VoteDefinition/VoteDefinition_Table/ServiceVoteDefinitionVoteDefinition_TablePageContainer'
    ),
);

// XMIID: User/(esm/_LYtscGBWEe6M1JBD8stPIg)/RelationFeatureTable
// Name: service::Dashboard::ownedVoteDefinitions::RelationTablePage
export default function ServiceDashboardOwnedVoteDefinitionsRelationTablePage() {
  // Router params section
  const { signedIdentifier } = useParams();

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

  // State section
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [refreshCounter, setRefreshCounter] = useState<number>(0);
  const [data, setData] = useState<ServiceVoteDefinitionStored[]>([]);

  // Private actions
  const submit = async () => {};
  const refresh = async () => {
    setRefreshCounter((prev) => prev + 1);
  };

  // Pandino Action overrides
  const { service: customActionsHook } = useTrackService<ServiceVoteDefinitionVoteDefinition_TableActionsHook>(
    `(${OBJECTCLASS}=${SERVICE_DASHBOARD_OWNED_VOTE_DEFINITIONS_RELATION_TABLE_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const customActions: ServiceVoteDefinitionVoteDefinition_TablePageActionsExtended | undefined = customActionsHook?.(
    data,
    editMode,
  );

  // Dialog hooks
  const openServiceDashboardOwnedVoteDefinitionsAddSelectorPage =
    useServiceDashboardOwnedVoteDefinitionsAddSelectorPage();
  const openServiceVoteDefinitionVoteDefinition_View_EditTabBarSelectanswervoteVoteSelectAnswerRelationTableCallSelector =
    useServiceVoteDefinitionVoteDefinition_View_EditTabBarSelectanswervoteVoteSelectAnswerRelationTableCallSelector();
  const openServiceVoteDefinitionVoteDefinition_View_EditVoteRatingInputForm =
    useServiceVoteDefinitionVoteDefinition_View_EditVoteRatingInputForm();
  const openServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoInputForm =
    useServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoInputForm();
  const openServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoAbstainInputForm =
    useServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoAbstainInputForm();

  // Action section
  const getPageTitle = (): string => {
    return t('service.VoteDefinition.VoteDefinition_Table', { defaultValue: 'VoteDefinition Table' });
  };
  const openAddSelectorAction = async () => {
    const { result, data: returnedData } = await openServiceDashboardOwnedVoteDefinitionsAddSelectorPage(
      { __signedIdentifier: signedIdentifier },
      [],
    );
    if (result === 'submit') {
      if (Array.isArray(returnedData) && returnedData.length) {
        try {
          setIsLoading(true);
          await serviceDashboardServiceForOwnedVoteDefinitionsImpl.addOwnedVoteDefinitions(
            { __signedIdentifier: signedIdentifier } as JudoIdentifiable<any>,
            returnedData,
          );
          setRefreshCounter((prev) => prev + 1);
        } catch (e) {
          console.error(e);
        } finally {
          setIsLoading(false);
        }
      }
    }
  };

  const backAction = async () => {
    navigateBack();
  };
  const bulkRemoveAction = async (
    selectedRows: ServiceVoteDefinitionStored[],
  ): Promise<DialogResult<Array<ServiceVoteDefinitionStored>>> => {
    return new Promise((resolve) => {
      openCRUDDialog<ServiceVoteDefinitionStored>({
        dialogTitle: t('service.VoteDefinition.VoteDefinition_Table.BulkRemove', { defaultValue: 'Remove' }),
        itemTitleFn: (item) => item.title!,
        selectedItems: selectedRows,
        action: async (item, successHandler: () => void, errorHandler: (error: any) => void) => {
          try {
            if (actions.removeAction) {
              await actions.removeAction!(item, true);
            }
            successHandler();
          } catch (error) {
            errorHandler(error);
          }
        },
        onClose: async (needsRefresh) => {
          if (needsRefresh) {
            setRefreshCounter((prev) => prev + 1);
            resolve({
              result: 'submit',
              data: [],
            });
          } else {
            resolve({
              result: 'close',
            });
          }
        },
      });
    });
  };
  const removeAction = async (target?: ServiceVoteDefinitionStored, silentMode?: boolean) => {
    if (target) {
      try {
        if (!silentMode) {
          setIsLoading(true);
        }
        await serviceDashboardServiceForOwnedVoteDefinitionsImpl.removeOwnedVoteDefinitions(
          { __signedIdentifier: signedIdentifier } as JudoIdentifiable<any>,
          [target!],
        );
        if (!silentMode) {
          setRefreshCounter((prev) => prev + 1);
        }
      } catch (error) {
        if (!silentMode) {
          handleError<ServiceVoteDefinition>(error, undefined, target);
        }
      } finally {
        if (!silentMode) {
          setIsLoading(false);
        }
      }
    }
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
  const refreshAction = async (
    queryCustomizer: ServiceVoteDefinitionQueryCustomizer,
  ): Promise<ServiceVoteDefinitionStored[]> => {
    try {
      setIsLoading(true);
      setEditMode(false);
      return serviceDashboardServiceForOwnedVoteDefinitionsImpl.list(
        { __signedIdentifier: signedIdentifier } as JudoIdentifiable<any>,
        queryCustomizer,
      );
    } catch (error) {
      handleError(error);
      setLatestViewData(null);
      return Promise.reject(error);
    } finally {
      setIsLoading(false);
    }
  };
  const openPageAction = async (target: ServiceVoteDefinition | ServiceVoteDefinitionStored, isDraft?: boolean) => {
    if (isDraft && (!target || !(target as ServiceVoteDefinitionStored).__signedIdentifier)) {
    } else if (!isDraft) {
      // if the `target` is missing we are likely navigating to a relation table page, in which case we need the owner's id
      navigate(
        routeToServiceDashboardOwnedVoteDefinitionsRelationViewPage(
          (target as ServiceVoteDefinitionStored)!.__signedIdentifier,
        ),
      );
    }
  };
  const voteRatingAction = async (
    target: ServiceVoteDefinitionStored,
    templateDataOverride?: Partial<ServiceVoteDefinition>,
    isDraft?: boolean,
    ownerValidation?: (data: any) => Promise<void>,
  ) => {
    const { result, data: returnedData } =
      await openServiceVoteDefinitionVoteDefinition_View_EditVoteRatingInputForm(target);
    if (result === 'submit') {
      setRefreshCounter((prev) => prev + 1);
    }
  };
  const voteSelectAnswerAction = async () => {
    const { result, data: returnedData } =
      await openServiceVoteDefinitionVoteDefinition_View_EditTabBarSelectanswervoteVoteSelectAnswerRelationTableCallSelector(
        [],
      );
    if (result === 'submit') {
    }
  };
  const voteYesNoAbstainAction = async (
    target: ServiceVoteDefinitionStored,
    templateDataOverride?: Partial<ServiceVoteDefinition>,
    isDraft?: boolean,
    ownerValidation?: (data: any) => Promise<void>,
  ) => {
    const { result, data: returnedData } =
      await openServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoAbstainInputForm(target);
    if (result === 'submit') {
      setRefreshCounter((prev) => prev + 1);
    }
  };
  const voteYesNoAction = async (
    target: ServiceVoteDefinitionStored,
    templateDataOverride?: Partial<ServiceVoteDefinition>,
    isDraft?: boolean,
    ownerValidation?: (data: any) => Promise<void>,
  ) => {
    const { result, data: returnedData } =
      await openServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoInputForm(target);
    if (result === 'submit') {
      setRefreshCounter((prev) => prev + 1);
    }
  };

  const actions: ServiceVoteDefinitionVoteDefinition_TablePageActions = {
    getPageTitle,
    openAddSelectorAction,
    backAction,
    bulkRemoveAction,
    removeAction,
    filterAction,
    refreshAction,
    openPageAction,
    voteRatingAction,
    voteSelectAnswerAction,
    voteYesNoAbstainAction,
    voteYesNoAction,
    ...(customActions ?? {}),
  };

  // ViewModel setup
  const viewModel: ServiceVoteDefinitionVoteDefinition_TableViewModel = {
    actions,
    isLoading,
    setIsLoading,
    refreshCounter,
    editMode,
    setEditMode,
    refresh,
  };

  // Effect section

  return (
    <ServiceVoteDefinitionVoteDefinition_TableViewModelContext.Provider value={viewModel}>
      <Suspense>
        <div
          id="User/(esm/_LYtscGBWEe6M1JBD8stPIg)/RelationFeatureTable"
          data-page-name="service::Dashboard::ownedVoteDefinitions::RelationTablePage"
        />
        <PageContainerTransition>
          <ServiceVoteDefinitionVoteDefinition_TablePageContainer
            actions={actions}
            isLoading={isLoading}
            editMode={editMode}
            refreshCounter={refreshCounter}
          />
        </PageContainerTransition>
      </Suspense>
    </ServiceVoteDefinitionVoteDefinition_TableViewModelContext.Provider>
  );
}
