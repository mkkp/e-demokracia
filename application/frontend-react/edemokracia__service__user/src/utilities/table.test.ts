import { describe, expect, it } from 'vitest';
import type { JudoStored } from '~/services/data-api/common';
import { isRowSelectable } from './table';

interface TestType extends JudoStored<TestType> {
  name: string;
}

interface ResponseTestType extends TestType {
  __selected?: boolean;
}

type BaseTestType = Omit<TestType, 'name'>;

describe('isRowSelectable', () => {
  const baseType: BaseTestType = {
    __signedIdentifier: 'test-sid',
  };
  const rangeResultRow: ResponseTestType = {
    ...baseType,
    name: 'test1',
  };

  describe('aggregation', () => {
    describe('table', () => {
      it('selectable, not present in memory', () => {
        const inMemoryItems: TestType[] = [];
        expect(isRowSelectable(rangeResultRow, false, inMemoryItems)).toBe(true);
      });

      it('not selectable, present in memory', () => {
        const inMemoryItems: TestType[] = [rangeResultRow];
        expect(isRowSelectable(rangeResultRow, false, inMemoryItems)).toBe(false);
      });

      it('not selectable, present in memory, even if __selected is false', () => {
        const rangeResultRowNotSelected: ResponseTestType = {
          ...rangeResultRow,
          __selected: false,
        };
        const inMemoryItems: TestType[] = [
          {
            ...rangeResultRowNotSelected,
          },
        ];
        expect(isRowSelectable(rangeResultRowNotSelected, false, inMemoryItems)).toBe(false);
      });
    });

    describe('single', () => {
      it('selectable, not present in memory', () => {
        const inMemoryItems: TestType[] = [];
        expect(isRowSelectable(rangeResultRow, true, inMemoryItems)).toBe(true);
      });

      it('selectable, no value present', () => {
        expect(isRowSelectable(rangeResultRow, true)).toBe(true);
      });

      it('selectable, event though backend says it is already selected', () => {
        const rangeResultRowSelected: ResponseTestType = {
          ...rangeResultRow,
          __selected: true,
        };
        expect(isRowSelectable(rangeResultRowSelected, true)).toBe(true);
      });

      it('not selectable, present in memory', () => {
        const inMemoryItems: TestType[] = [rangeResultRow];
        expect(isRowSelectable(rangeResultRow, true, inMemoryItems)).toBe(false);
      });
    });
  });

  describe('association', () => {
    describe('table', () => {
      it('selectable, __selected missing', () => {
        expect(isRowSelectable(rangeResultRow, false)).toBe(true);
      });

      it('selectable, __selected false', () => {
        const rangeResultRowNotSelected: ResponseTestType = {
          ...rangeResultRow,
          __selected: false,
        };
        expect(isRowSelectable(rangeResultRowNotSelected, false)).toBe(true);
      });

      it('not selectable, __selected true', () => {
        const rangeResultRowSelected: ResponseTestType = {
          ...rangeResultRow,
          __selected: true,
        };
        expect(isRowSelectable(rangeResultRowSelected, false)).toBe(false);
      });
    });
  });
});
