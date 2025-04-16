//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/layout/Header/HeaderContent/Profile/index.tsx'
// Template name: actor/src/layout/Header/HeaderContent/Profile/index.tsx
// Template file: actor/src/layout/Header/HeaderContent/Profile/index.tsx.hbs

import { Divider, Grid, IconButton, List, Popover, THEME_ID, Tooltip } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { useCallback, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAuth } from 'react-oidc-context';
import { MdiIcon, useJudoNavigation } from '~/components';
import { DRAWER_WIDTH, MINI_DRAWER_WIDTH, ThemeMode } from '~/config';
import { useConfig, useHeroProps } from '~/hooks';
import { ProfilePopup } from '~/layout/ProfilePopup';
import { routeToServiceUserUserProfileAccessViewPage } from '~/routes';
import { useLayoutHelper } from '~/utilities/layout-helper';

export const BottomProfile = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const heroProps = useHeroProps();
  const { navigate } = useJudoNavigation();
  const openProfilePage = async () => {
    setOpen(false);
    navigate(routeToServiceUserUserProfileAccessViewPage());
  };
  const { downLG } = useLayoutHelper();

  const anchorRef = useRef<any>(null);
  const [open, setOpen] = useState(false);
  const { miniDrawer, mode, onChangeMode } = useConfig();
  const { signoutRedirect, isAuthenticated } = useAuth();
  const doLogout = useCallback(() => {
    const redirectUrl = window.location.href.split('#')[0];
    signoutRedirect({
      post_logout_redirect_uri: redirectUrl,
    });
  }, [isAuthenticated]);

  const handleToggle = (event: React.MouseEvent<HTMLElement>) => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: MouseEvent | TouchEvent) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const handleToggleThememode = (event: React.MouseEvent<HTMLElement>) => {
    if (mode == ThemeMode.DARK) {
      onChangeMode(ThemeMode.LIGHT);
    } else {
      onChangeMode(ThemeMode.DARK);
    }
  };

  const iconBackColorOpen = theme.palette.mode === ThemeMode.DARK ? 'grey.200' : 'grey.300';

  return (
    <Box sx={{ flexShrink: 0, p: `${miniDrawer ? 0.75 : 0.75}` }}>
      <Grid container justifyContent="space-between" alignItems="strech" sx={{ width: '100%', p: 0.5 }}>
        <Grid item sx={{ width: '100%' }}>
          <ButtonBase
            sx={{
              width: '100%',
              p: 0.25,
              bgcolor: open ? iconBackColorOpen : 'transparent',
              borderRadius: 1,
              '&:hover': {
                bgcolor: theme.palette.mode === ThemeMode.DARK ? 'secondary.light' : 'secondary.lighter',
              },
              '&:focus-visible': {
                outline: `2px solid ${theme.palette.secondary.dark}`,
                outlineOffset: 2,
              },
            }}
            aria-label="open profile"
            ref={anchorRef}
            aria-controls={open ? 'profile-grow' : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
          >
            <Avatar alt="profile user" src={heroProps.imgSrc} sx={{ width: 32, height: 32 }} />
            <Stack padding={0.5} sx={{ width: '100%', alignItems: 'stretch' }}>
              <Typography variant="h6">{heroProps.preferredUsername}</Typography>
              <Typography variant="body2" color="textSecondary">
                {t('applications.User', { defaultValue: 'User' })}
              </Typography>
            </Stack>
          </ButtonBase>
        </Grid>
        <Grid item></Grid>
      </Grid>
      <Popover
        id="profile"
        open={open}
        anchorEl={anchorRef.current}
        anchorOrigin={{
          vertical: 'top',
          horizontal: miniDrawer ? MINI_DRAWER_WIDTH : DRAWER_WIDTH / 2,
        }}
        onClose={handleClose}
      >
        <Box>
          <Paper
            sx={{
              width: 290,
              minWidth: 240,
              maxWidth: 290,
              [theme.breakpoints.down('md')]: {
                maxWidth: 250,
              },
            }}
          >
            <ClickAwayListener onClickAway={handleClose}>
              <ProfilePopup openProfilePage={openProfilePage} />
            </ClickAwayListener>
          </Paper>
        </Box>
      </Popover>
    </Box>
  );
};
