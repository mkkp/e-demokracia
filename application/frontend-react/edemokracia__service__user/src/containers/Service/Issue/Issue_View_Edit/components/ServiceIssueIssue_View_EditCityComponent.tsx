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
  ServiceCity,
  ServiceCityQueryCustomizer,
  ServiceCityStored,
  ServiceIssue,
  ServiceIssueStored,
} from '~/services/data-api';
export interface ServiceIssueIssue_View_EditCityComponentActionDefinitions {
  serviceIssueIssue_View_EditOtherAreaCityCreate?: () => Promise<void>;
  serviceIssueIssue_View_EditOtherAreaCityDelete?: (target: ServiceCityStored) => Promise<void>;
  serviceIssueIssue_View_EditOtherAreaCitySetOpenSelector?: () => Promise<void>;
  serviceIssueIssue_View_EditOtherAreaCityUnset?: (target: ServiceCityStored) => Promise<void>;
  serviceIssueIssue_View_EditOtherAreaCityView?: (target: ServiceCityStored) => Promise<void>;
  serviceIssueIssue_View_EditOtherAreaCityAutocomplete?: (
    queryCustomizer: ServiceCityQueryCustomizer,
  ) => Promise<Array<ServiceCityStored>>;
}

export interface ServiceIssueIssue_View_EditCityComponentProps {
  ownerData: ServiceIssue | ServiceIssueStored;
  actions: ServiceIssueIssue_View_EditCityComponentActionDefinitions;
  storeDiff: (attributeName: keyof ServiceIssue, value: any) => void;
  validationError?: string;
  disabled?: boolean;
  editMode?: boolean;
}

// XMIID: User/(esm/_pPQKgNvUEe2Bgcx6em3jZg)/TabularReferenceFieldRelationDefinedLink
// Name: city
export function ServiceIssueIssue_View_EditCityComponent(props: ServiceIssueIssue_View_EditCityComponentProps) {
  const { ownerData, actions, storeDiff, validationError, disabled, editMode } = props;
  const { t } = useTranslation();

  return (
    <AggregationInput
      name="city"
      id="User/(esm/_pPQKgNvUEe2Bgcx6em3jZg)/TabularReferenceFieldRelationDefinedLink"
      label={t('service.Issue.Issue.View.Edit.city.area', { defaultValue: 'City' }) as string}
      labelList={[ownerData.city?.representation?.toString() ?? '']}
      ownerData={ownerData}
      error={!!validationError}
      helperText={validationError}
      icon={<MdiIcon path="city" />}
      disabled={disabled}
      editMode={editMode}
      autoCompleteAttribute={'representation'}
      onAutoCompleteSelect={(city) => {
        storeDiff('city', city);
      }}
      onAutoCompleteSearch={
        actions.serviceIssueIssue_View_EditOtherAreaCityAutocomplete
          ? async (searchText: string) => {
              const queryCustomizer: ServiceCityQueryCustomizer = {
                ...(searchText?.length
                  ? {
                      representation: [{ operator: StringOperation.like, value: searchText }],
                    }
                  : {}),
                _mask: '{representation}',
                _orderBy: [{ attribute: 'representation', descending: false }],
                _seek: { limit: 10 },
              };
              return await actions.serviceIssueIssue_View_EditOtherAreaCityAutocomplete!(
                processQueryCustomizer(queryCustomizer),
              );
            }
          : undefined
      }
      onView={
        ownerData.city && actions.serviceIssueIssue_View_EditOtherAreaCityView
          ? async () => {
              await actions.serviceIssueIssue_View_EditOtherAreaCityView!(ownerData.city!);
            }
          : undefined
      }
      onCreate={
        actions.serviceIssueIssue_View_EditOtherAreaCityCreate
          ? async () => {
              await actions.serviceIssueIssue_View_EditOtherAreaCityCreate!();
            }
          : undefined
      }
      onDelete={
        ownerData.city && actions.serviceIssueIssue_View_EditOtherAreaCityDelete
          ? async () => actions.serviceIssueIssue_View_EditOtherAreaCityDelete!(ownerData.city!)
          : undefined
      }
      onSet={
        actions.serviceIssueIssue_View_EditOtherAreaCitySetOpenSelector
          ? async () => {
              await actions.serviceIssueIssue_View_EditOtherAreaCitySetOpenSelector!();
            }
          : undefined
      }
      onUnset={
        ownerData.city && actions.serviceIssueIssue_View_EditOtherAreaCityUnset
          ? async () => actions.serviceIssueIssue_View_EditOtherAreaCityUnset!(ownerData.city!)
          : undefined
      }
    ></AggregationInput>
  );
}
