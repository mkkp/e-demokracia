// Action: RefreshRelationAction

export type TableRefreshRelationActiveDebatesInResidentCountyAction = () => (
  fetchData: () => Promise<void>,
) => Promise<void>;

export const useTableRefreshRelationActiveDebatesInResidentCountyAction: TableRefreshRelationActiveDebatesInResidentCountyAction =
  () => {
    return async function tableRefreshRelationActiveDebatesInResidentCountyAction(fetchData: () => Promise<void>) {
      return fetchData();
    };
  };
