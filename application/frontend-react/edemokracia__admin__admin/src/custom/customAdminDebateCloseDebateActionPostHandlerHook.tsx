import type { BundleContext } from '@pandino/pandino-api';

import {
  ADMIN_DEBATE_CLOSE_DEBATE_ACTION_POST_HANDLER_HOOK_INTERFACE_KEY,
  AdminDebateCloseDebateActionPostHandlerHook,
} from '~/pages/admin/admin/debates/view/actions/adminDebate/adminDebateCloseDebate';

import { useJudoNavigation } from '~/components';
import { processQueryCustomizer } from '~/utilities';

import { routeToAdminAdminVoteDefinitionsView, routeToAdminAdminYesNoVoteDefinitionsView } from '~/routes';
import { AdminVoteDefinitionStored } from '~/generated/data-api';
import {
  adminAdminServiceForVoteDefinitionsImpl,
  adminAdminServiceForYesNoVoteDefinitionsImpl,
} from '~/generated/data-axios';

export function registerCustomAdminDebateCloseDebateActionPostHandlerHook(context: BundleContext) {
  context.registerService<AdminDebateCloseDebateActionPostHandlerHook>(
    ADMIN_DEBATE_CLOSE_DEBATE_ACTION_POST_HANDLER_HOOK_INTERFACE_KEY,
    customAdminDebateCloseDebateActionPostHandlerHook,
  );
}

const customAdminDebateCloseDebateActionPostHandlerHook: AdminDebateCloseDebateActionPostHandlerHook = () => {
  const { navigate } = useJudoNavigation();

  return async (ownerCallback: () => void, result?: AdminVoteDefinitionStored) => {
    const id = result!.__identifier;
    const entityType = result!.__entityType;

    const idAccessFilterCustomizer: any = {
      _identifier: id,
    };

    if (entityType == 'edemokracia.YesNoVoteDefinition') {
      // Retrieve signedIdentifier from access
      const res = await adminAdminServiceForYesNoVoteDefinitionsImpl.listYesNoVoteDefinitions(
        processQueryCustomizer(idAccessFilterCustomizer),
      );
      // Open view page in access
      navigate(routeToAdminAdminYesNoVoteDefinitionsView(res[0].__signedIdentifier));
    } else {
      // Retrieve signedIdentifier from access
      const res = await adminAdminServiceForVoteDefinitionsImpl.listVoteDefinitions(
        processQueryCustomizer(idAccessFilterCustomizer),
      );
      // Open view page in access
      navigate(routeToAdminAdminVoteDefinitionsView(res[0].__signedIdentifier));
    }
  };
};
