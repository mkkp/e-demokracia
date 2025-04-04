import type { GridFilterItem, GridFilterModel } from '@mui/x-data-grid';
import { GridLogicOperator } from '@mui/x-data-grid';
import { compareAsc, isEqual } from 'date-fns';
import { v1 as uuidv1 } from 'uuid';
import type { Serializer } from '~/services/data-api/common/Serializer';
import {
  _BooleanOperation,
  _EnumerationOperation,
  _NumericOperation,
  _StringOperation,
} from '~/services/data-api/common/operations';
import type { Filter, FilterOption, Operation } from '../components-api';
import { FilterType } from '../components-api';
import { CardsFilterDefinition } from '../components/widgets/CardsFilter';
import { simpleCloneDeep, ucFirst } from './helper';

type FilterBy = {
  value: any;
  operator: Operation;
};

export const getOperationEnumValue = (filter: Filter, operator: string) => {
  switch (filter.filterOption.filterType) {
    case FilterType.boolean:
      return _BooleanOperation[operator as keyof typeof _BooleanOperation];
    case FilterType.date:
      return _NumericOperation[operator as keyof typeof _NumericOperation];
    case FilterType.dateTime:
      return _NumericOperation[operator as keyof typeof _NumericOperation];
    // case FilterType.time:
    //   return _NumericOperation[operator as keyof typeof _NumericOperation];
    case FilterType.enumeration:
      return _EnumerationOperation[operator as keyof typeof _BooleanOperation];
    case FilterType.numeric:
      return _NumericOperation[operator as keyof typeof _NumericOperation];
    case FilterType.string:
      return _StringOperation[operator as keyof typeof _StringOperation];
    case FilterType.trinaryLogic:
      return _BooleanOperation[operator as keyof typeof _BooleanOperation];
  }
};

export const getDefaultOperator = (filterType: FilterType) => {
  switch (filterType) {
    case FilterType.boolean:
      return _BooleanOperation['equals'];
    case FilterType.date:
      return _NumericOperation['equal'];
    case FilterType.dateTime:
      return _NumericOperation['equal'];
    // case FilterType.time:
    //   return _NumericOperation['equal'];
    case FilterType.enumeration:
      return _EnumerationOperation['equals'];
    case FilterType.numeric:
      return _NumericOperation['equal'];
    case FilterType.string:
      return _StringOperation['like'];
    case FilterType.trinaryLogic:
      return _BooleanOperation['equals'];
  }
};

export function getOperationFromFilterOperationType(filter: FilterOption, operation?: Operation): Operation {

  
  filter.filterType == FilterType.boolean

}

export const getEqualityOperator = (filter: Filter): 'equal' | 'equals' => {
  switch (filter.filterOption.filterType) {
    case FilterType.boolean:
      return 'equals';
    case FilterType.date:
      return 'equal';
    case FilterType.dateTime:
      return 'equal';
    // case FilterType.time:
    //   return 'equal';
    case FilterType.enumeration:
      return 'equals';
    case FilterType.numeric:
      return 'equal';
    case FilterType.string:
      return 'equal';
    case FilterType.trinaryLogic:
      return 'equals';
  }
};

export const getOperatorsByFilter = (filter: Filter): string[] => {
  switch (filter.filterOption.filterType) {
    case FilterType.boolean:
      return Object.values(_BooleanOperation);
    case FilterType.date:
      return Object.values(_NumericOperation);
    case FilterType.dateTime:
      return Object.values(_NumericOperation);
    // case FilterType.time:
    //   return Object.values(_NumericOperation);
    case FilterType.enumeration:
      return Object.values(_EnumerationOperation);
    case FilterType.numeric:
      return Object.values(_NumericOperation);
    case FilterType.string:
      return Object.values(_StringOperation);
    case FilterType.trinaryLogic:
      return Object.values(_BooleanOperation);
  }
};

export const isFilterWithoutValue = (filter: Filter) => {
  return ['isNotEmpty', 'isEmpty'].includes(getOperationEnumValue(filter, filter.filterBy.operator));
};

export const mapFiltersToQueryCustomizerProperty = (filters: Filter[], property: string): FilterBy[] | undefined => {
  if (!filters.some((filter) => filter.filterOption.attributeName === property)) return undefined;

  return filters
    .filter(
      (filter) =>
        filter.filterOption.attributeName === property &&
        (isFilterWithoutValue(filter) || (filter.filterBy.value !== undefined && filter.filterBy.value !== null)),
    )
    .map((filter) => {
      if (isFilterWithoutValue(filter)) {
        const equals = getEqualityOperator(filter);
        const notEquals = 'not' + ucFirst(equals);
        return {
          value: null,
          operator: (filter.filterBy.operator === 'isNotEmpty' ? notEquals : equals) as Operation,
        };
      }
      return {
        value: filter.filterBy.value,
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
        ((d[attributeName] as string) || '').toLowerCase().includes(filter.filterBy.value.toLowerCase()),
      );
    case _StringOperation.greaterOrEqual:
      return data.filter((d) => (d[attributeName] as string).localeCompare(filter.filterBy.value) >= 0);
    case _StringOperation.greaterThan:
      return data.filter((d) => (d[attributeName] as string).localeCompare(filter.filterBy.value) > 0);
    case _StringOperation.lessOrEqual:
      return data.filter((d) => (d[attributeName] as string).localeCompare(filter.filterBy.value) <= 0);
    case _StringOperation.lessThan:
      return data.filter((d) => (d[attributeName] as string).localeCompare(filter.filterBy.value) < 0);
    case _StringOperation.isNotEmpty:
      return data.filter((d) => d[attributeName] !== null && d[attributeName] !== undefined);
    case _StringOperation.isEmpty:
      return data.filter((d) => d[attributeName] === null || d[attributeName] === undefined);
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
    case _NumericOperation.isNotEmpty:
      return data.filter((d) => d[attributeName] !== null && d[attributeName] !== undefined);
    case _NumericOperation.isEmpty:
      return data.filter((d) => d[attributeName] === null || d[attributeName] === undefined);
    default:
      return [...data];
  }
}

export function filterByDateOperation<T>(filter: Filter, data: T[]): T[] {
  const attributeName = filter.filterOption.attributeName as keyof T;
  switch (filter.filterBy.operator) {
    case _NumericOperation.equal:
      return data.filter((d) => isEqual(d[attributeName] as Date, filter.filterBy.value));
    case _NumericOperation.notEqual:
      return data.filter((d) => !isEqual(d[attributeName] as Date, filter.filterBy.value));
    case _NumericOperation.lessThan:
      return data.filter((d) => compareAsc(d[attributeName] as Date, filter.filterBy.value) < 0);
    case _NumericOperation.lessOrEqual:
      return data.filter((d) => compareAsc(d[attributeName] as Date, filter.filterBy.value) <= 0);
    case _NumericOperation.greaterThan:
      return data.filter((d) => compareAsc(d[attributeName] as Date, filter.filterBy.value) > 0);
    case _NumericOperation.greaterOrEqual:
      return data.filter((d) => compareAsc(d[attributeName] as Date, filter.filterBy.value) >= 0);
    case _NumericOperation.isNotEmpty:
      return data.filter((d) => d[attributeName] !== null && d[attributeName] !== undefined);
    case _NumericOperation.isEmpty:
      return data.filter((d) => d[attributeName] === null || d[attributeName] === undefined);
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
    case _BooleanOperation.isNotEmpty:
      return data.filter((d) => d[attributeName] !== null && d[attributeName] !== undefined);
    case _BooleanOperation.isEmpty:
      return data.filter((d) => d[attributeName] === null || d[attributeName] === undefined);
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
    case _EnumerationOperation.isNotEmpty:
      return data.filter((d) => d[attributeName] !== null && d[attributeName] !== undefined);
    case _EnumerationOperation.isEmpty:
      return data.filter((d) => d[attributeName] === null || d[attributeName] === undefined);
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
  if (operator === 'isEmpty') {
    return _StringOperation.isEmpty;
  }
  if (operator === 'isNotEmpty') {
    return _StringOperation.isNotEmpty;
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
  if (operator === 'isEmpty') {
    return _NumericOperation.isEmpty;
  }
  if (operator === 'isNotEmpty') {
    return _NumericOperation.isNotEmpty;
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
  if (operator === 'isEmpty') {
    return _NumericOperation.isEmpty;
  }
  if (operator === 'isNotEmpty') {
    return _NumericOperation.isNotEmpty;
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
  if (operator === 'isEmpty') {
    return _EnumerationOperation.isEmpty;
  }
  if (operator === 'isNotEmpty') {
    return _EnumerationOperation.isNotEmpty;
  }

  // is
  return _EnumerationOperation.equals;
}

// Used to transform MUI Grid filters to JUDO compliant filters
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
            value: item.value ? (typeof item.value === 'string' ? new Date(item.value) : item.value) : undefined,
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

export function mapCardsFiltersToFilters<T>(
  cardsFilters: CardsFilterDefinition<T>[],
  values: Record<string, any>,
): Filter[] {
  const filters: Filter[] = [];

  for (const def of cardsFilters) {
    if (values.hasOwnProperty(def.field)) {
      if (def.type === FilterType.boolean || def.type === FilterType.string) {
        const key = def.field as string;
        filters.push({
          id: `id-${key}`,
          operationId: `eq-${key}`,
          valueId: `v-${key}`,
          filterOption: {
            id: `o-${key}`,
            attributeName: key,
            filterType: def.type,
          },
          filterBy: {
            value: values[key],
            operator: def.operator
              ? def.operator
              : def.type === FilterType.boolean
                ? _BooleanOperation.equals
                : _StringOperation.equal,
          },
        });
      }
    }
  }

  return filters;
}

export function operatorToMUIOperator(operator: string, equals: string, notEquals: string): string {
  if (operator === 'isEmpty' || operator === 'isNotEmpty') {
    return operator;
  }
  return operator === 'equal' || operator === 'equals' ? equals : notEquals;
}

// Used by cell context menus
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
        operator: operatorToMUIOperator(filterBy.operator, 'equals', 'not'),
      };
    case FilterType.numeric:
      return {
        ...res,
        value: filterBy.value,
        operator: operatorToMUIOperator(filterBy.operator, '=', '!='),
      };
    case FilterType.date:
    case FilterType.dateTime:
      return {
        ...res,
        value: filterBy.value,
        operator: operatorToMUIOperator(filterBy.operator, 'is', 'not'),
      };
    case FilterType.boolean:
    case FilterType.trinaryLogic:
      return {
        ...res,
        value: String(filterBy.value),
        operator: operatorToMUIOperator(filterBy.operator, 'is', 'not'),
      };
    case FilterType.enumeration:
      return {
        ...res,
        value: filterBy.value,
        operator: operatorToMUIOperator(filterBy.operator, 'is', 'not'),
      };
    default:
      return {
        ...res,
        value: filterBy.value,
        operator: 'equals', // not equals is not supported by MUI for strings
      };
  }
}

export type FilterBuilder = <T>(
  filterType: FilterType,
  operator: Operation,
  attributeName: keyof T,
  value: any,
) => Filter;

export const buildFilter: FilterBuilder = (filterType, operator, attributeName, value): Filter => {
  const randomized = uuidv1();
  return {
    id: randomized + '-id',
    valueId: randomized + '-value',
    operationId: randomized + '-operation',
    filterBy: {
      operator: operator,
      value,
    },
    filterOption: {
      attributeName: attributeName as string,
      id: randomized + '-filter-option',
      filterType,
    },
  };
};

export interface FiltersSerializer {
  serialize: (filters: Filter[]) => Filter[];
  deserialize: (filters: Filter[]) => Filter[];
}

export const serializeFilters = <T>(filters: Filter[], serializer: Serializer<any>): Filter[] => {
  return simpleCloneDeep(filters).map((a) => ({
    ...a,
    filterBy: {
      ...a.filterBy,
      value: serializer.serialize({
        [a.filterOption.attributeName]: a.filterBy.value,
      } as T)[a.filterOption.attributeName],
    },
  }));
};

export const deserializeFilters = <T>(filters: Filter[], serializer: Serializer<any>): Filter[] => {
  return filters.map((a) => ({
    ...a,
    filterBy: {
      ...a.filterBy,
      value: serializer.deserialize({
        [a.filterOption.attributeName as keyof T]: a.filterBy.value,
      })[a.filterOption.attributeName as keyof T],
    },
  }));
};
