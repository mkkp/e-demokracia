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
  ServiceIssue,
  ServiceIssueStored,
  ServiceIssueType,
  ServiceIssueTypeQueryCustomizer,
  ServiceIssueTypeStored,
} from '~/services/data-api';
import { processQueryCustomizer } from '~/utilities';
export interface ServiceIssueIssue_View_EditIssueTypeComponentActionDefinitions {
  issueTypeOpenSetSelectorAction?: () => Promise<ServiceIssueTypeStored | undefined>;
  issueTypeUnsetAction?: (target: ServiceIssueTypeStored) => Promise<void>;
  issueTypeOpenPageAction?: (target: ServiceIssueTypeStored) => Promise<void>;
  issueTypeAutocompleteRangeAction?: (
    queryCustomizer: ServiceIssueTypeQueryCustomizer,
  ) => Promise<Array<ServiceIssueTypeStored>>;
}

export interface ServiceIssueIssue_View_EditIssueTypeComponentProps {
  ownerData: ServiceIssue | ServiceIssueStored;
  actions: ServiceIssueIssue_View_EditIssueTypeComponentActionDefinitions;
  storeDiff: (attributeName: keyof ServiceIssue, value: any) => void;
  submit: () => Promise<void>;
  validationError?: string;
  disabled?: boolean;
  editMode?: boolean;
}

// XMIID: User/(esm/_FHpVENvSEe2Bgcx6em3jZg)/TabularReferenceFieldRelationDefinedLink
// Name: issueType
export function ServiceIssueIssue_View_EditIssueTypeComponent(
  props: ServiceIssueIssue_View_EditIssueTypeComponentProps,
) {
  const { ownerData, actions, storeDiff, submit, validationError, disabled, editMode } = props;
  const { t } = useTranslation();

  return (
    <AggregationInput
      name="issueType"
      id="User/(esm/_FHpVENvSEe2Bgcx6em3jZg)/TabularReferenceFieldRelationDefinedLink"
      label={t('service.Issue.Issue_View_Edit.issueType', { defaultValue: 'Issue Type' }) as string}
      labelList={[ownerData.issueType?.title?.toString() ?? '', ownerData.issueType?.description?.toString() ?? '']}
      required={false}
      ownerData={ownerData}
      error={!!validationError}
      helperText={validationError}
      icon={<MdiIcon path="folder-open" />}
      disabled={disabled}
      editMode={editMode}
      autoCompleteAttribute={'title'}
      onAutoCompleteSelect={(issueType) => {
        storeDiff('issueType', issueType);
      }}
      onAutoCompleteSearch={
        actions.issueTypeAutocompleteRangeAction
          ? async (searchText: string) => {
              const queryCustomizer: ServiceIssueTypeQueryCustomizer = {
                ...(searchText?.length
                  ? {
                      title: [{ operator: StringOperation.like, value: searchText }],
                    }
                  : {}),
                _mask: '{title}',
                _orderBy: [{ attribute: 'title', descending: false }],
                _seek: { limit: 10 },
              };
              return await actions.issueTypeAutocompleteRangeAction!(processQueryCustomizer(queryCustomizer));
            }
          : undefined
      }
      onView={
        ownerData.issueType && actions.issueTypeOpenPageAction
          ? async () => {
              await actions.issueTypeOpenPageAction!(ownerData.issueType!);
            }
          : undefined
      }
      onSet={
        actions.issueTypeOpenSetSelectorAction
          ? async () => {
              const issueType = await actions.issueTypeOpenSetSelectorAction!();
            }
          : undefined
      }
      onUnset={
        ownerData.issueType && actions.issueTypeUnsetAction
          ? async () => actions.issueTypeUnsetAction!(ownerData.issueType!)
          : undefined
      }
    />
  );
}
