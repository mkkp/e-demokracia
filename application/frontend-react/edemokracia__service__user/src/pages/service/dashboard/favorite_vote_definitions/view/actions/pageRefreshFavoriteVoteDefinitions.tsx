// Action: RefreshAction

export type PageRefreshFavoriteVoteDefinitionsAction = () => (fetchData: () => Promise<void>) => Promise<void>;

export const usePageRefreshFavoriteVoteDefinitionsAction: PageRefreshFavoriteVoteDefinitionsAction = () => {
  return async function pageRefreshFavoriteVoteDefinitionsAction(fetchData: () => Promise<void>) {
    return fetchData();
  };
};
