//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'data-axios/'+'ImplementationInstancesExporter.ts'
// Template name: implementationInstancesExporter.ts.hbs
// Template file: data-axios/implementationInstancesExporter.ts.hbs

import { judoAxiosProvider } from './JudoAxiosProvider';
import { AccessServiceImpl } from './AccessServiceImpl';

import { ServiceUserServiceForActiveIssuesImpl } from './ServiceUserServiceForActiveIssuesImpl';
import { ServiceUserServiceForAdminCategoriesImpl } from './ServiceUserServiceForAdminCategoriesImpl';
import { ServiceUserServiceForAdminCountiesImpl } from './ServiceUserServiceForAdminCountiesImpl';
import { ServiceUserServiceForAdminIssueTypesImpl } from './ServiceUserServiceForAdminIssueTypesImpl';
import { ServiceUserServiceForAdminIssuesImpl } from './ServiceUserServiceForAdminIssuesImpl';
import { ServiceUserServiceForAdminUserManagerImpl } from './ServiceUserServiceForAdminUserManagerImpl';
import { ServiceUserServiceForAdminUsersImpl } from './ServiceUserServiceForAdminUsersImpl';
import { ServiceUserServiceForAdminVoteDefinitionsImpl } from './ServiceUserServiceForAdminVoteDefinitionsImpl';
import { ServiceUserServiceForAdminVoteEntriesImpl } from './ServiceUserServiceForAdminVoteEntriesImpl';
import { ServiceUserServiceForDashboardHomeImpl } from './ServiceUserServiceForDashboardHomeImpl';
import { ServiceUserServiceForUserCreatedIssuesImpl } from './ServiceUserServiceForUserCreatedIssuesImpl';
import { ServiceUserServiceForUserIssuesImpl } from './ServiceUserServiceForUserIssuesImpl';
import { ServiceUserServiceForUserOwnedActiveIssuesImpl } from './ServiceUserServiceForUserOwnedActiveIssuesImpl';
import { ServiceUserServiceForUserOwnedRatingVoteDefinitionsImpl } from './ServiceUserServiceForUserOwnedRatingVoteDefinitionsImpl';
import { ServiceUserServiceForUserOwnedSelectAnswerVoteDefinitionsImpl } from './ServiceUserServiceForUserOwnedSelectAnswerVoteDefinitionsImpl';
import { ServiceUserServiceForUserOwnedVoteEntriesImpl } from './ServiceUserServiceForUserOwnedVoteEntriesImpl';
import { ServiceUserServiceForUserOwnedYesNoAbstainVoteDefinitionsImpl } from './ServiceUserServiceForUserOwnedYesNoAbstainVoteDefinitionsImpl';
import { ServiceUserServiceForUserOwnedYesNoVoteDefinitionsImpl } from './ServiceUserServiceForUserOwnedYesNoVoteDefinitionsImpl';
import { ServiceUserServiceForUserProfileImpl } from './ServiceUserServiceForUserProfileImpl';
import { ServiceUserServiceForUserVoteDefinitionsImpl } from './ServiceUserServiceForUserVoteDefinitionsImpl';

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
import { ServiceRatingVoteDefinitionServiceForOwnerImpl } from './ServiceRatingVoteDefinitionServiceForOwnerImpl';
import { ServiceRatingVoteDefinitionServiceForUserVoteEntryImpl } from './ServiceRatingVoteDefinitionServiceForUserVoteEntryImpl';
import { ServiceRatingVoteDefinitionServiceForVoteEntriesImpl } from './ServiceRatingVoteDefinitionServiceForVoteEntriesImpl';
import { ServiceRatingVoteEntryServiceForOwnerImpl } from './ServiceRatingVoteEntryServiceForOwnerImpl';
import { ServiceSelectAnswerVoteDefinitionServiceForIssueImpl } from './ServiceSelectAnswerVoteDefinitionServiceForIssueImpl';
import { ServiceSelectAnswerVoteDefinitionServiceForOwnerImpl } from './ServiceSelectAnswerVoteDefinitionServiceForOwnerImpl';
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
import { ServiceYesNoAbstainVoteDefinitionServiceForOwnerImpl } from './ServiceYesNoAbstainVoteDefinitionServiceForOwnerImpl';
import { ServiceYesNoAbstainVoteDefinitionServiceForUserVoteEntryImpl } from './ServiceYesNoAbstainVoteDefinitionServiceForUserVoteEntryImpl';
import { ServiceYesNoAbstainVoteDefinitionServiceForVoteEntriesImpl } from './ServiceYesNoAbstainVoteDefinitionServiceForVoteEntriesImpl';
import { ServiceYesNoAbstainVoteEntryServiceForOwnerImpl } from './ServiceYesNoAbstainVoteEntryServiceForOwnerImpl';
import { ServiceYesNoVoteDefinitionServiceForIssueImpl } from './ServiceYesNoVoteDefinitionServiceForIssueImpl';
import { ServiceYesNoVoteDefinitionServiceForOwnerImpl } from './ServiceYesNoVoteDefinitionServiceForOwnerImpl';
import { ServiceYesNoVoteDefinitionServiceForUserVoteEntryImpl } from './ServiceYesNoVoteDefinitionServiceForUserVoteEntryImpl';
import { ServiceYesNoVoteDefinitionServiceForVoteEntriesImpl } from './ServiceYesNoVoteDefinitionServiceForVoteEntriesImpl';
import { ServiceYesNoVoteEntryServiceForOwnerImpl } from './ServiceYesNoVoteEntryServiceForOwnerImpl';

import { CloseDebateInputServiceForClassImpl } from './CloseDebateInputServiceForClassImpl';
import { CloseDebateOutputVoteDefinitionReferenceServiceForClassImpl } from './CloseDebateOutputVoteDefinitionReferenceServiceForClassImpl';
import { CreateArgumentInputServiceForClassImpl } from './CreateArgumentInputServiceForClassImpl';
import { CreateCommentInputServiceForClassImpl } from './CreateCommentInputServiceForClassImpl';
import { RatingVoteInputServiceForClassImpl } from './RatingVoteInputServiceForClassImpl';
import { SelectAnswerVoteSelectionServiceForClassImpl } from './SelectAnswerVoteSelectionServiceForClassImpl';
import { YesNoAbstainVoteInputServiceForClassImpl } from './YesNoAbstainVoteInputServiceForClassImpl';
import { YesNoVoteInputServiceForClassImpl } from './YesNoVoteInputServiceForClassImpl';
import { ServiceCityServiceForClassImpl } from './ServiceCityServiceForClassImpl';
import { ServiceCommentServiceForClassImpl } from './ServiceCommentServiceForClassImpl';
import { ServiceConServiceForClassImpl } from './ServiceConServiceForClassImpl';
import { ServiceConParentServiceForClassImpl } from './ServiceConParentServiceForClassImpl';
import { ServiceCountyServiceForClassImpl } from './ServiceCountyServiceForClassImpl';
import { ServiceCreateIssueInputServiceForClassImpl } from './ServiceCreateIssueInputServiceForClassImpl';
import { ServiceCreateUserInputServiceForClassImpl } from './ServiceCreateUserInputServiceForClassImpl';
import { ServiceDashboardServiceForClassImpl } from './ServiceDashboardServiceForClassImpl';
import { ServiceDistrictServiceForClassImpl } from './ServiceDistrictServiceForClassImpl';
import { ServiceIssueServiceForClassImpl } from './ServiceIssueServiceForClassImpl';
import { ServiceIssueAttachmentServiceForClassImpl } from './ServiceIssueAttachmentServiceForClassImpl';
import { ServiceIssueCategoryServiceForClassImpl } from './ServiceIssueCategoryServiceForClassImpl';
import { ServiceIssueTypeServiceForClassImpl } from './ServiceIssueTypeServiceForClassImpl';
import { ServiceProServiceForClassImpl } from './ServiceProServiceForClassImpl';
import { ServiceProParentServiceForClassImpl } from './ServiceProParentServiceForClassImpl';
import { ServiceRatingVoteDefinitionServiceForClassImpl } from './ServiceRatingVoteDefinitionServiceForClassImpl';
import { ServiceRatingVoteEntryServiceForClassImpl } from './ServiceRatingVoteEntryServiceForClassImpl';
import { ServiceSelectAnswerVoteDefinitionServiceForClassImpl } from './ServiceSelectAnswerVoteDefinitionServiceForClassImpl';
import { ServiceSelectAnswerVoteEntryServiceForClassImpl } from './ServiceSelectAnswerVoteEntryServiceForClassImpl';
import { ServiceSelectAnswerVoteSelectionServiceForClassImpl } from './ServiceSelectAnswerVoteSelectionServiceForClassImpl';
import { ServiceServicePrincipalUserServiceForClassImpl } from './ServiceServicePrincipalUserServiceForClassImpl';
import { ServiceServiceUserServiceForClassImpl } from './ServiceServiceUserServiceForClassImpl';
import { ServiceSimpleVoteServiceForClassImpl } from './ServiceSimpleVoteServiceForClassImpl';
import { ServiceUserIssuesServiceForClassImpl } from './ServiceUserIssuesServiceForClassImpl';
import { ServiceUserManagerServiceForClassImpl } from './ServiceUserManagerServiceForClassImpl';
import { ServiceUserProfileServiceForClassImpl } from './ServiceUserProfileServiceForClassImpl';
import { ServiceUserVoteDefinitionServiceForClassImpl } from './ServiceUserVoteDefinitionServiceForClassImpl';
import { ServiceVoteDefinitionServiceForClassImpl } from './ServiceVoteDefinitionServiceForClassImpl';
import { ServiceVoteEntryServiceForClassImpl } from './ServiceVoteEntryServiceForClassImpl';
import { ServiceYesNoAbstainVoteDefinitionServiceForClassImpl } from './ServiceYesNoAbstainVoteDefinitionServiceForClassImpl';
import { ServiceYesNoAbstainVoteEntryServiceForClassImpl } from './ServiceYesNoAbstainVoteEntryServiceForClassImpl';
import { ServiceYesNoVoteDefinitionServiceForClassImpl } from './ServiceYesNoVoteDefinitionServiceForClassImpl';
import { ServiceYesNoVoteEntryServiceForClassImpl } from './ServiceYesNoVoteEntryServiceForClassImpl';

export const accessServiceImpl = new AccessServiceImpl(judoAxiosProvider);

export const serviceUserServiceForActiveIssuesImpl = new ServiceUserServiceForActiveIssuesImpl(judoAxiosProvider);
export const serviceUserServiceForAdminCategoriesImpl = new ServiceUserServiceForAdminCategoriesImpl(judoAxiosProvider);
export const serviceUserServiceForAdminCountiesImpl = new ServiceUserServiceForAdminCountiesImpl(judoAxiosProvider);
export const serviceUserServiceForAdminIssueTypesImpl = new ServiceUserServiceForAdminIssueTypesImpl(judoAxiosProvider);
export const serviceUserServiceForAdminIssuesImpl = new ServiceUserServiceForAdminIssuesImpl(judoAxiosProvider);
export const serviceUserServiceForAdminUserManagerImpl = new ServiceUserServiceForAdminUserManagerImpl(
  judoAxiosProvider,
);
export const serviceUserServiceForAdminUsersImpl = new ServiceUserServiceForAdminUsersImpl(judoAxiosProvider);
export const serviceUserServiceForAdminVoteDefinitionsImpl = new ServiceUserServiceForAdminVoteDefinitionsImpl(
  judoAxiosProvider,
);
export const serviceUserServiceForAdminVoteEntriesImpl = new ServiceUserServiceForAdminVoteEntriesImpl(
  judoAxiosProvider,
);
export const serviceUserServiceForDashboardHomeImpl = new ServiceUserServiceForDashboardHomeImpl(judoAxiosProvider);
export const serviceUserServiceForUserCreatedIssuesImpl = new ServiceUserServiceForUserCreatedIssuesImpl(
  judoAxiosProvider,
);
export const serviceUserServiceForUserIssuesImpl = new ServiceUserServiceForUserIssuesImpl(judoAxiosProvider);
export const serviceUserServiceForUserOwnedActiveIssuesImpl = new ServiceUserServiceForUserOwnedActiveIssuesImpl(
  judoAxiosProvider,
);
export const serviceUserServiceForUserOwnedRatingVoteDefinitionsImpl =
  new ServiceUserServiceForUserOwnedRatingVoteDefinitionsImpl(judoAxiosProvider);
export const serviceUserServiceForUserOwnedSelectAnswerVoteDefinitionsImpl =
  new ServiceUserServiceForUserOwnedSelectAnswerVoteDefinitionsImpl(judoAxiosProvider);
export const serviceUserServiceForUserOwnedVoteEntriesImpl = new ServiceUserServiceForUserOwnedVoteEntriesImpl(
  judoAxiosProvider,
);
export const serviceUserServiceForUserOwnedYesNoAbstainVoteDefinitionsImpl =
  new ServiceUserServiceForUserOwnedYesNoAbstainVoteDefinitionsImpl(judoAxiosProvider);
export const serviceUserServiceForUserOwnedYesNoVoteDefinitionsImpl =
  new ServiceUserServiceForUserOwnedYesNoVoteDefinitionsImpl(judoAxiosProvider);
export const serviceUserServiceForUserProfileImpl = new ServiceUserServiceForUserProfileImpl(judoAxiosProvider);
export const serviceUserServiceForUserVoteDefinitionsImpl = new ServiceUserServiceForUserVoteDefinitionsImpl(
  judoAxiosProvider,
);

export const serviceCityServiceForDistrictsImpl = new ServiceCityServiceForDistrictsImpl(judoAxiosProvider);
export const serviceCommentServiceForCreatedByImpl = new ServiceCommentServiceForCreatedByImpl(judoAxiosProvider);
export const serviceCommentServiceForVotesImpl = new ServiceCommentServiceForVotesImpl(judoAxiosProvider);
export const serviceConServiceForConsImpl = new ServiceConServiceForConsImpl(judoAxiosProvider);
export const serviceConServiceForCreatedByImpl = new ServiceConServiceForCreatedByImpl(judoAxiosProvider);
export const serviceConServiceForParentConImpl = new ServiceConServiceForParentConImpl(judoAxiosProvider);
export const serviceConServiceForParentProImpl = new ServiceConServiceForParentProImpl(judoAxiosProvider);
export const serviceConServiceForProsImpl = new ServiceConServiceForProsImpl(judoAxiosProvider);
export const serviceConServiceForVotesImpl = new ServiceConServiceForVotesImpl(judoAxiosProvider);
export const serviceCountyServiceForCitiesImpl = new ServiceCountyServiceForCitiesImpl(judoAxiosProvider);
export const serviceCreateIssueInputServiceForCityImpl = new ServiceCreateIssueInputServiceForCityImpl(
  judoAxiosProvider,
);
export const serviceCreateIssueInputServiceForCountyImpl = new ServiceCreateIssueInputServiceForCountyImpl(
  judoAxiosProvider,
);
export const serviceCreateIssueInputServiceForDistrictImpl = new ServiceCreateIssueInputServiceForDistrictImpl(
  judoAxiosProvider,
);
export const serviceCreateIssueInputServiceForIssueTypeImpl = new ServiceCreateIssueInputServiceForIssueTypeImpl(
  judoAxiosProvider,
);
export const serviceDashboardServiceForFavoriteIssuesImpl = new ServiceDashboardServiceForFavoriteIssuesImpl(
  judoAxiosProvider,
);
export const serviceDashboardServiceForFavoriteVoteDefinitionsImpl =
  new ServiceDashboardServiceForFavoriteVoteDefinitionsImpl(judoAxiosProvider);
export const serviceDashboardServiceForIssuesOwnedImpl = new ServiceDashboardServiceForIssuesOwnedImpl(
  judoAxiosProvider,
);
export const serviceDashboardServiceForOwnedVoteDefinitionsImpl =
  new ServiceDashboardServiceForOwnedVoteDefinitionsImpl(judoAxiosProvider);
export const serviceDashboardServiceForUserVoteEntriesImpl = new ServiceDashboardServiceForUserVoteEntriesImpl(
  judoAxiosProvider,
);
export const serviceIssueServiceForAttachmentsImpl = new ServiceIssueServiceForAttachmentsImpl(judoAxiosProvider);
export const serviceIssueServiceForCategoriesImpl = new ServiceIssueServiceForCategoriesImpl(judoAxiosProvider);
export const serviceIssueServiceForCityImpl = new ServiceIssueServiceForCityImpl(judoAxiosProvider);
export const serviceIssueServiceForCommentsImpl = new ServiceIssueServiceForCommentsImpl(judoAxiosProvider);
export const serviceIssueServiceForConsImpl = new ServiceIssueServiceForConsImpl(judoAxiosProvider);
export const serviceIssueServiceForCountyImpl = new ServiceIssueServiceForCountyImpl(judoAxiosProvider);
export const serviceIssueServiceForCreatedByImpl = new ServiceIssueServiceForCreatedByImpl(judoAxiosProvider);
export const serviceIssueServiceForDistrictImpl = new ServiceIssueServiceForDistrictImpl(judoAxiosProvider);
export const serviceIssueServiceForIssueTypeImpl = new ServiceIssueServiceForIssueTypeImpl(judoAxiosProvider);
export const serviceIssueServiceForOwnerImpl = new ServiceIssueServiceForOwnerImpl(judoAxiosProvider);
export const serviceIssueServiceForProsImpl = new ServiceIssueServiceForProsImpl(judoAxiosProvider);
export const serviceIssueCategoryServiceForOwnerImpl = new ServiceIssueCategoryServiceForOwnerImpl(judoAxiosProvider);
export const serviceIssueCategoryServiceForSubcategoriesImpl = new ServiceIssueCategoryServiceForSubcategoriesImpl(
  judoAxiosProvider,
);
export const serviceProServiceForConsImpl = new ServiceProServiceForConsImpl(judoAxiosProvider);
export const serviceProServiceForCreatedByImpl = new ServiceProServiceForCreatedByImpl(judoAxiosProvider);
export const serviceProServiceForParentConImpl = new ServiceProServiceForParentConImpl(judoAxiosProvider);
export const serviceProServiceForParentProImpl = new ServiceProServiceForParentProImpl(judoAxiosProvider);
export const serviceProServiceForProsImpl = new ServiceProServiceForProsImpl(judoAxiosProvider);
export const serviceProServiceForVotesImpl = new ServiceProServiceForVotesImpl(judoAxiosProvider);
export const serviceRatingVoteDefinitionServiceForIssueImpl = new ServiceRatingVoteDefinitionServiceForIssueImpl(
  judoAxiosProvider,
);
export const serviceRatingVoteDefinitionServiceForOwnerImpl = new ServiceRatingVoteDefinitionServiceForOwnerImpl(
  judoAxiosProvider,
);
export const serviceRatingVoteDefinitionServiceForUserVoteEntryImpl =
  new ServiceRatingVoteDefinitionServiceForUserVoteEntryImpl(judoAxiosProvider);
export const serviceRatingVoteDefinitionServiceForVoteEntriesImpl =
  new ServiceRatingVoteDefinitionServiceForVoteEntriesImpl(judoAxiosProvider);
export const serviceRatingVoteEntryServiceForOwnerImpl = new ServiceRatingVoteEntryServiceForOwnerImpl(
  judoAxiosProvider,
);
export const serviceSelectAnswerVoteDefinitionServiceForIssueImpl =
  new ServiceSelectAnswerVoteDefinitionServiceForIssueImpl(judoAxiosProvider);
export const serviceSelectAnswerVoteDefinitionServiceForOwnerImpl =
  new ServiceSelectAnswerVoteDefinitionServiceForOwnerImpl(judoAxiosProvider);
export const serviceSelectAnswerVoteDefinitionServiceForUserVoteEntryImpl =
  new ServiceSelectAnswerVoteDefinitionServiceForUserVoteEntryImpl(judoAxiosProvider);
export const serviceSelectAnswerVoteDefinitionServiceForVoteEntriesImpl =
  new ServiceSelectAnswerVoteDefinitionServiceForVoteEntriesImpl(judoAxiosProvider);
export const serviceSelectAnswerVoteDefinitionServiceForVoteSelectionsImpl =
  new ServiceSelectAnswerVoteDefinitionServiceForVoteSelectionsImpl(judoAxiosProvider);
export const serviceSelectAnswerVoteEntryServiceForOwnerImpl = new ServiceSelectAnswerVoteEntryServiceForOwnerImpl(
  judoAxiosProvider,
);
export const serviceSelectAnswerVoteEntryServiceForValueImpl = new ServiceSelectAnswerVoteEntryServiceForValueImpl(
  judoAxiosProvider,
);
export const serviceServiceUserServiceForActivityCitiesImpl = new ServiceServiceUserServiceForActivityCitiesImpl(
  judoAxiosProvider,
);
export const serviceServiceUserServiceForActivityCountiesImpl = new ServiceServiceUserServiceForActivityCountiesImpl(
  judoAxiosProvider,
);
export const serviceServiceUserServiceForActivityDistrictsImpl = new ServiceServiceUserServiceForActivityDistrictsImpl(
  judoAxiosProvider,
);
export const serviceServiceUserServiceForResidentCityImpl = new ServiceServiceUserServiceForResidentCityImpl(
  judoAxiosProvider,
);
export const serviceServiceUserServiceForResidentCountyImpl = new ServiceServiceUserServiceForResidentCountyImpl(
  judoAxiosProvider,
);
export const serviceServiceUserServiceForResidentDistrictImpl = new ServiceServiceUserServiceForResidentDistrictImpl(
  judoAxiosProvider,
);
export const serviceServiceUserServiceForVotesImpl = new ServiceServiceUserServiceForVotesImpl(judoAxiosProvider);
export const serviceSimpleVoteServiceForUserImpl = new ServiceSimpleVoteServiceForUserImpl(judoAxiosProvider);
export const serviceUserIssuesServiceForActiveIssuesGlobalImpl = new ServiceUserIssuesServiceForActiveIssuesGlobalImpl(
  judoAxiosProvider,
);
export const serviceUserIssuesServiceForActiveIssuesInActivityCitiesImpl =
  new ServiceUserIssuesServiceForActiveIssuesInActivityCitiesImpl(judoAxiosProvider);
export const serviceUserIssuesServiceForActiveIssuesInActivityCountiesImpl =
  new ServiceUserIssuesServiceForActiveIssuesInActivityCountiesImpl(judoAxiosProvider);
export const serviceUserIssuesServiceForActiveIssuesInActivityDistrictsImpl =
  new ServiceUserIssuesServiceForActiveIssuesInActivityDistrictsImpl(judoAxiosProvider);
export const serviceUserIssuesServiceForActiveIssuesInResidentCityImpl =
  new ServiceUserIssuesServiceForActiveIssuesInResidentCityImpl(judoAxiosProvider);
export const serviceUserIssuesServiceForActiveIssuesInResidentCountyImpl =
  new ServiceUserIssuesServiceForActiveIssuesInResidentCountyImpl(judoAxiosProvider);
export const serviceUserIssuesServiceForActiveIssuesInResidentDistrictImpl =
  new ServiceUserIssuesServiceForActiveIssuesInResidentDistrictImpl(judoAxiosProvider);
export const serviceUserIssuesServiceForOwnedIssuesImpl = new ServiceUserIssuesServiceForOwnedIssuesImpl(
  judoAxiosProvider,
);
export const serviceUserManagerServiceForUsersImpl = new ServiceUserManagerServiceForUsersImpl(judoAxiosProvider);
export const serviceUserProfileServiceForActivityCitiesImpl = new ServiceUserProfileServiceForActivityCitiesImpl(
  judoAxiosProvider,
);
export const serviceUserProfileServiceForActivityCountiesImpl = new ServiceUserProfileServiceForActivityCountiesImpl(
  judoAxiosProvider,
);
export const serviceUserProfileServiceForActivityDistrictsImpl = new ServiceUserProfileServiceForActivityDistrictsImpl(
  judoAxiosProvider,
);
export const serviceUserProfileServiceForResidentCityImpl = new ServiceUserProfileServiceForResidentCityImpl(
  judoAxiosProvider,
);
export const serviceUserProfileServiceForResidentCountyImpl = new ServiceUserProfileServiceForResidentCountyImpl(
  judoAxiosProvider,
);
export const serviceUserProfileServiceForResidentDistrictImpl = new ServiceUserProfileServiceForResidentDistrictImpl(
  judoAxiosProvider,
);
export const serviceUserVoteDefinitionServiceForActiveVoteDefinitionsGlobalImpl =
  new ServiceUserVoteDefinitionServiceForActiveVoteDefinitionsGlobalImpl(judoAxiosProvider);
export const serviceUserVoteDefinitionServiceForActiveVoteDefinitionsInActivityCitiesImpl =
  new ServiceUserVoteDefinitionServiceForActiveVoteDefinitionsInActivityCitiesImpl(judoAxiosProvider);
export const serviceUserVoteDefinitionServiceForActiveVoteDefinitionsInActivityCountiesImpl =
  new ServiceUserVoteDefinitionServiceForActiveVoteDefinitionsInActivityCountiesImpl(judoAxiosProvider);
export const serviceUserVoteDefinitionServiceForActiveVoteDefinitionsInActivityDistrictsImpl =
  new ServiceUserVoteDefinitionServiceForActiveVoteDefinitionsInActivityDistrictsImpl(judoAxiosProvider);
export const serviceUserVoteDefinitionServiceForActiveVoteDefinitionsInResidentCityImpl =
  new ServiceUserVoteDefinitionServiceForActiveVoteDefinitionsInResidentCityImpl(judoAxiosProvider);
export const serviceUserVoteDefinitionServiceForActiveVoteDefinitionsInResidentCountyImpl =
  new ServiceUserVoteDefinitionServiceForActiveVoteDefinitionsInResidentCountyImpl(judoAxiosProvider);
export const serviceUserVoteDefinitionServiceForActiveVoteDefinitionsInResidentDistrictImpl =
  new ServiceUserVoteDefinitionServiceForActiveVoteDefinitionsInResidentDistrictImpl(judoAxiosProvider);
export const serviceUserVoteDefinitionServiceForOwnedVoteDefinitionsImpl =
  new ServiceUserVoteDefinitionServiceForOwnedVoteDefinitionsImpl(judoAxiosProvider);
export const serviceVoteDefinitionServiceForIssueImpl = new ServiceVoteDefinitionServiceForIssueImpl(judoAxiosProvider);
export const serviceVoteEntryServiceForVoteDefinitionImpl = new ServiceVoteEntryServiceForVoteDefinitionImpl(
  judoAxiosProvider,
);
export const serviceYesNoAbstainVoteDefinitionServiceForIssueImpl =
  new ServiceYesNoAbstainVoteDefinitionServiceForIssueImpl(judoAxiosProvider);
export const serviceYesNoAbstainVoteDefinitionServiceForOwnerImpl =
  new ServiceYesNoAbstainVoteDefinitionServiceForOwnerImpl(judoAxiosProvider);
export const serviceYesNoAbstainVoteDefinitionServiceForUserVoteEntryImpl =
  new ServiceYesNoAbstainVoteDefinitionServiceForUserVoteEntryImpl(judoAxiosProvider);
export const serviceYesNoAbstainVoteDefinitionServiceForVoteEntriesImpl =
  new ServiceYesNoAbstainVoteDefinitionServiceForVoteEntriesImpl(judoAxiosProvider);
export const serviceYesNoAbstainVoteEntryServiceForOwnerImpl = new ServiceYesNoAbstainVoteEntryServiceForOwnerImpl(
  judoAxiosProvider,
);
export const serviceYesNoVoteDefinitionServiceForIssueImpl = new ServiceYesNoVoteDefinitionServiceForIssueImpl(
  judoAxiosProvider,
);
export const serviceYesNoVoteDefinitionServiceForOwnerImpl = new ServiceYesNoVoteDefinitionServiceForOwnerImpl(
  judoAxiosProvider,
);
export const serviceYesNoVoteDefinitionServiceForUserVoteEntryImpl =
  new ServiceYesNoVoteDefinitionServiceForUserVoteEntryImpl(judoAxiosProvider);
export const serviceYesNoVoteDefinitionServiceForVoteEntriesImpl =
  new ServiceYesNoVoteDefinitionServiceForVoteEntriesImpl(judoAxiosProvider);
export const serviceYesNoVoteEntryServiceForOwnerImpl = new ServiceYesNoVoteEntryServiceForOwnerImpl(judoAxiosProvider);

export const closeDebateInputServiceForClassImpl = new CloseDebateInputServiceForClassImpl(judoAxiosProvider);
export const closeDebateOutputVoteDefinitionReferenceServiceForClassImpl =
  new CloseDebateOutputVoteDefinitionReferenceServiceForClassImpl(judoAxiosProvider);
export const createArgumentInputServiceForClassImpl = new CreateArgumentInputServiceForClassImpl(judoAxiosProvider);
export const createCommentInputServiceForClassImpl = new CreateCommentInputServiceForClassImpl(judoAxiosProvider);
export const ratingVoteInputServiceForClassImpl = new RatingVoteInputServiceForClassImpl(judoAxiosProvider);
export const selectAnswerVoteSelectionServiceForClassImpl = new SelectAnswerVoteSelectionServiceForClassImpl(
  judoAxiosProvider,
);
export const yesNoAbstainVoteInputServiceForClassImpl = new YesNoAbstainVoteInputServiceForClassImpl(judoAxiosProvider);
export const yesNoVoteInputServiceForClassImpl = new YesNoVoteInputServiceForClassImpl(judoAxiosProvider);
export const serviceCityServiceForClassImpl = new ServiceCityServiceForClassImpl(judoAxiosProvider);
export const serviceCommentServiceForClassImpl = new ServiceCommentServiceForClassImpl(judoAxiosProvider);
export const serviceConServiceForClassImpl = new ServiceConServiceForClassImpl(judoAxiosProvider);
export const serviceConParentServiceForClassImpl = new ServiceConParentServiceForClassImpl(judoAxiosProvider);
export const serviceCountyServiceForClassImpl = new ServiceCountyServiceForClassImpl(judoAxiosProvider);
export const serviceCreateIssueInputServiceForClassImpl = new ServiceCreateIssueInputServiceForClassImpl(
  judoAxiosProvider,
);
export const serviceCreateUserInputServiceForClassImpl = new ServiceCreateUserInputServiceForClassImpl(
  judoAxiosProvider,
);
export const serviceDashboardServiceForClassImpl = new ServiceDashboardServiceForClassImpl(judoAxiosProvider);
export const serviceDistrictServiceForClassImpl = new ServiceDistrictServiceForClassImpl(judoAxiosProvider);
export const serviceIssueServiceForClassImpl = new ServiceIssueServiceForClassImpl(judoAxiosProvider);
export const serviceIssueAttachmentServiceForClassImpl = new ServiceIssueAttachmentServiceForClassImpl(
  judoAxiosProvider,
);
export const serviceIssueCategoryServiceForClassImpl = new ServiceIssueCategoryServiceForClassImpl(judoAxiosProvider);
export const serviceIssueTypeServiceForClassImpl = new ServiceIssueTypeServiceForClassImpl(judoAxiosProvider);
export const serviceProServiceForClassImpl = new ServiceProServiceForClassImpl(judoAxiosProvider);
export const serviceProParentServiceForClassImpl = new ServiceProParentServiceForClassImpl(judoAxiosProvider);
export const serviceRatingVoteDefinitionServiceForClassImpl = new ServiceRatingVoteDefinitionServiceForClassImpl(
  judoAxiosProvider,
);
export const serviceRatingVoteEntryServiceForClassImpl = new ServiceRatingVoteEntryServiceForClassImpl(
  judoAxiosProvider,
);
export const serviceSelectAnswerVoteDefinitionServiceForClassImpl =
  new ServiceSelectAnswerVoteDefinitionServiceForClassImpl(judoAxiosProvider);
export const serviceSelectAnswerVoteEntryServiceForClassImpl = new ServiceSelectAnswerVoteEntryServiceForClassImpl(
  judoAxiosProvider,
);
export const serviceSelectAnswerVoteSelectionServiceForClassImpl =
  new ServiceSelectAnswerVoteSelectionServiceForClassImpl(judoAxiosProvider);
export const serviceServicePrincipalUserServiceForClassImpl = new ServiceServicePrincipalUserServiceForClassImpl(
  judoAxiosProvider,
);
export const serviceServiceUserServiceForClassImpl = new ServiceServiceUserServiceForClassImpl(judoAxiosProvider);
export const serviceSimpleVoteServiceForClassImpl = new ServiceSimpleVoteServiceForClassImpl(judoAxiosProvider);
export const serviceUserIssuesServiceForClassImpl = new ServiceUserIssuesServiceForClassImpl(judoAxiosProvider);
export const serviceUserManagerServiceForClassImpl = new ServiceUserManagerServiceForClassImpl(judoAxiosProvider);
export const serviceUserProfileServiceForClassImpl = new ServiceUserProfileServiceForClassImpl(judoAxiosProvider);
export const serviceUserVoteDefinitionServiceForClassImpl = new ServiceUserVoteDefinitionServiceForClassImpl(
  judoAxiosProvider,
);
export const serviceVoteDefinitionServiceForClassImpl = new ServiceVoteDefinitionServiceForClassImpl(judoAxiosProvider);
export const serviceVoteEntryServiceForClassImpl = new ServiceVoteEntryServiceForClassImpl(judoAxiosProvider);
export const serviceYesNoAbstainVoteDefinitionServiceForClassImpl =
  new ServiceYesNoAbstainVoteDefinitionServiceForClassImpl(judoAxiosProvider);
export const serviceYesNoAbstainVoteEntryServiceForClassImpl = new ServiceYesNoAbstainVoteEntryServiceForClassImpl(
  judoAxiosProvider,
);
export const serviceYesNoVoteDefinitionServiceForClassImpl = new ServiceYesNoVoteDefinitionServiceForClassImpl(
  judoAxiosProvider,
);
export const serviceYesNoVoteEntryServiceForClassImpl = new ServiceYesNoVoteEntryServiceForClassImpl(judoAxiosProvider);
