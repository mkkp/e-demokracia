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
  ServiceIssue,
  ServiceIssueStored,
} from '~/services/data-api';
export interface ServiceIssueIssue_View_EditCountyComponentActionDefinitions {
  serviceIssueIssue_View_EditOtherAreaCountyCreate?: () => Promise<void>;
  serviceIssueIssue_View_EditOtherAreaCountyDelete?: (target: ServiceCountyStored) => Promise<void>;
  serviceIssueIssue_View_EditOtherAreaCountySetOpenSelector?: () => Promise<void>;
  serviceIssueIssue_View_EditOtherAreaCountyUnset?: (target: ServiceCountyStored) => Promise<void>;
  serviceIssueIssue_View_EditOtherAreaCountyView?: (target: ServiceCountyStored) => Promise<void>;
  serviceIssueIssue_View_EditOtherAreaCountyAutocomplete?: (
    queryCustomizer: ServiceCountyQueryCustomizer,
  ) => Promise<Array<ServiceCountyStored>>;
}

export interface ServiceIssueIssue_View_EditCountyComponentProps {
  ownerData: ServiceIssue | ServiceIssueStored;
  actions: ServiceIssueIssue_View_EditCountyComponentActionDefinitions;
  storeDiff: (attributeName: keyof ServiceIssue, value: any) => void;
  validationError?: string;
  disabled?: boolean;
  editMode?: boolean;
}

// XMIID: User/(esm/_pPQxkdvUEe2Bgcx6em3jZg)/TabularReferenceFieldRelationDefinedLink
// Name: county
export function ServiceIssueIssue_View_EditCountyComponent(props: ServiceIssueIssue_View_EditCountyComponentProps) {
  const { ownerData, actions, storeDiff, validationError, disabled, editMode } = props;
  const { t } = useTranslation();

  return (
    <AggregationInput
      name="county"
      id="User/(esm/_pPQxkdvUEe2Bgcx6em3jZg)/TabularReferenceFieldRelationDefinedLink"
      label={t('service.Issue.Issue.View.Edit.county.area', { defaultValue: 'County' }) as string}
      labelList={[ownerData.county?.representation?.toString() ?? '']}
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
        actions.serviceIssueIssue_View_EditOtherAreaCountyAutocomplete
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
              return await actions.serviceIssueIssue_View_EditOtherAreaCountyAutocomplete!(
                processQueryCustomizer(queryCustomizer),
              );
            }
          : undefined
      }
      onView={
        ownerData.county && actions.serviceIssueIssue_View_EditOtherAreaCountyView
          ? async () => {
              await actions.serviceIssueIssue_View_EditOtherAreaCountyView!(ownerData.county!);
            }
          : undefined
      }
      onCreate={
        actions.serviceIssueIssue_View_EditOtherAreaCountyCreate
          ? async () => {
              await actions.serviceIssueIssue_View_EditOtherAreaCountyCreate!();
            }
          : undefined
      }
      onDelete={
        ownerData.county && actions.serviceIssueIssue_View_EditOtherAreaCountyDelete
          ? async () => actions.serviceIssueIssue_View_EditOtherAreaCountyDelete!(ownerData.county!)
          : undefined
      }
      onSet={
        actions.serviceIssueIssue_View_EditOtherAreaCountySetOpenSelector
          ? async () => {
              await actions.serviceIssueIssue_View_EditOtherAreaCountySetOpenSelector!();
            }
          : undefined
      }
      onUnset={
        ownerData.county && actions.serviceIssueIssue_View_EditOtherAreaCountyUnset
          ? async () => actions.serviceIssueIssue_View_EditOtherAreaCountyUnset!(ownerData.county!)
          : undefined
      }
    ></AggregationInput>
  );
}
