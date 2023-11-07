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
  ServiceCounty,
  ServiceCountyQueryCustomizer,
  ServiceCountyStored,
  ServiceServiceUser,
  ServiceServiceUserStored,
} from '~/services/data-api';
export interface ServiceServiceUserServiceUser_View_EditResidentCountyComponentActionDefinitions {
  serviceServiceUserServiceUser_View_EditAreasResidencyResidentCountyCreate?: () => Promise<void>;
  serviceServiceUserServiceUser_View_EditAreasResidencyResidentCountyDelete?: (
    target: ServiceCountyStored,
  ) => Promise<void>;
  serviceServiceUserServiceUser_View_EditAreasResidencyResidentCountySetOpenSelector?: () => Promise<void>;
  serviceServiceUserServiceUser_View_EditAreasResidencyResidentCountyUnset?: (
    target: ServiceCountyStored,
  ) => Promise<void>;
  serviceServiceUserServiceUser_View_EditAreasResidencyResidentCountyView?: (
    target: ServiceCountyStored,
  ) => Promise<void>;
  serviceServiceUserServiceUser_View_EditAreasResidencyResidentCountyAutocomplete?: (
    queryCustomizer: ServiceCountyQueryCustomizer,
  ) => Promise<Array<ServiceCountyStored>>;
}

export interface ServiceServiceUserServiceUser_View_EditResidentCountyComponentProps {
  ownerData: ServiceServiceUser | ServiceServiceUserStored;
  actions: ServiceServiceUserServiceUser_View_EditResidentCountyComponentActionDefinitions;
  storeDiff: (attributeName: keyof ServiceServiceUser, value: any) => void;
  validationError?: string;
  disabled?: boolean;
  editMode?: boolean;
}

// XMIID: User/(esm/_I-xl0IXqEe2kLcMqsIbMgQ)/TabularReferenceFieldRelationDefinedLink
// Name: residentCounty
export function ServiceServiceUserServiceUser_View_EditResidentCountyComponent(
  props: ServiceServiceUserServiceUser_View_EditResidentCountyComponentProps,
) {
  const { ownerData, actions, storeDiff, validationError, disabled, editMode } = props;
  const { t } = useTranslation();

  return (
    <AggregationInput
      name="residentCounty"
      id="User/(esm/_I-xl0IXqEe2kLcMqsIbMgQ)/TabularReferenceFieldRelationDefinedLink"
      label={
        t(
          'service.ServiceUser.ServiceUser.View.Edit.residentCounty.Residency.Areas.Areas::LabelWrapper.ServiceUser_View_Edit.service::ServiceUser::ServiceUser_View_Edit',
          { defaultValue: 'Resident county' },
        ) as string
      }
      labelList={[ownerData.residentCounty?.representation?.toString() ?? '']}
      ownerData={ownerData}
      error={!!validationError}
      helperText={validationError}
      icon={<MdiIcon path="castle" />}
      disabled={disabled}
      editMode={editMode}
      autoCompleteAttribute={'representation'}
      onAutoCompleteSelect={(residentCounty) => {
        storeDiff('residentCounty', residentCounty);
      }}
      onAutoCompleteSearch={
        actions.serviceServiceUserServiceUser_View_EditAreasResidencyResidentCountyAutocomplete
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
              return await actions.serviceServiceUserServiceUser_View_EditAreasResidencyResidentCountyAutocomplete!(
                processQueryCustomizer(queryCustomizer),
              );
            }
          : undefined
      }
      onView={
        ownerData.residentCounty && actions.serviceServiceUserServiceUser_View_EditAreasResidencyResidentCountyView
          ? async () => {
              await actions.serviceServiceUserServiceUser_View_EditAreasResidencyResidentCountyView!(
                ownerData.residentCounty!,
              );
            }
          : undefined
      }
      onCreate={
        actions.serviceServiceUserServiceUser_View_EditAreasResidencyResidentCountyCreate
          ? async () => {
              await actions.serviceServiceUserServiceUser_View_EditAreasResidencyResidentCountyCreate!();
            }
          : undefined
      }
      onDelete={
        ownerData.residentCounty && actions.serviceServiceUserServiceUser_View_EditAreasResidencyResidentCountyDelete
          ? async () =>
              actions.serviceServiceUserServiceUser_View_EditAreasResidencyResidentCountyDelete!(
                ownerData.residentCounty!,
              )
          : undefined
      }
      onSet={
        actions.serviceServiceUserServiceUser_View_EditAreasResidencyResidentCountySetOpenSelector
          ? async () => {
              await actions.serviceServiceUserServiceUser_View_EditAreasResidencyResidentCountySetOpenSelector!();
            }
          : undefined
      }
      onUnset={
        ownerData.residentCounty && actions.serviceServiceUserServiceUser_View_EditAreasResidencyResidentCountyUnset
          ? async () =>
              actions.serviceServiceUserServiceUser_View_EditAreasResidencyResidentCountyUnset!(
                ownerData.residentCounty!,
              )
          : undefined
      }
    ></AggregationInput>
  );
}
