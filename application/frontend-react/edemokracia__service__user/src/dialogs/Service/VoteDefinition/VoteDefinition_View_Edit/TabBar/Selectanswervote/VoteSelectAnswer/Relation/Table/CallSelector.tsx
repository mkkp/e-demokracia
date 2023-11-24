//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPagesForDialogs(#application)
// Path expression: 'src/dialogs/'+#pagePath(#self)+'.tsx'
// Template name: actor/src/dialogs/index.tsx
// Template file: actor/src/dialogs/index.tsx.hbs

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
import type { ServiceVoteDefinitionVoteDefinition_View_EditTabBarSelectanswervoteVoteSelectAnswerCallOperationDialogActions } from '~/containers/Service/VoteDefinition/VoteDefinition_View_Edit/TabBar/Selectanswervote/VoteSelectAnswer/CallOperation/ServiceVoteDefinitionVoteDefinition_View_EditTabBarSelectanswervoteVoteSelectAnswerCallOperationDialogContainer';
import type {
  SelectAnswerVoteSelection,
  SelectAnswerVoteSelectionQueryCustomizer,
  SelectAnswerVoteSelectionStored,
} from '~/services/data-api';
import { serviceVoteDefinitionServiceImpl } from '~/services/data-axios';
export type ServiceVoteDefinitionVoteDefinition_View_EditTabBarSelectanswervoteVoteSelectAnswerCallOperationDialogActionsExtended =
  ServiceVoteDefinitionVoteDefinition_View_EditTabBarSelectanswervoteVoteSelectAnswerCallOperationDialogActions & {
    postVoteSelectAnswerForVoteDefinitionAction?: (onClose: () => Promise<void>) => Promise<void>;
  };

export const SERVICE_VOTE_DEFINITION_VOTE_DEFINITION_VIEW_EDIT_TAB_BAR_SELECTANSWERVOTE_VOTE_SELECT_ANSWER_RELATION_TABLE_CALL_SELECTOR_ACTIONS_HOOK_INTERFACE_KEY =
  'ServiceVoteDefinitionVoteDefinition_View_EditTabBarSelectanswervoteVoteSelectAnswerCallOperationActionsHook';
export type ServiceVoteDefinitionVoteDefinition_View_EditTabBarSelectanswervoteVoteSelectAnswerCallOperationActionsHook =
  (
    ownerData: any,
    data: SelectAnswerVoteSelectionStored[],
    editMode: boolean,
    selectionDiff: SelectAnswerVoteSelectionStored[],
  ) => ServiceVoteDefinitionVoteDefinition_View_EditTabBarSelectanswervoteVoteSelectAnswerCallOperationDialogActionsExtended;

export const useServiceVoteDefinitionVoteDefinition_View_EditTabBarSelectanswervoteVoteSelectAnswerRelationTableCallSelector =
  (): ((ownerData: any) => Promise<DialogResult<SelectAnswerVoteSelectionStored[]>>) => {
    const [createDialog, closeDialog] = useDialog();

    return (ownerData: any) =>
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
            <ServiceVoteDefinitionVoteDefinition_View_EditTabBarSelectanswervoteVoteSelectAnswerRelationTableCallSelector
              ownerData={ownerData}
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

const ServiceVoteDefinitionVoteDefinition_View_EditTabBarSelectanswervoteVoteSelectAnswerCallOperationDialogContainer =
  lazy(
    () =>
      import(
        '~/containers/Service/VoteDefinition/VoteDefinition_View_Edit/TabBar/Selectanswervote/VoteSelectAnswer/CallOperation/ServiceVoteDefinitionVoteDefinition_View_EditTabBarSelectanswervoteVoteSelectAnswerCallOperationDialogContainer'
      ),
  );

export interface ServiceVoteDefinitionVoteDefinition_View_EditTabBarSelectanswervoteVoteSelectAnswerRelationTableCallSelectorProps {
  ownerData: any;

  onClose: () => Promise<void>;
  onSubmit: (result?: SelectAnswerVoteSelectionStored[]) => Promise<void>;
}

// XMIID: User/(esm/_T6Ar0I4jEe29qs15q2b6yw)/OperationFormMappedInputSelectorCallOperationPageDefinition
// Name: service::VoteDefinition::VoteDefinition_View_Edit::tabBar::selectanswervote::voteSelectAnswer::Relation::Table::CallSelector
export default function ServiceVoteDefinitionVoteDefinition_View_EditTabBarSelectanswervoteVoteSelectAnswerRelationTableCallSelector(
  props: ServiceVoteDefinitionVoteDefinition_View_EditTabBarSelectanswervoteVoteSelectAnswerRelationTableCallSelectorProps,
) {
  const { ownerData, onClose, onSubmit } = props;

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
  const [data, setData] = useState<SelectAnswerVoteSelectionStored[]>([]);
  const [selectionDiff, setSelectionDiff] = useState<SelectAnswerVoteSelectionStored[]>([]);

  // Pandino Action overrides
  const { service: customActionsHook } =
    useTrackService<ServiceVoteDefinitionVoteDefinition_View_EditTabBarSelectanswervoteVoteSelectAnswerCallOperationActionsHook>(
      `(${OBJECTCLASS}=${SERVICE_VOTE_DEFINITION_VOTE_DEFINITION_VIEW_EDIT_TAB_BAR_SELECTANSWERVOTE_VOTE_SELECT_ANSWER_RELATION_TABLE_CALL_SELECTOR_ACTIONS_HOOK_INTERFACE_KEY})`,
    );
  const customActions:
    | ServiceVoteDefinitionVoteDefinition_View_EditTabBarSelectanswervoteVoteSelectAnswerCallOperationDialogActionsExtended
    | undefined = customActionsHook?.(ownerData, data, editMode, selectionDiff);

  // Dialog hooks
  const openServiceVoteDefinitionVoteDefinition_View_EditTabBarSelectanswervoteVoteSelectAnswerRelationTableCallSelector =
    useServiceVoteDefinitionVoteDefinition_View_EditTabBarSelectanswervoteVoteSelectAnswerRelationTableCallSelector();

  // Calculated section
  const title: string = t(
    'service.VoteDefinition.VoteDefinition_View_Edit.tabBar.selectanswervote.voteSelectAnswer.CallOperation',
    { defaultValue: 'Select Input' },
  );

  // Action section
  const voteSelectAnswerForVoteDefinitionAction = async () => {
    try {
      setIsLoading(true);
      await serviceVoteDefinitionServiceImpl.voteSelectAnswer(ownerData, selectionDiff[0]);
      if (customActions?.postVoteSelectAnswerForVoteDefinitionAction) {
        await customActions.postVoteSelectAnswerForVoteDefinitionAction(
          onClose,
        );
      } else {
        showSuccessSnack(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
        );
        onSubmit(selectionDiff);
      }
    } catch (error) {
      handleError(error);
    } finally {
      setIsLoading(false);
    }
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
    queryCustomizer: SelectAnswerVoteSelectionQueryCustomizer,
  ): Promise<SelectAnswerVoteSelectionStored[]> => {
    try {
      return serviceVoteDefinitionServiceImpl.getRangeOnVoteSelectAnswer(ownerData, queryCustomizer);
    } catch (error) {
      handleError(error);
      return Promise.resolve([]);
    }
  };

  const actions: ServiceVoteDefinitionVoteDefinition_View_EditTabBarSelectanswervoteVoteSelectAnswerCallOperationDialogActions =
    {
      voteSelectAnswerForVoteDefinitionAction,
      backAction,
      filterAction,
      selectorRangeAction,
      ...(customActions ?? {}),
    };

  // Effect section

  return (
    <div
      id="User/(esm/_T6Ar0I4jEe29qs15q2b6yw)/OperationFormMappedInputSelectorCallOperationPageDefinition"
      data-page-name="service::VoteDefinition::VoteDefinition_View_Edit::tabBar::selectanswervote::voteSelectAnswer::Relation::Table::CallSelector"
    >
      <Suspense>
        <ServiceVoteDefinitionVoteDefinition_View_EditTabBarSelectanswervoteVoteSelectAnswerCallOperationDialogContainer
          ownerData={ownerData}
          onClose={onClose}
          title={title}
          actions={actions}
          isLoading={isLoading}
          editMode={editMode}
          refreshCounter={refreshCounter}
          selectionDiff={selectionDiff}
          setSelectionDiff={setSelectionDiff}
        />
      </Suspense>
    </div>
  );
}
