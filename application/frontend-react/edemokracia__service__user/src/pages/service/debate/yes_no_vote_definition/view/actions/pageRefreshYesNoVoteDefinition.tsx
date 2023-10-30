// Action: RefreshAction

export type PageRefreshYesNoVoteDefinitionAction = () => (fetchData: () => Promise<void>) => Promise<void>;

export const usePageRefreshYesNoVoteDefinitionAction: PageRefreshYesNoVoteDefinitionAction = () => {
  return async function pageRefreshYesNoVoteDefinitionAction(fetchData: () => Promise<void>) {
    return fetchData();
  };
};
