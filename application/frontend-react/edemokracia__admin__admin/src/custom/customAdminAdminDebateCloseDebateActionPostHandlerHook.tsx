import type { BundleContext } from '@pandino/pandino-api';

import {
  ADMIN_DEBATE_CLOSE_DEBATE_ACTION_POST_HANDLER_HOOK_INTERFACE_KEY,
  AdminDebateCloseDebateActionPostHandlerHook,
} from '~/pages/admin/admin/user_debates/view/actions/adminDebate/adminDebateCloseDebate';

import { useJudoNavigation } from '~/components';
import { processQueryCustomizer } from '~/utilities';

import {
  routeToAdminAdminAdminVoteDefinitionsView,
  routeToAdminAdminUserOwnedYesNoVoteDefinitionsView,
  routeToAdminAdminUserOwnedYesNoAbstainVoteDefinitionsView,
  routeToAdminAdminUserOwnedRatingVoteDefinitionsView,
  routeToAdminAdminUserOwnedSelectAnswerVoteDefinitionsView,
} from '~/routes';
import { CloseDebateOutputVoteDefinitionReferenceStored } from '~/generated/data-api';
import {
  adminAdminServiceForAdminVoteDefinitionsImpl,
  adminAdminServiceForUserOwnedYesNoVoteDefinitionsImpl,
  adminAdminServiceForUserOwnedYesNoAbstainVoteDefinitionsImpl,
  adminAdminServiceForUserOwnedSelectAnswerVoteDefinitionsImpl,
  adminAdminServiceForUserOwnedRatingVoteDefinitionsImpl,
} from '~/generated/data-axios';

export function registerCustomAdminDebateCloseDebateActionPostHandlerHook(context: BundleContext) {
  context.registerService<AdminDebateCloseDebateActionPostHandlerHook>(
    ADMIN_DEBATE_CLOSE_DEBATE_ACTION_POST_HANDLER_HOOK_INTERFACE_KEY,
    customAdminDebateCloseDebateActionPostHandlerHook,
  );
}

const customAdminDebateCloseDebateActionPostHandlerHook: AdminDebateCloseDebateActionPostHandlerHook = () => {
  const { navigate } = useJudoNavigation();

  return async (ownerCallback: () => void, result?: CloseDebateOutputVoteDefinitionReferenceStored) => {
    const id = result!.__identifier;
    const entityType = result!.__entityType;

    const idAccessFilterCustomizer: any = {
      _identifier: id,
    };

    if (entityType == 'edemokracia.YesNoVoteDefinition') {
      // Retrieve signedIdentifier from access
      const res = await adminAdminServiceForUserOwnedYesNoVoteDefinitionsImpl.listUserOwnedYesNoVoteDefinitions(
        processQueryCustomizer(idAccessFilterCustomizer),
      );
      // Open view page in access
      navigate(routeToAdminAdminUserOwnedYesNoVoteDefinitionsView(res[0].__signedIdentifier));
    } else if (entityType == 'edemokracia.YesNoAbstainVoteDefinition') {
      // Retrieve signedIdentifier from access
      const res =
        await adminAdminServiceForUserOwnedYesNoAbstainVoteDefinitionsImpl.listUserOwnedYesNoAbstainVoteDefinitions(
          processQueryCustomizer(idAccessFilterCustomizer),
        );
      // Open view page in access
      navigate(routeToAdminAdminUserOwnedYesNoAbstainVoteDefinitionsView(res[0].__signedIdentifier));
    } else if (entityType == 'edemokracia.RatingVoteDefinition') {
      // Retrieve signedIdentifier from access
      const res = await adminAdminServiceForUserOwnedRatingVoteDefinitionsImpl.listUserOwnedRatingVoteDefinitions(
        processQueryCustomizer(idAccessFilterCustomizer),
      );
      // Open view page in access
      navigate(routeToAdminAdminUserOwnedRatingVoteDefinitionsView(res[0].__signedIdentifier));
    } else if (entityType == 'edemokracia.SelectAnswerVoteDefinition') {
      // Retrieve signedIdentifier from access
      const res =
        await adminAdminServiceForUserOwnedSelectAnswerVoteDefinitionsImpl.listUserOwnedSelectAnswerVoteDefinitions(
          processQueryCustomizer(idAccessFilterCustomizer),
        );
      // Open view page in access
      navigate(routeToAdminAdminUserOwnedSelectAnswerVoteDefinitionsView(res[0].__signedIdentifier));
    } else {
      // Retrieve signedIdentifier from access
      const res = await adminAdminServiceForAdminVoteDefinitionsImpl.listAdminVoteDefinitions(
        processQueryCustomizer(idAccessFilterCustomizer),
      );
      // Open view page in access
      navigate(routeToAdminAdminAdminVoteDefinitionsView(res[0].__signedIdentifier));
    }
  };
};
