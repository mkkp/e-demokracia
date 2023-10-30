// Action: RefreshAction

export type PageRefreshUserVoteDefinitionsAction = () => (fetchData: () => Promise<void>) => Promise<void>;

export const usePageRefreshUserVoteDefinitionsAction: PageRefreshUserVoteDefinitionsAction = () => {
  return async function pageRefreshUserVoteDefinitionsAction(fetchData: () => Promise<void>) {
    return fetchData();
  };
};
