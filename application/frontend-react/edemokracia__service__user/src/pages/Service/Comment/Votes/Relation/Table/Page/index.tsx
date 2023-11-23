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
import { routeToServiceCommentVotesRelationViewPage } from '~/routes';
import type { ServiceSimpleVoteSimpleVote_TablePageActions } from '~/containers/Service/SimpleVote/SimpleVote_Table/ServiceSimpleVoteSimpleVote_TablePageContainer';
import type {
  ServiceComment,
  ServiceCommentStored,
  ServiceSimpleVote,
  ServiceSimpleVoteQueryCustomizer,
  ServiceSimpleVoteStored,
  SimpleVoteType,
} from '~/services/data-api';
import { serviceCommentServiceForVotesImpl } from '~/services/data-axios';
export type ServiceSimpleVoteSimpleVote_TablePageActionsExtended = ServiceSimpleVoteSimpleVote_TablePageActions & {};

export const SERVICE_COMMENT_VOTES_RELATION_TABLE_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'ServiceSimpleVoteSimpleVote_TableActionsHook';
export type ServiceSimpleVoteSimpleVote_TableActionsHook = (
  data: ServiceSimpleVoteStored[],
  editMode: boolean,
) => ServiceSimpleVoteSimpleVote_TablePageActionsExtended;

const ServiceSimpleVoteSimpleVote_TablePageContainer = lazy(
  () => import('~/containers/Service/SimpleVote/SimpleVote_Table/ServiceSimpleVoteSimpleVote_TablePageContainer'),
);

// XMIID: User/(esm/_qbA7kGksEe25ONJ3V89cVA)/RelationFeatureTable
// Name: service::Comment::votes::Relation::Table::Page
// Access: false
// Single Access: false
export default function ServiceCommentVotesRelationTablePage() {
  // Router params section
  const { signedIdentifier } = useParams();

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

  // Pandino Action overrides
  const { service: customActionsHook } = useTrackService<ServiceSimpleVoteSimpleVote_TableActionsHook>(
    `(${OBJECTCLASS}=${SERVICE_COMMENT_VOTES_RELATION_TABLE_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const customActions: ServiceSimpleVoteSimpleVote_TablePageActionsExtended | undefined = customActionsHook?.(
    data,
    editMode,
  );

  // Dialog hooks

  // Calculated section
  const title: string = t('service.SimpleVote.SimpleVote_Table', { defaultValue: 'SimpleVote Table' });

  // Action section
  const backAction = async () => {
    navigateBack();
  };
  const openPageAction = async (target?: ServiceSimpleVoteStored) => {
    // if the `target` is missing we are likely navigating to a relation table page, in which case we need the owner's id
    navigate(routeToServiceCommentVotesRelationViewPage(target!.__signedIdentifier));
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
      return serviceCommentServiceForVotesImpl.list(
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

  const actions: ServiceSimpleVoteSimpleVote_TablePageActions = {
    backAction,
    openPageAction,
    filterAction,
    refreshAction,
    ...(customActions ?? {}),
  };

  // Effect section

  return (
    <div
      id="User/(esm/_qbA7kGksEe25ONJ3V89cVA)/RelationFeatureTable"
      data-page-name="service::Comment::votes::Relation::Table::Page"
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
