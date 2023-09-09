import { _NumericOperation, _StringOperation, _BooleanOperation, _EnumerationOperation } from '@judo/data-api-common';
import type { GridFilterModel, GridFilterItem } from '@mui/x-data-grid';
import { GridLogicOperator } from '@mui/x-data-grid';
import { isEqual, compareAsc } from 'date-fns';
import type { Filter, FilterOption, Operation } from '../components-api';
import { FilterType } from '../components-api';
import { dateToJudoDateString } from './helper';
import { serviceDateToUiDate } from './form-utils';

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
    .filter(
      (filter) =>
        filter.filterOption.attributeName === property &&
        filter.filterBy.value !== undefined &&
        filter.filterBy.value !== null,
    )
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

export const mapAllFiltersToQueryCustomizerProperties = (filters: Filter[]): MultiFilter => {
  let output: MultiFilter = {};
  const properties = new Set<string>(filters.map((f) => f.filterOption.attributeName));

  for (const property of properties) {
    output[property] = mapFiltersToQueryCustomizerProperty(filters, property);
  }

  return output;
};

export function applyInMemoryFilters<T>(filters: Filter[], data: T[]): T[] {
  let newData: T[] = [...data];

  for (const filter of filters) {
    switch (filter.filterOption.filterType) {
      case FilterType.string:
        newData = filterByStringOperation(filter, data);
        break;
      case FilterType.numeric:
        newData = filterByNumericOperation(filter, data);
        break;
      case FilterType.date:
      case FilterType.dateTime:
        newData = filterByDateOperation(filter, data);
        break;
      case FilterType.boolean:
      case FilterType.trinaryLogic:
        newData = filterByBooleanOperation(filter, data);
        break;
      case FilterType.enumeration:
        newData = filterByEnumerationOperation(filter, data);
        break;
      default:
        console.warn(`Unsupported filter type: ${JSON.stringify(filter, null, 4)}`);
        newData = [...data];
    }
  }

  return newData;
}

export function filterByStringOperation<T>(filter: Filter, data: T[]): T[] {
  const attributeName = filter.filterOption.attributeName as keyof T;
  switch (filter.filterBy.operator) {
    case _StringOperation.equal:
      return data.filter((d) => d[attributeName] === filter.filterBy.value);
    case _StringOperation.notEqual:
      return data.filter((d) => d[attributeName] !== filter.filterBy.value);
    case _StringOperation.like:
      return data.filter((d) =>
        (d[attributeName] as string).toLowerCase().includes(filter.filterBy.value.toLowerCase()),
      );
    case _StringOperation.greaterOrEqual:
      return data.filter((d) => (d[attributeName] as string).localeCompare(filter.filterBy.value) >= 0);
    case _StringOperation.greaterThan:
      return data.filter((d) => (d[attributeName] as string).localeCompare(filter.filterBy.value) > 0);
    case _StringOperation.lessOrEqual:
      return data.filter((d) => (d[attributeName] as string).localeCompare(filter.filterBy.value) <= 0);
    case _StringOperation.lessThan:
      return data.filter((d) => (d[attributeName] as string).localeCompare(filter.filterBy.value) < 0);
    default:
      return [...data];
  }
}

export function filterByNumericOperation<T>(filter: Filter, data: T[]): T[] {
  const attributeName = filter.filterOption.attributeName as keyof T;
  switch (filter.filterBy.operator) {
    case _NumericOperation.equal:
      return data.filter((d) => (d[attributeName] as number) === filter.filterBy.value);
    case _NumericOperation.notEqual:
      return data.filter((d) => (d[attributeName] as number) !== filter.filterBy.value);
    case _NumericOperation.lessThan:
      return data.filter((d) => (d[attributeName] as number) < filter.filterBy.value);
    case _NumericOperation.lessOrEqual:
      return data.filter((d) => (d[attributeName] as number) <= filter.filterBy.value);
    case _NumericOperation.greaterThan:
      return data.filter((d) => (d[attributeName] as number) > filter.filterBy.value);
    case _NumericOperation.greaterOrEqual:
      return data.filter((d) => (d[attributeName] as number) >= filter.filterBy.value);
    default:
      return [...data];
  }
}

export function filterByDateOperation<T>(filter: Filter, data: T[]): T[] {
  const attributeName = filter.filterOption.attributeName as keyof T;
  switch (filter.filterBy.operator) {
    case _NumericOperation.equal:
      return data.filter((d) => isEqual(serviceDateToUiDate(d[attributeName]), filter.filterBy.value));
    case _NumericOperation.notEqual:
      return data.filter((d) => !isEqual(serviceDateToUiDate(d[attributeName]), filter.filterBy.value));
    case _NumericOperation.lessThan:
      return data.filter((d) => compareAsc(serviceDateToUiDate(d[attributeName]), filter.filterBy.value) < 0);
    case _NumericOperation.lessOrEqual:
      return data.filter((d) => compareAsc(serviceDateToUiDate(d[attributeName]), filter.filterBy.value) <= 0);
    case _NumericOperation.greaterThan:
      return data.filter((d) => compareAsc(serviceDateToUiDate(d[attributeName]), filter.filterBy.value) > 0);
    case _NumericOperation.greaterOrEqual:
      return data.filter((d) => compareAsc(serviceDateToUiDate(d[attributeName]), filter.filterBy.value) >= 0);
    default:
      return [...data];
  }
}

export function filterByBooleanOperation<T>(filter: Filter, data: T[]): T[] {
  const attributeName = filter.filterOption.attributeName as keyof T;
  switch (filter.filterBy.operator) {
    case _BooleanOperation.equals:
      return data.filter((d) => {
        if (d[attributeName] === undefined || d[attributeName] === null) {
          return filter.filterBy.value === undefined || filter.filterBy.value === null;
        }
        return (d[attributeName] as boolean) === filter.filterBy.value;
      });
    default:
      return [...data];
  }
}

export function filterByEnumerationOperation<T>(filter: Filter, data: T[]): T[] {
  const attributeName = filter.filterOption.attributeName as keyof T;
  switch (filter.filterBy.operator) {
    case _EnumerationOperation.equals:
      return data.filter((d) => d[attributeName] === filter.filterBy.value);
    case _EnumerationOperation.notEquals:
      return data.filter((d) => d[attributeName] !== filter.filterBy.value);
    default:
      return [...data];
  }
}

// MUI PRO START

function mapStringOperator(operator: string): _StringOperation {
  if (operator === 'equals') {
    return _StringOperation.equal;
  }
  if (operator === 'not') {
    return _StringOperation.notEqual;
  }

  // contains
  return _StringOperation.like;
}

function mapNumericOperator(operator: string): _NumericOperation {
  if (operator === '!=') {
    return _NumericOperation.notEqual;
  }
  if (operator === '>') {
    return _NumericOperation.greaterThan;
  }
  if (operator === '>=') {
    return _NumericOperation.greaterOrEqual;
  }
  if (operator === '<') {
    return _NumericOperation.lessThan;
  }
  if (operator === '<=') {
    return _NumericOperation.lessOrEqual;
  }

  // =
  return _NumericOperation.equal;
}

function mapDateOperator(operator: string): _NumericOperation {
  if (operator === 'is') {
    return _NumericOperation.equal;
  }
  if (operator === 'not') {
    return _NumericOperation.notEqual;
  }
  if (operator === 'after') {
    return _NumericOperation.greaterThan;
  }
  if (operator === 'onOrAfter') {
    return _NumericOperation.greaterOrEqual;
  }
  if (operator === 'before') {
    return _NumericOperation.lessThan;
  }
  if (operator === 'onOrBefore') {
    return _NumericOperation.lessOrEqual;
  }

  // is
  return _NumericOperation.equal;
}

function mapBooleanOperator(operator: string): _BooleanOperation {
  // is
  return _BooleanOperation.equals;
}

function mapSingleSelectOperator(operator: string): _EnumerationOperation {
  if (operator === 'not') {
    return _EnumerationOperation.notEquals;
  }

  // is
  return _EnumerationOperation.equals;
}

export function mapFilterModelToFilters(filterModel: GridFilterModel, filterOptions: FilterOption[]): Filter[] {
  const filters: Filter[] = [];

  for (const item of filterModel.items) {
    const filterOption = filterOptions.find((o) => o.attributeName === item.field);

    if (!filterOption) {
      console.warn(`Could not map filter option for filter item: ${JSON.stringify(item, null, 4)}`);
      continue;
    }

    const filter: Omit<Filter, 'filterBy'> = {
      valueId: `${item.id}`,
      filterOption,
      id: `${item.id}`,
      operationId: `${item.id}-operation`,
    };

    switch (filterOption!.filterType) {
      case FilterType.string:
        filters.push({
          ...filter,
          filterBy: {
            value: item.value,
            operator: mapStringOperator(item.operator),
          },
        });
        break;
      case FilterType.numeric:
        filters.push({
          ...filter,
          filterBy: {
            value: item.value,
            operator: mapNumericOperator(item.operator),
          },
        });
        break;
      case FilterType.date:
        filters.push({
          ...filter,
          filterBy: {
            value: item.value,
            operator: mapDateOperator(item.operator),
          },
        });
        break;
      case FilterType.dateTime:
        filters.push({
          ...filter,
          filterBy: {
            value: new Date(item.value).toISOString(),
            operator: mapDateOperator(item.operator),
          },
        });
        break;
      case FilterType.boolean:
      case FilterType.trinaryLogic:
        filters.push({
          ...filter,
          filterBy: {
            value: item.value,
            operator: mapBooleanOperator(item.operator),
          },
        });
        break;
      case FilterType.enumeration:
        filters.push({
          ...filter,
          filterBy: {
            value: item.value,
            operator: mapSingleSelectOperator(item.operator),
          },
        });
        break;
      default:
        console.warn(`Unsupported filter item: ${JSON.stringify(item, null, 4)}`);
    }
  }

  return filters;
}

export function mapFilterToFilterModel(filter: Filter): GridFilterItem {
  const filterOption = filter.filterOption;
  const filterBy = filter.filterBy;
  const res: Omit<GridFilterItem, 'value' | 'operator'> = {
    id: filter.id,
    field: filterOption.attributeName,
  };
  switch (filterOption!.filterType) {
    case FilterType.string:
      return {
        ...res,
        value: filterBy.value,
        operator: filterBy.operator === _StringOperation.equal ? 'equals' : 'not',
      };
    case FilterType.numeric:
      return {
        ...res,
        value: filterBy.value,
        operator: filterBy.operator === _NumericOperation.equal ? '=' : '!=',
      };
    case FilterType.date:
    case FilterType.dateTime:
      return {
        ...res,
        value: filterBy.value,
        operator: filterBy.operator === _NumericOperation.equal ? 'is' : 'not',
      };
    case FilterType.boolean:
    case FilterType.trinaryLogic:
      return {
        ...res,
        value: String(filterBy.value),
        operator: filterBy.operator === ('equal' || 'equals') ? 'is' : 'not',
      };
    case FilterType.enumeration:
      return {
        ...res,
        value: filterBy.value,
        operator: filterBy.operator === _EnumerationOperation.equals ? 'is' : 'not',
      };
    default:
      return {
        ...res,
        value: filterBy.value,
        operator: 'equals', // not equals is not supported by MUI for strings
      };
  }
}
