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

package party.mkkp.edemokracia.edemokracia.custom.edemokracia.service.userissues;

import hu.blackbelt.judo.dispatcher.api.VariableResolver;
import hu.blackbelt.judo.sdk.query.StringFilter;
import org.osgi.service.component.annotations.Reference;
import party.mkkp.edemokracia.edemokracia.api.edemokracia._default_transferobjecttypes.city.City;
import party.mkkp.edemokracia.edemokracia.api.edemokracia._default_transferobjecttypes.county.County;
import party.mkkp.edemokracia.edemokracia.api.edemokracia._default_transferobjecttypes.district.District;
import party.mkkp.edemokracia.edemokracia.api.edemokracia._default_transferobjecttypes.issue.Issue;
import party.mkkp.edemokracia.edemokracia.api.edemokracia._default_transferobjecttypes.issue.IssueAttachedRelationsForCreate;
import party.mkkp.edemokracia.edemokracia.api.edemokracia._default_transferobjecttypes.issue.IssueDao;
import party.mkkp.edemokracia.edemokracia.api.edemokracia._default_transferobjecttypes.issuetype.IssueType;
import party.mkkp.edemokracia.edemokracia.api.edemokracia._default_transferobjecttypes.user.User;
import party.mkkp.edemokracia.edemokracia.api.edemokracia._default_transferobjecttypes.user.UserDao;
import party.mkkp.edemokracia.edemokracia.api.edemokracia.service.issue.IssueIdentifier;
import party.mkkp.edemokracia.edemokracia.api.edemokracia.issuestatus.IssueStatus;

import java.time.LocalDateTime;


/**
 * 
 *
 * var edemokracia::User owner = edemokracia::User!filter(u | u.userName == edemokracia::types::String!getVariable("ACTOR", "userName"))!any();
 *
 * var edemokracia::IssueType issueType;
 * var edemokracia::County county;
 * var edemokracia::City city;
 * var edemokracia::District district;
 *
 * if (input.issueType!isDefined()) {
 *     issueType = mutable input.issueType;
 * }
 * if (input.county!isDefined()) {
 *     county = mutable input.county;
 * }
 * if (input.city!isDefined()) {
 *     city = mutable input.city;
 * }
 * if (input.district!isDefined()) {
 *     district = mutable input.district;
 * }
 *
 * var edemokracia::Issue issue = new edemokracia::Issue(
 * 		title = input.title,
 * 		description = input.description,
 * 		created = edemokracia::types::Timestamp!now(),
 * 		owner = owner,
 * 		createdBy = owner,
 * 		status = edemokracia::IssueStatus#CREATED,
 * 		issueType = issueType,
 * 		county = county,
 * 		city = city,
 * 		district = district,
 * 		debateCloseAt = input.debateCloseAt
 * 	);
 *
 *
 * for (attachment in input.attachments) {
 * 	issue.attachments += new edemokracia::IssueAttachment(
 * 		link = attachment.link,
 * 		file = attachment.file,
 * 		type = attachment.type
 * 	)
 * }
 *
 *
 * return issue;
 *
 * Usage:
 *  1. Rename this file from CreateIssueCustomImplementation.java.default to CreateIssueCustomImplementation.java
 *  2. Implement method
 *  3. To ignore the generation of CreateIssueCustomImplementation.java.default file, put it to .generator-ignore file
 *  4. To inject dao, import @org.osgi.service.component.annotations.* package and use @Reference annotation
 */
@org.osgi.service.component.annotations.Component(immediate = true, service = party.mkkp.edemokracia.edemokracia.operation.edemokracia.service.userissues.CreateIssue.class)
public class CreateIssueCustomImplementation implements party.mkkp.edemokracia.edemokracia.operation.edemokracia.service.userissues.CreateIssue {

    @Reference
    VariableResolver variableResolver;

    @Reference
    UserDao userDao;

    @Reference
    IssueDao issueDao;

    @Reference
    party.mkkp.edemokracia.edemokracia.api.edemokracia.service.issue.IssueDao adminIssueDao;

    public party.mkkp.edemokracia.edemokracia.api.edemokracia.service.issue.Issue apply(party.mkkp.edemokracia.edemokracia.api.edemokracia.service.createissueinput.CreateIssueInput input)  {
        String userName = variableResolver.resolve(String.class, "ACTOR", "userName");
        User user = userDao.query().filterByUserName(StringFilter.equalTo(userName)).selectOne().get();

        Issue issue = Issue.builder()
                .withTitle(input.getTitle())
                .withDescription(input.getDescription())
                .withStatus(IssueStatus.CREATED)
                .withCreated(LocalDateTime.now())
                .withDebateCloseAt(input.getDebateCloseAt())
                .build();

        issue = issueDao.create(issue, IssueAttachedRelationsForCreate
                .builder()
                .withIssueType(input.getIssueType() != null && input.getIssueType().isPresent() ? input.getIssueType().get().adaptTo(IssueType.class) : null)
                .withCounty(input.getCounty() != null && input.getCounty().isPresent() ? input.getCounty().get().adaptTo(County.class) : null)
                .withCity(input.getCity() != null && input.getCity().isPresent() ? input.getCity().get().adaptTo(City.class) : null)
                .withDistrict(input.getDistrict() != null && input.getDistrict().isPresent() ? input.getDistrict().get().adaptTo(District.class) : null)
                        .withCreatedBy(user)
                        .withOwner(user)
                .build());

        return adminIssueDao.getById(issue.identifier().adaptTo(IssueIdentifier.class)).get();
    }

}
