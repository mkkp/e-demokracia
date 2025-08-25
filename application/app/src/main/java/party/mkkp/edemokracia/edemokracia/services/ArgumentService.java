/* (C)2025 */
package party.mkkp.edemokracia.edemokracia.services;

import hu.blackbelt.judo.sdk.query.StringFilter;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import party.mkkp.edemokracia.edemokracia.api.edemokracia._default_transferobjecttypes.con.ConForCreate;
import party.mkkp.edemokracia.edemokracia.api.edemokracia._default_transferobjecttypes.pro.ProForCreate;
import party.mkkp.edemokracia.edemokracia.api.edemokracia._default_transferobjecttypes.simplevote.SimpleVoteForCreate;
import party.mkkp.edemokracia.edemokracia.api.edemokracia._default_transferobjecttypes.user.User;
import party.mkkp.edemokracia.edemokracia.api.edemokracia.service.con.ConDao;
import party.mkkp.edemokracia.edemokracia.api.edemokracia.service.pro.ProDao;
import party.mkkp.edemokracia.edemokracia.api.edemokracia.service.simplevote.SimpleVote;
import party.mkkp.edemokracia.edemokracia.api.edemokracia.service.simplevote.SimpleVoteDao;
import party.mkkp.edemokracia.edemokracia.api.edemokracia.simplevotetype.SimpleVoteType;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.Optional;

@Component(service = ArgumentService.class)
public class ArgumentService {
    @Reference
    UserService userService;

    @Reference
    ConDao conDao;

    @Reference
    ProDao proDao;

    @Reference
    SimpleVoteDao simpleVoteDao;

    @Reference
    party.mkkp.edemokracia.edemokracia.api.edemokracia._default_transferobjecttypes.con.ConDao conEntityDao;

    @Reference
    party.mkkp.edemokracia.edemokracia.api.edemokracia._default_transferobjecttypes.pro.ProDao proEntityDao;

    public void addConForCon(Serializable argumentId, String title, String description) {
        conEntityDao.createCons(conEntityDao.getById(argumentId).get(), ConForCreate.builder()
                        .withTitle(title)
                        .withDescription(description)
                .build());
    }

    public void addProForCon(Serializable argumentId, String title, String description) {
        conEntityDao.createPros(conEntityDao.getById(argumentId).get(), ProForCreate.builder()
                .withTitle(title)
                .withDescription(description)
                .build());
    }

    public void addConForPro(Serializable argumentId, String title, String description) {
        proEntityDao.createCons(proEntityDao.getById(argumentId).get(), ConForCreate.builder()
                .withTitle(title)
                .withDescription(description)
                .build());
    }

    public void addProForPro(Serializable argumentId, String title, String description) {
        proEntityDao.createPros(proEntityDao.getById(argumentId).get(), ProForCreate.builder()
                .withTitle(title)
                .withDescription(description)
                .build());
    }

    public void conVote(Serializable conId, SimpleVoteType voteType) {
        var user = userService.getCurrentUserEntity();
        var vote = conDao.queryVotes(conId).filterByCreatedByUsername(StringFilter.equalTo(user.getUserName())).selectOne();
        vote.ifPresent((v) -> {
            simpleVoteDao.delete(v);
        });
        conEntityDao.createVotes(conEntityDao.getById(conId).get(), SimpleVoteForCreate.builder()
                .withCreated(LocalDateTime.now())
                .withType(voteType)
                .withUser(user)
                .build());

    }

    public void proVote(Serializable proId, SimpleVoteType voteType) {
        User user = userService.getCurrentUserEntity();
        Optional<SimpleVote> vote = proDao.queryVotes(proId).filterByCreatedByUsername(StringFilter.equalTo(user.getUserName())).selectOne();
        vote.ifPresent((v) -> {
            simpleVoteDao.delete(v);
        });
        proEntityDao.createVotes(proEntityDao.getById(proId).get(), SimpleVoteForCreate.builder()
                .withCreated(LocalDateTime.now())
                .withType(voteType)
                .withUser(user)
                .build());
    }

}
