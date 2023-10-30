// Action: RefreshRelationAction

export type TableRefreshRelationActiveVoteDefinitionsInResidentCityAction = () => (
  fetchData: () => Promise<void>,
) => Promise<void>;

export const useTableRefreshRelationActiveVoteDefinitionsInResidentCityAction: TableRefreshRelationActiveVoteDefinitionsInResidentCityAction =
  () => {
    return async function tableRefreshRelationActiveVoteDefinitionsInResidentCityAction(
      fetchData: () => Promise<void>,
    ) {
      return fetchData();
    };
  };
