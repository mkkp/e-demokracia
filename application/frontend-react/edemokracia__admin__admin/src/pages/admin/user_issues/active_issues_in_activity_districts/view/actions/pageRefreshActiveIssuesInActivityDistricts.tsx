// Action: RefreshAction

export type PageRefreshActiveIssuesInActivityDistrictsAction = () => (fetchData: () => Promise<void>) => Promise<void>;

export const usePageRefreshActiveIssuesInActivityDistrictsAction: PageRefreshActiveIssuesInActivityDistrictsAction =
  () => {
    return async function pageRefreshActiveIssuesInActivityDistrictsAction(fetchData: () => Promise<void>) {
      return fetchData();
    };
  };
