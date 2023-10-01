//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'data-axios/'+'ImplementationInstancesExporter.ts'
// Template name: implementationInstancesExporter.ts.hbs
// Template file: data-axios/implementationInstancesExporter.ts.hbs

import { judoAxiosProvider } from './JudoAxiosProvider';
import { AccessServiceImpl } from './AccessServiceImpl';

import { AdminAdminServiceForActiveIssuesImpl } from './AdminAdminServiceForActiveIssuesImpl';
import { AdminAdminServiceForAdminCategoriesImpl } from './AdminAdminServiceForAdminCategoriesImpl';
import { AdminAdminServiceForAdminCountiesImpl } from './AdminAdminServiceForAdminCountiesImpl';
import { AdminAdminServiceForAdminDebatesImpl } from './AdminAdminServiceForAdminDebatesImpl';
import { AdminAdminServiceForAdminIssueTypesImpl } from './AdminAdminServiceForAdminIssueTypesImpl';
import { AdminAdminServiceForAdminIssuesImpl } from './AdminAdminServiceForAdminIssuesImpl';
import { AdminAdminServiceForAdminUserManagerImpl } from './AdminAdminServiceForAdminUserManagerImpl';
import { AdminAdminServiceForAdminUsersImpl } from './AdminAdminServiceForAdminUsersImpl';
import { AdminAdminServiceForAdminVoteDefinitionsImpl } from './AdminAdminServiceForAdminVoteDefinitionsImpl';
import { AdminAdminServiceForAdminVoteEntriesImpl } from './AdminAdminServiceForAdminVoteEntriesImpl';
import { AdminAdminServiceForDashboardHomeImpl } from './AdminAdminServiceForDashboardHomeImpl';
import { AdminAdminServiceForUserCreatedIssuesImpl } from './AdminAdminServiceForUserCreatedIssuesImpl';
import { AdminAdminServiceForUserDebatesImpl } from './AdminAdminServiceForUserDebatesImpl';
import { AdminAdminServiceForUserIssuesImpl } from './AdminAdminServiceForUserIssuesImpl';
import { AdminAdminServiceForUserOwnedActiveIssuesImpl } from './AdminAdminServiceForUserOwnedActiveIssuesImpl';
import { AdminAdminServiceForUserOwnedRatingVoteDefinitionsImpl } from './AdminAdminServiceForUserOwnedRatingVoteDefinitionsImpl';
import { AdminAdminServiceForUserOwnedSelectAnswerVoteDefinitionsImpl } from './AdminAdminServiceForUserOwnedSelectAnswerVoteDefinitionsImpl';
import { AdminAdminServiceForUserOwnedVoteEntriesImpl } from './AdminAdminServiceForUserOwnedVoteEntriesImpl';
import { AdminAdminServiceForUserOwnedYesNoAbstainVoteDefinitionsImpl } from './AdminAdminServiceForUserOwnedYesNoAbstainVoteDefinitionsImpl';
import { AdminAdminServiceForUserOwnedYesNoVoteDefinitionsImpl } from './AdminAdminServiceForUserOwnedYesNoVoteDefinitionsImpl';
import { AdminAdminServiceForUserProfileImpl } from './AdminAdminServiceForUserProfileImpl';
import { AdminAdminServiceForUserVoteDefinitionsImpl } from './AdminAdminServiceForUserVoteDefinitionsImpl';

import { AdminCityServiceForDistrictsImpl } from './AdminCityServiceForDistrictsImpl';
import { AdminCommentServiceForCreatedByImpl } from './AdminCommentServiceForCreatedByImpl';
import { AdminCommentServiceForVotesImpl } from './AdminCommentServiceForVotesImpl';
import { AdminConServiceForCommentsImpl } from './AdminConServiceForCommentsImpl';
import { AdminConServiceForConsImpl } from './AdminConServiceForConsImpl';
import { AdminConServiceForCreatedByImpl } from './AdminConServiceForCreatedByImpl';
import { AdminConServiceForParentConImpl } from './AdminConServiceForParentConImpl';
import { AdminConServiceForParentProImpl } from './AdminConServiceForParentProImpl';
import { AdminConServiceForProsImpl } from './AdminConServiceForProsImpl';
import { AdminConServiceForVotesImpl } from './AdminConServiceForVotesImpl';
import { AdminCountyServiceForCitiesImpl } from './AdminCountyServiceForCitiesImpl';
import { AdminCreateIssueInputServiceForCityImpl } from './AdminCreateIssueInputServiceForCityImpl';
import { AdminCreateIssueInputServiceForCountyImpl } from './AdminCreateIssueInputServiceForCountyImpl';
import { AdminCreateIssueInputServiceForDistrictImpl } from './AdminCreateIssueInputServiceForDistrictImpl';
import { AdminCreateIssueInputServiceForIssueTypeImpl } from './AdminCreateIssueInputServiceForIssueTypeImpl';
import { AdminDashboardServiceForFavoriteDebatesImpl } from './AdminDashboardServiceForFavoriteDebatesImpl';
import { AdminDashboardServiceForFavoriteIssuesImpl } from './AdminDashboardServiceForFavoriteIssuesImpl';
import { AdminDashboardServiceForFavoriteVoteDefinitionsImpl } from './AdminDashboardServiceForFavoriteVoteDefinitionsImpl';
import { AdminDashboardServiceForIssuesOwnedImpl } from './AdminDashboardServiceForIssuesOwnedImpl';
import { AdminDashboardServiceForOwnedDebatesImpl } from './AdminDashboardServiceForOwnedDebatesImpl';
import { AdminDashboardServiceForOwnedVoteDefinitionsImpl } from './AdminDashboardServiceForOwnedVoteDefinitionsImpl';
import { AdminDashboardServiceForUserVoteEntriesImpl } from './AdminDashboardServiceForUserVoteEntriesImpl';
import { AdminDebateServiceForCommentsImpl } from './AdminDebateServiceForCommentsImpl';
import { AdminDebateServiceForConsImpl } from './AdminDebateServiceForConsImpl';
import { AdminDebateServiceForCreatedByImpl } from './AdminDebateServiceForCreatedByImpl';
import { AdminDebateServiceForIssueImpl } from './AdminDebateServiceForIssueImpl';
import { AdminDebateServiceForProsImpl } from './AdminDebateServiceForProsImpl';
import { AdminDebateServiceForRatingVoteDefinitionImpl } from './AdminDebateServiceForRatingVoteDefinitionImpl';
import { AdminDebateServiceForSelectAnswerVoteDefinitionImpl } from './AdminDebateServiceForSelectAnswerVoteDefinitionImpl';
import { AdminDebateServiceForVoteDefinitionImpl } from './AdminDebateServiceForVoteDefinitionImpl';
import { AdminDebateServiceForYesNoAbstainVoteDefinitionImpl } from './AdminDebateServiceForYesNoAbstainVoteDefinitionImpl';
import { AdminDebateServiceForYesNoVoteDefinitionImpl } from './AdminDebateServiceForYesNoVoteDefinitionImpl';
import { AdminIssueServiceForAttachmentsImpl } from './AdminIssueServiceForAttachmentsImpl';
import { AdminIssueServiceForCategoriesImpl } from './AdminIssueServiceForCategoriesImpl';
import { AdminIssueServiceForCityImpl } from './AdminIssueServiceForCityImpl';
import { AdminIssueServiceForCommentsImpl } from './AdminIssueServiceForCommentsImpl';
import { AdminIssueServiceForCountyImpl } from './AdminIssueServiceForCountyImpl';
import { AdminIssueServiceForCreatedByImpl } from './AdminIssueServiceForCreatedByImpl';
import { AdminIssueServiceForDebatesImpl } from './AdminIssueServiceForDebatesImpl';
import { AdminIssueServiceForDistrictImpl } from './AdminIssueServiceForDistrictImpl';
import { AdminIssueServiceForIssueTypeImpl } from './AdminIssueServiceForIssueTypeImpl';
import { AdminIssueServiceForOwnerImpl } from './AdminIssueServiceForOwnerImpl';
import { AdminIssueCategoryServiceForOwnerImpl } from './AdminIssueCategoryServiceForOwnerImpl';
import { AdminIssueCategoryServiceForSubcategoriesImpl } from './AdminIssueCategoryServiceForSubcategoriesImpl';
import { AdminProServiceForCommentsImpl } from './AdminProServiceForCommentsImpl';
import { AdminProServiceForConsImpl } from './AdminProServiceForConsImpl';
import { AdminProServiceForCreatedByImpl } from './AdminProServiceForCreatedByImpl';
import { AdminProServiceForParentConImpl } from './AdminProServiceForParentConImpl';
import { AdminProServiceForParentProImpl } from './AdminProServiceForParentProImpl';
import { AdminProServiceForProsImpl } from './AdminProServiceForProsImpl';
import { AdminProServiceForVotesImpl } from './AdminProServiceForVotesImpl';
import { AdminRatingVoteDefinitionServiceForDebateImpl } from './AdminRatingVoteDefinitionServiceForDebateImpl';
import { AdminRatingVoteDefinitionServiceForIssueImpl } from './AdminRatingVoteDefinitionServiceForIssueImpl';
import { AdminRatingVoteDefinitionServiceForUserVoteEntryImpl } from './AdminRatingVoteDefinitionServiceForUserVoteEntryImpl';
import { AdminRatingVoteDefinitionServiceForVoteEntriesImpl } from './AdminRatingVoteDefinitionServiceForVoteEntriesImpl';
import { AdminRatingVoteEntryServiceForOwnerImpl } from './AdminRatingVoteEntryServiceForOwnerImpl';
import { AdminSelectAnswerVoteDefinitionServiceForDebateImpl } from './AdminSelectAnswerVoteDefinitionServiceForDebateImpl';
import { AdminSelectAnswerVoteDefinitionServiceForIssueImpl } from './AdminSelectAnswerVoteDefinitionServiceForIssueImpl';
import { AdminSelectAnswerVoteDefinitionServiceForUserVoteEntryImpl } from './AdminSelectAnswerVoteDefinitionServiceForUserVoteEntryImpl';
import { AdminSelectAnswerVoteDefinitionServiceForVoteEntriesImpl } from './AdminSelectAnswerVoteDefinitionServiceForVoteEntriesImpl';
import { AdminSelectAnswerVoteDefinitionServiceForVoteSelectionsImpl } from './AdminSelectAnswerVoteDefinitionServiceForVoteSelectionsImpl';
import { AdminSelectAnswerVoteEntryServiceForOwnerImpl } from './AdminSelectAnswerVoteEntryServiceForOwnerImpl';
import { AdminSelectAnswerVoteEntryServiceForValueImpl } from './AdminSelectAnswerVoteEntryServiceForValueImpl';
import { AdminSimpleVoteServiceForUserImpl } from './AdminSimpleVoteServiceForUserImpl';
import { AdminUserServiceForActivityCitiesImpl } from './AdminUserServiceForActivityCitiesImpl';
import { AdminUserServiceForActivityCountiesImpl } from './AdminUserServiceForActivityCountiesImpl';
import { AdminUserServiceForActivityDistrictsImpl } from './AdminUserServiceForActivityDistrictsImpl';
import { AdminUserServiceForResidentCityImpl } from './AdminUserServiceForResidentCityImpl';
import { AdminUserServiceForResidentCountyImpl } from './AdminUserServiceForResidentCountyImpl';
import { AdminUserServiceForResidentDistrictImpl } from './AdminUserServiceForResidentDistrictImpl';
import { AdminUserServiceForVotesImpl } from './AdminUserServiceForVotesImpl';
import { AdminUserDebatesServiceForActiveDebatesGlobalImpl } from './AdminUserDebatesServiceForActiveDebatesGlobalImpl';
import { AdminUserDebatesServiceForActiveDebatesInActivityCitiesImpl } from './AdminUserDebatesServiceForActiveDebatesInActivityCitiesImpl';
import { AdminUserDebatesServiceForActiveDebatesInActivityCountiesImpl } from './AdminUserDebatesServiceForActiveDebatesInActivityCountiesImpl';
import { AdminUserDebatesServiceForActiveDebatesInActivityDistrictsImpl } from './AdminUserDebatesServiceForActiveDebatesInActivityDistrictsImpl';
import { AdminUserDebatesServiceForActiveDebatesInResidentCityImpl } from './AdminUserDebatesServiceForActiveDebatesInResidentCityImpl';
import { AdminUserDebatesServiceForActiveDebatesInResidentCountyImpl } from './AdminUserDebatesServiceForActiveDebatesInResidentCountyImpl';
import { AdminUserDebatesServiceForActiveDebatesInResidentDistrictImpl } from './AdminUserDebatesServiceForActiveDebatesInResidentDistrictImpl';
import { AdminUserDebatesServiceForOwnedDebatesImpl } from './AdminUserDebatesServiceForOwnedDebatesImpl';
import { AdminUserIssuesServiceForActiveIssuesGlobalImpl } from './AdminUserIssuesServiceForActiveIssuesGlobalImpl';
import { AdminUserIssuesServiceForActiveIssuesInActivityCitiesImpl } from './AdminUserIssuesServiceForActiveIssuesInActivityCitiesImpl';
import { AdminUserIssuesServiceForActiveIssuesInActivityCountiesImpl } from './AdminUserIssuesServiceForActiveIssuesInActivityCountiesImpl';
import { AdminUserIssuesServiceForActiveIssuesInActivityDistrictsImpl } from './AdminUserIssuesServiceForActiveIssuesInActivityDistrictsImpl';
import { AdminUserIssuesServiceForActiveIssuesInResidentCityImpl } from './AdminUserIssuesServiceForActiveIssuesInResidentCityImpl';
import { AdminUserIssuesServiceForActiveIssuesInResidentCountyImpl } from './AdminUserIssuesServiceForActiveIssuesInResidentCountyImpl';
import { AdminUserIssuesServiceForActiveIssuesInResidentDistrictImpl } from './AdminUserIssuesServiceForActiveIssuesInResidentDistrictImpl';
import { AdminUserIssuesServiceForOwnedIssuesImpl } from './AdminUserIssuesServiceForOwnedIssuesImpl';
import { AdminUserManagerServiceForUsersImpl } from './AdminUserManagerServiceForUsersImpl';
import { AdminUserProfileServiceForActivityCitiesImpl } from './AdminUserProfileServiceForActivityCitiesImpl';
import { AdminUserProfileServiceForActivityCountiesImpl } from './AdminUserProfileServiceForActivityCountiesImpl';
import { AdminUserProfileServiceForActivityDistrictsImpl } from './AdminUserProfileServiceForActivityDistrictsImpl';
import { AdminUserProfileServiceForResidentCityImpl } from './AdminUserProfileServiceForResidentCityImpl';
import { AdminUserProfileServiceForResidentCountyImpl } from './AdminUserProfileServiceForResidentCountyImpl';
import { AdminUserProfileServiceForResidentDistrictImpl } from './AdminUserProfileServiceForResidentDistrictImpl';
import { AdminUserVoteDefinitionServiceForActiveVoteDefinitionsGlobalImpl } from './AdminUserVoteDefinitionServiceForActiveVoteDefinitionsGlobalImpl';
import { AdminUserVoteDefinitionServiceForActiveVoteDefinitionsInActivityCitiesImpl } from './AdminUserVoteDefinitionServiceForActiveVoteDefinitionsInActivityCitiesImpl';
import { AdminUserVoteDefinitionServiceForActiveVoteDefinitionsInActivityCountiesImpl } from './AdminUserVoteDefinitionServiceForActiveVoteDefinitionsInActivityCountiesImpl';
import { AdminUserVoteDefinitionServiceForActiveVoteDefinitionsInActivityDistrictsImpl } from './AdminUserVoteDefinitionServiceForActiveVoteDefinitionsInActivityDistrictsImpl';
import { AdminUserVoteDefinitionServiceForActiveVoteDefinitionsInResidentCityImpl } from './AdminUserVoteDefinitionServiceForActiveVoteDefinitionsInResidentCityImpl';
import { AdminUserVoteDefinitionServiceForActiveVoteDefinitionsInResidentCountyImpl } from './AdminUserVoteDefinitionServiceForActiveVoteDefinitionsInResidentCountyImpl';
import { AdminUserVoteDefinitionServiceForActiveVoteDefinitionsInResidentDistrictImpl } from './AdminUserVoteDefinitionServiceForActiveVoteDefinitionsInResidentDistrictImpl';
import { AdminUserVoteDefinitionServiceForOwnedVoteDefinitionsImpl } from './AdminUserVoteDefinitionServiceForOwnedVoteDefinitionsImpl';
import { AdminVoteDefinitionServiceForDebateImpl } from './AdminVoteDefinitionServiceForDebateImpl';
import { AdminVoteDefinitionServiceForIssueImpl } from './AdminVoteDefinitionServiceForIssueImpl';
import { AdminVoteEntryServiceForVoteDefinitionImpl } from './AdminVoteEntryServiceForVoteDefinitionImpl';
import { AdminYesNoAbstainVoteDefinitionServiceForDebateImpl } from './AdminYesNoAbstainVoteDefinitionServiceForDebateImpl';
import { AdminYesNoAbstainVoteDefinitionServiceForIssueImpl } from './AdminYesNoAbstainVoteDefinitionServiceForIssueImpl';
import { AdminYesNoAbstainVoteDefinitionServiceForUserVoteEntryImpl } from './AdminYesNoAbstainVoteDefinitionServiceForUserVoteEntryImpl';
import { AdminYesNoAbstainVoteDefinitionServiceForVoteEntriesImpl } from './AdminYesNoAbstainVoteDefinitionServiceForVoteEntriesImpl';
import { AdminYesNoAbstainVoteEntryServiceForOwnerImpl } from './AdminYesNoAbstainVoteEntryServiceForOwnerImpl';
import { AdminYesNoVoteDefinitionServiceForDebateImpl } from './AdminYesNoVoteDefinitionServiceForDebateImpl';
import { AdminYesNoVoteDefinitionServiceForIssueImpl } from './AdminYesNoVoteDefinitionServiceForIssueImpl';
import { AdminYesNoVoteDefinitionServiceForUserVoteEntryImpl } from './AdminYesNoVoteDefinitionServiceForUserVoteEntryImpl';
import { AdminYesNoVoteDefinitionServiceForVoteEntriesImpl } from './AdminYesNoVoteDefinitionServiceForVoteEntriesImpl';
import { AdminYesNoVoteEntryServiceForOwnerImpl } from './AdminYesNoVoteEntryServiceForOwnerImpl';

import { CloseDebateInputServiceForClassImpl } from './CloseDebateInputServiceForClassImpl';
import { CloseDebateOutputVoteDefinitionReferenceServiceForClassImpl } from './CloseDebateOutputVoteDefinitionReferenceServiceForClassImpl';
import { CreateArgumentInputServiceForClassImpl } from './CreateArgumentInputServiceForClassImpl';
import { CreateCommentInputServiceForClassImpl } from './CreateCommentInputServiceForClassImpl';
import { CreateDebateInputServiceForClassImpl } from './CreateDebateInputServiceForClassImpl';
import { CreateDebateOutputDebateReferenceServiceForClassImpl } from './CreateDebateOutputDebateReferenceServiceForClassImpl';
import { RatingVoteInputServiceForClassImpl } from './RatingVoteInputServiceForClassImpl';
import { SelectAnswerVoteSelectionServiceForClassImpl } from './SelectAnswerVoteSelectionServiceForClassImpl';
import { YesNoAbstainVoteInputServiceForClassImpl } from './YesNoAbstainVoteInputServiceForClassImpl';
import { YesNoVoteInputServiceForClassImpl } from './YesNoVoteInputServiceForClassImpl';
import { AdminAdminPrincipalUserServiceForClassImpl } from './AdminAdminPrincipalUserServiceForClassImpl';
import { AdminCityServiceForClassImpl } from './AdminCityServiceForClassImpl';
import { AdminCommentServiceForClassImpl } from './AdminCommentServiceForClassImpl';
import { AdminConServiceForClassImpl } from './AdminConServiceForClassImpl';
import { AdminConParentServiceForClassImpl } from './AdminConParentServiceForClassImpl';
import { AdminCountyServiceForClassImpl } from './AdminCountyServiceForClassImpl';
import { AdminCreateIssueInputServiceForClassImpl } from './AdminCreateIssueInputServiceForClassImpl';
import { AdminCreateUserInputServiceForClassImpl } from './AdminCreateUserInputServiceForClassImpl';
import { AdminDashboardServiceForClassImpl } from './AdminDashboardServiceForClassImpl';
import { AdminDebateServiceForClassImpl } from './AdminDebateServiceForClassImpl';
import { AdminDistrictServiceForClassImpl } from './AdminDistrictServiceForClassImpl';
import { AdminIssueServiceForClassImpl } from './AdminIssueServiceForClassImpl';
import { AdminIssueAttachmentServiceForClassImpl } from './AdminIssueAttachmentServiceForClassImpl';
import { AdminIssueCategoryServiceForClassImpl } from './AdminIssueCategoryServiceForClassImpl';
import { AdminIssueDebateServiceForClassImpl } from './AdminIssueDebateServiceForClassImpl';
import { AdminIssueTypeServiceForClassImpl } from './AdminIssueTypeServiceForClassImpl';
import { AdminProServiceForClassImpl } from './AdminProServiceForClassImpl';
import { AdminProParentServiceForClassImpl } from './AdminProParentServiceForClassImpl';
import { AdminRatingVoteDefinitionServiceForClassImpl } from './AdminRatingVoteDefinitionServiceForClassImpl';
import { AdminRatingVoteEntryServiceForClassImpl } from './AdminRatingVoteEntryServiceForClassImpl';
import { AdminSelectAnswerVoteDefinitionServiceForClassImpl } from './AdminSelectAnswerVoteDefinitionServiceForClassImpl';
import { AdminSelectAnswerVoteEntryServiceForClassImpl } from './AdminSelectAnswerVoteEntryServiceForClassImpl';
import { AdminSelectAnswerVoteSelectionServiceForClassImpl } from './AdminSelectAnswerVoteSelectionServiceForClassImpl';
import { AdminSimpleVoteServiceForClassImpl } from './AdminSimpleVoteServiceForClassImpl';
import { AdminUserServiceForClassImpl } from './AdminUserServiceForClassImpl';
import { AdminUserDebatesServiceForClassImpl } from './AdminUserDebatesServiceForClassImpl';
import { AdminUserIssuesServiceForClassImpl } from './AdminUserIssuesServiceForClassImpl';
import { AdminUserManagerServiceForClassImpl } from './AdminUserManagerServiceForClassImpl';
import { AdminUserProfileServiceForClassImpl } from './AdminUserProfileServiceForClassImpl';
import { AdminUserVoteDefinitionServiceForClassImpl } from './AdminUserVoteDefinitionServiceForClassImpl';
import { AdminVoteDefinitionServiceForClassImpl } from './AdminVoteDefinitionServiceForClassImpl';
import { AdminVoteEntryServiceForClassImpl } from './AdminVoteEntryServiceForClassImpl';
import { AdminYesNoAbstainVoteDefinitionServiceForClassImpl } from './AdminYesNoAbstainVoteDefinitionServiceForClassImpl';
import { AdminYesNoAbstainVoteEntryServiceForClassImpl } from './AdminYesNoAbstainVoteEntryServiceForClassImpl';
import { AdminYesNoVoteDefinitionServiceForClassImpl } from './AdminYesNoVoteDefinitionServiceForClassImpl';
import { AdminYesNoVoteEntryServiceForClassImpl } from './AdminYesNoVoteEntryServiceForClassImpl';

export const accessServiceImpl = new AccessServiceImpl(judoAxiosProvider);

export const adminAdminServiceForActiveIssuesImpl = new AdminAdminServiceForActiveIssuesImpl(judoAxiosProvider);
export const adminAdminServiceForAdminCategoriesImpl = new AdminAdminServiceForAdminCategoriesImpl(judoAxiosProvider);
export const adminAdminServiceForAdminCountiesImpl = new AdminAdminServiceForAdminCountiesImpl(judoAxiosProvider);
export const adminAdminServiceForAdminDebatesImpl = new AdminAdminServiceForAdminDebatesImpl(judoAxiosProvider);
export const adminAdminServiceForAdminIssueTypesImpl = new AdminAdminServiceForAdminIssueTypesImpl(judoAxiosProvider);
export const adminAdminServiceForAdminIssuesImpl = new AdminAdminServiceForAdminIssuesImpl(judoAxiosProvider);
export const adminAdminServiceForAdminUserManagerImpl = new AdminAdminServiceForAdminUserManagerImpl(judoAxiosProvider);
export const adminAdminServiceForAdminUsersImpl = new AdminAdminServiceForAdminUsersImpl(judoAxiosProvider);
export const adminAdminServiceForAdminVoteDefinitionsImpl = new AdminAdminServiceForAdminVoteDefinitionsImpl(
  judoAxiosProvider,
);
export const adminAdminServiceForAdminVoteEntriesImpl = new AdminAdminServiceForAdminVoteEntriesImpl(judoAxiosProvider);
export const adminAdminServiceForDashboardHomeImpl = new AdminAdminServiceForDashboardHomeImpl(judoAxiosProvider);
export const adminAdminServiceForUserCreatedIssuesImpl = new AdminAdminServiceForUserCreatedIssuesImpl(
  judoAxiosProvider,
);
export const adminAdminServiceForUserDebatesImpl = new AdminAdminServiceForUserDebatesImpl(judoAxiosProvider);
export const adminAdminServiceForUserIssuesImpl = new AdminAdminServiceForUserIssuesImpl(judoAxiosProvider);
export const adminAdminServiceForUserOwnedActiveIssuesImpl = new AdminAdminServiceForUserOwnedActiveIssuesImpl(
  judoAxiosProvider,
);
export const adminAdminServiceForUserOwnedRatingVoteDefinitionsImpl =
  new AdminAdminServiceForUserOwnedRatingVoteDefinitionsImpl(judoAxiosProvider);
export const adminAdminServiceForUserOwnedSelectAnswerVoteDefinitionsImpl =
  new AdminAdminServiceForUserOwnedSelectAnswerVoteDefinitionsImpl(judoAxiosProvider);
export const adminAdminServiceForUserOwnedVoteEntriesImpl = new AdminAdminServiceForUserOwnedVoteEntriesImpl(
  judoAxiosProvider,
);
export const adminAdminServiceForUserOwnedYesNoAbstainVoteDefinitionsImpl =
  new AdminAdminServiceForUserOwnedYesNoAbstainVoteDefinitionsImpl(judoAxiosProvider);
export const adminAdminServiceForUserOwnedYesNoVoteDefinitionsImpl =
  new AdminAdminServiceForUserOwnedYesNoVoteDefinitionsImpl(judoAxiosProvider);
export const adminAdminServiceForUserProfileImpl = new AdminAdminServiceForUserProfileImpl(judoAxiosProvider);
export const adminAdminServiceForUserVoteDefinitionsImpl = new AdminAdminServiceForUserVoteDefinitionsImpl(
  judoAxiosProvider,
);

export const adminCityServiceForDistrictsImpl = new AdminCityServiceForDistrictsImpl(judoAxiosProvider);
export const adminCommentServiceForCreatedByImpl = new AdminCommentServiceForCreatedByImpl(judoAxiosProvider);
export const adminCommentServiceForVotesImpl = new AdminCommentServiceForVotesImpl(judoAxiosProvider);
export const adminConServiceForCommentsImpl = new AdminConServiceForCommentsImpl(judoAxiosProvider);
export const adminConServiceForConsImpl = new AdminConServiceForConsImpl(judoAxiosProvider);
export const adminConServiceForCreatedByImpl = new AdminConServiceForCreatedByImpl(judoAxiosProvider);
export const adminConServiceForParentConImpl = new AdminConServiceForParentConImpl(judoAxiosProvider);
export const adminConServiceForParentProImpl = new AdminConServiceForParentProImpl(judoAxiosProvider);
export const adminConServiceForProsImpl = new AdminConServiceForProsImpl(judoAxiosProvider);
export const adminConServiceForVotesImpl = new AdminConServiceForVotesImpl(judoAxiosProvider);
export const adminCountyServiceForCitiesImpl = new AdminCountyServiceForCitiesImpl(judoAxiosProvider);
export const adminCreateIssueInputServiceForCityImpl = new AdminCreateIssueInputServiceForCityImpl(judoAxiosProvider);
export const adminCreateIssueInputServiceForCountyImpl = new AdminCreateIssueInputServiceForCountyImpl(
  judoAxiosProvider,
);
export const adminCreateIssueInputServiceForDistrictImpl = new AdminCreateIssueInputServiceForDistrictImpl(
  judoAxiosProvider,
);
export const adminCreateIssueInputServiceForIssueTypeImpl = new AdminCreateIssueInputServiceForIssueTypeImpl(
  judoAxiosProvider,
);
export const adminDashboardServiceForFavoriteDebatesImpl = new AdminDashboardServiceForFavoriteDebatesImpl(
  judoAxiosProvider,
);
export const adminDashboardServiceForFavoriteIssuesImpl = new AdminDashboardServiceForFavoriteIssuesImpl(
  judoAxiosProvider,
);
export const adminDashboardServiceForFavoriteVoteDefinitionsImpl =
  new AdminDashboardServiceForFavoriteVoteDefinitionsImpl(judoAxiosProvider);
export const adminDashboardServiceForIssuesOwnedImpl = new AdminDashboardServiceForIssuesOwnedImpl(judoAxiosProvider);
export const adminDashboardServiceForOwnedDebatesImpl = new AdminDashboardServiceForOwnedDebatesImpl(judoAxiosProvider);
export const adminDashboardServiceForOwnedVoteDefinitionsImpl = new AdminDashboardServiceForOwnedVoteDefinitionsImpl(
  judoAxiosProvider,
);
export const adminDashboardServiceForUserVoteEntriesImpl = new AdminDashboardServiceForUserVoteEntriesImpl(
  judoAxiosProvider,
);
export const adminDebateServiceForCommentsImpl = new AdminDebateServiceForCommentsImpl(judoAxiosProvider);
export const adminDebateServiceForConsImpl = new AdminDebateServiceForConsImpl(judoAxiosProvider);
export const adminDebateServiceForCreatedByImpl = new AdminDebateServiceForCreatedByImpl(judoAxiosProvider);
export const adminDebateServiceForIssueImpl = new AdminDebateServiceForIssueImpl(judoAxiosProvider);
export const adminDebateServiceForProsImpl = new AdminDebateServiceForProsImpl(judoAxiosProvider);
export const adminDebateServiceForRatingVoteDefinitionImpl = new AdminDebateServiceForRatingVoteDefinitionImpl(
  judoAxiosProvider,
);
export const adminDebateServiceForSelectAnswerVoteDefinitionImpl =
  new AdminDebateServiceForSelectAnswerVoteDefinitionImpl(judoAxiosProvider);
export const adminDebateServiceForVoteDefinitionImpl = new AdminDebateServiceForVoteDefinitionImpl(judoAxiosProvider);
export const adminDebateServiceForYesNoAbstainVoteDefinitionImpl =
  new AdminDebateServiceForYesNoAbstainVoteDefinitionImpl(judoAxiosProvider);
export const adminDebateServiceForYesNoVoteDefinitionImpl = new AdminDebateServiceForYesNoVoteDefinitionImpl(
  judoAxiosProvider,
);
export const adminIssueServiceForAttachmentsImpl = new AdminIssueServiceForAttachmentsImpl(judoAxiosProvider);
export const adminIssueServiceForCategoriesImpl = new AdminIssueServiceForCategoriesImpl(judoAxiosProvider);
export const adminIssueServiceForCityImpl = new AdminIssueServiceForCityImpl(judoAxiosProvider);
export const adminIssueServiceForCommentsImpl = new AdminIssueServiceForCommentsImpl(judoAxiosProvider);
export const adminIssueServiceForCountyImpl = new AdminIssueServiceForCountyImpl(judoAxiosProvider);
export const adminIssueServiceForCreatedByImpl = new AdminIssueServiceForCreatedByImpl(judoAxiosProvider);
export const adminIssueServiceForDebatesImpl = new AdminIssueServiceForDebatesImpl(judoAxiosProvider);
export const adminIssueServiceForDistrictImpl = new AdminIssueServiceForDistrictImpl(judoAxiosProvider);
export const adminIssueServiceForIssueTypeImpl = new AdminIssueServiceForIssueTypeImpl(judoAxiosProvider);
export const adminIssueServiceForOwnerImpl = new AdminIssueServiceForOwnerImpl(judoAxiosProvider);
export const adminIssueCategoryServiceForOwnerImpl = new AdminIssueCategoryServiceForOwnerImpl(judoAxiosProvider);
export const adminIssueCategoryServiceForSubcategoriesImpl = new AdminIssueCategoryServiceForSubcategoriesImpl(
  judoAxiosProvider,
);
export const adminProServiceForCommentsImpl = new AdminProServiceForCommentsImpl(judoAxiosProvider);
export const adminProServiceForConsImpl = new AdminProServiceForConsImpl(judoAxiosProvider);
export const adminProServiceForCreatedByImpl = new AdminProServiceForCreatedByImpl(judoAxiosProvider);
export const adminProServiceForParentConImpl = new AdminProServiceForParentConImpl(judoAxiosProvider);
export const adminProServiceForParentProImpl = new AdminProServiceForParentProImpl(judoAxiosProvider);
export const adminProServiceForProsImpl = new AdminProServiceForProsImpl(judoAxiosProvider);
export const adminProServiceForVotesImpl = new AdminProServiceForVotesImpl(judoAxiosProvider);
export const adminRatingVoteDefinitionServiceForDebateImpl = new AdminRatingVoteDefinitionServiceForDebateImpl(
  judoAxiosProvider,
);
export const adminRatingVoteDefinitionServiceForIssueImpl = new AdminRatingVoteDefinitionServiceForIssueImpl(
  judoAxiosProvider,
);
export const adminRatingVoteDefinitionServiceForUserVoteEntryImpl =
  new AdminRatingVoteDefinitionServiceForUserVoteEntryImpl(judoAxiosProvider);
export const adminRatingVoteDefinitionServiceForVoteEntriesImpl =
  new AdminRatingVoteDefinitionServiceForVoteEntriesImpl(judoAxiosProvider);
export const adminRatingVoteEntryServiceForOwnerImpl = new AdminRatingVoteEntryServiceForOwnerImpl(judoAxiosProvider);
export const adminSelectAnswerVoteDefinitionServiceForDebateImpl =
  new AdminSelectAnswerVoteDefinitionServiceForDebateImpl(judoAxiosProvider);
export const adminSelectAnswerVoteDefinitionServiceForIssueImpl =
  new AdminSelectAnswerVoteDefinitionServiceForIssueImpl(judoAxiosProvider);
export const adminSelectAnswerVoteDefinitionServiceForUserVoteEntryImpl =
  new AdminSelectAnswerVoteDefinitionServiceForUserVoteEntryImpl(judoAxiosProvider);
export const adminSelectAnswerVoteDefinitionServiceForVoteEntriesImpl =
  new AdminSelectAnswerVoteDefinitionServiceForVoteEntriesImpl(judoAxiosProvider);
export const adminSelectAnswerVoteDefinitionServiceForVoteSelectionsImpl =
  new AdminSelectAnswerVoteDefinitionServiceForVoteSelectionsImpl(judoAxiosProvider);
export const adminSelectAnswerVoteEntryServiceForOwnerImpl = new AdminSelectAnswerVoteEntryServiceForOwnerImpl(
  judoAxiosProvider,
);
export const adminSelectAnswerVoteEntryServiceForValueImpl = new AdminSelectAnswerVoteEntryServiceForValueImpl(
  judoAxiosProvider,
);
export const adminSimpleVoteServiceForUserImpl = new AdminSimpleVoteServiceForUserImpl(judoAxiosProvider);
export const adminUserServiceForActivityCitiesImpl = new AdminUserServiceForActivityCitiesImpl(judoAxiosProvider);
export const adminUserServiceForActivityCountiesImpl = new AdminUserServiceForActivityCountiesImpl(judoAxiosProvider);
export const adminUserServiceForActivityDistrictsImpl = new AdminUserServiceForActivityDistrictsImpl(judoAxiosProvider);
export const adminUserServiceForResidentCityImpl = new AdminUserServiceForResidentCityImpl(judoAxiosProvider);
export const adminUserServiceForResidentCountyImpl = new AdminUserServiceForResidentCountyImpl(judoAxiosProvider);
export const adminUserServiceForResidentDistrictImpl = new AdminUserServiceForResidentDistrictImpl(judoAxiosProvider);
export const adminUserServiceForVotesImpl = new AdminUserServiceForVotesImpl(judoAxiosProvider);
export const adminUserDebatesServiceForActiveDebatesGlobalImpl = new AdminUserDebatesServiceForActiveDebatesGlobalImpl(
  judoAxiosProvider,
);
export const adminUserDebatesServiceForActiveDebatesInActivityCitiesImpl =
  new AdminUserDebatesServiceForActiveDebatesInActivityCitiesImpl(judoAxiosProvider);
export const adminUserDebatesServiceForActiveDebatesInActivityCountiesImpl =
  new AdminUserDebatesServiceForActiveDebatesInActivityCountiesImpl(judoAxiosProvider);
export const adminUserDebatesServiceForActiveDebatesInActivityDistrictsImpl =
  new AdminUserDebatesServiceForActiveDebatesInActivityDistrictsImpl(judoAxiosProvider);
export const adminUserDebatesServiceForActiveDebatesInResidentCityImpl =
  new AdminUserDebatesServiceForActiveDebatesInResidentCityImpl(judoAxiosProvider);
export const adminUserDebatesServiceForActiveDebatesInResidentCountyImpl =
  new AdminUserDebatesServiceForActiveDebatesInResidentCountyImpl(judoAxiosProvider);
export const adminUserDebatesServiceForActiveDebatesInResidentDistrictImpl =
  new AdminUserDebatesServiceForActiveDebatesInResidentDistrictImpl(judoAxiosProvider);
export const adminUserDebatesServiceForOwnedDebatesImpl = new AdminUserDebatesServiceForOwnedDebatesImpl(
  judoAxiosProvider,
);
export const adminUserIssuesServiceForActiveIssuesGlobalImpl = new AdminUserIssuesServiceForActiveIssuesGlobalImpl(
  judoAxiosProvider,
);
export const adminUserIssuesServiceForActiveIssuesInActivityCitiesImpl =
  new AdminUserIssuesServiceForActiveIssuesInActivityCitiesImpl(judoAxiosProvider);
export const adminUserIssuesServiceForActiveIssuesInActivityCountiesImpl =
  new AdminUserIssuesServiceForActiveIssuesInActivityCountiesImpl(judoAxiosProvider);
export const adminUserIssuesServiceForActiveIssuesInActivityDistrictsImpl =
  new AdminUserIssuesServiceForActiveIssuesInActivityDistrictsImpl(judoAxiosProvider);
export const adminUserIssuesServiceForActiveIssuesInResidentCityImpl =
  new AdminUserIssuesServiceForActiveIssuesInResidentCityImpl(judoAxiosProvider);
export const adminUserIssuesServiceForActiveIssuesInResidentCountyImpl =
  new AdminUserIssuesServiceForActiveIssuesInResidentCountyImpl(judoAxiosProvider);
export const adminUserIssuesServiceForActiveIssuesInResidentDistrictImpl =
  new AdminUserIssuesServiceForActiveIssuesInResidentDistrictImpl(judoAxiosProvider);
export const adminUserIssuesServiceForOwnedIssuesImpl = new AdminUserIssuesServiceForOwnedIssuesImpl(judoAxiosProvider);
export const adminUserManagerServiceForUsersImpl = new AdminUserManagerServiceForUsersImpl(judoAxiosProvider);
export const adminUserProfileServiceForActivityCitiesImpl = new AdminUserProfileServiceForActivityCitiesImpl(
  judoAxiosProvider,
);
export const adminUserProfileServiceForActivityCountiesImpl = new AdminUserProfileServiceForActivityCountiesImpl(
  judoAxiosProvider,
);
export const adminUserProfileServiceForActivityDistrictsImpl = new AdminUserProfileServiceForActivityDistrictsImpl(
  judoAxiosProvider,
);
export const adminUserProfileServiceForResidentCityImpl = new AdminUserProfileServiceForResidentCityImpl(
  judoAxiosProvider,
);
export const adminUserProfileServiceForResidentCountyImpl = new AdminUserProfileServiceForResidentCountyImpl(
  judoAxiosProvider,
);
export const adminUserProfileServiceForResidentDistrictImpl = new AdminUserProfileServiceForResidentDistrictImpl(
  judoAxiosProvider,
);
export const adminUserVoteDefinitionServiceForActiveVoteDefinitionsGlobalImpl =
  new AdminUserVoteDefinitionServiceForActiveVoteDefinitionsGlobalImpl(judoAxiosProvider);
export const adminUserVoteDefinitionServiceForActiveVoteDefinitionsInActivityCitiesImpl =
  new AdminUserVoteDefinitionServiceForActiveVoteDefinitionsInActivityCitiesImpl(judoAxiosProvider);
export const adminUserVoteDefinitionServiceForActiveVoteDefinitionsInActivityCountiesImpl =
  new AdminUserVoteDefinitionServiceForActiveVoteDefinitionsInActivityCountiesImpl(judoAxiosProvider);
export const adminUserVoteDefinitionServiceForActiveVoteDefinitionsInActivityDistrictsImpl =
  new AdminUserVoteDefinitionServiceForActiveVoteDefinitionsInActivityDistrictsImpl(judoAxiosProvider);
export const adminUserVoteDefinitionServiceForActiveVoteDefinitionsInResidentCityImpl =
  new AdminUserVoteDefinitionServiceForActiveVoteDefinitionsInResidentCityImpl(judoAxiosProvider);
export const adminUserVoteDefinitionServiceForActiveVoteDefinitionsInResidentCountyImpl =
  new AdminUserVoteDefinitionServiceForActiveVoteDefinitionsInResidentCountyImpl(judoAxiosProvider);
export const adminUserVoteDefinitionServiceForActiveVoteDefinitionsInResidentDistrictImpl =
  new AdminUserVoteDefinitionServiceForActiveVoteDefinitionsInResidentDistrictImpl(judoAxiosProvider);
export const adminUserVoteDefinitionServiceForOwnedVoteDefinitionsImpl =
  new AdminUserVoteDefinitionServiceForOwnedVoteDefinitionsImpl(judoAxiosProvider);
export const adminVoteDefinitionServiceForDebateImpl = new AdminVoteDefinitionServiceForDebateImpl(judoAxiosProvider);
export const adminVoteDefinitionServiceForIssueImpl = new AdminVoteDefinitionServiceForIssueImpl(judoAxiosProvider);
export const adminVoteEntryServiceForVoteDefinitionImpl = new AdminVoteEntryServiceForVoteDefinitionImpl(
  judoAxiosProvider,
);
export const adminYesNoAbstainVoteDefinitionServiceForDebateImpl =
  new AdminYesNoAbstainVoteDefinitionServiceForDebateImpl(judoAxiosProvider);
export const adminYesNoAbstainVoteDefinitionServiceForIssueImpl =
  new AdminYesNoAbstainVoteDefinitionServiceForIssueImpl(judoAxiosProvider);
export const adminYesNoAbstainVoteDefinitionServiceForUserVoteEntryImpl =
  new AdminYesNoAbstainVoteDefinitionServiceForUserVoteEntryImpl(judoAxiosProvider);
export const adminYesNoAbstainVoteDefinitionServiceForVoteEntriesImpl =
  new AdminYesNoAbstainVoteDefinitionServiceForVoteEntriesImpl(judoAxiosProvider);
export const adminYesNoAbstainVoteEntryServiceForOwnerImpl = new AdminYesNoAbstainVoteEntryServiceForOwnerImpl(
  judoAxiosProvider,
);
export const adminYesNoVoteDefinitionServiceForDebateImpl = new AdminYesNoVoteDefinitionServiceForDebateImpl(
  judoAxiosProvider,
);
export const adminYesNoVoteDefinitionServiceForIssueImpl = new AdminYesNoVoteDefinitionServiceForIssueImpl(
  judoAxiosProvider,
);
export const adminYesNoVoteDefinitionServiceForUserVoteEntryImpl =
  new AdminYesNoVoteDefinitionServiceForUserVoteEntryImpl(judoAxiosProvider);
export const adminYesNoVoteDefinitionServiceForVoteEntriesImpl = new AdminYesNoVoteDefinitionServiceForVoteEntriesImpl(
  judoAxiosProvider,
);
export const adminYesNoVoteEntryServiceForOwnerImpl = new AdminYesNoVoteEntryServiceForOwnerImpl(judoAxiosProvider);

export const closeDebateInputServiceForClassImpl = new CloseDebateInputServiceForClassImpl(judoAxiosProvider);
export const closeDebateOutputVoteDefinitionReferenceServiceForClassImpl =
  new CloseDebateOutputVoteDefinitionReferenceServiceForClassImpl(judoAxiosProvider);
export const createArgumentInputServiceForClassImpl = new CreateArgumentInputServiceForClassImpl(judoAxiosProvider);
export const createCommentInputServiceForClassImpl = new CreateCommentInputServiceForClassImpl(judoAxiosProvider);
export const createDebateInputServiceForClassImpl = new CreateDebateInputServiceForClassImpl(judoAxiosProvider);
export const createDebateOutputDebateReferenceServiceForClassImpl =
  new CreateDebateOutputDebateReferenceServiceForClassImpl(judoAxiosProvider);
export const ratingVoteInputServiceForClassImpl = new RatingVoteInputServiceForClassImpl(judoAxiosProvider);
export const selectAnswerVoteSelectionServiceForClassImpl = new SelectAnswerVoteSelectionServiceForClassImpl(
  judoAxiosProvider,
);
export const yesNoAbstainVoteInputServiceForClassImpl = new YesNoAbstainVoteInputServiceForClassImpl(judoAxiosProvider);
export const yesNoVoteInputServiceForClassImpl = new YesNoVoteInputServiceForClassImpl(judoAxiosProvider);
export const adminAdminPrincipalUserServiceForClassImpl = new AdminAdminPrincipalUserServiceForClassImpl(
  judoAxiosProvider,
);
export const adminCityServiceForClassImpl = new AdminCityServiceForClassImpl(judoAxiosProvider);
export const adminCommentServiceForClassImpl = new AdminCommentServiceForClassImpl(judoAxiosProvider);
export const adminConServiceForClassImpl = new AdminConServiceForClassImpl(judoAxiosProvider);
export const adminConParentServiceForClassImpl = new AdminConParentServiceForClassImpl(judoAxiosProvider);
export const adminCountyServiceForClassImpl = new AdminCountyServiceForClassImpl(judoAxiosProvider);
export const adminCreateIssueInputServiceForClassImpl = new AdminCreateIssueInputServiceForClassImpl(judoAxiosProvider);
export const adminCreateUserInputServiceForClassImpl = new AdminCreateUserInputServiceForClassImpl(judoAxiosProvider);
export const adminDashboardServiceForClassImpl = new AdminDashboardServiceForClassImpl(judoAxiosProvider);
export const adminDebateServiceForClassImpl = new AdminDebateServiceForClassImpl(judoAxiosProvider);
export const adminDistrictServiceForClassImpl = new AdminDistrictServiceForClassImpl(judoAxiosProvider);
export const adminIssueServiceForClassImpl = new AdminIssueServiceForClassImpl(judoAxiosProvider);
export const adminIssueAttachmentServiceForClassImpl = new AdminIssueAttachmentServiceForClassImpl(judoAxiosProvider);
export const adminIssueCategoryServiceForClassImpl = new AdminIssueCategoryServiceForClassImpl(judoAxiosProvider);
export const adminIssueDebateServiceForClassImpl = new AdminIssueDebateServiceForClassImpl(judoAxiosProvider);
export const adminIssueTypeServiceForClassImpl = new AdminIssueTypeServiceForClassImpl(judoAxiosProvider);
export const adminProServiceForClassImpl = new AdminProServiceForClassImpl(judoAxiosProvider);
export const adminProParentServiceForClassImpl = new AdminProParentServiceForClassImpl(judoAxiosProvider);
export const adminRatingVoteDefinitionServiceForClassImpl = new AdminRatingVoteDefinitionServiceForClassImpl(
  judoAxiosProvider,
);
export const adminRatingVoteEntryServiceForClassImpl = new AdminRatingVoteEntryServiceForClassImpl(judoAxiosProvider);
export const adminSelectAnswerVoteDefinitionServiceForClassImpl =
  new AdminSelectAnswerVoteDefinitionServiceForClassImpl(judoAxiosProvider);
export const adminSelectAnswerVoteEntryServiceForClassImpl = new AdminSelectAnswerVoteEntryServiceForClassImpl(
  judoAxiosProvider,
);
export const adminSelectAnswerVoteSelectionServiceForClassImpl = new AdminSelectAnswerVoteSelectionServiceForClassImpl(
  judoAxiosProvider,
);
export const adminSimpleVoteServiceForClassImpl = new AdminSimpleVoteServiceForClassImpl(judoAxiosProvider);
export const adminUserServiceForClassImpl = new AdminUserServiceForClassImpl(judoAxiosProvider);
export const adminUserDebatesServiceForClassImpl = new AdminUserDebatesServiceForClassImpl(judoAxiosProvider);
export const adminUserIssuesServiceForClassImpl = new AdminUserIssuesServiceForClassImpl(judoAxiosProvider);
export const adminUserManagerServiceForClassImpl = new AdminUserManagerServiceForClassImpl(judoAxiosProvider);
export const adminUserProfileServiceForClassImpl = new AdminUserProfileServiceForClassImpl(judoAxiosProvider);
export const adminUserVoteDefinitionServiceForClassImpl = new AdminUserVoteDefinitionServiceForClassImpl(
  judoAxiosProvider,
);
export const adminVoteDefinitionServiceForClassImpl = new AdminVoteDefinitionServiceForClassImpl(judoAxiosProvider);
export const adminVoteEntryServiceForClassImpl = new AdminVoteEntryServiceForClassImpl(judoAxiosProvider);
export const adminYesNoAbstainVoteDefinitionServiceForClassImpl =
  new AdminYesNoAbstainVoteDefinitionServiceForClassImpl(judoAxiosProvider);
export const adminYesNoAbstainVoteEntryServiceForClassImpl = new AdminYesNoAbstainVoteEntryServiceForClassImpl(
  judoAxiosProvider,
);
export const adminYesNoVoteDefinitionServiceForClassImpl = new AdminYesNoVoteDefinitionServiceForClassImpl(
  judoAxiosProvider,
);
export const adminYesNoVoteEntryServiceForClassImpl = new AdminYesNoVoteEntryServiceForClassImpl(judoAxiosProvider);
