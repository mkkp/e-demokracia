/* (C)2025 */
package party.mkkp.edemokracia.edemokracia.services;

import hu.blackbelt.judo.sdk.query.StringFilter;

import java.io.Serializable;
import java.util.Optional;
import java.util.UUID;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import party.mkkp.edemokracia.edemokracia.api.edemokracia._default_transferobjecttypes.user.User;
import party.mkkp.edemokracia.edemokracia.api.edemokracia._default_transferobjecttypes.user.UserDao;
import party.mkkp.edemokracia.edemokracia.api.edemokracia._default_transferobjecttypes.user.UserMask;
import party.mkkp.edemokracia.edemokracia.api.edemokracia.service.serviceprincipaluser.*;
import party.mkkp.edemokracia.edemokracia.api.edemokracia.service.serviceuser.ServiceUser;
import party.mkkp.edemokracia.edemokracia.api.edemokracia.service.serviceuser.ServiceUserDao;
import party.mkkp.edemokracia.edemokracia.api.edemokracia.service.serviceuser.ServiceUserMask;

@Component(service = UserService.class)
public class UserService {

    @Reference
    ServiceUserDao serviceUserDao;

    @Reference
    Variables variables;

    @Reference
    UserDao userDao;

    @Reference
    ServicePrincipalUserDao servicePrincipalUserDao;

    public Optional<ServiceUser> findUserByUserName(String userName) {
        return serviceUserDao
                .query()
                .filterByUserName(StringFilter.equalTo(userName))
                .maskedBy(ServiceUserMask.serviceUserMask())
                .selectOne();
    }

    public ServiceUser findUser(UUID userId) {
        ServiceUser userEntity = serviceUserDao
                .getById(userId, ServiceUserMask.serviceUserMask())
                .orElseThrow(() -> new IllegalArgumentException("User does not exists: " + userId));
        return userEntity;
    }

    public ServiceUser getCurrentUser() {
        ServiceUser currentAccount = serviceUserDao
                .query()
                .filterByUserName(StringFilter.equalTo(variables.getActorUserName()))
                .maskedBy(ServiceUserMask.serviceUserMask())
                .selectOne()
                .orElseThrow(() -> new IllegalArgumentException("User does not exists"));
        return currentAccount;
    }

    public User getCurrentUserEntity() {
        User currentAccount = userDao
                .query()
                .filterByUserName(StringFilter.equalTo(variables.getActorUserName()))
                .maskedBy(UserMask.userMask().withUserName().withIsAdmin().withEmail())
                .selectOne()
                .orElseThrow(() -> new IllegalArgumentException("User does not exists"));
        return currentAccount;
    }

    public Serializable createUser(String userName, String email, String firstName, String lastName, boolean isAdmin, Optional<String> phone) {

        Optional<ServicePrincipalUser> user = servicePrincipalUserDao.query()
                .filterByUserName(StringFilter.equalTo(userName))
                .maskedBy(ServicePrincipalUserMask.servicePrincipalUserMask()).selectOne();
        if (user.isPresent()) {
            return user.get().identifier().getIdentifier();
        }

        ServicePrincipalUserForCreateBuilder servicePrincipalUserForCreate = ServicePrincipalUserForCreate
                .builder()
                .withUserName(userName)
                .withEmail(email)
                .withFirstName(firstName)
                .withLastName(lastName)
                .withIsAdmin(isAdmin);

        if (phone.isPresent()) {
            servicePrincipalUserForCreate.withPhone(phone.get());
        }
        return servicePrincipalUserDao.create(servicePrincipalUserForCreate.build(),
                ServicePrincipalUserMask.servicePrincipalUserMask()).identifier().getIdentifier();
    }
}
