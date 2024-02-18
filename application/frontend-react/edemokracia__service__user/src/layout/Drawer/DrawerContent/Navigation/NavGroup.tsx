//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/layout/Drawer/DrawerContent/Navigation/NavGroup.tsx'
// Template name: actor/src/layout/Drawer/DrawerContent/Navigation/NavGroup.tsx
// Template file: actor/src/layout/Drawer/DrawerContent/Navigation/NavGroup.tsx.hbs

import Box from '@mui/material/Box';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import Typography from '@mui/material/Typography';
import { styled, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useState } from 'react';
import type { MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { MdiIcon, SimpleBar } from '~/components';
import { MenuOrientation, SUBMENU_MIN_WIDTH, ThemeMode } from '~/config';
import { useConfig } from '~/hooks';
import { Transitions } from '../../../Transitions';
import { NavCollapse } from './NavCollapse';
import { NavItem } from './NavItem';
import { NavItemType } from './NavItem';

type VirtualElement = {
  getBoundingClientRect: () => ClientRect | DOMRect;
  contextElement?: Element;
};

const PopperStyled = styled(Popper)(({ theme }) => ({
  overflow: 'visible',
  zIndex: 1202,
  minWidth: SUBMENU_MIN_WIDTH,
  '&:before': {
    content: '""',
    display: 'block',
    position: 'absolute',
    top: 5,
    left: 32,
    width: 12,
    height: 12,
    transform: 'translateY(-50%) rotate(45deg)',
    zIndex: 120,
    backgroundColor: theme.palette.background.paper,
  },
}));

export interface NavGroupProps {
  item: NavItemType;
}

export const NavGroup = ({ item }: NavGroupProps) => {
  const theme = useTheme();
  const { t } = useTranslation();
  const { menuOrientation, miniDrawer, onChangeMiniDrawer } = useConfig();
  const downLG = useMediaQuery(theme.breakpoints.down('lg'));
  const [anchorEl, setAnchorEl] = useState<VirtualElement | (() => VirtualElement) | null | undefined>(null);
  const openMini = Boolean(anchorEl);

  const handleClick = (event: MouseEvent) => {
    if (!openMini) {
      setAnchorEl(event?.currentTarget);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const itemIcon = item?.icon ? (
    <MdiIcon
      path={item?.icon!}
      sx={{
        color: theme.palette.primary.main,
      }}
    />
  ) : null;

  const items = item.children?.map((menu) => {
    switch (menu.type) {
      case 'collapse':
        return <NavCollapse key={menu.id} menu={menu} level={1} parentId={item.id!} />;
      case 'item':
        return <NavItem key={menu.id} item={menu} level={1} />;
      default:
        return (
          <Typography key={menu.id} variant="h6" color="error" align="center">
            Menu Items Error
          </Typography>
        );
    }
  });

  const popperId = openMini ? `group-pop-${item.id}` : undefined;

  return (
    <>
      {menuOrientation === MenuOrientation.VERTICAL || downLG ? (
        <List
          subheader={
            item.title &&
            !miniDrawer && (
              <Box sx={{ pl: 3, mb: 1.5 }}>
                <Typography
                  variant="subtitle2"
                  color={theme.palette.mode === ThemeMode.DARK ? 'textSecondary' : 'text.secondary'}
                  sx={{ mt: 1 }}
                >
                  {t(`menuTree.${item.title}`, { defaultValue: item.title })}
                </Typography>
              </Box>
            )
          }
          sx={{ mt: !miniDrawer && item.title ? 1.5 : 0, py: 0, zIndex: 0 }}
        >
          {items}
        </List>
      ) : (
        <List sx={{ p: 0 }}>
          <ListItemButton
            sx={{
              py: 0,
              px: 1,
              my: 0,
              mr: 1,
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              backgroundColor: 'inherit',
              '&.Mui-selected': {
                bgcolor: 'transparent',
              },
            }}
            onMouseEnter={handleClick}
            onClick={handleClick}
            onMouseLeave={handleClose}
            aria-describedby={popperId}
          >
            {itemIcon && <ListItemIcon sx={{ minWidth: 28 }}>{itemIcon}</ListItemIcon>}
            <ListItemText
              sx={{ mr: 1 }}
              primary={
                <Typography variant="body1" color={theme.palette.text.primary}>
                  {t(`menuTree.${item.title}`, { defaultValue: item.title })}
                </Typography>
              }
            />
            <MdiIcon path={openMini ? 'chevron-down' : 'chevron-right'} sx={{ fontSize: 16, stroke: '1.5' }} />
            {anchorEl && (
              <PopperStyled
                id={popperId}
                open={openMini}
                anchorEl={anchorEl}
                placement="bottom-start"
                style={{
                  zIndex: 2001,
                }}
              >
                {({ TransitionProps }) => (
                  <Transitions in={openMini} {...TransitionProps}>
                    <Paper
                      sx={{
                        mt: 0.5,
                        py: 1.25,
                        boxShadow: theme.shadows[8],
                        backgroundImage: 'none',
                      }}
                    >
                      <ClickAwayListener onClickAway={handleClose}>
                        <SimpleBar
                          sx={{
                            overflowX: 'hidden',
                            overflowY: 'auto',
                            maxHeight: 'calc(100vh - 170px)',
                          }}
                        >
                          {items}
                        </SimpleBar>
                      </ClickAwayListener>
                    </Paper>
                  </Transitions>
                )}
              </PopperStyled>
            )}
          </ListItemButton>
        </List>
      )}
    </>
  );
};
