// Action: RefreshAction

export type PageRefreshYesNoAbstainVoteDefinitionAction = () => (fetchData: () => Promise<void>) => Promise<void>;

export const usePageRefreshYesNoAbstainVoteDefinitionAction: PageRefreshYesNoAbstainVoteDefinitionAction = () => {
  return async function pageRefreshYesNoAbstainVoteDefinitionAction(fetchData: () => Promise<void>) {
    return fetchData();
  };
};
