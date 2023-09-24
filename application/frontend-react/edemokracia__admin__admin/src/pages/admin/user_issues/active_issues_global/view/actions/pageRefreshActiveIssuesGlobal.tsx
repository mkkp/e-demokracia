// Action: RefreshAction

export type PageRefreshActiveIssuesGlobalAction = () => (fetchData: () => Promise<void>) => Promise<void>;

export const usePageRefreshActiveIssuesGlobalAction: PageRefreshActiveIssuesGlobalAction = () => {
  return async function pageRefreshActiveIssuesGlobalAction(fetchData: () => Promise<void>) {
    return fetchData();
  };
};
