import type { BundleContext } from '@pandino/pandino-api';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useJudoNavigation } from '~/components';
import { CLOSE_DEBATE_INPUT_CLOSE_DEBATE_INPUT_FORM_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY } from '~/containers/CloseDebateInput/CloseDebateInput_Form/customization';
import type { CloseDebateInputCloseDebateInput_FormContainerHook } from '~/containers/CloseDebateInput/CloseDebateInput_Form/customization';
import { setVoteType } from '~/custom/services/closeDebateService';
import { navigteToVoteFromCloseDebate } from '~/custom/services/debateService';
import {
  CloseDebateOutputVoteDefinitionReference,
  CloseDebateOutputVoteDefinitionReferenceStored,
} from '~/services/data-api/model/CloseDebateOutputVoteDefinitionReference';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { UserServiceForRatingVoteDefinitionsImpl } from '~/services/data-axios/UserServiceForRatingVoteDefinitionsImpl';
import { UserServiceForSelectAnswerVoteDefinitionsImpl } from '~/services/data-axios/UserServiceForSelectAnswerVoteDefinitionsImpl';
import { UserServiceForYesNoAbstainVoteDefinitionsImpl } from '~/services/data-axios/UserServiceForYesNoAbstainVoteDefinitionsImpl';
import { UserServiceForYesNoVoteDefinitionsImpl } from '~/services/data-axios/UserServiceForYesNoVoteDefinitionsImpl';

/**
 * XMIID: User/(esm/_NG8HoG6JEe2wNaja8kBvcQ)/TransferObjectFormPageContainer
 * Name: CloseDebateInput::CloseDebateInput_Form
 *
 * Notes:
 * Don't forget to remove unused hooks, and related imports afterwards to reduce build time and bundle size!
 */
export function registerCloseDebateInputCloseDebateInput_FormActionsHook(context: BundleContext) {
  context.registerService<CloseDebateInputCloseDebateInput_FormContainerHook>(
    CLOSE_DEBATE_INPUT_CLOSE_DEBATE_INPUT_FORM_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY,
    closeDebateInputCloseDebateInput_FormActionsHook,
  );
}

const closeDebateInputCloseDebateInput_FormActionsHook: CloseDebateInputCloseDebateInput_FormContainerHook = (
  data,
  editMode,
  storeDiff,
) => {
  // call other hooks here
  const { t } = useTranslation();
  const { navigate } = useJudoNavigation();
  const userServiceForYesNoVoteDefinitionsImpl = useMemo(
    () => new UserServiceForYesNoVoteDefinitionsImpl(judoAxiosProvider),
    [],
  );
  const userServiceForYesNoAbstainVoteDefinitionsImpl = useMemo(
    () => new UserServiceForYesNoAbstainVoteDefinitionsImpl(judoAxiosProvider),
    [],
  );
  const userServiceForRatingVoteDefinitionsImpl = useMemo(
    () => new UserServiceForRatingVoteDefinitionsImpl(judoAxiosProvider),
    [],
  );
  const userServiceForSelectAnswerVoteDefinitionsImpl = useMemo(
    () => new UserServiceForSelectAnswerVoteDefinitionsImpl(judoAxiosProvider),
    [],
  );

  return {
    onVoteTypeBlurAction(data, storeDiff, editMode, submit) {
      setVoteType(data, storeDiff);
    },

    postCloseDebateForIssueAction: async (
      output: CloseDebateOutputVoteDefinitionReference,
      onSubmit: (result?: CloseDebateOutputVoteDefinitionReferenceStored) => Promise<void>,
      onClose: () => Promise<void>,
    ) => {
      await onClose();
      navigteToVoteFromCloseDebate(
        output,
        navigate,
        userServiceForYesNoVoteDefinitionsImpl,
        userServiceForYesNoAbstainVoteDefinitionsImpl,
        userServiceForRatingVoteDefinitionsImpl,
        userServiceForSelectAnswerVoteDefinitionsImpl,
      );
    },
  };
};
