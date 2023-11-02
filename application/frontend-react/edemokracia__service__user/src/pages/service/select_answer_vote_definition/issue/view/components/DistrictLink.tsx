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
  ServiceCon,
  ServiceConQueryCustomizer,
  ServiceConStored,
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
  ServiceIssueQueryCustomizer,
  ServiceIssueStored,
  ServiceIssueType,
  ServiceIssueTypeQueryCustomizer,
  ServiceIssueTypeStored,
  ServicePro,
  ServiceProQueryCustomizer,
  ServiceProStored,
  ServiceSelectAnswerVoteDefinition,
  ServiceSelectAnswerVoteDefinitionStored,
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
  _StringOperation,
} from '~/generated/data-api';
import { serviceIssueServiceForClassImpl, serviceDistrictServiceForClassImpl } from '~/generated/data-axios';
import { useLinkViewDistrictAction } from '../actions';

export type DistrictLinkFilterInitializer = (ownerData: ServiceIssueStored) => Filter[] | undefined;

export const DISTRICT_LINK_FILTER_INITIALIZER_INTERFACE_KEY = 'DistrictLinkFilterInitializerHook';
export type DistrictLinkFilterInitializerHook = () => DistrictLinkFilterInitializer;

export interface DistrictLinkProps {
  ownerData: ServiceIssueStored;
  validation: Map<keyof ServiceIssueStored, string>;
  fetchOwnerData: () => Promise<void>;
  onChange: (value: ServiceDistrict | ServiceDistrictStored | null) => void;
  disabled: boolean;
  readOnly: boolean;
  editMode: boolean;
}

export function DistrictLink(props: DistrictLinkProps) {
  const { ownerData, disabled, readOnly, editMode, fetchOwnerData, onChange, validation } = props;
  const { t } = useTranslation();
  const { openFilterDialog } = useFilterDialog();
  const { openRangeDialog } = useRangeDialog();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const { locale: l10nLocale } = useL10N();

  const { service: filterInitializerHook } = useTrackService<DistrictLinkFilterInitializerHook>(
    `(${OBJECTCLASS}=${DISTRICT_LINK_FILTER_INITIALIZER_INTERFACE_KEY})`,
  );
  const callFilterInitializer: DistrictLinkFilterInitializer | undefined =
    filterInitializerHook && filterInitializerHook();

  const districtSortModel: GridSortModel = [{ field: 'representation', sort: null }];

  const districtColumns: GridColDef<ServiceDistrictStored>[] = [
    {
      ...baseColumnConfig,
      field: 'representation',
      headerName: t('service.IssueView.district.representation', { defaultValue: 'Representation' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
  ];

  const districtRangeFilterOptions: FilterOption[] = [
    {
      id: 'FilteredemokraciaServiceUserEdemokraciaServiceSelectAnswerVoteDefinitionIssueViewDefaultIssueViewEditOtherAreaAreaDistrictRepresentationFilter',
      attributeName: 'representation',
      label: t('service.IssueView.district.representation', { defaultValue: 'Representation' }) as string,
      filterType: FilterType.string,
    },
  ];

  const districtInitialQueryCustomizer: ServiceDistrictQueryCustomizer = {
    _mask: '{representation}',
    _orderBy: districtSortModel.length
      ? [
          {
            attribute: districtSortModel[0].field,
            descending: districtSortModel[0].sort === 'desc',
          },
        ]
      : [],
  };

  const linkViewDistrictAction = useLinkViewDistrictAction();

  return (
    <AggregationInput
      name="district"
      id="LinkedemokraciaServiceUserEdemokraciaServiceSelectAnswerVoteDefinitionIssueViewDefaultIssueViewEditOtherAreaAreaDistrict"
      label={t('service.IssueView.district', { defaultValue: 'District' }) as string}
      labelList={[ownerData.district?.representation?.toString() ?? '']}
      ownerData={ownerData}
      error={!!validation.get('district')}
      helperText={validation.get('district')}
      icon={<MdiIcon path="home-city" />}
      disabled={disabled}
      readOnly={readOnly}
      editMode={editMode}
      autoCompleteAttribute={'representation'}
      onAutoCompleteSelect={(district) => {
        // storeDiff('district', district);
        onChange(district as ServiceDistrictStored);
      }}
      onView={async () => linkViewDistrictAction(ownerData, ownerData?.district!, () => fetchOwnerData())}
      onUnset={async () => {
        // storeDiff('district', null);
        onChange(null);
      }}
      onSet={async () => {
        const res = await openRangeDialog<ServiceDistrictStored, ServiceDistrictQueryCustomizer>({
          id: 'RelationTypeedemokraciaServiceUserEdemokraciaServiceIssueDistrict',
          columns: districtColumns,
          defaultSortField: ([{ field: 'representation', sort: null }] as GridSortItem[])[0],
          rangeCall: async (queryCustomizer) =>
            await serviceIssueServiceForClassImpl.getRangeForDistrict(
              ownerData,
              processQueryCustomizer(queryCustomizer),
            ),
          single: true,
          alreadySelectedItems: ownerData.district ? [ownerData.district] : undefined,
          filterOptions: districtRangeFilterOptions,
          initialQueryCustomizer: districtInitialQueryCustomizer,
          initialFilters: callFilterInitializer && callFilterInitializer(ownerData),
          editMode: editMode,
        });

        if (res === undefined) return;
        // storeDiff('district', res.value as ServiceDistrictStored);
        onChange(res.value as ServiceDistrictStored);
      }}
      onAutoCompleteSearch={async (searchText: string) => {
        const queryCustomizer: ServiceDistrictQueryCustomizer = {
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
        return await serviceIssueServiceForClassImpl.getRangeForDistrict(
          ownerData,
          processQueryCustomizer(queryCustomizer),
        );
      }}
    />
  );
}
