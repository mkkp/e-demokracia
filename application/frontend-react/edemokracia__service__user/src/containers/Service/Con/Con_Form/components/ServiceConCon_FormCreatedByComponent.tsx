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
  ServiceCon,
  ServiceConStored,
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
} from '~/services/data-api';
import { processQueryCustomizer } from '~/utilities';
export interface ServiceConCon_FormCreatedByComponentActionDefinitions {
  createdByOpenPageAction?: (target: ServiceServiceUserStored) => Promise<void>;
  createdByAutocompleteRangeAction?: (
    queryCustomizer: ServiceServiceUserQueryCustomizer,
  ) => Promise<Array<ServiceServiceUserStored>>;
  isCreatedByRequired?: (data: ServiceCon | ServiceConStored, editMode?: boolean) => boolean;
  isCreatedByDisabled?: (data: ServiceCon | ServiceConStored, editMode?: boolean, isLoading?: boolean) => boolean;
}

export interface ServiceConCon_FormCreatedByComponentProps {
  ownerData: ServiceCon | ServiceConStored;
  actions: ServiceConCon_FormCreatedByComponentActionDefinitions;
  storeDiff: (attributeName: keyof ServiceCon, value: any) => void;
  submit: () => Promise<void>;
  validationError?: string;
  disabled?: boolean;
  readOnly?: boolean;
  editMode?: boolean;
  isLoading?: boolean;
}

// XMIID: User/(esm/_cIrlcIfYEe2u0fVmwtP5bA)/TabularReferenceFieldRelationDefinedLink
// Name: createdBy
export function ServiceConCon_FormCreatedByComponent(props: ServiceConCon_FormCreatedByComponentProps) {
  const { ownerData, actions, storeDiff, submit, validationError, disabled, readOnly, editMode, isLoading } = props;
  const { t } = useTranslation();

  return (
    <AggregationInput
      name="createdBy"
      id="User/(esm/_cIrlcIfYEe2u0fVmwtP5bA)/TabularReferenceFieldRelationDefinedLink"
      label={t('service.Con.Con_Form.createdBy', { defaultValue: 'CreatedBy' }) as string}
      labelList={[
        ownerData.createdBy?.firstName?.toString() ?? '',
        ownerData.createdBy?.lastName?.toString() ?? '',
        ownerData.createdBy?.phone?.toString() ?? '',
        ownerData.createdBy?.email?.toString() ?? '',
        ownerData.createdBy?.isAdmin?.toString() ?? '',
        ownerData.createdBy?.created?.toString() ?? '',
        ownerData.createdBy?.userName?.toString() ?? '',
        ownerData.createdBy?.representation?.toString() ?? '',
      ]}
      required={actions?.isCreatedByRequired ? actions.isCreatedByRequired(ownerData, editMode) : false}
      ownerData={ownerData}
      error={!!validationError}
      helperText={validationError}
      icon={<MdiIcon path="table_rows" />}
      disabled={actions?.isCreatedByDisabled ? actions.isCreatedByDisabled(ownerData, editMode, isLoading) : disabled}
      readOnly={readOnly}
      editMode={editMode}
      autoCompleteAttribute={'firstName'}
      onAutoCompleteSelect={(createdBy) => {
        storeDiff('createdBy', createdBy);
      }}
      onAutoCompleteSearch={
        actions.createdByAutocompleteRangeAction
          ? async (searchText: string) => {
              const queryCustomizer: ServiceServiceUserQueryCustomizer = {
                ...(searchText?.length
                  ? {
                      firstName: [{ operator: StringOperation.like, value: searchText }],
                    }
                  : {}),
                _mask: '{firstName}',
                _orderBy: [{ attribute: 'firstName', descending: false }],
                _seek: { limit: 10 },
              };
              return await actions.createdByAutocompleteRangeAction!(processQueryCustomizer(queryCustomizer));
            }
          : undefined
      }
      onView={
        ownerData.createdBy && actions.createdByOpenPageAction
          ? async () => {
              await actions.createdByOpenPageAction!(ownerData.createdBy!);
            }
          : undefined
      }
    />
  );
}
