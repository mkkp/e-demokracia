/**
 * Utility Interface to use in places where we are not interested in a Stored object's data, only
 * it's `__signedIdentifier`.
 */
export interface JudoIdentifiable<T> {
  __signedIdentifier: string;
}
