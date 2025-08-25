import { To } from 'react-router';
import {
  routeToServiceUserRatingVoteDefinitionsAccessViewPage,
  routeToServiceUserSelectAnswerVoteDefinitionsAccessViewPage,
  routeToServiceUserYesNoAbstainVoteDefinitionsAccessViewPage,
  routeToServiceUserYesNoVoteDefinitionsAccessViewPage,
} from '~/routes';
import { CloseDebateOutputVoteDefinitionReference } from '~/services/data-api/model/CloseDebateOutputVoteDefinitionReference';
import { UserServiceForRatingVoteDefinitionsImpl } from '~/services/data-axios/UserServiceForRatingVoteDefinitionsImpl';
import { UserServiceForSelectAnswerVoteDefinitionsImpl } from '~/services/data-axios/UserServiceForSelectAnswerVoteDefinitionsImpl';
import { UserServiceForYesNoAbstainVoteDefinitionsImpl } from '~/services/data-axios/UserServiceForYesNoAbstainVoteDefinitionsImpl';
import { UserServiceForYesNoVoteDefinitionsImpl } from '~/services/data-axios/UserServiceForYesNoVoteDefinitionsImpl';
import { processQueryCustomizer } from '~/utilities';

export async function navigteToVoteFromCloseDebate(
  output: CloseDebateOutputVoteDefinitionReference,
  navigate: (to: To) => void,
  userServiceForYesNoVoteDefinitions: UserServiceForYesNoVoteDefinitionsImpl,
  userServiceForYesNoAbstainVoteDefinitions: UserServiceForYesNoAbstainVoteDefinitionsImpl,
  userServiceForRatingVoteDefinitions: UserServiceForRatingVoteDefinitionsImpl,
  userServiceForSelectAnswerVoteDefinitions: UserServiceForSelectAnswerVoteDefinitionsImpl,
) {
  // 1. Retrieve result identifier
  // TODO: Use output as stored type
  const id = (output as any)!.__identifier;
  const signedId = (output as any)!.__signedIdentifier;
  const entityType = (output as any)!.__entityType;

  // 2. Retrieve signedIdentifier from access
  const idAccessFilterCustomizer: any = {
    _identifier: id,
  };

  // 3. Open view page in access
  if (entityType === 'edemokracia.YesNoVoteDefinition') {
    // Retrieve signedIdentifier from access
    const res = await userServiceForYesNoVoteDefinitions.list(
      undefined,
      processQueryCustomizer(idAccessFilterCustomizer),
    );
    // Open view page in access
    navigate(routeToServiceUserYesNoVoteDefinitionsAccessViewPage(res.data[0].__signedIdentifier));
  } else if (entityType === 'edemokracia.YesNoAbstainVoteDefinition') {
    // Retrieve signedIdentifier from access
    const res = await userServiceForYesNoAbstainVoteDefinitions.list(
      undefined,
      processQueryCustomizer(idAccessFilterCustomizer),
    );
    // Open view page in access
    navigate(routeToServiceUserYesNoAbstainVoteDefinitionsAccessViewPage(res.data[0].__signedIdentifier));
  } else if (entityType === 'edemokracia.RatingVoteDefinition') {
    // Retrieve signedIdentifier from access
    const res = await userServiceForRatingVoteDefinitions.list(
      undefined,
      processQueryCustomizer(idAccessFilterCustomizer),
    );
    // Open view page in access
    navigate(routeToServiceUserRatingVoteDefinitionsAccessViewPage(res.data[0].__signedIdentifier));
  } else if (entityType === 'edemokracia.SelectAnswerVoteDefinition') {
    // Retrieve signedIdentifier from access
    const res = await userServiceForSelectAnswerVoteDefinitions.list(
      undefined,
      processQueryCustomizer(idAccessFilterCustomizer),
    );
    // Open view page in access
    navigate(routeToServiceUserSelectAnswerVoteDefinitionsAccessViewPage(res.data[0].__signedIdentifier));
  }
  // else {
  //   navigate(routeToServiceUserAdminVoteDefinitionsAccessViewPage(signedId));
  // }
}
