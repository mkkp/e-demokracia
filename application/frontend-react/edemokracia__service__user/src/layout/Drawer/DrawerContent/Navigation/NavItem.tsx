//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/layout/Drawer/DrawerContent/Navigation/NavItem.tsx'
// Template name: actor/src/layout/Drawer/DrawerContent/Navigation/NavItem.tsx
// Template file: actor/src/layout/Drawer/DrawerContent/Navigation/NavItem.tsx.hbs

import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { forwardRef } from 'react';
import type { ForwardRefExoticComponent, ReactNode, RefAttributes } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { MdiIcon, useJudoNavigation } from '~/components';
import { MenuOrientation, ThemeMode } from '~/config';
import { useConfig } from '~/hooks';

export type NavItemType = {
  id?: string;
  title?: ReactNode | string;
  url?: string;
  icon?: string;
  disabled?: boolean;
  hiddenBy?: string;
  children?: NavItemType[];
  type?: 'group' | 'collapse' | 'item';
};

export interface NavItemProps {
  item: NavItemType;
  level: number;
}

export const NavItem = ({ item, level }: NavItemProps) => {
  const { t } = useTranslation();
  const { clearNavigate } = useJudoNavigation();
  const { menuOrientation, miniDrawer, onChangeMiniDrawer } = useConfig();
  const theme = useTheme();
  const downLG = useMediaQuery(theme.breakpoints.down('lg'));
  const textColor = theme.palette.mode === ThemeMode.DARK ? 'grey.400' : 'text.primary';
  const iconWidth = 28;
  const iconSize = 36;
  const borderRadius = 1.5;
  const iconPropsHorizontal = {
    borderRadius: borderRadius,
    alignItems: 'center',
    justifyContent: 'flex-start',
    '&:hover': {
      bgcolor: 'transparent',
    },
  };
  const iconPropsVertical = {
    borderRadius: borderRadius,
    alignItems: 'center',
    justifyContent: 'center',
    '&:hover': {
      bgcolor: theme.palette.mode === ThemeMode.DARK ? 'secondary.light' : 'secondary.lighter',
    },
  };

  const LinkComponent: ForwardRefExoticComponent<RefAttributes<HTMLAnchorElement>> = forwardRef((props, ref) => (
    <Link
      {...props}
      to={item.url!}
      ref={ref}
      onClick={(e) => {
        // menu item-based navigations should always clear the breadcrumbs
        e.preventDefault();
        e.stopPropagation();
        clearNavigate(item.url!);
      }}
    />
  ));

  return (
    <>
      {menuOrientation === MenuOrientation.VERTICAL || downLG ? (
        <Tooltip
          title={
            miniDrawer && level !== undefined && level <= 1
              ? t(`menuTree.${item.title}`, { defaultValue: item.title })
              : undefined
          }
          placement="right"
        >
          <ListItemButton
            component={LinkComponent}
            disabled={item.disabled}
            sx={{
              zIndex: 1201,
              pl: !miniDrawer ? `${level * 1.5}rem` : borderRadius,
              py: miniDrawer && level === 1 ? 1.25 : 1,
              '&:hover': {
                bgcolor: theme.palette.mode === ThemeMode.DARK ? 'divider' : 'primary.lighter',
              },
            }}
            {...(downLG && {
              onClick: () => onChangeMiniDrawer(true),
            })}
          >
            {item.icon && (
              <ListItemIcon
                sx={{
                  minWidth: iconWidth,
                  color: textColor,
                  ...(miniDrawer && {
                    width: iconSize,
                    height: iconSize,
                    ...iconPropsVertical,
                  }),
                }}
              >
                <MdiIcon path={item.icon!} sx={{ fontSize: !miniDrawer ? '1rem' : '1.25rem' }} />
              </ListItemIcon>
            )}
            {(!miniDrawer || (miniDrawer && level !== 1)) && (
              <ListItemText
                primary={
                  <Typography variant="h6" sx={{ color: textColor }}>
                    {t(`menuTree.${item.title}`, { defaultValue: item.title })}
                  </Typography>
                }
              />
            )}
          </ListItemButton>
        </Tooltip>
      ) : (
        <ListItemButton
          component={LinkComponent}
          disabled={item.disabled}
          sx={{
            zIndex: 1201,
            '&:hover': {
              bgcolor: 'transparent',
            },
          }}
        >
          {item.icon && (
            <ListItemIcon
              sx={{
                minWidth: iconSize,
                ...(miniDrawer && {
                  width: iconSize,
                  height: iconSize,
                  ...iconPropsHorizontal,
                }),
              }}
            >
              <MdiIcon path={item.icon!} sx={{ fontSize: !miniDrawer ? '1rem' : '1.25rem' }} />
            </ListItemIcon>
          )}

          {!item.icon && (
            <ListItemIcon
              sx={{
                color: 'secondary.main',
                ...(miniDrawer && {
                  ...iconPropsHorizontal,
                }),
              }}
            >
              <MdiIcon path={'circle-small'} sx={{ color: 'secondary' }} />
            </ListItemIcon>
          )}
          <ListItemText
            primary={
              <Typography variant="h6" color="inherit">
                {t(`menuTree.${item.title}`, { defaultValue: item.title })}
              </Typography>
            }
          />
        </ListItemButton>
      )}
    </>
  );
};
