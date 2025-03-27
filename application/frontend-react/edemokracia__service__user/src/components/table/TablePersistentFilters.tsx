//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/components/table/LazyTable.tsx'
// Template name: actor/src/components/table/LazyTable.tsx
// Template file: actor/src/components/table/LazyTable.tsx.hbs

import Button from '@mui/material/Button';
import {
  GridValidRowModel,
} from '@mui/x-data-grid';
import { Filter, FilterOption } from '~/components-api';
import type { QueryCustomizer } from '~/services/data-api/common/QueryCustomizer';
import { mapCardsFiltersToFilters, mapPersistentTableFiltersToFilters, type DialogResultReason, type FiltersSerializer, type TableRowAction } from '~/utilities';
import { MdiIcon } from '../MdiIcon';
import { Grid, InputAdornment, TextField } from '@mui/material';

interface TablePersistentFiltersProps<T extends GridValidRowModel, TStored extends GridValidRowModel> {
  tableFilterOptions: FilterOption[];
  filters: Filter[];
  ownerData?: any;
  filtersSerializer: FiltersSerializer;
  onFilterChange: (newFilters: Filter[]) => void;
}

export function TablePersistentFilters<T extends GridValidRowModel, TStored extends T, S extends QueryCustomizer<T>>(
  props: TablePersistentFiltersProps<T, TStored>,
) {
  const {
    tableFilterOptions,
    filters,
    ownerData,
    filtersSerializer,
  } = props;
  
  function mergeFilters(originalFilters: Filter[], newFilters: Filter[]): Filter[] {
    const filteredOut = originalFilters.filter(item1 => 
      !newFilters.some(item2 => 
        item1.filterOption.attributeName === item2.filterOption.attributeName &&
        item1.filterBy.operator === item2.filterBy.operator
      )
    );
    return [...filteredOut, ...newFilters];
  }

  //const effectiveFilters = mergeFilters(filters, mapPersistentTableFiltersToFilters(tableFilterOptions));

  return (
    <>
      <Grid container sx={{ mb: 2 }}>
        <Grid item xs={6}>
          <TextField
            variant="standard"
            label="Felhasznalonev"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <MdiIcon path="magnify" />
                  </InputAdornment>
                ),
              },
            }}
  //          value={nameFilter.filterBy.value}
  //          onChange={(event) => {
  //            updateNameFilter(event.target.value);
  //          }}
          />
        </Grid>
        <Grid item xs={6}>
          <Button onClick={() => {
  //          onFiltersChange([
  //</Grid>            nameFilter,
  //          ]);
          }}>Apply</Button>
        </Grid>
      </Grid>
    </>
  );
}
