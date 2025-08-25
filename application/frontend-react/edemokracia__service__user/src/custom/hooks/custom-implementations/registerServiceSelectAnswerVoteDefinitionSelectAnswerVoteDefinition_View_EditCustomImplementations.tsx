import useTheme from '@mui/material/styles/useTheme';
import type { BundleContext } from '@pandino/pandino-api';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useJudoNavigation } from '~/components';
import { SERVICE_SELECT_ANSWER_VOTE_DEFINITION_SELECT_ANSWER_VOTE_DEFINITION_VIEW_EDIT_USER_VOTE_ENTRY_GROUP_COMPONENT } from '~/containers/Service/SelectAnswerVoteDefinition/SelectAnswerVoteDefinition_View_Edit/customization';
import { ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditActionDefinitions } from '~/containers/Service/SelectAnswerVoteDefinition/SelectAnswerVoteDefinition_View_Edit/types';
import {
  CUSTOM_VISUAL_ELEMENT_INTERFACE_KEY,
  type GenericProxyProps,
  type LinkProxyProps,
  type TableProxyProps,
} from '~/custom';
import VoteResultsCard, { AnswerItem, VoteActionParameterType } from '~/custom/components/VoteResultCard';
import { useViewData } from '~/hooks';
import type { ServiceIssue, ServiceIssueStored } from '~/services/data-api/model/ServiceIssue';
import type {
  ServiceSelectAnswerVoteDefinition,
  ServiceSelectAnswerVoteDefinitionStored,
} from '~/services/data-api/model/ServiceSelectAnswerVoteDefinition';
import type {
  ServiceSelectAnswerVoteEntry,
  ServiceSelectAnswerVoteEntryStored,
} from '~/services/data-api/model/ServiceSelectAnswerVoteEntry';
import type {
  ServiceSelectAnswerVoteSelection,
  ServiceSelectAnswerVoteSelectionStored,
} from '~/services/data-api/model/ServiceSelectAnswerVoteSelection';
import type { ServiceServiceUser, ServiceServiceUserStored } from '~/services/data-api/model/ServiceServiceUser';
import { ServiceVoteDefinitionStored } from '~/services/data-api/model/ServiceVoteDefinition';

/**
 * XMIID: User/(esm/_0SJy0FtuEe6Mx9dH3yj5gQ)/GroupVisualElement
 * Name: userVoteEntryGroup
 *
 * Notes:
 * Don't forget to remove unused hooks, and related imports afterwards to reduce build time and bundle size!
 */
export function registerServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupComponentCustomImplementation(
  context: BundleContext,
) {
  context.registerService<
    FC<
      GenericProxyProps<
        ServiceSelectAnswerVoteDefinitionStored,
        ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditActionDefinitions
      >
    >
  >(
    CUSTOM_VISUAL_ELEMENT_INTERFACE_KEY,
    serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupComponentCustomImplementation,
    {
      component:
        SERVICE_SELECT_ANSWER_VOTE_DEFINITION_SELECT_ANSWER_VOTE_DEFINITION_VIEW_EDIT_USER_VOTE_ENTRY_GROUP_COMPONENT,
    },
  );
}

const serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupComponentCustomImplementation: FC<
  GenericProxyProps<
    ServiceSelectAnswerVoteDefinitionStored,
    ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditActionDefinitions
  >
> = (props) => {
  const { data, validation, editMode, storeDiff, isLoading, actions } = props;

  // call other hooks here
  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { getLatestViewData } = useViewData();

  const theme = useTheme();

  async function vote(data: VoteActionParameterType) {
    await actions.voteAction!();
  }
  async function revoke(data: VoteActionParameterType) {
    await actions.takeBackVoteForSelectAnswerVoteDefinitionAction!(data as ServiceSelectAnswerVoteDefinitionStored);
  }

  const answers = data.voteSelections?.map((answer) => ({
    label: answer.title,
    count: answer.sumOfVotes,
  })) as AnswerItem[];

  return (
    <VoteResultsCard
      answers={answers}
      maxItems={8}
      voteDefinition={data}
      vote={vote}
      revoke={revoke}
      voteValue={data.currentUserVoteValue ? (data.currentUserVoteValue as string) : undefined}
    />
  );
};
