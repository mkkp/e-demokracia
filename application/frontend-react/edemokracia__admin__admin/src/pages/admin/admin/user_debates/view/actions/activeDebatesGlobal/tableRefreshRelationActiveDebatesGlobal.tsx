// Action: RefreshRelationAction

export type TableRefreshRelationActiveDebatesGlobalAction = () => (fetchData: () => Promise<void>) => Promise<void>;

export const useTableRefreshRelationActiveDebatesGlobalAction: TableRefreshRelationActiveDebatesGlobalAction = () => {
  return async function tableRefreshRelationActiveDebatesGlobalAction(fetchData: () => Promise<void>) {
    return fetchData();
  };
};
