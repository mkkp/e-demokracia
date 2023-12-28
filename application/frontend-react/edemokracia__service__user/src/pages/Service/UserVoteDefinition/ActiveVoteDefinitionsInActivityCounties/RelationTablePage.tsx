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
import type { ServiceVoteDefinitionVoteDefinition_TablePageActions } from '~/containers/Service/VoteDefinition/VoteDefinition_Table/ServiceVoteDefinitionVoteDefinition_TablePageContainer';
import { useServiceVoteDefinitionVoteDefinition_View_EditTabBarSelectanswervoteVoteSelectAnswerRelationTableCallSelector } from '~/dialogs/Service/VoteDefinition/VoteDefinition_View_Edit/TabBar/Selectanswervote/VoteSelectAnswer/Relation/Table/CallSelector';
import { useServiceVoteDefinitionVoteDefinition_View_EditVoteRatingInputForm } from '~/dialogs/Service/VoteDefinition/VoteDefinition_View_Edit/VoteRating/Input/Form';
import { useServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoInputForm } from '~/dialogs/Service/VoteDefinition/VoteDefinition_View_Edit/VoteYesNo/Input/Form';
import { useServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoAbstainInputForm } from '~/dialogs/Service/VoteDefinition/VoteDefinition_View_Edit/VoteYesNoAbstain/Input/Form';
import { useCRUDDialog, useSnacks } from '~/hooks';
import { routeToServiceUserVoteDefinitionActiveVoteDefinitionsInActivityCountiesRelationViewPage } from '~/routes';
import type {
  IssueScope,
  ServiceUserVoteDefinition,
  ServiceUserVoteDefinitionStored,
  ServiceVoteDefinition,
  ServiceVoteDefinitionQueryCustomizer,
  ServiceVoteDefinitionStored,
  VoteStatus,
  VoteType,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { ServiceUserVoteDefinitionServiceForActiveVoteDefinitionsInActivityCountiesImpl } from '~/services/data-axios/ServiceUserVoteDefinitionServiceForActiveVoteDefinitionsInActivityCountiesImpl';
import { PageContainerTransition } from '~/theme/animations';
import { processQueryCustomizer, useErrorHandler } from '~/utilities';
import type { DialogResult } from '~/utilities';

export type ServiceVoteDefinitionVoteDefinition_TablePageActionsExtended =
  ServiceVoteDefinitionVoteDefinition_TablePageActions & {
    postRefreshAction?: (data: ServiceVoteDefinitionStored[]) => Promise<void>;
  };

export const SERVICE_USER_VOTE_DEFINITION_ACTIVE_VOTE_DEFINITIONS_IN_ACTIVITY_COUNTIES_RELATION_TABLE_PAGE_ACTIONS_HOOK_INTERFACE_KEY =
  'ServiceVoteDefinitionVoteDefinition_TableActionsHook';
export type ServiceVoteDefinitionVoteDefinition_TableActionsHook = (
  data: ServiceVoteDefinitionStored[],
  editMode: boolean,
) => ServiceVoteDefinitionVoteDefinition_TablePageActionsExtended;

const ServiceVoteDefinitionVoteDefinition_TablePageContainer = lazy(
  () =>
    import(
      '~/containers/Service/VoteDefinition/VoteDefinition_Table/ServiceVoteDefinitionVoteDefinition_TablePageContainer'
    ),
);

// XMIID: User/(esm/_O_SswF5BEe6vsex_cZNQbQ)/RelationFeatureTable
// Name: service::UserVoteDefinition::activeVoteDefinitionsInActivityCounties::RelationTablePage
export default function ServiceUserVoteDefinitionActiveVoteDefinitionsInActivityCountiesRelationTablePage() {
  // Router params section
  const { signedIdentifier } = useParams();

  // Services
  const serviceUserVoteDefinitionServiceForActiveVoteDefinitionsInActivityCountiesImpl = useMemo(
    () => new ServiceUserVoteDefinitionServiceForActiveVoteDefinitionsInActivityCountiesImpl(judoAxiosProvider),
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
  const [data, setData] = useState<ServiceVoteDefinitionStored[]>([]);

  // Pandino Action overrides
  const { service: customActionsHook } = useTrackService<ServiceVoteDefinitionVoteDefinition_TableActionsHook>(
    `(${OBJECTCLASS}=${SERVICE_USER_VOTE_DEFINITION_ACTIVE_VOTE_DEFINITIONS_IN_ACTIVITY_COUNTIES_RELATION_TABLE_PAGE_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const customActions: ServiceVoteDefinitionVoteDefinition_TablePageActionsExtended | undefined = customActionsHook?.(
    data,
    editMode,
  );

  // Dialog hooks
  const openServiceVoteDefinitionVoteDefinition_View_EditTabBarSelectanswervoteVoteSelectAnswerRelationTableCallSelector =
    useServiceVoteDefinitionVoteDefinition_View_EditTabBarSelectanswervoteVoteSelectAnswerRelationTableCallSelector();
  const openServiceVoteDefinitionVoteDefinition_View_EditVoteRatingInputForm =
    useServiceVoteDefinitionVoteDefinition_View_EditVoteRatingInputForm();
  const openServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoInputForm =
    useServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoInputForm();
  const openServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoAbstainInputForm =
    useServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoAbstainInputForm();

  // Calculated section
  const title: string = t('service.VoteDefinition.VoteDefinition_Table', { defaultValue: 'VoteDefinition Table' });

  // Private actions
  const submit = async () => {};

  // Action section
  const backAction = async () => {
    navigateBack();
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
    queryCustomizer: ServiceVoteDefinitionQueryCustomizer,
  ): Promise<ServiceVoteDefinitionStored[]> => {
    try {
      setIsLoading(true);
      setEditMode(false);
      return serviceUserVoteDefinitionServiceForActiveVoteDefinitionsInActivityCountiesImpl.list(
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
  const openPageAction = async (target?: ServiceVoteDefinitionStored) => {
    // if the `target` is missing we are likely navigating to a relation table page, in which case we need the owner's id
    navigate(
      routeToServiceUserVoteDefinitionActiveVoteDefinitionsInActivityCountiesRelationViewPage(
        target!.__signedIdentifier,
      ),
    );
  };
  const voteRatingAction = async (target: ServiceVoteDefinitionStored) => {
    const { result, data: returnedData } =
      await openServiceVoteDefinitionVoteDefinition_View_EditVoteRatingInputForm(target);
    if (result === 'submit') {
      setRefreshCounter((prev) => prev + 1);
    }
  };
  const voteSelectAnswerAction = async () => {
    const { result, data: returnedData } =
      await openServiceVoteDefinitionVoteDefinition_View_EditTabBarSelectanswervoteVoteSelectAnswerRelationTableCallSelector(
        [],
      );
    if (result === 'submit') {
    }
  };
  const voteYesNoAbstainAction = async (target: ServiceVoteDefinitionStored) => {
    const { result, data: returnedData } =
      await openServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoAbstainInputForm(target);
    if (result === 'submit') {
      setRefreshCounter((prev) => prev + 1);
    }
  };
  const voteYesNoAction = async (target: ServiceVoteDefinitionStored) => {
    const { result, data: returnedData } =
      await openServiceVoteDefinitionVoteDefinition_View_EditVoteYesNoInputForm(target);
    if (result === 'submit') {
      setRefreshCounter((prev) => prev + 1);
    }
  };

  const actions: ServiceVoteDefinitionVoteDefinition_TablePageActions = {
    backAction,
    filterAction,
    refreshAction,
    openPageAction,
    voteRatingAction,
    voteSelectAnswerAction,
    voteYesNoAbstainAction,
    voteYesNoAction,
    ...(customActions ?? {}),
  };

  // Effect section

  return (
    <div
      id="User/(esm/_O_SswF5BEe6vsex_cZNQbQ)/RelationFeatureTable"
      data-page-name="service::UserVoteDefinition::activeVoteDefinitionsInActivityCounties::RelationTablePage"
    >
      <Suspense>
        <PageContainerTransition>
          <ServiceVoteDefinitionVoteDefinition_TablePageContainer
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
