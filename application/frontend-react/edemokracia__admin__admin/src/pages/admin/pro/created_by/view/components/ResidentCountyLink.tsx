//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getLinksForPages(#application)
// Path expression: #pagePath(#self.pageDefinition)+'components/'+#linkComponentName(#self)+'.tsx'
// Template name: actor/src/pages/components/link.tsx
// Template file: actor/src/pages/components/link.tsx.hbs

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
  AdminDistrict,
  AdminDistrictQueryCustomizer,
  AdminDistrictStored,
  AdminPro,
  AdminProStored,
  AdminUser,
  AdminUserQueryCustomizer,
  AdminUserStored,
} from '~/generated/data-api';
import { adminUserServiceImpl, adminCountyServiceImpl } from '~/generated/data-axios';

import { useLinkViewResidentCountyAction } from '../actions';

export interface ResidentCountyLinkProps {
  ownerData: AdminUserStored;
  storeDiff: (attributeName: keyof AdminUserStored, value: any) => void;
  validation: Map<keyof AdminUserStored, string>;
  fetchOwnerData: () => Promise<void>;
  disabled: boolean;
  editMode: boolean;
}

export function ResidentCountyLink(props: ResidentCountyLinkProps) {
  const { ownerData, disabled, editMode, fetchOwnerData, storeDiff, validation } = props;
  const { t } = useTranslation();
  const { openFilterDialog } = useFilterDialog();
  const { openRangeDialog } = useRangeDialog();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const { locale: l10nLocale } = useL10N();

  const residentCountySortModel: GridSortModel = [{ field: 'representation', sort: 'asc' }];

  const residentCountyColumns: GridColDef<AdminCountyStored>[] = [
    {
      ...baseColumnConfig,
      field: 'representation',
      headerName: t('admin.UserView.residentCounty.representation', { defaultValue: 'County' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
    },
  ];

  const residentCountyRangeFilterOptions: FilterOption[] = [
    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminProCreatedByViewDefaultUserViewAreasLabelWrapperAreasResidencyResidentCountyRepresentationFilter',
      attributeName: 'representation',
      label: t('admin.UserView.residentCounty.representation', { defaultValue: 'County' }) as string,
      filterType: FilterType.string,
    },
  ];

  const residentCountyInitialQueryCustomizer: AdminCountyQueryCustomizer = {
    _mask: '{representation}',
    _orderBy: residentCountySortModel.length
      ? [
          {
            attribute: residentCountySortModel[0].field,
            descending: residentCountySortModel[0].sort === 'desc',
          },
        ]
      : [],
  };

  const linkViewResidentCountyAction = useLinkViewResidentCountyAction();

  return (
    <AggregationInput
      name="residentCounty"
      id="LinkedemokraciaAdminAdminEdemokraciaAdminProCreatedByViewDefaultUserViewAreasLabelWrapperAreasResidencyResidentCounty"
      label={t('admin.UserView.residentCounty', { defaultValue: 'Resident county' }) as string}
      labelList={[ownerData.residentCounty?.representation?.toString() ?? '']}
      value={ownerData.residentCounty}
      error={!!validation.get('residentCounty')}
      helperText={validation.get('residentCounty')}
      icon={<MdiIcon path="map" />}
      disabled={disabled}
      editMode={editMode}
      onView={async () => linkViewResidentCountyAction(ownerData, ownerData?.residentCounty!)}
      onUnset={async () => {
        storeDiff('residentCounty', null);
      }}
      onSet={async () => {
        const res = await openRangeDialog<AdminCountyStored, AdminCountyQueryCustomizer>({
          id: 'RelationTypeedemokraciaAdminAdminEdemokraciaAdminUserResidentCounty',
          columns: residentCountyColumns,
          defaultSortField: ([{ field: 'representation', sort: 'asc' }] as GridSortItem[])[0],
          rangeCall: async (queryCustomizer) =>
            await adminUserServiceImpl.getRangeForResidentCounty(ownerData, processQueryCustomizer(queryCustomizer)),
          single: true,
          alreadySelectedItems: ownerData.residentCounty?.__identifier as GridRowId,
          filterOptions: residentCountyRangeFilterOptions,
          initialQueryCustomizer: residentCountyInitialQueryCustomizer,
        });

        if (res === undefined) return;
        storeDiff('residentCounty', res as AdminCountyStored);
      }}
    />
  );
}
