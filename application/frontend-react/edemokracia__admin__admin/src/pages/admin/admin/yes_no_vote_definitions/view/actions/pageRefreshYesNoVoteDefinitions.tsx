// Action: RefreshAction

export type PageRefreshYesNoVoteDefinitionsAction = () => (fetchData: () => Promise<void>) => Promise<void>;

export const usePageRefreshYesNoVoteDefinitionsAction: PageRefreshYesNoVoteDefinitionsAction = () => {
  return async function pageRefreshYesNoVoteDefinitionsAction(fetchData: () => Promise<void>) {
    return fetchData();
  };
};
