//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPagesForDialogs(#application)
// Path expression: 'src/dialogs/'+#pagePath(#self)+'/index.tsx'
// Template name: actor/src/dialogs/index.tsx
// Template file: actor/src/dialogs/index.tsx.hbs

import { useCallback, useEffect, useRef, useState, lazy, Suspense } from 'react';
import { OBJECTCLASS } from '@pandino/pandino-api';
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

export const useServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteRelationTableCallSelector =
  (): ((ownerData: any) => Promise<DialogResult<SelectAnswerVoteSelectionStored[]>>) => {
    const [createDialog, closeDialog] = useDialog();

    return (ownerData: any) =>
      new Promise((resolve) => {
        createDialog({
          fullWidth: true,
          maxWidth: 'md',
          onClose: (event: object, reason: string) => {
            if (reason !== 'backdropClick') {
              closeDialog();
              resolve({
                result: 'close',
              });
            }
          },
          children: (
            <ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteRelationTableCallSelector
              ownerData={ownerData}
              onClose={() => {
                closeDialog();
                resolve({
                  result: 'close',
                });
              }}
              onSubmit={(result) => {
                closeDialog();
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

  onClose: () => void;
  onSubmit: (result?: SelectAnswerVoteSelectionStored[]) => void;
}

// Name: service::SelectAnswerVoteDefinition::SelectAnswerVoteDefinition_View_Edit::userVoteEntryGroup::TakeVote::vote::Relation::Table::CallSelector
export default function ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteRelationTableCallSelector(
  props: ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteRelationTableCallSelectorProps,
) {
  const { ownerData, onClose, onSubmit } = props;

  // Hooks section
  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();
  const { navigate, back } = useJudoNavigation();
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

  // Dialog hooks
  const openServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteRelationTableCallSelector =
    useServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteRelationTableCallSelector();

  // Calculated section
  const title: string = t(
    'Service.SelectAnswerVoteDefinition.SelectAnswerVoteDefinition_View_Edit.UserVoteEntryGroup.TakeVote.Vote.CallOperation',
    { defaultValue: 'Select Input' },
  );

  // Action section
  const serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteCallOperation =
    async () => {
      try {
        setIsLoading(true);
        await serviceSelectAnswerVoteDefinitionServiceImpl.vote(ownerData, selectionDiff[0]);

        enqueueSnackbar(
          t('judo.action.operation.success', { defaultValue: 'Operation executed successfully' }) as string,
          {
            variant: 'success',
            ...toastConfig.success,
          },
        );

        onSubmit(selectionDiff);
      } catch (error) {
        handleError(error);
      } finally {
        setIsLoading(false);
      }
    };
  const serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteBack =
    async () => {
      onClose();
    };
  const serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteTableFilter =
    async (
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
  const serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteTableRange =
    async (queryCustomizer: SelectAnswerVoteSelectionQueryCustomizer): Promise<SelectAnswerVoteSelectionStored[]> => {
      try {
        return serviceSelectAnswerVoteDefinitionServiceImpl.getRangeForVote(ownerData, queryCustomizer);
      } catch (error) {
        handleError(error);
        return Promise.resolve([]);
      }
    };

  const actions: ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteCallOperationDialogActions =
    {
      serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteCallOperation,
      serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteBack,
      serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteTableFilter,
      serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteTableRange,
    };

  // Effect section

  return (
    <>
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
    </>
  );
}
