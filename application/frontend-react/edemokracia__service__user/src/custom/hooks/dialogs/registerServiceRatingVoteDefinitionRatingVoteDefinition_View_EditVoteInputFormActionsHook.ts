import type { BundleContext } from '@pandino/pandino-api';
import {
  type RatingVoteInputRatingVoteInput_FormActionsHook,
  SERVICE_RATING_VOTE_DEFINITION_RATING_VOTE_DEFINITION_VIEW_EDIT_VOTE_INPUT_FORM_ACTIONS_HOOK_INTERFACE_KEY,
} from '~/dialogs/Service/RatingVoteDefinition/RatingVoteDefinition_View_Edit/Vote/Input/Form/customization';
import type { RatingVoteInput } from '~/services/data-api/model/RatingVoteInput';
import { ServiceVoteDefinitionStored } from '~/services/data-api/model/ServiceVoteDefinition';

/**
 * XMIID: User/(esm/_NHnv2FsoEe6Mx9dH3yj5gQ)/OperationUnmappedInputPageDefinition
 * Name: service::RatingVoteDefinition::RatingVoteDefinition_View_Edit::vote::Input::Form
 *
 * Notes:
 * Don't forget to remove unused hooks, and related imports afterwards to reduce build time and bundle size!
 */
export function registerServiceRatingVoteDefinitionRatingVoteDefinition_View_EditVoteInputFormActionsHook(
  context: BundleContext,
) {
  context.registerService<RatingVoteInputRatingVoteInput_FormActionsHook>(
    SERVICE_RATING_VOTE_DEFINITION_RATING_VOTE_DEFINITION_VIEW_EDIT_VOTE_INPUT_FORM_ACTIONS_HOOK_INTERFACE_KEY,
    ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditVoteInputFormActionsHook,
  );
}

const ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditVoteInputFormActionsHook: RatingVoteInputRatingVoteInput_FormActionsHook =
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
