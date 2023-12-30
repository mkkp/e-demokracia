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
  ServiceIssue,
  ServiceIssueStored,
} from '~/services/data-api';
import { processQueryCustomizer } from '~/utilities';
export interface ServiceIssueIssue_View_EditCountyComponentActionDefinitions {
  countyOpenSetSelectorAction?: () => Promise<ServiceCountyStored | undefined>;
  countyUnsetAction?: (target: ServiceCountyStored) => Promise<void>;
  countyOpenPageAction?: (target: ServiceCountyStored) => Promise<void>;
  countyAutocompleteRangeAction?: (
    queryCustomizer: ServiceCountyQueryCustomizer,
  ) => Promise<Array<ServiceCountyStored>>;
  isCountyRequired?: (data: ServiceIssue | ServiceIssueStored, editMode?: boolean) => boolean;
  isCountyDisabled?: (data: ServiceIssue | ServiceIssueStored, editMode?: boolean, isLoading?: boolean) => boolean;
}

export interface ServiceIssueIssue_View_EditCountyComponentProps {
  ownerData: ServiceIssue | ServiceIssueStored;
  actions: ServiceIssueIssue_View_EditCountyComponentActionDefinitions;
  storeDiff: (attributeName: keyof ServiceIssue, value: any) => void;
  submit: () => Promise<void>;
  validationError?: string;
  disabled?: boolean;
  readOnly?: boolean;
  editMode?: boolean;
  isLoading?: boolean;
}

// XMIID: User/(esm/_pPQxkdvUEe2Bgcx6em3jZg)/TabularReferenceFieldRelationDefinedLink
// Name: county
export function ServiceIssueIssue_View_EditCountyComponent(props: ServiceIssueIssue_View_EditCountyComponentProps) {
  const { ownerData, actions, storeDiff, submit, validationError, disabled, readOnly, editMode, isLoading } = props;
  const { t } = useTranslation();

  return (
    <AggregationInput
      name="county"
      id="User/(esm/_pPQxkdvUEe2Bgcx6em3jZg)/TabularReferenceFieldRelationDefinedLink"
      label={t('service.Issue.Issue_View_Edit.county', { defaultValue: 'County' }) as string}
      labelList={[ownerData.county?.representation?.toString() ?? '']}
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
      onView={
        ownerData.county && actions.countyOpenPageAction
          ? async () => {
              await actions.countyOpenPageAction!(ownerData.county!);
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
