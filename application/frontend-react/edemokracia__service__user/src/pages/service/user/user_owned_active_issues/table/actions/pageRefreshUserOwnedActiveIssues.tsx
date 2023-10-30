// Action: RefreshAction

export type PageRefreshUserOwnedActiveIssuesAction = () => (fetchData: () => Promise<void>) => Promise<void>;

export const usePageRefreshUserOwnedActiveIssuesAction: PageRefreshUserOwnedActiveIssuesAction = () => {
  return async function pageRefreshUserOwnedActiveIssuesAction(fetchData: () => Promise<void>) {
    return fetchData();
  };
};
