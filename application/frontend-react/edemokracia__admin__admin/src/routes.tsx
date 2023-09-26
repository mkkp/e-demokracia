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

export const ROUTE_ADMIN_ADMIN_ACTIVE_ISSUES_TABLE_INTERFACE_KEY = 'AdminAdminActiveIssuesTableRoute';
export const routeToAdminAdminActiveIssuesTable = (): string => 'admin/admin/active_issues/table';
const AdminAdminActiveIssuesTable = lazy(() => import('./pages/admin/admin/active_issues/table/index'));

routes.push({
  path: 'admin/admin/active_issues/table',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_ADMIN_ACTIVE_ISSUES_TABLE_INTERFACE_KEY})`}>
        <AdminAdminActiveIssuesTable />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_ADMIN_ACTIVE_ISSUES_VIEW_INTERFACE_KEY = 'AdminAdminActiveIssuesViewRoute';
export const routeToAdminAdminActiveIssuesView = (signedIdentifier: string): string =>
  'admin/admin/active_issues/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const AdminAdminActiveIssuesView = lazy(() => import('./pages/admin/admin/active_issues/view/index'));

routes.push({
  path: 'admin/admin/active_issues/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_ADMIN_ACTIVE_ISSUES_VIEW_INTERFACE_KEY})`}>
        <AdminAdminActiveIssuesView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_ADMIN_ADMIN_CATEGORIES_TABLE_INTERFACE_KEY = 'AdminAdminAdminCategoriesTableRoute';
export const routeToAdminAdminAdminCategoriesTable = (): string => 'admin/admin/admin_categories/table';
const AdminAdminAdminCategoriesTable = lazy(() => import('./pages/admin/admin/admin_categories/table/index'));

routes.push({
  path: 'admin/admin/admin_categories/table',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_ADMIN_ADMIN_CATEGORIES_TABLE_INTERFACE_KEY})`}>
        <AdminAdminAdminCategoriesTable />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_ADMIN_ADMIN_COUNTIES_TABLE_INTERFACE_KEY = 'AdminAdminAdminCountiesTableRoute';
export const routeToAdminAdminAdminCountiesTable = (): string => 'admin/admin/admin_counties/table';
const AdminAdminAdminCountiesTable = lazy(() => import('./pages/admin/admin/admin_counties/table/index'));

routes.push({
  path: 'admin/admin/admin_counties/table',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_ADMIN_ADMIN_COUNTIES_TABLE_INTERFACE_KEY})`}>
        <AdminAdminAdminCountiesTable />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_ADMIN_ADMIN_DEBATES_TABLE_INTERFACE_KEY = 'AdminAdminAdminDebatesTableRoute';
export const routeToAdminAdminAdminDebatesTable = (): string => 'admin/admin/admin_debates/table';
const AdminAdminAdminDebatesTable = lazy(() => import('./pages/admin/admin/admin_debates/table/index'));

routes.push({
  path: 'admin/admin/admin_debates/table',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_ADMIN_ADMIN_DEBATES_TABLE_INTERFACE_KEY})`}>
        <AdminAdminAdminDebatesTable />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_ADMIN_ADMIN_DEBATES_VIEW_INTERFACE_KEY = 'AdminAdminAdminDebatesViewRoute';
export const routeToAdminAdminAdminDebatesView = (signedIdentifier: string): string =>
  'admin/admin/admin_debates/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const AdminAdminAdminDebatesView = lazy(() => import('./pages/admin/admin/admin_debates/view/index'));

routes.push({
  path: 'admin/admin/admin_debates/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_ADMIN_ADMIN_DEBATES_VIEW_INTERFACE_KEY})`}>
        <AdminAdminAdminDebatesView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_ADMIN_ADMIN_ISSUE_TYPES_TABLE_INTERFACE_KEY = 'AdminAdminAdminIssueTypesTableRoute';
export const routeToAdminAdminAdminIssueTypesTable = (): string => 'admin/admin/admin_issue_types/table';
const AdminAdminAdminIssueTypesTable = lazy(() => import('./pages/admin/admin/admin_issue_types/table/index'));

routes.push({
  path: 'admin/admin/admin_issue_types/table',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_ADMIN_ADMIN_ISSUE_TYPES_TABLE_INTERFACE_KEY})`}>
        <AdminAdminAdminIssueTypesTable />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_ADMIN_ADMIN_ISSUES_TABLE_INTERFACE_KEY = 'AdminAdminAdminIssuesTableRoute';
export const routeToAdminAdminAdminIssuesTable = (): string => 'admin/admin/admin_issues/table';
const AdminAdminAdminIssuesTable = lazy(() => import('./pages/admin/admin/admin_issues/table/index'));

routes.push({
  path: 'admin/admin/admin_issues/table',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_ADMIN_ADMIN_ISSUES_TABLE_INTERFACE_KEY})`}>
        <AdminAdminAdminIssuesTable />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_ADMIN_ADMIN_ISSUES_VIEW_INTERFACE_KEY = 'AdminAdminAdminIssuesViewRoute';
export const routeToAdminAdminAdminIssuesView = (signedIdentifier: string): string =>
  'admin/admin/admin_issues/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const AdminAdminAdminIssuesView = lazy(() => import('./pages/admin/admin/admin_issues/view/index'));

routes.push({
  path: 'admin/admin/admin_issues/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_ADMIN_ADMIN_ISSUES_VIEW_INTERFACE_KEY})`}>
        <AdminAdminAdminIssuesView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_ADMIN_ADMIN_USER_MANAGER_VIEW_INTERFACE_KEY = 'AdminAdminAdminUserManagerViewRoute';
export const routeToAdminAdminAdminUserManagerView = (signedIdentifier: string): string =>
  'admin/admin/admin_user_manager/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const AdminAdminAdminUserManagerView = lazy(() => import('./pages/admin/admin/admin_user_manager/view/index'));

routes.push({
  path: 'admin/admin/admin_user_manager/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_ADMIN_ADMIN_USER_MANAGER_VIEW_INTERFACE_KEY})`}>
        <AdminAdminAdminUserManagerView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_ADMIN_ADMIN_USERS_TABLE_INTERFACE_KEY = 'AdminAdminAdminUsersTableRoute';
export const routeToAdminAdminAdminUsersTable = (): string => 'admin/admin/admin_users/table';
const AdminAdminAdminUsersTable = lazy(() => import('./pages/admin/admin/admin_users/table/index'));

routes.push({
  path: 'admin/admin/admin_users/table',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_ADMIN_ADMIN_USERS_TABLE_INTERFACE_KEY})`}>
        <AdminAdminAdminUsersTable />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_ADMIN_ADMIN_VOTE_DEFINITIONS_TABLE_INTERFACE_KEY = 'AdminAdminAdminVoteDefinitionsTableRoute';
export const routeToAdminAdminAdminVoteDefinitionsTable = (): string => 'admin/admin/admin_vote_definitions/table';
const AdminAdminAdminVoteDefinitionsTable = lazy(
  () => import('./pages/admin/admin/admin_vote_definitions/table/index'),
);

routes.push({
  path: 'admin/admin/admin_vote_definitions/table',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_ADMIN_ADMIN_VOTE_DEFINITIONS_TABLE_INTERFACE_KEY})`}>
        <AdminAdminAdminVoteDefinitionsTable />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_ADMIN_ADMIN_VOTE_DEFINITIONS_VIEW_INTERFACE_KEY = 'AdminAdminAdminVoteDefinitionsViewRoute';
export const routeToAdminAdminAdminVoteDefinitionsView = (signedIdentifier: string): string =>
  'admin/admin/admin_vote_definitions/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const AdminAdminAdminVoteDefinitionsView = lazy(() => import('./pages/admin/admin/admin_vote_definitions/view/index'));

routes.push({
  path: 'admin/admin/admin_vote_definitions/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_ADMIN_ADMIN_VOTE_DEFINITIONS_VIEW_INTERFACE_KEY})`}>
        <AdminAdminAdminVoteDefinitionsView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_ADMIN_ADMIN_VOTE_ENTRIES_TABLE_INTERFACE_KEY = 'AdminAdminAdminVoteEntriesTableRoute';
export const routeToAdminAdminAdminVoteEntriesTable = (): string => 'admin/admin/admin_vote_entries/table';
const AdminAdminAdminVoteEntriesTable = lazy(() => import('./pages/admin/admin/admin_vote_entries/table/index'));

routes.push({
  path: 'admin/admin/admin_vote_entries/table',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_ADMIN_ADMIN_VOTE_ENTRIES_TABLE_INTERFACE_KEY})`}>
        <AdminAdminAdminVoteEntriesTable />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_DASHBOARD_INTERFACE_KEY = 'DashboardRoute';
export const routeToDashboard = (): string => '';
const DashboardRoute = lazy(() => import('./pages/admin/admin/dashboard_home/index'));

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
export const ROUTE_ADMIN_ADMIN_DASHBOARD_HOME_VIEW_INTERFACE_KEY = 'AdminAdminDashboardHomeViewRoute';
export const routeToAdminAdminDashboardHomeView = (signedIdentifier: string): string =>
  'admin/admin/dashboard_home/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const AdminAdminDashboardHomeView = lazy(() => import('./pages/admin/admin/dashboard_home/view/index'));

routes.push({
  path: 'admin/admin/dashboard_home/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_ADMIN_DASHBOARD_HOME_VIEW_INTERFACE_KEY})`}>
        <AdminAdminDashboardHomeView />
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
export const ROUTE_ADMIN_ADMIN_USER_ISSUES_VIEW_INTERFACE_KEY = 'AdminAdminUserIssuesViewRoute';
export const routeToAdminAdminUserIssuesView = (signedIdentifier: string): string =>
  'admin/admin/user_issues/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const AdminAdminUserIssuesView = lazy(() => import('./pages/admin/admin/user_issues/view/index'));

routes.push({
  path: 'admin/admin/user_issues/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_ADMIN_USER_ISSUES_VIEW_INTERFACE_KEY})`}>
        <AdminAdminUserIssuesView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_ADMIN_USER_OWNED_ACTIVE_ISSUES_TABLE_INTERFACE_KEY =
  'AdminAdminUserOwnedActiveIssuesTableRoute';
export const routeToAdminAdminUserOwnedActiveIssuesTable = (): string => 'admin/admin/user_owned_active_issues/table';
const AdminAdminUserOwnedActiveIssuesTable = lazy(
  () => import('./pages/admin/admin/user_owned_active_issues/table/index'),
);

routes.push({
  path: 'admin/admin/user_owned_active_issues/table',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_ADMIN_USER_OWNED_ACTIVE_ISSUES_TABLE_INTERFACE_KEY})`}>
        <AdminAdminUserOwnedActiveIssuesTable />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_ADMIN_USER_OWNED_ACTIVE_ISSUES_VIEW_INTERFACE_KEY = 'AdminAdminUserOwnedActiveIssuesViewRoute';
export const routeToAdminAdminUserOwnedActiveIssuesView = (signedIdentifier: string): string =>
  'admin/admin/user_owned_active_issues/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const AdminAdminUserOwnedActiveIssuesView = lazy(
  () => import('./pages/admin/admin/user_owned_active_issues/view/index'),
);

routes.push({
  path: 'admin/admin/user_owned_active_issues/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_ADMIN_USER_OWNED_ACTIVE_ISSUES_VIEW_INTERFACE_KEY})`}>
        <AdminAdminUserOwnedActiveIssuesView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_ADMIN_USER_OWNED_RATING_VOTE_DEFINITIONS_TABLE_INTERFACE_KEY =
  'AdminAdminUserOwnedRatingVoteDefinitionsTableRoute';
export const routeToAdminAdminUserOwnedRatingVoteDefinitionsTable = (): string =>
  'admin/admin/user_owned_rating_vote_definitions/table';
const AdminAdminUserOwnedRatingVoteDefinitionsTable = lazy(
  () => import('./pages/admin/admin/user_owned_rating_vote_definitions/table/index'),
);

routes.push({
  path: 'admin/admin/user_owned_rating_vote_definitions/table',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_ADMIN_USER_OWNED_RATING_VOTE_DEFINITIONS_TABLE_INTERFACE_KEY})`}
      >
        <AdminAdminUserOwnedRatingVoteDefinitionsTable />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_ADMIN_USER_OWNED_RATING_VOTE_DEFINITIONS_VIEW_INTERFACE_KEY =
  'AdminAdminUserOwnedRatingVoteDefinitionsViewRoute';
export const routeToAdminAdminUserOwnedRatingVoteDefinitionsView = (signedIdentifier: string): string =>
  'admin/admin/user_owned_rating_vote_definitions/view/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const AdminAdminUserOwnedRatingVoteDefinitionsView = lazy(
  () => import('./pages/admin/admin/user_owned_rating_vote_definitions/view/index'),
);

routes.push({
  path: 'admin/admin/user_owned_rating_vote_definitions/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_ADMIN_USER_OWNED_RATING_VOTE_DEFINITIONS_VIEW_INTERFACE_KEY})`}
      >
        <AdminAdminUserOwnedRatingVoteDefinitionsView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_ADMIN_USER_OWNED_SELECT_ANSWER_VOTE_DEFINITIONS_TABLE_INTERFACE_KEY =
  'AdminAdminUserOwnedSelectAnswerVoteDefinitionsTableRoute';
export const routeToAdminAdminUserOwnedSelectAnswerVoteDefinitionsTable = (): string =>
  'admin/admin/user_owned_select_answer_vote_definitions/table';
const AdminAdminUserOwnedSelectAnswerVoteDefinitionsTable = lazy(
  () => import('./pages/admin/admin/user_owned_select_answer_vote_definitions/table/index'),
);

routes.push({
  path: 'admin/admin/user_owned_select_answer_vote_definitions/table',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_ADMIN_USER_OWNED_SELECT_ANSWER_VOTE_DEFINITIONS_TABLE_INTERFACE_KEY})`}
      >
        <AdminAdminUserOwnedSelectAnswerVoteDefinitionsTable />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_ADMIN_USER_OWNED_SELECT_ANSWER_VOTE_DEFINITIONS_VIEW_INTERFACE_KEY =
  'AdminAdminUserOwnedSelectAnswerVoteDefinitionsViewRoute';
export const routeToAdminAdminUserOwnedSelectAnswerVoteDefinitionsView = (signedIdentifier: string): string =>
  'admin/admin/user_owned_select_answer_vote_definitions/view/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const AdminAdminUserOwnedSelectAnswerVoteDefinitionsView = lazy(
  () => import('./pages/admin/admin/user_owned_select_answer_vote_definitions/view/index'),
);

routes.push({
  path: 'admin/admin/user_owned_select_answer_vote_definitions/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_ADMIN_USER_OWNED_SELECT_ANSWER_VOTE_DEFINITIONS_VIEW_INTERFACE_KEY})`}
      >
        <AdminAdminUserOwnedSelectAnswerVoteDefinitionsView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_ADMIN_USER_OWNED_VOTE_ENTRIES_TABLE_INTERFACE_KEY = 'AdminAdminUserOwnedVoteEntriesTableRoute';
export const routeToAdminAdminUserOwnedVoteEntriesTable = (): string => 'admin/admin/user_owned_vote_entries/table';
const AdminAdminUserOwnedVoteEntriesTable = lazy(
  () => import('./pages/admin/admin/user_owned_vote_entries/table/index'),
);

routes.push({
  path: 'admin/admin/user_owned_vote_entries/table',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_ADMIN_USER_OWNED_VOTE_ENTRIES_TABLE_INTERFACE_KEY})`}>
        <AdminAdminUserOwnedVoteEntriesTable />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_ADMIN_USER_OWNED_YES_NO_ABSTAIN_VOTE_DEFINITIONS_TABLE_INTERFACE_KEY =
  'AdminAdminUserOwnedYesNoAbstainVoteDefinitionsTableRoute';
export const routeToAdminAdminUserOwnedYesNoAbstainVoteDefinitionsTable = (): string =>
  'admin/admin/user_owned_yes_no_abstain_vote_definitions/table';
const AdminAdminUserOwnedYesNoAbstainVoteDefinitionsTable = lazy(
  () => import('./pages/admin/admin/user_owned_yes_no_abstain_vote_definitions/table/index'),
);

routes.push({
  path: 'admin/admin/user_owned_yes_no_abstain_vote_definitions/table',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_ADMIN_USER_OWNED_YES_NO_ABSTAIN_VOTE_DEFINITIONS_TABLE_INTERFACE_KEY})`}
      >
        <AdminAdminUserOwnedYesNoAbstainVoteDefinitionsTable />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_ADMIN_USER_OWNED_YES_NO_ABSTAIN_VOTE_DEFINITIONS_VIEW_INTERFACE_KEY =
  'AdminAdminUserOwnedYesNoAbstainVoteDefinitionsViewRoute';
export const routeToAdminAdminUserOwnedYesNoAbstainVoteDefinitionsView = (signedIdentifier: string): string =>
  'admin/admin/user_owned_yes_no_abstain_vote_definitions/view/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const AdminAdminUserOwnedYesNoAbstainVoteDefinitionsView = lazy(
  () => import('./pages/admin/admin/user_owned_yes_no_abstain_vote_definitions/view/index'),
);

routes.push({
  path: 'admin/admin/user_owned_yes_no_abstain_vote_definitions/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_ADMIN_USER_OWNED_YES_NO_ABSTAIN_VOTE_DEFINITIONS_VIEW_INTERFACE_KEY})`}
      >
        <AdminAdminUserOwnedYesNoAbstainVoteDefinitionsView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_ADMIN_USER_OWNED_YES_NO_VOTE_DEFINITIONS_TABLE_INTERFACE_KEY =
  'AdminAdminUserOwnedYesNoVoteDefinitionsTableRoute';
export const routeToAdminAdminUserOwnedYesNoVoteDefinitionsTable = (): string =>
  'admin/admin/user_owned_yes_no_vote_definitions/table';
const AdminAdminUserOwnedYesNoVoteDefinitionsTable = lazy(
  () => import('./pages/admin/admin/user_owned_yes_no_vote_definitions/table/index'),
);

routes.push({
  path: 'admin/admin/user_owned_yes_no_vote_definitions/table',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_ADMIN_USER_OWNED_YES_NO_VOTE_DEFINITIONS_TABLE_INTERFACE_KEY})`}
      >
        <AdminAdminUserOwnedYesNoVoteDefinitionsTable />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_ADMIN_USER_OWNED_YES_NO_VOTE_DEFINITIONS_VIEW_INTERFACE_KEY =
  'AdminAdminUserOwnedYesNoVoteDefinitionsViewRoute';
export const routeToAdminAdminUserOwnedYesNoVoteDefinitionsView = (signedIdentifier: string): string =>
  'admin/admin/user_owned_yes_no_vote_definitions/view/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const AdminAdminUserOwnedYesNoVoteDefinitionsView = lazy(
  () => import('./pages/admin/admin/user_owned_yes_no_vote_definitions/view/index'),
);

routes.push({
  path: 'admin/admin/user_owned_yes_no_vote_definitions/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_ADMIN_USER_OWNED_YES_NO_VOTE_DEFINITIONS_VIEW_INTERFACE_KEY})`}
      >
        <AdminAdminUserOwnedYesNoVoteDefinitionsView />
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
export const ROUTE_ADMIN_DASHBOARD_FAVORITE_DEBATES_TABLE_INTERFACE_KEY = 'AdminDashboardFavoriteDebatesTableRoute';
export const routeToAdminDashboardFavoriteDebatesTable = (signedIdentifier: string): string =>
  'admin/dashboard/favorite_debates/table/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const AdminDashboardFavoriteDebatesTable = lazy(() => import('./pages/admin/dashboard/favorite_debates/table/index'));

routes.push({
  path: 'admin/dashboard/favorite_debates/table/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_DASHBOARD_FAVORITE_DEBATES_TABLE_INTERFACE_KEY})`}>
        <AdminDashboardFavoriteDebatesTable />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_DASHBOARD_FAVORITE_DEBATES_VIEW_INTERFACE_KEY = 'AdminDashboardFavoriteDebatesViewRoute';
export const routeToAdminDashboardFavoriteDebatesView = (signedIdentifier: string): string =>
  'admin/dashboard/favorite_debates/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const AdminDashboardFavoriteDebatesView = lazy(() => import('./pages/admin/dashboard/favorite_debates/view/index'));

routes.push({
  path: 'admin/dashboard/favorite_debates/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_DASHBOARD_FAVORITE_DEBATES_VIEW_INTERFACE_KEY})`}>
        <AdminDashboardFavoriteDebatesView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_DASHBOARD_FAVORITE_ISSUES_TABLE_INTERFACE_KEY = 'AdminDashboardFavoriteIssuesTableRoute';
export const routeToAdminDashboardFavoriteIssuesTable = (signedIdentifier: string): string =>
  'admin/dashboard/favorite_issues/table/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const AdminDashboardFavoriteIssuesTable = lazy(() => import('./pages/admin/dashboard/favorite_issues/table/index'));

routes.push({
  path: 'admin/dashboard/favorite_issues/table/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_DASHBOARD_FAVORITE_ISSUES_TABLE_INTERFACE_KEY})`}>
        <AdminDashboardFavoriteIssuesTable />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_DASHBOARD_FAVORITE_ISSUES_VIEW_INTERFACE_KEY = 'AdminDashboardFavoriteIssuesViewRoute';
export const routeToAdminDashboardFavoriteIssuesView = (signedIdentifier: string): string =>
  'admin/dashboard/favorite_issues/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const AdminDashboardFavoriteIssuesView = lazy(() => import('./pages/admin/dashboard/favorite_issues/view/index'));

routes.push({
  path: 'admin/dashboard/favorite_issues/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_DASHBOARD_FAVORITE_ISSUES_VIEW_INTERFACE_KEY})`}>
        <AdminDashboardFavoriteIssuesView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_DASHBOARD_ISSUES_OWNED_TABLE_INTERFACE_KEY = 'AdminDashboardIssuesOwnedTableRoute';
export const routeToAdminDashboardIssuesOwnedTable = (signedIdentifier: string): string =>
  'admin/dashboard/issues_owned/table/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const AdminDashboardIssuesOwnedTable = lazy(() => import('./pages/admin/dashboard/issues_owned/table/index'));

routes.push({
  path: 'admin/dashboard/issues_owned/table/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_DASHBOARD_ISSUES_OWNED_TABLE_INTERFACE_KEY})`}>
        <AdminDashboardIssuesOwnedTable />
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
export const ROUTE_ADMIN_DASHBOARD_OWNED_DEBATES_TABLE_INTERFACE_KEY = 'AdminDashboardOwnedDebatesTableRoute';
export const routeToAdminDashboardOwnedDebatesTable = (signedIdentifier: string): string =>
  'admin/dashboard/owned_debates/table/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const AdminDashboardOwnedDebatesTable = lazy(() => import('./pages/admin/dashboard/owned_debates/table/index'));

routes.push({
  path: 'admin/dashboard/owned_debates/table/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_DASHBOARD_OWNED_DEBATES_TABLE_INTERFACE_KEY})`}>
        <AdminDashboardOwnedDebatesTable />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_DASHBOARD_OWNED_DEBATES_VIEW_INTERFACE_KEY = 'AdminDashboardOwnedDebatesViewRoute';
export const routeToAdminDashboardOwnedDebatesView = (signedIdentifier: string): string =>
  'admin/dashboard/owned_debates/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const AdminDashboardOwnedDebatesView = lazy(() => import('./pages/admin/dashboard/owned_debates/view/index'));

routes.push({
  path: 'admin/dashboard/owned_debates/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_DASHBOARD_OWNED_DEBATES_VIEW_INTERFACE_KEY})`}>
        <AdminDashboardOwnedDebatesView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_ADMIN_DASHBOARD_VOTE_ENTRIES_TABLE_INTERFACE_KEY = 'AdminDashboardVoteEntriesTableRoute';
export const routeToAdminDashboardVoteEntriesTable = (signedIdentifier: string): string =>
  'admin/dashboard/vote_entries/table/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const AdminDashboardVoteEntriesTable = lazy(() => import('./pages/admin/dashboard/vote_entries/table/index'));

routes.push({
  path: 'admin/dashboard/vote_entries/table/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_DASHBOARD_VOTE_ENTRIES_TABLE_INTERFACE_KEY})`}>
        <AdminDashboardVoteEntriesTable />
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
export const ROUTE_ADMIN_USER_MANAGER_USERS_TABLE_INTERFACE_KEY = 'AdminUserManagerUsersTableRoute';
export const routeToAdminUserManagerUsersTable = (signedIdentifier: string): string =>
  'admin/user_manager/users/table/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const AdminUserManagerUsersTable = lazy(() => import('./pages/admin/user_manager/users/table/index'));

routes.push({
  path: 'admin/user_manager/users/table/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_ADMIN_USER_MANAGER_USERS_TABLE_INTERFACE_KEY})`}>
        <AdminUserManagerUsersTable />
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

export { routes };
