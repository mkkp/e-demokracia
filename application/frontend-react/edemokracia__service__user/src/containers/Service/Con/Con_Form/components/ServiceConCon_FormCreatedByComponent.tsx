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
  ServiceCon,
  ServiceConStored,
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
} from '~/services/data-api';
export interface ServiceConCon_FormCreatedByComponentActionDefinitions {
  serviceConCon_FormCreatedByCreate?: () => Promise<void>;
  serviceConCon_FormCreatedByDelete?: (target: ServiceServiceUserStored) => Promise<void>;
  serviceConCon_FormCreatedBySetOpenSelector?: () => Promise<void>;
  serviceConCon_FormCreatedByUnset?: (target: ServiceServiceUserStored) => Promise<void>;
  serviceConCon_FormCreatedByView?: (target: ServiceServiceUserStored) => Promise<void>;
  serviceConCon_FormCreatedByAutocomplete?: (
    queryCustomizer: ServiceServiceUserQueryCustomizer,
  ) => Promise<Array<ServiceServiceUserStored>>;
}

export interface ServiceConCon_FormCreatedByComponentProps {
  ownerData: ServiceCon | ServiceConStored;
  actions: ServiceConCon_FormCreatedByComponentActionDefinitions;
  storeDiff: (attributeName: keyof ServiceCon, value: any) => void;
  validationError?: string;
  disabled?: boolean;
  editMode?: boolean;
}

// XMIID: User/(esm/_cIrlcIfYEe2u0fVmwtP5bA)/TabularReferenceFieldRelationDefinedLink
// Name: createdBy
export function ServiceConCon_FormCreatedByComponent(props: ServiceConCon_FormCreatedByComponentProps) {
  const { ownerData, actions, storeDiff, validationError, disabled, editMode } = props;
  const { t } = useTranslation();

  return (
    <AggregationInput
      name="createdBy"
      id="User/(esm/_cIrlcIfYEe2u0fVmwtP5bA)/TabularReferenceFieldRelationDefinedLink"
      label={
        t('service.Con.Con.Form.createdBy.Con_Form.service::Con::Con_Form', { defaultValue: 'CreatedBy' }) as string
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
        actions.serviceConCon_FormCreatedByAutocomplete
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
              return await actions.serviceConCon_FormCreatedByAutocomplete!(processQueryCustomizer(queryCustomizer));
            }
          : undefined
      }
      onView={
        ownerData.createdBy && actions.serviceConCon_FormCreatedByView
          ? async () => {
              await actions.serviceConCon_FormCreatedByView!(ownerData.createdBy!);
            }
          : undefined
      }
      onCreate={
        actions.serviceConCon_FormCreatedByCreate
          ? async () => {
              await actions.serviceConCon_FormCreatedByCreate!();
            }
          : undefined
      }
      onDelete={
        ownerData.createdBy && actions.serviceConCon_FormCreatedByDelete
          ? async () => actions.serviceConCon_FormCreatedByDelete!(ownerData.createdBy!)
          : undefined
      }
      onSet={
        actions.serviceConCon_FormCreatedBySetOpenSelector
          ? async () => {
              await actions.serviceConCon_FormCreatedBySetOpenSelector!();
            }
          : undefined
      }
      onUnset={
        ownerData.createdBy && actions.serviceConCon_FormCreatedByUnset
          ? async () => actions.serviceConCon_FormCreatedByUnset!(ownerData.createdBy!)
          : undefined
      }
    ></AggregationInput>
  );
}
