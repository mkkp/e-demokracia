//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getTablesForPageContainers(#application)
// Path expression: 'src/containers/'+#containerPath(#self.pageContainer)+'/components/'+#tableComponentName(#self)+'.tsx'
// Template name: actor/src/containers/components/table.tsx
// Template file: actor/src/containers/components/table.tsx.hbs

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { GridLogicOperator, GridToolbarContainer, useGridApiRef } from '@mui/x-data-grid';
import type {
  GridColDef,
  GridFilterModel,
  GridRenderCellParams,
  GridRowClassNameParams,
  GridRowId,
  GridRowModel,
  GridRowParams,
  GridRowSelectionModel,
  GridSortItem,
  GridSortModel,
  GridValidRowModel,
  GridValueFormatterParams,
} from '@mui/x-data-grid';
import { OBJECTCLASS } from '@pandino/pandino-api';
import { ComponentProxy, useTrackComponent } from '@pandino/react-hooks';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { Dispatch, ElementType, FC, MouseEvent, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { CustomTablePagination, MdiIcon } from '~/components';
import type { Filter, FilterOption } from '~/components-api';
import { FilterType } from '~/components-api';
import { useConfirmDialog } from '~/components/dialog';
import {
  ContextMenu,
  StripedDataGrid,
  columnsActionCalculator,
  dateTimeColumnOperators,
  numericColumnOperators,
  singleSelectColumnOperators,
} from '~/components/table';
import type { ContextMenuApi } from '~/components/table/ContextMenu';
import { baseColumnConfig, basePageSizeOptions, baseTableConfig, filterDebounceMs } from '~/config';
import { CUSTOM_VISUAL_ELEMENT_INTERFACE_KEY } from '~/custom';
import { useDataStore } from '~/hooks';
import { useL10N } from '~/l10n/l10n-context';
import type {
  ServiceUserVoteDefinition,
  ServiceUserVoteDefinitionStored,
  ServiceVoteDefinition,
  ServiceVoteDefinitionQueryCustomizer,
  ServiceVoteDefinitionStored,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import type { JudoRestResponse } from '~/services/data-api/rest';
import {
  TABLE_COLUMN_CUSTOMIZER_HOOK_INTERFACE_KEY,
  getUpdatedRowsSelected,
  mapAllFiltersToQueryCustomizerProperties,
  processQueryCustomizer,
  randomUtils,
  serviceDateToUiDate,
  useErrorHandler,
} from '~/utilities';
import type { ColumnCustomizerHook, DialogResult, SidekickComponentProps, TableRowAction } from '~/utilities';

export interface ServiceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsInActivityCitiesComponentActionDefinitions {
  activeVoteDefinitionsInActivityCitiesFilterAction?: (
    id: string,
    filterOptions: FilterOption[],
    model?: GridFilterModel,
    filters?: Filter[],
  ) => Promise<{ model?: GridFilterModel; filters?: Filter[] }>;
  activeVoteDefinitionsInActivityCitiesRefreshAction?: (
    queryCustomizer: ServiceVoteDefinitionQueryCustomizer,
  ) => Promise<JudoRestResponse<ServiceVoteDefinitionStored[]>>;
  getActiveVoteDefinitionsInActivityCitiesMask?: () => string;
  activeVoteDefinitionsInActivityCitiesOpenPageAction?: (
    row: ServiceVoteDefinitionStored,
    isDraft?: boolean,
  ) => Promise<void>;
  activeVoteDefinitionsInActivityCitiesVoteRatingAction?: (row: ServiceVoteDefinitionStored) => Promise<void>;
  activeVoteDefinitionsInActivityCitiesVoteSelectAnswerAction?: (row: ServiceVoteDefinitionStored) => Promise<void>;
  activeVoteDefinitionsInActivityCitiesVoteYesNoAction?: (row: ServiceVoteDefinitionStored) => Promise<void>;
  activeVoteDefinitionsInActivityCitiesVoteYesNoAbstainAction?: (row: ServiceVoteDefinitionStored) => Promise<void>;
  activeVoteDefinitionsInActivityCitiesAdditionalToolbarButtons?: (
    data: ServiceVoteDefinitionStored[],
    isLoading: boolean,
    selectedRows: ServiceVoteDefinitionStored[],
    clearSelections: () => void,
    ownerData: ServiceUserVoteDefinitionStored,
    editMode: boolean,
    isFormUpdateable: () => boolean,
  ) => Record<string, ElementType>;
}

export interface ServiceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsInActivityCitiesComponentProps {
  uniqueId: string;
  actions: ServiceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsInActivityCitiesComponentActionDefinitions;
  refreshCounter: number;
  isOwnerLoading?: boolean;
  isDraft?: boolean;
  validationError?: string;
  ownerData: ServiceUserVoteDefinitionStored;
  editMode: boolean;
  isFormUpdateable: () => boolean;
}

export const SERVICE_USER_VOTE_DEFINITION_USER_VOTE_DEFINITION_VIEW_EDIT_ACTIVE_VOTE_DEFINITIONS_IN_ACTIVITY_CITIES_COMPONENT_SIDEKICK_COMPONENT_INTERFACE_KEY =
  'ServiceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsInActivityCitiesComponentSidekickComponent';

// XMIID: User/(esm/_59d3wF5LEe6vsex_cZNQbQ)/TabularReferenceFieldRelationDefinedTable
// Name: activeVoteDefinitionsInActivityCities
export function ServiceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsInActivityCitiesComponent(
  props: ServiceUserVoteDefinitionUserVoteDefinition_View_EditActiveVoteDefinitionsInActivityCitiesComponentProps,
) {
  const {
    uniqueId,
    actions,
    refreshCounter,
    isOwnerLoading,
    isDraft,
    validationError,
    ownerData,
    editMode,
    isFormUpdateable,
  } = props;
  const apiRef = useGridApiRef();
  const generatorUUIDv4 = randomUtils.getGeneratorUUIDv4();
  const sidekickComponentFilter = `(&(${OBJECTCLASS}=${CUSTOM_VISUAL_ELEMENT_INTERFACE_KEY})(component=${SERVICE_USER_VOTE_DEFINITION_USER_VOTE_DEFINITION_VIEW_EDIT_ACTIVE_VOTE_DEFINITIONS_IN_ACTIVITY_CITIES_COMPONENT_SIDEKICK_COMPONENT_INTERFACE_KEY}))`;
  const filterModelKey = `User/(esm/_59d3wF5LEe6vsex_cZNQbQ)/TabularReferenceFieldRelationDefinedTable-${uniqueId}-${generatorUUIDv4}-filterModel`;
  const filtersKey = `User/(esm/_59d3wF5LEe6vsex_cZNQbQ)/TabularReferenceFieldRelationDefinedTable-${uniqueId}-${generatorUUIDv4}-filters`;
  const rowsPerPageKey = `User/(esm/_59d3wF5LEe6vsex_cZNQbQ)/TabularReferenceFieldRelationDefinedTable-${uniqueId}-${generatorUUIDv4}-rowsPerPage`;

  const { openConfirmDialog } = useConfirmDialog();
  const { getItemParsed, getItemParsedWithDefault, setItemStringified } = useDataStore('sessionStorage');
  const { locale: l10nLocale } = useL10N();
  const { t } = useTranslation();
  const handleError = useErrorHandler();

  const [isInternalLoading, setIsInternalLoading] = useState<boolean>(false);
  const [data, setData] = useState<GridRowModel<ServiceVoteDefinitionStored>[]>([]);
  const [selectionModel, setSelectionModel] = useState<GridRowSelectionModel>([]);
  const [sortModel, setSortModel] = useState<GridSortModel>([{ field: 'countyRepresentation', sort: null }]);
  const [filterModel, setFilterModel] = useState<GridFilterModel>(
    getItemParsedWithDefault(filterModelKey, { items: [] }),
  );
  const [filters, setFilters] = useState<Filter[]>(getItemParsedWithDefault(filtersKey, []));
  const [rowsPerPage, setRowsPerPage] = useState<number>(getItemParsedWithDefault(rowsPerPageKey, 10));
  const [paginationModel, setPaginationModel] = useState({
    pageSize: rowsPerPage,
    page: 0,
  });
  const [queryCustomizer, setQueryCustomizer] = useState<ServiceVoteDefinitionQueryCustomizer>({
    _mask: '{cityRepresentation,closeAt,countyRepresentation,created,numberOfVotes,scope,status,title,voteType}',
    _seek: {
      limit: rowsPerPage + 1,
    },
    _orderBy: sortModel.length
      ? [
          {
            attribute: sortModel[0].field,
            descending: sortModel[0].sort === 'desc',
          },
        ]
      : [],
    ...mapAllFiltersToQueryCustomizerProperties(filters),
  });
  const [page, setPage] = useState<number>(0);
  const [rowCount, setRowCount] = useState<number>(0);
  const [lastItem, setLastItem] = useState<ServiceVoteDefinitionStored>();
  const [firstItem, setFirstItem] = useState<ServiceVoteDefinitionStored>();
  const [isNextButtonEnabled, setIsNextButtonEnabled] = useState<boolean>(true);
  const SidekickComponent =
    useTrackComponent<FC<SidekickComponentProps<ServiceVoteDefinitionStored>>>(sidekickComponentFilter);

  const isLoading = useMemo(() => isInternalLoading || !!isOwnerLoading, [isInternalLoading, isOwnerLoading]);

  const selectedRows = useRef<ServiceVoteDefinitionStored[]>([]);

  const countyRepresentationColumn: GridColDef<ServiceVoteDefinitionStored> = {
    ...baseColumnConfig,
    field: 'countyRepresentation',
    headerName: t(
      'service.UserVoteDefinition.UserVoteDefinition_View_Edit.activeVoteDefinitionsInActivityCities.countyRepresentation',
      { defaultValue: 'CountyRepresentation' },
    ) as string,
    headerClassName: 'data-grid-column-header',

    width: 230,
    type: 'string',
    filterable: false && true,
  };
  const cityRepresentationColumn: GridColDef<ServiceVoteDefinitionStored> = {
    ...baseColumnConfig,
    field: 'cityRepresentation',
    headerName: t(
      'service.UserVoteDefinition.UserVoteDefinition_View_Edit.activeVoteDefinitionsInActivityCities.cityRepresentation',
      { defaultValue: 'CityRepresentation' },
    ) as string,
    headerClassName: 'data-grid-column-header',

    width: 230,
    type: 'string',
    filterable: false && true,
  };
  const titleColumn: GridColDef<ServiceVoteDefinitionStored> = {
    ...baseColumnConfig,
    field: 'title',
    headerName: t(
      'service.UserVoteDefinition.UserVoteDefinition_View_Edit.activeVoteDefinitionsInActivityCities.title',
      { defaultValue: 'Title' },
    ) as string,
    headerClassName: 'data-grid-column-header',

    width: 230,
    type: 'string',
    filterable: false && true,
  };
  const voteTypeColumn: GridColDef<ServiceVoteDefinitionStored> = {
    ...baseColumnConfig,
    field: 'voteType',
    headerName: t(
      'service.UserVoteDefinition.UserVoteDefinition_View_Edit.activeVoteDefinitionsInActivityCities.voteType',
      { defaultValue: 'VoteType' },
    ) as string,
    headerClassName: 'data-grid-column-header',

    width: 170,
    type: 'singleSelect',
    filterable: false && true,
    valueFormatter: ({ value }: GridValueFormatterParams<string>) => {
      if (value !== undefined && value !== null) {
        return t(`enumerations.VoteType.${value}`, { defaultValue: value });
      }
    },
  };
  const numberOfVotesColumn: GridColDef<ServiceVoteDefinitionStored> = {
    ...baseColumnConfig,
    field: 'numberOfVotes',
    headerName: t(
      'service.UserVoteDefinition.UserVoteDefinition_View_Edit.activeVoteDefinitionsInActivityCities.numberOfVotes',
      { defaultValue: 'NumberOfVotes' },
    ) as string,
    headerClassName: 'data-grid-column-header',

    width: 100,
    type: 'number',
    filterable: false && true,
    valueFormatter: ({ value }: GridValueFormatterParams<number>) => {
      if (value === null || value === undefined) {
        return '';
      }
      return new Intl.NumberFormat(l10nLocale).format(value);
    },
  };
  const createdColumn: GridColDef<ServiceVoteDefinitionStored> = {
    ...baseColumnConfig,
    field: 'created',
    headerName: t(
      'service.UserVoteDefinition.UserVoteDefinition_View_Edit.activeVoteDefinitionsInActivityCities.created',
      { defaultValue: 'Created' },
    ) as string,
    headerClassName: 'data-grid-column-header',

    width: 170,
    type: 'dateTime',
    filterable: false && true,
    valueGetter: ({ value }) => value && serviceDateToUiDate(value),
    valueFormatter: ({ value }: GridValueFormatterParams<Date>) => {
      return (
        value &&
        new Intl.DateTimeFormat(l10nLocale, {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        }).format(value)
      );
    },
  };
  const closeAtColumn: GridColDef<ServiceVoteDefinitionStored> = {
    ...baseColumnConfig,
    field: 'closeAt',
    headerName: t(
      'service.UserVoteDefinition.UserVoteDefinition_View_Edit.activeVoteDefinitionsInActivityCities.closeAt',
      { defaultValue: 'CloseAt' },
    ) as string,
    headerClassName: 'data-grid-column-header',

    width: 170,
    type: 'dateTime',
    filterable: false && true,
    valueGetter: ({ value }) => value && serviceDateToUiDate(value),
    valueFormatter: ({ value }: GridValueFormatterParams<Date>) => {
      return (
        value &&
        new Intl.DateTimeFormat(l10nLocale, {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        }).format(value)
      );
    },
  };
  const scopeColumn: GridColDef<ServiceVoteDefinitionStored> = {
    ...baseColumnConfig,
    field: 'scope',
    headerName: t(
      'service.UserVoteDefinition.UserVoteDefinition_View_Edit.activeVoteDefinitionsInActivityCities.scope',
      { defaultValue: 'Scope' },
    ) as string,
    headerClassName: 'data-grid-column-header',

    width: 170,
    type: 'singleSelect',
    filterable: false && true,
    valueFormatter: ({ value }: GridValueFormatterParams<string>) => {
      if (value !== undefined && value !== null) {
        return t(`enumerations.IssueScope.${value}`, { defaultValue: value });
      }
    },
  };
  const statusColumn: GridColDef<ServiceVoteDefinitionStored> = {
    ...baseColumnConfig,
    field: 'status',
    headerName: t(
      'service.UserVoteDefinition.UserVoteDefinition_View_Edit.activeVoteDefinitionsInActivityCities.status',
      { defaultValue: 'Status' },
    ) as string,
    headerClassName: 'data-grid-column-header',

    width: 170,
    type: 'singleSelect',
    filterable: false && true,
    valueFormatter: ({ value }: GridValueFormatterParams<string>) => {
      if (value !== undefined && value !== null) {
        return t(`enumerations.VoteStatus.${value}`, { defaultValue: value });
      }
    },
  };

  const columns = useMemo<GridColDef<ServiceVoteDefinitionStored>[]>(
    () => [
      countyRepresentationColumn,
      cityRepresentationColumn,
      titleColumn,
      voteTypeColumn,
      numberOfVotesColumn,
      createdColumn,
      closeAtColumn,
      scopeColumn,
      statusColumn,
    ],
    [l10nLocale],
  );

  const rowActions: TableRowAction<ServiceVoteDefinitionStored>[] = useMemo(
    () => [
      {
        id: 'User/(esm/_T5_dsI4jEe29qs15q2b6yw)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_59d3wF5LEe6vsex_cZNQbQ)/TabularReferenceTableRowButtonGroup)',
        label: t('service.UserVoteDefinition.UserVoteDefinition_View_Edit.voteRating', {
          defaultValue: 'voteRating',
        }) as string,
        icon: <MdiIcon path="vote" />,
        disabled: (row: ServiceVoteDefinitionStored) =>
          getSelectedRows().length > 0 || editMode || !row.isRatingType || isLoading,
        action: actions.activeVoteDefinitionsInActivityCitiesVoteRatingAction
          ? async (rowData) => {
              await actions.activeVoteDefinitionsInActivityCitiesVoteRatingAction!(rowData);
            }
          : undefined,
      },
      {
        id: 'User/(esm/_T6Ar0I4jEe29qs15q2b6yw)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_59d3wF5LEe6vsex_cZNQbQ)/TabularReferenceTableRowButtonGroup)',
        label: t('service.UserVoteDefinition.UserVoteDefinition_View_Edit.voteSelectAnswer', {
          defaultValue: 'voteSelectAnswer',
        }) as string,
        icon: <MdiIcon path="vote" />,
        disabled: (row: ServiceVoteDefinitionStored) =>
          getSelectedRows().length > 0 || editMode || !row.isSelectAnswerType || isLoading,
        action: actions.activeVoteDefinitionsInActivityCitiesVoteSelectAnswerAction
          ? async (rowData) => {
              await actions.activeVoteDefinitionsInActivityCitiesVoteSelectAnswerAction!(rowData);
            }
          : undefined,
      },
      {
        id: 'User/(esm/_T6DvII4jEe29qs15q2b6yw)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_59d3wF5LEe6vsex_cZNQbQ)/TabularReferenceTableRowButtonGroup)',
        label: t('service.UserVoteDefinition.UserVoteDefinition_View_Edit.voteYesNoAbstain', {
          defaultValue: 'voteYesNoAbstain',
        }) as string,
        icon: <MdiIcon path="vote" />,
        disabled: (row: ServiceVoteDefinitionStored) =>
          getSelectedRows().length > 0 || editMode || !row.isYesNoAbstainType || isLoading,
        action: actions.activeVoteDefinitionsInActivityCitiesVoteYesNoAbstainAction
          ? async (rowData) => {
              await actions.activeVoteDefinitionsInActivityCitiesVoteYesNoAbstainAction!(rowData);
            }
          : undefined,
      },
      {
        id: 'User/(esm/_T6ChAI4jEe29qs15q2b6yw)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_59d3wF5LEe6vsex_cZNQbQ)/TabularReferenceTableRowButtonGroup)',
        label: t('service.UserVoteDefinition.UserVoteDefinition_View_Edit.voteYesNo', {
          defaultValue: 'voteYesNo',
        }) as string,
        icon: <MdiIcon path="vote" />,
        disabled: (row: ServiceVoteDefinitionStored) =>
          getSelectedRows().length > 0 || editMode || !row.isYesNoType || isLoading,
        action: actions.activeVoteDefinitionsInActivityCitiesVoteYesNoAction
          ? async (rowData) => {
              await actions.activeVoteDefinitionsInActivityCitiesVoteYesNoAction!(rowData);
            }
          : undefined,
      },
    ],
    [actions, isLoading],
  );

  const effectiveTableColumns = useMemo(() => {
    const cols = [
      ...columns,
      ...columnsActionCalculator('User/(esm/_b8NPIF5BEe6vsex_cZNQbQ)/RelationType', rowActions, t, {
        crudOperationsDisplayed: 1,
        transferOperationsDisplayed: 0,
      }),
    ];
    return cols;
  }, [columns, rowActions]);

  const getRowIdentifier: (row: Pick<ServiceVoteDefinitionStored, '__identifier'>) => string = (row) =>
    row.__identifier!;

  const getSelectedRows: () => ServiceVoteDefinitionStored[] = () => {
    return [];
  };

  const clearSelections = () => {
    handleOnSelection([]);
  };

  const additionalToolbarActions: Record<string, ElementType> =
    actions?.activeVoteDefinitionsInActivityCitiesAdditionalToolbarButtons
      ? actions.activeVoteDefinitionsInActivityCitiesAdditionalToolbarButtons(
          data,
          isLoading,
          getSelectedRows(),
          clearSelections,
          ownerData,
          editMode,
          isFormUpdateable,
        )
      : {};
  const AdditionalToolbarActions = () => {
    return (
      <>
        {Object.keys(additionalToolbarActions).map((key) => {
          const AdditionalButton = additionalToolbarActions[key];
          return <AdditionalButton key={key} />;
        })}
      </>
    );
  };

  const pageSizeOptions = useMemo(() => {
    const opts: Set<number> = new Set([rowsPerPage, ...basePageSizeOptions]);
    return Array.from(opts.values()).sort((a, b) => a - b);
  }, [rowsPerPage]);

  const setPageSize = useCallback((newValue: number) => {
    setRowsPerPage(newValue);
    setItemStringified(rowsPerPageKey, newValue);
    setPage(0);

    setQueryCustomizer((prevQueryCustomizer: ServiceVoteDefinitionQueryCustomizer) => {
      // we need to reset _seek so that previous configuration is erased
      return {
        ...prevQueryCustomizer,
        _seek: {
          limit: newValue + 1,
        },
      };
    });
  }, []);

  const filterOptions = useMemo<FilterOption[]>(
    () => [
      {
        id: 'User/(esm/_Lyib4F5MEe6vsex_cZNQbQ)/TableColumnFilter/(discriminator/User/(esm/_59d3wF5LEe6vsex_cZNQbQ)/TabularReferenceFieldRelationDefinedTable)',
        attributeName: 'countyRepresentation',
        label: t('service.UserVoteDefinition.UserVoteDefinition_View_Edit.countyRepresentation', {
          defaultValue: 'CountyRepresentation',
        }) as string,
        filterType: FilterType.string,
      },

      {
        id: 'User/(esm/_59fs8l5LEe6vsex_cZNQbQ)/TableColumnFilter/(discriminator/User/(esm/_59d3wF5LEe6vsex_cZNQbQ)/TabularReferenceFieldRelationDefinedTable)',
        attributeName: 'cityRepresentation',
        label: t('service.UserVoteDefinition.UserVoteDefinition_View_Edit.cityRepresentation', {
          defaultValue: 'CityRepresentation',
        }) as string,
        filterType: FilterType.string,
      },

      {
        id: 'User/(esm/_59ee0F5LEe6vsex_cZNQbQ)/TableColumnFilter/(discriminator/User/(esm/_59d3wF5LEe6vsex_cZNQbQ)/TabularReferenceFieldRelationDefinedTable)',
        attributeName: 'title',
        label: t('service.UserVoteDefinition.UserVoteDefinition_View_Edit.title', { defaultValue: 'Title' }) as string,
        filterType: FilterType.string,
      },

      {
        id: 'User/(esm/_59fF515LEe6vsex_cZNQbQ)/TableColumnFilter/(discriminator/User/(esm/_59d3wF5LEe6vsex_cZNQbQ)/TabularReferenceFieldRelationDefinedTable)',
        attributeName: 'voteType',
        label: t('service.UserVoteDefinition.UserVoteDefinition_View_Edit.voteType', {
          defaultValue: 'VoteType',
        }) as string,
        filterType: FilterType.enumeration,
        enumValues: ['YES_NO', 'YES_NO_ABSTAIN', 'SELECT_ANSWER', 'RATE', 'NO_VOTE'],
      },

      {
        id: 'User/(esm/_59fF5l5LEe6vsex_cZNQbQ)/TableColumnFilter/(discriminator/User/(esm/_59d3wF5LEe6vsex_cZNQbQ)/TabularReferenceFieldRelationDefinedTable)',
        attributeName: 'numberOfVotes',
        label: t('service.UserVoteDefinition.UserVoteDefinition_View_Edit.numberOfVotes', {
          defaultValue: 'NumberOfVotes',
        }) as string,
        filterType: FilterType.numeric,
      },

      {
        id: 'User/(esm/_59ee0V5LEe6vsex_cZNQbQ)/TableColumnFilter/(discriminator/User/(esm/_59d3wF5LEe6vsex_cZNQbQ)/TabularReferenceFieldRelationDefinedTable)',
        attributeName: 'created',
        label: t('service.UserVoteDefinition.UserVoteDefinition_View_Edit.created', {
          defaultValue: 'Created',
        }) as string,
        filterType: FilterType.dateTime,
      },

      {
        id: 'User/(esm/_59ee1F5LEe6vsex_cZNQbQ)/TableColumnFilter/(discriminator/User/(esm/_59d3wF5LEe6vsex_cZNQbQ)/TabularReferenceFieldRelationDefinedTable)',
        attributeName: 'closeAt',
        label: t('service.UserVoteDefinition.UserVoteDefinition_View_Edit.closeAt', {
          defaultValue: 'CloseAt',
        }) as string,
        filterType: FilterType.dateTime,
      },

      {
        id: 'User/(esm/_59fF6F5LEe6vsex_cZNQbQ)/TableColumnFilter/(discriminator/User/(esm/_59d3wF5LEe6vsex_cZNQbQ)/TabularReferenceFieldRelationDefinedTable)',
        attributeName: 'scope',
        label: t('service.UserVoteDefinition.UserVoteDefinition_View_Edit.scope', { defaultValue: 'Scope' }) as string,
        filterType: FilterType.enumeration,
        enumValues: ['GLOBAL', 'COUNTY', 'CITY', 'DISTRICT'],
      },

      {
        id: 'User/(esm/_ZLxG0F5MEe6vsex_cZNQbQ)/TableColumnFilter/(discriminator/User/(esm/_59d3wF5LEe6vsex_cZNQbQ)/TabularReferenceFieldRelationDefinedTable)',
        attributeName: 'status',
        label: t('service.UserVoteDefinition.UserVoteDefinition_View_Edit.status', {
          defaultValue: 'Status',
        }) as string,
        filterType: FilterType.enumeration,
        enumValues: ['CREATED', 'PENDING', 'ACTIVE', 'CLOSED', 'ARCHIVED'],
      },
    ],
    [l10nLocale],
  );

  const handleFiltersChange = (newFilters: Filter[]) => {
    setPage(0);
    setFilters(newFilters);
    setItemStringified(filtersKey, newFilters);

    setQueryCustomizer((prevQueryCustomizer: ServiceVoteDefinitionQueryCustomizer) => {
      // remove previous filter values, so that we can always start with a clean slate
      for (const name of columns.map((c) => c.field)) {
        delete (prevQueryCustomizer as any)[name];
      }
      return {
        ...prevQueryCustomizer,
        _seek: {
          limit: rowsPerPage + 1,
        },
        ...mapAllFiltersToQueryCustomizerProperties(newFilters),
      };
    });
  };

  function handleSortModelChange(newModel: GridSortModel) {
    setPage(0);
    setSortModel(newModel);

    const _orderBy = newModel
      .filter((m) => m.sort)
      .map((m) => ({
        attribute: m.field,
        descending: m.sort === 'desc',
      }));

    setQueryCustomizer((prevQueryCustomizer) => {
      const strippedQueryCustomizer: ServiceVoteDefinitionQueryCustomizer = {
        ...prevQueryCustomizer,
      };
      if (!!strippedQueryCustomizer._seek) {
        delete strippedQueryCustomizer._seek.lastItem;
      }
      // we need to reset _seek so that previous configuration is erased
      return {
        ...strippedQueryCustomizer,
        _orderBy,
        _seek: {
          limit: rowsPerPage + 1,
        },
      };
    });
  }

  async function handlePageChange(isNext: boolean) {
    setQueryCustomizer((prevQueryCustomizer) => {
      return {
        ...prevQueryCustomizer,
        _seek: {
          limit: isNext ? rowsPerPage + 1 : rowsPerPage,
          reverse: !isNext,
          lastItem: isNext ? lastItem : firstItem,
        },
      };
    });

    setIsNextButtonEnabled(!isNext);
  }

  const handleOnSelection = (newSelectionModel: GridRowSelectionModel) => {
    selectedRows.current = getUpdatedRowsSelected(selectedRows, data, newSelectionModel);
    setSelectionModel(selectedRows.current.map(getRowIdentifier));
  };

  async function fetchData() {
    if (ownerData.__signedIdentifier) {
      setIsInternalLoading(true);

      try {
        const processedQueryCustomizer = {
          ...processQueryCustomizer(queryCustomizer),
          _mask: actions.getActiveVoteDefinitionsInActivityCitiesMask
            ? actions.getActiveVoteDefinitionsInActivityCitiesMask()
            : queryCustomizer._mask,
        };
        const { data: res, headers } =
          await actions.activeVoteDefinitionsInActivityCitiesRefreshAction!(processedQueryCustomizer);

        if (res.length > rowsPerPage) {
          setIsNextButtonEnabled(true);
          res.pop();
        } else if (queryCustomizer._seek?.limit === rowsPerPage + 1) {
          setIsNextButtonEnabled(false);
        }

        setData(res);
        setFirstItem(res[0]);
        setLastItem(res[res.length - 1]);
        setRowCount(res.length || 0);
      } catch (error) {
        handleError(error);
      } finally {
        setIsInternalLoading(false);
      }
    }
  }

  useEffect(() => {
    fetchData();
    handleOnSelection(selectionModel);
  }, [queryCustomizer, refreshCounter]);

  return (
    <div
      id="User/(esm/_59d3wF5LEe6vsex_cZNQbQ)/TabularReferenceFieldRelationDefinedTable"
      data-table-name="activeVoteDefinitionsInActivityCities"
    >
      <ComponentProxy
        filter={sidekickComponentFilter}
        editMode={editMode}
        isLoading={isLoading}
        filters={filters}
        onFiltersChange={handleFiltersChange}
        data={data}
      />
      <StripedDataGrid
        apiRef={apiRef}
        {...baseTableConfig}
        pageSizeOptions={pageSizeOptions}
        sx={{
          // overflow: 'hidden',
          display: 'grid',
          border: (theme) => (validationError ? `2px solid ${theme.palette.error.main}` : undefined),
        }}
        slotProps={{
          filterPanel: {
            logicOperators: [GridLogicOperator.And],
          },
        }}
        getRowId={getRowIdentifier}
        loading={isLoading}
        rows={data}
        getRowClassName={(params: GridRowClassNameParams) => {
          return params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd';
        }}
        columns={effectiveTableColumns}
        disableRowSelectionOnClick
        keepNonExistentRowsSelected
        onRowClick={
          actions.activeVoteDefinitionsInActivityCitiesOpenPageAction
            ? async (params: GridRowParams<ServiceVoteDefinitionStored>) =>
                await actions.activeVoteDefinitionsInActivityCitiesOpenPageAction!(params.row, false)
            : undefined
        }
        sortModel={sortModel}
        onSortModelChange={handleSortModelChange}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        paginationMode="server"
        sortingMode="server"
        filterMode="server"
        filterDebounceMs={filterDebounceMs}
        rowCount={rowsPerPage}
        components={{
          Toolbar: () => (
            <GridToolbarContainer>
              {actions.activeVoteDefinitionsInActivityCitiesFilterAction && true ? (
                <Button
                  id="User/(esm/_59d3wF5LEe6vsex_cZNQbQ)/TabularReferenceTableFilterButton"
                  startIcon={<MdiIcon path="filter" />}
                  variant={'text'}
                  onClick={async () => {
                    const filterResults = await actions.activeVoteDefinitionsInActivityCitiesFilterAction!(
                      'User/(esm/_59d3wF5LEe6vsex_cZNQbQ)/TabularReferenceTableFilterButton',
                      filterOptions,
                      filterModel,
                      filters,
                    );
                    if (Array.isArray(filterResults.filters)) {
                      handleFiltersChange([...filterResults.filters!]);
                    }
                  }}
                  disabled={isLoading}
                >
                  {t('judo.action.filter', { defaultValue: 'Set Filters' })}
                  {filters.length ? ` (${filters.length})` : ''}
                </Button>
              ) : null}
              {actions.activeVoteDefinitionsInActivityCitiesRefreshAction && true ? (
                <Button
                  id="User/(esm/_59d3wF5LEe6vsex_cZNQbQ)/TabularReferenceTableRefreshButton"
                  startIcon={<MdiIcon path="refresh" />}
                  variant={'text'}
                  onClick={async () => {
                    const processedQueryCustomizer = {
                      ...processQueryCustomizer(queryCustomizer),
                      _mask: actions.getActiveVoteDefinitionsInActivityCitiesMask
                        ? actions.getActiveVoteDefinitionsInActivityCitiesMask()
                        : queryCustomizer._mask,
                    };
                    await actions.activeVoteDefinitionsInActivityCitiesRefreshAction!(processedQueryCustomizer);
                  }}
                  disabled={isLoading}
                >
                  {t('judo.action.refresh', { defaultValue: 'Refresh' })}
                </Button>
              ) : null}
              {<AdditionalToolbarActions />}
              <div>{/* Placeholder */}</div>
            </GridToolbarContainer>
          ),
          Pagination: () => (
            <CustomTablePagination
              pageSizeOptions={pageSizeOptions}
              setPageSize={setPageSize}
              pageChange={handlePageChange}
              isNextButtonEnabled={isNextButtonEnabled}
              page={page}
              setPage={setPage}
              rowPerPage={rowsPerPage}
            />
          ),
        }}
      />
      {validationError ? (
        <Box
          sx={{
            color: (theme) => theme.palette.error.main,
            display: 'flex',
            alignItems: 'center',
            pl: 1,
            pr: 1,
          }}
        >
          <MdiIcon path="alert-circle-outline" sx={{ mr: 1 }} />
          <Typography>{validationError}</Typography>
        </Box>
      ) : null}
    </div>
  );
}
