import { type FC } from 'react';
import type { BundleContext } from '@pandino/pandino-api';
import { useTranslation } from 'react-i18next';
import { CUSTOM_VISUAL_ELEMENT_INTERFACE_KEY, type GenericProxyProps, type TableProxyProps, type LinkProxyProps } from '~/custom';
import { useViewData } from '~/hooks';
import { useJudoNavigation } from '~/components';
import {
  SERVICE_YES_NO_VOTE_DEFINITION_YES_NO_VOTE_DEFINITION_VIEW_EDIT_USER_VOTE_ENTRY_GROUP_COMPONENT,
} from '~/containers/Service/YesNoVoteDefinition/YesNoVoteDefinition_View_Edit/customization';
import { ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditActionDefinitions } from '~/containers/Service/YesNoVoteDefinition/YesNoVoteDefinition_View_Edit/types';
import type { ServiceIssue, ServiceIssueStored } from '~/services/data-api/model/ServiceIssue';
import type { ServiceServiceUser, ServiceServiceUserStored } from '~/services/data-api/model/ServiceServiceUser';
import type { ServiceYesNoVoteDefinition, ServiceYesNoVoteDefinitionStored } from '~/services/data-api/model/ServiceYesNoVoteDefinition';
import type { ServiceYesNoVoteEntry, ServiceYesNoVoteEntryStored } from '~/services/data-api/model/ServiceYesNoVoteEntry';
import VoteResultsCard, { VoteActionParameterType } from '~/custom/components/VoteResultCard';

/**
 * XMIID: User/(esm/_dZi8oFscEe6Mx9dH3yj5gQ)/GroupVisualElement
 * Name: userVoteEntryGroup
 *
 * Notes:
 * Don't forget to remove unused hooks, and related imports afterwards to reduce build time and bundle size!
 */
export function registerServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditUserVoteEntryGroupComponentCustomImplementation(context: BundleContext) {
  context.registerService<FC<GenericProxyProps<ServiceYesNoVoteDefinitionStored, ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditActionDefinitions>>>(CUSTOM_VISUAL_ELEMENT_INTERFACE_KEY, serviceYesNoVoteDefinitionYesNoVoteDefinition_View_EditUserVoteEntryGroupComponentCustomImplementation, {
    component: SERVICE_YES_NO_VOTE_DEFINITION_YES_NO_VOTE_DEFINITION_VIEW_EDIT_USER_VOTE_ENTRY_GROUP_COMPONENT,
  });
}

const serviceYesNoVoteDefinitionYesNoVoteDefinition_View_EditUserVoteEntryGroupComponentCustomImplementation: FC<GenericProxyProps<ServiceYesNoVoteDefinitionStored, ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditActionDefinitions>> = (props) => {
  const { data, validation, editMode, storeDiff, isLoading, actions } = props;

  // call other hooks here
  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { getLatestViewData } = useViewData();

  async function vote(data: VoteActionParameterType) {
    await actions.voteAction!();
  }
  async function revoke(data: VoteActionParameterType) {
    await actions.takeBackVoteForYesNoVoteDefinitionAction!(data as ServiceYesNoVoteDefinitionStored);
  }
  
  return (
    <VoteResultsCard
        answers={[
          {
            label: t('enumerations.YesNoVoteValue.YES', {
              defaultValue: 'Igen',
            }) as string,
            count: data.numberOfYesVotes || 0,
          },
          {
            label: t('enumerations.YesNoVoteValue.NO', {
              defaultValue: 'Nem',
            }) as string,
            count: data.numberOfNoVotes || 0,
          },
        ]}
        maxItems={8}
        voteDefinition={data}
        vote={vote}
        revoke={revoke}
        voteValue={
          data.currentUserVoteValue
            ? (t('enumerations.YesNoVoteValue.' + data.currentUserVoteValue, {
                defaultValue: data.currentUserVoteValue,
              }) as string)
            : undefined
        }
    />
  );
};

