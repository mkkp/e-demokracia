//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/utilities/helper.ts'
// Template name: actor/src/utilities/helper.ts
// Template file: actor/src/utilities/helper.ts.hbs

import type { RandomUtils } from './interfaces';

export const exists = (element: any) => element !== undefined && element !== null;

export const dateToJudoDateString = (date: Date | null | undefined) => {
  // TODO: consider l10n
  return date ? date.toISOString().substring(0, 10) : date;
};

export const simpleCloneDeep = (input: any): any => {
  if (input === null || input === undefined) {
    return input;
  } else if (Array.isArray(input)) {
    return input.map(simpleCloneDeep);
  } else if (typeof input === 'object') {
    let payload: Record<string, any> = {};
    for (const key in input) {
      payload[key] = simpleCloneDeep(input[key]);
    }
    return payload;
  }
  return input;
};

export const stringToBooleanSelect = (booleanString?: string | null): boolean | null => {
  if (!booleanString || !booleanString.trim()) {
    return null;
  } else {
    return booleanString === 'true';
  }
};

export const booleanToStringSelect = (booleanParam?: boolean | null): string | null => {
  if (booleanParam === null || booleanParam === undefined) {
    return ' ';
  } else if (booleanParam) {
    return 'true';
  } else {
    return 'false';
  }
};

export const endWithSlash = (input: string): string => (input.endsWith('/') ? input : input + '/');

// only for testing purposes
export const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const GENERATOR_UUID_V4 = '2132d139-004a-4ab1-b616-369646f769a9';

export const randomUtils: RandomUtils = {
  getGeneratorUUIDv4: () => GENERATOR_UUID_V4,
};
