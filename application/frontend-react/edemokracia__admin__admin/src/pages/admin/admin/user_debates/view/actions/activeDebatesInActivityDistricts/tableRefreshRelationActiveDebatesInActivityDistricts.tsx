// Action: RefreshRelationAction

export type TableRefreshRelationActiveDebatesInActivityDistrictsAction = () => (
  fetchData: () => Promise<void>,
) => Promise<void>;

export const useTableRefreshRelationActiveDebatesInActivityDistrictsAction: TableRefreshRelationActiveDebatesInActivityDistrictsAction =
  () => {
    return async function tableRefreshRelationActiveDebatesInActivityDistrictsAction(fetchData: () => Promise<void>) {
      return fetchData();
    };
  };
