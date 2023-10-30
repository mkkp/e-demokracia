// Action: RefreshRelationAction

export type TableRefreshRelationIssuesOwnedAction = () => (fetchData: () => Promise<void>) => Promise<void>;

export const useTableRefreshRelationIssuesOwnedAction: TableRefreshRelationIssuesOwnedAction = () => {
  return async function tableRefreshRelationIssuesOwnedAction(fetchData: () => Promise<void>) {
    return fetchData();
  };
};
