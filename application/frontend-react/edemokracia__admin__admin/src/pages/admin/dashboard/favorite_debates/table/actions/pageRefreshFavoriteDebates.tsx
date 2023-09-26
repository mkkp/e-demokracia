// Action: RefreshAction

export type PageRefreshFavoriteDebatesAction = () => (fetchData: () => Promise<void>) => Promise<void>;

export const usePageRefreshFavoriteDebatesAction: PageRefreshFavoriteDebatesAction = () => {
  return async function pageRefreshFavoriteDebatesAction(fetchData: () => Promise<void>) {
    return fetchData();
  };
};
