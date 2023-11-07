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
  ServiceYesNoVoteDefinition,
  ServiceYesNoVoteDefinitionStored,
  ServiceYesNoVoteEntry,
  ServiceYesNoVoteEntryQueryCustomizer,
  ServiceYesNoVoteEntryStored,
} from '~/services/data-api';
export interface ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditUserVoteEntryComponentActionDefinitions {
  serviceYesNoVoteDefinitionYesNoVoteDefinition_View_EditUserVoteEntryGroupUserVoteVirtualForUserVoteUserVoteEntryCreate?: () => Promise<void>;
  serviceYesNoVoteDefinitionYesNoVoteDefinition_View_EditUserVoteEntryGroupUserVoteVirtualForUserVoteUserVoteEntryDelete?: (
    target: ServiceYesNoVoteEntryStored,
  ) => Promise<void>;
  serviceYesNoVoteDefinitionYesNoVoteDefinition_View_EditUserVoteEntryGroupUserVoteVirtualForUserVoteUserVoteEntrySetOpenSelector?: () => Promise<void>;
  serviceYesNoVoteDefinitionYesNoVoteDefinition_View_EditUserVoteEntryGroupUserVoteVirtualForUserVoteUserVoteEntryUnset?: (
    target: ServiceYesNoVoteEntryStored,
  ) => Promise<void>;
  serviceYesNoVoteDefinitionYesNoVoteDefinition_View_EditUserVoteEntryGroupUserVoteVirtualForUserVoteUserVoteEntryView?: (
    target: ServiceYesNoVoteEntryStored,
  ) => Promise<void>;
  serviceYesNoVoteDefinitionYesNoVoteDefinition_View_EditUserVoteEntryGroupUserVoteVirtualForUserVoteUserVoteEntryAutocomplete?: (
    queryCustomizer: ServiceYesNoVoteEntryQueryCustomizer,
  ) => Promise<Array<ServiceYesNoVoteEntryStored>>;
}

export interface ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditUserVoteEntryComponentProps {
  ownerData: ServiceYesNoVoteDefinition | ServiceYesNoVoteDefinitionStored;
  actions: ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditUserVoteEntryComponentActionDefinitions;
  storeDiff: (attributeName: keyof ServiceYesNoVoteDefinition, value: any) => void;
  validationError?: string;
  disabled?: boolean;
  editMode?: boolean;
}

// XMIID: User/(esm/_h4NScFouEe6_67aMO2jOsw)/TabularReferenceFieldRelationDefinedLink
// Name: userVoteEntry
export function ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditUserVoteEntryComponent(
  props: ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditUserVoteEntryComponentProps,
) {
  const { ownerData, actions, storeDiff, validationError, disabled, editMode } = props;
  const { t } = useTranslation();

  return (
    <AggregationInput
      name="userVoteEntry"
      id="User/(esm/_h4NScFouEe6_67aMO2jOsw)/TabularReferenceFieldRelationDefinedLink"
      label={
        t(
          'service.YesNoVoteDefinition.YesNoVoteDefinition.View.Edit.userVoteEntry.VirtualForUserVote.userVote.userVoteEntryGroup.userVoteEntryGroup::LabelWrapper.YesNoVoteDefinition_View_Edit.service::YesNoVoteDefinition::YesNoVoteDefinition_View_Edit',
          { defaultValue: 'Value' },
        ) as string
      }
      labelList={[ownerData.userVoteEntry?.value?.toString() ?? '', ownerData.userVoteEntry?.created?.toString() ?? '']}
      ownerData={ownerData}
      error={!!validationError}
      helperText={validationError}
      icon={<MdiIcon path="vote" />}
      disabled={disabled}
      editMode={editMode}
      autoCompleteAttribute={'value'}
      onAutoCompleteSelect={(userVoteEntry) => {
        storeDiff('userVoteEntry', userVoteEntry);
      }}
      onView={
        ownerData.userVoteEntry &&
        actions.serviceYesNoVoteDefinitionYesNoVoteDefinition_View_EditUserVoteEntryGroupUserVoteVirtualForUserVoteUserVoteEntryView
          ? async () => {
              await actions.serviceYesNoVoteDefinitionYesNoVoteDefinition_View_EditUserVoteEntryGroupUserVoteVirtualForUserVoteUserVoteEntryView!(
                ownerData.userVoteEntry!,
              );
            }
          : undefined
      }
      onCreate={
        actions.serviceYesNoVoteDefinitionYesNoVoteDefinition_View_EditUserVoteEntryGroupUserVoteVirtualForUserVoteUserVoteEntryCreate
          ? async () => {
              await actions.serviceYesNoVoteDefinitionYesNoVoteDefinition_View_EditUserVoteEntryGroupUserVoteVirtualForUserVoteUserVoteEntryCreate!();
            }
          : undefined
      }
      onDelete={
        ownerData.userVoteEntry &&
        actions.serviceYesNoVoteDefinitionYesNoVoteDefinition_View_EditUserVoteEntryGroupUserVoteVirtualForUserVoteUserVoteEntryDelete
          ? async () =>
              actions.serviceYesNoVoteDefinitionYesNoVoteDefinition_View_EditUserVoteEntryGroupUserVoteVirtualForUserVoteUserVoteEntryDelete!(
                ownerData.userVoteEntry!,
              )
          : undefined
      }
      onSet={
        actions.serviceYesNoVoteDefinitionYesNoVoteDefinition_View_EditUserVoteEntryGroupUserVoteVirtualForUserVoteUserVoteEntrySetOpenSelector
          ? async () => {
              await actions.serviceYesNoVoteDefinitionYesNoVoteDefinition_View_EditUserVoteEntryGroupUserVoteVirtualForUserVoteUserVoteEntrySetOpenSelector!();
            }
          : undefined
      }
      onUnset={
        ownerData.userVoteEntry &&
        actions.serviceYesNoVoteDefinitionYesNoVoteDefinition_View_EditUserVoteEntryGroupUserVoteVirtualForUserVoteUserVoteEntryUnset
          ? async () =>
              actions.serviceYesNoVoteDefinitionYesNoVoteDefinition_View_EditUserVoteEntryGroupUserVoteVirtualForUserVoteUserVoteEntryUnset!(
                ownerData.userVoteEntry!,
              )
          : undefined
      }
    ></AggregationInput>
  );
}
