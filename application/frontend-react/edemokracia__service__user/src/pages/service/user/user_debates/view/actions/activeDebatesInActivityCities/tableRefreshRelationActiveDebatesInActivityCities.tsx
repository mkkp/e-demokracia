// Action: RefreshRelationAction

export type TableRefreshRelationActiveDebatesInActivityCitiesAction = () => (
  fetchData: () => Promise<void>,
) => Promise<void>;

export const useTableRefreshRelationActiveDebatesInActivityCitiesAction: TableRefreshRelationActiveDebatesInActivityCitiesAction =
  () => {
    return async function tableRefreshRelationActiveDebatesInActivityCitiesAction(fetchData: () => Promise<void>) {
      return fetchData();
    };
  };
