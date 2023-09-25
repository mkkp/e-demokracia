// Action: RefreshAction

export type PageRefreshAdminVoteDefinitionsAction = () => (fetchData: () => Promise<void>) => Promise<void>;

export const usePageRefreshAdminVoteDefinitionsAction: PageRefreshAdminVoteDefinitionsAction = () => {
  return async function pageRefreshAdminVoteDefinitionsAction(fetchData: () => Promise<void>) {
    return fetchData();
  };
};
