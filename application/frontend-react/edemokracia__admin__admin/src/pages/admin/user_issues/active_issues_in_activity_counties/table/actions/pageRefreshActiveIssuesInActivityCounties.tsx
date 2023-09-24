// Action: RefreshAction

export type PageRefreshActiveIssuesInActivityCountiesAction = () => (fetchData: () => Promise<void>) => Promise<void>;

export const usePageRefreshActiveIssuesInActivityCountiesAction: PageRefreshActiveIssuesInActivityCountiesAction =
  () => {
    return async function pageRefreshActiveIssuesInActivityCountiesAction(fetchData: () => Promise<void>) {
      return fetchData();
    };
  };
