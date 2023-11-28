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
    id: 'User/(esm/_GgcgQIyPEe2VSOmaAz6G9Q)/AccessMenuNavigationItemView',
    type: 'item',
    url: '',
    icon: 'home',
    title: 'Dashboard',
    children: [],
  },
  {
    id: 'User/(esm/_UVCdkFrMEe6_67aMO2jOsw)/AccessMenuNavigationItemView',
    type: 'item',
    url: 'Service/User/UserIssues/AccessViewPage',
    icon: 'wechat',
    title: 'Issues',
    children: [],
  },
  {
    id: 'User/(esm/_mNq6EF5QEe6vsex_cZNQbQ)/AccessMenuNavigationItemView',
    type: 'item',
    url: 'Service/User/UserVoteDefinitions/AccessViewPage',
    icon: 'vote',
    title: 'Votes',
    children: [],
  },
  {
    id: '(_8bkqUo2dEe6GJNWtqQaZ_w)/Icon',
    type: 'group',
    icon: 'texture',
    title: 'Administrative functions',
    children: [
      {
        id: 'User/(esm/_oIKpIId-Ee2kLcMqsIbMgQ)/MenuItemGroup',
        type: 'collapse',
        icon: 'toy-brick',
        title: 'Basic data',
        children: [
          {
            id: 'User/(esm/_vW3EUG4rEe2siJt-xjHAyw)/AccessMenuNavigationItemTable',
            type: 'item',
            url: 'Service/User/AdminCategories/AccessTablePage',
            icon: 'file-tree',
            title: 'Categories',
            children: [],
          },
          {
            id: 'User/(esm/_8Do7MIXgEe2kLcMqsIbMgQ)/AccessMenuNavigationItemTable',
            type: 'item',
            url: 'Service/User/AdminCounties/AccessTablePage',
            icon: 'castle',
            title: 'Counties',
            children: [],
          },
          {
            id: 'User/(esm/_-T8HQNu-Ee2Bgcx6em3jZg)/AccessMenuNavigationItemTable',
            type: 'item',
            url: 'Service/User/AdminIssueTypes/AccessTablePage',
            icon: 'folder-open',
            title: 'Issue Types',
            children: [],
          },
        ],
      },
      {
        id: 'User/(esm/_mGvk8FvaEe6bTb-1BwQgmA)/AccessMenuNavigationItemView',
        type: 'item',
        url: 'Service/User/AdminUserManager/AccessViewPage',
        icon: 'account',
        title: 'Users',
        children: [],
      },
      {
        id: 'User/(esm/_iuDUYId_Ee2kLcMqsIbMgQ)/AccessMenuNavigationItemTable',
        type: 'item',
        url: 'Service/User/AdminIssues/AccessTablePage',
        icon: 'wechat',
        title: 'Issues ',
        children: [],
      },
      {
        id: 'User/(esm/_l9dMQJEaEe29qs15q2b6yw)/AccessMenuNavigationItemTable',
        type: 'item',
        url: 'Service/User/AdminVoteDefinitions/AccessTablePage',
        icon: 'vote',
        title: 'Vote Definitions',
        children: [],
      },
      {
        id: 'User/(esm/_X0Z8AFu_Ee6HqbmdGwnUzw)/AccessMenuNavigationItemTable',
        type: 'item',
        url: 'Service/User/AdminVoteEntries/AccessTablePage',
        icon: 'vote-outline',
        title: 'Vote Entries',
        children: [],
      },
    ],
  },
  {
    id: '(_85UWQI2dEe6GJNWtqQaZ_w)/Icon',
    type: 'item',
    icon: 'texture',
    title: 'Techical Accesses Menu Group',
    hiddenBy: 'isAdmin',
    children: [],
  },
];
