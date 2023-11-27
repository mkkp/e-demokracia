//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/custom/application-customizer.tsx'
// Template name: actor/src/custom/application-customizer.tsx
// Template file: actor/src/custom/application-customizer.tsx.hbs

import type { BundleContext } from '@pandino/pandino-api';
import { ApplicationCustomizer } from './interfaces';
import { registerCloseDebateInputCloseDebateInput_FormActionsHook } from './customCloseDebateInputCloseDebateInput_FormActionsHook';
import { registerServiceCreateIssueInputCreateIssueInput_FormActionsHook } from './customServiceCreateIssueInputCreateIssueInput_FormActionsHook';
import { registerServiceVoteDefinitionVoteDefinition_TableActionsHook } from './customServiceVoteDefinitionVoteDefinition_TableActionsHook';

export class DefaultApplicationCustomizer implements ApplicationCustomizer {
  async customize(context: BundleContext): Promise<void> {
    // register your implementations here
    registerCloseDebateInputCloseDebateInput_FormActionsHook(context);
    registerServiceCreateIssueInputCreateIssueInput_FormActionsHook(context);
    registerServiceVoteDefinitionVoteDefinition_TableActionsHook(context);

  }
}
