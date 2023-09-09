export type DataStoreDriver = 'sessionStorage' | 'localStorage';

export interface DataStore {
  setItem: (key: string, value: string) => void;
  setItemStringified: <T>(key: string, value: T) => void;
  getItem: (key: string) => string | null;
  getItemParsed: <T>(key: string) => T | null;
  getItemWithDefault: (key: string, defaultReturn: string) => string;
  getItemParsedWithDefault: <T>(key: string, defaultReturn: T) => T;
}
export type UseDataStoreHook = (driver: DataStoreDriver) => DataStore;

export const useDataStore: UseDataStoreHook = <T>(driver: DataStoreDriver) => {
  const storage: Storage = driver === 'sessionStorage' ? sessionStorage : localStorage;

  return {
    getItem: (key: string) => {
      return storage.getItem(key);
    },
    getItemParsed: (key: string) => {
      const item = storage.getItem(key);
      return item !== null ? JSON.parse(item) : item;
    },
    getItemWithDefault: (key: string, defaultReturn: string) => {
      let item = storage.getItem(key);
      if (item === null) {
        return defaultReturn;
      }
      return item;
    },
    getItemParsedWithDefault: (key: string, defaultReturn: T) => {
      let item = storage.getItem(key);
      return item !== null ? JSON.parse(item) : defaultReturn;
    },
    setItem: (key: string, value: string) => {
      storage.setItem(key, value);
    },
    setItemStringified: (key: string, value: T) => {
      storage.setItem(key, JSON.stringify(value));
    },
  };
};
