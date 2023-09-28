// Action: RefreshRelationAction

export type TableRefreshRelationActiveVoteDefinitionsInActivityCitiesAction = () => (
  fetchData: () => Promise<void>,
) => Promise<void>;

export const useTableRefreshRelationActiveVoteDefinitionsInActivityCitiesAction: TableRefreshRelationActiveVoteDefinitionsInActivityCitiesAction =
  () => {
    return async function tableRefreshRelationActiveVoteDefinitionsInActivityCitiesAction(
      fetchData: () => Promise<void>,
    ) {
      return fetchData();
    };
  };
