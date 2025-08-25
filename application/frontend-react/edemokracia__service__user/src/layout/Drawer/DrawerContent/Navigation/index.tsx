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
import { useEffect, useMemo, useState } from 'react';
import { usePrincipal } from '~/auth';
import { MenuOrientation } from '~/config';
import { useConfig } from '~/hooks';
import { NavCollapse } from '~/layout/Drawer/DrawerContent/Navigation/NavCollapse';
import { NavGroup } from '~/layout/Drawer/DrawerContent/Navigation/NavGroup';
import { NavItem } from '~/layout/Drawer/DrawerContent/Navigation/NavItem';
import { NavItemType } from '~/layout/Drawer/DrawerContent/Navigation/NavItem';
import { ScrollableMenu } from '~/layout/Drawer/DrawerContent/Navigation/ScrollableMenu';
import { useMenus } from '~/layout/Drawer/DrawerContent/Navigation/menu-items';
import { ServiceServicePrincipalUserStored } from '~/services/data-api/model/ServiceServicePrincipalUser';

export const MENU_ITEMS_CUSTOMIZER_HOOK_INTERFACE_KEY = 'MenuItemsCustomizerHook';
export type MenuItemsCustomizerHook = () => (items: NavItemType[]) => NavItemType[];

export enum NavigationDirection {
  VERTICAL = 'vertical',
  HORIZONTAL = 'horizontal',
}
const isHidden = (menuItem: NavItemType, principal: ServiceServicePrincipalUserStored): boolean => {
  return menuItem.hiddenBy ? !!principal[menuItem.hiddenBy as keyof ServiceServicePrincipalUserStored] : false;
};
const handleMenuItems = (
  source: NavItemType[],
  target: NavItemType[],
  principal: ServiceServicePrincipalUserStored,
) => {
  for (const item of source) {
    if (!isHidden(item, principal)) {
      const clone: NavItemType = {
        ...item,
        children: Array.isArray(item.children) && item.children.length ? [] : undefined,
      };
      target.push(clone);

      if (Array.isArray(item.children) && item.children.length) {
        handleMenuItems(item.children, clone.children!, principal);
      }
    }
  }
};
const filterMenus = (source: NavItemType[], principal: ServiceServicePrincipalUserStored) => {
  const target: NavItemType[] = [];
  handleMenuItems(source, target, principal);
  return target;
};

export const Navigation = () => {
  const { principal } = usePrincipal();
  const theme = useTheme();
  const downLG = useMediaQuery(theme.breakpoints.down('lg'));
  const { menuOrientation, miniDrawer } = useConfig();
  const { service: useMenuItemsCustomizer } = useTrackService<MenuItemsCustomizerHook>(
    `(${OBJECTCLASS}=${MENU_ITEMS_CUSTOMIZER_HOOK_INTERFACE_KEY})`,
  );
  const menuItemsCustomizer = useMenuItemsCustomizer && useMenuItemsCustomizer();
  const menus = useMenus();
  const [menuItems, setMenuItems] = useState<NavItemType[]>(
    filterMenus(menuItemsCustomizer ? menuItemsCustomizer(menus) : menus, principal),
  );

  useEffect(() => {
    const filteredMenus: NavItemType[] = [];
    handleMenuItems(menuItemsCustomizer ? menuItemsCustomizer(menus) : menus, filteredMenus, principal);
    setMenuItems(filteredMenus);
  }, [principal]);

  const isHorizontal = useMemo(
    () => menuOrientation === MenuOrientation.HORIZONTAL && !downLG,
    [menuOrientation, downLG],
  );
  let lastItemIndex = useMemo(() => menuItems.length - 1, [menuItems]);

  const navGroups = useMemo(
    () =>
      menuItems.slice(0, lastItemIndex + 1).map((item) => {
        switch (item.type) {
          case 'group':
            return miniDrawer ? (
              <NavCollapse key={item.id} menu={item} level={1} render={true} arrow={true} />
            ) : (
              <NavGroup key={item.id} item={item} />
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
      }),
    [menuItems, miniDrawer],
  );

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
