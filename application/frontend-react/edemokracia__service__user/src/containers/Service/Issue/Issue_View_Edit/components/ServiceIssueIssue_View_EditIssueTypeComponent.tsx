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
  ServiceIssue,
  ServiceIssueStored,
  ServiceIssueType,
  ServiceIssueTypeQueryCustomizer,
  ServiceIssueTypeStored,
} from '~/services/data-api';
export interface ServiceIssueIssue_View_EditIssueTypeComponentActionDefinitions {
  serviceIssueIssue_View_EditIssueIssueTypeCreate?: () => Promise<void>;
  serviceIssueIssue_View_EditIssueIssueTypeDelete?: (target: ServiceIssueTypeStored) => Promise<void>;
  serviceIssueIssue_View_EditIssueIssueTypeSetOpenSelector?: () => Promise<void>;
  serviceIssueIssue_View_EditIssueIssueTypeUnset?: (target: ServiceIssueTypeStored) => Promise<void>;
  serviceIssueIssue_View_EditIssueIssueTypeView?: (target: ServiceIssueTypeStored) => Promise<void>;
  serviceIssueIssue_View_EditIssueIssueTypeAutocomplete?: (
    queryCustomizer: ServiceIssueTypeQueryCustomizer,
  ) => Promise<Array<ServiceIssueTypeStored>>;
}

export interface ServiceIssueIssue_View_EditIssueTypeComponentProps {
  ownerData: ServiceIssue | ServiceIssueStored;
  actions: ServiceIssueIssue_View_EditIssueTypeComponentActionDefinitions;
  storeDiff: (attributeName: keyof ServiceIssue, value: any) => void;
  validationError?: string;
  disabled?: boolean;
  editMode?: boolean;
}

// XMIID: User/(esm/_FHpVENvSEe2Bgcx6em3jZg)/TabularReferenceFieldRelationDefinedLink
// Name: issueType
export function ServiceIssueIssue_View_EditIssueTypeComponent(
  props: ServiceIssueIssue_View_EditIssueTypeComponentProps,
) {
  const { ownerData, actions, storeDiff, validationError, disabled, editMode } = props;
  const { t } = useTranslation();

  return (
    <AggregationInput
      name="issueType"
      id="User/(esm/_FHpVENvSEe2Bgcx6em3jZg)/TabularReferenceFieldRelationDefinedLink"
      label={
        t(
          'service.Issue.Issue.View.Edit.issueType.issue.issue::LabelWrapper.Issue_View_Edit.service::Issue::Issue_View_Edit',
          { defaultValue: 'Issue Type' },
        ) as string
      }
      labelList={[ownerData.issueType?.title?.toString() ?? '', ownerData.issueType?.description?.toString() ?? '']}
      ownerData={ownerData}
      error={!!validationError}
      helperText={validationError}
      icon={<MdiIcon path="folder-open" />}
      disabled={disabled}
      editMode={editMode}
      autoCompleteAttribute={'title'}
      onAutoCompleteSelect={(issueType) => {
        storeDiff('issueType', issueType);
      }}
      onAutoCompleteSearch={
        actions.serviceIssueIssue_View_EditIssueIssueTypeAutocomplete
          ? async (searchText: string) => {
              const queryCustomizer: ServiceIssueTypeQueryCustomizer = {
                ...(searchText?.length
                  ? {
                      title: [{ operator: StringOperation.like, value: searchText }],
                    }
                  : {}),
                _mask: '{title}',
                _orderBy: [{ attribute: 'title', descending: false }],
                _seek: { limit: 10 },
              };
              return await actions.serviceIssueIssue_View_EditIssueIssueTypeAutocomplete!(
                processQueryCustomizer(queryCustomizer),
              );
            }
          : undefined
      }
      onView={
        ownerData.issueType && actions.serviceIssueIssue_View_EditIssueIssueTypeView
          ? async () => {
              await actions.serviceIssueIssue_View_EditIssueIssueTypeView!(ownerData.issueType!);
            }
          : undefined
      }
      onCreate={
        actions.serviceIssueIssue_View_EditIssueIssueTypeCreate
          ? async () => {
              await actions.serviceIssueIssue_View_EditIssueIssueTypeCreate!();
            }
          : undefined
      }
      onDelete={
        ownerData.issueType && actions.serviceIssueIssue_View_EditIssueIssueTypeDelete
          ? async () => actions.serviceIssueIssue_View_EditIssueIssueTypeDelete!(ownerData.issueType!)
          : undefined
      }
      onSet={
        actions.serviceIssueIssue_View_EditIssueIssueTypeSetOpenSelector
          ? async () => {
              await actions.serviceIssueIssue_View_EditIssueIssueTypeSetOpenSelector!();
            }
          : undefined
      }
      onUnset={
        ownerData.issueType && actions.serviceIssueIssue_View_EditIssueIssueTypeUnset
          ? async () => actions.serviceIssueIssue_View_EditIssueIssueTypeUnset!(ownerData.issueType!)
          : undefined
      }
    ></AggregationInput>
  );
}
