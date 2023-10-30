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
import { serviceIssueServiceForClassImpl, serviceIssueTypeServiceForClassImpl } from '~/generated/data-axios';
import { useLinkViewIssueTypeAction } from '../actions';

export type IssueTypeLinkFilterInitializer = (ownerData: ServiceIssueStored) => Filter[] | undefined;

export const ISSUE_TYPE_LINK_FILTER_INITIALIZER_INTERFACE_KEY = 'IssueTypeLinkFilterInitializerHook';
export type IssueTypeLinkFilterInitializerHook = () => IssueTypeLinkFilterInitializer;

export interface IssueTypeLinkProps {
  ownerData: ServiceIssueStored;
  validation: Map<keyof ServiceIssueStored, string>;
  fetchOwnerData: () => Promise<void>;
  onChange: (value: ServiceIssueType | ServiceIssueTypeStored | null) => void;
  disabled: boolean;
  readOnly: boolean;
  editMode: boolean;
}

export function IssueTypeLink(props: IssueTypeLinkProps) {
  const { ownerData, disabled, readOnly, editMode, fetchOwnerData, onChange, validation } = props;
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

  const issueTypeSortModel: GridSortModel = [{ field: 'title', sort: null }];

  const issueTypeColumns: GridColDef<ServiceIssueTypeStored>[] = [
    {
      ...baseColumnConfig,
      field: 'title',
      headerName: t('service.IssueView.issueType.title', { defaultValue: 'Title' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
    {
      ...baseColumnConfig,
      field: 'description',
      headerName: t('service.IssueView.issueType.description', { defaultValue: 'Description' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
  ];

  const issueTypeRangeFilterOptions: FilterOption[] = [
    {
      id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserUserCreatedIssuesViewDefaultIssueViewEditIssueLabelWrapperIssueIssueTypeTitleFilter',
      attributeName: 'title',
      label: t('service.IssueView.issueType.title', { defaultValue: 'Title' }) as string,
      filterType: FilterType.string,
    },

    {
      id: 'FilteredemokraciaServiceUserEdemokraciaServiceUserUserCreatedIssuesViewDefaultIssueViewEditIssueLabelWrapperIssueIssueTypeDescriptionFilter',
      attributeName: 'description',
      label: t('service.IssueView.issueType.description', { defaultValue: 'Description' }) as string,
      filterType: FilterType.string,
    },
  ];

  const issueTypeInitialQueryCustomizer: ServiceIssueTypeQueryCustomizer = {
    _mask: '{title,description}',
    _orderBy: issueTypeSortModel.length
      ? [
          {
            attribute: issueTypeSortModel[0].field,
            descending: issueTypeSortModel[0].sort === 'desc',
          },
        ]
      : [],
  };

  const linkViewIssueTypeAction = useLinkViewIssueTypeAction();

  return (
    <AggregationInput
      name="issueType"
      id="LinkedemokraciaServiceUserEdemokraciaServiceUserUserCreatedIssuesViewDefaultIssueViewEditIssueLabelWrapperIssueIssueType"
      label={t('service.IssueView.issueType', { defaultValue: 'Issue Type' }) as string}
      labelList={[ownerData.issueType?.title?.toString() ?? '', ownerData.issueType?.description?.toString() ?? '']}
      ownerData={ownerData}
      error={!!validation.get('issueType')}
      helperText={validation.get('issueType')}
      icon={<MdiIcon path="folder-open" />}
      disabled={disabled}
      readOnly={readOnly}
      editMode={editMode}
      autoCompleteAttribute={'title'}
      onAutoCompleteSelect={(issueType) => {
        // storeDiff('issueType', issueType);
        onChange(issueType as ServiceIssueTypeStored);
      }}
      onView={async () => linkViewIssueTypeAction(ownerData, ownerData?.issueType!, () => fetchOwnerData())}
      onUnset={async () => {
        // storeDiff('issueType', null);
        onChange(null);
      }}
      onSet={async () => {
        const res = await openRangeDialog<ServiceIssueTypeStored, ServiceIssueTypeQueryCustomizer>({
          id: 'RelationTypeedemokraciaServiceUserEdemokraciaServiceIssueIssueType',
          columns: issueTypeColumns,
          defaultSortField: ([{ field: 'title', sort: null }] as GridSortItem[])[0],
          rangeCall: async (queryCustomizer) =>
            await serviceIssueServiceForClassImpl.getRangeForIssueType(
              ownerData,
              processQueryCustomizer(queryCustomizer),
            ),
          single: true,
          alreadySelectedItems: ownerData.issueType ? [ownerData.issueType] : undefined,
          filterOptions: issueTypeRangeFilterOptions,
          initialQueryCustomizer: issueTypeInitialQueryCustomizer,
          initialFilters: callFilterInitializer && callFilterInitializer(ownerData),
          editMode: editMode,
        });

        if (res === undefined) return;
        // storeDiff('issueType', res.value as ServiceIssueTypeStored);
        onChange(res.value as ServiceIssueTypeStored);
      }}
      onAutoCompleteSearch={async (searchText: string) => {
        const queryCustomizer: ServiceIssueTypeQueryCustomizer = {
          ...(searchText?.length
            ? {
                title: [{ operator: _StringOperation.like, value: searchText }],
              }
            : {}),
          ...mapAllFiltersToQueryCustomizerProperties(
            (callFilterInitializer && callFilterInitializer(ownerData)) || [],
          ),
          _mask: '{title,description}',
          _orderBy: [{ attribute: 'title', descending: false }],
          _seek: { limit: 10 },
        };
        return await serviceIssueServiceForClassImpl.getRangeForIssueType(
          ownerData,
          processQueryCustomizer(queryCustomizer),
        );
      }}
    />
  );
}
