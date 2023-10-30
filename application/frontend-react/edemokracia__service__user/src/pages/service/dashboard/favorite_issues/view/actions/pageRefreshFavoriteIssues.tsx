// Action: RefreshAction

export type PageRefreshFavoriteIssuesAction = () => (fetchData: () => Promise<void>) => Promise<void>;

export const usePageRefreshFavoriteIssuesAction: PageRefreshFavoriteIssuesAction = () => {
  return async function pageRefreshFavoriteIssuesAction(fetchData: () => Promise<void>) {
    return fetchData();
  };
};
