//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/custom/interfaces.ts'
// Template name: actor/src/custom/interfaces.ts
// Template file: actor/src/custom/interfaces.ts.hbs

import type { BundleContext } from '@pandino/pandino-api';

export interface ApplicationCustomizer {
  customize(context: BundleContext): Promise<void>;
}

export interface GenericProxyProps<T, A> {
  data: T;
  validation: Map<keyof T, string>;
  editMode?: boolean;
  storeDiff: (attributeName: keyof T, value: any) => void;
  isLoading: boolean;
  actions: A;
}

export interface AttributeBasedProxyProps<T> {
  annotations?: string[];
  boundAttributeName: keyof T;
}

export interface TableProxyProps<T, A> {
  ownerData: any;
  isOwnerLoading: boolean;
  actions: A;
  editMode?: boolean;
  storeDiff?: (attributeName: keyof T, value: any) => void;
  isFormUpdateable?: () => boolean;
}

export interface LinkProxyProps<T, A> {
  ownerData: any;
  data: T;
  disabled: boolean;
  readOnly: boolean;
  editMode: boolean;
  validation: Map<keyof T, string>;
  actions: A;
  isLoading: () => boolean;
  isDraft: () => boolean;
}
