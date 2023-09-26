// Action: RefreshAction

export type PageRefreshVoteSelectionsAction = () => (fetchData: () => Promise<void>) => Promise<void>;

export const usePageRefreshVoteSelectionsAction: PageRefreshVoteSelectionsAction = () => {
  return async function pageRefreshVoteSelectionsAction(fetchData: () => Promise<void>) {
    return fetchData();
  };
};
