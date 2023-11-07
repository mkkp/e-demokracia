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
  ServicePro,
  ServiceProStored,
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
} from '~/services/data-api';
export interface ServiceProPro_FormCreatedByComponentActionDefinitions {
  serviceProPro_FormCreatedByCreate?: () => Promise<void>;
  serviceProPro_FormCreatedByDelete?: (target: ServiceServiceUserStored) => Promise<void>;
  serviceProPro_FormCreatedBySetOpenSelector?: () => Promise<void>;
  serviceProPro_FormCreatedByUnset?: (target: ServiceServiceUserStored) => Promise<void>;
  serviceProPro_FormCreatedByView?: (target: ServiceServiceUserStored) => Promise<void>;
  serviceProPro_FormCreatedByAutocomplete?: (
    queryCustomizer: ServiceServiceUserQueryCustomizer,
  ) => Promise<Array<ServiceServiceUserStored>>;
}

export interface ServiceProPro_FormCreatedByComponentProps {
  ownerData: ServicePro | ServiceProStored;
  actions: ServiceProPro_FormCreatedByComponentActionDefinitions;
  storeDiff: (attributeName: keyof ServicePro, value: any) => void;
  validationError?: string;
  disabled?: boolean;
  editMode?: boolean;
}

// XMIID: User/(esm/_eJ6dYIfYEe2u0fVmwtP5bA)/TabularReferenceFieldRelationDefinedLink
// Name: createdBy
export function ServiceProPro_FormCreatedByComponent(props: ServiceProPro_FormCreatedByComponentProps) {
  const { ownerData, actions, storeDiff, validationError, disabled, editMode } = props;
  const { t } = useTranslation();

  return (
    <AggregationInput
      name="createdBy"
      id="User/(esm/_eJ6dYIfYEe2u0fVmwtP5bA)/TabularReferenceFieldRelationDefinedLink"
      label={
        t('service.Pro.Pro.Form.createdBy.Pro_Form.service::Pro::Pro_Form', { defaultValue: 'CreatedBy' }) as string
      }
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
      ownerData={ownerData}
      error={!!validationError}
      helperText={validationError}
      icon={<MdiIcon path="table_rows" />}
      disabled={disabled}
      editMode={editMode}
      autoCompleteAttribute={'firstName'}
      onAutoCompleteSelect={(createdBy) => {
        storeDiff('createdBy', createdBy);
      }}
      onAutoCompleteSearch={
        actions.serviceProPro_FormCreatedByAutocomplete
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
              return await actions.serviceProPro_FormCreatedByAutocomplete!(processQueryCustomizer(queryCustomizer));
            }
          : undefined
      }
      onView={
        ownerData.createdBy && actions.serviceProPro_FormCreatedByView
          ? async () => {
              await actions.serviceProPro_FormCreatedByView!(ownerData.createdBy!);
            }
          : undefined
      }
      onCreate={
        actions.serviceProPro_FormCreatedByCreate
          ? async () => {
              await actions.serviceProPro_FormCreatedByCreate!();
            }
          : undefined
      }
      onDelete={
        ownerData.createdBy && actions.serviceProPro_FormCreatedByDelete
          ? async () => actions.serviceProPro_FormCreatedByDelete!(ownerData.createdBy!)
          : undefined
      }
      onSet={
        actions.serviceProPro_FormCreatedBySetOpenSelector
          ? async () => {
              await actions.serviceProPro_FormCreatedBySetOpenSelector!();
            }
          : undefined
      }
      onUnset={
        ownerData.createdBy && actions.serviceProPro_FormCreatedByUnset
          ? async () => actions.serviceProPro_FormCreatedByUnset!(ownerData.createdBy!)
          : undefined
      }
    ></AggregationInput>
  );
}
