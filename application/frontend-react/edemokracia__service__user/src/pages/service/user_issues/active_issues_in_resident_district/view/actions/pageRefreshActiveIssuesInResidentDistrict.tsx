// Action: RefreshAction

export type PageRefreshActiveIssuesInResidentDistrictAction = () => (fetchData: () => Promise<void>) => Promise<void>;

export const usePageRefreshActiveIssuesInResidentDistrictAction: PageRefreshActiveIssuesInResidentDistrictAction =
  () => {
    return async function pageRefreshActiveIssuesInResidentDistrictAction(fetchData: () => Promise<void>) {
      return fetchData();
    };
  };
