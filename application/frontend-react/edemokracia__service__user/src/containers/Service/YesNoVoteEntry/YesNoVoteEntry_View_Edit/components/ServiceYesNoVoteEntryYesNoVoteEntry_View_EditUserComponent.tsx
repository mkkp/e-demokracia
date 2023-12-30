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
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
  ServiceYesNoVoteEntry,
  ServiceYesNoVoteEntryStored,
} from '~/services/data-api';
import { processQueryCustomizer } from '~/utilities';
export interface ServiceYesNoVoteEntryYesNoVoteEntry_View_EditUserComponentActionDefinitions {
  ownerOpenSetSelectorAction?: () => Promise<ServiceServiceUserStored | undefined>;
  ownerUnsetAction?: (target: ServiceServiceUserStored) => Promise<void>;
  ownerOpenPageAction?: (target: ServiceServiceUserStored) => Promise<void>;
  ownerAutocompleteRangeAction?: (
    queryCustomizer: ServiceServiceUserQueryCustomizer,
  ) => Promise<Array<ServiceServiceUserStored>>;
  isOwnerRequired?: (data: ServiceYesNoVoteEntry | ServiceYesNoVoteEntryStored, editMode?: boolean) => boolean;
  isOwnerDisabled?: (
    data: ServiceYesNoVoteEntry | ServiceYesNoVoteEntryStored,
    editMode?: boolean,
    isLoading?: boolean,
  ) => boolean;
}

export interface ServiceYesNoVoteEntryYesNoVoteEntry_View_EditUserComponentProps {
  ownerData: ServiceYesNoVoteEntry | ServiceYesNoVoteEntryStored;
  actions: ServiceYesNoVoteEntryYesNoVoteEntry_View_EditUserComponentActionDefinitions;
  storeDiff: (attributeName: keyof ServiceYesNoVoteEntry, value: any) => void;
  submit: () => Promise<void>;
  validationError?: string;
  disabled?: boolean;
  readOnly?: boolean;
  editMode?: boolean;
  isLoading?: boolean;
}

// XMIID: User/(esm/_88iwkFowEe6_67aMO2jOsw)/TabularReferenceFieldRelationDefinedLink
// Name: user
export function ServiceYesNoVoteEntryYesNoVoteEntry_View_EditUserComponent(
  props: ServiceYesNoVoteEntryYesNoVoteEntry_View_EditUserComponentProps,
) {
  const { ownerData, actions, storeDiff, submit, validationError, disabled, readOnly, editMode, isLoading } = props;
  const { t } = useTranslation();

  return (
    <AggregationInput
      name="owner"
      id="User/(esm/_88iwkFowEe6_67aMO2jOsw)/TabularReferenceFieldRelationDefinedLink"
      label={t('service.YesNoVoteEntry.YesNoVoteEntry_View_Edit.user', { defaultValue: 'User' }) as string}
      labelList={[ownerData.owner?.representation?.toString() ?? '']}
      required={actions?.isOwnerRequired ? actions.isOwnerRequired(ownerData, editMode) : true}
      ownerData={ownerData}
      error={!!validationError}
      helperText={validationError}
      icon={<MdiIcon path="account" />}
      disabled={actions?.isOwnerDisabled ? actions.isOwnerDisabled(ownerData, editMode, isLoading) : disabled}
      readOnly={readOnly}
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
              const owner = await actions.ownerOpenSetSelectorAction!();
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
