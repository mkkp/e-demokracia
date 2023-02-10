//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    C L A S S
// ------------------------------
// Factory expression: #factoryExpressionForOriginalPageContainers(#application)
// Path expression: #pageActionsPath(#self.owner)
// Template name: lib/ui/pages/page/page_actions.dart.hbs
// Application: edemokracia::admin::Admin

part of admin.ui.pages.admin.pro.votes.table;

class AdminProVotesTablePageActions extends PageActions {
  NavigationState navigation;
  final messageHandler = locator<MessageHandler>();

  final AdminProStore ownerStore;
  final AdminProVotesTablePageStore pageStore;
  final AdminProVotesTableConfig pageConfig;

  AdminProVotesTablePageActions(this.navigation, this.ownerStore, this.pageStore, this.pageConfig);

  List<Widget> getActions(BuildContext context) {
    List<Widget> list = [];

    list.add(JudoAppBarButton(
      loadingState: pageStore.refreshActionLoadingState,
      label: AppLocalizations.of(context).lookUpValue(context, 'Refresh'),
      icon: Icon(getIconByString('refresh')),
      disabled: pageStore.pageState.disabledByLoading || false,
      padding: EdgeInsets.symmetric(horizontal: 8.0),
      onPressed: () async {
        try {
          await pageStore.getVotes(ownerStore);
        } catch (error) {
          messageHandler.handleApiException(context, error, 'Refresh');
        }
      },
    ));
    list.add(JudoAppBarPopupButton(
      label: AppLocalizations.of(context).lookUpValue(context, 'Add Filter'),
      icon: Icon(getIconByString('filter_alt')),
      disabled: pageStore.pageState.disabledByLoading || false,
      padding: EdgeInsets.symmetric(horizontal: 8.0),
      items: Map<FilterStore, JudoMenuItemData>.fromIterable(pageStore.selectableFilters,
          key: (item) => item,
          value: (item) => JudoMenuItemData(
              value: item,
              label: AppLocalizations.of(context).lookUpValue(context, item.attributeLabel),
              onSelected: () {
                item.setWidgetLabel(context);
                pageStore.addNewFilter(item);
              })),
    ));
    list.add(JudoAppBarButton(
      label: AppLocalizations.of(context).lookUpValue(context, 'Create'),
      icon: Icon(getIconByString('note_add')),
      disabled: pageStore.pageState.disabledByLoading || false || !ownerStore.internal__updatable,
      padding: EdgeInsets.symmetric(horizontal: 8.0),
      onPressed: () async {
        var created = await navigation.open(Routes.adminProVotesCreatePage, arguments: AdminProVotesCreatePageArguments(ownerStore: ownerStore));
        if (created != null) {
          try {
            await pageStore.createVotes(ownerStore, created);
          } catch (error) {
            messageHandler.handleApiException(context, error, 'Create');
          }
        }
      },
    ));
    if (pageConfig.extendActions != null) {
      return pageConfig.extendActions(
        list,
        context: context,
        navigation: navigation,
        pageStore: pageStore,
        ownerStore: ownerStore,
      );
    }

    return list;
  }

  Widget getBackIcon(BuildContext context) {
    return JudoAppBarButton(
      padding: EdgeInsets.only(right: 8.0),
      icon: Icon(
        getIconByString('arrow_back'),
        color: Theme.of(context).colorScheme.secondary,
        size: 28,
      ),
      label: null,
      outlined: true,
      onPressed: () {
        if (pageConfig.backAction != null) {
          pageConfig.backAction(navigation: navigation, pageStore: pageStore);
        } else {
          navigation.close();
        }
      },
      disabled: pageStore.pageState.disabledByLoading || navigation.stack.length == 0,
    );
  }
}