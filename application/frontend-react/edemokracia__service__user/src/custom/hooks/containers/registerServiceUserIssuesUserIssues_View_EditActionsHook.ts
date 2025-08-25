import type { BundleContext } from '@pandino/pandino-api';
import { useTranslation } from 'react-i18next';
import { SERVICE_USER_ISSUES_USER_ISSUES_VIEW_EDIT_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY } from '~/containers/Service/UserIssues/UserIssues_View_Edit/customization';
import type { ServiceUserIssuesUserIssues_View_EditContainerHook } from '~/containers/Service/UserIssues/UserIssues_View_Edit/customization';
import { openIssuePage } from '~/custom/services/openIssueRowFunction';

/**
 * XMIID: User/(esm/_jK51wFq4Ee6_67aMO2jOsw)/TransferObjectViewPageContainer
 * Name: service::UserIssues::UserIssues_View_Edit
 *
 * Notes:
 * Don't forget to remove unused hooks, and related imports afterwards to reduce build time and bundle size!
 */
export function registerServiceUserIssuesUserIssues_View_EditActionsHook(context: BundleContext) {
  context.registerService<ServiceUserIssuesUserIssues_View_EditContainerHook>(
    SERVICE_USER_ISSUES_USER_ISSUES_VIEW_EDIT_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY,
    serviceUserIssuesUserIssues_View_EditActionsHook,
  );
}

const serviceUserIssuesUserIssues_View_EditActionsHook: ServiceUserIssuesUserIssues_View_EditContainerHook = (
  data,
  editMode,
  storeDiff,
) => {
  // call other hooks here
  const { t } = useTranslation();

  return {
    ownedIssuesOpenPageAction: openIssuePage(),
    activeIssuesGlobalOpenPageAction: openIssuePage(),
    activeIssuesInActivityCountiesOpenPageAction: openIssuePage(),
    activeIssuesInActivityCitiesOpenPageAction: openIssuePage(),
    activeIssuesInActivityDistrictsOpenPageAction: openIssuePage(),
    activeIssuesInResidentCountyOpenPageAction: openIssuePage(),
    activeIssuesInResidentCityOpenPageAction: openIssuePage(),
    activeIssuesInResidentDistrictOpenPageAction: openIssuePage(),
  };
};
