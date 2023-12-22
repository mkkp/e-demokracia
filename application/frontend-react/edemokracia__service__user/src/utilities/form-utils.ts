//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/utilities/form-utils.ts'
// Template name: actor/src/utilities/form-utils.ts
// Template file: actor/src/utilities/form-utils.ts.hbs

import { format } from 'date-fns';
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
  const resolved: Date = typeof time === 'string' ? new Date(time) : time;
  return (
    resolved.getUTCHours().toString().padStart(2, '0') + ':' + resolved.getUTCMinutes().toString().padStart(2, '0')
  );
};

export const serviceTimeToUiTime = (timeStr?: any) => {
  if (typeof timeStr === 'string') {
    let splittedTime = timeStr.split(':');
    let date: Date = new Date();
    date.setHours(Number(splittedTime[0]) - date.getTimezoneOffset() / 60, Number(splittedTime[1]));
    return date;
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
