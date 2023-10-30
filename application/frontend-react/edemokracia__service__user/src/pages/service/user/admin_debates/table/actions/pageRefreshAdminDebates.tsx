// Action: RefreshAction

export type PageRefreshAdminDebatesAction = () => (fetchData: () => Promise<void>) => Promise<void>;

export const usePageRefreshAdminDebatesAction: PageRefreshAdminDebatesAction = () => {
  return async function pageRefreshAdminDebatesAction(fetchData: () => Promise<void>) {
    return fetchData();
  };
};
