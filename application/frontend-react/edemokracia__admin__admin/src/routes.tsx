//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/routes.tsx'
// Template name: actor/src/routes.tsx
// Template file: actor/src/routes.tsx.hbs

import { Navigate, Route } from 'react-router-dom';
import type { ReactElement } from 'react';
import { lazy, Suspense } from 'react';
import { OBJECTCLASS } from '@pandino/pandino-api';
import { ComponentProxy } from '@pandino/react-hooks';

let routes: Array<{ path: string; element: ReactElement; exact?: boolean }> = [];

export const ROUTE_ADMIN_ADMIN_CATEGORIES_TABLE_INTERFACE_KEY = 'AdminAdminCategoriesTableRoute';
export const routeToAdminAdminCategoriesTable = (): string => 'admin/admin/categories/table';
const AdminAdminCategoriesTable = lazy(() => import('./pages/admin/admin/categories/table/index'));

routes.push({
  path: 'admin/admin/categories/table',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_ADMIN_CATEGORIES_TABLE_INTERFACE_KEY})`}>
        <AdminAdminCategoriesTable />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_ADMIN_COUNTIES_TABLE_INTERFACE_KEY = 'AdminAdminCountiesTableRoute';
export const routeToAdminAdminCountiesTable = (): string => 'admin/admin/counties/table';
const AdminAdminCountiesTable = lazy(() => import('./pages/admin/admin/counties/table/index'));

routes.push({
  path: 'admin/admin/counties/table',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_ADMIN_COUNTIES_TABLE_INTERFACE_KEY})`}>
        <AdminAdminCountiesTable />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_DASHBOARD_INTERFACE_KEY = 'DashboardRoute';
export const routeToDashboard = (): string => '';
const DashboardRoute = lazy(() => import('./pages/admin/admin/dashboardhome/index'));

routes.push({
  path: '',
  exact: true,
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_DASHBOARD_INTERFACE_KEY})`}>
        <DashboardRoute />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_ADMIN_DASHBOARDHOME_VIEW_INTERFACE_KEY = 'AdminAdminDashboardhomeViewRoute';
export const routeToAdminAdminDashboardhomeView = (signedIdentifier: string): string =>
  'admin/admin/dashboardhome/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const AdminAdminDashboardhomeView = lazy(() => import('./pages/admin/admin/dashboardhome/view/index'));

routes.push({
  path: 'admin/admin/dashboardhome/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_ADMIN_DASHBOARDHOME_VIEW_INTERFACE_KEY})`}>
        <AdminAdminDashboardhomeView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_ADMIN_DEBATES_TABLE_INTERFACE_KEY = 'AdminAdminDebatesTableRoute';
export const routeToAdminAdminDebatesTable = (): string => 'admin/admin/debates/table';
const AdminAdminDebatesTable = lazy(() => import('./pages/admin/admin/debates/table/index'));

routes.push({
  path: 'admin/admin/debates/table',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_ADMIN_DEBATES_TABLE_INTERFACE_KEY})`}>
        <AdminAdminDebatesTable />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_ADMIN_DEBATES_VIEW_INTERFACE_KEY = 'AdminAdminDebatesViewRoute';
export const routeToAdminAdminDebatesView = (signedIdentifier: string): string =>
  'admin/admin/debates/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const AdminAdminDebatesView = lazy(() => import('./pages/admin/admin/debates/view/index'));

routes.push({
  path: 'admin/admin/debates/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_ADMIN_DEBATES_VIEW_INTERFACE_KEY})`}>
        <AdminAdminDebatesView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_ADMIN_ISSUE_TYPES_TABLE_INTERFACE_KEY = 'AdminAdminIssueTypesTableRoute';
export const routeToAdminAdminIssueTypesTable = (): string => 'admin/admin/issue_types/table';
const AdminAdminIssueTypesTable = lazy(() => import('./pages/admin/admin/issue_types/table/index'));

routes.push({
  path: 'admin/admin/issue_types/table',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_ADMIN_ISSUE_TYPES_TABLE_INTERFACE_KEY})`}>
        <AdminAdminIssueTypesTable />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_ADMIN_ISSUES_TABLE_INTERFACE_KEY = 'AdminAdminIssuesTableRoute';
export const routeToAdminAdminIssuesTable = (): string => 'admin/admin/issues/table';
const AdminAdminIssuesTable = lazy(() => import('./pages/admin/admin/issues/table/index'));

routes.push({
  path: 'admin/admin/issues/table',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_ADMIN_ISSUES_TABLE_INTERFACE_KEY})`}>
        <AdminAdminIssuesTable />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_ADMIN_ISSUES_VIEW_INTERFACE_KEY = 'AdminAdminIssuesViewRoute';
export const routeToAdminAdminIssuesView = (signedIdentifier: string): string =>
  'admin/admin/issues/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const AdminAdminIssuesView = lazy(() => import('./pages/admin/admin/issues/view/index'));

routes.push({
  path: 'admin/admin/issues/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_ADMIN_ISSUES_VIEW_INTERFACE_KEY})`}>
        <AdminAdminIssuesView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_ADMIN_USER_CREATED_ISSUES_TABLE_INTERFACE_KEY = 'AdminAdminUserCreatedIssuesTableRoute';
export const routeToAdminAdminUserCreatedIssuesTable = (): string => 'admin/admin/user_created_issues/table';
const AdminAdminUserCreatedIssuesTable = lazy(() => import('./pages/admin/admin/user_created_issues/table/index'));

routes.push({
  path: 'admin/admin/user_created_issues/table',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_ADMIN_USER_CREATED_ISSUES_TABLE_INTERFACE_KEY})`}>
        <AdminAdminUserCreatedIssuesTable />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_ADMIN_USER_CREATED_ISSUES_VIEW_INTERFACE_KEY = 'AdminAdminUserCreatedIssuesViewRoute';
export const routeToAdminAdminUserCreatedIssuesView = (signedIdentifier: string): string =>
  'admin/admin/user_created_issues/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const AdminAdminUserCreatedIssuesView = lazy(() => import('./pages/admin/admin/user_created_issues/view/index'));

routes.push({
  path: 'admin/admin/user_created_issues/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_ADMIN_USER_CREATED_ISSUES_VIEW_INTERFACE_KEY})`}>
        <AdminAdminUserCreatedIssuesView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_ADMIN_USER_ISSUE_VIEW_INTERFACE_KEY = 'AdminAdminUserIssueViewRoute';
export const routeToAdminAdminUserIssueView = (signedIdentifier: string): string =>
  'admin/admin/user_issue/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const AdminAdminUserIssueView = lazy(() => import('./pages/admin/admin/user_issue/view/index'));

routes.push({
  path: 'admin/admin/user_issue/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_ADMIN_USER_ISSUE_VIEW_INTERFACE_KEY})`}>
        <AdminAdminUserIssueView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_ADMIN_USER_OPEN_ISSUES_TABLE_INTERFACE_KEY = 'AdminAdminUserOpenIssuesTableRoute';
export const routeToAdminAdminUserOpenIssuesTable = (): string => 'admin/admin/user_open_issues/table';
const AdminAdminUserOpenIssuesTable = lazy(() => import('./pages/admin/admin/user_open_issues/table/index'));

routes.push({
  path: 'admin/admin/user_open_issues/table',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_ADMIN_USER_OPEN_ISSUES_TABLE_INTERFACE_KEY})`}>
        <AdminAdminUserOpenIssuesTable />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_ADMIN_USER_OPEN_ISSUES_VIEW_INTERFACE_KEY = 'AdminAdminUserOpenIssuesViewRoute';
export const routeToAdminAdminUserOpenIssuesView = (signedIdentifier: string): string =>
  'admin/admin/user_open_issues/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const AdminAdminUserOpenIssuesView = lazy(() => import('./pages/admin/admin/user_open_issues/view/index'));

routes.push({
  path: 'admin/admin/user_open_issues/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_ADMIN_USER_OPEN_ISSUES_VIEW_INTERFACE_KEY})`}>
        <AdminAdminUserOpenIssuesView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_ADMIN_USERS_TABLE_INTERFACE_KEY = 'AdminAdminUsersTableRoute';
export const routeToAdminAdminUsersTable = (): string => 'admin/admin/users/table';
const AdminAdminUsersTable = lazy(() => import('./pages/admin/admin/users/table/index'));

routes.push({
  path: 'admin/admin/users/table',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_ADMIN_USERS_TABLE_INTERFACE_KEY})`}>
        <AdminAdminUsersTable />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_ADMIN_USERS_VIEW_INTERFACE_KEY = 'AdminAdminUsersViewRoute';
export const routeToAdminAdminUsersView = (signedIdentifier: string): string =>
  'admin/admin/users/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const AdminAdminUsersView = lazy(() => import('./pages/admin/admin/users/view/index'));

routes.push({
  path: 'admin/admin/users/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_ADMIN_USERS_VIEW_INTERFACE_KEY})`}>
        <AdminAdminUsersView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_ADMIN_VOTE_DEFINITIONS_TABLE_INTERFACE_KEY = 'AdminAdminVoteDefinitionsTableRoute';
export const routeToAdminAdminVoteDefinitionsTable = (): string => 'admin/admin/vote_definitions/table';
const AdminAdminVoteDefinitionsTable = lazy(() => import('./pages/admin/admin/vote_definitions/table/index'));

routes.push({
  path: 'admin/admin/vote_definitions/table',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_ADMIN_VOTE_DEFINITIONS_TABLE_INTERFACE_KEY})`}>
        <AdminAdminVoteDefinitionsTable />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_ADMIN_VOTE_DEFINITIONS_VIEW_INTERFACE_KEY = 'AdminAdminVoteDefinitionsViewRoute';
export const routeToAdminAdminVoteDefinitionsView = (signedIdentifier: string): string =>
  'admin/admin/vote_definitions/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const AdminAdminVoteDefinitionsView = lazy(() => import('./pages/admin/admin/vote_definitions/view/index'));

routes.push({
  path: 'admin/admin/vote_definitions/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_ADMIN_VOTE_DEFINITIONS_VIEW_INTERFACE_KEY})`}>
        <AdminAdminVoteDefinitionsView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_ADMIN_VOTE_ENTRIES_TABLE_INTERFACE_KEY = 'AdminAdminVoteEntriesTableRoute';
export const routeToAdminAdminVoteEntriesTable = (): string => 'admin/admin/vote_entries/table';
const AdminAdminVoteEntriesTable = lazy(() => import('./pages/admin/admin/vote_entries/table/index'));

routes.push({
  path: 'admin/admin/vote_entries/table',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_ADMIN_VOTE_ENTRIES_TABLE_INTERFACE_KEY})`}>
        <AdminAdminVoteEntriesTable />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_ADMIN_YES_NO_VOTE_DEFINITIONS_TABLE_INTERFACE_KEY = 'AdminAdminYesNoVoteDefinitionsTableRoute';
export const routeToAdminAdminYesNoVoteDefinitionsTable = (): string => 'admin/admin/yes_no_vote_definitions/table';
const AdminAdminYesNoVoteDefinitionsTable = lazy(
  () => import('./pages/admin/admin/yes_no_vote_definitions/table/index'),
);

routes.push({
  path: 'admin/admin/yes_no_vote_definitions/table',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_ADMIN_YES_NO_VOTE_DEFINITIONS_TABLE_INTERFACE_KEY})`}>
        <AdminAdminYesNoVoteDefinitionsTable />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_ADMIN_YES_NO_VOTE_DEFINITIONS_VIEW_INTERFACE_KEY = 'AdminAdminYesNoVoteDefinitionsViewRoute';
export const routeToAdminAdminYesNoVoteDefinitionsView = (signedIdentifier: string): string =>
  'admin/admin/yes_no_vote_definitions/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const AdminAdminYesNoVoteDefinitionsView = lazy(() => import('./pages/admin/admin/yes_no_vote_definitions/view/index'));

routes.push({
  path: 'admin/admin/yes_no_vote_definitions/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_ADMIN_YES_NO_VOTE_DEFINITIONS_VIEW_INTERFACE_KEY})`}>
        <AdminAdminYesNoVoteDefinitionsView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_COMMENT_CREATED_BY_VIEW_INTERFACE_KEY = 'AdminCommentCreatedByViewRoute';
export const routeToAdminCommentCreatedByView = (signedIdentifier: string): string =>
  'admin/comment/created_by/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const AdminCommentCreatedByView = lazy(() => import('./pages/admin/comment/created_by/view/index'));

routes.push({
  path: 'admin/comment/created_by/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_COMMENT_CREATED_BY_VIEW_INTERFACE_KEY})`}>
        <AdminCommentCreatedByView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_COMMENT_VOTES_TABLE_INTERFACE_KEY = 'AdminCommentVotesTableRoute';
export const routeToAdminCommentVotesTable = (signedIdentifier: string): string =>
  'admin/comment/votes/table/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const AdminCommentVotesTable = lazy(() => import('./pages/admin/comment/votes/table/index'));

routes.push({
  path: 'admin/comment/votes/table/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_COMMENT_VOTES_TABLE_INTERFACE_KEY})`}>
        <AdminCommentVotesTable />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_COMMENT_VOTES_VIEW_INTERFACE_KEY = 'AdminCommentVotesViewRoute';
export const routeToAdminCommentVotesView = (signedIdentifier: string): string =>
  'admin/comment/votes/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const AdminCommentVotesView = lazy(() => import('./pages/admin/comment/votes/view/index'));

routes.push({
  path: 'admin/comment/votes/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_COMMENT_VOTES_VIEW_INTERFACE_KEY})`}>
        <AdminCommentVotesView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_CON_COMMENTS_VIEW_INTERFACE_KEY = 'AdminConCommentsViewRoute';
export const routeToAdminConCommentsView = (signedIdentifier: string): string =>
  'admin/con/comments/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const AdminConCommentsView = lazy(() => import('./pages/admin/con/comments/view/index'));

routes.push({
  path: 'admin/con/comments/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_CON_COMMENTS_VIEW_INTERFACE_KEY})`}>
        <AdminConCommentsView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_CON_CONS_VIEW_INTERFACE_KEY = 'AdminConConsViewRoute';
export const routeToAdminConConsView = (signedIdentifier: string): string =>
  'admin/con/cons/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const AdminConConsView = lazy(() => import('./pages/admin/con/cons/view/index'));

routes.push({
  path: 'admin/con/cons/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_CON_CONS_VIEW_INTERFACE_KEY})`}>
        <AdminConConsView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_CON_CREATED_BY_VIEW_INTERFACE_KEY = 'AdminConCreatedByViewRoute';
export const routeToAdminConCreatedByView = (signedIdentifier: string): string =>
  'admin/con/created_by/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const AdminConCreatedByView = lazy(() => import('./pages/admin/con/created_by/view/index'));

routes.push({
  path: 'admin/con/created_by/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_CON_CREATED_BY_VIEW_INTERFACE_KEY})`}>
        <AdminConCreatedByView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_CON_PROS_VIEW_INTERFACE_KEY = 'AdminConProsViewRoute';
export const routeToAdminConProsView = (signedIdentifier: string): string =>
  'admin/con/pros/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const AdminConProsView = lazy(() => import('./pages/admin/con/pros/view/index'));

routes.push({
  path: 'admin/con/pros/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_CON_PROS_VIEW_INTERFACE_KEY})`}>
        <AdminConProsView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_CON_VOTES_TABLE_INTERFACE_KEY = 'AdminConVotesTableRoute';
export const routeToAdminConVotesTable = (signedIdentifier: string): string =>
  'admin/con/votes/table/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const AdminConVotesTable = lazy(() => import('./pages/admin/con/votes/table/index'));

routes.push({
  path: 'admin/con/votes/table/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_CON_VOTES_TABLE_INTERFACE_KEY})`}>
        <AdminConVotesTable />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_CON_VOTES_VIEW_INTERFACE_KEY = 'AdminConVotesViewRoute';
export const routeToAdminConVotesView = (signedIdentifier: string): string =>
  'admin/con/votes/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const AdminConVotesView = lazy(() => import('./pages/admin/con/votes/view/index'));

routes.push({
  path: 'admin/con/votes/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_CON_VOTES_VIEW_INTERFACE_KEY})`}>
        <AdminConVotesView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_DASHBOARD_CREATEISSUE_OUTPUT_INTERFACE_KEY = 'AdminDashboardCreateissueOutputRoute';
export const routeToAdminDashboardCreateissueOutput = (signedIdentifier: string): string =>
  'admin/dashboard/createissue/output/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const AdminDashboardCreateissueOutput = lazy(() => import('./pages/admin/dashboard/createissue/output/index'));

routes.push({
  path: 'admin/dashboard/createissue/output/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_DASHBOARD_CREATEISSUE_OUTPUT_INTERFACE_KEY})`}>
        <AdminDashboardCreateissueOutput />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_DASHBOARD_CREATEUSER_OUTPUT_INTERFACE_KEY = 'AdminDashboardCreateuserOutputRoute';
export const routeToAdminDashboardCreateuserOutput = (signedIdentifier: string): string =>
  'admin/dashboard/createuser/output/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const AdminDashboardCreateuserOutput = lazy(() => import('./pages/admin/dashboard/createuser/output/index'));

routes.push({
  path: 'admin/dashboard/createuser/output/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_DASHBOARD_CREATEUSER_OUTPUT_INTERFACE_KEY})`}>
        <AdminDashboardCreateuserOutput />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_DASHBOARD_DEBATES_VIEW_INTERFACE_KEY = 'AdminDashboardDebatesViewRoute';
export const routeToAdminDashboardDebatesView = (signedIdentifier: string): string =>
  'admin/dashboard/debates/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const AdminDashboardDebatesView = lazy(() => import('./pages/admin/dashboard/debates/view/index'));

routes.push({
  path: 'admin/dashboard/debates/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_DASHBOARD_DEBATES_VIEW_INTERFACE_KEY})`}>
        <AdminDashboardDebatesView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_DASHBOARD_ISSUES_OWNED_VIEW_INTERFACE_KEY = 'AdminDashboardIssuesOwnedViewRoute';
export const routeToAdminDashboardIssuesOwnedView = (signedIdentifier: string): string =>
  'admin/dashboard/issues_owned/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const AdminDashboardIssuesOwnedView = lazy(() => import('./pages/admin/dashboard/issues_owned/view/index'));

routes.push({
  path: 'admin/dashboard/issues_owned/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_DASHBOARD_ISSUES_OWNED_VIEW_INTERFACE_KEY})`}>
        <AdminDashboardIssuesOwnedView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_DEBATE_CLOSEDEBATE_OUTPUT_INTERFACE_KEY = 'AdminDebateClosedebateOutputRoute';
export const routeToAdminDebateClosedebateOutput = (signedIdentifier: string): string =>
  'admin/debate/closedebate/output/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const AdminDebateClosedebateOutput = lazy(() => import('./pages/admin/debate/closedebate/output/index'));

routes.push({
  path: 'admin/debate/closedebate/output/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_DEBATE_CLOSEDEBATE_OUTPUT_INTERFACE_KEY})`}>
        <AdminDebateClosedebateOutput />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_DEBATE_COMMENTS_VIEW_INTERFACE_KEY = 'AdminDebateCommentsViewRoute';
export const routeToAdminDebateCommentsView = (signedIdentifier: string): string =>
  'admin/debate/comments/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const AdminDebateCommentsView = lazy(() => import('./pages/admin/debate/comments/view/index'));

routes.push({
  path: 'admin/debate/comments/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_DEBATE_COMMENTS_VIEW_INTERFACE_KEY})`}>
        <AdminDebateCommentsView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_DEBATE_CONS_VIEW_INTERFACE_KEY = 'AdminDebateConsViewRoute';
export const routeToAdminDebateConsView = (signedIdentifier: string): string =>
  'admin/debate/cons/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const AdminDebateConsView = lazy(() => import('./pages/admin/debate/cons/view/index'));

routes.push({
  path: 'admin/debate/cons/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_DEBATE_CONS_VIEW_INTERFACE_KEY})`}>
        <AdminDebateConsView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_DEBATE_CREATED_BY_VIEW_INTERFACE_KEY = 'AdminDebateCreatedByViewRoute';
export const routeToAdminDebateCreatedByView = (signedIdentifier: string): string =>
  'admin/debate/created_by/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const AdminDebateCreatedByView = lazy(() => import('./pages/admin/debate/created_by/view/index'));

routes.push({
  path: 'admin/debate/created_by/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_DEBATE_CREATED_BY_VIEW_INTERFACE_KEY})`}>
        <AdminDebateCreatedByView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_DEBATE_ISSUE_VIEW_INTERFACE_KEY = 'AdminDebateIssueViewRoute';
export const routeToAdminDebateIssueView = (signedIdentifier: string): string =>
  'admin/debate/issue/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const AdminDebateIssueView = lazy(() => import('./pages/admin/debate/issue/view/index'));

routes.push({
  path: 'admin/debate/issue/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_DEBATE_ISSUE_VIEW_INTERFACE_KEY})`}>
        <AdminDebateIssueView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_DEBATE_PROS_VIEW_INTERFACE_KEY = 'AdminDebateProsViewRoute';
export const routeToAdminDebateProsView = (signedIdentifier: string): string =>
  'admin/debate/pros/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const AdminDebateProsView = lazy(() => import('./pages/admin/debate/pros/view/index'));

routes.push({
  path: 'admin/debate/pros/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_DEBATE_PROS_VIEW_INTERFACE_KEY})`}>
        <AdminDebateProsView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_DEBATE_RATING_VOTE_DEFINITION_VIEW_INTERFACE_KEY = 'AdminDebateRatingVoteDefinitionViewRoute';
export const routeToAdminDebateRatingVoteDefinitionView = (signedIdentifier: string): string =>
  'admin/debate/rating_vote_definition/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const AdminDebateRatingVoteDefinitionView = lazy(
  () => import('./pages/admin/debate/rating_vote_definition/view/index'),
);

routes.push({
  path: 'admin/debate/rating_vote_definition/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_DEBATE_RATING_VOTE_DEFINITION_VIEW_INTERFACE_KEY})`}>
        <AdminDebateRatingVoteDefinitionView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_DEBATE_SELECT_ANSWER_VOTE_DEFINITION_VIEW_INTERFACE_KEY =
  'AdminDebateSelectAnswerVoteDefinitionViewRoute';
export const routeToAdminDebateSelectAnswerVoteDefinitionView = (signedIdentifier: string): string =>
  'admin/debate/select_answer_vote_definition/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const AdminDebateSelectAnswerVoteDefinitionView = lazy(
  () => import('./pages/admin/debate/select_answer_vote_definition/view/index'),
);

routes.push({
  path: 'admin/debate/select_answer_vote_definition/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_DEBATE_SELECT_ANSWER_VOTE_DEFINITION_VIEW_INTERFACE_KEY})`}
      >
        <AdminDebateSelectAnswerVoteDefinitionView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_DEBATE_VOTE_DEFINITION_VIEW_INTERFACE_KEY = 'AdminDebateVoteDefinitionViewRoute';
export const routeToAdminDebateVoteDefinitionView = (signedIdentifier: string): string =>
  'admin/debate/vote_definition/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const AdminDebateVoteDefinitionView = lazy(() => import('./pages/admin/debate/vote_definition/view/index'));

routes.push({
  path: 'admin/debate/vote_definition/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_DEBATE_VOTE_DEFINITION_VIEW_INTERFACE_KEY})`}>
        <AdminDebateVoteDefinitionView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_DEBATE_YES_NO_ABSTAIN_VOTE_DEFINITION_VIEW_INTERFACE_KEY =
  'AdminDebateYesNoAbstainVoteDefinitionViewRoute';
export const routeToAdminDebateYesNoAbstainVoteDefinitionView = (signedIdentifier: string): string =>
  'admin/debate/yes_no_abstain_vote_definition/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const AdminDebateYesNoAbstainVoteDefinitionView = lazy(
  () => import('./pages/admin/debate/yes_no_abstain_vote_definition/view/index'),
);

routes.push({
  path: 'admin/debate/yes_no_abstain_vote_definition/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_DEBATE_YES_NO_ABSTAIN_VOTE_DEFINITION_VIEW_INTERFACE_KEY})`}
      >
        <AdminDebateYesNoAbstainVoteDefinitionView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_DEBATE_YES_NO_VOTE_DEFINITION_VIEW_INTERFACE_KEY = 'AdminDebateYesNoVoteDefinitionViewRoute';
export const routeToAdminDebateYesNoVoteDefinitionView = (signedIdentifier: string): string =>
  'admin/debate/yes_no_vote_definition/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const AdminDebateYesNoVoteDefinitionView = lazy(() => import('./pages/admin/debate/yes_no_vote_definition/view/index'));

routes.push({
  path: 'admin/debate/yes_no_vote_definition/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_DEBATE_YES_NO_VOTE_DEFINITION_VIEW_INTERFACE_KEY})`}>
        <AdminDebateYesNoVoteDefinitionView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_ISSUE_COMMENTS_VIEW_INTERFACE_KEY = 'AdminIssueCommentsViewRoute';
export const routeToAdminIssueCommentsView = (signedIdentifier: string): string =>
  'admin/issue/comments/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const AdminIssueCommentsView = lazy(() => import('./pages/admin/issue/comments/view/index'));

routes.push({
  path: 'admin/issue/comments/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_ISSUE_COMMENTS_VIEW_INTERFACE_KEY})`}>
        <AdminIssueCommentsView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_ISSUE_CREATEDEBATE_OUTPUT_INTERFACE_KEY = 'AdminIssueCreatedebateOutputRoute';
export const routeToAdminIssueCreatedebateOutput = (signedIdentifier: string): string =>
  'admin/issue/createdebate/output/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const AdminIssueCreatedebateOutput = lazy(() => import('./pages/admin/issue/createdebate/output/index'));

routes.push({
  path: 'admin/issue/createdebate/output/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_ISSUE_CREATEDEBATE_OUTPUT_INTERFACE_KEY})`}>
        <AdminIssueCreatedebateOutput />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_ISSUE_CREATED_BY_VIEW_INTERFACE_KEY = 'AdminIssueCreatedByViewRoute';
export const routeToAdminIssueCreatedByView = (signedIdentifier: string): string =>
  'admin/issue/created_by/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const AdminIssueCreatedByView = lazy(() => import('./pages/admin/issue/created_by/view/index'));

routes.push({
  path: 'admin/issue/created_by/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_ISSUE_CREATED_BY_VIEW_INTERFACE_KEY})`}>
        <AdminIssueCreatedByView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_ISSUE_OWNER_VIEW_INTERFACE_KEY = 'AdminIssueOwnerViewRoute';
export const routeToAdminIssueOwnerView = (signedIdentifier: string): string =>
  'admin/issue/owner/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const AdminIssueOwnerView = lazy(() => import('./pages/admin/issue/owner/view/index'));

routes.push({
  path: 'admin/issue/owner/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_ISSUE_OWNER_VIEW_INTERFACE_KEY})`}>
        <AdminIssueOwnerView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_ISSUE_CATEGORY_OWNER_VIEW_INTERFACE_KEY = 'AdminIssueCategoryOwnerViewRoute';
export const routeToAdminIssueCategoryOwnerView = (signedIdentifier: string): string =>
  'admin/issue_category/owner/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const AdminIssueCategoryOwnerView = lazy(() => import('./pages/admin/issue_category/owner/view/index'));

routes.push({
  path: 'admin/issue_category/owner/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_ISSUE_CATEGORY_OWNER_VIEW_INTERFACE_KEY})`}>
        <AdminIssueCategoryOwnerView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_PRO_COMMENTS_VIEW_INTERFACE_KEY = 'AdminProCommentsViewRoute';
export const routeToAdminProCommentsView = (signedIdentifier: string): string =>
  'admin/pro/comments/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const AdminProCommentsView = lazy(() => import('./pages/admin/pro/comments/view/index'));

routes.push({
  path: 'admin/pro/comments/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_PRO_COMMENTS_VIEW_INTERFACE_KEY})`}>
        <AdminProCommentsView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_PRO_CONS_VIEW_INTERFACE_KEY = 'AdminProConsViewRoute';
export const routeToAdminProConsView = (signedIdentifier: string): string =>
  'admin/pro/cons/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const AdminProConsView = lazy(() => import('./pages/admin/pro/cons/view/index'));

routes.push({
  path: 'admin/pro/cons/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_PRO_CONS_VIEW_INTERFACE_KEY})`}>
        <AdminProConsView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_PRO_CREATED_BY_VIEW_INTERFACE_KEY = 'AdminProCreatedByViewRoute';
export const routeToAdminProCreatedByView = (signedIdentifier: string): string =>
  'admin/pro/created_by/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const AdminProCreatedByView = lazy(() => import('./pages/admin/pro/created_by/view/index'));

routes.push({
  path: 'admin/pro/created_by/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_PRO_CREATED_BY_VIEW_INTERFACE_KEY})`}>
        <AdminProCreatedByView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_PRO_PROS_VIEW_INTERFACE_KEY = 'AdminProProsViewRoute';
export const routeToAdminProProsView = (signedIdentifier: string): string =>
  'admin/pro/pros/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const AdminProProsView = lazy(() => import('./pages/admin/pro/pros/view/index'));

routes.push({
  path: 'admin/pro/pros/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_PRO_PROS_VIEW_INTERFACE_KEY})`}>
        <AdminProProsView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_PRO_VOTES_TABLE_INTERFACE_KEY = 'AdminProVotesTableRoute';
export const routeToAdminProVotesTable = (signedIdentifier: string): string =>
  'admin/pro/votes/table/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const AdminProVotesTable = lazy(() => import('./pages/admin/pro/votes/table/index'));

routes.push({
  path: 'admin/pro/votes/table/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_PRO_VOTES_TABLE_INTERFACE_KEY})`}>
        <AdminProVotesTable />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_PRO_VOTES_VIEW_INTERFACE_KEY = 'AdminProVotesViewRoute';
export const routeToAdminProVotesView = (signedIdentifier: string): string =>
  'admin/pro/votes/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const AdminProVotesView = lazy(() => import('./pages/admin/pro/votes/view/index'));

routes.push({
  path: 'admin/pro/votes/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_PRO_VOTES_VIEW_INTERFACE_KEY})`}>
        <AdminProVotesView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_RATING_VOTE_DEFINITION_DEBATE_VIEW_INTERFACE_KEY = 'AdminRatingVoteDefinitionDebateViewRoute';
export const routeToAdminRatingVoteDefinitionDebateView = (signedIdentifier: string): string =>
  'admin/rating_vote_definition/debate/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const AdminRatingVoteDefinitionDebateView = lazy(
  () => import('./pages/admin/rating_vote_definition/debate/view/index'),
);

routes.push({
  path: 'admin/rating_vote_definition/debate/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_RATING_VOTE_DEFINITION_DEBATE_VIEW_INTERFACE_KEY})`}>
        <AdminRatingVoteDefinitionDebateView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_RATING_VOTE_DEFINITION_ISSUE_VIEW_INTERFACE_KEY = 'AdminRatingVoteDefinitionIssueViewRoute';
export const routeToAdminRatingVoteDefinitionIssueView = (signedIdentifier: string): string =>
  'admin/rating_vote_definition/issue/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const AdminRatingVoteDefinitionIssueView = lazy(() => import('./pages/admin/rating_vote_definition/issue/view/index'));

routes.push({
  path: 'admin/rating_vote_definition/issue/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_RATING_VOTE_DEFINITION_ISSUE_VIEW_INTERFACE_KEY})`}>
        <AdminRatingVoteDefinitionIssueView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_SELECT_ANSWER_VOTE_DEFINITION_DEBATE_VIEW_INTERFACE_KEY =
  'AdminSelectAnswerVoteDefinitionDebateViewRoute';
export const routeToAdminSelectAnswerVoteDefinitionDebateView = (signedIdentifier: string): string =>
  'admin/select_answer_vote_definition/debate/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const AdminSelectAnswerVoteDefinitionDebateView = lazy(
  () => import('./pages/admin/select_answer_vote_definition/debate/view/index'),
);

routes.push({
  path: 'admin/select_answer_vote_definition/debate/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_SELECT_ANSWER_VOTE_DEFINITION_DEBATE_VIEW_INTERFACE_KEY})`}
      >
        <AdminSelectAnswerVoteDefinitionDebateView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_SELECT_ANSWER_VOTE_DEFINITION_ISSUE_VIEW_INTERFACE_KEY =
  'AdminSelectAnswerVoteDefinitionIssueViewRoute';
export const routeToAdminSelectAnswerVoteDefinitionIssueView = (signedIdentifier: string): string =>
  'admin/select_answer_vote_definition/issue/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const AdminSelectAnswerVoteDefinitionIssueView = lazy(
  () => import('./pages/admin/select_answer_vote_definition/issue/view/index'),
);

routes.push({
  path: 'admin/select_answer_vote_definition/issue/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_SELECT_ANSWER_VOTE_DEFINITION_ISSUE_VIEW_INTERFACE_KEY})`}>
        <AdminSelectAnswerVoteDefinitionIssueView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_SIMPLE_VOTE_USER_VIEW_INTERFACE_KEY = 'AdminSimpleVoteUserViewRoute';
export const routeToAdminSimpleVoteUserView = (signedIdentifier: string): string =>
  'admin/simple_vote/user/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const AdminSimpleVoteUserView = lazy(() => import('./pages/admin/simple_vote/user/view/index'));

routes.push({
  path: 'admin/simple_vote/user/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_SIMPLE_VOTE_USER_VIEW_INTERFACE_KEY})`}>
        <AdminSimpleVoteUserView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_USER_VOTES_TABLE_INTERFACE_KEY = 'AdminUserVotesTableRoute';
export const routeToAdminUserVotesTable = (signedIdentifier: string): string =>
  'admin/user/votes/table/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const AdminUserVotesTable = lazy(() => import('./pages/admin/user/votes/table/index'));

routes.push({
  path: 'admin/user/votes/table/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_USER_VOTES_TABLE_INTERFACE_KEY})`}>
        <AdminUserVotesTable />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_USER_VOTES_VIEW_INTERFACE_KEY = 'AdminUserVotesViewRoute';
export const routeToAdminUserVotesView = (signedIdentifier: string): string =>
  'admin/user/votes/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const AdminUserVotesView = lazy(() => import('./pages/admin/user/votes/view/index'));

routes.push({
  path: 'admin/user/votes/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_USER_VOTES_VIEW_INTERFACE_KEY})`}>
        <AdminUserVotesView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_USER_ISSUES_ACTIVE_ISSUES_GLOBAL_TABLE_INTERFACE_KEY =
  'AdminUserIssuesActiveIssuesGlobalTableRoute';
export const routeToAdminUserIssuesActiveIssuesGlobalTable = (signedIdentifier: string): string =>
  'admin/user_issues/active_issues_global/table/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const AdminUserIssuesActiveIssuesGlobalTable = lazy(
  () => import('./pages/admin/user_issues/active_issues_global/table/index'),
);

routes.push({
  path: 'admin/user_issues/active_issues_global/table/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_USER_ISSUES_ACTIVE_ISSUES_GLOBAL_TABLE_INTERFACE_KEY})`}>
        <AdminUserIssuesActiveIssuesGlobalTable />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_USER_ISSUES_ACTIVE_ISSUES_GLOBAL_VIEW_INTERFACE_KEY =
  'AdminUserIssuesActiveIssuesGlobalViewRoute';
export const routeToAdminUserIssuesActiveIssuesGlobalView = (signedIdentifier: string): string =>
  'admin/user_issues/active_issues_global/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const AdminUserIssuesActiveIssuesGlobalView = lazy(
  () => import('./pages/admin/user_issues/active_issues_global/view/index'),
);

routes.push({
  path: 'admin/user_issues/active_issues_global/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_USER_ISSUES_ACTIVE_ISSUES_GLOBAL_VIEW_INTERFACE_KEY})`}>
        <AdminUserIssuesActiveIssuesGlobalView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_USER_ISSUES_ACTIVE_ISSUES_IN_ACTIVITY_CITIES_TABLE_INTERFACE_KEY =
  'AdminUserIssuesActiveIssuesInActivityCitiesTableRoute';
export const routeToAdminUserIssuesActiveIssuesInActivityCitiesTable = (signedIdentifier: string): string =>
  'admin/user_issues/active_issues_in_activity_cities/table/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const AdminUserIssuesActiveIssuesInActivityCitiesTable = lazy(
  () => import('./pages/admin/user_issues/active_issues_in_activity_cities/table/index'),
);

routes.push({
  path: 'admin/user_issues/active_issues_in_activity_cities/table/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_USER_ISSUES_ACTIVE_ISSUES_IN_ACTIVITY_CITIES_TABLE_INTERFACE_KEY})`}
      >
        <AdminUserIssuesActiveIssuesInActivityCitiesTable />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_USER_ISSUES_ACTIVE_ISSUES_IN_ACTIVITY_CITIES_VIEW_INTERFACE_KEY =
  'AdminUserIssuesActiveIssuesInActivityCitiesViewRoute';
export const routeToAdminUserIssuesActiveIssuesInActivityCitiesView = (signedIdentifier: string): string =>
  'admin/user_issues/active_issues_in_activity_cities/view/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const AdminUserIssuesActiveIssuesInActivityCitiesView = lazy(
  () => import('./pages/admin/user_issues/active_issues_in_activity_cities/view/index'),
);

routes.push({
  path: 'admin/user_issues/active_issues_in_activity_cities/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_USER_ISSUES_ACTIVE_ISSUES_IN_ACTIVITY_CITIES_VIEW_INTERFACE_KEY})`}
      >
        <AdminUserIssuesActiveIssuesInActivityCitiesView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_USER_ISSUES_ACTIVE_ISSUES_IN_ACTIVITY_COUNTIES_TABLE_INTERFACE_KEY =
  'AdminUserIssuesActiveIssuesInActivityCountiesTableRoute';
export const routeToAdminUserIssuesActiveIssuesInActivityCountiesTable = (signedIdentifier: string): string =>
  'admin/user_issues/active_issues_in_activity_counties/table/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const AdminUserIssuesActiveIssuesInActivityCountiesTable = lazy(
  () => import('./pages/admin/user_issues/active_issues_in_activity_counties/table/index'),
);

routes.push({
  path: 'admin/user_issues/active_issues_in_activity_counties/table/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_USER_ISSUES_ACTIVE_ISSUES_IN_ACTIVITY_COUNTIES_TABLE_INTERFACE_KEY})`}
      >
        <AdminUserIssuesActiveIssuesInActivityCountiesTable />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_USER_ISSUES_ACTIVE_ISSUES_IN_ACTIVITY_COUNTIES_VIEW_INTERFACE_KEY =
  'AdminUserIssuesActiveIssuesInActivityCountiesViewRoute';
export const routeToAdminUserIssuesActiveIssuesInActivityCountiesView = (signedIdentifier: string): string =>
  'admin/user_issues/active_issues_in_activity_counties/view/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const AdminUserIssuesActiveIssuesInActivityCountiesView = lazy(
  () => import('./pages/admin/user_issues/active_issues_in_activity_counties/view/index'),
);

routes.push({
  path: 'admin/user_issues/active_issues_in_activity_counties/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_USER_ISSUES_ACTIVE_ISSUES_IN_ACTIVITY_COUNTIES_VIEW_INTERFACE_KEY})`}
      >
        <AdminUserIssuesActiveIssuesInActivityCountiesView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_USER_ISSUES_ACTIVE_ISSUES_IN_ACTIVITY_DISTRICTS_TABLE_INTERFACE_KEY =
  'AdminUserIssuesActiveIssuesInActivityDistrictsTableRoute';
export const routeToAdminUserIssuesActiveIssuesInActivityDistrictsTable = (signedIdentifier: string): string =>
  'admin/user_issues/active_issues_in_activity_districts/table/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const AdminUserIssuesActiveIssuesInActivityDistrictsTable = lazy(
  () => import('./pages/admin/user_issues/active_issues_in_activity_districts/table/index'),
);

routes.push({
  path: 'admin/user_issues/active_issues_in_activity_districts/table/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_USER_ISSUES_ACTIVE_ISSUES_IN_ACTIVITY_DISTRICTS_TABLE_INTERFACE_KEY})`}
      >
        <AdminUserIssuesActiveIssuesInActivityDistrictsTable />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_USER_ISSUES_ACTIVE_ISSUES_IN_ACTIVITY_DISTRICTS_VIEW_INTERFACE_KEY =
  'AdminUserIssuesActiveIssuesInActivityDistrictsViewRoute';
export const routeToAdminUserIssuesActiveIssuesInActivityDistrictsView = (signedIdentifier: string): string =>
  'admin/user_issues/active_issues_in_activity_districts/view/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const AdminUserIssuesActiveIssuesInActivityDistrictsView = lazy(
  () => import('./pages/admin/user_issues/active_issues_in_activity_districts/view/index'),
);

routes.push({
  path: 'admin/user_issues/active_issues_in_activity_districts/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_USER_ISSUES_ACTIVE_ISSUES_IN_ACTIVITY_DISTRICTS_VIEW_INTERFACE_KEY})`}
      >
        <AdminUserIssuesActiveIssuesInActivityDistrictsView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_USER_ISSUES_ACTIVE_ISSUES_IN_RESIDENT_CITY_TABLE_INTERFACE_KEY =
  'AdminUserIssuesActiveIssuesInResidentCityTableRoute';
export const routeToAdminUserIssuesActiveIssuesInResidentCityTable = (signedIdentifier: string): string =>
  'admin/user_issues/active_issues_in_resident_city/table/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const AdminUserIssuesActiveIssuesInResidentCityTable = lazy(
  () => import('./pages/admin/user_issues/active_issues_in_resident_city/table/index'),
);

routes.push({
  path: 'admin/user_issues/active_issues_in_resident_city/table/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_USER_ISSUES_ACTIVE_ISSUES_IN_RESIDENT_CITY_TABLE_INTERFACE_KEY})`}
      >
        <AdminUserIssuesActiveIssuesInResidentCityTable />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_USER_ISSUES_ACTIVE_ISSUES_IN_RESIDENT_CITY_VIEW_INTERFACE_KEY =
  'AdminUserIssuesActiveIssuesInResidentCityViewRoute';
export const routeToAdminUserIssuesActiveIssuesInResidentCityView = (signedIdentifier: string): string =>
  'admin/user_issues/active_issues_in_resident_city/view/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const AdminUserIssuesActiveIssuesInResidentCityView = lazy(
  () => import('./pages/admin/user_issues/active_issues_in_resident_city/view/index'),
);

routes.push({
  path: 'admin/user_issues/active_issues_in_resident_city/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_USER_ISSUES_ACTIVE_ISSUES_IN_RESIDENT_CITY_VIEW_INTERFACE_KEY})`}
      >
        <AdminUserIssuesActiveIssuesInResidentCityView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_USER_ISSUES_ACTIVE_ISSUES_IN_RESIDENT_COUNTY_TABLE_INTERFACE_KEY =
  'AdminUserIssuesActiveIssuesInResidentCountyTableRoute';
export const routeToAdminUserIssuesActiveIssuesInResidentCountyTable = (signedIdentifier: string): string =>
  'admin/user_issues/active_issues_in_resident_county/table/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const AdminUserIssuesActiveIssuesInResidentCountyTable = lazy(
  () => import('./pages/admin/user_issues/active_issues_in_resident_county/table/index'),
);

routes.push({
  path: 'admin/user_issues/active_issues_in_resident_county/table/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_USER_ISSUES_ACTIVE_ISSUES_IN_RESIDENT_COUNTY_TABLE_INTERFACE_KEY})`}
      >
        <AdminUserIssuesActiveIssuesInResidentCountyTable />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_USER_ISSUES_ACTIVE_ISSUES_IN_RESIDENT_COUNTY_VIEW_INTERFACE_KEY =
  'AdminUserIssuesActiveIssuesInResidentCountyViewRoute';
export const routeToAdminUserIssuesActiveIssuesInResidentCountyView = (signedIdentifier: string): string =>
  'admin/user_issues/active_issues_in_resident_county/view/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const AdminUserIssuesActiveIssuesInResidentCountyView = lazy(
  () => import('./pages/admin/user_issues/active_issues_in_resident_county/view/index'),
);

routes.push({
  path: 'admin/user_issues/active_issues_in_resident_county/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_USER_ISSUES_ACTIVE_ISSUES_IN_RESIDENT_COUNTY_VIEW_INTERFACE_KEY})`}
      >
        <AdminUserIssuesActiveIssuesInResidentCountyView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_USER_ISSUES_ACTIVE_ISSUES_IN_RESIDENT_DISTRICT_TABLE_INTERFACE_KEY =
  'AdminUserIssuesActiveIssuesInResidentDistrictTableRoute';
export const routeToAdminUserIssuesActiveIssuesInResidentDistrictTable = (signedIdentifier: string): string =>
  'admin/user_issues/active_issues_in_resident_district/table/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const AdminUserIssuesActiveIssuesInResidentDistrictTable = lazy(
  () => import('./pages/admin/user_issues/active_issues_in_resident_district/table/index'),
);

routes.push({
  path: 'admin/user_issues/active_issues_in_resident_district/table/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_USER_ISSUES_ACTIVE_ISSUES_IN_RESIDENT_DISTRICT_TABLE_INTERFACE_KEY})`}
      >
        <AdminUserIssuesActiveIssuesInResidentDistrictTable />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_USER_ISSUES_ACTIVE_ISSUES_IN_RESIDENT_DISTRICT_VIEW_INTERFACE_KEY =
  'AdminUserIssuesActiveIssuesInResidentDistrictViewRoute';
export const routeToAdminUserIssuesActiveIssuesInResidentDistrictView = (signedIdentifier: string): string =>
  'admin/user_issues/active_issues_in_resident_district/view/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const AdminUserIssuesActiveIssuesInResidentDistrictView = lazy(
  () => import('./pages/admin/user_issues/active_issues_in_resident_district/view/index'),
);

routes.push({
  path: 'admin/user_issues/active_issues_in_resident_district/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_USER_ISSUES_ACTIVE_ISSUES_IN_RESIDENT_DISTRICT_VIEW_INTERFACE_KEY})`}
      >
        <AdminUserIssuesActiveIssuesInResidentDistrictView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_USERISSUES_CREATEISSUE_OUTPUT_INTERFACE_KEY = 'AdminUserissuesCreateissueOutputRoute';
export const routeToAdminUserissuesCreateissueOutput = (signedIdentifier: string): string =>
  'admin/userissues/createissue/output/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const AdminUserissuesCreateissueOutput = lazy(() => import('./pages/admin/userissues/createissue/output/index'));

routes.push({
  path: 'admin/userissues/createissue/output/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_USERISSUES_CREATEISSUE_OUTPUT_INTERFACE_KEY})`}>
        <AdminUserissuesCreateissueOutput />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_USER_ISSUES_OWNED_ISSUES_TABLE_INTERFACE_KEY = 'AdminUserIssuesOwnedIssuesTableRoute';
export const routeToAdminUserIssuesOwnedIssuesTable = (signedIdentifier: string): string =>
  'admin/user_issues/owned_issues/table/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const AdminUserIssuesOwnedIssuesTable = lazy(() => import('./pages/admin/user_issues/owned_issues/table/index'));

routes.push({
  path: 'admin/user_issues/owned_issues/table/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_USER_ISSUES_OWNED_ISSUES_TABLE_INTERFACE_KEY})`}>
        <AdminUserIssuesOwnedIssuesTable />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_USER_ISSUES_OWNED_ISSUES_VIEW_INTERFACE_KEY = 'AdminUserIssuesOwnedIssuesViewRoute';
export const routeToAdminUserIssuesOwnedIssuesView = (signedIdentifier: string): string =>
  'admin/user_issues/owned_issues/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const AdminUserIssuesOwnedIssuesView = lazy(() => import('./pages/admin/user_issues/owned_issues/view/index'));

routes.push({
  path: 'admin/user_issues/owned_issues/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_USER_ISSUES_OWNED_ISSUES_VIEW_INTERFACE_KEY})`}>
        <AdminUserIssuesOwnedIssuesView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_VOTE_DEFINITION_DEBATE_VIEW_INTERFACE_KEY = 'AdminVoteDefinitionDebateViewRoute';
export const routeToAdminVoteDefinitionDebateView = (signedIdentifier: string): string =>
  'admin/vote_definition/debate/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const AdminVoteDefinitionDebateView = lazy(() => import('./pages/admin/vote_definition/debate/view/index'));

routes.push({
  path: 'admin/vote_definition/debate/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_VOTE_DEFINITION_DEBATE_VIEW_INTERFACE_KEY})`}>
        <AdminVoteDefinitionDebateView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_VOTE_DEFINITION_ISSUE_VIEW_INTERFACE_KEY = 'AdminVoteDefinitionIssueViewRoute';
export const routeToAdminVoteDefinitionIssueView = (signedIdentifier: string): string =>
  'admin/vote_definition/issue/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const AdminVoteDefinitionIssueView = lazy(() => import('./pages/admin/vote_definition/issue/view/index'));

routes.push({
  path: 'admin/vote_definition/issue/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_VOTE_DEFINITION_ISSUE_VIEW_INTERFACE_KEY})`}>
        <AdminVoteDefinitionIssueView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_VOTE_ENTRY_VOTE_DEFINITION_VIEW_INTERFACE_KEY = 'AdminVoteEntryVoteDefinitionViewRoute';
export const routeToAdminVoteEntryVoteDefinitionView = (signedIdentifier: string): string =>
  'admin/vote_entry/vote_definition/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const AdminVoteEntryVoteDefinitionView = lazy(() => import('./pages/admin/vote_entry/vote_definition/view/index'));

routes.push({
  path: 'admin/vote_entry/vote_definition/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_VOTE_ENTRY_VOTE_DEFINITION_VIEW_INTERFACE_KEY})`}>
        <AdminVoteEntryVoteDefinitionView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_YES_NO_ABSTAIN_VOTE_DEFINITION_DEBATE_VIEW_INTERFACE_KEY =
  'AdminYesNoAbstainVoteDefinitionDebateViewRoute';
export const routeToAdminYesNoAbstainVoteDefinitionDebateView = (signedIdentifier: string): string =>
  'admin/yes_no_abstain_vote_definition/debate/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const AdminYesNoAbstainVoteDefinitionDebateView = lazy(
  () => import('./pages/admin/yes_no_abstain_vote_definition/debate/view/index'),
);

routes.push({
  path: 'admin/yes_no_abstain_vote_definition/debate/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_YES_NO_ABSTAIN_VOTE_DEFINITION_DEBATE_VIEW_INTERFACE_KEY})`}
      >
        <AdminYesNoAbstainVoteDefinitionDebateView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_YES_NO_ABSTAIN_VOTE_DEFINITION_ISSUE_VIEW_INTERFACE_KEY =
  'AdminYesNoAbstainVoteDefinitionIssueViewRoute';
export const routeToAdminYesNoAbstainVoteDefinitionIssueView = (signedIdentifier: string): string =>
  'admin/yes_no_abstain_vote_definition/issue/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const AdminYesNoAbstainVoteDefinitionIssueView = lazy(
  () => import('./pages/admin/yes_no_abstain_vote_definition/issue/view/index'),
);

routes.push({
  path: 'admin/yes_no_abstain_vote_definition/issue/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_YES_NO_ABSTAIN_VOTE_DEFINITION_ISSUE_VIEW_INTERFACE_KEY})`}
      >
        <AdminYesNoAbstainVoteDefinitionIssueView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_YES_NO_VOTE_DEFINITION_DEBATE_VIEW_INTERFACE_KEY = 'AdminYesNoVoteDefinitionDebateViewRoute';
export const routeToAdminYesNoVoteDefinitionDebateView = (signedIdentifier: string): string =>
  'admin/yes_no_vote_definition/debate/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const AdminYesNoVoteDefinitionDebateView = lazy(() => import('./pages/admin/yes_no_vote_definition/debate/view/index'));

routes.push({
  path: 'admin/yes_no_vote_definition/debate/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_YES_NO_VOTE_DEFINITION_DEBATE_VIEW_INTERFACE_KEY})`}>
        <AdminYesNoVoteDefinitionDebateView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_YES_NO_VOTE_DEFINITION_ISSUE_VIEW_INTERFACE_KEY = 'AdminYesNoVoteDefinitionIssueViewRoute';
export const routeToAdminYesNoVoteDefinitionIssueView = (signedIdentifier: string): string =>
  'admin/yes_no_vote_definition/issue/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const AdminYesNoVoteDefinitionIssueView = lazy(() => import('./pages/admin/yes_no_vote_definition/issue/view/index'));

routes.push({
  path: 'admin/yes_no_vote_definition/issue/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_YES_NO_VOTE_DEFINITION_ISSUE_VIEW_INTERFACE_KEY})`}>
        <AdminYesNoVoteDefinitionIssueView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_YES_NO_VOTE_ENTRY_USER_VIEW_INTERFACE_KEY = 'AdminYesNoVoteEntryUserViewRoute';
export const routeToAdminYesNoVoteEntryUserView = (signedIdentifier: string): string =>
  'admin/yes_no_vote_entry/user/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const AdminYesNoVoteEntryUserView = lazy(() => import('./pages/admin/yes_no_vote_entry/user/view/index'));

routes.push({
  path: 'admin/yes_no_vote_entry/user/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_YES_NO_VOTE_ENTRY_USER_VIEW_INTERFACE_KEY})`}>
        <AdminYesNoVoteEntryUserView />
      </ComponentProxy>
    </Suspense>
  ),
});

export { routes };
