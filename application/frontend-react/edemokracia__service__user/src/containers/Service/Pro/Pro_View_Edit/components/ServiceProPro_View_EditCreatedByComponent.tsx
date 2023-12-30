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
  ServicePro,
  ServiceProStored,
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
} from '~/services/data-api';
import { processQueryCustomizer } from '~/utilities';
export interface ServiceProPro_View_EditCreatedByComponentActionDefinitions {
  createdByOpenPageAction?: (target: ServiceServiceUserStored) => Promise<void>;
  createdByAutocompleteRangeAction?: (
    queryCustomizer: ServiceServiceUserQueryCustomizer,
  ) => Promise<Array<ServiceServiceUserStored>>;
  isCreatedByRequired?: (data: ServicePro | ServiceProStored, editMode?: boolean) => boolean;
  isCreatedByDisabled?: (data: ServicePro | ServiceProStored, editMode?: boolean, isLoading?: boolean) => boolean;
}

export interface ServiceProPro_View_EditCreatedByComponentProps {
  ownerData: ServicePro | ServiceProStored;
  actions: ServiceProPro_View_EditCreatedByComponentActionDefinitions;
  storeDiff: (attributeName: keyof ServicePro, value: any) => void;
  submit: () => Promise<void>;
  validationError?: string;
  disabled?: boolean;
  readOnly?: boolean;
  editMode?: boolean;
  isLoading?: boolean;
}

// XMIID: User/(esm/_eJsa8IfYEe2u0fVmwtP5bA)/TabularReferenceFieldRelationDefinedLink
// Name: createdBy
export function ServiceProPro_View_EditCreatedByComponent(props: ServiceProPro_View_EditCreatedByComponentProps) {
  const { ownerData, actions, storeDiff, submit, validationError, disabled, readOnly, editMode, isLoading } = props;
  const { t } = useTranslation();

  return (
    <AggregationInput
      name="createdBy"
      id="User/(esm/_eJsa8IfYEe2u0fVmwtP5bA)/TabularReferenceFieldRelationDefinedLink"
      label={t('service.Pro.Pro_View_Edit.createdBy', { defaultValue: 'Created by' }) as string}
      labelList={[ownerData.createdBy?.representation?.toString() ?? '']}
      required={actions?.isCreatedByRequired ? actions.isCreatedByRequired(ownerData, editMode) : false}
      ownerData={ownerData}
      error={!!validationError}
      helperText={validationError}
      icon={<MdiIcon path="table_rows" />}
      disabled={actions?.isCreatedByDisabled ? actions.isCreatedByDisabled(ownerData, editMode, isLoading) : disabled}
      readOnly={readOnly}
      editMode={editMode}
      autoCompleteAttribute={'representation'}
      onAutoCompleteSelect={(createdBy) => {
        storeDiff('createdBy', createdBy);
      }}
      onAutoCompleteSearch={
        actions.createdByAutocompleteRangeAction
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
