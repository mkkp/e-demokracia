// Action: RefreshAction

export type PageRefreshUserOpenIssuesAction = () => (fetchData: () => Promise<void>) => Promise<void>;

export const usePageRefreshUserOpenIssuesAction: PageRefreshUserOpenIssuesAction = () => {
  return async function pageRefreshUserOpenIssuesAction(fetchData: () => Promise<void>) {
    return fetchData();
  };
};
