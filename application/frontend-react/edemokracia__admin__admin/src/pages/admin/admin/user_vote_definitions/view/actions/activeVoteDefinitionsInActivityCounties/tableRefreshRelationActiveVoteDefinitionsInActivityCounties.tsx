// Action: RefreshRelationAction

export type TableRefreshRelationActiveVoteDefinitionsInActivityCountiesAction = () => (
  fetchData: () => Promise<void>,
) => Promise<void>;

export const useTableRefreshRelationActiveVoteDefinitionsInActivityCountiesAction: TableRefreshRelationActiveVoteDefinitionsInActivityCountiesAction =
  () => {
    return async function tableRefreshRelationActiveVoteDefinitionsInActivityCountiesAction(
      fetchData: () => Promise<void>,
    ) {
      return fetchData();
    };
  };
