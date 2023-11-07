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
  ServiceCity,
  ServiceCityQueryCustomizer,
  ServiceCityStored,
  ServiceServiceUser,
  ServiceServiceUserStored,
} from '~/services/data-api';
export interface ServiceServiceUserServiceUser_View_EditResidentCityComponentActionDefinitions {
  serviceServiceUserServiceUser_View_EditAreasResidencyResidentCityCreate?: () => Promise<void>;
  serviceServiceUserServiceUser_View_EditAreasResidencyResidentCityDelete?: (
    target: ServiceCityStored,
  ) => Promise<void>;
  serviceServiceUserServiceUser_View_EditAreasResidencyResidentCitySetOpenSelector?: () => Promise<void>;
  serviceServiceUserServiceUser_View_EditAreasResidencyResidentCityUnset?: (target: ServiceCityStored) => Promise<void>;
  serviceServiceUserServiceUser_View_EditAreasResidencyResidentCityView?: (target: ServiceCityStored) => Promise<void>;
  serviceServiceUserServiceUser_View_EditAreasResidencyResidentCityAutocomplete?: (
    queryCustomizer: ServiceCityQueryCustomizer,
  ) => Promise<Array<ServiceCityStored>>;
}

export interface ServiceServiceUserServiceUser_View_EditResidentCityComponentProps {
  ownerData: ServiceServiceUser | ServiceServiceUserStored;
  actions: ServiceServiceUserServiceUser_View_EditResidentCityComponentActionDefinitions;
  storeDiff: (attributeName: keyof ServiceServiceUser, value: any) => void;
  validationError?: string;
  disabled?: boolean;
  editMode?: boolean;
}

// XMIID: User/(esm/_I-5hoIXqEe2kLcMqsIbMgQ)/TabularReferenceFieldRelationDefinedLink
// Name: residentCity
export function ServiceServiceUserServiceUser_View_EditResidentCityComponent(
  props: ServiceServiceUserServiceUser_View_EditResidentCityComponentProps,
) {
  const { ownerData, actions, storeDiff, validationError, disabled, editMode } = props;
  const { t } = useTranslation();

  return (
    <AggregationInput
      name="residentCity"
      id="User/(esm/_I-5hoIXqEe2kLcMqsIbMgQ)/TabularReferenceFieldRelationDefinedLink"
      label={
        t(
          'service.ServiceUser.ServiceUser.View.Edit.residentCity.Residency.Areas.Areas::LabelWrapper.ServiceUser_View_Edit.service::ServiceUser::ServiceUser_View_Edit',
          { defaultValue: 'Resident city' },
        ) as string
      }
      labelList={[ownerData.residentCity?.representation?.toString() ?? '']}
      ownerData={ownerData}
      error={!!validationError}
      helperText={validationError}
      icon={<MdiIcon path="city" />}
      disabled={disabled}
      editMode={editMode}
      autoCompleteAttribute={'representation'}
      onAutoCompleteSelect={(residentCity) => {
        storeDiff('residentCity', residentCity);
      }}
      onAutoCompleteSearch={
        actions.serviceServiceUserServiceUser_View_EditAreasResidencyResidentCityAutocomplete
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
              return await actions.serviceServiceUserServiceUser_View_EditAreasResidencyResidentCityAutocomplete!(
                processQueryCustomizer(queryCustomizer),
              );
            }
          : undefined
      }
      onView={
        ownerData.residentCity && actions.serviceServiceUserServiceUser_View_EditAreasResidencyResidentCityView
          ? async () => {
              await actions.serviceServiceUserServiceUser_View_EditAreasResidencyResidentCityView!(
                ownerData.residentCity!,
              );
            }
          : undefined
      }
      onCreate={
        actions.serviceServiceUserServiceUser_View_EditAreasResidencyResidentCityCreate
          ? async () => {
              await actions.serviceServiceUserServiceUser_View_EditAreasResidencyResidentCityCreate!();
            }
          : undefined
      }
      onDelete={
        ownerData.residentCity && actions.serviceServiceUserServiceUser_View_EditAreasResidencyResidentCityDelete
          ? async () =>
              actions.serviceServiceUserServiceUser_View_EditAreasResidencyResidentCityDelete!(ownerData.residentCity!)
          : undefined
      }
      onSet={
        actions.serviceServiceUserServiceUser_View_EditAreasResidencyResidentCitySetOpenSelector
          ? async () => {
              await actions.serviceServiceUserServiceUser_View_EditAreasResidencyResidentCitySetOpenSelector!();
            }
          : undefined
      }
      onUnset={
        ownerData.residentCity && actions.serviceServiceUserServiceUser_View_EditAreasResidencyResidentCityUnset
          ? async () =>
              actions.serviceServiceUserServiceUser_View_EditAreasResidencyResidentCityUnset!(ownerData.residentCity!)
          : undefined
      }
    ></AggregationInput>
  );
}
