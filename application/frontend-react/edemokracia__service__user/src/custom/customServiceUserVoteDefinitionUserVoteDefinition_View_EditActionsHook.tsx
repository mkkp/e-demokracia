/**
 * When navigate to selected subtypes view page on userOwedSelected
 */

import type { BundleContext } from '@pandino/pandino-api';

import {
  SERVICE_USER_USER_VOTE_DEFINITIONS_ACCESS_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY,
  ServiceUserVoteDefinitionUserVoteDefinition_View_EditActionsHook,
} from '~/pages/Service/User/UserVoteDefinitions/AccessViewPage';

import { openVoteDefinitionPage } from './openVoteDefinitionRowFunction';

export function registerServiceUserVoteDefinitionUserVoteDefinition_View_EditActionsHook(context: BundleContext) {
  context.registerService<ServiceUserVoteDefinitionUserVoteDefinition_View_EditActionsHook>(
    SERVICE_USER_USER_VOTE_DEFINITIONS_ACCESS_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY,
    customServiceUserVoteDefinitionUserVoteDefinition_View_EditActionsHook,
  );
}

const customServiceUserVoteDefinitionUserVoteDefinition_View_EditActionsHook: ServiceUserVoteDefinitionUserVoteDefinition_View_EditActionsHook =
  () => {
    return {
      ownedVoteDefinitionsOpenPageAction: openVoteDefinitionPage(),
      activeVoteDefinitionsGlobalOpenPageAction: openVoteDefinitionPage(),
      activeVoteDefinitionsInResidentCityOpenPageAction: openVoteDefinitionPage(),
      activeVoteDefinitionsInResidentCountyOpenPageAction: openVoteDefinitionPage(),
      activeVoteDefinitionsInResidentDistrictOpenPageAction: openVoteDefinitionPage(),
      activeVoteDefinitionsInActivityCitiesOpenPageAction: openVoteDefinitionPage(),
      activeVoteDefinitionsInActivityCountiesOpenPageAction: openVoteDefinitionPage(),
      activeVoteDefinitionsInActivityDistrictsOpenPageAction: openVoteDefinitionPage(),
    };
  };
