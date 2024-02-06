//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/utilities/form-utils.ts'
// Template name: actor/src/utilities/form-utils.ts
// Template file: actor/src/utilities/form-utils.ts.hbs

import { format, parse } from 'date-fns';
import type { TFunction } from 'i18next';
import type { Dispatch, SetStateAction } from 'react';

export const uiDateToServiceDate = (date?: any | null): string | null => {
  if (date === undefined || date === null) {
    return null;
  }

  const resolved: Date = typeof date === 'string' ? new Date(date) : date;

  return format(resolved, 'yyyy-MM-dd');
};

export const serviceDateToUiDate = (dateStr?: any) => {
  if (typeof dateStr === 'string') {
    return new Date(dateStr);
  }
  return dateStr;
};

export const uiTimeToServiceTime = (time?: any | null): string | null => {
  if (time === undefined || time === null) {
    return null;
  }
  // const resolved: Date = typeof time === 'string' ? new Date(time) : time;
  // return resolved.getUTCHours().toString().padStart(2, '0') + ':' + resolved.getUTCMinutes().toString().padStart(2, '0');
  return format(time, 'HH:mm:ss');
};

export const serviceTimeToUiTime = (timeStr?: any) => {
  if (typeof timeStr === 'string') {
    return parse(timeStr, 'HH:mm:ss', new Date());
  }
  return timeStr;
};

export function passesLocalValidation<T>(
  data: T,
  requiredByRecord: Record<string, boolean>,
  t: TFunction<string, any>,
  setValidation: Dispatch<SetStateAction<Map<keyof T, string>>>,
): boolean {
  const failsRequired = (input: any): boolean => input === null || input === undefined || input === '';
  const errorList: string[] = [];
  for (const attr in requiredByRecord) {
    if (failsRequired(data[attr as keyof T] as any) && requiredByRecord[attr]) {
      errorList.push(attr);
    }
  }
  if (errorList.length > 0) {
    const message = t('judo.error.validation-failed.MISSING_REQUIRED_ATTRIBUTE', {
      defaultValue: 'Missing required attribute.',
    }) as string;

    setValidation((prevValidation) => {
      const copy = new Map<keyof T, string>(prevValidation);
      for (const errorAttr of errorList) {
        copy.set(errorAttr as keyof T, message);
      }
      return copy;
    });
    return false;
  }
  return true;
}

export function cleanUpPayload(input: any): any {
  const prefix = 'draft:';
  const payload: Record<string | symbol, any> = {};
  for (const key in input) {
    const value = input[key];
    if (Array.isArray(value)) {
      payload[key] = value.map((r) => {
        if (r.__identifier && r.__identifier.startsWith(prefix)) {
          const newRow = { ...r };
          delete newRow.__identifier;
          return newRow;
        }
        return r;
      });
    } else if (value && value.__identifier && value.__identifier.startsWith(prefix)) {
      const newItem = { ...value };
      delete newItem.__identifier;
      payload[key] = newItem;
    } else if (key !== '__identifier' || !value.startsWith(prefix)) {
      payload[key] = value;
    }
  }
  return payload;
}
