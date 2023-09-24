// Action: RefreshRelationAction

export type TableRefreshRelationActiveIssuesInResidentCityAction = () => (
  fetchData: () => Promise<void>,
) => Promise<void>;

export const useTableRefreshRelationActiveIssuesInResidentCityAction: TableRefreshRelationActiveIssuesInResidentCityAction =
  () => {
    return async function tableRefreshRelationActiveIssuesInResidentCityAction(fetchData: () => Promise<void>) {
      return fetchData();
    };
  };
