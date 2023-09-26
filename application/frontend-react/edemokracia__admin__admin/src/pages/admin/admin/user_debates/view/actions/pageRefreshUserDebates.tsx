// Action: RefreshAction

export type PageRefreshUserDebatesAction = () => (fetchData: () => Promise<void>) => Promise<void>;

export const usePageRefreshUserDebatesAction: PageRefreshUserDebatesAction = () => {
  return async function pageRefreshUserDebatesAction(fetchData: () => Promise<void>) {
    return fetchData();
  };
};
