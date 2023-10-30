// Action: RefreshAction

export type PageRefreshActiveDebatesInResidentCountyAction = () => (fetchData: () => Promise<void>) => Promise<void>;

export const usePageRefreshActiveDebatesInResidentCountyAction: PageRefreshActiveDebatesInResidentCountyAction = () => {
  return async function pageRefreshActiveDebatesInResidentCountyAction(fetchData: () => Promise<void>) {
    return fetchData();
  };
};
