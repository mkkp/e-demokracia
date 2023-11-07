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
  ServiceDistrict,
  ServiceDistrictQueryCustomizer,
  ServiceDistrictStored,
  ServiceUserProfile,
  ServiceUserProfileStored,
} from '~/services/data-api';
export interface ServiceUserProfileUserProfile_View_EditResidentDistrictComponentActionDefinitions {
  serviceUserProfileUserProfile_View_EditAreasResidencyResidentDistrictCreate?: () => Promise<void>;
  serviceUserProfileUserProfile_View_EditAreasResidencyResidentDistrictDelete?: (
    target: ServiceDistrictStored,
  ) => Promise<void>;
  serviceUserProfileUserProfile_View_EditAreasResidencyResidentDistrictSetOpenSelector?: () => Promise<void>;
  serviceUserProfileUserProfile_View_EditAreasResidencyResidentDistrictUnset?: (
    target: ServiceDistrictStored,
  ) => Promise<void>;
  serviceUserProfileUserProfile_View_EditAreasResidencyResidentDistrictView?: (
    target: ServiceDistrictStored,
  ) => Promise<void>;
  serviceUserProfileUserProfile_View_EditAreasResidencyResidentDistrictAutocomplete?: (
    queryCustomizer: ServiceDistrictQueryCustomizer,
  ) => Promise<Array<ServiceDistrictStored>>;
}

export interface ServiceUserProfileUserProfile_View_EditResidentDistrictComponentProps {
  ownerData: ServiceUserProfile | ServiceUserProfileStored;
  actions: ServiceUserProfileUserProfile_View_EditResidentDistrictComponentActionDefinitions;
  storeDiff: (attributeName: keyof ServiceUserProfile, value: any) => void;
  validationError?: string;
  disabled?: boolean;
  editMode?: boolean;
}

// XMIID: User/(esm/_fsW_plvTEe6jm_SkPSYEYw)/TabularReferenceFieldRelationDefinedLink
// Name: residentDistrict
export function ServiceUserProfileUserProfile_View_EditResidentDistrictComponent(
  props: ServiceUserProfileUserProfile_View_EditResidentDistrictComponentProps,
) {
  const { ownerData, actions, storeDiff, validationError, disabled, editMode } = props;
  const { t } = useTranslation();

  return (
    <AggregationInput
      name="residentDistrict"
      id="User/(esm/_fsW_plvTEe6jm_SkPSYEYw)/TabularReferenceFieldRelationDefinedLink"
      label={
        t(
          'service.UserProfile.UserProfile.View.Edit.residentDistrict.Residency.Areas.Areas::LabelWrapper.UserProfile_View_Edit.service::UserProfile::UserProfile_View_Edit',
          { defaultValue: 'Resident district' },
        ) as string
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
        actions.serviceUserProfileUserProfile_View_EditAreasResidencyResidentDistrictAutocomplete
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
              return await actions.serviceUserProfileUserProfile_View_EditAreasResidencyResidentDistrictAutocomplete!(
                processQueryCustomizer(queryCustomizer),
              );
            }
          : undefined
      }
      onView={
        ownerData.residentDistrict && actions.serviceUserProfileUserProfile_View_EditAreasResidencyResidentDistrictView
          ? async () => {
              await actions.serviceUserProfileUserProfile_View_EditAreasResidencyResidentDistrictView!(
                ownerData.residentDistrict!,
              );
            }
          : undefined
      }
      onCreate={
        actions.serviceUserProfileUserProfile_View_EditAreasResidencyResidentDistrictCreate
          ? async () => {
              await actions.serviceUserProfileUserProfile_View_EditAreasResidencyResidentDistrictCreate!();
            }
          : undefined
      }
      onDelete={
        ownerData.residentDistrict &&
        actions.serviceUserProfileUserProfile_View_EditAreasResidencyResidentDistrictDelete
          ? async () =>
              actions.serviceUserProfileUserProfile_View_EditAreasResidencyResidentDistrictDelete!(
                ownerData.residentDistrict!,
              )
          : undefined
      }
      onSet={
        actions.serviceUserProfileUserProfile_View_EditAreasResidencyResidentDistrictSetOpenSelector
          ? async () => {
              await actions.serviceUserProfileUserProfile_View_EditAreasResidencyResidentDistrictSetOpenSelector!();
            }
          : undefined
      }
      onUnset={
        ownerData.residentDistrict && actions.serviceUserProfileUserProfile_View_EditAreasResidencyResidentDistrictUnset
          ? async () =>
              actions.serviceUserProfileUserProfile_View_EditAreasResidencyResidentDistrictUnset!(
                ownerData.residentDistrict!,
              )
          : undefined
      }
    ></AggregationInput>
  );
}
