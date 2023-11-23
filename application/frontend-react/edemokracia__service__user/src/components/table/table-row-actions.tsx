//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/components/table/table-row-actions.tsx'
// Template name: actor/src/components/table/table-row-actions.tsx
// Template file: actor/src/components/table/table-row-actions.tsx.hbs

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import type { TFunction } from 'i18next';
import type { GridColDef, GridRowParams } from '@mui/x-data-grid';
import type { ColumnActionsProvider, ColumnsActionsOptions, TableRowAction } from '../../utilities';
import { exists } from '../../utilities';
import { DropdownButton } from '../DropdownButton';
import { MdiIcon } from '../MdiIcon';
import { baseColumnConfig } from '../../config';

export const columnsActionCalculator: ColumnActionsProvider<any> = (
  id: string,
  actions: TableRowAction<any>[],
  t: TFunction<string, any>,
  options?: ColumnsActionsOptions,
): GridColDef[] => {
  const availableActions = actions.filter((a) => !!a.action);
  if (!exists(availableActions) || availableActions.length === 0) {
    return [];
  }

  if (options?.shownActions === 0) {
    return [];
  } else if (options?.shownActions && availableActions.length <= options?.shownActions) {
    return standaloneActions(id, availableActions, t, options);
  } else {
    const sliceNumber = availableActions.length === options?.shownActions ? options?.shownActions - 1 : 1;
    const standaloneRowActions = availableActions.slice(0, sliceNumber);
    const dropdownRowActions = availableActions.slice(sliceNumber);

    return [...standaloneActions(id, standaloneRowActions, t, options), ...dropdownActions(id, dropdownRowActions, t)];
  }
};

const standaloneActions: ColumnActionsProvider<unknown> = (
  id: string,
  actions: TableRowAction<unknown>[],
  t: TFunction<string, any>,
  options?: ColumnsActionsOptions,
): GridColDef[] => {
  return actions
    .filter((a) => !!a.action)
    .map((action, index) => {
      return {
        ...baseColumnConfig,
        field: action.label + index,
        minWidth: 100,
        headerName: t('judo.pages.table.column.actions.standalone', { defaultValue: 'Actions' }) as string,
        align: 'center',
        type: 'actions',
        getActions: (params: GridRowParams) => [
          <Button
            id={id}
            variant="text"
            startIcon={action.icon}
            disabled={action.disabled ? action.disabled(params.row) : false}
            onClick={() => action.action!(params.row)}
          >
            {(options?.showLabel ?? true) && action.label}
          </Button>,
        ],
      };
    });
};

const dropdownActions: ColumnActionsProvider<unknown> = (
  id: string,
  actions: TableRowAction<unknown>[],
  t: TFunction<string, any>,
): GridColDef[] => {
  if (actions.filter((a) => !!a.action).length === 0) return [];

  return [
    {
      ...baseColumnConfig,
      field: 'actions',
      minWidth: 160,
      headerName: t('judo.pages.table.column.actions.dropdown', { defaultValue: 'Additional Actions' }) as string,
      align: 'center',
      type: 'actions',
      getActions: (params: GridRowParams) => [
        <DropdownButton
          id={id}
          variant="text"
          showDropdownIcon={false}
          menuItems={actions
            .filter((a) => !!a.action)
            .map((action) => {
              return {
                id: action.id,
                label: action.label,
                startIcon: action.icon,
                onClick: () => action.action!(params.row),
                disabled: action.disabled ? action.disabled(params.row) : false,
              };
            })}
        >
          <MdiIcon path="dots-horizontal" />
        </DropdownButton>,
      ],
    },
  ];
};
