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
  ServiceComment,
  ServiceCommentStored,
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
} from '~/services/data-api';
export interface ServiceCommentComment_FormCreatedByComponentActionDefinitions {
  serviceCommentComment_FormGroupCreatedByCreate?: () => Promise<void>;
  serviceCommentComment_FormGroupCreatedByDelete?: (target: ServiceServiceUserStored) => Promise<void>;
  serviceCommentComment_FormGroupCreatedBySetOpenSelector?: () => Promise<void>;
  serviceCommentComment_FormGroupCreatedByUnset?: (target: ServiceServiceUserStored) => Promise<void>;
  serviceCommentComment_FormGroupCreatedByView?: (target: ServiceServiceUserStored) => Promise<void>;
  serviceCommentComment_FormGroupCreatedByAutocomplete?: (
    queryCustomizer: ServiceServiceUserQueryCustomizer,
  ) => Promise<Array<ServiceServiceUserStored>>;
}

export interface ServiceCommentComment_FormCreatedByComponentProps {
  ownerData: ServiceComment | ServiceCommentStored;
  actions: ServiceCommentComment_FormCreatedByComponentActionDefinitions;
  storeDiff: (attributeName: keyof ServiceComment, value: any) => void;
  validationError?: string;
  disabled?: boolean;
  editMode?: boolean;
}

// XMIID: User/(esm/_IgYHIIfuEe2u0fVmwtP5bA)/TabularReferenceFieldRelationDefinedLink
// Name: createdBy
export function ServiceCommentComment_FormCreatedByComponent(props: ServiceCommentComment_FormCreatedByComponentProps) {
  const { ownerData, actions, storeDiff, validationError, disabled, editMode } = props;
  const { t } = useTranslation();

  return (
    <AggregationInput
      name="createdBy"
      id="User/(esm/_IgYHIIfuEe2u0fVmwtP5bA)/TabularReferenceFieldRelationDefinedLink"
      label={
        t('service.Comment.Comment.Form.createdBy.group.Comment_Form.service::Comment::Comment_Form', {
          defaultValue: 'CreatedBy',
        }) as string
      }
      labelList={[ownerData.createdBy?.representation?.toString() ?? '']}
      ownerData={ownerData}
      error={!!validationError}
      helperText={validationError}
      icon={<MdiIcon path="table_rows" />}
      disabled={disabled}
      editMode={editMode}
      autoCompleteAttribute={'representation'}
      onAutoCompleteSelect={(createdBy) => {
        storeDiff('createdBy', createdBy);
      }}
      onAutoCompleteSearch={
        actions.serviceCommentComment_FormGroupCreatedByAutocomplete
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
              return await actions.serviceCommentComment_FormGroupCreatedByAutocomplete!(
                processQueryCustomizer(queryCustomizer),
              );
            }
          : undefined
      }
      onView={
        ownerData.createdBy && actions.serviceCommentComment_FormGroupCreatedByView
          ? async () => {
              await actions.serviceCommentComment_FormGroupCreatedByView!(ownerData.createdBy!);
            }
          : undefined
      }
      onCreate={
        actions.serviceCommentComment_FormGroupCreatedByCreate
          ? async () => {
              await actions.serviceCommentComment_FormGroupCreatedByCreate!();
            }
          : undefined
      }
      onDelete={
        ownerData.createdBy && actions.serviceCommentComment_FormGroupCreatedByDelete
          ? async () => actions.serviceCommentComment_FormGroupCreatedByDelete!(ownerData.createdBy!)
          : undefined
      }
      onSet={
        actions.serviceCommentComment_FormGroupCreatedBySetOpenSelector
          ? async () => {
              await actions.serviceCommentComment_FormGroupCreatedBySetOpenSelector!();
            }
          : undefined
      }
      onUnset={
        ownerData.createdBy && actions.serviceCommentComment_FormGroupCreatedByUnset
          ? async () => actions.serviceCommentComment_FormGroupCreatedByUnset!(ownerData.createdBy!)
          : undefined
      }
    ></AggregationInput>
  );
}
