// Action: RefreshAction

export type PageRefreshActiveVoteDefinitionsGlobalAction = () => (fetchData: () => Promise<void>) => Promise<void>;

export const usePageRefreshActiveVoteDefinitionsGlobalAction: PageRefreshActiveVoteDefinitionsGlobalAction = () => {
  return async function pageRefreshActiveVoteDefinitionsGlobalAction(fetchData: () => Promise<void>) {
    return fetchData();
  };
};
