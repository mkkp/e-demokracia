///////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// ------------------------------
// Factory expression: #getActionsForPages(#application)
// Path expression: #pagePath(#self.value)+'actions/'+#pageActionPathSuffix(#self.key,#self.value)+'.tsx'
// Template name: actor/src/pages/actions/action.tsx.hbs
// Action name: edemokracia::admin::Admin::edemokracia::Debate::createdBy#PageRefresh
// Action owner name: edemokracia::Debate.createdBy#View
// Action DataElement name: createdBy
// Action DataElement owner name: edemokracia::Debate
// Action DataElement target name: edemokracia::User
// Owner Page name: edemokracia::Debate.createdBy#View
// Action: RefreshAction

export type PageRefreshCreatedByAction = () => (fetchData: () => Promise<void>) => Promise<void>;

export const usePageRefreshCreatedByAction: PageRefreshCreatedByAction = () => {
  return async function pageRefreshCreatedByAction(fetchData: () => Promise<void>) {
    return fetchData();
  };
};