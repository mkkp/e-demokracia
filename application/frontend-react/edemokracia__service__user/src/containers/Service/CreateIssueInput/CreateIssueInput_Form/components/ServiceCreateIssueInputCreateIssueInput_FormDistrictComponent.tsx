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
  ServiceDistrict,
  ServiceDistrictQueryCustomizer,
  ServiceDistrictStored,
} from '~/services/data-api';
export interface ServiceCreateIssueInputCreateIssueInput_FormDistrictComponentActionDefinitions {
  serviceCreateIssueInputCreateIssueInput_FormIssueDistrictCreate?: () => Promise<void>;
  serviceCreateIssueInputCreateIssueInput_FormIssueDistrictDelete?: (target: ServiceDistrictStored) => Promise<void>;
  serviceCreateIssueInputCreateIssueInput_FormIssueDistrictSetOpenSelector?: () => Promise<void>;
  serviceCreateIssueInputCreateIssueInput_FormIssueDistrictUnset?: (target: ServiceDistrictStored) => Promise<void>;
  serviceCreateIssueInputCreateIssueInput_FormIssueDistrictView?: (target: ServiceDistrictStored) => Promise<void>;
  serviceCreateIssueInputCreateIssueInput_FormIssueDistrictAutocomplete?: (
    queryCustomizer: ServiceDistrictQueryCustomizer,
  ) => Promise<Array<ServiceDistrictStored>>;
}

export interface ServiceCreateIssueInputCreateIssueInput_FormDistrictComponentProps {
  ownerData: ServiceCreateIssueInput | ServiceCreateIssueInputStored;
  actions: ServiceCreateIssueInputCreateIssueInput_FormDistrictComponentActionDefinitions;
  storeDiff: (attributeName: keyof ServiceCreateIssueInput, value: any) => void;
  validationError?: string;
  disabled?: boolean;
  editMode?: boolean;
}

// XMIID: User/(esm/_TXklMdvXEe2Bgcx6em3jZg)/TabularReferenceFieldRelationDefinedLink
// Name: district
export function ServiceCreateIssueInputCreateIssueInput_FormDistrictComponent(
  props: ServiceCreateIssueInputCreateIssueInput_FormDistrictComponentProps,
) {
  const { ownerData, actions, storeDiff, validationError, disabled, editMode } = props;
  const { t } = useTranslation();

  return (
    <AggregationInput
      name="district"
      id="User/(esm/_TXklMdvXEe2Bgcx6em3jZg)/TabularReferenceFieldRelationDefinedLink"
      label={
        t(
          'service.CreateIssueInput.CreateIssueInput.Form.district.issue.CreateIssueInput_Form.service::CreateIssueInput::CreateIssueInput_Form',
          { defaultValue: 'District' },
        ) as string
      }
      labelList={[
        ownerData.district?.representation?.toString() ?? '',
        ownerData.district?.name?.toString() ?? '',
        ownerData.district?.county?.toString() ?? '',
        ownerData.district?.city?.toString() ?? '',
      ]}
      ownerData={ownerData}
      error={!!validationError}
      helperText={validationError}
      icon={<MdiIcon path="home-city" />}
      disabled={disabled}
      editMode={editMode}
      autoCompleteAttribute={'representation'}
      onAutoCompleteSelect={(district) => {
        storeDiff('district', district);
      }}
      onAutoCompleteSearch={
        actions.serviceCreateIssueInputCreateIssueInput_FormIssueDistrictAutocomplete
          ? async (searchText: string) => {
              const queryCustomizer: ServiceDistrictQueryCustomizer = {
                ...(searchText?.length
                  ? {
                      representation: [{ operator: StringOperation.like, value: searchText }],
                    }
                  : {}),
                _mask: '{representation}',
                _orderBy: [{ attribute: 'representation', descending: false }],
                _seek: { limit: 10 },
              };
              return await actions.serviceCreateIssueInputCreateIssueInput_FormIssueDistrictAutocomplete!(
                processQueryCustomizer(queryCustomizer),
              );
            }
          : undefined
      }
      onView={
        ownerData.district && actions.serviceCreateIssueInputCreateIssueInput_FormIssueDistrictView
          ? async () => {
              await actions.serviceCreateIssueInputCreateIssueInput_FormIssueDistrictView!(ownerData.district!);
            }
          : undefined
      }
      onCreate={
        actions.serviceCreateIssueInputCreateIssueInput_FormIssueDistrictCreate
          ? async () => {
              await actions.serviceCreateIssueInputCreateIssueInput_FormIssueDistrictCreate!();
            }
          : undefined
      }
      onDelete={
        ownerData.district && actions.serviceCreateIssueInputCreateIssueInput_FormIssueDistrictDelete
          ? async () => actions.serviceCreateIssueInputCreateIssueInput_FormIssueDistrictDelete!(ownerData.district!)
          : undefined
      }
      onSet={
        actions.serviceCreateIssueInputCreateIssueInput_FormIssueDistrictSetOpenSelector
          ? async () => {
              await actions.serviceCreateIssueInputCreateIssueInput_FormIssueDistrictSetOpenSelector!();
            }
          : undefined
      }
      onUnset={
        ownerData.district && actions.serviceCreateIssueInputCreateIssueInput_FormIssueDistrictUnset
          ? async () => actions.serviceCreateIssueInputCreateIssueInput_FormIssueDistrictUnset!(ownerData.district!)
          : undefined
      }
    ></AggregationInput>
  );
}
