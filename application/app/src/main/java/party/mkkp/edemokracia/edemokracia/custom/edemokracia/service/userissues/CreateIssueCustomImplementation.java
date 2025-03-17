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

import org.osgi.service.component.annotations.Reference;
import party.mkkp.edemokracia.edemokracia.api.edemokracia._default_transferobjecttypes.city.City;
import party.mkkp.edemokracia.edemokracia.api.edemokracia._default_transferobjecttypes.city.CityDao;
import party.mkkp.edemokracia.edemokracia.api.edemokracia._default_transferobjecttypes.city.CityMask;
import party.mkkp.edemokracia.edemokracia.api.edemokracia._default_transferobjecttypes.county.County;
import party.mkkp.edemokracia.edemokracia.api.edemokracia._default_transferobjecttypes.county.CountyDao;
import party.mkkp.edemokracia.edemokracia.api.edemokracia._default_transferobjecttypes.county.CountyMask;
import party.mkkp.edemokracia.edemokracia.api.edemokracia._default_transferobjecttypes.district.District;
import party.mkkp.edemokracia.edemokracia.api.edemokracia._default_transferobjecttypes.district.DistrictDao;
import party.mkkp.edemokracia.edemokracia.api.edemokracia._default_transferobjecttypes.district.DistrictMask;
import party.mkkp.edemokracia.edemokracia.api.edemokracia._default_transferobjecttypes.issue.*;
import party.mkkp.edemokracia.edemokracia.api.edemokracia._default_transferobjecttypes.issuetype.IssueType;
import party.mkkp.edemokracia.edemokracia.api.edemokracia._default_transferobjecttypes.issuetype.IssueTypeDao;
import party.mkkp.edemokracia.edemokracia.api.edemokracia._default_transferobjecttypes.issuetype.IssueTypeMask;
import party.mkkp.edemokracia.edemokracia.api.edemokracia._default_transferobjecttypes.user.User;
import party.mkkp.edemokracia.edemokracia.api.edemokracia.issuestatus.IssueStatus;
import party.mkkp.edemokracia.edemokracia.api.edemokracia.service.issue.IssueDao;
import party.mkkp.edemokracia.edemokracia.services.IssueService;
import party.mkkp.edemokracia.edemokracia.services.UserService;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.Optional;

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
 * // for (attachment in input.attachments) {
 * //	issue.attachments += new edemokracia::IssueAttachment(
 * //		link = attachment.link,
 * //		file = attachment.file,
 * //		type = attachment.type
 * //	)
 * // }
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
    IssueDao issueDao;

    @Reference
    IssueService issueService;

    @Override
    public party.mkkp.edemokracia.edemokracia.api.edemokracia.service.issue.Issue apply(party.mkkp.edemokracia.edemokracia.api.edemokracia.service.createissueinput.CreateIssueInput input)  {
        Serializable issueId = issueService.createIssueForCurrentUser(input.getTitle(),
                input.getDescription(),
                input.getIssueType().isPresent() ? input.getIssueType().get().identifier().getIdentifier() : null,
                input.getCounty().isPresent() ? input.getCounty().get().identifier().getIdentifier() : null,
                input.getCity().isPresent() ? input.getCity().get().identifier().getIdentifier() : null,
                input.getDistrict().isPresent() ? input.getDistrict().get().identifier().getIdentifier() : null,
                input.getDebateCloseAt());

        return issueDao.getById(issueId).get();
    }

}
