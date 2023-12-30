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
import { useParams } from 'react-router-dom';
import { useJudoNavigation } from '~/components';
import type { Filter, FilterOption } from '~/components-api';
import { useConfirmDialog, useFilterDialog } from '~/components/dialog';
import type { ServiceSimpleVoteSimpleVote_TablePageActions } from '~/containers/Service/SimpleVote/SimpleVote_Table/ServiceSimpleVoteSimpleVote_TablePageContainer';
import { useServiceServiceUserVotesAddSelectorPage } from '~/dialogs/Service/ServiceUser/Votes/AddSelectorPage';
import { useCRUDDialog, useSnacks } from '~/hooks';
import { routeToServiceServiceUserVotesRelationViewPage } from '~/routes';
import type {
  ServiceServiceUser,
  ServiceServiceUserStored,
  ServiceSimpleVote,
  ServiceSimpleVoteQueryCustomizer,
  ServiceSimpleVoteStored,
  SimpleVoteType,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { ServiceServiceUserServiceForVotesImpl } from '~/services/data-axios/ServiceServiceUserServiceForVotesImpl';
import { PageContainerTransition } from '~/theme/animations';
import { processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';

export type ServiceSimpleVoteSimpleVote_TablePageActionsExtended = ServiceSimpleVoteSimpleVote_TablePageActions & {
  postRefreshAction?: (data: ServiceSimpleVoteStored[]) => Promise<void>;
};

export const SERVICE_SERVICE_USER_VOTES_RELATION_TABLE_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'ServiceSimpleVoteSimpleVote_TableActionsHook';
export type ServiceSimpleVoteSimpleVote_TableActionsHook = (
  data: ServiceSimpleVoteStored[],
  editMode: boolean,
) => ServiceSimpleVoteSimpleVote_TablePageActionsExtended;

const ServiceSimpleVoteSimpleVote_TablePageContainer = lazy(
  () => import('~/containers/Service/SimpleVote/SimpleVote_Table/ServiceSimpleVoteSimpleVote_TablePageContainer'),
);

// XMIID: User/(esm/_qcneEGksEe25ONJ3V89cVA)/RelationFeatureTable
// Name: service::ServiceUser::votes::RelationTablePage
export default function ServiceServiceUserVotesRelationTablePage() {
  // Router params section
  const { signedIdentifier } = useParams();

  // Services
  const serviceServiceUserServiceForVotesImpl = useMemo(
    () => new ServiceServiceUserServiceForVotesImpl(judoAxiosProvider),
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

  // State section
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [refreshCounter, setRefreshCounter] = useState<number>(0);
  const [data, setData] = useState<ServiceSimpleVoteStored[]>([]);

  // Pandino Action overrides
  const { service: customActionsHook } = useTrackService<ServiceSimpleVoteSimpleVote_TableActionsHook>(
    `(${OBJECTCLASS}=${SERVICE_SERVICE_USER_VOTES_RELATION_TABLE_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const customActions: ServiceSimpleVoteSimpleVote_TablePageActionsExtended | undefined = customActionsHook?.(
    data,
    editMode,
  );

  // Dialog hooks
  const openServiceServiceUserVotesAddSelectorPage = useServiceServiceUserVotesAddSelectorPage();

  // Calculated section
  const title: string = t('service.SimpleVote.SimpleVote_Table', { defaultValue: 'SimpleVote Table' });

  // Private actions
  const submit = async () => {};

  // Action section
  const openAddSelectorAction = async () => {
    const { result, data: returnedData } = await openServiceServiceUserVotesAddSelectorPage(
      { __signedIdentifier: signedIdentifier },
      [],
    );
    if (result === 'submit') {
      if (Array.isArray(returnedData) && returnedData.length) {
        try {
          setIsLoading(true);
          await serviceServiceUserServiceForVotesImpl.addVotes(
            { __signedIdentifier: signedIdentifier } as JudoIdentifiable<any>,
            returnedData,
          );
          setRefreshCounter((prev) => prev + 1);
        } catch (e) {
          console.error(e);
        } finally {
          setIsLoading(false);
        }
      }
    }
  };

  const backAction = async () => {
    navigateBack();
  };
  const bulkRemoveAction = async (
    selectedRows: ServiceSimpleVoteStored[],
  ): Promise<DialogResult<Array<ServiceSimpleVoteStored>>> => {
    return new Promise((resolve) => {
      openCRUDDialog<ServiceSimpleVoteStored>({
        dialogTitle: t('service.SimpleVote.SimpleVote_Table.BulkRemove', { defaultValue: 'Remove' }),
        itemTitleFn: (item) => t('judo.placeholder', { defaultValue: 'placeholder' }) as string,
        selectedItems: selectedRows,
        action: async (item, successHandler: () => void, errorHandler: (error: any) => void) => {
          try {
            if (actions.removeAction) {
              await actions.removeAction!(item, true);
            }
            successHandler();
          } catch (error) {
            errorHandler(error);
          }
        },
        onClose: async (needsRefresh) => {
          if (needsRefresh) {
            setRefreshCounter((prev) => prev + 1);
            resolve({
              result: 'submit',
              data: [],
            });
          } else {
            resolve({
              result: 'close',
            });
          }
        },
      });
    });
  };
  const clearAction = async () => {
    try {
      await serviceServiceUserServiceForVotesImpl.setVotes(
        { __signedIdentifier: signedIdentifier } as JudoIdentifiable<any>,
        [],
      );
      setRefreshCounter((prev) => prev + 1);
    } catch (e) {
      console.error(e);
    }
  };
  const removeAction = async (target?: ServiceSimpleVoteStored, silentMode?: boolean) => {
    if (target) {
      try {
        if (!silentMode) {
          setIsLoading(true);
        }
        await serviceServiceUserServiceForVotesImpl.removeVotes(
          { __signedIdentifier: signedIdentifier } as JudoIdentifiable<any>,
          [target!],
        );
        if (!silentMode) {
          setRefreshCounter((prev) => prev + 1);
        }
      } catch (error) {
        if (!silentMode) {
          handleError<ServiceSimpleVote>(error, undefined, target);
        }
      } finally {
        if (!silentMode) {
          setIsLoading(false);
        }
      }
    }
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
  const refreshAction = async (
    queryCustomizer: ServiceSimpleVoteQueryCustomizer,
  ): Promise<ServiceSimpleVoteStored[]> => {
    try {
      setIsLoading(true);
      setEditMode(false);
      return serviceServiceUserServiceForVotesImpl.list(
        { __signedIdentifier: signedIdentifier } as JudoIdentifiable<any>,
        queryCustomizer,
      );
    } catch (error) {
      handleError(error);
      return Promise.reject(error);
    } finally {
      setIsLoading(false);
      setRefreshCounter((prevCounter) => prevCounter + 1);
    }
  };
  const openPageAction = async (target?: ServiceSimpleVoteStored) => {
    // if the `target` is missing we are likely navigating to a relation table page, in which case we need the owner's id
    navigate(routeToServiceServiceUserVotesRelationViewPage(target!.__signedIdentifier));
  };

  const actions: ServiceSimpleVoteSimpleVote_TablePageActions = {
    openAddSelectorAction,
    backAction,
    bulkRemoveAction,
    clearAction,
    removeAction,
    filterAction,
    refreshAction,
    openPageAction,
    ...(customActions ?? {}),
  };

  // Effect section

  return (
    <div
      id="User/(esm/_qcneEGksEe25ONJ3V89cVA)/RelationFeatureTable"
      data-page-name="service::ServiceUser::votes::RelationTablePage"
    >
      <Suspense>
        <PageContainerTransition>
          <ServiceSimpleVoteSimpleVote_TablePageContainer
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
