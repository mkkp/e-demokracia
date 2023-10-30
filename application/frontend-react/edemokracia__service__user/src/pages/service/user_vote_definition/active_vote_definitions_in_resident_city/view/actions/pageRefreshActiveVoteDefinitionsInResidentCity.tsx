// Action: RefreshAction

export type PageRefreshActiveVoteDefinitionsInResidentCityAction = () => (
  fetchData: () => Promise<void>,
) => Promise<void>;

export const usePageRefreshActiveVoteDefinitionsInResidentCityAction: PageRefreshActiveVoteDefinitionsInResidentCityAction =
  () => {
    return async function pageRefreshActiveVoteDefinitionsInResidentCityAction(fetchData: () => Promise<void>) {
      return fetchData();
    };
  };
