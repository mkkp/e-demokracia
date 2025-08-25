import type { BundleContext } from '@pandino/pandino-api';
import { SERVICE_USER_VOTE_DEFINITION_USER_VOTE_DEFINITION_VIEW_EDIT_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY } from '~/containers/Service/UserVoteDefinition/UserVoteDefinition_View_Edit/customization';
import type { ServiceUserVoteDefinitionUserVoteDefinition_View_EditContainerHook } from '~/containers/Service/UserVoteDefinition/UserVoteDefinition_View_Edit/customization';
import { getExtraVoteDefinitionlMask } from '~/custom/services/customUserVoteDefinitionMask';
import { openVoteDefinitionPage } from '~/custom/services/openVoteDefinitionRowFunction';

/**
 * XMIID: User/(esm/_gTanUF4-Ee6vsex_cZNQbQ)/TransferObjectViewPageContainer
 * Name: service::UserVoteDefinition::UserVoteDefinition_View_Edit
 *
 * Notes:
 * Don't forget to remove unused hooks, and related imports afterwards to reduce build time and bundle size!
 */
export function registerServiceUserVoteDefinitionUserVoteDefinition_View_EditActionsHook(context: BundleContext) {
  context.registerService<ServiceUserVoteDefinitionUserVoteDefinition_View_EditContainerHook>(
    SERVICE_USER_VOTE_DEFINITION_USER_VOTE_DEFINITION_VIEW_EDIT_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY,
    serviceUserVoteDefinitionUserVoteDefinition_View_EditActionsHook,
  );
}

const serviceUserVoteDefinitionUserVoteDefinition_View_EditActionsHook: ServiceUserVoteDefinitionUserVoteDefinition_View_EditContainerHook =
  (data, editMode, storeDiff) => {
    return {
      getOwnedVoteDefinitionsMask: getExtraVoteDefinitionlMask,
      getActiveVoteDefinitionsGlobalMask: getExtraVoteDefinitionlMask,
      getActiveVoteDefinitionsInResidentMask: getExtraVoteDefinitionlMask,
      getActiveVoteDefinitionsInActivityMask: getExtraVoteDefinitionlMask,
      ownedVoteDefinitionsOpenPageAction: openVoteDefinitionPage(),
      activeVoteDefinitionsGlobalOpenPageAction: openVoteDefinitionPage(),
      activeVoteDefinitionsInResidentCityOpenPageAction: openVoteDefinitionPage(),
      activeVoteDefinitionsInResidentCountyOpenPageAction: openVoteDefinitionPage(),
      activeVoteDefinitionsInResidentDistrictOpenPageAction: openVoteDefinitionPage(),
      activeVoteDefinitionsInActivityCitiesOpenPageAction: openVoteDefinitionPage(),
      activeVoteDefinitionsInActivityCountiesOpenPageAction: openVoteDefinitionPage(),
      activeVoteDefinitionsInActivityDistictsOpenPageAction: openVoteDefinitionPage(),
    };
  };
