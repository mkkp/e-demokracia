package party.mkkp.edemokracia.edemokracia.services;

import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import party.mkkp.edemokracia.edemokracia.api.edemokracia.service.comment.Comment;
import party.mkkp.edemokracia.edemokracia.api.edemokracia.service.comment.CommentDao;
import party.mkkp.edemokracia.edemokracia.api.edemokracia.service.comment.CommentIdentifier;
import party.mkkp.edemokracia.edemokracia.api.edemokracia.service.comment.CommentMask;
import party.mkkp.edemokracia.edemokracia.api.edemokracia.service.user.User;

@Component(service = CommentService.class)
public class CommentService {

    @Reference
    CommentDao commentDao;

    public void voteUp(User user, CommentIdentifier identifier) {
        Comment comment = commentDao.getById(identifier, CommentMask.commentMask())
                .orElseThrow(() -> new IllegalArgumentException("Comment not found: " + identifier.getIdentifier()));
    }
}
