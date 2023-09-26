//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/layout/Drawer/DrawerContent/Navigation/menu-items.tsx'
// Template name: actor/src/layout/Drawer/DrawerContent/Navigation/menu-items.tsx
// Template file: actor/src/layout/Drawer/DrawerContent/Navigation/menu-items.tsx.hbs

import { NavItemType } from './NavItem';

export const menus: NavItemType[] = [
  {
    id: 'NavigationItemedemokraciaAdminAdminEdemokraciaAdminAdminNavigationControllerEdemokraciaAdminAdminDashboardHomeNavigationItem',
    type: 'item',
    url: 'admin/admin/dashboard_home/view/:signedIdentifier',
    icon: 'home',
    title: 'Dashboard',
    children: [],
  },
  {
    id: 'NavigationItemedemokraciaAdminAdminEdemokraciaAdminAdminNavigationControllerEdemokraciaAdminAdminUserIssuesNavigationItem',
    type: 'item',
    url: 'admin/admin/user_issues/view/:signedIdentifier',
    icon: 'ticket-confirmation',
    title: 'Issues',
    children: [],
  },
  {
    id: 'NavigationItemedemokraciaAdminAdminEdemokraciaAdminAdminNavigationControllerEdemokraciaAdminAdminMenuItemGroupDebatesMenuGroup',
    type: 'group',
    icon: 'texture',
    title: 'Debates',
    children: [
      {
        id: 'NavigationItemedemokraciaAdminAdminEdemokraciaAdminAdminNavigationControllerEdemokraciaAdminAdminMenuItemGroupDebatesMenuGroupEdemokraciaAdminAdminAdminDebatesNavigationItem',
        type: 'item',
        url: 'admin/admin/admin_debates/table',
        icon: 'wechat',
        title: 'All Debates',
        children: [],
      },
    ],
  },
  {
    id: 'NavigationItemedemokraciaAdminAdminEdemokraciaAdminAdminNavigationControllerEdemokraciaAdminAdminMenuItemGroupAdministrativeMenuGroup',
    type: 'group',
    icon: 'texture',
    title: 'Administrative functions',
    children: [
      {
        id: 'NavigationItemedemokraciaAdminAdminEdemokraciaAdminAdminNavigationControllerEdemokraciaAdminAdminMenuItemGroupAdministrativeMenuGroupEdemokraciaAdminAdminMenuItemGroupAdminBasicDataMenuGroup',
        type: 'collapse',
        icon: 'toy-brick',
        title: 'Basic data',
        children: [
          {
            id: 'NavigationItemedemokraciaAdminAdminEdemokraciaAdminAdminNavigationControllerEdemokraciaAdminAdminMenuItemGroupAdministrativeMenuGroupEdemokraciaAdminAdminMenuItemGroupAdminBasicDataMenuGroupEdemokraciaAdminAdminAdminCategoriesNavigationItem',
            type: 'item',
            url: 'admin/admin/admin_categories/table',
            icon: 'file-tree',
            title: 'Categories',
            children: [],
          },
          {
            id: 'NavigationItemedemokraciaAdminAdminEdemokraciaAdminAdminNavigationControllerEdemokraciaAdminAdminMenuItemGroupAdministrativeMenuGroupEdemokraciaAdminAdminMenuItemGroupAdminBasicDataMenuGroupEdemokraciaAdminAdminAdminCountiesNavigationItem',
            type: 'item',
            url: 'admin/admin/admin_counties/table',
            icon: 'map',
            title: 'Counties',
            children: [],
          },
          {
            id: 'NavigationItemedemokraciaAdminAdminEdemokraciaAdminAdminNavigationControllerEdemokraciaAdminAdminMenuItemGroupAdministrativeMenuGroupEdemokraciaAdminAdminMenuItemGroupAdminBasicDataMenuGroupEdemokraciaAdminAdminAdminIssueTypesNavigationItem',
            type: 'item',
            url: 'admin/admin/admin_issue_types/table',
            icon: 'folder-open',
            title: 'Issue Types',
            children: [],
          },
        ],
      },
      {
        id: 'NavigationItemedemokraciaAdminAdminEdemokraciaAdminAdminNavigationControllerEdemokraciaAdminAdminMenuItemGroupAdministrativeMenuGroupEdemokraciaAdminAdminAdminUserManagerNavigationItem',
        type: 'item',
        url: 'admin/admin/admin_user_manager/view/:signedIdentifier',
        icon: 'account',
        title: 'Users',
        children: [],
      },
      {
        id: 'NavigationItemedemokraciaAdminAdminEdemokraciaAdminAdminNavigationControllerEdemokraciaAdminAdminMenuItemGroupAdministrativeMenuGroupEdemokraciaAdminAdminAdminIssuesNavigationItem',
        type: 'item',
        url: 'admin/admin/admin_issues/table',
        icon: 'ticket-confirmation',
        title: 'Issues ',
        children: [],
      },
      {
        id: 'NavigationItemedemokraciaAdminAdminEdemokraciaAdminAdminNavigationControllerEdemokraciaAdminAdminMenuItemGroupAdministrativeMenuGroupEdemokraciaAdminAdminAdminVoteDefinitionsNavigationItem',
        type: 'item',
        url: 'admin/admin/admin_vote_definitions/table',
        icon: 'vote',
        title: 'Vote Definitions',
        children: [],
      },
      {
        id: 'NavigationItemedemokraciaAdminAdminEdemokraciaAdminAdminNavigationControllerEdemokraciaAdminAdminMenuItemGroupAdministrativeMenuGroupEdemokraciaAdminAdminAdminVoteEntriesNavigationItem',
        type: 'item',
        url: 'admin/admin/admin_vote_entries/table',
        icon: 'vote-outline',
        title: 'Vote Entries',
        children: [],
      },
    ],
  },
  {
    id: 'NavigationItemedemokraciaAdminAdminEdemokraciaAdminAdminNavigationControllerEdemokraciaAdminAdminMenuItemGroupTechicalAccessesMenuGroup',
    type: 'item',
    icon: 'texture',
    title: 'Techical Accesses Menu Group',
    hiddenBy: 'isAdmin',
    children: [],
  },
];
