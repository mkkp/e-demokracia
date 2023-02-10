//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    C L A S S
// ------------------------------
// Path expression: #storeClassPath(#self.owner.actor,#self)
// Template name: lib/store/model_store.dart.hbs
// Application: edemokracia::admin::Admin

part of admin.store;

class DebateStore extends _DebateStore with _$DebateStore {
  DebateStore() : super();

  DebateStore.clone(DebateStore storeToClone) : super.clone(storeToClone);
}

abstract class _DebateStore with Store {
  Set<String> changedFields = Set();
  bool internal__isOriginEmpty;

  _DebateStore();

  _DebateStore.clone(DebateStore storeToClone) {
    internal__identifier = storeToClone.internal__identifier;
    internal__signedIdentifier = storeToClone.internal__signedIdentifier;
    internal__entityType = storeToClone.internal__entityType;
    internal__referenceIdentifier = storeToClone.internal__referenceIdentifier;
    internal__updatable = storeToClone.internal__updatable ?? true;
    internal__deletable = storeToClone.internal__deletable ?? true;

    //Attributes
    closeAt = storeToClone.closeAt;
    description = storeToClone.description;
    status = storeToClone.status;
    title = storeToClone.title;

    // Relations
    if (storeToClone.comments != null) {
      comments = ObservableList.of(storeToClone.comments);
    } else {
      comments = ObservableList.of([]);
    }
    if (storeToClone.cons != null) {
      cons = ObservableList.of(storeToClone.cons);
    } else {
      cons = ObservableList.of([]);
    }
    if (storeToClone.createdBy != null) {
      createdBy = UserStore.clone(storeToClone.createdBy);
    } else {
      createdBy = null;
    }
    if (storeToClone.debateVote != null) {
      debateVote = VoteDefinitionStore.clone(storeToClone.debateVote);
    } else {
      debateVote = null;
    }
    if (storeToClone.issue != null) {
      issue = IssueStore.clone(storeToClone.issue);
    } else {
      issue = null;
    }
    if (storeToClone.pros != null) {
      pros = ObservableList.of(storeToClone.pros);
    } else {
      pros = ObservableList.of([]);
    }
  }

  // ignore: non_constant_identifier_names
  String internal__identifier;

  // ignore: non_constant_identifier_names
  String internal__entityType;

  // ignore: non_constant_identifier_names
  String internal__signedIdentifier;

  // ignore: non_constant_identifier_names
  String internal__referenceIdentifier = Uuid().v1();

  // ignore: non_constant_identifier_names
  @observable
  bool internal__updatable = true;

  // ignore: non_constant_identifier_names
  @observable
  bool internal__deletable = true;

  // Attributes
  @observable
  DateTime closeAt;
  @observable
  String description;
  @observable
  EdemokraciaDebateStatus status;
  @observable
  String title;

  // Relations

  @observable
  var comments = ObservableList<CommentStore>();

  @observable
  var cons = ObservableList<ConStore>();

  @observable
  UserStore createdBy;

  @observable
  VoteDefinitionStore debateVote;

  @observable
  IssueStore issue;

  @observable
  var pros = ObservableList<ProStore>();

  // Attributes
  @action
  void setCloseAt(DateTime closeAt) {
    this.closeAt = closeAt;
    changedFields.add('closeAt');
  }

  @action
  void setDescription(String description) {
    this.description = description;
    changedFields.add('description');
  }

  @action
  void setStatus(EdemokraciaDebateStatus status) {
    this.status = status;
    changedFields.add('status');
  }

  @action
  void setTitle(String title) {
    this.title = title;
    changedFields.add('title');
  }

  // Relations
  @action
  void addAllComments(List<CommentStore> comments) {
    this.comments.addAll(comments);
    changedFields.add('comments');
  }

  @action
  void setComments(List<CommentStore> comments) {
    this.comments.clear();
    this.comments.addAll(comments);
    changedFields.add('comments');
  }

  @action
  void removeComments(CommentStore comments) {
    this.comments.remove(comments);
    changedFields.add('comments');
  }

  @action
  void addAllCons(List<ConStore> cons) {
    this.cons.addAll(cons);
    changedFields.add('cons');
  }

  @action
  void setCons(List<ConStore> cons) {
    this.cons.clear();
    this.cons.addAll(cons);
    changedFields.add('cons');
  }

  @action
  void removeCons(ConStore cons) {
    this.cons.remove(cons);
    changedFields.add('cons');
  }

  @action
  void setCreatedBy(UserStore createdBy) {
    this.createdBy = createdBy;
  }

  @action
  void setDebateVote(VoteDefinitionStore debateVote) {
    this.debateVote = debateVote;
    changedFields.add('debateVote');
  }

  @action
  void setIssue(IssueStore issue) {
    this.issue = issue;
  }

  @action
  void addAllPros(List<ProStore> pros) {
    this.pros.addAll(pros);
    changedFields.add('pros');
  }

  @action
  void setPros(List<ProStore> pros) {
    this.pros.clear();
    this.pros.addAll(pros);
    changedFields.add('pros');
  }

  @action
  void removePros(ProStore pros) {
    this.pros.remove(pros);
    changedFields.add('pros');
  }

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is _DebateStore &&
          runtimeType == other.runtimeType &&
          ((internal__signedIdentifier == other.internal__signedIdentifier && internal__signedIdentifier != null && other.internal__signedIdentifier != null) ||
              (internal__identifier == other.internal__identifier && internal__identifier != null && other.internal__identifier != null) ||
              (internal__referenceIdentifier == other.internal__referenceIdentifier &&
                  internal__referenceIdentifier != null &&
                  other.internal__referenceIdentifier != null));

  @override
  int get hashCode => hash3(internal__signedIdentifier, internal__identifier, internal__referenceIdentifier);

  @action
  void initWithDefaults(DebateStore storeToClone) {
    /// Attributes
    if (storeToClone.closeAt != null) {
      setCloseAt(storeToClone.closeAt);
    }
    if (storeToClone.description != null) {
      setDescription(storeToClone.description);
    }
    if (storeToClone.status != null) {
      setStatus(storeToClone.status);
    }
    if (storeToClone.title != null) {
      setTitle(storeToClone.title);
    }

    /// Relations
    if (storeToClone.comments != null) {
      setComments(ObservableList.of(storeToClone.comments));
    } else {
      setComments(ObservableList.of([]));

      /// Ensure List is initialized even if there is no source.
    }
    if (storeToClone.cons != null) {
      setCons(ObservableList.of(storeToClone.cons));
    } else {
      setCons(ObservableList.of([]));

      /// Ensure List is initialized even if there is no source.
    }
    if (storeToClone.createdBy != null) {
      setCreatedBy(UserStore.clone(storeToClone.createdBy));
    }
    if (storeToClone.debateVote != null) {
      setDebateVote(VoteDefinitionStore.clone(storeToClone.debateVote));
    }
    if (storeToClone.issue != null) {
      setIssue(IssueStore.clone(storeToClone.issue));
    }
    if (storeToClone.pros != null) {
      setPros(ObservableList.of(storeToClone.pros));
    } else {
      setPros(ObservableList.of([]));

      /// Ensure List is initialized even if there is no source.
    }
  }

  @action
  void updateWith(DebateStore storeToClone) {
    internal__identifier = storeToClone.internal__identifier;
    internal__signedIdentifier = storeToClone.internal__signedIdentifier;
    internal__entityType = storeToClone.internal__entityType;
    internal__referenceIdentifier = storeToClone.internal__referenceIdentifier;
    internal__updatable = storeToClone.internal__updatable ?? true;
    internal__deletable = storeToClone.internal__deletable ?? true;

    /// Attributes
    closeAt = storeToClone.closeAt;
    description = storeToClone.description;
    status = storeToClone.status;
    title = storeToClone.title;

    /// Relations
    if (storeToClone.comments != null) {
      comments = ObservableList.of(storeToClone.comments);
    } else {
      comments = ObservableList.of([]);
    }
    if (storeToClone.cons != null) {
      cons = ObservableList.of(storeToClone.cons);
    } else {
      cons = ObservableList.of([]);
    }
    if (storeToClone.createdBy != null) {
      createdBy = UserStore.clone(storeToClone.createdBy);
    } else {
      createdBy = null;
    }
    if (storeToClone.debateVote != null) {
      debateVote = VoteDefinitionStore.clone(storeToClone.debateVote);
    } else {
      debateVote = null;
    }
    if (storeToClone.issue != null) {
      issue = IssueStore.clone(storeToClone.issue);
    } else {
      issue = null;
    }
    if (storeToClone.pros != null) {
      pros = ObservableList.of(storeToClone.pros);
    } else {
      pros = ObservableList.of([]);
    }

    changedFields.clear();
  }
}