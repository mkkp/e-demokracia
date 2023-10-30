// Action: RefreshRelationAction

export type TableRefreshRelationActiveVoteDefinitionsInResidentDistrictAction = () => (
  fetchData: () => Promise<void>,
) => Promise<void>;

export const useTableRefreshRelationActiveVoteDefinitionsInResidentDistrictAction: TableRefreshRelationActiveVoteDefinitionsInResidentDistrictAction =
  () => {
    return async function tableRefreshRelationActiveVoteDefinitionsInResidentDistrictAction(
      fetchData: () => Promise<void>,
    ) {
      return fetchData();
    };
  };
