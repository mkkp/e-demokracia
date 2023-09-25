// Action: RefreshRelationAction

export type TableRefreshRelationActiveIssuesInResidentDistrictAction = () => (
  fetchData: () => Promise<void>,
) => Promise<void>;

export const useTableRefreshRelationActiveIssuesInResidentDistrictAction: TableRefreshRelationActiveIssuesInResidentDistrictAction =
  () => {
    return async function tableRefreshRelationActiveIssuesInResidentDistrictAction(fetchData: () => Promise<void>) {
      return fetchData();
    };
  };
