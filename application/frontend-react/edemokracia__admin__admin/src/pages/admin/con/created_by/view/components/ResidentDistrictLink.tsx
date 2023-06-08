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
  AdminCon,
  AdminConStored,
  AdminCounty,
  AdminCountyQueryCustomizer,
  AdminCountyStored,
  AdminDistrict,
  AdminDistrictQueryCustomizer,
  AdminDistrictStored,
  AdminUser,
  AdminUserQueryCustomizer,
  AdminUserStored,
} from '~/generated/data-api';
import { adminUserServiceImpl, adminDistrictServiceImpl } from '~/generated/data-axios';

import { useLinkViewResidentDistrictAction } from '../actions';

export interface ResidentDistrictLinkProps {
  ownerData: AdminUserStored;
  storeDiff: (attributeName: keyof AdminUserStored, value: any) => void;
  validation: Map<keyof AdminUserStored, string>;
  fetchOwnerData: () => Promise<void>;
  disabled: boolean;
  editMode: boolean;
}

export function ResidentDistrictLink(props: ResidentDistrictLinkProps) {
  const { ownerData, disabled, editMode, fetchOwnerData, storeDiff, validation } = props;
  const { t } = useTranslation();
  const { openFilterDialog } = useFilterDialog();
  const { openRangeDialog } = useRangeDialog();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const { locale: l10nLocale } = useL10N();

  const residentDistrictSortModel: GridSortModel = [{ field: 'representation', sort: 'asc' }];

  const residentDistrictColumns: GridColDef<AdminDistrictStored>[] = [
    {
      ...baseColumnConfig,
      field: 'representation',
      headerName: t('admin.UserView.residentDistrict.representation', { defaultValue: 'District' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
    },
  ];

  const residentDistrictRangeFilterOptions: FilterOption[] = [
    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminConCreatedByViewDefaultUserViewAreasLabelWrapperAreasResidencyResidentDistrictRepresentationFilter',
      attributeName: 'representation',
      label: t('admin.UserView.residentDistrict.representation', { defaultValue: 'District' }) as string,
      filterType: FilterType.string,
    },
  ];

  const residentDistrictInitialQueryCustomizer: AdminDistrictQueryCustomizer = {
    _mask: '{representation}',
    _orderBy: residentDistrictSortModel.length
      ? [
          {
            attribute: residentDistrictSortModel[0].field,
            descending: residentDistrictSortModel[0].sort === 'desc',
          },
        ]
      : [],
  };

  const linkViewResidentDistrictAction = useLinkViewResidentDistrictAction();

  return (
    <AggregationInput
      name="residentDistrict"
      id="LinkedemokraciaAdminAdminEdemokraciaAdminConCreatedByViewDefaultUserViewAreasLabelWrapperAreasResidencyResidentDistrict"
      label={t('admin.UserView.residentDistrict', { defaultValue: 'Resident district' }) as string}
      labelList={[ownerData.residentDistrict?.representation?.toString() ?? '']}
      value={ownerData.residentDistrict}
      error={!!validation.get('residentDistrict')}
      helperText={validation.get('residentDistrict')}
      icon={<MdiIcon path="home-city" />}
      disabled={disabled}
      editMode={editMode}
      onView={async () => linkViewResidentDistrictAction(ownerData, ownerData?.residentDistrict!)}
      onUnset={async () => {
        storeDiff('residentDistrict', null);
      }}
      onSet={async () => {
        const res = await openRangeDialog<AdminDistrictStored, AdminDistrictQueryCustomizer>({
          id: 'RelationTypeedemokraciaAdminAdminEdemokraciaAdminUserResidentDistrict',
          columns: residentDistrictColumns,
          defaultSortField: ([{ field: 'representation', sort: 'asc' }] as GridSortItem[])[0],
          rangeCall: async (queryCustomizer) =>
            await adminUserServiceImpl.getRangeForResidentDistrict(ownerData, processQueryCustomizer(queryCustomizer)),
          single: true,
          alreadySelectedItems: ownerData.residentDistrict?.__identifier as GridRowId,
          filterOptions: residentDistrictRangeFilterOptions,
          initialQueryCustomizer: residentDistrictInitialQueryCustomizer,
        });

        if (res === undefined) return;
        storeDiff('residentDistrict', res as AdminDistrictStored);
      }}
    />
  );
}
