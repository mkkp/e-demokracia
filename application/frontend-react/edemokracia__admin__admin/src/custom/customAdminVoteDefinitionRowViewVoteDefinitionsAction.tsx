import type { BundleContext } from '@pandino/pandino-api';

import {
  ROW_VIEW_VOTE_DEFINITIONS_ACTION_INTERFACE_KEY,
  RowViewVoteDefinitionsAction,
} from '~/pages/admin/admin/vote_definitions/table/actions';

import { useJudoNavigation } from '~/components';
import { processQueryCustomizer } from '~/utilities';
import { useDialog } from '~/components/dialog';

import { routeToAdminAdminVoteDefinitionsView, routeToAdminAdminYesNoVoteDefinitionsView } from '~/routes';
import { AdminVoteDefinitionStored } from '~/generated/data-api';
import { adminAdminServiceForYesNoVoteDefinitionsImpl } from '~/generated/data-axios';

export function registerCustomRowViewVoteDefinitionsAction(context: BundleContext) {
  context.registerService<RowViewVoteDefinitionsAction>(
    ROW_VIEW_VOTE_DEFINITIONS_ACTION_INTERFACE_KEY,
    customRowViewVoteDefinitionsAction,
  );
}

const customRowViewVoteDefinitionsAction: RowViewVoteDefinitionsAction = () => {
  const [createDialog, closeDialog, closeAllDialogs] = useDialog();
  const { navigate } = useJudoNavigation();

  return async function (entry: AdminVoteDefinitionStored, successCallback: () => void) {
    closeAllDialogs();

    const id = entry!.__identifier;
    const entityType = entry!.__entityType;

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
      navigate(routeToAdminAdminVoteDefinitionsView(entry.__signedIdentifier));
    }
  };
};
