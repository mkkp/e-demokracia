// Action: RefreshAction

export type PageRefreshUserOwnedVoteEntriesAction = () => (fetchData: () => Promise<void>) => Promise<void>;

export const usePageRefreshUserOwnedVoteEntriesAction: PageRefreshUserOwnedVoteEntriesAction = () => {
  return async function pageRefreshUserOwnedVoteEntriesAction(fetchData: () => Promise<void>) {
    return fetchData();
  };
};
