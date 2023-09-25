//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getActionsForPages(#application)
// Path expression: #pagePath(#getActionContainer(#self))+'actions/'+#pageActionPathSuffix(#self)+'.tsx'
// Template name: actor/src/pages/actions/action.tsx
// Template file: actor/src/pages/actions/action.tsx.hbs
// Action: FilterRelationAction

import { AdminUserQueryCustomizer } from '~/generated/data-api';
import { useFilterDialog } from '~/components/dialog';
import type { Filter, FilterOption } from '~/components-api';
import { mapAllFiltersToQueryCustomizerProperties } from '~/utilities';

export type TableActionUsersAction = (id: string, filterOptions: FilterOption[], filters: Filter[]) => Promise<void>;

export const useTableActionUsersAction = (
  setFilters: (filters: Filter[]) => void,
  setPage: (page: number) => void,
  setQueryCustomizer: Function,
  openFilterDialog: (id: string, filterOptions: FilterOption[], filters: Filter[]) => Promise<Filter[]>,
  numberOfElements: number,
): TableActionUsersAction => {
  const columnNames = ['representation', 'userName', 'firstName', 'lastName', 'phone', 'email', 'isAdmin', 'created'];

  return async function tableActionUsersAction(id: string, filterOptions: FilterOption[], filters: Filter[]) {
    const newFilters = await openFilterDialog(id, filterOptions, filters);

    if (Array.isArray(newFilters)) {
      setPage(0);
      setFilters(newFilters);

      setQueryCustomizer((prevQueryCustomizer: AdminUserQueryCustomizer) => {
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
