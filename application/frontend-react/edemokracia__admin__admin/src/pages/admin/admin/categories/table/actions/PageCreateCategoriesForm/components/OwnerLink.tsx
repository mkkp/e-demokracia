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
  AdminIssueCategory,
  AdminIssueCategoryQueryCustomizer,
  AdminIssueCategoryStored,
  AdminUser,
  AdminUserQueryCustomizer,
  AdminUserStored,
} from '~/generated/data-api';
import { adminIssueCategoryServiceImpl } from '~/generated/data-axios';

export interface OwnerLinkProps {
  ownerData: AdminIssueCategory;
  disabled: boolean;
  editMode: boolean;
  storeDiff: (attributeName: keyof AdminIssueCategory, value: any) => void;
  validation: Map<keyof AdminIssueCategory, string>;
}

export function OwnerLink(props: OwnerLinkProps) {
  const { ownerData, disabled, editMode, storeDiff, validation } = props;
  const { t } = useTranslation();
  const { openFilterDialog } = useFilterDialog();
  const { openRangeDialog } = useRangeDialog();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const { locale: l10nLocale } = useL10N();

  const ownerSortModel: GridSortModel = [{ field: 'representation', sort: 'asc' }];

  const ownerColumns: GridColDef<AdminUserStored>[] = [
    {
      ...baseColumnConfig,
      field: 'representation',
      headerName: t('admin.IssueCategoryForm.owner.representation', { defaultValue: 'Representation' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
    },
  ];

  const ownerRangeFilterOptions: FilterOption[] = [
    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminAdminCategoriesCreateDefaultCategoryFormOwnerRepresentationFilter',
      attributeName: 'representation',
      label: t('admin.IssueCategoryForm.owner.representation', { defaultValue: 'Representation' }) as string,
      filterType: FilterType.string,
    },
  ];

  const ownerInitialQueryCustomizer: AdminUserQueryCustomizer = {
    _mask: '{representation}',
    _orderBy: ownerSortModel.length
      ? [
          {
            attribute: ownerSortModel[0].field,
            descending: ownerSortModel[0].sort === 'desc',
          },
        ]
      : [],
  };

  return (
    <AggregationInput
      name="owner"
      id="LinkedemokraciaAdminAdminEdemokraciaAdminAdminCategoriesCreateDefaultCategoryFormOwner"
      label={t('admin.IssueCategoryForm.owner', { defaultValue: 'Owner' }) as string}
      labelList={[ownerData.owner?.representation?.toString() ?? '']}
      value={ownerData.owner}
      error={!!validation.get('owner')}
      helperText={validation.get('owner')}
      icon={<MdiIcon path="account" />}
      disabled={disabled}
      editMode={editMode}
      onSet={async () => {
        const res = await openRangeDialog<AdminUserStored, AdminUserQueryCustomizer>({
          id: 'RelationTypeedemokraciaAdminAdminEdemokraciaAdminIssueCategoryOwner',
          columns: ownerColumns,
          defaultSortField: ([{ field: 'representation', sort: 'asc' }] as GridSortItem[])[0],
          rangeCall: async (queryCustomizer) =>
            await adminIssueCategoryServiceImpl.getRangeForOwner(ownerData, processQueryCustomizer(queryCustomizer)),
          single: true,
          alreadySelectedItems: ownerData.owner?.__identifier as GridRowId,
          filterOptions: ownerRangeFilterOptions,
          initialQueryCustomizer: ownerInitialQueryCustomizer,
        });

        if (res === undefined) return;
        storeDiff('owner', res as AdminUserStored);
      }}
      onUnset={async () => {
        storeDiff('owner', null);
      }}
    />
  );
}
