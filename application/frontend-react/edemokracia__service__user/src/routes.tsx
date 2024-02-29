//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/routes.tsx'
// Template name: actor/src/routes.tsx
// Template file: actor/src/routes.tsx.hbs

import { OBJECTCLASS } from '@pandino/pandino-api';
import { ComponentProxy } from '@pandino/react-hooks';
import type { ReactElement } from 'react';
import { Suspense, lazy } from 'react';
import { Navigate, Route } from 'react-router-dom';
import { Redirect } from './pages/Redirect';

let routes: Array<{ path: string; element: ReactElement; exact?: boolean }> = [];

routes.push({
  path: '_redirect',
  exact: true,
  element: <Redirect />,
});

export const ROUTE_SERVICE_COMMENT_VOTES_RELATION_TABLE_PAGE_INTERFACE_KEY =
  'ServiceCommentVotesRelationTablePageRoute';
export const routeToServiceCommentVotesRelationTablePage = (signedIdentifier: string): string =>
  'Service/Comment/Votes/RelationTablePage/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceCommentVotesRelationTablePage = lazy(() => import('./pages/Service/Comment/Votes/RelationTablePage'));

routes.push({
  path: 'Service/Comment/Votes/RelationTablePage/:signedIdentifier',
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
  'Service/Comment/Votes/RelationViewPage/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceCommentVotesRelationViewPage = lazy(() => import('./pages/Service/Comment/Votes/RelationViewPage'));

routes.push({
  path: 'Service/Comment/Votes/RelationViewPage/:signedIdentifier',
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
  'Service/Con/Votes/RelationTablePage/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceConVotesRelationTablePage = lazy(() => import('./pages/Service/Con/Votes/RelationTablePage'));

routes.push({
  path: 'Service/Con/Votes/RelationTablePage/:signedIdentifier',
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
  'Service/Con/Votes/RelationViewPage/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceConVotesRelationViewPage = lazy(() => import('./pages/Service/Con/Votes/RelationViewPage'));

routes.push({
  path: 'Service/Con/Votes/RelationViewPage/:signedIdentifier',
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
  'Service/Dashboard/FavoriteIssues/RelationTablePage/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceDashboardFavoriteIssuesRelationTablePage = lazy(
  () => import('./pages/Service/Dashboard/FavoriteIssues/RelationTablePage'),
);

routes.push({
  path: 'Service/Dashboard/FavoriteIssues/RelationTablePage/:signedIdentifier',
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
  'Service/Dashboard/FavoriteIssues/RelationViewPage/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceDashboardFavoriteIssuesRelationViewPage = lazy(
  () => import('./pages/Service/Dashboard/FavoriteIssues/RelationViewPage'),
);

routes.push({
  path: 'Service/Dashboard/FavoriteIssues/RelationViewPage/:signedIdentifier',
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
  'Service/Dashboard/FavoriteVoteDefinitions/RelationTablePage/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceDashboardFavoriteVoteDefinitionsRelationTablePage = lazy(
  () => import('./pages/Service/Dashboard/FavoriteVoteDefinitions/RelationTablePage'),
);

routes.push({
  path: 'Service/Dashboard/FavoriteVoteDefinitions/RelationTablePage/:signedIdentifier',
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
  'Service/Dashboard/FavoriteVoteDefinitions/RelationViewPage/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceDashboardFavoriteVoteDefinitionsRelationViewPage = lazy(
  () => import('./pages/Service/Dashboard/FavoriteVoteDefinitions/RelationViewPage'),
);

routes.push({
  path: 'Service/Dashboard/FavoriteVoteDefinitions/RelationViewPage/:signedIdentifier',
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
export const ROUTE_SERVICE_DASHBOARD_OWNED_ISSUES_RELATION_TABLE_PAGE_INTERFACE_KEY =
  'ServiceDashboardOwnedIssuesRelationTablePageRoute';
export const routeToServiceDashboardOwnedIssuesRelationTablePage = (signedIdentifier: string): string =>
  'Service/Dashboard/OwnedIssues/RelationTablePage/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceDashboardOwnedIssuesRelationTablePage = lazy(
  () => import('./pages/Service/Dashboard/OwnedIssues/RelationTablePage'),
);

routes.push({
  path: 'Service/Dashboard/OwnedIssues/RelationTablePage/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_DASHBOARD_OWNED_ISSUES_RELATION_TABLE_PAGE_INTERFACE_KEY})`}
      >
        <ServiceDashboardOwnedIssuesRelationTablePage />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_DASHBOARD_OWNED_ISSUES_RELATION_VIEW_PAGE_INTERFACE_KEY =
  'ServiceDashboardOwnedIssuesRelationViewPageRoute';
export const routeToServiceDashboardOwnedIssuesRelationViewPage = (signedIdentifier: string): string =>
  'Service/Dashboard/OwnedIssues/RelationViewPage/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceDashboardOwnedIssuesRelationViewPage = lazy(
  () => import('./pages/Service/Dashboard/OwnedIssues/RelationViewPage'),
);

routes.push({
  path: 'Service/Dashboard/OwnedIssues/RelationViewPage/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_DASHBOARD_OWNED_ISSUES_RELATION_VIEW_PAGE_INTERFACE_KEY})`}
      >
        <ServiceDashboardOwnedIssuesRelationViewPage />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_DASHBOARD_OWNED_VOTE_DEFINITIONS_RELATION_TABLE_PAGE_INTERFACE_KEY =
  'ServiceDashboardOwnedVoteDefinitionsRelationTablePageRoute';
export const routeToServiceDashboardOwnedVoteDefinitionsRelationTablePage = (signedIdentifier: string): string =>
  'Service/Dashboard/OwnedVoteDefinitions/RelationTablePage/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceDashboardOwnedVoteDefinitionsRelationTablePage = lazy(
  () => import('./pages/Service/Dashboard/OwnedVoteDefinitions/RelationTablePage'),
);

routes.push({
  path: 'Service/Dashboard/OwnedVoteDefinitions/RelationTablePage/:signedIdentifier',
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
  'Service/Dashboard/OwnedVoteDefinitions/RelationViewPage/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceDashboardOwnedVoteDefinitionsRelationViewPage = lazy(
  () => import('./pages/Service/Dashboard/OwnedVoteDefinitions/RelationViewPage'),
);

routes.push({
  path: 'Service/Dashboard/OwnedVoteDefinitions/RelationViewPage/:signedIdentifier',
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
  'Service/Dashboard/UserVoteEntries/RelationTablePage/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceDashboardUserVoteEntriesRelationTablePage = lazy(
  () => import('./pages/Service/Dashboard/UserVoteEntries/RelationTablePage'),
);

routes.push({
  path: 'Service/Dashboard/UserVoteEntries/RelationTablePage/:signedIdentifier',
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
  'Service/Issue/Comments/RelationViewPage/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceIssueCommentsRelationViewPage = lazy(() => import('./pages/Service/Issue/Comments/RelationViewPage'));

routes.push({
  path: 'Service/Issue/Comments/RelationViewPage/:signedIdentifier',
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
  'Service/Pro/Votes/RelationTablePage/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceProVotesRelationTablePage = lazy(() => import('./pages/Service/Pro/Votes/RelationTablePage'));

routes.push({
  path: 'Service/Pro/Votes/RelationTablePage/:signedIdentifier',
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
  'Service/Pro/Votes/RelationViewPage/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceProVotesRelationViewPage = lazy(() => import('./pages/Service/Pro/Votes/RelationViewPage'));

routes.push({
  path: 'Service/Pro/Votes/RelationViewPage/:signedIdentifier',
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
  'Service/RatingVoteDefinition/Issue/RelationViewPage/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceRatingVoteDefinitionIssueRelationViewPage = lazy(
  () => import('./pages/Service/RatingVoteDefinition/Issue/RelationViewPage'),
);

routes.push({
  path: 'Service/RatingVoteDefinition/Issue/RelationViewPage/:signedIdentifier',
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
  'Service/SelectAnswerVoteDefinition/Issue/RelationViewPage/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceSelectAnswerVoteDefinitionIssueRelationViewPage = lazy(
  () => import('./pages/Service/SelectAnswerVoteDefinition/Issue/RelationViewPage'),
);

routes.push({
  path: 'Service/SelectAnswerVoteDefinition/Issue/RelationViewPage/:signedIdentifier',
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
  'Service/ServiceUser/Votes/RelationTablePage/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceServiceUserVotesRelationTablePage = lazy(
  () => import('./pages/Service/ServiceUser/Votes/RelationTablePage'),
);

routes.push({
  path: 'Service/ServiceUser/Votes/RelationTablePage/:signedIdentifier',
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
  'Service/ServiceUser/Votes/RelationViewPage/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceServiceUserVotesRelationViewPage = lazy(
  () => import('./pages/Service/ServiceUser/Votes/RelationViewPage'),
);

routes.push({
  path: 'Service/ServiceUser/Votes/RelationViewPage/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_SERVICE_USER_VOTES_RELATION_VIEW_PAGE_INTERFACE_KEY})`}>
        <ServiceServiceUserVotesRelationViewPage />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_ADMIN_CATEGORIES_ACCESS_TABLE_PAGE_INTERFACE_KEY =
  'ServiceUserAdminCategoriesAccessTablePageRoute';
export const routeToServiceUserAdminCategoriesAccessTablePage = (): string =>
  'Service/User/AdminCategories/AccessTablePage';
const ServiceUserAdminCategoriesAccessTablePage = lazy(
  () => import('./pages/Service/User/AdminCategories/AccessTablePage'),
);

routes.push({
  path: 'Service/User/AdminCategories/AccessTablePage',
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
  'Service/User/AdminCounties/AccessTablePage';
const ServiceUserAdminCountiesAccessTablePage = lazy(
  () => import('./pages/Service/User/AdminCounties/AccessTablePage'),
);

routes.push({
  path: 'Service/User/AdminCounties/AccessTablePage',
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
  'Service/User/AdminIssueTypes/AccessTablePage';
const ServiceUserAdminIssueTypesAccessTablePage = lazy(
  () => import('./pages/Service/User/AdminIssueTypes/AccessTablePage'),
);

routes.push({
  path: 'Service/User/AdminIssueTypes/AccessTablePage',
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
export const routeToServiceUserAdminIssuesAccessTablePage = (): string => 'Service/User/AdminIssues/AccessTablePage';
const ServiceUserAdminIssuesAccessTablePage = lazy(() => import('./pages/Service/User/AdminIssues/AccessTablePage'));

routes.push({
  path: 'Service/User/AdminIssues/AccessTablePage',
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
  'Service/User/AdminIssues/AccessViewPage/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceUserAdminIssuesAccessViewPage = lazy(() => import('./pages/Service/User/AdminIssues/AccessViewPage'));

routes.push({
  path: 'Service/User/AdminIssues/AccessViewPage/:signedIdentifier',
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
export const routeToServiceUserAdminUserManagerAccessViewPage = (): string =>
  'Service/User/AdminUserManager/AccessViewPage';
const ServiceUserAdminUserManagerAccessViewPage = lazy(
  () => import('./pages/Service/User/AdminUserManager/AccessViewPage'),
);

routes.push({
  path: 'Service/User/AdminUserManager/AccessViewPage',
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
export const ROUTE_SERVICE_USER_ADMIN_VOTE_DEFINITIONS_ACCESS_TABLE_PAGE_INTERFACE_KEY =
  'ServiceUserAdminVoteDefinitionsAccessTablePageRoute';
export const routeToServiceUserAdminVoteDefinitionsAccessTablePage = (): string =>
  'Service/User/AdminVoteDefinitions/AccessTablePage';
const ServiceUserAdminVoteDefinitionsAccessTablePage = lazy(
  () => import('./pages/Service/User/AdminVoteDefinitions/AccessTablePage'),
);

routes.push({
  path: 'Service/User/AdminVoteDefinitions/AccessTablePage',
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
  'Service/User/AdminVoteDefinitions/AccessViewPage/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceUserAdminVoteDefinitionsAccessViewPage = lazy(
  () => import('./pages/Service/User/AdminVoteDefinitions/AccessViewPage'),
);

routes.push({
  path: 'Service/User/AdminVoteDefinitions/AccessViewPage/:signedIdentifier',
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
  'Service/User/AdminVoteEntries/AccessTablePage';
const ServiceUserAdminVoteEntriesAccessTablePage = lazy(
  () => import('./pages/Service/User/AdminVoteEntries/AccessTablePage'),
);

routes.push({
  path: 'Service/User/AdminVoteEntries/AccessTablePage',
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
const DashboardRoute = lazy(() => import('./pages/Service/User/DashboardHome/AccessViewPage'));

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
export const ROUTE_SERVICE_USER_ISSUES_ACCESS_TABLE_PAGE_INTERFACE_KEY = 'ServiceUserIssuesAccessTablePageRoute';
export const routeToServiceUserIssuesAccessTablePage = (): string => 'Service/User/Issues/AccessTablePage';
const ServiceUserIssuesAccessTablePage = lazy(() => import('./pages/Service/User/Issues/AccessTablePage'));

routes.push({
  path: 'Service/User/Issues/AccessTablePage',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_ISSUES_ACCESS_TABLE_PAGE_INTERFACE_KEY})`}>
        <ServiceUserIssuesAccessTablePage />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_ISSUES_ACCESS_VIEW_PAGE_INTERFACE_KEY = 'ServiceUserIssuesAccessViewPageRoute';
export const routeToServiceUserIssuesAccessViewPage = (signedIdentifier: string): string =>
  'Service/User/Issues/AccessViewPage/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceUserIssuesAccessViewPage = lazy(() => import('./pages/Service/User/Issues/AccessViewPage'));

routes.push({
  path: 'Service/User/Issues/AccessViewPage/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_ISSUES_ACCESS_VIEW_PAGE_INTERFACE_KEY})`}>
        <ServiceUserIssuesAccessViewPage />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_RATING_VOTE_DEFINITIONS_ACCESS_TABLE_PAGE_INTERFACE_KEY =
  'ServiceUserRatingVoteDefinitionsAccessTablePageRoute';
export const routeToServiceUserRatingVoteDefinitionsAccessTablePage = (): string =>
  'Service/User/RatingVoteDefinitions/AccessTablePage';
const ServiceUserRatingVoteDefinitionsAccessTablePage = lazy(
  () => import('./pages/Service/User/RatingVoteDefinitions/AccessTablePage'),
);

routes.push({
  path: 'Service/User/RatingVoteDefinitions/AccessTablePage',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_RATING_VOTE_DEFINITIONS_ACCESS_TABLE_PAGE_INTERFACE_KEY})`}
      >
        <ServiceUserRatingVoteDefinitionsAccessTablePage />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_RATING_VOTE_DEFINITIONS_ACCESS_VIEW_PAGE_INTERFACE_KEY =
  'ServiceUserRatingVoteDefinitionsAccessViewPageRoute';
export const routeToServiceUserRatingVoteDefinitionsAccessViewPage = (signedIdentifier: string): string =>
  'Service/User/RatingVoteDefinitions/AccessViewPage/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceUserRatingVoteDefinitionsAccessViewPage = lazy(
  () => import('./pages/Service/User/RatingVoteDefinitions/AccessViewPage'),
);

routes.push({
  path: 'Service/User/RatingVoteDefinitions/AccessViewPage/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_RATING_VOTE_DEFINITIONS_ACCESS_VIEW_PAGE_INTERFACE_KEY})`}
      >
        <ServiceUserRatingVoteDefinitionsAccessViewPage />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_SELECT_ANSWER_VOTE_DEFINITIONS_ACCESS_TABLE_PAGE_INTERFACE_KEY =
  'ServiceUserSelectAnswerVoteDefinitionsAccessTablePageRoute';
export const routeToServiceUserSelectAnswerVoteDefinitionsAccessTablePage = (): string =>
  'Service/User/SelectAnswerVoteDefinitions/AccessTablePage';
const ServiceUserSelectAnswerVoteDefinitionsAccessTablePage = lazy(
  () => import('./pages/Service/User/SelectAnswerVoteDefinitions/AccessTablePage'),
);

routes.push({
  path: 'Service/User/SelectAnswerVoteDefinitions/AccessTablePage',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_SELECT_ANSWER_VOTE_DEFINITIONS_ACCESS_TABLE_PAGE_INTERFACE_KEY})`}
      >
        <ServiceUserSelectAnswerVoteDefinitionsAccessTablePage />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_SELECT_ANSWER_VOTE_DEFINITIONS_ACCESS_VIEW_PAGE_INTERFACE_KEY =
  'ServiceUserSelectAnswerVoteDefinitionsAccessViewPageRoute';
export const routeToServiceUserSelectAnswerVoteDefinitionsAccessViewPage = (signedIdentifier: string): string =>
  'Service/User/SelectAnswerVoteDefinitions/AccessViewPage/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserSelectAnswerVoteDefinitionsAccessViewPage = lazy(
  () => import('./pages/Service/User/SelectAnswerVoteDefinitions/AccessViewPage'),
);

routes.push({
  path: 'Service/User/SelectAnswerVoteDefinitions/AccessViewPage/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_SELECT_ANSWER_VOTE_DEFINITIONS_ACCESS_VIEW_PAGE_INTERFACE_KEY})`}
      >
        <ServiceUserSelectAnswerVoteDefinitionsAccessViewPage />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_USER_ISSUES_ACCESS_VIEW_PAGE_INTERFACE_KEY = 'ServiceUserUserIssuesAccessViewPageRoute';
export const routeToServiceUserUserIssuesAccessViewPage = (): string => 'Service/User/UserIssues/AccessViewPage';
const ServiceUserUserIssuesAccessViewPage = lazy(() => import('./pages/Service/User/UserIssues/AccessViewPage'));

routes.push({
  path: 'Service/User/UserIssues/AccessViewPage',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_USER_ISSUES_ACCESS_VIEW_PAGE_INTERFACE_KEY})`}>
        <ServiceUserUserIssuesAccessViewPage />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_USER_VOTE_DEFINITIONS_ACCESS_VIEW_PAGE_INTERFACE_KEY =
  'ServiceUserUserVoteDefinitionsAccessViewPageRoute';
export const routeToServiceUserUserVoteDefinitionsAccessViewPage = (): string =>
  'Service/User/UserVoteDefinitions/AccessViewPage';
const ServiceUserUserVoteDefinitionsAccessViewPage = lazy(
  () => import('./pages/Service/User/UserVoteDefinitions/AccessViewPage'),
);

routes.push({
  path: 'Service/User/UserVoteDefinitions/AccessViewPage',
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
export const ROUTE_SERVICE_USER_VOTE_ENTRIES_ACCESS_TABLE_PAGE_INTERFACE_KEY =
  'ServiceUserVoteEntriesAccessTablePageRoute';
export const routeToServiceUserVoteEntriesAccessTablePage = (): string => 'Service/User/VoteEntries/AccessTablePage';
const ServiceUserVoteEntriesAccessTablePage = lazy(() => import('./pages/Service/User/VoteEntries/AccessTablePage'));

routes.push({
  path: 'Service/User/VoteEntries/AccessTablePage',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_VOTE_ENTRIES_ACCESS_TABLE_PAGE_INTERFACE_KEY})`}>
        <ServiceUserVoteEntriesAccessTablePage />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_YES_NO_ABSTAIN_VOTE_DEFINITIONS_ACCESS_TABLE_PAGE_INTERFACE_KEY =
  'ServiceUserYesNoAbstainVoteDefinitionsAccessTablePageRoute';
export const routeToServiceUserYesNoAbstainVoteDefinitionsAccessTablePage = (): string =>
  'Service/User/YesNoAbstainVoteDefinitions/AccessTablePage';
const ServiceUserYesNoAbstainVoteDefinitionsAccessTablePage = lazy(
  () => import('./pages/Service/User/YesNoAbstainVoteDefinitions/AccessTablePage'),
);

routes.push({
  path: 'Service/User/YesNoAbstainVoteDefinitions/AccessTablePage',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_YES_NO_ABSTAIN_VOTE_DEFINITIONS_ACCESS_TABLE_PAGE_INTERFACE_KEY})`}
      >
        <ServiceUserYesNoAbstainVoteDefinitionsAccessTablePage />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_YES_NO_ABSTAIN_VOTE_DEFINITIONS_ACCESS_VIEW_PAGE_INTERFACE_KEY =
  'ServiceUserYesNoAbstainVoteDefinitionsAccessViewPageRoute';
export const routeToServiceUserYesNoAbstainVoteDefinitionsAccessViewPage = (signedIdentifier: string): string =>
  'Service/User/YesNoAbstainVoteDefinitions/AccessViewPage/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserYesNoAbstainVoteDefinitionsAccessViewPage = lazy(
  () => import('./pages/Service/User/YesNoAbstainVoteDefinitions/AccessViewPage'),
);

routes.push({
  path: 'Service/User/YesNoAbstainVoteDefinitions/AccessViewPage/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_YES_NO_ABSTAIN_VOTE_DEFINITIONS_ACCESS_VIEW_PAGE_INTERFACE_KEY})`}
      >
        <ServiceUserYesNoAbstainVoteDefinitionsAccessViewPage />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_YES_NO_VOTE_DEFINITIONS_ACCESS_TABLE_PAGE_INTERFACE_KEY =
  'ServiceUserYesNoVoteDefinitionsAccessTablePageRoute';
export const routeToServiceUserYesNoVoteDefinitionsAccessTablePage = (): string =>
  'Service/User/YesNoVoteDefinitions/AccessTablePage';
const ServiceUserYesNoVoteDefinitionsAccessTablePage = lazy(
  () => import('./pages/Service/User/YesNoVoteDefinitions/AccessTablePage'),
);

routes.push({
  path: 'Service/User/YesNoVoteDefinitions/AccessTablePage',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_YES_NO_VOTE_DEFINITIONS_ACCESS_TABLE_PAGE_INTERFACE_KEY})`}
      >
        <ServiceUserYesNoVoteDefinitionsAccessTablePage />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_YES_NO_VOTE_DEFINITIONS_ACCESS_VIEW_PAGE_INTERFACE_KEY =
  'ServiceUserYesNoVoteDefinitionsAccessViewPageRoute';
export const routeToServiceUserYesNoVoteDefinitionsAccessViewPage = (signedIdentifier: string): string =>
  'Service/User/YesNoVoteDefinitions/AccessViewPage/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceUserYesNoVoteDefinitionsAccessViewPage = lazy(
  () => import('./pages/Service/User/YesNoVoteDefinitions/AccessViewPage'),
);

routes.push({
  path: 'Service/User/YesNoVoteDefinitions/AccessViewPage/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_YES_NO_VOTE_DEFINITIONS_ACCESS_VIEW_PAGE_INTERFACE_KEY})`}
      >
        <ServiceUserYesNoVoteDefinitionsAccessViewPage />
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
  'Service/UserIssues/ActiveIssuesGlobal/RelationTablePage/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserIssuesActiveIssuesGlobalRelationTablePage = lazy(
  () => import('./pages/Service/UserIssues/ActiveIssuesGlobal/RelationTablePage'),
);

routes.push({
  path: 'Service/UserIssues/ActiveIssuesGlobal/RelationTablePage/:signedIdentifier',
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
  'Service/UserIssues/ActiveIssuesGlobal/RelationViewPage/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserIssuesActiveIssuesGlobalRelationViewPage = lazy(
  () => import('./pages/Service/UserIssues/ActiveIssuesGlobal/RelationViewPage'),
);

routes.push({
  path: 'Service/UserIssues/ActiveIssuesGlobal/RelationViewPage/:signedIdentifier',
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
  'Service/UserIssues/ActiveIssuesInActivityCities/RelationTablePage/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserIssuesActiveIssuesInActivityCitiesRelationTablePage = lazy(
  () => import('./pages/Service/UserIssues/ActiveIssuesInActivityCities/RelationTablePage'),
);

routes.push({
  path: 'Service/UserIssues/ActiveIssuesInActivityCities/RelationTablePage/:signedIdentifier',
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
  'Service/UserIssues/ActiveIssuesInActivityCities/RelationViewPage/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserIssuesActiveIssuesInActivityCitiesRelationViewPage = lazy(
  () => import('./pages/Service/UserIssues/ActiveIssuesInActivityCities/RelationViewPage'),
);

routes.push({
  path: 'Service/UserIssues/ActiveIssuesInActivityCities/RelationViewPage/:signedIdentifier',
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
  'Service/UserIssues/ActiveIssuesInActivityCounties/RelationTablePage/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserIssuesActiveIssuesInActivityCountiesRelationTablePage = lazy(
  () => import('./pages/Service/UserIssues/ActiveIssuesInActivityCounties/RelationTablePage'),
);

routes.push({
  path: 'Service/UserIssues/ActiveIssuesInActivityCounties/RelationTablePage/:signedIdentifier',
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
  'Service/UserIssues/ActiveIssuesInActivityCounties/RelationViewPage/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserIssuesActiveIssuesInActivityCountiesRelationViewPage = lazy(
  () => import('./pages/Service/UserIssues/ActiveIssuesInActivityCounties/RelationViewPage'),
);

routes.push({
  path: 'Service/UserIssues/ActiveIssuesInActivityCounties/RelationViewPage/:signedIdentifier',
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
  'Service/UserIssues/ActiveIssuesInActivityDistricts/RelationTablePage/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserIssuesActiveIssuesInActivityDistrictsRelationTablePage = lazy(
  () => import('./pages/Service/UserIssues/ActiveIssuesInActivityDistricts/RelationTablePage'),
);

routes.push({
  path: 'Service/UserIssues/ActiveIssuesInActivityDistricts/RelationTablePage/:signedIdentifier',
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
  'Service/UserIssues/ActiveIssuesInActivityDistricts/RelationViewPage/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserIssuesActiveIssuesInActivityDistrictsRelationViewPage = lazy(
  () => import('./pages/Service/UserIssues/ActiveIssuesInActivityDistricts/RelationViewPage'),
);

routes.push({
  path: 'Service/UserIssues/ActiveIssuesInActivityDistricts/RelationViewPage/:signedIdentifier',
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
  'Service/UserIssues/ActiveIssuesInResidentCity/RelationTablePage/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserIssuesActiveIssuesInResidentCityRelationTablePage = lazy(
  () => import('./pages/Service/UserIssues/ActiveIssuesInResidentCity/RelationTablePage'),
);

routes.push({
  path: 'Service/UserIssues/ActiveIssuesInResidentCity/RelationTablePage/:signedIdentifier',
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
  'Service/UserIssues/ActiveIssuesInResidentCity/RelationViewPage/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserIssuesActiveIssuesInResidentCityRelationViewPage = lazy(
  () => import('./pages/Service/UserIssues/ActiveIssuesInResidentCity/RelationViewPage'),
);

routes.push({
  path: 'Service/UserIssues/ActiveIssuesInResidentCity/RelationViewPage/:signedIdentifier',
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
  'Service/UserIssues/ActiveIssuesInResidentCounty/RelationTablePage/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserIssuesActiveIssuesInResidentCountyRelationTablePage = lazy(
  () => import('./pages/Service/UserIssues/ActiveIssuesInResidentCounty/RelationTablePage'),
);

routes.push({
  path: 'Service/UserIssues/ActiveIssuesInResidentCounty/RelationTablePage/:signedIdentifier',
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
  'Service/UserIssues/ActiveIssuesInResidentCounty/RelationViewPage/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserIssuesActiveIssuesInResidentCountyRelationViewPage = lazy(
  () => import('./pages/Service/UserIssues/ActiveIssuesInResidentCounty/RelationViewPage'),
);

routes.push({
  path: 'Service/UserIssues/ActiveIssuesInResidentCounty/RelationViewPage/:signedIdentifier',
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
  'Service/UserIssues/ActiveIssuesInResidentDistrict/RelationTablePage/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserIssuesActiveIssuesInResidentDistrictRelationTablePage = lazy(
  () => import('./pages/Service/UserIssues/ActiveIssuesInResidentDistrict/RelationTablePage'),
);

routes.push({
  path: 'Service/UserIssues/ActiveIssuesInResidentDistrict/RelationTablePage/:signedIdentifier',
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
  'Service/UserIssues/ActiveIssuesInResidentDistrict/RelationViewPage/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserIssuesActiveIssuesInResidentDistrictRelationViewPage = lazy(
  () => import('./pages/Service/UserIssues/ActiveIssuesInResidentDistrict/RelationViewPage'),
);

routes.push({
  path: 'Service/UserIssues/ActiveIssuesInResidentDistrict/RelationViewPage/:signedIdentifier',
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
  'Service/UserIssues/OwnedIssues/RelationTablePage/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceUserIssuesOwnedIssuesRelationTablePage = lazy(
  () => import('./pages/Service/UserIssues/OwnedIssues/RelationTablePage'),
);

routes.push({
  path: 'Service/UserIssues/OwnedIssues/RelationTablePage/:signedIdentifier',
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
  'Service/UserIssues/OwnedIssues/RelationViewPage/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceUserIssuesOwnedIssuesRelationViewPage = lazy(
  () => import('./pages/Service/UserIssues/OwnedIssues/RelationViewPage'),
);

routes.push({
  path: 'Service/UserIssues/OwnedIssues/RelationViewPage/:signedIdentifier',
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
  'Service/UserManager/Users/RelationTablePage/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceUserManagerUsersRelationTablePage = lazy(
  () => import('./pages/Service/UserManager/Users/RelationTablePage'),
);

routes.push({
  path: 'Service/UserManager/Users/RelationTablePage/:signedIdentifier',
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
  'Service/UserVoteDefinition/ActiveVoteDefinitionsGlobal/RelationTablePage/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserVoteDefinitionActiveVoteDefinitionsGlobalRelationTablePage = lazy(
  () => import('./pages/Service/UserVoteDefinition/ActiveVoteDefinitionsGlobal/RelationTablePage'),
);

routes.push({
  path: 'Service/UserVoteDefinition/ActiveVoteDefinitionsGlobal/RelationTablePage/:signedIdentifier',
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
  'Service/UserVoteDefinition/ActiveVoteDefinitionsGlobal/RelationViewPage/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserVoteDefinitionActiveVoteDefinitionsGlobalRelationViewPage = lazy(
  () => import('./pages/Service/UserVoteDefinition/ActiveVoteDefinitionsGlobal/RelationViewPage'),
);

routes.push({
  path: 'Service/UserVoteDefinition/ActiveVoteDefinitionsGlobal/RelationViewPage/:signedIdentifier',
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
  'Service/UserVoteDefinition/ActiveVoteDefinitionsInActivityCities/RelationTablePage/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserVoteDefinitionActiveVoteDefinitionsInActivityCitiesRelationTablePage = lazy(
  () => import('./pages/Service/UserVoteDefinition/ActiveVoteDefinitionsInActivityCities/RelationTablePage'),
);

routes.push({
  path: 'Service/UserVoteDefinition/ActiveVoteDefinitionsInActivityCities/RelationTablePage/:signedIdentifier',
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
  'Service/UserVoteDefinition/ActiveVoteDefinitionsInActivityCities/RelationViewPage/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserVoteDefinitionActiveVoteDefinitionsInActivityCitiesRelationViewPage = lazy(
  () => import('./pages/Service/UserVoteDefinition/ActiveVoteDefinitionsInActivityCities/RelationViewPage'),
);

routes.push({
  path: 'Service/UserVoteDefinition/ActiveVoteDefinitionsInActivityCities/RelationViewPage/:signedIdentifier',
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
  'Service/UserVoteDefinition/ActiveVoteDefinitionsInActivityCounties/RelationTablePage/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserVoteDefinitionActiveVoteDefinitionsInActivityCountiesRelationTablePage = lazy(
  () => import('./pages/Service/UserVoteDefinition/ActiveVoteDefinitionsInActivityCounties/RelationTablePage'),
);

routes.push({
  path: 'Service/UserVoteDefinition/ActiveVoteDefinitionsInActivityCounties/RelationTablePage/:signedIdentifier',
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
  'Service/UserVoteDefinition/ActiveVoteDefinitionsInActivityCounties/RelationViewPage/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserVoteDefinitionActiveVoteDefinitionsInActivityCountiesRelationViewPage = lazy(
  () => import('./pages/Service/UserVoteDefinition/ActiveVoteDefinitionsInActivityCounties/RelationViewPage'),
);

routes.push({
  path: 'Service/UserVoteDefinition/ActiveVoteDefinitionsInActivityCounties/RelationViewPage/:signedIdentifier',
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
  'Service/UserVoteDefinition/ActiveVoteDefinitionsInActivityDistricts/RelationTablePage/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserVoteDefinitionActiveVoteDefinitionsInActivityDistrictsRelationTablePage = lazy(
  () => import('./pages/Service/UserVoteDefinition/ActiveVoteDefinitionsInActivityDistricts/RelationTablePage'),
);

routes.push({
  path: 'Service/UserVoteDefinition/ActiveVoteDefinitionsInActivityDistricts/RelationTablePage/:signedIdentifier',
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
  'Service/UserVoteDefinition/ActiveVoteDefinitionsInActivityDistricts/RelationViewPage/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserVoteDefinitionActiveVoteDefinitionsInActivityDistrictsRelationViewPage = lazy(
  () => import('./pages/Service/UserVoteDefinition/ActiveVoteDefinitionsInActivityDistricts/RelationViewPage'),
);

routes.push({
  path: 'Service/UserVoteDefinition/ActiveVoteDefinitionsInActivityDistricts/RelationViewPage/:signedIdentifier',
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
  'Service/UserVoteDefinition/ActiveVoteDefinitionsInResidentCity/RelationTablePage/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserVoteDefinitionActiveVoteDefinitionsInResidentCityRelationTablePage = lazy(
  () => import('./pages/Service/UserVoteDefinition/ActiveVoteDefinitionsInResidentCity/RelationTablePage'),
);

routes.push({
  path: 'Service/UserVoteDefinition/ActiveVoteDefinitionsInResidentCity/RelationTablePage/:signedIdentifier',
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
  'Service/UserVoteDefinition/ActiveVoteDefinitionsInResidentCity/RelationViewPage/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserVoteDefinitionActiveVoteDefinitionsInResidentCityRelationViewPage = lazy(
  () => import('./pages/Service/UserVoteDefinition/ActiveVoteDefinitionsInResidentCity/RelationViewPage'),
);

routes.push({
  path: 'Service/UserVoteDefinition/ActiveVoteDefinitionsInResidentCity/RelationViewPage/:signedIdentifier',
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
  'Service/UserVoteDefinition/ActiveVoteDefinitionsInResidentCounty/RelationTablePage/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserVoteDefinitionActiveVoteDefinitionsInResidentCountyRelationTablePage = lazy(
  () => import('./pages/Service/UserVoteDefinition/ActiveVoteDefinitionsInResidentCounty/RelationTablePage'),
);

routes.push({
  path: 'Service/UserVoteDefinition/ActiveVoteDefinitionsInResidentCounty/RelationTablePage/:signedIdentifier',
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
  'Service/UserVoteDefinition/ActiveVoteDefinitionsInResidentCounty/RelationViewPage/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserVoteDefinitionActiveVoteDefinitionsInResidentCountyRelationViewPage = lazy(
  () => import('./pages/Service/UserVoteDefinition/ActiveVoteDefinitionsInResidentCounty/RelationViewPage'),
);

routes.push({
  path: 'Service/UserVoteDefinition/ActiveVoteDefinitionsInResidentCounty/RelationViewPage/:signedIdentifier',
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
  'Service/UserVoteDefinition/ActiveVoteDefinitionsInResidentDistrict/RelationTablePage/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserVoteDefinitionActiveVoteDefinitionsInResidentDistrictRelationTablePage = lazy(
  () => import('./pages/Service/UserVoteDefinition/ActiveVoteDefinitionsInResidentDistrict/RelationTablePage'),
);

routes.push({
  path: 'Service/UserVoteDefinition/ActiveVoteDefinitionsInResidentDistrict/RelationTablePage/:signedIdentifier',
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
  'Service/UserVoteDefinition/ActiveVoteDefinitionsInResidentDistrict/RelationViewPage/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserVoteDefinitionActiveVoteDefinitionsInResidentDistrictRelationViewPage = lazy(
  () => import('./pages/Service/UserVoteDefinition/ActiveVoteDefinitionsInResidentDistrict/RelationViewPage'),
);

routes.push({
  path: 'Service/UserVoteDefinition/ActiveVoteDefinitionsInResidentDistrict/RelationViewPage/:signedIdentifier',
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
  'Service/UserVoteDefinition/OwnedVoteDefinitions/RelationTablePage/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserVoteDefinitionOwnedVoteDefinitionsRelationTablePage = lazy(
  () => import('./pages/Service/UserVoteDefinition/OwnedVoteDefinitions/RelationTablePage'),
);

routes.push({
  path: 'Service/UserVoteDefinition/OwnedVoteDefinitions/RelationTablePage/:signedIdentifier',
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
  'Service/UserVoteDefinition/OwnedVoteDefinitions/RelationViewPage/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserVoteDefinitionOwnedVoteDefinitionsRelationViewPage = lazy(
  () => import('./pages/Service/UserVoteDefinition/OwnedVoteDefinitions/RelationViewPage'),
);

routes.push({
  path: 'Service/UserVoteDefinition/OwnedVoteDefinitions/RelationViewPage/:signedIdentifier',
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
  'Service/VoteDefinition/Issue/RelationViewPage/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceVoteDefinitionIssueRelationViewPage = lazy(
  () => import('./pages/Service/VoteDefinition/Issue/RelationViewPage'),
);

routes.push({
  path: 'Service/VoteDefinition/Issue/RelationViewPage/:signedIdentifier',
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
  'Service/VoteEntry/VoteDefinition/RelationViewPage/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceVoteEntryVoteDefinitionRelationViewPage = lazy(
  () => import('./pages/Service/VoteEntry/VoteDefinition/RelationViewPage'),
);

routes.push({
  path: 'Service/VoteEntry/VoteDefinition/RelationViewPage/:signedIdentifier',
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
  'Service/YesNoAbstainVoteDefinition/Issue/RelationViewPage/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceYesNoAbstainVoteDefinitionIssueRelationViewPage = lazy(
  () => import('./pages/Service/YesNoAbstainVoteDefinition/Issue/RelationViewPage'),
);

routes.push({
  path: 'Service/YesNoAbstainVoteDefinition/Issue/RelationViewPage/:signedIdentifier',
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
  'Service/YesNoVoteDefinition/Issue/RelationViewPage/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceYesNoVoteDefinitionIssueRelationViewPage = lazy(
  () => import('./pages/Service/YesNoVoteDefinition/Issue/RelationViewPage'),
);

routes.push({
  path: 'Service/YesNoVoteDefinition/Issue/RelationViewPage/:signedIdentifier',
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
