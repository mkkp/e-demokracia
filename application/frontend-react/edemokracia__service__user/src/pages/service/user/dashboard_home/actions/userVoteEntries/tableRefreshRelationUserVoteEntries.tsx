// Action: RefreshRelationAction

export type TableRefreshRelationUserVoteEntriesAction = () => (fetchData: () => Promise<void>) => Promise<void>;

export const useTableRefreshRelationUserVoteEntriesAction: TableRefreshRelationUserVoteEntriesAction = () => {
  return async function tableRefreshRelationUserVoteEntriesAction(fetchData: () => Promise<void>) {
    return fetchData();
  };
};
