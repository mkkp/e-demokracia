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
  ServiceComment,
  ServiceCommentStored,
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
} from '~/services/data-api';
export interface ServiceCommentComment_FormCreatedByComponentActionDefinitions {
  createdByOpenSetSelectorAction?: () => Promise<void>;
  createdByOpenPageAction?: (target: ServiceServiceUserStored) => Promise<void>;
  createdByAutocompleteRangeAction?: (
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
      label={t('service.Comment.Comment_Form.createdBy', { defaultValue: 'CreatedBy' }) as string}
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
        actions.createdByAutocompleteRangeAction
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
              return await actions.createdByAutocompleteRangeAction!(processQueryCustomizer(queryCustomizer));
            }
          : undefined
      }
      onView={
        ownerData.createdBy && actions.createdByOpenPageAction
          ? async () => {
              await actions.createdByOpenPageAction!(ownerData.createdBy!);
            }
          : undefined
      }
      onSet={
        actions.createdByOpenSetSelectorAction
          ? async () => {
              await actions.createdByOpenSetSelectorAction!();
            }
          : undefined
      }
    />
  );
}
