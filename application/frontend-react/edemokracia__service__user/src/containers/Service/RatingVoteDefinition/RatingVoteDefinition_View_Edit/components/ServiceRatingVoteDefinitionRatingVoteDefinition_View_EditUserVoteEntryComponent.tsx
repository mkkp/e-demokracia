//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getLinksForPageContainers(#application)
// Path expression: 'src/containers/'+#containerPath(#self.pageContainer)+'/components/'+#linkComponentName(#self)+'.tsx'
// Template name: actor/src/containers/components/link.tsx
// Template file: actor/src/containers/components/link.tsx.hbs

import { useTranslation } from 'react-i18next';
import { MdiIcon } from '~/components';
import { AggregationInput } from '~/components/widgets';
import { StringOperation } from '~/services/data-api';
import type {
  ServiceRatingVoteDefinition,
  ServiceRatingVoteDefinitionStored,
  ServiceRatingVoteEntry,
  ServiceRatingVoteEntryQueryCustomizer,
  ServiceRatingVoteEntryStored,
} from '~/services/data-api';
import { processQueryCustomizer } from '~/utilities';
export interface ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditUserVoteEntryComponentActionDefinitions {
  userVoteEntryOpenPageAction?: (target: ServiceRatingVoteEntryStored) => Promise<void>;
  userVoteEntryAutocompleteRangeAction?: (
    queryCustomizer: ServiceRatingVoteEntryQueryCustomizer,
  ) => Promise<Array<ServiceRatingVoteEntryStored>>;
  isUserVoteEntryRequired?: (
    data: ServiceRatingVoteDefinition | ServiceRatingVoteDefinitionStored,
    editMode?: boolean,
  ) => boolean;
  isUserVoteEntryDisabled?: (
    data: ServiceRatingVoteDefinition | ServiceRatingVoteDefinitionStored,
    editMode?: boolean,
    isLoading?: boolean,
  ) => boolean;
}

export interface ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditUserVoteEntryComponentProps {
  ownerData: ServiceRatingVoteDefinition | ServiceRatingVoteDefinitionStored;
  actions: ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditUserVoteEntryComponentActionDefinitions;
  storeDiff: (attributeName: keyof ServiceRatingVoteDefinition, value: any) => void;
  submit: () => Promise<void>;
  validationError?: string;
  disabled?: boolean;
  readOnly?: boolean;
  editMode?: boolean;
  isLoading?: boolean;
}

// XMIID: User/(esm/_NHnv1FsoEe6Mx9dH3yj5gQ)/TabularReferenceFieldRelationDefinedLink
// Name: userVoteEntry
export function ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditUserVoteEntryComponent(
  props: ServiceRatingVoteDefinitionRatingVoteDefinition_View_EditUserVoteEntryComponentProps,
) {
  const { ownerData, actions, storeDiff, submit, validationError, disabled, readOnly, editMode, isLoading } = props;
  const { t } = useTranslation();

  return (
    <AggregationInput
      name="userVoteEntry"
      id="User/(esm/_NHnv1FsoEe6Mx9dH3yj5gQ)/TabularReferenceFieldRelationDefinedLink"
      label={
        t('service.RatingVoteDefinition.RatingVoteDefinition_View_Edit.userVoteEntry', {
          defaultValue: 'Value',
        }) as string
      }
      labelList={[ownerData.userVoteEntry?.created?.toString() ?? '', ownerData.userVoteEntry?.value?.toString() ?? '']}
      required={actions?.isUserVoteEntryRequired ? actions.isUserVoteEntryRequired(ownerData, editMode) : false}
      ownerData={ownerData}
      error={!!validationError}
      helperText={validationError}
      icon={<MdiIcon path="vote" />}
      disabled={
        actions?.isUserVoteEntryDisabled ? actions.isUserVoteEntryDisabled(ownerData, editMode, isLoading) : disabled
      }
      readOnly={readOnly}
      editMode={editMode}
      autoCompleteAttribute={'created'}
      onAutoCompleteSelect={(userVoteEntry) => {
        storeDiff('userVoteEntry', userVoteEntry);
      }}
      onView={
        ownerData.userVoteEntry && actions.userVoteEntryOpenPageAction
          ? async () => {
              await actions.userVoteEntryOpenPageAction!(ownerData.userVoteEntry!);
            }
          : undefined
      }
    />
  );
}
