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
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
} from '~/services/data-api';
export interface ServiceIssueIssue_View_EditOwnerComponentActionDefinitions {
  serviceIssueIssue_View_EditIssueOwnerCreate?: () => Promise<void>;
  serviceIssueIssue_View_EditIssueOwnerDelete?: (target: ServiceServiceUserStored) => Promise<void>;
  serviceIssueIssue_View_EditIssueOwnerSetOpenSelector?: () => Promise<void>;
  serviceIssueIssue_View_EditIssueOwnerUnset?: (target: ServiceServiceUserStored) => Promise<void>;
  serviceIssueIssue_View_EditIssueOwnerView?: (target: ServiceServiceUserStored) => Promise<void>;
  serviceIssueIssue_View_EditIssueOwnerAutocomplete?: (
    queryCustomizer: ServiceServiceUserQueryCustomizer,
  ) => Promise<Array<ServiceServiceUserStored>>;
}

export interface ServiceIssueIssue_View_EditOwnerComponentProps {
  ownerData: ServiceIssue | ServiceIssueStored;
  actions: ServiceIssueIssue_View_EditOwnerComponentActionDefinitions;
  storeDiff: (attributeName: keyof ServiceIssue, value: any) => void;
  validationError?: string;
  disabled?: boolean;
  editMode?: boolean;
}

// XMIID: User/(esm/_plsB8Id8Ee2kLcMqsIbMgQ)/TabularReferenceFieldRelationDefinedLink
// Name: owner
export function ServiceIssueIssue_View_EditOwnerComponent(props: ServiceIssueIssue_View_EditOwnerComponentProps) {
  const { ownerData, actions, storeDiff, validationError, disabled, editMode } = props;
  const { t } = useTranslation();

  return (
    <AggregationInput
      name="owner"
      id="User/(esm/_plsB8Id8Ee2kLcMqsIbMgQ)/TabularReferenceFieldRelationDefinedLink"
      label={
        t(
          'service.Issue.Issue.View.Edit.owner.issue.issue::LabelWrapper.Issue_View_Edit.service::Issue::Issue_View_Edit',
          { defaultValue: 'Owner' },
        ) as string
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
        actions.serviceIssueIssue_View_EditIssueOwnerAutocomplete
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
              return await actions.serviceIssueIssue_View_EditIssueOwnerAutocomplete!(
                processQueryCustomizer(queryCustomizer),
              );
            }
          : undefined
      }
      onView={
        ownerData.owner && actions.serviceIssueIssue_View_EditIssueOwnerView
          ? async () => {
              await actions.serviceIssueIssue_View_EditIssueOwnerView!(ownerData.owner!);
            }
          : undefined
      }
      onCreate={
        actions.serviceIssueIssue_View_EditIssueOwnerCreate
          ? async () => {
              await actions.serviceIssueIssue_View_EditIssueOwnerCreate!();
            }
          : undefined
      }
      onDelete={
        ownerData.owner && actions.serviceIssueIssue_View_EditIssueOwnerDelete
          ? async () => actions.serviceIssueIssue_View_EditIssueOwnerDelete!(ownerData.owner!)
          : undefined
      }
      onSet={
        actions.serviceIssueIssue_View_EditIssueOwnerSetOpenSelector
          ? async () => {
              await actions.serviceIssueIssue_View_EditIssueOwnerSetOpenSelector!();
            }
          : undefined
      }
      onUnset={
        ownerData.owner && actions.serviceIssueIssue_View_EditIssueOwnerUnset
          ? async () => actions.serviceIssueIssue_View_EditIssueOwnerUnset!(ownerData.owner!)
          : undefined
      }
    ></AggregationInput>
  );
}
