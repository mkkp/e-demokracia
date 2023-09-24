// Action: RefreshRelationAction

export type TableRefreshRelationActiveIssuesInActivityCountiesAction = () => (
  fetchData: () => Promise<void>,
) => Promise<void>;

export const useTableRefreshRelationActiveIssuesInActivityCountiesAction: TableRefreshRelationActiveIssuesInActivityCountiesAction =
  () => {
    return async function tableRefreshRelationActiveIssuesInActivityCountiesAction(fetchData: () => Promise<void>) {
      return fetchData();
    };
  };
