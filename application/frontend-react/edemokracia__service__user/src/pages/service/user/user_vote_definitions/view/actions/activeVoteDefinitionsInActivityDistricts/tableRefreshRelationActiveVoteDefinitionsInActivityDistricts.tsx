// Action: RefreshRelationAction

export type TableRefreshRelationActiveVoteDefinitionsInActivityDistrictsAction = () => (
  fetchData: () => Promise<void>,
) => Promise<void>;

export const useTableRefreshRelationActiveVoteDefinitionsInActivityDistrictsAction: TableRefreshRelationActiveVoteDefinitionsInActivityDistrictsAction =
  () => {
    return async function tableRefreshRelationActiveVoteDefinitionsInActivityDistrictsAction(
      fetchData: () => Promise<void>,
    ) {
      return fetchData();
    };
  };
