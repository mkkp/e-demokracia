// Action: RefreshAction

export type PageRefreshActiveVoteDefinitionsInActivityDistrictsAction = () => (
  fetchData: () => Promise<void>,
) => Promise<void>;

export const usePageRefreshActiveVoteDefinitionsInActivityDistrictsAction: PageRefreshActiveVoteDefinitionsInActivityDistrictsAction =
  () => {
    return async function pageRefreshActiveVoteDefinitionsInActivityDistrictsAction(fetchData: () => Promise<void>) {
      return fetchData();
    };
  };
