// Action: RefreshAction

export type PageRefreshAdminIssueTypesAction = () => (fetchData: () => Promise<void>) => Promise<void>;

export const usePageRefreshAdminIssueTypesAction: PageRefreshAdminIssueTypesAction = () => {
  return async function pageRefreshAdminIssueTypesAction(fetchData: () => Promise<void>) {
    return fetchData();
  };
};
