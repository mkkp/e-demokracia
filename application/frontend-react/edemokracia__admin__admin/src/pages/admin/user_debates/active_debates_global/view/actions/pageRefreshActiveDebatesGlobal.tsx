// Action: RefreshAction

export type PageRefreshActiveDebatesGlobalAction = () => (fetchData: () => Promise<void>) => Promise<void>;

export const usePageRefreshActiveDebatesGlobalAction: PageRefreshActiveDebatesGlobalAction = () => {
  return async function pageRefreshActiveDebatesGlobalAction(fetchData: () => Promise<void>) {
    return fetchData();
  };
};
