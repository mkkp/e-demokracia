/**
 * When navigate to selected subtypes view page on userOwedSelected
 */

import type { BundleContext } from '@pandino/pandino-api';
import { useMemo } from 'react';

import { useJudoNavigation } from '~/components';
import { useDialog } from '~/components/dialog';
import { processQueryCustomizer } from '~/utilities';

import {
  SERVICE_USER_ADMIN_VOTE_DEFINITIONS_ACCESS_TABLE_PAGE_ACTIONS_HOOK_INTERFACE_KEY,
  ServiceVoteDefinitionVoteDefinition_TableActionsHook,
} from '~/pages/Service/User/AdminVoteDefinitions/AccessTablePage';

import type { ServiceVoteDefinitionStored } from '~/services/data-api';

import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { UserServiceForUserOwnedRatingVoteDefinitionsImpl } from '~/services/data-axios/UserServiceForUserOwnedRatingVoteDefinitionsImpl';
import { UserServiceForUserOwnedSelectAnswerVoteDefinitionsImpl } from '~/services/data-axios/UserServiceForUserOwnedSelectAnswerVoteDefinitionsImpl';
import { UserServiceForUserOwnedYesNoAbstainVoteDefinitionsImpl } from '~/services/data-axios/UserServiceForUserOwnedYesNoAbstainVoteDefinitionsImpl';
import { UserServiceForUserOwnedYesNoVoteDefinitionsImpl } from '~/services/data-axios/UserServiceForUserOwnedYesNoVoteDefinitionsImpl';

import {
  routeToServiceUserAdminVoteDefinitionsAccessViewPage,
  routeToServiceUserUserOwnedRatingVoteDefinitionsAccessViewPage,
  routeToServiceUserUserOwnedSelectAnswerVoteDefinitionsAccessViewPage,
  routeToServiceUserUserOwnedYesNoAbstainVoteDefinitionsAccessViewPage,
  routeToServiceUserUserOwnedYesNoVoteDefinitionsAccessViewPage,
} from '~/routes';

export function registerServiceVoteDefinitionVoteDefinition_TableActionsHook(context: BundleContext) {
  context.registerService<ServiceVoteDefinitionVoteDefinition_TableActionsHook>(
    SERVICE_USER_ADMIN_VOTE_DEFINITIONS_ACCESS_TABLE_PAGE_ACTIONS_HOOK_INTERFACE_KEY,
    customServiceVoteDefinitionVoteDefinition_TableActionsHook,
  );
}

const customServiceVoteDefinitionVoteDefinition_TableActionsHook: ServiceVoteDefinitionVoteDefinition_TableActionsHook =
  () => {
    const [createDialog, closeDialog, closeAllDialogs] = useDialog();
    const { navigate } = useJudoNavigation();
    const userServiceForUserOwnedRatingVoteDefinitionsImpl = useMemo(
      () => new UserServiceForUserOwnedRatingVoteDefinitionsImpl(judoAxiosProvider),
      [],
    );
    const userServiceForUserOwnedSelectAnswerVoteDefinitionsImpl = useMemo(
      () => new UserServiceForUserOwnedSelectAnswerVoteDefinitionsImpl(judoAxiosProvider),
      [],
    );
    const userServiceForUserOwnedYesNoAbstainVoteDefinitionsImpl = useMemo(
      () => new UserServiceForUserOwnedYesNoAbstainVoteDefinitionsImpl(judoAxiosProvider),
      [],
    );
    const userServiceForUserOwnedYesNoVoteDefinitionsImpl = useMemo(
      () => new UserServiceForUserOwnedYesNoVoteDefinitionsImpl(judoAxiosProvider),
      [],
    );

    return {
      openPageAction: async (row: ServiceVoteDefinitionStored) => {
        closeAllDialogs();

        const id = row!.__identifier;
        const entityType = row!.__entityType;

        const idAccessFilterCustomizer: any = {
          _identifier: id,
        };

        if (entityType === 'edemokracia.YesNoVoteDefinition') {
          // Retrieve signedIdentifier from access
          const res = await userServiceForUserOwnedYesNoVoteDefinitionsImpl.list(
            processQueryCustomizer(idAccessFilterCustomizer),
          );
          // Open view page in access
          navigate(routeToServiceUserUserOwnedYesNoVoteDefinitionsAccessViewPage(res[0].__signedIdentifier));
        } else if (entityType === 'edemokracia.YesNoAbstainVoteDefinition') {
          // Retrieve signedIdentifier from access
          const res = await userServiceForUserOwnedYesNoAbstainVoteDefinitionsImpl.list(
            processQueryCustomizer(idAccessFilterCustomizer),
          );
          // Open view page in access
          navigate(routeToServiceUserUserOwnedYesNoAbstainVoteDefinitionsAccessViewPage(res[0].__signedIdentifier));
        } else if (entityType === 'edemokracia.RatingVoteDefinition') {
          // Retrieve signedIdentifier from access
          const res = await userServiceForUserOwnedRatingVoteDefinitionsImpl.list(
            processQueryCustomizer(idAccessFilterCustomizer),
          );
          // Open view page in access
          navigate(routeToServiceUserUserOwnedRatingVoteDefinitionsAccessViewPage(res[0].__signedIdentifier));
        } else if (entityType === 'edemokracia.SelectAnswerVoteDefinition') {
          // Retrieve signedIdentifier from access
          const res = await userServiceForUserOwnedSelectAnswerVoteDefinitionsImpl.list(
            processQueryCustomizer(idAccessFilterCustomizer),
          );
          // Open view page in access
          navigate(routeToServiceUserUserOwnedSelectAnswerVoteDefinitionsAccessViewPage(res[0].__signedIdentifier));
        } else {
          navigate(routeToServiceUserAdminVoteDefinitionsAccessViewPage(row.__signedIdentifier));
        }
      },
    };
  };
