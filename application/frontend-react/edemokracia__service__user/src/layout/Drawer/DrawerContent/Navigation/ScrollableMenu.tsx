import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import type { FC, ReactNode } from 'react';
import { useEffect, useRef, useState } from 'react';
import { MdiIcon } from '~/components';

interface ScrollableMenuProps {
  children: ReactNode;
}

export const ScrollableMenu: FC<ScrollableMenuProps> = ({ children }) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(false);

  useEffect(() => {
    if (menuRef.current) {
      const container = menuRef.current;
      setShowLeftButton(container.scrollLeft > 0);
      setShowRightButton(container.scrollWidth > container.clientWidth + container.scrollLeft);
    }
  }, [showLeftButton, showRightButton]);

  const handleScroll = () => {
    if (menuRef.current) {
      const container = menuRef.current;
      setShowLeftButton(container.scrollLeft > 0);
      setShowRightButton(container.scrollWidth > container.clientWidth + container.scrollLeft);
    }
  };

  const handleScrollLeft = () => {
    if (menuRef.current) {
      menuRef.current.scrollBy({
        left: -200,
        behavior: 'smooth',
      });
    }
  };

  const handleScrollRight = () => {
    if (menuRef.current) {
      menuRef.current.scrollBy({
        left: 200,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div
      style={{
        position: 'relative',
        overflowX: 'hidden',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <IconButton sx={{ visibility: !showLeftButton ? 'hidden' : 'visible' }} onClick={handleScrollLeft}>
        <MdiIcon path="chevron-left" />
      </IconButton>
      <Box
        sx={{
          display: 'flex',
          overflowX: 'hidden',
          WebkitOverflowScrolling: 'touch',
          scrollBehavior: 'smooth',
        }}
        ref={menuRef}
        onScroll={handleScroll}
      >
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>{children}</Box>
      </Box>
      <IconButton sx={{ visibility: !showRightButton ? 'hidden' : 'visible' }} onClick={handleScrollRight}>
        <MdiIcon path="chevron-right" />
      </IconButton>
    </div>
  );
};
