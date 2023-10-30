// Action: RefreshRelationAction

export type TableRefreshRelationActiveDebatesInActivityCountiesAction = () => (
  fetchData: () => Promise<void>,
) => Promise<void>;

export const useTableRefreshRelationActiveDebatesInActivityCountiesAction: TableRefreshRelationActiveDebatesInActivityCountiesAction =
  () => {
    return async function tableRefreshRelationActiveDebatesInActivityCountiesAction(fetchData: () => Promise<void>) {
      return fetchData();
    };
  };
