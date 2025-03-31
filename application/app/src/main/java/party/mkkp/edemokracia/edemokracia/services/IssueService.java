/* (C)2025 */
package party.mkkp.edemokracia.edemokracia.services;

import hu.blackbelt.judo.dao.api.DAO;
import hu.blackbelt.judo.meta.asm.runtime.AsmModel;
import hu.blackbelt.judo.meta.asm.runtime.AsmUtils;
import org.eclipse.emf.ecore.EClass;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import party.mkkp.edemokracia.edemokracia.api.edemokracia._default_transferobjecttypes.city.City;
import party.mkkp.edemokracia.edemokracia.api.edemokracia._default_transferobjecttypes.city.CityDao;
import party.mkkp.edemokracia.edemokracia.api.edemokracia._default_transferobjecttypes.city.CityMask;
import party.mkkp.edemokracia.edemokracia.api.edemokracia._default_transferobjecttypes.comment.CommentForCreate;
import party.mkkp.edemokracia.edemokracia.api.edemokracia._default_transferobjecttypes.con.ConForCreate;
import party.mkkp.edemokracia.edemokracia.api.edemokracia._default_transferobjecttypes.county.County;
import party.mkkp.edemokracia.edemokracia.api.edemokracia._default_transferobjecttypes.county.CountyDao;
import party.mkkp.edemokracia.edemokracia.api.edemokracia._default_transferobjecttypes.county.CountyMask;
import party.mkkp.edemokracia.edemokracia.api.edemokracia._default_transferobjecttypes.district.District;
import party.mkkp.edemokracia.edemokracia.api.edemokracia._default_transferobjecttypes.district.DistrictDao;
import party.mkkp.edemokracia.edemokracia.api.edemokracia._default_transferobjecttypes.district.DistrictMask;
import party.mkkp.edemokracia.edemokracia.api.edemokracia._default_transferobjecttypes.issue.*;
import party.mkkp.edemokracia.edemokracia.api.edemokracia._default_transferobjecttypes.issuetype.IssueType;
import party.mkkp.edemokracia.edemokracia.api.edemokracia._default_transferobjecttypes.issuetype.IssueTypeDao;
import party.mkkp.edemokracia.edemokracia.api.edemokracia._default_transferobjecttypes.issuetype.IssueTypeMask;
import party.mkkp.edemokracia.edemokracia.api.edemokracia._default_transferobjecttypes.pro.ProForCreate;
import party.mkkp.edemokracia.edemokracia.api.edemokracia._default_transferobjecttypes.ratingvotedefinition.RatingVoteDefinition;
import party.mkkp.edemokracia.edemokracia.api.edemokracia._default_transferobjecttypes.ratingvotedefinition.RatingVoteDefinitionDao;
import party.mkkp.edemokracia.edemokracia.api.edemokracia._default_transferobjecttypes.ratingvotedefinition.RatingVoteDefinitionForCreate;
import party.mkkp.edemokracia.edemokracia.api.edemokracia._default_transferobjecttypes.ratingvotedefinition.RatingVoteDefinitionMask;
import party.mkkp.edemokracia.edemokracia.api.edemokracia._default_transferobjecttypes.selectanswervotedefinition.SelectAnswerVoteDefinition;
import party.mkkp.edemokracia.edemokracia.api.edemokracia._default_transferobjecttypes.selectanswervotedefinition.SelectAnswerVoteDefinitionDao;
import party.mkkp.edemokracia.edemokracia.api.edemokracia._default_transferobjecttypes.selectanswervotedefinition.SelectAnswerVoteDefinitionForCreate;
import party.mkkp.edemokracia.edemokracia.api.edemokracia._default_transferobjecttypes.selectanswervotedefinition.SelectAnswerVoteDefinitionMask;
import party.mkkp.edemokracia.edemokracia.api.edemokracia._default_transferobjecttypes.selectanswervoteselection.SelectAnswerVoteSelection;
import party.mkkp.edemokracia.edemokracia.api.edemokracia._default_transferobjecttypes.selectanswervoteselection.SelectAnswerVoteSelectionForCreate;
import party.mkkp.edemokracia.edemokracia.api.edemokracia._default_transferobjecttypes.user.User;
import party.mkkp.edemokracia.edemokracia.api.edemokracia._default_transferobjecttypes.user.UserDao;
import party.mkkp.edemokracia.edemokracia.api.edemokracia._default_transferobjecttypes.votedefinition.*;
import party.mkkp.edemokracia.edemokracia.api.edemokracia._default_transferobjecttypes.yesnoabstainvotedefinition.YesNoAbstainVoteDefinitionDao;
import party.mkkp.edemokracia.edemokracia.api.edemokracia._default_transferobjecttypes.yesnoabstainvotedefinition.YesNoAbstainVoteDefinitionForCreate;
import party.mkkp.edemokracia.edemokracia.api.edemokracia._default_transferobjecttypes.yesnoabstainvotedefinition.YesNoAbstainVoteDefinitionMask;
import party.mkkp.edemokracia.edemokracia.api.edemokracia._default_transferobjecttypes.yesnovotedefinition.YesNoVoteDefinitionDao;
import party.mkkp.edemokracia.edemokracia.api.edemokracia._default_transferobjecttypes.yesnovotedefinition.YesNoVoteDefinitionForCreate;
import party.mkkp.edemokracia.edemokracia.api.edemokracia._default_transferobjecttypes.yesnovotedefinition.YesNoVoteDefinitionMask;
import party.mkkp.edemokracia.edemokracia.api.edemokracia.issuestatus.IssueStatus;
import party.mkkp.edemokracia.edemokracia.api.edemokracia.service.closedebateinputselectanswervoteselection.CloseDebateInputSelectAnswerVoteSelection;
import party.mkkp.edemokracia.edemokracia.api.edemokracia.votestatus.VoteStatus;
import party.mkkp.edemokracia.edemokracia.api.edemokracia.votetype.VoteType;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.Collection;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.concurrent.atomic.AtomicReference;

@Component(service = IssueService.class)
public class IssueService {
    private final static String ISSUE_FQ_NAME = "edemokracia._default_transferobjecttypes.Issue";

    @Reference
    IssueTypeDao issueTypeDao;

    @Reference
    CountyDao countyDao;

    @Reference
    CityDao cityDao;

    @Reference
    DistrictDao districtDao;

    @Reference
    IssueDao issueDao;

    @Reference
    UserService userService;

    @Reference
    YesNoAbstainVoteDefinitionDao yesNoAbstainVoteDefinitionDao;

    @Reference
    YesNoVoteDefinitionDao yesNoVoteDefinitionDao;

    @Reference
    RatingVoteDefinitionDao ratingVoteDefinitionDao;

    @Reference
    SelectAnswerVoteDefinitionDao selectAnswerVoteDefinitionDao;

    @Reference
    UserDao userDao;

    @Reference(target = "(&(judo.model.name=edemokracia)(type=composite))")
    DAO<Serializable> dao;

    @Reference(target = "(name=edemokracia)")
    AsmModel asmModel;

    @Reference
    VoteDefinitionDao voteDefinitionDao;

    protected EClass getEClass(String fqName) {
        AsmUtils asmUtils = new AsmUtils(asmModel.getResourceSet());
        EClass eClass = (EClass) asmUtils.getClassByFQName(fqName).get();
        return eClass;
    }


    public Issue getIssue(Serializable issueId, IssueMask issueMask) {
        Issue issue = issueDao.getById(issueId, issueMask).orElseThrow(() -> new IllegalArgumentException("Issue not found"));
        return issue;
    }

    public Serializable createIssueForCurrentUser(String title,
                                           String description,
                                           Serializable issueTypeId,
                                           Serializable countyId,
                                           Serializable cityId,
                                           Serializable distictId,
                                           LocalDateTime debateCloseAt)  {
        User user = userService.getCurrentUserEntity();

        IssueForCreateBuilder builder = IssueForCreate.builder()
                .withDescription(description)
                .withTitle(title)
                .withCreated(LocalDateTime.now())
                .withOwner(user)
                .withCreatedBy(user)
                .withStatus(IssueStatus.CREATED)
                .withDebateCloseAt(debateCloseAt);

        AtomicReference<IssueForCreateBuilder> builderWrapper = new AtomicReference<>(builder);

        if (issueTypeId != null) {
            Optional<IssueType> issueType = issueTypeDao.getById(issueTypeId, IssueTypeMask.issueTypeMask());
            issueType.ifPresent((it) -> builderWrapper.set(builderWrapper.get().withIssueType(it)));
        }

        if (countyId != null) {
            Optional<County> county = countyDao.getById(countyId, CountyMask.countyMask());
            county.ifPresent((c) -> builderWrapper.set(builderWrapper.get().withCounty(c)));
        }

        if (cityId != null) {
            Optional<City> city = cityDao.getById(cityId, CityMask.cityMask());
            city.ifPresent((c) -> builderWrapper.set(builderWrapper.get().withCity(c)));
        }

        if (distictId != null) {
            Optional<District> district = districtDao.getById(distictId, DistrictMask.districtMask());
            district.ifPresent((d) -> builderWrapper.set(builderWrapper.get().withDistrict(d)));
        }

        Issue issue = issueDao.create(builderWrapper.get().build(), IssueMask.issueMask());
        return issue.identifier().getIdentifier();
    }


    public void activate(Serializable issueId) {
        Issue issue = getIssue(issueId, IssueMask
                .issueMask()
                .withStatus());
        if (issue.getStatus() != IssueStatus.CREATED) {
            return;
        }
        issue.setStatus(IssueStatus.ACTIVE);
        issueDao.update(issue);
   }

    public void addToFavorites(Serializable issueId) {
        Issue issue = getIssue(issueId, IssueMask
                .issueMask()
                .withStatus());
        issueDao.addUsersFavoritedBy(issue, userService.getCurrentUserEntity());
    }

    public void removeFromFavorites(Serializable issueId) {
        Issue issue = getIssue(issueId, IssueMask
                .issueMask()
                .withStatus());
        issueDao.removeUsersFavoritedBy(issue, userService.getCurrentUserEntity());
    }

    public void setVoteDefinitionContainer(Serializable voteDefinitionId, Serializable issueId) {
        EClass clazz = getEClass(ISSUE_FQ_NAME);
        dao.addReferences(clazz.getEAllReferences().stream().filter(r -> Objects.equals(r.getName(), "voteDefinitions")).findAny().get(),
                issueId, List.of(voteDefinitionId));
    }

    public void closeVote(Serializable issueId) {
        Issue issue = getIssue(issueId, IssueMask.issueMask()
                .withStatus());

        if (issue.getStatus() != IssueStatus.VOTING) {
            return;
        }

        issueDao.queryCurrentVoteDefinition(issueId, VoteDefinitionMask
                .voteDefinitionMask()
                .withStatus())
            .ifPresent((vd) -> {
                vd.setStatus(VoteStatus.CLOSED);
                voteDefinitionDao.update(vd);
                issue.setStatus(IssueStatus.CLOSED);
                issueDao.update(issue);
        });
    }

    public Optional<Serializable> closeDebate(Serializable issueId,
                                              VoteType voteType,
                                              String voteTitle,
                                              String description,
                                              LocalDateTime closeAt,
                                              Collection<CloseDebateInputSelectAnswerVoteSelection> selectableAnsers,
                                              Optional<Integer>  rateMinValue,
                                              Optional<Integer>  rateMaxValue,
                                              Optional<Integer>  rateStepValue) {
        Issue issue = getIssue(issueId, IssueMask
                .issueMask()
                .withStatus());

        User user = userService.getCurrentUserEntity();
        Serializable voteDefinitionId = null;

        if (issue.getStatus() != IssueStatus.ACTIVE) {
            return Optional.empty();
        }
        if (voteType == VoteType.YES_NO) {
            voteDefinitionId = yesNoVoteDefinitionDao.create(YesNoVoteDefinitionForCreate.builder()
                    .withTitle(voteTitle)
                    .withDescription(description)
                    .withCloseAt(closeAt)
                    .withStatus(VoteStatus.CREATED)
                    .withOwner(user)
                    .withCreatedBy(user)
                    .build(), YesNoVoteDefinitionMask.yesNoVoteDefinitionMask()).identifier().getIdentifier();
            setVoteDefinitionContainer(
                    voteDefinitionId,
                    issueId);

        } else if (voteType == VoteType.YES_NO_ABSTAIN) {
            voteDefinitionId =  yesNoAbstainVoteDefinitionDao.create(YesNoAbstainVoteDefinitionForCreate.builder()
                    .withTitle(voteTitle)
                    .withDescription(description)
                    .withCloseAt(closeAt)
                    .withStatus(VoteStatus.CREATED)
                    .withOwner(user)
                    .withCreatedBy(user)
                    .build(), YesNoAbstainVoteDefinitionMask.yesNoAbstainVoteDefinitionMask()).identifier().getIdentifier();

            setVoteDefinitionContainer(
                    voteDefinitionId,
                    issueId);

        } else if (voteType == VoteType.SELECT_ANSWER) {
            SelectAnswerVoteDefinition selectAnswerVoteDefinition = selectAnswerVoteDefinitionDao.create(SelectAnswerVoteDefinitionForCreate.builder()
                    .withTitle(voteTitle)
                    .withDescription(description)
                    .withCloseAt(closeAt)
                    .withStatus(VoteStatus.CREATED)
                    .withOwner(user)
                            .withVoteSelections(selectableAnsers.stream().map(a -> SelectAnswerVoteSelectionForCreate
                                    .builder()
                                    .withTitle(a.getTitle())
                                    .withDescription(a.getDescription())
                                    .build()).toList())
                    .withCreatedBy(user)
                    .build(), SelectAnswerVoteDefinitionMask.selectAnswerVoteDefinitionMask());
            voteDefinitionId = selectAnswerVoteDefinition.identifier().getIdentifier();
            setVoteDefinitionContainer(
                    voteDefinitionId,
                    issueId);
        } else if (voteType == VoteType.RATE) {
            RatingVoteDefinition ratingVoteDefinition = ratingVoteDefinitionDao.create(RatingVoteDefinitionForCreate.builder()
                    .withTitle(voteTitle)
                    .withDescription(description)
                    .withCloseAt(closeAt)
                    .withStatus(VoteStatus.CREATED)
                    .withOwner(user)
                    .withCreatedBy(user)
                    .withMinRateValue(rateMinValue.orElse(1))
                    .withMaxRateValue(rateMaxValue.orElse(10))
                    .withRateStep(rateStepValue.orElse(1))
                    .build(), RatingVoteDefinitionMask.ratingVoteDefinitionMask());
            voteDefinitionId = ratingVoteDefinition.identifier().getIdentifier();
            setVoteDefinitionContainer(
                    voteDefinitionId,
                    issueId);
        }

        issue.setStatus(IssueStatus.VOTING);
        issueDao.update(issue);

        return Optional.of(voteDefinitionId);
    }

    public void createComment(Serializable issueId, String comment) {
        Issue issue = getIssue(issueId, IssueMask
                .issueMask()
                .withStatus());

        User user = userService.getCurrentUserEntity();

        issueDao.createComments(issue, CommentForCreate.builder()
                        .withComment(comment)
                        .withCreated(LocalDateTime.now())
                        .withCreatedBy(user)
                .build());
    }

    public void createCon(Serializable issueId, String title, String description) {
        Issue issue = getIssue(issueId, IssueMask
                .issueMask()
                .withStatus());

        User user = userService.getCurrentUserEntity();

        issueDao.createCons(issue, ConForCreate.builder()
                        .withTitle(title)
                        .withDescription(description)
                .withCreated(LocalDateTime.now())
                .withCreatedBy(user)
                .build());
    }

    public void createPro(Serializable issueId, String title, String description) {
        Issue issue = getIssue(issueId, IssueMask
                .issueMask()
                .withStatus());

        User user = userService.getCurrentUserEntity();

        issueDao.createPros(issue, ProForCreate.builder()
                .withTitle(title)
                .withDescription(description)
                .withCreated(LocalDateTime.now())
                .withCreatedBy(user)
                .build());
    }

    public void deleteOrArchive(Serializable issueId) {
        Issue issue = getIssue(issueId, IssueMask
                .issueMask()
                .withStatus());

        if (issue.getStatus() == IssueStatus.CREATED) {
            issueDao.delete(issue);
        } else if (issue.getStatus() == IssueStatus.CLOSED) {
            issue.setStatus(IssueStatus.ARCHIVED);
            issueDao.update(issue);
        }
    }

}
