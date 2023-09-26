// Action: RefreshRelationAction

export type TableRefreshRelationOwnedDebatesAction = () => (fetchData: () => Promise<void>) => Promise<void>;

export const useTableRefreshRelationOwnedDebatesAction: TableRefreshRelationOwnedDebatesAction = () => {
  return async function tableRefreshRelationOwnedDebatesAction(fetchData: () => Promise<void>) {
    return fetchData();
  };
};
