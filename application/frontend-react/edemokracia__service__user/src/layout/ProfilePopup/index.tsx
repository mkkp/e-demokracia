//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/layout/ProfilePopup/index.tsx'
// Template name: actor/src/layout/ProfilePopup/index.tsx
// Template file: actor/src/layout/ProfilePopup/index.tsx.hbs

import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useAuth } from 'react-oidc-context';
import { MdiIcon, useJudoNavigation } from '~/components';
import { ThemeMode } from '~/config/layout';
import { useConfig, useHeroProps } from '~/hooks';

export type ProfilePopupProps = {
  openProfilePage?: () => void;
};

export const ProfilePopup = ({ openProfilePage }: ProfilePopupProps) => {
  const { t } = useTranslation();
  const heroProps = useHeroProps();
  const { miniDrawer, mode, onChangeMode } = useConfig();

  const { signoutRedirect, isAuthenticated } = useAuth();
  const doLogout = useCallback(() => {
    const redirectUrl = window.location.href.split('#')[0];
    signoutRedirect({
      post_logout_redirect_uri: redirectUrl,
    });
  }, [isAuthenticated]);

  const handleToggleThememode = (event: React.MouseEvent<HTMLElement>) => {
    if (mode == ThemeMode.DARK) {
      onChangeMode(ThemeMode.LIGHT);
    } else {
      onChangeMode(ThemeMode.DARK);
    }
  };

  return (
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
        <ListItemButton onClick={openProfilePage}>
          <ListItemIcon>
            <MdiIcon path="cog-outline" />
          </ListItemIcon>
          <ListItemText primary={t('judo.profile.profile', { defaultValue: 'Profile' })} />
        </ListItemButton>
        <ListItemButton onClick={handleToggleThememode}>
          <ListItemIcon>
            <MdiIcon path={mode === ThemeMode.DARK ? 'weather-sunny' : 'weather-night'} />
          </ListItemIcon>
          <ListItemText
            primary={
              mode === ThemeMode.DARK
                ? t('judo.profile.thememode.light', { defaultValue: 'Theme mode: light' })
                : t('judo.profile.thememode.dark', { defaultValue: 'Theme mode: dark' })
            }
          />
        </ListItemButton>
        <Divider />
        <ListItemButton onClick={doLogout}>
          <ListItemIcon>
            <MdiIcon path="logout" />
          </ListItemIcon>
          <ListItemText primary={t('judo.security.logout', { defaultValue: 'Logout' })} />
        </ListItemButton>
      </List>
    </Card>
  );
};
