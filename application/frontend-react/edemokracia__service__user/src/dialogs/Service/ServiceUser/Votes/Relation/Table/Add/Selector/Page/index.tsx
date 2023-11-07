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
import type { ServiceSimpleVoteSimpleVote_TableAddSelectorDialogActions } from '~/containers/Service/SimpleVote/SimpleVote_Table/AddSelector/ServiceSimpleVoteSimpleVote_TableAddSelectorDialogContainer';
import type {
  ServiceServiceUser,
  ServiceServiceUserStored,
  ServiceSimpleVote,
  ServiceSimpleVoteQueryCustomizer,
  ServiceSimpleVoteStored,
  SimpleVoteType,
} from '~/services/data-api';
import { serviceServiceUserServiceForVotesImpl } from '~/services/data-axios';

export const useServiceServiceUserVotesRelationTableAddSelectorPage = (): ((
  ownerData: any,
  alreadySelected: ServiceSimpleVoteStored[],
) => Promise<DialogResult<ServiceSimpleVoteStored[]>>) => {
  const [createDialog, closeDialog] = useDialog();

  return (ownerData: any, alreadySelected: ServiceSimpleVoteStored[]) =>
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
          <ServiceServiceUserVotesRelationTableAddSelectorPage
            ownerData={ownerData}
            alreadySelected={alreadySelected}
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

const ServiceSimpleVoteSimpleVote_TableAddSelectorDialogContainer = lazy(
  () =>
    import(
      '~/containers/Service/SimpleVote/SimpleVote_Table/AddSelector/ServiceSimpleVoteSimpleVote_TableAddSelectorDialogContainer'
    ),
);

export interface ServiceServiceUserVotesRelationTableAddSelectorPageProps {
  ownerData: any;
  alreadySelected: ServiceSimpleVoteStored[];
  onClose: () => void;
  onSubmit: (result?: ServiceSimpleVoteStored[]) => void;
}

// Name: service::ServiceUser::votes::Relation::Table::Add::Selector::Page
export default function ServiceServiceUserVotesRelationTableAddSelectorPage(
  props: ServiceServiceUserVotesRelationTableAddSelectorPageProps,
) {
  const { ownerData, alreadySelected, onClose, onSubmit } = props;

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
  const [data, setData] = useState<ServiceSimpleVoteStored[]>([]);
  const [selectionDiff, setSelectionDiff] = useState<ServiceSimpleVoteStored[]>([]);

  // Dialog hooks

  // Calculated section
  const title: string = t('Service.SimpleVote.SimpleVote_Table.AddSelector', { defaultValue: 'SimpleVote Table' });

  // Action section
  const serviceSimpleVoteSimpleVote_TableAdd = async (selected: ServiceSimpleVoteStored[]) => {
    onSubmit(selected);
  };
  const serviceSimpleVoteSimpleVote_TableBack = async () => {
    onClose();
  };
  const serviceSimpleVoteSimpleVote_TableTableFilter = async (
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
  const serviceSimpleVoteSimpleVote_TableTableRange = async (
    queryCustomizer: ServiceSimpleVoteQueryCustomizer,
  ): Promise<ServiceSimpleVoteStored[]> => {
    try {
      return serviceServiceUserServiceForVotesImpl.getRangeForVotes(ownerData, queryCustomizer);
    } catch (error) {
      handleError(error);
      return Promise.resolve([]);
    }
  };

  const actions: ServiceSimpleVoteSimpleVote_TableAddSelectorDialogActions = {
    serviceSimpleVoteSimpleVote_TableAdd,
    serviceSimpleVoteSimpleVote_TableBack,
    serviceSimpleVoteSimpleVote_TableTableFilter,
    serviceSimpleVoteSimpleVote_TableTableRange,
  };

  // Effect section

  return (
    <>
      <Suspense>
        <ServiceSimpleVoteSimpleVote_TableAddSelectorDialogContainer
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
    </>
  );
}
