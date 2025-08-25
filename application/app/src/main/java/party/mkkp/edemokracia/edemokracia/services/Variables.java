/* (C)2025 */
package party.mkkp.edemokracia.edemokracia.services;

import hu.blackbelt.judo.dispatcher.api.VariableResolver;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;

@Component(service = Variables.class)
public class Variables {

    @Reference(target = "(judo.model.name=edemokracia)")
    VariableResolver variableResolver;

    public String getActorUserName() {
        return variableResolver.resolve(String.class, "ACTOR", "userName");
    }

    public String getActorEmailName() {
        return variableResolver.resolve(String.class, "ACTOR", "email");
    }

    public String getCurrentOrganizationId() {
        return variableResolver.resolve(String.class, "REQUEST", "organization");
    }
}
