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
import { PageContainerTransition } from '~/theme/animations';
import type { ServiceVoteEntryVoteEntry_TablePageActions } from '~/containers/Service/VoteEntry/VoteEntry_Table/ServiceVoteEntryVoteEntry_TablePageContainer';
import type {
  ServiceVoteEntry,
  ServiceVoteEntryQueryCustomizer,
  ServiceVoteEntryStored,
  VoteStatus,
} from '~/services/data-api';
import { userServiceForUserOwnedVoteEntriesImpl } from '~/services/data-axios';
export type ServiceVoteEntryVoteEntry_TablePageActionsExtended = ServiceVoteEntryVoteEntry_TablePageActions & {};

export const SERVICE_USER_USER_OWNED_VOTE_ENTRIES_ACCESS_TABLE_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'ServiceVoteEntryVoteEntry_TableActionsHook';
export type ServiceVoteEntryVoteEntry_TableActionsHook = (
  data: ServiceVoteEntryStored[],
  editMode: boolean,
) => ServiceVoteEntryVoteEntry_TablePageActionsExtended;

const ServiceVoteEntryVoteEntry_TablePageContainer = lazy(
  () => import('~/containers/Service/VoteEntry/VoteEntry_Table/ServiceVoteEntryVoteEntry_TablePageContainer'),
);

// XMIID: User/(esm/_0CUYEORyEe2Bgcx6em3jZg)/AccessTablePageDefinition
// Name: service::User::userOwnedVoteEntries::Access::Table::Page
// Access: true
// Single Access: false
export default function ServiceUserUserOwnedVoteEntriesAccessTablePage() {
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
  const [data, setData] = useState<ServiceVoteEntryStored[]>([]);

  // Pandino Action overrides
  const { service: customActionsHook } = useTrackService<ServiceVoteEntryVoteEntry_TableActionsHook>(
    `(${OBJECTCLASS}=${SERVICE_USER_USER_OWNED_VOTE_ENTRIES_ACCESS_TABLE_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const customActions: ServiceVoteEntryVoteEntry_TablePageActionsExtended | undefined = customActionsHook?.(
    data,
    editMode,
  );

  // Dialog hooks

  // Calculated section
  const title: string = t('service.VoteEntry.VoteEntry_Table', { defaultValue: 'VoteEntry Table' });

  // Action section
  const openPageAction = async (target?: ServiceVoteEntryStored) => {
    // There was no .targetPageDefinition for this action. Target Page is most likely empty in the model!
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
  const refreshAction = async (queryCustomizer: ServiceVoteEntryQueryCustomizer): Promise<ServiceVoteEntryStored[]> => {
    try {
      setIsLoading(true);
      setEditMode(false);
      return userServiceForUserOwnedVoteEntriesImpl.list(undefined, queryCustomizer);
    } catch (error) {
      handleError(error);
      return Promise.reject(error);
    } finally {
      setIsLoading(false);
      setRefreshCounter((prevCounter) => prevCounter + 1);
    }
  };

  const actions: ServiceVoteEntryVoteEntry_TablePageActions = {
    openPageAction,
    filterAction,
    refreshAction,
    ...(customActions ?? {}),
  };

  // Effect section

  return (
    <div
      id="User/(esm/_0CUYEORyEe2Bgcx6em3jZg)/AccessTablePageDefinition"
      data-page-name="service::User::userOwnedVoteEntries::Access::Table::Page"
    >
      <Suspense>
        <PageContainerTransition>
          <ServiceVoteEntryVoteEntry_TablePageContainer
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
