// Action: RefreshAction

export type PageRefreshIssuesOwnedAction = () => (fetchData: () => Promise<void>) => Promise<void>;

export const usePageRefreshIssuesOwnedAction: PageRefreshIssuesOwnedAction = () => {
  return async function pageRefreshIssuesOwnedAction(fetchData: () => Promise<void>) {
    return fetchData();
  };
};
