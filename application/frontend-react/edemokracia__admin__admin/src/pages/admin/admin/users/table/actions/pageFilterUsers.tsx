//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getActionsForPages(#application)
// Path expression: #pagePath(#getActionContainer(#self))+'actions/'+#pageActionPathSuffix(#self)+'.tsx'
// Template name: actor/src/pages/actions/action.tsx
// Template file: actor/src/pages/actions/action.tsx.hbs
// Action: FilterAction

import { AdminUserQueryCustomizer } from '~/generated/data-api';
import { useFilterDialog } from '~/components/dialog';
import type { Filter, FilterOption } from '~/components-api';
import { mapAllFiltersToQueryCustomizerProperties } from '~/utilities';

export type PageFilterUsersAction = (id: string, filterOptions: FilterOption[], filters: Filter[]) => Promise<void>;

export const usePageFilterUsersAction = (
  setFilters: (filters: Filter[]) => void,
  setPage: (page: number) => void,
  setQueryCustomizer: Function,
  openFilterDialog: (id: string, filterOptions: FilterOption[], filters: Filter[]) => Promise<Filter[]>,
): PageFilterUsersAction => {
  return async function pageFilterUsersAction(id: string, filterOptions: FilterOption[], filters: Filter[]) {
    const newFilters = await openFilterDialog(id, filterOptions, filters);
    const numberOfElements = 10;

    if (newFilters) {
      setPage(0);
      setFilters(newFilters);

      setQueryCustomizer((prevQueryCustomizer: AdminUserQueryCustomizer) => {
        return {
          ...prevQueryCustomizer,
          _seek: {
            limit: numberOfElements + 1,
          },
          ...mapAllFiltersToQueryCustomizerProperties(
            newFilters,
            'userName',
            'isAdmin',
            'firstName',
            'lastName',
            'phone',
            'email',
            'created',
          ),
        };
      });
    }
  };
};
