///////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// ------------------------------
// Factory expression: #getActionsForPages(#application)
// Path expression: #pagePath(#self.value)+'actions/'+#pageActionPathSuffix(#self.key,#self.value)+'.tsx'
// Template name: actor/src/pages/actions/action.tsx.hbs
// Action name: edemokracia::admin::Admin::edemokracia::Issue::owner#PageRefresh
// Action owner name: edemokracia::Issue.owner#View
// Action DataElement name: owner
// Action DataElement owner name: edemokracia::Issue
// Action DataElement target name: edemokracia::User
// Owner Page name: edemokracia::Issue.owner#View
// Action: RefreshAction

export type PageRefreshOwnerAction = () => (fetchData: () => Promise<void>) => Promise<void>;

export const usePageRefreshOwnerAction: PageRefreshOwnerAction = () => {
  return async function pageRefreshOwnerAction(fetchData: () => Promise<void>) {
    return fetchData();
  };
};
