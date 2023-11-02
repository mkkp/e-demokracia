//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getActionsForPages(#application)
// Path expression: #pagePath(#getActionContainer(#self))+'actions/'+#pageActionPathSuffix(#self)+'.tsx'
// Template name: actor/src/pages/actions/action.tsx
// Template file: actor/src/pages/actions/action.tsx.hbs
// Action: FilterAction

import { ServiceVoteEntryQueryCustomizer } from '~/generated/data-api';
import { useFilterDialog } from '~/components/dialog';
import type { Filter, FilterOption } from '~/components-api';
import { mapAllFiltersToQueryCustomizerProperties } from '~/utilities';

export type PageFilterUserOwnedVoteEntriesAction = (
  id: string,
  filterOptions: FilterOption[],
  filters: Filter[],
) => Promise<void>;

export const usePageFilterUserOwnedVoteEntriesAction = (
  setFilters: (filters: Filter[]) => void,
  setPage: (page: number) => void,
  setQueryCustomizer: Function,
  openFilterDialog: (id: string, filterOptions: FilterOption[], filters: Filter[]) => Promise<Filter[]>,
  numberOfElements: number,
): PageFilterUserOwnedVoteEntriesAction => {
  const columnNames = ['userName', 'created', 'voteTitle', 'issueTitle', 'voteStatus'];

  return async function pageFilterUserOwnedVoteEntriesAction(
    id: string,
    filterOptions: FilterOption[],
    filters: Filter[],
  ) {
    const newFilters = await openFilterDialog(id, filterOptions, filters);

    if (Array.isArray(newFilters)) {
      setPage(0);
      setFilters(newFilters);

      setQueryCustomizer((prevQueryCustomizer: ServiceVoteEntryQueryCustomizer) => {
        // remove previous filter values, so that we can always start with a clean slate
        for (const name of columnNames) {
          delete (prevQueryCustomizer as any)[name];
        }
        return {
          ...prevQueryCustomizer,
          _seek: {
            limit: numberOfElements + 1,
          },
          ...mapAllFiltersToQueryCustomizerProperties(newFilters),
        };
      });
    }
  };
};
