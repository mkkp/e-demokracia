//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/layout/Drawer/DrawerContent/Navigation/NavCollapse.tsx'
// Template name: actor/src/layout/Drawer/DrawerContent/Navigation/NavCollapse.tsx
// Template file: actor/src/layout/Drawer/DrawerContent/Navigation/NavCollapse.tsx.hbs

import { useEffect, useState, useMemo } from 'react';
import type { Dispatch, MouseEvent, SetStateAction } from 'react';
import { useJudoNavigation } from '~/components';
import { useTranslation } from 'react-i18next';
import { styled, useTheme } from '@mui/material/styles';
import {
  Box,
  Collapse,
  ClickAwayListener,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Popper,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useConfig } from '~/hooks';
import { MenuOrientation, ThemeMode } from '~/config';
import { MdiIcon } from '~/components';
import { NavItem } from './NavItem';
import { Dot } from './Dot';
import { SimpleBar } from '../SimpleBar';
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
  setSelectedItems: Dispatch<SetStateAction<string | undefined>>;
  selectedItems: string | undefined;
  setSelectedLevel: Dispatch<SetStateAction<number>>;
  selectedLevel: number;
}

export const NavCollapse = ({
  menu,
  level,
  parentId,
  setSelectedItems,
  selectedItems,
  setSelectedLevel,
  selectedLevel,
}: NavCollapseProps) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const { navigate } = useJudoNavigation();
  const { menuOrientation, miniDrawer } = useConfig();

  const downLG = useMediaQuery(theme.breakpoints.down('lg'));

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string | null | undefined>(null);
  const [anchorEl, setAnchorEl] = useState<VirtualElement | (() => VirtualElement) | null | undefined>(null);

  const handleClick = (event: MouseEvent) => {
    setAnchorEl(null);
    setSelectedLevel(level);
    if (!miniDrawer) {
      setOpen(!open);
      setSelected(!selected ? menu.id : null);
      setSelectedItems(!selected ? menu.id : '');
      if (menu.url) navigate(`${menu.url}`);
    } else {
      setAnchorEl(event?.currentTarget);
    }
  };

  const handlerIconLink = () => {
    if (miniDrawer) {
      if (menu.url) navigate(`${menu.url}`);
      setSelected(menu.id);
    }
  };

  const handleHover = (event: MouseEvent) => {
    setAnchorEl(event?.currentTarget);
    if (miniDrawer) {
      setSelected(menu.id);
    }
  };

  const miniMenuOpened = Boolean(anchorEl);

  const handleClose = () => {
    setOpen(false);
    if (!miniMenuOpened) {
      if (!menu.url) {
        setSelected(null);
      }
    }
    setAnchorEl(null);
  };

  useMemo(() => {
    if (selected === selectedItems) {
      if (level === 1) {
        setOpen(true);
      }
    } else {
      if (level === selectedLevel) {
        setOpen(false);
        if (!miniMenuOpened && miniDrawer && !selected) {
          setSelected(null);
        }
        if (!miniDrawer) {
          setSelected(null);
        }
      }
    }
  }, [selectedItems, level, selected, miniMenuOpened, !miniDrawer, selectedLevel]);

  const navCollapse = menu.children?.map((item) => {
    switch (item.type) {
      case 'collapse':
        return (
          <NavCollapse
            key={item.id}
            setSelectedItems={setSelectedItems}
            setSelectedLevel={setSelectedLevel}
            selectedLevel={selectedLevel}
            selectedItems={selectedItems}
            menu={item}
            level={level + 1}
            parentId={parentId}
          />
        );
      case 'item':
        return <NavItem key={item.id} item={item} level={level + 1} />;
      default:
        return (
          <Typography key={item.id} variant="h6" color="error" align="center">
            Fix - Collapse or Item
          </Typography>
        );
    }
  });
  const isSelected = selected === menu.id;
  const borderIcon = level === 1 ? <MdiIcon path="border-all-variant" sx={{ fontSize: '1rem' }} /> : false;
  const menuIcon = menu.icon ? (
    <MdiIcon path={menu.icon!} sx={{ fontSize: !miniDrawer ? '1rem' : '1.25rem' }} />
  ) : (
    borderIcon
  );
  const textColor = theme.palette.mode === ThemeMode.DARK ? 'grey.400' : 'text.primary';
  const iconSelectedColor =
    theme.palette.mode === ThemeMode.DARK && !miniDrawer ? theme.palette.text.primary : theme.palette.primary.main;
  const popperId = miniMenuOpened ? `collapse-pop-${menu.id}` : undefined;
  const FlexBox = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' };
  return (
    <>
      {menuOrientation === MenuOrientation.VERTICAL || downLG ? (
        <>
          <ListItemButton
            disableRipple
            selected={selected === menu.id}
            {...(miniDrawer && { onMouseEnter: handleClick, onMouseLeave: handleClose })}
            onClick={handleClick}
            sx={{
              pl: !miniDrawer ? `${level * 28}px` : 1.5,
              py: miniDrawer && level === 1 ? 1.25 : 1,
              ...(!miniDrawer && {
                '&:hover': {
                  bgcolor: theme.palette.mode === ThemeMode.DARK ? 'divider' : 'primary.lighter',
                },
                '&.Mui-selected': {
                  bgcolor: 'transparent',
                  // color: iconSelectedColor,
                  '&:hover': {
                    color: iconSelectedColor,
                    bgcolor: theme.palette.mode === ThemeMode.DARK ? 'divider' : 'transparent',
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
            {menuIcon && (
              <ListItemIcon
                onClick={handlerIconLink}
                sx={{
                  minWidth: 28,
                  // color: selected === menu.id ? 'primary.main' : textColor,
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
                  ...(miniDrawer &&
                    selected === menu.id && {
                      bgcolor: theme.palette.mode === ThemeMode.DARK ? 'primary.900' : 'primary.lighter',
                      '&:hover': {
                        bgcolor: theme.palette.mode === ThemeMode.DARK ? 'primary.darker' : 'primary.lighter',
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
                  <Typography variant="h6" color={selected === menu.id ? 'primary' : textColor}>
                    {t(`menuTree.${menu.title}`, { defaultValue: menu.title })}
                  </Typography>
                }
                secondary={
                  menu.caption && (
                    <Typography variant="caption" color="secondary">
                      {menu.caption}
                    </Typography>
                  )
                }
              />
            )}
            {(!miniDrawer || (miniDrawer && level !== 1)) &&
              (miniMenuOpened || open ? (
                <MdiIcon
                  path="chevron-up"
                  sx={{ fontSize: '0.625rem', marginLeft: 1 /*, color: theme.palette.primary.main*/ }}
                />
              ) : (
                <MdiIcon path="chevron-down" sx={{ fontSize: '0.625rem', marginLeft: 1 }} />
              ))}

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
                        <SimpleBar
                          sx={{
                            overflowX: 'hidden',
                            overflowY: 'auto',
                            maxHeight: 'calc(100vh - 170px)',
                          }}
                        >
                          {navCollapse}
                        </SimpleBar>
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
            selected={isSelected}
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
            <Box onClick={handlerIconLink} sx={FlexBox}>
              {menuIcon && (
                <ListItemIcon
                  sx={{ my: 'auto', minWidth: !menu.icon ? 18 : 36 /*, color: theme.palette.secondary.dark*/ }}
                >
                  {menuIcon}
                </ListItemIcon>
              )}
              {!menuIcon && level !== 1 && (
                <ListItemIcon
                  sx={{
                    my: 'auto',
                    minWidth: !menu.icon ? 18 : 36,
                    bgcolor: 'transparent',
                    '&:hover': { bgcolor: 'transparent' },
                  }}
                >
                  <Dot size={4} color={isSelected ? 'primary' : 'secondary'} />
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
                        <SimpleBar
                          sx={{
                            overflowX: 'hidden',
                            overflowY: 'auto',
                            maxHeight: 'calc(100vh - 170px)',
                          }}
                        >
                          {navCollapse}
                        </SimpleBar>
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
