//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/custom/application-customizer.tsx'
// Template name: actor/src/custom/application-customizer.tsx
// Template file: actor/src/custom/application-customizer.tsx.hbs

import type { BundleContext } from '@pandino/pandino-api';
import { registerCloseDebateInputCloseDebateInput_FormActionsHook } from './customCloseDebateInputCloseDebateInput_FormActionsHook';
import { registerServiceCreateIssueInputCreateIssueInput_FormActionsHook } from './customServiceCreateIssueInputCreateIssueInput_FormActionsHook';
import { registerServiceUserVoteDefinitionUserVoteDefinition_View_EditContainerHook } from './customServiceUserVoteDefinitionUserVoteDefinition_TableActionsHook';
import { registerServiceUserVoteDefinitionUserVoteDefinition_View_EditActionsHook } from './customServiceUserVoteDefinitionUserVoteDefinition_View_EditActionsHook';
import { registerServiceVoteDefinitionVoteDefinition_TableActionsHook } from './customServiceVoteDefinitionVoteDefinition_TableActionsHook';
import { ApplicationCustomizer } from './interfaces';

export class DefaultApplicationCustomizer implements ApplicationCustomizer {
  async customize(context: BundleContext): Promise<void> {
    // register your implementations here
    registerCloseDebateInputCloseDebateInput_FormActionsHook(context);
    registerServiceCreateIssueInputCreateIssueInput_FormActionsHook(context);
    registerServiceVoteDefinitionVoteDefinition_TableActionsHook(context);
    registerServiceUserVoteDefinitionUserVoteDefinition_View_EditContainerHook(context);
    registerServiceUserVoteDefinitionUserVoteDefinition_View_EditActionsHook(context);
  }
}
