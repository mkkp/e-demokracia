// Action: RefreshRelationAction

export type TableRefreshRelationOwnedVoteDefinitionsAction = () => (fetchData: () => Promise<void>) => Promise<void>;

export const useTableRefreshRelationOwnedVoteDefinitionsAction: TableRefreshRelationOwnedVoteDefinitionsAction = () => {
  return async function tableRefreshRelationOwnedVoteDefinitionsAction(fetchData: () => Promise<void>) {
    return fetchData();
  };
};
