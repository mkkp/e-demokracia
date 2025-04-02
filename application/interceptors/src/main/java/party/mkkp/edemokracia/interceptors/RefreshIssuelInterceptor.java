package party.mkkp.edemokracia.interceptors;

import hu.blackbelt.judo.dao.api.Payload;
import hu.blackbelt.judo.meta.asm.runtime.AsmModel;
import hu.blackbelt.judo.meta.asm.runtime.AsmUtils;
import hu.blackbelt.judo.runtime.core.dispatcher.OperationCallInterceptor;
import hu.blackbelt.judo.runtime.core.dispatcher.behaviours.InterceptorCallBusinessException;
import org.eclipse.emf.ecore.EOperation;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import party.mkkp.edemokracia.edemokracia.api.edemokracia.issuescope.IssueScope;
import party.mkkp.edemokracia.edemokracia.api.edemokracia.service.issue.Issue;
import party.mkkp.edemokracia.edemokracia.api.edemokracia.service.issue.IssueBuilder;

import java.util.Collection;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Stream;

@Component(property = { "judo.model.name=edemokracia" })
public class RefreshIssuelInterceptor implements OperationCallInterceptor {

    private static final Logger log = LoggerFactory.getLogger(RefreshIssuelInterceptor.class);

    @Override
    public String getName() {
        return this.getClass().getSimpleName();
    }

    @Reference(target = "(name=edemokracia)")
    AsmModel asmModel;


    @Override
    public Collection<EOperation> getOperations(AsmModel asmModel) {
        AsmUtils asmUtils = new AsmUtils(asmModel.getResourceSet());
        return Stream.of(
                "edemokracia.service.Issue#_refreshInstanceEdemokracia_service_Issue"
        ).map(asmUtils::resolveOperation).map(Optional::orElseThrow).toList();
    }

    @Override
    public Object preCall(EOperation operation, Object parameterPayload) {
        String operationFQName = AsmUtils.getOperationFQName(operation);
        return OperationCallInterceptor.super.preCall(operation, parameterPayload);
    }

    @Override
    public Object postCall(EOperation operation, Object parameterPayload, Object returnPayload) throws InterceptorCallBusinessException {
        Issue issue = IssueBuilder.from((Map<String, Object>) returnPayload).build();
        IssueScope issueScope = IssueScope.GLOBAL;
        issue.setIsIssueScopeGlobal(true);
        issue.setIsNotIssueScopeGlobal(false);
        issue.setIsIssueScopeCounty(false);
        issue.setIsNotIssueScopeCounty(true);
        issue.setIsIssueScopeCity(false);
        issue.setIsNotIssueScopeCity(true);
        issue.setIsIssueScopeDistrict(false);
        issue.setIsNotIssueScopeDistrict(true);

        if (issue.getCounty().isPresent()) {
            issueScope = IssueScope.COUNTY;
            issue.setIsIssueScopeCounty(true);
            issue.setIsNotIssueScopeCounty(false);
        } else if (issue.getCity().isPresent()) {
            issueScope = IssueScope.CITY;
            issue.setIsIssueScopeCity(true);
            issue.setIsNotIssueScopeCity(false);
        } else if (issue.getDistrict().isPresent()) {
            issueScope = IssueScope.DISTRICT;
            issue.setIsIssueScopeDistrict(true);
            issue.setIsNotIssueScopeDistrict(false);
        }
        issue.setIsseScope(issueScope);

        return Payload.asPayload(issue.toMap());
    }
}
