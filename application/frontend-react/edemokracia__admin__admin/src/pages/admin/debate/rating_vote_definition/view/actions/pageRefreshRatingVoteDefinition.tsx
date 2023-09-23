// Action: RefreshAction

export type PageRefreshRatingVoteDefinitionAction = () => (fetchData: () => Promise<void>) => Promise<void>;

export const usePageRefreshRatingVoteDefinitionAction: PageRefreshRatingVoteDefinitionAction = () => {
  return async function pageRefreshRatingVoteDefinitionAction(fetchData: () => Promise<void>) {
    return fetchData();
  };
};
