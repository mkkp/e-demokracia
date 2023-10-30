// Action: RefreshAction

export type PageRefreshActiveDebatesInActivityCountiesAction = () => (fetchData: () => Promise<void>) => Promise<void>;

export const usePageRefreshActiveDebatesInActivityCountiesAction: PageRefreshActiveDebatesInActivityCountiesAction =
  () => {
    return async function pageRefreshActiveDebatesInActivityCountiesAction(fetchData: () => Promise<void>) {
      return fetchData();
    };
  };
