// Action: RefreshAction

export type PageRefreshUserOwnedRatingVoteDefinitionsAction = () => (fetchData: () => Promise<void>) => Promise<void>;

export const usePageRefreshUserOwnedRatingVoteDefinitionsAction: PageRefreshUserOwnedRatingVoteDefinitionsAction =
  () => {
    return async function pageRefreshUserOwnedRatingVoteDefinitionsAction(fetchData: () => Promise<void>) {
      return fetchData();
    };
  };
