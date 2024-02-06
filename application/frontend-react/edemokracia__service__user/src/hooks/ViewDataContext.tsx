import type { FC, ReactNode } from 'react';
import { createContext, useContext, useRef } from 'react';
import type { JudoIdentifiable } from '~/services/data-api/common';

interface DataContextProps {
  children: ReactNode;
}

interface ViewContextContextValue {
  setLatestViewData: (newData: JudoIdentifiable<any> | null) => void;
  getLatestViewData: () => JudoIdentifiable<any> | null;
}

const ViewDataContext = createContext<ViewContextContextValue | undefined>(undefined);

export const ViewDataProvider: FC<DataContextProps> = ({ children }) => {
  const data = useRef<JudoIdentifiable<any> | null>(null);

  const useData = (): ViewContextContextValue => {
    const setLatestViewData = (newData: JudoIdentifiable<any> | null): void => {
      data.current = newData;
    };
    const getLatestViewData = (): JudoIdentifiable<any> | null => data.current;
    return { setLatestViewData, getLatestViewData };
  };

  return <ViewDataContext.Provider value={useData()}>{children}</ViewDataContext.Provider>;
};

export const useViewData = (): ViewContextContextValue => {
  const context = useContext(ViewDataContext);

  if (!context) {
    throw new Error('useViewData must be used within a ViewDataProvider');
  }

  return context;
};
