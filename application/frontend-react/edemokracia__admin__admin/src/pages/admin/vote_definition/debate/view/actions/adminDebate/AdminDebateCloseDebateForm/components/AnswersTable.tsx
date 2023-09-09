//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getTablesForActionFormPages(#application)
// Path expression: #pagePath(#getActionContainer(#self.value))+'actions/'+#pageActionFormPathSuffix(#self.value)+'/components/'+#tableComponentName(#self.key)+'.tsx'
// Template name: actor/src/pages/actions/actionForm/components/table.tsx
// Template file: actor/src/pages/actions/actionForm/components/table.tsx.hbs

import { useEffect, useState, useImperativeHandle, useMemo, useRef, forwardRef } from 'react';
import type { MouseEvent } from 'react';
import type { JudoIdentifiable } from '@judo/data-api-common';
import { OBJECTCLASS } from '@pandino/pandino-api';
import { useTrackService } from '@pandino/react-hooks';
import { useTranslation } from 'react-i18next';
import { Button, ButtonGroup } from '@mui/material';
import type {
  GridColDef,
  GridFilterModel,
  GridRenderCellParams,
  GridRowParams,
  GridSortModel,
  GridValueFormatterParams,
  GridRowClassNameParams,
  GridRowId,
  GridRowModel,
  GridRowSelectionModel,
  GridSortItem,
} from '@mui/x-data-grid';
import { GridToolbarContainer, GridToolbarFilterButton } from '@mui/x-data-grid';
import { MdiIcon, CustomTablePagination } from '~/components';
import { baseColumnConfig, baseTableConfig, toastConfig, dividerHeight } from '~/config';
import { useFilterDialog, useRangeDialog } from '~/components/dialog';
import { columnsActionCalculator } from '~/components/table';
import { FilterOption, FilterType, Filter } from '~/components-api';
import type { PersistedTableData, RefreshableTable, TableRowAction } from '~/utilities';
import { useDataStore } from '~/hooks';
import {
  decodeToken,
  fileHandling,
  serviceDateToUiDate,
  serviceTimeToUiTime,
  processQueryCustomizer,
  mapAllFiltersToQueryCustomizerProperties,
  mapFilterModelToFilters,
  mapFilterToFilterModel,
  useErrorHandler,
  ERROR_PROCESSOR_HOOK_INTERFACE_KEY,
} from '~/utilities';
import { useL10N } from '~/l10n/l10n-context';
import { ContextMenu, StripedDataGrid } from '~/components/table';
import type { ContextMenuApi } from '~/components/table/ContextMenu';

import { Box, Typography } from '@mui/material';
import {
  AdminDebate,
  AdminDebateQueryCustomizer,
  AdminDebateStored,
  AdminVoteDefinition,
  AdminVoteDefinitionStored,
  CloseDebateInput,
  CloseDebateInputQueryCustomizer,
  CloseDebateInputStored,
  EdemokraciaVoteTypeOnCloseDebate,
  SelectAnswerInput,
  SelectAnswerInputQueryCustomizer,
  SelectAnswerInputStored,
  VoteDefinition,
  VoteDefinitionQueryCustomizer,
  VoteDefinitionStored,
} from '~/generated/data-api';
import { closeDebateInputServiceForClassImpl, adminDebateServiceForClassImpl } from '~/generated/data-axios';
import { GridLogicOperator } from '@mui/x-data-grid';

export interface AnswersTableProps {
  ownerData: CloseDebateInput;
  isOwnerLoading: boolean;
  editMode: boolean;
  isFormUpdateable: () => boolean;
  storeDiff: (attributeName: keyof CloseDebateInput, value: any) => void;
  validation: Map<keyof CloseDebateInput, string>;
}

export const AnswersTable = forwardRef<RefreshableTable, AnswersTableProps>((props, ref) => {
  const { ownerData, isOwnerLoading, editMode, isFormUpdateable, storeDiff } = props;
  const { t } = useTranslation();
  const { openRangeDialog } = useRangeDialog();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const { locale: l10nLocale } = useL10N();

  const [answersSortModel, setAnswersSortModel] = useState<GridSortModel>([]);

  const [answersFilterModel, setAnswersFilterModel] = useState<GridFilterModel>({ items: [] });

  const answersColumns: GridColDef<SelectAnswerInputStored>[] = [
    {
      ...baseColumnConfig,
      field: 'title',
      headerName: t('CloseDebateInputForm.answers.title', { defaultValue: 'Title' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && false,
      sortable: false,
      description: t('judo.pages.table.column.not-sortable', {
        defaultValue: 'This column is not sortable.',
      }) as string,
    },
    {
      ...baseColumnConfig,
      field: 'description',
      headerName: t('CloseDebateInputForm.answers.description', { defaultValue: 'Description' }) as string,
      headerClassName: 'data-grid-column-header',

      width: 230,
      type: 'string',
      filterable: false && false,
      sortable: false,
      description: t('judo.pages.table.column.not-sortable', {
        defaultValue: 'This column is not sortable.',
      }) as string,
    },
  ];

  const answersRangeFilterOptions: FilterOption[] = [];

  const answersInitialQueryCustomizer: SelectAnswerInputQueryCustomizer = {
    _mask: '{title,description}',
    _orderBy: answersSortModel.length
      ? [
          {
            attribute: answersSortModel[0].field,
            descending: answersSortModel[0].sort === 'desc',
          },
        ]
      : [],
  };

  const answersRowActions: TableRowAction<SelectAnswerInputStored>[] = [
    {
      id: 'RemoveActionedemokraciaAdminAdminEdemokraciaAdminDebateCloseDebateInputEdemokraciaAdminAdminEdemokraciaCloseDebateInputAnswersRowRemove',
      label: t('judo.pages.table.remove', { defaultValue: 'Remove' }) as string,
      icon: <MdiIcon path="link_off" />,
      action: async (row: SelectAnswerInputStored) => {
        storeDiff('answers', [
          ...(ownerData.answers || []).filter(
            (e: SelectAnswerInputStored) => e.__signedIdentifier !== row.__signedIdentifier,
          ),
        ]);
      },
    },
  ];

  return (
    <>
      <StripedDataGrid
        {...baseTableConfig}
        pageSizeOptions={[10]}
        sx={{
          // overflow: 'hidden',
          display: 'grid',
          border: (theme) => (props.validation.has('answers') ? `2px solid ${theme.palette.error.main}` : undefined),
        }}
        slotProps={{
          filterPanel: {
            logicOperators: [GridLogicOperator.And],
          },
        }}
        getRowId={(row: { __identifier: string }) => row.__identifier}
        loading={isOwnerLoading}
        rows={ownerData?.answers ?? []}
        getRowClassName={(params: GridRowClassNameParams) => {
          return params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd';
        }}
        columns={[
          ...answersColumns,
          ...columnsActionCalculator(
            'RelationTypeedemokraciaAdminAdminEdemokraciaCloseDebateInputAnswers',
            answersRowActions,
            t,
            { shownActions: 2 },
          ),
        ]}
        disableRowSelectionOnClick
        sortModel={answersSortModel}
        onSortModelChange={(newModel: GridSortModel) => {
          setAnswersSortModel(newModel);
        }}
        components={{
          Toolbar: () => (
            <GridToolbarContainer>
              <Button
                id="RelationTypeedemokraciaAdminAdminEdemokraciaCloseDebateInputAnswers-clear"
                startIcon={<MdiIcon path="link_off" />}
                variant="text"
                onClick={async () => {
                  storeDiff('answers', []);
                }}
                disabled={isOwnerLoading || false || !isFormUpdateable()}
              >
                {t('judo.pages.table.clear', { defaultValue: 'Clear' })}
              </Button>
              <Button
                id="RelationTypeedemokraciaAdminAdminEdemokraciaCloseDebateInputAnswers-add"
                startIcon={<MdiIcon path="attachment-plus" />}
                variant="text"
                onClick={async () => {
                  const res = await openRangeDialog<SelectAnswerInputStored, SelectAnswerInputQueryCustomizer>({
                    id: 'RelationTypeedemokraciaAdminAdminEdemokraciaCloseDebateInputAnswers',
                    columns: answersColumns,
                    defaultSortField: answersSortModel[0],
                    rangeCall: async (queryCustomizer) =>
                      await closeDebateInputServiceForClassImpl.getRangeForAnswers(
                        ownerData,
                        processQueryCustomizer(queryCustomizer),
                      ),
                    single: false,
                    alreadySelectedItems: ownerData.answers ? [...ownerData.answers] : undefined,
                    filterOptions: answersRangeFilterOptions,
                    initialQueryCustomizer: answersInitialQueryCustomizer,
                  });

                  if (res) {
                    const newList = [...(ownerData.answers || []), ...(res.value as SelectAnswerInputStored[])];
                    storeDiff('answers', newList);
                  }
                }}
                disabled={isOwnerLoading || false || !isFormUpdateable()}
              >
                {t('judo.pages.table.add', { defaultValue: 'Add' })}
              </Button>
              <div>{/* Placeholder */}</div>
            </GridToolbarContainer>
          ),
        }}
      />
      {props.validation.has('answers') && (
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
          <Typography>{props.validation.get('answers')}</Typography>
        </Box>
      )}
    </>
  );
});
