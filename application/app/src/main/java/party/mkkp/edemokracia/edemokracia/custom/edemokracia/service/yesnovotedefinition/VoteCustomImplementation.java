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

package party.mkkp.edemokracia.edemokracia.custom.edemokracia.service.yesnovotedefinition;

import org.osgi.service.component.annotations.Reference;
import party.mkkp.edemokracia.edemokracia.services.VoteService;

/**
 * 
 * 
 * var edemokracia::YesNoVoteDefinition vote = this as edemokracia::YesNoVoteDefinition;
 * var edemokracia::User user = edemokracia::User!filter(u | u.userName == edemokracia::types::String!getVariable("ACTOR", "userName"))!any()
 * 
 * if (vote.isYesNoType) {
 * 	var edemokracia::YesNoVoteEntry voteEntry = new edemokracia::YesNoVoteEntry(
 * 		value = input.value,
 * 		voteDefinition = vote,
 * 		user = user	
 * 	);
 * }
 * 
 * 
 * Usage:
 *  1. Rename this file from VoteCustomImplementation.java.default to VoteCustomImplementation.java
 *  2. Implement method
 *  3. To ignore the generation of VoteCustomImplementation.java.default file, put it to .generator-ignore file
 *  4. To inject dao, import @org.osgi.service.component.annotations.* package and use @Reference annotation
 */
@org.osgi.service.component.annotations.Component(immediate = true, service = party.mkkp.edemokracia.edemokracia.operation.edemokracia.service.yesnovotedefinition.Vote.class)
public class VoteCustomImplementation implements party.mkkp.edemokracia.edemokracia.operation.edemokracia.service.yesnovotedefinition.Vote {

    @Reference
    VoteService voteService;

    @Override
    public void accept(party.mkkp.edemokracia.edemokracia.api.edemokracia.service.yesnovotedefinition.YesNoVoteDefinition _this, party.mkkp.edemokracia.edemokracia.api.edemokracia.yesnovoteinput.YesNoVoteInput input)  {
        var vote = input.getValue().get();
        voteService.vote(_this.identifier().getIdentifier(), vote);
    }

}
