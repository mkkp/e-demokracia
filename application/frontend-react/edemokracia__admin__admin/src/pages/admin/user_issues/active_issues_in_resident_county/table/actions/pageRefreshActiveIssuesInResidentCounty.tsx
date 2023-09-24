// Action: RefreshAction

export type PageRefreshActiveIssuesInResidentCountyAction = () => (fetchData: () => Promise<void>) => Promise<void>;

export const usePageRefreshActiveIssuesInResidentCountyAction: PageRefreshActiveIssuesInResidentCountyAction = () => {
  return async function pageRefreshActiveIssuesInResidentCountyAction(fetchData: () => Promise<void>) {
    return fetchData();
  };
};
