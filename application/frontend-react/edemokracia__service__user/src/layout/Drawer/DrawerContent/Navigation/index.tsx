//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/layout/Drawer/DrawerContent/Navigation/index.tsx'
// Template name: actor/src/layout/Drawer/DrawerContent/Navigation/index.tsx
// Template file: actor/src/layout/Drawer/DrawerContent/Navigation/index.tsx.hbs

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { OBJECTCLASS } from '@pandino/pandino-api';
import { useTrackService } from '@pandino/react-hooks';
import { useEffect, useState } from 'react';
import { usePrincipal } from '~/auth';
import { MenuOrientation } from '~/config';
import { useConfig } from '~/hooks';
import { ServiceServicePrincipalUserStored } from '~/services/data-api';
import { NavGroup } from './NavGroup';
import { NavItem } from './NavItem';
import { NavItemType } from './NavItem';
import { ScrollableMenu } from './ScrollableMenu';
import { menus } from './menu-items';

export const MENU_ITEMS_CUSTOMIZER_HOOK_INTERFACE_KEY = 'MenuItemsCustomizerHook';
export type MenuItemsCustomizerHook = () => (items: NavItemType[]) => NavItemType[];

export const Navigation = () => {
  const theme = useTheme();
  const downLG = useMediaQuery(theme.breakpoints.down('lg'));
  const { menuOrientation, miniDrawer } = useConfig();
  const { service: useMenuItemsCustomizer } = useTrackService<MenuItemsCustomizerHook>(
    `(${OBJECTCLASS}=${MENU_ITEMS_CUSTOMIZER_HOOK_INTERFACE_KEY})`,
  );
  const menuItemsCustomizer = useMenuItemsCustomizer && useMenuItemsCustomizer();
  const [menuItems, setMenuItems] = useState<NavItemType[]>(menuItemsCustomizer ? menuItemsCustomizer(menus) : menus);

  const { principal } = usePrincipal();

  const isHidden = (menuItem: NavItemType): boolean => {
    return menuItem.hiddenBy ? !!principal[menuItem.hiddenBy as keyof ServiceServicePrincipalUserStored] : false;
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
    handlerMenuItems(menuItemsCustomizer ? menuItemsCustomizer(menus) : menus, filteredMenus);
    setMenuItems(filteredMenus);
  }, [principal]);

  const isHorizontal = menuOrientation === MenuOrientation.HORIZONTAL && !downLG;
  let lastItemIndex = menuItems.length - 1;

  const navGroups = menuItems.slice(0, lastItemIndex + 1).map((item) => {
    switch (item.type) {
      case 'group':
        return <NavGroup key={item.id} item={item} />;
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
        width: isHorizontal ? { xs: undefined, lg: '100%' } : undefined,
        justifyContent: isHorizontal ? 'center' : undefined,
      }}
    >
      {isHorizontal ? <ScrollableMenu>{navGroups}</ScrollableMenu> : navGroups}
    </Box>
  );
};
