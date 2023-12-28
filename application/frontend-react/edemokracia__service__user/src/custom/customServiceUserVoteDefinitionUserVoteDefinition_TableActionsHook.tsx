/**
 * When navigate to selected subtypes view page on userOwedSelected
 */

import type { BundleContext } from '@pandino/pandino-api';
import { openVoteDefinitionPage } from './openVoteDefinitionRowFunction';

import {
  SERVICE_USER_VOTE_DEFINITION_USER_VOTE_DEFINITION_VIEW_EDIT_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY,
  ServiceUserVoteDefinitionUserVoteDefinition_View_EditContainerHook,
} from '~/containers/Service/UserVoteDefinition/UserVoteDefinition_View_Edit/ServiceUserVoteDefinitionUserVoteDefinition_View_Edit';

export function registerServiceUserVoteDefinitionUserVoteDefinition_View_EditContainerHook(context: BundleContext) {
  context.registerService<ServiceUserVoteDefinitionUserVoteDefinition_View_EditContainerHook>(
    SERVICE_USER_VOTE_DEFINITION_USER_VOTE_DEFINITION_VIEW_EDIT_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY,
    customServiceUserVoteDefinitionUserVoteDefinition_View_EditContainerHook,
  );
}

const customServiceUserVoteDefinitionUserVoteDefinition_View_EditContainerHook: ServiceUserVoteDefinitionUserVoteDefinition_View_EditContainerHook =
() => {
  return {      
    ownedVoteDefinitionsOpenPageAction: openVoteDefinitionPage(),
    activeVoteDefinitionsGlobalOpenPageAction: openVoteDefinitionPage(),
    activeVoteDefinitionsInResidentCityOpenPageAction: openVoteDefinitionPage(),
    activeVoteDefinitionsInResidentCountyOpenPageAction: openVoteDefinitionPage(),
    activeVoteDefinitionsInResidentDistrictOpenPageAction: openVoteDefinitionPage(),
    activeVoteDefinitionsInActivityCitiesOpenPageAction: openVoteDefinitionPage(),
    activeVoteDefinitionsInActivityCountiesOpenPageAction: openVoteDefinitionPage(),
    activeVoteDefinitionsInActivityDistictsOpenPageAction: openVoteDefinitionPage(),
  };
}
