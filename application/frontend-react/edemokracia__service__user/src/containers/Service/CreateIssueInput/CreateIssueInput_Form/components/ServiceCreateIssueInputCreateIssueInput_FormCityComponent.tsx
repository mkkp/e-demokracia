//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getLinksForPageContainers(#application)
// Path expression: 'src/containers/'+#containerPath(#self.pageContainer)+'/components/'+#linkComponentName(#self)+'.tsx'
// Template name: actor/src/containers/components/link.tsx
// Template file: actor/src/containers/components/link.tsx.hbs

import { useTranslation } from 'react-i18next';
import { MdiIcon } from '~/components';
import { AggregationInput } from '~/components/widgets';
import { StringOperation } from '~/services/data-api';
import type {
  ServiceCity,
  ServiceCityQueryCustomizer,
  ServiceCityStored,
  ServiceCreateIssueInput,
  ServiceCreateIssueInputStored,
} from '~/services/data-api';
import { processQueryCustomizer } from '~/utilities';
export interface ServiceCreateIssueInputCreateIssueInput_FormCityComponentActionDefinitions {
  cityOpenSetSelectorAction?: () => Promise<ServiceCityStored | undefined>;
  cityUnsetAction?: (target: ServiceCityStored) => Promise<void>;
  cityAutocompleteRangeAction?: (queryCustomizer: ServiceCityQueryCustomizer) => Promise<Array<ServiceCityStored>>;
  isCityRequired?: (data: ServiceCreateIssueInput | ServiceCreateIssueInputStored, editMode?: boolean) => boolean;
  isCityDisabled?: (
    data: ServiceCreateIssueInput | ServiceCreateIssueInputStored,
    editMode?: boolean,
    isLoading?: boolean,
  ) => boolean;
}

export interface ServiceCreateIssueInputCreateIssueInput_FormCityComponentProps {
  ownerData: ServiceCreateIssueInput | ServiceCreateIssueInputStored;
  actions: ServiceCreateIssueInputCreateIssueInput_FormCityComponentActionDefinitions;
  storeDiff: (attributeName: keyof ServiceCreateIssueInput, value: any) => void;
  submit: () => Promise<void>;
  validationError?: string;
  disabled?: boolean;
  readOnly?: boolean;
  editMode?: boolean;
  isLoading?: boolean;
  isDraft?: boolean;
}

// XMIID: User/(esm/_TXiwANvXEe2Bgcx6em3jZg)/TabularReferenceFieldRelationDefinedLink
// Name: city
export function ServiceCreateIssueInputCreateIssueInput_FormCityComponent(
  props: ServiceCreateIssueInputCreateIssueInput_FormCityComponentProps,
) {
  const { ownerData, actions, storeDiff, submit, validationError, disabled, readOnly, editMode, isLoading, isDraft } =
    props;
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
      required={actions?.isCityRequired ? actions.isCityRequired(ownerData, editMode) : false}
      ownerData={ownerData}
      error={!!validationError}
      helperText={validationError}
      icon={<MdiIcon path="city" />}
      disabled={actions?.isCityDisabled ? actions.isCityDisabled(ownerData, editMode, isLoading) : disabled}
      readOnly={readOnly}
      editMode={editMode}
      isInlineCreatable={false && !isDraft}
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
              const city = await actions.cityOpenSetSelectorAction!();
            }
          : undefined
      }
      onUnset={
        ownerData.city && actions.cityUnsetAction ? async () => actions.cityUnsetAction!(ownerData.city!) : undefined
      }
    />
  );
}
