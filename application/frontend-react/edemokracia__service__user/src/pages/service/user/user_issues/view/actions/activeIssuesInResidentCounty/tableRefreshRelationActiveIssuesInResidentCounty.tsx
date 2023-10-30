// Action: RefreshRelationAction

export type TableRefreshRelationActiveIssuesInResidentCountyAction = () => (
  fetchData: () => Promise<void>,
) => Promise<void>;

export const useTableRefreshRelationActiveIssuesInResidentCountyAction: TableRefreshRelationActiveIssuesInResidentCountyAction =
  () => {
    return async function tableRefreshRelationActiveIssuesInResidentCountyAction(fetchData: () => Promise<void>) {
      return fetchData();
    };
  };
