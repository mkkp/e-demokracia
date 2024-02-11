import { X_JUDO_COUNT, X_JUDO_COUNT_RECORDS } from './headers';

export type JudoRequestHeaders = Partial<
  Record<string, string> & {
    [X_JUDO_COUNT_RECORDS]?: 'true' | 'false';
  }
>;

export type JudoResponseHeaders = Partial<
  Record<string, string> & {
    [X_JUDO_COUNT]?: string;
  }
>;

export interface JudoRestResponse<T = any> {
  data: T;
  headers: JudoResponseHeaders;
  status: number;
}
