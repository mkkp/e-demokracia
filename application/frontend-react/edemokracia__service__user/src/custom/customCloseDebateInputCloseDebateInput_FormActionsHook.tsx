import type { BundleContext } from '@pandino/pandino-api';
import { useMemo } from 'react';

import { useJudoNavigation } from '~/components';

import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { UserServiceForRatingVoteDefinitionsImpl } from '~/services/data-axios/UserServiceForRatingVoteDefinitionsImpl';
import { UserServiceForSelectAnswerVoteDefinitionsImpl } from '~/services/data-axios/UserServiceForSelectAnswerVoteDefinitionsImpl';
import { UserServiceForYesNoAbstainVoteDefinitionsImpl } from '~/services/data-axios/UserServiceForYesNoAbstainVoteDefinitionsImpl';
import { UserServiceForYesNoVoteDefinitionsImpl } from '~/services/data-axios/UserServiceForYesNoVoteDefinitionsImpl';

import {
  CloseDebateInputCloseDebateInput_FormActionsHook,
  SERVICE_ISSUE_ISSUE_VIEW_EDIT_CLOSE_DEBATE_INPUT_FORM_ACTIONS_HOOK_INTERFACE_KEY,
} from '~/dialogs/Service/Issue/Issue_View_Edit/CloseDebate/Input/Form/customization';
import {
  CloseDebateOutputVoteDefinitionReference,
  CloseDebateOutputVoteDefinitionReferenceStored,
} from '~/services/data-api/model/CloseDebateOutputVoteDefinitionReference';
import { setVoteType } from './services/closeDebateService';
import { navigteToVoteFromCloseDebate } from './services/debateService';

export function registerCloseDebateInputCloseDebateInput_FormActionsHook(context: BundleContext) {
  context.registerService<CloseDebateInputCloseDebateInput_FormActionsHook>(
    SERVICE_ISSUE_ISSUE_VIEW_EDIT_CLOSE_DEBATE_INPUT_FORM_ACTIONS_HOOK_INTERFACE_KEY,
    customCloseDebateInputCloseDebateInput_FormActionsHook,
  );
}

const customCloseDebateInputCloseDebateInput_FormActionsHook: CloseDebateInputCloseDebateInput_FormActionsHook = () => {
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
      console.log('asdasdasdasasdasd');
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
