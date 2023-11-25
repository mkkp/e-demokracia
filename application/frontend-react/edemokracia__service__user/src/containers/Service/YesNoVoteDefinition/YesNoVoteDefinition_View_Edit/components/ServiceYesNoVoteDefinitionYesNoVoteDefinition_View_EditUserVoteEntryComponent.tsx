//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getLinksForPageContainers(#application)
// Path expression: 'src/containers/'+#containerPath(#self.pageContainer)+'/components/'+#linkComponentName(#self)+'.tsx'
// Template name: actor/src/containers/components/link.tsx
// Template file: actor/src/containers/components/link.tsx.hbs

import { useTranslation } from 'react-i18next';
import { processQueryCustomizer } from '~/utilities';
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
export interface ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditUserVoteEntryComponentActionDefinitions {
  userVoteEntryOpenPageAction?: (target: ServiceYesNoVoteEntryStored) => Promise<void>;
  userVoteEntryAutocompleteRangeAction?: (
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
        t('service.YesNoVoteDefinition.YesNoVoteDefinition_View_Edit.userVoteEntry', {
          defaultValue: 'Value',
        }) as string
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
        ownerData.userVoteEntry && actions.userVoteEntryOpenPageAction
          ? async () => {
              await actions.userVoteEntryOpenPageAction!(ownerData.userVoteEntry!);
            }
          : undefined
      }
    />
  );
}
