//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    C L A S S
// ------------------------------
// Factory expression: #factoryExpressionForOriginalPageContainers(#application)
// Path expression: #pageStoreConfigTypeDefPath(#self.owner)
// Template name: lib/ui/pages/page/page__config__typedefs.dart.hbs
// Application: edemokracia::admin::Admin

part of admin.ui.pages.admin.user.resident_district.view;

typedef AdminUserResidentDistrictViewPageBackAction = Future<void> Function({
  NavigationState navigation,
  AdminUserResidentDistrictViewPageStore pageStore,
});

typedef AdminUserResidentDistrictViewPageExtendActions = List<Widget> Function(
  List<Widget> originalListOfActions, {
  BuildContext context,
  NavigationState navigation,
  AdminUserResidentDistrictViewPageStore pageStore,
  AdminUserStore ownerStore,
  AdminDistrictStore targetStore,
});

typedef AdminUserResidentDistrictViewPageTitleGenerator = String Function(
  BuildContext context,
  AdminUserResidentDistrictViewPageStore pageStore,
  AdminDistrictStore targetStore,
);