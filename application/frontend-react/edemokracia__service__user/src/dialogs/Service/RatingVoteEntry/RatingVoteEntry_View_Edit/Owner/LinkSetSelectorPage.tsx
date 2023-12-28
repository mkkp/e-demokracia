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
import type { ServiceServiceUserServiceUser_TableSetSelectorDialogActions } from '~/containers/Service/ServiceUser/ServiceUser_Table/SetSelector/ServiceServiceUserServiceUser_TableSetSelectorDialogContainer';
import { useCRUDDialog, useSnacks } from '~/hooks';
import type {
  ServiceRatingVoteEntry,
  ServiceRatingVoteEntryStored,
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { ServiceRatingVoteEntryServiceForOwnerImpl } from '~/services/data-axios/ServiceRatingVoteEntryServiceForOwnerImpl';
import { processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';

export type ServiceServiceUserServiceUser_TableSetSelectorDialogActionsExtended =
  ServiceServiceUserServiceUser_TableSetSelectorDialogActions & {};

export const SERVICE_RATING_VOTE_ENTRY_RATING_VOTE_ENTRY_VIEW_EDIT_OWNER_LINK_SET_SELECTOR_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'ServiceServiceUserServiceUser_TableSetSelectorActionsHook';
export type ServiceServiceUserServiceUser_TableSetSelectorActionsHook = (
  ownerData: any,
  data: ServiceServiceUserStored[],
  editMode: boolean,
  selectionDiff: ServiceServiceUserStored[],
) => ServiceServiceUserServiceUser_TableSetSelectorDialogActionsExtended;

export const useServiceRatingVoteEntryRatingVoteEntry_View_EditOwnerLinkSetSelectorPage = (): ((
  ownerData: any,
  alreadySelected: ServiceServiceUserStored[],
) => Promise<DialogResult<ServiceServiceUserStored[]>>) => {
  const [createDialog, closeDialog] = useDialog();

  return (ownerData: any, alreadySelected: ServiceServiceUserStored[]) =>
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
          <ServiceRatingVoteEntryRatingVoteEntry_View_EditOwnerLinkSetSelectorPage
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

const ServiceServiceUserServiceUser_TableSetSelectorDialogContainer = lazy(
  () =>
    import(
      '~/containers/Service/ServiceUser/ServiceUser_Table/SetSelector/ServiceServiceUserServiceUser_TableSetSelectorDialogContainer'
    ),
);

export interface ServiceRatingVoteEntryRatingVoteEntry_View_EditOwnerLinkSetSelectorPageProps {
  ownerData: any;
  alreadySelected: ServiceServiceUserStored[];
  onClose: () => Promise<void>;
  onSubmit: (result?: ServiceServiceUserStored[]) => Promise<void>;
}

// XMIID: User/(esm/_L_YV8FuXEe6T042_LMmSdQ)/TabularReferenceFieldLinkSetSelectorPageDefinition
// Name: service::RatingVoteEntry::RatingVoteEntry_View_Edit::owner::LinkSetSelectorPage
export default function ServiceRatingVoteEntryRatingVoteEntry_View_EditOwnerLinkSetSelectorPage(
  props: ServiceRatingVoteEntryRatingVoteEntry_View_EditOwnerLinkSetSelectorPageProps,
) {
  const { ownerData, alreadySelected, onClose, onSubmit } = props;

  // Services
  const serviceRatingVoteEntryServiceForOwnerImpl = useMemo(
    () => new ServiceRatingVoteEntryServiceForOwnerImpl(judoAxiosProvider),
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
  const [data, setData] = useState<ServiceServiceUserStored[]>([]);
  const [selectionDiff, setSelectionDiff] = useState<ServiceServiceUserStored[]>([]);

  // Pandino Action overrides
  const { service: customActionsHook } = useTrackService<ServiceServiceUserServiceUser_TableSetSelectorActionsHook>(
    `(${OBJECTCLASS}=${SERVICE_RATING_VOTE_ENTRY_RATING_VOTE_ENTRY_VIEW_EDIT_OWNER_LINK_SET_SELECTOR_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const customActions: ServiceServiceUserServiceUser_TableSetSelectorDialogActionsExtended | undefined =
    customActionsHook?.(ownerData, data, editMode, selectionDiff);

  // Dialog hooks

  // Calculated section
  const title: string = t('service.ServiceUser.ServiceUser_Table.SetSelector', { defaultValue: 'ServiceUser Table' });

  // Private actions
  const submit = async () => {};

  // Action section
  const backAction = async () => {
    onClose();
  };
  const setAction = async (selected: ServiceServiceUserStored[]) => {
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
    queryCustomizer: ServiceServiceUserQueryCustomizer,
  ): Promise<ServiceServiceUserStored[]> => {
    try {
      return serviceRatingVoteEntryServiceForOwnerImpl.getRangeForOwner(ownerData, queryCustomizer);
    } catch (error) {
      handleError(error);
      return Promise.resolve([]);
    }
  };

  const actions: ServiceServiceUserServiceUser_TableSetSelectorDialogActions = {
    backAction,
    setAction,
    filterAction,
    selectorRangeAction,
    ...(customActions ?? {}),
  };

  // Effect section

  return (
    <div
      id="User/(esm/_L_YV8FuXEe6T042_LMmSdQ)/TabularReferenceFieldLinkSetSelectorPageDefinition"
      data-page-name="service::RatingVoteEntry::RatingVoteEntry_View_Edit::owner::LinkSetSelectorPage"
    >
      <Suspense>
        <ServiceServiceUserServiceUser_TableSetSelectorDialogContainer
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