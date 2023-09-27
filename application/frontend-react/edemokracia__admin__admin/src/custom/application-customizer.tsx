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

import { registerCustomAdminUserIssuesCreateIssueActionPostHandlerHook } from './customAdminAdminUserIssuesCreateIssueActionPostHandlerHook';
// import { registerCustomAdminDashboardCreateIssueActionPostHandlerHook } from './customAdminDashboardCreateIssueActionPostHandlerHook';
// import { registerCustomAdminDebateCloseDebateActionPostHandlerHook } from './customAdminDebateCloseDebateActionPostHandlerHook';
// import { registerCustomRowViewVoteDefinitionsAction } from './customAdminVoteDefinitionRowViewVoteDefinitionsAction';

export class DefaultApplicationCustomizer implements ApplicationCustomizer {
  async customize(context: BundleContext): Promise<void> {
    // register your implementations here
    registerCustomAdminUserIssuesCreateIssueActionPostHandlerHook(context);
    //    registerCustomAdminDashboardCreateIssueActionPostHandlerHook(context);
    //    registerCustomAdminDebateCloseDebateActionPostHandlerHook(context);
    //    registerCustomRowViewVoteDefinitionsAction(context);
  }
}
