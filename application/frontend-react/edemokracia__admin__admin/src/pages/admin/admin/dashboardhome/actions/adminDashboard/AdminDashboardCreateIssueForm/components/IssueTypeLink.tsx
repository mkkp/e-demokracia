//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getLinksForActionFormPages(#application)
// Path expression: #pagePath(#getActionContainer(#self.value))+'actions/'+#pageActionFormPathSuffix(#self.value)+'/components/'+#linkComponentName(#self.key)+'.tsx'
// Template name: actor/src/pages/actions/actionForm/components/link.tsx
// Template file: actor/src/pages/actions/actionForm/components/link.tsx.hbs

import { useTranslation } from 'react-i18next';
import { Button } from '@mui/material';
import type {
  GridColDef,
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
  AdminDashboard,
  AdminDashboardQueryCustomizer,
  AdminDashboardStored,
  AdminDistrict,
  AdminDistrictQueryCustomizer,
  AdminDistrictStored,
  AdminIssue,
  AdminIssueQueryCustomizer,
  AdminIssueStored,
  AdminIssueType,
  AdminIssueTypeQueryCustomizer,
  AdminIssueTypeStored,
} from '~/generated/data-api';
import { adminCreateIssueInputServiceImpl, adminDashboardServiceImpl } from '~/generated/data-axios';

export interface IssueTypeLinkProps {
  ownerData: AdminCreateIssueInput;
  disabled: boolean;
  editMode: boolean;
  storeDiff: (attributeName: keyof AdminCreateIssueInput, value: any) => void;
  validation: Map<keyof AdminCreateIssueInput, string>;
}

export function IssueTypeLink(props: IssueTypeLinkProps) {
  const { ownerData, disabled, editMode, storeDiff, validation } = props;
  const { t } = useTranslation();
  const { openFilterDialog } = useFilterDialog();
  const { openRangeDialog } = useRangeDialog();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const { locale: l10nLocale } = useL10N();

  const issueTypeSortModel: GridSortModel = [{ field: 'representation', sort: 'asc' }];

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
    },
    {
      ...baseColumnConfig,
      field: 'title',
      headerName: t('admin.CreateIssueInputForm.issueType.title', { defaultValue: 'Title' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
    },
    {
      ...baseColumnConfig,
      field: 'description',
      headerName: t('admin.CreateIssueInputForm.issueType.description', { defaultValue: 'Description' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
    },
  ];

  const issueTypeRangeFilterOptions: FilterOption[] = [
    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminDashboardCreateIssueInputDefaultCreateIssueInputFormIssueLabelWrapperIssueIssueTypeRepresentationFilter',
      attributeName: 'representation',
      label: t('admin.CreateIssueInputForm.issueType.representation', { defaultValue: 'Representation' }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminDashboardCreateIssueInputDefaultCreateIssueInputFormIssueLabelWrapperIssueIssueTypeTitleFilter',
      attributeName: 'title',
      label: t('admin.CreateIssueInputForm.issueType.title', { defaultValue: 'Title' }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminDashboardCreateIssueInputDefaultCreateIssueInputFormIssueLabelWrapperIssueIssueTypeDescriptionFilter',
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
      id="LinkedemokraciaAdminAdminEdemokraciaAdminDashboardCreateIssueInputDefaultCreateIssueInputFormIssueLabelWrapperIssueIssueType"
      label={t('admin.CreateIssueInputForm.issueType', { defaultValue: 'Issue type' }) as string}
      labelList={[
        ownerData.issueType?.representation?.toString() ?? '',
        ownerData.issueType?.title?.toString() ?? '',
        ownerData.issueType?.description?.toString() ?? '',
      ]}
      value={ownerData.issueType}
      error={!!validation.get('issueType')}
      helperText={validation.get('issueType')}
      icon={<MdiIcon path="folder-open" />}
      disabled={disabled}
      editMode={editMode}
      onSet={async () => {
        const res = await openRangeDialog<AdminIssueTypeStored, AdminIssueTypeQueryCustomizer>({
          id: 'RelationTypeedemokraciaAdminAdminEdemokraciaAdminCreateIssueInputIssueType',
          columns: issueTypeColumns,
          defaultSortField: ([{ field: 'representation', sort: 'asc' }] as GridSortItem[])[0],
          rangeCall: async (queryCustomizer) =>
            await adminCreateIssueInputServiceImpl.getRangeForIssueType(
              ownerData,
              processQueryCustomizer(queryCustomizer),
            ),
          single: true,
          alreadySelectedItems: ownerData.issueType?.__identifier as GridRowId,
          filterOptions: issueTypeRangeFilterOptions,
          initialQueryCustomizer: issueTypeInitialQueryCustomizer,
        });

        if (res === undefined) return;
        storeDiff('issueType', res as AdminIssueTypeStored);
      }}
      onUnset={async () => {
        storeDiff('issueType', null);
      }}
    />
  );
}
