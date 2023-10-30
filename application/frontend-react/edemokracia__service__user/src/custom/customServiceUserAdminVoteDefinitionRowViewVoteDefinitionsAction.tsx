import type { BundleContext } from '@pandino/pandino-api';

import {
  ROW_VIEW_ADMIN_VOTE_DEFINITIONS_ACTION_INTERFACE_KEY,
  RowViewAdminVoteDefinitionsAction,
} from '~/pages/service/user/admin_vote_definitions/table/actions';

import { useJudoNavigation } from '~/components';
import { processQueryCustomizer } from '~/utilities';
import { useDialog } from '~/components/dialog';

import {
  routeToServiceUserAdminVoteDefinitionsView,
  routeToServiceUserUserOwnedYesNoVoteDefinitionsView,
  routeToServiceUserUserOwnedYesNoAbstainVoteDefinitionsView,
  routeToServiceUserUserOwnedRatingVoteDefinitionsView,
  routeToServiceUserUserOwnedSelectAnswerVoteDefinitionsView,
} from '~/routes';

import { ServiceVoteDefinitionStored } from '~/generated/data-api';
import {
  serviceUserServiceForAdminVoteDefinitionsImpl,
  serviceUserServiceForUserOwnedYesNoVoteDefinitionsImpl,
  serviceUserServiceForUserOwnedYesNoAbstainVoteDefinitionsImpl,
  serviceUserServiceForUserOwnedSelectAnswerVoteDefinitionsImpl,
  serviceUserServiceForUserOwnedRatingVoteDefinitionsImpl,
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

  return async function (entry: ServiceVoteDefinitionStored, successCallback: () => void) {
    closeAllDialogs();

    const id = entry!.__identifier;
    const entityType = entry!.__entityType;

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
      navigate(routeToServiceUserAdminVoteDefinitionsView(entry.__signedIdentifier));
    }
  };
};
