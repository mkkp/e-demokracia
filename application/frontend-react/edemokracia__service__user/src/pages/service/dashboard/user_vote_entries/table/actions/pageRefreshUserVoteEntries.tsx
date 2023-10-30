// Action: RefreshAction

export type PageRefreshUserVoteEntriesAction = () => (fetchData: () => Promise<void>) => Promise<void>;

export const usePageRefreshUserVoteEntriesAction: PageRefreshUserVoteEntriesAction = () => {
  return async function pageRefreshUserVoteEntriesAction(fetchData: () => Promise<void>) {
    return fetchData();
  };
};
