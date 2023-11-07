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
export interface ServiceProPro_View_EditCreatedByComponentActionDefinitions {
  serviceProPro_View_EditProCreatedByCreate?: () => Promise<void>;
  serviceProPro_View_EditProCreatedByDelete?: (target: ServiceServiceUserStored) => Promise<void>;
  serviceProPro_View_EditProCreatedBySetOpenSelector?: () => Promise<void>;
  serviceProPro_View_EditProCreatedByUnset?: (target: ServiceServiceUserStored) => Promise<void>;
  serviceProPro_View_EditProCreatedByView?: (target: ServiceServiceUserStored) => Promise<void>;
  serviceProPro_View_EditProCreatedByAutocomplete?: (
    queryCustomizer: ServiceServiceUserQueryCustomizer,
  ) => Promise<Array<ServiceServiceUserStored>>;
}

export interface ServiceProPro_View_EditCreatedByComponentProps {
  ownerData: ServicePro | ServiceProStored;
  actions: ServiceProPro_View_EditCreatedByComponentActionDefinitions;
  storeDiff: (attributeName: keyof ServicePro, value: any) => void;
  validationError?: string;
  disabled?: boolean;
  editMode?: boolean;
}

// XMIID: User/(esm/_eJsa8IfYEe2u0fVmwtP5bA)/TabularReferenceFieldRelationDefinedLink
// Name: createdBy
export function ServiceProPro_View_EditCreatedByComponent(props: ServiceProPro_View_EditCreatedByComponentProps) {
  const { ownerData, actions, storeDiff, validationError, disabled, editMode } = props;
  const { t } = useTranslation();

  return (
    <AggregationInput
      name="createdBy"
      id="User/(esm/_eJsa8IfYEe2u0fVmwtP5bA)/TabularReferenceFieldRelationDefinedLink"
      label={
        t('service.Pro.Pro.View.Edit.createdBy.pro.pro::LabelWrapper.Pro_View_Edit.service::Pro::Pro_View_Edit', {
          defaultValue: 'Created by',
        }) as string
      }
      labelList={[ownerData.createdBy?.representation?.toString() ?? '']}
      ownerData={ownerData}
      error={!!validationError}
      helperText={validationError}
      icon={<MdiIcon path="table_rows" />}
      disabled={disabled}
      editMode={editMode}
      autoCompleteAttribute={'representation'}
      onAutoCompleteSelect={(createdBy) => {
        storeDiff('createdBy', createdBy);
      }}
      onAutoCompleteSearch={
        actions.serviceProPro_View_EditProCreatedByAutocomplete
          ? async (searchText: string) => {
              const queryCustomizer: ServiceServiceUserQueryCustomizer = {
                ...(searchText?.length
                  ? {
                      representation: [{ operator: StringOperation.like, value: searchText }],
                    }
                  : {}),
                _mask: '{representation}',
                _orderBy: [{ attribute: 'representation', descending: false }],
                _seek: { limit: 10 },
              };
              return await actions.serviceProPro_View_EditProCreatedByAutocomplete!(
                processQueryCustomizer(queryCustomizer),
              );
            }
          : undefined
      }
      onView={
        ownerData.createdBy && actions.serviceProPro_View_EditProCreatedByView
          ? async () => {
              await actions.serviceProPro_View_EditProCreatedByView!(ownerData.createdBy!);
            }
          : undefined
      }
      onCreate={
        actions.serviceProPro_View_EditProCreatedByCreate
          ? async () => {
              await actions.serviceProPro_View_EditProCreatedByCreate!();
            }
          : undefined
      }
      onDelete={
        ownerData.createdBy && actions.serviceProPro_View_EditProCreatedByDelete
          ? async () => actions.serviceProPro_View_EditProCreatedByDelete!(ownerData.createdBy!)
          : undefined
      }
      onSet={
        actions.serviceProPro_View_EditProCreatedBySetOpenSelector
          ? async () => {
              await actions.serviceProPro_View_EditProCreatedBySetOpenSelector!();
            }
          : undefined
      }
      onUnset={
        ownerData.createdBy && actions.serviceProPro_View_EditProCreatedByUnset
          ? async () => actions.serviceProPro_View_EditProCreatedByUnset!(ownerData.createdBy!)
          : undefined
      }
    ></AggregationInput>
  );
}
