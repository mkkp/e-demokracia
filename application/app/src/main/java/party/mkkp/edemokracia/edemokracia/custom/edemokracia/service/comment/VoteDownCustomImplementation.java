/* (C)2025 */
package party.mkkp.edemokracia.edemokracia.custom.edemokracia.service.comment;

import org.osgi.service.component.annotations.Reference;
import party.mkkp.edemokracia.edemokracia.api.edemokracia.service.comment.CommentDao;
import party.mkkp.edemokracia.edemokracia.api.edemokracia.service.serviceuser.ServiceUser;
import party.mkkp.edemokracia.edemokracia.services.CommentService;
import party.mkkp.edemokracia.edemokracia.services.UserService;

/**
 *
 *
 * var edemokracia::User user = edemokracia::User!filter(u | u.userName == edemokracia::types::String!getVariable("ACTOR", "userName"))!any();
 * var edemokracia::types::Integer count =  this.votes!filter(v | v.user.userName == user.userName)!count();
 *
 * if (count == 0) {
 *     this.votes += new edemokracia::SimpleVote(user = user, type = edemokracia::SimpleVoteType#DOWN);
 * }
 *
 *
 *
 *
 * Usage:
 *  1. Rename this file from VoteDownCustomImplementation.java.default to VoteDownCustomImplementation.java
 *  2. Implement method
 *  3. To ignore the generation of VoteDownCustomImplementation.java.default file, put it to .generator-ignore file
 *  4. To inject dao, import @org.osgi.service.component.annotations.* package and use @Reference annotation
 */
@org.osgi.service.component.annotations.Component(
        immediate = true,
        service = party.mkkp.edemokracia.edemokracia.operation.edemokracia.service.comment.VoteDown.class)
public class VoteDownCustomImplementation
        implements party.mkkp.edemokracia.edemokracia.operation.edemokracia.service.comment.VoteDown {

    @Reference
    CommentService commentService;

    @Override
    public void accept(party.mkkp.edemokracia.edemokracia.api.edemokracia.service.comment.Comment _this) {
        commentService.voteDown(_this.identifier().getIdentifier());
    }
}
