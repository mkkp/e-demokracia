// Action: RefreshAction

export type PageRefreshValueAction = () => (fetchData: () => Promise<void>) => Promise<void>;

export const usePageRefreshValueAction: PageRefreshValueAction = () => {
  return async function pageRefreshValueAction(fetchData: () => Promise<void>) {
    return fetchData();
  };
};
