/* (C)2025 */
package party.mkkp.edemokracia.edemokracia.services;

import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import party.mkkp.edemokracia.edemokracia.api.edemokracia._default_transferobjecttypes.votedefinition.VoteDefinition;
import party.mkkp.edemokracia.edemokracia.api.edemokracia._default_transferobjecttypes.votedefinition.VoteDefinitionDao;
import party.mkkp.edemokracia.edemokracia.api.edemokracia._default_transferobjecttypes.votedefinition.VoteDefinitionMask;
import party.mkkp.edemokracia.edemokracia.api.edemokracia._default_transferobjecttypes.voteentry.VoteEntry;
import party.mkkp.edemokracia.edemokracia.api.edemokracia._default_transferobjecttypes.voteentry.VoteEntryDao;
import party.mkkp.edemokracia.edemokracia.api.edemokracia._default_transferobjecttypes.voteentry.VoteEntryMask;
import party.mkkp.edemokracia.edemokracia.api.edemokracia.votestatus.VoteStatus;

import java.io.Serializable;
import java.util.Optional;

@Component(service = VoteDefinitionService.class)
public class VoteDefinitionService {
    @Reference
    UserService userService;

    @Reference
    VoteDefinitionDao voteDefinitionDao;

    @Reference
    VoteEntryDao voteEntryDao;

    public VoteDefinition getVoteDefinition(Serializable voteDefinitionId, VoteDefinitionMask voteDefinitionMask) {
        VoteDefinition voteDefinition = voteDefinitionDao.getById(voteDefinitionId, voteDefinitionMask).orElseThrow(() -> new IllegalArgumentException("Vote definition not found"));
        return voteDefinition;
    }

    public void activate(Serializable voteDefinitionId) {
        VoteDefinition voteDefinition = getVoteDefinition(voteDefinitionId, VoteDefinitionMask
                .voteDefinitionMask()
                .withStatus());
        if (voteDefinition.getStatus() != VoteStatus.CREATED) {
            return;
        }
        voteDefinition.setStatus(VoteStatus.ACTIVE);
        voteDefinitionDao.update(voteDefinition);
   }

    public void addToFavorites(Serializable voteDefinitionId) {
        VoteDefinition voteDefinition = getVoteDefinition(voteDefinitionId, VoteDefinitionMask
                .voteDefinitionMask());
        voteDefinitionDao.addUsersFavoritedBy(voteDefinition, userService.getCurrentUserEntity());
    }

    public void removeFromFavorites(Serializable voteDefinitionId) {
        VoteDefinition voteDefinition = getVoteDefinition(voteDefinitionId, VoteDefinitionMask
                .voteDefinitionMask());
        voteDefinitionDao.removeUsersFavoritedBy(voteDefinition, userService.getCurrentUserEntity());
    }

    public void closeVote(Serializable voteDefinitionId) {
        VoteDefinition voteDefinition = getVoteDefinition(voteDefinitionId,
                VoteDefinitionMask.voteDefinitionMask()
                .withStatus());

        if (voteDefinition.getStatus() != VoteStatus.ACTIVE) {
            return;
        }
        voteDefinition.setStatus(VoteStatus.CLOSED);
        voteDefinitionDao.update(voteDefinition);
    }

    public void deleteOrArchive(Serializable voteDefinitionId) {
        VoteDefinition voteDefinition = getVoteDefinition(voteDefinitionId,
                VoteDefinitionMask.voteDefinitionMask()
                        .withStatus());

        if (voteDefinition.getStatus() == VoteStatus.CREATED) {
            voteDefinitionDao.delete(voteDefinition);
        } else if (voteDefinition.getStatus() == VoteStatus.CLOSED) {
            voteDefinition.setStatus(VoteStatus.ARCHIVED);
            voteDefinitionDao.update(voteDefinition);
        }
    }

    public void takeBackVote(Serializable voteDefinitionId) {
        VoteDefinition voteDefinition = getVoteDefinition(voteDefinitionId,
                VoteDefinitionMask.voteDefinitionMask()
                        .withStatus());

        Optional<VoteEntry> entry =  voteDefinitionDao.queryUserVoteEntry(voteDefinitionId,
                VoteEntryMask
                        .voteEntryMask()
        );
        if (entry.isPresent()) {
            voteEntryDao.delete(entry.get());
        }
    }

}
