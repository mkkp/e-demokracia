//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    C L A S S
// ------------------------------
// Factory expression: #allCustomizableOperations(#model)
// Path expression: '/'+#emptyCustomOperationOsgiParentPath(#self)+'/'+#emptyCustomOperationOsgiName(#self)+'.java.default'
// Template name: empty-custom-operation-implementation-osgi.java
// Template file: osgi/empty-custom-operation-implementation-osgi.java.hbs
// Debug: false
// Payload validator: false
// Optional types: false

package party.mkkp.edemokracia.edemokracia.custom.edemokracia.service.comment;

import org.osgi.service.component.annotations.Reference;
import party.mkkp.edemokracia.edemokracia.services.CommentService;

/**
 * 
 * 
 * var edemokracia::User user = edemokracia::User!filter(u | u.userName == edemokracia::types::String!getVariable("ACTOR", "userName"))!any();
 * var edemokracia::Comment comment = this as edemokracia::Comment;
 * 
 * var edemokracia::types::Integer count =  comment.votes!filter(v | v.user.userName == user.userName)!count();
 * 
 * if (count == 0) {
 *     comment.votes += new edemokracia::SimpleVote(user = user, type = edemokracia::SimpleVoteType#UP);
 * }
 * 
 * 
 * Usage:
 *  1. Rename this file from VoteUpCustomImplementation.java.default to VoteUpCustomImplementation.java
 *  2. Implement method
 *  3. To ignore the generation of VoteUpCustomImplementation.java.default file, put it to .generator-ignore file
 *  4. To inject dao, import @org.osgi.service.component.annotations.* package and use @Reference annotation
 */
@org.osgi.service.component.annotations.Component(immediate = true, service = party.mkkp.edemokracia.edemokracia.operation.edemokracia.service.comment.VoteUp.class)
public class VoteUpCustomImplementation implements party.mkkp.edemokracia.edemokracia.operation.edemokracia.service.comment.VoteUp {

    @Reference
    CommentService commentService;

    @Override
    public void accept(party.mkkp.edemokracia.edemokracia.api.edemokracia.service.comment.Comment _this) {
        commentService.voteUp(_this.identifier().getIdentifier());
    }
}
