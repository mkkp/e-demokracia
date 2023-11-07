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
export interface ServiceCommentComment_View_EditCreatedByComponentActionDefinitions {
  serviceCommentComment_View_EditGroupCreatedByCreate?: () => Promise<void>;
  serviceCommentComment_View_EditGroupCreatedByDelete?: (target: ServiceServiceUserStored) => Promise<void>;
  serviceCommentComment_View_EditGroupCreatedBySetOpenSelector?: () => Promise<void>;
  serviceCommentComment_View_EditGroupCreatedByUnset?: (target: ServiceServiceUserStored) => Promise<void>;
  serviceCommentComment_View_EditGroupCreatedByView?: (target: ServiceServiceUserStored) => Promise<void>;
  serviceCommentComment_View_EditGroupCreatedByAutocomplete?: (
    queryCustomizer: ServiceServiceUserQueryCustomizer,
  ) => Promise<Array<ServiceServiceUserStored>>;
}

export interface ServiceCommentComment_View_EditCreatedByComponentProps {
  ownerData: ServiceComment | ServiceCommentStored;
  actions: ServiceCommentComment_View_EditCreatedByComponentActionDefinitions;
  storeDiff: (attributeName: keyof ServiceComment, value: any) => void;
  validationError?: string;
  disabled?: boolean;
  editMode?: boolean;
}

// XMIID: User/(esm/_IgQyYIfuEe2u0fVmwtP5bA)/TabularReferenceFieldRelationDefinedLink
// Name: createdBy
export function ServiceCommentComment_View_EditCreatedByComponent(
  props: ServiceCommentComment_View_EditCreatedByComponentProps,
) {
  const { ownerData, actions, storeDiff, validationError, disabled, editMode } = props;
  const { t } = useTranslation();

  return (
    <AggregationInput
      name="createdBy"
      id="User/(esm/_IgQyYIfuEe2u0fVmwtP5bA)/TabularReferenceFieldRelationDefinedLink"
      label={
        t(
          'service.Comment.Comment.View.Edit.createdBy.group.group::LabelWrapper.Comment_View_Edit.service::Comment::Comment_View_Edit',
          { defaultValue: 'CreatedBy' },
        ) as string
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
        actions.serviceCommentComment_View_EditGroupCreatedByAutocomplete
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
              return await actions.serviceCommentComment_View_EditGroupCreatedByAutocomplete!(
                processQueryCustomizer(queryCustomizer),
              );
            }
          : undefined
      }
      onView={
        ownerData.createdBy && actions.serviceCommentComment_View_EditGroupCreatedByView
          ? async () => {
              await actions.serviceCommentComment_View_EditGroupCreatedByView!(ownerData.createdBy!);
            }
          : undefined
      }
      onCreate={
        actions.serviceCommentComment_View_EditGroupCreatedByCreate
          ? async () => {
              await actions.serviceCommentComment_View_EditGroupCreatedByCreate!();
            }
          : undefined
      }
      onDelete={
        ownerData.createdBy && actions.serviceCommentComment_View_EditGroupCreatedByDelete
          ? async () => actions.serviceCommentComment_View_EditGroupCreatedByDelete!(ownerData.createdBy!)
          : undefined
      }
      onSet={
        actions.serviceCommentComment_View_EditGroupCreatedBySetOpenSelector
          ? async () => {
              await actions.serviceCommentComment_View_EditGroupCreatedBySetOpenSelector!();
            }
          : undefined
      }
      onUnset={
        ownerData.createdBy && actions.serviceCommentComment_View_EditGroupCreatedByUnset
          ? async () => actions.serviceCommentComment_View_EditGroupCreatedByUnset!(ownerData.createdBy!)
          : undefined
      }
    ></AggregationInput>
  );
}
