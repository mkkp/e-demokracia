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

export const ROUTE_SERVICE_COMMENT_VOTES_TABLE_INTERFACE_KEY = 'ServiceCommentVotesTableRoute';
export const routeToServiceCommentVotesTable = (signedIdentifier: string): string =>
  'service/comment/votes/table/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceCommentVotesTable = lazy(() => import('./pages/service/comment/votes/table/index'));

routes.push({
  path: 'service/comment/votes/table/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_COMMENT_VOTES_TABLE_INTERFACE_KEY})`}>
        <ServiceCommentVotesTable />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_COMMENT_VOTES_VIEW_INTERFACE_KEY = 'ServiceCommentVotesViewRoute';
export const routeToServiceCommentVotesView = (signedIdentifier: string): string =>
  'service/comment/votes/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceCommentVotesView = lazy(() => import('./pages/service/comment/votes/view/index'));

routes.push({
  path: 'service/comment/votes/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_COMMENT_VOTES_VIEW_INTERFACE_KEY})`}>
        <ServiceCommentVotesView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_CON_COMMENTS_VIEW_INTERFACE_KEY = 'ServiceConCommentsViewRoute';
export const routeToServiceConCommentsView = (signedIdentifier: string): string =>
  'service/con/comments/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceConCommentsView = lazy(() => import('./pages/service/con/comments/view/index'));

routes.push({
  path: 'service/con/comments/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_CON_COMMENTS_VIEW_INTERFACE_KEY})`}>
        <ServiceConCommentsView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_CON_CONS_VIEW_INTERFACE_KEY = 'ServiceConConsViewRoute';
export const routeToServiceConConsView = (signedIdentifier: string): string =>
  'service/con/cons/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceConConsView = lazy(() => import('./pages/service/con/cons/view/index'));

routes.push({
  path: 'service/con/cons/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_CON_CONS_VIEW_INTERFACE_KEY})`}>
        <ServiceConConsView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_CON_PROS_VIEW_INTERFACE_KEY = 'ServiceConProsViewRoute';
export const routeToServiceConProsView = (signedIdentifier: string): string =>
  'service/con/pros/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceConProsView = lazy(() => import('./pages/service/con/pros/view/index'));

routes.push({
  path: 'service/con/pros/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_CON_PROS_VIEW_INTERFACE_KEY})`}>
        <ServiceConProsView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_CON_VOTES_TABLE_INTERFACE_KEY = 'ServiceConVotesTableRoute';
export const routeToServiceConVotesTable = (signedIdentifier: string): string =>
  'service/con/votes/table/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceConVotesTable = lazy(() => import('./pages/service/con/votes/table/index'));

routes.push({
  path: 'service/con/votes/table/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_CON_VOTES_TABLE_INTERFACE_KEY})`}>
        <ServiceConVotesTable />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_CON_VOTES_VIEW_INTERFACE_KEY = 'ServiceConVotesViewRoute';
export const routeToServiceConVotesView = (signedIdentifier: string): string =>
  'service/con/votes/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceConVotesView = lazy(() => import('./pages/service/con/votes/view/index'));

routes.push({
  path: 'service/con/votes/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_CON_VOTES_VIEW_INTERFACE_KEY})`}>
        <ServiceConVotesView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_DASHBOARD_FAVORITE_DEBATES_TABLE_INTERFACE_KEY = 'ServiceDashboardFavoriteDebatesTableRoute';
export const routeToServiceDashboardFavoriteDebatesTable = (signedIdentifier: string): string =>
  'service/dashboard/favorite_debates/table/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceDashboardFavoriteDebatesTable = lazy(
  () => import('./pages/service/dashboard/favorite_debates/table/index'),
);

routes.push({
  path: 'service/dashboard/favorite_debates/table/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_DASHBOARD_FAVORITE_DEBATES_TABLE_INTERFACE_KEY})`}>
        <ServiceDashboardFavoriteDebatesTable />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_DASHBOARD_FAVORITE_DEBATES_VIEW_INTERFACE_KEY = 'ServiceDashboardFavoriteDebatesViewRoute';
export const routeToServiceDashboardFavoriteDebatesView = (signedIdentifier: string): string =>
  'service/dashboard/favorite_debates/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceDashboardFavoriteDebatesView = lazy(() => import('./pages/service/dashboard/favorite_debates/view/index'));

routes.push({
  path: 'service/dashboard/favorite_debates/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_DASHBOARD_FAVORITE_DEBATES_VIEW_INTERFACE_KEY})`}>
        <ServiceDashboardFavoriteDebatesView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_DASHBOARD_FAVORITE_ISSUES_TABLE_INTERFACE_KEY = 'ServiceDashboardFavoriteIssuesTableRoute';
export const routeToServiceDashboardFavoriteIssuesTable = (signedIdentifier: string): string =>
  'service/dashboard/favorite_issues/table/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceDashboardFavoriteIssuesTable = lazy(() => import('./pages/service/dashboard/favorite_issues/table/index'));

routes.push({
  path: 'service/dashboard/favorite_issues/table/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_DASHBOARD_FAVORITE_ISSUES_TABLE_INTERFACE_KEY})`}>
        <ServiceDashboardFavoriteIssuesTable />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_DASHBOARD_FAVORITE_ISSUES_VIEW_INTERFACE_KEY = 'ServiceDashboardFavoriteIssuesViewRoute';
export const routeToServiceDashboardFavoriteIssuesView = (signedIdentifier: string): string =>
  'service/dashboard/favorite_issues/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceDashboardFavoriteIssuesView = lazy(() => import('./pages/service/dashboard/favorite_issues/view/index'));

routes.push({
  path: 'service/dashboard/favorite_issues/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_DASHBOARD_FAVORITE_ISSUES_VIEW_INTERFACE_KEY})`}>
        <ServiceDashboardFavoriteIssuesView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_DASHBOARD_FAVORITE_VOTE_DEFINITIONS_TABLE_INTERFACE_KEY =
  'ServiceDashboardFavoriteVoteDefinitionsTableRoute';
export const routeToServiceDashboardFavoriteVoteDefinitionsTable = (signedIdentifier: string): string =>
  'service/dashboard/favorite_vote_definitions/table/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceDashboardFavoriteVoteDefinitionsTable = lazy(
  () => import('./pages/service/dashboard/favorite_vote_definitions/table/index'),
);

routes.push({
  path: 'service/dashboard/favorite_vote_definitions/table/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_DASHBOARD_FAVORITE_VOTE_DEFINITIONS_TABLE_INTERFACE_KEY})`}
      >
        <ServiceDashboardFavoriteVoteDefinitionsTable />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_DASHBOARD_FAVORITE_VOTE_DEFINITIONS_VIEW_INTERFACE_KEY =
  'ServiceDashboardFavoriteVoteDefinitionsViewRoute';
export const routeToServiceDashboardFavoriteVoteDefinitionsView = (signedIdentifier: string): string =>
  'service/dashboard/favorite_vote_definitions/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceDashboardFavoriteVoteDefinitionsView = lazy(
  () => import('./pages/service/dashboard/favorite_vote_definitions/view/index'),
);

routes.push({
  path: 'service/dashboard/favorite_vote_definitions/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_DASHBOARD_FAVORITE_VOTE_DEFINITIONS_VIEW_INTERFACE_KEY})`}
      >
        <ServiceDashboardFavoriteVoteDefinitionsView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_DASHBOARD_ISSUES_OWNED_TABLE_INTERFACE_KEY = 'ServiceDashboardIssuesOwnedTableRoute';
export const routeToServiceDashboardIssuesOwnedTable = (signedIdentifier: string): string =>
  'service/dashboard/issues_owned/table/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceDashboardIssuesOwnedTable = lazy(() => import('./pages/service/dashboard/issues_owned/table/index'));

routes.push({
  path: 'service/dashboard/issues_owned/table/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_DASHBOARD_ISSUES_OWNED_TABLE_INTERFACE_KEY})`}>
        <ServiceDashboardIssuesOwnedTable />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_DASHBOARD_ISSUES_OWNED_VIEW_INTERFACE_KEY = 'ServiceDashboardIssuesOwnedViewRoute';
export const routeToServiceDashboardIssuesOwnedView = (signedIdentifier: string): string =>
  'service/dashboard/issues_owned/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceDashboardIssuesOwnedView = lazy(() => import('./pages/service/dashboard/issues_owned/view/index'));

routes.push({
  path: 'service/dashboard/issues_owned/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_DASHBOARD_ISSUES_OWNED_VIEW_INTERFACE_KEY})`}>
        <ServiceDashboardIssuesOwnedView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_DASHBOARD_OWNED_DEBATES_TABLE_INTERFACE_KEY = 'ServiceDashboardOwnedDebatesTableRoute';
export const routeToServiceDashboardOwnedDebatesTable = (signedIdentifier: string): string =>
  'service/dashboard/owned_debates/table/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceDashboardOwnedDebatesTable = lazy(() => import('./pages/service/dashboard/owned_debates/table/index'));

routes.push({
  path: 'service/dashboard/owned_debates/table/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_DASHBOARD_OWNED_DEBATES_TABLE_INTERFACE_KEY})`}>
        <ServiceDashboardOwnedDebatesTable />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_DASHBOARD_OWNED_DEBATES_VIEW_INTERFACE_KEY = 'ServiceDashboardOwnedDebatesViewRoute';
export const routeToServiceDashboardOwnedDebatesView = (signedIdentifier: string): string =>
  'service/dashboard/owned_debates/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceDashboardOwnedDebatesView = lazy(() => import('./pages/service/dashboard/owned_debates/view/index'));

routes.push({
  path: 'service/dashboard/owned_debates/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_DASHBOARD_OWNED_DEBATES_VIEW_INTERFACE_KEY})`}>
        <ServiceDashboardOwnedDebatesView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_DASHBOARD_OWNED_VOTE_DEFINITIONS_TABLE_INTERFACE_KEY =
  'ServiceDashboardOwnedVoteDefinitionsTableRoute';
export const routeToServiceDashboardOwnedVoteDefinitionsTable = (signedIdentifier: string): string =>
  'service/dashboard/owned_vote_definitions/table/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceDashboardOwnedVoteDefinitionsTable = lazy(
  () => import('./pages/service/dashboard/owned_vote_definitions/table/index'),
);

routes.push({
  path: 'service/dashboard/owned_vote_definitions/table/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_DASHBOARD_OWNED_VOTE_DEFINITIONS_TABLE_INTERFACE_KEY})`}>
        <ServiceDashboardOwnedVoteDefinitionsTable />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_DASHBOARD_OWNED_VOTE_DEFINITIONS_VIEW_INTERFACE_KEY =
  'ServiceDashboardOwnedVoteDefinitionsViewRoute';
export const routeToServiceDashboardOwnedVoteDefinitionsView = (signedIdentifier: string): string =>
  'service/dashboard/owned_vote_definitions/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceDashboardOwnedVoteDefinitionsView = lazy(
  () => import('./pages/service/dashboard/owned_vote_definitions/view/index'),
);

routes.push({
  path: 'service/dashboard/owned_vote_definitions/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_DASHBOARD_OWNED_VOTE_DEFINITIONS_VIEW_INTERFACE_KEY})`}>
        <ServiceDashboardOwnedVoteDefinitionsView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_DASHBOARD_USER_VOTE_ENTRIES_TABLE_INTERFACE_KEY =
  'ServiceDashboardUserVoteEntriesTableRoute';
export const routeToServiceDashboardUserVoteEntriesTable = (signedIdentifier: string): string =>
  'service/dashboard/user_vote_entries/table/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceDashboardUserVoteEntriesTable = lazy(
  () => import('./pages/service/dashboard/user_vote_entries/table/index'),
);

routes.push({
  path: 'service/dashboard/user_vote_entries/table/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_DASHBOARD_USER_VOTE_ENTRIES_TABLE_INTERFACE_KEY})`}>
        <ServiceDashboardUserVoteEntriesTable />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_DEBATE_CLOSEDEBATE_OUTPUT_INTERFACE_KEY = 'ServiceDebateClosedebateOutputRoute';
export const routeToServiceDebateClosedebateOutput = (signedIdentifier: string): string =>
  'service/debate/closedebate/output/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceDebateClosedebateOutput = lazy(() => import('./pages/service/debate/closedebate/output/index'));

routes.push({
  path: 'service/debate/closedebate/output/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_DEBATE_CLOSEDEBATE_OUTPUT_INTERFACE_KEY})`}>
        <ServiceDebateClosedebateOutput />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_DEBATE_COMMENTS_VIEW_INTERFACE_KEY = 'ServiceDebateCommentsViewRoute';
export const routeToServiceDebateCommentsView = (signedIdentifier: string): string =>
  'service/debate/comments/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceDebateCommentsView = lazy(() => import('./pages/service/debate/comments/view/index'));

routes.push({
  path: 'service/debate/comments/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_DEBATE_COMMENTS_VIEW_INTERFACE_KEY})`}>
        <ServiceDebateCommentsView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_DEBATE_CONS_VIEW_INTERFACE_KEY = 'ServiceDebateConsViewRoute';
export const routeToServiceDebateConsView = (signedIdentifier: string): string =>
  'service/debate/cons/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceDebateConsView = lazy(() => import('./pages/service/debate/cons/view/index'));

routes.push({
  path: 'service/debate/cons/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_DEBATE_CONS_VIEW_INTERFACE_KEY})`}>
        <ServiceDebateConsView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_DEBATE_ISSUE_VIEW_INTERFACE_KEY = 'ServiceDebateIssueViewRoute';
export const routeToServiceDebateIssueView = (signedIdentifier: string): string =>
  'service/debate/issue/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceDebateIssueView = lazy(() => import('./pages/service/debate/issue/view/index'));

routes.push({
  path: 'service/debate/issue/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_DEBATE_ISSUE_VIEW_INTERFACE_KEY})`}>
        <ServiceDebateIssueView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_DEBATE_PROS_VIEW_INTERFACE_KEY = 'ServiceDebateProsViewRoute';
export const routeToServiceDebateProsView = (signedIdentifier: string): string =>
  'service/debate/pros/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceDebateProsView = lazy(() => import('./pages/service/debate/pros/view/index'));

routes.push({
  path: 'service/debate/pros/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_DEBATE_PROS_VIEW_INTERFACE_KEY})`}>
        <ServiceDebateProsView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_DEBATE_RATING_VOTE_DEFINITION_VIEW_INTERFACE_KEY =
  'ServiceDebateRatingVoteDefinitionViewRoute';
export const routeToServiceDebateRatingVoteDefinitionView = (signedIdentifier: string): string =>
  'service/debate/rating_vote_definition/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceDebateRatingVoteDefinitionView = lazy(
  () => import('./pages/service/debate/rating_vote_definition/view/index'),
);

routes.push({
  path: 'service/debate/rating_vote_definition/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_DEBATE_RATING_VOTE_DEFINITION_VIEW_INTERFACE_KEY})`}>
        <ServiceDebateRatingVoteDefinitionView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_DEBATE_SELECT_ANSWER_VOTE_DEFINITION_VIEW_INTERFACE_KEY =
  'ServiceDebateSelectAnswerVoteDefinitionViewRoute';
export const routeToServiceDebateSelectAnswerVoteDefinitionView = (signedIdentifier: string): string =>
  'service/debate/select_answer_vote_definition/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceDebateSelectAnswerVoteDefinitionView = lazy(
  () => import('./pages/service/debate/select_answer_vote_definition/view/index'),
);

routes.push({
  path: 'service/debate/select_answer_vote_definition/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_DEBATE_SELECT_ANSWER_VOTE_DEFINITION_VIEW_INTERFACE_KEY})`}
      >
        <ServiceDebateSelectAnswerVoteDefinitionView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_DEBATE_VOTE_DEFINITION_VIEW_INTERFACE_KEY = 'ServiceDebateVoteDefinitionViewRoute';
export const routeToServiceDebateVoteDefinitionView = (signedIdentifier: string): string =>
  'service/debate/vote_definition/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceDebateVoteDefinitionView = lazy(() => import('./pages/service/debate/vote_definition/view/index'));

routes.push({
  path: 'service/debate/vote_definition/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_DEBATE_VOTE_DEFINITION_VIEW_INTERFACE_KEY})`}>
        <ServiceDebateVoteDefinitionView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_DEBATE_YES_NO_ABSTAIN_VOTE_DEFINITION_VIEW_INTERFACE_KEY =
  'ServiceDebateYesNoAbstainVoteDefinitionViewRoute';
export const routeToServiceDebateYesNoAbstainVoteDefinitionView = (signedIdentifier: string): string =>
  'service/debate/yes_no_abstain_vote_definition/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceDebateYesNoAbstainVoteDefinitionView = lazy(
  () => import('./pages/service/debate/yes_no_abstain_vote_definition/view/index'),
);

routes.push({
  path: 'service/debate/yes_no_abstain_vote_definition/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_DEBATE_YES_NO_ABSTAIN_VOTE_DEFINITION_VIEW_INTERFACE_KEY})`}
      >
        <ServiceDebateYesNoAbstainVoteDefinitionView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_DEBATE_YES_NO_VOTE_DEFINITION_VIEW_INTERFACE_KEY =
  'ServiceDebateYesNoVoteDefinitionViewRoute';
export const routeToServiceDebateYesNoVoteDefinitionView = (signedIdentifier: string): string =>
  'service/debate/yes_no_vote_definition/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceDebateYesNoVoteDefinitionView = lazy(
  () => import('./pages/service/debate/yes_no_vote_definition/view/index'),
);

routes.push({
  path: 'service/debate/yes_no_vote_definition/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_DEBATE_YES_NO_VOTE_DEFINITION_VIEW_INTERFACE_KEY})`}>
        <ServiceDebateYesNoVoteDefinitionView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_ISSUE_COMMENTS_VIEW_INTERFACE_KEY = 'ServiceIssueCommentsViewRoute';
export const routeToServiceIssueCommentsView = (signedIdentifier: string): string =>
  'service/issue/comments/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceIssueCommentsView = lazy(() => import('./pages/service/issue/comments/view/index'));

routes.push({
  path: 'service/issue/comments/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_ISSUE_COMMENTS_VIEW_INTERFACE_KEY})`}>
        <ServiceIssueCommentsView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_ISSUE_CREATEDEBATE_OUTPUT_INTERFACE_KEY = 'ServiceIssueCreatedebateOutputRoute';
export const routeToServiceIssueCreatedebateOutput = (signedIdentifier: string): string =>
  'service/issue/createdebate/output/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceIssueCreatedebateOutput = lazy(() => import('./pages/service/issue/createdebate/output/index'));

routes.push({
  path: 'service/issue/createdebate/output/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_ISSUE_CREATEDEBATE_OUTPUT_INTERFACE_KEY})`}>
        <ServiceIssueCreatedebateOutput />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_PRO_COMMENTS_VIEW_INTERFACE_KEY = 'ServiceProCommentsViewRoute';
export const routeToServiceProCommentsView = (signedIdentifier: string): string =>
  'service/pro/comments/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceProCommentsView = lazy(() => import('./pages/service/pro/comments/view/index'));

routes.push({
  path: 'service/pro/comments/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_PRO_COMMENTS_VIEW_INTERFACE_KEY})`}>
        <ServiceProCommentsView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_PRO_CONS_VIEW_INTERFACE_KEY = 'ServiceProConsViewRoute';
export const routeToServiceProConsView = (signedIdentifier: string): string =>
  'service/pro/cons/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceProConsView = lazy(() => import('./pages/service/pro/cons/view/index'));

routes.push({
  path: 'service/pro/cons/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_PRO_CONS_VIEW_INTERFACE_KEY})`}>
        <ServiceProConsView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_PRO_PROS_VIEW_INTERFACE_KEY = 'ServiceProProsViewRoute';
export const routeToServiceProProsView = (signedIdentifier: string): string =>
  'service/pro/pros/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceProProsView = lazy(() => import('./pages/service/pro/pros/view/index'));

routes.push({
  path: 'service/pro/pros/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_PRO_PROS_VIEW_INTERFACE_KEY})`}>
        <ServiceProProsView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_PRO_VOTES_TABLE_INTERFACE_KEY = 'ServiceProVotesTableRoute';
export const routeToServiceProVotesTable = (signedIdentifier: string): string =>
  'service/pro/votes/table/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceProVotesTable = lazy(() => import('./pages/service/pro/votes/table/index'));

routes.push({
  path: 'service/pro/votes/table/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_PRO_VOTES_TABLE_INTERFACE_KEY})`}>
        <ServiceProVotesTable />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_PRO_VOTES_VIEW_INTERFACE_KEY = 'ServiceProVotesViewRoute';
export const routeToServiceProVotesView = (signedIdentifier: string): string =>
  'service/pro/votes/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceProVotesView = lazy(() => import('./pages/service/pro/votes/view/index'));

routes.push({
  path: 'service/pro/votes/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_PRO_VOTES_VIEW_INTERFACE_KEY})`}>
        <ServiceProVotesView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_RATING_VOTE_DEFINITION_DEBATE_VIEW_INTERFACE_KEY =
  'ServiceRatingVoteDefinitionDebateViewRoute';
export const routeToServiceRatingVoteDefinitionDebateView = (signedIdentifier: string): string =>
  'service/rating_vote_definition/debate/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceRatingVoteDefinitionDebateView = lazy(
  () => import('./pages/service/rating_vote_definition/debate/view/index'),
);

routes.push({
  path: 'service/rating_vote_definition/debate/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_RATING_VOTE_DEFINITION_DEBATE_VIEW_INTERFACE_KEY})`}>
        <ServiceRatingVoteDefinitionDebateView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_RATING_VOTE_DEFINITION_ISSUE_VIEW_INTERFACE_KEY =
  'ServiceRatingVoteDefinitionIssueViewRoute';
export const routeToServiceRatingVoteDefinitionIssueView = (signedIdentifier: string): string =>
  'service/rating_vote_definition/issue/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceRatingVoteDefinitionIssueView = lazy(
  () => import('./pages/service/rating_vote_definition/issue/view/index'),
);

routes.push({
  path: 'service/rating_vote_definition/issue/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_RATING_VOTE_DEFINITION_ISSUE_VIEW_INTERFACE_KEY})`}>
        <ServiceRatingVoteDefinitionIssueView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_SELECT_ANSWER_VOTE_DEFINITION_DEBATE_VIEW_INTERFACE_KEY =
  'ServiceSelectAnswerVoteDefinitionDebateViewRoute';
export const routeToServiceSelectAnswerVoteDefinitionDebateView = (signedIdentifier: string): string =>
  'service/select_answer_vote_definition/debate/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceSelectAnswerVoteDefinitionDebateView = lazy(
  () => import('./pages/service/select_answer_vote_definition/debate/view/index'),
);

routes.push({
  path: 'service/select_answer_vote_definition/debate/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_SELECT_ANSWER_VOTE_DEFINITION_DEBATE_VIEW_INTERFACE_KEY})`}
      >
        <ServiceSelectAnswerVoteDefinitionDebateView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_SELECT_ANSWER_VOTE_DEFINITION_ISSUE_VIEW_INTERFACE_KEY =
  'ServiceSelectAnswerVoteDefinitionIssueViewRoute';
export const routeToServiceSelectAnswerVoteDefinitionIssueView = (signedIdentifier: string): string =>
  'service/select_answer_vote_definition/issue/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceSelectAnswerVoteDefinitionIssueView = lazy(
  () => import('./pages/service/select_answer_vote_definition/issue/view/index'),
);

routes.push({
  path: 'service/select_answer_vote_definition/issue/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_SELECT_ANSWER_VOTE_DEFINITION_ISSUE_VIEW_INTERFACE_KEY})`}
      >
        <ServiceSelectAnswerVoteDefinitionIssueView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_SERVICE_USER_VOTES_TABLE_INTERFACE_KEY = 'ServiceServiceUserVotesTableRoute';
export const routeToServiceServiceUserVotesTable = (signedIdentifier: string): string =>
  'service/service_user/votes/table/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceServiceUserVotesTable = lazy(() => import('./pages/service/service_user/votes/table/index'));

routes.push({
  path: 'service/service_user/votes/table/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_SERVICE_USER_VOTES_TABLE_INTERFACE_KEY})`}>
        <ServiceServiceUserVotesTable />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_SERVICE_USER_VOTES_VIEW_INTERFACE_KEY = 'ServiceServiceUserVotesViewRoute';
export const routeToServiceServiceUserVotesView = (signedIdentifier: string): string =>
  'service/service_user/votes/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceServiceUserVotesView = lazy(() => import('./pages/service/service_user/votes/view/index'));

routes.push({
  path: 'service/service_user/votes/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_SERVICE_USER_VOTES_VIEW_INTERFACE_KEY})`}>
        <ServiceServiceUserVotesView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_ACTIVE_ISSUES_TABLE_INTERFACE_KEY = 'ServiceUserActiveIssuesTableRoute';
export const routeToServiceUserActiveIssuesTable = (): string => 'service/user/active_issues/table';
const ServiceUserActiveIssuesTable = lazy(() => import('./pages/service/user/active_issues/table/index'));

routes.push({
  path: 'service/user/active_issues/table',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_ACTIVE_ISSUES_TABLE_INTERFACE_KEY})`}>
        <ServiceUserActiveIssuesTable />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_ACTIVE_ISSUES_VIEW_INTERFACE_KEY = 'ServiceUserActiveIssuesViewRoute';
export const routeToServiceUserActiveIssuesView = (signedIdentifier: string): string =>
  'service/user/active_issues/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceUserActiveIssuesView = lazy(() => import('./pages/service/user/active_issues/view/index'));

routes.push({
  path: 'service/user/active_issues/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_ACTIVE_ISSUES_VIEW_INTERFACE_KEY})`}>
        <ServiceUserActiveIssuesView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_ADMIN_CATEGORIES_TABLE_INTERFACE_KEY = 'ServiceUserAdminCategoriesTableRoute';
export const routeToServiceUserAdminCategoriesTable = (): string => 'service/user/admin_categories/table';
const ServiceUserAdminCategoriesTable = lazy(() => import('./pages/service/user/admin_categories/table/index'));

routes.push({
  path: 'service/user/admin_categories/table',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_ADMIN_CATEGORIES_TABLE_INTERFACE_KEY})`}>
        <ServiceUserAdminCategoriesTable />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_ADMIN_COUNTIES_TABLE_INTERFACE_KEY = 'ServiceUserAdminCountiesTableRoute';
export const routeToServiceUserAdminCountiesTable = (): string => 'service/user/admin_counties/table';
const ServiceUserAdminCountiesTable = lazy(() => import('./pages/service/user/admin_counties/table/index'));

routes.push({
  path: 'service/user/admin_counties/table',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_ADMIN_COUNTIES_TABLE_INTERFACE_KEY})`}>
        <ServiceUserAdminCountiesTable />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_ADMIN_DEBATES_TABLE_INTERFACE_KEY = 'ServiceUserAdminDebatesTableRoute';
export const routeToServiceUserAdminDebatesTable = (): string => 'service/user/admin_debates/table';
const ServiceUserAdminDebatesTable = lazy(() => import('./pages/service/user/admin_debates/table/index'));

routes.push({
  path: 'service/user/admin_debates/table',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_ADMIN_DEBATES_TABLE_INTERFACE_KEY})`}>
        <ServiceUserAdminDebatesTable />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_ADMIN_DEBATES_VIEW_INTERFACE_KEY = 'ServiceUserAdminDebatesViewRoute';
export const routeToServiceUserAdminDebatesView = (signedIdentifier: string): string =>
  'service/user/admin_debates/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceUserAdminDebatesView = lazy(() => import('./pages/service/user/admin_debates/view/index'));

routes.push({
  path: 'service/user/admin_debates/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_ADMIN_DEBATES_VIEW_INTERFACE_KEY})`}>
        <ServiceUserAdminDebatesView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_ADMIN_ISSUE_TYPES_TABLE_INTERFACE_KEY = 'ServiceUserAdminIssueTypesTableRoute';
export const routeToServiceUserAdminIssueTypesTable = (): string => 'service/user/admin_issue_types/table';
const ServiceUserAdminIssueTypesTable = lazy(() => import('./pages/service/user/admin_issue_types/table/index'));

routes.push({
  path: 'service/user/admin_issue_types/table',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_ADMIN_ISSUE_TYPES_TABLE_INTERFACE_KEY})`}>
        <ServiceUserAdminIssueTypesTable />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_ADMIN_ISSUES_TABLE_INTERFACE_KEY = 'ServiceUserAdminIssuesTableRoute';
export const routeToServiceUserAdminIssuesTable = (): string => 'service/user/admin_issues/table';
const ServiceUserAdminIssuesTable = lazy(() => import('./pages/service/user/admin_issues/table/index'));

routes.push({
  path: 'service/user/admin_issues/table',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_ADMIN_ISSUES_TABLE_INTERFACE_KEY})`}>
        <ServiceUserAdminIssuesTable />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_ADMIN_ISSUES_VIEW_INTERFACE_KEY = 'ServiceUserAdminIssuesViewRoute';
export const routeToServiceUserAdminIssuesView = (signedIdentifier: string): string =>
  'service/user/admin_issues/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceUserAdminIssuesView = lazy(() => import('./pages/service/user/admin_issues/view/index'));

routes.push({
  path: 'service/user/admin_issues/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_ADMIN_ISSUES_VIEW_INTERFACE_KEY})`}>
        <ServiceUserAdminIssuesView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_ADMIN_USER_MANAGER_VIEW_INTERFACE_KEY = 'ServiceUserAdminUserManagerViewRoute';
export const routeToServiceUserAdminUserManagerView = (signedIdentifier: string): string =>
  'service/user/admin_user_manager/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceUserAdminUserManagerView = lazy(() => import('./pages/service/user/admin_user_manager/view/index'));

routes.push({
  path: 'service/user/admin_user_manager/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_ADMIN_USER_MANAGER_VIEW_INTERFACE_KEY})`}>
        <ServiceUserAdminUserManagerView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_ADMIN_USERS_TABLE_INTERFACE_KEY = 'ServiceUserAdminUsersTableRoute';
export const routeToServiceUserAdminUsersTable = (): string => 'service/user/admin_users/table';
const ServiceUserAdminUsersTable = lazy(() => import('./pages/service/user/admin_users/table/index'));

routes.push({
  path: 'service/user/admin_users/table',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_ADMIN_USERS_TABLE_INTERFACE_KEY})`}>
        <ServiceUserAdminUsersTable />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_ADMIN_VOTE_DEFINITIONS_TABLE_INTERFACE_KEY =
  'ServiceUserAdminVoteDefinitionsTableRoute';
export const routeToServiceUserAdminVoteDefinitionsTable = (): string => 'service/user/admin_vote_definitions/table';
const ServiceUserAdminVoteDefinitionsTable = lazy(
  () => import('./pages/service/user/admin_vote_definitions/table/index'),
);

routes.push({
  path: 'service/user/admin_vote_definitions/table',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_ADMIN_VOTE_DEFINITIONS_TABLE_INTERFACE_KEY})`}>
        <ServiceUserAdminVoteDefinitionsTable />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_ADMIN_VOTE_DEFINITIONS_VIEW_INTERFACE_KEY = 'ServiceUserAdminVoteDefinitionsViewRoute';
export const routeToServiceUserAdminVoteDefinitionsView = (signedIdentifier: string): string =>
  'service/user/admin_vote_definitions/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceUserAdminVoteDefinitionsView = lazy(
  () => import('./pages/service/user/admin_vote_definitions/view/index'),
);

routes.push({
  path: 'service/user/admin_vote_definitions/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_ADMIN_VOTE_DEFINITIONS_VIEW_INTERFACE_KEY})`}>
        <ServiceUserAdminVoteDefinitionsView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_ADMIN_VOTE_ENTRIES_TABLE_INTERFACE_KEY = 'ServiceUserAdminVoteEntriesTableRoute';
export const routeToServiceUserAdminVoteEntriesTable = (): string => 'service/user/admin_vote_entries/table';
const ServiceUserAdminVoteEntriesTable = lazy(() => import('./pages/service/user/admin_vote_entries/table/index'));

routes.push({
  path: 'service/user/admin_vote_entries/table',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_ADMIN_VOTE_ENTRIES_TABLE_INTERFACE_KEY})`}>
        <ServiceUserAdminVoteEntriesTable />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_DASHBOARD_INTERFACE_KEY = 'DashboardRoute';
export const routeToDashboard = (): string => '';
const DashboardRoute = lazy(() => import('./pages/service/user/dashboard_home/index'));

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
export const ROUTE_SERVICE_USER_DASHBOARD_HOME_VIEW_INTERFACE_KEY = 'ServiceUserDashboardHomeViewRoute';
export const routeToServiceUserDashboardHomeView = (signedIdentifier: string): string =>
  'service/user/dashboard_home/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceUserDashboardHomeView = lazy(() => import('./pages/service/user/dashboard_home/view/index'));

routes.push({
  path: 'service/user/dashboard_home/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_DASHBOARD_HOME_VIEW_INTERFACE_KEY})`}>
        <ServiceUserDashboardHomeView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_USER_CREATED_ISSUES_TABLE_INTERFACE_KEY = 'ServiceUserUserCreatedIssuesTableRoute';
export const routeToServiceUserUserCreatedIssuesTable = (): string => 'service/user/user_created_issues/table';
const ServiceUserUserCreatedIssuesTable = lazy(() => import('./pages/service/user/user_created_issues/table/index'));

routes.push({
  path: 'service/user/user_created_issues/table',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_USER_CREATED_ISSUES_TABLE_INTERFACE_KEY})`}>
        <ServiceUserUserCreatedIssuesTable />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_USER_CREATED_ISSUES_VIEW_INTERFACE_KEY = 'ServiceUserUserCreatedIssuesViewRoute';
export const routeToServiceUserUserCreatedIssuesView = (signedIdentifier: string): string =>
  'service/user/user_created_issues/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceUserUserCreatedIssuesView = lazy(() => import('./pages/service/user/user_created_issues/view/index'));

routes.push({
  path: 'service/user/user_created_issues/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_USER_CREATED_ISSUES_VIEW_INTERFACE_KEY})`}>
        <ServiceUserUserCreatedIssuesView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_USER_DEBATES_VIEW_INTERFACE_KEY = 'ServiceUserUserDebatesViewRoute';
export const routeToServiceUserUserDebatesView = (signedIdentifier: string): string =>
  'service/user/user_debates/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceUserUserDebatesView = lazy(() => import('./pages/service/user/user_debates/view/index'));

routes.push({
  path: 'service/user/user_debates/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_USER_DEBATES_VIEW_INTERFACE_KEY})`}>
        <ServiceUserUserDebatesView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_USER_ISSUES_VIEW_INTERFACE_KEY = 'ServiceUserUserIssuesViewRoute';
export const routeToServiceUserUserIssuesView = (signedIdentifier: string): string =>
  'service/user/user_issues/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceUserUserIssuesView = lazy(() => import('./pages/service/user/user_issues/view/index'));

routes.push({
  path: 'service/user/user_issues/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_USER_ISSUES_VIEW_INTERFACE_KEY})`}>
        <ServiceUserUserIssuesView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_USER_OWNED_ACTIVE_ISSUES_TABLE_INTERFACE_KEY =
  'ServiceUserUserOwnedActiveIssuesTableRoute';
export const routeToServiceUserUserOwnedActiveIssuesTable = (): string => 'service/user/user_owned_active_issues/table';
const ServiceUserUserOwnedActiveIssuesTable = lazy(
  () => import('./pages/service/user/user_owned_active_issues/table/index'),
);

routes.push({
  path: 'service/user/user_owned_active_issues/table',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_USER_OWNED_ACTIVE_ISSUES_TABLE_INTERFACE_KEY})`}>
        <ServiceUserUserOwnedActiveIssuesTable />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_USER_OWNED_ACTIVE_ISSUES_VIEW_INTERFACE_KEY =
  'ServiceUserUserOwnedActiveIssuesViewRoute';
export const routeToServiceUserUserOwnedActiveIssuesView = (signedIdentifier: string): string =>
  'service/user/user_owned_active_issues/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceUserUserOwnedActiveIssuesView = lazy(
  () => import('./pages/service/user/user_owned_active_issues/view/index'),
);

routes.push({
  path: 'service/user/user_owned_active_issues/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_USER_OWNED_ACTIVE_ISSUES_VIEW_INTERFACE_KEY})`}>
        <ServiceUserUserOwnedActiveIssuesView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_USER_OWNED_RATING_VOTE_DEFINITIONS_TABLE_INTERFACE_KEY =
  'ServiceUserUserOwnedRatingVoteDefinitionsTableRoute';
export const routeToServiceUserUserOwnedRatingVoteDefinitionsTable = (): string =>
  'service/user/user_owned_rating_vote_definitions/table';
const ServiceUserUserOwnedRatingVoteDefinitionsTable = lazy(
  () => import('./pages/service/user/user_owned_rating_vote_definitions/table/index'),
);

routes.push({
  path: 'service/user/user_owned_rating_vote_definitions/table',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_USER_OWNED_RATING_VOTE_DEFINITIONS_TABLE_INTERFACE_KEY})`}
      >
        <ServiceUserUserOwnedRatingVoteDefinitionsTable />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_USER_OWNED_RATING_VOTE_DEFINITIONS_VIEW_INTERFACE_KEY =
  'ServiceUserUserOwnedRatingVoteDefinitionsViewRoute';
export const routeToServiceUserUserOwnedRatingVoteDefinitionsView = (signedIdentifier: string): string =>
  'service/user/user_owned_rating_vote_definitions/view/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserUserOwnedRatingVoteDefinitionsView = lazy(
  () => import('./pages/service/user/user_owned_rating_vote_definitions/view/index'),
);

routes.push({
  path: 'service/user/user_owned_rating_vote_definitions/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_USER_OWNED_RATING_VOTE_DEFINITIONS_VIEW_INTERFACE_KEY})`}
      >
        <ServiceUserUserOwnedRatingVoteDefinitionsView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_USER_OWNED_SELECT_ANSWER_VOTE_DEFINITIONS_TABLE_INTERFACE_KEY =
  'ServiceUserUserOwnedSelectAnswerVoteDefinitionsTableRoute';
export const routeToServiceUserUserOwnedSelectAnswerVoteDefinitionsTable = (): string =>
  'service/user/user_owned_select_answer_vote_definitions/table';
const ServiceUserUserOwnedSelectAnswerVoteDefinitionsTable = lazy(
  () => import('./pages/service/user/user_owned_select_answer_vote_definitions/table/index'),
);

routes.push({
  path: 'service/user/user_owned_select_answer_vote_definitions/table',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_USER_OWNED_SELECT_ANSWER_VOTE_DEFINITIONS_TABLE_INTERFACE_KEY})`}
      >
        <ServiceUserUserOwnedSelectAnswerVoteDefinitionsTable />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_USER_OWNED_SELECT_ANSWER_VOTE_DEFINITIONS_VIEW_INTERFACE_KEY =
  'ServiceUserUserOwnedSelectAnswerVoteDefinitionsViewRoute';
export const routeToServiceUserUserOwnedSelectAnswerVoteDefinitionsView = (signedIdentifier: string): string =>
  'service/user/user_owned_select_answer_vote_definitions/view/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserUserOwnedSelectAnswerVoteDefinitionsView = lazy(
  () => import('./pages/service/user/user_owned_select_answer_vote_definitions/view/index'),
);

routes.push({
  path: 'service/user/user_owned_select_answer_vote_definitions/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_USER_OWNED_SELECT_ANSWER_VOTE_DEFINITIONS_VIEW_INTERFACE_KEY})`}
      >
        <ServiceUserUserOwnedSelectAnswerVoteDefinitionsView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_USER_OWNED_VOTE_ENTRIES_TABLE_INTERFACE_KEY =
  'ServiceUserUserOwnedVoteEntriesTableRoute';
export const routeToServiceUserUserOwnedVoteEntriesTable = (): string => 'service/user/user_owned_vote_entries/table';
const ServiceUserUserOwnedVoteEntriesTable = lazy(
  () => import('./pages/service/user/user_owned_vote_entries/table/index'),
);

routes.push({
  path: 'service/user/user_owned_vote_entries/table',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_USER_OWNED_VOTE_ENTRIES_TABLE_INTERFACE_KEY})`}>
        <ServiceUserUserOwnedVoteEntriesTable />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_USER_OWNED_YES_NO_ABSTAIN_VOTE_DEFINITIONS_TABLE_INTERFACE_KEY =
  'ServiceUserUserOwnedYesNoAbstainVoteDefinitionsTableRoute';
export const routeToServiceUserUserOwnedYesNoAbstainVoteDefinitionsTable = (): string =>
  'service/user/user_owned_yes_no_abstain_vote_definitions/table';
const ServiceUserUserOwnedYesNoAbstainVoteDefinitionsTable = lazy(
  () => import('./pages/service/user/user_owned_yes_no_abstain_vote_definitions/table/index'),
);

routes.push({
  path: 'service/user/user_owned_yes_no_abstain_vote_definitions/table',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_USER_OWNED_YES_NO_ABSTAIN_VOTE_DEFINITIONS_TABLE_INTERFACE_KEY})`}
      >
        <ServiceUserUserOwnedYesNoAbstainVoteDefinitionsTable />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_USER_OWNED_YES_NO_ABSTAIN_VOTE_DEFINITIONS_VIEW_INTERFACE_KEY =
  'ServiceUserUserOwnedYesNoAbstainVoteDefinitionsViewRoute';
export const routeToServiceUserUserOwnedYesNoAbstainVoteDefinitionsView = (signedIdentifier: string): string =>
  'service/user/user_owned_yes_no_abstain_vote_definitions/view/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserUserOwnedYesNoAbstainVoteDefinitionsView = lazy(
  () => import('./pages/service/user/user_owned_yes_no_abstain_vote_definitions/view/index'),
);

routes.push({
  path: 'service/user/user_owned_yes_no_abstain_vote_definitions/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_USER_OWNED_YES_NO_ABSTAIN_VOTE_DEFINITIONS_VIEW_INTERFACE_KEY})`}
      >
        <ServiceUserUserOwnedYesNoAbstainVoteDefinitionsView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_USER_OWNED_YES_NO_VOTE_DEFINITIONS_TABLE_INTERFACE_KEY =
  'ServiceUserUserOwnedYesNoVoteDefinitionsTableRoute';
export const routeToServiceUserUserOwnedYesNoVoteDefinitionsTable = (): string =>
  'service/user/user_owned_yes_no_vote_definitions/table';
const ServiceUserUserOwnedYesNoVoteDefinitionsTable = lazy(
  () => import('./pages/service/user/user_owned_yes_no_vote_definitions/table/index'),
);

routes.push({
  path: 'service/user/user_owned_yes_no_vote_definitions/table',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_USER_OWNED_YES_NO_VOTE_DEFINITIONS_TABLE_INTERFACE_KEY})`}
      >
        <ServiceUserUserOwnedYesNoVoteDefinitionsTable />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_USER_OWNED_YES_NO_VOTE_DEFINITIONS_VIEW_INTERFACE_KEY =
  'ServiceUserUserOwnedYesNoVoteDefinitionsViewRoute';
export const routeToServiceUserUserOwnedYesNoVoteDefinitionsView = (signedIdentifier: string): string =>
  'service/user/user_owned_yes_no_vote_definitions/view/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserUserOwnedYesNoVoteDefinitionsView = lazy(
  () => import('./pages/service/user/user_owned_yes_no_vote_definitions/view/index'),
);

routes.push({
  path: 'service/user/user_owned_yes_no_vote_definitions/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_USER_OWNED_YES_NO_VOTE_DEFINITIONS_VIEW_INTERFACE_KEY})`}
      >
        <ServiceUserUserOwnedYesNoVoteDefinitionsView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_USER_VOTE_DEFINITIONS_VIEW_INTERFACE_KEY = 'ServiceUserUserVoteDefinitionsViewRoute';
export const routeToServiceUserUserVoteDefinitionsView = (signedIdentifier: string): string =>
  'service/user/user_vote_definitions/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceUserUserVoteDefinitionsView = lazy(() => import('./pages/service/user/user_vote_definitions/view/index'));

routes.push({
  path: 'service/user/user_vote_definitions/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_USER_VOTE_DEFINITIONS_VIEW_INTERFACE_KEY})`}>
        <ServiceUserUserVoteDefinitionsView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_DEBATES_ACTIVE_DEBATES_GLOBAL_TABLE_INTERFACE_KEY =
  'ServiceUserDebatesActiveDebatesGlobalTableRoute';
export const routeToServiceUserDebatesActiveDebatesGlobalTable = (signedIdentifier: string): string =>
  'service/user_debates/active_debates_global/table/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceUserDebatesActiveDebatesGlobalTable = lazy(
  () => import('./pages/service/user_debates/active_debates_global/table/index'),
);

routes.push({
  path: 'service/user_debates/active_debates_global/table/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_DEBATES_ACTIVE_DEBATES_GLOBAL_TABLE_INTERFACE_KEY})`}
      >
        <ServiceUserDebatesActiveDebatesGlobalTable />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_DEBATES_ACTIVE_DEBATES_GLOBAL_VIEW_INTERFACE_KEY =
  'ServiceUserDebatesActiveDebatesGlobalViewRoute';
export const routeToServiceUserDebatesActiveDebatesGlobalView = (signedIdentifier: string): string =>
  'service/user_debates/active_debates_global/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceUserDebatesActiveDebatesGlobalView = lazy(
  () => import('./pages/service/user_debates/active_debates_global/view/index'),
);

routes.push({
  path: 'service/user_debates/active_debates_global/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_DEBATES_ACTIVE_DEBATES_GLOBAL_VIEW_INTERFACE_KEY})`}
      >
        <ServiceUserDebatesActiveDebatesGlobalView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_DEBATES_ACTIVE_DEBATES_IN_ACTIVITY_CITIES_TABLE_INTERFACE_KEY =
  'ServiceUserDebatesActiveDebatesInActivityCitiesTableRoute';
export const routeToServiceUserDebatesActiveDebatesInActivityCitiesTable = (signedIdentifier: string): string =>
  'service/user_debates/active_debates_in_activity_cities/table/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserDebatesActiveDebatesInActivityCitiesTable = lazy(
  () => import('./pages/service/user_debates/active_debates_in_activity_cities/table/index'),
);

routes.push({
  path: 'service/user_debates/active_debates_in_activity_cities/table/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_DEBATES_ACTIVE_DEBATES_IN_ACTIVITY_CITIES_TABLE_INTERFACE_KEY})`}
      >
        <ServiceUserDebatesActiveDebatesInActivityCitiesTable />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_DEBATES_ACTIVE_DEBATES_IN_ACTIVITY_CITIES_VIEW_INTERFACE_KEY =
  'ServiceUserDebatesActiveDebatesInActivityCitiesViewRoute';
export const routeToServiceUserDebatesActiveDebatesInActivityCitiesView = (signedIdentifier: string): string =>
  'service/user_debates/active_debates_in_activity_cities/view/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserDebatesActiveDebatesInActivityCitiesView = lazy(
  () => import('./pages/service/user_debates/active_debates_in_activity_cities/view/index'),
);

routes.push({
  path: 'service/user_debates/active_debates_in_activity_cities/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_DEBATES_ACTIVE_DEBATES_IN_ACTIVITY_CITIES_VIEW_INTERFACE_KEY})`}
      >
        <ServiceUserDebatesActiveDebatesInActivityCitiesView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_DEBATES_ACTIVE_DEBATES_IN_ACTIVITY_COUNTIES_TABLE_INTERFACE_KEY =
  'ServiceUserDebatesActiveDebatesInActivityCountiesTableRoute';
export const routeToServiceUserDebatesActiveDebatesInActivityCountiesTable = (signedIdentifier: string): string =>
  'service/user_debates/active_debates_in_activity_counties/table/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserDebatesActiveDebatesInActivityCountiesTable = lazy(
  () => import('./pages/service/user_debates/active_debates_in_activity_counties/table/index'),
);

routes.push({
  path: 'service/user_debates/active_debates_in_activity_counties/table/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_DEBATES_ACTIVE_DEBATES_IN_ACTIVITY_COUNTIES_TABLE_INTERFACE_KEY})`}
      >
        <ServiceUserDebatesActiveDebatesInActivityCountiesTable />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_DEBATES_ACTIVE_DEBATES_IN_ACTIVITY_COUNTIES_VIEW_INTERFACE_KEY =
  'ServiceUserDebatesActiveDebatesInActivityCountiesViewRoute';
export const routeToServiceUserDebatesActiveDebatesInActivityCountiesView = (signedIdentifier: string): string =>
  'service/user_debates/active_debates_in_activity_counties/view/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserDebatesActiveDebatesInActivityCountiesView = lazy(
  () => import('./pages/service/user_debates/active_debates_in_activity_counties/view/index'),
);

routes.push({
  path: 'service/user_debates/active_debates_in_activity_counties/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_DEBATES_ACTIVE_DEBATES_IN_ACTIVITY_COUNTIES_VIEW_INTERFACE_KEY})`}
      >
        <ServiceUserDebatesActiveDebatesInActivityCountiesView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_DEBATES_ACTIVE_DEBATES_IN_ACTIVITY_DISTRICTS_TABLE_INTERFACE_KEY =
  'ServiceUserDebatesActiveDebatesInActivityDistrictsTableRoute';
export const routeToServiceUserDebatesActiveDebatesInActivityDistrictsTable = (signedIdentifier: string): string =>
  'service/user_debates/active_debates_in_activity_districts/table/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserDebatesActiveDebatesInActivityDistrictsTable = lazy(
  () => import('./pages/service/user_debates/active_debates_in_activity_districts/table/index'),
);

routes.push({
  path: 'service/user_debates/active_debates_in_activity_districts/table/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_DEBATES_ACTIVE_DEBATES_IN_ACTIVITY_DISTRICTS_TABLE_INTERFACE_KEY})`}
      >
        <ServiceUserDebatesActiveDebatesInActivityDistrictsTable />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_DEBATES_ACTIVE_DEBATES_IN_ACTIVITY_DISTRICTS_VIEW_INTERFACE_KEY =
  'ServiceUserDebatesActiveDebatesInActivityDistrictsViewRoute';
export const routeToServiceUserDebatesActiveDebatesInActivityDistrictsView = (signedIdentifier: string): string =>
  'service/user_debates/active_debates_in_activity_districts/view/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserDebatesActiveDebatesInActivityDistrictsView = lazy(
  () => import('./pages/service/user_debates/active_debates_in_activity_districts/view/index'),
);

routes.push({
  path: 'service/user_debates/active_debates_in_activity_districts/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_DEBATES_ACTIVE_DEBATES_IN_ACTIVITY_DISTRICTS_VIEW_INTERFACE_KEY})`}
      >
        <ServiceUserDebatesActiveDebatesInActivityDistrictsView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_DEBATES_ACTIVE_DEBATES_IN_RESIDENT_CITY_TABLE_INTERFACE_KEY =
  'ServiceUserDebatesActiveDebatesInResidentCityTableRoute';
export const routeToServiceUserDebatesActiveDebatesInResidentCityTable = (signedIdentifier: string): string =>
  'service/user_debates/active_debates_in_resident_city/table/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserDebatesActiveDebatesInResidentCityTable = lazy(
  () => import('./pages/service/user_debates/active_debates_in_resident_city/table/index'),
);

routes.push({
  path: 'service/user_debates/active_debates_in_resident_city/table/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_DEBATES_ACTIVE_DEBATES_IN_RESIDENT_CITY_TABLE_INTERFACE_KEY})`}
      >
        <ServiceUserDebatesActiveDebatesInResidentCityTable />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_DEBATES_ACTIVE_DEBATES_IN_RESIDENT_CITY_VIEW_INTERFACE_KEY =
  'ServiceUserDebatesActiveDebatesInResidentCityViewRoute';
export const routeToServiceUserDebatesActiveDebatesInResidentCityView = (signedIdentifier: string): string =>
  'service/user_debates/active_debates_in_resident_city/view/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserDebatesActiveDebatesInResidentCityView = lazy(
  () => import('./pages/service/user_debates/active_debates_in_resident_city/view/index'),
);

routes.push({
  path: 'service/user_debates/active_debates_in_resident_city/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_DEBATES_ACTIVE_DEBATES_IN_RESIDENT_CITY_VIEW_INTERFACE_KEY})`}
      >
        <ServiceUserDebatesActiveDebatesInResidentCityView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_DEBATES_ACTIVE_DEBATES_IN_RESIDENT_COUNTY_TABLE_INTERFACE_KEY =
  'ServiceUserDebatesActiveDebatesInResidentCountyTableRoute';
export const routeToServiceUserDebatesActiveDebatesInResidentCountyTable = (signedIdentifier: string): string =>
  'service/user_debates/active_debates_in_resident_county/table/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserDebatesActiveDebatesInResidentCountyTable = lazy(
  () => import('./pages/service/user_debates/active_debates_in_resident_county/table/index'),
);

routes.push({
  path: 'service/user_debates/active_debates_in_resident_county/table/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_DEBATES_ACTIVE_DEBATES_IN_RESIDENT_COUNTY_TABLE_INTERFACE_KEY})`}
      >
        <ServiceUserDebatesActiveDebatesInResidentCountyTable />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_DEBATES_ACTIVE_DEBATES_IN_RESIDENT_COUNTY_VIEW_INTERFACE_KEY =
  'ServiceUserDebatesActiveDebatesInResidentCountyViewRoute';
export const routeToServiceUserDebatesActiveDebatesInResidentCountyView = (signedIdentifier: string): string =>
  'service/user_debates/active_debates_in_resident_county/view/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserDebatesActiveDebatesInResidentCountyView = lazy(
  () => import('./pages/service/user_debates/active_debates_in_resident_county/view/index'),
);

routes.push({
  path: 'service/user_debates/active_debates_in_resident_county/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_DEBATES_ACTIVE_DEBATES_IN_RESIDENT_COUNTY_VIEW_INTERFACE_KEY})`}
      >
        <ServiceUserDebatesActiveDebatesInResidentCountyView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_DEBATES_ACTIVE_DEBATES_IN_RESIDENT_DISTRICT_TABLE_INTERFACE_KEY =
  'ServiceUserDebatesActiveDebatesInResidentDistrictTableRoute';
export const routeToServiceUserDebatesActiveDebatesInResidentDistrictTable = (signedIdentifier: string): string =>
  'service/user_debates/active_debates_in_resident_district/table/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserDebatesActiveDebatesInResidentDistrictTable = lazy(
  () => import('./pages/service/user_debates/active_debates_in_resident_district/table/index'),
);

routes.push({
  path: 'service/user_debates/active_debates_in_resident_district/table/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_DEBATES_ACTIVE_DEBATES_IN_RESIDENT_DISTRICT_TABLE_INTERFACE_KEY})`}
      >
        <ServiceUserDebatesActiveDebatesInResidentDistrictTable />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_DEBATES_ACTIVE_DEBATES_IN_RESIDENT_DISTRICT_VIEW_INTERFACE_KEY =
  'ServiceUserDebatesActiveDebatesInResidentDistrictViewRoute';
export const routeToServiceUserDebatesActiveDebatesInResidentDistrictView = (signedIdentifier: string): string =>
  'service/user_debates/active_debates_in_resident_district/view/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserDebatesActiveDebatesInResidentDistrictView = lazy(
  () => import('./pages/service/user_debates/active_debates_in_resident_district/view/index'),
);

routes.push({
  path: 'service/user_debates/active_debates_in_resident_district/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_DEBATES_ACTIVE_DEBATES_IN_RESIDENT_DISTRICT_VIEW_INTERFACE_KEY})`}
      >
        <ServiceUserDebatesActiveDebatesInResidentDistrictView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_DEBATES_OWNED_DEBATES_TABLE_INTERFACE_KEY = 'ServiceUserDebatesOwnedDebatesTableRoute';
export const routeToServiceUserDebatesOwnedDebatesTable = (signedIdentifier: string): string =>
  'service/user_debates/owned_debates/table/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceUserDebatesOwnedDebatesTable = lazy(
  () => import('./pages/service/user_debates/owned_debates/table/index'),
);

routes.push({
  path: 'service/user_debates/owned_debates/table/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_DEBATES_OWNED_DEBATES_TABLE_INTERFACE_KEY})`}>
        <ServiceUserDebatesOwnedDebatesTable />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_DEBATES_OWNED_DEBATES_VIEW_INTERFACE_KEY = 'ServiceUserDebatesOwnedDebatesViewRoute';
export const routeToServiceUserDebatesOwnedDebatesView = (signedIdentifier: string): string =>
  'service/user_debates/owned_debates/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceUserDebatesOwnedDebatesView = lazy(() => import('./pages/service/user_debates/owned_debates/view/index'));

routes.push({
  path: 'service/user_debates/owned_debates/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_DEBATES_OWNED_DEBATES_VIEW_INTERFACE_KEY})`}>
        <ServiceUserDebatesOwnedDebatesView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_ISSUES_ACTIVE_ISSUES_GLOBAL_TABLE_INTERFACE_KEY =
  'ServiceUserIssuesActiveIssuesGlobalTableRoute';
export const routeToServiceUserIssuesActiveIssuesGlobalTable = (signedIdentifier: string): string =>
  'service/user_issues/active_issues_global/table/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceUserIssuesActiveIssuesGlobalTable = lazy(
  () => import('./pages/service/user_issues/active_issues_global/table/index'),
);

routes.push({
  path: 'service/user_issues/active_issues_global/table/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_ISSUES_ACTIVE_ISSUES_GLOBAL_TABLE_INTERFACE_KEY})`}>
        <ServiceUserIssuesActiveIssuesGlobalTable />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_ISSUES_ACTIVE_ISSUES_GLOBAL_VIEW_INTERFACE_KEY =
  'ServiceUserIssuesActiveIssuesGlobalViewRoute';
export const routeToServiceUserIssuesActiveIssuesGlobalView = (signedIdentifier: string): string =>
  'service/user_issues/active_issues_global/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceUserIssuesActiveIssuesGlobalView = lazy(
  () => import('./pages/service/user_issues/active_issues_global/view/index'),
);

routes.push({
  path: 'service/user_issues/active_issues_global/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_ISSUES_ACTIVE_ISSUES_GLOBAL_VIEW_INTERFACE_KEY})`}>
        <ServiceUserIssuesActiveIssuesGlobalView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_ISSUES_ACTIVE_ISSUES_IN_ACTIVITY_CITIES_TABLE_INTERFACE_KEY =
  'ServiceUserIssuesActiveIssuesInActivityCitiesTableRoute';
export const routeToServiceUserIssuesActiveIssuesInActivityCitiesTable = (signedIdentifier: string): string =>
  'service/user_issues/active_issues_in_activity_cities/table/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserIssuesActiveIssuesInActivityCitiesTable = lazy(
  () => import('./pages/service/user_issues/active_issues_in_activity_cities/table/index'),
);

routes.push({
  path: 'service/user_issues/active_issues_in_activity_cities/table/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_ISSUES_ACTIVE_ISSUES_IN_ACTIVITY_CITIES_TABLE_INTERFACE_KEY})`}
      >
        <ServiceUserIssuesActiveIssuesInActivityCitiesTable />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_ISSUES_ACTIVE_ISSUES_IN_ACTIVITY_CITIES_VIEW_INTERFACE_KEY =
  'ServiceUserIssuesActiveIssuesInActivityCitiesViewRoute';
export const routeToServiceUserIssuesActiveIssuesInActivityCitiesView = (signedIdentifier: string): string =>
  'service/user_issues/active_issues_in_activity_cities/view/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserIssuesActiveIssuesInActivityCitiesView = lazy(
  () => import('./pages/service/user_issues/active_issues_in_activity_cities/view/index'),
);

routes.push({
  path: 'service/user_issues/active_issues_in_activity_cities/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_ISSUES_ACTIVE_ISSUES_IN_ACTIVITY_CITIES_VIEW_INTERFACE_KEY})`}
      >
        <ServiceUserIssuesActiveIssuesInActivityCitiesView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_ISSUES_ACTIVE_ISSUES_IN_ACTIVITY_COUNTIES_TABLE_INTERFACE_KEY =
  'ServiceUserIssuesActiveIssuesInActivityCountiesTableRoute';
export const routeToServiceUserIssuesActiveIssuesInActivityCountiesTable = (signedIdentifier: string): string =>
  'service/user_issues/active_issues_in_activity_counties/table/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserIssuesActiveIssuesInActivityCountiesTable = lazy(
  () => import('./pages/service/user_issues/active_issues_in_activity_counties/table/index'),
);

routes.push({
  path: 'service/user_issues/active_issues_in_activity_counties/table/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_ISSUES_ACTIVE_ISSUES_IN_ACTIVITY_COUNTIES_TABLE_INTERFACE_KEY})`}
      >
        <ServiceUserIssuesActiveIssuesInActivityCountiesTable />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_ISSUES_ACTIVE_ISSUES_IN_ACTIVITY_COUNTIES_VIEW_INTERFACE_KEY =
  'ServiceUserIssuesActiveIssuesInActivityCountiesViewRoute';
export const routeToServiceUserIssuesActiveIssuesInActivityCountiesView = (signedIdentifier: string): string =>
  'service/user_issues/active_issues_in_activity_counties/view/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserIssuesActiveIssuesInActivityCountiesView = lazy(
  () => import('./pages/service/user_issues/active_issues_in_activity_counties/view/index'),
);

routes.push({
  path: 'service/user_issues/active_issues_in_activity_counties/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_ISSUES_ACTIVE_ISSUES_IN_ACTIVITY_COUNTIES_VIEW_INTERFACE_KEY})`}
      >
        <ServiceUserIssuesActiveIssuesInActivityCountiesView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_ISSUES_ACTIVE_ISSUES_IN_ACTIVITY_DISTRICTS_TABLE_INTERFACE_KEY =
  'ServiceUserIssuesActiveIssuesInActivityDistrictsTableRoute';
export const routeToServiceUserIssuesActiveIssuesInActivityDistrictsTable = (signedIdentifier: string): string =>
  'service/user_issues/active_issues_in_activity_districts/table/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserIssuesActiveIssuesInActivityDistrictsTable = lazy(
  () => import('./pages/service/user_issues/active_issues_in_activity_districts/table/index'),
);

routes.push({
  path: 'service/user_issues/active_issues_in_activity_districts/table/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_ISSUES_ACTIVE_ISSUES_IN_ACTIVITY_DISTRICTS_TABLE_INTERFACE_KEY})`}
      >
        <ServiceUserIssuesActiveIssuesInActivityDistrictsTable />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_ISSUES_ACTIVE_ISSUES_IN_ACTIVITY_DISTRICTS_VIEW_INTERFACE_KEY =
  'ServiceUserIssuesActiveIssuesInActivityDistrictsViewRoute';
export const routeToServiceUserIssuesActiveIssuesInActivityDistrictsView = (signedIdentifier: string): string =>
  'service/user_issues/active_issues_in_activity_districts/view/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserIssuesActiveIssuesInActivityDistrictsView = lazy(
  () => import('./pages/service/user_issues/active_issues_in_activity_districts/view/index'),
);

routes.push({
  path: 'service/user_issues/active_issues_in_activity_districts/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_ISSUES_ACTIVE_ISSUES_IN_ACTIVITY_DISTRICTS_VIEW_INTERFACE_KEY})`}
      >
        <ServiceUserIssuesActiveIssuesInActivityDistrictsView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_ISSUES_ACTIVE_ISSUES_IN_RESIDENT_CITY_TABLE_INTERFACE_KEY =
  'ServiceUserIssuesActiveIssuesInResidentCityTableRoute';
export const routeToServiceUserIssuesActiveIssuesInResidentCityTable = (signedIdentifier: string): string =>
  'service/user_issues/active_issues_in_resident_city/table/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserIssuesActiveIssuesInResidentCityTable = lazy(
  () => import('./pages/service/user_issues/active_issues_in_resident_city/table/index'),
);

routes.push({
  path: 'service/user_issues/active_issues_in_resident_city/table/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_ISSUES_ACTIVE_ISSUES_IN_RESIDENT_CITY_TABLE_INTERFACE_KEY})`}
      >
        <ServiceUserIssuesActiveIssuesInResidentCityTable />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_ISSUES_ACTIVE_ISSUES_IN_RESIDENT_CITY_VIEW_INTERFACE_KEY =
  'ServiceUserIssuesActiveIssuesInResidentCityViewRoute';
export const routeToServiceUserIssuesActiveIssuesInResidentCityView = (signedIdentifier: string): string =>
  'service/user_issues/active_issues_in_resident_city/view/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserIssuesActiveIssuesInResidentCityView = lazy(
  () => import('./pages/service/user_issues/active_issues_in_resident_city/view/index'),
);

routes.push({
  path: 'service/user_issues/active_issues_in_resident_city/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_ISSUES_ACTIVE_ISSUES_IN_RESIDENT_CITY_VIEW_INTERFACE_KEY})`}
      >
        <ServiceUserIssuesActiveIssuesInResidentCityView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_ISSUES_ACTIVE_ISSUES_IN_RESIDENT_COUNTY_TABLE_INTERFACE_KEY =
  'ServiceUserIssuesActiveIssuesInResidentCountyTableRoute';
export const routeToServiceUserIssuesActiveIssuesInResidentCountyTable = (signedIdentifier: string): string =>
  'service/user_issues/active_issues_in_resident_county/table/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserIssuesActiveIssuesInResidentCountyTable = lazy(
  () => import('./pages/service/user_issues/active_issues_in_resident_county/table/index'),
);

routes.push({
  path: 'service/user_issues/active_issues_in_resident_county/table/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_ISSUES_ACTIVE_ISSUES_IN_RESIDENT_COUNTY_TABLE_INTERFACE_KEY})`}
      >
        <ServiceUserIssuesActiveIssuesInResidentCountyTable />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_ISSUES_ACTIVE_ISSUES_IN_RESIDENT_COUNTY_VIEW_INTERFACE_KEY =
  'ServiceUserIssuesActiveIssuesInResidentCountyViewRoute';
export const routeToServiceUserIssuesActiveIssuesInResidentCountyView = (signedIdentifier: string): string =>
  'service/user_issues/active_issues_in_resident_county/view/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserIssuesActiveIssuesInResidentCountyView = lazy(
  () => import('./pages/service/user_issues/active_issues_in_resident_county/view/index'),
);

routes.push({
  path: 'service/user_issues/active_issues_in_resident_county/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_ISSUES_ACTIVE_ISSUES_IN_RESIDENT_COUNTY_VIEW_INTERFACE_KEY})`}
      >
        <ServiceUserIssuesActiveIssuesInResidentCountyView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_ISSUES_ACTIVE_ISSUES_IN_RESIDENT_DISTRICT_TABLE_INTERFACE_KEY =
  'ServiceUserIssuesActiveIssuesInResidentDistrictTableRoute';
export const routeToServiceUserIssuesActiveIssuesInResidentDistrictTable = (signedIdentifier: string): string =>
  'service/user_issues/active_issues_in_resident_district/table/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserIssuesActiveIssuesInResidentDistrictTable = lazy(
  () => import('./pages/service/user_issues/active_issues_in_resident_district/table/index'),
);

routes.push({
  path: 'service/user_issues/active_issues_in_resident_district/table/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_ISSUES_ACTIVE_ISSUES_IN_RESIDENT_DISTRICT_TABLE_INTERFACE_KEY})`}
      >
        <ServiceUserIssuesActiveIssuesInResidentDistrictTable />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_ISSUES_ACTIVE_ISSUES_IN_RESIDENT_DISTRICT_VIEW_INTERFACE_KEY =
  'ServiceUserIssuesActiveIssuesInResidentDistrictViewRoute';
export const routeToServiceUserIssuesActiveIssuesInResidentDistrictView = (signedIdentifier: string): string =>
  'service/user_issues/active_issues_in_resident_district/view/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserIssuesActiveIssuesInResidentDistrictView = lazy(
  () => import('./pages/service/user_issues/active_issues_in_resident_district/view/index'),
);

routes.push({
  path: 'service/user_issues/active_issues_in_resident_district/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_ISSUES_ACTIVE_ISSUES_IN_RESIDENT_DISTRICT_VIEW_INTERFACE_KEY})`}
      >
        <ServiceUserIssuesActiveIssuesInResidentDistrictView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USERISSUES_CREATEISSUE_OUTPUT_INTERFACE_KEY = 'ServiceUserissuesCreateissueOutputRoute';
export const routeToServiceUserissuesCreateissueOutput = (signedIdentifier: string): string =>
  'service/userissues/createissue/output/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceUserissuesCreateissueOutput = lazy(() => import('./pages/service/userissues/createissue/output/index'));

routes.push({
  path: 'service/userissues/createissue/output/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USERISSUES_CREATEISSUE_OUTPUT_INTERFACE_KEY})`}>
        <ServiceUserissuesCreateissueOutput />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_ISSUES_OWNED_ISSUES_TABLE_INTERFACE_KEY = 'ServiceUserIssuesOwnedIssuesTableRoute';
export const routeToServiceUserIssuesOwnedIssuesTable = (signedIdentifier: string): string =>
  'service/user_issues/owned_issues/table/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceUserIssuesOwnedIssuesTable = lazy(() => import('./pages/service/user_issues/owned_issues/table/index'));

routes.push({
  path: 'service/user_issues/owned_issues/table/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_ISSUES_OWNED_ISSUES_TABLE_INTERFACE_KEY})`}>
        <ServiceUserIssuesOwnedIssuesTable />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_ISSUES_OWNED_ISSUES_VIEW_INTERFACE_KEY = 'ServiceUserIssuesOwnedIssuesViewRoute';
export const routeToServiceUserIssuesOwnedIssuesView = (signedIdentifier: string): string =>
  'service/user_issues/owned_issues/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceUserIssuesOwnedIssuesView = lazy(() => import('./pages/service/user_issues/owned_issues/view/index'));

routes.push({
  path: 'service/user_issues/owned_issues/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_ISSUES_OWNED_ISSUES_VIEW_INTERFACE_KEY})`}>
        <ServiceUserIssuesOwnedIssuesView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_MANAGER_USERS_TABLE_INTERFACE_KEY = 'ServiceUserManagerUsersTableRoute';
export const routeToServiceUserManagerUsersTable = (signedIdentifier: string): string =>
  'service/user_manager/users/table/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceUserManagerUsersTable = lazy(() => import('./pages/service/user_manager/users/table/index'));

routes.push({
  path: 'service/user_manager/users/table/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_MANAGER_USERS_TABLE_INTERFACE_KEY})`}>
        <ServiceUserManagerUsersTable />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_VOTE_DEFINITION_ACTIVE_VOTE_DEFINITIONS_GLOBAL_TABLE_INTERFACE_KEY =
  'ServiceUserVoteDefinitionActiveVoteDefinitionsGlobalTableRoute';
export const routeToServiceUserVoteDefinitionActiveVoteDefinitionsGlobalTable = (signedIdentifier: string): string =>
  'service/user_vote_definition/active_vote_definitions_global/table/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserVoteDefinitionActiveVoteDefinitionsGlobalTable = lazy(
  () => import('./pages/service/user_vote_definition/active_vote_definitions_global/table/index'),
);

routes.push({
  path: 'service/user_vote_definition/active_vote_definitions_global/table/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_VOTE_DEFINITION_ACTIVE_VOTE_DEFINITIONS_GLOBAL_TABLE_INTERFACE_KEY})`}
      >
        <ServiceUserVoteDefinitionActiveVoteDefinitionsGlobalTable />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_VOTE_DEFINITION_ACTIVE_VOTE_DEFINITIONS_GLOBAL_VIEW_INTERFACE_KEY =
  'ServiceUserVoteDefinitionActiveVoteDefinitionsGlobalViewRoute';
export const routeToServiceUserVoteDefinitionActiveVoteDefinitionsGlobalView = (signedIdentifier: string): string =>
  'service/user_vote_definition/active_vote_definitions_global/view/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserVoteDefinitionActiveVoteDefinitionsGlobalView = lazy(
  () => import('./pages/service/user_vote_definition/active_vote_definitions_global/view/index'),
);

routes.push({
  path: 'service/user_vote_definition/active_vote_definitions_global/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_VOTE_DEFINITION_ACTIVE_VOTE_DEFINITIONS_GLOBAL_VIEW_INTERFACE_KEY})`}
      >
        <ServiceUserVoteDefinitionActiveVoteDefinitionsGlobalView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_VOTE_DEFINITION_ACTIVE_VOTE_DEFINITIONS_IN_ACTIVITY_CITIES_TABLE_INTERFACE_KEY =
  'ServiceUserVoteDefinitionActiveVoteDefinitionsInActivityCitiesTableRoute';
export const routeToServiceUserVoteDefinitionActiveVoteDefinitionsInActivityCitiesTable = (
  signedIdentifier: string,
): string =>
  'service/user_vote_definition/active_vote_definitions_in_activity_cities/table/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserVoteDefinitionActiveVoteDefinitionsInActivityCitiesTable = lazy(
  () => import('./pages/service/user_vote_definition/active_vote_definitions_in_activity_cities/table/index'),
);

routes.push({
  path: 'service/user_vote_definition/active_vote_definitions_in_activity_cities/table/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_VOTE_DEFINITION_ACTIVE_VOTE_DEFINITIONS_IN_ACTIVITY_CITIES_TABLE_INTERFACE_KEY})`}
      >
        <ServiceUserVoteDefinitionActiveVoteDefinitionsInActivityCitiesTable />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_VOTE_DEFINITION_ACTIVE_VOTE_DEFINITIONS_IN_ACTIVITY_CITIES_VIEW_INTERFACE_KEY =
  'ServiceUserVoteDefinitionActiveVoteDefinitionsInActivityCitiesViewRoute';
export const routeToServiceUserVoteDefinitionActiveVoteDefinitionsInActivityCitiesView = (
  signedIdentifier: string,
): string =>
  'service/user_vote_definition/active_vote_definitions_in_activity_cities/view/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserVoteDefinitionActiveVoteDefinitionsInActivityCitiesView = lazy(
  () => import('./pages/service/user_vote_definition/active_vote_definitions_in_activity_cities/view/index'),
);

routes.push({
  path: 'service/user_vote_definition/active_vote_definitions_in_activity_cities/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_VOTE_DEFINITION_ACTIVE_VOTE_DEFINITIONS_IN_ACTIVITY_CITIES_VIEW_INTERFACE_KEY})`}
      >
        <ServiceUserVoteDefinitionActiveVoteDefinitionsInActivityCitiesView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_VOTE_DEFINITION_ACTIVE_VOTE_DEFINITIONS_IN_ACTIVITY_COUNTIES_TABLE_INTERFACE_KEY =
  'ServiceUserVoteDefinitionActiveVoteDefinitionsInActivityCountiesTableRoute';
export const routeToServiceUserVoteDefinitionActiveVoteDefinitionsInActivityCountiesTable = (
  signedIdentifier: string,
): string =>
  'service/user_vote_definition/active_vote_definitions_in_activity_counties/table/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserVoteDefinitionActiveVoteDefinitionsInActivityCountiesTable = lazy(
  () => import('./pages/service/user_vote_definition/active_vote_definitions_in_activity_counties/table/index'),
);

routes.push({
  path: 'service/user_vote_definition/active_vote_definitions_in_activity_counties/table/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_VOTE_DEFINITION_ACTIVE_VOTE_DEFINITIONS_IN_ACTIVITY_COUNTIES_TABLE_INTERFACE_KEY})`}
      >
        <ServiceUserVoteDefinitionActiveVoteDefinitionsInActivityCountiesTable />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_VOTE_DEFINITION_ACTIVE_VOTE_DEFINITIONS_IN_ACTIVITY_COUNTIES_VIEW_INTERFACE_KEY =
  'ServiceUserVoteDefinitionActiveVoteDefinitionsInActivityCountiesViewRoute';
export const routeToServiceUserVoteDefinitionActiveVoteDefinitionsInActivityCountiesView = (
  signedIdentifier: string,
): string =>
  'service/user_vote_definition/active_vote_definitions_in_activity_counties/view/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserVoteDefinitionActiveVoteDefinitionsInActivityCountiesView = lazy(
  () => import('./pages/service/user_vote_definition/active_vote_definitions_in_activity_counties/view/index'),
);

routes.push({
  path: 'service/user_vote_definition/active_vote_definitions_in_activity_counties/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_VOTE_DEFINITION_ACTIVE_VOTE_DEFINITIONS_IN_ACTIVITY_COUNTIES_VIEW_INTERFACE_KEY})`}
      >
        <ServiceUserVoteDefinitionActiveVoteDefinitionsInActivityCountiesView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_VOTE_DEFINITION_ACTIVE_VOTE_DEFINITIONS_IN_ACTIVITY_DISTRICTS_TABLE_INTERFACE_KEY =
  'ServiceUserVoteDefinitionActiveVoteDefinitionsInActivityDistrictsTableRoute';
export const routeToServiceUserVoteDefinitionActiveVoteDefinitionsInActivityDistrictsTable = (
  signedIdentifier: string,
): string =>
  'service/user_vote_definition/active_vote_definitions_in_activity_districts/table/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserVoteDefinitionActiveVoteDefinitionsInActivityDistrictsTable = lazy(
  () => import('./pages/service/user_vote_definition/active_vote_definitions_in_activity_districts/table/index'),
);

routes.push({
  path: 'service/user_vote_definition/active_vote_definitions_in_activity_districts/table/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_VOTE_DEFINITION_ACTIVE_VOTE_DEFINITIONS_IN_ACTIVITY_DISTRICTS_TABLE_INTERFACE_KEY})`}
      >
        <ServiceUserVoteDefinitionActiveVoteDefinitionsInActivityDistrictsTable />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_VOTE_DEFINITION_ACTIVE_VOTE_DEFINITIONS_IN_ACTIVITY_DISTRICTS_VIEW_INTERFACE_KEY =
  'ServiceUserVoteDefinitionActiveVoteDefinitionsInActivityDistrictsViewRoute';
export const routeToServiceUserVoteDefinitionActiveVoteDefinitionsInActivityDistrictsView = (
  signedIdentifier: string,
): string =>
  'service/user_vote_definition/active_vote_definitions_in_activity_districts/view/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserVoteDefinitionActiveVoteDefinitionsInActivityDistrictsView = lazy(
  () => import('./pages/service/user_vote_definition/active_vote_definitions_in_activity_districts/view/index'),
);

routes.push({
  path: 'service/user_vote_definition/active_vote_definitions_in_activity_districts/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_VOTE_DEFINITION_ACTIVE_VOTE_DEFINITIONS_IN_ACTIVITY_DISTRICTS_VIEW_INTERFACE_KEY})`}
      >
        <ServiceUserVoteDefinitionActiveVoteDefinitionsInActivityDistrictsView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_VOTE_DEFINITION_ACTIVE_VOTE_DEFINITIONS_IN_RESIDENT_CITY_TABLE_INTERFACE_KEY =
  'ServiceUserVoteDefinitionActiveVoteDefinitionsInResidentCityTableRoute';
export const routeToServiceUserVoteDefinitionActiveVoteDefinitionsInResidentCityTable = (
  signedIdentifier: string,
): string =>
  'service/user_vote_definition/active_vote_definitions_in_resident_city/table/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserVoteDefinitionActiveVoteDefinitionsInResidentCityTable = lazy(
  () => import('./pages/service/user_vote_definition/active_vote_definitions_in_resident_city/table/index'),
);

routes.push({
  path: 'service/user_vote_definition/active_vote_definitions_in_resident_city/table/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_VOTE_DEFINITION_ACTIVE_VOTE_DEFINITIONS_IN_RESIDENT_CITY_TABLE_INTERFACE_KEY})`}
      >
        <ServiceUserVoteDefinitionActiveVoteDefinitionsInResidentCityTable />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_VOTE_DEFINITION_ACTIVE_VOTE_DEFINITIONS_IN_RESIDENT_CITY_VIEW_INTERFACE_KEY =
  'ServiceUserVoteDefinitionActiveVoteDefinitionsInResidentCityViewRoute';
export const routeToServiceUserVoteDefinitionActiveVoteDefinitionsInResidentCityView = (
  signedIdentifier: string,
): string =>
  'service/user_vote_definition/active_vote_definitions_in_resident_city/view/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserVoteDefinitionActiveVoteDefinitionsInResidentCityView = lazy(
  () => import('./pages/service/user_vote_definition/active_vote_definitions_in_resident_city/view/index'),
);

routes.push({
  path: 'service/user_vote_definition/active_vote_definitions_in_resident_city/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_VOTE_DEFINITION_ACTIVE_VOTE_DEFINITIONS_IN_RESIDENT_CITY_VIEW_INTERFACE_KEY})`}
      >
        <ServiceUserVoteDefinitionActiveVoteDefinitionsInResidentCityView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_VOTE_DEFINITION_ACTIVE_VOTE_DEFINITIONS_IN_RESIDENT_COUNTY_TABLE_INTERFACE_KEY =
  'ServiceUserVoteDefinitionActiveVoteDefinitionsInResidentCountyTableRoute';
export const routeToServiceUserVoteDefinitionActiveVoteDefinitionsInResidentCountyTable = (
  signedIdentifier: string,
): string =>
  'service/user_vote_definition/active_vote_definitions_in_resident_county/table/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserVoteDefinitionActiveVoteDefinitionsInResidentCountyTable = lazy(
  () => import('./pages/service/user_vote_definition/active_vote_definitions_in_resident_county/table/index'),
);

routes.push({
  path: 'service/user_vote_definition/active_vote_definitions_in_resident_county/table/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_VOTE_DEFINITION_ACTIVE_VOTE_DEFINITIONS_IN_RESIDENT_COUNTY_TABLE_INTERFACE_KEY})`}
      >
        <ServiceUserVoteDefinitionActiveVoteDefinitionsInResidentCountyTable />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_VOTE_DEFINITION_ACTIVE_VOTE_DEFINITIONS_IN_RESIDENT_COUNTY_VIEW_INTERFACE_KEY =
  'ServiceUserVoteDefinitionActiveVoteDefinitionsInResidentCountyViewRoute';
export const routeToServiceUserVoteDefinitionActiveVoteDefinitionsInResidentCountyView = (
  signedIdentifier: string,
): string =>
  'service/user_vote_definition/active_vote_definitions_in_resident_county/view/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserVoteDefinitionActiveVoteDefinitionsInResidentCountyView = lazy(
  () => import('./pages/service/user_vote_definition/active_vote_definitions_in_resident_county/view/index'),
);

routes.push({
  path: 'service/user_vote_definition/active_vote_definitions_in_resident_county/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_VOTE_DEFINITION_ACTIVE_VOTE_DEFINITIONS_IN_RESIDENT_COUNTY_VIEW_INTERFACE_KEY})`}
      >
        <ServiceUserVoteDefinitionActiveVoteDefinitionsInResidentCountyView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_VOTE_DEFINITION_ACTIVE_VOTE_DEFINITIONS_IN_RESIDENT_DISTRICT_TABLE_INTERFACE_KEY =
  'ServiceUserVoteDefinitionActiveVoteDefinitionsInResidentDistrictTableRoute';
export const routeToServiceUserVoteDefinitionActiveVoteDefinitionsInResidentDistrictTable = (
  signedIdentifier: string,
): string =>
  'service/user_vote_definition/active_vote_definitions_in_resident_district/table/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserVoteDefinitionActiveVoteDefinitionsInResidentDistrictTable = lazy(
  () => import('./pages/service/user_vote_definition/active_vote_definitions_in_resident_district/table/index'),
);

routes.push({
  path: 'service/user_vote_definition/active_vote_definitions_in_resident_district/table/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_VOTE_DEFINITION_ACTIVE_VOTE_DEFINITIONS_IN_RESIDENT_DISTRICT_TABLE_INTERFACE_KEY})`}
      >
        <ServiceUserVoteDefinitionActiveVoteDefinitionsInResidentDistrictTable />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_VOTE_DEFINITION_ACTIVE_VOTE_DEFINITIONS_IN_RESIDENT_DISTRICT_VIEW_INTERFACE_KEY =
  'ServiceUserVoteDefinitionActiveVoteDefinitionsInResidentDistrictViewRoute';
export const routeToServiceUserVoteDefinitionActiveVoteDefinitionsInResidentDistrictView = (
  signedIdentifier: string,
): string =>
  'service/user_vote_definition/active_vote_definitions_in_resident_district/view/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserVoteDefinitionActiveVoteDefinitionsInResidentDistrictView = lazy(
  () => import('./pages/service/user_vote_definition/active_vote_definitions_in_resident_district/view/index'),
);

routes.push({
  path: 'service/user_vote_definition/active_vote_definitions_in_resident_district/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_VOTE_DEFINITION_ACTIVE_VOTE_DEFINITIONS_IN_RESIDENT_DISTRICT_VIEW_INTERFACE_KEY})`}
      >
        <ServiceUserVoteDefinitionActiveVoteDefinitionsInResidentDistrictView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_VOTE_DEFINITION_OWNED_VOTE_DEFINITIONS_TABLE_INTERFACE_KEY =
  'ServiceUserVoteDefinitionOwnedVoteDefinitionsTableRoute';
export const routeToServiceUserVoteDefinitionOwnedVoteDefinitionsTable = (signedIdentifier: string): string =>
  'service/user_vote_definition/owned_vote_definitions/table/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserVoteDefinitionOwnedVoteDefinitionsTable = lazy(
  () => import('./pages/service/user_vote_definition/owned_vote_definitions/table/index'),
);

routes.push({
  path: 'service/user_vote_definition/owned_vote_definitions/table/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_VOTE_DEFINITION_OWNED_VOTE_DEFINITIONS_TABLE_INTERFACE_KEY})`}
      >
        <ServiceUserVoteDefinitionOwnedVoteDefinitionsTable />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_USER_VOTE_DEFINITION_OWNED_VOTE_DEFINITIONS_VIEW_INTERFACE_KEY =
  'ServiceUserVoteDefinitionOwnedVoteDefinitionsViewRoute';
export const routeToServiceUserVoteDefinitionOwnedVoteDefinitionsView = (signedIdentifier: string): string =>
  'service/user_vote_definition/owned_vote_definitions/view/:signedIdentifier'.replace(
    /:signedIdentifier/,
    signedIdentifier,
  );
const ServiceUserVoteDefinitionOwnedVoteDefinitionsView = lazy(
  () => import('./pages/service/user_vote_definition/owned_vote_definitions/view/index'),
);

routes.push({
  path: 'service/user_vote_definition/owned_vote_definitions/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_USER_VOTE_DEFINITION_OWNED_VOTE_DEFINITIONS_VIEW_INTERFACE_KEY})`}
      >
        <ServiceUserVoteDefinitionOwnedVoteDefinitionsView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_VOTE_DEFINITION_DEBATE_VIEW_INTERFACE_KEY = 'ServiceVoteDefinitionDebateViewRoute';
export const routeToServiceVoteDefinitionDebateView = (signedIdentifier: string): string =>
  'service/vote_definition/debate/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceVoteDefinitionDebateView = lazy(() => import('./pages/service/vote_definition/debate/view/index'));

routes.push({
  path: 'service/vote_definition/debate/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_VOTE_DEFINITION_DEBATE_VIEW_INTERFACE_KEY})`}>
        <ServiceVoteDefinitionDebateView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_VOTE_DEFINITION_ISSUE_VIEW_INTERFACE_KEY = 'ServiceVoteDefinitionIssueViewRoute';
export const routeToServiceVoteDefinitionIssueView = (signedIdentifier: string): string =>
  'service/vote_definition/issue/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceVoteDefinitionIssueView = lazy(() => import('./pages/service/vote_definition/issue/view/index'));

routes.push({
  path: 'service/vote_definition/issue/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_VOTE_DEFINITION_ISSUE_VIEW_INTERFACE_KEY})`}>
        <ServiceVoteDefinitionIssueView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_VOTE_ENTRY_VOTE_DEFINITION_VIEW_INTERFACE_KEY = 'ServiceVoteEntryVoteDefinitionViewRoute';
export const routeToServiceVoteEntryVoteDefinitionView = (signedIdentifier: string): string =>
  'service/vote_entry/vote_definition/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceVoteEntryVoteDefinitionView = lazy(() => import('./pages/service/vote_entry/vote_definition/view/index'));

routes.push({
  path: 'service/vote_entry/vote_definition/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_VOTE_ENTRY_VOTE_DEFINITION_VIEW_INTERFACE_KEY})`}>
        <ServiceVoteEntryVoteDefinitionView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_YES_NO_ABSTAIN_VOTE_DEFINITION_DEBATE_VIEW_INTERFACE_KEY =
  'ServiceYesNoAbstainVoteDefinitionDebateViewRoute';
export const routeToServiceYesNoAbstainVoteDefinitionDebateView = (signedIdentifier: string): string =>
  'service/yes_no_abstain_vote_definition/debate/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceYesNoAbstainVoteDefinitionDebateView = lazy(
  () => import('./pages/service/yes_no_abstain_vote_definition/debate/view/index'),
);

routes.push({
  path: 'service/yes_no_abstain_vote_definition/debate/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_YES_NO_ABSTAIN_VOTE_DEFINITION_DEBATE_VIEW_INTERFACE_KEY})`}
      >
        <ServiceYesNoAbstainVoteDefinitionDebateView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_YES_NO_ABSTAIN_VOTE_DEFINITION_ISSUE_VIEW_INTERFACE_KEY =
  'ServiceYesNoAbstainVoteDefinitionIssueViewRoute';
export const routeToServiceYesNoAbstainVoteDefinitionIssueView = (signedIdentifier: string): string =>
  'service/yes_no_abstain_vote_definition/issue/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceYesNoAbstainVoteDefinitionIssueView = lazy(
  () => import('./pages/service/yes_no_abstain_vote_definition/issue/view/index'),
);

routes.push({
  path: 'service/yes_no_abstain_vote_definition/issue/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy
        filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_YES_NO_ABSTAIN_VOTE_DEFINITION_ISSUE_VIEW_INTERFACE_KEY})`}
      >
        <ServiceYesNoAbstainVoteDefinitionIssueView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_YES_NO_VOTE_DEFINITION_DEBATE_VIEW_INTERFACE_KEY =
  'ServiceYesNoVoteDefinitionDebateViewRoute';
export const routeToServiceYesNoVoteDefinitionDebateView = (signedIdentifier: string): string =>
  'service/yes_no_vote_definition/debate/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceYesNoVoteDefinitionDebateView = lazy(
  () => import('./pages/service/yes_no_vote_definition/debate/view/index'),
);

routes.push({
  path: 'service/yes_no_vote_definition/debate/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_YES_NO_VOTE_DEFINITION_DEBATE_VIEW_INTERFACE_KEY})`}>
        <ServiceYesNoVoteDefinitionDebateView />
      </ComponentProxy>
    </Suspense>
  ),
});
export const ROUTE_SERVICE_YES_NO_VOTE_DEFINITION_ISSUE_VIEW_INTERFACE_KEY = 'ServiceYesNoVoteDefinitionIssueViewRoute';
export const routeToServiceYesNoVoteDefinitionIssueView = (signedIdentifier: string): string =>
  'service/yes_no_vote_definition/issue/view/:signedIdentifier'.replace(/:signedIdentifier/, signedIdentifier);
const ServiceYesNoVoteDefinitionIssueView = lazy(
  () => import('./pages/service/yes_no_vote_definition/issue/view/index'),
);

routes.push({
  path: 'service/yes_no_vote_definition/issue/view/:signedIdentifier',
  element: (
    <Suspense>
      <ComponentProxy filter={`(${OBJECTCLASS}=${ROUTE_SERVICE_YES_NO_VOTE_DEFINITION_ISSUE_VIEW_INTERFACE_KEY})`}>
        <ServiceYesNoVoteDefinitionIssueView />
      </ComponentProxy>
    </Suspense>
  ),
});

export { routes };
