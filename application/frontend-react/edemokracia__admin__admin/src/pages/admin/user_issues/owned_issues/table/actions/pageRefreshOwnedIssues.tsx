// Action: RefreshAction

export type PageRefreshOwnedIssuesAction = () => (fetchData: () => Promise<void>) => Promise<void>;

export const usePageRefreshOwnedIssuesAction: PageRefreshOwnedIssuesAction = () => {
  return async function pageRefreshOwnedIssuesAction(fetchData: () => Promise<void>) {
    return fetchData();
  };
};
