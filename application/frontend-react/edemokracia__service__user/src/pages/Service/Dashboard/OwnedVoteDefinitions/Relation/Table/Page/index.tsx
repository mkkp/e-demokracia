//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPagesForRouting(#application)
// Path expression: 'src/pages/'+#pagePath(#self)+'/index.tsx'
// Template name: actor/src/pages/index.tsx
// Template file: actor/src/pages/index.tsx.hbs

import { useCallback, useEffect, useRef, useState, lazy, Suspense } from 'react';
import { OBJECTCLASS } from '@pandino/pandino-api';
import { useTrackService } from '@pandino/react-hooks';
import type { JudoIdentifiable } from '@judo/data-api-common';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import type { GridFilterModel } from '@mui/x-data-grid';
import type { Filter, FilterOption } from '~/components-api';
import { useJudoNavigation } from '~/components';
import { useConfirmDialog, useDialog, useFilterDialog } from '~/components/dialog';
import { toastConfig } from '~/config';
import { useSnacks, useCRUDDialog } from '~/hooks';
import {
  passesLocalValidation,
  processQueryCustomizer,
  uiDateToServiceDate,
  uiTimeToServiceTime,
  useErrorHandler,
} from '~/utilities';
import type { DialogResult } from '~/utilities';
import { PageContainerTransition } from '~/theme/animations';
import { routeToServiceDashboardOwnedVoteDefinitionsRelationViewPage } from '~/routes';
import { useServiceVoteDefinitionVoteDefinition_View_EditTabBarSelectanswervoteVoteSelectAnswerRelationTableCallSelector } from '~/dialogs/Service/VoteDefinition/VoteDefinition_View_Edit/TabBar/Selectanswervote/VoteSelectAnswer/Relation/Table/CallSelector';
import { useServiceVoteDefinitionVoteDefinition_View_EditVoteRatingInputForm } from '~/dialogs/Service/VoteDefinition/VoteDefinition_View_Edit/VoteRating/Input/Form';
import { useServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoInputForm } from '~/dialogs/Service/VoteDefinition/VoteDefinition_View_Edit/VoteYesNo/Input/Form';
import { useServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoAbstainInputForm } from '~/dialogs/Service/VoteDefinition/VoteDefinition_View_Edit/VoteYesNoAbstain/Input/Form';
import type { ServiceVoteDefinitionVoteDefinition_TablePageActions } from '~/containers/Service/VoteDefinition/VoteDefinition_Table/ServiceVoteDefinitionVoteDefinition_TablePageContainer';
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
import { serviceDashboardServiceForOwnedVoteDefinitionsImpl } from '~/services/data-axios';
export type ServiceVoteDefinitionVoteDefinition_TablePageActionsExtended =
  ServiceVoteDefinitionVoteDefinition_TablePageActions & {};

export const SERVICE_DASHBOARD_OWNED_VOTE_DEFINITIONS_RELATION_TABLE_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'ServiceVoteDefinitionVoteDefinition_TableActionsHook';
export type ServiceVoteDefinitionVoteDefinition_TableActionsHook = (
  data: ServiceVoteDefinitionStored[],
  editMode: boolean,
) => ServiceVoteDefinitionVoteDefinition_TablePageActionsExtended;

const ServiceVoteDefinitionVoteDefinition_TablePageContainer = lazy(
  () =>
    import(
      '~/containers/Service/VoteDefinition/VoteDefinition_Table/ServiceVoteDefinitionVoteDefinition_TablePageContainer'
    ),
);

// XMIID: User/(esm/_LYtscGBWEe6M1JBD8stPIg)/RelationFeatureTable
// Name: service::Dashboard::ownedVoteDefinitions::Relation::Table::Page
// Access: false
// Single Access: false
export default function ServiceDashboardOwnedVoteDefinitionsRelationTablePage() {
  // Router params section
  const { signedIdentifier } = useParams();

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

  // Pandino Action overrides
  const { service: customActionsHook } = useTrackService<ServiceVoteDefinitionVoteDefinition_TableActionsHook>(
    `(${OBJECTCLASS}=${SERVICE_DASHBOARD_OWNED_VOTE_DEFINITIONS_RELATION_TABLE_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const customActions: ServiceVoteDefinitionVoteDefinition_TablePageActionsExtended | undefined = customActionsHook?.(
    data,
    editMode,
  );

  // Dialog hooks
  const openServiceVoteDefinitionVoteDefinition_View_EditTabBarSelectanswervoteVoteSelectAnswerRelationTableCallSelector =
    useServiceVoteDefinitionVoteDefinition_View_EditTabBarSelectanswervoteVoteSelectAnswerRelationTableCallSelector();
  const openServiceVoteDefinitionVoteDefinition_View_EditVoteRatingInputForm =
    useServiceVoteDefinitionVoteDefinition_View_EditVoteRatingInputForm();
  const openServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoInputForm =
    useServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoInputForm();
  const openServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoAbstainInputForm =
    useServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoAbstainInputForm();

  // Calculated section
  const title: string = t('service.VoteDefinition.VoteDefinition_Table', { defaultValue: 'VoteDefinition Table' });

  // Action section
  const backAction = async () => {
    navigateBack();
  };
  const openPageAction = async (target?: ServiceVoteDefinitionStored) => {
    // if the `target` is missing we are likely navigating to a relation table page, in which case we need the owner's id
    navigate(routeToServiceDashboardOwnedVoteDefinitionsRelationViewPage(target!.__signedIdentifier));
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
      return Promise.reject(error);
    } finally {
      setIsLoading(false);
      setRefreshCounter((prevCounter) => prevCounter + 1);
    }
  };
  const deleteAction = async (target: ServiceVoteDefinitionStored, silentMode?: boolean) => {
    try {
      const confirmed = !silentMode
        ? await openConfirmDialog(
            'row-delete-action',
            t('judo.modal.confirm.confirm-delete', {
              defaultValue: 'Are you sure you would like to delete the selected element?',
            }),
            t('judo.modal.confirm.confirm-title', { defaultValue: 'Confirm action' }),
          )
        : true;
      if (confirmed) {
        await serviceDashboardServiceForOwnedVoteDefinitionsImpl.delete(target);

        if (!silentMode) {
          showSuccessSnack(t('judo.action.delete.success', { defaultValue: 'Delete successful' }));

          setRefreshCounter((prev) => prev + 1);
        }
      }
    } catch (error) {
      if (!silentMode) {
        handleError<ServiceVoteDefinition>(error, undefined, target);
      }
    }
  };
  const bulkDeleteAction = async (
    selectedRows: ServiceVoteDefinitionStored[],
  ): Promise<DialogResult<Array<ServiceVoteDefinitionStored>>> => {
    return new Promise((resolve) => {
      openCRUDDialog<ServiceVoteDefinitionStored>({
        dialogTitle: t('service.VoteDefinition.VoteDefinition_Table.BulkDelete', { defaultValue: 'Delete' }),
        itemTitleFn: (item) => item.title!,
        selectedItems: selectedRows,
        action: async (item, successHandler: () => void, errorHandler: (error: any) => void) => {
          try {
            if (actions.deleteAction) {
              await actions.deleteAction!(item, true);
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
              data: [],
            });
          }
        },
      });
    });
  };
  const voteYesNoAction = async (target: ServiceVoteDefinitionStored) => {
    const { result, data: returnedData } = await openServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoInputForm(
      target,
    );
    if (result === 'submit') {
      setRefreshCounter((prev) => prev + 1);
    }
  };
  const voteYesNoAbstainAction = async (target: ServiceVoteDefinitionStored) => {
    const { result, data: returnedData } =
      await openServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoAbstainInputForm(target);
    if (result === 'submit') {
      setRefreshCounter((prev) => prev + 1);
    }
  };
  const voteRatingAction = async (target: ServiceVoteDefinitionStored) => {
    const { result, data: returnedData } = await openServiceVoteDefinitionVoteDefinition_View_EditVoteRatingInputForm(
      target,
    );
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

  const actions: ServiceVoteDefinitionVoteDefinition_TablePageActions = {
    backAction,
    openPageAction,
    filterAction,
    refreshAction,
    deleteAction,
    bulkDeleteAction,
    voteYesNoAction,
    voteYesNoAbstainAction,
    voteRatingAction,
    voteSelectAnswerAction,
    ...(customActions ?? {}),
  };

  // Effect section

  return (
    <div
      id="User/(esm/_LYtscGBWEe6M1JBD8stPIg)/RelationFeatureTable"
      data-page-name="service::Dashboard::ownedVoteDefinitions::Relation::Table::Page"
    >
      <Suspense>
        <PageContainerTransition>
          <ServiceVoteDefinitionVoteDefinition_TablePageContainer
            title={title}
            actions={actions}
            isLoading={isLoading}
            editMode={editMode}
            refreshCounter={refreshCounter}
          />
        </PageContainerTransition>
      </Suspense>
    </div>
  );
}
