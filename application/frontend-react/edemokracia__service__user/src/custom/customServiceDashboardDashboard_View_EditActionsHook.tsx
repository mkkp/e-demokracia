/**
 * When navigate to selected subtypes view page on userOwedSelected
 */

import type { BundleContext } from '@pandino/pandino-api';

import {
  SERVICE_USER_DASHBOARD_HOME_ACCESS_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY,
  ServiceDashboardDashboard_View_EditActionsHook,
} from '~/pages/Service/User/DashboardHome/AccessViewPage';

import { openIssuePage } from './openIssueRowFunction';
import { openVoteDefinitionPage } from './openVoteDefinitionRowFunction';
import { openVoteEntryPage } from './openVoteEntryRowFunction';

export function registerServiceDashboardDashboard_View_EditActionsHook(context: BundleContext) {
  context.registerService<ServiceDashboardDashboard_View_EditActionsHook>(
    SERVICE_USER_DASHBOARD_HOME_ACCESS_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY,
    customServiceDashboardDashboard_View_EditActionsHook,
  );
}

const customServiceDashboardDashboard_View_EditActionsHook: ServiceDashboardDashboard_View_EditActionsHook = () => {
  return {
    favoriteVoteDefinitionsOpenPageAction: openVoteDefinitionPage(),
    ownedVoteDefinitionsOpenPageAction: openVoteDefinitionPage(),
    favoriteIssuesOpenPageAction: openIssuePage(),
    ownedIssuesOpenPageAction: openIssuePage(),
    userVoteEntriesOpenPageAction: openVoteEntryPage(),
  };
};
