/**
 * When navigate to selected subtypes view page on userOwedSelected
 */

import { useMemo } from 'react';

import { useJudoNavigation } from '~/components';
import { useDialog } from '~/components/dialog';
import { processQueryCustomizer } from '~/utilities';

import type { ServiceVoteDefinitionStored } from '~/services/data-api';

import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { UserServiceForRatingVoteDefinitionsImpl } from '~/services/data-axios/UserServiceForRatingVoteDefinitionsImpl';
import { UserServiceForSelectAnswerVoteDefinitionsImpl } from '~/services/data-axios/UserServiceForSelectAnswerVoteDefinitionsImpl';
import { UserServiceForYesNoAbstainVoteDefinitionsImpl } from '~/services/data-axios/UserServiceForYesNoAbstainVoteDefinitionsImpl';
import { UserServiceForYesNoVoteDefinitionsImpl } from '~/services/data-axios/UserServiceForYesNoVoteDefinitionsImpl';

import {
  routeToServiceUserAdminVoteDefinitionsAccessViewPage,
  routeToServiceUserRatingVoteDefinitionsAccessViewPage,
  routeToServiceUserSelectAnswerVoteDefinitionsAccessViewPage,
  routeToServiceUserYesNoAbstainVoteDefinitionsAccessViewPage,
  routeToServiceUserYesNoVoteDefinitionsAccessViewPage,
} from '~/routes';

//export async function openVoteDefinitionPage(row: ServiceVoteDefinitionStored) {
export const openVoteDefinitionPage = () => {
  const [createDialog, closeDialog, closeAllDialogs] = useDialog();
  const { navigate } = useJudoNavigation();
  const userServiceForRatingVoteDefinitionsImpl = useMemo(
    () => new UserServiceForRatingVoteDefinitionsImpl(judoAxiosProvider),
    [],
  );
  const userServiceForSelectAnswerVoteDefinitionsImpl = useMemo(
    () => new UserServiceForSelectAnswerVoteDefinitionsImpl(judoAxiosProvider),
    [],
  );
  const userServiceForYesNoAbstainVoteDefinitionsImpl = useMemo(
    () => new UserServiceForYesNoAbstainVoteDefinitionsImpl(judoAxiosProvider),
    [],
  );
  const userServiceForYesNoVoteDefinitionsImpl = useMemo(
    () => new UserServiceForYesNoVoteDefinitionsImpl(judoAxiosProvider),
    [],
  );

  return async function (row: ServiceVoteDefinitionStored) {
    closeAllDialogs();

    const id = row!.__identifier;
    const entityType = row!.__entityType;

    const idAccessFilterCustomizer: any = {
      _identifier: id,
    };

    if (entityType === 'edemokracia.YesNoVoteDefinition') {
      // Retrieve signedIdentifier from access
      const res = await userServiceForYesNoVoteDefinitionsImpl.list(processQueryCustomizer(idAccessFilterCustomizer));
      // Open view page in access
      navigate(routeToServiceUserYesNoVoteDefinitionsAccessViewPage(res[0].__signedIdentifier));
    } else if (entityType === 'edemokracia.YesNoAbstainVoteDefinition') {
      // Retrieve signedIdentifier from access
      const res = await userServiceForYesNoAbstainVoteDefinitionsImpl.list(
        processQueryCustomizer(idAccessFilterCustomizer),
      );
      // Open view page in access
      navigate(routeToServiceUserYesNoAbstainVoteDefinitionsAccessViewPage(res[0].__signedIdentifier));
    } else if (entityType === 'edemokracia.RatingVoteDefinition') {
      // Retrieve signedIdentifier from access
      const res = await userServiceForRatingVoteDefinitionsImpl.list(processQueryCustomizer(idAccessFilterCustomizer));
      // Open view page in access
      navigate(routeToServiceUserRatingVoteDefinitionsAccessViewPage(res[0].__signedIdentifier));
    } else if (entityType === 'edemokracia.SelectAnswerVoteDefinition') {
      // Retrieve signedIdentifier from access
      const res = await userServiceForSelectAnswerVoteDefinitionsImpl.list(
        processQueryCustomizer(idAccessFilterCustomizer),
      );
      // Open view page in access
      navigate(routeToServiceUserSelectAnswerVoteDefinitionsAccessViewPage(res[0].__signedIdentifier));
    } else {
      navigate(routeToServiceUserAdminVoteDefinitionsAccessViewPage(row.__signedIdentifier));
    }
  };
};
