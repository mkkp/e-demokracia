//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    C L A S S
// ------------------------------
// Factory expression: #factoryExpressionForOriginalPageContainers(#application)
// Path expression: #pageStorePath(#self.owner)
// Template name: lib/ui/pages/page/page.dart.hbs
// Application: edemokracia::admin::Admin
// Container: default

part of admin.ui.pages.admin.pro.cons.update;

class AdminProConsUpdatePageStore extends _AdminProConsUpdatePageStore with _$AdminProConsUpdatePageStore {}

abstract class _AdminProConsUpdatePageStore with Store {
  AdminAdminRepository _actorRepository = locator<AdminAdminRepository>();
  final tableService = locator<TableService>();

  PageState pageState = PageState();
  LoadingState voteUpButtonLoadingState;
  LoadingState voteDownButtonLoadingState;
  LoadingState createSubArgumentButtonLoadingState;
  LoadingState createCommentButtonLoadingState;

  LoadingState backActionLoadingState;
  LoadingState saveEditActionLoadingState;

  _AdminProConsUpdatePageStore() {
    voteUpButtonLoadingState = LoadingState(pageState.setDisabledByLoading);
    voteDownButtonLoadingState = LoadingState(pageState.setDisabledByLoading);
    createSubArgumentButtonLoadingState = LoadingState(pageState.setDisabledByLoading);
    createCommentButtonLoadingState = LoadingState(pageState.setDisabledByLoading);

    backActionLoadingState = LoadingState(pageState.setDisabledByLoading);
    saveEditActionLoadingState = LoadingState(pageState.setDisabledByLoading);
  }

  @action
  void initSortAggregatedLists(BuildContext context, AdminProConsUpdateConfig pageConfig) {
    if (targetStore.cons != null) {
      var dataInfo = EdemokraciaAdminProConsEditConsMobileTable(context, this, pageConfig, disabled: true);
      targetStore.cons.sort(TableUtility.getSortComparator(consSortColumnIndex, consSortAsc, dataInfo));
    }
    if (targetStore.pros != null) {
      var dataInfo = EdemokraciaAdminProConsEditProsMobileTable(context, this, pageConfig, disabled: true);
      targetStore.pros.sort(TableUtility.getSortComparator(prosSortColumnIndex, prosSortAsc, dataInfo));
    }
    if (targetStore.comments != null) {
      var dataInfo = EdemokraciaAdminProConsEditCommentsMobileTable(context, this, pageConfig, disabled: true);
      targetStore.comments.sort(TableUtility.getSortComparator(commentsSortColumnIndex, commentsSortAsc, dataInfo));
    }
  }

  @observable
  AdminConStore targetStore;

  final Map<String, ValidationError> validationAttributeErrorMessageMap = {
    'created': ValidationError(),
    'createdByName': ValidationError(),
    'description': ValidationError(),
    'downVotes': ValidationError(),
    'title': ValidationError(),
    'upVotes': ValidationError(),
    'comments': ValidationError(),
    'cons': ValidationError(),
    'createdBy': ValidationError(),
    'pros': ValidationError(),
    'votes': ValidationError(),
  };

  @action
  Future<void> refreshCon(AdminConStore targetStore) async {
    targetStore.updateWith(await _actorRepository.edemokraciaAdminConGetByIdentifier(targetStore));
  }

  @action
  Future<AdminConStore> validate(AdminConStore targetStore) async {
    return await _actorRepository.edemokraciaAdminConValidateForUpdate(targetStore);
  }

  @action
  Future<String> uploadFile(String attributePath, PlatformFile file) async {
    return await _actorRepository.uploadFile(attributePath, file);
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

  // Cons range actions

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

  // Pros range actions

  int commentsQueryLimit = (52.0 - 2).round();

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
    int subListStart = commentsTablePageNumber * commentsQueryLimit;
    int subListEnd;
    if (commentsTableNextEnable) {
      subListEnd = subListStart + commentsQueryLimit;
    } else {
      subListEnd = targetStore.comments.length;
    }
    return targetStore.comments.sublist(subListStart, subListEnd);
  }

  // Comments range actions

  int createdByQueryLimit = 5; // For judo link setter dialog

  // CreatedBy range actions

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
  void commentsSetSort(BuildContext context, String sortColumnName, int sortColumnIndex, bool asc, Comparator sortCompare, AdminConStore store) {
    if (commentsSortColumnIndex != sortColumnIndex) {
      commentsSortAsc = true;
    } else {
      commentsSortAsc = !commentsSortAsc;
    }
    commentsSortColumnIndex = sortColumnIndex;
    commentsSortColumnName = sortColumnName;
    commentsSortCompare = sortCompare;

    tableService.storeSorting(
      'EdemokraciaAdminProConsEditComments',
      sortColumnIndex: commentsSortColumnIndex,
      sortColumnName: commentsSortColumnName,
      sortAsc: commentsSortAsc,
    );

    store.comments.sort(sortCompare);
  }

  // Comments aggregation actions

  @observable
  ObservableFuture conCommentsStoreFuture;

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
  void consSetSort(BuildContext context, String sortColumnName, int sortColumnIndex, bool asc, Comparator sortCompare, AdminConStore store) {
    if (consSortColumnIndex != sortColumnIndex) {
      consSortAsc = true;
    } else {
      consSortAsc = !consSortAsc;
    }
    consSortColumnIndex = sortColumnIndex;
    consSortColumnName = sortColumnName;
    consSortCompare = sortCompare;

    tableService.storeSorting(
      'EdemokraciaAdminProConsEditCons',
      sortColumnIndex: consSortColumnIndex,
      sortColumnName: consSortColumnName,
      sortAsc: consSortAsc,
    );

    store.cons.sort(sortCompare);
  }

  // Cons aggregation actions

  @observable
  ObservableFuture conConsStoreFuture;

  // CreatedBy embedded table order

  // CreatedBy aggregation actions

  @observable
  ObservableFuture conCreatedByStoreFuture;

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
  void prosSetSort(BuildContext context, String sortColumnName, int sortColumnIndex, bool asc, Comparator sortCompare, AdminConStore store) {
    if (prosSortColumnIndex != sortColumnIndex) {
      prosSortAsc = true;
    } else {
      prosSortAsc = !prosSortAsc;
    }
    prosSortColumnIndex = sortColumnIndex;
    prosSortColumnName = sortColumnName;
    prosSortCompare = sortCompare;

    tableService.storeSorting(
      'EdemokraciaAdminProConsEditPros',
      sortColumnIndex: prosSortColumnIndex,
      sortColumnName: prosSortColumnName,
      sortAsc: prosSortAsc,
    );

    store.pros.sort(sortCompare);
  }

  // Pros aggregation actions

  @observable
  ObservableFuture conProsStoreFuture;
}

class AdminProConsUpdatePage extends StatefulWidget {
  static const String title = 'View / Edit Con';

  final AdminConStore targetStore;

  const AdminProConsUpdatePage({Key key, @required this.targetStore}) : super(key: key);

  @override
  State<StatefulWidget> createState() => _AdminProConsUpdatePageState(targetStore: targetStore);
}

class _AdminProConsUpdatePageState extends State<AdminProConsUpdatePage> {
  final AdminConStore targetStore;

  final tableService = locator<TableService>();
  final AdminProConsUpdatePageStore pageStore = AdminProConsUpdatePageStore();
  final AdminProConsUpdateConfig pageConfig = AdminProConsUpdateConfig();
  AdminProConsUpdatePageActions pageActions;

  _AdminProConsUpdatePageState({@required this.targetStore}) {
    pageStore.targetStore = targetStore;

    /// Aggregate table sorting variables init with default values
    SortSettings consSortSettings = pageStore.tableService.loadSortingUsingFallback(
      'EdemokraciaAdminProConsEditCons',
      sortColumnIndex: pageConfig.consTableConfig.sortColumnIndex,
      sortColumnName: pageConfig.consTableConfig.sortColumnName,
      sortAsc: pageConfig.consTableConfig.sortAsc,
    );

    pageStore.consSortColumnIndex = consSortSettings.sortColumnIndex; // TODO: JNG-2716
    pageStore.consSortColumnName = consSortSettings.sortColumnName; // TODO: JNG-2716
    pageStore.consSortAsc = consSortSettings.sortAsc; // TODO: JNG-2716
    /// Aggregate table sorting variables init with default values
    SortSettings prosSortSettings = pageStore.tableService.loadSortingUsingFallback(
      'EdemokraciaAdminProConsEditPros',
      sortColumnIndex: pageConfig.prosTableConfig.sortColumnIndex,
      sortColumnName: pageConfig.prosTableConfig.sortColumnName,
      sortAsc: pageConfig.prosTableConfig.sortAsc,
    );

    pageStore.prosSortColumnIndex = prosSortSettings.sortColumnIndex; // TODO: JNG-2716
    pageStore.prosSortColumnName = prosSortSettings.sortColumnName; // TODO: JNG-2716
    pageStore.prosSortAsc = prosSortSettings.sortAsc; // TODO: JNG-2716
    /// Aggregate table sorting variables init with default values
    SortSettings commentsSortSettings = pageStore.tableService.loadSortingUsingFallback(
      'EdemokraciaAdminProConsEditComments',
      sortColumnIndex: pageConfig.commentsTableConfig.sortColumnIndex,
      sortColumnName: pageConfig.commentsTableConfig.sortColumnName,
      sortAsc: pageConfig.commentsTableConfig.sortAsc,
    );

    pageStore.commentsSortColumnIndex = commentsSortSettings.sortColumnIndex; // TODO: JNG-2716
    pageStore.commentsSortColumnName = commentsSortSettings.sortColumnName; // TODO: JNG-2716
    pageStore.commentsSortAsc = commentsSortSettings.sortAsc; // TODO: JNG-2716

    final navigation = locator<NavigationState>();
    final messageHandler = locator<MessageHandler>();

    pageActions = AdminProConsUpdatePageActions(navigation, targetStore, pageStore, pageConfig);
    pageStore.refreshCon(targetStore).then((_) {
      navigation.setCurrentTitle(pageConfig.titleGenerator != null
          ? pageConfig.titleGenerator(context, pageStore, targetStore)
          : AppLocalizations.of(context).lookUpValue(context, AdminProConsUpdatePage.title));
      navigation.setCurrentPageActions(pageActions);
      pageStore.initSortAggregatedLists(context, pageConfig);
    }).catchError((error) => messageHandler.handleApiException(context, error, 'Refresh'));
  }

  var inputWidgetKeyMap = {
    'title': GlobalKey(),
    'created': GlobalKey(),
    'description': GlobalKey(),
  };

  @override
  Widget build(BuildContext context) {
    LayoutBuilder layout = LayoutBuilder(builder: (context, constraints) {
      if (MediaQuery.of(context).size.width >= 0 && MediaQuery.of(context).size.width <= 599) {
        return getAdminProConsUpdateMobilePage(context, targetStore, pageStore, pageConfig, inputWidgetKeyMap);
      }
      if (MediaQuery.of(context).size.width >= 600 && MediaQuery.of(context).size.width <= 839) {
        return getAdminProConsUpdateTabletPage(context, targetStore, pageStore, pageConfig, inputWidgetKeyMap);
      }
      if (MediaQuery.of(context).size.width >= 840 && MediaQuery.of(context).size.width <= 32767) {
        return getAdminProConsUpdateDesktopPage(context, targetStore, pageStore, pageConfig, inputWidgetKeyMap);
      }
      return getAdminProConsUpdateDesktopPage(context, targetStore, pageStore, pageConfig, inputWidgetKeyMap);
    });

    return layout;
  }
}