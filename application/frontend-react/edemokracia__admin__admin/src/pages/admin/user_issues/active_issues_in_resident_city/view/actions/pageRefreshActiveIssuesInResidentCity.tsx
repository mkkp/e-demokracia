// Action: RefreshAction

export type PageRefreshActiveIssuesInResidentCityAction = () => (fetchData: () => Promise<void>) => Promise<void>;

export const usePageRefreshActiveIssuesInResidentCityAction: PageRefreshActiveIssuesInResidentCityAction = () => {
  return async function pageRefreshActiveIssuesInResidentCityAction(fetchData: () => Promise<void>) {
    return fetchData();
  };
};
