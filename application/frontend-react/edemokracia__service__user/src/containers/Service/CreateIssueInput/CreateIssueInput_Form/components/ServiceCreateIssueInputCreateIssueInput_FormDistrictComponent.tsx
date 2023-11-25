//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getLinksForPageContainers(#application)
// Path expression: 'src/containers/'+#containerPath(#self.pageContainer)+'/components/'+#linkComponentName(#self)+'.tsx'
// Template name: actor/src/containers/components/link.tsx
// Template file: actor/src/containers/components/link.tsx.hbs

import { useTranslation } from 'react-i18next';
import { processQueryCustomizer } from '~/utilities';
import { MdiIcon } from '~/components';
import { AggregationInput } from '~/components/widgets';
import { StringOperation } from '~/services/data-api';
import type {
  ServiceCreateIssueInput,
  ServiceCreateIssueInputStored,
  ServiceDistrict,
  ServiceDistrictQueryCustomizer,
  ServiceDistrictStored,
} from '~/services/data-api';
export interface ServiceCreateIssueInputCreateIssueInput_FormDistrictComponentActionDefinitions {
  districtOpenSetSelectorAction?: () => Promise<void>;
  districtAutocompleteRangeAction?: (
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
      label={t('service.CreateIssueInput.CreateIssueInput_Form.district', { defaultValue: 'District' }) as string}
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
      onSet={
        actions.districtOpenSetSelectorAction
          ? async () => {
              await actions.districtOpenSetSelectorAction!();
            }
          : undefined
      }
    />
  );
}
