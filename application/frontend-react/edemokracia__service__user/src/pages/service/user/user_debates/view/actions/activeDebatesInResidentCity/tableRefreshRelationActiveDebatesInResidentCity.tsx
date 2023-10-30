// Action: RefreshRelationAction

export type TableRefreshRelationActiveDebatesInResidentCityAction = () => (
  fetchData: () => Promise<void>,
) => Promise<void>;

export const useTableRefreshRelationActiveDebatesInResidentCityAction: TableRefreshRelationActiveDebatesInResidentCityAction =
  () => {
    return async function tableRefreshRelationActiveDebatesInResidentCityAction(fetchData: () => Promise<void>) {
      return fetchData();
    };
  };
