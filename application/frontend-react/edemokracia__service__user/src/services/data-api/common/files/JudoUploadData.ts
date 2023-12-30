import { JudoUploadFile } from './JudoUploadFile';

export interface JudoUploadData {
  files: Array<JudoUploadFile>;
  finished: string;
}
