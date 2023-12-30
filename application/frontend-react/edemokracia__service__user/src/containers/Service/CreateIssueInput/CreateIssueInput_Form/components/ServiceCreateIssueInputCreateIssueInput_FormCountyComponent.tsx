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
  ServiceCounty,
  ServiceCountyQueryCustomizer,
  ServiceCountyStored,
  ServiceCreateIssueInput,
  ServiceCreateIssueInputStored,
} from '~/services/data-api';
import { processQueryCustomizer } from '~/utilities';
export interface ServiceCreateIssueInputCreateIssueInput_FormCountyComponentActionDefinitions {
  countyOpenSetSelectorAction?: () => Promise<ServiceCountyStored | undefined>;
  countyUnsetAction?: (target: ServiceCountyStored) => Promise<void>;
  countyAutocompleteRangeAction?: (
    queryCustomizer: ServiceCountyQueryCustomizer,
  ) => Promise<Array<ServiceCountyStored>>;
  isCountyRequired?: (data: ServiceCreateIssueInput | ServiceCreateIssueInputStored, editMode?: boolean) => boolean;
  isCountyDisabled?: (
    data: ServiceCreateIssueInput | ServiceCreateIssueInputStored,
    editMode?: boolean,
    isLoading?: boolean,
  ) => boolean;
}

export interface ServiceCreateIssueInputCreateIssueInput_FormCountyComponentProps {
  ownerData: ServiceCreateIssueInput | ServiceCreateIssueInputStored;
  actions: ServiceCreateIssueInputCreateIssueInput_FormCountyComponentActionDefinitions;
  storeDiff: (attributeName: keyof ServiceCreateIssueInput, value: any) => void;
  submit: () => Promise<void>;
  validationError?: string;
  disabled?: boolean;
  readOnly?: boolean;
  editMode?: boolean;
  isLoading?: boolean;
}

// XMIID: User/(esm/_TXj-IdvXEe2Bgcx6em3jZg)/TabularReferenceFieldRelationDefinedLink
// Name: county
export function ServiceCreateIssueInputCreateIssueInput_FormCountyComponent(
  props: ServiceCreateIssueInputCreateIssueInput_FormCountyComponentProps,
) {
  const { ownerData, actions, storeDiff, submit, validationError, disabled, readOnly, editMode, isLoading } = props;
  const { t } = useTranslation();

  return (
    <AggregationInput
      name="county"
      id="User/(esm/_TXj-IdvXEe2Bgcx6em3jZg)/TabularReferenceFieldRelationDefinedLink"
      label={t('service.CreateIssueInput.CreateIssueInput_Form.county', { defaultValue: 'County' }) as string}
      labelList={[ownerData.county?.representation?.toString() ?? '', ownerData.county?.name?.toString() ?? '']}
      required={actions?.isCountyRequired ? actions.isCountyRequired(ownerData, editMode) : false}
      ownerData={ownerData}
      error={!!validationError}
      helperText={validationError}
      icon={<MdiIcon path="castle" />}
      disabled={actions?.isCountyDisabled ? actions.isCountyDisabled(ownerData, editMode, isLoading) : disabled}
      readOnly={readOnly}
      editMode={editMode}
      autoCompleteAttribute={'representation'}
      onAutoCompleteSelect={(county) => {
        storeDiff('county', county);
      }}
      onAutoCompleteSearch={
        actions.countyAutocompleteRangeAction
          ? async (searchText: string) => {
              const queryCustomizer: ServiceCountyQueryCustomizer = {
                ...(searchText?.length
                  ? {
                      representation: [{ operator: StringOperation.like, value: searchText }],
                    }
                  : {}),
                _mask: '{representation}',
                _orderBy: [{ attribute: 'representation', descending: false }],
                _seek: { limit: 10 },
              };
              return await actions.countyAutocompleteRangeAction!(processQueryCustomizer(queryCustomizer));
            }
          : undefined
      }
      onSet={
        actions.countyOpenSetSelectorAction
          ? async () => {
              const county = await actions.countyOpenSetSelectorAction!();
            }
          : undefined
      }
      onUnset={
        ownerData.county && actions.countyUnsetAction
          ? async () => actions.countyUnsetAction!(ownerData.county!)
          : undefined
      }
    />
  );
}
