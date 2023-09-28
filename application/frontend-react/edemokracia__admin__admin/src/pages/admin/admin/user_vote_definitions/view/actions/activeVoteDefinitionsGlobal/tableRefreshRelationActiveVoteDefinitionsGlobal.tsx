// Action: RefreshRelationAction

export type TableRefreshRelationActiveVoteDefinitionsGlobalAction = () => (
  fetchData: () => Promise<void>,
) => Promise<void>;

export const useTableRefreshRelationActiveVoteDefinitionsGlobalAction: TableRefreshRelationActiveVoteDefinitionsGlobalAction =
  () => {
    return async function tableRefreshRelationActiveVoteDefinitionsGlobalAction(fetchData: () => Promise<void>) {
      return fetchData();
    };
  };
