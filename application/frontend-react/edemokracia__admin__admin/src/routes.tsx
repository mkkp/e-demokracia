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
export const ROUTE_ADMIN_ADMIN_CATEGORIES_VIEW_INTERFACE_KEY = 'AdminAdminCategoriesViewRoute';
export const routeToAdminAdminCategoriesView = (signedIdentifier: string): string =>
  'admin/admin/categories/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const AdminAdminCategoriesView = lazy(() => import('./pages/admin/admin/categories/view/index'));

routes.push({
  path: 'admin/admin/categories/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_ADMIN_CATEGORIES_VIEW_INTERFACE_KEY})`}>
        <AdminAdminCategoriesView />
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
export const ROUTE_ADMIN_ADMIN_ISSUE_TYPES_VIEW_INTERFACE_KEY = 'AdminAdminIssueTypesViewRoute';
export const routeToAdminAdminIssueTypesView = (signedIdentifier: string): string =>
  'admin/admin/issue_types/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const AdminAdminIssueTypesView = lazy(() => import('./pages/admin/admin/issue_types/view/index'));

routes.push({
  path: 'admin/admin/issue_types/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_ADMIN_ISSUE_TYPES_VIEW_INTERFACE_KEY})`}>
        <AdminAdminIssueTypesView />
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
export const ROUTE_ADMIN_CREATE_ISSUE_INPUT_ISSUE_TYPE_VIEW_INTERFACE_KEY = 'AdminCreateIssueInputIssueTypeViewRoute';
export const routeToAdminCreateIssueInputIssueTypeView = (signedIdentifier: string): string =>
  'admin/create_issue_input/issue_type/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const AdminCreateIssueInputIssueTypeView = lazy(() => import('./pages/admin/create_issue_input/issue_type/view/index'));

routes.push({
  path: 'admin/create_issue_input/issue_type/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_CREATE_ISSUE_INPUT_ISSUE_TYPE_VIEW_INTERFACE_KEY})`}>
        <AdminCreateIssueInputIssueTypeView />
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
export const ROUTE_ADMIN_DASHBOARD_ISSUES_VIEW_INTERFACE_KEY = 'AdminDashboardIssuesViewRoute';
export const routeToAdminDashboardIssuesView = (signedIdentifier: string): string =>
  'admin/dashboard/issues/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const AdminDashboardIssuesView = lazy(() => import('./pages/admin/dashboard/issues/view/index'));

routes.push({
  path: 'admin/dashboard/issues/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_DASHBOARD_ISSUES_VIEW_INTERFACE_KEY})`}>
        <AdminDashboardIssuesView />
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
export const ROUTE_ADMIN_ISSUE_ATTACHMENTS_VIEW_INTERFACE_KEY = 'AdminIssueAttachmentsViewRoute';
export const routeToAdminIssueAttachmentsView = (signedIdentifier: string): string =>
  'admin/issue/attachments/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const AdminIssueAttachmentsView = lazy(() => import('./pages/admin/issue/attachments/view/index'));

routes.push({
  path: 'admin/issue/attachments/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_ISSUE_ATTACHMENTS_VIEW_INTERFACE_KEY})`}>
        <AdminIssueAttachmentsView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_ISSUE_CATEGORIES_VIEW_INTERFACE_KEY = 'AdminIssueCategoriesViewRoute';
export const routeToAdminIssueCategoriesView = (signedIdentifier: string): string =>
  'admin/issue/categories/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const AdminIssueCategoriesView = lazy(() => import('./pages/admin/issue/categories/view/index'));

routes.push({
  path: 'admin/issue/categories/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_ISSUE_CATEGORIES_VIEW_INTERFACE_KEY})`}>
        <AdminIssueCategoriesView />
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
export const ROUTE_ADMIN_ISSUE_ISSUE_TYPE_VIEW_INTERFACE_KEY = 'AdminIssueIssueTypeViewRoute';
export const routeToAdminIssueIssueTypeView = (signedIdentifier: string): string =>
  'admin/issue/issue_type/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const AdminIssueIssueTypeView = lazy(() => import('./pages/admin/issue/issue_type/view/index'));

routes.push({
  path: 'admin/issue/issue_type/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_ISSUE_ISSUE_TYPE_VIEW_INTERFACE_KEY})`}>
        <AdminIssueIssueTypeView />
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
export const ROUTE_ADMIN_ISSUE_CATEGORY_SUBCATEGORIES_VIEW_INTERFACE_KEY = 'AdminIssueCategorySubcategoriesViewRoute';
export const routeToAdminIssueCategorySubcategoriesView = (signedIdentifier: string): string =>
  'admin/issue_category/subcategories/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const AdminIssueCategorySubcategoriesView = lazy(() => import('./pages/admin/issue_category/subcategories/view/index'));

routes.push({
  path: 'admin/issue_category/subcategories/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_ISSUE_CATEGORY_SUBCATEGORIES_VIEW_INTERFACE_KEY})`}>
        <AdminIssueCategorySubcategoriesView />
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

export { routes };
