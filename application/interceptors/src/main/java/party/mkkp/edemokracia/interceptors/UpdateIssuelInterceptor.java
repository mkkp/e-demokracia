package party.mkkp.edemokracia.interceptors;

import hu.blackbelt.judo.dao.api.Payload;
import hu.blackbelt.judo.meta.asm.runtime.AsmModel;
import hu.blackbelt.judo.meta.asm.runtime.AsmUtils;
import hu.blackbelt.judo.runtime.core.dispatcher.OperationCallInterceptor;
import hu.blackbelt.judo.runtime.core.dispatcher.behaviours.InterceptorCallBusinessException;
import hu.blackbelt.judo.runtime.core.dispatcher.behaviours.UpdateInstanceCall;
import org.eclipse.emf.ecore.EOperation;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import party.mkkp.edemokracia.edemokracia.api.edemokracia.issuescope.IssueScope;
import party.mkkp.edemokracia.edemokracia.api.edemokracia.service.city.CityMask;
import party.mkkp.edemokracia.edemokracia.api.edemokracia.service.county.CountyMask;
import party.mkkp.edemokracia.edemokracia.api.edemokracia.service.district.DistrictMask;
import party.mkkp.edemokracia.edemokracia.api.edemokracia.service.issue.Issue;
import party.mkkp.edemokracia.edemokracia.api.edemokracia.service.issue.IssueBuilder;
import party.mkkp.edemokracia.edemokracia.api.edemokracia.service.issue.IssueDao;
import party.mkkp.edemokracia.edemokracia.api.edemokracia.service.issue.IssueMask;

import java.util.Collection;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Stream;

@Component(property = { "judo.model.name=edemokracia" })
public class UpdateIssuelInterceptor implements OperationCallInterceptor {

    private static final Logger log = LoggerFactory.getLogger(UpdateIssuelInterceptor.class);

    @Override
    public String getName() {
        return this.getClass().getSimpleName();
    }

    @Reference(target = "(name=edemokracia)")
    AsmModel asmModel;

    @Reference
    IssueDao issueDao;

    @Override
    public Collection<EOperation> getOperations(AsmModel asmModel) {
        AsmUtils asmUtils = new AsmUtils(asmModel.getResourceSet());
        return Stream.of(
                "edemokracia.service.Issue#_updateInstanceEdemokracia_service_Issue"
        ).map(asmUtils::resolveOperation).map(Optional::orElseThrow).toList();
    }

    @Override
    public Object postCall(EOperation operation, Object parameterPayload, Object returnPayload) throws InterceptorCallBusinessException {
        UpdateInstanceCall.UpdateInstanceCallPayload payload = (UpdateInstanceCall.UpdateInstanceCallPayload) parameterPayload;
        Issue originalIssue = IssueBuilder.from(payload.getInput()).build();
        IssueScope issueScope = originalIssue.getIsseScope();
        Issue issue = issueDao.getById(originalIssue.identifier().getIdentifier(),
                IssueMask.issueMask()
                        .withCounty(CountyMask.countyMask())
                        .withCity(CityMask.cityMask())
                        .withDistrict(DistrictMask.districtMask())).get();
        if (issueScope == IssueScope.GLOBAL) {
            issue.setCounty(null);
            issue.setCity(null);
            issue.setDistrict(null);
        } else if (issueScope == IssueScope.COUNTY) {
            issue.setCity(null);
            issue.setDistrict(null);
        } else if (issueScope == IssueScope.CITY) {
            issue.setCounty(null);
            issue.setDistrict(null);
        } else if (issueScope == IssueScope.DISTRICT) {
            issue.setCity(null);
            issue.setCounty(null);
        }
        issueDao.update(issue);
        return OperationCallInterceptor.super.postCall(operation, parameterPayload, returnPayload);
    }
}
