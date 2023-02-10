//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    C L A S S
// ------------------------------
// Factory expression: #factoryExpressionForOriginalPageContainers(#application)
// Path expression: #pageStorePath(#self.owner)
// Template name: lib/ui/pages/page/page.dart.hbs
// Application: edemokracia::admin::Admin
// Container: default

part of admin.ui.pages.admin.admin.debates.view;

class AdminAdminDebatesViewPageStore extends _AdminAdminDebatesViewPageStore with _$AdminAdminDebatesViewPageStore {}

abstract class _AdminAdminDebatesViewPageStore with Store {
  AdminAdminRepository _actorRepository = locator<AdminAdminRepository>();
  final tableService = locator<TableService>();

  PageState pageState = PageState();
  LoadingState closeDebateButtonLoadingState;
  LoadingState createArgumentButtonLoadingState;
  LoadingState createCommentButtonLoadingState;

  LoadingState backActionLoadingState;
  LoadingState refreshActionLoadingState;
  LoadingState deleteActionLoadingState;
  LoadingState editActionLoadingState;

  _AdminAdminDebatesViewPageStore() {
    closeDebateButtonLoadingState = LoadingState(pageState.setDisabledByLoading);
    createArgumentButtonLoadingState = LoadingState(pageState.setDisabledByLoading);
    createCommentButtonLoadingState = LoadingState(pageState.setDisabledByLoading);

    backActionLoadingState = LoadingState(pageState.setDisabledByLoading);
    refreshActionLoadingState = LoadingState(pageState.setDisabledByLoading);
    deleteActionLoadingState = LoadingState(pageState.setDisabledByLoading);
    editActionLoadingState = LoadingState(pageState.setDisabledByLoading);
  }

  @action
  void initSortAggregatedLists(BuildContext context, AdminAdminDebatesViewConfig pageConfig) {
    if (targetStore.cons != null) {
      var dataInfo = EdemokraciaAdminAdminDebatesViewConsMobileTable(context, this, pageConfig, disabled: false);
      targetStore.cons.sort(TableUtility.getSortComparator(consSortColumnIndex, consSortAsc, dataInfo));
    }
    if (targetStore.pros != null) {
      var dataInfo = EdemokraciaAdminAdminDebatesViewProsMobileTable(context, this, pageConfig, disabled: false);
      targetStore.pros.sort(TableUtility.getSortComparator(prosSortColumnIndex, prosSortAsc, dataInfo));
    }
    if (targetStore.comments != null) {
      var dataInfo = EdemokraciaAdminAdminDebatesViewCommentsMobileTable(context, this, pageConfig, disabled: false);
      targetStore.comments.sort(TableUtility.getSortComparator(commentsSortColumnIndex, commentsSortAsc, dataInfo));
    }
  }

  @observable
  AdminDebateStore targetStore;

  @action
  Future<void> refreshDebate(AdminDebateStore targetStore) async {
    targetStore.updateWith(await _actorRepository.edemokraciaAdminDebateGetByIdentifier(
      targetStore,
      mask:
          '{title,status,closeAt,description,issue{representation},createdBy{representation},voteDefinition{title,created,status,closeAt},pros{title,upVotes,downVotes},cons{title,upVotes,downVotes},comments{created,comment,createdByName,upVotes,downVotes}}',
    ));
  }

  @action
  Future<void> updateDebate(AdminDebateStore newTargetStore, AdminDebateStore oldTargetStore) async {
    await _actorRepository.edemokraciaAdminDebateUpdate(newTargetStore);
    await refreshDebate(oldTargetStore);
  }

  @action
  Future<void> deleteDebate(AdminDebateStore targetStore) async {
    await _actorRepository.edemokraciaAdminDebateDelete(targetStore);
  }

  @action
  Future<void> downloadFile(String downloadToken) async {
    final file = await _actorRepository.downloadFile(downloadToken);
    await Downloader().downloadFile(file);
  }

  int consQueryLimit = (12.0 - 2).round();

  // Cons embedded table paging

  @computed
  int get consTableItemsRangeStart => consTablePageNumber * consQueryLimit + 1;

  @computed
  int get consTableItemsRangeEnd => consTableItemsRangeStart - 1 + consTablePagingList.length;

  @observable
  int consTablePageNumber = 0;

  @computed
  bool get consTablePreviousEnable => consTablePageNumber > 0;

  @computed
  bool get consTableNextEnable => (consTablePageNumber * consQueryLimit + consQueryLimit) < targetStore.cons.length;

  @action
  void consTableNextPage() {
    if (consTableNextEnable) {
      consTablePageNumber++;
    }
  }

  @action
  void consTablePreviousPage() {
    if (consTablePreviousEnable) {
      consTablePageNumber--;
    }
  }

  @computed
  List<AdminConStore> get consTablePagingList {
    return targetStore.cons;
  }

  int prosQueryLimit = (12.0 - 2).round();

  // Pros embedded table paging

  @computed
  int get prosTableItemsRangeStart => prosTablePageNumber * prosQueryLimit + 1;

  @computed
  int get prosTableItemsRangeEnd => prosTableItemsRangeStart - 1 + prosTablePagingList.length;

  @observable
  int prosTablePageNumber = 0;

  @computed
  bool get prosTablePreviousEnable => prosTablePageNumber > 0;

  @computed
  bool get prosTableNextEnable => (prosTablePageNumber * prosQueryLimit + prosQueryLimit) < targetStore.pros.length;

  @action
  void prosTableNextPage() {
    if (prosTableNextEnable) {
      prosTablePageNumber++;
    }
  }

  @action
  void prosTablePreviousPage() {
    if (prosTablePreviousEnable) {
      prosTablePageNumber--;
    }
  }

  @computed
  List<AdminProStore> get prosTablePagingList {
    return targetStore.pros;
  }

  int commentsQueryLimit = (12.0 - 2).round();

  // Comments embedded table paging

  @computed
  int get commentsTableItemsRangeStart => commentsTablePageNumber * commentsQueryLimit + 1;

  @computed
  int get commentsTableItemsRangeEnd => commentsTableItemsRangeStart - 1 + commentsTablePagingList.length;

  @observable
  int commentsTablePageNumber = 0;

  @computed
  bool get commentsTablePreviousEnable => commentsTablePageNumber > 0;

  @computed
  bool get commentsTableNextEnable => (commentsTablePageNumber * commentsQueryLimit + commentsQueryLimit) < targetStore.comments.length;

  @action
  void commentsTableNextPage() {
    if (commentsTableNextEnable) {
      commentsTablePageNumber++;
    }
  }

  @action
  void commentsTablePreviousPage() {
    if (commentsTablePreviousEnable) {
      commentsTablePageNumber--;
    }
  }

  @computed
  List<AdminCommentStore> get commentsTablePagingList {
    return targetStore.comments;
  }

  // Comments embedded table order

  @observable
  int commentsSortColumnIndex;

  @observable
  String commentsSortColumnName;

  @observable
  bool commentsSortAsc;

  @observable
  Comparator commentsSortCompare;

  @action
  void commentsSetSort(BuildContext context, String sortColumnName, int sortColumnIndex, bool asc, Comparator sortCompare, AdminDebateStore store) {
    if (commentsSortColumnIndex != sortColumnIndex) {
      commentsSortAsc = true;
    } else {
      commentsSortAsc = !commentsSortAsc;
    }
    commentsSortColumnIndex = sortColumnIndex;
    commentsSortColumnName = sortColumnName;
    commentsSortCompare = sortCompare;

    tableService.storeSorting(
      'EdemokraciaAdminAdminDebatesViewComments',
      sortColumnIndex: commentsSortColumnIndex,
      sortColumnName: commentsSortColumnName,
      sortAsc: commentsSortAsc,
    );

    store.comments.sort(sortCompare);
  }

  // Comments aggregation actions

  @observable
  ObservableFuture debateCommentsStoreFuture;

  @action
  Future<void> deleteCommentsComment(AdminCommentStore targetStore, AdminDebateStore ownerStore) async {
    await _actorRepository.edemokraciaAdminCommentDelete(targetStore);
    refreshDebate(ownerStore);
  }

  @action
  Future<void> updateCommentsComment(AdminCommentStore targetStore, AdminDebateStore ownerStore) async {
    await _actorRepository.edemokraciaAdminCommentUpdate(targetStore);
    await refreshDebate(ownerStore);
  }

  // Cons embedded table order

  @observable
  int consSortColumnIndex;

  @observable
  String consSortColumnName;

  @observable
  bool consSortAsc;

  @observable
  Comparator consSortCompare;

  @action
  void consSetSort(BuildContext context, String sortColumnName, int sortColumnIndex, bool asc, Comparator sortCompare, AdminDebateStore store) {
    if (consSortColumnIndex != sortColumnIndex) {
      consSortAsc = true;
    } else {
      consSortAsc = !consSortAsc;
    }
    consSortColumnIndex = sortColumnIndex;
    consSortColumnName = sortColumnName;
    consSortCompare = sortCompare;

    tableService.storeSorting(
      'EdemokraciaAdminAdminDebatesViewCons',
      sortColumnIndex: consSortColumnIndex,
      sortColumnName: consSortColumnName,
      sortAsc: consSortAsc,
    );

    store.cons.sort(sortCompare);
  }

  // Cons aggregation actions

  @observable
  ObservableFuture debateConsStoreFuture;

  @action
  Future<void> deleteConsCon(AdminConStore targetStore, AdminDebateStore ownerStore) async {
    await _actorRepository.edemokraciaAdminConDelete(targetStore);
    refreshDebate(ownerStore);
  }

  @action
  Future<void> updateConsCon(AdminConStore targetStore, AdminDebateStore ownerStore) async {
    await _actorRepository.edemokraciaAdminConUpdate(targetStore);
    await refreshDebate(ownerStore);
  }

  // CreatedBy embedded table order

  // CreatedBy aggregation actions

  @observable
  ObservableFuture debateCreatedByStoreFuture;

  // Issue embedded table order

  // Issue aggregation actions

  @observable
  ObservableFuture debateIssueStoreFuture;

  // Pros embedded table order

  @observable
  int prosSortColumnIndex;

  @observable
  String prosSortColumnName;

  @observable
  bool prosSortAsc;

  @observable
  Comparator prosSortCompare;

  @action
  void prosSetSort(BuildContext context, String sortColumnName, int sortColumnIndex, bool asc, Comparator sortCompare, AdminDebateStore store) {
    if (prosSortColumnIndex != sortColumnIndex) {
      prosSortAsc = true;
    } else {
      prosSortAsc = !prosSortAsc;
    }
    prosSortColumnIndex = sortColumnIndex;
    prosSortColumnName = sortColumnName;
    prosSortCompare = sortCompare;

    tableService.storeSorting(
      'EdemokraciaAdminAdminDebatesViewPros',
      sortColumnIndex: prosSortColumnIndex,
      sortColumnName: prosSortColumnName,
      sortAsc: prosSortAsc,
    );

    store.pros.sort(sortCompare);
  }

  // Pros aggregation actions

  @observable
  ObservableFuture debateProsStoreFuture;

  @action
  Future<void> deleteProsPro(AdminProStore targetStore, AdminDebateStore ownerStore) async {
    await _actorRepository.edemokraciaAdminProDelete(targetStore);
    refreshDebate(ownerStore);
  }

  @action
  Future<void> updateProsPro(AdminProStore targetStore, AdminDebateStore ownerStore) async {
    await _actorRepository.edemokraciaAdminProUpdate(targetStore);
    await refreshDebate(ownerStore);
  }

  // VoteDefinition embedded table order

  // VoteDefinition aggregation actions

  @observable
  ObservableFuture debateVoteDefinitionStoreFuture;

  //OPERATIONS
  @action
  Future<void> edemokraciaAdminCommentVoteDown(AdminCommentStore ownerStore) async {
    await _actorRepository.edemokraciaAdminCommentVoteDown(ownerStore);
  }

  @action
  Future<void> edemokraciaAdminConVoteUp(AdminConStore ownerStore) async {
    await _actorRepository.edemokraciaAdminConVoteUp(ownerStore);
  }

  @action
  Future<void> edemokraciaAdminProCreateSubArgument(CreateArgumentInputStore targetStore, AdminProStore ownerStore) async {
    await _actorRepository.edemokraciaAdminProCreateSubArgument(targetStore, ownerStore);
  }

  @action
  Future<void> edemokraciaAdminDebateCreateComment(CreateCommentInputStore targetStore, AdminDebateStore ownerStore) async {
    await _actorRepository.edemokraciaAdminDebateCreateComment(targetStore, ownerStore);
  }

  @action
  Future<void> edemokraciaAdminCommentVoteUp(AdminCommentStore ownerStore) async {
    await _actorRepository.edemokraciaAdminCommentVoteUp(ownerStore);
  }

  @action
  Future<void> edemokraciaAdminConCreateComment(CreateCommentInputStore targetStore, AdminConStore ownerStore) async {
    await _actorRepository.edemokraciaAdminConCreateComment(targetStore, ownerStore);
  }

  @action
  Future<void> edemokraciaAdminProVoteUp(AdminProStore ownerStore) async {
    await _actorRepository.edemokraciaAdminProVoteUp(ownerStore);
  }

  @action
  Future<void> edemokraciaAdminDebateCreateArgument(CreateArgumentInputStore targetStore, AdminDebateStore ownerStore) async {
    await _actorRepository.edemokraciaAdminDebateCreateArgument(targetStore, ownerStore);
  }

  @action
  Future<void> edemokraciaAdminConCreateSubArgument(CreateArgumentInputStore targetStore, AdminConStore ownerStore) async {
    await _actorRepository.edemokraciaAdminConCreateSubArgument(targetStore, ownerStore);
  }

  @action
  Future<void> edemokraciaAdminProCreateComment(CreateCommentInputStore targetStore, AdminProStore ownerStore) async {
    await _actorRepository.edemokraciaAdminProCreateComment(targetStore, ownerStore);
  }

  @action
  Future<void> edemokraciaAdminConVoteDown(AdminConStore ownerStore) async {
    await _actorRepository.edemokraciaAdminConVoteDown(ownerStore);
  }

  @action
  Future<void> edemokraciaAdminProVoteDown(AdminProStore ownerStore) async {
    await _actorRepository.edemokraciaAdminProVoteDown(ownerStore);
  }

  @action
  Future<VoteDefinitionStore> edemokraciaAdminDebateCloseDebate(CloseDebateInputStore targetStore, AdminDebateStore ownerStore) async {
    return await _actorRepository.edemokraciaAdminDebateCloseDebate(targetStore, ownerStore);
  }
}

class AdminAdminDebatesViewPage extends StatefulWidget {
  static const String title = 'View / Edit Debate';

  final String idParam;

  const AdminAdminDebatesViewPage({Key key, @PathParam('id') this.idParam}) : super(key: key);

  @override
  State<StatefulWidget> createState() => _AdminAdminDebatesViewPageState(idParam: idParam);
}

class _AdminAdminDebatesViewPageState extends State<AdminAdminDebatesViewPage> {
  final String idParam;
  AdminDebateStore targetStore;

  final tableService = locator<TableService>();
  final AdminAdminDebatesViewPageStore pageStore = AdminAdminDebatesViewPageStore();
  final AdminAdminDebatesViewConfig pageConfig = AdminAdminDebatesViewConfig();
  AdminAdminDebatesViewPageActions pageActions;

  _AdminAdminDebatesViewPageState({this.idParam}) {
    final navigation = locator<NavigationState>();
    final messageHandler = locator<MessageHandler>();

    /// Aggregate table sorting variables init with default values
    SortSettings consSortSettings = pageStore.tableService.loadSortingUsingFallback(
      'EdemokraciaAdminAdminDebatesViewCons',
      sortColumnIndex: pageConfig.consTableConfig.sortColumnIndex,
      sortColumnName: pageConfig.consTableConfig.sortColumnName,
      sortAsc: pageConfig.consTableConfig.sortAsc,
    );

    pageStore.consSortColumnIndex = consSortSettings.sortColumnIndex; // TODO: JNG-2716
    pageStore.consSortColumnName = consSortSettings.sortColumnName; // TODO: JNG-2716
    pageStore.consSortAsc = consSortSettings.sortAsc; // TODO: JNG-2716
    /// Aggregate table sorting variables init with default values
    SortSettings prosSortSettings = pageStore.tableService.loadSortingUsingFallback(
      'EdemokraciaAdminAdminDebatesViewPros',
      sortColumnIndex: pageConfig.prosTableConfig.sortColumnIndex,
      sortColumnName: pageConfig.prosTableConfig.sortColumnName,
      sortAsc: pageConfig.prosTableConfig.sortAsc,
    );

    pageStore.prosSortColumnIndex = prosSortSettings.sortColumnIndex; // TODO: JNG-2716
    pageStore.prosSortColumnName = prosSortSettings.sortColumnName; // TODO: JNG-2716
    pageStore.prosSortAsc = prosSortSettings.sortAsc; // TODO: JNG-2716
    /// Aggregate table sorting variables init with default values
    SortSettings commentsSortSettings = pageStore.tableService.loadSortingUsingFallback(
      'EdemokraciaAdminAdminDebatesViewComments',
      sortColumnIndex: pageConfig.commentsTableConfig.sortColumnIndex,
      sortColumnName: pageConfig.commentsTableConfig.sortColumnName,
      sortAsc: pageConfig.commentsTableConfig.sortAsc,
    );

    pageStore.commentsSortColumnIndex = commentsSortSettings.sortColumnIndex; // TODO: JNG-2716
    pageStore.commentsSortColumnName = commentsSortSettings.sortColumnName; // TODO: JNG-2716
    pageStore.commentsSortAsc = commentsSortSettings.sortAsc; // TODO: JNG-2716

    targetStore = AdminDebateStore();
    targetStore.internal__signedIdentifier = idParam;
    pageStore.targetStore = targetStore;
    pageActions = AdminAdminDebatesViewPageActions(navigation, targetStore, pageStore, pageConfig);
    pageStore.refreshDebate(targetStore).then((_) {
      navigation.setCurrentTitle(pageConfig.titleGenerator != null
          ? pageConfig.titleGenerator(context, pageStore, targetStore)
          : AppLocalizations.of(context).lookUpValue(context, AdminAdminDebatesViewPage.title));
      navigation.setCurrentPageActions(pageActions);
      pageStore.initSortAggregatedLists(context, pageConfig);
    }).catchError((error) => messageHandler.handleApiException(context, error, 'Refresh'));
  }

  @override
  Widget build(BuildContext context) {
    LayoutBuilder layout = LayoutBuilder(builder: (context, constraints) {
      if (MediaQuery.of(context).size.width >= 0 && MediaQuery.of(context).size.width <= 599) {
        return getAdminAdminDebatesViewMobilePage(context, targetStore, pageStore, pageConfig);
      }
      if (MediaQuery.of(context).size.width >= 600 && MediaQuery.of(context).size.width <= 839) {
        return getAdminAdminDebatesViewTabletPage(context, targetStore, pageStore, pageConfig);
      }
      if (MediaQuery.of(context).size.width >= 840 && MediaQuery.of(context).size.width <= 32767) {
        return getAdminAdminDebatesViewDesktopPage(context, targetStore, pageStore, pageConfig);
      }
      return getAdminAdminDebatesViewDesktopPage(context, targetStore, pageStore, pageConfig);
    });

    return layout;
  }
}