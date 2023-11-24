//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getLinksForPageContainers(#application)
// Path expression: 'src/containers/'+#containerPath(#self.pageContainer)+'/components/'+#linkComponentName(#self)+'.tsx'
// Template name: actor/src/containers/components/link.tsx
// Template file: actor/src/containers/components/link.tsx.hbs

import { useTranslation } from 'react-i18next';
import IconButton from '@mui/material/IconButton';
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
  cityOpenSetSelectorAction?: () => Promise<void>;
  cityAutocompleteRangeAction?: (queryCustomizer: ServiceCityQueryCustomizer) => Promise<Array<ServiceCityStored>>;
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
      label={t('service.CreateIssueInput.CreateIssueInput_Form.city', { defaultValue: 'City' }) as string}
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
        actions.cityAutocompleteRangeAction
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
              return await actions.cityAutocompleteRangeAction!(processQueryCustomizer(queryCustomizer));
            }
          : undefined
      }
      onSet={
        actions.cityOpenSetSelectorAction
          ? async () => {
              await actions.cityOpenSetSelectorAction!();
            }
          : undefined
      }
    />
  );
}
