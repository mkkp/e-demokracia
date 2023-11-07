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
  ServiceCreateIssueInput,
  ServiceCreateIssueInputStored,
} from '~/services/data-api';
export interface ServiceCreateIssueInputCreateIssueInput_FormCityComponentActionDefinitions {
  serviceCreateIssueInputCreateIssueInput_FormIssueCityCreate?: () => Promise<void>;
  serviceCreateIssueInputCreateIssueInput_FormIssueCityDelete?: (target: ServiceCityStored) => Promise<void>;
  serviceCreateIssueInputCreateIssueInput_FormIssueCitySetOpenSelector?: () => Promise<void>;
  serviceCreateIssueInputCreateIssueInput_FormIssueCityUnset?: (target: ServiceCityStored) => Promise<void>;
  serviceCreateIssueInputCreateIssueInput_FormIssueCityView?: (target: ServiceCityStored) => Promise<void>;
  serviceCreateIssueInputCreateIssueInput_FormIssueCityAutocomplete?: (
    queryCustomizer: ServiceCityQueryCustomizer,
  ) => Promise<Array<ServiceCityStored>>;
}

export interface ServiceCreateIssueInputCreateIssueInput_FormCityComponentProps {
  ownerData: ServiceCreateIssueInput | ServiceCreateIssueInputStored;
  actions: ServiceCreateIssueInputCreateIssueInput_FormCityComponentActionDefinitions;
  storeDiff: (attributeName: keyof ServiceCreateIssueInput, value: any) => void;
  validationError?: string;
  disabled?: boolean;
  editMode?: boolean;
}

// XMIID: User/(esm/_TXiwANvXEe2Bgcx6em3jZg)/TabularReferenceFieldRelationDefinedLink
// Name: city
export function ServiceCreateIssueInputCreateIssueInput_FormCityComponent(
  props: ServiceCreateIssueInputCreateIssueInput_FormCityComponentProps,
) {
  const { ownerData, actions, storeDiff, validationError, disabled, editMode } = props;
  const { t } = useTranslation();

  return (
    <AggregationInput
      name="city"
      id="User/(esm/_TXiwANvXEe2Bgcx6em3jZg)/TabularReferenceFieldRelationDefinedLink"
      label={
        t(
          'service.CreateIssueInput.CreateIssueInput.Form.city.issue.CreateIssueInput_Form.service::CreateIssueInput::CreateIssueInput_Form',
          { defaultValue: 'City' },
        ) as string
      }
      labelList={[
        ownerData.city?.representation?.toString() ?? '',
        ownerData.city?.name?.toString() ?? '',
        ownerData.city?.county?.toString() ?? '',
      ]}
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
        actions.serviceCreateIssueInputCreateIssueInput_FormIssueCityAutocomplete
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
              return await actions.serviceCreateIssueInputCreateIssueInput_FormIssueCityAutocomplete!(
                processQueryCustomizer(queryCustomizer),
              );
            }
          : undefined
      }
      onView={
        ownerData.city && actions.serviceCreateIssueInputCreateIssueInput_FormIssueCityView
          ? async () => {
              await actions.serviceCreateIssueInputCreateIssueInput_FormIssueCityView!(ownerData.city!);
            }
          : undefined
      }
      onCreate={
        actions.serviceCreateIssueInputCreateIssueInput_FormIssueCityCreate
          ? async () => {
              await actions.serviceCreateIssueInputCreateIssueInput_FormIssueCityCreate!();
            }
          : undefined
      }
      onDelete={
        ownerData.city && actions.serviceCreateIssueInputCreateIssueInput_FormIssueCityDelete
          ? async () => actions.serviceCreateIssueInputCreateIssueInput_FormIssueCityDelete!(ownerData.city!)
          : undefined
      }
      onSet={
        actions.serviceCreateIssueInputCreateIssueInput_FormIssueCitySetOpenSelector
          ? async () => {
              await actions.serviceCreateIssueInputCreateIssueInput_FormIssueCitySetOpenSelector!();
            }
          : undefined
      }
      onUnset={
        ownerData.city && actions.serviceCreateIssueInputCreateIssueInput_FormIssueCityUnset
          ? async () => actions.serviceCreateIssueInputCreateIssueInput_FormIssueCityUnset!(ownerData.city!)
          : undefined
      }
    ></AggregationInput>
  );
}
