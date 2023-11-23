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
export type ServiceSimpleVoteSimpleVote_TableAddSelectorDialogActionsExtended =
  ServiceSimpleVoteSimpleVote_TableAddSelectorDialogActions & {};

export const SERVICE_SERVICE_USER_VOTES_RELATION_TABLE_ADD_SELECTOR_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'ServiceSimpleVoteSimpleVote_TableAddSelectorActionsHook';
export type ServiceSimpleVoteSimpleVote_TableAddSelectorActionsHook = (
  ownerData: any,
  data: ServiceSimpleVoteStored[],
  editMode: boolean,
  selectionDiff: ServiceSimpleVoteStored[],
) => ServiceSimpleVoteSimpleVote_TableAddSelectorDialogActionsExtended;

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
        onClose: async (event: object, reason: string) => {
          if (reason !== 'backdropClick') {
            await closeDialog();
            resolve({
              result: 'close',
            });
          }
        },
        children: (
          <ServiceServiceUserVotesRelationTableAddSelectorPage
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

const ServiceSimpleVoteSimpleVote_TableAddSelectorDialogContainer = lazy(
  () =>
    import(
      '~/containers/Service/SimpleVote/SimpleVote_Table/AddSelector/ServiceSimpleVoteSimpleVote_TableAddSelectorDialogContainer'
    ),
);

export interface ServiceServiceUserVotesRelationTableAddSelectorPageProps {
  ownerData: any;
  alreadySelected: ServiceSimpleVoteStored[];
  onClose: () => Promise<void>;
  onSubmit: (result?: ServiceSimpleVoteStored[]) => Promise<void>;
}

// XMIID: User/(esm/_qcneEGksEe25ONJ3V89cVA)/RelationFeatureTableAddSelectorPageDefinition
// Name: service::ServiceUser::votes::Relation::Table::Add::Selector::Page
export default function ServiceServiceUserVotesRelationTableAddSelectorPage(
  props: ServiceServiceUserVotesRelationTableAddSelectorPageProps,
) {
  const { ownerData, alreadySelected, onClose, onSubmit } = props;

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
  const [data, setData] = useState<ServiceSimpleVoteStored[]>([]);
  const [selectionDiff, setSelectionDiff] = useState<ServiceSimpleVoteStored[]>([]);

  // Pandino Action overrides
  const { service: customActionsHook } = useTrackService<ServiceSimpleVoteSimpleVote_TableAddSelectorActionsHook>(
    `(${OBJECTCLASS}=${SERVICE_SERVICE_USER_VOTES_RELATION_TABLE_ADD_SELECTOR_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const customActions: ServiceSimpleVoteSimpleVote_TableAddSelectorDialogActionsExtended | undefined =
    customActionsHook?.(ownerData, data, editMode, selectionDiff);

  // Dialog hooks

  // Calculated section
  const title: string = t('service.SimpleVote.SimpleVote_Table.AddSelector', { defaultValue: 'SimpleVote Table' });

  // Action section
  const addAction = async (selected: ServiceSimpleVoteStored[]) => {
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
    addAction,
    backAction,
    filterAction,
    selectorRangeAction,
    ...(customActions ?? {}),
  };

  // Effect section

  return (
    <div
      id="User/(esm/_qcneEGksEe25ONJ3V89cVA)/RelationFeatureTableAddSelectorPageDefinition"
      data-page-name="service::ServiceUser::votes::Relation::Table::Add::Selector::Page"
    >
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
    </div>
  );
}
