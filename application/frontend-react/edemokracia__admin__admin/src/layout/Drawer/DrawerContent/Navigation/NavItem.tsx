//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/layout/Drawer/DrawerContent/Navigation/NavItem.tsx'
// Template name: actor/src/layout/Drawer/DrawerContent/Navigation/NavItem.tsx
// Template file: actor/src/layout/Drawer/DrawerContent/Navigation/NavItem.tsx.hbs

import { forwardRef } from 'react';
import type { ForwardRefExoticComponent, RefAttributes, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@mui/material/styles';
import { Avatar, Chip, ListItemButton, ListItemIcon, ListItemText, Typography, useMediaQuery } from '@mui/material';
import type { ChipProps } from '@mui/material';
import { Dot } from './Dot';
import { useConfig } from '~/hooks';
import { MenuOrientation, ThemeMode } from '~/config';
import { MdiIcon, useJudoNavigation } from '~/components';

export type LinkTarget = '_blank' | '_self' | '_parent' | '_top';

export type NavItemType = {
  breadcrumbs?: boolean;
  caption?: ReactNode | string;
  children?: NavItemType[];
  elements?: NavItemType[];
  chip?: ChipProps;
  color?: 'primary' | 'secondary' | 'default' | undefined;
  disabled?: boolean;
  icon?: string;
  id?: string;
  search?: string;
  target?: boolean;
  title?: ReactNode | string;
  type?: string;
  url?: string;
  hiddenBy?: string;
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

  const matchDownLg = useMediaQuery(theme.breakpoints.down('lg'));
  const downLG = useMediaQuery(theme.breakpoints.down('lg'));

  let itemTarget: LinkTarget = '_self';
  if (item.target) {
    itemTarget = '_blank';
  }

  let listItemProps: {
    component: ForwardRefExoticComponent<RefAttributes<HTMLAnchorElement>> | string;
    href?: string;
    target?: LinkTarget;
  } = {
    component: forwardRef((props, ref) => (
      <Link
        {...props}
        to={item.url!}
        target={itemTarget}
        ref={ref}
        onClick={(e) => {
          // menu item-based navigations should always clear the breadcrumbs
          e.preventDefault();
          e.stopPropagation();
          clearNavigate(item.url!);
        }}
      />
    )),
  };

  const itemIcon = item.icon ? (
    <MdiIcon path={item.icon!} sx={{ fontSize: !miniDrawer ? '1rem' : '1.25rem' }} />
  ) : (
    false
  );
  const isSelected = false; // TODO JNG-5207
  const textColor = theme.palette.mode === ThemeMode.DARK ? 'grey.400' : 'text.primary';
  const iconSelectedColor = theme.palette.mode === ThemeMode.DARK && !miniDrawer ? 'text.primary' : 'primary.main';

  return (
    <>
      {menuOrientation === MenuOrientation.VERTICAL || downLG ? (
        <ListItemButton
          {...listItemProps}
          disabled={item.disabled}
          selected={isSelected}
          sx={{
            zIndex: 1201,
            pl: !miniDrawer ? `${level * 28}px` : 1.5,
            py: miniDrawer && level === 1 ? 1.25 : 1,
            ...(!miniDrawer && {
              '&:hover': {
                bgcolor: theme.palette.mode === ThemeMode.DARK ? 'divider' : 'primary.lighter',
              },
              '&.Mui-selected': {
                bgcolor: theme.palette.mode === ThemeMode.DARK ? 'divider' : 'primary.lighter',
                borderRight: `2px solid ${theme.palette.primary.main}`,
                color: iconSelectedColor,
                '&:hover': {
                  color: iconSelectedColor,
                  bgcolor: theme.palette.mode === ThemeMode.DARK ? 'divider' : 'primary.lighter',
                },
              },
            }),
            ...(miniDrawer && {
              '&:hover': {
                bgcolor: 'transparent',
              },
              '&.Mui-selected': {
                '&:hover': {
                  bgcolor: 'transparent',
                },
                bgcolor: 'transparent',
              },
            }),
          }}
          {...(matchDownLg && {
            onClick: () => onChangeMiniDrawer(true),
          })}
        >
          {itemIcon && (
            <ListItemIcon
              sx={{
                minWidth: 28,
                color: isSelected ? iconSelectedColor : textColor,
                ...(miniDrawer && {
                  borderRadius: 1.5,
                  width: 36,
                  height: 36,
                  alignItems: 'center',
                  justifyContent: 'center',
                  '&:hover': {
                    bgcolor: theme.palette.mode === ThemeMode.DARK ? 'secondary.light' : 'secondary.lighter',
                  },
                }),
                ...(miniDrawer
                  ? isSelected
                    ? {
                        bgcolor: theme.palette.mode === ThemeMode.DARK ? 'primary.900' : 'primary.lighter',
                        '&:hover': {
                          bgcolor: theme.palette.mode === ThemeMode.DARK ? 'primary.darker' : 'primary.lighter',
                        },
                      }
                    : {}
                  : {}),
              }}
            >
              {itemIcon}
            </ListItemIcon>
          )}
          {(!miniDrawer || (miniDrawer && level !== 1)) && (
            <ListItemText
              primary={
                <Typography variant="h6" sx={{ color: isSelected ? iconSelectedColor : textColor }}>
                  {t(`menuTree.${item.title}`, { defaultValue: item.title })}
                </Typography>
              }
            />
          )}
          {(!miniDrawer || (miniDrawer && level !== 1)) && item.chip && (
            <Chip
              color={item.chip.color}
              variant={item.chip.variant}
              size={item.chip.size}
              label={item.chip.label}
              avatar={item.chip.avatar && <Avatar>{item.chip.avatar}</Avatar>}
            />
          )}
        </ListItemButton>
      ) : (
        <ListItemButton
          {...listItemProps}
          disabled={item.disabled}
          selected={isSelected}
          sx={{
            zIndex: 1201,
            ...(!miniDrawer && {
              '&:hover': {
                bgcolor: 'transparent',
              },
              '&.Mui-selected': {
                bgcolor: 'transparent',
                color: iconSelectedColor,
                '&:hover': {
                  color: iconSelectedColor,
                  bgcolor: 'transparent',
                },
              },
            }),
            ...(miniDrawer && {
              '&:hover': {
                bgcolor: 'transparent',
              },
              '&.Mui-selected': {
                '&:hover': {
                  bgcolor: 'transparent',
                },
                bgcolor: 'transparent',
              },
            }),
          }}
        >
          {itemIcon && (
            <ListItemIcon
              sx={{
                minWidth: 36,
                ...(miniDrawer && {
                  borderRadius: 1.5,
                  width: 36,
                  height: 36,
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  '&:hover': {
                    bgcolor: 'transparent',
                  },
                }),
                ...(miniDrawer
                  ? isSelected
                    ? {
                        bgcolor: 'transparent',
                        '&:hover': {
                          bgcolor: 'transparent',
                        },
                      }
                    : {}
                  : {}),
              }}
            >
              {itemIcon}
            </ListItemIcon>
          )}

          {!itemIcon && (
            <ListItemIcon
              sx={{
                color: isSelected ? 'primary.main' : 'secondary.main',
                ...(miniDrawer && {
                  borderRadius: 1.5,
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  '&:hover': {
                    bgcolor: 'transparent',
                  },
                }),
                ...(miniDrawer
                  ? isSelected
                    ? {
                        bgcolor: 'transparent',
                        '&:hover': {
                          bgcolor: 'transparent',
                        },
                      }
                    : {}
                  : {}),
              }}
            >
              <Dot size={4} color={isSelected ? 'primary' : 'secondary'} />
            </ListItemIcon>
          )}
          <ListItemText
            primary={
              <Typography variant="h6" color="inherit">
                {t(`menuTree.${item.title}`, { defaultValue: item.title })}
              </Typography>
            }
          />
          {(!miniDrawer || (miniDrawer && level !== 1)) && item.chip && (
            <Chip
              color={item.chip.color}
              variant={item.chip.variant}
              size={item.chip.size}
              label={item.chip.label}
              avatar={item.chip.avatar && <Avatar>{item.chip.avatar}</Avatar>}
            />
          )}
        </ListItemButton>
      )}
    </>
  );
};
