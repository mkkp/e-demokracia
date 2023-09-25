// Action: RefreshAction

export type PageRefreshAdminIssuesAction = () => (fetchData: () => Promise<void>) => Promise<void>;

export const usePageRefreshAdminIssuesAction: PageRefreshAdminIssuesAction = () => {
  return async function pageRefreshAdminIssuesAction(fetchData: () => Promise<void>) {
    return fetchData();
  };
};
