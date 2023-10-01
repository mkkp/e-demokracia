// Action: RefreshRelationAction

export type TableRefreshRelationFavoriteVoteDefinitionsAction = () => (fetchData: () => Promise<void>) => Promise<void>;

export const useTableRefreshRelationFavoriteVoteDefinitionsAction: TableRefreshRelationFavoriteVoteDefinitionsAction =
  () => {
    return async function tableRefreshRelationFavoriteVoteDefinitionsAction(fetchData: () => Promise<void>) {
      return fetchData();
    };
  };
