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
  ServiceYesNoVoteEntry,
  ServiceYesNoVoteEntryStored,
} from '~/services/data-api';
export interface ServiceYesNoVoteEntryYesNoVoteEntry_View_EditUserComponentActionDefinitions {
  ownerOpenSetSelectorAction?: () => Promise<void>;
  ownerOpenPageAction?: (target: ServiceServiceUserStored) => Promise<void>;
  ownerAutocompleteRangeAction?: (
    queryCustomizer: ServiceServiceUserQueryCustomizer,
  ) => Promise<Array<ServiceServiceUserStored>>;
}

export interface ServiceYesNoVoteEntryYesNoVoteEntry_View_EditUserComponentProps {
  ownerData: ServiceYesNoVoteEntry | ServiceYesNoVoteEntryStored;
  actions: ServiceYesNoVoteEntryYesNoVoteEntry_View_EditUserComponentActionDefinitions;
  storeDiff: (attributeName: keyof ServiceYesNoVoteEntry, value: any) => void;
  validationError?: string;
  disabled?: boolean;
  editMode?: boolean;
}

// XMIID: User/(esm/_88iwkFowEe6_67aMO2jOsw)/TabularReferenceFieldRelationDefinedLink
// Name: user
export function ServiceYesNoVoteEntryYesNoVoteEntry_View_EditUserComponent(
  props: ServiceYesNoVoteEntryYesNoVoteEntry_View_EditUserComponentProps,
) {
  const { ownerData, actions, storeDiff, validationError, disabled, editMode } = props;
  const { t } = useTranslation();

  return (
    <AggregationInput
      name="owner"
      id="User/(esm/_88iwkFowEe6_67aMO2jOsw)/TabularReferenceFieldRelationDefinedLink"
      label={t('service.YesNoVoteEntry.YesNoVoteEntry_View_Edit.user', { defaultValue: 'User' }) as string}
      labelList={[ownerData.owner?.representation?.toString() ?? '']}
      ownerData={ownerData}
      error={!!validationError}
      helperText={validationError}
      icon={<MdiIcon path="account" />}
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
    />
  );
}
