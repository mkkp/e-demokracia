// Action: RefreshAction

export type PageRefreshActiveVoteDefinitionsInResidentDistrictAction = () => (
  fetchData: () => Promise<void>,
) => Promise<void>;

export const usePageRefreshActiveVoteDefinitionsInResidentDistrictAction: PageRefreshActiveVoteDefinitionsInResidentDistrictAction =
  () => {
    return async function pageRefreshActiveVoteDefinitionsInResidentDistrictAction(fetchData: () => Promise<void>) {
      return fetchData();
    };
  };
