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

package party.mkkp.edemokracia.edemokracia.custom.edemokracia.service.selectanswervotedefinition;

import org.osgi.service.component.annotations.Reference;
import party.mkkp.edemokracia.edemokracia.services.VoteDefinitionService;

/**
 * 
 * 
 * var edemokracia::VoteDefinition vote = this as edemokracia::VoteDefinition;
 * 
 * if (vote.status != edemokracia::VoteStatus#CREATED) {
 * 	return;
 * }
 * vote.status = edemokracia::VoteStatus#ACTIVE;
 * 
 * 
 * Usage:
 *  1. Rename this file from ActivateCustomImplementation.java.default to ActivateCustomImplementation.java
 *  2. Implement method
 *  3. To ignore the generation of ActivateCustomImplementation.java.default file, put it to .generator-ignore file
 *  4. To inject dao, import @org.osgi.service.component.annotations.* package and use @Reference annotation
 */
@org.osgi.service.component.annotations.Component(immediate = true, service = party.mkkp.edemokracia.edemokracia.operation.edemokracia.service.selectanswervotedefinition.Activate.class)
public class ActivateCustomImplementation implements party.mkkp.edemokracia.edemokracia.operation.edemokracia.service.selectanswervotedefinition.Activate {

    @Reference
    VoteDefinitionService voteDefinitionService;

    @Override
    public void accept(party.mkkp.edemokracia.edemokracia.api.edemokracia.service.selectanswervotedefinition.SelectAnswerVoteDefinition _this)  {
        voteDefinitionService.activate(_this.identifier().getIdentifier());
    }
}
