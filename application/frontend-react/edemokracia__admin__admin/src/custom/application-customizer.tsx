// @OVERRIDED
//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/custom/application-customizer.tsx'
// Template name: actor/src/custom/application-customizer.tsx
// Template file: actor/src/custom/application-customizer.tsx.hbs

import type { BundleContext } from '@pandino/pandino-api';
import { ApplicationCustomizer } from './interfaces';
import {
  ADMIN_DASHBOARD_CREATE_ISSUE_ACTION_POST_HANDLER_HOOK_INTERFACE_KEY,
  AdminDashboardCreateIssueActionPostHandlerHook,
} from '~/pages/admin/admin/dashboardhome/actions';

import {
  ADMIN_DEBATE_CLOSE_DEBATE_ACTION_POST_HANDLER_HOOK_INTERFACE_KEY,
  AdminDebateCloseDebateActionPostHandlerHook,
} from '~/pages/admin/admin/debates/view/actions/adminDebate/adminDebateCloseDebate';

import { useJudoNavigation } from '~/components';
import { processQueryCustomizer } from '~/utilities';

import { routeToAdminAdminIssuesView, routeToAdminAdminVoteDefinitionsView } from '~/routes';
import { AdminIssueQueryCustomizer, AdminIssueStored, VoteDefinitionStored } from '~/generated/data-api';
import { adminAdminServiceForIssuesImpl, adminAdminServiceForVoteDefinitionsImpl } from '~/generated/data-axios';

export class DefaultApplicationCustomizer implements ApplicationCustomizer {
  async customize(context: BundleContext): Promise<void> {
    // register your implementations here

    context.registerService<AdminDashboardCreateIssueActionPostHandlerHook>(
      ADMIN_DASHBOARD_CREATE_ISSUE_ACTION_POST_HANDLER_HOOK_INTERFACE_KEY,
      adminDashboardCreateIssueActionPostHandlerHook,
    );

    context.registerService<AdminDebateCloseDebateActionPostHandlerHook>(
      ADMIN_DEBATE_CLOSE_DEBATE_ACTION_POST_HANDLER_HOOK_INTERFACE_KEY,
      adminDebateCloseDebateActionPostHandlerHook,
    );
  }
}

// Override return of createIssue from dashboard
const adminDashboardCreateIssueActionPostHandlerHook: AdminDashboardCreateIssueActionPostHandlerHook = () => {
  const { navigate } = useJudoNavigation();

  return async (ownerCallback: () => void, result?: AdminIssueStored) => {
    // 1. Retrieve result identifier
    const resultId = result!.__identifier;

    // 2. Retrieve signedIdentifier from access
    const idAccessFilterCustomizer: any = {
      _identifier: resultId,
    };
    const res = await adminAdminServiceForIssuesImpl.listIssues(
      processQueryCustomizer<AdminIssueQueryCustomizer>(idAccessFilterCustomizer),
    );

    // 3. Open view page in access
    navigate(routeToAdminAdminIssuesView(res[0].__signedIdentifier));
  };
};

const adminDebateCloseDebateActionPostHandlerHook: AdminDebateCloseDebateActionPostHandlerHook = () => {
  const { navigate } = useJudoNavigation();

  return async (ownerCallback: () => void, result?: VoteDefinitionStored) => {
    // 1. Retrieve result identifier
    const resultId = result!.__identifier;

    // 2. Retrieve signedIdentifier from access
    const idAccessFilterCustomizer: any = {
      _identifier: resultId,
    };

    const res = await adminAdminServiceForVoteDefinitionsImpl.listVoteDefinitions(
      processQueryCustomizer(idAccessFilterCustomizer),
    );

    // 3. Open view page in access
    navigate(routeToAdminAdminVoteDefinitionsView(res[0].__signedIdentifier));
  };
};
