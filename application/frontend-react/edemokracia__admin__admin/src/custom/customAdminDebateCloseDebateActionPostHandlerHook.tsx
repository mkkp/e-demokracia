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
    // 1. Retrieve result identifier
    const resultId = result!.__identifier;

    // 2. Retrieve signedIdentifier from access
    const idAccessFilterCustomizer: any = {
      _identifier: resultId,
    };

    const res = await adminAdminServiceForVoteDefinitionsImpl.listVoteDefinitions(
      processQueryCustomizer(idAccessFilterCustomizer),
    );

    // 3. Open view page in access
    navigate(routeToAdminAdminVoteDefinitionsView(res[0].__signedIdentifier));
    //  navigate(routeToAdminAdminYesNoVoteDefinitionsView(entry.__signedIdentifier));
  };
};
