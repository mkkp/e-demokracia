// Action: RefreshAction

export type PageRefreshUserOwnedYesNoAbstainVoteDefinitionsAction = () => (
  fetchData: () => Promise<void>,
) => Promise<void>;

export const usePageRefreshUserOwnedYesNoAbstainVoteDefinitionsAction: PageRefreshUserOwnedYesNoAbstainVoteDefinitionsAction =
  () => {
    return async function pageRefreshUserOwnedYesNoAbstainVoteDefinitionsAction(fetchData: () => Promise<void>) {
      return fetchData();
    };
  };
