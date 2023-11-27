import type { BundleContext } from '@pandino/pandino-api';

import { useJudoNavigation } from '~/components';
import { processQueryCustomizer } from '~/utilities';

import {
  CloseDebateOutputVoteDefinitionReference,
  CloseDebateOutputVoteDefinitionReferenceStored,
} from '~/services/data-api';

import {
  CloseDebateInputCloseDebateInput_FormActionsHook,
  SERVICE_ISSUE_ISSUE_VIEW_EDIT_CLOSE_DEBATE_INPUT_FORM_ACTIONS_HOOK_INTERFACE_KEY,
} from '~/dialogs/Service/Issue/Issue_View_Edit/CloseDebate/Input/Form';

import {
  userServiceForUserOwnedRatingVoteDefinitionsImpl,
  userServiceForUserOwnedSelectAnswerVoteDefinitionsImpl,
  userServiceForUserOwnedYesNoAbstainVoteDefinitionsImpl,
  userServiceForUserOwnedYesNoVoteDefinitionsImpl,
} from '~/services/data-axios';

import {
  routeToServiceUserAdminVoteDefinitionsAccessViewPage,
  routeToServiceUserUserOwnedRatingVoteDefinitionsAccessViewPage,
  routeToServiceUserUserOwnedSelectAnswerVoteDefinitionsAccessViewPage,
  routeToServiceUserUserOwnedYesNoAbstainVoteDefinitionsAccessViewPage,
  routeToServiceUserUserOwnedYesNoVoteDefinitionsAccessViewPage,
} from '~/routes';

export function registerCloseDebateInputCloseDebateInput_FormActionsHook(context: BundleContext) {
  context.registerService<CloseDebateInputCloseDebateInput_FormActionsHook>(
    SERVICE_ISSUE_ISSUE_VIEW_EDIT_CLOSE_DEBATE_INPUT_FORM_ACTIONS_HOOK_INTERFACE_KEY,
    customCloseDebateInputCloseDebateInput_FormActionsHook,
  );
}

const customCloseDebateInputCloseDebateInput_FormActionsHook: CloseDebateInputCloseDebateInput_FormActionsHook = () => {
  const { navigate } = useJudoNavigation();

  return {
    postCloseDebateForIssueAction: async (
      output: CloseDebateOutputVoteDefinitionReference,
      onSubmit: (result?: CloseDebateOutputVoteDefinitionReferenceStored) => Promise<void>,
      onClose: () => Promise<void>,
    ) => {
      // 1. Retrieve result identifier
      // TODO: Use output as stored type
      const id = (output as any)!.__identifier;
      const signedId = (output as any)!.__signedIdentifier;
      const entityType = (output as any)!.__entityType;

      // 2. Retrieve signedIdentifier from access
      const idAccessFilterCustomizer: any = {
        _identifier: id,
      };

      await onClose();

      // 3. Open view page in access
      if (entityType == 'edemokracia.YesNoVoteDefinition') {
        // Retrieve signedIdentifier from access
        const res = await userServiceForUserOwnedYesNoVoteDefinitionsImpl.list(
          processQueryCustomizer(idAccessFilterCustomizer),
        );
        // Open view page in access
        navigate(routeToServiceUserUserOwnedYesNoVoteDefinitionsAccessViewPage(res[0].__signedIdentifier));
      } else if (entityType == 'edemokracia.YesNoAbstainVoteDefinition') {
        // Retrieve signedIdentifier from access
        const res = await userServiceForUserOwnedYesNoAbstainVoteDefinitionsImpl.list(
          processQueryCustomizer(idAccessFilterCustomizer),
        );
        // Open view page in access
        navigate(routeToServiceUserUserOwnedYesNoAbstainVoteDefinitionsAccessViewPage(res[0].__signedIdentifier));
      } else if (entityType == 'edemokracia.RatingVoteDefinition') {
        // Retrieve signedIdentifier from access
        const res = await userServiceForUserOwnedRatingVoteDefinitionsImpl.list(
          processQueryCustomizer(idAccessFilterCustomizer),
        );
        // Open view page in access
        navigate(routeToServiceUserUserOwnedRatingVoteDefinitionsAccessViewPage(res[0].__signedIdentifier));
      } else if (entityType == 'edemokracia.SelectAnswerVoteDefinition') {
        // Retrieve signedIdentifier from access
        const res = await userServiceForUserOwnedSelectAnswerVoteDefinitionsImpl.list(
          processQueryCustomizer(idAccessFilterCustomizer),
        );
        // Open view page in access
        navigate(routeToServiceUserUserOwnedSelectAnswerVoteDefinitionsAccessViewPage(res[0].__signedIdentifier));
      } else {
        navigate(routeToServiceUserAdminVoteDefinitionsAccessViewPage(signedId));
      }
    },
  };
};
