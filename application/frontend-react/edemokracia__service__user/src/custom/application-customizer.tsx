//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/custom/application-customizer.tsx'
// Template name: actor/src/custom/application-customizer.tsx
// Template file: actor/src/custom/application-customizer.tsx.hbs

import type { BundleContext } from '@pandino/pandino-api';
import { registerServiceIssueIssueRichTextEditorConfig } from './components/IssueRichTextEditor';
import { registerCloseDebateInputCloseDebateInput_FormActionsHook } from './customCloseDebateInputCloseDebateInput_FormActionsHook';
import { registerServiceUserVoteDefinitionUserVoteDefinition_View_EditActionsHook } from './customServiceUserVoteDefinitionUserVoteDefinition_View_EditActionsHook';
import { registerServiceIssueCommentsCards } from './hooks/components/cards/ServiceIssueCommentCards';
import { registerServiceConCon_View_EditConsComponentCardsContainerConfig } from './hooks/components/cards/registerServiceConCon_View_EditConsComponentConfigurationHook';
import { registerServiceConCon_View_EditProsComponentCardsContainerConfig } from './hooks/components/cards/registerServiceConCon_View_EditProsComponentConfigurationHook';
import { registerServiceDashboardDashboard_View_EditFavoriteIssuesComponentCardsContainerConfig } from './hooks/components/cards/registerServiceDashboardDashboard_View_EditFavoriteIssuesComponentConfigurationHook';
import { registerServiceDashboardDashboard_View_EditFavoriteVoteDefinitionsComponentCardsContainerConfig } from './hooks/components/cards/registerServiceDashboardDashboard_View_EditFavoriteVoteDefinitionsComponentConfigurationHook';
import { registerServiceDashboardDashboard_View_EditOwnedIssuesComponentCardsContainerConfig } from './hooks/components/cards/registerServiceDashboardDashboard_View_EditOwnedIssuesComponentConfigurationHook';
import { registerServiceDashboardDashboard_View_EditOwnedVoteDefinitionsComponentCardsContainerConfig } from './hooks/components/cards/registerServiceDashboardDashboard_View_EditOwnedVoteDefinitionsComponentConfigurationHook';
import { registerServiceIssueIssue_View_EditCommentsComponentCardsContainerConfig } from './hooks/components/cards/registerServiceIssueIssue_View_EditCommentsComponentConfigurationHook';
import { registerServiceIssueIssue_View_EditConsComponentCardsContainerConfig } from './hooks/components/cards/registerServiceIssueIssue_View_EditConsComponentConfigurationHook';
import { registerServiceIssueIssue_View_EditProsComponentCardsContainerConfig } from './hooks/components/cards/registerServiceIssueIssue_View_EditProsComponentConfigurationHook';
import { registerServiceProPro_View_EditConsComponentCardsContainerConfig } from './hooks/components/cards/registerServiceProPro_View_EditConsComponentConfigurationHook';
import { registerServiceProPro_View_EditProsComponentCardsContainerConfig } from './hooks/components/cards/registerServiceProPro_View_EditProsComponentConfigurationHook';
import { registerServiceUserIssuesUserIssues_View_EditActiveGobalIssuesComponentCardsContainerConfig } from './hooks/components/cards/registerServiceUserIssuesUserIssues_View_EditActiveGobalIssuesComponentConfigurationHook';
import { registerServiceUserIssuesUserIssues_View_EditActiveIssuesInActivityComponentCardsContainerConfig } from './hooks/components/cards/registerServiceUserIssuesUserIssues_View_EditActiveIssuesInActivityComponentConfigurationHook';
import { registerServiceUserIssuesUserIssues_View_EditActiveIssuesInResidentComponentCardsContainerConfig } from './hooks/components/cards/registerServiceUserIssuesUserIssues_View_EditActiveIssuesInResidentComponentConfigurationHook';
import { registerServiceUserIssuesUserIssues_View_EditOwnedIssuesComponentCardsContainerConfig } from './hooks/components/cards/registerServiceUserIssuesUserIssues_View_EditOwnedIssuesComponentConfigurationHook';
import { registerServiceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsGlobalComponentCardsContainerConfig } from './hooks/components/cards/registerServiceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsGlobalComponentConfigurationHook';
import { registerServiceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsInActivityComponentCardsContainerConfig } from './hooks/components/cards/registerServiceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsInActivityComponentConfigurationHook';
import { registerServiceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsInResidentComponentCardsContainerConfig } from './hooks/components/cards/registerServiceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsInResidentComponentConfigurationHook';
import { registerServiceUserVoteDefinitionUserVoteDefinition_View_EditOwnedVoteDefinitionsComponentCardsContainerConfig } from './hooks/components/cards/registerServiceUserVoteDefinitionUserVoteDefinition_View_EditOwnedVoteDefinitionsComponentConfigurationHook';
import { registerServiceCreateIssueInputCreateIssueInput_FormActionsHook } from './hooks/containers/registerServiceCreateIssueInputCreateIssueInput_FormActionsHook';
import { registerServiceDashboardDashboard_View_EditActionsHook } from './hooks/containers/registerServiceDashboardDashboard_View_EditActionsHook';
import { registerServiceUserIssuesUserIssues_View_EditActionsHook } from './hooks/containers/registerServiceUserIssuesUserIssues_View_EditActionsHook';
import { registerIssuecardSubThemeHook } from './hooks/sub-themes/registerIssuecardSubThemeHook';
import { registerIssueheaderSubThemeHook } from './hooks/sub-themes/registerIssueheaderSubThemeHook';
import { ApplicationCustomizer } from './interfaces';

export class DefaultApplicationCustomizer implements ApplicationCustomizer {
  async customize(context: BundleContext): Promise<void> {
    // register your implementations here
    //    registerCloseDebateInputCloseDebateInput_FormActionsHook(context);
    //    registerServiceVoteDefinitionVoteDefinition_TableActionsHook(context);
    //    registerServiceUserVoteDefinitionUserVoteDefinition_View_EditContainerHook(context);
    //    registerServiceUserVoteDefinitionUserVoteDefinition_View_EditActionsHook(context);
    registerServiceUserIssuesUserIssues_View_EditActionsHook(context);
    registerServiceConCon_View_EditConsComponentCardsContainerConfig(context);
    registerServiceConCon_View_EditProsComponentCardsContainerConfig(context);
    registerServiceIssueIssue_View_EditConsComponentCardsContainerConfig(context);
    registerServiceIssueIssue_View_EditProsComponentCardsContainerConfig(context);
    registerServiceProPro_View_EditConsComponentCardsContainerConfig(context);
    registerServiceProPro_View_EditProsComponentCardsContainerConfig(context);
    registerServiceIssueIssue_View_EditCommentsComponentCardsContainerConfig(context);
    registerServiceDashboardDashboard_View_EditFavoriteIssuesComponentCardsContainerConfig(context);
    registerServiceDashboardDashboard_View_EditOwnedIssuesComponentCardsContainerConfig(context);
    registerServiceDashboardDashboard_View_EditFavoriteVoteDefinitionsComponentCardsContainerConfig(context);
    registerServiceUserIssuesUserIssues_View_EditActiveIssuesInResidentComponentCardsContainerConfig(context);
    registerServiceUserIssuesUserIssues_View_EditOwnedIssuesComponentCardsContainerConfig(context);
    registerServiceUserIssuesUserIssues_View_EditActiveGobalIssuesComponentCardsContainerConfig(context);
    registerServiceUserIssuesUserIssues_View_EditActiveIssuesInActivityComponentCardsContainerConfig(context);
    registerServiceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsGlobalComponentCardsContainerConfig(
      context,
    );
    registerServiceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsInActivityComponentCardsContainerConfig(
      context,
    );
    registerServiceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsInResidentComponentCardsContainerConfig(
      context,
    );
    registerServiceUserVoteDefinitionUserVoteDefinition_View_EditOwnedVoteDefinitionsComponentCardsContainerConfig(
      context,
    );
    registerServiceDashboardDashboard_View_EditOwnedVoteDefinitionsComponentCardsContainerConfig(context);
    registerIssuecardSubThemeHook(context);
    registerServiceIssueCommentsCards(context);
    registerIssueheaderSubThemeHook(context);
    registerServiceIssueIssueRichTextEditorConfig(context);
    registerServiceCreateIssueInputCreateIssueInput_FormActionsHook(context);
    registerServiceDashboardDashboard_View_EditActionsHook(context);
    registerServiceUserIssuesUserIssues_View_EditActionsHook(context);
    registerServiceUserVoteDefinitionUserVoteDefinition_View_EditActionsHook(context);
    registerCloseDebateInputCloseDebateInput_FormActionsHook(context);
  }
}
