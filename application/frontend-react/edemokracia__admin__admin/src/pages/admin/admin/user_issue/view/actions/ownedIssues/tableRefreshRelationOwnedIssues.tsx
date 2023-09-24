// Action: RefreshRelationAction

export type TableRefreshRelationOwnedIssuesAction = () => (fetchData: () => Promise<void>) => Promise<void>;

export const useTableRefreshRelationOwnedIssuesAction: TableRefreshRelationOwnedIssuesAction = () => {
  return async function tableRefreshRelationOwnedIssuesAction(fetchData: () => Promise<void>) {
    return fetchData();
  };
};
