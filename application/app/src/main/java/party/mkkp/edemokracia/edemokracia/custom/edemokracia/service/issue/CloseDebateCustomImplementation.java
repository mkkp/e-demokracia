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

package party.mkkp.edemokracia.edemokracia.custom.edemokracia.service.issue;

import org.osgi.service.component.annotations.Reference;
import party.mkkp.edemokracia.edemokracia.api.edemokracia._default_transferobjecttypes.issue.IssueDao;
import party.mkkp.edemokracia.edemokracia.api.edemokracia.closedebateoutputvotedefinitionreference.CloseDebateOutputVoteDefinitionReferenceDao;
import party.mkkp.edemokracia.edemokracia.api.edemokracia.votetype.VoteType;
import party.mkkp.edemokracia.edemokracia.api.edemokracia.votetypeonclosedebate.VoteTypeOnCloseDebate;
import party.mkkp.edemokracia.edemokracia.services.IssueService;

import java.io.Serializable;
import java.util.Optional;

/**
 * 
 * 
 * var edemokracia::VoteDefinition voteDef;
 * var edemokracia::User user = edemokracia::User!filter(u | u.userName == edemokracia::types::String!getVariable("ACTOR", "userName"))!any()
 * var edemokracia::Issue issue = this as edemokracia::Issue;
 * 
 * if (issue.status != edemokracia::IssueStatus#ACTIVE) {
 * 	return voteDef;
 * }
 * 
 * if (input.voteType == edemokracia::VoteTypeOnCloseDebate#YES_NO) {
 * 	voteDef = new edemokracia::YesNoVoteDefinition(
 * 		title = input.title, 
 * 		description = input.description,
 * 		closeAt = input.closeAt,
 * 		status = edemokracia::VoteStatus#CREATED,
 * 		owner = user,
 * 		createdBy = user
 * 	);
 * }
 * 
 * if (input.voteType == edemokracia::VoteTypeOnCloseDebate#YES_NO_ABSTAIN) {
 * 	voteDef = new edemokracia::YesNoAbstainVoteDefinition(
 * 		title = input.title, 
 * 		description = input.description,
 * 		closeAt = input.closeAt,
 * 		status = edemokracia::VoteStatus#CREATED,
 * 		owner = user,
 * 		createdBy = user		
 * 	);
 * }
 * 
 * if (input.voteType == edemokracia::VoteTypeOnCloseDebate#SELECT_ANSWER) {
 * 	var edemokracia::SelectAnswerVoteDefinition selectVoteDef = new edemokracia::SelectAnswerVoteDefinition(
 * 		title = input.title, 
 * 		description = input.description,
 * 		closeAt = input.closeAt,
 * 		status = edemokracia::VoteStatus#CREATED,	
 * 		owner = user,
 * 		createdBy = user
 * 			
 * 	);
 * 		
 * 	voteDef = selectVoteDef;
 * }
 * 
 * if (input.voteType == edemokracia::VoteTypeOnCloseDebate#RATE) {
 * 	voteDef = new edemokracia::RatingVoteDefinition(
 * 		title = input.title, 
 * 		description = input.description,
 * 		closeAt = input.closeAt,
 * 		status = edemokracia::VoteStatus#CREATED,
 * 		owner = user,
 * 		createdBy = user			
 * 	);
 * }
 * 
 * issue.voteDefinitions += voteDef;
 * 
 * issue.status = edemokracia::IssueStatus#VOTING;
 * 
 * return voteDef;
 *  
 * 
 * Usage:
 *  1. Rename this file from CloseDebateCustomImplementation.java.default to CloseDebateCustomImplementation.java
 *  2. Implement method
 *  3. To ignore the generation of CloseDebateCustomImplementation.java.default file, put it to .generator-ignore file
 *  4. To inject dao, import @org.osgi.service.component.annotations.* package and use @Reference annotation
 */
@org.osgi.service.component.annotations.Component(immediate = true, service = party.mkkp.edemokracia.edemokracia.operation.edemokracia.service.issue.CloseDebate.class)
public class CloseDebateCustomImplementation implements party.mkkp.edemokracia.edemokracia.operation.edemokracia.service.issue.CloseDebate {

    @Reference
    IssueService issueService;

    @Reference
    CloseDebateOutputVoteDefinitionReferenceDao closeDebate;

    @Override
    public party.mkkp.edemokracia.edemokracia.api.edemokracia.closedebateoutputvotedefinitionreference.CloseDebateOutputVoteDefinitionReference apply(party.mkkp.edemokracia.edemokracia.api.edemokracia.service.issue.Issue _this, party.mkkp.edemokracia.edemokracia.api.edemokracia.closedebateinput.CloseDebateInput input)  {
        if (input.getVoteType() == VoteTypeOnCloseDebate.NO_VOTE) {
            return null;
        }
        VoteType voteType = VoteType.valueOf(input.getVoteType().getName());
        Optional<Serializable> voteId = issueService.closeDebate(_this.identifier().getIdentifier(),
                voteType, input.getTitle(), input.getDescription(), input.getCloseAt());
        return closeDebate.getById(voteId.get()).orElse(null);
    }

}
