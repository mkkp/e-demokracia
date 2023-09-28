// Action: RefreshRelationAction

export type TableRefreshRelationActiveVoteDefinitionsInResidentCountyAction = () => (
  fetchData: () => Promise<void>,
) => Promise<void>;

export const useTableRefreshRelationActiveVoteDefinitionsInResidentCountyAction: TableRefreshRelationActiveVoteDefinitionsInResidentCountyAction =
  () => {
    return async function tableRefreshRelationActiveVoteDefinitionsInResidentCountyAction(
      fetchData: () => Promise<void>,
    ) {
      return fetchData();
    };
  };
