//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/layout/Header/HeaderContent/Profile/index.tsx'
// Template name: actor/src/layout/Header/HeaderContent/Profile/index.tsx
// Template file: actor/src/layout/Header/HeaderContent/Profile/index.tsx.hbs

import { useRef, useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@mui/material/styles';
import {
  Avatar,
  Box,
  ButtonBase,
  Card,
  CardContent,
  ClickAwayListener,
  Grid,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Popper,
  Stack,
  Typography,
} from '@mui/material';
import { useAuth } from 'react-oidc-context';
import { ThemeMode } from '~/config';
import { MdiIcon } from '~/components';
import { useHeroProps } from '~/hooks';
import { Transitions } from '../../../Transitions';

export const Profile = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const heroProps = useHeroProps();
  const { signoutRedirect, isAuthenticated } = useAuth();
  const doLogout = useCallback(() => {
    const redirectUrl = window.location.href.split('#')[0];
    signoutRedirect({
      post_logout_redirect_uri: redirectUrl,
    });
  }, [isAuthenticated]);

  const anchorRef = useRef<any>(null);
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: MouseEvent | TouchEvent) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const iconBackColorOpen = theme.palette.mode === ThemeMode.DARK ? 'grey.200' : 'grey.300';

  return (
    <Box sx={{ flexShrink: 0, ml: 0.75 }}>
      <ButtonBase
        sx={{
          p: 0.25,
          bgcolor: open ? iconBackColorOpen : 'transparent',
          borderRadius: 1,
          '&:hover': { bgcolor: theme.palette.mode === ThemeMode.DARK ? 'secondary.light' : 'secondary.lighter' },
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
        <Stack direction="row" spacing={2} alignItems="center" sx={{ p: 0.5 }}>
          <Avatar alt="profile user" src={heroProps.imgSrc} />
          <Typography variant="subtitle1">{heroProps.preferredUsername}</Typography>
        </Stack>
      </ButtonBase>
      <Popper
        placement="bottom-end"
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        popperOptions={{
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [0, 9],
              },
            },
          ],
        }}
      >
        {({ TransitionProps }) => (
          <Transitions type="grow" position="top-right" in={open} {...TransitionProps}>
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
                <Card>
                  <CardContent sx={{ px: 2.5, pt: 3 }}>
                    <Grid container justifyContent="space-between" alignItems="center">
                      <Grid item>
                        <Stack direction="row" spacing={1.25} alignItems="center">
                          <Avatar alt="profile user" src={heroProps.imgSrc} sx={{ width: 32, height: 32 }} />
                          <Stack>
                            <Typography variant="h6">{heroProps.preferredUsername}</Typography>
                            <Typography variant="body2" color="textSecondary">
                              {t('applications.User', { defaultValue: 'User' })}
                            </Typography>
                          </Stack>
                        </Stack>
                      </Grid>
                    </Grid>
                  </CardContent>

                  <List component="nav" sx={{ p: 0, '& .MuiListItemIcon-root': { minWidth: 32 } }}>
                    <ListItemButton onClick={doLogout}>
                      <ListItemIcon>
                        <MdiIcon path="logout" />
                      </ListItemIcon>
                      <ListItemText primary={t('judo.security.logout', { defaultValue: 'Logout' })} />
                    </ListItemButton>
                  </List>
                </Card>
              </ClickAwayListener>
            </Paper>
          </Transitions>
        )}
      </Popper>
    </Box>
  );
};
