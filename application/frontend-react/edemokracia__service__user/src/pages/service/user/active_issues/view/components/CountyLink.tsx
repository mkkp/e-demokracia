//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getLinksForPages(#application)
// Path expression: #pagePath(#self.pageDefinition)+'components/'+#linkComponentName(#self)+'.tsx'
// Template name: actor/src/pages/components/link.tsx
// Template file: actor/src/pages/components/link.tsx.hbs

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
  EdemokraciaIssueScope,
  EdemokraciaIssueStatus,
  EdemokraciaVoteType,
  ServiceCity,
  ServiceCityQueryCustomizer,
  ServiceCityStored,
  ServiceComment,
  ServiceCommentQueryCustomizer,
  ServiceCommentStored,
  ServiceCounty,
  ServiceCountyQueryCustomizer,
  ServiceCountyStored,
  ServiceDistrict,
  ServiceDistrictQueryCustomizer,
  ServiceDistrictStored,
  ServiceIssue,
  ServiceIssueAttachment,
  ServiceIssueAttachmentQueryCustomizer,
  ServiceIssueAttachmentStored,
  ServiceIssueCategory,
  ServiceIssueCategoryQueryCustomizer,
  ServiceIssueCategoryStored,
  ServiceIssueDebate,
  ServiceIssueDebateQueryCustomizer,
  ServiceIssueDebateStored,
  ServiceIssueQueryCustomizer,
  ServiceIssueStored,
  ServiceIssueType,
  ServiceIssueTypeQueryCustomizer,
  ServiceIssueTypeStored,
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
  _StringOperation,
} from '~/generated/data-api';
import { serviceIssueServiceForClassImpl, serviceCountyServiceForClassImpl } from '~/generated/data-axios';
import { useLinkViewCountyAction } from '../actions';

export type CountyLinkFilterInitializer = (ownerData: ServiceIssueStored) => Filter[] | undefined;

export const COUNTY_LINK_FILTER_INITIALIZER_INTERFACE_KEY = 'CountyLinkFilterInitializerHook';
export type CountyLinkFilterInitializerHook = () => CountyLinkFilterInitializer;

export interface CountyLinkProps {
  ownerData: ServiceIssueStored;
  validation: Map<keyof ServiceIssueStored, string>;
  fetchOwnerData: () => Promise<void>;
  onChange: (value: ServiceCounty | ServiceCountyStored | null) => void;
  disabled: boolean;
  readOnly: boolean;
  editMode: boolean;
}

export function CountyLink(props: CountyLinkProps) {
  const { ownerData, disabled, readOnly, editMode, fetchOwnerData, onChange, validation } = props;
  const { t } = useTranslation();
  const { openFilterDialog } = useFilterDialog();
  const { openRangeDialog } = useRangeDialog();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const { locale: l10nLocale } = useL10N();

  const { service: filterInitializerHook } = useTrackService<CountyLinkFilterInitializerHook>(
    `(${OBJECTCLASS}=${COUNTY_LINK_FILTER_INITIALIZER_INTERFACE_KEY})`,
  );
  const callFilterInitializer: CountyLinkFilterInitializer | undefined =
    filterInitializerHook && filterInitializerHook();

  const countySortModel: GridSortModel = [{ field: 'representation', sort: null }];

  const countyColumns: GridColDef<ServiceCountyStored>[] = [
    {
      ...baseColumnConfig,
      field: 'representation',
      headerName: t('service.IssueView.county.representation', { defaultValue: 'Representation' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
  ];

  const countyRangeFilterOptions: FilterOption[] = [
    {
      id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserActiveIssuesViewDefaultIssueViewEditOtherAreaAreaCountyRepresentationFilter',
      attributeName: 'representation',
      label: t('service.IssueView.county.representation', { defaultValue: 'Representation' }) as string,
      filterType: FilterType.string,
    },
  ];

  const countyInitialQueryCustomizer: ServiceCountyQueryCustomizer = {
    _mask: '{representation}',
    _orderBy: countySortModel.length
      ? [
          {
            attribute: countySortModel[0].field,
            descending: countySortModel[0].sort === 'desc',
          },
        ]
      : [],
  };

  const linkViewCountyAction = useLinkViewCountyAction();

  return (
    <AggregationInput
      name="county"
      id="LinkedemokraciaServiceUserEdemokraciaServiceUserActiveIssuesViewDefaultIssueViewEditOtherAreaAreaCounty"
      label={t('service.IssueView.county', { defaultValue: 'County' }) as string}
      labelList={[ownerData.county?.representation?.toString() ?? '']}
      ownerData={ownerData}
      error={!!validation.get('county')}
      helperText={validation.get('county')}
      icon={<MdiIcon path="castle" />}
      disabled={disabled}
      readOnly={readOnly}
      editMode={editMode}
      autoCompleteAttribute={'representation'}
      onAutoCompleteSelect={(county) => {
        // storeDiff('county', county);
        onChange(county as ServiceCountyStored);
      }}
      onView={async () => linkViewCountyAction(ownerData, ownerData?.county!, () => fetchOwnerData())}
      onUnset={async () => {
        // storeDiff('county', null);
        onChange(null);
      }}
      onSet={async () => {
        const res = await openRangeDialog<ServiceCountyStored, ServiceCountyQueryCustomizer>({
          id: 'RelationTypeedemokraciaServiceUserEdemokraciaServiceIssueCounty',
          columns: countyColumns,
          defaultSortField: ([{ field: 'representation', sort: null }] as GridSortItem[])[0],
          rangeCall: async (queryCustomizer) =>
            await serviceIssueServiceForClassImpl.getRangeForCounty(ownerData, processQueryCustomizer(queryCustomizer)),
          single: true,
          alreadySelectedItems: ownerData.county ? [ownerData.county] : undefined,
          filterOptions: countyRangeFilterOptions,
          initialQueryCustomizer: countyInitialQueryCustomizer,
          initialFilters: callFilterInitializer && callFilterInitializer(ownerData),
          editMode: editMode,
        });

        if (res === undefined) return;
        // storeDiff('county', res.value as ServiceCountyStored);
        onChange(res.value as ServiceCountyStored);
      }}
      onAutoCompleteSearch={async (searchText: string) => {
        const queryCustomizer: ServiceCountyQueryCustomizer = {
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
        return await serviceIssueServiceForClassImpl.getRangeForCounty(
          ownerData,
          processQueryCustomizer(queryCustomizer),
        );
      }}
    />
  );
}
