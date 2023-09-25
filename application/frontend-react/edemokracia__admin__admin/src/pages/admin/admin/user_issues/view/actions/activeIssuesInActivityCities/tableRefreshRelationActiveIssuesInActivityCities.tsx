// Action: RefreshRelationAction

export type TableRefreshRelationActiveIssuesInActivityCitiesAction = () => (
  fetchData: () => Promise<void>,
) => Promise<void>;

export const useTableRefreshRelationActiveIssuesInActivityCitiesAction: TableRefreshRelationActiveIssuesInActivityCitiesAction =
  () => {
    return async function tableRefreshRelationActiveIssuesInActivityCitiesAction(fetchData: () => Promise<void>) {
      return fetchData();
    };
  };
