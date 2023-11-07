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
  ServiceRatingVoteEntry,
  ServiceRatingVoteEntryStored,
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
} from '~/services/data-api';
export interface ServiceRatingVoteEntryRatingVoteEntry_View_EditOwnerComponentActionDefinitions {
  serviceRatingVoteEntryRatingVoteEntry_View_EditOwnerCreate?: () => Promise<void>;
  serviceRatingVoteEntryRatingVoteEntry_View_EditOwnerDelete?: (target: ServiceServiceUserStored) => Promise<void>;
  serviceRatingVoteEntryRatingVoteEntry_View_EditOwnerSetOpenSelector?: () => Promise<void>;
  serviceRatingVoteEntryRatingVoteEntry_View_EditOwnerUnset?: (target: ServiceServiceUserStored) => Promise<void>;
  serviceRatingVoteEntryRatingVoteEntry_View_EditOwnerView?: (target: ServiceServiceUserStored) => Promise<void>;
  serviceRatingVoteEntryRatingVoteEntry_View_EditOwnerAutocomplete?: (
    queryCustomizer: ServiceServiceUserQueryCustomizer,
  ) => Promise<Array<ServiceServiceUserStored>>;
}

export interface ServiceRatingVoteEntryRatingVoteEntry_View_EditOwnerComponentProps {
  ownerData: ServiceRatingVoteEntry | ServiceRatingVoteEntryStored;
  actions: ServiceRatingVoteEntryRatingVoteEntry_View_EditOwnerComponentActionDefinitions;
  storeDiff: (attributeName: keyof ServiceRatingVoteEntry, value: any) => void;
  validationError?: string;
  disabled?: boolean;
  editMode?: boolean;
}

// XMIID: User/(esm/_L_YV8FuXEe6T042_LMmSdQ)/TabularReferenceFieldRelationDefinedLink
// Name: owner
export function ServiceRatingVoteEntryRatingVoteEntry_View_EditOwnerComponent(
  props: ServiceRatingVoteEntryRatingVoteEntry_View_EditOwnerComponentProps,
) {
  const { ownerData, actions, storeDiff, validationError, disabled, editMode } = props;
  const { t } = useTranslation();

  return (
    <AggregationInput
      name="owner"
      id="User/(esm/_L_YV8FuXEe6T042_LMmSdQ)/TabularReferenceFieldRelationDefinedLink"
      label={
        t(
          'service.RatingVoteEntry.RatingVoteEntry.View.Edit.owner.RatingVoteEntry_View_Edit.service::RatingVoteEntry::RatingVoteEntry_View_Edit',
          { defaultValue: 'Owner' },
        ) as string
      }
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
        actions.serviceRatingVoteEntryRatingVoteEntry_View_EditOwnerAutocomplete
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
              return await actions.serviceRatingVoteEntryRatingVoteEntry_View_EditOwnerAutocomplete!(
                processQueryCustomizer(queryCustomizer),
              );
            }
          : undefined
      }
      onView={
        ownerData.owner && actions.serviceRatingVoteEntryRatingVoteEntry_View_EditOwnerView
          ? async () => {
              await actions.serviceRatingVoteEntryRatingVoteEntry_View_EditOwnerView!(ownerData.owner!);
            }
          : undefined
      }
      onCreate={
        actions.serviceRatingVoteEntryRatingVoteEntry_View_EditOwnerCreate
          ? async () => {
              await actions.serviceRatingVoteEntryRatingVoteEntry_View_EditOwnerCreate!();
            }
          : undefined
      }
      onDelete={
        ownerData.owner && actions.serviceRatingVoteEntryRatingVoteEntry_View_EditOwnerDelete
          ? async () => actions.serviceRatingVoteEntryRatingVoteEntry_View_EditOwnerDelete!(ownerData.owner!)
          : undefined
      }
      onSet={
        actions.serviceRatingVoteEntryRatingVoteEntry_View_EditOwnerSetOpenSelector
          ? async () => {
              await actions.serviceRatingVoteEntryRatingVoteEntry_View_EditOwnerSetOpenSelector!();
            }
          : undefined
      }
      onUnset={
        ownerData.owner && actions.serviceRatingVoteEntryRatingVoteEntry_View_EditOwnerUnset
          ? async () => actions.serviceRatingVoteEntryRatingVoteEntry_View_EditOwnerUnset!(ownerData.owner!)
          : undefined
      }
    ></AggregationInput>
  );
}
