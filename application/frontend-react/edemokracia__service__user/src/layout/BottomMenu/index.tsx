//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/layout/BottomMenu/index.tsx'
// Template name: actor/src/layout/BottomMenu/index.tsx
// Template file: actor/src/layout/BottomMenu/index.tsx.hbs

import {
  AppBar,
  BottomNavigation,
  BottomNavigationAction,
  Box,
  List,
  Popover,
  Typography,
  styled,
} from '@mui/material';
import { AppBarProps } from '@mui/material/AppBar';
import { useTheme } from '@mui/system';
import { OBJECTCLASS } from '@pandino/pandino-api';
import { useTrackService } from '@pandino/react-hooks';
import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { usePrincipal } from '~/auth';
import { useJudoNavigation } from '~/components';
import { MdiIcon } from '~/components/MdiIcon';
import { ThemeMode } from '~/config';
import {
  MENU_ITEMS_CUSTOMIZER_HOOK_INTERFACE_KEY,
  MenuItemsCustomizerHook,
} from '~/layout/Drawer/DrawerContent/Navigation';
import { NavCollapse } from '~/layout/Drawer/DrawerContent/Navigation/NavCollapse';
import { NavItem, NavItemType } from '~/layout/Drawer/DrawerContent/Navigation/NavItem';
import { useMenus } from '~/layout/Drawer/DrawerContent/Navigation/menu-items';
import { ServiceServicePrincipalUserStored } from '~/services/data-api/model/ServiceServicePrincipalUser';
import { BottomProfile } from './BottomProfile';

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

export const BottomMenu = () => {
  const { principal } = usePrincipal();
  const { t } = useTranslation();
  const theme = useTheme();
  const { clearNavigate, externalNavigate } = useJudoNavigation();

  const { service: useMenuItemsCustomizer } = useTrackService<MenuItemsCustomizerHook>(
    `(${OBJECTCLASS}=${MENU_ITEMS_CUSTOMIZER_HOOK_INTERFACE_KEY})`,
  );

  const menuItemsCustomizer = useMenuItemsCustomizer && useMenuItemsCustomizer();
  const menus = useMenus();
  const [bottomMenuItems, setBottomMenuItems] = useState<NavItemType[]>(
    filterMenus(menuItemsCustomizer ? menuItemsCustomizer(menus) : menus, principal),
  );

  const [selectedBottomMenuItem, setSelectedBottomMenuItem] = useState<NavItemType | undefined>();
  const [selectedBottomOther, setSelectedBottomOther] = useState<boolean>(false);

  const [subMenuItems, setSubMenuItems] = useState<JSX.Element[] | undefined>();

  useEffect(() => {
    const filteredMenus: NavItemType[] = [];
    handleMenuItems(menuItemsCustomizer ? menuItemsCustomizer(menus) : menus, filteredMenus, principal);
    setBottomMenuItems(filteredMenus);
  }, [principal]);

  let lastItemIndex = useMemo(() => bottomMenuItems.length - 1, [bottomMenuItems]);

  const handlePerform = (event: React.MouseEvent<HTMLElement>, item: NavItemType) => {
    console.log(item.title);
    event.preventDefault();
    event.stopPropagation();
    if (typeof item.onClick === 'function') {
      try {
        item.onClick();
      } catch (e) {
        console.error(e);
      }
    } else if (item.url!.startsWith('http')) {
      externalNavigate(item.url!);
    } else {
      clearNavigate(item.url!);
    }
  };

  const popupMenuItemAction = (item: NavItemType) => {
    switch (item.type) {
      case 'group':
        return (
          <NavCollapse
            key={item.id}
            menu={item}
            level={2}
            render={true}
            placement="auto"
            arrow={false}
            mouseOver={false}
          />
        );
      case 'collapse':
        return (
          <NavCollapse
            key={item.id}
            menu={item}
            level={2}
            render={true}
            placement="auto"
            arrow={false}
            mouseOver={false}
          />
        );
      case 'item':
        return <NavItem key={item.id} item={item} level={2} />;
      default:
        return (
          <Typography key={item.id} variant="h6" color="error" align="center">
            Menu Items Error
          </Typography>
        );
    }
  };

  const handlePopupOpen = (event: React.MouseEvent<HTMLElement>, item: NavItemType) => {
    setMouseX(event.clientX);
    setMouseY(event.clientY);
    setSelectedBottomMenuItem(item);
    setSelectedBottomOther(false);
    setSubMenuItems(
      item.children?.map((menu) => {
        return popupMenuItemAction(menu);
      }),
    );
    setOpen(true);
  };

  const handleOtherPopupOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMouseX(event.clientX);
    setMouseY(event.clientY);
    setSelectedBottomMenuItem(undefined);
    setSelectedBottomOther(true);
    setSubMenuItems([
      ...bottomMenuItems.slice(3, lastItemIndex + 1).map((item) => {
        return popupMenuItemAction(item);
      }),
    ]);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSubMenuItems(undefined);
    setSelectedBottomMenuItem(undefined);
    setSelectedBottomOther(false);
  };

  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const itemAction = (item: NavItemType) => {
    switch (item.type) {
      case 'group':
        return (
          <BottomNavigationAction
            aria-describedby="submenu"
            showLabel={true}
            key={item.id + 'NavAction'}
            id={item.id + 'NavAction'}
            onClick={(event) => {
              handlePopupOpen(event, item);
            }}
            icon={<MdiIcon path={item.icon ?? 'dots-vertical'} />}
            label={t(`menuTree.${item.title}`, { defaultValue: item.title })}
            content=""
          ></BottomNavigationAction>
        );
      case 'item':
        return (
          <BottomNavigationAction
            key={item.id + 'NavAction'}
            onClick={(event) => handlePerform(event, item)}
            icon={<MdiIcon path={item.icon ?? 'dots-vertical'} />}
            label={t(`menuTree.${item.title}`, { defaultValue: item.title })}
          />
        );
      default:
        return (
          <Typography key={item.id} variant="h6" color="error" align="center">
            Invalid item type: {item.type}!
          </Typography>
        );
    }
  };

  const otherAction = () => {
    return (
      <BottomNavigationAction
        aria-describedby="submenu"
        showLabel={true}
        key={'_OtherNavAction'}
        id={'_OtheNavAction'}
        onClick={(event) => {
          handleOtherPopupOpen(event);
        }}
        icon={<MdiIcon path={'dots-vertical'} />}
        label={t(`menuTree.other`, { defaultValue: 'Other' })}
      ></BottomNavigationAction>
    );
  };

  const itemOther = () => {
    return bottomMenuItems.slice(4, lastItemIndex + 1).map((item) => {
      return popupMenuItemAction(item);
    });
  };

  const bottomNavActions = useMemo(() => {
    if (bottomMenuItems.length >= 3) {
      return [
        ...bottomMenuItems.slice(0, 3).map((item) => {
          return itemAction(item);
        }),
        otherAction(),
      ];
    } else {
      return bottomMenuItems.slice(0, lastItemIndex + 1).map((item) => {
        return itemAction(item);
      });
    }
  }, [bottomMenuItems]);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);

  const appBar: AppBarProps = {
    position: 'fixed',
    style: { top: 'auto', bottom: 0, backgroundColor: 'primary' },
  };

  const AppBarStyled = styled(AppBar)<AppBarProps>(({ theme }) => ({
    position: 'fixed',
    style: { top: 'auto', bottom: 0 },
    fontWeight: 'bold',
    button: {
      fontWeight: 'bold',
      backgroundColor: theme.palette.primary.main,
      color: '#ffffff',
    },
  }));

  return (
    <AppBarStyled {...appBar}>
      <Box>
        <BottomNavigation
          showLabels
          sx={{
            backgroundColor: `${theme.palette.primary.main}`,
          }}
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          {bottomNavActions}
        </BottomNavigation>

        <Popover
          id="submenu"
          anchorReference="anchorPosition"
          anchorPosition={{ top: mouseY, left: mouseX }}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: -400,
            horizontal: 0,
          }}
          transformOrigin={{ horizontal: 'center', vertical: 0 }}
        >
          {selectedBottomMenuItem && (
            <List
              subheader={
                selectedBottomMenuItem.title && (
                  <Box sx={{ pl: 3, mb: 1.5 }}>
                    <Typography
                      variant="subtitle2"
                      color={theme.palette.mode === ThemeMode.DARK ? 'textSecondary' : 'text.secondary'}
                      sx={{ mt: 1 }}
                    >
                      {t(`menuTree.${selectedBottomMenuItem.title}`, { defaultValue: selectedBottomMenuItem.title })}
                    </Typography>
                  </Box>
                )
              }
              sx={{ mt: selectedBottomMenuItem.title ? 1.5 : 0, py: 0, zIndex: 0 }}
            >
              {subMenuItems}
            </List>
          )}
          {selectedBottomOther && (
            <List
              subheader={
                <Box sx={{ pl: 3, mb: 1.5 }}>
                  <Typography
                    variant="subtitle2"
                    color={theme.palette.mode === ThemeMode.DARK ? 'textSecondary' : 'text.secondary'}
                    sx={{ mt: 1 }}
                  >
                    {t(`menuTree.other`, { defaultValue: 'Other' })}
                  </Typography>
                </Box>
              }
              sx={{ mt: 1.5, py: 0, zIndex: 0 }}
            >
              <BottomProfile />
              {subMenuItems}
            </List>
          )}
        </Popover>
      </Box>
    </AppBarStyled>
  );
};
