//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    C L A S S
// ------------------------------
// Factory expression: #factoryExpressionForPageContainers(#application)
// Path expression: #pageBodyPath(#self.owner,#self.layoutType.name)
// Template name: lib/ui/pages/page/page_body.dart.hbs
// Application: edemokracia::admin::Admin
// Container: mobile

part of admin.ui.pages.admin.admin.vote_definitions.view;

Widget getAdminAdminVoteDefinitionsViewMobilePage(BuildContext context, AdminVoteDefinitionStore targetStore, AdminAdminVoteDefinitionsViewPageStore pageStore,
    AdminAdminVoteDefinitionsViewConfig pageConfig) {
  final navigation = locator<NavigationState>();
  final tabService = locator<TabService>();
  final messageHandler = locator<MessageHandler>();

  return Scrollbar(
    isAlwaysShown: true,
    child: CustomScrollView(slivers: [
      SliverFillRemaining(
        hasScrollBody: false,
        child: FocusTraversalGroup(
          policy: OrderedTraversalPolicy(),
          child: Column(mainAxisSize: MainAxisSize.min, children: [
            JudoColumn(
              col: 4.0,
              row: 11.142857142857142,
              children: [
                JudoColumn(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  col: 4.0,
                  row: 11.142857142857142,
                  children: [
                    JudoRow(
                      mainAxisAlignment: MainAxisAlignment.start,
                      col: 4.0,
                      row: 9.0,
                      card: true,
                      frameMargin: EdgeInsets.only(top: 4.0, bottom: 4.0, left: 4.0, right: 4.0),
                      children: [
                        JudoColumn(
                          mainAxisAlignment: MainAxisAlignment.center,
                          col: 4.0,
                          row: 9.0,
                          children: [
                            JudoRow(
                              mainAxisAlignment: MainAxisAlignment.start,
                              col: 4.0,
                              row: 1.0,
                              children: [
                                Observer(
                                    builder: (_) => JudoInputText(
                                          key: UniqueKey(),
                                          order: 1,
                                          col: 4.0,
                                          maxLength: 255 ?? 250,
                                          readOnly: true,
                                          label: AppLocalizations.of(context).lookUpValue(context, 'Title'),
                                          icon: Icon(getIconByString('text_fields')),
                                          inCard: true,
                                          initialValue: targetStore.title,
                                        )),
                              ],
                            ),
                            JudoRow(
                              mainAxisAlignment: MainAxisAlignment.start,
                              col: 4.0,
                              row: 1.0,
                              children: [
                                Observer(
                                  builder: (_) => JudoDateTimeInput(
                                    key: UniqueKey(),
                                    order: 2,
                                    col: 4.0,
                                    readOnly: true,
                                    use24HourFormat: true,
                                    initialDate: targetStore.closeAt,
                                    label: AppLocalizations.of(context).lookUpValue(context, 'CloseAt'),
                                    icon: Icon(getIconByString('schedule')),
                                    inCard: true,
                                  ),
                                ),
                              ],
                            ),
                            JudoRow(
                              mainAxisAlignment: MainAxisAlignment.start,
                              col: 4.0,
                              row: 1.0,
                              children: [
                                Observer(
                                    builder: (_) => JudoComboBox<EdemokraciaVoteStatus>(
                                          key: UniqueKey(),
                                          order: 3,
                                          col: 4.0,
                                          icon: Icon(getIconByString('list')),
                                          label: AppLocalizations.of(context).lookUpValue(context, 'Status'),
                                          inCard: true,
                                          readOnly: true,
                                          mandatory: true,
                                          items: EdemokraciaVoteStatus.values,
                                          value: targetStore.status,
                                          dropdownMenuShow: (value) => new DropdownMenuItem<EdemokraciaVoteStatus>(
                                              value: value,
                                              child: new Text(AppLocalizations.of(context).lookUpValue(context, value.toString().split('.').last))),
                                        )),
                              ],
                            ),
                            JudoRow(
                              mainAxisAlignment: MainAxisAlignment.start,
                              col: 4.0,
                              row: 1.0,
                              children: [
                                Observer(
                                    builder: (_) => JudoButton(
                                          col: 4.0,
                                          label: AppLocalizations.of(context).lookUpValue(context, 'Debate'),
                                          icon: Icon(getIconByString('table_rows')),
                                          order: 4,
                                          disabled: pageStore.pageState.disabledByLoading || false || targetStore.debate == null,
                                          onPressed: () async {
                                            var response = await navigation.open(Routes.adminVoteDefinitionDebateViewPage,
                                                arguments:
                                                    AdminVoteDefinitionDebateViewPageArguments(ownerStore: targetStore, targetStore: targetStore.debate));
                                            if (response != null) {
                                              try {
                                                await pageStore.refreshVoteDefinition(targetStore);
                                              } catch (error) {
                                                messageHandler.handleApiException(context, error, 'View');
                                              }
                                            }
                                          },
                                        )),
                              ],
                            ),
                            JudoRow(
                              mainAxisAlignment: MainAxisAlignment.start,
                              col: 4.0,
                              row: 1.0,
                              children: [
                                Observer(
                                  builder: (_) => JudoDateTimeInput(
                                    key: UniqueKey(),
                                    order: 5,
                                    col: 4.0,
                                    readOnly: true,
                                    use24HourFormat: true,
                                    initialDate: targetStore.created,
                                    label: AppLocalizations.of(context).lookUpValue(context, 'Created'),
                                    icon: Icon(getIconByString('schedule')),
                                    inCard: true,
                                  ),
                                ),
                              ],
                            ),
                            JudoRow(
                              mainAxisAlignment: MainAxisAlignment.start,
                              col: 4.0,
                              row: 4.0,
                              children: [
                                Observer(
                                    builder: (_) => JudoInputText(
                                          key: UniqueKey(),
                                          order: 6,
                                          col: 4.0,
                                          row: 4.0,
                                          multiline: true,
                                          inCard: true,
                                          maxLength: 2000 ?? 250,
                                          readOnly: true,
                                          label: AppLocalizations.of(context).lookUpValue(context, 'Description'),
                                          icon: Icon(getIconByString('text_fields')),
                                          initialValue: targetStore.description,
                                        )),
                              ],
                            ),
                          ],
                        ),
                      ],
                    ),
                    Observer(
                      builder: (_) => JudoTab(
                          col: 4.0,
                          row: 2.0,
                          order: 7,
                          tabIndex: tabService.getOrCreateTabStore('edemokracia::admin::Admin::edemokracia::admin::Admin::voteDefinitions_tabBar').tabIndex,
                          setTabIndex:
                              tabService.getOrCreateTabStore('edemokracia::admin::Admin::edemokracia::admin::Admin::voteDefinitions_tabBar').setTabIndex,
                          hiddenTabs: [
                            targetStore?.isNotYesNoType ?? false,
                            targetStore?.isNotYesNoAbstainType ?? false,
                            targetStore?.isNotSelectAnswerType ?? false,
                            targetStore?.isNotRatingType ?? false,
                          ],
                          tabContent: [
                            Observer(
                              builder: (_) => JudoRow(
                                mainAxisAlignment: MainAxisAlignment.start,
                                hidden: (targetStore?.isNotYesNoType) ?? false,
                                col: 4.0,
                                row: 1.0,
                                children: [
                                  Observer(
                                      builder: (_) => JudoButton(
                                            col: 4.0,
                                            label: AppLocalizations.of(context).lookUpValue(context, 'VoteYesNo'),
                                            icon: Icon(getIconByString('chevron_right')),
                                            loadingState: pageStore.voteYesNoButtonLoadingState,
                                            order: 8,
                                            disabled: pageStore.pageState.disabledByLoading || false,
                                            onPressed: () async {
                                              var ret = await navigation.open(Routes.adminVoteDefinitionVoteYesNoOperationInputPage, arguments:
                                                  AdminVoteDefinitionVoteYesNoOperationInputPageArguments(operationCall:
                                                      (YesNoVoteInputStore input, AdminVoteDefinitionVoteYesNoOperationInputPageStore inputPageStore) async {
                                                bool callSuccessful = false;

                                                try {
                                                  await pageStore.edemokraciaAdminVoteDefinitionVoteYesNo(input, targetStore);

                                                  callSuccessful = true;
                                                } catch (error) {
                                                  messageHandler.handleApiException(context, error, 'VoteYesNo');
                                                }
                                                return callSuccessful;
                                              }));

                                              if (ret != null) {
                                                try {
                                                  await pageStore.refreshVoteDefinition(targetStore);
                                                } catch (error) {
                                                  messageHandler.handleApiException(context, error, 'VoteYesNo');
                                                }
                                              }
                                            },
                                          )),
                                ],
                              ),
                            ),
                            Observer(
                              builder: (_) => JudoRow(
                                mainAxisAlignment: MainAxisAlignment.start,
                                hidden: (targetStore?.isNotYesNoAbstainType) ?? false,
                                col: 4.0,
                                row: 1.0,
                                children: [
                                  Observer(
                                      builder: (_) => JudoButton(
                                            col: 4.0,
                                            label: AppLocalizations.of(context).lookUpValue(context, 'VoteYesNoAbstain'),
                                            icon: Icon(getIconByString('chevron_right')),
                                            loadingState: pageStore.voteYesNoAbstainButtonLoadingState,
                                            order: 9,
                                            disabled: pageStore.pageState.disabledByLoading || false,
                                            onPressed: () async {
                                              var ret = await navigation.open(Routes.adminVoteDefinitionVoteYesNoAbstainOperationInputPage, arguments:
                                                  AdminVoteDefinitionVoteYesNoAbstainOperationInputPageArguments(operationCall:
                                                      (YesNoAbstainVoteInputStore input,
                                                          AdminVoteDefinitionVoteYesNoAbstainOperationInputPageStore inputPageStore) async {
                                                bool callSuccessful = false;

                                                try {
                                                  await pageStore.edemokraciaAdminVoteDefinitionVoteYesNoAbstain(input, targetStore);

                                                  callSuccessful = true;
                                                } catch (error) {
                                                  messageHandler.handleApiException(context, error, 'VoteYesNoAbstain');
                                                }
                                                return callSuccessful;
                                              }));

                                              if (ret != null) {
                                                try {
                                                  await pageStore.refreshVoteDefinition(targetStore);
                                                } catch (error) {
                                                  messageHandler.handleApiException(context, error, 'VoteYesNoAbstain');
                                                }
                                              }
                                            },
                                          )),
                                ],
                              ),
                            ),
                            Observer(
                              builder: (_) => JudoRow(
                                mainAxisAlignment: MainAxisAlignment.start,
                                hidden: (targetStore?.isNotSelectAnswerType) ?? false,
                                col: 4.0,
                                row: 1.0,
                                children: [
                                  Observer(
                                      builder: (_) => JudoButton(
                                            col: 4.0,
                                            label: AppLocalizations.of(context).lookUpValue(context, 'VoteSelectAnswer'),
                                            icon: Icon(getIconByString('chevron_right')),
                                            loadingState: pageStore.voteSelectAnswerButtonLoadingState,
                                            order: 10,
                                            disabled: pageStore.pageState.disabledByLoading || false,
                                            onPressed: () async {
                                              AdminVoteDefinitionStore cloned = AdminVoteDefinitionStore.clone(targetStore);
                                              var selected = await judoSelectAdminAdminVoteDefinitionsViewVoteDefinitionVoteSelectAnswerDialog(
                                                context: context,
                                                ownerStore: cloned,
                                                pageStore: pageStore,
                                                pageConfig: pageConfig,
                                              );

                                              if (selected != null) {
                                                try {
                                                  await pageStore.edemokraciaAdminVoteDefinitionVoteSelectAnswer(selected, targetStore);

                                                  messageHandler.showSuccessMessage(context, 'Successful operation', 'VoteSelectAnswer');
                                                  ;

                                                  await pageStore.refreshVoteDefinition(targetStore);
                                                } catch (error) {
                                                  messageHandler.handleApiException(context, error, 'VoteSelectAnswer');
                                                }
                                              }
                                            },
                                          )),
                                ],
                              ),
                            ),
                            Observer(
                              builder: (_) => JudoRow(
                                mainAxisAlignment: MainAxisAlignment.start,
                                hidden: (targetStore?.isNotRatingType) ?? false,
                                col: 4.0,
                                row: 1.0,
                                children: [
                                  Observer(
                                      builder: (_) => JudoButton(
                                            col: 4.0,
                                            label: AppLocalizations.of(context).lookUpValue(context, 'VoteRating'),
                                            icon: Icon(getIconByString('chevron_right')),
                                            loadingState: pageStore.voteRatingButtonLoadingState,
                                            order: 11,
                                            disabled: pageStore.pageState.disabledByLoading || false,
                                            onPressed: () async {
                                              var ret = await navigation.open(Routes.adminVoteDefinitionVoteRatingOperationInputPage, arguments:
                                                  AdminVoteDefinitionVoteRatingOperationInputPageArguments(operationCall:
                                                      (RatingVoteInputStore input, AdminVoteDefinitionVoteRatingOperationInputPageStore inputPageStore) async {
                                                bool callSuccessful = false;

                                                try {
                                                  await pageStore.edemokraciaAdminVoteDefinitionVoteRating(input, targetStore);

                                                  callSuccessful = true;
                                                } catch (error) {
                                                  messageHandler.handleApiException(context, error, 'VoteRating');
                                                }
                                                return callSuccessful;
                                              }));

                                              if (ret != null) {
                                                try {
                                                  await pageStore.refreshVoteDefinition(targetStore);
                                                } catch (error) {
                                                  messageHandler.handleApiException(context, error, 'VoteRating');
                                                }
                                              }
                                            },
                                          )),
                                ],
                              ),
                            ),
                          ],
                          tabs: [
                            Tab(
                              text: AppLocalizations.of(context).lookUpValue(context, 'Yes / No vote'),
                            ),
                            Tab(
                              text: AppLocalizations.of(context).lookUpValue(context, 'Yes / No / Abstain vote'),
                            ),
                            Tab(
                              text: AppLocalizations.of(context).lookUpValue(context, 'Select answer vote'),
                            ),
                            Tab(
                              text: AppLocalizations.of(context).lookUpValue(context, 'Rating vote'),
                            ),
                          ]),
                    ),
                  ],
                ),
              ],
            ),
          ]),
        ),
      )
    ]),
  );
}