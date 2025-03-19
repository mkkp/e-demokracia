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
import { registerServiceIssueCommentsCards } from './hooks/components/cards/ServiceIssueCommentCards';
import { registerIssuecardSubThemeHook } from './hooks/sub-themes/registerIssuecardSubThemeHook';
import { registerIssueheaderSubThemeHook } from './hooks/sub-themes/registerIssueheaderSubThemeHook';
import { ApplicationCustomizer } from './interfaces';
import { registerServiceConCon_View_EditConsComponentCardsContainerConfig } from './hooks/components/cards/registerServiceConCon_View_EditConsComponentConfigurationHook';
import { registerServiceConCon_View_EditProsComponentCardsContainerConfig } from './hooks/components/cards/registerServiceConCon_View_EditProsComponentConfigurationHook';
import { registerServiceIssueIssue_View_EditConsComponentCardsContainerConfig } from './hooks/components/cards/registerServiceIssueIssue_View_EditConsComponentConfigurationHook';
import { registerServiceIssueIssue_View_EditProsComponentCardsContainerConfig } from './hooks/components/cards/registerServiceIssueIssue_View_EditProsComponentConfigurationHook';
import { registerServiceProPro_View_EditConsComponentCardsContainerConfig } from './hooks/components/cards/registerServiceProPro_View_EditConsComponentConfigurationHook';
import { registerServiceProPro_View_EditProsComponentCardsContainerConfig } from './hooks/components/cards/registerServiceProPro_View_EditProsComponentConfigurationHook';
import { registerServiceIssueIssue_View_EditCommentsComponentCardsContainerConfig } from './hooks/components/cards/registerServiceIssueIssue_View_EditCommentsComponentConfigurationHook';

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
    // registerServiceIssueProCards(context);
    // registerServiceIssueConCards(context);
    // registerConConCards(context);
    // registerProConCards(context);
    // registerConProCards(context);
    // registerProProCards(context);
    registerServiceConCon_View_EditConsComponentCardsContainerConfig(context);
    registerServiceConCon_View_EditProsComponentCardsContainerConfig(context);
    registerServiceIssueIssue_View_EditConsComponentCardsContainerConfig(context);
    registerServiceIssueIssue_View_EditProsComponentCardsContainerConfig(context);
    registerServiceProPro_View_EditConsComponentCardsContainerConfig(context);
    registerServiceProPro_View_EditProsComponentCardsContainerConfig(context);
    registerServiceIssueIssue_View_EditCommentsComponentCardsContainerConfig(context);
    registerIssuecardSubThemeHook(context);
    registerServiceIssueCommentsCards(context);
    registerIssueheaderSubThemeHook(context);
  }
}
