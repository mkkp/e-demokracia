/* (C)2025 */
package party.mkkp.edemokracia.edemokracia.services;

import hu.blackbelt.judo.dao.api.DAO;
import hu.blackbelt.judo.meta.asm.runtime.AsmModel;
import hu.blackbelt.judo.meta.asm.runtime.AsmUtils;
import hu.blackbelt.judo.sdk.query.StringFilter;
import org.eclipse.emf.ecore.EClass;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import party.mkkp.edemokracia.edemokracia.api.edemokracia._default_transferobjecttypes.con.ConForCreate;
import party.mkkp.edemokracia.edemokracia.api.edemokracia._default_transferobjecttypes.pro.ProForCreate;
import party.mkkp.edemokracia.edemokracia.api.edemokracia._default_transferobjecttypes.ratingvoteentry.RatingVoteEntry;
import party.mkkp.edemokracia.edemokracia.api.edemokracia._default_transferobjecttypes.ratingvoteentry.RatingVoteEntryDao;
import party.mkkp.edemokracia.edemokracia.api.edemokracia._default_transferobjecttypes.simplevote.SimpleVoteForCreate;
import party.mkkp.edemokracia.edemokracia.api.edemokracia._default_transferobjecttypes.user.User;
import party.mkkp.edemokracia.edemokracia.api.edemokracia._default_transferobjecttypes.votedefinition.VoteDefinitionDao;
import party.mkkp.edemokracia.edemokracia.api.edemokracia._default_transferobjecttypes.yesnoabstainvotedefinition.YesNoAbstainVoteDefinitionDao;
import party.mkkp.edemokracia.edemokracia.api.edemokracia._default_transferobjecttypes.yesnoabstainvotedefinition.YesNoAbstainVoteDefinitionForCreate;
import party.mkkp.edemokracia.edemokracia.api.edemokracia._default_transferobjecttypes.yesnoabstainvotedefinition.YesNoAbstainVoteDefinitionMask;
import party.mkkp.edemokracia.edemokracia.api.edemokracia._default_transferobjecttypes.yesnoabstainvoteentry.YesNoAbstainVoteEntryDao;
import party.mkkp.edemokracia.edemokracia.api.edemokracia._default_transferobjecttypes.yesnoabstainvoteentry.YesNoAbstainVoteEntryForCreate;
import party.mkkp.edemokracia.edemokracia.api.edemokracia._default_transferobjecttypes.yesnovoteentry.YesNoVoteEntryDao;
import party.mkkp.edemokracia.edemokracia.api.edemokracia._default_transferobjecttypes.yesnovoteentry.YesNoVoteEntryForCreate;
import party.mkkp.edemokracia.edemokracia.api.edemokracia.service.con.ConDao;
import party.mkkp.edemokracia.edemokracia.api.edemokracia.service.pro.ProDao;
import party.mkkp.edemokracia.edemokracia.api.edemokracia.service.simplevote.SimpleVote;
import party.mkkp.edemokracia.edemokracia.api.edemokracia.service.simplevote.SimpleVoteDao;
import party.mkkp.edemokracia.edemokracia.api.edemokracia.simplevotetype.SimpleVoteType;
import party.mkkp.edemokracia.edemokracia.api.edemokracia.votestatus.VoteStatus;
import party.mkkp.edemokracia.edemokracia.api.edemokracia.yesnoabstainvotevalue.YesNoAbstainVoteValue;
import party.mkkp.edemokracia.edemokracia.api.edemokracia.yesnovotevalue.YesNoVoteValue;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Component(service = VoteService.class)
public class VoteService {
    @Reference
    UserService userService;

    @Reference(target = "(&(judo.model.name=edemokracia)(type=composite))")
    DAO<Serializable> dao;

    @Reference(target = "(name=edemokracia)")
    AsmModel asmModel;

    @Reference
    VoteDefinitionDao voteDefinitionDao;

    @Reference
    YesNoAbstainVoteEntryDao yesNoAbstainVoteEntryDao;

    @Reference
    YesNoVoteEntryDao yesNoVoteEntryDao;

    @Reference
    RatingVoteEntryDao ratingVoteEntryDao;

    public void vote(Serializable voteDefinitionId, YesNoAbstainVoteValue vote) {
        User user = userService.getCurrentUserEntity();
        yesNoAbstainVoteEntryDao.create(YesNoAbstainVoteEntryForCreate.builder()
                        .withUser(user)
                        .withCreated(LocalDateTime.now())
                        .withVoteDefinition(voteDefinitionDao.getById(voteDefinitionId).get())
                        .withValue(vote)
                .build()).identifier().getIdentifier();
    }

    public void vote(Serializable voteDefinitionId, YesNoVoteValue vote) {
        User user = userService.getCurrentUserEntity();
        yesNoVoteEntryDao.create(YesNoVoteEntryForCreate.builder()
                .withUser(user)
                .withCreated(LocalDateTime.now())
                .withVoteDefinition(voteDefinitionDao.getById(voteDefinitionId).get())
                .withValue(vote)
                .build()).identifier().getIdentifier();
    }

    public void vote(Serializable voteDefinitionId, Integer vote) {
        User user = userService.getCurrentUserEntity();
        ratingVoteEntryDao.create(RatingVoteEntry.builder()
                .withUser(user)
                .withCreated(LocalDateTime.now())
                .withVoteDefinition(voteDefinitionDao.getById(voteDefinitionId).get())
                .withValue(vote)
                .build()).identifier().getIdentifier();
    }

}
