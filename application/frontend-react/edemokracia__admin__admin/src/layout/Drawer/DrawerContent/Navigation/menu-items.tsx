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
    id: 'NavigationItemedemokraciaAdminAdminEdemokraciaAdminAdminNavigationControllerEdemokraciaAdminAdminDashboardhomeNavigationItem',
    type: 'item',
    url: 'admin/admin/dashboardhome/view/:signedIdentifier',
    icon: 'home',
    title: 'Dashboard',
    children: [],
  },
  {
    id: 'NavigationItemedemokraciaAdminAdminEdemokraciaAdminAdminNavigationControllerEdemokraciaAdminAdminUsersNavigationItem',
    type: 'item',
    url: 'admin/admin/users/table',
    icon: 'account',
    title: 'Users',
    children: [],
  },
  {
    id: 'NavigationItemedemokraciaAdminAdminEdemokraciaAdminAdminNavigationControllerEdemokraciaAdminAdminMenuItemGroupBasicDataMenu',
    type: 'group',
    icon: 'toy-brick',
    title: 'Basic data',
    children: [
      {
        id: 'NavigationItemedemokraciaAdminAdminEdemokraciaAdminAdminNavigationControllerEdemokraciaAdminAdminMenuItemGroupBasicDataMenuEdemokraciaAdminAdminCategoriesNavigationItem',
        type: 'item',
        url: 'admin/admin/categories/table',
        icon: 'file-tree',
        title: 'Categories',
        children: [],
      },
      {
        id: 'NavigationItemedemokraciaAdminAdminEdemokraciaAdminAdminNavigationControllerEdemokraciaAdminAdminMenuItemGroupBasicDataMenuEdemokraciaAdminAdminCountiesNavigationItem',
        type: 'item',
        url: 'admin/admin/counties/table',
        icon: 'map',
        title: 'Counties',
        children: [],
      },
      {
        id: 'NavigationItemedemokraciaAdminAdminEdemokraciaAdminAdminNavigationControllerEdemokraciaAdminAdminMenuItemGroupBasicDataMenuEdemokraciaAdminAdminIssueTypesNavigationItem',
        type: 'item',
        url: 'admin/admin/issue_types/table',
        icon: 'folder-open',
        title: 'Issue Types',
        children: [],
      },
    ],
  },
  {
    id: 'NavigationItemedemokraciaAdminAdminEdemokraciaAdminAdminNavigationControllerEdemokraciaAdminAdminMenuItemGroupIssuesGroupMenu',
    type: 'group',
    icon: 'texture',
    title: 'Issues',
    children: [
      {
        id: 'NavigationItemedemokraciaAdminAdminEdemokraciaAdminAdminNavigationControllerEdemokraciaAdminAdminMenuItemGroupIssuesGroupMenuEdemokraciaAdminAdminUserCreatedIssuesNavigationItem',
        type: 'item',
        url: 'admin/admin/user_created_issues/table',
        icon: 'ticket-outline',
        title: 'My draft issues',
        children: [],
      },
      {
        id: 'NavigationItemedemokraciaAdminAdminEdemokraciaAdminAdminNavigationControllerEdemokraciaAdminAdminMenuItemGroupIssuesGroupMenuEdemokraciaAdminAdminUserOpenIssuesNavigationItem',
        type: 'item',
        url: 'admin/admin/user_open_issues/table',
        icon: 'ticket-account',
        title: 'My open issues',
        children: [],
      },
      {
        id: 'NavigationItemedemokraciaAdminAdminEdemokraciaAdminAdminNavigationControllerEdemokraciaAdminAdminMenuItemGroupIssuesGroupMenuEdemokraciaAdminAdminIssuesNavigationItem',
        type: 'item',
        url: 'admin/admin/issues/table',
        icon: 'ticket-confirmation',
        title: 'All Issues',
        children: [],
      },
      {
        id: 'NavigationItemedemokraciaAdminAdminEdemokraciaAdminAdminNavigationControllerEdemokraciaAdminAdminMenuItemGroupIssuesGroupMenuEdemokraciaAdminAdminUserIssueNavigationItem',
        type: 'item',
        url: 'admin/admin/user_issue/view/:signedIdentifier',
        icon: 'texture',
        title: 'Issues',
        children: [],
      },
    ],
  },
  {
    id: 'NavigationItemedemokraciaAdminAdminEdemokraciaAdminAdminNavigationControllerEdemokraciaAdminAdminMenuItemGroupDebatesMenuGroup',
    type: 'group',
    icon: 'texture',
    title: 'Debates',
    children: [
      {
        id: 'NavigationItemedemokraciaAdminAdminEdemokraciaAdminAdminNavigationControllerEdemokraciaAdminAdminMenuItemGroupDebatesMenuGroupEdemokraciaAdminAdminDebatesNavigationItem',
        type: 'item',
        url: 'admin/admin/debates/table',
        icon: 'wechat',
        title: 'All Debates',
        children: [],
      },
    ],
  },
  {
    id: 'NavigationItemedemokraciaAdminAdminEdemokraciaAdminAdminNavigationControllerEdemokraciaAdminAdminMenuItemGroupVoteDefinitionMenu',
    type: 'group',
    icon: 'vote',
    title: 'Vote Definitions',
    children: [
      {
        id: 'NavigationItemedemokraciaAdminAdminEdemokraciaAdminAdminNavigationControllerEdemokraciaAdminAdminMenuItemGroupVoteDefinitionMenuEdemokraciaAdminAdminVoteDefinitionsNavigationItem',
        type: 'item',
        url: 'admin/admin/vote_definitions/table',
        icon: 'vote',
        title: 'Votes',
        children: [],
      },
    ],
  },
];
