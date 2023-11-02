import type { BundleContext } from '@pandino/pandino-api';

import {
  SERVICE_ISSUE_CLOSE_DEBATE_ACTION_POST_HANDLER_HOOK_INTERFACE_KEY,
  ServiceIssueCloseDebateActionPostHandlerHook,
} from '~/pages/service/user/user_issues/view/actions/serviceIssue/serviceIssueCloseDebate';

import { useJudoNavigation } from '~/components';
import { processQueryCustomizer } from '~/utilities';

import {
  routeToServiceUserAdminVoteDefinitionsView,
  routeToServiceUserUserOwnedYesNoVoteDefinitionsView,
  routeToServiceUserUserOwnedYesNoAbstainVoteDefinitionsView,
  routeToServiceUserUserOwnedRatingVoteDefinitionsView,
  routeToServiceUserUserOwnedSelectAnswerVoteDefinitionsView,
} from '~/routes';
import { CloseDebateOutputVoteDefinitionReferenceStored } from '~/generated/data-api';
import {
  serviceUserServiceForAdminVoteDefinitionsImpl,
  serviceUserServiceForUserOwnedYesNoVoteDefinitionsImpl,
  serviceUserServiceForUserOwnedYesNoAbstainVoteDefinitionsImpl,
  serviceUserServiceForUserOwnedSelectAnswerVoteDefinitionsImpl,
  serviceUserServiceForUserOwnedRatingVoteDefinitionsImpl,
} from '~/generated/data-axios';

export function registerCustomServiceIssueCloseDebateActionPostHandlerHook(context: BundleContext) {
  context.registerService<ServiceIssueCloseDebateActionPostHandlerHook>(
    SERVICE_ISSUE_CLOSE_DEBATE_ACTION_POST_HANDLER_HOOK_INTERFACE_KEY,
    customServiceIssueCloseDebateActionPostHandlerHook,
  );
}

const customServiceIssueCloseDebateActionPostHandlerHook: ServiceIssueCloseDebateActionPostHandlerHook = () => {
  const { navigate } = useJudoNavigation();

  return async (ownerCallback: () => void, result?: CloseDebateOutputVoteDefinitionReferenceStored) => {
    const id = result!.__identifier;
    const entityType = result!.__entityType;

    const idAccessFilterCustomizer: any = {
      _identifier: id,
    };

    if (entityType == 'edemokracia.YesNoVoteDefinition') {
      // Retrieve signedIdentifier from access
      const res = await serviceUserServiceForUserOwnedYesNoVoteDefinitionsImpl.listUserOwnedYesNoVoteDefinitions(
        processQueryCustomizer(idAccessFilterCustomizer),
      );
      // Open view page in access
      navigate(routeToServiceUserUserOwnedYesNoVoteDefinitionsView(res[0].__signedIdentifier));
    } else if (entityType == 'edemokracia.YesNoAbstainVoteDefinition') {
      // Retrieve signedIdentifier from access
      const res =
        await serviceUserServiceForUserOwnedYesNoAbstainVoteDefinitionsImpl.listUserOwnedYesNoAbstainVoteDefinitions(
          processQueryCustomizer(idAccessFilterCustomizer),
        );
      // Open view page in access
      navigate(routeToServiceUserUserOwnedYesNoAbstainVoteDefinitionsView(res[0].__signedIdentifier));
    } else if (entityType == 'edemokracia.RatingVoteDefinition') {
      // Retrieve signedIdentifier from access
      const res = await serviceUserServiceForUserOwnedRatingVoteDefinitionsImpl.listUserOwnedRatingVoteDefinitions(
        processQueryCustomizer(idAccessFilterCustomizer),
      );
      // Open view page in access
      navigate(routeToServiceUserUserOwnedRatingVoteDefinitionsView(res[0].__signedIdentifier));
    } else if (entityType == 'edemokracia.SelectAnswerVoteDefinition') {
      // Retrieve signedIdentifier from access
      const res =
        await serviceUserServiceForUserOwnedSelectAnswerVoteDefinitionsImpl.listUserOwnedSelectAnswerVoteDefinitions(
          processQueryCustomizer(idAccessFilterCustomizer),
        );
      // Open view page in access
      navigate(routeToServiceUserUserOwnedSelectAnswerVoteDefinitionsView(res[0].__signedIdentifier));
    } else {
      // Retrieve signedIdentifier from access
      const res = await serviceUserServiceForAdminVoteDefinitionsImpl.listAdminVoteDefinitions(
        processQueryCustomizer(idAccessFilterCustomizer),
      );
      // Open view page in access
      navigate(routeToServiceUserAdminVoteDefinitionsView(res[0].__signedIdentifier));
    }
  };
};
