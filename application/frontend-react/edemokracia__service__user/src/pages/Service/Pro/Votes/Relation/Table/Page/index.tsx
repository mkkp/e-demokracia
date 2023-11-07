//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPagesForRouting(#application)
// Path expression: 'src/pages/'+#pagePath(#self)+'/index.tsx'
// Template name: actor/src/pages/index.tsx
// Template file: actor/src/pages/index.tsx.hbs

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
import { PageContainerTransition } from '~/theme/animations';
import { routeToServiceProVotesRelationViewPage } from '~/routes';
import type { ServiceSimpleVoteSimpleVote_TablePageActions } from '~/containers/Service/SimpleVote/SimpleVote_Table/ServiceSimpleVoteSimpleVote_TablePageContainer';
import type {
  ServicePro,
  ServiceProStored,
  ServiceSimpleVote,
  ServiceSimpleVoteQueryCustomizer,
  ServiceSimpleVoteStored,
  SimpleVoteType,
} from '~/services/data-api';
import { serviceProServiceForVotesImpl } from '~/services/data-axios';

const ServiceSimpleVoteSimpleVote_TablePageContainer = lazy(
  () => import('~/containers/Service/SimpleVote/SimpleVote_Table/ServiceSimpleVoteSimpleVote_TablePageContainer'),
);

// XMIID: User/(esm/_qSoboGksEe25ONJ3V89cVA)/RelationFeatureTable
// Name: service::Pro::votes::Relation::Table::Page
export default function ServiceProVotesRelationTablePage() {
  // Router params section
  const { signedIdentifier } = useParams();

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

  // Dialog hooks

  // Calculated section
  const title: string = t('Service.SimpleVote.SimpleVote_Table', { defaultValue: 'SimpleVote Table' });

  // Action section
  const serviceSimpleVoteSimpleVote_TableBack = async () => {
    back();
  };
  const serviceSimpleVoteSimpleVote_TableView = async (target?: ServiceSimpleVoteStored) => {
    // if the `target` is missing we are likely navigating to a relation table page, in which case we need the owner's id
    navigate(routeToServiceProVotesRelationViewPage(target!.__signedIdentifier));
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
  const serviceSimpleVoteSimpleVote_TableTableRefresh = async (
    queryCustomizer: ServiceSimpleVoteQueryCustomizer,
  ): Promise<ServiceSimpleVoteStored[]> => {
    try {
      setIsLoading(true);
      setEditMode(false);
      return serviceProServiceForVotesImpl.list(
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
    serviceSimpleVoteSimpleVote_TableBack,
    serviceSimpleVoteSimpleVote_TableView,
    serviceSimpleVoteSimpleVote_TableTableFilter,
    serviceSimpleVoteSimpleVote_TableTableRefresh,
  };

  // Effect section

  return (
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
  );
}
