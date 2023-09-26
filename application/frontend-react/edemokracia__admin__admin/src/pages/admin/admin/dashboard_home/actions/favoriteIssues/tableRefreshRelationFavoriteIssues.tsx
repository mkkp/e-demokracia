// Action: RefreshRelationAction

export type TableRefreshRelationFavoriteIssuesAction = () => (fetchData: () => Promise<void>) => Promise<void>;

export const useTableRefreshRelationFavoriteIssuesAction: TableRefreshRelationFavoriteIssuesAction = () => {
  return async function tableRefreshRelationFavoriteIssuesAction(fetchData: () => Promise<void>) {
    return fetchData();
  };
};
