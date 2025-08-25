//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/layout/Drawer/DrawerContent/Navigation/ScrollableMenu.tsx'
// Template name: actor/src/layout/Drawer/DrawerContent/Navigation/ScrollableMenu.tsx
// Template file: actor/src/layout/Drawer/DrawerContent/Navigation/ScrollableMenu.tsx.hbs

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import type { FC, ReactNode } from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { MdiIcon } from '~/components';

interface ScrollableMenuProps {
  children: ReactNode;
}

export const ScrollableMenu: FC<ScrollableMenuProps> = ({ children }) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(false);

  const updateScrollButtons = useCallback(() => {
    const content: any = menuRef.current;
    setShowLeftButton(content.scrollLeft > 0);
    setShowRightButton(content.scrollLeft < content.scrollWidth - content.clientWidth);
  }, []);

  const scrollContent = useCallback((direction: number) => {
    const content: any = menuRef.current;
    const scrollAmount = 300;
    content.scrollLeft += direction * scrollAmount;
    window.setTimeout(() => {
      updateScrollButtons();
    }, 300);
  }, []);

  useEffect(() => {
    updateScrollButtons();
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <div style={{ flex: '0 0 auto', padding: '10px', marginRight: '5px' }}>
        <IconButton sx={{ visibility: !showLeftButton ? 'hidden' : 'visible' }} onClick={() => scrollContent(-1)}>
          <MdiIcon path="chevron-left" />
        </IconButton>
      </div>
      <div
        ref={menuRef}
        style={{
          display: 'flex',
          overflow: 'hidden',
          flex: '1 1 auto',
          whiteSpace: 'nowrap',
          scrollBehavior: 'smooth',
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>{children}</Box>
      </div>
      <div style={{ flex: '0 0 auto', padding: '10px', marginLeft: '5px' }}>
        <IconButton sx={{ visibility: !showRightButton ? 'hidden' : 'visible' }} onClick={() => scrollContent(1)}>
          <MdiIcon path="chevron-right" />
        </IconButton>
      </div>
    </div>
  );
};
