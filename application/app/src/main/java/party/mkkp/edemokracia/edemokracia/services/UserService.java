/* (C)2025 */
package party.mkkp.edemokracia.edemokracia.services;

import hu.blackbelt.judo.sdk.query.StringFilter;
import java.util.Optional;
import java.util.UUID;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import party.mkkp.edemokracia.edemokracia.api.edemokracia.service.serviceuser.ServiceUser;
import party.mkkp.edemokracia.edemokracia.api.edemokracia.service.serviceuser.ServiceUserDao;
import party.mkkp.edemokracia.edemokracia.api.edemokracia.service.serviceuser.ServiceUserMask;

@Component(service = UserService.class)
public class UserService {

    @Reference
    ServiceUserDao serviceUserDao;

    @Reference
    Variables variables;

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
}
