//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/menu-items.tsx'
// Template name: actor/src/menu-items.tsx
// Template file: actor/src/menu-items.tsx.hbs

import type { MenuItem } from './components-api';

export const menuItems: MenuItem[] = [
  {
    id: 'NavigationItemedemokraciaAdminAdminEdemokraciaAdminAdminNavigationControllerEdemokraciaAdminAdminDashboardhomeNavigationItem',
    to: 'admin/admin/dashboardhome/view/:signedIdentifier',
    icon: 'home',
    label: 'Dashboard',
    items: [],
  },
  {
    id: 'NavigationItemedemokraciaAdminAdminEdemokraciaAdminAdminNavigationControllerEdemokraciaAdminAdminUsersNavigationItem',
    to: 'admin/admin/users/table',
    icon: 'account',
    label: 'Users',
    items: [],
  },
  {
    id: 'NavigationItemedemokraciaAdminAdminEdemokraciaAdminAdminNavigationControllerEdemokraciaAdminAdminMenuItemGroupBasicDataMenu',
    icon: 'toy-brick',
    label: 'Basic data',
    items: [
      {
        id: 'NavigationItemedemokraciaAdminAdminEdemokraciaAdminAdminNavigationControllerEdemokraciaAdminAdminMenuItemGroupBasicDataMenuEdemokraciaAdminAdminCategoriesNavigationItem',
        to: 'admin/admin/categories/table',
        icon: 'file-tree',
        label: 'Categories',
        items: [],
      },
      {
        id: 'NavigationItemedemokraciaAdminAdminEdemokraciaAdminAdminNavigationControllerEdemokraciaAdminAdminMenuItemGroupBasicDataMenuEdemokraciaAdminAdminCountiesNavigationItem',
        to: 'admin/admin/counties/table',
        icon: 'map',
        label: 'Counties',
        items: [],
      },
      {
        id: 'NavigationItemedemokraciaAdminAdminEdemokraciaAdminAdminNavigationControllerEdemokraciaAdminAdminMenuItemGroupBasicDataMenuEdemokraciaAdminAdminIssueTypesNavigationItem',
        to: 'admin/admin/issue_types/table',
        icon: 'folder-open',
        label: 'Issue Types',
        items: [],
      },
    ],
  },
  {
    id: 'NavigationItemedemokraciaAdminAdminEdemokraciaAdminAdminNavigationControllerEdemokraciaAdminAdminMenuItemGroupIssuesAndDebates',
    icon: 'texture',
    label: 'Issues, Debates',
    items: [
      {
        id: 'NavigationItemedemokraciaAdminAdminEdemokraciaAdminAdminNavigationControllerEdemokraciaAdminAdminMenuItemGroupIssuesAndDebatesEdemokraciaAdminAdminIssuesNavigationItem',
        to: 'admin/admin/issues/table',
        icon: 'ticket-confirmation',
        label: 'Issues',
        items: [],
      },
      {
        id: 'NavigationItemedemokraciaAdminAdminEdemokraciaAdminAdminNavigationControllerEdemokraciaAdminAdminMenuItemGroupIssuesAndDebatesEdemokraciaAdminAdminDebatesNavigationItem',
        to: 'admin/admin/debates/table',
        icon: 'wechat',
        label: 'Debates',
        items: [],
      },
    ],
  },
  {
    id: 'NavigationItemedemokraciaAdminAdminEdemokraciaAdminAdminNavigationControllerEdemokraciaAdminAdminVoteDefinitionsNavigationItem',
    to: 'admin/admin/vote_definitions/table',
    icon: 'vote',
    label: 'Votes',
    items: [],
  },
  {
    id: 'NavigationItemedemokraciaAdminAdminEdemokraciaAdminAdminNavigationControllerEdemokraciaAdminAdminVoteEntriesNavigationItem',
    to: 'admin/admin/vote_entries/table',
    icon: 'vote-outline',
    label: 'Vote Entries',
    items: [],
  },
];
