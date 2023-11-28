//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPagesForDialogs(#application)
// Path expression: 'src/dialogs/'+#pagePath(#self)+'.tsx'
// Template name: actor/src/dialogs/index.tsx
// Template file: actor/src/dialogs/index.tsx.hbs

import { useState, lazy, Suspense } from 'react';
import { OBJECTCLASS } from '@pandino/pandino-api';
import { useTrackService } from '@pandino/react-hooks';
import type { JudoIdentifiable } from '@judo/data-api-common';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import type { GridFilterModel } from '@mui/x-data-grid';
import type { Filter, FilterOption } from '~/components-api';
import { useJudoNavigation } from '~/components';
import { useConfirmDialog, useDialog, useFilterDialog } from '~/components/dialog';
import { useSnacks, useCRUDDialog } from '~/hooks';
import { processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';
import type { ServiceSimpleVoteSimpleVote_TableSetSelectorDialogActions } from '~/containers/Service/SimpleVote/SimpleVote_Table/SetSelector/ServiceSimpleVoteSimpleVote_TableSetSelectorDialogContainer';
import type {
  ServiceServiceUser,
  ServiceServiceUserStored,
  ServiceSimpleVote,
  ServiceSimpleVoteQueryCustomizer,
  ServiceSimpleVoteStored,
  SimpleVoteType,
} from '~/services/data-api';
import { serviceServiceUserServiceForVotesImpl } from '~/services/data-axios';
export type ServiceSimpleVoteSimpleVote_TableSetSelectorDialogActionsExtended =
  ServiceSimpleVoteSimpleVote_TableSetSelectorDialogActions & {};

export const SERVICE_SERVICE_USER_VOTES_SET_SELECTOR_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'ServiceSimpleVoteSimpleVote_TableSetSelectorActionsHook';
export type ServiceSimpleVoteSimpleVote_TableSetSelectorActionsHook = (
  ownerData: any,
  data: ServiceSimpleVoteStored[],
  editMode: boolean,
  selectionDiff: ServiceSimpleVoteStored[],
) => ServiceSimpleVoteSimpleVote_TableSetSelectorDialogActionsExtended;

export const useServiceServiceUserVotesSetSelectorPage = (): ((
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
          <ServiceServiceUserVotesSetSelectorPage
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

const ServiceSimpleVoteSimpleVote_TableSetSelectorDialogContainer = lazy(
  () =>
    import(
      '~/containers/Service/SimpleVote/SimpleVote_Table/SetSelector/ServiceSimpleVoteSimpleVote_TableSetSelectorDialogContainer'
    ),
);

export interface ServiceServiceUserVotesSetSelectorPageProps {
  ownerData: any;
  alreadySelected: ServiceSimpleVoteStored[];
  onClose: () => Promise<void>;
  onSubmit: (result?: ServiceSimpleVoteStored[]) => Promise<void>;
}

// XMIID: User/(esm/_qcneEGksEe25ONJ3V89cVA)/RelationFeatureTableSetSelectorPageDefinition
// Name: service::ServiceUser::votes::SetSelectorPage
export default function ServiceServiceUserVotesSetSelectorPage(props: ServiceServiceUserVotesSetSelectorPageProps) {
  const { ownerData, alreadySelected, onClose, onSubmit } = props;

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
  const [data, setData] = useState<ServiceSimpleVoteStored[]>([]);
  const [selectionDiff, setSelectionDiff] = useState<ServiceSimpleVoteStored[]>([]);

  // Pandino Action overrides
  const { service: customActionsHook } = useTrackService<ServiceSimpleVoteSimpleVote_TableSetSelectorActionsHook>(
    `(${OBJECTCLASS}=${SERVICE_SERVICE_USER_VOTES_SET_SELECTOR_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const customActions: ServiceSimpleVoteSimpleVote_TableSetSelectorDialogActionsExtended | undefined =
    customActionsHook?.(ownerData, data, editMode, selectionDiff);

  // Dialog hooks

  // Calculated section
  const title: string = t('service.SimpleVote.SimpleVote_Table.SetSelector', { defaultValue: 'SimpleVote Table' });

  // Action section
  const backAction = async () => {
    onClose();
  };
  const setAction = async (selected: ServiceSimpleVoteStored[]) => {
    onSubmit(selected);
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

  const actions: ServiceSimpleVoteSimpleVote_TableSetSelectorDialogActions = {
    backAction,
    setAction,
    filterAction,
    selectorRangeAction,
    ...(customActions ?? {}),
  };

  // Effect section

  return (
    <div
      id="User/(esm/_qcneEGksEe25ONJ3V89cVA)/RelationFeatureTableSetSelectorPageDefinition"
      data-page-name="service::ServiceUser::votes::SetSelectorPage"
    >
      <Suspense>
        <ServiceSimpleVoteSimpleVote_TableSetSelectorDialogContainer
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
