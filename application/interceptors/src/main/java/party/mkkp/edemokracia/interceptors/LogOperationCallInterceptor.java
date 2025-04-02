package party.mkkp.edemokracia.interceptors;

import java.util.List;
import hu.blackbelt.judo.meta.asm.runtime.AsmUtils;
import hu.blackbelt.judo.runtime.core.dispatcher.OperationCallInterceptor;
import org.eclipse.emf.ecore.EOperation;
import org.osgi.service.component.annotations.Component;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Component(property = { "judo.model.name=edemokracia" })
public class LogOperationCallInterceptor implements OperationCallInterceptor {

    private static final Logger log = LoggerFactory.getLogger(LogOperationCallInterceptor.class);

    @Override
    public String getName() {
        return this.getClass().getSimpleName();
    }

    //    @Override
    //    public Collection<EOperation> getOperations(AsmModel asmModel) {
    //        if (interceptedOperations == null) {
    //            if (asmUtils == null) {
    //                asmUtils = new AsmUtils(asmModel.getResourceSet());
    //            }
    //
    //            interceptedOperations = Stream.of(
    //                    "TODO"
    //            ).map(asmUtils::resolveOperation).map(Optional::orElseThrow).toList();
    //        }
    //        return interceptedOperations;
    //    }

    @Override
    public Object preCall(EOperation operation, Object parameterPayload) {
        String operationFQName = AsmUtils.getOperationFQName(operation);
        log.info("*** ⬇️ INTERCEPTED OPERATION ⬇️ ***");
        log.info(operationFQName);
        log.info("*** ⬆️ INTERCEPTED OPERATION ⬆️ ***");
        return OperationCallInterceptor.super.preCall(operation, parameterPayload);
    }
}
