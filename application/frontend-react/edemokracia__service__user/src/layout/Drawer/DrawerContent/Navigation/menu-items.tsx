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
    id: 'NavigationItemedemokraciaServiceUserEdemokraciaServiceUserNavigationControllerEdemokraciaServiceUserDashboardHomeNavigationItem',
    type: 'item',
    url: 'service/user/dashboard_home/view/:signedIdentifier',
    icon: 'home',
    title: 'Dashboard',
    children: [],
  },
  {
    id: 'NavigationItemedemokraciaServiceUserEdemokraciaServiceUserNavigationControllerEdemokraciaServiceUserUserIssuesNavigationItem',
    type: 'item',
    url: 'service/user/user_issues/view/:signedIdentifier',
    icon: 'wechat',
    title: 'Issues',
    children: [],
  },
  {
    id: 'NavigationItemedemokraciaServiceUserEdemokraciaServiceUserNavigationControllerEdemokraciaServiceUserUserVoteDefinitionsNavigationItem',
    type: 'item',
    url: 'service/user/user_vote_definitions/view/:signedIdentifier',
    icon: 'vote',
    title: 'Votes',
    children: [],
  },
  {
    id: 'NavigationItemedemokraciaServiceUserEdemokraciaServiceUserNavigationControllerEdemokraciaServiceUserMenuItemGroupAdministrativeMenuGroup',
    type: 'group',
    icon: 'texture',
    title: 'Administrative functions',
    children: [
      {
        id: 'NavigationItemedemokraciaServiceUserEdemokraciaServiceUserNavigationControllerEdemokraciaServiceUserMenuItemGroupAdministrativeMenuGroupEdemokraciaServiceUserMenuItemGroupAdminBasicDataMenuGroup',
        type: 'collapse',
        icon: 'toy-brick',
        title: 'Basic data',
        children: [
          {
            id: 'NavigationItemedemokraciaServiceUserEdemokraciaServiceUserNavigationControllerEdemokraciaServiceUserMenuItemGroupAdministrativeMenuGroupEdemokraciaServiceUserMenuItemGroupAdminBasicDataMenuGroupEdemokraciaServiceUserAdminCategoriesNavigationItem',
            type: 'item',
            url: 'service/user/admin_categories/table',
            icon: 'file-tree',
            title: 'Categories',
            children: [],
          },
          {
            id: 'NavigationItemedemokraciaServiceUserEdemokraciaServiceUserNavigationControllerEdemokraciaServiceUserMenuItemGroupAdministrativeMenuGroupEdemokraciaServiceUserMenuItemGroupAdminBasicDataMenuGroupEdemokraciaServiceUserAdminCountiesNavigationItem',
            type: 'item',
            url: 'service/user/admin_counties/table',
            icon: 'castle',
            title: 'Counties',
            children: [],
          },
          {
            id: 'NavigationItemedemokraciaServiceUserEdemokraciaServiceUserNavigationControllerEdemokraciaServiceUserMenuItemGroupAdministrativeMenuGroupEdemokraciaServiceUserMenuItemGroupAdminBasicDataMenuGroupEdemokraciaServiceUserAdminIssueTypesNavigationItem',
            type: 'item',
            url: 'service/user/admin_issue_types/table',
            icon: 'folder-open',
            title: 'Issue Types',
            children: [],
          },
        ],
      },
      {
        id: 'NavigationItemedemokraciaServiceUserEdemokraciaServiceUserNavigationControllerEdemokraciaServiceUserMenuItemGroupAdministrativeMenuGroupEdemokraciaServiceUserAdminUserManagerNavigationItem',
        type: 'item',
        url: 'service/user/admin_user_manager/view/:signedIdentifier',
        icon: 'account',
        title: 'Users',
        children: [],
      },
      {
        id: 'NavigationItemedemokraciaServiceUserEdemokraciaServiceUserNavigationControllerEdemokraciaServiceUserMenuItemGroupAdministrativeMenuGroupEdemokraciaServiceUserAdminIssuesNavigationItem',
        type: 'item',
        url: 'service/user/admin_issues/table',
        icon: 'wechat',
        title: 'Issues ',
        children: [],
      },
      {
        id: 'NavigationItemedemokraciaServiceUserEdemokraciaServiceUserNavigationControllerEdemokraciaServiceUserMenuItemGroupAdministrativeMenuGroupEdemokraciaServiceUserAdminVoteDefinitionsNavigationItem',
        type: 'item',
        url: 'service/user/admin_vote_definitions/table',
        icon: 'vote',
        title: 'Vote Definitions',
        children: [],
      },
      {
        id: 'NavigationItemedemokraciaServiceUserEdemokraciaServiceUserNavigationControllerEdemokraciaServiceUserMenuItemGroupAdministrativeMenuGroupEdemokraciaServiceUserAdminVoteEntriesNavigationItem',
        type: 'item',
        url: 'service/user/admin_vote_entries/table',
        icon: 'vote-outline',
        title: 'Vote Entries',
        children: [],
      },
    ],
  },
  {
    id: 'NavigationItemedemokraciaServiceUserEdemokraciaServiceUserNavigationControllerEdemokraciaServiceUserMenuItemGroupTechicalAccessesMenuGroup',
    type: 'item',
    icon: 'texture',
    title: 'Techical Accesses Menu Group',
    hiddenBy: 'isAdmin',
    children: [],
  },
];
