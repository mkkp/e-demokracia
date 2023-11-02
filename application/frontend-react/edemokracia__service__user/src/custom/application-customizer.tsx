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

import { registerCustomRowViewAdminVoteDefinitionsAction } from './customServiceUserAdminVoteDefinitionRowViewVoteDefinitionsAction';
import { registerCustomServiceUserIssuesCreateIssueActionPostHandlerHook } from './customServiceUserUserIssuesCreateIssueActionPostHandlerHook';
import { registerCustomServiceIssueCloseDebateActionPostHandlerHook } from './customServiceIssueCloseDebateActionPostHandlerHook';

export class DefaultApplicationCustomizer implements ApplicationCustomizer {
  async customize(context: BundleContext): Promise<void> {
    // register your implementations here
    registerCustomRowViewAdminVoteDefinitionsAction(context);
    registerCustomServiceUserIssuesCreateIssueActionPostHandlerHook(context);
    registerCustomServiceIssueCloseDebateActionPostHandlerHook(context);
  }
}
