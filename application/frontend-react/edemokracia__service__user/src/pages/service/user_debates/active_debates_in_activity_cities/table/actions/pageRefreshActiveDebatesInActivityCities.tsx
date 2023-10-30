// Action: RefreshAction

export type PageRefreshActiveDebatesInActivityCitiesAction = () => (fetchData: () => Promise<void>) => Promise<void>;

export const usePageRefreshActiveDebatesInActivityCitiesAction: PageRefreshActiveDebatesInActivityCitiesAction = () => {
  return async function pageRefreshActiveDebatesInActivityCitiesAction(fetchData: () => Promise<void>) {
    return fetchData();
  };
};
