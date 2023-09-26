// Action: RefreshRelationAction

export type TableRefreshRelationActiveDebatesInResidentDistrictAction = () => (
  fetchData: () => Promise<void>,
) => Promise<void>;

export const useTableRefreshRelationActiveDebatesInResidentDistrictAction: TableRefreshRelationActiveDebatesInResidentDistrictAction =
  () => {
    return async function tableRefreshRelationActiveDebatesInResidentDistrictAction(fetchData: () => Promise<void>) {
      return fetchData();
    };
  };
