// Action: RefreshAction

export type PageRefreshAdminCategoriesAction = () => (fetchData: () => Promise<void>) => Promise<void>;

export const usePageRefreshAdminCategoriesAction: PageRefreshAdminCategoriesAction = () => {
  return async function pageRefreshAdminCategoriesAction(fetchData: () => Promise<void>) {
    return fetchData();
  };
};
