//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getLinksForPageContainers(#application)
// Path expression: 'src/containers/'+#containerPath(#self.pageContainer)+'/components/'+#linkComponentName(#self)+'.tsx'
// Template name: actor/src/containers/components/link.tsx
// Template file: actor/src/containers/components/link.tsx.hbs

import { useTranslation } from 'react-i18next';
import { processQueryCustomizer } from '~/utilities';
import { MdiIcon } from '~/components';
import { AggregationInput } from '~/components/widgets';
import { StringOperation } from '~/services/data-api';
import type {
  ServiceCounty,
  ServiceCountyQueryCustomizer,
  ServiceCountyStored,
  ServiceCreateIssueInput,
  ServiceCreateIssueInputStored,
} from '~/services/data-api';
export interface ServiceCreateIssueInputCreateIssueInput_FormCountyComponentActionDefinitions {
  countyOpenSetSelectorAction?: () => Promise<void>;
  countyAutocompleteRangeAction?: (
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
      label={t('service.CreateIssueInput.CreateIssueInput_Form.county', { defaultValue: 'County' }) as string}
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
        actions.countyAutocompleteRangeAction
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
              return await actions.countyAutocompleteRangeAction!(processQueryCustomizer(queryCustomizer));
            }
          : undefined
      }
      onSet={
        actions.countyOpenSetSelectorAction
          ? async () => {
              await actions.countyOpenSetSelectorAction!();
            }
          : undefined
      }
    />
  );
}
