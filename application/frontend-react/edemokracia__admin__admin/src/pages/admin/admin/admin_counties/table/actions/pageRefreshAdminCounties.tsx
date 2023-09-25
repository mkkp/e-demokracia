// Action: RefreshAction

export type PageRefreshAdminCountiesAction = () => (fetchData: () => Promise<void>) => Promise<void>;

export const usePageRefreshAdminCountiesAction: PageRefreshAdminCountiesAction = () => {
  return async function pageRefreshAdminCountiesAction(fetchData: () => Promise<void>) {
    return fetchData();
  };
};
