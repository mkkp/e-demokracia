//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/auth/principal-context.tsx'
// Template name: actor/src/auth/principal-context.tsx
// Template file: actor/src/auth/principal-context.tsx.hbs

import { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { useAuth } from 'react-oidc-context';
import { ServiceServicePrincipalUserStored } from '~/services/data-api';
import { accessServiceImpl } from '~/services/data-axios';

export interface PrincipalContext {
  principal: ServiceServicePrincipalUserStored;
  setPrincipal: (principal: ServiceServicePrincipalUserStored) => void;
  getPrincipal: () => Promise<ServiceServicePrincipalUserStored>;
}

const PrincipalContext = createContext<PrincipalContext>({} as unknown as PrincipalContext);

export const PrincipalProvider = ({ children }: { children: ReactNode }) => {
  const [principal, setPrincipal] = useState<ServiceServicePrincipalUserStored>(
    {} as unknown as ServiceServicePrincipalUserStored,
  );
  const { isAuthenticated } = useAuth();

  const fetchData = async () => {
    try {
      const data = await accessServiceImpl.getPrincipal();
      setPrincipal({ ...data });
    } catch (e) {
      console.error(e);
    }
  };

  const getPrincipal = (): Promise<ServiceServicePrincipalUserStored> => accessServiceImpl.getPrincipal();

  useEffect(() => {
    if (isAuthenticated) {
      fetchData();
    } else {
      setPrincipal({} as unknown as ServiceServicePrincipalUserStored);
    }
  }, [isAuthenticated]);

  return (
    <PrincipalContext.Provider value={{ principal, setPrincipal, getPrincipal }}>{children}</PrincipalContext.Provider>
  );
};

export const usePrincipal = () => {
  const { principal, setPrincipal, getPrincipal } = useContext(PrincipalContext);

  return { principal, setPrincipal, getPrincipal };
};
