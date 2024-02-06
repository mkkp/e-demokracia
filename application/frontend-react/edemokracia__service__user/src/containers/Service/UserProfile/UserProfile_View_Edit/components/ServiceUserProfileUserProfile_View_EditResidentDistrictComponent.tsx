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
  ServiceUserProfile,
  ServiceUserProfileStored,
} from '~/services/data-api';
import { processQueryCustomizer } from '~/utilities';
export interface ServiceUserProfileUserProfile_View_EditResidentDistrictComponentActionDefinitions {
  residentDistrictOpenSetSelectorAction?: () => Promise<ServiceDistrictStored | undefined>;
  residentDistrictUnsetAction?: (target: ServiceDistrictStored) => Promise<void>;
  residentDistrictOpenPageAction?: (target: ServiceDistrictStored, isDraft?: boolean) => Promise<void>;
  residentDistrictAutocompleteRangeAction?: (
    queryCustomizer: ServiceDistrictQueryCustomizer,
  ) => Promise<Array<ServiceDistrictStored>>;
  isResidentDistrictRequired?: (data: ServiceUserProfile | ServiceUserProfileStored, editMode?: boolean) => boolean;
  isResidentDistrictDisabled?: (
    data: ServiceUserProfile | ServiceUserProfileStored,
    editMode?: boolean,
    isLoading?: boolean,
  ) => boolean;
}

export interface ServiceUserProfileUserProfile_View_EditResidentDistrictComponentProps {
  ownerData: ServiceUserProfile | ServiceUserProfileStored;
  actions: ServiceUserProfileUserProfile_View_EditResidentDistrictComponentActionDefinitions;
  storeDiff: (attributeName: keyof ServiceUserProfile, value: any) => void;
  submit: () => Promise<void>;
  validationError?: string;
  disabled?: boolean;
  readOnly?: boolean;
  editMode?: boolean;
  isLoading?: boolean;
  isDraft?: boolean;
}

// XMIID: User/(esm/_fsW_plvTEe6jm_SkPSYEYw)/TabularReferenceFieldRelationDefinedLink
// Name: residentDistrict
export function ServiceUserProfileUserProfile_View_EditResidentDistrictComponent(
  props: ServiceUserProfileUserProfile_View_EditResidentDistrictComponentProps,
) {
  const { ownerData, actions, storeDiff, submit, validationError, disabled, readOnly, editMode, isLoading, isDraft } =
    props;
  const { t } = useTranslation();

  return (
    <AggregationInput
      name="residentDistrict"
      id="User/(esm/_fsW_plvTEe6jm_SkPSYEYw)/TabularReferenceFieldRelationDefinedLink"
      label={
        t('service.UserProfile.UserProfile_View_Edit.residentDistrict', { defaultValue: 'Resident district' }) as string
      }
      labelList={[ownerData.residentDistrict?.representation?.toString() ?? '']}
      required={actions?.isResidentDistrictRequired ? actions.isResidentDistrictRequired(ownerData, editMode) : false}
      ownerData={ownerData}
      error={!!validationError}
      helperText={validationError}
      icon={<MdiIcon path="home-city" />}
      disabled={
        actions?.isResidentDistrictDisabled
          ? actions.isResidentDistrictDisabled(ownerData, editMode, isLoading)
          : disabled
      }
      readOnly={readOnly}
      editMode={editMode}
      isInlineCreatable={false && !isDraft}
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
              await actions.residentDistrictOpenPageAction!(ownerData.residentDistrict!, false);
            }
          : undefined
      }
      onSet={
        actions.residentDistrictOpenSetSelectorAction
          ? async () => {
              const residentDistrict = await actions.residentDistrictOpenSetSelectorAction!();
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
