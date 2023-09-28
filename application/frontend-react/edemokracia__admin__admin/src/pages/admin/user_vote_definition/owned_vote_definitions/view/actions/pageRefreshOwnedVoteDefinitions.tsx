// Action: RefreshAction

export type PageRefreshOwnedVoteDefinitionsAction = () => (fetchData: () => Promise<void>) => Promise<void>;

export const usePageRefreshOwnedVoteDefinitionsAction: PageRefreshOwnedVoteDefinitionsAction = () => {
  return async function pageRefreshOwnedVoteDefinitionsAction(fetchData: () => Promise<void>) {
    return fetchData();
  };
};
