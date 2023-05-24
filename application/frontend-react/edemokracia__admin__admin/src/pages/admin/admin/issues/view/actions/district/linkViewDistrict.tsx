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
  AdminDistrict,
  AdminDistrictQueryCustomizer,
  AdminDistrictStored,
  AdminIssue,
  AdminIssueStored,
} from '~/generated/data-api';
import { useJudoNavigation } from '~/components';

export const LINK_VIEW_DISTRICT_ACTION_INTERFACE_KEY = 'LinkViewDistrictAction';
export type LinkViewDistrictAction = () => (
  owner: JudoIdentifiable<AdminIssue>,
  entry: AdminDistrictStored,
) => Promise<void>;

export const useLinkViewDistrictAction: LinkViewDistrictAction = () => {
  const { navigate } = useJudoNavigation();
  const { service: useCustomNavigation } = useTrackService<LinkViewDistrictAction>(
    `(${OBJECTCLASS}=${LINK_VIEW_DISTRICT_ACTION_INTERFACE_KEY})`,
  );

  if (useCustomNavigation) {
    const customNavigation = useCustomNavigation();
    return customNavigation;
  }

  return async function (owner: JudoIdentifiable<AdminIssue>, entry: AdminDistrictStored) {
    navigate(`admin/issue/district/view/${entry.__signedIdentifier}`);
  };
};
