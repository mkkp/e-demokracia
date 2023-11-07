//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/components/CustomBreadcrumb.tsx'
// Template name: actor/src/components/CustomBreadcrumb.tsx
// Template file: actor/src/components/CustomBreadcrumb.tsx.hbs

import { Breadcrumbs, Typography, Link } from '@mui/material';
import { useState, useContext, createContext, useMemo, useEffect, useCallback } from 'react';
import type { ReactNode } from 'react';
import { useLocation, useNavigate, Link as RouterLink } from 'react-router-dom';
import type { To } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { routeToDashboard } from '~/routes';
import { StackableDialogProvider } from './dialog/StackableDialogProvider';

interface BreadcrumbProviderProps {
  children: ReactNode;
}

export type JudoNavigationSetTitle = (pageTitle: string) => void;

interface JudoNavigationProviderContext {
  clearNavigate: (to: To) => void;
  navigate: (to: To) => void;
  back: () => void;
  isBackDisabled: boolean;
  setTitle: JudoNavigationSetTitle;
}

interface BreadcrumbItem {
  key: string;
  path: To;
  label?: string | null;
}

const JudoNavigationContextState = createContext<JudoNavigationProviderContext>(undefined as any);

const BreadcrumbContextState = createContext<BreadcrumbItem[]>([]);

export const useJudoNavigation = () => {
  const context = useContext(JudoNavigationContextState);

  if (context === undefined) {
    throw new Error('useJudoNavigation was used outside its Provider');
  }

  return context;
};

export const BreadcrumbProvider = ({ children }: BreadcrumbProviderProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [breadcrumbItems, setBreadcrumbItems] = useState<BreadcrumbItem[]>([]);
  const [nextBreadcrumbItem, setNextBreadcrumbItem] = useState<BreadcrumbItem>({
    key: '0.' + location.pathname,
    path: location.pathname,
  });

  useEffect(() => {
    const listener = (event: PopStateEvent) => {
      breadCrumbBack();
    };
    window.addEventListener('popstate', listener);

    return () => {
      window.removeEventListener('popstate', listener);
    };
  }, [breadcrumbItems]);

  const isBackDisabled = useMemo(() => {
    return breadcrumbItems.length === 0;
  }, [breadcrumbItems]);

  const breadCrumbBack = useCallback(
    (triggerNavigation = false) => {
      if (breadcrumbItems.length > 0) {
        const lastItem = breadcrumbItems[breadcrumbItems.length - 1];

        setNextBreadcrumbItem({
          ...lastItem,
        });
        setBreadcrumbItems((prevBreadcrumbItems) => {
          return [...prevBreadcrumbItems.slice(0, prevBreadcrumbItems.length - 1)];
        });

        if (triggerNavigation) {
          navigate(lastItem.path);
        }
      } else {
        setBreadcrumbItems([]);
        setNextBreadcrumbItem({
          key: '0.' + '/'.toString(),
          path: '/',
        });

        if (triggerNavigation) {
          navigate(routeToDashboard());
        }
      }
    },
    [breadcrumbItems, nextBreadcrumbItem],
  );

  const judoNavigationContext = {
    clearNavigate: (to: To) => {
      setBreadcrumbItems([]);
      setNextBreadcrumbItem({
        key: '0.' + to.toString(),
        path: to,
      });

      navigate(to);
    },
    navigate: (to: To) => {
      if (nextBreadcrumbItem.label === null) {
        console.warn('Page title has not been set!');
      }

      setBreadcrumbItems([...breadcrumbItems, nextBreadcrumbItem]);
      setNextBreadcrumbItem({
        key: breadcrumbItems.length + '.' + to.toString(),
        path: to,
      });

      navigate(to);
    },
    back: () => {
      breadCrumbBack(true);
    },
    isBackDisabled: isBackDisabled,
    setTitle: (pageTitle: string) => {
      setNextBreadcrumbItem((prevNextBreadcrumbItem) => {
        return { ...prevNextBreadcrumbItem, label: pageTitle };
      });
    },
  };

  return (
    <BreadcrumbContextState.Provider value={breadcrumbItems}>
      <JudoNavigationContextState.Provider value={judoNavigationContext}>
        <StackableDialogProvider>{children}</StackableDialogProvider>
      </JudoNavigationContextState.Provider>
    </BreadcrumbContextState.Provider>
  );
};

export const CustomBreadcrumb = () => {
  const breadcrumbItems = useContext(BreadcrumbContextState);
  const { t } = useTranslation();

  return (
    <Breadcrumbs id="application-breadcrumb" maxItems={5} separator="/">
      <Link component={RouterLink} to={routeToDashboard()} sx={{ textDecoration: 'none' }}>
        <Typography>{t('judo.breadcrumb.home', { defaultValue: 'Home' })}</Typography>
      </Link>
      {breadcrumbItems.map(({ label, key }, index) => {
        return (
          <Typography color="text.primary" key={key}>
            {label || ''}
          </Typography>
        );
      })}
    </Breadcrumbs>
  );
};
