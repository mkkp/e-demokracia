//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    C L A S S
// ------------------------------
// Factory expression: #factoryExpressionForOriginalPageContainers(#application)
// Path expression: #pageStoreConfigTypeDefPath(#self.owner)
// Template name: lib/ui/pages/page/page__config__typedefs.dart.hbs
// Application: edemokracia::admin::Admin

part of admin.ui.pages.admin.pro.votes.create;

typedef AdminProVotesCreatePageBackAction = Future<void> Function({
  NavigationState navigation,
  AdminProVotesCreatePageStore pageStore,
});

typedef AdminProVotesCreatePageExtendActions = List<Widget> Function(
  List<Widget> originalListOfActions, {
  BuildContext context,
  NavigationState navigation,
  AdminProVotesCreatePageStore pageStore,
  AdminProStore ownerStore,
  AdminSimpleVoteStore targetStore,
});

typedef AdminProVotesCreatePostCreatedChanged = Function(dynamic value, {AdminProVotesCreatePageStore pageStore, AdminSimpleVoteStore targetStore});

typedef AdminProVotesCreatePostTypeChanged = Function(dynamic value, {AdminProVotesCreatePageStore pageStore, AdminSimpleVoteStore targetStore});

typedef AdminProVotesCreatePageTitleGenerator = String Function(
  BuildContext context,
  AdminProVotesCreatePageStore pageStore,
  AdminSimpleVoteStore targetStore,
);