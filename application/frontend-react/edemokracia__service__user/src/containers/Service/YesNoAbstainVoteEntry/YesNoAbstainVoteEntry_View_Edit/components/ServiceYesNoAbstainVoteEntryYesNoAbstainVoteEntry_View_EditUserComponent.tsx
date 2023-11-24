//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getLinksForPageContainers(#application)
// Path expression: 'src/containers/'+#containerPath(#self.pageContainer)+'/components/'+#linkComponentName(#self)+'.tsx'
// Template name: actor/src/containers/components/link.tsx
// Template file: actor/src/containers/components/link.tsx.hbs

import { useTranslation } from 'react-i18next';
import IconButton from '@mui/material/IconButton';
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
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
  ServiceYesNoAbstainVoteEntry,
  ServiceYesNoAbstainVoteEntryStored,
} from '~/services/data-api';
export interface ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditUserComponentActionDefinitions {
  ownerOpenSetSelectorAction?: () => Promise<void>;
  ownerOpenPageAction?: (target: ServiceServiceUserStored) => Promise<void>;
  ownerAutocompleteRangeAction?: (
    queryCustomizer: ServiceServiceUserQueryCustomizer,
  ) => Promise<Array<ServiceServiceUserStored>>;
}

export interface ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditUserComponentProps {
  ownerData: ServiceYesNoAbstainVoteEntry | ServiceYesNoAbstainVoteEntryStored;
  actions: ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditUserComponentActionDefinitions;
  storeDiff: (attributeName: keyof ServiceYesNoAbstainVoteEntry, value: any) => void;
  validationError?: string;
  disabled?: boolean;
  editMode?: boolean;
}

// XMIID: User/(esm/_eryuAFskEe6Mx9dH3yj5gQ)/TabularReferenceFieldRelationDefinedLink
// Name: user
export function ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditUserComponent(
  props: ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_View_EditUserComponentProps,
) {
  const { ownerData, actions, storeDiff, validationError, disabled, editMode } = props;
  const { t } = useTranslation();

  return (
    <AggregationInput
      name="owner"
      id="User/(esm/_eryuAFskEe6Mx9dH3yj5gQ)/TabularReferenceFieldRelationDefinedLink"
      label={
        t('service.YesNoAbstainVoteEntry.YesNoAbstainVoteEntry_View_Edit.user', { defaultValue: 'User' }) as string
      }
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
