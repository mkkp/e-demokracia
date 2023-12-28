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
  ServiceDistrict,
  ServiceDistrictQueryCustomizer,
  ServiceDistrictStored,
  ServiceIssue,
  ServiceIssueStored,
} from '~/services/data-api';
import { processQueryCustomizer } from '~/utilities';
export interface ServiceIssueIssue_View_EditDistrictComponentActionDefinitions {
  districtOpenSetSelectorAction?: () => Promise<ServiceDistrictStored | undefined>;
  districtUnsetAction?: (target: ServiceDistrictStored) => Promise<void>;
  districtOpenPageAction?: (target: ServiceDistrictStored) => Promise<void>;
  districtAutocompleteRangeAction?: (
    queryCustomizer: ServiceDistrictQueryCustomizer,
  ) => Promise<Array<ServiceDistrictStored>>;
  isDistrictRequired?: (data: ServiceIssue | ServiceIssueStored, editMode?: boolean) => boolean;
  isDistrictDisabled?: (data: ServiceIssue | ServiceIssueStored, editMode?: boolean, isLoading?: boolean) => boolean;
}

export interface ServiceIssueIssue_View_EditDistrictComponentProps {
  ownerData: ServiceIssue | ServiceIssueStored;
  actions: ServiceIssueIssue_View_EditDistrictComponentActionDefinitions;
  storeDiff: (attributeName: keyof ServiceIssue, value: any) => void;
  submit: () => Promise<void>;
  validationError?: string;
  disabled?: boolean;
  readOnly?: boolean;
  editMode?: boolean;
  isLoading?: boolean;
}

// XMIID: User/(esm/_pPRYodvUEe2Bgcx6em3jZg)/TabularReferenceFieldRelationDefinedLink
// Name: district
export function ServiceIssueIssue_View_EditDistrictComponent(props: ServiceIssueIssue_View_EditDistrictComponentProps) {
  const { ownerData, actions, storeDiff, submit, validationError, disabled, readOnly, editMode, isLoading } = props;
  const { t } = useTranslation();

  return (
    <AggregationInput
      name="district"
      id="User/(esm/_pPRYodvUEe2Bgcx6em3jZg)/TabularReferenceFieldRelationDefinedLink"
      label={t('service.Issue.Issue_View_Edit.district', { defaultValue: 'District' }) as string}
      labelList={[ownerData.district?.representation?.toString() ?? '']}
      required={actions?.isDistrictRequired ? actions.isDistrictRequired(ownerData, editMode) : false}
      ownerData={ownerData}
      error={!!validationError}
      helperText={validationError}
      icon={<MdiIcon path="home-city" />}
      disabled={actions?.isDistrictDisabled ? actions.isDistrictDisabled(ownerData, editMode, isLoading) : disabled}
      readOnly={readOnly}
      editMode={editMode}
      autoCompleteAttribute={'representation'}
      onAutoCompleteSelect={(district) => {
        storeDiff('district', district);
      }}
      onAutoCompleteSearch={
        actions.districtAutocompleteRangeAction
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
              return await actions.districtAutocompleteRangeAction!(processQueryCustomizer(queryCustomizer));
            }
          : undefined
      }
      onView={
        ownerData.district && actions.districtOpenPageAction
          ? async () => {
              await actions.districtOpenPageAction!(ownerData.district!);
            }
          : undefined
      }
      onSet={
        actions.districtOpenSetSelectorAction
          ? async () => {
              const district = await actions.districtOpenSetSelectorAction!();
            }
          : undefined
      }
      onUnset={
        ownerData.district && actions.districtUnsetAction
          ? async () => actions.districtUnsetAction!(ownerData.district!)
          : undefined
      }
    />
  );
}
