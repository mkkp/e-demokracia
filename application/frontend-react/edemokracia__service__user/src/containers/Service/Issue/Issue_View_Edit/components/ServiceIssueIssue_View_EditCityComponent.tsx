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
  ServiceIssue,
  ServiceIssueStored,
} from '~/services/data-api';
import { processQueryCustomizer } from '~/utilities';
export interface ServiceIssueIssue_View_EditCityComponentActionDefinitions {
  cityOpenSetSelectorAction?: () => Promise<ServiceCityStored | undefined>;
  cityUnsetAction?: (target: ServiceCityStored) => Promise<void>;
  cityOpenPageAction?: (target: ServiceCityStored, isDraft?: boolean) => Promise<void>;
  cityAutocompleteRangeAction?: (queryCustomizer: ServiceCityQueryCustomizer) => Promise<Array<ServiceCityStored>>;
  isCityRequired?: (data: ServiceIssue | ServiceIssueStored, editMode?: boolean) => boolean;
  isCityDisabled?: (data: ServiceIssue | ServiceIssueStored, editMode?: boolean, isLoading?: boolean) => boolean;
}

export interface ServiceIssueIssue_View_EditCityComponentProps {
  ownerData: ServiceIssue | ServiceIssueStored;
  actions: ServiceIssueIssue_View_EditCityComponentActionDefinitions;
  storeDiff: (attributeName: keyof ServiceIssue, value: any) => void;
  submit: () => Promise<void>;
  validationError?: string;
  disabled?: boolean;
  readOnly?: boolean;
  editMode?: boolean;
  isLoading?: boolean;
  isDraft?: boolean;
}

// XMIID: User/(esm/_pPQKgNvUEe2Bgcx6em3jZg)/TabularReferenceFieldRelationDefinedLink
// Name: city
export function ServiceIssueIssue_View_EditCityComponent(props: ServiceIssueIssue_View_EditCityComponentProps) {
  const { ownerData, actions, storeDiff, submit, validationError, disabled, readOnly, editMode, isLoading, isDraft } =
    props;
  const { t } = useTranslation();

  return (
    <AggregationInput
      name="city"
      id="User/(esm/_pPQKgNvUEe2Bgcx6em3jZg)/TabularReferenceFieldRelationDefinedLink"
      label={t('service.Issue.Issue_View_Edit.city', { defaultValue: 'City' }) as string}
      labelList={[ownerData.city?.representation?.toString() ?? '']}
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
      onView={
        ownerData.city && actions.cityOpenPageAction
          ? async () => {
              await actions.cityOpenPageAction!(ownerData.city!, false);
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
