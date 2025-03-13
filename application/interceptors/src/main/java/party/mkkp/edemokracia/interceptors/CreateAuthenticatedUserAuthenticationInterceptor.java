package party.mkkp.edemokracia.interceptors;

import com.ubives.ubives.api.ubives._default_transferobjecttypes.entities.accountentity.AccountEntity;
import com.ubives.ubives.api.ubives._default_transferobjecttypes.entities.accountentity.AccountEntityDao;
import com.ubives.ubives.api.ubives._default_transferobjecttypes.entities.accountentity.AccountEntityForCreate;
import com.ubives.ubives.api.ubives._default_transferobjecttypes.entities.accountentity.AccountEntityMask;
import com.ubives.ubives.api.ubives._default_transferobjecttypes.entities.identityentity.IdentityEntityDao;
import com.ubives.ubives.api.ubives._default_transferobjecttypes.entities.identityentity.IdentityEntityForCreate;
import hu.blackbelt.judo.runtime.core.accessmanager.api.AuthenticationInterceptor;
import hu.blackbelt.judo.sdk.query.StringFilter;
import org.eclipse.emf.ecore.EOperation;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import party.mkkp.edemokracia.edemokracia.api.edemokracia._default_transferobjecttypes.user.User;
import party.mkkp.edemokracia.edemokracia.api.edemokracia._default_transferobjecttypes.user.UserDao;
import party.mkkp.edemokracia.edemokracia.api.edemokracia._default_transferobjecttypes.user.UserForCreate;
import party.mkkp.edemokracia.edemokracia.api.edemokracia._default_transferobjecttypes.user.UserMask;

import java.util.Map;
import java.util.Optional;

@Component(property = { "judo.model.name=Ubives" })
public class CreateAuthenticatedUserAuthenticationInterceptor implements AuthenticationInterceptor {

    private static final Logger log = LoggerFactory.getLogger(CreateAuthenticatedUserAuthenticationInterceptor.class);

    @Reference
    UserDao userDao;

    @Override
    public String getName() {
        return this.getClass().getSimpleName();
    }

    public boolean isSuitableForOperation(EOperation operation,
                                    final String claim,
                                    final String realm,
                                    final String client,
                                    Map<String, Object> attributes) {
        return operation.getName().endsWith("_principal");
    }

    @Override
    public void authenticate(String operationFullyQualifiedName, Map<String, Object> exchange, String claim, String realm, String client, Map<String, Object> attributes) {
        if (!operationFullyQualifiedName.endsWith("#_principal")) {
            return;
        }

        String username = (String) attributes.get("userName");
        String firstName = (String) attributes.get("given_name");
        String lastName = (String) attributes.get("family_name");
        String email = (String) attributes.get("email");

        if (username != null) {
            Optional<User> existingUser = userDao.query()
                    .filterByUserName(StringFilter.equalTo(username))
                    .maskedBy(UserMask.userMask().withUserName())
                    .selectOne();
            if (existingUser.isEmpty()) {

                userDao.create(UserForCreate.builder()
                                .withUserName(username)
                                .withFirstName(firstName)
                                .withLastName(lastName)
                                .withEmail(email)
                    .build()
                );
            }
        }


    }
}
