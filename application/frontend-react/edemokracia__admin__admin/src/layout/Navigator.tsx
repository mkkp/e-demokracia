//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/layout/Navigator.tsx'
// Template name: actor/src/layout/Navigator.tsx
// Template file: actor/src/layout/Navigator.tsx.hbs

import { useCallback, useEffect, useState } from 'react';
import type { DrawerProps } from '@mui/material';
import {
  Collapse,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Icon,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import SimpleBar from 'simplebar-react';
import { useTranslation } from 'react-i18next';
import { useAuth } from 'react-oidc-context';
import { usePrincipal } from '../auth';
import { Hero, Logo, useJudoNavigation, MdiIcon } from '../components';
import type { MenuItem, HeroProps, LogoProps } from '../components-api';
import { MenuItems } from './MenuItems';

import 'simplebar-react/dist/simplebar.min.css';

export interface NavigatorProps {
  items: Array<MenuItem>;
  heroProps: HeroProps;
  logoProps: LogoProps;
}

export function Navigator(props: DrawerProps & NavigatorProps) {
  const { items, heroProps, logoProps, ...other } = props;
  const { t } = useTranslation();
  const { signoutRedirect, isAuthenticated } = useAuth();
  const doLogout = useCallback(() => {
    const redirectUrl = window.location.href.split('#')[0];
    signoutRedirect({
      post_logout_redirect_uri: redirectUrl,
    });
  }, [isAuthenticated]);
  const { principal } = usePrincipal();

  return (
    <Drawer variant="permanent" {...other}>
      <SimpleBar style={{ height: '100vh' }}>
        <Logo {...logoProps} />
        <Hero {...heroProps} />
        <Divider variant="middle" />
        <MenuItems items={items} />
        <List>
          <ListItem disablePadding>
            <ListItemButton id="navigator-logout" onClick={() => doLogout()}>
              <ListItemIcon>
                <MdiIcon path="logout" />
              </ListItemIcon>
              <ListItemText primary={t('judo.security.logout', { defaultValue: 'Logout' })} />
            </ListItemButton>
          </ListItem>
        </List>
      </SimpleBar>
    </Drawer>
  );
}
