// Action: RefreshAction

export type PageRefreshUserIssuesAction = () => (fetchData: () => Promise<void>) => Promise<void>;

export const usePageRefreshUserIssuesAction: PageRefreshUserIssuesAction = () => {
  return async function pageRefreshUserIssuesAction(fetchData: () => Promise<void>) {
    return fetchData();
  };
};
