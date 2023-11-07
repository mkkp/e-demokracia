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

export const ROUTE_SERVICE_COMMENT_VOTES_RELATION_TABLE_PAGE_INTERFACE_KEY =
  'ServiceCommentVotesRelationTablePageRoute';
export const routeToServiceCommentVotesRelationTablePage = (signedIdentifier: string): string =>
  'Service/Comment/Votes/Relation/Table/Page/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceCommentVotesRelationTablePage = lazy(() => import('./pages/Service/Comment/Votes/Relation/Table/Page'));

routes.push({
  path: 'Service/Comment/Votes/Relation/Table/Page/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_COMMENT_VOTES_RELATION_TABLE_PAGE_INTERFACE_KEY})`}>
        <ServiceCommentVotesRelationTablePage />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_COMMENT_VOTES_RELATION_VIEW_PAGE_INTERFACE_KEY = 'ServiceCommentVotesRelationViewPageRoute';
export const routeToServiceCommentVotesRelationViewPage = (signedIdentifier: string): string =>
  'Service/Comment/Votes/Relation/View/Page/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceCommentVotesRelationViewPage = lazy(() => import('./pages/Service/Comment/Votes/Relation/View/Page'));

routes.push({
  path: 'Service/Comment/Votes/Relation/View/Page/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_COMMENT_VOTES_RELATION_VIEW_PAGE_INTERFACE_KEY})`}>
        <ServiceCommentVotesRelationViewPage />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_CON_VOTES_RELATION_TABLE_PAGE_INTERFACE_KEY = 'ServiceConVotesRelationTablePageRoute';
export const routeToServiceConVotesRelationTablePage = (signedIdentifier: string): string =>
  'Service/Con/Votes/Relation/Table/Page/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceConVotesRelationTablePage = lazy(() => import('./pages/Service/Con/Votes/Relation/Table/Page'));

routes.push({
  path: 'Service/Con/Votes/Relation/Table/Page/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_CON_VOTES_RELATION_TABLE_PAGE_INTERFACE_KEY})`}>
        <ServiceConVotesRelationTablePage />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_CON_VOTES_RELATION_VIEW_PAGE_INTERFACE_KEY = 'ServiceConVotesRelationViewPageRoute';
export const routeToServiceConVotesRelationViewPage = (signedIdentifier: string): string =>
  'Service/Con/Votes/Relation/View/Page/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceConVotesRelationViewPage = lazy(() => import('./pages/Service/Con/Votes/Relation/View/Page'));

routes.push({
  path: 'Service/Con/Votes/Relation/View/Page/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_CON_VOTES_RELATION_VIEW_PAGE_INTERFACE_KEY})`}>
        <ServiceConVotesRelationViewPage />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_DASHBOARD_FAVORITE_ISSUES_RELATION_TABLE_PAGE_INTERFACE_KEY =
  'ServiceDashboardFavoriteIssuesRelationTablePageRoute';
export const routeToServiceDashboardFavoriteIssuesRelationTablePage = (signedIdentifier: string): string =>
  'Service/Dashboard/FavoriteIssues/Relation/Table/Page/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceDashboardFavoriteIssuesRelationTablePage = lazy(
  () => import('./pages/Service/Dashboard/FavoriteIssues/Relation/Table/Page'),
);

routes.push({
  path: 'Service/Dashboard/FavoriteIssues/Relation/Table/Page/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_DASHBOARD_FAVORITE_ISSUES_RELATION_TABLE_PAGE_INTERFACE_KEY})`}
      >
        <ServiceDashboardFavoriteIssuesRelationTablePage />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_DASHBOARD_FAVORITE_ISSUES_RELATION_VIEW_PAGE_INTERFACE_KEY =
  'ServiceDashboardFavoriteIssuesRelationViewPageRoute';
export const routeToServiceDashboardFavoriteIssuesRelationViewPage = (signedIdentifier: string): string =>
  'Service/Dashboard/FavoriteIssues/Relation/View/Page/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceDashboardFavoriteIssuesRelationViewPage = lazy(
  () => import('./pages/Service/Dashboard/FavoriteIssues/Relation/View/Page'),
);

routes.push({
  path: 'Service/Dashboard/FavoriteIssues/Relation/View/Page/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_DASHBOARD_FAVORITE_ISSUES_RELATION_VIEW_PAGE_INTERFACE_KEY})`}
      >
        <ServiceDashboardFavoriteIssuesRelationViewPage />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_DASHBOARD_FAVORITE_VOTE_DEFINITIONS_RELATION_TABLE_PAGE_INTERFACE_KEY =
  'ServiceDashboardFavoriteVoteDefinitionsRelationTablePageRoute';
export const routeToServiceDashboardFavoriteVoteDefinitionsRelationTablePage = (signedIdentifier: string): string =>
  'Service/Dashboard/FavoriteVoteDefinitions/Relation/Table/Page/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceDashboardFavoriteVoteDefinitionsRelationTablePage = lazy(
  () => import('./pages/Service/Dashboard/FavoriteVoteDefinitions/Relation/Table/Page'),
);

routes.push({
  path: 'Service/Dashboard/FavoriteVoteDefinitions/Relation/Table/Page/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_DASHBOARD_FAVORITE_VOTE_DEFINITIONS_RELATION_TABLE_PAGE_INTERFACE_KEY})`}
      >
        <ServiceDashboardFavoriteVoteDefinitionsRelationTablePage />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_DASHBOARD_FAVORITE_VOTE_DEFINITIONS_RELATION_VIEW_PAGE_INTERFACE_KEY =
  'ServiceDashboardFavoriteVoteDefinitionsRelationViewPageRoute';
export const routeToServiceDashboardFavoriteVoteDefinitionsRelationViewPage = (signedIdentifier: string): string =>
  'Service/Dashboard/FavoriteVoteDefinitions/Relation/View/Page/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceDashboardFavoriteVoteDefinitionsRelationViewPage = lazy(
  () => import('./pages/Service/Dashboard/FavoriteVoteDefinitions/Relation/View/Page'),
);

routes.push({
  path: 'Service/Dashboard/FavoriteVoteDefinitions/Relation/View/Page/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_DASHBOARD_FAVORITE_VOTE_DEFINITIONS_RELATION_VIEW_PAGE_INTERFACE_KEY})`}
      >
        <ServiceDashboardFavoriteVoteDefinitionsRelationViewPage />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_DASHBOARD_ISSUES_OWNED_RELATION_TABLE_PAGE_INTERFACE_KEY =
  'ServiceDashboardIssuesOwnedRelationTablePageRoute';
export const routeToServiceDashboardIssuesOwnedRelationTablePage = (signedIdentifier: string): string =>
  'Service/Dashboard/IssuesOwned/Relation/Table/Page/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceDashboardIssuesOwnedRelationTablePage = lazy(
  () => import('./pages/Service/Dashboard/IssuesOwned/Relation/Table/Page'),
);

routes.push({
  path: 'Service/Dashboard/IssuesOwned/Relation/Table/Page/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_DASHBOARD_ISSUES_OWNED_RELATION_TABLE_PAGE_INTERFACE_KEY})`}
      >
        <ServiceDashboardIssuesOwnedRelationTablePage />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_DASHBOARD_ISSUES_OWNED_RELATION_VIEW_PAGE_INTERFACE_KEY =
  'ServiceDashboardIssuesOwnedRelationViewPageRoute';
export const routeToServiceDashboardIssuesOwnedRelationViewPage = (signedIdentifier: string): string =>
  'Service/Dashboard/IssuesOwned/Relation/View/Page/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceDashboardIssuesOwnedRelationViewPage = lazy(
  () => import('./pages/Service/Dashboard/IssuesOwned/Relation/View/Page'),
);

routes.push({
  path: 'Service/Dashboard/IssuesOwned/Relation/View/Page/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_DASHBOARD_ISSUES_OWNED_RELATION_VIEW_PAGE_INTERFACE_KEY})`}
      >
        <ServiceDashboardIssuesOwnedRelationViewPage />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_DASHBOARD_OWNED_VOTE_DEFINITIONS_RELATION_TABLE_PAGE_INTERFACE_KEY =
  'ServiceDashboardOwnedVoteDefinitionsRelationTablePageRoute';
export const routeToServiceDashboardOwnedVoteDefinitionsRelationTablePage = (signedIdentifier: string): string =>
  'Service/Dashboard/OwnedVoteDefinitions/Relation/Table/Page/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceDashboardOwnedVoteDefinitionsRelationTablePage = lazy(
  () => import('./pages/Service/Dashboard/OwnedVoteDefinitions/Relation/Table/Page'),
);

routes.push({
  path: 'Service/Dashboard/OwnedVoteDefinitions/Relation/Table/Page/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_DASHBOARD_OWNED_VOTE_DEFINITIONS_RELATION_TABLE_PAGE_INTERFACE_KEY})`}
      >
        <ServiceDashboardOwnedVoteDefinitionsRelationTablePage />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_DASHBOARD_OWNED_VOTE_DEFINITIONS_RELATION_VIEW_PAGE_INTERFACE_KEY =
  'ServiceDashboardOwnedVoteDefinitionsRelationViewPageRoute';
export const routeToServiceDashboardOwnedVoteDefinitionsRelationViewPage = (signedIdentifier: string): string =>
  'Service/Dashboard/OwnedVoteDefinitions/Relation/View/Page/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceDashboardOwnedVoteDefinitionsRelationViewPage = lazy(
  () => import('./pages/Service/Dashboard/OwnedVoteDefinitions/Relation/View/Page'),
);

routes.push({
  path: 'Service/Dashboard/OwnedVoteDefinitions/Relation/View/Page/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_DASHBOARD_OWNED_VOTE_DEFINITIONS_RELATION_VIEW_PAGE_INTERFACE_KEY})`}
      >
        <ServiceDashboardOwnedVoteDefinitionsRelationViewPage />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_DASHBOARD_USER_VOTE_ENTRIES_RELATION_TABLE_PAGE_INTERFACE_KEY =
  'ServiceDashboardUserVoteEntriesRelationTablePageRoute';
export const routeToServiceDashboardUserVoteEntriesRelationTablePage = (signedIdentifier: string): string =>
  'Service/Dashboard/UserVoteEntries/Relation/Table/Page/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceDashboardUserVoteEntriesRelationTablePage = lazy(
  () => import('./pages/Service/Dashboard/UserVoteEntries/Relation/Table/Page'),
);

routes.push({
  path: 'Service/Dashboard/UserVoteEntries/Relation/Table/Page/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_DASHBOARD_USER_VOTE_ENTRIES_RELATION_TABLE_PAGE_INTERFACE_KEY})`}
      >
        <ServiceDashboardUserVoteEntriesRelationTablePage />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_ISSUE_ISSUE_VIEW_EDIT_CLOSE_DEBATE_OUTPUT_VIEW_INTERFACE_KEY =
  'ServiceIssueIssue_View_EditCloseDebateOutputViewRoute';
export const routeToServiceIssueIssue_View_EditCloseDebateOutputView = (signedIdentifier: string): string =>
  'Service/Issue/Issue_View_Edit/CloseDebate/Output/View/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceIssueIssue_View_EditCloseDebateOutputView = lazy(
  () => import('./pages/Service/Issue/Issue_View_Edit/CloseDebate/Output/View'),
);

routes.push({
  path: 'Service/Issue/Issue_View_Edit/CloseDebate/Output/View/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_ISSUE_ISSUE_VIEW_EDIT_CLOSE_DEBATE_OUTPUT_VIEW_INTERFACE_KEY})`}
      >
        <ServiceIssueIssue_View_EditCloseDebateOutputView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_ISSUE_COMMENTS_RELATION_VIEW_PAGE_INTERFACE_KEY =
  'ServiceIssueCommentsRelationViewPageRoute';
export const routeToServiceIssueCommentsRelationViewPage = (signedIdentifier: string): string =>
  'Service/Issue/Comments/Relation/View/Page/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceIssueCommentsRelationViewPage = lazy(() => import('./pages/Service/Issue/Comments/Relation/View/Page'));

routes.push({
  path: 'Service/Issue/Comments/Relation/View/Page/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_ISSUE_COMMENTS_RELATION_VIEW_PAGE_INTERFACE_KEY})`}>
        <ServiceIssueCommentsRelationViewPage />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_PRO_VOTES_RELATION_TABLE_PAGE_INTERFACE_KEY = 'ServiceProVotesRelationTablePageRoute';
export const routeToServiceProVotesRelationTablePage = (signedIdentifier: string): string =>
  'Service/Pro/Votes/Relation/Table/Page/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceProVotesRelationTablePage = lazy(() => import('./pages/Service/Pro/Votes/Relation/Table/Page'));

routes.push({
  path: 'Service/Pro/Votes/Relation/Table/Page/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_PRO_VOTES_RELATION_TABLE_PAGE_INTERFACE_KEY})`}>
        <ServiceProVotesRelationTablePage />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_PRO_VOTES_RELATION_VIEW_PAGE_INTERFACE_KEY = 'ServiceProVotesRelationViewPageRoute';
export const routeToServiceProVotesRelationViewPage = (signedIdentifier: string): string =>
  'Service/Pro/Votes/Relation/View/Page/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceProVotesRelationViewPage = lazy(() => import('./pages/Service/Pro/Votes/Relation/View/Page'));

routes.push({
  path: 'Service/Pro/Votes/Relation/View/Page/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_PRO_VOTES_RELATION_VIEW_PAGE_INTERFACE_KEY})`}>
        <ServiceProVotesRelationViewPage />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_RATING_VOTE_DEFINITION_ISSUE_RELATION_VIEW_PAGE_INTERFACE_KEY =
  'ServiceRatingVoteDefinitionIssueRelationViewPageRoute';
export const routeToServiceRatingVoteDefinitionIssueRelationViewPage = (signedIdentifier: string): string =>
  'Service/RatingVoteDefinition/Issue/Relation/View/Page/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceRatingVoteDefinitionIssueRelationViewPage = lazy(
  () => import('./pages/Service/RatingVoteDefinition/Issue/Relation/View/Page'),
);

routes.push({
  path: 'Service/RatingVoteDefinition/Issue/Relation/View/Page/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_RATING_VOTE_DEFINITION_ISSUE_RELATION_VIEW_PAGE_INTERFACE_KEY})`}
      >
        <ServiceRatingVoteDefinitionIssueRelationViewPage />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_SELECT_ANSWER_VOTE_DEFINITION_ISSUE_RELATION_VIEW_PAGE_INTERFACE_KEY =
  'ServiceSelectAnswerVoteDefinitionIssueRelationViewPageRoute';
export const routeToServiceSelectAnswerVoteDefinitionIssueRelationViewPage = (signedIdentifier: string): string =>
  'Service/SelectAnswerVoteDefinition/Issue/Relation/View/Page/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceSelectAnswerVoteDefinitionIssueRelationViewPage = lazy(
  () => import('./pages/Service/SelectAnswerVoteDefinition/Issue/Relation/View/Page'),
);

routes.push({
  path: 'Service/SelectAnswerVoteDefinition/Issue/Relation/View/Page/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_SELECT_ANSWER_VOTE_DEFINITION_ISSUE_RELATION_VIEW_PAGE_INTERFACE_KEY})`}
      >
        <ServiceSelectAnswerVoteDefinitionIssueRelationViewPage />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_SERVICE_USER_VOTES_RELATION_TABLE_PAGE_INTERFACE_KEY =
  'ServiceServiceUserVotesRelationTablePageRoute';
export const routeToServiceServiceUserVotesRelationTablePage = (signedIdentifier: string): string =>
  'Service/ServiceUser/Votes/Relation/Table/Page/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceServiceUserVotesRelationTablePage = lazy(
  () => import('./pages/Service/ServiceUser/Votes/Relation/Table/Page'),
);

routes.push({
  path: 'Service/ServiceUser/Votes/Relation/Table/Page/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_SERVICE_USER_VOTES_RELATION_TABLE_PAGE_INTERFACE_KEY})`}>
        <ServiceServiceUserVotesRelationTablePage />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_SERVICE_USER_VOTES_RELATION_VIEW_PAGE_INTERFACE_KEY =
  'ServiceServiceUserVotesRelationViewPageRoute';
export const routeToServiceServiceUserVotesRelationViewPage = (signedIdentifier: string): string =>
  'Service/ServiceUser/Votes/Relation/View/Page/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceServiceUserVotesRelationViewPage = lazy(
  () => import('./pages/Service/ServiceUser/Votes/Relation/View/Page'),
);

routes.push({
  path: 'Service/ServiceUser/Votes/Relation/View/Page/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_SERVICE_USER_VOTES_RELATION_VIEW_PAGE_INTERFACE_KEY})`}>
        <ServiceServiceUserVotesRelationViewPage />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_ACTIVE_ISSUES_ACCESS_TABLE_PAGE_INTERFACE_KEY =
  'ServiceUserActiveIssuesAccessTablePageRoute';
export const routeToServiceUserActiveIssuesAccessTablePage = (): string =>
  'Service/User/ActiveIssues/Access/Table/Page';
const ServiceUserActiveIssuesAccessTablePage = lazy(
  () => import('./pages/Service/User/ActiveIssues/Access/Table/Page'),
);

routes.push({
  path: 'Service/User/ActiveIssues/Access/Table/Page',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_ACTIVE_ISSUES_ACCESS_TABLE_PAGE_INTERFACE_KEY})`}>
        <ServiceUserActiveIssuesAccessTablePage />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_ACTIVE_ISSUES_ACCESS_VIEW_PAGE_INTERFACE_KEY =
  'ServiceUserActiveIssuesAccessViewPageRoute';
export const routeToServiceUserActiveIssuesAccessViewPage = (signedIdentifier: string): string =>
  'Service/User/ActiveIssues/Access/View/Page/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceUserActiveIssuesAccessViewPage = lazy(() => import('./pages/Service/User/ActiveIssues/Access/View/Page'));

routes.push({
  path: 'Service/User/ActiveIssues/Access/View/Page/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_ACTIVE_ISSUES_ACCESS_VIEW_PAGE_INTERFACE_KEY})`}>
        <ServiceUserActiveIssuesAccessViewPage />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_ADMIN_CATEGORIES_ACCESS_TABLE_PAGE_INTERFACE_KEY =
  'ServiceUserAdminCategoriesAccessTablePageRoute';
export const routeToServiceUserAdminCategoriesAccessTablePage = (): string =>
  'Service/User/AdminCategories/Access/Table/Page';
const ServiceUserAdminCategoriesAccessTablePage = lazy(
  () => import('./pages/Service/User/AdminCategories/Access/Table/Page'),
);

routes.push({
  path: 'Service/User/AdminCategories/Access/Table/Page',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_ADMIN_CATEGORIES_ACCESS_TABLE_PAGE_INTERFACE_KEY})`}
      >
        <ServiceUserAdminCategoriesAccessTablePage />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_ADMIN_COUNTIES_ACCESS_TABLE_PAGE_INTERFACE_KEY =
  'ServiceUserAdminCountiesAccessTablePageRoute';
export const routeToServiceUserAdminCountiesAccessTablePage = (): string =>
  'Service/User/AdminCounties/Access/Table/Page';
const ServiceUserAdminCountiesAccessTablePage = lazy(
  () => import('./pages/Service/User/AdminCounties/Access/Table/Page'),
);

routes.push({
  path: 'Service/User/AdminCounties/Access/Table/Page',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_ADMIN_COUNTIES_ACCESS_TABLE_PAGE_INTERFACE_KEY})`}>
        <ServiceUserAdminCountiesAccessTablePage />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_ADMIN_ISSUE_TYPES_ACCESS_TABLE_PAGE_INTERFACE_KEY =
  'ServiceUserAdminIssueTypesAccessTablePageRoute';
export const routeToServiceUserAdminIssueTypesAccessTablePage = (): string =>
  'Service/User/AdminIssueTypes/Access/Table/Page';
const ServiceUserAdminIssueTypesAccessTablePage = lazy(
  () => import('./pages/Service/User/AdminIssueTypes/Access/Table/Page'),
);

routes.push({
  path: 'Service/User/AdminIssueTypes/Access/Table/Page',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_ADMIN_ISSUE_TYPES_ACCESS_TABLE_PAGE_INTERFACE_KEY})`}
      >
        <ServiceUserAdminIssueTypesAccessTablePage />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_ADMIN_ISSUES_ACCESS_TABLE_PAGE_INTERFACE_KEY =
  'ServiceUserAdminIssuesAccessTablePageRoute';
export const routeToServiceUserAdminIssuesAccessTablePage = (): string => 'Service/User/AdminIssues/Access/Table/Page';
const ServiceUserAdminIssuesAccessTablePage = lazy(() => import('./pages/Service/User/AdminIssues/Access/Table/Page'));

routes.push({
  path: 'Service/User/AdminIssues/Access/Table/Page',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_ADMIN_ISSUES_ACCESS_TABLE_PAGE_INTERFACE_KEY})`}>
        <ServiceUserAdminIssuesAccessTablePage />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_ADMIN_ISSUES_ACCESS_VIEW_PAGE_INTERFACE_KEY =
  'ServiceUserAdminIssuesAccessViewPageRoute';
export const routeToServiceUserAdminIssuesAccessViewPage = (signedIdentifier: string): string =>
  'Service/User/AdminIssues/Access/View/Page/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceUserAdminIssuesAccessViewPage = lazy(() => import('./pages/Service/User/AdminIssues/Access/View/Page'));

routes.push({
  path: 'Service/User/AdminIssues/Access/View/Page/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_ADMIN_ISSUES_ACCESS_VIEW_PAGE_INTERFACE_KEY})`}>
        <ServiceUserAdminIssuesAccessViewPage />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_ADMIN_USER_MANAGER_ACCESS_VIEW_PAGE_INTERFACE_KEY =
  'ServiceUserAdminUserManagerAccessViewPageRoute';
export const routeToServiceUserAdminUserManagerAccessViewPage = (signedIdentifier: string): string =>
  'Service/User/AdminUserManager/Access/View/Page/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceUserAdminUserManagerAccessViewPage = lazy(
  () => import('./pages/Service/User/AdminUserManager/Access/View/Page'),
);

routes.push({
  path: 'Service/User/AdminUserManager/Access/View/Page/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_ADMIN_USER_MANAGER_ACCESS_VIEW_PAGE_INTERFACE_KEY})`}
      >
        <ServiceUserAdminUserManagerAccessViewPage />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_ADMIN_USERS_ACCESS_TABLE_PAGE_INTERFACE_KEY =
  'ServiceUserAdminUsersAccessTablePageRoute';
export const routeToServiceUserAdminUsersAccessTablePage = (): string => 'Service/User/AdminUsers/Access/Table/Page';
const ServiceUserAdminUsersAccessTablePage = lazy(() => import('./pages/Service/User/AdminUsers/Access/Table/Page'));

routes.push({
  path: 'Service/User/AdminUsers/Access/Table/Page',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_ADMIN_USERS_ACCESS_TABLE_PAGE_INTERFACE_KEY})`}>
        <ServiceUserAdminUsersAccessTablePage />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_ADMIN_VOTE_DEFINITIONS_ACCESS_TABLE_PAGE_INTERFACE_KEY =
  'ServiceUserAdminVoteDefinitionsAccessTablePageRoute';
export const routeToServiceUserAdminVoteDefinitionsAccessTablePage = (): string =>
  'Service/User/AdminVoteDefinitions/Access/Table/Page';
const ServiceUserAdminVoteDefinitionsAccessTablePage = lazy(
  () => import('./pages/Service/User/AdminVoteDefinitions/Access/Table/Page'),
);

routes.push({
  path: 'Service/User/AdminVoteDefinitions/Access/Table/Page',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_ADMIN_VOTE_DEFINITIONS_ACCESS_TABLE_PAGE_INTERFACE_KEY})`}
      >
        <ServiceUserAdminVoteDefinitionsAccessTablePage />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_ADMIN_VOTE_DEFINITIONS_ACCESS_VIEW_PAGE_INTERFACE_KEY =
  'ServiceUserAdminVoteDefinitionsAccessViewPageRoute';
export const routeToServiceUserAdminVoteDefinitionsAccessViewPage = (signedIdentifier: string): string =>
  'Service/User/AdminVoteDefinitions/Access/View/Page/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceUserAdminVoteDefinitionsAccessViewPage = lazy(
  () => import('./pages/Service/User/AdminVoteDefinitions/Access/View/Page'),
);

routes.push({
  path: 'Service/User/AdminVoteDefinitions/Access/View/Page/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_ADMIN_VOTE_DEFINITIONS_ACCESS_VIEW_PAGE_INTERFACE_KEY})`}
      >
        <ServiceUserAdminVoteDefinitionsAccessViewPage />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_ADMIN_VOTE_ENTRIES_ACCESS_TABLE_PAGE_INTERFACE_KEY =
  'ServiceUserAdminVoteEntriesAccessTablePageRoute';
export const routeToServiceUserAdminVoteEntriesAccessTablePage = (): string =>
  'Service/User/AdminVoteEntries/Access/Table/Page';
const ServiceUserAdminVoteEntriesAccessTablePage = lazy(
  () => import('./pages/Service/User/AdminVoteEntries/Access/Table/Page'),
);

routes.push({
  path: 'Service/User/AdminVoteEntries/Access/Table/Page',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_ADMIN_VOTE_ENTRIES_ACCESS_TABLE_PAGE_INTERFACE_KEY})`}
      >
        <ServiceUserAdminVoteEntriesAccessTablePage />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_DASHBOARD_INTERFACE_KEY = 'DashboardRoute';
export const routeToDashboard = (): string => '';
const DashboardRoute = lazy(() => import('./pages/Service/User/DashboardHome/Access/View/Page'));

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
export const ROUTE_SERVICE_USER_USER_CREATED_ISSUES_ACCESS_TABLE_PAGE_INTERFACE_KEY =
  'ServiceUserUserCreatedIssuesAccessTablePageRoute';
export const routeToServiceUserUserCreatedIssuesAccessTablePage = (): string =>
  'Service/User/UserCreatedIssues/Access/Table/Page';
const ServiceUserUserCreatedIssuesAccessTablePage = lazy(
  () => import('./pages/Service/User/UserCreatedIssues/Access/Table/Page'),
);

routes.push({
  path: 'Service/User/UserCreatedIssues/Access/Table/Page',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_USER_CREATED_ISSUES_ACCESS_TABLE_PAGE_INTERFACE_KEY})`}
      >
        <ServiceUserUserCreatedIssuesAccessTablePage />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_USER_CREATED_ISSUES_ACCESS_VIEW_PAGE_INTERFACE_KEY =
  'ServiceUserUserCreatedIssuesAccessViewPageRoute';
export const routeToServiceUserUserCreatedIssuesAccessViewPage = (signedIdentifier: string): string =>
  'Service/User/UserCreatedIssues/Access/View/Page/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceUserUserCreatedIssuesAccessViewPage = lazy(
  () => import('./pages/Service/User/UserCreatedIssues/Access/View/Page'),
);

routes.push({
  path: 'Service/User/UserCreatedIssues/Access/View/Page/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_USER_CREATED_ISSUES_ACCESS_VIEW_PAGE_INTERFACE_KEY})`}
      >
        <ServiceUserUserCreatedIssuesAccessViewPage />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_USER_ISSUES_ACCESS_VIEW_PAGE_INTERFACE_KEY = 'ServiceUserUserIssuesAccessViewPageRoute';
export const routeToServiceUserUserIssuesAccessViewPage = (signedIdentifier: string): string =>
  'Service/User/UserIssues/Access/View/Page/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceUserUserIssuesAccessViewPage = lazy(() => import('./pages/Service/User/UserIssues/Access/View/Page'));

routes.push({
  path: 'Service/User/UserIssues/Access/View/Page/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_USER_ISSUES_ACCESS_VIEW_PAGE_INTERFACE_KEY})`}>
        <ServiceUserUserIssuesAccessViewPage />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_USER_OWNED_ACTIVE_ISSUES_ACCESS_TABLE_PAGE_INTERFACE_KEY =
  'ServiceUserUserOwnedActiveIssuesAccessTablePageRoute';
export const routeToServiceUserUserOwnedActiveIssuesAccessTablePage = (): string =>
  'Service/User/UserOwnedActiveIssues/Access/Table/Page';
const ServiceUserUserOwnedActiveIssuesAccessTablePage = lazy(
  () => import('./pages/Service/User/UserOwnedActiveIssues/Access/Table/Page'),
);

routes.push({
  path: 'Service/User/UserOwnedActiveIssues/Access/Table/Page',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_USER_OWNED_ACTIVE_ISSUES_ACCESS_TABLE_PAGE_INTERFACE_KEY})`}
      >
        <ServiceUserUserOwnedActiveIssuesAccessTablePage />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_USER_OWNED_ACTIVE_ISSUES_ACCESS_VIEW_PAGE_INTERFACE_KEY =
  'ServiceUserUserOwnedActiveIssuesAccessViewPageRoute';
export const routeToServiceUserUserOwnedActiveIssuesAccessViewPage = (signedIdentifier: string): string =>
  'Service/User/UserOwnedActiveIssues/Access/View/Page/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserUserOwnedActiveIssuesAccessViewPage = lazy(
  () => import('./pages/Service/User/UserOwnedActiveIssues/Access/View/Page'),
);

routes.push({
  path: 'Service/User/UserOwnedActiveIssues/Access/View/Page/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_USER_OWNED_ACTIVE_ISSUES_ACCESS_VIEW_PAGE_INTERFACE_KEY})`}
      >
        <ServiceUserUserOwnedActiveIssuesAccessViewPage />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_USER_OWNED_RATING_VOTE_DEFINITIONS_ACCESS_TABLE_PAGE_INTERFACE_KEY =
  'ServiceUserUserOwnedRatingVoteDefinitionsAccessTablePageRoute';
export const routeToServiceUserUserOwnedRatingVoteDefinitionsAccessTablePage = (): string =>
  'Service/User/UserOwnedRatingVoteDefinitions/Access/Table/Page';
const ServiceUserUserOwnedRatingVoteDefinitionsAccessTablePage = lazy(
  () => import('./pages/Service/User/UserOwnedRatingVoteDefinitions/Access/Table/Page'),
);

routes.push({
  path: 'Service/User/UserOwnedRatingVoteDefinitions/Access/Table/Page',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_USER_OWNED_RATING_VOTE_DEFINITIONS_ACCESS_TABLE_PAGE_INTERFACE_KEY})`}
      >
        <ServiceUserUserOwnedRatingVoteDefinitionsAccessTablePage />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_USER_OWNED_RATING_VOTE_DEFINITIONS_ACCESS_VIEW_PAGE_INTERFACE_KEY =
  'ServiceUserUserOwnedRatingVoteDefinitionsAccessViewPageRoute';
export const routeToServiceUserUserOwnedRatingVoteDefinitionsAccessViewPage = (signedIdentifier: string): string =>
  'Service/User/UserOwnedRatingVoteDefinitions/Access/View/Page/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserUserOwnedRatingVoteDefinitionsAccessViewPage = lazy(
  () => import('./pages/Service/User/UserOwnedRatingVoteDefinitions/Access/View/Page'),
);

routes.push({
  path: 'Service/User/UserOwnedRatingVoteDefinitions/Access/View/Page/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_USER_OWNED_RATING_VOTE_DEFINITIONS_ACCESS_VIEW_PAGE_INTERFACE_KEY})`}
      >
        <ServiceUserUserOwnedRatingVoteDefinitionsAccessViewPage />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_USER_OWNED_SELECT_ANSWER_VOTE_DEFINITIONS_ACCESS_TABLE_PAGE_INTERFACE_KEY =
  'ServiceUserUserOwnedSelectAnswerVoteDefinitionsAccessTablePageRoute';
export const routeToServiceUserUserOwnedSelectAnswerVoteDefinitionsAccessTablePage = (): string =>
  'Service/User/UserOwnedSelectAnswerVoteDefinitions/Access/Table/Page';
const ServiceUserUserOwnedSelectAnswerVoteDefinitionsAccessTablePage = lazy(
  () => import('./pages/Service/User/UserOwnedSelectAnswerVoteDefinitions/Access/Table/Page'),
);

routes.push({
  path: 'Service/User/UserOwnedSelectAnswerVoteDefinitions/Access/Table/Page',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_USER_OWNED_SELECT_ANSWER_VOTE_DEFINITIONS_ACCESS_TABLE_PAGE_INTERFACE_KEY})`}
      >
        <ServiceUserUserOwnedSelectAnswerVoteDefinitionsAccessTablePage />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_USER_OWNED_SELECT_ANSWER_VOTE_DEFINITIONS_ACCESS_VIEW_PAGE_INTERFACE_KEY =
  'ServiceUserUserOwnedSelectAnswerVoteDefinitionsAccessViewPageRoute';
export const routeToServiceUserUserOwnedSelectAnswerVoteDefinitionsAccessViewPage = (
  signedIdentifier: string,
): string =>
  'Service/User/UserOwnedSelectAnswerVoteDefinitions/Access/View/Page/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserUserOwnedSelectAnswerVoteDefinitionsAccessViewPage = lazy(
  () => import('./pages/Service/User/UserOwnedSelectAnswerVoteDefinitions/Access/View/Page'),
);

routes.push({
  path: 'Service/User/UserOwnedSelectAnswerVoteDefinitions/Access/View/Page/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_USER_OWNED_SELECT_ANSWER_VOTE_DEFINITIONS_ACCESS_VIEW_PAGE_INTERFACE_KEY})`}
      >
        <ServiceUserUserOwnedSelectAnswerVoteDefinitionsAccessViewPage />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_USER_OWNED_VOTE_ENTRIES_ACCESS_TABLE_PAGE_INTERFACE_KEY =
  'ServiceUserUserOwnedVoteEntriesAccessTablePageRoute';
export const routeToServiceUserUserOwnedVoteEntriesAccessTablePage = (): string =>
  'Service/User/UserOwnedVoteEntries/Access/Table/Page';
const ServiceUserUserOwnedVoteEntriesAccessTablePage = lazy(
  () => import('./pages/Service/User/UserOwnedVoteEntries/Access/Table/Page'),
);

routes.push({
  path: 'Service/User/UserOwnedVoteEntries/Access/Table/Page',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_USER_OWNED_VOTE_ENTRIES_ACCESS_TABLE_PAGE_INTERFACE_KEY})`}
      >
        <ServiceUserUserOwnedVoteEntriesAccessTablePage />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_USER_OWNED_YES_NO_ABSTAIN_VOTE_DEFINITIONS_ACCESS_TABLE_PAGE_INTERFACE_KEY =
  'ServiceUserUserOwnedYesNoAbstainVoteDefinitionsAccessTablePageRoute';
export const routeToServiceUserUserOwnedYesNoAbstainVoteDefinitionsAccessTablePage = (): string =>
  'Service/User/UserOwnedYesNoAbstainVoteDefinitions/Access/Table/Page';
const ServiceUserUserOwnedYesNoAbstainVoteDefinitionsAccessTablePage = lazy(
  () => import('./pages/Service/User/UserOwnedYesNoAbstainVoteDefinitions/Access/Table/Page'),
);

routes.push({
  path: 'Service/User/UserOwnedYesNoAbstainVoteDefinitions/Access/Table/Page',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_USER_OWNED_YES_NO_ABSTAIN_VOTE_DEFINITIONS_ACCESS_TABLE_PAGE_INTERFACE_KEY})`}
      >
        <ServiceUserUserOwnedYesNoAbstainVoteDefinitionsAccessTablePage />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_USER_OWNED_YES_NO_ABSTAIN_VOTE_DEFINITIONS_ACCESS_VIEW_PAGE_INTERFACE_KEY =
  'ServiceUserUserOwnedYesNoAbstainVoteDefinitionsAccessViewPageRoute';
export const routeToServiceUserUserOwnedYesNoAbstainVoteDefinitionsAccessViewPage = (
  signedIdentifier: string,
): string =>
  'Service/User/UserOwnedYesNoAbstainVoteDefinitions/Access/View/Page/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserUserOwnedYesNoAbstainVoteDefinitionsAccessViewPage = lazy(
  () => import('./pages/Service/User/UserOwnedYesNoAbstainVoteDefinitions/Access/View/Page'),
);

routes.push({
  path: 'Service/User/UserOwnedYesNoAbstainVoteDefinitions/Access/View/Page/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_USER_OWNED_YES_NO_ABSTAIN_VOTE_DEFINITIONS_ACCESS_VIEW_PAGE_INTERFACE_KEY})`}
      >
        <ServiceUserUserOwnedYesNoAbstainVoteDefinitionsAccessViewPage />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_USER_OWNED_YES_NO_VOTE_DEFINITIONS_ACCESS_TABLE_PAGE_INTERFACE_KEY =
  'ServiceUserUserOwnedYesNoVoteDefinitionsAccessTablePageRoute';
export const routeToServiceUserUserOwnedYesNoVoteDefinitionsAccessTablePage = (): string =>
  'Service/User/UserOwnedYesNoVoteDefinitions/Access/Table/Page';
const ServiceUserUserOwnedYesNoVoteDefinitionsAccessTablePage = lazy(
  () => import('./pages/Service/User/UserOwnedYesNoVoteDefinitions/Access/Table/Page'),
);

routes.push({
  path: 'Service/User/UserOwnedYesNoVoteDefinitions/Access/Table/Page',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_USER_OWNED_YES_NO_VOTE_DEFINITIONS_ACCESS_TABLE_PAGE_INTERFACE_KEY})`}
      >
        <ServiceUserUserOwnedYesNoVoteDefinitionsAccessTablePage />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_USER_OWNED_YES_NO_VOTE_DEFINITIONS_ACCESS_VIEW_PAGE_INTERFACE_KEY =
  'ServiceUserUserOwnedYesNoVoteDefinitionsAccessViewPageRoute';
export const routeToServiceUserUserOwnedYesNoVoteDefinitionsAccessViewPage = (signedIdentifier: string): string =>
  'Service/User/UserOwnedYesNoVoteDefinitions/Access/View/Page/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserUserOwnedYesNoVoteDefinitionsAccessViewPage = lazy(
  () => import('./pages/Service/User/UserOwnedYesNoVoteDefinitions/Access/View/Page'),
);

routes.push({
  path: 'Service/User/UserOwnedYesNoVoteDefinitions/Access/View/Page/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_USER_OWNED_YES_NO_VOTE_DEFINITIONS_ACCESS_VIEW_PAGE_INTERFACE_KEY})`}
      >
        <ServiceUserUserOwnedYesNoVoteDefinitionsAccessViewPage />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_USER_VOTE_DEFINITIONS_ACCESS_VIEW_PAGE_INTERFACE_KEY =
  'ServiceUserUserVoteDefinitionsAccessViewPageRoute';
export const routeToServiceUserUserVoteDefinitionsAccessViewPage = (signedIdentifier: string): string =>
  'Service/User/UserVoteDefinitions/Access/View/Page/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceUserUserVoteDefinitionsAccessViewPage = lazy(
  () => import('./pages/Service/User/UserVoteDefinitions/Access/View/Page'),
);

routes.push({
  path: 'Service/User/UserVoteDefinitions/Access/View/Page/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_USER_VOTE_DEFINITIONS_ACCESS_VIEW_PAGE_INTERFACE_KEY})`}
      >
        <ServiceUserUserVoteDefinitionsAccessViewPage />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_ISSUES_USER_ISSUES_VIEW_EDIT_CREATE_ISSUE_OUTPUT_VIEW_INTERFACE_KEY =
  'ServiceUserIssuesUserIssues_View_EditCreateIssueOutputViewRoute';
export const routeToServiceUserIssuesUserIssues_View_EditCreateIssueOutputView = (signedIdentifier: string): string =>
  'Service/UserIssues/UserIssues_View_Edit/CreateIssue/Output/View/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserIssuesUserIssues_View_EditCreateIssueOutputView = lazy(
  () => import('./pages/Service/UserIssues/UserIssues_View_Edit/CreateIssue/Output/View'),
);

routes.push({
  path: 'Service/UserIssues/UserIssues_View_Edit/CreateIssue/Output/View/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_ISSUES_USER_ISSUES_VIEW_EDIT_CREATE_ISSUE_OUTPUT_VIEW_INTERFACE_KEY})`}
      >
        <ServiceUserIssuesUserIssues_View_EditCreateIssueOutputView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_ISSUES_ACTIVE_ISSUES_GLOBAL_RELATION_TABLE_PAGE_INTERFACE_KEY =
  'ServiceUserIssuesActiveIssuesGlobalRelationTablePageRoute';
export const routeToServiceUserIssuesActiveIssuesGlobalRelationTablePage = (signedIdentifier: string): string =>
  'Service/UserIssues/ActiveIssuesGlobal/Relation/Table/Page/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserIssuesActiveIssuesGlobalRelationTablePage = lazy(
  () => import('./pages/Service/UserIssues/ActiveIssuesGlobal/Relation/Table/Page'),
);

routes.push({
  path: 'Service/UserIssues/ActiveIssuesGlobal/Relation/Table/Page/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_ISSUES_ACTIVE_ISSUES_GLOBAL_RELATION_TABLE_PAGE_INTERFACE_KEY})`}
      >
        <ServiceUserIssuesActiveIssuesGlobalRelationTablePage />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_ISSUES_ACTIVE_ISSUES_GLOBAL_RELATION_VIEW_PAGE_INTERFACE_KEY =
  'ServiceUserIssuesActiveIssuesGlobalRelationViewPageRoute';
export const routeToServiceUserIssuesActiveIssuesGlobalRelationViewPage = (signedIdentifier: string): string =>
  'Service/UserIssues/ActiveIssuesGlobal/Relation/View/Page/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserIssuesActiveIssuesGlobalRelationViewPage = lazy(
  () => import('./pages/Service/UserIssues/ActiveIssuesGlobal/Relation/View/Page'),
);

routes.push({
  path: 'Service/UserIssues/ActiveIssuesGlobal/Relation/View/Page/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_ISSUES_ACTIVE_ISSUES_GLOBAL_RELATION_VIEW_PAGE_INTERFACE_KEY})`}
      >
        <ServiceUserIssuesActiveIssuesGlobalRelationViewPage />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_ISSUES_ACTIVE_ISSUES_IN_ACTIVITY_CITIES_RELATION_TABLE_PAGE_INTERFACE_KEY =
  'ServiceUserIssuesActiveIssuesInActivityCitiesRelationTablePageRoute';
export const routeToServiceUserIssuesActiveIssuesInActivityCitiesRelationTablePage = (
  signedIdentifier: string,
): string =>
  'Service/UserIssues/ActiveIssuesInActivityCities/Relation/Table/Page/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserIssuesActiveIssuesInActivityCitiesRelationTablePage = lazy(
  () => import('./pages/Service/UserIssues/ActiveIssuesInActivityCities/Relation/Table/Page'),
);

routes.push({
  path: 'Service/UserIssues/ActiveIssuesInActivityCities/Relation/Table/Page/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_ISSUES_ACTIVE_ISSUES_IN_ACTIVITY_CITIES_RELATION_TABLE_PAGE_INTERFACE_KEY})`}
      >
        <ServiceUserIssuesActiveIssuesInActivityCitiesRelationTablePage />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_ISSUES_ACTIVE_ISSUES_IN_ACTIVITY_CITIES_RELATION_VIEW_PAGE_INTERFACE_KEY =
  'ServiceUserIssuesActiveIssuesInActivityCitiesRelationViewPageRoute';
export const routeToServiceUserIssuesActiveIssuesInActivityCitiesRelationViewPage = (
  signedIdentifier: string,
): string =>
  'Service/UserIssues/ActiveIssuesInActivityCities/Relation/View/Page/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserIssuesActiveIssuesInActivityCitiesRelationViewPage = lazy(
  () => import('./pages/Service/UserIssues/ActiveIssuesInActivityCities/Relation/View/Page'),
);

routes.push({
  path: 'Service/UserIssues/ActiveIssuesInActivityCities/Relation/View/Page/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_ISSUES_ACTIVE_ISSUES_IN_ACTIVITY_CITIES_RELATION_VIEW_PAGE_INTERFACE_KEY})`}
      >
        <ServiceUserIssuesActiveIssuesInActivityCitiesRelationViewPage />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_ISSUES_ACTIVE_ISSUES_IN_ACTIVITY_COUNTIES_RELATION_TABLE_PAGE_INTERFACE_KEY =
  'ServiceUserIssuesActiveIssuesInActivityCountiesRelationTablePageRoute';
export const routeToServiceUserIssuesActiveIssuesInActivityCountiesRelationTablePage = (
  signedIdentifier: string,
): string =>
  'Service/UserIssues/ActiveIssuesInActivityCounties/Relation/Table/Page/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserIssuesActiveIssuesInActivityCountiesRelationTablePage = lazy(
  () => import('./pages/Service/UserIssues/ActiveIssuesInActivityCounties/Relation/Table/Page'),
);

routes.push({
  path: 'Service/UserIssues/ActiveIssuesInActivityCounties/Relation/Table/Page/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_ISSUES_ACTIVE_ISSUES_IN_ACTIVITY_COUNTIES_RELATION_TABLE_PAGE_INTERFACE_KEY})`}
      >
        <ServiceUserIssuesActiveIssuesInActivityCountiesRelationTablePage />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_ISSUES_ACTIVE_ISSUES_IN_ACTIVITY_COUNTIES_RELATION_VIEW_PAGE_INTERFACE_KEY =
  'ServiceUserIssuesActiveIssuesInActivityCountiesRelationViewPageRoute';
export const routeToServiceUserIssuesActiveIssuesInActivityCountiesRelationViewPage = (
  signedIdentifier: string,
): string =>
  'Service/UserIssues/ActiveIssuesInActivityCounties/Relation/View/Page/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserIssuesActiveIssuesInActivityCountiesRelationViewPage = lazy(
  () => import('./pages/Service/UserIssues/ActiveIssuesInActivityCounties/Relation/View/Page'),
);

routes.push({
  path: 'Service/UserIssues/ActiveIssuesInActivityCounties/Relation/View/Page/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_ISSUES_ACTIVE_ISSUES_IN_ACTIVITY_COUNTIES_RELATION_VIEW_PAGE_INTERFACE_KEY})`}
      >
        <ServiceUserIssuesActiveIssuesInActivityCountiesRelationViewPage />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_ISSUES_ACTIVE_ISSUES_IN_ACTIVITY_DISTRICTS_RELATION_TABLE_PAGE_INTERFACE_KEY =
  'ServiceUserIssuesActiveIssuesInActivityDistrictsRelationTablePageRoute';
export const routeToServiceUserIssuesActiveIssuesInActivityDistrictsRelationTablePage = (
  signedIdentifier: string,
): string =>
  'Service/UserIssues/ActiveIssuesInActivityDistricts/Relation/Table/Page/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserIssuesActiveIssuesInActivityDistrictsRelationTablePage = lazy(
  () => import('./pages/Service/UserIssues/ActiveIssuesInActivityDistricts/Relation/Table/Page'),
);

routes.push({
  path: 'Service/UserIssues/ActiveIssuesInActivityDistricts/Relation/Table/Page/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_ISSUES_ACTIVE_ISSUES_IN_ACTIVITY_DISTRICTS_RELATION_TABLE_PAGE_INTERFACE_KEY})`}
      >
        <ServiceUserIssuesActiveIssuesInActivityDistrictsRelationTablePage />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_ISSUES_ACTIVE_ISSUES_IN_ACTIVITY_DISTRICTS_RELATION_VIEW_PAGE_INTERFACE_KEY =
  'ServiceUserIssuesActiveIssuesInActivityDistrictsRelationViewPageRoute';
export const routeToServiceUserIssuesActiveIssuesInActivityDistrictsRelationViewPage = (
  signedIdentifier: string,
): string =>
  'Service/UserIssues/ActiveIssuesInActivityDistricts/Relation/View/Page/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserIssuesActiveIssuesInActivityDistrictsRelationViewPage = lazy(
  () => import('./pages/Service/UserIssues/ActiveIssuesInActivityDistricts/Relation/View/Page'),
);

routes.push({
  path: 'Service/UserIssues/ActiveIssuesInActivityDistricts/Relation/View/Page/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_ISSUES_ACTIVE_ISSUES_IN_ACTIVITY_DISTRICTS_RELATION_VIEW_PAGE_INTERFACE_KEY})`}
      >
        <ServiceUserIssuesActiveIssuesInActivityDistrictsRelationViewPage />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_ISSUES_ACTIVE_ISSUES_IN_RESIDENT_CITY_RELATION_TABLE_PAGE_INTERFACE_KEY =
  'ServiceUserIssuesActiveIssuesInResidentCityRelationTablePageRoute';
export const routeToServiceUserIssuesActiveIssuesInResidentCityRelationTablePage = (signedIdentifier: string): string =>
  'Service/UserIssues/ActiveIssuesInResidentCity/Relation/Table/Page/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserIssuesActiveIssuesInResidentCityRelationTablePage = lazy(
  () => import('./pages/Service/UserIssues/ActiveIssuesInResidentCity/Relation/Table/Page'),
);

routes.push({
  path: 'Service/UserIssues/ActiveIssuesInResidentCity/Relation/Table/Page/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_ISSUES_ACTIVE_ISSUES_IN_RESIDENT_CITY_RELATION_TABLE_PAGE_INTERFACE_KEY})`}
      >
        <ServiceUserIssuesActiveIssuesInResidentCityRelationTablePage />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_ISSUES_ACTIVE_ISSUES_IN_RESIDENT_CITY_RELATION_VIEW_PAGE_INTERFACE_KEY =
  'ServiceUserIssuesActiveIssuesInResidentCityRelationViewPageRoute';
export const routeToServiceUserIssuesActiveIssuesInResidentCityRelationViewPage = (signedIdentifier: string): string =>
  'Service/UserIssues/ActiveIssuesInResidentCity/Relation/View/Page/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserIssuesActiveIssuesInResidentCityRelationViewPage = lazy(
  () => import('./pages/Service/UserIssues/ActiveIssuesInResidentCity/Relation/View/Page'),
);

routes.push({
  path: 'Service/UserIssues/ActiveIssuesInResidentCity/Relation/View/Page/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_ISSUES_ACTIVE_ISSUES_IN_RESIDENT_CITY_RELATION_VIEW_PAGE_INTERFACE_KEY})`}
      >
        <ServiceUserIssuesActiveIssuesInResidentCityRelationViewPage />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_ISSUES_ACTIVE_ISSUES_IN_RESIDENT_COUNTY_RELATION_TABLE_PAGE_INTERFACE_KEY =
  'ServiceUserIssuesActiveIssuesInResidentCountyRelationTablePageRoute';
export const routeToServiceUserIssuesActiveIssuesInResidentCountyRelationTablePage = (
  signedIdentifier: string,
): string =>
  'Service/UserIssues/ActiveIssuesInResidentCounty/Relation/Table/Page/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserIssuesActiveIssuesInResidentCountyRelationTablePage = lazy(
  () => import('./pages/Service/UserIssues/ActiveIssuesInResidentCounty/Relation/Table/Page'),
);

routes.push({
  path: 'Service/UserIssues/ActiveIssuesInResidentCounty/Relation/Table/Page/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_ISSUES_ACTIVE_ISSUES_IN_RESIDENT_COUNTY_RELATION_TABLE_PAGE_INTERFACE_KEY})`}
      >
        <ServiceUserIssuesActiveIssuesInResidentCountyRelationTablePage />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_ISSUES_ACTIVE_ISSUES_IN_RESIDENT_COUNTY_RELATION_VIEW_PAGE_INTERFACE_KEY =
  'ServiceUserIssuesActiveIssuesInResidentCountyRelationViewPageRoute';
export const routeToServiceUserIssuesActiveIssuesInResidentCountyRelationViewPage = (
  signedIdentifier: string,
): string =>
  'Service/UserIssues/ActiveIssuesInResidentCounty/Relation/View/Page/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserIssuesActiveIssuesInResidentCountyRelationViewPage = lazy(
  () => import('./pages/Service/UserIssues/ActiveIssuesInResidentCounty/Relation/View/Page'),
);

routes.push({
  path: 'Service/UserIssues/ActiveIssuesInResidentCounty/Relation/View/Page/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_ISSUES_ACTIVE_ISSUES_IN_RESIDENT_COUNTY_RELATION_VIEW_PAGE_INTERFACE_KEY})`}
      >
        <ServiceUserIssuesActiveIssuesInResidentCountyRelationViewPage />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_ISSUES_ACTIVE_ISSUES_IN_RESIDENT_DISTRICT_RELATION_TABLE_PAGE_INTERFACE_KEY =
  'ServiceUserIssuesActiveIssuesInResidentDistrictRelationTablePageRoute';
export const routeToServiceUserIssuesActiveIssuesInResidentDistrictRelationTablePage = (
  signedIdentifier: string,
): string =>
  'Service/UserIssues/ActiveIssuesInResidentDistrict/Relation/Table/Page/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserIssuesActiveIssuesInResidentDistrictRelationTablePage = lazy(
  () => import('./pages/Service/UserIssues/ActiveIssuesInResidentDistrict/Relation/Table/Page'),
);

routes.push({
  path: 'Service/UserIssues/ActiveIssuesInResidentDistrict/Relation/Table/Page/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_ISSUES_ACTIVE_ISSUES_IN_RESIDENT_DISTRICT_RELATION_TABLE_PAGE_INTERFACE_KEY})`}
      >
        <ServiceUserIssuesActiveIssuesInResidentDistrictRelationTablePage />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_ISSUES_ACTIVE_ISSUES_IN_RESIDENT_DISTRICT_RELATION_VIEW_PAGE_INTERFACE_KEY =
  'ServiceUserIssuesActiveIssuesInResidentDistrictRelationViewPageRoute';
export const routeToServiceUserIssuesActiveIssuesInResidentDistrictRelationViewPage = (
  signedIdentifier: string,
): string =>
  'Service/UserIssues/ActiveIssuesInResidentDistrict/Relation/View/Page/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserIssuesActiveIssuesInResidentDistrictRelationViewPage = lazy(
  () => import('./pages/Service/UserIssues/ActiveIssuesInResidentDistrict/Relation/View/Page'),
);

routes.push({
  path: 'Service/UserIssues/ActiveIssuesInResidentDistrict/Relation/View/Page/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_ISSUES_ACTIVE_ISSUES_IN_RESIDENT_DISTRICT_RELATION_VIEW_PAGE_INTERFACE_KEY})`}
      >
        <ServiceUserIssuesActiveIssuesInResidentDistrictRelationViewPage />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_ISSUES_OWNED_ISSUES_RELATION_TABLE_PAGE_INTERFACE_KEY =
  'ServiceUserIssuesOwnedIssuesRelationTablePageRoute';
export const routeToServiceUserIssuesOwnedIssuesRelationTablePage = (signedIdentifier: string): string =>
  'Service/UserIssues/OwnedIssues/Relation/Table/Page/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceUserIssuesOwnedIssuesRelationTablePage = lazy(
  () => import('./pages/Service/UserIssues/OwnedIssues/Relation/Table/Page'),
);

routes.push({
  path: 'Service/UserIssues/OwnedIssues/Relation/Table/Page/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_ISSUES_OWNED_ISSUES_RELATION_TABLE_PAGE_INTERFACE_KEY})`}
      >
        <ServiceUserIssuesOwnedIssuesRelationTablePage />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_ISSUES_OWNED_ISSUES_RELATION_VIEW_PAGE_INTERFACE_KEY =
  'ServiceUserIssuesOwnedIssuesRelationViewPageRoute';
export const routeToServiceUserIssuesOwnedIssuesRelationViewPage = (signedIdentifier: string): string =>
  'Service/UserIssues/OwnedIssues/Relation/View/Page/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceUserIssuesOwnedIssuesRelationViewPage = lazy(
  () => import('./pages/Service/UserIssues/OwnedIssues/Relation/View/Page'),
);

routes.push({
  path: 'Service/UserIssues/OwnedIssues/Relation/View/Page/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_ISSUES_OWNED_ISSUES_RELATION_VIEW_PAGE_INTERFACE_KEY})`}
      >
        <ServiceUserIssuesOwnedIssuesRelationViewPage />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_MANAGER_USERS_RELATION_TABLE_PAGE_INTERFACE_KEY =
  'ServiceUserManagerUsersRelationTablePageRoute';
export const routeToServiceUserManagerUsersRelationTablePage = (signedIdentifier: string): string =>
  'Service/UserManager/Users/Relation/Table/Page/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceUserManagerUsersRelationTablePage = lazy(
  () => import('./pages/Service/UserManager/Users/Relation/Table/Page'),
);

routes.push({
  path: 'Service/UserManager/Users/Relation/Table/Page/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_MANAGER_USERS_RELATION_TABLE_PAGE_INTERFACE_KEY})`}>
        <ServiceUserManagerUsersRelationTablePage />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_VOTE_DEFINITION_ACTIVE_VOTE_DEFINITIONS_GLOBAL_RELATION_TABLE_PAGE_INTERFACE_KEY =
  'ServiceUserVoteDefinitionActiveVoteDefinitionsGlobalRelationTablePageRoute';
export const routeToServiceUserVoteDefinitionActiveVoteDefinitionsGlobalRelationTablePage = (
  signedIdentifier: string,
): string =>
  'Service/UserVoteDefinition/ActiveVoteDefinitionsGlobal/Relation/Table/Page/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserVoteDefinitionActiveVoteDefinitionsGlobalRelationTablePage = lazy(
  () => import('./pages/Service/UserVoteDefinition/ActiveVoteDefinitionsGlobal/Relation/Table/Page'),
);

routes.push({
  path: 'Service/UserVoteDefinition/ActiveVoteDefinitionsGlobal/Relation/Table/Page/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_VOTE_DEFINITION_ACTIVE_VOTE_DEFINITIONS_GLOBAL_RELATION_TABLE_PAGE_INTERFACE_KEY})`}
      >
        <ServiceUserVoteDefinitionActiveVoteDefinitionsGlobalRelationTablePage />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_VOTE_DEFINITION_ACTIVE_VOTE_DEFINITIONS_GLOBAL_RELATION_VIEW_PAGE_INTERFACE_KEY =
  'ServiceUserVoteDefinitionActiveVoteDefinitionsGlobalRelationViewPageRoute';
export const routeToServiceUserVoteDefinitionActiveVoteDefinitionsGlobalRelationViewPage = (
  signedIdentifier: string,
): string =>
  'Service/UserVoteDefinition/ActiveVoteDefinitionsGlobal/Relation/View/Page/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserVoteDefinitionActiveVoteDefinitionsGlobalRelationViewPage = lazy(
  () => import('./pages/Service/UserVoteDefinition/ActiveVoteDefinitionsGlobal/Relation/View/Page'),
);

routes.push({
  path: 'Service/UserVoteDefinition/ActiveVoteDefinitionsGlobal/Relation/View/Page/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_VOTE_DEFINITION_ACTIVE_VOTE_DEFINITIONS_GLOBAL_RELATION_VIEW_PAGE_INTERFACE_KEY})`}
      >
        <ServiceUserVoteDefinitionActiveVoteDefinitionsGlobalRelationViewPage />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_VOTE_DEFINITION_ACTIVE_VOTE_DEFINITIONS_IN_ACTIVITY_CITIES_RELATION_TABLE_PAGE_INTERFACE_KEY =
  'ServiceUserVoteDefinitionActiveVoteDefinitionsInActivityCitiesRelationTablePageRoute';
export const routeToServiceUserVoteDefinitionActiveVoteDefinitionsInActivityCitiesRelationTablePage = (
  signedIdentifier: string,
): string =>
  'Service/UserVoteDefinition/ActiveVoteDefinitionsInActivityCities/Relation/Table/Page/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserVoteDefinitionActiveVoteDefinitionsInActivityCitiesRelationTablePage = lazy(
  () => import('./pages/Service/UserVoteDefinition/ActiveVoteDefinitionsInActivityCities/Relation/Table/Page'),
);

routes.push({
  path: 'Service/UserVoteDefinition/ActiveVoteDefinitionsInActivityCities/Relation/Table/Page/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_VOTE_DEFINITION_ACTIVE_VOTE_DEFINITIONS_IN_ACTIVITY_CITIES_RELATION_TABLE_PAGE_INTERFACE_KEY})`}
      >
        <ServiceUserVoteDefinitionActiveVoteDefinitionsInActivityCitiesRelationTablePage />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_VOTE_DEFINITION_ACTIVE_VOTE_DEFINITIONS_IN_ACTIVITY_CITIES_RELATION_VIEW_PAGE_INTERFACE_KEY =
  'ServiceUserVoteDefinitionActiveVoteDefinitionsInActivityCitiesRelationViewPageRoute';
export const routeToServiceUserVoteDefinitionActiveVoteDefinitionsInActivityCitiesRelationViewPage = (
  signedIdentifier: string,
): string =>
  'Service/UserVoteDefinition/ActiveVoteDefinitionsInActivityCities/Relation/View/Page/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserVoteDefinitionActiveVoteDefinitionsInActivityCitiesRelationViewPage = lazy(
  () => import('./pages/Service/UserVoteDefinition/ActiveVoteDefinitionsInActivityCities/Relation/View/Page'),
);

routes.push({
  path: 'Service/UserVoteDefinition/ActiveVoteDefinitionsInActivityCities/Relation/View/Page/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_VOTE_DEFINITION_ACTIVE_VOTE_DEFINITIONS_IN_ACTIVITY_CITIES_RELATION_VIEW_PAGE_INTERFACE_KEY})`}
      >
        <ServiceUserVoteDefinitionActiveVoteDefinitionsInActivityCitiesRelationViewPage />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_VOTE_DEFINITION_ACTIVE_VOTE_DEFINITIONS_IN_ACTIVITY_COUNTIES_RELATION_TABLE_PAGE_INTERFACE_KEY =
  'ServiceUserVoteDefinitionActiveVoteDefinitionsInActivityCountiesRelationTablePageRoute';
export const routeToServiceUserVoteDefinitionActiveVoteDefinitionsInActivityCountiesRelationTablePage = (
  signedIdentifier: string,
): string =>
  'Service/UserVoteDefinition/ActiveVoteDefinitionsInActivityCounties/Relation/Table/Page/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserVoteDefinitionActiveVoteDefinitionsInActivityCountiesRelationTablePage = lazy(
  () => import('./pages/Service/UserVoteDefinition/ActiveVoteDefinitionsInActivityCounties/Relation/Table/Page'),
);

routes.push({
  path: 'Service/UserVoteDefinition/ActiveVoteDefinitionsInActivityCounties/Relation/Table/Page/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_VOTE_DEFINITION_ACTIVE_VOTE_DEFINITIONS_IN_ACTIVITY_COUNTIES_RELATION_TABLE_PAGE_INTERFACE_KEY})`}
      >
        <ServiceUserVoteDefinitionActiveVoteDefinitionsInActivityCountiesRelationTablePage />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_VOTE_DEFINITION_ACTIVE_VOTE_DEFINITIONS_IN_ACTIVITY_COUNTIES_RELATION_VIEW_PAGE_INTERFACE_KEY =
  'ServiceUserVoteDefinitionActiveVoteDefinitionsInActivityCountiesRelationViewPageRoute';
export const routeToServiceUserVoteDefinitionActiveVoteDefinitionsInActivityCountiesRelationViewPage = (
  signedIdentifier: string,
): string =>
  'Service/UserVoteDefinition/ActiveVoteDefinitionsInActivityCounties/Relation/View/Page/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserVoteDefinitionActiveVoteDefinitionsInActivityCountiesRelationViewPage = lazy(
  () => import('./pages/Service/UserVoteDefinition/ActiveVoteDefinitionsInActivityCounties/Relation/View/Page'),
);

routes.push({
  path: 'Service/UserVoteDefinition/ActiveVoteDefinitionsInActivityCounties/Relation/View/Page/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_VOTE_DEFINITION_ACTIVE_VOTE_DEFINITIONS_IN_ACTIVITY_COUNTIES_RELATION_VIEW_PAGE_INTERFACE_KEY})`}
      >
        <ServiceUserVoteDefinitionActiveVoteDefinitionsInActivityCountiesRelationViewPage />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_VOTE_DEFINITION_ACTIVE_VOTE_DEFINITIONS_IN_ACTIVITY_DISTRICTS_RELATION_TABLE_PAGE_INTERFACE_KEY =
  'ServiceUserVoteDefinitionActiveVoteDefinitionsInActivityDistrictsRelationTablePageRoute';
export const routeToServiceUserVoteDefinitionActiveVoteDefinitionsInActivityDistrictsRelationTablePage = (
  signedIdentifier: string,
): string =>
  'Service/UserVoteDefinition/ActiveVoteDefinitionsInActivityDistricts/Relation/Table/Page/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserVoteDefinitionActiveVoteDefinitionsInActivityDistrictsRelationTablePage = lazy(
  () => import('./pages/Service/UserVoteDefinition/ActiveVoteDefinitionsInActivityDistricts/Relation/Table/Page'),
);

routes.push({
  path: 'Service/UserVoteDefinition/ActiveVoteDefinitionsInActivityDistricts/Relation/Table/Page/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_VOTE_DEFINITION_ACTIVE_VOTE_DEFINITIONS_IN_ACTIVITY_DISTRICTS_RELATION_TABLE_PAGE_INTERFACE_KEY})`}
      >
        <ServiceUserVoteDefinitionActiveVoteDefinitionsInActivityDistrictsRelationTablePage />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_VOTE_DEFINITION_ACTIVE_VOTE_DEFINITIONS_IN_ACTIVITY_DISTRICTS_RELATION_VIEW_PAGE_INTERFACE_KEY =
  'ServiceUserVoteDefinitionActiveVoteDefinitionsInActivityDistrictsRelationViewPageRoute';
export const routeToServiceUserVoteDefinitionActiveVoteDefinitionsInActivityDistrictsRelationViewPage = (
  signedIdentifier: string,
): string =>
  'Service/UserVoteDefinition/ActiveVoteDefinitionsInActivityDistricts/Relation/View/Page/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserVoteDefinitionActiveVoteDefinitionsInActivityDistrictsRelationViewPage = lazy(
  () => import('./pages/Service/UserVoteDefinition/ActiveVoteDefinitionsInActivityDistricts/Relation/View/Page'),
);

routes.push({
  path: 'Service/UserVoteDefinition/ActiveVoteDefinitionsInActivityDistricts/Relation/View/Page/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_VOTE_DEFINITION_ACTIVE_VOTE_DEFINITIONS_IN_ACTIVITY_DISTRICTS_RELATION_VIEW_PAGE_INTERFACE_KEY})`}
      >
        <ServiceUserVoteDefinitionActiveVoteDefinitionsInActivityDistrictsRelationViewPage />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_VOTE_DEFINITION_ACTIVE_VOTE_DEFINITIONS_IN_RESIDENT_CITY_RELATION_TABLE_PAGE_INTERFACE_KEY =
  'ServiceUserVoteDefinitionActiveVoteDefinitionsInResidentCityRelationTablePageRoute';
export const routeToServiceUserVoteDefinitionActiveVoteDefinitionsInResidentCityRelationTablePage = (
  signedIdentifier: string,
): string =>
  'Service/UserVoteDefinition/ActiveVoteDefinitionsInResidentCity/Relation/Table/Page/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserVoteDefinitionActiveVoteDefinitionsInResidentCityRelationTablePage = lazy(
  () => import('./pages/Service/UserVoteDefinition/ActiveVoteDefinitionsInResidentCity/Relation/Table/Page'),
);

routes.push({
  path: 'Service/UserVoteDefinition/ActiveVoteDefinitionsInResidentCity/Relation/Table/Page/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_VOTE_DEFINITION_ACTIVE_VOTE_DEFINITIONS_IN_RESIDENT_CITY_RELATION_TABLE_PAGE_INTERFACE_KEY})`}
      >
        <ServiceUserVoteDefinitionActiveVoteDefinitionsInResidentCityRelationTablePage />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_VOTE_DEFINITION_ACTIVE_VOTE_DEFINITIONS_IN_RESIDENT_CITY_RELATION_VIEW_PAGE_INTERFACE_KEY =
  'ServiceUserVoteDefinitionActiveVoteDefinitionsInResidentCityRelationViewPageRoute';
export const routeToServiceUserVoteDefinitionActiveVoteDefinitionsInResidentCityRelationViewPage = (
  signedIdentifier: string,
): string =>
  'Service/UserVoteDefinition/ActiveVoteDefinitionsInResidentCity/Relation/View/Page/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserVoteDefinitionActiveVoteDefinitionsInResidentCityRelationViewPage = lazy(
  () => import('./pages/Service/UserVoteDefinition/ActiveVoteDefinitionsInResidentCity/Relation/View/Page'),
);

routes.push({
  path: 'Service/UserVoteDefinition/ActiveVoteDefinitionsInResidentCity/Relation/View/Page/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_VOTE_DEFINITION_ACTIVE_VOTE_DEFINITIONS_IN_RESIDENT_CITY_RELATION_VIEW_PAGE_INTERFACE_KEY})`}
      >
        <ServiceUserVoteDefinitionActiveVoteDefinitionsInResidentCityRelationViewPage />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_VOTE_DEFINITION_ACTIVE_VOTE_DEFINITIONS_IN_RESIDENT_COUNTY_RELATION_TABLE_PAGE_INTERFACE_KEY =
  'ServiceUserVoteDefinitionActiveVoteDefinitionsInResidentCountyRelationTablePageRoute';
export const routeToServiceUserVoteDefinitionActiveVoteDefinitionsInResidentCountyRelationTablePage = (
  signedIdentifier: string,
): string =>
  'Service/UserVoteDefinition/ActiveVoteDefinitionsInResidentCounty/Relation/Table/Page/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserVoteDefinitionActiveVoteDefinitionsInResidentCountyRelationTablePage = lazy(
  () => import('./pages/Service/UserVoteDefinition/ActiveVoteDefinitionsInResidentCounty/Relation/Table/Page'),
);

routes.push({
  path: 'Service/UserVoteDefinition/ActiveVoteDefinitionsInResidentCounty/Relation/Table/Page/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_VOTE_DEFINITION_ACTIVE_VOTE_DEFINITIONS_IN_RESIDENT_COUNTY_RELATION_TABLE_PAGE_INTERFACE_KEY})`}
      >
        <ServiceUserVoteDefinitionActiveVoteDefinitionsInResidentCountyRelationTablePage />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_VOTE_DEFINITION_ACTIVE_VOTE_DEFINITIONS_IN_RESIDENT_COUNTY_RELATION_VIEW_PAGE_INTERFACE_KEY =
  'ServiceUserVoteDefinitionActiveVoteDefinitionsInResidentCountyRelationViewPageRoute';
export const routeToServiceUserVoteDefinitionActiveVoteDefinitionsInResidentCountyRelationViewPage = (
  signedIdentifier: string,
): string =>
  'Service/UserVoteDefinition/ActiveVoteDefinitionsInResidentCounty/Relation/View/Page/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserVoteDefinitionActiveVoteDefinitionsInResidentCountyRelationViewPage = lazy(
  () => import('./pages/Service/UserVoteDefinition/ActiveVoteDefinitionsInResidentCounty/Relation/View/Page'),
);

routes.push({
  path: 'Service/UserVoteDefinition/ActiveVoteDefinitionsInResidentCounty/Relation/View/Page/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_VOTE_DEFINITION_ACTIVE_VOTE_DEFINITIONS_IN_RESIDENT_COUNTY_RELATION_VIEW_PAGE_INTERFACE_KEY})`}
      >
        <ServiceUserVoteDefinitionActiveVoteDefinitionsInResidentCountyRelationViewPage />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_VOTE_DEFINITION_ACTIVE_VOTE_DEFINITIONS_IN_RESIDENT_DISTRICT_RELATION_TABLE_PAGE_INTERFACE_KEY =
  'ServiceUserVoteDefinitionActiveVoteDefinitionsInResidentDistrictRelationTablePageRoute';
export const routeToServiceUserVoteDefinitionActiveVoteDefinitionsInResidentDistrictRelationTablePage = (
  signedIdentifier: string,
): string =>
  'Service/UserVoteDefinition/ActiveVoteDefinitionsInResidentDistrict/Relation/Table/Page/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserVoteDefinitionActiveVoteDefinitionsInResidentDistrictRelationTablePage = lazy(
  () => import('./pages/Service/UserVoteDefinition/ActiveVoteDefinitionsInResidentDistrict/Relation/Table/Page'),
);

routes.push({
  path: 'Service/UserVoteDefinition/ActiveVoteDefinitionsInResidentDistrict/Relation/Table/Page/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_VOTE_DEFINITION_ACTIVE_VOTE_DEFINITIONS_IN_RESIDENT_DISTRICT_RELATION_TABLE_PAGE_INTERFACE_KEY})`}
      >
        <ServiceUserVoteDefinitionActiveVoteDefinitionsInResidentDistrictRelationTablePage />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_VOTE_DEFINITION_ACTIVE_VOTE_DEFINITIONS_IN_RESIDENT_DISTRICT_RELATION_VIEW_PAGE_INTERFACE_KEY =
  'ServiceUserVoteDefinitionActiveVoteDefinitionsInResidentDistrictRelationViewPageRoute';
export const routeToServiceUserVoteDefinitionActiveVoteDefinitionsInResidentDistrictRelationViewPage = (
  signedIdentifier: string,
): string =>
  'Service/UserVoteDefinition/ActiveVoteDefinitionsInResidentDistrict/Relation/View/Page/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserVoteDefinitionActiveVoteDefinitionsInResidentDistrictRelationViewPage = lazy(
  () => import('./pages/Service/UserVoteDefinition/ActiveVoteDefinitionsInResidentDistrict/Relation/View/Page'),
);

routes.push({
  path: 'Service/UserVoteDefinition/ActiveVoteDefinitionsInResidentDistrict/Relation/View/Page/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_VOTE_DEFINITION_ACTIVE_VOTE_DEFINITIONS_IN_RESIDENT_DISTRICT_RELATION_VIEW_PAGE_INTERFACE_KEY})`}
      >
        <ServiceUserVoteDefinitionActiveVoteDefinitionsInResidentDistrictRelationViewPage />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_VOTE_DEFINITION_OWNED_VOTE_DEFINITIONS_RELATION_TABLE_PAGE_INTERFACE_KEY =
  'ServiceUserVoteDefinitionOwnedVoteDefinitionsRelationTablePageRoute';
export const routeToServiceUserVoteDefinitionOwnedVoteDefinitionsRelationTablePage = (
  signedIdentifier: string,
): string =>
  'Service/UserVoteDefinition/OwnedVoteDefinitions/Relation/Table/Page/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserVoteDefinitionOwnedVoteDefinitionsRelationTablePage = lazy(
  () => import('./pages/Service/UserVoteDefinition/OwnedVoteDefinitions/Relation/Table/Page'),
);

routes.push({
  path: 'Service/UserVoteDefinition/OwnedVoteDefinitions/Relation/Table/Page/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_VOTE_DEFINITION_OWNED_VOTE_DEFINITIONS_RELATION_TABLE_PAGE_INTERFACE_KEY})`}
      >
        <ServiceUserVoteDefinitionOwnedVoteDefinitionsRelationTablePage />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_VOTE_DEFINITION_OWNED_VOTE_DEFINITIONS_RELATION_VIEW_PAGE_INTERFACE_KEY =
  'ServiceUserVoteDefinitionOwnedVoteDefinitionsRelationViewPageRoute';
export const routeToServiceUserVoteDefinitionOwnedVoteDefinitionsRelationViewPage = (
  signedIdentifier: string,
): string =>
  'Service/UserVoteDefinition/OwnedVoteDefinitions/Relation/View/Page/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserVoteDefinitionOwnedVoteDefinitionsRelationViewPage = lazy(
  () => import('./pages/Service/UserVoteDefinition/OwnedVoteDefinitions/Relation/View/Page'),
);

routes.push({
  path: 'Service/UserVoteDefinition/OwnedVoteDefinitions/Relation/View/Page/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_VOTE_DEFINITION_OWNED_VOTE_DEFINITIONS_RELATION_VIEW_PAGE_INTERFACE_KEY})`}
      >
        <ServiceUserVoteDefinitionOwnedVoteDefinitionsRelationViewPage />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_VOTE_DEFINITION_ISSUE_RELATION_VIEW_PAGE_INTERFACE_KEY =
  'ServiceVoteDefinitionIssueRelationViewPageRoute';
export const routeToServiceVoteDefinitionIssueRelationViewPage = (signedIdentifier: string): string =>
  'Service/VoteDefinition/Issue/Relation/View/Page/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceVoteDefinitionIssueRelationViewPage = lazy(
  () => import('./pages/Service/VoteDefinition/Issue/Relation/View/Page'),
);

routes.push({
  path: 'Service/VoteDefinition/Issue/Relation/View/Page/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_VOTE_DEFINITION_ISSUE_RELATION_VIEW_PAGE_INTERFACE_KEY})`}
      >
        <ServiceVoteDefinitionIssueRelationViewPage />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_VOTE_ENTRY_VOTE_DEFINITION_RELATION_VIEW_PAGE_INTERFACE_KEY =
  'ServiceVoteEntryVoteDefinitionRelationViewPageRoute';
export const routeToServiceVoteEntryVoteDefinitionRelationViewPage = (signedIdentifier: string): string =>
  'Service/VoteEntry/VoteDefinition/Relation/View/Page/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceVoteEntryVoteDefinitionRelationViewPage = lazy(
  () => import('./pages/Service/VoteEntry/VoteDefinition/Relation/View/Page'),
);

routes.push({
  path: 'Service/VoteEntry/VoteDefinition/Relation/View/Page/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_VOTE_ENTRY_VOTE_DEFINITION_RELATION_VIEW_PAGE_INTERFACE_KEY})`}
      >
        <ServiceVoteEntryVoteDefinitionRelationViewPage />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_YES_NO_ABSTAIN_VOTE_DEFINITION_ISSUE_RELATION_VIEW_PAGE_INTERFACE_KEY =
  'ServiceYesNoAbstainVoteDefinitionIssueRelationViewPageRoute';
export const routeToServiceYesNoAbstainVoteDefinitionIssueRelationViewPage = (signedIdentifier: string): string =>
  'Service/YesNoAbstainVoteDefinition/Issue/Relation/View/Page/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceYesNoAbstainVoteDefinitionIssueRelationViewPage = lazy(
  () => import('./pages/Service/YesNoAbstainVoteDefinition/Issue/Relation/View/Page'),
);

routes.push({
  path: 'Service/YesNoAbstainVoteDefinition/Issue/Relation/View/Page/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_YES_NO_ABSTAIN_VOTE_DEFINITION_ISSUE_RELATION_VIEW_PAGE_INTERFACE_KEY})`}
      >
        <ServiceYesNoAbstainVoteDefinitionIssueRelationViewPage />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_YES_NO_VOTE_DEFINITION_ISSUE_RELATION_VIEW_PAGE_INTERFACE_KEY =
  'ServiceYesNoVoteDefinitionIssueRelationViewPageRoute';
export const routeToServiceYesNoVoteDefinitionIssueRelationViewPage = (signedIdentifier: string): string =>
  'Service/YesNoVoteDefinition/Issue/Relation/View/Page/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceYesNoVoteDefinitionIssueRelationViewPage = lazy(
  () => import('./pages/Service/YesNoVoteDefinition/Issue/Relation/View/Page'),
);

routes.push({
  path: 'Service/YesNoVoteDefinition/Issue/Relation/View/Page/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_YES_NO_VOTE_DEFINITION_ISSUE_RELATION_VIEW_PAGE_INTERFACE_KEY})`}
      >
        <ServiceYesNoVoteDefinitionIssueRelationViewPage />
      </ComponentProxy>
    </Suspense>
  ),
});

export { routes };
