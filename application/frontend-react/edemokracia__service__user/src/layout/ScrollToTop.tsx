import { type FC, useEffect } from 'react';
import { useLocation } from 'react-router';

export const ScrollToTop: FC<any> = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    window.setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 200);
  }, [location]);

  return <>{children}</>;
};
