//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/utilities/query-customizer-processor.ts'
// Template name: actor/src/utilities/query-customizer-processor.ts
// Template file: actor/src/utilities/query-customizer-processor.ts.hbs

import type { QueryCustomizer } from '~/services/data-api/common';
import { exists, simpleCloneDeep } from './helper';

export function processQueryCustomizer<T>(queryCustomizer: QueryCustomizer<T>): QueryCustomizer<T> {
  const clone: any = simpleCloneDeep(queryCustomizer);

  if (typeof clone !== 'object') {
    return clone;
  }

  const fields = Object.keys(clone).filter((k) => {
    const value: any = (clone as any)[k];
    if (Array.isArray(value) && value.length) {
      const firstItem = value[0];
      const valueKeys: string[] = typeof firstItem === 'object' ? Object.keys(firstItem) : [];
      return valueKeys.length && valueKeys.includes('operator') && valueKeys.includes('value');
    }
    return false;
  });

  for (const field of fields) {
    const filters: any[] = (clone as any)[field];

    filters.forEach((filter: any, index: number) => {
      if (exists(filter.value) && filter.operator === 'like') {
        (clone as any)[field][index] = {
          ...filter,
          value: '%' + filter.value + '%',
        };
      }
    });
  }

  return clone;
}
