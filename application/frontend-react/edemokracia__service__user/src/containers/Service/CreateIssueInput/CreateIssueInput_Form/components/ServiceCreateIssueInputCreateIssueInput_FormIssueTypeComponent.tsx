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
  ServiceCreateIssueInput,
  ServiceCreateIssueInputStored,
  ServiceIssueType,
  ServiceIssueTypeQueryCustomizer,
  ServiceIssueTypeStored,
} from '~/services/data-api';
export interface ServiceCreateIssueInputCreateIssueInput_FormIssueTypeComponentActionDefinitions {
  serviceCreateIssueInputCreateIssueInput_FormIssueIssueTypeCreate?: () => Promise<void>;
  serviceCreateIssueInputCreateIssueInput_FormIssueIssueTypeDelete?: (target: ServiceIssueTypeStored) => Promise<void>;
  serviceCreateIssueInputCreateIssueInput_FormIssueIssueTypeSetOpenSelector?: () => Promise<void>;
  serviceCreateIssueInputCreateIssueInput_FormIssueIssueTypeUnset?: (target: ServiceIssueTypeStored) => Promise<void>;
  serviceCreateIssueInputCreateIssueInput_FormIssueIssueTypeView?: (target: ServiceIssueTypeStored) => Promise<void>;
  serviceCreateIssueInputCreateIssueInput_FormIssueIssueTypeAutocomplete?: (
    queryCustomizer: ServiceIssueTypeQueryCustomizer,
  ) => Promise<Array<ServiceIssueTypeStored>>;
}

export interface ServiceCreateIssueInputCreateIssueInput_FormIssueTypeComponentProps {
  ownerData: ServiceCreateIssueInput | ServiceCreateIssueInputStored;
  actions: ServiceCreateIssueInputCreateIssueInput_FormIssueTypeComponentActionDefinitions;
  storeDiff: (attributeName: keyof ServiceCreateIssueInput, value: any) => void;
  validationError?: string;
  disabled?: boolean;
  editMode?: boolean;
}

// XMIID: User/(esm/_WNovANu5Ee2Bgcx6em3jZg)/TabularReferenceFieldRelationDefinedLink
// Name: issueType
export function ServiceCreateIssueInputCreateIssueInput_FormIssueTypeComponent(
  props: ServiceCreateIssueInputCreateIssueInput_FormIssueTypeComponentProps,
) {
  const { ownerData, actions, storeDiff, validationError, disabled, editMode } = props;
  const { t } = useTranslation();

  return (
    <AggregationInput
      name="issueType"
      id="User/(esm/_WNovANu5Ee2Bgcx6em3jZg)/TabularReferenceFieldRelationDefinedLink"
      label={
        t(
          'service.CreateIssueInput.CreateIssueInput.Form.issueType.issue.CreateIssueInput_Form.service::CreateIssueInput::CreateIssueInput_Form',
          { defaultValue: 'Issue type' },
        ) as string
      }
      labelList={[
        ownerData.issueType?.representation?.toString() ?? '',
        ownerData.issueType?.title?.toString() ?? '',
        ownerData.issueType?.description?.toString() ?? '',
      ]}
      ownerData={ownerData}
      error={!!validationError}
      helperText={validationError}
      icon={<MdiIcon path="folder-open" />}
      disabled={disabled}
      editMode={editMode}
      autoCompleteAttribute={'representation'}
      onAutoCompleteSelect={(issueType) => {
        storeDiff('issueType', issueType);
      }}
      onAutoCompleteSearch={
        actions.serviceCreateIssueInputCreateIssueInput_FormIssueIssueTypeAutocomplete
          ? async (searchText: string) => {
              const queryCustomizer: ServiceIssueTypeQueryCustomizer = {
                ...(searchText?.length
                  ? {
                      representation: [{ operator: StringOperation.like, value: searchText }],
                    }
                  : {}),
                _mask: '{representation}',
                _orderBy: [{ attribute: 'representation', descending: false }],
                _seek: { limit: 10 },
              };
              return await actions.serviceCreateIssueInputCreateIssueInput_FormIssueIssueTypeAutocomplete!(
                processQueryCustomizer(queryCustomizer),
              );
            }
          : undefined
      }
      onView={
        ownerData.issueType && actions.serviceCreateIssueInputCreateIssueInput_FormIssueIssueTypeView
          ? async () => {
              await actions.serviceCreateIssueInputCreateIssueInput_FormIssueIssueTypeView!(ownerData.issueType!);
            }
          : undefined
      }
      onCreate={
        actions.serviceCreateIssueInputCreateIssueInput_FormIssueIssueTypeCreate
          ? async () => {
              await actions.serviceCreateIssueInputCreateIssueInput_FormIssueIssueTypeCreate!();
            }
          : undefined
      }
      onDelete={
        ownerData.issueType && actions.serviceCreateIssueInputCreateIssueInput_FormIssueIssueTypeDelete
          ? async () => actions.serviceCreateIssueInputCreateIssueInput_FormIssueIssueTypeDelete!(ownerData.issueType!)
          : undefined
      }
      onSet={
        actions.serviceCreateIssueInputCreateIssueInput_FormIssueIssueTypeSetOpenSelector
          ? async () => {
              await actions.serviceCreateIssueInputCreateIssueInput_FormIssueIssueTypeSetOpenSelector!();
            }
          : undefined
      }
      onUnset={
        ownerData.issueType && actions.serviceCreateIssueInputCreateIssueInput_FormIssueIssueTypeUnset
          ? async () => actions.serviceCreateIssueInputCreateIssueInput_FormIssueIssueTypeUnset!(ownerData.issueType!)
          : undefined
      }
    ></AggregationInput>
  );
}
