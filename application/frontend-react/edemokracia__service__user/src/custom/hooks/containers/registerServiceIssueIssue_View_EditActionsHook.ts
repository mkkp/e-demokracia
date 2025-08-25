import type { BundleContext } from '@pandino/pandino-api';
import { useTranslation } from 'react-i18next';
import { useJudoNavigation } from '~/components';
import { SERVICE_ISSUE_ISSUE_VIEW_EDIT_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY } from '~/containers/Service/Issue/Issue_View_Edit/customization';
import type { ServiceIssueIssue_View_EditContainerHook } from '~/containers/Service/Issue/Issue_View_Edit/customization';
import { setIssueScopeForIssue } from '~/custom/services/issueService';
import { useViewData } from '~/hooks';
import type { IssueStatus } from '~/services/data-api/model/IssueStatus';
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
import type { VoteType } from '~/services/data-api/model/VoteType';

/**
 * XMIID: User/(esm/_qCa1YGksEe25ONJ3V89cVA)/TransferObjectViewPageContainer
 * Name: service::Issue::Issue_View_Edit
 *
 * Notes:
 * Don't forget to remove unused hooks, and related imports afterwards to reduce build time and bundle size!
 */
export function registerServiceIssueIssue_View_EditActionsHook(context: BundleContext) {
  context.registerService<ServiceIssueIssue_View_EditContainerHook>(
    SERVICE_ISSUE_ISSUE_VIEW_EDIT_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY,
    serviceIssueIssue_View_EditActionsHook,
  );
}

const serviceIssueIssue_View_EditActionsHook: ServiceIssueIssue_View_EditContainerHook = (
  data,
  editMode,
  storeDiff,
) => {
  // call other hooks here
  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { getLatestViewData } = useViewData();

  return {
    onIsseScopeBlurAction(data, storeDiff, editMode, submit) {
      setIssueScopeForIssue(data, storeDiff);
    },
  };
};
