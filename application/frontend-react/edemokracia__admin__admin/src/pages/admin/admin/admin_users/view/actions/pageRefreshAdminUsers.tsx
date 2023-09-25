// Action: RefreshAction

export type PageRefreshAdminUsersAction = () => (fetchData: () => Promise<void>) => Promise<void>;

export const usePageRefreshAdminUsersAction: PageRefreshAdminUsersAction = () => {
  return async function pageRefreshAdminUsersAction(fetchData: () => Promise<void>) {
    return fetchData();
  };
};
