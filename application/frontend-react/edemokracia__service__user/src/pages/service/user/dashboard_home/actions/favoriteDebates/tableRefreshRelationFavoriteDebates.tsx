// Action: RefreshRelationAction

export type TableRefreshRelationFavoriteDebatesAction = () => (fetchData: () => Promise<void>) => Promise<void>;

export const useTableRefreshRelationFavoriteDebatesAction: TableRefreshRelationFavoriteDebatesAction = () => {
  return async function tableRefreshRelationFavoriteDebatesAction(fetchData: () => Promise<void>) {
    return fetchData();
  };
};
