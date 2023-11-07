//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'data-axios/'+'ImplementationInstancesExporter.ts'
// Template name: implementationInstancesExporter.ts.hbs
// Template file: data-axios/implementationInstancesExporter.ts.hbs

import { judoAxiosProvider } from './JudoAxiosProvider';
import { AccessServiceImpl } from './AccessServiceImpl';

import type { CloseDebateInputService } from '../data-service';
import type { CloseDebateOutputVoteDefinitionReferenceService } from '../data-service';
import type { CommentService } from '../data-service';
import type { ConService } from '../data-service';
import type { CreateArgumentInputService } from '../data-service';
import type { CreateCommentInputService } from '../data-service';
import type { InitializerService } from '../data-service';
import type { IssueService } from '../data-service';
import type { ProService } from '../data-service';
import type { RatingVoteInputService } from '../data-service';
import type { SelectAnswerVoteSelectionService } from '../data-service';
import type { VoteDefinitionService } from '../data-service';
import type { YesNoAbstainVoteInputService } from '../data-service';
import type { YesNoVoteInputService } from '../data-service';
import type { ServiceCityService } from '../data-service';
import type { ServiceCommentService } from '../data-service';
import type { ServiceConService } from '../data-service';
import type { ServiceConParentService } from '../data-service';
import type { ServiceCountyService } from '../data-service';
import type { ServiceCreateIssueInputService } from '../data-service';
import type { ServiceCreateUserInputService } from '../data-service';
import type { ServiceDashboardService } from '../data-service';
import type { ServiceDistrictService } from '../data-service';
import type { ServiceIssueService } from '../data-service';
import type { ServiceIssueAttachmentService } from '../data-service';
import type { ServiceIssueCategoryService } from '../data-service';
import type { ServiceIssueTypeService } from '../data-service';
import type { ServiceProService } from '../data-service';
import type { ServiceProParentService } from '../data-service';
import type { ServiceRatingVoteDefinitionService } from '../data-service';
import type { ServiceRatingVoteEntryService } from '../data-service';
import type { ServiceSelectAnswerVoteDefinitionService } from '../data-service';
import type { ServiceSelectAnswerVoteEntryService } from '../data-service';
import type { ServiceSelectAnswerVoteSelectionService } from '../data-service';
import type { ServiceServicePrincipalUserService } from '../data-service';
import type { ServiceServiceUserService } from '../data-service';
import type { ServiceSimpleVoteService } from '../data-service';
import type { ServiceUserIssuesService } from '../data-service';
import type { ServiceUserManagerService } from '../data-service';
import type { ServiceUserProfileService } from '../data-service';
import type { ServiceUserVoteDefinitionService } from '../data-service';
import type { ServiceVoteDefinitionService } from '../data-service';
import type { ServiceVoteEntryService } from '../data-service';
import type { ServiceYesNoAbstainVoteDefinitionService } from '../data-service';
import type { ServiceYesNoAbstainVoteEntryService } from '../data-service';
import type { ServiceYesNoVoteDefinitionService } from '../data-service';
import type { ServiceYesNoVoteEntryService } from '../data-service';

import type { UserServiceForActiveIssues } from '../data-service';
import type { UserServiceForAdminCategories } from '../data-service';
import type { UserServiceForAdminCounties } from '../data-service';
import type { UserServiceForAdminIssueTypes } from '../data-service';
import type { UserServiceForAdminIssues } from '../data-service';
import type { UserServiceForAdminUserManager } from '../data-service';
import type { UserServiceForAdminUsers } from '../data-service';
import type { UserServiceForAdminVoteDefinitions } from '../data-service';
import type { UserServiceForAdminVoteEntries } from '../data-service';
import type { UserServiceForDashboardHome } from '../data-service';
import type { UserServiceForUserCreatedIssues } from '../data-service';
import type { UserServiceForUserIssues } from '../data-service';
import type { UserServiceForUserOwnedActiveIssues } from '../data-service';
import type { UserServiceForUserOwnedRatingVoteDefinitions } from '../data-service';
import type { UserServiceForUserOwnedSelectAnswerVoteDefinitions } from '../data-service';
import type { UserServiceForUserOwnedVoteEntries } from '../data-service';
import type { UserServiceForUserOwnedYesNoAbstainVoteDefinitions } from '../data-service';
import type { UserServiceForUserOwnedYesNoVoteDefinitions } from '../data-service';
import type { UserServiceForUserProfile } from '../data-service';
import type { UserServiceForUserVoteDefinitions } from '../data-service';
import type { ServiceCityServiceForDistricts } from '../data-service';
import type { ServiceCommentServiceForCreatedBy } from '../data-service';
import type { ServiceCommentServiceForVotes } from '../data-service';
import type { ServiceConServiceForCons } from '../data-service';
import type { ServiceConServiceForCreatedBy } from '../data-service';
import type { ServiceConServiceForParentCon } from '../data-service';
import type { ServiceConServiceForParentPro } from '../data-service';
import type { ServiceConServiceForPros } from '../data-service';
import type { ServiceConServiceForVotes } from '../data-service';
import type { ServiceCountyServiceForCities } from '../data-service';
import type { ServiceCreateIssueInputServiceForCity } from '../data-service';
import type { ServiceCreateIssueInputServiceForCounty } from '../data-service';
import type { ServiceCreateIssueInputServiceForDistrict } from '../data-service';
import type { ServiceCreateIssueInputServiceForIssueType } from '../data-service';
import type { ServiceDashboardServiceForFavoriteIssues } from '../data-service';
import type { ServiceDashboardServiceForFavoriteVoteDefinitions } from '../data-service';
import type { ServiceDashboardServiceForIssuesOwned } from '../data-service';
import type { ServiceDashboardServiceForOwnedVoteDefinitions } from '../data-service';
import type { ServiceDashboardServiceForUserVoteEntries } from '../data-service';
import type { ServiceIssueServiceForAttachments } from '../data-service';
import type { ServiceIssueServiceForCategories } from '../data-service';
import type { ServiceIssueServiceForCity } from '../data-service';
import type { ServiceIssueServiceForComments } from '../data-service';
import type { ServiceIssueServiceForCons } from '../data-service';
import type { ServiceIssueServiceForCounty } from '../data-service';
import type { ServiceIssueServiceForCreatedBy } from '../data-service';
import type { ServiceIssueServiceForDistrict } from '../data-service';
import type { ServiceIssueServiceForIssueType } from '../data-service';
import type { ServiceIssueServiceForOwner } from '../data-service';
import type { ServiceIssueServiceForPros } from '../data-service';
import type { ServiceIssueCategoryServiceForOwner } from '../data-service';
import type { ServiceIssueCategoryServiceForSubcategories } from '../data-service';
import type { ServiceProServiceForCons } from '../data-service';
import type { ServiceProServiceForCreatedBy } from '../data-service';
import type { ServiceProServiceForParentCon } from '../data-service';
import type { ServiceProServiceForParentPro } from '../data-service';
import type { ServiceProServiceForPros } from '../data-service';
import type { ServiceProServiceForVotes } from '../data-service';
import type { ServiceRatingVoteDefinitionServiceForIssue } from '../data-service';
import type { ServiceRatingVoteDefinitionServiceForUserVoteEntry } from '../data-service';
import type { ServiceRatingVoteDefinitionServiceForVoteEntries } from '../data-service';
import type { ServiceRatingVoteEntryServiceForOwner } from '../data-service';
import type { ServiceSelectAnswerVoteDefinitionServiceForIssue } from '../data-service';
import type { ServiceSelectAnswerVoteDefinitionServiceForUserVoteEntry } from '../data-service';
import type { ServiceSelectAnswerVoteDefinitionServiceForVoteEntries } from '../data-service';
import type { ServiceSelectAnswerVoteDefinitionServiceForVoteSelections } from '../data-service';
import type { ServiceSelectAnswerVoteEntryServiceForOwner } from '../data-service';
import type { ServiceSelectAnswerVoteEntryServiceForValue } from '../data-service';
import type { ServiceServiceUserServiceForActivityCities } from '../data-service';
import type { ServiceServiceUserServiceForActivityCounties } from '../data-service';
import type { ServiceServiceUserServiceForActivityDistricts } from '../data-service';
import type { ServiceServiceUserServiceForResidentCity } from '../data-service';
import type { ServiceServiceUserServiceForResidentCounty } from '../data-service';
import type { ServiceServiceUserServiceForResidentDistrict } from '../data-service';
import type { ServiceServiceUserServiceForVotes } from '../data-service';
import type { ServiceSimpleVoteServiceForUser } from '../data-service';
import type { ServiceUserIssuesServiceForActiveIssuesGlobal } from '../data-service';
import type { ServiceUserIssuesServiceForActiveIssuesInActivityCities } from '../data-service';
import type { ServiceUserIssuesServiceForActiveIssuesInActivityCounties } from '../data-service';
import type { ServiceUserIssuesServiceForActiveIssuesInActivityDistricts } from '../data-service';
import type { ServiceUserIssuesServiceForActiveIssuesInResidentCity } from '../data-service';
import type { ServiceUserIssuesServiceForActiveIssuesInResidentCounty } from '../data-service';
import type { ServiceUserIssuesServiceForActiveIssuesInResidentDistrict } from '../data-service';
import type { ServiceUserIssuesServiceForOwnedIssues } from '../data-service';
import type { ServiceUserManagerServiceForUsers } from '../data-service';
import type { ServiceUserProfileServiceForActivityCities } from '../data-service';
import type { ServiceUserProfileServiceForActivityCounties } from '../data-service';
import type { ServiceUserProfileServiceForActivityDistricts } from '../data-service';
import type { ServiceUserProfileServiceForResidentCity } from '../data-service';
import type { ServiceUserProfileServiceForResidentCounty } from '../data-service';
import type { ServiceUserProfileServiceForResidentDistrict } from '../data-service';
import type { ServiceUserVoteDefinitionServiceForActiveVoteDefinitionsGlobal } from '../data-service';
import type { ServiceUserVoteDefinitionServiceForActiveVoteDefinitionsInActivityCities } from '../data-service';
import type { ServiceUserVoteDefinitionServiceForActiveVoteDefinitionsInActivityCounties } from '../data-service';
import type { ServiceUserVoteDefinitionServiceForActiveVoteDefinitionsInActivityDistricts } from '../data-service';
import type { ServiceUserVoteDefinitionServiceForActiveVoteDefinitionsInResidentCity } from '../data-service';
import type { ServiceUserVoteDefinitionServiceForActiveVoteDefinitionsInResidentCounty } from '../data-service';
import type { ServiceUserVoteDefinitionServiceForActiveVoteDefinitionsInResidentDistrict } from '../data-service';
import type { ServiceUserVoteDefinitionServiceForOwnedVoteDefinitions } from '../data-service';
import type { ServiceVoteDefinitionServiceForIssue } from '../data-service';
import type { ServiceVoteEntryServiceForVoteDefinition } from '../data-service';
import type { ServiceYesNoAbstainVoteDefinitionServiceForIssue } from '../data-service';
import type { ServiceYesNoAbstainVoteDefinitionServiceForUserVoteEntry } from '../data-service';
import type { ServiceYesNoAbstainVoteDefinitionServiceForVoteEntries } from '../data-service';
import type { ServiceYesNoAbstainVoteEntryServiceForOwner } from '../data-service';
import type { ServiceYesNoVoteDefinitionServiceForIssue } from '../data-service';
import type { ServiceYesNoVoteDefinitionServiceForUserVoteEntry } from '../data-service';
import type { ServiceYesNoVoteDefinitionServiceForVoteEntries } from '../data-service';
import type { ServiceYesNoVoteEntryServiceForOwner } from '../data-service';

import { CloseDebateInputServiceImpl } from './CloseDebateInputServiceImpl';
import { CloseDebateOutputVoteDefinitionReferenceServiceImpl } from './CloseDebateOutputVoteDefinitionReferenceServiceImpl';
import { CommentServiceImpl } from './CommentServiceImpl';
import { ConServiceImpl } from './ConServiceImpl';
import { CreateArgumentInputServiceImpl } from './CreateArgumentInputServiceImpl';
import { CreateCommentInputServiceImpl } from './CreateCommentInputServiceImpl';
import { InitializerServiceImpl } from './InitializerServiceImpl';
import { IssueServiceImpl } from './IssueServiceImpl';
import { ProServiceImpl } from './ProServiceImpl';
import { RatingVoteInputServiceImpl } from './RatingVoteInputServiceImpl';
import { SelectAnswerVoteSelectionServiceImpl } from './SelectAnswerVoteSelectionServiceImpl';
import { VoteDefinitionServiceImpl } from './VoteDefinitionServiceImpl';
import { YesNoAbstainVoteInputServiceImpl } from './YesNoAbstainVoteInputServiceImpl';
import { YesNoVoteInputServiceImpl } from './YesNoVoteInputServiceImpl';
import { ServiceCityServiceImpl } from './ServiceCityServiceImpl';
import { ServiceCommentServiceImpl } from './ServiceCommentServiceImpl';
import { ServiceConServiceImpl } from './ServiceConServiceImpl';
import { ServiceConParentServiceImpl } from './ServiceConParentServiceImpl';
import { ServiceCountyServiceImpl } from './ServiceCountyServiceImpl';
import { ServiceCreateIssueInputServiceImpl } from './ServiceCreateIssueInputServiceImpl';
import { ServiceCreateUserInputServiceImpl } from './ServiceCreateUserInputServiceImpl';
import { ServiceDashboardServiceImpl } from './ServiceDashboardServiceImpl';
import { ServiceDistrictServiceImpl } from './ServiceDistrictServiceImpl';
import { ServiceIssueServiceImpl } from './ServiceIssueServiceImpl';
import { ServiceIssueAttachmentServiceImpl } from './ServiceIssueAttachmentServiceImpl';
import { ServiceIssueCategoryServiceImpl } from './ServiceIssueCategoryServiceImpl';
import { ServiceIssueTypeServiceImpl } from './ServiceIssueTypeServiceImpl';
import { ServiceProServiceImpl } from './ServiceProServiceImpl';
import { ServiceProParentServiceImpl } from './ServiceProParentServiceImpl';
import { ServiceRatingVoteDefinitionServiceImpl } from './ServiceRatingVoteDefinitionServiceImpl';
import { ServiceRatingVoteEntryServiceImpl } from './ServiceRatingVoteEntryServiceImpl';
import { ServiceSelectAnswerVoteDefinitionServiceImpl } from './ServiceSelectAnswerVoteDefinitionServiceImpl';
import { ServiceSelectAnswerVoteEntryServiceImpl } from './ServiceSelectAnswerVoteEntryServiceImpl';
import { ServiceSelectAnswerVoteSelectionServiceImpl } from './ServiceSelectAnswerVoteSelectionServiceImpl';
import { ServiceServicePrincipalUserServiceImpl } from './ServiceServicePrincipalUserServiceImpl';
import { ServiceServiceUserServiceImpl } from './ServiceServiceUserServiceImpl';
import { ServiceSimpleVoteServiceImpl } from './ServiceSimpleVoteServiceImpl';
import { ServiceUserIssuesServiceImpl } from './ServiceUserIssuesServiceImpl';
import { ServiceUserManagerServiceImpl } from './ServiceUserManagerServiceImpl';
import { ServiceUserProfileServiceImpl } from './ServiceUserProfileServiceImpl';
import { ServiceUserVoteDefinitionServiceImpl } from './ServiceUserVoteDefinitionServiceImpl';
import { ServiceVoteDefinitionServiceImpl } from './ServiceVoteDefinitionServiceImpl';
import { ServiceVoteEntryServiceImpl } from './ServiceVoteEntryServiceImpl';
import { ServiceYesNoAbstainVoteDefinitionServiceImpl } from './ServiceYesNoAbstainVoteDefinitionServiceImpl';
import { ServiceYesNoAbstainVoteEntryServiceImpl } from './ServiceYesNoAbstainVoteEntryServiceImpl';
import { ServiceYesNoVoteDefinitionServiceImpl } from './ServiceYesNoVoteDefinitionServiceImpl';
import { ServiceYesNoVoteEntryServiceImpl } from './ServiceYesNoVoteEntryServiceImpl';

import { UserServiceForActiveIssuesImpl } from './UserServiceForActiveIssuesImpl';
import { UserServiceForAdminCategoriesImpl } from './UserServiceForAdminCategoriesImpl';
import { UserServiceForAdminCountiesImpl } from './UserServiceForAdminCountiesImpl';
import { UserServiceForAdminIssueTypesImpl } from './UserServiceForAdminIssueTypesImpl';
import { UserServiceForAdminIssuesImpl } from './UserServiceForAdminIssuesImpl';
import { UserServiceForAdminUserManagerImpl } from './UserServiceForAdminUserManagerImpl';
import { UserServiceForAdminUsersImpl } from './UserServiceForAdminUsersImpl';
import { UserServiceForAdminVoteDefinitionsImpl } from './UserServiceForAdminVoteDefinitionsImpl';
import { UserServiceForAdminVoteEntriesImpl } from './UserServiceForAdminVoteEntriesImpl';
import { UserServiceForDashboardHomeImpl } from './UserServiceForDashboardHomeImpl';
import { UserServiceForUserCreatedIssuesImpl } from './UserServiceForUserCreatedIssuesImpl';
import { UserServiceForUserIssuesImpl } from './UserServiceForUserIssuesImpl';
import { UserServiceForUserOwnedActiveIssuesImpl } from './UserServiceForUserOwnedActiveIssuesImpl';
import { UserServiceForUserOwnedRatingVoteDefinitionsImpl } from './UserServiceForUserOwnedRatingVoteDefinitionsImpl';
import { UserServiceForUserOwnedSelectAnswerVoteDefinitionsImpl } from './UserServiceForUserOwnedSelectAnswerVoteDefinitionsImpl';
import { UserServiceForUserOwnedVoteEntriesImpl } from './UserServiceForUserOwnedVoteEntriesImpl';
import { UserServiceForUserOwnedYesNoAbstainVoteDefinitionsImpl } from './UserServiceForUserOwnedYesNoAbstainVoteDefinitionsImpl';
import { UserServiceForUserOwnedYesNoVoteDefinitionsImpl } from './UserServiceForUserOwnedYesNoVoteDefinitionsImpl';
import { UserServiceForUserProfileImpl } from './UserServiceForUserProfileImpl';
import { UserServiceForUserVoteDefinitionsImpl } from './UserServiceForUserVoteDefinitionsImpl';
import { ServiceCityServiceForDistrictsImpl } from './ServiceCityServiceForDistrictsImpl';
import { ServiceCommentServiceForCreatedByImpl } from './ServiceCommentServiceForCreatedByImpl';
import { ServiceCommentServiceForVotesImpl } from './ServiceCommentServiceForVotesImpl';
import { ServiceConServiceForConsImpl } from './ServiceConServiceForConsImpl';
import { ServiceConServiceForCreatedByImpl } from './ServiceConServiceForCreatedByImpl';
import { ServiceConServiceForParentConImpl } from './ServiceConServiceForParentConImpl';
import { ServiceConServiceForParentProImpl } from './ServiceConServiceForParentProImpl';
import { ServiceConServiceForProsImpl } from './ServiceConServiceForProsImpl';
import { ServiceConServiceForVotesImpl } from './ServiceConServiceForVotesImpl';
import { ServiceCountyServiceForCitiesImpl } from './ServiceCountyServiceForCitiesImpl';
import { ServiceCreateIssueInputServiceForCityImpl } from './ServiceCreateIssueInputServiceForCityImpl';
import { ServiceCreateIssueInputServiceForCountyImpl } from './ServiceCreateIssueInputServiceForCountyImpl';
import { ServiceCreateIssueInputServiceForDistrictImpl } from './ServiceCreateIssueInputServiceForDistrictImpl';
import { ServiceCreateIssueInputServiceForIssueTypeImpl } from './ServiceCreateIssueInputServiceForIssueTypeImpl';
import { ServiceDashboardServiceForFavoriteIssuesImpl } from './ServiceDashboardServiceForFavoriteIssuesImpl';
import { ServiceDashboardServiceForFavoriteVoteDefinitionsImpl } from './ServiceDashboardServiceForFavoriteVoteDefinitionsImpl';
import { ServiceDashboardServiceForIssuesOwnedImpl } from './ServiceDashboardServiceForIssuesOwnedImpl';
import { ServiceDashboardServiceForOwnedVoteDefinitionsImpl } from './ServiceDashboardServiceForOwnedVoteDefinitionsImpl';
import { ServiceDashboardServiceForUserVoteEntriesImpl } from './ServiceDashboardServiceForUserVoteEntriesImpl';
import { ServiceIssueServiceForAttachmentsImpl } from './ServiceIssueServiceForAttachmentsImpl';
import { ServiceIssueServiceForCategoriesImpl } from './ServiceIssueServiceForCategoriesImpl';
import { ServiceIssueServiceForCityImpl } from './ServiceIssueServiceForCityImpl';
import { ServiceIssueServiceForCommentsImpl } from './ServiceIssueServiceForCommentsImpl';
import { ServiceIssueServiceForConsImpl } from './ServiceIssueServiceForConsImpl';
import { ServiceIssueServiceForCountyImpl } from './ServiceIssueServiceForCountyImpl';
import { ServiceIssueServiceForCreatedByImpl } from './ServiceIssueServiceForCreatedByImpl';
import { ServiceIssueServiceForDistrictImpl } from './ServiceIssueServiceForDistrictImpl';
import { ServiceIssueServiceForIssueTypeImpl } from './ServiceIssueServiceForIssueTypeImpl';
import { ServiceIssueServiceForOwnerImpl } from './ServiceIssueServiceForOwnerImpl';
import { ServiceIssueServiceForProsImpl } from './ServiceIssueServiceForProsImpl';
import { ServiceIssueCategoryServiceForOwnerImpl } from './ServiceIssueCategoryServiceForOwnerImpl';
import { ServiceIssueCategoryServiceForSubcategoriesImpl } from './ServiceIssueCategoryServiceForSubcategoriesImpl';
import { ServiceProServiceForConsImpl } from './ServiceProServiceForConsImpl';
import { ServiceProServiceForCreatedByImpl } from './ServiceProServiceForCreatedByImpl';
import { ServiceProServiceForParentConImpl } from './ServiceProServiceForParentConImpl';
import { ServiceProServiceForParentProImpl } from './ServiceProServiceForParentProImpl';
import { ServiceProServiceForProsImpl } from './ServiceProServiceForProsImpl';
import { ServiceProServiceForVotesImpl } from './ServiceProServiceForVotesImpl';
import { ServiceRatingVoteDefinitionServiceForIssueImpl } from './ServiceRatingVoteDefinitionServiceForIssueImpl';
import { ServiceRatingVoteDefinitionServiceForUserVoteEntryImpl } from './ServiceRatingVoteDefinitionServiceForUserVoteEntryImpl';
import { ServiceRatingVoteDefinitionServiceForVoteEntriesImpl } from './ServiceRatingVoteDefinitionServiceForVoteEntriesImpl';
import { ServiceRatingVoteEntryServiceForOwnerImpl } from './ServiceRatingVoteEntryServiceForOwnerImpl';
import { ServiceSelectAnswerVoteDefinitionServiceForIssueImpl } from './ServiceSelectAnswerVoteDefinitionServiceForIssueImpl';
import { ServiceSelectAnswerVoteDefinitionServiceForUserVoteEntryImpl } from './ServiceSelectAnswerVoteDefinitionServiceForUserVoteEntryImpl';
import { ServiceSelectAnswerVoteDefinitionServiceForVoteEntriesImpl } from './ServiceSelectAnswerVoteDefinitionServiceForVoteEntriesImpl';
import { ServiceSelectAnswerVoteDefinitionServiceForVoteSelectionsImpl } from './ServiceSelectAnswerVoteDefinitionServiceForVoteSelectionsImpl';
import { ServiceSelectAnswerVoteEntryServiceForOwnerImpl } from './ServiceSelectAnswerVoteEntryServiceForOwnerImpl';
import { ServiceSelectAnswerVoteEntryServiceForValueImpl } from './ServiceSelectAnswerVoteEntryServiceForValueImpl';
import { ServiceServiceUserServiceForActivityCitiesImpl } from './ServiceServiceUserServiceForActivityCitiesImpl';
import { ServiceServiceUserServiceForActivityCountiesImpl } from './ServiceServiceUserServiceForActivityCountiesImpl';
import { ServiceServiceUserServiceForActivityDistrictsImpl } from './ServiceServiceUserServiceForActivityDistrictsImpl';
import { ServiceServiceUserServiceForResidentCityImpl } from './ServiceServiceUserServiceForResidentCityImpl';
import { ServiceServiceUserServiceForResidentCountyImpl } from './ServiceServiceUserServiceForResidentCountyImpl';
import { ServiceServiceUserServiceForResidentDistrictImpl } from './ServiceServiceUserServiceForResidentDistrictImpl';
import { ServiceServiceUserServiceForVotesImpl } from './ServiceServiceUserServiceForVotesImpl';
import { ServiceSimpleVoteServiceForUserImpl } from './ServiceSimpleVoteServiceForUserImpl';
import { ServiceUserIssuesServiceForActiveIssuesGlobalImpl } from './ServiceUserIssuesServiceForActiveIssuesGlobalImpl';
import { ServiceUserIssuesServiceForActiveIssuesInActivityCitiesImpl } from './ServiceUserIssuesServiceForActiveIssuesInActivityCitiesImpl';
import { ServiceUserIssuesServiceForActiveIssuesInActivityCountiesImpl } from './ServiceUserIssuesServiceForActiveIssuesInActivityCountiesImpl';
import { ServiceUserIssuesServiceForActiveIssuesInActivityDistrictsImpl } from './ServiceUserIssuesServiceForActiveIssuesInActivityDistrictsImpl';
import { ServiceUserIssuesServiceForActiveIssuesInResidentCityImpl } from './ServiceUserIssuesServiceForActiveIssuesInResidentCityImpl';
import { ServiceUserIssuesServiceForActiveIssuesInResidentCountyImpl } from './ServiceUserIssuesServiceForActiveIssuesInResidentCountyImpl';
import { ServiceUserIssuesServiceForActiveIssuesInResidentDistrictImpl } from './ServiceUserIssuesServiceForActiveIssuesInResidentDistrictImpl';
import { ServiceUserIssuesServiceForOwnedIssuesImpl } from './ServiceUserIssuesServiceForOwnedIssuesImpl';
import { ServiceUserManagerServiceForUsersImpl } from './ServiceUserManagerServiceForUsersImpl';
import { ServiceUserProfileServiceForActivityCitiesImpl } from './ServiceUserProfileServiceForActivityCitiesImpl';
import { ServiceUserProfileServiceForActivityCountiesImpl } from './ServiceUserProfileServiceForActivityCountiesImpl';
import { ServiceUserProfileServiceForActivityDistrictsImpl } from './ServiceUserProfileServiceForActivityDistrictsImpl';
import { ServiceUserProfileServiceForResidentCityImpl } from './ServiceUserProfileServiceForResidentCityImpl';
import { ServiceUserProfileServiceForResidentCountyImpl } from './ServiceUserProfileServiceForResidentCountyImpl';
import { ServiceUserProfileServiceForResidentDistrictImpl } from './ServiceUserProfileServiceForResidentDistrictImpl';
import { ServiceUserVoteDefinitionServiceForActiveVoteDefinitionsGlobalImpl } from './ServiceUserVoteDefinitionServiceForActiveVoteDefinitionsGlobalImpl';
import { ServiceUserVoteDefinitionServiceForActiveVoteDefinitionsInActivityCitiesImpl } from './ServiceUserVoteDefinitionServiceForActiveVoteDefinitionsInActivityCitiesImpl';
import { ServiceUserVoteDefinitionServiceForActiveVoteDefinitionsInActivityCountiesImpl } from './ServiceUserVoteDefinitionServiceForActiveVoteDefinitionsInActivityCountiesImpl';
import { ServiceUserVoteDefinitionServiceForActiveVoteDefinitionsInActivityDistrictsImpl } from './ServiceUserVoteDefinitionServiceForActiveVoteDefinitionsInActivityDistrictsImpl';
import { ServiceUserVoteDefinitionServiceForActiveVoteDefinitionsInResidentCityImpl } from './ServiceUserVoteDefinitionServiceForActiveVoteDefinitionsInResidentCityImpl';
import { ServiceUserVoteDefinitionServiceForActiveVoteDefinitionsInResidentCountyImpl } from './ServiceUserVoteDefinitionServiceForActiveVoteDefinitionsInResidentCountyImpl';
import { ServiceUserVoteDefinitionServiceForActiveVoteDefinitionsInResidentDistrictImpl } from './ServiceUserVoteDefinitionServiceForActiveVoteDefinitionsInResidentDistrictImpl';
import { ServiceUserVoteDefinitionServiceForOwnedVoteDefinitionsImpl } from './ServiceUserVoteDefinitionServiceForOwnedVoteDefinitionsImpl';
import { ServiceVoteDefinitionServiceForIssueImpl } from './ServiceVoteDefinitionServiceForIssueImpl';
import { ServiceVoteEntryServiceForVoteDefinitionImpl } from './ServiceVoteEntryServiceForVoteDefinitionImpl';
import { ServiceYesNoAbstainVoteDefinitionServiceForIssueImpl } from './ServiceYesNoAbstainVoteDefinitionServiceForIssueImpl';
import { ServiceYesNoAbstainVoteDefinitionServiceForUserVoteEntryImpl } from './ServiceYesNoAbstainVoteDefinitionServiceForUserVoteEntryImpl';
import { ServiceYesNoAbstainVoteDefinitionServiceForVoteEntriesImpl } from './ServiceYesNoAbstainVoteDefinitionServiceForVoteEntriesImpl';
import { ServiceYesNoAbstainVoteEntryServiceForOwnerImpl } from './ServiceYesNoAbstainVoteEntryServiceForOwnerImpl';
import { ServiceYesNoVoteDefinitionServiceForIssueImpl } from './ServiceYesNoVoteDefinitionServiceForIssueImpl';
import { ServiceYesNoVoteDefinitionServiceForUserVoteEntryImpl } from './ServiceYesNoVoteDefinitionServiceForUserVoteEntryImpl';
import { ServiceYesNoVoteDefinitionServiceForVoteEntriesImpl } from './ServiceYesNoVoteDefinitionServiceForVoteEntriesImpl';
import { ServiceYesNoVoteEntryServiceForOwnerImpl } from './ServiceYesNoVoteEntryServiceForOwnerImpl';

export const accessServiceImpl = new AccessServiceImpl(judoAxiosProvider);

export const closeDebateInputServiceImpl: CloseDebateInputService = new CloseDebateInputServiceImpl(judoAxiosProvider);
export const closeDebateOutputVoteDefinitionReferenceServiceImpl: CloseDebateOutputVoteDefinitionReferenceService =
  new CloseDebateOutputVoteDefinitionReferenceServiceImpl(judoAxiosProvider);
export const commentServiceImpl: CommentService = new CommentServiceImpl(judoAxiosProvider);
export const conServiceImpl: ConService = new ConServiceImpl(judoAxiosProvider);
export const createArgumentInputServiceImpl: CreateArgumentInputService = new CreateArgumentInputServiceImpl(
  judoAxiosProvider,
);
export const createCommentInputServiceImpl: CreateCommentInputService = new CreateCommentInputServiceImpl(
  judoAxiosProvider,
);
export const initializerServiceImpl: InitializerService = new InitializerServiceImpl(judoAxiosProvider);
export const issueServiceImpl: IssueService = new IssueServiceImpl(judoAxiosProvider);
export const proServiceImpl: ProService = new ProServiceImpl(judoAxiosProvider);
export const ratingVoteInputServiceImpl: RatingVoteInputService = new RatingVoteInputServiceImpl(judoAxiosProvider);
export const selectAnswerVoteSelectionServiceImpl: SelectAnswerVoteSelectionService =
  new SelectAnswerVoteSelectionServiceImpl(judoAxiosProvider);
export const voteDefinitionServiceImpl: VoteDefinitionService = new VoteDefinitionServiceImpl(judoAxiosProvider);
export const yesNoAbstainVoteInputServiceImpl: YesNoAbstainVoteInputService = new YesNoAbstainVoteInputServiceImpl(
  judoAxiosProvider,
);
export const yesNoVoteInputServiceImpl: YesNoVoteInputService = new YesNoVoteInputServiceImpl(judoAxiosProvider);
export const serviceCityServiceImpl: ServiceCityService = new ServiceCityServiceImpl(judoAxiosProvider);
export const serviceCommentServiceImpl: ServiceCommentService = new ServiceCommentServiceImpl(judoAxiosProvider);
export const serviceConServiceImpl: ServiceConService = new ServiceConServiceImpl(judoAxiosProvider);
export const serviceConParentServiceImpl: ServiceConParentService = new ServiceConParentServiceImpl(judoAxiosProvider);
export const serviceCountyServiceImpl: ServiceCountyService = new ServiceCountyServiceImpl(judoAxiosProvider);
export const serviceCreateIssueInputServiceImpl: ServiceCreateIssueInputService =
  new ServiceCreateIssueInputServiceImpl(judoAxiosProvider);
export const serviceCreateUserInputServiceImpl: ServiceCreateUserInputService = new ServiceCreateUserInputServiceImpl(
  judoAxiosProvider,
);
export const serviceDashboardServiceImpl: ServiceDashboardService = new ServiceDashboardServiceImpl(judoAxiosProvider);
export const serviceDistrictServiceImpl: ServiceDistrictService = new ServiceDistrictServiceImpl(judoAxiosProvider);
export const serviceIssueServiceImpl: ServiceIssueService = new ServiceIssueServiceImpl(judoAxiosProvider);
export const serviceIssueAttachmentServiceImpl: ServiceIssueAttachmentService = new ServiceIssueAttachmentServiceImpl(
  judoAxiosProvider,
);
export const serviceIssueCategoryServiceImpl: ServiceIssueCategoryService = new ServiceIssueCategoryServiceImpl(
  judoAxiosProvider,
);
export const serviceIssueTypeServiceImpl: ServiceIssueTypeService = new ServiceIssueTypeServiceImpl(judoAxiosProvider);
export const serviceProServiceImpl: ServiceProService = new ServiceProServiceImpl(judoAxiosProvider);
export const serviceProParentServiceImpl: ServiceProParentService = new ServiceProParentServiceImpl(judoAxiosProvider);
export const serviceRatingVoteDefinitionServiceImpl: ServiceRatingVoteDefinitionService =
  new ServiceRatingVoteDefinitionServiceImpl(judoAxiosProvider);
export const serviceRatingVoteEntryServiceImpl: ServiceRatingVoteEntryService = new ServiceRatingVoteEntryServiceImpl(
  judoAxiosProvider,
);
export const serviceSelectAnswerVoteDefinitionServiceImpl: ServiceSelectAnswerVoteDefinitionService =
  new ServiceSelectAnswerVoteDefinitionServiceImpl(judoAxiosProvider);
export const serviceSelectAnswerVoteEntryServiceImpl: ServiceSelectAnswerVoteEntryService =
  new ServiceSelectAnswerVoteEntryServiceImpl(judoAxiosProvider);
export const serviceSelectAnswerVoteSelectionServiceImpl: ServiceSelectAnswerVoteSelectionService =
  new ServiceSelectAnswerVoteSelectionServiceImpl(judoAxiosProvider);
export const serviceServicePrincipalUserServiceImpl: ServiceServicePrincipalUserService =
  new ServiceServicePrincipalUserServiceImpl(judoAxiosProvider);
export const serviceServiceUserServiceImpl: ServiceServiceUserService = new ServiceServiceUserServiceImpl(
  judoAxiosProvider,
);
export const serviceSimpleVoteServiceImpl: ServiceSimpleVoteService = new ServiceSimpleVoteServiceImpl(
  judoAxiosProvider,
);
export const serviceUserIssuesServiceImpl: ServiceUserIssuesService = new ServiceUserIssuesServiceImpl(
  judoAxiosProvider,
);
export const serviceUserManagerServiceImpl: ServiceUserManagerService = new ServiceUserManagerServiceImpl(
  judoAxiosProvider,
);
export const serviceUserProfileServiceImpl: ServiceUserProfileService = new ServiceUserProfileServiceImpl(
  judoAxiosProvider,
);
export const serviceUserVoteDefinitionServiceImpl: ServiceUserVoteDefinitionService =
  new ServiceUserVoteDefinitionServiceImpl(judoAxiosProvider);
export const serviceVoteDefinitionServiceImpl: ServiceVoteDefinitionService = new ServiceVoteDefinitionServiceImpl(
  judoAxiosProvider,
);
export const serviceVoteEntryServiceImpl: ServiceVoteEntryService = new ServiceVoteEntryServiceImpl(judoAxiosProvider);
export const serviceYesNoAbstainVoteDefinitionServiceImpl: ServiceYesNoAbstainVoteDefinitionService =
  new ServiceYesNoAbstainVoteDefinitionServiceImpl(judoAxiosProvider);
export const serviceYesNoAbstainVoteEntryServiceImpl: ServiceYesNoAbstainVoteEntryService =
  new ServiceYesNoAbstainVoteEntryServiceImpl(judoAxiosProvider);
export const serviceYesNoVoteDefinitionServiceImpl: ServiceYesNoVoteDefinitionService =
  new ServiceYesNoVoteDefinitionServiceImpl(judoAxiosProvider);
export const serviceYesNoVoteEntryServiceImpl: ServiceYesNoVoteEntryService = new ServiceYesNoVoteEntryServiceImpl(
  judoAxiosProvider,
);

export const userServiceForActiveIssuesImpl: UserServiceForActiveIssues = new UserServiceForActiveIssuesImpl(
  judoAxiosProvider,
);
export const userServiceForAdminCategoriesImpl: UserServiceForAdminCategories = new UserServiceForAdminCategoriesImpl(
  judoAxiosProvider,
);
export const userServiceForAdminCountiesImpl: UserServiceForAdminCounties = new UserServiceForAdminCountiesImpl(
  judoAxiosProvider,
);
export const userServiceForAdminIssueTypesImpl: UserServiceForAdminIssueTypes = new UserServiceForAdminIssueTypesImpl(
  judoAxiosProvider,
);
export const userServiceForAdminIssuesImpl: UserServiceForAdminIssues = new UserServiceForAdminIssuesImpl(
  judoAxiosProvider,
);
export const userServiceForAdminUserManagerImpl: UserServiceForAdminUserManager =
  new UserServiceForAdminUserManagerImpl(judoAxiosProvider);
export const userServiceForAdminUsersImpl: UserServiceForAdminUsers = new UserServiceForAdminUsersImpl(
  judoAxiosProvider,
);
export const userServiceForAdminVoteDefinitionsImpl: UserServiceForAdminVoteDefinitions =
  new UserServiceForAdminVoteDefinitionsImpl(judoAxiosProvider);
export const userServiceForAdminVoteEntriesImpl: UserServiceForAdminVoteEntries =
  new UserServiceForAdminVoteEntriesImpl(judoAxiosProvider);
export const userServiceForDashboardHomeImpl: UserServiceForDashboardHome = new UserServiceForDashboardHomeImpl(
  judoAxiosProvider,
);
export const userServiceForUserCreatedIssuesImpl: UserServiceForUserCreatedIssues =
  new UserServiceForUserCreatedIssuesImpl(judoAxiosProvider);
export const userServiceForUserIssuesImpl: UserServiceForUserIssues = new UserServiceForUserIssuesImpl(
  judoAxiosProvider,
);
export const userServiceForUserOwnedActiveIssuesImpl: UserServiceForUserOwnedActiveIssues =
  new UserServiceForUserOwnedActiveIssuesImpl(judoAxiosProvider);
export const userServiceForUserOwnedRatingVoteDefinitionsImpl: UserServiceForUserOwnedRatingVoteDefinitions =
  new UserServiceForUserOwnedRatingVoteDefinitionsImpl(judoAxiosProvider);
export const userServiceForUserOwnedSelectAnswerVoteDefinitionsImpl: UserServiceForUserOwnedSelectAnswerVoteDefinitions =
  new UserServiceForUserOwnedSelectAnswerVoteDefinitionsImpl(judoAxiosProvider);
export const userServiceForUserOwnedVoteEntriesImpl: UserServiceForUserOwnedVoteEntries =
  new UserServiceForUserOwnedVoteEntriesImpl(judoAxiosProvider);
export const userServiceForUserOwnedYesNoAbstainVoteDefinitionsImpl: UserServiceForUserOwnedYesNoAbstainVoteDefinitions =
  new UserServiceForUserOwnedYesNoAbstainVoteDefinitionsImpl(judoAxiosProvider);
export const userServiceForUserOwnedYesNoVoteDefinitionsImpl: UserServiceForUserOwnedYesNoVoteDefinitions =
  new UserServiceForUserOwnedYesNoVoteDefinitionsImpl(judoAxiosProvider);
export const userServiceForUserProfileImpl: UserServiceForUserProfile = new UserServiceForUserProfileImpl(
  judoAxiosProvider,
);
export const userServiceForUserVoteDefinitionsImpl: UserServiceForUserVoteDefinitions =
  new UserServiceForUserVoteDefinitionsImpl(judoAxiosProvider);
export const serviceCityServiceForDistrictsImpl: ServiceCityServiceForDistricts =
  new ServiceCityServiceForDistrictsImpl(judoAxiosProvider);
export const serviceCommentServiceForCreatedByImpl: ServiceCommentServiceForCreatedBy =
  new ServiceCommentServiceForCreatedByImpl(judoAxiosProvider);
export const serviceCommentServiceForVotesImpl: ServiceCommentServiceForVotes = new ServiceCommentServiceForVotesImpl(
  judoAxiosProvider,
);
export const serviceConServiceForConsImpl: ServiceConServiceForCons = new ServiceConServiceForConsImpl(
  judoAxiosProvider,
);
export const serviceConServiceForCreatedByImpl: ServiceConServiceForCreatedBy = new ServiceConServiceForCreatedByImpl(
  judoAxiosProvider,
);
export const serviceConServiceForParentConImpl: ServiceConServiceForParentCon = new ServiceConServiceForParentConImpl(
  judoAxiosProvider,
);
export const serviceConServiceForParentProImpl: ServiceConServiceForParentPro = new ServiceConServiceForParentProImpl(
  judoAxiosProvider,
);
export const serviceConServiceForProsImpl: ServiceConServiceForPros = new ServiceConServiceForProsImpl(
  judoAxiosProvider,
);
export const serviceConServiceForVotesImpl: ServiceConServiceForVotes = new ServiceConServiceForVotesImpl(
  judoAxiosProvider,
);
export const serviceCountyServiceForCitiesImpl: ServiceCountyServiceForCities = new ServiceCountyServiceForCitiesImpl(
  judoAxiosProvider,
);
export const serviceCreateIssueInputServiceForCityImpl: ServiceCreateIssueInputServiceForCity =
  new ServiceCreateIssueInputServiceForCityImpl(judoAxiosProvider);
export const serviceCreateIssueInputServiceForCountyImpl: ServiceCreateIssueInputServiceForCounty =
  new ServiceCreateIssueInputServiceForCountyImpl(judoAxiosProvider);
export const serviceCreateIssueInputServiceForDistrictImpl: ServiceCreateIssueInputServiceForDistrict =
  new ServiceCreateIssueInputServiceForDistrictImpl(judoAxiosProvider);
export const serviceCreateIssueInputServiceForIssueTypeImpl: ServiceCreateIssueInputServiceForIssueType =
  new ServiceCreateIssueInputServiceForIssueTypeImpl(judoAxiosProvider);
export const serviceDashboardServiceForFavoriteIssuesImpl: ServiceDashboardServiceForFavoriteIssues =
  new ServiceDashboardServiceForFavoriteIssuesImpl(judoAxiosProvider);
export const serviceDashboardServiceForFavoriteVoteDefinitionsImpl: ServiceDashboardServiceForFavoriteVoteDefinitions =
  new ServiceDashboardServiceForFavoriteVoteDefinitionsImpl(judoAxiosProvider);
export const serviceDashboardServiceForIssuesOwnedImpl: ServiceDashboardServiceForIssuesOwned =
  new ServiceDashboardServiceForIssuesOwnedImpl(judoAxiosProvider);
export const serviceDashboardServiceForOwnedVoteDefinitionsImpl: ServiceDashboardServiceForOwnedVoteDefinitions =
  new ServiceDashboardServiceForOwnedVoteDefinitionsImpl(judoAxiosProvider);
export const serviceDashboardServiceForUserVoteEntriesImpl: ServiceDashboardServiceForUserVoteEntries =
  new ServiceDashboardServiceForUserVoteEntriesImpl(judoAxiosProvider);
export const serviceIssueServiceForAttachmentsImpl: ServiceIssueServiceForAttachments =
  new ServiceIssueServiceForAttachmentsImpl(judoAxiosProvider);
export const serviceIssueServiceForCategoriesImpl: ServiceIssueServiceForCategories =
  new ServiceIssueServiceForCategoriesImpl(judoAxiosProvider);
export const serviceIssueServiceForCityImpl: ServiceIssueServiceForCity = new ServiceIssueServiceForCityImpl(
  judoAxiosProvider,
);
export const serviceIssueServiceForCommentsImpl: ServiceIssueServiceForComments =
  new ServiceIssueServiceForCommentsImpl(judoAxiosProvider);
export const serviceIssueServiceForConsImpl: ServiceIssueServiceForCons = new ServiceIssueServiceForConsImpl(
  judoAxiosProvider,
);
export const serviceIssueServiceForCountyImpl: ServiceIssueServiceForCounty = new ServiceIssueServiceForCountyImpl(
  judoAxiosProvider,
);
export const serviceIssueServiceForCreatedByImpl: ServiceIssueServiceForCreatedBy =
  new ServiceIssueServiceForCreatedByImpl(judoAxiosProvider);
export const serviceIssueServiceForDistrictImpl: ServiceIssueServiceForDistrict =
  new ServiceIssueServiceForDistrictImpl(judoAxiosProvider);
export const serviceIssueServiceForIssueTypeImpl: ServiceIssueServiceForIssueType =
  new ServiceIssueServiceForIssueTypeImpl(judoAxiosProvider);
export const serviceIssueServiceForOwnerImpl: ServiceIssueServiceForOwner = new ServiceIssueServiceForOwnerImpl(
  judoAxiosProvider,
);
export const serviceIssueServiceForProsImpl: ServiceIssueServiceForPros = new ServiceIssueServiceForProsImpl(
  judoAxiosProvider,
);
export const serviceIssueCategoryServiceForOwnerImpl: ServiceIssueCategoryServiceForOwner =
  new ServiceIssueCategoryServiceForOwnerImpl(judoAxiosProvider);
export const serviceIssueCategoryServiceForSubcategoriesImpl: ServiceIssueCategoryServiceForSubcategories =
  new ServiceIssueCategoryServiceForSubcategoriesImpl(judoAxiosProvider);
export const serviceProServiceForConsImpl: ServiceProServiceForCons = new ServiceProServiceForConsImpl(
  judoAxiosProvider,
);
export const serviceProServiceForCreatedByImpl: ServiceProServiceForCreatedBy = new ServiceProServiceForCreatedByImpl(
  judoAxiosProvider,
);
export const serviceProServiceForParentConImpl: ServiceProServiceForParentCon = new ServiceProServiceForParentConImpl(
  judoAxiosProvider,
);
export const serviceProServiceForParentProImpl: ServiceProServiceForParentPro = new ServiceProServiceForParentProImpl(
  judoAxiosProvider,
);
export const serviceProServiceForProsImpl: ServiceProServiceForPros = new ServiceProServiceForProsImpl(
  judoAxiosProvider,
);
export const serviceProServiceForVotesImpl: ServiceProServiceForVotes = new ServiceProServiceForVotesImpl(
  judoAxiosProvider,
);
export const serviceRatingVoteDefinitionServiceForIssueImpl: ServiceRatingVoteDefinitionServiceForIssue =
  new ServiceRatingVoteDefinitionServiceForIssueImpl(judoAxiosProvider);
export const serviceRatingVoteDefinitionServiceForUserVoteEntryImpl: ServiceRatingVoteDefinitionServiceForUserVoteEntry =
  new ServiceRatingVoteDefinitionServiceForUserVoteEntryImpl(judoAxiosProvider);
export const serviceRatingVoteDefinitionServiceForVoteEntriesImpl: ServiceRatingVoteDefinitionServiceForVoteEntries =
  new ServiceRatingVoteDefinitionServiceForVoteEntriesImpl(judoAxiosProvider);
export const serviceRatingVoteEntryServiceForOwnerImpl: ServiceRatingVoteEntryServiceForOwner =
  new ServiceRatingVoteEntryServiceForOwnerImpl(judoAxiosProvider);
export const serviceSelectAnswerVoteDefinitionServiceForIssueImpl: ServiceSelectAnswerVoteDefinitionServiceForIssue =
  new ServiceSelectAnswerVoteDefinitionServiceForIssueImpl(judoAxiosProvider);
export const serviceSelectAnswerVoteDefinitionServiceForUserVoteEntryImpl: ServiceSelectAnswerVoteDefinitionServiceForUserVoteEntry =
  new ServiceSelectAnswerVoteDefinitionServiceForUserVoteEntryImpl(judoAxiosProvider);
export const serviceSelectAnswerVoteDefinitionServiceForVoteEntriesImpl: ServiceSelectAnswerVoteDefinitionServiceForVoteEntries =
  new ServiceSelectAnswerVoteDefinitionServiceForVoteEntriesImpl(judoAxiosProvider);
export const serviceSelectAnswerVoteDefinitionServiceForVoteSelectionsImpl: ServiceSelectAnswerVoteDefinitionServiceForVoteSelections =
  new ServiceSelectAnswerVoteDefinitionServiceForVoteSelectionsImpl(judoAxiosProvider);
export const serviceSelectAnswerVoteEntryServiceForOwnerImpl: ServiceSelectAnswerVoteEntryServiceForOwner =
  new ServiceSelectAnswerVoteEntryServiceForOwnerImpl(judoAxiosProvider);
export const serviceSelectAnswerVoteEntryServiceForValueImpl: ServiceSelectAnswerVoteEntryServiceForValue =
  new ServiceSelectAnswerVoteEntryServiceForValueImpl(judoAxiosProvider);
export const serviceServiceUserServiceForActivityCitiesImpl: ServiceServiceUserServiceForActivityCities =
  new ServiceServiceUserServiceForActivityCitiesImpl(judoAxiosProvider);
export const serviceServiceUserServiceForActivityCountiesImpl: ServiceServiceUserServiceForActivityCounties =
  new ServiceServiceUserServiceForActivityCountiesImpl(judoAxiosProvider);
export const serviceServiceUserServiceForActivityDistrictsImpl: ServiceServiceUserServiceForActivityDistricts =
  new ServiceServiceUserServiceForActivityDistrictsImpl(judoAxiosProvider);
export const serviceServiceUserServiceForResidentCityImpl: ServiceServiceUserServiceForResidentCity =
  new ServiceServiceUserServiceForResidentCityImpl(judoAxiosProvider);
export const serviceServiceUserServiceForResidentCountyImpl: ServiceServiceUserServiceForResidentCounty =
  new ServiceServiceUserServiceForResidentCountyImpl(judoAxiosProvider);
export const serviceServiceUserServiceForResidentDistrictImpl: ServiceServiceUserServiceForResidentDistrict =
  new ServiceServiceUserServiceForResidentDistrictImpl(judoAxiosProvider);
export const serviceServiceUserServiceForVotesImpl: ServiceServiceUserServiceForVotes =
  new ServiceServiceUserServiceForVotesImpl(judoAxiosProvider);
export const serviceSimpleVoteServiceForUserImpl: ServiceSimpleVoteServiceForUser =
  new ServiceSimpleVoteServiceForUserImpl(judoAxiosProvider);
export const serviceUserIssuesServiceForActiveIssuesGlobalImpl: ServiceUserIssuesServiceForActiveIssuesGlobal =
  new ServiceUserIssuesServiceForActiveIssuesGlobalImpl(judoAxiosProvider);
export const serviceUserIssuesServiceForActiveIssuesInActivityCitiesImpl: ServiceUserIssuesServiceForActiveIssuesInActivityCities =
  new ServiceUserIssuesServiceForActiveIssuesInActivityCitiesImpl(judoAxiosProvider);
export const serviceUserIssuesServiceForActiveIssuesInActivityCountiesImpl: ServiceUserIssuesServiceForActiveIssuesInActivityCounties =
  new ServiceUserIssuesServiceForActiveIssuesInActivityCountiesImpl(judoAxiosProvider);
export const serviceUserIssuesServiceForActiveIssuesInActivityDistrictsImpl: ServiceUserIssuesServiceForActiveIssuesInActivityDistricts =
  new ServiceUserIssuesServiceForActiveIssuesInActivityDistrictsImpl(judoAxiosProvider);
export const serviceUserIssuesServiceForActiveIssuesInResidentCityImpl: ServiceUserIssuesServiceForActiveIssuesInResidentCity =
  new ServiceUserIssuesServiceForActiveIssuesInResidentCityImpl(judoAxiosProvider);
export const serviceUserIssuesServiceForActiveIssuesInResidentCountyImpl: ServiceUserIssuesServiceForActiveIssuesInResidentCounty =
  new ServiceUserIssuesServiceForActiveIssuesInResidentCountyImpl(judoAxiosProvider);
export const serviceUserIssuesServiceForActiveIssuesInResidentDistrictImpl: ServiceUserIssuesServiceForActiveIssuesInResidentDistrict =
  new ServiceUserIssuesServiceForActiveIssuesInResidentDistrictImpl(judoAxiosProvider);
export const serviceUserIssuesServiceForOwnedIssuesImpl: ServiceUserIssuesServiceForOwnedIssues =
  new ServiceUserIssuesServiceForOwnedIssuesImpl(judoAxiosProvider);
export const serviceUserManagerServiceForUsersImpl: ServiceUserManagerServiceForUsers =
  new ServiceUserManagerServiceForUsersImpl(judoAxiosProvider);
export const serviceUserProfileServiceForActivityCitiesImpl: ServiceUserProfileServiceForActivityCities =
  new ServiceUserProfileServiceForActivityCitiesImpl(judoAxiosProvider);
export const serviceUserProfileServiceForActivityCountiesImpl: ServiceUserProfileServiceForActivityCounties =
  new ServiceUserProfileServiceForActivityCountiesImpl(judoAxiosProvider);
export const serviceUserProfileServiceForActivityDistrictsImpl: ServiceUserProfileServiceForActivityDistricts =
  new ServiceUserProfileServiceForActivityDistrictsImpl(judoAxiosProvider);
export const serviceUserProfileServiceForResidentCityImpl: ServiceUserProfileServiceForResidentCity =
  new ServiceUserProfileServiceForResidentCityImpl(judoAxiosProvider);
export const serviceUserProfileServiceForResidentCountyImpl: ServiceUserProfileServiceForResidentCounty =
  new ServiceUserProfileServiceForResidentCountyImpl(judoAxiosProvider);
export const serviceUserProfileServiceForResidentDistrictImpl: ServiceUserProfileServiceForResidentDistrict =
  new ServiceUserProfileServiceForResidentDistrictImpl(judoAxiosProvider);
export const serviceUserVoteDefinitionServiceForActiveVoteDefinitionsGlobalImpl: ServiceUserVoteDefinitionServiceForActiveVoteDefinitionsGlobal =
  new ServiceUserVoteDefinitionServiceForActiveVoteDefinitionsGlobalImpl(judoAxiosProvider);
export const serviceUserVoteDefinitionServiceForActiveVoteDefinitionsInActivityCitiesImpl: ServiceUserVoteDefinitionServiceForActiveVoteDefinitionsInActivityCities =
  new ServiceUserVoteDefinitionServiceForActiveVoteDefinitionsInActivityCitiesImpl(judoAxiosProvider);
export const serviceUserVoteDefinitionServiceForActiveVoteDefinitionsInActivityCountiesImpl: ServiceUserVoteDefinitionServiceForActiveVoteDefinitionsInActivityCounties =
  new ServiceUserVoteDefinitionServiceForActiveVoteDefinitionsInActivityCountiesImpl(judoAxiosProvider);
export const serviceUserVoteDefinitionServiceForActiveVoteDefinitionsInActivityDistrictsImpl: ServiceUserVoteDefinitionServiceForActiveVoteDefinitionsInActivityDistricts =
  new ServiceUserVoteDefinitionServiceForActiveVoteDefinitionsInActivityDistrictsImpl(judoAxiosProvider);
export const serviceUserVoteDefinitionServiceForActiveVoteDefinitionsInResidentCityImpl: ServiceUserVoteDefinitionServiceForActiveVoteDefinitionsInResidentCity =
  new ServiceUserVoteDefinitionServiceForActiveVoteDefinitionsInResidentCityImpl(judoAxiosProvider);
export const serviceUserVoteDefinitionServiceForActiveVoteDefinitionsInResidentCountyImpl: ServiceUserVoteDefinitionServiceForActiveVoteDefinitionsInResidentCounty =
  new ServiceUserVoteDefinitionServiceForActiveVoteDefinitionsInResidentCountyImpl(judoAxiosProvider);
export const serviceUserVoteDefinitionServiceForActiveVoteDefinitionsInResidentDistrictImpl: ServiceUserVoteDefinitionServiceForActiveVoteDefinitionsInResidentDistrict =
  new ServiceUserVoteDefinitionServiceForActiveVoteDefinitionsInResidentDistrictImpl(judoAxiosProvider);
export const serviceUserVoteDefinitionServiceForOwnedVoteDefinitionsImpl: ServiceUserVoteDefinitionServiceForOwnedVoteDefinitions =
  new ServiceUserVoteDefinitionServiceForOwnedVoteDefinitionsImpl(judoAxiosProvider);
export const serviceVoteDefinitionServiceForIssueImpl: ServiceVoteDefinitionServiceForIssue =
  new ServiceVoteDefinitionServiceForIssueImpl(judoAxiosProvider);
export const serviceVoteEntryServiceForVoteDefinitionImpl: ServiceVoteEntryServiceForVoteDefinition =
  new ServiceVoteEntryServiceForVoteDefinitionImpl(judoAxiosProvider);
export const serviceYesNoAbstainVoteDefinitionServiceForIssueImpl: ServiceYesNoAbstainVoteDefinitionServiceForIssue =
  new ServiceYesNoAbstainVoteDefinitionServiceForIssueImpl(judoAxiosProvider);
export const serviceYesNoAbstainVoteDefinitionServiceForUserVoteEntryImpl: ServiceYesNoAbstainVoteDefinitionServiceForUserVoteEntry =
  new ServiceYesNoAbstainVoteDefinitionServiceForUserVoteEntryImpl(judoAxiosProvider);
export const serviceYesNoAbstainVoteDefinitionServiceForVoteEntriesImpl: ServiceYesNoAbstainVoteDefinitionServiceForVoteEntries =
  new ServiceYesNoAbstainVoteDefinitionServiceForVoteEntriesImpl(judoAxiosProvider);
export const serviceYesNoAbstainVoteEntryServiceForOwnerImpl: ServiceYesNoAbstainVoteEntryServiceForOwner =
  new ServiceYesNoAbstainVoteEntryServiceForOwnerImpl(judoAxiosProvider);
export const serviceYesNoVoteDefinitionServiceForIssueImpl: ServiceYesNoVoteDefinitionServiceForIssue =
  new ServiceYesNoVoteDefinitionServiceForIssueImpl(judoAxiosProvider);
export const serviceYesNoVoteDefinitionServiceForUserVoteEntryImpl: ServiceYesNoVoteDefinitionServiceForUserVoteEntry =
  new ServiceYesNoVoteDefinitionServiceForUserVoteEntryImpl(judoAxiosProvider);
export const serviceYesNoVoteDefinitionServiceForVoteEntriesImpl: ServiceYesNoVoteDefinitionServiceForVoteEntries =
  new ServiceYesNoVoteDefinitionServiceForVoteEntriesImpl(judoAxiosProvider);
export const serviceYesNoVoteEntryServiceForOwnerImpl: ServiceYesNoVoteEntryServiceForOwner =
  new ServiceYesNoVoteEntryServiceForOwnerImpl(judoAxiosProvider);
