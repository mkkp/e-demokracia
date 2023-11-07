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
  ServiceIssueCategory,
  ServiceIssueCategoryStored,
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
} from '~/services/data-api';
export interface ServiceIssueCategoryIssueCategory_FormOwnerComponentActionDefinitions {
  serviceIssueCategoryIssueCategory_FormOwnerCreate?: () => Promise<void>;
  serviceIssueCategoryIssueCategory_FormOwnerDelete?: (target: ServiceServiceUserStored) => Promise<void>;
  serviceIssueCategoryIssueCategory_FormOwnerSetOpenSelector?: () => Promise<void>;
  serviceIssueCategoryIssueCategory_FormOwnerUnset?: (target: ServiceServiceUserStored) => Promise<void>;
  serviceIssueCategoryIssueCategory_FormOwnerView?: (target: ServiceServiceUserStored) => Promise<void>;
  serviceIssueCategoryIssueCategory_FormOwnerAutocomplete?: (
    queryCustomizer: ServiceServiceUserQueryCustomizer,
  ) => Promise<Array<ServiceServiceUserStored>>;
}

export interface ServiceIssueCategoryIssueCategory_FormOwnerComponentProps {
  ownerData: ServiceIssueCategory | ServiceIssueCategoryStored;
  actions: ServiceIssueCategoryIssueCategory_FormOwnerComponentActionDefinitions;
  storeDiff: (attributeName: keyof ServiceIssueCategory, value: any) => void;
  validationError?: string;
  disabled?: boolean;
  editMode?: boolean;
}

// XMIID: User/(esm/_8svcEIdgEe2kLcMqsIbMgQ)/TabularReferenceFieldRelationDefinedLink
// Name: owner
export function ServiceIssueCategoryIssueCategory_FormOwnerComponent(
  props: ServiceIssueCategoryIssueCategory_FormOwnerComponentProps,
) {
  const { ownerData, actions, storeDiff, validationError, disabled, editMode } = props;
  const { t } = useTranslation();

  return (
    <AggregationInput
      name="owner"
      id="User/(esm/_8svcEIdgEe2kLcMqsIbMgQ)/TabularReferenceFieldRelationDefinedLink"
      label={
        t(
          'service.IssueCategory.IssueCategory.Form.owner.IssueCategory_Form.service::IssueCategory::IssueCategory_Form',
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
        actions.serviceIssueCategoryIssueCategory_FormOwnerAutocomplete
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
              return await actions.serviceIssueCategoryIssueCategory_FormOwnerAutocomplete!(
                processQueryCustomizer(queryCustomizer),
              );
            }
          : undefined
      }
      onView={
        ownerData.owner && actions.serviceIssueCategoryIssueCategory_FormOwnerView
          ? async () => {
              await actions.serviceIssueCategoryIssueCategory_FormOwnerView!(ownerData.owner!);
            }
          : undefined
      }
      onCreate={
        actions.serviceIssueCategoryIssueCategory_FormOwnerCreate
          ? async () => {
              await actions.serviceIssueCategoryIssueCategory_FormOwnerCreate!();
            }
          : undefined
      }
      onDelete={
        ownerData.owner && actions.serviceIssueCategoryIssueCategory_FormOwnerDelete
          ? async () => actions.serviceIssueCategoryIssueCategory_FormOwnerDelete!(ownerData.owner!)
          : undefined
      }
      onSet={
        actions.serviceIssueCategoryIssueCategory_FormOwnerSetOpenSelector
          ? async () => {
              await actions.serviceIssueCategoryIssueCategory_FormOwnerSetOpenSelector!();
            }
          : undefined
      }
      onUnset={
        ownerData.owner && actions.serviceIssueCategoryIssueCategory_FormOwnerUnset
          ? async () => actions.serviceIssueCategoryIssueCategory_FormOwnerUnset!(ownerData.owner!)
          : undefined
      }
    ></AggregationInput>
  );
}
