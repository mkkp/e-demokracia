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
  ServiceYesNoAbstainVoteEntry,
  ServiceYesNoAbstainVoteEntryStored,
} from '~/services/data-api';
import { processQueryCustomizer } from '~/utilities';
export interface ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditUserComponentActionDefinitions {
  ownerOpenSetSelectorAction?: () => Promise<ServiceServiceUserStored | undefined>;
  ownerUnsetAction?: (target: ServiceServiceUserStored) => Promise<void>;
  ownerOpenPageAction?: (target: ServiceServiceUserStored, isDraft?: boolean) => Promise<void>;
  ownerAutocompleteRangeAction?: (
    queryCustomizer: ServiceServiceUserQueryCustomizer,
  ) => Promise<Array<ServiceServiceUserStored>>;
  isOwnerRequired?: (
    data: ServiceYesNoAbstainVoteEntry | ServiceYesNoAbstainVoteEntryStored,
    editMode?: boolean,
  ) => boolean;
  isOwnerDisabled?: (
    data: ServiceYesNoAbstainVoteEntry | ServiceYesNoAbstainVoteEntryStored,
    editMode?: boolean,
    isLoading?: boolean,
  ) => boolean;
}

export interface ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditUserComponentProps {
  ownerData: ServiceYesNoAbstainVoteEntry | ServiceYesNoAbstainVoteEntryStored;
  actions: ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditUserComponentActionDefinitions;
  storeDiff: (attributeName: keyof ServiceYesNoAbstainVoteEntry, value: any) => void;
  submit: () => Promise<void>;
  validationError?: string;
  disabled?: boolean;
  readOnly?: boolean;
  editMode?: boolean;
  isLoading?: boolean;
  isDraft?: boolean;
}

// XMIID: User/(esm/_eryuAFskEe6Mx9dH3yj5gQ)/TabularReferenceFieldRelationDefinedLink
// Name: user
export function ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditUserComponent(
  props: ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditUserComponentProps,
) {
  const { ownerData, actions, storeDiff, submit, validationError, disabled, readOnly, editMode, isLoading, isDraft } =
    props;
  const { t } = useTranslation();

  return (
    <AggregationInput
      name="owner"
      id="User/(esm/_eryuAFskEe6Mx9dH3yj5gQ)/TabularReferenceFieldRelationDefinedLink"
      label={
        t('service.YesNoAbstainVoteEntry.YesNoAbstainVoteEntry_View_Edit.user', { defaultValue: 'User' }) as string
      }
      labelList={[ownerData.owner?.representation?.toString() ?? '']}
      required={actions?.isOwnerRequired ? actions.isOwnerRequired(ownerData, editMode) : true}
      ownerData={ownerData}
      error={!!validationError}
      helperText={validationError}
      icon={<MdiIcon path="account" />}
      disabled={actions?.isOwnerDisabled ? actions.isOwnerDisabled(ownerData, editMode, isLoading) : disabled}
      readOnly={readOnly}
      editMode={editMode}
      isInlineCreatable={false && !isDraft}
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
              await actions.ownerOpenPageAction!(ownerData.owner!, false);
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
