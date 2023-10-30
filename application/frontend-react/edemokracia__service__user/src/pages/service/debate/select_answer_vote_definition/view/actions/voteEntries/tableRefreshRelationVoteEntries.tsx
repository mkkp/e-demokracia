// Action: RefreshRelationAction

export type TableRefreshRelationVoteEntriesAction = () => (fetchData: () => Promise<void>) => Promise<void>;

export const useTableRefreshRelationVoteEntriesAction: TableRefreshRelationVoteEntriesAction = () => {
  return async function tableRefreshRelationVoteEntriesAction(fetchData: () => Promise<void>) {
    return fetchData();
  };
};
