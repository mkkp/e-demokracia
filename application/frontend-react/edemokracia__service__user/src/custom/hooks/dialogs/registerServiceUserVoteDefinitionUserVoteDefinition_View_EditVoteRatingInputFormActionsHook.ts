import type { BundleContext } from '@pandino/pandino-api';
import {
  type RatingVoteInputRatingVoteInput_FormActionsHook,
  SERVICE_USER_VOTE_DEFINITION_USER_VOTE_DEFINITION_VIEW_EDIT_VOTE_RATING_INPUT_FORM_ACTIONS_HOOK_INTERFACE_KEY,
} from '~/dialogs/Service/UserVoteDefinition/UserVoteDefinition_View_Edit/VoteRating/Input/Form/customization';
import type { RatingVoteInput } from '~/services/data-api/model/RatingVoteInput';
import { ServiceVoteDefinitionStored } from '~/services/data-api/model/ServiceVoteDefinition';

/**
 * XMIID: User/(esm/_tJpVgQahEfC37oc_cfa43g)/OperationUnmappedInputPageDefinition
 * Name: service::UserVoteDefinition::UserVoteDefinition_View_Edit::voteRating::Input::Form
 *
 * Notes:
 * Don't forget to remove unused hooks, and related imports afterwards to reduce build time and bundle size!
 */
export function registerServiceUserVoteDefinitionUserVoteDefinition_View_EditVoteRatingInputFormActionsHook(
  context: BundleContext,
) {
  context.registerService<RatingVoteInputRatingVoteInput_FormActionsHook>(
    SERVICE_USER_VOTE_DEFINITION_USER_VOTE_DEFINITION_VIEW_EDIT_VOTE_RATING_INPUT_FORM_ACTIONS_HOOK_INTERFACE_KEY,
    ServiceUserVoteDefinitionUserVoteDefinition_View_EditVoteRatingInputFormActionsHook,
  );
}

const ServiceUserVoteDefinitionUserVoteDefinition_View_EditVoteRatingInputFormActionsHook: RatingVoteInputRatingVoteInput_FormActionsHook =
  (ownerData, data, editMode, storeDiff, submit, onSubmit) => {
    return {
      postGetTemplateAction: async (
        ownerData: ServiceVoteDefinitionStored,
        data: RatingVoteInput,
        storeDiff: (attributeName: keyof RatingVoteInput, value: any) => void,
      ) => {
        storeDiff('minRateValue', ownerData.minRateValue);
        storeDiff('maxRateValue', ownerData.maxRateValue);
        storeDiff('rateStep', ownerData.rateStep);
      },
    };
  };
