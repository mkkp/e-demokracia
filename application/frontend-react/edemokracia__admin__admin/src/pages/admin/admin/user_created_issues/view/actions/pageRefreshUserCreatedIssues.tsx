// Action: RefreshAction

export type PageRefreshUserCreatedIssuesAction = () => (fetchData: () => Promise<void>) => Promise<void>;

export const usePageRefreshUserCreatedIssuesAction: PageRefreshUserCreatedIssuesAction = () => {
  return async function pageRefreshUserCreatedIssuesAction(fetchData: () => Promise<void>) {
    return fetchData();
  };
};
