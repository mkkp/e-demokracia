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
  ServiceCreateIssueInput,
  ServiceCreateIssueInputStored,
} from '~/services/data-api';
export interface ServiceCreateIssueInputCreateIssueInput_FormCountyComponentActionDefinitions {
  serviceCreateIssueInputCreateIssueInput_FormIssueCountyCreate?: () => Promise<void>;
  serviceCreateIssueInputCreateIssueInput_FormIssueCountyDelete?: (target: ServiceCountyStored) => Promise<void>;
  serviceCreateIssueInputCreateIssueInput_FormIssueCountySetOpenSelector?: () => Promise<void>;
  serviceCreateIssueInputCreateIssueInput_FormIssueCountyUnset?: (target: ServiceCountyStored) => Promise<void>;
  serviceCreateIssueInputCreateIssueInput_FormIssueCountyView?: (target: ServiceCountyStored) => Promise<void>;
  serviceCreateIssueInputCreateIssueInput_FormIssueCountyAutocomplete?: (
    queryCustomizer: ServiceCountyQueryCustomizer,
  ) => Promise<Array<ServiceCountyStored>>;
}

export interface ServiceCreateIssueInputCreateIssueInput_FormCountyComponentProps {
  ownerData: ServiceCreateIssueInput | ServiceCreateIssueInputStored;
  actions: ServiceCreateIssueInputCreateIssueInput_FormCountyComponentActionDefinitions;
  storeDiff: (attributeName: keyof ServiceCreateIssueInput, value: any) => void;
  validationError?: string;
  disabled?: boolean;
  editMode?: boolean;
}

// XMIID: User/(esm/_TXj-IdvXEe2Bgcx6em3jZg)/TabularReferenceFieldRelationDefinedLink
// Name: county
export function ServiceCreateIssueInputCreateIssueInput_FormCountyComponent(
  props: ServiceCreateIssueInputCreateIssueInput_FormCountyComponentProps,
) {
  const { ownerData, actions, storeDiff, validationError, disabled, editMode } = props;
  const { t } = useTranslation();

  return (
    <AggregationInput
      name="county"
      id="User/(esm/_TXj-IdvXEe2Bgcx6em3jZg)/TabularReferenceFieldRelationDefinedLink"
      label={
        t(
          'service.CreateIssueInput.CreateIssueInput.Form.county.issue.CreateIssueInput_Form.service::CreateIssueInput::CreateIssueInput_Form',
          { defaultValue: 'County' },
        ) as string
      }
      labelList={[ownerData.county?.representation?.toString() ?? '', ownerData.county?.name?.toString() ?? '']}
      ownerData={ownerData}
      error={!!validationError}
      helperText={validationError}
      icon={<MdiIcon path="castle" />}
      disabled={disabled}
      editMode={editMode}
      autoCompleteAttribute={'representation'}
      onAutoCompleteSelect={(county) => {
        storeDiff('county', county);
      }}
      onAutoCompleteSearch={
        actions.serviceCreateIssueInputCreateIssueInput_FormIssueCountyAutocomplete
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
              return await actions.serviceCreateIssueInputCreateIssueInput_FormIssueCountyAutocomplete!(
                processQueryCustomizer(queryCustomizer),
              );
            }
          : undefined
      }
      onView={
        ownerData.county && actions.serviceCreateIssueInputCreateIssueInput_FormIssueCountyView
          ? async () => {
              await actions.serviceCreateIssueInputCreateIssueInput_FormIssueCountyView!(ownerData.county!);
            }
          : undefined
      }
      onCreate={
        actions.serviceCreateIssueInputCreateIssueInput_FormIssueCountyCreate
          ? async () => {
              await actions.serviceCreateIssueInputCreateIssueInput_FormIssueCountyCreate!();
            }
          : undefined
      }
      onDelete={
        ownerData.county && actions.serviceCreateIssueInputCreateIssueInput_FormIssueCountyDelete
          ? async () => actions.serviceCreateIssueInputCreateIssueInput_FormIssueCountyDelete!(ownerData.county!)
          : undefined
      }
      onSet={
        actions.serviceCreateIssueInputCreateIssueInput_FormIssueCountySetOpenSelector
          ? async () => {
              await actions.serviceCreateIssueInputCreateIssueInput_FormIssueCountySetOpenSelector!();
            }
          : undefined
      }
      onUnset={
        ownerData.county && actions.serviceCreateIssueInputCreateIssueInput_FormIssueCountyUnset
          ? async () => actions.serviceCreateIssueInputCreateIssueInput_FormIssueCountyUnset!(ownerData.county!)
          : undefined
      }
    ></AggregationInput>
  );
}
