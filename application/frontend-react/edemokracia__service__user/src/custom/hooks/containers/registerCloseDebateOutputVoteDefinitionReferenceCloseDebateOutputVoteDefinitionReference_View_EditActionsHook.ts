import type { BundleContext } from '@pandino/pandino-api';
import { useTranslation } from 'react-i18next';
import { useJudoNavigation } from '~/components';
import { CLOSE_DEBATE_OUTPUT_VOTE_DEFINITION_REFERENCE_CLOSE_DEBATE_OUTPUT_VOTE_DEFINITION_REFERENCE_VIEW_EDIT_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY } from '~/containers/CloseDebateOutputVoteDefinitionReference/CloseDebateOutputVoteDefinitionReference_View_Edit/customization';
import type { CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_View_EditContainerHook } from '~/containers/CloseDebateOutputVoteDefinitionReference/CloseDebateOutputVoteDefinitionReference_View_Edit/customization';
import { useViewData } from '~/hooks';
import type {
  CloseDebateOutputVoteDefinitionReference,
  CloseDebateOutputVoteDefinitionReferenceStored,
} from '~/services/data-api/model/CloseDebateOutputVoteDefinitionReference';

/**
 * XMIID: User/(esm/_YoAHwVu1Ee6Lb6PYNSnQSA)/TransferObjectViewPageContainer
 * Name: CloseDebateOutputVoteDefinitionReference::CloseDebateOutputVoteDefinitionReference_View_Edit
 *
 * Notes:
 * Don't forget to remove unused hooks, and related imports afterwards to reduce build time and bundle size!
 */
export function registerCloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_View_EditActionsHook(
  context: BundleContext,
) {
  context.registerService<CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_View_EditContainerHook>(
    CLOSE_DEBATE_OUTPUT_VOTE_DEFINITION_REFERENCE_CLOSE_DEBATE_OUTPUT_VOTE_DEFINITION_REFERENCE_VIEW_EDIT_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY,
    closeDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_View_EditActionsHook,
  );
}

const closeDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_View_EditActionsHook: CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_View_EditContainerHook =
  (data, editMode, storeDiff) => {
    // call other hooks here
    const { t } = useTranslation();
    const { navigate, back } = useJudoNavigation();
    const { getLatestViewData } = useViewData();

    return {
      // implement actions here
    };
  };
