// Action: RefreshAction

export type PageRefreshUserIssueAction = () => (fetchData: () => Promise<void>) => Promise<void>;

export const usePageRefreshUserIssueAction: PageRefreshUserIssueAction = () => {
  return async function pageRefreshUserIssueAction(fetchData: () => Promise<void>) {
    return fetchData();
  };
};
