// Action: RefreshAction

export type PageRefreshUserProfileAction = () => (fetchData: () => Promise<void>) => Promise<void>;

export const usePageRefreshUserProfileAction: PageRefreshUserProfileAction = () => {
  return async function pageRefreshUserProfileAction(fetchData: () => Promise<void>) {
    return fetchData();
  };
};
