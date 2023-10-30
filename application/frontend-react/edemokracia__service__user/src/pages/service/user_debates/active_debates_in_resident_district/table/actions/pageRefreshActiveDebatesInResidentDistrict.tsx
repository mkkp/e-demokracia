// Action: RefreshAction

export type PageRefreshActiveDebatesInResidentDistrictAction = () => (fetchData: () => Promise<void>) => Promise<void>;

export const usePageRefreshActiveDebatesInResidentDistrictAction: PageRefreshActiveDebatesInResidentDistrictAction =
  () => {
    return async function pageRefreshActiveDebatesInResidentDistrictAction(fetchData: () => Promise<void>) {
      return fetchData();
    };
  };
