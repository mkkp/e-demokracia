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
export interface ServiceConCon_View_EditCreatedByComponentActionDefinitions {
  serviceConCon_View_EditConCreatedByCreate?: () => Promise<void>;
  serviceConCon_View_EditConCreatedByDelete?: (target: ServiceServiceUserStored) => Promise<void>;
  serviceConCon_View_EditConCreatedBySetOpenSelector?: () => Promise<void>;
  serviceConCon_View_EditConCreatedByUnset?: (target: ServiceServiceUserStored) => Promise<void>;
  serviceConCon_View_EditConCreatedByView?: (target: ServiceServiceUserStored) => Promise<void>;
  serviceConCon_View_EditConCreatedByAutocomplete?: (
    queryCustomizer: ServiceServiceUserQueryCustomizer,
  ) => Promise<Array<ServiceServiceUserStored>>;
}

export interface ServiceConCon_View_EditCreatedByComponentProps {
  ownerData: ServiceCon | ServiceConStored;
  actions: ServiceConCon_View_EditCreatedByComponentActionDefinitions;
  storeDiff: (attributeName: keyof ServiceCon, value: any) => void;
  validationError?: string;
  disabled?: boolean;
  editMode?: boolean;
}

// XMIID: User/(esm/_WifZAIfYEe2u0fVmwtP5bA)/TabularReferenceFieldRelationDefinedLink
// Name: createdBy
export function ServiceConCon_View_EditCreatedByComponent(props: ServiceConCon_View_EditCreatedByComponentProps) {
  const { ownerData, actions, storeDiff, validationError, disabled, editMode } = props;
  const { t } = useTranslation();

  return (
    <AggregationInput
      name="createdBy"
      id="User/(esm/_WifZAIfYEe2u0fVmwtP5bA)/TabularReferenceFieldRelationDefinedLink"
      label={
        t('service.Con.Con.View.Edit.createdBy.con.con::LabelWrapper.Con_View_Edit.service::Con::Con_View_Edit', {
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
        actions.serviceConCon_View_EditConCreatedByAutocomplete
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
              return await actions.serviceConCon_View_EditConCreatedByAutocomplete!(
                processQueryCustomizer(queryCustomizer),
              );
            }
          : undefined
      }
      onView={
        ownerData.createdBy && actions.serviceConCon_View_EditConCreatedByView
          ? async () => {
              await actions.serviceConCon_View_EditConCreatedByView!(ownerData.createdBy!);
            }
          : undefined
      }
      onCreate={
        actions.serviceConCon_View_EditConCreatedByCreate
          ? async () => {
              await actions.serviceConCon_View_EditConCreatedByCreate!();
            }
          : undefined
      }
      onDelete={
        ownerData.createdBy && actions.serviceConCon_View_EditConCreatedByDelete
          ? async () => actions.serviceConCon_View_EditConCreatedByDelete!(ownerData.createdBy!)
          : undefined
      }
      onSet={
        actions.serviceConCon_View_EditConCreatedBySetOpenSelector
          ? async () => {
              await actions.serviceConCon_View_EditConCreatedBySetOpenSelector!();
            }
          : undefined
      }
      onUnset={
        ownerData.createdBy && actions.serviceConCon_View_EditConCreatedByUnset
          ? async () => actions.serviceConCon_View_EditConCreatedByUnset!(ownerData.createdBy!)
          : undefined
      }
    ></AggregationInput>
  );
}
