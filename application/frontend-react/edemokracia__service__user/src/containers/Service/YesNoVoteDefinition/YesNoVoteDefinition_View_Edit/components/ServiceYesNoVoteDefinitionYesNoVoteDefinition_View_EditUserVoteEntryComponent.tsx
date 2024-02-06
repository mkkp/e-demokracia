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
  ServiceYesNoVoteDefinition,
  ServiceYesNoVoteDefinitionStored,
  ServiceYesNoVoteEntry,
  ServiceYesNoVoteEntryQueryCustomizer,
  ServiceYesNoVoteEntryStored,
} from '~/services/data-api';
import { processQueryCustomizer } from '~/utilities';
export interface ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditUserVoteEntryComponentActionDefinitions {
  userVoteEntryOpenPageAction?: (target: ServiceYesNoVoteEntryStored, isDraft?: boolean) => Promise<void>;
  userVoteEntryAutocompleteRangeAction?: (
    queryCustomizer: ServiceYesNoVoteEntryQueryCustomizer,
  ) => Promise<Array<ServiceYesNoVoteEntryStored>>;
  isUserVoteEntryRequired?: (
    data: ServiceYesNoVoteDefinition | ServiceYesNoVoteDefinitionStored,
    editMode?: boolean,
  ) => boolean;
  isUserVoteEntryDisabled?: (
    data: ServiceYesNoVoteDefinition | ServiceYesNoVoteDefinitionStored,
    editMode?: boolean,
    isLoading?: boolean,
  ) => boolean;
}

export interface ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditUserVoteEntryComponentProps {
  ownerData: ServiceYesNoVoteDefinition | ServiceYesNoVoteDefinitionStored;
  actions: ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditUserVoteEntryComponentActionDefinitions;
  storeDiff: (attributeName: keyof ServiceYesNoVoteDefinition, value: any) => void;
  submit: () => Promise<void>;
  validationError?: string;
  disabled?: boolean;
  readOnly?: boolean;
  editMode?: boolean;
  isLoading?: boolean;
  isDraft?: boolean;
}

// XMIID: User/(esm/_h4NScFouEe6_67aMO2jOsw)/TabularReferenceFieldRelationDefinedLink
// Name: userVoteEntry
export function ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditUserVoteEntryComponent(
  props: ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditUserVoteEntryComponentProps,
) {
  const { ownerData, actions, storeDiff, submit, validationError, disabled, readOnly, editMode, isLoading, isDraft } =
    props;
  const { t } = useTranslation();

  return (
    <AggregationInput
      name="userVoteEntry"
      id="User/(esm/_h4NScFouEe6_67aMO2jOsw)/TabularReferenceFieldRelationDefinedLink"
      label={
        t('service.YesNoVoteDefinition.YesNoVoteDefinition_View_Edit.userVoteEntry', {
          defaultValue: 'Value',
        }) as string
      }
      labelList={[ownerData.userVoteEntry?.value?.toString() ?? '', ownerData.userVoteEntry?.created?.toString() ?? '']}
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
      isInlineCreatable={false && !isDraft}
      autoCompleteAttribute={'value'}
      onAutoCompleteSelect={(userVoteEntry) => {
        storeDiff('userVoteEntry', userVoteEntry);
      }}
      onView={
        ownerData.userVoteEntry && actions.userVoteEntryOpenPageAction
          ? async () => {
              await actions.userVoteEntryOpenPageAction!(ownerData.userVoteEntry!, false);
            }
          : undefined
      }
    />
  );
}
