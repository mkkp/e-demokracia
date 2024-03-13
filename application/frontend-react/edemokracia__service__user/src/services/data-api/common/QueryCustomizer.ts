import { JudoStored } from './JudoStored';
import { OrderingType } from './OrderingType';
import { Seek } from './Seek';

export interface QueryCustomizer<T> {
  _mask?: string;
  _seek?: Seek<Partial<JudoStored<T>>>;
  _orderBy?: Array<OrderingType>;
  _identifier?: string;
}

export type CommandQueryCustomizer = Pick<QueryCustomizer<any>, '_mask'>;
