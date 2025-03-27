import type { BundleContext } from '@pandino/pandino-api';
import { useTranslation } from 'react-i18next';
import { useJudoNavigation } from '~/components';
import { SERVICE_CREATE_ISSUE_INPUT_CREATE_ISSUE_INPUT_FORM_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY } from '~/containers/Service/CreateIssueInput/CreateIssueInput_Form/customization';
import type { ServiceCreateIssueInputCreateIssueInput_FormContainerHook } from '~/containers/Service/CreateIssueInput/CreateIssueInput_Form/customization';
import { useViewData } from '~/hooks';
import { IssueScope } from '~/services/data-api/model/IssueScope';
import type { ServiceCity, ServiceCityStored } from '~/services/data-api/model/ServiceCity';
import type { ServiceCounty, ServiceCountyStored } from '~/services/data-api/model/ServiceCounty';
import type {
  ServiceCreateIssueInput,
  ServiceCreateIssueInputStored,
} from '~/services/data-api/model/ServiceCreateIssueInput';
import type { ServiceDistrict, ServiceDistrictStored } from '~/services/data-api/model/ServiceDistrict';
import type { ServiceIssueType, ServiceIssueTypeStored } from '~/services/data-api/model/ServiceIssueType';

/**
 * XMIID: User/(esm/_oCqSgIeIEe2kLcMqsIbMgQ)/TransferObjectFormPageContainer
 * Name: service::CreateIssueInput::CreateIssueInput_Form
 *
 * Notes:
 * Don't forget to remove unused hooks, and related imports afterwards to reduce build time and bundle size!
 */
export function registerServiceCreateIssueInputCreateIssueInput_FormActionsHook(context: BundleContext) {
  context.registerService<ServiceCreateIssueInputCreateIssueInput_FormContainerHook>(
    SERVICE_CREATE_ISSUE_INPUT_CREATE_ISSUE_INPUT_FORM_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY,
    serviceCreateIssueInputCreateIssueInput_FormActionsHook,
  );
}

const serviceCreateIssueInputCreateIssueInput_FormActionsHook: ServiceCreateIssueInputCreateIssueInput_FormContainerHook =
  (data, editMode, storeDiff) => {
    // call other hooks here
    const { t } = useTranslation();
    const { navigate, back } = useJudoNavigation();
    const { getLatestViewData } = useViewData();

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
