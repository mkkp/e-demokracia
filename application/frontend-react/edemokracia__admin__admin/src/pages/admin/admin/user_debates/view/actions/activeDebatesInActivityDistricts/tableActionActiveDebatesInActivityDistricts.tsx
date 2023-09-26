//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getActionsForPages(#application)
// Path expression: #pagePath(#getActionContainer(#self))+'actions/'+#pageActionPathSuffix(#self)+'.tsx'
// Template name: actor/src/pages/actions/action.tsx
// Template file: actor/src/pages/actions/action.tsx.hbs
// Action: FilterRelationAction

import { AdminDebateQueryCustomizer } from '~/generated/data-api';
import { useFilterDialog } from '~/components/dialog';
import type { Filter, FilterOption } from '~/components-api';
import { mapAllFiltersToQueryCustomizerProperties } from '~/utilities';

export type TableActionActiveDebatesInActivityDistrictsAction = (
  id: string,
  filterOptions: FilterOption[],
  filters: Filter[],
) => Promise<void>;

export const useTableActionActiveDebatesInActivityDistrictsAction = (
  setFilters: (filters: Filter[]) => void,
  setPage: (page: number) => void,
  setQueryCustomizer: Function,
  openFilterDialog: (id: string, filterOptions: FilterOption[], filters: Filter[]) => Promise<Filter[]>,
  numberOfElements: number,
): TableActionActiveDebatesInActivityDistrictsAction => {
  const columnNames = [
    'countyRepresentation',
    'cityRepresentation',
    'districtRepresentation',
    'title',
    'issueTitle',
    'closeAt',
    'status',
  ];

  return async function tableActionActiveDebatesInActivityDistrictsAction(
    id: string,
    filterOptions: FilterOption[],
    filters: Filter[],
  ) {
    const newFilters = await openFilterDialog(id, filterOptions, filters);

    if (Array.isArray(newFilters)) {
      setPage(0);
      setFilters(newFilters);

      setQueryCustomizer((prevQueryCustomizer: AdminDebateQueryCustomizer) => {
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
