/**
 * When navigate to selected subtypes view page on userOwedSelected
 */

import type { BundleContext } from '@pandino/pandino-api';
import {
  SERVICE_USER_VOTE_DEFINITION_USER_VOTE_DEFINITION_VIEW_EDIT_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY,
  SERVICE_USER_VOTE_DEFINITION_USER_VOTE_DEFINITION_VIEW_EDIT_CONTAINER_EXTRA_ACTIONS_HOOK_INTERFACE_KEY,
  ServiceUserVoteDefinitionUserVoteDefinition_View_EditContainerExtraActionsComponentProps,
  ServiceUserVoteDefinitionUserVoteDefinition_View_EditContainerHook,
} from '~/containers/Service/UserVoteDefinition/UserVoteDefinition_View_Edit/customization';
import { ServiceUserVoteDefinitionUserVoteDefinition_View_EditPageActions } from '~/containers/Service/UserVoteDefinition/UserVoteDefinition_View_Edit/types';
import {
  ServiceUserVoteDefinition,
  ServiceUserVoteDefinitionStored,
} from '~/services/data-api/model/ServiceUserVoteDefinition';
import { getExtraVoteDefinitionlMask } from './customUserVoteDefinitionMask';
import { openVoteDefinitionPage } from './openVoteDefinitionRowFunction';

export function registerServiceUserVoteDefinitionUserVoteDefinition_View_EditContainerHook(context: BundleContext) {
  context.registerService<ServiceUserVoteDefinitionUserVoteDefinition_View_EditContainerHook>(
    SERVICE_USER_VOTE_DEFINITION_USER_VOTE_DEFINITION_VIEW_EDIT_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY,
    customServiceUserVoteDefinitionUserVoteDefinition_View_EditContainerHook,
  );

  // context.registerService<ServiceUserVoteDefinitionUserVoteDefinition_View_EditContainerExtraActionsComponentProps>(
  //   SERVICE_USER_VOTE_DEFINITION_USER_VOTE_DEFINITION_VIEW_EDIT_CONTAINER_EXTRA_ACTIONS_HOOK_INTERFACE_KEY,
  //   customServiceUserVoteDefinitionUserVoteDefinition_View_EditContainerExtraActionsComponentProps,
  // );
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
  };

// export const SERVICE_USER_VOTE_DEFINITION_USER_VOTE_DEFINITION_VIEW_EDIT_CONTAINER_EXTRA_ACTIONS_HOOK_INTERFACE_KEY =
//   'SERVICE_USER_VOTE_DEFINITION_USER_VOTE_DEFINITION_VIEW_EDIT_CONTAINER_EXTRA_ACTIONS_HOOK';
// export interface ServiceUserVoteDefinitionUserVoteDefinition_View_EditContainerExtraActionsComponentProps {
//   data: ServiceUserVoteDefinitionStored;
//   storeDiff: (attributeName: keyof ServiceUserVoteDefinition, value: any) => void;
//   editMode?: boolean;
//   isLoading?: boolean;
//   actions?: ServiceUserVoteDefinitionUserVoteDefinition_View_EditPageActions;
// }

// const customServiceUserVoteDefinitionUserVoteDefinition_View_EditContainerExtraActionsComponentProps: ServiceUserVoteDefinitionUserVoteDefinition_View_EditContainerExtraActionsComponentProps =
// (
//     data: ServiceUserVoteDefinitionStored,
// ) => {
//   return {
//     getMask: getExtraVoteDefinitionlMask()
//   };
// };
