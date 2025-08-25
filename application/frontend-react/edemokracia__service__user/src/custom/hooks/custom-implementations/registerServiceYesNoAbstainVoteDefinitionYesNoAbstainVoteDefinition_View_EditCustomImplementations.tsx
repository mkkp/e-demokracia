import type { BundleContext } from '@pandino/pandino-api';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useJudoNavigation } from '~/components';
import { SERVICE_YES_NO_ABSTAIN_VOTE_DEFINITION_YES_NO_ABSTAIN_VOTE_DEFINITION_VIEW_EDIT_USER_VOTE_ENTRY_GROUP_COMPONENT } from '~/containers/Service/YesNoAbstainVoteDefinition/YesNoAbstainVoteDefinition_View_Edit/customization';
import { ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditActionDefinitions } from '~/containers/Service/YesNoAbstainVoteDefinition/YesNoAbstainVoteDefinition_View_Edit/types';
import {
  CUSTOM_VISUAL_ELEMENT_INTERFACE_KEY,
  type GenericProxyProps,
  type LinkProxyProps,
  type TableProxyProps,
} from '~/custom';
import VoteResultsCard, { VoteActionParameterType } from '~/custom/components/VoteResultCard';
import { useViewData } from '~/hooks';
import type { ServiceIssue, ServiceIssueStored } from '~/services/data-api/model/ServiceIssue';
import type { ServiceServiceUser, ServiceServiceUserStored } from '~/services/data-api/model/ServiceServiceUser';
import type {
  ServiceYesNoAbstainVoteDefinition,
  ServiceYesNoAbstainVoteDefinitionStored,
} from '~/services/data-api/model/ServiceYesNoAbstainVoteDefinition';
import type {
  ServiceYesNoAbstainVoteEntry,
  ServiceYesNoAbstainVoteEntryStored,
} from '~/services/data-api/model/ServiceYesNoAbstainVoteEntry';

/**
 * XMIID: User/(esm/_7M-INFsnEe6Mx9dH3yj5gQ)/GroupVisualElement
 * Name: userVoteEntryGroup
 *
 * Notes:
 * Don't forget to remove unused hooks, and related imports afterwards to reduce build time and bundle size!
 */
export function registerServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditUserVoteEntryGroupComponentCustomImplementation(
  context: BundleContext,
) {
  context.registerService<
    FC<
      GenericProxyProps<
        ServiceYesNoAbstainVoteDefinitionStored,
        ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditActionDefinitions
      >
    >
  >(
    CUSTOM_VISUAL_ELEMENT_INTERFACE_KEY,
    serviceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditUserVoteEntryGroupComponentCustomImplementation,
    {
      component:
        SERVICE_YES_NO_ABSTAIN_VOTE_DEFINITION_YES_NO_ABSTAIN_VOTE_DEFINITION_VIEW_EDIT_USER_VOTE_ENTRY_GROUP_COMPONENT,
    },
  );
}

const serviceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditUserVoteEntryGroupComponentCustomImplementation: FC<
  GenericProxyProps<
    ServiceYesNoAbstainVoteDefinitionStored,
    ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditActionDefinitions
  >
> = (props) => {
  const { data, validation, editMode, storeDiff, isLoading, actions } = props;

  // call other hooks here
  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { getLatestViewData } = useViewData();

  async function vote(data: VoteActionParameterType) {
    await actions.voteAction!();
  }
  async function revoke(data: VoteActionParameterType) {
    await actions.takeBackVoteForYesNoAbstainVoteDefinitionAction!(data as ServiceYesNoAbstainVoteDefinitionStored);
  }

  return (
    <VoteResultsCard
      answers={[
        {
          label: t('enumerations.YesNoAbstainVoteValue.YES', {
            defaultValue: 'Igen',
          }) as string,
          count: data.numberOfYesVotes || 0,
        },
        {
          label: t('enumerations.YesNoAbstainVoteValue.NO', {
            defaultValue: 'Nem',
          }) as string,
          count: data.numberOfNoVotes || 0,
        },
        {
          label: t('enumerations.YesNoAbstainVoteValue.ABSTAIN', {
            defaultValue: 'Tartózkodás',
          }) as string,
          count: data.numberOfAbstainVotes || 0,
        },
      ]}
      maxItems={8}
      voteDefinition={data}
      vote={vote}
      revoke={revoke}
      voteValue={
        data.currentUserVoteValue
          ? (t('enumerations.YesNoAbstainVoteValue.' + data.currentUserVoteValue, {
              defaultValue: data.currentUserVoteValue,
            }) as string)
          : undefined
      }
    />
  );
};
