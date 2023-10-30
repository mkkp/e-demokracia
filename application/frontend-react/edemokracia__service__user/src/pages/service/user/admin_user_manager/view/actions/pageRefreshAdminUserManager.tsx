// Action: RefreshAction

export type PageRefreshAdminUserManagerAction = () => (fetchData: () => Promise<void>) => Promise<void>;

export const usePageRefreshAdminUserManagerAction: PageRefreshAdminUserManagerAction = () => {
  return async function pageRefreshAdminUserManagerAction(fetchData: () => Promise<void>) {
    return fetchData();
  };
};
