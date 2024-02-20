/**
 * When navigate to selected subtypes view page on userOwedSelected
 */

import { useMemo } from 'react';

import { useJudoNavigation } from '~/components';
import { useDialog } from '~/components/dialog';
import { processQueryCustomizer } from '~/utilities';

import type { ServiceVoteEntryStored } from '~/services/data-api';

import { judoAxiosProvider } from '~/services/data-axios/JudoAxiosProvider';
import { UserServiceForRatingVoteDefinitionsImpl } from '~/services/data-axios/UserServiceForRatingVoteDefinitionsImpl';
import { UserServiceForSelectAnswerVoteDefinitionsImpl } from '~/services/data-axios/UserServiceForSelectAnswerVoteDefinitionsImpl';
import { UserServiceForVoteEntriesImpl } from '~/services/data-axios/UserServiceForVoteEntriesImpl';
import { UserServiceForYesNoAbstainVoteDefinitionsImpl } from '~/services/data-axios/UserServiceForYesNoAbstainVoteDefinitionsImpl';
import { UserServiceForYesNoVoteDefinitionsImpl } from '~/services/data-axios/UserServiceForYesNoVoteDefinitionsImpl';

import {
  routeToServiceUserAdminVoteEntriesAccessTablePage,
  routeToServiceUserRatingVoteDefinitionsAccessViewPage,
  routeToServiceUserSelectAnswerVoteDefinitionsAccessViewPage,
  routeToServiceUserYesNoAbstainVoteDefinitionsAccessViewPage,
  routeToServiceUserYesNoVoteDefinitionsAccessViewPage,
} from '~/routes';

//export async function openVoteDefinitionPage(row: ServiceVoteDefinitionStored) {
export const openVoteEntryPage = () => {
  const [createDialog, closeDialog, closeAllDialogs] = useDialog();
  const { navigate } = useJudoNavigation();

  const userServiceForVoteEntriesImpl = useMemo(() => new UserServiceForVoteEntriesImpl(judoAxiosProvider), []);
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

  return async function (row: ServiceVoteEntryStored, isDraft?: boolean) {
    closeAllDialogs();

    const entryIdAccessFilterCustomizer: any = {
      _identifier: row!.__identifier,
    };

    const res = await userServiceForVoteEntriesImpl.list(
      undefined,
      processQueryCustomizer(entryIdAccessFilterCustomizer),
    );

    const id = res.data[0].voteDefinitionReference!.__identifier;
    const entityType = res.data[0].voteDefinitionReference!.__entityType;

    const idAccessFilterCustomizer: any = {
      _identifier: id,
    };

    if (entityType === 'edemokracia.YesNoVoteDefinition') {
      // Retrieve signedIdentifier from access
      const res = await userServiceForYesNoVoteDefinitionsImpl.list(
        undefined,
        processQueryCustomizer(idAccessFilterCustomizer),
      );
      // Open view page in access
      navigate(routeToServiceUserYesNoVoteDefinitionsAccessViewPage(res.data[0].__signedIdentifier));
    } else if (entityType === 'edemokracia.YesNoAbstainVoteDefinition') {
      // Retrieve signedIdentifier from access
      const res = await userServiceForYesNoAbstainVoteDefinitionsImpl.list(
        processQueryCustomizer(idAccessFilterCustomizer),
      );
      // Open view page in access
      navigate(routeToServiceUserYesNoAbstainVoteDefinitionsAccessViewPage(res.data[0].__signedIdentifier));
    } else if (entityType === 'edemokracia.RatingVoteDefinition') {
      // Retrieve signedIdentifier from access
      const res = await userServiceForRatingVoteDefinitionsImpl.list(processQueryCustomizer(idAccessFilterCustomizer));
      // Open view page in access
      navigate(routeToServiceUserRatingVoteDefinitionsAccessViewPage(res.data[0].__signedIdentifier));
    } else if (entityType === 'edemokracia.SelectAnswerVoteDefinition') {
      // Retrieve signedIdentifier from access
      const res = await userServiceForSelectAnswerVoteDefinitionsImpl.list(
        processQueryCustomizer(idAccessFilterCustomizer),
      );
      // Open view page in access
      navigate(routeToServiceUserSelectAnswerVoteDefinitionsAccessViewPage(res.data[0].__signedIdentifier));
    }
  };
};
