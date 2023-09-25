// Action: RefreshAction

export type PageRefreshDashboardHomeAction = () => (fetchData: () => Promise<void>) => Promise<void>;

export const usePageRefreshDashboardHomeAction: PageRefreshDashboardHomeAction = () => {
  return async function pageRefreshDashboardHomeAction(fetchData: () => Promise<void>) {
    return fetchData();
  };
};
