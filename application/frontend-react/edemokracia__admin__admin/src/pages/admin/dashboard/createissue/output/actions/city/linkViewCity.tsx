//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getActionsForPages(#application)
// Path expression: #pagePath(#getActionContainer(#self))+'actions/'+#pageActionPathSuffix(#self)+'.tsx'
// Template name: actor/src/pages/actions/action.tsx
// Template file: actor/src/pages/actions/action.tsx.hbs
// Action: ViewAction

import { OBJECTCLASS } from '@pandino/pandino-api';
import { useTrackService } from '@pandino/react-hooks';
import type { JudoIdentifiable } from '@judo/data-api-common';
import type {
  AdminCity,
  AdminCityQueryCustomizer,
  AdminCityStored,
  AdminIssue,
  AdminIssueStored,
} from '~/generated/data-api';
import { useJudoNavigation } from '~/components';
import { routeToAdminIssueCityView } from '~/routes';

export const LINK_VIEW_CITY_ACTION_INTERFACE_KEY = 'LinkViewCityAction';
export type LinkViewCityAction = () => (owner: JudoIdentifiable<AdminIssue>, entry: AdminCityStored) => Promise<void>;

export const useLinkViewCityAction: LinkViewCityAction = () => {
  const { navigate } = useJudoNavigation();
  const { service: useCustomNavigation } = useTrackService<LinkViewCityAction>(
    `(${OBJECTCLASS}=${LINK_VIEW_CITY_ACTION_INTERFACE_KEY})`,
  );

  if (useCustomNavigation) {
    const customNavigation = useCustomNavigation();
    return customNavigation;
  }

  return async function (owner: JudoIdentifiable<AdminIssue>, entry: AdminCityStored) {
    navigate(routeToAdminIssueCityView(entry.__signedIdentifier));
  };
};
