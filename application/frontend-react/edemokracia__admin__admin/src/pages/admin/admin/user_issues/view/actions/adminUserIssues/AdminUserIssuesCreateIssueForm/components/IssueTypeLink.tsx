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
import { MdiIcon } from '~/components';
import {
  AggregationInput,
  AssociationButton,
  BinaryInput,
  CollectionAssociationButton,
  TrinaryLogicCombobox,
} from '~/components/widgets';
import { useFilterDialog, useRangeDialog } from '~/components/dialog';
import { FilterOption, FilterType } from '~/components-api';
import { baseColumnConfig, toastConfig } from '~/config';
import {
  fileHandling,
  serviceDateToUiDate,
  serviceTimeToUiTime,
  processQueryCustomizer,
  PersistedTableData,
  TableRowAction,
} from '~/utilities';
import { useL10N } from '~/l10n/l10n-context';

import {
  AdminCity,
  AdminCityQueryCustomizer,
  AdminCityStored,
  AdminCounty,
  AdminCountyQueryCustomizer,
  AdminCountyStored,
  AdminCreateIssueInput,
  AdminCreateIssueInputQueryCustomizer,
  AdminCreateIssueInputStored,
  AdminDistrict,
  AdminDistrictQueryCustomizer,
  AdminDistrictStored,
  AdminIssue,
  AdminIssueQueryCustomizer,
  AdminIssueStored,
  AdminIssueType,
  AdminIssueTypeQueryCustomizer,
  AdminIssueTypeStored,
  AdminUserIssues,
  AdminUserIssuesQueryCustomizer,
  AdminUserIssuesStored,
  _StringOperation,
} from '~/generated/data-api';
import { adminCreateIssueInputServiceForClassImpl, adminUserIssuesServiceForClassImpl } from '~/generated/data-axios';

export interface IssueTypeLinkProps {
  ownerData: AdminCreateIssueInput;
  disabled: boolean;
  readOnly: boolean;
  editMode: boolean;
  onChange: (value: AdminIssueType | AdminIssueTypeStored | null) => void;
  validation: Map<keyof AdminCreateIssueInput, string>;
}

export function IssueTypeLink(props: IssueTypeLinkProps) {
  const { ownerData, disabled, readOnly, editMode, onChange, validation } = props;
  const { t } = useTranslation();
  const { openFilterDialog } = useFilterDialog();
  const { openRangeDialog } = useRangeDialog();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const { locale: l10nLocale } = useL10N();

  const issueTypeSortModel: GridSortModel = [{ field: 'representation', sort: null }];

  const issueTypeColumns: GridColDef<AdminIssueTypeStored>[] = [
    {
      ...baseColumnConfig,
      field: 'representation',
      headerName: t('admin.CreateIssueInputForm.issueType.representation', {
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
      headerName: t('admin.CreateIssueInputForm.issueType.title', { defaultValue: 'Title' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
    {
      ...baseColumnConfig,
      field: 'description',
      headerName: t('admin.CreateIssueInputForm.issueType.description', { defaultValue: 'Description' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
  ];

  const issueTypeRangeFilterOptions: FilterOption[] = [
    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminUserIssuesCreateIssueInputDefaultCreateIssueInputFormIssueIssueTypeRepresentationFilter',
      attributeName: 'representation',
      label: t('admin.CreateIssueInputForm.issueType.representation', { defaultValue: 'Representation' }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminUserIssuesCreateIssueInputDefaultCreateIssueInputFormIssueIssueTypeTitleFilter',
      attributeName: 'title',
      label: t('admin.CreateIssueInputForm.issueType.title', { defaultValue: 'Title' }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminUserIssuesCreateIssueInputDefaultCreateIssueInputFormIssueIssueTypeDescriptionFilter',
      attributeName: 'description',
      label: t('admin.CreateIssueInputForm.issueType.description', { defaultValue: 'Description' }) as string,
      filterType: FilterType.string,
    },
  ];

  const issueTypeInitialQueryCustomizer: AdminIssueTypeQueryCustomizer = {
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
      id="LinkedemokraciaAdminAdminEdemokraciaAdminUserIssuesCreateIssueInputDefaultCreateIssueInputFormIssueIssueType"
      label={t('admin.CreateIssueInputForm.issueType', { defaultValue: 'Issue type' }) as string}
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
        onChange(issueType as AdminIssueTypeStored);
      }}
      onSet={async () => {
        const res = await openRangeDialog<AdminIssueTypeStored, AdminIssueTypeQueryCustomizer>({
          id: 'RelationTypeedemokraciaAdminAdminEdemokraciaAdminCreateIssueInputIssueType',
          columns: issueTypeColumns,
          defaultSortField: ([{ field: 'representation', sort: null }] as GridSortItem[])[0],
          rangeCall: async (queryCustomizer) =>
            await adminCreateIssueInputServiceForClassImpl.getRangeForIssueType(
              ownerData,
              processQueryCustomizer(queryCustomizer),
            ),
          single: true,
          alreadySelectedItems: ownerData.issueType ? [ownerData.issueType] : undefined,
          filterOptions: issueTypeRangeFilterOptions,
          initialQueryCustomizer: issueTypeInitialQueryCustomizer,
        });

        if (res === undefined) return;
        // storeDiff('issueType', res.value as AdminIssueTypeStored);
        onChange(res.value as AdminIssueTypeStored);
      }}
      onAutoCompleteSearch={async (searchText: string) => {
        const queryCustomizer: AdminIssueTypeQueryCustomizer = {
          ...(searchText?.length
            ? {
                representation: [{ operator: _StringOperation.like, value: searchText }],
              }
            : {}),
          _mask: '{representation,title,description}',
          _orderBy: [{ attribute: 'representation', descending: false }],
          _seek: { limit: 10 },
        };
        return await adminCreateIssueInputServiceForClassImpl.getRangeForIssueType(
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
