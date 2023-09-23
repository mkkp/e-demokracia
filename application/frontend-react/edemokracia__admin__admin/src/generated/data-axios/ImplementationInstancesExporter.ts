//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'data-axios/'+'ImplementationInstancesExporter.ts'
// Template name: implementationInstancesExporter.ts.hbs
// Template file: data-axios/implementationInstancesExporter.ts.hbs

import { judoAxiosProvider } from './JudoAxiosProvider';
import { AccessServiceImpl } from './AccessServiceImpl';

import { AdminAdminServiceForCategoriesImpl } from './AdminAdminServiceForCategoriesImpl';
import { AdminAdminServiceForCountiesImpl } from './AdminAdminServiceForCountiesImpl';
import { AdminAdminServiceForDashboardhomeImpl } from './AdminAdminServiceForDashboardhomeImpl';
import { AdminAdminServiceForDebatesImpl } from './AdminAdminServiceForDebatesImpl';
import { AdminAdminServiceForIssueTypesImpl } from './AdminAdminServiceForIssueTypesImpl';
import { AdminAdminServiceForIssuesImpl } from './AdminAdminServiceForIssuesImpl';
import { AdminAdminServiceForUsersImpl } from './AdminAdminServiceForUsersImpl';
import { AdminAdminServiceForVoteDefinitionsImpl } from './AdminAdminServiceForVoteDefinitionsImpl';
import { AdminAdminServiceForVoteEntriesImpl } from './AdminAdminServiceForVoteEntriesImpl';
import { AdminAdminServiceForYesNoVoteDefinitionsImpl } from './AdminAdminServiceForYesNoVoteDefinitionsImpl';

import { CityServiceForDistrictsImpl } from './CityServiceForDistrictsImpl';
import { CommentServiceForCreatedByImpl } from './CommentServiceForCreatedByImpl';
import { CommentServiceForVotesImpl } from './CommentServiceForVotesImpl';
import { ConServiceForCommentsImpl } from './ConServiceForCommentsImpl';
import { ConServiceForConsImpl } from './ConServiceForConsImpl';
import { ConServiceForCreatedByImpl } from './ConServiceForCreatedByImpl';
import { ConServiceForProsImpl } from './ConServiceForProsImpl';
import { ConServiceForVotesImpl } from './ConServiceForVotesImpl';
import { CountyServiceForCitiesImpl } from './CountyServiceForCitiesImpl';
import { DebateServiceForCommentsImpl } from './DebateServiceForCommentsImpl';
import { DebateServiceForConsImpl } from './DebateServiceForConsImpl';
import { DebateServiceForCreatedByImpl } from './DebateServiceForCreatedByImpl';
import { DebateServiceForDebateVoteImpl } from './DebateServiceForDebateVoteImpl';
import { DebateServiceForIssueImpl } from './DebateServiceForIssueImpl';
import { DebateServiceForProsImpl } from './DebateServiceForProsImpl';
import { IssueServiceForAttachmentsImpl } from './IssueServiceForAttachmentsImpl';
import { IssueServiceForCategoriesImpl } from './IssueServiceForCategoriesImpl';
import { IssueServiceForCityImpl } from './IssueServiceForCityImpl';
import { IssueServiceForCommentsImpl } from './IssueServiceForCommentsImpl';
import { IssueServiceForCountyImpl } from './IssueServiceForCountyImpl';
import { IssueServiceForCreatedByImpl } from './IssueServiceForCreatedByImpl';
import { IssueServiceForDebatesImpl } from './IssueServiceForDebatesImpl';
import { IssueServiceForDistrictImpl } from './IssueServiceForDistrictImpl';
import { IssueServiceForIssueTypeImpl } from './IssueServiceForIssueTypeImpl';
import { IssueServiceForOwnerImpl } from './IssueServiceForOwnerImpl';
import { IssueCategoryServiceForOwnerImpl } from './IssueCategoryServiceForOwnerImpl';
import { IssueCategoryServiceForSubcategoriesImpl } from './IssueCategoryServiceForSubcategoriesImpl';
import { ProServiceForCommentsImpl } from './ProServiceForCommentsImpl';
import { ProServiceForConsImpl } from './ProServiceForConsImpl';
import { ProServiceForCreatedByImpl } from './ProServiceForCreatedByImpl';
import { ProServiceForProsImpl } from './ProServiceForProsImpl';
import { ProServiceForVotesImpl } from './ProServiceForVotesImpl';
import { SimpleVoteServiceForUserImpl } from './SimpleVoteServiceForUserImpl';
import { UserServiceForActivityCitiesImpl } from './UserServiceForActivityCitiesImpl';
import { UserServiceForActivityCountiesImpl } from './UserServiceForActivityCountiesImpl';
import { UserServiceForActivityDistrictsImpl } from './UserServiceForActivityDistrictsImpl';
import { UserServiceForResidentCityImpl } from './UserServiceForResidentCityImpl';
import { UserServiceForResidentCountyImpl } from './UserServiceForResidentCountyImpl';
import { UserServiceForResidentDistrictImpl } from './UserServiceForResidentDistrictImpl';
import { UserServiceForVotesImpl } from './UserServiceForVotesImpl';
import { VoteDefinitionServiceForDebateImpl } from './VoteDefinitionServiceForDebateImpl';
import { VoteDefinitionServiceForIssueImpl } from './VoteDefinitionServiceForIssueImpl';
import { VoteDefinitionServiceForUserVoteEntryImpl } from './VoteDefinitionServiceForUserVoteEntryImpl';
import { VoteDefinitionServiceForVoteEntriesImpl } from './VoteDefinitionServiceForVoteEntriesImpl';
import { VoteEntryServiceForUserImpl } from './VoteEntryServiceForUserImpl';
import { VoteEntryServiceForVoteDefinitionImpl } from './VoteEntryServiceForVoteDefinitionImpl';
import { AdminCityServiceForDistrictsImpl } from './AdminCityServiceForDistrictsImpl';
import { AdminCommentServiceForCreatedByImpl } from './AdminCommentServiceForCreatedByImpl';
import { AdminCommentServiceForVotesImpl } from './AdminCommentServiceForVotesImpl';
import { AdminConServiceForCommentsImpl } from './AdminConServiceForCommentsImpl';
import { AdminConServiceForConsImpl } from './AdminConServiceForConsImpl';
import { AdminConServiceForCreatedByImpl } from './AdminConServiceForCreatedByImpl';
import { AdminConServiceForParentConImpl } from './AdminConServiceForParentConImpl';
import { AdminConServiceForParentDebateImpl } from './AdminConServiceForParentDebateImpl';
import { AdminConServiceForParentProImpl } from './AdminConServiceForParentProImpl';
import { AdminConServiceForProsImpl } from './AdminConServiceForProsImpl';
import { AdminConServiceForVotesImpl } from './AdminConServiceForVotesImpl';
import { AdminCountyServiceForCitiesImpl } from './AdminCountyServiceForCitiesImpl';
import { AdminCreateIssueInputServiceForCityImpl } from './AdminCreateIssueInputServiceForCityImpl';
import { AdminCreateIssueInputServiceForCountyImpl } from './AdminCreateIssueInputServiceForCountyImpl';
import { AdminCreateIssueInputServiceForDistrictImpl } from './AdminCreateIssueInputServiceForDistrictImpl';
import { AdminCreateIssueInputServiceForIssueTypeImpl } from './AdminCreateIssueInputServiceForIssueTypeImpl';
import { AdminDashboardServiceForDebatesImpl } from './AdminDashboardServiceForDebatesImpl';
import { AdminDashboardServiceForIssuesImpl } from './AdminDashboardServiceForIssuesImpl';
import { AdminDashboardServiceForVoteEntriesImpl } from './AdminDashboardServiceForVoteEntriesImpl';
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
import { AdminProServiceForParentDebateImpl } from './AdminProServiceForParentDebateImpl';
import { AdminProServiceForParentProImpl } from './AdminProServiceForParentProImpl';
import { AdminProServiceForProsImpl } from './AdminProServiceForProsImpl';
import { AdminProServiceForVotesImpl } from './AdminProServiceForVotesImpl';
import { AdminRatingVoteDefinitionServiceForDebateImpl } from './AdminRatingVoteDefinitionServiceForDebateImpl';
import { AdminRatingVoteDefinitionServiceForIssueImpl } from './AdminRatingVoteDefinitionServiceForIssueImpl';
import { AdminRatingVoteDefinitionServiceForVoteEntriesImpl } from './AdminRatingVoteDefinitionServiceForVoteEntriesImpl';
import { AdminSelectAnswerVoteDefinitionServiceForDebateImpl } from './AdminSelectAnswerVoteDefinitionServiceForDebateImpl';
import { AdminSelectAnswerVoteDefinitionServiceForIssueImpl } from './AdminSelectAnswerVoteDefinitionServiceForIssueImpl';
import { AdminSimpleVoteServiceForUserImpl } from './AdminSimpleVoteServiceForUserImpl';
import { AdminUserServiceForActivityCitiesImpl } from './AdminUserServiceForActivityCitiesImpl';
import { AdminUserServiceForActivityCountiesImpl } from './AdminUserServiceForActivityCountiesImpl';
import { AdminUserServiceForActivityDistrictsImpl } from './AdminUserServiceForActivityDistrictsImpl';
import { AdminUserServiceForResidentCityImpl } from './AdminUserServiceForResidentCityImpl';
import { AdminUserServiceForResidentCountyImpl } from './AdminUserServiceForResidentCountyImpl';
import { AdminUserServiceForResidentDistrictImpl } from './AdminUserServiceForResidentDistrictImpl';
import { AdminUserServiceForVotesImpl } from './AdminUserServiceForVotesImpl';
import { AdminVoteDefinitionServiceForDebateImpl } from './AdminVoteDefinitionServiceForDebateImpl';
import { AdminVoteDefinitionServiceForIssueImpl } from './AdminVoteDefinitionServiceForIssueImpl';
import { AdminVoteEntryServiceForVoteDefinitionImpl } from './AdminVoteEntryServiceForVoteDefinitionImpl';
import { AdminYesNoAbstainVoteDefinitionServiceForDebateImpl } from './AdminYesNoAbstainVoteDefinitionServiceForDebateImpl';
import { AdminYesNoAbstainVoteDefinitionServiceForIssueImpl } from './AdminYesNoAbstainVoteDefinitionServiceForIssueImpl';
import { AdminYesNoVoteDefinitionServiceForDebateImpl } from './AdminYesNoVoteDefinitionServiceForDebateImpl';
import { AdminYesNoVoteDefinitionServiceForIssueImpl } from './AdminYesNoVoteDefinitionServiceForIssueImpl';
import { AdminYesNoVoteDefinitionServiceForUserVoteEntryImpl } from './AdminYesNoVoteDefinitionServiceForUserVoteEntryImpl';
import { AdminYesNoVoteDefinitionServiceForVoteEntriesImpl } from './AdminYesNoVoteDefinitionServiceForVoteEntriesImpl';
import { AdminYesNoVoteEntryServiceForUserImpl } from './AdminYesNoVoteEntryServiceForUserImpl';

import { CityServiceForClassImpl } from './CityServiceForClassImpl';
import { CloseDebateInputServiceForClassImpl } from './CloseDebateInputServiceForClassImpl';
import { CommentServiceForClassImpl } from './CommentServiceForClassImpl';
import { ConServiceForClassImpl } from './ConServiceForClassImpl';
import { CountyServiceForClassImpl } from './CountyServiceForClassImpl';
import { CreateArgumentInputServiceForClassImpl } from './CreateArgumentInputServiceForClassImpl';
import { CreateCommentInputServiceForClassImpl } from './CreateCommentInputServiceForClassImpl';
import { CreateDebateInputServiceForClassImpl } from './CreateDebateInputServiceForClassImpl';
import { DebateServiceForClassImpl } from './DebateServiceForClassImpl';
import { DistrictServiceForClassImpl } from './DistrictServiceForClassImpl';
import { IssueServiceForClassImpl } from './IssueServiceForClassImpl';
import { IssueAttachmentServiceForClassImpl } from './IssueAttachmentServiceForClassImpl';
import { IssueCategoryServiceForClassImpl } from './IssueCategoryServiceForClassImpl';
import { IssueTypeServiceForClassImpl } from './IssueTypeServiceForClassImpl';
import { ProServiceForClassImpl } from './ProServiceForClassImpl';
import { RatingVoteInputServiceForClassImpl } from './RatingVoteInputServiceForClassImpl';
import { SelectAnswerVoteSelectionServiceForClassImpl } from './SelectAnswerVoteSelectionServiceForClassImpl';
import { SimpleVoteServiceForClassImpl } from './SimpleVoteServiceForClassImpl';
import { UserServiceForClassImpl } from './UserServiceForClassImpl';
import { VoteDefinitionServiceForClassImpl } from './VoteDefinitionServiceForClassImpl';
import { VoteEntryServiceForClassImpl } from './VoteEntryServiceForClassImpl';
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
import { AdminDebateParentServiceForClassImpl } from './AdminDebateParentServiceForClassImpl';
import { AdminDistrictServiceForClassImpl } from './AdminDistrictServiceForClassImpl';
import { AdminIssueServiceForClassImpl } from './AdminIssueServiceForClassImpl';
import { AdminIssueAttachmentServiceForClassImpl } from './AdminIssueAttachmentServiceForClassImpl';
import { AdminIssueCategoryServiceForClassImpl } from './AdminIssueCategoryServiceForClassImpl';
import { AdminIssueDebateServiceForClassImpl } from './AdminIssueDebateServiceForClassImpl';
import { AdminIssueTypeServiceForClassImpl } from './AdminIssueTypeServiceForClassImpl';
import { AdminProServiceForClassImpl } from './AdminProServiceForClassImpl';
import { AdminProParentServiceForClassImpl } from './AdminProParentServiceForClassImpl';
import { AdminRatingVoteDefinitionServiceForClassImpl } from './AdminRatingVoteDefinitionServiceForClassImpl';
import { AdminSelectAnswerVoteDefinitionServiceForClassImpl } from './AdminSelectAnswerVoteDefinitionServiceForClassImpl';
import { AdminSimpleVoteServiceForClassImpl } from './AdminSimpleVoteServiceForClassImpl';
import { AdminUserServiceForClassImpl } from './AdminUserServiceForClassImpl';
import { AdminVoteDefinitionServiceForClassImpl } from './AdminVoteDefinitionServiceForClassImpl';
import { AdminVoteEntryServiceForClassImpl } from './AdminVoteEntryServiceForClassImpl';
import { AdminYesNoAbstainVoteDefinitionServiceForClassImpl } from './AdminYesNoAbstainVoteDefinitionServiceForClassImpl';
import { AdminYesNoVoteDefinitionServiceForClassImpl } from './AdminYesNoVoteDefinitionServiceForClassImpl';
import { AdminYesNoVoteEntryServiceForClassImpl } from './AdminYesNoVoteEntryServiceForClassImpl';

export const accessServiceImpl = new AccessServiceImpl(judoAxiosProvider);

export const adminAdminServiceForCategoriesImpl = new AdminAdminServiceForCategoriesImpl(judoAxiosProvider);
export const adminAdminServiceForCountiesImpl = new AdminAdminServiceForCountiesImpl(judoAxiosProvider);
export const adminAdminServiceForDashboardhomeImpl = new AdminAdminServiceForDashboardhomeImpl(judoAxiosProvider);
export const adminAdminServiceForDebatesImpl = new AdminAdminServiceForDebatesImpl(judoAxiosProvider);
export const adminAdminServiceForIssueTypesImpl = new AdminAdminServiceForIssueTypesImpl(judoAxiosProvider);
export const adminAdminServiceForIssuesImpl = new AdminAdminServiceForIssuesImpl(judoAxiosProvider);
export const adminAdminServiceForUsersImpl = new AdminAdminServiceForUsersImpl(judoAxiosProvider);
export const adminAdminServiceForVoteDefinitionsImpl = new AdminAdminServiceForVoteDefinitionsImpl(judoAxiosProvider);
export const adminAdminServiceForVoteEntriesImpl = new AdminAdminServiceForVoteEntriesImpl(judoAxiosProvider);
export const adminAdminServiceForYesNoVoteDefinitionsImpl = new AdminAdminServiceForYesNoVoteDefinitionsImpl(
  judoAxiosProvider,
);

export const cityServiceForDistrictsImpl = new CityServiceForDistrictsImpl(judoAxiosProvider);
export const commentServiceForCreatedByImpl = new CommentServiceForCreatedByImpl(judoAxiosProvider);
export const commentServiceForVotesImpl = new CommentServiceForVotesImpl(judoAxiosProvider);
export const conServiceForCommentsImpl = new ConServiceForCommentsImpl(judoAxiosProvider);
export const conServiceForConsImpl = new ConServiceForConsImpl(judoAxiosProvider);
export const conServiceForCreatedByImpl = new ConServiceForCreatedByImpl(judoAxiosProvider);
export const conServiceForProsImpl = new ConServiceForProsImpl(judoAxiosProvider);
export const conServiceForVotesImpl = new ConServiceForVotesImpl(judoAxiosProvider);
export const countyServiceForCitiesImpl = new CountyServiceForCitiesImpl(judoAxiosProvider);
export const debateServiceForCommentsImpl = new DebateServiceForCommentsImpl(judoAxiosProvider);
export const debateServiceForConsImpl = new DebateServiceForConsImpl(judoAxiosProvider);
export const debateServiceForCreatedByImpl = new DebateServiceForCreatedByImpl(judoAxiosProvider);
export const debateServiceForDebateVoteImpl = new DebateServiceForDebateVoteImpl(judoAxiosProvider);
export const debateServiceForIssueImpl = new DebateServiceForIssueImpl(judoAxiosProvider);
export const debateServiceForProsImpl = new DebateServiceForProsImpl(judoAxiosProvider);
export const issueServiceForAttachmentsImpl = new IssueServiceForAttachmentsImpl(judoAxiosProvider);
export const issueServiceForCategoriesImpl = new IssueServiceForCategoriesImpl(judoAxiosProvider);
export const issueServiceForCityImpl = new IssueServiceForCityImpl(judoAxiosProvider);
export const issueServiceForCommentsImpl = new IssueServiceForCommentsImpl(judoAxiosProvider);
export const issueServiceForCountyImpl = new IssueServiceForCountyImpl(judoAxiosProvider);
export const issueServiceForCreatedByImpl = new IssueServiceForCreatedByImpl(judoAxiosProvider);
export const issueServiceForDebatesImpl = new IssueServiceForDebatesImpl(judoAxiosProvider);
export const issueServiceForDistrictImpl = new IssueServiceForDistrictImpl(judoAxiosProvider);
export const issueServiceForIssueTypeImpl = new IssueServiceForIssueTypeImpl(judoAxiosProvider);
export const issueServiceForOwnerImpl = new IssueServiceForOwnerImpl(judoAxiosProvider);
export const issueCategoryServiceForOwnerImpl = new IssueCategoryServiceForOwnerImpl(judoAxiosProvider);
export const issueCategoryServiceForSubcategoriesImpl = new IssueCategoryServiceForSubcategoriesImpl(judoAxiosProvider);
export const proServiceForCommentsImpl = new ProServiceForCommentsImpl(judoAxiosProvider);
export const proServiceForConsImpl = new ProServiceForConsImpl(judoAxiosProvider);
export const proServiceForCreatedByImpl = new ProServiceForCreatedByImpl(judoAxiosProvider);
export const proServiceForProsImpl = new ProServiceForProsImpl(judoAxiosProvider);
export const proServiceForVotesImpl = new ProServiceForVotesImpl(judoAxiosProvider);
export const simpleVoteServiceForUserImpl = new SimpleVoteServiceForUserImpl(judoAxiosProvider);
export const userServiceForActivityCitiesImpl = new UserServiceForActivityCitiesImpl(judoAxiosProvider);
export const userServiceForActivityCountiesImpl = new UserServiceForActivityCountiesImpl(judoAxiosProvider);
export const userServiceForActivityDistrictsImpl = new UserServiceForActivityDistrictsImpl(judoAxiosProvider);
export const userServiceForResidentCityImpl = new UserServiceForResidentCityImpl(judoAxiosProvider);
export const userServiceForResidentCountyImpl = new UserServiceForResidentCountyImpl(judoAxiosProvider);
export const userServiceForResidentDistrictImpl = new UserServiceForResidentDistrictImpl(judoAxiosProvider);
export const userServiceForVotesImpl = new UserServiceForVotesImpl(judoAxiosProvider);
export const voteDefinitionServiceForDebateImpl = new VoteDefinitionServiceForDebateImpl(judoAxiosProvider);
export const voteDefinitionServiceForIssueImpl = new VoteDefinitionServiceForIssueImpl(judoAxiosProvider);
export const voteDefinitionServiceForUserVoteEntryImpl = new VoteDefinitionServiceForUserVoteEntryImpl(
  judoAxiosProvider,
);
export const voteDefinitionServiceForVoteEntriesImpl = new VoteDefinitionServiceForVoteEntriesImpl(judoAxiosProvider);
export const voteEntryServiceForUserImpl = new VoteEntryServiceForUserImpl(judoAxiosProvider);
export const voteEntryServiceForVoteDefinitionImpl = new VoteEntryServiceForVoteDefinitionImpl(judoAxiosProvider);
export const adminCityServiceForDistrictsImpl = new AdminCityServiceForDistrictsImpl(judoAxiosProvider);
export const adminCommentServiceForCreatedByImpl = new AdminCommentServiceForCreatedByImpl(judoAxiosProvider);
export const adminCommentServiceForVotesImpl = new AdminCommentServiceForVotesImpl(judoAxiosProvider);
export const adminConServiceForCommentsImpl = new AdminConServiceForCommentsImpl(judoAxiosProvider);
export const adminConServiceForConsImpl = new AdminConServiceForConsImpl(judoAxiosProvider);
export const adminConServiceForCreatedByImpl = new AdminConServiceForCreatedByImpl(judoAxiosProvider);
export const adminConServiceForParentConImpl = new AdminConServiceForParentConImpl(judoAxiosProvider);
export const adminConServiceForParentDebateImpl = new AdminConServiceForParentDebateImpl(judoAxiosProvider);
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
export const adminDashboardServiceForDebatesImpl = new AdminDashboardServiceForDebatesImpl(judoAxiosProvider);
export const adminDashboardServiceForIssuesImpl = new AdminDashboardServiceForIssuesImpl(judoAxiosProvider);
export const adminDashboardServiceForVoteEntriesImpl = new AdminDashboardServiceForVoteEntriesImpl(judoAxiosProvider);
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
export const adminProServiceForParentDebateImpl = new AdminProServiceForParentDebateImpl(judoAxiosProvider);
export const adminProServiceForParentProImpl = new AdminProServiceForParentProImpl(judoAxiosProvider);
export const adminProServiceForProsImpl = new AdminProServiceForProsImpl(judoAxiosProvider);
export const adminProServiceForVotesImpl = new AdminProServiceForVotesImpl(judoAxiosProvider);
export const adminRatingVoteDefinitionServiceForDebateImpl = new AdminRatingVoteDefinitionServiceForDebateImpl(
  judoAxiosProvider,
);
export const adminRatingVoteDefinitionServiceForIssueImpl = new AdminRatingVoteDefinitionServiceForIssueImpl(
  judoAxiosProvider,
);
export const adminRatingVoteDefinitionServiceForVoteEntriesImpl =
  new AdminRatingVoteDefinitionServiceForVoteEntriesImpl(judoAxiosProvider);
export const adminSelectAnswerVoteDefinitionServiceForDebateImpl =
  new AdminSelectAnswerVoteDefinitionServiceForDebateImpl(judoAxiosProvider);
export const adminSelectAnswerVoteDefinitionServiceForIssueImpl =
  new AdminSelectAnswerVoteDefinitionServiceForIssueImpl(judoAxiosProvider);
export const adminSimpleVoteServiceForUserImpl = new AdminSimpleVoteServiceForUserImpl(judoAxiosProvider);
export const adminUserServiceForActivityCitiesImpl = new AdminUserServiceForActivityCitiesImpl(judoAxiosProvider);
export const adminUserServiceForActivityCountiesImpl = new AdminUserServiceForActivityCountiesImpl(judoAxiosProvider);
export const adminUserServiceForActivityDistrictsImpl = new AdminUserServiceForActivityDistrictsImpl(judoAxiosProvider);
export const adminUserServiceForResidentCityImpl = new AdminUserServiceForResidentCityImpl(judoAxiosProvider);
export const adminUserServiceForResidentCountyImpl = new AdminUserServiceForResidentCountyImpl(judoAxiosProvider);
export const adminUserServiceForResidentDistrictImpl = new AdminUserServiceForResidentDistrictImpl(judoAxiosProvider);
export const adminUserServiceForVotesImpl = new AdminUserServiceForVotesImpl(judoAxiosProvider);
export const adminVoteDefinitionServiceForDebateImpl = new AdminVoteDefinitionServiceForDebateImpl(judoAxiosProvider);
export const adminVoteDefinitionServiceForIssueImpl = new AdminVoteDefinitionServiceForIssueImpl(judoAxiosProvider);
export const adminVoteEntryServiceForVoteDefinitionImpl = new AdminVoteEntryServiceForVoteDefinitionImpl(
  judoAxiosProvider,
);
export const adminYesNoAbstainVoteDefinitionServiceForDebateImpl =
  new AdminYesNoAbstainVoteDefinitionServiceForDebateImpl(judoAxiosProvider);
export const adminYesNoAbstainVoteDefinitionServiceForIssueImpl =
  new AdminYesNoAbstainVoteDefinitionServiceForIssueImpl(judoAxiosProvider);
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
export const adminYesNoVoteEntryServiceForUserImpl = new AdminYesNoVoteEntryServiceForUserImpl(judoAxiosProvider);

export const cityServiceForClassImpl = new CityServiceForClassImpl(judoAxiosProvider);
export const closeDebateInputServiceForClassImpl = new CloseDebateInputServiceForClassImpl(judoAxiosProvider);
export const commentServiceForClassImpl = new CommentServiceForClassImpl(judoAxiosProvider);
export const conServiceForClassImpl = new ConServiceForClassImpl(judoAxiosProvider);
export const countyServiceForClassImpl = new CountyServiceForClassImpl(judoAxiosProvider);
export const createArgumentInputServiceForClassImpl = new CreateArgumentInputServiceForClassImpl(judoAxiosProvider);
export const createCommentInputServiceForClassImpl = new CreateCommentInputServiceForClassImpl(judoAxiosProvider);
export const createDebateInputServiceForClassImpl = new CreateDebateInputServiceForClassImpl(judoAxiosProvider);
export const debateServiceForClassImpl = new DebateServiceForClassImpl(judoAxiosProvider);
export const districtServiceForClassImpl = new DistrictServiceForClassImpl(judoAxiosProvider);
export const issueServiceForClassImpl = new IssueServiceForClassImpl(judoAxiosProvider);
export const issueAttachmentServiceForClassImpl = new IssueAttachmentServiceForClassImpl(judoAxiosProvider);
export const issueCategoryServiceForClassImpl = new IssueCategoryServiceForClassImpl(judoAxiosProvider);
export const issueTypeServiceForClassImpl = new IssueTypeServiceForClassImpl(judoAxiosProvider);
export const proServiceForClassImpl = new ProServiceForClassImpl(judoAxiosProvider);
export const ratingVoteInputServiceForClassImpl = new RatingVoteInputServiceForClassImpl(judoAxiosProvider);
export const selectAnswerVoteSelectionServiceForClassImpl = new SelectAnswerVoteSelectionServiceForClassImpl(
  judoAxiosProvider,
);
export const simpleVoteServiceForClassImpl = new SimpleVoteServiceForClassImpl(judoAxiosProvider);
export const userServiceForClassImpl = new UserServiceForClassImpl(judoAxiosProvider);
export const voteDefinitionServiceForClassImpl = new VoteDefinitionServiceForClassImpl(judoAxiosProvider);
export const voteEntryServiceForClassImpl = new VoteEntryServiceForClassImpl(judoAxiosProvider);
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
export const adminDebateParentServiceForClassImpl = new AdminDebateParentServiceForClassImpl(judoAxiosProvider);
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
export const adminSelectAnswerVoteDefinitionServiceForClassImpl =
  new AdminSelectAnswerVoteDefinitionServiceForClassImpl(judoAxiosProvider);
export const adminSimpleVoteServiceForClassImpl = new AdminSimpleVoteServiceForClassImpl(judoAxiosProvider);
export const adminUserServiceForClassImpl = new AdminUserServiceForClassImpl(judoAxiosProvider);
export const adminVoteDefinitionServiceForClassImpl = new AdminVoteDefinitionServiceForClassImpl(judoAxiosProvider);
export const adminVoteEntryServiceForClassImpl = new AdminVoteEntryServiceForClassImpl(judoAxiosProvider);
export const adminYesNoAbstainVoteDefinitionServiceForClassImpl =
  new AdminYesNoAbstainVoteDefinitionServiceForClassImpl(judoAxiosProvider);
export const adminYesNoVoteDefinitionServiceForClassImpl = new AdminYesNoVoteDefinitionServiceForClassImpl(
  judoAxiosProvider,
);
export const adminYesNoVoteEntryServiceForClassImpl = new AdminYesNoVoteEntryServiceForClassImpl(judoAxiosProvider);
