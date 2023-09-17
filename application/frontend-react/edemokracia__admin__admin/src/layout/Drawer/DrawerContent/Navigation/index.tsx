//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/layout/Drawer/DrawerContent/Navigation/index.tsx'
// Template name: actor/src/layout/Drawer/DrawerContent/Navigation/index.tsx
// Template file: actor/src/layout/Drawer/DrawerContent/Navigation/index.tsx.hbs

import { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, Typography, useMediaQuery } from '@mui/material';
import { usePrincipal } from '~/auth';
import { AdminAdminPrincipalUserStored } from '~/generated/data-api';
import { useConfig } from '~/hooks';
import { HORIZONTAL_MAX_ITEM, MenuOrientation } from '~/config';
import { NavGroup } from './NavGroup';
import { NavItem } from './NavItem';
import { menus } from './menu-items';
import { NavItemType } from './NavItem';

export const Navigation = () => {
  const theme = useTheme();

  const downLG = useMediaQuery(theme.breakpoints.down('lg'));

  const { menuOrientation, miniDrawer } = useConfig();
  const [selectedItems, setSelectedItems] = useState<string | undefined>('');
  const [selectedLevel, setSelectedLevel] = useState<number>(0);
  const [menuItems, setMenuItems] = useState<NavItemType[]>(menus);

  const { principal } = usePrincipal();

  const isHidden = (menuItem: NavItemType): boolean => {
    return menuItem.hiddenBy ? !!principal[menuItem.hiddenBy as keyof AdminAdminPrincipalUserStored] : false;
  };

  const handlerMenuItems = (source: NavItemType[], target: NavItemType[]) => {
    for (const item of source) {
      if (!isHidden(item)) {
        const clone: NavItemType = {
          ...item,
          children: Array.isArray(item.children) && item.children.length ? [] : undefined,
        };
        target.push(clone);

        if (Array.isArray(item.children) && item.children.length) {
          handlerMenuItems(item.children, clone.children!);
        }
      }
    }
  };

  useEffect(() => {
    const filteredMenus: NavItemType[] = [];
    handlerMenuItems(menus, filteredMenus);
    setMenuItems(filteredMenus);
  }, []);

  const isHorizontal = menuOrientation === MenuOrientation.HORIZONTAL && !downLG;

  const lastItem = isHorizontal ? HORIZONTAL_MAX_ITEM : null;
  let lastItemIndex = menuItems.length - 1;
  let remItems: NavItemType[] = [];
  let lastItemId: string;

  if (lastItem && lastItem < menuItems.length) {
    lastItemId = menuItems[lastItem - 1].id!;
    lastItemIndex = lastItem - 1;
    remItems = menuItems.slice(lastItem - 1, menuItems.length).map((item) => ({
      title: item.title,
      elements: item.children,
      icon: item.icon,
    }));
  }

  const navGroups = menuItems.slice(0, lastItemIndex + 1).map((item) => {
    switch (item.type) {
      case 'group':
        return (
          <NavGroup
            key={item.id}
            setSelectedItems={setSelectedItems}
            setSelectedLevel={setSelectedLevel}
            selectedLevel={selectedLevel}
            selectedItems={selectedItems}
            lastItem={lastItem!}
            remItems={remItems}
            lastItemId={lastItemId}
            item={item}
          />
        );
      case 'item':
        return <NavItem key={item.id} item={item} level={1} />;
      default:
        return (
          <Typography key={item.id} variant="h6" color="error" align="center">
            Invalid item type: {item.type}!
          </Typography>
        );
    }
  });
  return (
    <Box
      sx={{
        pt: !miniDrawer ? (isHorizontal ? 0 : 2) : 0,
        '& > ul:first-of-type': { mt: 0 },
        display: isHorizontal ? { xs: 'block', lg: 'flex' } : 'block',
      }}
    >
      {navGroups}
    </Box>
  );
};
