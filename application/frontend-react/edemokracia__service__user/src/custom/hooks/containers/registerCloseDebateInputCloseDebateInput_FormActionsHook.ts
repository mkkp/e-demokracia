import type { BundleContext } from '@pandino/pandino-api';
import { useTranslation } from 'react-i18next';
import { CLOSE_DEBATE_INPUT_CLOSE_DEBATE_INPUT_FORM_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY } from '~/containers/CloseDebateInput/CloseDebateInput_Form/customization';
import type { CloseDebateInputCloseDebateInput_FormContainerHook } from '~/containers/CloseDebateInput/CloseDebateInput_Form/customization';
import { setVoteType } from '~/custom/services/closeDebateService';

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

  return {
    onVoteTypeBlurAction(data, storeDiff, editMode, submit) {
      console.log('asdasdasdasasdasd');
      setVoteType(data, storeDiff);
    },
  };
};
