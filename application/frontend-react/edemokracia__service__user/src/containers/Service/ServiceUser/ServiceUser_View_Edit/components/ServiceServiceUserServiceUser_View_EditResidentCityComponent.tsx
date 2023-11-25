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
  ServiceCity,
  ServiceCityQueryCustomizer,
  ServiceCityStored,
  ServiceServiceUser,
  ServiceServiceUserStored,
} from '~/services/data-api';
export interface ServiceServiceUserServiceUser_View_EditResidentCityComponentActionDefinitions {
  residentCityOpenSetSelectorAction?: () => Promise<void>;
  residentCityUnsetAction?: (target: ServiceCityStored) => Promise<void>;
  residentCityOpenPageAction?: (target: ServiceCityStored) => Promise<void>;
  residentCityAutocompleteRangeAction?: (
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
      label={t('service.ServiceUser.ServiceUser_View_Edit.residentCity', { defaultValue: 'Resident city' }) as string}
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
        actions.residentCityAutocompleteRangeAction
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
              return await actions.residentCityAutocompleteRangeAction!(processQueryCustomizer(queryCustomizer));
            }
          : undefined
      }
      onView={
        ownerData.residentCity && actions.residentCityOpenPageAction
          ? async () => {
              await actions.residentCityOpenPageAction!(ownerData.residentCity!);
            }
          : undefined
      }
      onSet={
        actions.residentCityOpenSetSelectorAction
          ? async () => {
              await actions.residentCityOpenSetSelectorAction!();
            }
          : undefined
      }
      onUnset={
        ownerData.residentCity && actions.residentCityUnsetAction
          ? async () => actions.residentCityUnsetAction!(ownerData.residentCity!)
          : undefined
      }
    />
  );
}
