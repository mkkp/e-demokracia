//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/layout/Header/HeaderContent/Profile/SettingTab.tsx'
// Template name: actor/src/layout/Header/HeaderContent/Profile/SettingTab.tsx
// Template file: actor/src/layout/Header/HeaderContent/Profile/SettingTab.tsx.hbs

import { useState } from 'react';
import { List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { MdiIcon } from '~/components';

export const SettingTab = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleListItemClick = (event: React.MouseEvent<HTMLDivElement>, index: number) => {
    setSelectedIndex(index);
  };

  return (
    <List component="nav" sx={{ p: 0, '& .MuiListItemIcon-root': { minWidth: 32 } }}>
      <ListItemButton
        selected={selectedIndex === 0}
        onClick={(event: React.MouseEvent<HTMLDivElement>) => handleListItemClick(event, 0)}
      >
        <ListItemIcon>
          <MdiIcon path="chat-question-outline" />
        </ListItemIcon>
        <ListItemText primary="Support" />
      </ListItemButton>
      <ListItemButton
        selected={selectedIndex === 1}
        onClick={(event: React.MouseEvent<HTMLDivElement>) => handleListItemClick(event, 1)}
      >
        <ListItemIcon>
          <MdiIcon path="account-outline" />
        </ListItemIcon>
        <ListItemText primary="Account Settings" />
      </ListItemButton>
      <ListItemButton
        selected={selectedIndex === 2}
        onClick={(event: React.MouseEvent<HTMLDivElement>) => handleListItemClick(event, 2)}
      >
        <ListItemIcon>
          <MdiIcon path="lock-outline" />
        </ListItemIcon>
        <ListItemText primary="Privacy Center" />
      </ListItemButton>
      <ListItemButton
        selected={selectedIndex === 3}
        onClick={(event: React.MouseEvent<HTMLDivElement>) => handleListItemClick(event, 3)}
      >
        <ListItemIcon>
          <MdiIcon path="comment-outline" />
        </ListItemIcon>
        <ListItemText primary="Feedback" />
      </ListItemButton>
      <ListItemButton
        selected={selectedIndex === 4}
        onClick={(event: React.MouseEvent<HTMLDivElement>) => handleListItemClick(event, 4)}
      >
        <ListItemIcon>
          <MdiIcon path="format-list-bulleted-square" />
        </ListItemIcon>
        <ListItemText primary="History" />
      </ListItemButton>
    </List>
  );
};
