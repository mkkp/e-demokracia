// Action: RefreshRelationAction

export type TableRefreshRelationUsersAction = () => (fetchData: () => Promise<void>) => Promise<void>;

export const useTableRefreshRelationUsersAction: TableRefreshRelationUsersAction = () => {
  return async function tableRefreshRelationUsersAction(fetchData: () => Promise<void>) {
    return fetchData();
  };
};
