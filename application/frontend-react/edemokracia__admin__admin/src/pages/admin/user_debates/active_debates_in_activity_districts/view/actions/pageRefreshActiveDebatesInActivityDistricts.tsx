// Action: RefreshAction

export type PageRefreshActiveDebatesInActivityDistrictsAction = () => (fetchData: () => Promise<void>) => Promise<void>;

export const usePageRefreshActiveDebatesInActivityDistrictsAction: PageRefreshActiveDebatesInActivityDistrictsAction =
  () => {
    return async function pageRefreshActiveDebatesInActivityDistrictsAction(fetchData: () => Promise<void>) {
      return fetchData();
    };
  };
