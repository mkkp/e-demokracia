// Action: RefreshAction

export type PageRefreshUserOwnedSelectAnswerVoteDefinitionsAction = () => (
  fetchData: () => Promise<void>,
) => Promise<void>;

export const usePageRefreshUserOwnedSelectAnswerVoteDefinitionsAction: PageRefreshUserOwnedSelectAnswerVoteDefinitionsAction =
  () => {
    return async function pageRefreshUserOwnedSelectAnswerVoteDefinitionsAction(fetchData: () => Promise<void>) {
      return fetchData();
    };
  };
