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
  ServiceUserProfile,
  ServiceUserProfileStored,
} from '~/services/data-api';
import { processQueryCustomizer } from '~/utilities';
export interface ServiceUserProfileUserProfile_View_EditResidentCountyComponentActionDefinitions {
  residentCountyOpenSetSelectorAction?: () => Promise<ServiceCountyStored | undefined>;
  residentCountyUnsetAction?: (target: ServiceCountyStored) => Promise<void>;
  residentCountyOpenPageAction?: (target: ServiceCountyStored) => Promise<void>;
  residentCountyAutocompleteRangeAction?: (
    queryCustomizer: ServiceCountyQueryCustomizer,
  ) => Promise<Array<ServiceCountyStored>>;
  isResidentCountyRequired?: (data: ServiceUserProfile | ServiceUserProfileStored, editMode?: boolean) => boolean;
  isResidentCountyDisabled?: (
    data: ServiceUserProfile | ServiceUserProfileStored,
    editMode?: boolean,
    isLoading?: boolean,
  ) => boolean;
}

export interface ServiceUserProfileUserProfile_View_EditResidentCountyComponentProps {
  ownerData: ServiceUserProfile | ServiceUserProfileStored;
  actions: ServiceUserProfileUserProfile_View_EditResidentCountyComponentActionDefinitions;
  storeDiff: (attributeName: keyof ServiceUserProfile, value: any) => void;
  submit: () => Promise<void>;
  validationError?: string;
  disabled?: boolean;
  readOnly?: boolean;
  editMode?: boolean;
  isLoading?: boolean;
}

// XMIID: User/(esm/_fsW_olvTEe6jm_SkPSYEYw)/TabularReferenceFieldRelationDefinedLink
// Name: residentCounty
export function ServiceUserProfileUserProfile_View_EditResidentCountyComponent(
  props: ServiceUserProfileUserProfile_View_EditResidentCountyComponentProps,
) {
  const { ownerData, actions, storeDiff, submit, validationError, disabled, readOnly, editMode, isLoading } = props;
  const { t } = useTranslation();

  return (
    <AggregationInput
      name="residentCounty"
      id="User/(esm/_fsW_olvTEe6jm_SkPSYEYw)/TabularReferenceFieldRelationDefinedLink"
      label={
        t('service.UserProfile.UserProfile_View_Edit.residentCounty', { defaultValue: 'Resident county' }) as string
      }
      labelList={[ownerData.residentCounty?.representation?.toString() ?? '']}
      required={actions?.isResidentCountyRequired ? actions.isResidentCountyRequired(ownerData, editMode) : false}
      ownerData={ownerData}
      error={!!validationError}
      helperText={validationError}
      icon={<MdiIcon path="castle" />}
      disabled={
        actions?.isResidentCountyDisabled ? actions.isResidentCountyDisabled(ownerData, editMode, isLoading) : disabled
      }
      readOnly={readOnly}
      editMode={editMode}
      autoCompleteAttribute={'representation'}
      onAutoCompleteSelect={(residentCounty) => {
        storeDiff('residentCounty', residentCounty);
      }}
      onAutoCompleteSearch={
        actions.residentCountyAutocompleteRangeAction
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
              return await actions.residentCountyAutocompleteRangeAction!(processQueryCustomizer(queryCustomizer));
            }
          : undefined
      }
      onView={
        ownerData.residentCounty && actions.residentCountyOpenPageAction
          ? async () => {
              await actions.residentCountyOpenPageAction!(ownerData.residentCounty!);
            }
          : undefined
      }
      onSet={
        actions.residentCountyOpenSetSelectorAction
          ? async () => {
              const residentCounty = await actions.residentCountyOpenSetSelectorAction!();
            }
          : undefined
      }
      onUnset={
        ownerData.residentCounty && actions.residentCountyUnsetAction
          ? async () => actions.residentCountyUnsetAction!(ownerData.residentCounty!)
          : undefined
      }
    />
  );
}
