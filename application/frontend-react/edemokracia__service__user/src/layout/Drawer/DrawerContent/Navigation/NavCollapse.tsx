//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/layout/Drawer/DrawerContent/Navigation/NavCollapse.tsx'
// Template name: actor/src/layout/Drawer/DrawerContent/Navigation/NavCollapse.tsx
// Template file: actor/src/layout/Drawer/DrawerContent/Navigation/NavCollapse.tsx.hbs

import { useState } from 'react';
import type { MouseEvent } from 'react';
import { useJudoNavigation } from '~/components';
import { useTranslation } from 'react-i18next';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useConfig } from '~/hooks';
import { MenuOrientation, ThemeMode } from '~/config';
import { MdiIcon, SimpleBar } from '~/components';
import { NavItem } from './NavItem';
import { Transitions } from '../../../Transitions';
import { NavItemType } from './NavItem';

type VirtualElement = {
  getBoundingClientRect: () => ClientRect | DOMRect;
  contextElement?: Element;
};

const PopperStyled = styled(Popper)(({ theme }) => ({
  overflow: 'visible',
  zIndex: 1202,
  minWidth: 180,
  '&:before': {
    content: '""',
    display: 'block',
    position: 'absolute',
    top: 38,
    left: -5,
    width: 10,
    height: 10,
    backgroundColor: theme.palette.background.paper,
    transform: 'translateY(-50%) rotate(45deg)',
    zIndex: 120,
    borderLeft: `1px solid ${theme.palette.divider}`,
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
}));

export interface NavCollapseProps {
  menu: NavItemType;
  level: number;
  parentId: string;
}

export const NavCollapse = ({ menu, level, parentId }: NavCollapseProps) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const { navigate } = useJudoNavigation();
  const { menuOrientation, miniDrawer } = useConfig();
  const downLG = useMediaQuery(theme.breakpoints.down('lg'));
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<VirtualElement | (() => VirtualElement) | null | undefined>(null);
  const miniMenuOpened = Boolean(anchorEl);
  const simpleBarSx = {
    overflowX: 'hidden',
    overflowY: 'auto',
    maxHeight: 'calc(100vh - 170px)',
  };
  const iconSize = 36;
  const iconSizeSmall = 18;

  const handleClick = (event: MouseEvent) => {
    setAnchorEl(null);
    if (!miniDrawer) {
      setOpen(!open);
      if (menu.url) navigate(`${menu.url}`);
    } else {
      setAnchorEl(event?.currentTarget);
    }
  };

  const handlerIconLink = () => {
    if (miniDrawer) {
      if (menu.url) navigate(`${menu.url}`);
    }
  };

  const handleHover = (event: MouseEvent) => {
    setAnchorEl(event?.currentTarget);
  };

  const handleClose = () => {
    setOpen(false);
    setAnchorEl(null);
  };

  const navCollapse = menu.children?.map((item) => {
    switch (item.type) {
      case 'collapse':
        return <NavCollapse key={item.id} menu={item} level={level + 1} parentId={parentId} />;
      case 'item':
        return <NavItem key={item.id} item={item} level={level + 1} />;
      default:
        return (
          <Typography key={item.id} variant="h6" color="error" align="center">
            Unhandled NavItemType!
          </Typography>
        );
    }
  });
  const borderIcon = level === 1 ? <MdiIcon path="border-all-variant" sx={{ fontSize: '1rem' }} /> : null;
  const menuIcon = menu.icon ? (
    <MdiIcon path={menu.icon!} sx={{ fontSize: !miniDrawer ? '1rem' : '1.25rem' }} />
  ) : miniDrawer && menuOrientation === MenuOrientation.VERTICAL ? (
    borderIcon
  ) : null;
  const textColor = theme.palette.mode === ThemeMode.DARK ? 'grey.400' : 'text.primary';
  const popperId = miniMenuOpened ? `collapse-pop-${menu.id}` : undefined;
  const boxSx = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' };

  return (
    <>
      {menuOrientation === MenuOrientation.VERTICAL || downLG ? (
        <>
          <ListItemButton
            disableRipple
            {...(miniDrawer && { onMouseEnter: handleClick, onMouseLeave: handleClose })}
            onClick={handleClick}
            sx={{
              pl: !miniDrawer ? `${level * 24}px` : 1.5,
              py: miniDrawer && level === 1 ? 1.25 : 1,
              '&:hover': {
                bgcolor: miniDrawer
                  ? 'transparent'
                  : theme.palette.mode === ThemeMode.DARK
                  ? 'divider'
                  : 'primary.lighter',
              },
            }}
          >
            {menuIcon && (
              <ListItemIcon
                onClick={handlerIconLink}
                sx={{
                  minWidth: 24,
                  ...(miniDrawer && {
                    borderRadius: 1.5,
                    width: iconSize,
                    height: iconSize,
                    alignItems: 'center',
                    justifyContent: 'center',
                    '&:hover': {
                      bgcolor: theme.palette.mode === ThemeMode.DARK ? 'secondary.light' : 'secondary.lighter',
                    },
                  }),
                }}
              >
                {menuIcon}
              </ListItemIcon>
            )}
            {(!miniDrawer || (miniDrawer && level !== 1)) && (
              <ListItemText
                primary={
                  <Typography variant="h6" color={textColor}>
                    {t(`menuTree.${menu.title}`, { defaultValue: menu.title })}
                  </Typography>
                }
              />
            )}
            {(!miniDrawer || (miniDrawer && level !== 1)) && (
              <MdiIcon
                path={miniMenuOpened || open ? 'chevron-up' : 'chevron-down'}
                sx={{ fontSize: '0.625rem', marginLeft: 1 }}
              />
            )}

            {miniDrawer && (
              <PopperStyled
                open={miniMenuOpened}
                anchorEl={anchorEl}
                placement="right-start"
                style={{
                  zIndex: 2001,
                }}
                popperOptions={{
                  modifiers: [
                    {
                      name: 'offset',
                      options: {
                        offset: [-12, 1],
                      },
                    },
                  ],
                }}
              >
                {({ TransitionProps }) => (
                  <Transitions in={miniMenuOpened} {...TransitionProps}>
                    <Paper
                      sx={{
                        overflow: 'hidden',
                        mt: 1.5,
                        backgroundImage: 'none',
                        border: `1px solid ${theme.palette.divider}`,
                      }}
                    >
                      <ClickAwayListener onClickAway={handleClose}>
                        <SimpleBar sx={simpleBarSx}>{navCollapse}</SimpleBar>
                      </ClickAwayListener>
                    </Paper>
                  </Transitions>
                )}
              </PopperStyled>
            )}
          </ListItemButton>
          {!miniDrawer && (
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List sx={{ p: 0 }}>{navCollapse}</List>
            </Collapse>
          )}
        </>
      ) : (
        <>
          <ListItemButton
            id={`boundary-${popperId}`}
            disableRipple
            onMouseEnter={handleHover}
            onMouseLeave={handleClose}
            onClick={handleHover}
            aria-describedby={popperId}
            sx={{
              '&.Mui-selected': {
                bgcolor: 'transparent',
              },
            }}
          >
            <Box onClick={handlerIconLink} sx={boxSx}>
              {menuIcon && (
                <ListItemIcon sx={{ my: 'auto', minWidth: !menu.icon ? iconSizeSmall : iconSize }}>
                  {menuIcon}
                </ListItemIcon>
              )}
              {!menuIcon && level !== 1 && (
                <ListItemIcon
                  sx={{
                    my: 'auto',
                    minWidth: !menu.icon ? iconSizeSmall : iconSize,
                    bgcolor: 'transparent',
                    '&:hover': { bgcolor: 'transparent' },
                  }}
                >
                  <MdiIcon path={'circle-small'} sx={{ color: 'secondary' }} />
                </ListItemIcon>
              )}
              <ListItemText
                primary={
                  <Typography variant="body1" color="inherit" sx={{ my: 'auto' }}>
                    {t(`menuTree.${menu.title}`, { defaultValue: menu.title })}
                  </Typography>
                }
              />
              {miniMenuOpened ? <MdiIcon path="chavron-right" /> : <MdiIcon path="chevron-down" />}
            </Box>

            {anchorEl && (
              <PopperStyled
                id={popperId}
                open={miniMenuOpened}
                anchorEl={anchorEl}
                placement="right-start"
                style={{
                  zIndex: 2001,
                }}
                modifiers={[
                  {
                    name: 'offset',
                    options: {
                      offset: [-10, 0],
                    },
                  },
                ]}
              >
                {({ TransitionProps }) => (
                  <Transitions in={miniMenuOpened} {...TransitionProps}>
                    <Paper
                      sx={{
                        overflow: 'hidden',
                        mt: 1.5,
                        py: 0.5,
                        boxShadow: theme.shadows[8],
                        backgroundImage: 'none',
                      }}
                    >
                      <ClickAwayListener onClickAway={handleClose}>
                        <SimpleBar sx={simpleBarSx}>{navCollapse}</SimpleBar>
                      </ClickAwayListener>
                    </Paper>
                  </Transitions>
                )}
              </PopperStyled>
            )}
          </ListItemButton>
        </>
      )}
    </>
  );
};
