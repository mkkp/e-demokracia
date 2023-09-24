// Action: RefreshRelationAction

export type TableRefreshRelationActiveIssuesInActivityDistrictsAction = () => (
  fetchData: () => Promise<void>,
) => Promise<void>;

export const useTableRefreshRelationActiveIssuesInActivityDistrictsAction: TableRefreshRelationActiveIssuesInActivityDistrictsAction =
  () => {
    return async function tableRefreshRelationActiveIssuesInActivityDistrictsAction(fetchData: () => Promise<void>) {
      return fetchData();
    };
  };
