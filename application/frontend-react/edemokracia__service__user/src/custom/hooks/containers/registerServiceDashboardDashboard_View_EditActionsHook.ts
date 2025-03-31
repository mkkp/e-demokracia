import type { BundleContext } from '@pandino/pandino-api';
import { SERVICE_DASHBOARD_DASHBOARD_VIEW_EDIT_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY } from '~/containers/Service/Dashboard/Dashboard_View_Edit/customization';
import type { ServiceDashboardDashboard_View_EditContainerHook } from '~/containers/Service/Dashboard/Dashboard_View_Edit/customization';
import { openIssuePage } from '~/custom/services/openIssueRowFunction';
import { openVoteDefinitionPage } from '~/custom/services/openVoteDefinitionRowFunction';
import { openVoteEntryPage } from '~/custom/services/openVoteEntryRowFunction';

/**
 * XMIID: User/(esm/_3M7vYIyNEe2VSOmaAz6G9Q)/TransferObjectViewPageContainer
 * Name: service::Dashboard::Dashboard_View_Edit
 *
 * Notes:
 * Don't forget to remove unused hooks, and related imports afterwards to reduce build time and bundle size!
 */
export function registerServiceDashboardDashboard_View_EditActionsHook(context: BundleContext) {
  context.registerService<ServiceDashboardDashboard_View_EditContainerHook>(
    SERVICE_DASHBOARD_DASHBOARD_VIEW_EDIT_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY,
    serviceDashboardDashboard_View_EditActionsHook,
  );
}

const serviceDashboardDashboard_View_EditActionsHook: ServiceDashboardDashboard_View_EditContainerHook = (
  data,
  editMode,
  storeDiff,
) => {
  return {
    favoriteVoteDefinitionsOpenPageAction: openVoteDefinitionPage(),
    ownedVoteDefinitionsOpenPageAction: openVoteDefinitionPage(),
    favoriteIssuesOpenPageAction: openIssuePage(),
    ownedIssuesOpenPageAction: openIssuePage(),
    userVoteEntriesOpenPageAction: openVoteEntryPage(),
  };
};
