// Action: RefreshAction

export type PageRefreshUserVoteEntryAction = () => (fetchData: () => Promise<void>) => Promise<void>;

export const usePageRefreshUserVoteEntryAction: PageRefreshUserVoteEntryAction = () => {
  return async function pageRefreshUserVoteEntryAction(fetchData: () => Promise<void>) {
    return fetchData();
  };
};
