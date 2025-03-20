package party.mkkp.edemokracia.edemokracia.services;

import hu.blackbelt.judo.sdk.query.StringFilter;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import party.mkkp.edemokracia.edemokracia.api.edemokracia._default_transferobjecttypes.user.User;
import party.mkkp.edemokracia.edemokracia.api.edemokracia.service.comment.Comment;
import party.mkkp.edemokracia.edemokracia.api.edemokracia.service.comment.CommentDao;
import party.mkkp.edemokracia.edemokracia.api.edemokracia.service.comment.CommentMask;
import party.mkkp.edemokracia.edemokracia.api.edemokracia.service.simplevote.SimpleVote;
import party.mkkp.edemokracia.edemokracia.api.edemokracia.service.simplevote.SimpleVoteDao;
import party.mkkp.edemokracia.edemokracia.api.edemokracia.service.simplevote.SimpleVoteForCreate;
import party.mkkp.edemokracia.edemokracia.api.edemokracia.simplevotetype.SimpleVoteType;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.Optional;

@Component(service = CommentService.class)
public class CommentService {

    @Reference
    CommentDao commentDao;

    @Reference
    party.mkkp.edemokracia.edemokracia.api.edemokracia._default_transferobjecttypes.comment.CommentDao commentEntityDao;

    @Reference
    UserService userService;

    @Reference
    SimpleVoteDao simpleVoteDao;

    public void vote(Serializable commentId, SimpleVoteType voteType) {
        User user = userService.getCurrentUserEntity();
        Optional<SimpleVote> vote = commentDao.queryVotes(commentId).filterByCreatedByUsername(StringFilter.equalTo(user.getUserName())).selectOne();
        vote.ifPresent((v) -> {
            simpleVoteDao.delete(v);
        });
        commentEntityDao.createVotes(commentEntityDao.getById(commentId).get(), party.mkkp.edemokracia.edemokracia.api.edemokracia._default_transferobjecttypes.simplevote.SimpleVoteForCreate.builder()
                .withCreated(LocalDateTime.now())
                .withType(voteType)
                .withUser(user)
                .build());

    }

    public void voteUp(Serializable commentId) {
        vote(commentId, SimpleVoteType.UP);
    }

    public void voteDown(Serializable commentId) {
        vote(commentId, SimpleVoteType.DOWN);
    }
}
