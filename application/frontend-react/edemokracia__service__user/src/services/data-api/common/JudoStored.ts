import { JudoIdentifiable } from './JudoIdentifiable';

/**
 * Full-blown utility Interface with the meta-data coming from backend responses.
 */
export interface JudoStored<T> extends JudoIdentifiable<T> {
  __identifier?: string;
  __entityType?: string;
  __updateable?: boolean;
  __deleteable?: boolean;
  __version?: number;
}
