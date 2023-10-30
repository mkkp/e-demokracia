// Action: RefreshAction

export type PageRefreshActiveIssuesInActivityCitiesAction = () => (fetchData: () => Promise<void>) => Promise<void>;

export const usePageRefreshActiveIssuesInActivityCitiesAction: PageRefreshActiveIssuesInActivityCitiesAction = () => {
  return async function pageRefreshActiveIssuesInActivityCitiesAction(fetchData: () => Promise<void>) {
    return fetchData();
  };
};
