//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPagesForRouting(#application)
// Path expression: 'src/pages/'+#pagePath(#self)+'.tsx'
// Template name: actor/src/pages/index.tsx
// Template file: actor/src/pages/index.tsx.hbs

import type { GridFilterModel } from '@mui/x-data-grid';
import { OBJECTCLASS } from '@pandino/pandino-api';
import { useTrackService } from '@pandino/react-hooks';
import { Suspense, lazy, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useJudoNavigation } from '~/components';
import type { Filter, FilterOption } from '~/components-api';
import { useConfirmDialog, useFilterDialog } from '~/components/dialog';
import type { ServiceVoteEntryVoteEntry_TablePageActions } from '~/containers/Service/VoteEntry/VoteEntry_Table/ServiceVoteEntryVoteEntry_TablePageContainer';
import { useCRUDDialog, useSnacks } from '~/hooks';
import type {
  ServiceVoteEntry,
  ServiceVoteEntryQueryCustomizer,
  ServiceVoteEntryStored,
  VoteStatus,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { UserServiceForVoteEntriesImpl } from '~/services/data-axios/UserServiceForVoteEntriesImpl';
import { PageContainerTransition } from '~/theme/animations';
import { processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';

export type ServiceVoteEntryVoteEntry_TablePageActionsExtended = ServiceVoteEntryVoteEntry_TablePageActions & {
  postRefreshAction?: (data: ServiceVoteEntryStored[]) => Promise<void>;
};

export const SERVICE_USER_VOTE_ENTRIES_ACCESS_TABLE_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'ServiceVoteEntryVoteEntry_TableActionsHook';
export type ServiceVoteEntryVoteEntry_TableActionsHook = (
  data: ServiceVoteEntryStored[],
  editMode: boolean,
) => ServiceVoteEntryVoteEntry_TablePageActionsExtended;

const ServiceVoteEntryVoteEntry_TablePageContainer = lazy(
  () => import('~/containers/Service/VoteEntry/VoteEntry_Table/ServiceVoteEntryVoteEntry_TablePageContainer'),
);

// XMIID: User/(esm/_0CUYEORyEe2Bgcx6em3jZg)/AccessTablePageDefinition
// Name: service::User::voteEntries::AccessTablePage
export default function ServiceUserVoteEntriesAccessTablePage() {
  // Services
  const userServiceForVoteEntriesImpl = useMemo(() => new UserServiceForVoteEntriesImpl(judoAxiosProvider), []);

  // Hooks section
  const { t } = useTranslation();
  const { showSuccessSnack, showErrorSnack } = useSnacks();
  const { navigate, back: navigateBack } = useJudoNavigation();
  const { openFilterDialog } = useFilterDialog();
  const { openConfirmDialog } = useConfirmDialog();
  const handleError = useErrorHandler();
  const openCRUDDialog = useCRUDDialog();

  // State section
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [refreshCounter, setRefreshCounter] = useState<number>(0);
  const [data, setData] = useState<ServiceVoteEntryStored[]>([]);

  // Pandino Action overrides
  const { service: customActionsHook } = useTrackService<ServiceVoteEntryVoteEntry_TableActionsHook>(
    `(${OBJECTCLASS}=${SERVICE_USER_VOTE_ENTRIES_ACCESS_TABLE_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const customActions: ServiceVoteEntryVoteEntry_TablePageActionsExtended | undefined = customActionsHook?.(
    data,
    editMode,
  );

  // Dialog hooks

  // Calculated section
  const title: string = t('service.VoteEntry.VoteEntry_Table', { defaultValue: 'VoteEntry Table' });

  // Private actions
  const submit = async () => {};

  // Action section
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
      return userServiceForVoteEntriesImpl.list(undefined, queryCustomizer);
    } catch (error) {
      handleError(error);
      return Promise.reject(error);
    } finally {
      setIsLoading(false);
      setRefreshCounter((prevCounter) => prevCounter + 1);
    }
  };
  const openPageAction = async (target?: ServiceVoteEntryStored) => {
    // There was no .targetPageDefinition for this action. Target Page is most likely empty in the model!
  };

  const actions: ServiceVoteEntryVoteEntry_TablePageActions = {
    filterAction,
    refreshAction,
    openPageAction,
    ...(customActions ?? {}),
  };

  // Effect section

  return (
    <div
      id="User/(esm/_0CUYEORyEe2Bgcx6em3jZg)/AccessTablePageDefinition"
      data-page-name="service::User::voteEntries::AccessTablePage"
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
