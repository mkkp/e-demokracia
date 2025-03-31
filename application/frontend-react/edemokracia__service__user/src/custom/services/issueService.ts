import { To } from 'react-router';
import { routeToServiceUserIssuesAccessViewPage } from '~/routes';
import { IssueScope } from '~/services/data-api/model/IssueScope';
import {
  ServiceCreateIssueInput,
  ServiceCreateIssueInputStored,
} from '~/services/data-api/model/ServiceCreateIssueInput';
import { ServiceIssueStored } from '~/services/data-api/model/ServiceIssue';
import { UserServiceForIssuesImpl } from '~/services/data-axios/UserServiceForIssuesImpl';
import { processQueryCustomizer } from '~/utilities';

export async function setIssueScope(
  data: ServiceCreateIssueInputStored | ServiceCreateIssueInput,
  storeDiff: (attributeName: keyof ServiceCreateIssueInput, value: any) => void,
) {
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

export async function navigateToIssue(
  issue: ServiceIssueStored,
  isssueService: UserServiceForIssuesImpl,
  navigte: (to: To) => void,
) {
  // 1. Retrieve result identifier
  // TODO: Use output as stored type
  const id = (issue as any)!.__identifier;

  // 2. Retrieve signedIdentifier from access
  const idAccessFilterCustomizer: any = {
    _identifier: id,
  };

  const res = await isssueService.list(undefined, processQueryCustomizer(idAccessFilterCustomizer));

  // await onClose();

  // 3. Open view page in access
  navigte(routeToServiceUserIssuesAccessViewPage(res.data[0].__signedIdentifier));
}
