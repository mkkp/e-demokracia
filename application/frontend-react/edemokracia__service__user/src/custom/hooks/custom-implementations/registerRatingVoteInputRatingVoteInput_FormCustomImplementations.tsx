import Slider from '@mui/material/Slider';
import { Box } from '@mui/system';
import type { BundleContext } from '@pandino/pandino-api';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useJudoNavigation } from '~/components';
import { RATING_VOTE_INPUT_RATING_VOTE_INPUT_FORM_VALUE_COMPONENT } from '~/containers/RatingVoteInput/RatingVoteInput_Form/customization';
import { RatingVoteInputRatingVoteInput_FormActionDefinitions } from '~/containers/RatingVoteInput/RatingVoteInput_Form/types';
import { CUSTOM_VISUAL_ELEMENT_INTERFACE_KEY, type GenericProxyProps } from '~/custom';
import { useViewData } from '~/hooks';
import type { RatingVoteInputStored } from '~/services/data-api/model/RatingVoteInput';

/**
 * XMIID: User/(esm/_UNECcOSNEe20cv3f2msZXg)/NumericTypeVisualInput
 * Name: value
 *
 * Notes:
 * Don't forget to remove unused hooks, and related imports afterwards to reduce build time and bundle size!
 */
export function registerRatingVoteInputRatingVoteInput_FormValueComponentCustomImplementation(context: BundleContext) {
  context.registerService<
    FC<GenericProxyProps<RatingVoteInputStored, RatingVoteInputRatingVoteInput_FormActionDefinitions>>
  >(CUSTOM_VISUAL_ELEMENT_INTERFACE_KEY, ratingVoteInputRatingVoteInput_FormValueComponentCustomImplementation, {
    component: RATING_VOTE_INPUT_RATING_VOTE_INPUT_FORM_VALUE_COMPONENT,
  });
}

const ratingVoteInputRatingVoteInput_FormValueComponentCustomImplementation: FC<
  GenericProxyProps<RatingVoteInputStored, RatingVoteInputRatingVoteInput_FormActionDefinitions>
> = (props) => {
  const { data, validation, editMode, storeDiff, isLoading, actions } = props;

  // call other hooks here
  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { getLatestViewData } = useViewData();

  function handleChange(event: Event, value: number | number[], activeThumb: number) {
    storeDiff('value', value);
  }

  return (
    <Box sx={{ height: '60px' }}>
      <Box sx={{ height: '20px' }} />

      <Slider
        aria-label="Érték"
        defaultValue={data.minRateValue ?? 0}
        valueLabelDisplay="auto"
        shiftStep={data.rateStep ?? 1}
        step={data.rateStep ?? 1}
        marks
        min={data.minRateValue ?? 0}
        max={data.maxRateValue ?? 0}
        onChange={handleChange}
      />
    </Box>
  );
};
