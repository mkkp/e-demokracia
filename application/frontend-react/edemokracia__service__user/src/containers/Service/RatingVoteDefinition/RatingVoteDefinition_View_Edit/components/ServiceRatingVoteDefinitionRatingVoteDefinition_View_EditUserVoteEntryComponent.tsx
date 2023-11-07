//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getLinksForPageContainers(#application)
// Path expression: 'src/containers/'+#containerPath(#self.pageContainer)+'/components/'+#linkComponentName(#self)+'.tsx'
// Template name: actor/src/containers/components/link.tsx
// Template file: actor/src/containers/components/link.tsx.hbs

import { useTranslation } from 'react-i18next';
import { IconButton } from '@mui/material';
import { processQueryCustomizer } from '~/utilities';
import { MdiIcon } from '~/components';
import {
  AggregationInput,
  AssociationButton,
  BinaryInput,
  CollectionAssociationButton,
  TrinaryLogicCombobox,
} from '~/components/widgets';
import { StringOperation } from '~/services/data-api';
import type {
  ServiceRatingVoteDefinition,
  ServiceRatingVoteDefinitionStored,
  ServiceRatingVoteEntry,
  ServiceRatingVoteEntryQueryCustomizer,
  ServiceRatingVoteEntryStored,
} from '~/services/data-api';
export interface ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditUserVoteEntryComponentActionDefinitions {
  serviceRatingVoteDefinitionRatingVoteDefinition_View_EditUserVoteEntryGroupUserVoteVirtualForUserVoteUserVoteEntryCreate?: () => Promise<void>;
  serviceRatingVoteDefinitionRatingVoteDefinition_View_EditUserVoteEntryGroupUserVoteVirtualForUserVoteUserVoteEntryDelete?: (
    target: ServiceRatingVoteEntryStored,
  ) => Promise<void>;
  serviceRatingVoteDefinitionRatingVoteDefinition_View_EditUserVoteEntryGroupUserVoteVirtualForUserVoteUserVoteEntrySetOpenSelector?: () => Promise<void>;
  serviceRatingVoteDefinitionRatingVoteDefinition_View_EditUserVoteEntryGroupUserVoteVirtualForUserVoteUserVoteEntryUnset?: (
    target: ServiceRatingVoteEntryStored,
  ) => Promise<void>;
  serviceRatingVoteDefinitionRatingVoteDefinition_View_EditUserVoteEntryGroupUserVoteVirtualForUserVoteUserVoteEntryView?: (
    target: ServiceRatingVoteEntryStored,
  ) => Promise<void>;
  serviceRatingVoteDefinitionRatingVoteDefinition_View_EditUserVoteEntryGroupUserVoteVirtualForUserVoteUserVoteEntryAutocomplete?: (
    queryCustomizer: ServiceRatingVoteEntryQueryCustomizer,
  ) => Promise<Array<ServiceRatingVoteEntryStored>>;
}

export interface ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditUserVoteEntryComponentProps {
  ownerData: ServiceRatingVoteDefinition | ServiceRatingVoteDefinitionStored;
  actions: ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditUserVoteEntryComponentActionDefinitions;
  storeDiff: (attributeName: keyof ServiceRatingVoteDefinition, value: any) => void;
  validationError?: string;
  disabled?: boolean;
  editMode?: boolean;
}

// XMIID: User/(esm/_NHnv1FsoEe6Mx9dH3yj5gQ)/TabularReferenceFieldRelationDefinedLink
// Name: userVoteEntry
export function ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditUserVoteEntryComponent(
  props: ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditUserVoteEntryComponentProps,
) {
  const { ownerData, actions, storeDiff, validationError, disabled, editMode } = props;
  const { t } = useTranslation();

  return (
    <AggregationInput
      name="userVoteEntry"
      id="User/(esm/_NHnv1FsoEe6Mx9dH3yj5gQ)/TabularReferenceFieldRelationDefinedLink"
      label={
        t(
          'service.RatingVoteDefinition.RatingVoteDefinition.View.Edit.userVoteEntry.VirtualForUserVote.userVote.userVoteEntryGroup.userVoteEntryGroup::LabelWrapper.RatingVoteDefinition_View_Edit.service::RatingVoteDefinition::RatingVoteDefinition_View_Edit',
          { defaultValue: 'Value' },
        ) as string
      }
      labelList={[ownerData.userVoteEntry?.created?.toString() ?? '', ownerData.userVoteEntry?.value?.toString() ?? '']}
      ownerData={ownerData}
      error={!!validationError}
      helperText={validationError}
      icon={<MdiIcon path="vote" />}
      disabled={disabled}
      editMode={editMode}
      autoCompleteAttribute={'created'}
      onAutoCompleteSelect={(userVoteEntry) => {
        storeDiff('userVoteEntry', userVoteEntry);
      }}
      onView={
        ownerData.userVoteEntry &&
        actions.serviceRatingVoteDefinitionRatingVoteDefinition_View_EditUserVoteEntryGroupUserVoteVirtualForUserVoteUserVoteEntryView
          ? async () => {
              await actions.serviceRatingVoteDefinitionRatingVoteDefinition_View_EditUserVoteEntryGroupUserVoteVirtualForUserVoteUserVoteEntryView!(
                ownerData.userVoteEntry!,
              );
            }
          : undefined
      }
      onCreate={
        actions.serviceRatingVoteDefinitionRatingVoteDefinition_View_EditUserVoteEntryGroupUserVoteVirtualForUserVoteUserVoteEntryCreate
          ? async () => {
              await actions.serviceRatingVoteDefinitionRatingVoteDefinition_View_EditUserVoteEntryGroupUserVoteVirtualForUserVoteUserVoteEntryCreate!();
            }
          : undefined
      }
      onDelete={
        ownerData.userVoteEntry &&
        actions.serviceRatingVoteDefinitionRatingVoteDefinition_View_EditUserVoteEntryGroupUserVoteVirtualForUserVoteUserVoteEntryDelete
          ? async () =>
              actions.serviceRatingVoteDefinitionRatingVoteDefinition_View_EditUserVoteEntryGroupUserVoteVirtualForUserVoteUserVoteEntryDelete!(
                ownerData.userVoteEntry!,
              )
          : undefined
      }
      onSet={
        actions.serviceRatingVoteDefinitionRatingVoteDefinition_View_EditUserVoteEntryGroupUserVoteVirtualForUserVoteUserVoteEntrySetOpenSelector
          ? async () => {
              await actions.serviceRatingVoteDefinitionRatingVoteDefinition_View_EditUserVoteEntryGroupUserVoteVirtualForUserVoteUserVoteEntrySetOpenSelector!();
            }
          : undefined
      }
      onUnset={
        ownerData.userVoteEntry &&
        actions.serviceRatingVoteDefinitionRatingVoteDefinition_View_EditUserVoteEntryGroupUserVoteVirtualForUserVoteUserVoteEntryUnset
          ? async () =>
              actions.serviceRatingVoteDefinitionRatingVoteDefinition_View_EditUserVoteEntryGroupUserVoteVirtualForUserVoteUserVoteEntryUnset!(
                ownerData.userVoteEntry!,
              )
          : undefined
      }
    ></AggregationInput>
  );
}
