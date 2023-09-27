import type { BundleContext } from '@pandino/pandino-api';

import {
  ROW_VIEW_ADMIN_VOTE_DEFINITIONS_ACTION_INTERFACE_KEY,
  RowViewAdminVoteDefinitionsAction,
} from '~/pages/admin/admin/admin_vote_definitions/table/actions';

import { useJudoNavigation } from '~/components';
import { processQueryCustomizer } from '~/utilities';
import { useDialog } from '~/components/dialog';

import {
  routeToAdminAdminAdminVoteDefinitionsView,
  routeToAdminAdminUserOwnedYesNoVoteDefinitionsView,
  routeToAdminAdminUserOwnedYesNoAbstainVoteDefinitionsView,
  routeToAdminAdminUserOwnedRatingVoteDefinitionsView,
  routeToAdminAdminUserOwnedSelectAnswerVoteDefinitionsView,
} from '~/routes';

import { AdminVoteDefinitionStored } from '~/generated/data-api';
import {
  adminAdminServiceForAdminVoteDefinitionsImpl,
  adminAdminServiceForUserOwnedYesNoVoteDefinitionsImpl,
  adminAdminServiceForUserOwnedYesNoAbstainVoteDefinitionsImpl,
  adminAdminServiceForUserOwnedSelectAnswerVoteDefinitionsImpl,
  adminAdminServiceForUserOwnedRatingVoteDefinitionsImpl,
} from '~/generated/data-axios';

export function registerCustomRowViewAdminVoteDefinitionsAction(context: BundleContext) {
  context.registerService<RowViewAdminVoteDefinitionsAction>(
    ROW_VIEW_ADMIN_VOTE_DEFINITIONS_ACTION_INTERFACE_KEY,
    customRowViewAdminVoteDefinitionsAction,
  );
}

const customRowViewAdminVoteDefinitionsAction: RowViewAdminVoteDefinitionsAction = () => {
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
      navigate(routeToAdminAdminAdminVoteDefinitionsView(entry.__signedIdentifier));
    }
  };
};
