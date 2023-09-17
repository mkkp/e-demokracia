//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/layout/Header/HeaderContent/Profile/ProfileTab.tsx'
// Template name: actor/src/layout/Header/HeaderContent/Profile/ProfileTab.tsx
// Template file: actor/src/layout/Header/HeaderContent/Profile/ProfileTab.tsx.hbs

import { useCallback, useState } from 'react';
import type { ChangeEvent, MouseEvent } from 'react';
import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Radio,
  RadioGroup,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useAuth } from 'react-oidc-context';
import { MdiIcon } from '~/components';

interface ProfileTabProps {
  handleLogout: () => void;
}

export const ProfileTab = ({ handleLogout }: ProfileTabProps) => {
  const { t } = useTranslation();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleListItemClick = (event: MouseEvent<HTMLDivElement>, index: number) => {
    setSelectedIndex(index);
  };
  const { signoutRedirect, isAuthenticated } = useAuth();

  const doLogout = useCallback(() => {
    const redirectUrl = window.location.href.split('#')[0];
    signoutRedirect({
      post_logout_redirect_uri: redirectUrl,
    });
  }, [isAuthenticated]);

  return (
    <List component="nav" sx={{ p: 0, '& .MuiListItemIcon-root': { minWidth: 32 } }}>
      {/*<ListItemButton*/}
      {/*  selected={selectedIndex === 0}*/}
      {/*  onClick={(event: MouseEvent<HTMLDivElement>) => handleListItemClick(event, 0)}*/}
      {/*>*/}
      {/*  <ListItemIcon>*/}
      {/*    <MdiIcon path="pencil-outline" />*/}
      {/*  </ListItemIcon>*/}
      {/*  <ListItemText primary="Edit Profile" />*/}
      {/*</ListItemButton>*/}
      {/*<ListItemButton*/}
      {/*  selected={selectedIndex === 1}*/}
      {/*  onClick={(event: MouseEvent<HTMLDivElement>) => handleListItemClick(event, 1)}*/}
      {/*>*/}
      {/*  <ListItemIcon>*/}
      {/*    <MdiIcon path="account-outline" />*/}
      {/*  </ListItemIcon>*/}
      {/*  <ListItemText primary="View Profile" />*/}
      {/*</ListItemButton>*/}

      {/*<ListItemButton*/}
      {/*  selected={selectedIndex === 3}*/}
      {/*  onClick={(event: MouseEvent<HTMLDivElement>) => handleListItemClick(event, 3)}*/}
      {/*>*/}
      {/*  <ListItemIcon>*/}
      {/*    <MdiIcon path="account-outline" />*/}
      {/*  </ListItemIcon>*/}
      {/*  <ListItemText primary="Social Profile" />*/}
      {/*</ListItemButton>*/}
      {/*<ListItemButton*/}
      {/*  selected={selectedIndex === 4}*/}
      {/*  onClick={(event: MouseEvent<HTMLDivElement>) => handleListItemClick(event, 4)}*/}
      {/*>*/}
      {/*  <ListItemIcon>*/}
      {/*    <MdiIcon path="wallet-outline" />*/}
      {/*  </ListItemIcon>*/}
      {/*  <ListItemText primary="Billing" />*/}
      {/*</ListItemButton>*/}
      <ListItemButton selected={selectedIndex === 2} onClick={doLogout}>
        <ListItemIcon>
          <MdiIcon path="logout" />
        </ListItemIcon>
        <ListItemText primary={t('judo.security.logout', { defaultValue: 'Logout' })} />
      </ListItemButton>
    </List>
  );
};
