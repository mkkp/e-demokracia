//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/components/table/table-row-actions.tsx'
// Template name: actor/src/components/table/table-row-actions.tsx
// Template file: actor/src/components/table/table-row-actions.tsx.hbs

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import type { GridActionsColDef, GridRowParams } from '@mui/x-data-grid';
import type { TFunction } from 'i18next';
import { baseColumnConfig, characterMultiplier, iconAndDropdownIconExtra, onlyDropdownWidth } from '../../config';
import type { ColumnActionsProvider, ColumnsActionsOptions, TableRowAction } from '../../utilities';
import { DropdownButton } from '../DropdownButton';
import { MdiIcon } from '../MdiIcon';

export const calculateMinWidth = (entry: TableRowAction<any>[]) =>
  entry.length
    ? entry.map((a) => (a.label ?? '').length).reduce((p, c) => p + c, 0) * characterMultiplier +
      iconAndDropdownIconExtra
    : onlyDropdownWidth;

export const columnsActionCalculator: ColumnActionsProvider<any> = (
  id: string,
  actions: TableRowAction<any>[],
  t: TFunction<string, any>,
  options?: ColumnsActionsOptions,
): GridActionsColDef[] => {
  const safeOptions: ColumnsActionsOptions = {
    crudOperationsDisplayed: options?.crudOperationsDisplayed ?? 2,
    transferOperationsDisplayed: options?.transferOperationsDisplayed ?? 2,
  };
  const originalCrudActions = actions.filter((a) => !!a.action && a.isCRUD);
  const originalOperationActions = actions.filter((a) => !!a.action && !a.isCRUD);
  const keptCrudActions = originalCrudActions.splice(0, safeOptions.crudOperationsDisplayed);
  const keptOperationActions = originalOperationActions.splice(0, safeOptions.transferOperationsDisplayed);
  const splitActions = [...keptCrudActions, ...keptOperationActions];
  const dropdownActions = [...originalCrudActions, ...originalOperationActions];

  if (splitActions.length === 0 && dropdownActions.length === 0) {
    return [];
  }

  return [
    {
      ...baseColumnConfig,
      field: 'actions',
      sortable: false,
      disableColumnMenu: true,
      minWidth: calculateMinWidth(splitActions),
      headerName: t('judo.pages.table.column.actions', { defaultValue: 'Actions' }) as string,
      type: 'actions',
      getActions: (params: GridRowParams) => [
        <ButtonGroup>
          {splitActions.map((a) => (
            <Button
              key={a.id}
              variant="text"
              startIcon={a.icon}
              disabled={a.disabled ? a.disabled(params.row) : false}
              onClick={() => a.action!(params.row)}
            >
              {a.label ?? ''}
            </Button>
          ))}
          {dropdownActions.length ? (
            <DropdownButton
              id={id}
              variant="text"
              showDropdownIcon={false}
              menuItems={dropdownActions.map((action) => ({
                id: action.id,
                label: action.label,
                startIcon: action.icon,
                onClick: () => action.action!(params.row),
                disabled: action.disabled ? action.disabled(params.row) : false,
              }))}
            >
              <MdiIcon path="menu-down" />
            </DropdownButton>
          ) : null}
        </ButtonGroup>,
      ],
    },
  ];
};
