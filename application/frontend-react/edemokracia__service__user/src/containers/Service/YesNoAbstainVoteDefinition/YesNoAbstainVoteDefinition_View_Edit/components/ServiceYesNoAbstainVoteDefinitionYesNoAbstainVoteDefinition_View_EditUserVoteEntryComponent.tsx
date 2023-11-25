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
  ServiceYesNoAbstainVoteDefinition,
  ServiceYesNoAbstainVoteDefinitionStored,
  ServiceYesNoAbstainVoteEntry,
  ServiceYesNoAbstainVoteEntryQueryCustomizer,
  ServiceYesNoAbstainVoteEntryStored,
} from '~/services/data-api';
export interface ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditUserVoteEntryComponentActionDefinitions {
  userVoteEntryOpenPageAction?: (target: ServiceYesNoAbstainVoteEntryStored) => Promise<void>;
  userVoteEntryAutocompleteRangeAction?: (
    queryCustomizer: ServiceYesNoAbstainVoteEntryQueryCustomizer,
  ) => Promise<Array<ServiceYesNoAbstainVoteEntryStored>>;
}

export interface ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditUserVoteEntryComponentProps {
  ownerData: ServiceYesNoAbstainVoteDefinition | ServiceYesNoAbstainVoteDefinitionStored;
  actions: ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditUserVoteEntryComponentActionDefinitions;
  storeDiff: (attributeName: keyof ServiceYesNoAbstainVoteDefinition, value: any) => void;
  validationError?: string;
  disabled?: boolean;
  editMode?: boolean;
}

// XMIID: User/(esm/_7M-IOFsnEe6Mx9dH3yj5gQ)/TabularReferenceFieldRelationDefinedLink
// Name: userVoteEntry
export function ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditUserVoteEntryComponent(
  props: ServiceYesNoAbstainVoteDefinitionYesNoAbstainVoteDefinition_View_EditUserVoteEntryComponentProps,
) {
  const { ownerData, actions, storeDiff, validationError, disabled, editMode } = props;
  const { t } = useTranslation();

  return (
    <AggregationInput
      name="userVoteEntry"
      id="User/(esm/_7M-IOFsnEe6Mx9dH3yj5gQ)/TabularReferenceFieldRelationDefinedLink"
      label={
        t('service.YesNoAbstainVoteDefinition.YesNoAbstainVoteDefinition_View_Edit.userVoteEntry', {
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
