// Action: RefreshAction

export type PageRefreshActiveIssuesAction = () => (fetchData: () => Promise<void>) => Promise<void>;

export const usePageRefreshActiveIssuesAction: PageRefreshActiveIssuesAction = () => {
  return async function pageRefreshActiveIssuesAction(fetchData: () => Promise<void>) {
    return fetchData();
  };
};
