import { darken, lighten } from '@mui/material/styles';
import type { GridRowClassNameParams, GridValidRowModel } from '@mui/x-data-grid';

export const TABLE_ROW_HIGHLIGHTING_HOOK_INTERFACE_KEY = 'table-row-highlighting-hook-interface-key';

export type TableRowHighlightingHook<T extends GridValidRowModel> = () => () => RowStylerConfigured<T>[];

export interface CustomRowThemeData {
  name: string;
  backgroundColor?: string;
  fontColor?: string;
}

export interface RowStyler<T extends GridValidRowModel> {
  name: string;
  condition: (params: GridRowClassNameParams<T>) => boolean;
}

export interface RowStylerConfigured<T extends GridValidRowModel> extends RowStyler<T>, CustomRowThemeData {
  label: string;
  backgroundColor?: string;
  fontColor?: string;
}

const getBackgroundColor = (color: string, mode: string) =>
  mode === 'dark' ? darken(color, 0.6) : lighten(color, 0.6);
const getHoverBackgroundColor = (color: string, mode: string) =>
  mode === 'dark' ? darken(color, 0.4) : lighten(color, 0.4);
const getSelectedBackgroundColor = (color: string, mode: string) =>
  mode === 'dark' ? darken(color, 0.5) : lighten(color, 0.5);
const getSelectedHoverBackgroundColor = (color: string, mode: string) =>
  mode === 'dark' ? darken(color, 0.3) : lighten(color, 0.3);

const createRowThemes = ({ name, backgroundColor, fontColor }: CustomRowThemeData): any => {
  return {
    [`& .${name}`]: {
      ...(fontColor
        ? {
            color: fontColor,
          }
        : {}),
      ...(backgroundColor
        ? {
            backgroundColor: getBackgroundColor(backgroundColor, 'light'),
            '&:hover': {
              backgroundColor: getHoverBackgroundColor(backgroundColor, 'light'),
            },
            '&.Mui-selected': {
              backgroundColor: getSelectedBackgroundColor(backgroundColor, 'light'),
              '&:hover': {
                backgroundColor: getSelectedHoverBackgroundColor(backgroundColor, 'light'),
              },
            },
          }
        : {}),
    },
  };
};

export const transformRowStylings = <T extends GridValidRowModel>(rowStylings: RowStylerConfigured<T>[]): any => {
  const res = {};
  // Should be faster than .reduce()
  for (const st of rowStylings) {
    Object.assign(res, createRowThemes(st));
  }

  return res;
};
