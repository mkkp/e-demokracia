// Action: RefreshAction

export type PageRefreshActiveDebatesInResidentCityAction = () => (fetchData: () => Promise<void>) => Promise<void>;

export const usePageRefreshActiveDebatesInResidentCityAction: PageRefreshActiveDebatesInResidentCityAction = () => {
  return async function pageRefreshActiveDebatesInResidentCityAction(fetchData: () => Promise<void>) {
    return fetchData();
  };
};
