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
  ServiceDistrict,
  ServiceDistrictQueryCustomizer,
  ServiceDistrictStored,
  ServiceIssue,
  ServiceIssueStored,
} from '~/services/data-api';
export interface ServiceIssueIssue_View_EditDistrictComponentActionDefinitions {
  serviceIssueIssue_View_EditOtherAreaDistrictCreate?: () => Promise<void>;
  serviceIssueIssue_View_EditOtherAreaDistrictDelete?: (target: ServiceDistrictStored) => Promise<void>;
  serviceIssueIssue_View_EditOtherAreaDistrictSetOpenSelector?: () => Promise<void>;
  serviceIssueIssue_View_EditOtherAreaDistrictUnset?: (target: ServiceDistrictStored) => Promise<void>;
  serviceIssueIssue_View_EditOtherAreaDistrictView?: (target: ServiceDistrictStored) => Promise<void>;
  serviceIssueIssue_View_EditOtherAreaDistrictAutocomplete?: (
    queryCustomizer: ServiceDistrictQueryCustomizer,
  ) => Promise<Array<ServiceDistrictStored>>;
}

export interface ServiceIssueIssue_View_EditDistrictComponentProps {
  ownerData: ServiceIssue | ServiceIssueStored;
  actions: ServiceIssueIssue_View_EditDistrictComponentActionDefinitions;
  storeDiff: (attributeName: keyof ServiceIssue, value: any) => void;
  validationError?: string;
  disabled?: boolean;
  editMode?: boolean;
}

// XMIID: User/(esm/_pPRYodvUEe2Bgcx6em3jZg)/TabularReferenceFieldRelationDefinedLink
// Name: district
export function ServiceIssueIssue_View_EditDistrictComponent(props: ServiceIssueIssue_View_EditDistrictComponentProps) {
  const { ownerData, actions, storeDiff, validationError, disabled, editMode } = props;
  const { t } = useTranslation();

  return (
    <AggregationInput
      name="district"
      id="User/(esm/_pPRYodvUEe2Bgcx6em3jZg)/TabularReferenceFieldRelationDefinedLink"
      label={t('service.Issue.Issue.View.Edit.district.area', { defaultValue: 'District' }) as string}
      labelList={[ownerData.district?.representation?.toString() ?? '']}
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
        actions.serviceIssueIssue_View_EditOtherAreaDistrictAutocomplete
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
              return await actions.serviceIssueIssue_View_EditOtherAreaDistrictAutocomplete!(
                processQueryCustomizer(queryCustomizer),
              );
            }
          : undefined
      }
      onView={
        ownerData.district && actions.serviceIssueIssue_View_EditOtherAreaDistrictView
          ? async () => {
              await actions.serviceIssueIssue_View_EditOtherAreaDistrictView!(ownerData.district!);
            }
          : undefined
      }
      onCreate={
        actions.serviceIssueIssue_View_EditOtherAreaDistrictCreate
          ? async () => {
              await actions.serviceIssueIssue_View_EditOtherAreaDistrictCreate!();
            }
          : undefined
      }
      onDelete={
        ownerData.district && actions.serviceIssueIssue_View_EditOtherAreaDistrictDelete
          ? async () => actions.serviceIssueIssue_View_EditOtherAreaDistrictDelete!(ownerData.district!)
          : undefined
      }
      onSet={
        actions.serviceIssueIssue_View_EditOtherAreaDistrictSetOpenSelector
          ? async () => {
              await actions.serviceIssueIssue_View_EditOtherAreaDistrictSetOpenSelector!();
            }
          : undefined
      }
      onUnset={
        ownerData.district && actions.serviceIssueIssue_View_EditOtherAreaDistrictUnset
          ? async () => actions.serviceIssueIssue_View_EditOtherAreaDistrictUnset!(ownerData.district!)
          : undefined
      }
    ></AggregationInput>
  );
}
