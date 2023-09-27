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

import { registerCustomRowViewAdminVoteDefinitionsAction } from './customAdminAdminAdminVoteDefinitionRowViewVoteDefinitionsAction';
import { registerCustomAdminUserIssuesCreateIssueActionPostHandlerHook } from './customAdminAdminUserIssuesCreateIssueActionPostHandlerHook';
import { registerCustomAdminDebateCloseDebateActionPostHandlerHook } from './customAdminAdminDebateCloseDebateActionPostHandlerHook';

export class DefaultApplicationCustomizer implements ApplicationCustomizer {
  async customize(context: BundleContext): Promise<void> {
    // register your implementations here
    registerCustomRowViewAdminVoteDefinitionsAction(context);
    registerCustomAdminUserIssuesCreateIssueActionPostHandlerHook(context);
    registerCustomAdminDebateCloseDebateActionPostHandlerHook(context);
  }
}
