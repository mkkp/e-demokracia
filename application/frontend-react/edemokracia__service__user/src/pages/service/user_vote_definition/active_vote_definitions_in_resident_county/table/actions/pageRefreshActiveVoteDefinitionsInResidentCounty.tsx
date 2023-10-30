// Action: RefreshAction

export type PageRefreshActiveVoteDefinitionsInResidentCountyAction = () => (
  fetchData: () => Promise<void>,
) => Promise<void>;

export const usePageRefreshActiveVoteDefinitionsInResidentCountyAction: PageRefreshActiveVoteDefinitionsInResidentCountyAction =
  () => {
    return async function pageRefreshActiveVoteDefinitionsInResidentCountyAction(fetchData: () => Promise<void>) {
      return fetchData();
    };
  };
