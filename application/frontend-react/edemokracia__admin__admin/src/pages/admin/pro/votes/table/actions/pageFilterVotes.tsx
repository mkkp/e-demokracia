///////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// ------------------------------
// Factory expression: #getActionsForPages(#application)
// Path expression: #pagePath(#self.value)+'actions/'+#pageActionPathSuffix(#self.key,#self.value)+'.tsx'
// Template name: actor/src/pages/actions/action.tsx.hbs
// Action name: edemokracia::admin::Admin::edemokracia::admin::Pro::votes#PageFilter
// Action owner name: edemokracia::admin::Pro.votes#Table
// Action DataElement name: votes
// Action DataElement owner name: edemokracia::admin::Pro
// Action DataElement target name: edemokracia::admin::SimpleVote
// Owner Page name: edemokracia::admin::Pro.votes#Table
// Action: FilterAction

import { AdminSimpleVoteQueryCustomizer } from '../../../../../../generated/data-api';
import { useFilterDialog } from '../../../../../../components';
import type { Filter, FilterOption } from '../../../../../../components-api';
import { mapAllFiltersToQueryCustomizerProperties } from '../../../../../../utilities';

export type PageFilterVotesAction = (filterOptions: FilterOption[], filters: Filter[]) => Promise<void>;

export const usePageFilterVotesAction = (
  setFilters: (filters: Filter[]) => void,
  setPage: (page: number) => void,
  setQueryCustomizer: Function,
  openFilterDialog: (filterOptions: FilterOption[], filters: Filter[]) => Promise<Filter[]>,
): PageFilterVotesAction => {
  return async function pageFilterVotesAction(filterOptions: FilterOption[], filters: Filter[]) {
    const newFilters = await openFilterDialog(filterOptions, filters);
    const numberOfElements = 10;

    if (newFilters) {
      setPage(0);
      setFilters(newFilters);

      setQueryCustomizer((prevQueryCustomizer: AdminSimpleVoteQueryCustomizer) => {
        return {
          ...prevQueryCustomizer,
          _seek: {
            limit: numberOfElements + 1,
          },
          ...mapAllFiltersToQueryCustomizerProperties(newFilters, 'created', 'type'),
        };
      });
    }
  };
};
