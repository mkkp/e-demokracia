//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/utilities/filter-helper.ts'
// Template name: actor/src/utilities/filter-helper.ts
// Template file: actor/src/utilities/filter-helper.ts.hbs

import type { Filter, Operation } from '../components-api';
import { FilterType } from '../components-api';
import { dateToJudoDateString } from './helper';

type FilterBy = {
  value: any;
  operator: Operation;
};

export const mapFiltersToQueryCustomizerProperty = (filters: Filter[], property: string): FilterBy[] | undefined => {
  if (!filters.some((filter) => filter.filterOption.attributeName === property)) return undefined;

  const convertFilterValue = (filter: Filter): any => {
    if (filter.filterOption.filterType === FilterType.dateTime && filter.filterBy.value instanceof Date) {
      return filter.filterBy.value.toISOString();
    } else if (filter.filterOption.filterType === FilterType.date && filter.filterBy.value instanceof Date) {
      return dateToJudoDateString(filter.filterBy.value);
    }
    return filter.filterBy.value;
  };

  return filters
    .filter((filter) => filter.filterOption.attributeName === property && filter.filterBy.value)
    .map((filter) => {
      return {
        value: convertFilterValue(filter),
        operator: filter.filterBy.operator,
      };
    });
};

export interface MultiFilter {
  [key: string]: FilterBy[] | undefined;
}

export const mapAllFiltersToQueryCustomizerProperties = (filters: Filter[], ...properties: string[]): MultiFilter => {
  let output: MultiFilter = {};

  for (const property of properties) {
    output[property] = mapFiltersToQueryCustomizerProperty(filters, property);
  }

  return output;
};
