import type { BundleContext } from '@pandino/pandino-api';
import { useTranslation } from 'react-i18next';
import { useJudoNavigation } from '~/components';
import { useServiceIssueAttachmentsRelationFormPage } from '~/dialogs/Service/Issue/Attachments/RelationFormPage/hooks';
import { useServiceIssueAttachmentsRelationViewPage } from '~/dialogs/Service/Issue/Attachments/RelationViewPage/hooks';
import { useServiceIssueCategoriesRelationViewPage } from '~/dialogs/Service/Issue/Categories/RelationViewPage/hooks';
import { useServiceIssueCityRelationViewPage } from '~/dialogs/Service/Issue/City/RelationViewPage/hooks';
import { useServiceIssueConsRelationViewPage } from '~/dialogs/Service/Issue/Cons/RelationViewPage/hooks';
import { useServiceIssueCountyRelationViewPage } from '~/dialogs/Service/Issue/County/RelationViewPage/hooks';
import { useServiceIssueDistrictRelationViewPage } from '~/dialogs/Service/Issue/District/RelationViewPage/hooks';
import { useServiceIssueIssueTypeRelationViewPage } from '~/dialogs/Service/Issue/IssueType/RelationViewPage/hooks';
import { useServiceIssueIssue_View_EditCloseDebateInputForm } from '~/dialogs/Service/Issue/Issue_View_Edit/CloseDebate/Input/Form/hooks';
import { useServiceIssueIssue_View_EditCreateCommentInputForm } from '~/dialogs/Service/Issue/Issue_View_Edit/CreateComment/Input/Form/hooks';
import { useServiceIssueIssue_View_EditCreateConArgumentInputForm } from '~/dialogs/Service/Issue/Issue_View_Edit/CreateConArgument/Input/Form/hooks';
import { useServiceIssueIssue_View_EditCreateProArgumentInputForm } from '~/dialogs/Service/Issue/Issue_View_Edit/CreateProArgument/Input/Form/hooks';
import { useServiceIssueIssue_View_EditDescriptionCategoriesTableAddSelectorPage } from '~/dialogs/Service/Issue/Issue_View_Edit/Description/Categories/TableAddSelectorPage/hooks';
import { useServiceIssueIssue_View_EditDescriptionCityLinkSetSelectorPage } from '~/dialogs/Service/Issue/Issue_View_Edit/Description/City/LinkSetSelectorPage/hooks';
import { useServiceIssueIssue_View_EditDescriptionCountyLinkSetSelectorPage } from '~/dialogs/Service/Issue/Issue_View_Edit/Description/County/LinkSetSelectorPage/hooks';
import { useServiceIssueIssue_View_EditDescriptionDistrictLinkSetSelectorPage } from '~/dialogs/Service/Issue/Issue_View_Edit/Description/District/LinkSetSelectorPage/hooks';
import { useServiceIssueIssue_View_EditIssueIssueTypeLinkSetSelectorPage } from '~/dialogs/Service/Issue/Issue_View_Edit/Issue/IssueType/LinkSetSelectorPage/hooks';
import { useServiceIssueLinksRelationFormPage } from '~/dialogs/Service/Issue/Links/RelationFormPage/hooks';
import { useServiceIssueOwnerRelationViewPage } from '~/dialogs/Service/Issue/Owner/RelationViewPage/hooks';
import { useServiceIssueProsRelationViewPage } from '~/dialogs/Service/Issue/Pros/RelationViewPage/hooks';
import { useViewData } from '~/hooks';
import {
  SERVICE_USER_ISSUES_ACCESS_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY,
  type ServiceIssueIssue_View_EditActionsHook,
} from '~/pages/Service/User/Issues/AccessViewPage/customization';
import { routeToServiceIssueCommentsRelationViewPage } from '~/routes';
import { routeToServiceIssueLinksRelationViewPage } from '~/routes';
import { IssueScope } from '~/services/data-api/model/IssueScope';
import { IssueStatus } from '~/services/data-api/model/IssueStatus';
import type { ServiceCity, ServiceCityStored } from '~/services/data-api/model/ServiceCity';
import type { ServiceComment, ServiceCommentStored } from '~/services/data-api/model/ServiceComment';
import type { ServiceCon, ServiceConStored } from '~/services/data-api/model/ServiceCon';
import type { ServiceCounty, ServiceCountyStored } from '~/services/data-api/model/ServiceCounty';
import type { ServiceDistrict, ServiceDistrictStored } from '~/services/data-api/model/ServiceDistrict';
import type { ServiceIssue, ServiceIssueStored } from '~/services/data-api/model/ServiceIssue';
import type {
  ServiceIssueAttachment,
  ServiceIssueAttachmentStored,
} from '~/services/data-api/model/ServiceIssueAttachment';
import type { ServiceIssueCategory, ServiceIssueCategoryStored } from '~/services/data-api/model/ServiceIssueCategory';
import type { ServiceIssueLink, ServiceIssueLinkStored } from '~/services/data-api/model/ServiceIssueLink';
import type { ServiceIssueType, ServiceIssueTypeStored } from '~/services/data-api/model/ServiceIssueType';
import type { ServicePro, ServiceProStored } from '~/services/data-api/model/ServicePro';
import type { ServiceServiceUser, ServiceServiceUserStored } from '~/services/data-api/model/ServiceServiceUser';
import { VoteType } from '~/services/data-api/model/VoteType';
import type { ServiceCityQueryCustomizer } from '~/services/data-api/rest/ServiceCityQueryCustomizer';
import type { ServiceCommentQueryCustomizer } from '~/services/data-api/rest/ServiceCommentQueryCustomizer';
import type { ServiceConQueryCustomizer } from '~/services/data-api/rest/ServiceConQueryCustomizer';
import type { ServiceCountyQueryCustomizer } from '~/services/data-api/rest/ServiceCountyQueryCustomizer';
import type { ServiceDistrictQueryCustomizer } from '~/services/data-api/rest/ServiceDistrictQueryCustomizer';
import type { ServiceIssueAttachmentQueryCustomizer } from '~/services/data-api/rest/ServiceIssueAttachmentQueryCustomizer';
import type { ServiceIssueCategoryQueryCustomizer } from '~/services/data-api/rest/ServiceIssueCategoryQueryCustomizer';
import type { ServiceIssueLinkQueryCustomizer } from '~/services/data-api/rest/ServiceIssueLinkQueryCustomizer';
import type { ServiceIssueQueryCustomizer } from '~/services/data-api/rest/ServiceIssueQueryCustomizer';
import type { ServiceIssueTypeQueryCustomizer } from '~/services/data-api/rest/ServiceIssueTypeQueryCustomizer';
import type { ServiceProQueryCustomizer } from '~/services/data-api/rest/ServiceProQueryCustomizer';
import type { ServiceServiceUserQueryCustomizer } from '~/services/data-api/rest/ServiceServiceUserQueryCustomizer';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { UserServiceForIssuesImpl } from '~/services/data-axios/UserServiceForIssuesImpl';

/**
 * XMIID: User/(esm/__g_vkFvLEe6jm_SkPSYEYw)/AccessViewPageDefinition
 * Name: service::User::issues::AccessViewPage
 *
 * Notes:
 * Don't forget to remove unused hooks, and related imports afterwards to reduce build time and bundle size!
 */
export function registerServiceUserIssuesAccessViewPageActionsHook(context: BundleContext) {
  context.registerService<ServiceIssueIssue_View_EditActionsHook>(
    SERVICE_USER_ISSUES_ACCESS_VIEW_PAGE_ACTIONS_HOOK_INTERFACE_KEY,
    ServiceUserIssuesAccessViewPageActionsHook,
  );
}

const ServiceUserIssuesAccessViewPageActionsHook: ServiceIssueIssue_View_EditActionsHook = (
  data,
  editMode,
  storeDiff,
  refresh,
  submit,
) => {
  // call other hooks here
  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { getLatestViewData } = useViewData();
  const openServiceIssueIssue_View_EditCloseDebateInputForm = useServiceIssueIssue_View_EditCloseDebateInputForm();
  const openServiceIssueIssue_View_EditCreateCommentInputForm = useServiceIssueIssue_View_EditCreateCommentInputForm();
  const openServiceIssueIssue_View_EditCreateConArgumentInputForm =
    useServiceIssueIssue_View_EditCreateConArgumentInputForm();
  const openServiceIssueIssue_View_EditCreateProArgumentInputForm =
    useServiceIssueIssue_View_EditCreateProArgumentInputForm();
  const openServiceIssueIssue_View_EditDescriptionCategoriesTableAddSelectorPage =
    useServiceIssueIssue_View_EditDescriptionCategoriesTableAddSelectorPage();
  const openServiceIssueIssue_View_EditDescriptionCityLinkSetSelectorPage =
    useServiceIssueIssue_View_EditDescriptionCityLinkSetSelectorPage();
  const openServiceIssueIssue_View_EditDescriptionCountyLinkSetSelectorPage =
    useServiceIssueIssue_View_EditDescriptionCountyLinkSetSelectorPage();
  const openServiceIssueIssue_View_EditDescriptionDistrictLinkSetSelectorPage =
    useServiceIssueIssue_View_EditDescriptionDistrictLinkSetSelectorPage();
  const openServiceIssueIssue_View_EditIssueIssueTypeLinkSetSelectorPage =
    useServiceIssueIssue_View_EditIssueIssueTypeLinkSetSelectorPage();
  const openServiceIssueAttachmentsRelationFormPage = useServiceIssueAttachmentsRelationFormPage();
  const openServiceIssueAttachmentsRelationViewPage = useServiceIssueAttachmentsRelationViewPage();
  const openServiceIssueCategoriesRelationViewPage = useServiceIssueCategoriesRelationViewPage();
  const openServiceIssueCityRelationViewPage = useServiceIssueCityRelationViewPage();
  const openServiceIssueConsRelationViewPage = useServiceIssueConsRelationViewPage();
  const openServiceIssueCountyRelationViewPage = useServiceIssueCountyRelationViewPage();
  const openServiceIssueDistrictRelationViewPage = useServiceIssueDistrictRelationViewPage();
  const openServiceIssueIssueTypeRelationViewPage = useServiceIssueIssueTypeRelationViewPage();
  const openServiceIssueLinksRelationFormPage = useServiceIssueLinksRelationFormPage();
  const openServiceIssueOwnerRelationViewPage = useServiceIssueOwnerRelationViewPage();
  const openServiceIssueProsRelationViewPage = useServiceIssueProsRelationViewPage();
  const userServiceForIssuesImpl = new UserServiceForIssuesImpl(judoAxiosProvider);

  return {
    // implement actions here
  };
};
