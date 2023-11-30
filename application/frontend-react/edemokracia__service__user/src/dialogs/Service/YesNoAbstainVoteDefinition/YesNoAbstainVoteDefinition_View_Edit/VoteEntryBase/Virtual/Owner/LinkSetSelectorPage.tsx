//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPagesForDialogs(#application)
// Path expression: 'src/dialogs/'+#pagePath(#self)+'.tsx'
// Template name: actor/src/dialogs/index.tsx
// Template file: actor/src/dialogs/index.tsx.hbs

import { useState, useMemo, lazy, Suspense } from 'react';
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
import type { ServiceServiceUserServiceUser_TableSetSelectorDialogActions } from '~/containers/Service/ServiceUser/ServiceUser_Table/SetSelector/ServiceServiceUserServiceUser_TableSetSelectorDialogContainer';
import type {
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
  ServiceYesNoAbstainVoteDefinition,
  ServiceYesNoAbstainVoteDefinitionStored,
} from '~/services/data-api';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { ServiceYesNoAbstainVoteDefinitionServiceForOwnerImpl } from '~/services/data-axios/ServiceYesNoAbstainVoteDefinitionServiceForOwnerImpl';

export type ServiceServiceUserServiceUser_TableSetSelectorDialogActionsExtended =
  ServiceServiceUserServiceUser_TableSetSelectorDialogActions & {};

export const SERVICE_YES_NO_ABSTAIN_VOTE_DEFINITION_YES_NO_ABSTAIN_VOTE_DEFINITION_VIEW_EDIT_VOTE_ENTRY_BASE_VIRTUAL_OWNER_LINK_SET_SELECTOR_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'ServiceServiceUserServiceUser_TableSetSelectorActionsHook';
export type ServiceServiceUserServiceUser_TableSetSelectorActionsHook = (
  ownerData: any,
  data: ServiceServiceUserStored[],
  editMode: boolean,
  selectionDiff: ServiceServiceUserStored[],
) => ServiceServiceUserServiceUser_TableSetSelectorDialogActionsExtended;

export const useServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditVoteEntryBaseVirtualOwnerLinkSetSelectorPage =
  (): ((
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
            <ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditVoteEntryBaseVirtualOwnerLinkSetSelectorPage
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

export interface ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditVoteEntryBaseVirtualOwnerLinkSetSelectorPageProps {
  ownerData: any;
  alreadySelected: ServiceServiceUserStored[];
  onClose: () => Promise<void>;
  onSubmit: (result?: ServiceServiceUserStored[]) => Promise<void>;
}

// XMIID: User/(esm/_hxteEHz6Ee6Q9LyUVjs1Qw)/TabularReferenceFieldLinkSetSelectorPageDefinition
// Name: service::YesNoAbstainVoteDefinition::YesNoAbstainVoteDefinition_View_Edit::VoteEntryBase::virtual::owner::LinkSetSelectorPage
export default function ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditVoteEntryBaseVirtualOwnerLinkSetSelectorPage(
  props: ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditVoteEntryBaseVirtualOwnerLinkSetSelectorPageProps,
) {
  const { ownerData, alreadySelected, onClose, onSubmit } = props;

  // Services
  const serviceYesNoAbstainVoteDefinitionServiceForOwnerImpl = useMemo(
    () => new ServiceYesNoAbstainVoteDefinitionServiceForOwnerImpl(judoAxiosProvider),
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
    `(${OBJECTCLASS}=${SERVICE_YES_NO_ABSTAIN_VOTE_DEFINITION_YES_NO_ABSTAIN_VOTE_DEFINITION_VIEW_EDIT_VOTE_ENTRY_BASE_VIRTUAL_OWNER_LINK_SET_SELECTOR_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
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
      return serviceYesNoAbstainVoteDefinitionServiceForOwnerImpl.getRangeForOwner(ownerData, queryCustomizer);
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
      id="User/(esm/_hxteEHz6Ee6Q9LyUVjs1Qw)/TabularReferenceFieldLinkSetSelectorPageDefinition"
      data-page-name="service::YesNoAbstainVoteDefinition::YesNoAbstainVoteDefinition_View_Edit::VoteEntryBase::virtual::owner::LinkSetSelectorPage"
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
