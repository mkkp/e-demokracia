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
  ServiceIssueCategory,
  ServiceIssueCategoryQueryCustomizer,
  ServiceIssueCategoryStored,
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
  _StringOperation,
} from '~/generated/data-api';
import { serviceIssueCategoryServiceForClassImpl } from '~/generated/data-axios';
export type OwnerLinkFilterInitializer = (ownerData: ServiceIssueCategory) => Filter[] | undefined;

export const OWNER_LINK_FILTER_INITIALIZER_INTERFACE_KEY = 'OwnerLinkFilterInitializerHook';
export type OwnerLinkFilterInitializerHook = () => OwnerLinkFilterInitializer;

export interface OwnerLinkProps {
  ownerData: ServiceIssueCategory;
  disabled: boolean;
  readOnly: boolean;
  editMode: boolean;
  onChange: (value: ServiceServiceUser | ServiceServiceUserStored | null) => void;
  validation: Map<keyof ServiceIssueCategory, string>;
}

export function OwnerLink(props: OwnerLinkProps) {
  const { ownerData, disabled, readOnly, editMode, onChange, validation } = props;
  const { t } = useTranslation();
  const { openFilterDialog } = useFilterDialog();
  const { openRangeDialog } = useRangeDialog();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const { locale: l10nLocale } = useL10N();

  const { service: filterInitializerHook } = useTrackService<OwnerLinkFilterInitializerHook>(
    `(${OBJECTCLASS}=${OWNER_LINK_FILTER_INITIALIZER_INTERFACE_KEY})`,
  );
  const callFilterInitializer: OwnerLinkFilterInitializer | undefined =
    filterInitializerHook && filterInitializerHook();

  const ownerSortModel: GridSortModel = [{ field: 'representation', sort: null }];

  const ownerColumns: GridColDef<ServiceServiceUserStored>[] = [
    {
      ...baseColumnConfig,
      field: 'representation',
      headerName: t('service.IssueCategoryForm.owner.representation', { defaultValue: 'Representation' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
  ];

  const ownerRangeFilterOptions: FilterOption[] = [
    {
      id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserAdminCategoriesCreateDefaultIssueCategoryFormOwnerRepresentationFilter',
      attributeName: 'representation',
      label: t('service.IssueCategoryForm.owner.representation', { defaultValue: 'Representation' }) as string,
      filterType: FilterType.string,
    },
  ];

  const ownerInitialQueryCustomizer: ServiceServiceUserQueryCustomizer = {
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
      id="LinkedemokraciaServiceUserEdemokraciaServiceUserAdminCategoriesCreateDefaultIssueCategoryFormOwner"
      label={t('service.IssueCategoryForm.owner', { defaultValue: 'Owner' }) as string}
      labelList={[ownerData.owner?.representation?.toString() ?? '']}
      ownerData={ownerData}
      error={!!validation.get('owner')}
      helperText={validation.get('owner')}
      icon={<MdiIcon path="account" />}
      disabled={disabled}
      readOnly={readOnly}
      editMode={editMode}
      autoCompleteAttribute={'representation'}
      onAutoCompleteSelect={(owner) => {
        // storeDiff('owner', owner);
        onChange(owner as ServiceServiceUserStored);
      }}
      onSet={async () => {
        const res = await openRangeDialog<ServiceServiceUserStored, ServiceServiceUserQueryCustomizer>({
          id: 'RelationTypeedemokraciaServiceUserEdemokraciaServiceIssueCategoryOwner',
          columns: ownerColumns,
          defaultSortField: ([{ field: 'representation', sort: null }] as GridSortItem[])[0],
          rangeCall: async (queryCustomizer) =>
            await serviceIssueCategoryServiceForClassImpl.getRangeForOwner(
              ownerData,
              processQueryCustomizer(queryCustomizer),
            ),
          single: true,
          alreadySelectedItems: ownerData.owner ? [ownerData.owner] : undefined,
          filterOptions: ownerRangeFilterOptions,
          initialQueryCustomizer: ownerInitialQueryCustomizer,
          initialFilters: callFilterInitializer && callFilterInitializer(ownerData),
        });

        if (res === undefined) return;
        // storeDiff('owner', res.value as ServiceServiceUserStored);
        onChange(res.value as ServiceServiceUserStored);
      }}
      onAutoCompleteSearch={async (searchText: string) => {
        const queryCustomizer: ServiceServiceUserQueryCustomizer = {
          ...(searchText?.length
            ? {
                representation: [{ operator: _StringOperation.like, value: searchText }],
              }
            : {}),
          ...mapAllFiltersToQueryCustomizerProperties(
            (callFilterInitializer && callFilterInitializer(ownerData)) || [],
          ),
          _mask: '{representation}',
          _orderBy: [{ attribute: 'representation', descending: false }],
          _seek: { limit: 10 },
        };
        return await serviceIssueCategoryServiceForClassImpl.getRangeForOwner(
          ownerData,
          processQueryCustomizer(queryCustomizer),
        );
      }}
      onUnset={async () => {
        // storeDiff('owner', null);
        onChange(null);
      }}
    />
  );
}
