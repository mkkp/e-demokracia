import type { BundleContext } from '@pandino/pandino-api';
import { useMemo } from 'react';

import { useJudoNavigation } from '~/components';
import { processQueryCustomizer } from '~/utilities';

import {
  CloseDebateOutputVoteDefinitionReference,
  CloseDebateOutputVoteDefinitionReferenceStored,
} from '~/services/data-api';

import {
  CloseDebateInputCloseDebateInput_FormActionsHook,
  SERVICE_ISSUE_ISSUE_VIEW_EDIT_CLOSE_DEBATE_INPUT_FORM_ACTIONS_HOOK_INTERFACE_KEY,
} from '~/dialogs/Service/Issue/Issue_View_Edit/CloseDebate/Input/Form';

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

export function registerCloseDebateInputCloseDebateInput_FormActionsHook(context: BundleContext) {
  context.registerService<CloseDebateInputCloseDebateInput_FormActionsHook>(
    SERVICE_ISSUE_ISSUE_VIEW_EDIT_CLOSE_DEBATE_INPUT_FORM_ACTIONS_HOOK_INTERFACE_KEY,
    customCloseDebateInputCloseDebateInput_FormActionsHook,
  );
}

const customCloseDebateInputCloseDebateInput_FormActionsHook: CloseDebateInputCloseDebateInput_FormActionsHook = () => {
  const { navigate } = useJudoNavigation();
  const userServiceForYesNoVoteDefinitionsImpl = useMemo(
    () => new UserServiceForYesNoVoteDefinitionsImpl(judoAxiosProvider),
    [],
  );
  const userServiceForYesNoAbstainVoteDefinitionsImpl = useMemo(
    () => new UserServiceForYesNoAbstainVoteDefinitionsImpl(judoAxiosProvider),
    [],
  );
  const userServiceForRatingVoteDefinitionsImpl = useMemo(
    () => new UserServiceForRatingVoteDefinitionsImpl(judoAxiosProvider),
    [],
  );
  const userServiceForSelectAnswerVoteDefinitionsImpl = useMemo(
    () => new UserServiceForSelectAnswerVoteDefinitionsImpl(judoAxiosProvider),
    [],
  );

  return {
    postCloseDebateForIssueAction: async (
      output: CloseDebateOutputVoteDefinitionReference,
      onSubmit: (result?: CloseDebateOutputVoteDefinitionReferenceStored) => Promise<void>,
      onClose: () => Promise<void>,
    ) => {
      // 1. Retrieve result identifier
      // TODO: Use output as stored type
      const id = (output as any)!.__identifier;
      const signedId = (output as any)!.__signedIdentifier;
      const entityType = (output as any)!.__entityType;

      // 2. Retrieve signedIdentifier from access
      const idAccessFilterCustomizer: any = {
        _identifier: id,
      };

      await onClose();

      // 3. Open view page in access
      if (entityType === 'edemokracia.YesNoVoteDefinition') {
        // Retrieve signedIdentifier from access
        const res = await userServiceForYesNoVoteDefinitionsImpl.list(processQueryCustomizer(idAccessFilterCustomizer));
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
        const res = await userServiceForRatingVoteDefinitionsImpl.list(
          processQueryCustomizer(idAccessFilterCustomizer),
        );
        // Open view page in access
        navigate(routeToServiceUserRatingVoteDefinitionsAccessViewPage(res.data[0].__signedIdentifier));
      } else if (entityType === 'edemokracia.SelectAnswerVoteDefinition') {
        // Retrieve signedIdentifier from access
        const res = await userServiceForSelectAnswerVoteDefinitionsImpl.list(
          processQueryCustomizer(idAccessFilterCustomizer),
        );
        // Open view page in access
        navigate(routeToServiceUserSelectAnswerVoteDefinitionsAccessViewPage(res.data[0].__signedIdentifier));
      } else {
        navigate(routeToServiceUserAdminVoteDefinitionsAccessViewPage(signedId));
      }
    },
  };
};
