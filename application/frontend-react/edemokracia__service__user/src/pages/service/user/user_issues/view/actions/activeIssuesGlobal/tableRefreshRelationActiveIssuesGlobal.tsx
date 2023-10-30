// Action: RefreshRelationAction

export type TableRefreshRelationActiveIssuesGlobalAction = () => (fetchData: () => Promise<void>) => Promise<void>;

export const useTableRefreshRelationActiveIssuesGlobalAction: TableRefreshRelationActiveIssuesGlobalAction = () => {
  return async function tableRefreshRelationActiveIssuesGlobalAction(fetchData: () => Promise<void>) {
    return fetchData();
  };
};
