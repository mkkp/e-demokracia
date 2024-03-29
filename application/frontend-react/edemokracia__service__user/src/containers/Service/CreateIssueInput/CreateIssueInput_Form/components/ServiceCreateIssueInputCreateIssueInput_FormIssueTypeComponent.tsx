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
  ServiceCreateIssueInput,
  ServiceCreateIssueInputStored,
  ServiceIssueType,
  ServiceIssueTypeQueryCustomizer,
  ServiceIssueTypeStored,
} from '~/services/data-api';
import { processQueryCustomizer } from '~/utilities';
export interface ServiceCreateIssueInputCreateIssueInput_FormIssueTypeComponentActionDefinitions {
  issueTypeOpenSetSelectorAction?: () => Promise<ServiceIssueTypeStored | undefined>;
  issueTypeUnsetAction?: (target: ServiceIssueTypeStored) => Promise<void>;
  issueTypeAutocompleteRangeAction?: (
    queryCustomizer: ServiceIssueTypeQueryCustomizer,
  ) => Promise<Array<ServiceIssueTypeStored>>;
  isIssueTypeRequired?: (data: ServiceCreateIssueInput | ServiceCreateIssueInputStored, editMode?: boolean) => boolean;
  isIssueTypeDisabled?: (
    data: ServiceCreateIssueInput | ServiceCreateIssueInputStored,
    editMode?: boolean,
    isLoading?: boolean,
  ) => boolean;
}

export interface ServiceCreateIssueInputCreateIssueInput_FormIssueTypeComponentProps {
  ownerData: ServiceCreateIssueInput | ServiceCreateIssueInputStored;
  actions: ServiceCreateIssueInputCreateIssueInput_FormIssueTypeComponentActionDefinitions;
  storeDiff: (attributeName: keyof ServiceCreateIssueInput, value: any) => void;
  submit: () => Promise<void>;
  validationError?: string;
  disabled?: boolean;
  readOnly?: boolean;
  editMode?: boolean;
  isLoading?: boolean;
  isDraft?: boolean;
}

// XMIID: User/(esm/_WNovANu5Ee2Bgcx6em3jZg)/TabularReferenceFieldRelationDefinedLink
// Name: issueType
export function ServiceCreateIssueInputCreateIssueInput_FormIssueTypeComponent(
  props: ServiceCreateIssueInputCreateIssueInput_FormIssueTypeComponentProps,
) {
  const { ownerData, actions, storeDiff, submit, validationError, disabled, readOnly, editMode, isLoading, isDraft } =
    props;
  const { t } = useTranslation();

  return (
    <AggregationInput
      name="issueType"
      id="User/(esm/_WNovANu5Ee2Bgcx6em3jZg)/TabularReferenceFieldRelationDefinedLink"
      label={t('service.CreateIssueInput.CreateIssueInput_Form.issueType', { defaultValue: 'Issue type' }) as string}
      labelList={[
        ownerData.issueType?.representation?.toString() ?? '',
        ownerData.issueType?.title?.toString() ?? '',
        ownerData.issueType?.description?.toString() ?? '',
      ]}
      required={actions?.isIssueTypeRequired ? actions.isIssueTypeRequired(ownerData, editMode) : false}
      ownerData={ownerData}
      error={!!validationError}
      helperText={validationError}
      icon={<MdiIcon path="folder-open" />}
      disabled={actions?.isIssueTypeDisabled ? actions.isIssueTypeDisabled(ownerData, editMode, isLoading) : disabled}
      readOnly={readOnly}
      editMode={editMode}
      isInlineCreatable={false && !isDraft}
      autoCompleteAttribute={'representation'}
      onAutoCompleteSelect={(issueType) => {
        storeDiff('issueType', issueType);
      }}
      onAutoCompleteSearch={
        actions.issueTypeAutocompleteRangeAction
          ? async (searchText: string) => {
              const queryCustomizer: ServiceIssueTypeQueryCustomizer = {
                ...(searchText?.length
                  ? {
                      representation: [{ operator: StringOperation.like, value: searchText }],
                    }
                  : {}),
                _mask: '{representation}',
                _orderBy: [{ attribute: 'representation', descending: false }],
                _seek: { limit: 10 },
              };
              return await actions.issueTypeAutocompleteRangeAction!(processQueryCustomizer(queryCustomizer));
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
