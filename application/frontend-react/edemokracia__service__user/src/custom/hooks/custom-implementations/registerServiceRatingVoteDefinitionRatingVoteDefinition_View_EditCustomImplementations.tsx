import { Button, Card, CardContent, Chip, Typography, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import type { BundleContext } from '@pandino/pandino-api';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { MdiIcon, useJudoNavigation } from '~/components';
import { SERVICE_RATING_VOTE_DEFINITION_RATING_VOTE_DEFINITION_VIEW_EDIT_USER_VOTE_ENTRY_GROUP_COMPONENT } from '~/containers/Service/RatingVoteDefinition/RatingVoteDefinition_View_Edit/customization';
import { ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditActionDefinitions } from '~/containers/Service/RatingVoteDefinition/RatingVoteDefinition_View_Edit/types';
import { CUSTOM_VISUAL_ELEMENT_INTERFACE_KEY, type GenericProxyProps } from '~/custom';
import { RatingVoteResultCard } from '~/custom/components/RatingVoteResultCard';
import { VoteActionParameterType } from '~/custom/components/VoteResultCard';
import { useViewData } from '~/hooks';
import type { ServiceRatingVoteDefinitionStored } from '~/services/data-api/model/ServiceRatingVoteDefinition';

/**
 * XMIID: User/(esm/_NHnv0FsoEe6Mx9dH3yj5gQ)/GroupVisualElement
 * Name: userVoteEntryGroup
 *
 * Notes:
 * Don't forget to remove unused hooks, and related imports afterwards to reduce build time and bundle size!
 */
export function registerServiceRatingVoteDefinitionRatingVoteDefinition_View_EditUserVoteEntryGroupComponentCustomImplementation(
  context: BundleContext,
) {
  context.registerService<
    FC<
      GenericProxyProps<
        ServiceRatingVoteDefinitionStored,
        ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditActionDefinitions
      >
    >
  >(
    CUSTOM_VISUAL_ELEMENT_INTERFACE_KEY,
    serviceRatingVoteDefinitionRatingVoteDefinition_View_EditUserVoteEntryGroupComponentCustomImplementation,
    {
      component: SERVICE_RATING_VOTE_DEFINITION_RATING_VOTE_DEFINITION_VIEW_EDIT_USER_VOTE_ENTRY_GROUP_COMPONENT,
    },
  );
}

const serviceRatingVoteDefinitionRatingVoteDefinition_View_EditUserVoteEntryGroupComponentCustomImplementation: FC<
  GenericProxyProps<
    ServiceRatingVoteDefinitionStored,
    ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditActionDefinitions
  >
> = (props) => {
  const { data, validation, editMode, storeDiff, isLoading, actions } = props;

  // call other hooks here
  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { getLatestViewData } = useViewData();
  const theme = useTheme();

  const chipColor = theme.palette.primary.light;

  async function vote(data: VoteActionParameterType) {
    await actions.voteAction!();
  }

  async function revoke(data: VoteActionParameterType) {
    await actions.takeBackVoteForRatingVoteDefinitionAction!(data as ServiceRatingVoteDefinitionStored);
  }

  return (
        <RatingVoteResultCard
          voteDefinition={data}
          vote={vote}
          revoke={revoke}
          sumOfRating={data.sumOfRating ?? 0}
          userValue={data.currentUserVoteValue}
          numberOfVotes={data.numberOfVotes ?? 0}    
        />
  );
};
