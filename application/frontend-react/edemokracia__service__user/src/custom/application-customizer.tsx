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
import { registerServiceDashboardDashboard_View_EditActionsHook } from './customServiceDashboardDashboard_View_EditActionsHook';
import { registerServiceUserIssuesUserIssues_View_EditActionsHook } from './customServiceUserIssuesUserIssues_View_EditActionsHook';
import { registerServiceUserVoteDefinitionUserVoteDefinition_View_EditContainerHook } from './customServiceUserVoteDefinitionUserVoteDefinition_TableActionsHook';
import { registerServiceUserVoteDefinitionUserVoteDefinition_View_EditActionsHook } from './customServiceUserVoteDefinitionUserVoteDefinition_View_EditActionsHook';
import { registerServiceVoteDefinitionVoteDefinition_TableActionsHook } from './customServiceVoteDefinitionVoteDefinition_TableActionsHook';
import { registerServiceIssueCommentsCards } from './hooks/ServiceIssueCommentCards';
import { registerServiceIssueConCards } from './hooks/ServiceIssueConCards';
import { registerServiceIssueProCards } from './hooks/ServiceIssueProCards';
import { registerIssuecardSubThemeHook } from './hooks/sub-themes/registerIssuecardSubThemeHook';
import { registerIssueheaderSubThemeHook } from './hooks/sub-themes/registerIssueheaderSubThemeHook';
import { ApplicationCustomizer } from './interfaces';

export class DefaultApplicationCustomizer implements ApplicationCustomizer {
  async customize(context: BundleContext): Promise<void> {
    // register your implementations here
    registerCloseDebateInputCloseDebateInput_FormActionsHook(context);
    registerServiceCreateIssueInputCreateIssueInput_FormActionsHook(context);
    registerServiceVoteDefinitionVoteDefinition_TableActionsHook(context);
    registerServiceUserVoteDefinitionUserVoteDefinition_View_EditContainerHook(context);
    registerServiceUserVoteDefinitionUserVoteDefinition_View_EditActionsHook(context);
    registerServiceDashboardDashboard_View_EditActionsHook(context);
    registerServiceUserIssuesUserIssues_View_EditActionsHook(context);
    registerServiceIssueProCards(context);
    registerServiceIssueConCards(context);
    registerIssuecardSubThemeHook(context);
    registerServiceIssueCommentsCards(context);
    registerIssueheaderSubThemeHook(context);
  }
}
