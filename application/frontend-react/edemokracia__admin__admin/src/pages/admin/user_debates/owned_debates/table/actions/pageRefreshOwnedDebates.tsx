// Action: RefreshAction

export type PageRefreshOwnedDebatesAction = () => (fetchData: () => Promise<void>) => Promise<void>;

export const usePageRefreshOwnedDebatesAction: PageRefreshOwnedDebatesAction = () => {
  return async function pageRefreshOwnedDebatesAction(fetchData: () => Promise<void>) {
    return fetchData();
  };
};
