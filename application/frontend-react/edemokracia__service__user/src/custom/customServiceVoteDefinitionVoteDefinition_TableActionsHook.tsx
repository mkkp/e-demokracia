/**
 * When navigate to selected subtypes view page on userOwedSelected
 */

import type { BundleContext } from '@pandino/pandino-api';

import {
  SERVICE_USER_ADMIN_VOTE_DEFINITIONS_ACCESS_TABLE_PAGE_ACTIONS_HOOK_INTERFACE_KEY,
  ServiceVoteDefinitionVoteDefinition_TableActionsHook,
} from '~/pages/Service/User/AdminVoteDefinitions/AccessTablePage';

import { openVoteDefinitionPage } from './openVoteDefinitionRowFunction';

export function registerServiceVoteDefinitionVoteDefinition_TableActionsHook(context: BundleContext) {
  context.registerService<ServiceVoteDefinitionVoteDefinition_TableActionsHook>(
    SERVICE_USER_ADMIN_VOTE_DEFINITIONS_ACCESS_TABLE_PAGE_ACTIONS_HOOK_INTERFACE_KEY,
    customServiceVoteDefinitionVoteDefinition_TableActionsHook,
  );
}

const customServiceVoteDefinitionVoteDefinition_TableActionsHook: ServiceVoteDefinitionVoteDefinition_TableActionsHook =
  () => {
    return {
      openPageAction: openVoteDefinitionPage(),
    };
  };
