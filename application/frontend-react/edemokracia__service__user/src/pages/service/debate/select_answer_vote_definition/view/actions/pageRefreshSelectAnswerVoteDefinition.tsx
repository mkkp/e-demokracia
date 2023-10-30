// Action: RefreshAction

export type PageRefreshSelectAnswerVoteDefinitionAction = () => (fetchData: () => Promise<void>) => Promise<void>;

export const usePageRefreshSelectAnswerVoteDefinitionAction: PageRefreshSelectAnswerVoteDefinitionAction = () => {
  return async function pageRefreshSelectAnswerVoteDefinitionAction(fetchData: () => Promise<void>) {
    return fetchData();
  };
};
