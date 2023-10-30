//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getLinksForActionFormPages(#application)
// Path expression: #pagePath(#getActionContainer(#self.value))+'actions/'+#pageActionFormPathSuffix(#self.value)+'/components/'+#linkComponentName(#self.key)+'.tsx'
// Template name: actor/src/pages/actions/actionForm/components/link.tsx
// Template file: actor/src/pages/actions/actionForm/components/link.tsx.hbs

import { useTranslation } from 'react-i18next';
import { Button, ButtonGroup } from '@mui/material';
import type {
  GridColDef,
  GridFilterModel,
  GridRenderCellParams,
  GridRowParams,
  GridSortModel,
  GridValueFormatterParams,
  GridRowId,
  GridSortItem,
} from '@mui/x-data-grid';
import { useTrackService } from '@pandino/react-hooks';
import { OBJECTCLASS } from '@pandino/pandino-api';
import { MdiIcon } from '~/components';
import {
  AggregationInput,
  AssociationButton,
  BinaryInput,
  CollectionAssociationButton,
  TrinaryLogicCombobox,
} from '~/components/widgets';
import { useFilterDialog, useRangeDialog } from '~/components/dialog';
import { FilterType } from '~/components-api';
import type { FilterOption, Filter } from '~/components-api';
import { baseColumnConfig, toastConfig } from '~/config';
import {
  fileHandling,
  mapAllFiltersToQueryCustomizerProperties,
  serviceDateToUiDate,
  serviceTimeToUiTime,
  processQueryCustomizer,
  PersistedTableData,
  TableRowAction,
} from '~/utilities';
import { useL10N } from '~/l10n/l10n-context';

import {
  ServiceCity,
  ServiceCityQueryCustomizer,
  ServiceCityStored,
  ServiceCounty,
  ServiceCountyQueryCustomizer,
  ServiceCountyStored,
  ServiceCreateIssueInput,
  ServiceCreateIssueInputQueryCustomizer,
  ServiceCreateIssueInputStored,
  ServiceDistrict,
  ServiceDistrictQueryCustomizer,
  ServiceDistrictStored,
  ServiceIssue,
  ServiceIssueQueryCustomizer,
  ServiceIssueStored,
  ServiceIssueType,
  ServiceIssueTypeQueryCustomizer,
  ServiceIssueTypeStored,
  ServiceUserIssues,
  ServiceUserIssuesQueryCustomizer,
  ServiceUserIssuesStored,
  _StringOperation,
} from '~/generated/data-api';
import {
  serviceCreateIssueInputServiceForClassImpl,
  serviceUserIssuesServiceForClassImpl,
} from '~/generated/data-axios';
export type IssueTypeLinkFilterInitializer = (ownerData: ServiceCreateIssueInput) => Filter[] | undefined;

export const ISSUE_TYPE_LINK_FILTER_INITIALIZER_INTERFACE_KEY = 'IssueTypeLinkFilterInitializerHook';
export type IssueTypeLinkFilterInitializerHook = () => IssueTypeLinkFilterInitializer;

export interface IssueTypeLinkProps {
  ownerData: ServiceCreateIssueInput;
  disabled: boolean;
  readOnly: boolean;
  editMode: boolean;
  onChange: (value: ServiceIssueType | ServiceIssueTypeStored | null) => void;
  validation: Map<keyof ServiceCreateIssueInput, string>;
}

export function IssueTypeLink(props: IssueTypeLinkProps) {
  const { ownerData, disabled, readOnly, editMode, onChange, validation } = props;
  const { t } = useTranslation();
  const { openFilterDialog } = useFilterDialog();
  const { openRangeDialog } = useRangeDialog();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const { locale: l10nLocale } = useL10N();

  const { service: filterInitializerHook } = useTrackService<IssueTypeLinkFilterInitializerHook>(
    `(${OBJECTCLASS}=${ISSUE_TYPE_LINK_FILTER_INITIALIZER_INTERFACE_KEY})`,
  );
  const callFilterInitializer: IssueTypeLinkFilterInitializer | undefined =
    filterInitializerHook && filterInitializerHook();

  const issueTypeSortModel: GridSortModel = [{ field: 'representation', sort: null }];

  const issueTypeColumns: GridColDef<ServiceIssueTypeStored>[] = [
    {
      ...baseColumnConfig,
      field: 'representation',
      headerName: t('service.CreateIssueInputForm.issueType.representation', {
        defaultValue: 'Representation',
      }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
    {
      ...baseColumnConfig,
      field: 'title',
      headerName: t('service.CreateIssueInputForm.issueType.title', { defaultValue: 'Title' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
    {
      ...baseColumnConfig,
      field: 'description',
      headerName: t('service.CreateIssueInputForm.issueType.description', { defaultValue: 'Description' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
  ];

  const issueTypeRangeFilterOptions: FilterOption[] = [
    {
      id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserIssuesCreateIssueInputDefaultCreateIssueInputFormIssueIssueTypeRepresentationFilter',
      attributeName: 'representation',
      label: t('service.CreateIssueInputForm.issueType.representation', { defaultValue: 'Representation' }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserIssuesCreateIssueInputDefaultCreateIssueInputFormIssueIssueTypeTitleFilter',
      attributeName: 'title',
      label: t('service.CreateIssueInputForm.issueType.title', { defaultValue: 'Title' }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserIssuesCreateIssueInputDefaultCreateIssueInputFormIssueIssueTypeDescriptionFilter',
      attributeName: 'description',
      label: t('service.CreateIssueInputForm.issueType.description', { defaultValue: 'Description' }) as string,
      filterType: FilterType.string,
    },
  ];

  const issueTypeInitialQueryCustomizer: ServiceIssueTypeQueryCustomizer = {
    _mask: '{representation,title,description}',
    _orderBy: issueTypeSortModel.length
      ? [
          {
            attribute: issueTypeSortModel[0].field,
            descending: issueTypeSortModel[0].sort === 'desc',
          },
        ]
      : [],
  };

  return (
    <AggregationInput
      name="issueType"
      id="LinkedemokraciaServiceUserEdemokraciaServiceUserIssuesCreateIssueInputDefaultCreateIssueInputFormIssueIssueType"
      label={t('service.CreateIssueInputForm.issueType', { defaultValue: 'Issue type' }) as string}
      labelList={[
        ownerData.issueType?.representation?.toString() ?? '',
        ownerData.issueType?.title?.toString() ?? '',
        ownerData.issueType?.description?.toString() ?? '',
      ]}
      ownerData={ownerData}
      error={!!validation.get('issueType')}
      helperText={validation.get('issueType')}
      icon={<MdiIcon path="folder-open" />}
      disabled={disabled}
      readOnly={readOnly}
      editMode={editMode}
      autoCompleteAttribute={'representation'}
      onAutoCompleteSelect={(issueType) => {
        // storeDiff('issueType', issueType);
        onChange(issueType as ServiceIssueTypeStored);
      }}
      onSet={async () => {
        const res = await openRangeDialog<ServiceIssueTypeStored, ServiceIssueTypeQueryCustomizer>({
          id: 'RelationTypeedemokraciaServiceUserEdemokraciaServiceCreateIssueInputIssueType',
          columns: issueTypeColumns,
          defaultSortField: ([{ field: 'representation', sort: null }] as GridSortItem[])[0],
          rangeCall: async (queryCustomizer) =>
            await serviceCreateIssueInputServiceForClassImpl.getRangeForIssueType(
              ownerData,
              processQueryCustomizer(queryCustomizer),
            ),
          single: true,
          alreadySelectedItems: ownerData.issueType ? [ownerData.issueType] : undefined,
          filterOptions: issueTypeRangeFilterOptions,
          initialQueryCustomizer: issueTypeInitialQueryCustomizer,
          initialFilters: callFilterInitializer && callFilterInitializer(ownerData),
        });

        if (res === undefined) return;
        // storeDiff('issueType', res.value as ServiceIssueTypeStored);
        onChange(res.value as ServiceIssueTypeStored);
      }}
      onAutoCompleteSearch={async (searchText: string) => {
        const queryCustomizer: ServiceIssueTypeQueryCustomizer = {
          ...(searchText?.length
            ? {
                representation: [{ operator: _StringOperation.like, value: searchText }],
              }
            : {}),
          ...mapAllFiltersToQueryCustomizerProperties(
            (callFilterInitializer && callFilterInitializer(ownerData)) || [],
          ),
          _mask: '{representation,title,description}',
          _orderBy: [{ attribute: 'representation', descending: false }],
          _seek: { limit: 10 },
        };
        return await serviceCreateIssueInputServiceForClassImpl.getRangeForIssueType(
          ownerData,
          processQueryCustomizer(queryCustomizer),
        );
      }}
      onUnset={async () => {
        // storeDiff('issueType', null);
        onChange(null);
      }}
    />
  );
}
