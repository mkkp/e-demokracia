import type { BundleContext } from '@pandino/pandino-api';
import { useTranslation } from 'react-i18next';
import { useJudoNavigation } from '~/components';
import { useServiceCreateIssueInputCreateIssueInput_FormIssueCityLinkSetSelectorPage } from '~/dialogs/Service/CreateIssueInput/CreateIssueInput_Form/Issue/City/LinkSetSelectorPage/hooks';
import { useServiceCreateIssueInputCreateIssueInput_FormIssueCountyLinkSetSelectorPage } from '~/dialogs/Service/CreateIssueInput/CreateIssueInput_Form/Issue/County/LinkSetSelectorPage/hooks';
import { useServiceCreateIssueInputCreateIssueInput_FormIssueDistrictLinkSetSelectorPage } from '~/dialogs/Service/CreateIssueInput/CreateIssueInput_Form/Issue/District/LinkSetSelectorPage/hooks';
import { useServiceCreateIssueInputCreateIssueInput_FormIssueIssueTypeLinkSetSelectorPage } from '~/dialogs/Service/CreateIssueInput/CreateIssueInput_Form/Issue/IssueType/LinkSetSelectorPage/hooks';
import {
  SERVICE_USER_ISSUES_USER_ISSUES_VIEW_EDIT_CREATE_ISSUE_INPUT_FORM_ACTIONS_HOOK_INTERFACE_KEY,
  type ServiceCreateIssueInputCreateIssueInput_FormActionsHook,
} from '~/dialogs/Service/UserIssues/UserIssues_View_Edit/CreateIssue/Input/Form/customization';
import { useViewData } from '~/hooks';
import { routeToServiceUserIssuesUserIssues_View_EditCreateIssueOutputView } from '~/routes';
import { IssueScope } from '~/services/data-api/model/IssueScope';
import type { ServiceCity, ServiceCityStored } from '~/services/data-api/model/ServiceCity';
import type { ServiceCounty, ServiceCountyStored } from '~/services/data-api/model/ServiceCounty';
import type {
  ServiceCreateIssueInput,
  ServiceCreateIssueInputStored,
} from '~/services/data-api/model/ServiceCreateIssueInput';
import type { ServiceDistrict, ServiceDistrictStored } from '~/services/data-api/model/ServiceDistrict';
import type { ServiceIssue, ServiceIssueStored } from '~/services/data-api/model/ServiceIssue';
import type { ServiceIssueType, ServiceIssueTypeStored } from '~/services/data-api/model/ServiceIssueType';
import type { ServiceCityQueryCustomizer } from '~/services/data-api/rest/ServiceCityQueryCustomizer';
import type { ServiceCountyQueryCustomizer } from '~/services/data-api/rest/ServiceCountyQueryCustomizer';
import type { ServiceCreateIssueInputQueryCustomizer } from '~/services/data-api/rest/ServiceCreateIssueInputQueryCustomizer';
import type { ServiceDistrictQueryCustomizer } from '~/services/data-api/rest/ServiceDistrictQueryCustomizer';
import type { ServiceIssueQueryCustomizer } from '~/services/data-api/rest/ServiceIssueQueryCustomizer';
import type { ServiceIssueTypeQueryCustomizer } from '~/services/data-api/rest/ServiceIssueTypeQueryCustomizer';
import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { ServiceUserIssuesServiceImpl } from '~/services/data-axios/ServiceUserIssuesServiceImpl';

/**
 * XMIID: User/(esm/_jK51w1q4Ee6_67aMO2jOsw)/OperationUnmappedInputPageDefinition
 * Name: service::UserIssues::UserIssues_View_Edit::createIssue::Input::Form
 *
 * Notes:
 * Don't forget to remove unused hooks, and related imports afterwards to reduce build time and bundle size!
 */
export function registerServiceUserIssuesUserIssues_View_EditCreateIssueInputFormActionsHook(context: BundleContext) {
  context.registerService<ServiceCreateIssueInputCreateIssueInput_FormActionsHook>(
    SERVICE_USER_ISSUES_USER_ISSUES_VIEW_EDIT_CREATE_ISSUE_INPUT_FORM_ACTIONS_HOOK_INTERFACE_KEY,
    ServiceUserIssuesUserIssues_View_EditCreateIssueInputFormActionsHook,
  );
}

const ServiceUserIssuesUserIssues_View_EditCreateIssueInputFormActionsHook: ServiceCreateIssueInputCreateIssueInput_FormActionsHook =
  (ownerData, data, editMode, storeDiff, submit, onSubmit) => {
    // call other hooks here
    const { t } = useTranslation();
    const { navigate, back } = useJudoNavigation();
    const { getLatestViewData, getRouterPageData } = useViewData();
    const openServiceCreateIssueInputCreateIssueInput_FormIssueCityLinkSetSelectorPage =
      useServiceCreateIssueInputCreateIssueInput_FormIssueCityLinkSetSelectorPage();
    const openServiceCreateIssueInputCreateIssueInput_FormIssueCountyLinkSetSelectorPage =
      useServiceCreateIssueInputCreateIssueInput_FormIssueCountyLinkSetSelectorPage();
    const openServiceCreateIssueInputCreateIssueInput_FormIssueDistrictLinkSetSelectorPage =
      useServiceCreateIssueInputCreateIssueInput_FormIssueDistrictLinkSetSelectorPage();
    const openServiceCreateIssueInputCreateIssueInput_FormIssueIssueTypeLinkSetSelectorPage =
      useServiceCreateIssueInputCreateIssueInput_FormIssueIssueTypeLinkSetSelectorPage();
    const serviceUserIssuesServiceImpl = new ServiceUserIssuesServiceImpl(judoAxiosProvider);

    async function setIssueScope(data: ServiceCreateIssueInputStored | ServiceCreateIssueInput) {
      if (data.isseScope !== undefined && data.isseScope == IssueScope.GLOBAL) {
        storeDiff('isIssueScopeGlobal', true);
        storeDiff('isNotIssueScopeGlobal', false);
        storeDiff('isIssueScopeCounty', false);
        storeDiff('isNotIssueScopeCounty', true);
        storeDiff('isIssueScopeCity', false);
        storeDiff('isNotIssueScopeCity', true);
        storeDiff('isIssueScopeDistrict', false);
        storeDiff('isNotIssueScopeDistrict', true);
      } else if (data.isseScope !== undefined && data.isseScope == IssueScope.COUNTY) {
        storeDiff('isIssueScopeCounty', false);
        storeDiff('isNotIssueScopeGlobal', true);
        storeDiff('isIssueScopeCounty', true);
        storeDiff('isNotIssueScopeCounty', false);
        storeDiff('isIssueScopeCity', false);
        storeDiff('isNotIssueScopeCity', true);
        storeDiff('isIssueScopeDistrict', false);
        storeDiff('isNotIssueScopeDistrict', true);
      } else if (data.isseScope !== undefined && data.isseScope == IssueScope.CITY) {
        storeDiff('isIssueScopeCounty', false);
        storeDiff('isNotIssueScopeGlobal', true);
        storeDiff('isIssueScopeCounty', false);
        storeDiff('isNotIssueScopeCounty', true);
        storeDiff('isIssueScopeCity', true);
        storeDiff('isNotIssueScopeCity', false);
        storeDiff('isIssueScopeDistrict', false);
        storeDiff('isNotIssueScopeDistrict', true);
      } else if (data.isseScope !== undefined && data.isseScope == IssueScope.DISTRICT) {
        storeDiff('isIssueScopeCounty', false);
        storeDiff('isNotIssueScopeGlobal', true);
        storeDiff('isIssueScopeCounty', false);
        storeDiff('isNotIssueScopeCounty', true);
        storeDiff('isIssueScopeCity', false);
        storeDiff('isNotIssueScopeCity', true);
        storeDiff('isIssueScopeDistrict', true);
        storeDiff('isNotIssueScopeDistrict', false);
      }
    }
    return {
      onIsseScopeBlurAction(data, storeDiff, editMode, submit) {
        setIssueScope(data);
      },
    };
  };
