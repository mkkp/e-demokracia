//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPagesForDialogs(#application)
// Path expression: 'src/dialogs/'+#pagePath(#self)+'/index.tsx'
// Template name: actor/src/dialogs/index.tsx
// Template file: actor/src/dialogs/index.tsx.hbs

import { useCallback, useEffect, useRef, useState, lazy, Suspense } from 'react';
import { OBJECTCLASS } from '@pandino/pandino-api';
import { useTrackService } from '@pandino/react-hooks';
import type { JudoIdentifiable } from '@judo/data-api-common';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import type { GridFilterModel } from '@mui/x-data-grid';
import type { Filter, FilterOption } from '~/components-api';
import { useJudoNavigation } from '~/components';
import { useConfirmDialog, useDialog, useFilterDialog } from '~/components/dialog';
import { toastConfig } from '~/config';
import { useCRUDDialog } from '~/hooks';
import {
  passesLocalValidation,
  processQueryCustomizer,
  uiDateToServiceDate,
  uiTimeToServiceTime,
  useErrorHandler,
} from '~/utilities';
import type { DialogResult } from '~/utilities';
import type { ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteCallOperationDialogActions } from '~/containers/Service/SelectAnswerVoteDefinition/SelectAnswerVoteDefinition_View_Edit/UserVoteEntryGroup/TakeVote/Vote/CallOperation/ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteCallOperationDialogContainer';
import type {
  SelectAnswerVoteSelection,
  SelectAnswerVoteSelectionQueryCustomizer,
  SelectAnswerVoteSelectionStored,
} from '~/services/data-api';
import { serviceSelectAnswerVoteDefinitionServiceImpl } from '~/services/data-axios';
export type ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteCallOperationDialogActionsExtended =
  ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteCallOperationDialogActions & {
    postVoteForSelectAnswerVoteDefinitionAction?: (onClose: () => Promise<void>) => Promise<void>;
  };

export const SERVICE_SELECT_ANSWER_VOTE_DEFINITION_SELECT_ANSWER_VOTE_DEFINITION_VIEW_EDIT_USER_VOTE_ENTRY_GROUP_TAKE_VOTE_VOTE_RELATION_TABLE_CALL_SELECTOR_ACTIONS_HOOK_INTERFACE_KEY =
  'ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteCallOperationActionsHook';
export type ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteCallOperationActionsHook =
  (
    ownerData: any,
    data: SelectAnswerVoteSelectionStored[],
    editMode: boolean,
    selectionDiff: SelectAnswerVoteSelectionStored[],
  ) => ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteCallOperationDialogActionsExtended;

export const useServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteRelationTableCallSelector =
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
            <ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteRelationTableCallSelector
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

const ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteCallOperationDialogContainer =
  lazy(
    () =>
      import(
        '~/containers/Service/SelectAnswerVoteDefinition/SelectAnswerVoteDefinition_View_Edit/UserVoteEntryGroup/TakeVote/Vote/CallOperation/ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteCallOperationDialogContainer'
      ),
  );

export interface ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteRelationTableCallSelectorProps {
  ownerData: any;

  onClose: () => Promise<void>;
  onSubmit: (result?: SelectAnswerVoteSelectionStored[]) => Promise<void>;
}

// XMIID: User/(esm/_0SJy11tuEe6Mx9dH3yj5gQ)/OperationFormMappedInputSelectorCallOperationPageDefinition
// Name: service::SelectAnswerVoteDefinition::SelectAnswerVoteDefinition_View_Edit::userVoteEntryGroup::TakeVote::vote::Relation::Table::CallSelector
// Open in dialog: true
export default function ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteRelationTableCallSelector(
  props: ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteRelationTableCallSelectorProps,
) {
  const { ownerData, onClose, onSubmit } = props;

  // Hooks section
  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();
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
    useTrackService<ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteCallOperationActionsHook>(
      `(${OBJECTCLASS}=${SERVICE_SELECT_ANSWER_VOTE_DEFINITION_SELECT_ANSWER_VOTE_DEFINITION_VIEW_EDIT_USER_VOTE_ENTRY_GROUP_TAKE_VOTE_VOTE_RELATION_TABLE_CALL_SELECTOR_ACTIONS_HOOK_INTERFACE_KEY})`,
    );
  const customActions:
    | ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteCallOperationDialogActionsExtended
    | undefined = customActionsHook?.(ownerData, data, editMode, selectionDiff);

  // Dialog hooks
  const openServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteRelationTableCallSelector =
    useServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteRelationTableCallSelector();

  // Calculated section
  const title: string = t(
    'service.SelectAnswerVoteDefinition.SelectAnswerVoteDefinition_View_Edit.userVoteEntryGroup.TakeVote.vote.CallOperation',
    { defaultValue: 'Select Input' },
  );

  // Action section
  const voteForSelectAnswerVoteDefinitionAction = async () => {
    try {
      setIsLoading(true);
      await serviceSelectAnswerVoteDefinitionServiceImpl.vote(ownerData, selectionDiff[0]);

      if (customActions?.postVoteForSelectAnswerVoteDefinitionAction) {
        await customActions.postVoteForSelectAnswerVoteDefinitionAction(
          onClose,
        );
      } else {
        enqueueSnackbar(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
          {
            variant: 'success',
            ...toastConfig.success,
          },
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
      return serviceSelectAnswerVoteDefinitionServiceImpl.getRangeForVote(ownerData, queryCustomizer);
    } catch (error) {
      handleError(error);
      return Promise.resolve([]);
    }
  };

  const actions: ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteCallOperationDialogActions =
    {
      voteForSelectAnswerVoteDefinitionAction,
      backAction,
      filterAction,
      selectorRangeAction,
      ...(customActions ?? {}),
    };

  // Effect section

  return (
    <div
      id="User/(esm/_0SJy11tuEe6Mx9dH3yj5gQ)/OperationFormMappedInputSelectorCallOperationPageDefinition"
      data-page-name="service::SelectAnswerVoteDefinition::SelectAnswerVoteDefinition_View_Edit::userVoteEntryGroup::TakeVote::vote::Relation::Table::CallSelector"
    >
      <Suspense>
        <ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteCallOperationDialogContainer
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
