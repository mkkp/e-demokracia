// GENERATED CODE - DO NOT MODIFY BY HAND

part of admin.ui.pages.issue.categories.view;

// **************************************************************************
// StoreGenerator
// **************************************************************************

// ignore_for_file: non_constant_identifier_names, unnecessary_brace_in_string_interps, unnecessary_lambdas, prefer_expression_function_bodies, lines_longer_than_80_chars, avoid_as, avoid_annotating_with_dynamic

mixin _$IssueCategoriesViewPageStore on _IssueCategoriesViewPageStore, Store {
  final _$targetStoreAtom = Atom(name: '_IssueCategoriesViewPageStore.targetStore');

  @override
  IssueCategoryStore get targetStore {
    _$targetStoreAtom.reportRead();
    return super.targetStore;
  }

  @override
  set targetStore(IssueCategoryStore value) {
    _$targetStoreAtom.reportWrite(value, super.targetStore, () {
      super.targetStore = value;
    });
  }

  final _$subcategoriesSortColumnIndexAtom = Atom(name: '_IssueCategoriesViewPageStore.subcategoriesSortColumnIndex');

  @override
  int get subcategoriesSortColumnIndex {
    _$subcategoriesSortColumnIndexAtom.reportRead();
    return super.subcategoriesSortColumnIndex;
  }

  @override
  set subcategoriesSortColumnIndex(int value) {
    _$subcategoriesSortColumnIndexAtom.reportWrite(value, super.subcategoriesSortColumnIndex, () {
      super.subcategoriesSortColumnIndex = value;
    });
  }

  final _$subcategoriesSortColumnNameAtom = Atom(name: '_IssueCategoriesViewPageStore.subcategoriesSortColumnName');

  @override
  String get subcategoriesSortColumnName {
    _$subcategoriesSortColumnNameAtom.reportRead();
    return super.subcategoriesSortColumnName;
  }

  @override
  set subcategoriesSortColumnName(String value) {
    _$subcategoriesSortColumnNameAtom.reportWrite(value, super.subcategoriesSortColumnName, () {
      super.subcategoriesSortColumnName = value;
    });
  }

  final _$subcategoriesSortAscAtom = Atom(name: '_IssueCategoriesViewPageStore.subcategoriesSortAsc');

  @override
  bool get subcategoriesSortAsc {
    _$subcategoriesSortAscAtom.reportRead();
    return super.subcategoriesSortAsc;
  }

  @override
  set subcategoriesSortAsc(bool value) {
    _$subcategoriesSortAscAtom.reportWrite(value, super.subcategoriesSortAsc, () {
      super.subcategoriesSortAsc = value;
    });
  }

  final _$subcategoriesSortCompareAtom = Atom(name: '_IssueCategoriesViewPageStore.subcategoriesSortCompare');

  @override
  Comparator<dynamic> get subcategoriesSortCompare {
    _$subcategoriesSortCompareAtom.reportRead();
    return super.subcategoriesSortCompare;
  }

  @override
  set subcategoriesSortCompare(Comparator<dynamic> value) {
    _$subcategoriesSortCompareAtom.reportWrite(value, super.subcategoriesSortCompare, () {
      super.subcategoriesSortCompare = value;
    });
  }

  final _$issueCategorySubcategoriesStoreFutureAtom = Atom(name: '_IssueCategoriesViewPageStore.issueCategorySubcategoriesStoreFuture');

  @override
  ObservableFuture<dynamic> get issueCategorySubcategoriesStoreFuture {
    _$issueCategorySubcategoriesStoreFutureAtom.reportRead();
    return super.issueCategorySubcategoriesStoreFuture;
  }

  @override
  set issueCategorySubcategoriesStoreFuture(ObservableFuture<dynamic> value) {
    _$issueCategorySubcategoriesStoreFutureAtom.reportWrite(value, super.issueCategorySubcategoriesStoreFuture, () {
      super.issueCategorySubcategoriesStoreFuture = value;
    });
  }

  final _$refreshIssueCategoryAsyncAction = AsyncAction('_IssueCategoriesViewPageStore.refreshIssueCategory');

  @override
  Future<void> refreshIssueCategory(IssueCategoryStore targetStore) {
    return _$refreshIssueCategoryAsyncAction.run(() => super.refreshIssueCategory(targetStore));
  }

  final _$downloadFileAsyncAction = AsyncAction('_IssueCategoriesViewPageStore.downloadFile');

  @override
  Future<void> downloadFile(String downloadToken) {
    return _$downloadFileAsyncAction.run(() => super.downloadFile(downloadToken));
  }

  final _$_IssueCategoriesViewPageStoreActionController = ActionController(name: '_IssueCategoriesViewPageStore');

  @override
  void initSortAggregatedLists(BuildContext context, IssueCategoriesViewConfig pageConfig) {
    final _$actionInfo = _$_IssueCategoriesViewPageStoreActionController.startAction(name: '_IssueCategoriesViewPageStore.initSortAggregatedLists');
    try {
      return super.initSortAggregatedLists(context, pageConfig);
    } finally {
      _$_IssueCategoriesViewPageStoreActionController.endAction(_$actionInfo);
    }
  }

  @override
  void subcategoriesSetSort(
      BuildContext context, String sortColumnName, int sortColumnIndex, bool asc, Comparator<dynamic> sortCompare, IssueCategoryStore store) {
    final _$actionInfo = _$_IssueCategoriesViewPageStoreActionController.startAction(name: '_IssueCategoriesViewPageStore.subcategoriesSetSort');
    try {
      return super.subcategoriesSetSort(context, sortColumnName, sortColumnIndex, asc, sortCompare, store);
    } finally {
      _$_IssueCategoriesViewPageStoreActionController.endAction(_$actionInfo);
    }
  }

  @override
  String toString() {
    return '''
targetStore: ${targetStore},
subcategoriesSortColumnIndex: ${subcategoriesSortColumnIndex},
subcategoriesSortColumnName: ${subcategoriesSortColumnName},
subcategoriesSortAsc: ${subcategoriesSortAsc},
subcategoriesSortCompare: ${subcategoriesSortCompare},
issueCategorySubcategoriesStoreFuture: ${issueCategorySubcategoriesStoreFuture}
    ''';
  }
}