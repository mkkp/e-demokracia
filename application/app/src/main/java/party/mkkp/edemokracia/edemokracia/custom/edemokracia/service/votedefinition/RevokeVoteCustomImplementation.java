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

package party.mkkp.edemokracia.edemokracia.custom.edemokracia.service.votedefinition;

import org.osgi.service.component.annotations.Reference;
import party.mkkp.edemokracia.edemokracia.services.VoteService;

/**
 * 
 * 
 * //
 * 
 * Usage:
 *  1. Rename this file from RevokeVoteCustomImplementation.java.default to RevokeVoteCustomImplementation.java
 *  2. Implement method
 *  3. To ignore the generation of RevokeVoteCustomImplementation.java.default file, put it to .generator-ignore file
 *  4. To inject dao, import @org.osgi.service.component.annotations.* package and use @Reference annotation
 */
@org.osgi.service.component.annotations.Component(immediate = true, service = party.mkkp.edemokracia.edemokracia.operation.edemokracia.service.votedefinition.RevokeVote.class)
public class RevokeVoteCustomImplementation implements party.mkkp.edemokracia.edemokracia.operation.edemokracia.service.votedefinition.RevokeVote {
    @Reference
    VoteService voteService;

    @Override
    public void accept(party.mkkp.edemokracia.edemokracia.api.edemokracia.service.votedefinition.VoteDefinition _this)  {
        voteService.revoke(_this.identifier().getIdentifier());
    }

}
