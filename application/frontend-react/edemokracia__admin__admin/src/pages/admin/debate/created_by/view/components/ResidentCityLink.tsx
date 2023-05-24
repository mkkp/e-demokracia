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
  AdminDebate,
  AdminDebateStored,
  AdminDistrict,
  AdminDistrictQueryCustomizer,
  AdminDistrictStored,
  AdminUser,
  AdminUserQueryCustomizer,
  AdminUserStored,
} from '~/generated/data-api';
import { adminUserServiceImpl, adminCityServiceImpl } from '~/generated/data-axios';

import { useLinkViewResidentCityAction } from '../actions';

export interface ResidentCityLinkProps {
  ownerData: AdminUserStored;
  storeDiff: (attributeName: keyof AdminUserStored, value: any) => void;
  validation: Map<keyof AdminUserStored, string>;
  fetchOwnerData: () => Promise<void>;
  disabled: boolean;
  editMode: boolean;
}

export function ResidentCityLink(props: ResidentCityLinkProps) {
  const { ownerData, disabled, editMode, fetchOwnerData, storeDiff, validation } = props;
  const { t } = useTranslation();
  const { openFilterDialog } = useFilterDialog();
  const { openRangeDialog } = useRangeDialog();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const { locale: l10nLocale } = useL10N();

  const residentCitySortModel: GridSortModel = [{ field: 'representation', sort: 'asc' }];

  const residentCityColumns: GridColDef<AdminCityStored>[] = [
    {
      ...baseColumnConfig,
      field: 'representation',
      headerName: t('admin.UserView.residentCity.representation', { defaultValue: 'City' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
    },
  ];

  const residentCityRangeFilterOptions: FilterOption[] = [
    {
      id: 'FilteredemokraciaAdminAdminEdemokraciaAdminDebateCreatedByViewDefaultUserViewAreasLabelWrapperAreasResidencyResidentCityRepresentationFilter',
      attributeName: 'representation',
      label: t('admin.UserView.residentCity.representation', { defaultValue: 'City' }) as string,
      filterType: FilterType.string,
    },
  ];

  const residentCityInitialQueryCustomizer: AdminCityQueryCustomizer = {
    _mask: '{representation}',
    _orderBy: residentCitySortModel.length
      ? [
          {
            attribute: residentCitySortModel[0].field,
            descending: residentCitySortModel[0].sort === 'desc',
          },
        ]
      : [],
  };

  const linkViewResidentCityAction = useLinkViewResidentCityAction();

  return (
    <AggregationInput
      name="residentCity"
      id="LinkedemokraciaAdminAdminEdemokraciaAdminDebateCreatedByViewDefaultUserViewAreasLabelWrapperAreasResidencyResidentCity"
      label={t('admin.UserView.residentCity', { defaultValue: 'Resident city' }) as string}
      labelList={[ownerData.residentCity?.representation?.toString() ?? '']}
      value={ownerData.residentCity}
      error={!!validation.get('residentCity')}
      helperText={validation.get('residentCity')}
      icon={<MdiIcon path="city" />}
      disabled={disabled}
      editMode={editMode}
      onView={async () => linkViewResidentCityAction(ownerData, ownerData?.residentCity!)}
      onUnset={async () => {
        storeDiff('residentCity', null);
      }}
      onSet={async () => {
        const res = await openRangeDialog<AdminCityStored, AdminCityQueryCustomizer>({
          id: 'RelationTypeedemokraciaAdminAdminEdemokraciaAdminUserResidentCity',
          columns: residentCityColumns,
          defaultSortField: ([{ field: 'representation', sort: 'asc' }] as GridSortItem[])[0],
          rangeCall: async (queryCustomizer) =>
            await adminUserServiceImpl.getRangeForResidentCity(ownerData, processQueryCustomizer(queryCustomizer)),
          single: true,
          alreadySelectedItems: ownerData.residentCity?.__identifier as GridRowId,
          filterOptions: residentCityRangeFilterOptions,
          initialQueryCustomizer: residentCityInitialQueryCustomizer,
        });

        if (res === undefined) return;
        storeDiff('residentCity', res as AdminCityStored);
      }}
    />
  );
}
