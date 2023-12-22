import { describe, expect, it } from 'vitest';
import type { Filter, FilterOption, Operation } from '~/components-api';
import { FilterType } from '~/components-api';
import {
  _BooleanOperation,
  _EnumerationOperation,
  _NumericOperation,
  _StringOperation,
} from '~/services/data-api/common';
import {
  applyInMemoryFilters,
  filterByBooleanOperation,
  filterByDateOperation,
  filterByEnumerationOperation,
  filterByNumericOperation,
  filterByStringOperation,
} from '~/utilities/filter-helper';

enum TestEnum {
  yayy = 'YAYY',
  nay = 'NAY',
}

interface TestType {
  name: string;
  age: number;
  isOkay?: boolean;
  registered: string;
  left: string;
  happy: TestEnum;
}

const data: TestType[] = [
  {
    name: 'Jake',
    age: 31,
    isOkay: true,
    registered: '2023-06-19',
    left: '2023-06-20T13:20:00.000Z',
    happy: TestEnum.yayy,
  },
  {
    name: 'Andrea',
    age: 14,
    isOkay: true,
    registered: '2023-02-19',
    left: '2023-02-20T13:20:00.000Z',
    happy: TestEnum.nay,
  },
  { name: 'Julia', age: 55, registered: '2023-04-19', left: '2023-04-20T13:18:00.000Z', happy: TestEnum.nay },
  {
    name: 'Henry',
    age: 41,
    isOkay: false,
    registered: '2023-04-18',
    left: '2023-04-20T13:20:00.000Z',
    happy: TestEnum.yayy,
  },
];

describe('filterByStringOperation', () => {
  it('equal', () => {
    const filter = createStringFilter('name', _StringOperation.equal, 'Jake');
    const result = filterByStringOperation(filter, data);

    expect(result.length).toBe(1);
    expect(result[0].name).toBe('Jake');
  });

  it('notEqual', () => {
    const filter = createStringFilter('name', _StringOperation.notEqual, 'Jake');
    const result = filterByStringOperation(filter, data);

    expect(result.length).toBe(3);
    expect(result[0].name).toBe('Andrea');
    expect(result.map((r) => r.name)).toEqual(['Andrea', 'Julia', 'Henry']);
  });

  it('like', () => {
    const filter = createStringFilter('name', _StringOperation.like, 'he');
    const result = filterByStringOperation(filter, data);

    expect(result.length).toBe(1);
    expect(result.map((r) => r.name)).toEqual(['Henry']);
  });

  it('greaterOrEqual', () => {
    const filter = createStringFilter('name', _StringOperation.greaterOrEqual, 'Jake');
    const result = filterByStringOperation(filter, data);

    expect(result.length).toBe(2);
    expect(result.map((r) => r.name)).toEqual(['Jake', 'Julia']);
  });

  it('greaterThan', () => {
    const filter = createStringFilter('name', _StringOperation.greaterThan, 'Jake');
    const result = filterByStringOperation(filter, data);

    expect(result.length).toBe(1);
    expect(result.map((r) => r.name)).toEqual(['Julia']);
  });

  it('lessOrEqual', () => {
    const filter = createStringFilter('name', _StringOperation.lessOrEqual, 'Jake');
    const result = filterByStringOperation(filter, data);

    expect(result.length).toBe(3);
    expect(result.map((r) => r.name)).toEqual(['Jake', 'Andrea', 'Henry']);
  });

  it('lessThan', () => {
    const filter = createStringFilter('name', _StringOperation.lessThan, 'Jake');
    const result = filterByStringOperation(filter, data);

    expect(result.length).toBe(2);
    expect(result.map((r) => r.name)).toEqual(['Andrea', 'Henry']);
  });
});

describe('filterByNumericOperation', () => {
  it('equal', () => {
    const filter = createNumericFilter('age', _NumericOperation.equal, 31);
    const result = filterByNumericOperation(filter, data);

    expect(result.length).toBe(1);
    expect(result.map((r) => r.name)).toEqual(['Jake']);
  });

  it('notEqual', () => {
    const filter = createNumericFilter('age', _NumericOperation.notEqual, 31);
    const result = filterByNumericOperation(filter, data);

    expect(result.length).toBe(3);
    expect(result.map((r) => r.name)).toEqual(['Andrea', 'Julia', 'Henry']);
  });

  it('lessThan', () => {
    const filter = createNumericFilter('age', _NumericOperation.lessThan, 31);
    const result = filterByNumericOperation(filter, data);

    expect(result.length).toBe(1);
    expect(result.map((r) => r.name)).toEqual(['Andrea']);
  });

  it('lessOrEqual', () => {
    const filter = createNumericFilter('age', _NumericOperation.lessOrEqual, 31);
    const result = filterByNumericOperation(filter, data);

    expect(result.length).toBe(2);
    expect(result.map((r) => r.name)).toEqual(['Jake', 'Andrea']);
  });

  it('greaterThan', () => {
    const filter = createNumericFilter('age', _NumericOperation.greaterThan, 31);
    const result = filterByNumericOperation(filter, data);

    expect(result.length).toBe(2);
    expect(result.map((r) => r.name)).toEqual(['Julia', 'Henry']);
  });

  it('greaterOrEqual', () => {
    const filter = createNumericFilter('age', _NumericOperation.greaterOrEqual, 31);
    const result = filterByNumericOperation(filter, data);

    expect(result.length).toBe(3);
    expect(result.map((r) => r.name)).toEqual(['Jake', 'Julia', 'Henry']);
  });
});

describe('filterByDateOperation', () => {
  it('equal', () => {
    const filter = createDateFilter('registered', _NumericOperation.equal, new Date('2023-06-19'));
    const result = filterByDateOperation(filter, data);

    expect(result.length).toBe(1);
    expect(result.map((r) => r.name)).toEqual(['Jake']);
  });

  it('notEqual', () => {
    const filter = createDateFilter('registered', _NumericOperation.notEqual, new Date('2023-06-19'));
    const result = filterByDateOperation(filter, data);

    expect(result.length).toBe(3);
    expect(result.map((r) => r.name)).toEqual(['Andrea', 'Julia', 'Henry']);
  });

  it('lessThan', () => {
    const filter = createDateFilter('registered', _NumericOperation.lessThan, new Date('2023-04-18'));
    const result = filterByDateOperation(filter, data);

    expect(result.length).toBe(1);
    expect(result.map((r) => r.name)).toEqual(['Andrea']);
  });

  it('lessOrEqual', () => {
    const filter = createDateFilter('registered', _NumericOperation.lessOrEqual, new Date('2023-04-19'));
    const result = filterByDateOperation(filter, data);

    expect(result.length).toBe(3);
    expect(result.map((r) => r.name)).toEqual(['Andrea', 'Julia', 'Henry']);
  });

  it('greaterThan', () => {
    const filter = createDateFilter('registered', _NumericOperation.greaterThan, new Date('2023-04-18'));
    const result = filterByDateOperation(filter, data);

    expect(result.length).toBe(2);
    expect(result.map((r) => r.name)).toEqual(['Jake', 'Julia']);
  });

  it('greaterOrEqual', () => {
    const filter = createDateFilter('registered', _NumericOperation.greaterOrEqual, new Date('2023-04-18'));
    const result = filterByDateOperation(filter, data);

    expect(result.length).toBe(3);
    expect(result.map((r) => r.name)).toEqual(['Jake', 'Julia', 'Henry']);
  });
});

describe('filterByDateTimeOperation', () => {
  it('equal', () => {
    const filter = createDateTimeFilter('left', _NumericOperation.equal, new Date('2023-06-20T13:20:00.000Z'));
    const result = filterByDateOperation(filter, data);

    expect(result.length).toBe(1);
    expect(result.map((r) => r.name)).toEqual(['Jake']);
  });

  it('notEqual', () => {
    const filter = createDateTimeFilter('left', _NumericOperation.notEqual, new Date('2023-06-20T13:20:00.000Z'));
    const result = filterByDateOperation(filter, data);

    expect(result.length).toBe(3);
    expect(result.map((r) => r.name)).toEqual(['Andrea', 'Julia', 'Henry']);
  });

  it('lessThan', () => {
    const filter = createDateTimeFilter('left', _NumericOperation.lessThan, new Date('2023-04-20T13:18:00.000Z'));
    const result = filterByDateOperation(filter, data);

    expect(result.length).toBe(1);
    expect(result.map((r) => r.name)).toEqual(['Andrea']);
  });

  it('lessOrEqual', () => {
    const filter = createDateTimeFilter('left', _NumericOperation.lessOrEqual, new Date('2023-04-20T13:20:00.000Z'));
    const result = filterByDateOperation(filter, data);

    expect(result.length).toBe(3);
    expect(result.map((r) => r.name)).toEqual(['Andrea', 'Julia', 'Henry']);
  });

  it('greaterThan', () => {
    const filter = createDateTimeFilter('left', _NumericOperation.greaterThan, new Date('2023-04-20T13:18:00.000Z'));
    const result = filterByDateOperation(filter, data);

    expect(result.length).toBe(2);
    expect(result.map((r) => r.name)).toEqual(['Jake', 'Henry']);
  });

  it('greaterOrEqual', () => {
    const filter = createDateTimeFilter('left', _NumericOperation.greaterOrEqual, new Date('2023-04-20T13:18:00.000Z'));
    const result = filterByDateOperation(filter, data);

    expect(result.length).toBe(3);
    expect(result.map((r) => r.name)).toEqual(['Jake', 'Julia', 'Henry']);
  });
});

describe('filterByBooleanOperation', () => {
  it('equals - true', () => {
    const filter = createBooleanFilter('isOkay', _BooleanOperation.equals, true);
    const result = filterByBooleanOperation(filter, data);

    expect(result.length).toBe(2);
    expect(result.map((r) => r.name)).toEqual(['Jake', 'Andrea']);
  });

  it('equals - false', () => {
    const filter = createBooleanFilter('isOkay', _BooleanOperation.equals, false);
    const result = filterByBooleanOperation(filter, data);

    expect(result.length).toBe(1);
    expect(result.map((r) => r.name)).toEqual(['Henry']);
  });
});

describe('filterByTrinaryLogicOperation', () => {
  it('equals - true', () => {
    const filter = createTrinaryLogicFilter('isOkay', _BooleanOperation.equals, true);
    const result = filterByBooleanOperation(filter, data);

    expect(result.length).toBe(2);
    expect(result.map((r) => r.name)).toEqual(['Jake', 'Andrea']);
  });

  it('equals - false', () => {
    const filter = createTrinaryLogicFilter('isOkay', _BooleanOperation.equals, false);
    const result = filterByBooleanOperation(filter, data);

    expect(result.length).toBe(1);
    expect(result.map((r) => r.name)).toEqual(['Henry']);
  });

  it('equals - undefined', () => {
    const filter = createTrinaryLogicFilter('isOkay', _BooleanOperation.equals, undefined);
    const result = filterByBooleanOperation(filter, data);

    expect(result.length).toBe(1);
    expect(result.map((r) => r.name)).toEqual(['Julia']);
  });
});

describe('filterByEnumerationOperation', () => {
  it('equals', () => {
    const filter = createEnumerationFilter('happy', _EnumerationOperation.equals, TestEnum.yayy);
    const result = filterByEnumerationOperation(filter, data);

    expect(result.length).toBe(2);
    expect(result.map((r) => r.name)).toEqual(['Jake', 'Henry']);
  });

  it('notEquals', () => {
    const filter = createEnumerationFilter('happy', _EnumerationOperation.notEquals, TestEnum.yayy);
    const result = filterByEnumerationOperation(filter, data);

    expect(result.length).toBe(2);
    expect(result.map((r) => r.name)).toEqual(['Andrea', 'Julia']);
  });
});

describe('filter combinations', () => {
  it('enum with date', () => {
    const happyIsYayy = createEnumerationFilter('happy', _EnumerationOperation.notEquals, TestEnum.yayy);
    const registeredBefore = createDateFilter('registered', _NumericOperation.lessThan, new Date('2023-04-18'));
    const result = applyInMemoryFilters([happyIsYayy, registeredBefore], data);

    expect(result.length).toBe(1);
    expect(result.map((r) => r.name)).toEqual(['Andrea']);
  });

  it('string with numeric', () => {
    const nameLessOrEqual = createStringFilter('name', _StringOperation.lessOrEqual, 'Jake');
    const ageLessOrEqual = createNumericFilter('age', _NumericOperation.lessOrEqual, 31);

    const result = applyInMemoryFilters([nameLessOrEqual, ageLessOrEqual], data);

    expect(result.length).toBe(2);
    expect(result.map((r) => r.name)).toEqual(['Jake', 'Andrea']);
  });
});

function createStringFilter(attributeName: keyof TestType, operator: _StringOperation, value: string): Filter {
  return {
    id: 'filterByStringOperation',
    operationId: 'filterByStringOperation',
    valueId: attributeName,
    filterOption: {
      id: 'filterByStringOperation-' + attributeName,
      filterType: FilterType.string,
      attributeName,
    },
    filterBy: {
      operator,
      value,
    },
  };
}

function createNumericFilter(attributeName: keyof TestType, operator: _NumericOperation, value: number): Filter {
  return {
    id: 'filterByNumericOperation',
    operationId: 'filterByNumericOperation',
    valueId: attributeName,
    filterOption: {
      id: 'filterByNumericOperation-' + attributeName,
      filterType: FilterType.numeric,
      attributeName,
    },
    filterBy: {
      operator,
      value,
    },
  };
}

function createDateFilter(attributeName: keyof TestType, operator: _NumericOperation, value: Date): Filter {
  return {
    id: 'filterByNumericOperation',
    operationId: 'filterByNumericOperation',
    valueId: attributeName,
    filterOption: {
      id: 'filterByNumericOperation-' + attributeName,
      filterType: FilterType.date,
      attributeName,
    },
    filterBy: {
      operator,
      value,
    },
  };
}

function createDateTimeFilter(attributeName: keyof TestType, operator: _NumericOperation, value: Date): Filter {
  return {
    id: 'filterByNumericOperation',
    operationId: 'filterByNumericOperation',
    valueId: attributeName,
    filterOption: {
      id: 'filterByNumericOperation-' + attributeName,
      filterType: FilterType.dateTime,
      attributeName,
    },
    filterBy: {
      operator,
      value,
    },
  };
}

function createBooleanFilter(attributeName: keyof TestType, operator: _BooleanOperation, value: boolean): Filter {
  return {
    id: 'filterByBooleanOperation',
    operationId: 'filterByBooleanOperation',
    valueId: attributeName,
    filterOption: {
      id: 'filterByBooleanOperation-' + attributeName,
      filterType: FilterType.boolean,
      attributeName,
    },
    filterBy: {
      operator,
      value,
    },
  };
}

function createTrinaryLogicFilter(attributeName: keyof TestType, operator: _BooleanOperation, value?: boolean): Filter {
  return {
    id: 'filterByBooleanOperation',
    operationId: 'filterByBooleanOperation',
    valueId: attributeName,
    filterOption: {
      id: 'filterByBooleanOperation-' + attributeName,
      filterType: FilterType.trinaryLogic,
      attributeName,
    },
    filterBy: {
      operator,
      value,
    },
  };
}

function createEnumerationFilter<T extends { [key: string]: string }>(
  attributeName: keyof TestType,
  operator: _EnumerationOperation,
  value: keyof T,
): Filter {
  return {
    id: 'filterByEnumerationOperation',
    operationId: 'filterByEnumerationOperation',
    valueId: attributeName,
    filterOption: {
      id: 'filterByEnumerationOperation-' + attributeName,
      filterType: FilterType.enumeration,
      attributeName,
    },
    filterBy: {
      operator,
      value,
    },
  };
}
