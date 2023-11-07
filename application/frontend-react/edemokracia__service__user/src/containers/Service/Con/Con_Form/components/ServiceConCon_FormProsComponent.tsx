//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getTablesForPageContainers(#application)
// Path expression: 'src/containers/'+#containerPath(#self.pageContainer)+'/components/'+#tableComponentName(#self)+'.tsx'
// Template name: actor/src/containers/components/table.tsx
// Template file: actor/src/containers/components/table.tsx.hbs

import { useState, useEffect, useMemo, useRef } from 'react';
import type { MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';
import type { JudoIdentifiable } from '@judo/data-api-common';
import { Box, IconButton, Button, ButtonGroup, Typography } from '@mui/material';
import { GridToolbarContainer, GridLogicOperator } from '@mui/x-data-grid';
import type {
  GridColDef,
  GridFilterModel,
  GridRowModel,
  GridRowId,
  GridRenderCellParams,
  GridRowSelectionModel,
  GridSortItem,
  GridSortModel,
  GridValueFormatterParams,
  GridRowClassNameParams,
  GridRowParams,
  GridValidRowModel,
} from '@mui/x-data-grid';
import { baseColumnConfig, baseTableConfig } from '~/config';
import { MdiIcon } from '~/components';
import {
  booleanColumnOperators,
  dateColumnOperators,
  dateTimeColumnOperators,
  numericColumnOperators,
  singleSelectColumnOperators,
  stringColumnOperators,
  columnsActionCalculator,
  ContextMenu,
  StripedDataGrid,
} from '~/components/table';
import type { ContextMenuApi } from '~/components/table/ContextMenu';
import type { Filter, FilterOption } from '~/components-api';
import { FilterType } from '~/components-api';
import type {
  ServiceCon,
  ServiceConStored,
  ServicePro,
  ServiceProQueryCustomizer,
  ServiceProStored,
} from '~/services/data-api';
import { useL10N } from '~/l10n/l10n-context';
import {
  getUpdatedRowsSelected,
  applyInMemoryFilters,
  fileHandling,
  serviceDateToUiDate,
  serviceTimeToUiTime,
  mapAllFiltersToQueryCustomizerProperties,
  processQueryCustomizer,
  useErrorHandler,
} from '~/utilities';
import type { DialogResult, TableRowAction } from '~/utilities';
import { useDataStore } from '~/hooks';
import { OBJECTCLASS } from '@pandino/pandino-api';

export interface ServiceConCon_FormProsComponentActionDefinitions {
  serviceConCon_FormProsAddOpenSelector?: () => Promise<void>;
  serviceConCon_FormProsBulkDelete?: (selectedRows: ServiceProStored[]) => Promise<DialogResult<ServiceProStored[]>>;
  serviceConCon_FormProsBulkRemove?: (selectedRows: ServiceProStored[]) => Promise<DialogResult<ServiceProStored[]>>;
  serviceConCon_FormProsClear?: () => Promise<void>;
  serviceConCon_FormProsCreateOpen?: () => Promise<void>;
  serviceConCon_FormProsFilter?: (
    id: string,
    filterOptions: FilterOption[],
    model?: GridFilterModel,
    filters?: Filter[],
  ) => Promise<{ model?: GridFilterModel; filters?: Filter[] }>;
  serviceConCon_FormProsRefresh?: (queryCustomizer: ServiceProQueryCustomizer) => Promise<ServiceProStored[]>;
  serviceProPro_View_EditArgumentsConsActionsCreateConArgumentOpenForm?: (row: ServiceProStored) => Promise<void>;
  serviceProPro_View_EditArgumentsProsActionsCreateProArgumentOpenForm?: (row: ServiceProStored) => Promise<void>;
  serviceConCon_FormProsDelete?: (row: ServiceProStored, silentMode?: boolean) => Promise<void>;
  serviceConCon_FormProsRemove?: (row: ServiceProStored, silentMode?: boolean) => Promise<void>;
  serviceConCon_FormProsView?: (row: ServiceProStored) => Promise<void>;
  serviceProPro_View_EditProVoteDown?: (row: ServiceProStored, silentMode?: boolean) => Promise<void>;
  serviceProPro_View_EditProVoteUp?: (row: ServiceProStored, silentMode?: boolean) => Promise<void>;
}

export interface ServiceConCon_FormProsComponentProps {
  uniqueId: string;
  actions: ServiceConCon_FormProsComponentActionDefinitions;
  refreshCounter: number;
  validationError?: string;
  ownerData: ServiceCon;
  editMode: boolean;
  isFormUpdateable: () => boolean;
}

// XMIID: User/(esm/_cJHDQIfYEe2u0fVmwtP5bA)/TabularReferenceFieldRelationDefinedTable
// Name: pros
export function ServiceConCon_FormProsComponent(props: ServiceConCon_FormProsComponentProps) {
  const { uniqueId, actions, refreshCounter, validationError, ownerData, editMode, isFormUpdateable } = props;
  const filterModelKey = `User/(esm/_cJHDQIfYEe2u0fVmwtP5bA)/TabularReferenceFieldRelationDefinedTable-${uniqueId}-filterModel`;
  const filtersKey = `User/(esm/_cJHDQIfYEe2u0fVmwtP5bA)/TabularReferenceFieldRelationDefinedTable-${uniqueId}-filters`;

  const { getItemParsed, getItemParsedWithDefault, setItemStringified } = useDataStore('sessionStorage');
  const { locale: l10nLocale } = useL10N();
  const { downloadFile, extractFileNameFromToken } = fileHandling();
  const { t } = useTranslation();
  const handleError = useErrorHandler();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<GridRowModel<ServiceProStored>[]>(ownerData?.pros || []);
  const [selectionModel, setSelectionModel] = useState<GridRowSelectionModel>([]);
  const [sortModel, setSortModel] = useState<GridSortModel>([{ field: 'createdByName', sort: 'asc' }]);
  const [filterModel, setFilterModel] = useState<GridFilterModel>(
    getItemParsedWithDefault(filterModelKey, { items: [] }),
  );
  const [filters, setFilters] = useState<Filter[]>(getItemParsedWithDefault(filtersKey, []));
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 10,
    page: 0,
  });
  const [queryCustomizer, setQueryCustomizer] = useState<ServiceProQueryCustomizer>({
    _mask: '{createdByName,created,description,title,upVotes,downVotes}',
    _seek: {
      limit: 10 + 1,
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

  const selectedRows = useRef<ServiceProStored[]>([]);

  const columns: GridColDef<ServiceProStored>[] = [
    {
      ...baseColumnConfig,
      field: 'createdByName',
      headerName: t('service.Con.Con.Form.createdByName', { defaultValue: 'CreatedByName' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
    {
      ...baseColumnConfig,
      field: 'created',
      headerName: t('service.Con.Con.Form.created', { defaultValue: 'Created' }) as string,
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
    },
    {
      ...baseColumnConfig,
      field: 'description',
      headerName: t('service.Con.Con.Form.description', { defaultValue: 'Description' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
    {
      ...baseColumnConfig,
      field: 'title',
      headerName: t('service.Con.Con.Form.title', { defaultValue: 'Title' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && true,
    },
    {
      ...baseColumnConfig,
      field: 'upVotes',
      headerName: t('service.Con.Con.Form.upVotes', { defaultValue: 'UpVotes' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 100,
      type: 'number',
      filterable: false && true,
      valueFormatter: ({ value }: GridValueFormatterParams<number>) => {
        return value && new Intl.NumberFormat(l10nLocale).format(value);
      },
    },
    {
      ...baseColumnConfig,
      field: 'downVotes',
      headerName: t('service.Con.Con.Form.downVotes', { defaultValue: 'DownVotes' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 100,
      type: 'number',
      filterable: false && true,
      valueFormatter: ({ value }: GridValueFormatterParams<number>) => {
        return value && new Intl.NumberFormat(l10nLocale).format(value);
      },
    },
  ];

  const rowActions: TableRowAction<ServiceProStored>[] = [
    {
      id: 'User/(esm/_cJHDQIfYEe2u0fVmwtP5bA)/TabularReferenceTableRowRemoveButton',
      label: t('service.Con.Con.Form.service::Con::Con_Form::pros::Remove', { defaultValue: 'Remove' }) as string,
      icon: <MdiIcon path="link_off" />,
      disabled: (row: ServiceProStored) => isLoading,
      action: actions.serviceConCon_FormProsRemove
        ? async (rowData) => {
            await actions.serviceConCon_FormProsRemove!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_cJHDQIfYEe2u0fVmwtP5bA)/TabularReferenceTableRowDeleteButton',
      label: t('service.Con.Con.Form.service::Con::Con_Form::pros::Delete', { defaultValue: 'Delete' }) as string,
      icon: <MdiIcon path="delete_forever" />,
      disabled: (row: ServiceProStored) => editMode || !row.__deleteable || isLoading,
      action: actions.serviceConCon_FormProsDelete
        ? async (rowData) => {
            await actions.serviceConCon_FormProsDelete!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_ikPssIrjEe2VSOmaAz6G9Q)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_cJHDQIfYEe2u0fVmwtP5bA)/TabularReferenceTableRowButtonGroup)',
      label: t('service.Con.Con.Form.voteUp', { defaultValue: 'voteUp' }) as string,
      icon: <MdiIcon path="thumb-up" />,
      disabled: (row: ServiceProStored) => editMode || isLoading,
      action: actions.serviceProPro_View_EditProVoteUp
        ? async (rowData) => {
            await actions.serviceProPro_View_EditProVoteUp!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_KRUbO3jvEe6cB8og8p0UuQ)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_cJHDQIfYEe2u0fVmwtP5bA)/TabularReferenceTableRowButtonGroup)',
      label: t('service.Con.Con.Form.createConArgument', { defaultValue: 'createConArgument' }) as string,
      icon: <MdiIcon path="chat-minus" />,
      disabled: (row: ServiceProStored) => editMode || isLoading,
      action: actions.serviceProPro_View_EditArgumentsConsActionsCreateConArgumentOpenForm
        ? async (rowData) => {
            await actions.serviceProPro_View_EditArgumentsConsActionsCreateConArgumentOpenForm!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_KRUbM3jvEe6cB8og8p0UuQ)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_cJHDQIfYEe2u0fVmwtP5bA)/TabularReferenceTableRowButtonGroup)',
      label: t('service.Con.Con.Form.createProArgument', { defaultValue: 'createProArgument' }) as string,
      icon: <MdiIcon path="chat-plus" />,
      disabled: (row: ServiceProStored) => editMode || isLoading,
      action: actions.serviceProPro_View_EditArgumentsProsActionsCreateProArgumentOpenForm
        ? async (rowData) => {
            await actions.serviceProPro_View_EditArgumentsProsActionsCreateProArgumentOpenForm!(rowData);
          }
        : undefined,
    },
    {
      id: 'User/(esm/_ikQTwIrjEe2VSOmaAz6G9Q)/OperationFormTableRowCallOperationButton/(discriminator/User/(esm/_cJHDQIfYEe2u0fVmwtP5bA)/TabularReferenceTableRowButtonGroup)',
      label: t('service.Con.Con.Form.voteDown', { defaultValue: 'voteDown' }) as string,
      icon: <MdiIcon path="thumb-down" />,
      disabled: (row: ServiceProStored) => editMode || isLoading,
      action: actions.serviceProPro_View_EditProVoteDown
        ? async (rowData) => {
            await actions.serviceProPro_View_EditProVoteDown!(rowData);
          }
        : undefined,
    },
  ];

  const filterOptions: FilterOption[] = [
    {
      id: '_fr4UYH2GEe6V8KKnnZfChA',
      attributeName: 'createdByName',
      label: t('service.Con.Con.Form.createdByName::Filter', { defaultValue: 'CreatedByName' }) as string,
      filterType: FilterType.string,
    },

    {
      id: '_fr4UZH2GEe6V8KKnnZfChA',
      attributeName: 'created',
      label: t('service.Con.Con.Form.created::Filter', { defaultValue: 'Created' }) as string,
      filterType: FilterType.dateTime,
    },

    {
      id: '_fr47c32GEe6V8KKnnZfChA',
      attributeName: 'description',
      label: t('service.Con.Con.Form.description::Filter', { defaultValue: 'Description' }) as string,
      filterType: FilterType.string,
    },

    {
      id: '_fr5ign2GEe6V8KKnnZfChA',
      attributeName: 'title',
      label: t('service.Con.Con.Form.title::Filter', { defaultValue: 'Title' }) as string,
      filterType: FilterType.string,
    },

    {
      id: '_fr6JkH2GEe6V8KKnnZfChA',
      attributeName: 'upVotes',
      label: t('service.Con.Con.Form.upVotes::Filter', { defaultValue: 'UpVotes' }) as string,
      filterType: FilterType.numeric,
    },

    {
      id: '_fr6JlH2GEe6V8KKnnZfChA',
      attributeName: 'downVotes',
      label: t('service.Con.Con.Form.downVotes::Filter', { defaultValue: 'DownVotes' }) as string,
      filterType: FilterType.numeric,
    },
  ];

  const handleFiltersChange = (newFilters: Filter[]) => {
    setPaginationModel((prevState) => ({
      ...prevState,
      page: 0,
    }));
    setFilters(newFilters);
    setItemStringified(filtersKey, newFilters);

    setQueryCustomizer((prevQueryCustomizer: ServiceProQueryCustomizer) => {
      // remove previous filter values, so that we can always start with a clean slate
      for (const name of columns.map((c) => c.field)) {
        delete (prevQueryCustomizer as any)[name];
      }
      return {
        ...prevQueryCustomizer,
        _seek: {
          limit: 10 + 1,
        },
        ...mapAllFiltersToQueryCustomizerProperties(newFilters),
      };
    });
  };

  function handleSortModelChange(newModel: GridSortModel) {
    setPaginationModel((prevState) => ({
      ...prevState,
      page: 0,
    }));
    setSortModel(newModel);

    const _orderBy = newModel
      .filter((m) => m.sort)
      .map((m) => ({
        attribute: m.field,
        descending: m.sort === 'desc',
      }));

    setQueryCustomizer((prevQueryCustomizer) => {
      const strippedQueryCustomizer: ServiceProQueryCustomizer = {
        ...prevQueryCustomizer,
      };
      if (!!strippedQueryCustomizer._seek) {
        delete strippedQueryCustomizer._seek.lastItem;
      }
      return {
        ...strippedQueryCustomizer,
        _orderBy,
      };
    });
  }

  useEffect(() => {
    selectedRows.current = getUpdatedRowsSelected(selectedRows, data, selectionModel);
  }, [selectionModel]);

  useEffect(() => {
    const newData = applyInMemoryFilters<ServiceProStored>(filters, ownerData?.pros ?? []);
    setData(newData);
  }, [ownerData?.pros, filters]);

  return (
    <>
      <StripedDataGrid
        {...baseTableConfig}
        pageSizeOptions={[paginationModel.pageSize]}
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
        getRowId={(row: { __identifier: string }) => row.__identifier}
        loading={isLoading}
        rows={data}
        getRowClassName={(params: GridRowClassNameParams) => {
          return params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd';
        }}
        columns={[
          ...columns,
          ...columnsActionCalculator('User/(esm/_WgzWwIezEe2kLcMqsIbMgQ)/RelationType', rowActions, t, {
            shownActions: 2,
          }),
        ]}
        disableRowSelectionOnClick
        checkboxSelection
        rowSelectionModel={selectionModel}
        onRowSelectionModelChange={(newRowSelectionModel) => {
          setSelectionModel(newRowSelectionModel);
        }}
        keepNonExistentRowsSelected
        onRowClick={
          actions.serviceConCon_FormProsView
            ? async (params: GridRowParams<ServiceProStored>) => await actions.serviceConCon_FormProsView!(params.row)
            : undefined
        }
        sortModel={sortModel}
        onSortModelChange={handleSortModelChange}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        components={{
          Toolbar: () => (
            <GridToolbarContainer>
              {actions.serviceConCon_FormProsFilter && true ? (
                <Button
                  id="User/(esm/_cJHDQIfYEe2u0fVmwtP5bA)/TabularReferenceTableFilterButton"
                  startIcon={<MdiIcon path="filter" />}
                  variant={'text'}
                  onClick={async () => {
                    const filterResults = await actions.serviceConCon_FormProsFilter!(
                      'User/(esm/_cJHDQIfYEe2u0fVmwtP5bA)/TabularReferenceTableFilterButton',
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
                  {t('service.Con.Con.Form.service::Con::Con_Form::pros::Filter', { defaultValue: 'Set Filters' })}
                  {filters.length ? ` (${filters.length})` : ''}
                </Button>
              ) : null}
              {actions.serviceConCon_FormProsRefresh && true ? (
                <Button
                  id="User/(esm/_cJHDQIfYEe2u0fVmwtP5bA)/TabularReferenceTableRefreshButton"
                  startIcon={<MdiIcon path="refresh" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.serviceConCon_FormProsRefresh!(processQueryCustomizer(queryCustomizer));
                  }}
                  disabled={isLoading}
                >
                  {t('service.Con.Con.Form.service::Con::Con_Form::pros::Refresh', { defaultValue: 'Refresh' })}
                </Button>
              ) : null}
              {actions.serviceConCon_FormProsCreateOpen && true ? (
                <Button
                  id="User/(esm/_cJHDQIfYEe2u0fVmwtP5bA)/TabularReferenceTableCreateButton"
                  startIcon={<MdiIcon path="note-add" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.serviceConCon_FormProsCreateOpen!();
                  }}
                  disabled={editMode || isLoading}
                >
                  {t('service.Con.Con.Form.service::Con::Con_Form::pros::Create', { defaultValue: 'Create' })}
                </Button>
              ) : null}
              {actions.serviceConCon_FormProsAddOpenSelector && true ? (
                <Button
                  id="User/(esm/_cJHDQIfYEe2u0fVmwtP5bA)/TabularReferenceTableAddSelectorOpenButton"
                  startIcon={<MdiIcon path="attachment-plus" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.serviceConCon_FormProsAddOpenSelector!();
                  }}
                  disabled={isLoading}
                >
                  {t('service.Con.Con.Form.service::Con::Con_Form::pros::Add', { defaultValue: 'Add' })}
                </Button>
              ) : null}
              {actions.serviceConCon_FormProsClear && data.length ? (
                <Button
                  id="User/(esm/_cJHDQIfYEe2u0fVmwtP5bA)/TabularReferenceTableClearButton"
                  startIcon={<MdiIcon path="link_off" />}
                  variant={'text'}
                  onClick={async () => {
                    await actions.serviceConCon_FormProsClear!();
                  }}
                  disabled={isLoading}
                >
                  {t('service.Con.Con.Form.service::Con::Con_Form::pros::Clear', { defaultValue: 'Clear' })}
                </Button>
              ) : null}
              {actions.serviceConCon_FormProsBulkRemove && selectionModel.length > 0 ? (
                <Button
                  id="User/(esm/_cJHDQIfYEe2u0fVmwtP5bA)/TabularReferenceTableBulkRemoveButton"
                  startIcon={<MdiIcon path="link_off" />}
                  variant={'text'}
                  onClick={async () => {
                    const { result: bulkResult } = await actions.serviceConCon_FormProsBulkRemove!(
                      selectedRows.current,
                    );
                    if (bulkResult === 'submit') {
                      setSelectionModel([]); // not resetting on refreshes because refreshes would always remove selections...
                    }
                  }}
                  disabled={isLoading}
                >
                  {t('service.Con.Con.Form.service::Con::Con_Form::pros::BulkRemove', { defaultValue: 'Remove' })}
                </Button>
              ) : null}
              {actions.serviceConCon_FormProsBulkDelete && selectionModel.length > 0 ? (
                <Button
                  id="User/(esm/_cJHDQIfYEe2u0fVmwtP5bA)/TabularReferenceTableBulkDeleteButton"
                  startIcon={<MdiIcon path="delete_forever" />}
                  variant={'text'}
                  onClick={async () => {
                    const { result: bulkResult } = await actions.serviceConCon_FormProsBulkDelete!(
                      selectedRows.current,
                    );
                    if (bulkResult === 'submit') {
                      setSelectionModel([]); // not resetting on refreshes because refreshes would always remove selections...
                    }
                  }}
                  disabled={editMode || selectedRows.current.some((s) => !s.__deleteable) || isLoading}
                >
                  {t('service.Con.Con.Form.service::Con::Con_Form::pros::BulkDelete', { defaultValue: 'Delete' })}
                </Button>
              ) : null}
              <div>{/* Placeholder */}</div>
            </GridToolbarContainer>
          ),
        }}
      />
      {validationError && (
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
      )}
    </>
  );
}
