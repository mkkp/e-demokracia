// Action: RefreshAction

export type PageRefreshActiveVoteDefinitionsInActivityCountiesAction = () => (
  fetchData: () => Promise<void>,
) => Promise<void>;

export const usePageRefreshActiveVoteDefinitionsInActivityCountiesAction: PageRefreshActiveVoteDefinitionsInActivityCountiesAction =
  () => {
    return async function pageRefreshActiveVoteDefinitionsInActivityCountiesAction(fetchData: () => Promise<void>) {
      return fetchData();
    };
  };
