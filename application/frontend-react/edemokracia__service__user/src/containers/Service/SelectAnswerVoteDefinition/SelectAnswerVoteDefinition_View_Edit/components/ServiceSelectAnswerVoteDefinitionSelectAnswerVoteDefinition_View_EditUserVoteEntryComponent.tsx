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
  ServiceSelectAnswerVoteDefinition,
  ServiceSelectAnswerVoteDefinitionStored,
  ServiceSelectAnswerVoteEntry,
  ServiceSelectAnswerVoteEntryQueryCustomizer,
  ServiceSelectAnswerVoteEntryStored,
} from '~/services/data-api';
export interface ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryComponentActionDefinitions {
  serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupUserVoteVirtualForUserVoteUserVoteEntryCreate?: () => Promise<void>;
  serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupUserVoteVirtualForUserVoteUserVoteEntryDelete?: (
    target: ServiceSelectAnswerVoteEntryStored,
  ) => Promise<void>;
  serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupUserVoteVirtualForUserVoteUserVoteEntrySetOpenSelector?: () => Promise<void>;
  serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupUserVoteVirtualForUserVoteUserVoteEntryUnset?: (
    target: ServiceSelectAnswerVoteEntryStored,
  ) => Promise<void>;
  serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupUserVoteVirtualForUserVoteUserVoteEntryView?: (
    target: ServiceSelectAnswerVoteEntryStored,
  ) => Promise<void>;
  serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupUserVoteVirtualForUserVoteUserVoteEntryAutocomplete?: (
    queryCustomizer: ServiceSelectAnswerVoteEntryQueryCustomizer,
  ) => Promise<Array<ServiceSelectAnswerVoteEntryStored>>;
}

export interface ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryComponentProps {
  ownerData: ServiceSelectAnswerVoteDefinition | ServiceSelectAnswerVoteDefinitionStored;
  actions: ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryComponentActionDefinitions;
  storeDiff: (attributeName: keyof ServiceSelectAnswerVoteDefinition, value: any) => void;
  validationError?: string;
  disabled?: boolean;
  editMode?: boolean;
}

// XMIID: User/(esm/_0SJy1FtuEe6Mx9dH3yj5gQ)/TabularReferenceFieldRelationDefinedLink
// Name: userVoteEntry
export function ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryComponent(
  props: ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryComponentProps,
) {
  const { ownerData, actions, storeDiff, validationError, disabled, editMode } = props;
  const { t } = useTranslation();

  return (
    <AggregationInput
      name="userVoteEntry"
      id="User/(esm/_0SJy1FtuEe6Mx9dH3yj5gQ)/TabularReferenceFieldRelationDefinedLink"
      label={
        t(
          'service.SelectAnswerVoteDefinition.SelectAnswerVoteDefinition.View.Edit.userVoteEntry.VirtualForUserVote.userVote.userVoteEntryGroup.userVoteEntryGroup::LabelWrapper.SelectAnswerVoteDefinition_View_Edit.service::SelectAnswerVoteDefinition::SelectAnswerVoteDefinition_View_Edit',
          { defaultValue: 'Value' },
        ) as string
      }
      labelList={[
        ownerData.userVoteEntry?.valueRepresentation?.toString() ?? '',
        ownerData.userVoteEntry?.created?.toString() ?? '',
      ]}
      ownerData={ownerData}
      error={!!validationError}
      helperText={validationError}
      icon={<MdiIcon path="vote" />}
      disabled={disabled}
      editMode={editMode}
      autoCompleteAttribute={'valueRepresentation'}
      onAutoCompleteSelect={(userVoteEntry) => {
        storeDiff('userVoteEntry', userVoteEntry);
      }}
      onAutoCompleteSearch={
        actions.serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupUserVoteVirtualForUserVoteUserVoteEntryAutocomplete
          ? async (searchText: string) => {
              const queryCustomizer: ServiceSelectAnswerVoteEntryQueryCustomizer = {
                ...(searchText?.length
                  ? {
                      valueRepresentation: [{ operator: StringOperation.like, value: searchText }],
                    }
                  : {}),
                _mask: '{valueRepresentation}',
                _orderBy: [{ attribute: 'valueRepresentation', descending: false }],
                _seek: { limit: 10 },
              };
              return await actions.serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupUserVoteVirtualForUserVoteUserVoteEntryAutocomplete!(
                processQueryCustomizer(queryCustomizer),
              );
            }
          : undefined
      }
      onView={
        ownerData.userVoteEntry &&
        actions.serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupUserVoteVirtualForUserVoteUserVoteEntryView
          ? async () => {
              await actions.serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupUserVoteVirtualForUserVoteUserVoteEntryView!(
                ownerData.userVoteEntry!,
              );
            }
          : undefined
      }
      onCreate={
        actions.serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupUserVoteVirtualForUserVoteUserVoteEntryCreate
          ? async () => {
              await actions.serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupUserVoteVirtualForUserVoteUserVoteEntryCreate!();
            }
          : undefined
      }
      onDelete={
        ownerData.userVoteEntry &&
        actions.serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupUserVoteVirtualForUserVoteUserVoteEntryDelete
          ? async () =>
              actions.serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupUserVoteVirtualForUserVoteUserVoteEntryDelete!(
                ownerData.userVoteEntry!,
              )
          : undefined
      }
      onSet={
        actions.serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupUserVoteVirtualForUserVoteUserVoteEntrySetOpenSelector
          ? async () => {
              await actions.serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupUserVoteVirtualForUserVoteUserVoteEntrySetOpenSelector!();
            }
          : undefined
      }
      onUnset={
        ownerData.userVoteEntry &&
        actions.serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupUserVoteVirtualForUserVoteUserVoteEntryUnset
          ? async () =>
              actions.serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupUserVoteVirtualForUserVoteUserVoteEntryUnset!(
                ownerData.userVoteEntry!,
              )
          : undefined
      }
    ></AggregationInput>
  );
}
