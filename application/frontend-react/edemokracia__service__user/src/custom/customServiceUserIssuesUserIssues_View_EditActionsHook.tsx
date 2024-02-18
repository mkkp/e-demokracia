/**
 * When navigate to selected subtypes view page on userOwedSelected
 */

import type { BundleContext } from '@pandino/pandino-api';

import {
  SERVICE_USER_USER_ISSUES_ACCESS_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY,
  ServiceUserIssuesUserIssues_View_EditActionsHook,
} from '~/pages/Service/User/UserIssues/AccessViewPage';

import { openIssuePage } from './openIssueRowFunction';

export function registerServiceUserIssuesUserIssues_View_EditActionsHook(context: BundleContext) {
  context.registerService<ServiceUserIssuesUserIssues_View_EditActionsHook>(
    SERVICE_USER_USER_ISSUES_ACCESS_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY,
    customServiceUserIssuesUserIssues_View_EditActionsHook,
  );
}

const customServiceUserIssuesUserIssues_View_EditActionsHook: ServiceUserIssuesUserIssues_View_EditActionsHook = () => {
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
