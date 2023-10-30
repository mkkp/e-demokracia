// Action: RefreshAction

export type PageRefreshUserOwnedYesNoVoteDefinitionsAction = () => (fetchData: () => Promise<void>) => Promise<void>;

export const usePageRefreshUserOwnedYesNoVoteDefinitionsAction: PageRefreshUserOwnedYesNoVoteDefinitionsAction = () => {
  return async function pageRefreshUserOwnedYesNoVoteDefinitionsAction(fetchData: () => Promise<void>) {
    return fetchData();
  };
};
