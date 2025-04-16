import type { BundleContext } from '@pandino/pandino-api';
import {
  type RatingVoteInputRatingVoteInput_FormActionsHook,
  SERVICE_VOTE_DEFINITION_VOTE_DEFINITION_VIEW_EDIT_VOTE_RATING_INPUT_FORM_ACTIONS_HOOK_INTERFACE_KEY,
} from '~/dialogs/Service/VoteDefinition/VoteDefinition_View_Edit/VoteRating/Input/Form/customization';
import type { RatingVoteInput } from '~/services/data-api/model/RatingVoteInput';
import { ServiceVoteDefinitionStored } from '~/services/data-api/model/ServiceVoteDefinition';

/**
 * XMIID: User/(esm/_T5_dsI4jEe29qs15q2b6yw)/OperationUnmappedInputPageDefinition
 * Name: service::VoteDefinition::VoteDefinition_View_Edit::voteRating::Input::Form
 *
 * Notes:
 * Don't forget to remove unused hooks, and related imports afterwards to reduce build time and bundle size!
 */
export function registerServiceVoteDefinitionVoteDefinition_View_EditVoteRatingInputFormActionsHook(
  context: BundleContext,
) {
  context.registerService<RatingVoteInputRatingVoteInput_FormActionsHook>(
    SERVICE_VOTE_DEFINITION_VOTE_DEFINITION_VIEW_EDIT_VOTE_RATING_INPUT_FORM_ACTIONS_HOOK_INTERFACE_KEY,
    ServiceVoteDefinitionVoteDefinition_View_EditVoteRatingInputFormActionsHook,
  );
}

const ServiceVoteDefinitionVoteDefinition_View_EditVoteRatingInputFormActionsHook: RatingVoteInputRatingVoteInput_FormActionsHook =
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
