// Action: RefreshAction

export type PageRefreshActiveVoteDefinitionsInActivityCitiesAction = () => (
  fetchData: () => Promise<void>,
) => Promise<void>;

export const usePageRefreshActiveVoteDefinitionsInActivityCitiesAction: PageRefreshActiveVoteDefinitionsInActivityCitiesAction =
  () => {
    return async function pageRefreshActiveVoteDefinitionsInActivityCitiesAction(fetchData: () => Promise<void>) {
      return fetchData();
    };
  };
