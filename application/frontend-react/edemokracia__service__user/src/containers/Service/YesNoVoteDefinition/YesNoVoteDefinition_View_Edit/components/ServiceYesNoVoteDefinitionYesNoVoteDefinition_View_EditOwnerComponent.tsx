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
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
  ServiceYesNoVoteDefinition,
  ServiceYesNoVoteDefinitionStored,
} from '~/services/data-api';
export interface ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditOwnerComponentActionDefinitions {
  ownerOpenSetSelectorAction?: () => Promise<void>;
  ownerUnsetAction?: (target: ServiceServiceUserStored) => Promise<void>;
  ownerOpenPageAction?: (target: ServiceServiceUserStored) => Promise<void>;
  ownerAutocompleteRangeAction?: (
    queryCustomizer: ServiceServiceUserQueryCustomizer,
  ) => Promise<Array<ServiceServiceUserStored>>;
}

export interface ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditOwnerComponentProps {
  ownerData: ServiceYesNoVoteDefinition | ServiceYesNoVoteDefinitionStored;
  actions: ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditOwnerComponentActionDefinitions;
  storeDiff: (attributeName: keyof ServiceYesNoVoteDefinition, value: any) => void;
  validationError?: string;
  disabled?: boolean;
  editMode?: boolean;
}

// XMIID: User/(esm/_UUiHQHz6Ee6Q9LyUVjs1Qw)/TabularReferenceFieldRelationDefinedLink
// Name: owner
export function ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditOwnerComponent(
  props: ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditOwnerComponentProps,
) {
  const { ownerData, actions, storeDiff, validationError, disabled, editMode } = props;
  const { t } = useTranslation();

  return (
    <AggregationInput
      name="owner"
      id="User/(esm/_UUiHQHz6Ee6Q9LyUVjs1Qw)/TabularReferenceFieldRelationDefinedLink"
      label={t('service.YesNoVoteDefinition.YesNoVoteDefinition_View_Edit.owner', { defaultValue: 'Owner' }) as string}
      labelList={[ownerData.owner?.representation?.toString() ?? '']}
      ownerData={ownerData}
      error={!!validationError}
      helperText={validationError}
      icon={<MdiIcon path="table_rows" />}
      disabled={disabled}
      editMode={editMode}
      autoCompleteAttribute={'representation'}
      onAutoCompleteSelect={(owner) => {
        storeDiff('owner', owner);
      }}
      onAutoCompleteSearch={
        actions.ownerAutocompleteRangeAction
          ? async (searchText: string) => {
              const queryCustomizer: ServiceServiceUserQueryCustomizer = {
                ...(searchText?.length
                  ? {
                      representation: [{ operator: StringOperation.like, value: searchText }],
                    }
                  : {}),
                _mask: '{representation}',
                _orderBy: [{ attribute: 'representation', descending: false }],
                _seek: { limit: 10 },
              };
              return await actions.ownerAutocompleteRangeAction!(processQueryCustomizer(queryCustomizer));
            }
          : undefined
      }
      onView={
        ownerData.owner && actions.ownerOpenPageAction
          ? async () => {
              await actions.ownerOpenPageAction!(ownerData.owner!);
            }
          : undefined
      }
      onSet={
        actions.ownerOpenSetSelectorAction
          ? async () => {
              await actions.ownerOpenSetSelectorAction!();
            }
          : undefined
      }
      onUnset={
        ownerData.owner && actions.ownerUnsetAction
          ? async () => actions.ownerUnsetAction!(ownerData.owner!)
          : undefined
      }
    />
  );
}
