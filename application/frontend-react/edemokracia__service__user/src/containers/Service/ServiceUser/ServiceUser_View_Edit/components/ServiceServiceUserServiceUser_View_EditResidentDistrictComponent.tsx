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
  ServiceDistrict,
  ServiceDistrictQueryCustomizer,
  ServiceDistrictStored,
  ServiceServiceUser,
  ServiceServiceUserStored,
} from '~/services/data-api';
export interface ServiceServiceUserServiceUser_View_EditResidentDistrictComponentActionDefinitions {
  residentDistrictOpenSetSelectorAction?: () => Promise<void>;
  residentDistrictUnsetAction?: (target: ServiceDistrictStored) => Promise<void>;
  residentDistrictOpenPageAction?: (target: ServiceDistrictStored) => Promise<void>;
  residentDistrictAutocompleteRangeAction?: (
    queryCustomizer: ServiceDistrictQueryCustomizer,
  ) => Promise<Array<ServiceDistrictStored>>;
}

export interface ServiceServiceUserServiceUser_View_EditResidentDistrictComponentProps {
  ownerData: ServiceServiceUser | ServiceServiceUserStored;
  actions: ServiceServiceUserServiceUser_View_EditResidentDistrictComponentActionDefinitions;
  storeDiff: (attributeName: keyof ServiceServiceUser, value: any) => void;
  validationError?: string;
  disabled?: boolean;
  editMode?: boolean;
}

// XMIID: User/(esm/_I_CEgIXqEe2kLcMqsIbMgQ)/TabularReferenceFieldRelationDefinedLink
// Name: residentDistrict
export function ServiceServiceUserServiceUser_View_EditResidentDistrictComponent(
  props: ServiceServiceUserServiceUser_View_EditResidentDistrictComponentProps,
) {
  const { ownerData, actions, storeDiff, validationError, disabled, editMode } = props;
  const { t } = useTranslation();

  return (
    <AggregationInput
      name="residentDistrict"
      id="User/(esm/_I_CEgIXqEe2kLcMqsIbMgQ)/TabularReferenceFieldRelationDefinedLink"
      label={
        t('service.ServiceUser.ServiceUser_View_Edit.residentDistrict', { defaultValue: 'Resident district' }) as string
      }
      labelList={[ownerData.residentDistrict?.representation?.toString() ?? '']}
      ownerData={ownerData}
      error={!!validationError}
      helperText={validationError}
      icon={<MdiIcon path="home-city" />}
      disabled={disabled}
      editMode={editMode}
      autoCompleteAttribute={'representation'}
      onAutoCompleteSelect={(residentDistrict) => {
        storeDiff('residentDistrict', residentDistrict);
      }}
      onAutoCompleteSearch={
        actions.residentDistrictAutocompleteRangeAction
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
              return await actions.residentDistrictAutocompleteRangeAction!(processQueryCustomizer(queryCustomizer));
            }
          : undefined
      }
      onView={
        ownerData.residentDistrict && actions.residentDistrictOpenPageAction
          ? async () => {
              await actions.residentDistrictOpenPageAction!(ownerData.residentDistrict!);
            }
          : undefined
      }
      onSet={
        actions.residentDistrictOpenSetSelectorAction
          ? async () => {
              await actions.residentDistrictOpenSetSelectorAction!();
            }
          : undefined
      }
      onUnset={
        ownerData.residentDistrict && actions.residentDistrictUnsetAction
          ? async () => actions.residentDistrictUnsetAction!(ownerData.residentDistrict!)
          : undefined
      }
    />
  );
}
