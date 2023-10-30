// Action: RefreshAction

export type PageRefreshAdminVoteEntriesAction = () => (fetchData: () => Promise<void>) => Promise<void>;

export const usePageRefreshAdminVoteEntriesAction: PageRefreshAdminVoteEntriesAction = () => {
  return async function pageRefreshAdminVoteEntriesAction(fetchData: () => Promise<void>) {
    return fetchData();
  };
};
