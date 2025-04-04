import { Grid, InputAdornment, TextField } from '@mui/material';
import { GridValidRowModel } from '@mui/x-data-grid';
import { Filter, FilterOption } from '~/components-api';
import type { QueryCustomizer } from '~/services/data-api/common/QueryCustomizer';
import {
  type DialogResultReason,
  type FiltersSerializer,
  type TableRowAction,
  getOperationFromFilterOperationType,
  mapCardsFiltersToFilters,
} from '~/utilities';
import { MdiIcon } from '../MdiIcon';
import { SingleValueFilterComponent } from './SingleValueFilterComponent';

interface FixedTableFiltersProps<T extends GridValidRowModel, TStored extends GridValidRowModel> {
  tableFilterOptions: FilterOption[];
  filters: Filter[];
  ownerData?: any;
  filtersSerializer: FiltersSerializer;
  onFiltersChange: (newFilters: Filter[]) => void;
}

export function FixedTableFilters<T extends GridValidRowModel, TStored extends T, S extends QueryCustomizer<T>>(
  props: FixedTableFiltersProps<T, TStored>,
) {
  const { tableFilterOptions, filters, ownerData, filtersSerializer, onFiltersChange } = props;

  // function mergeFilters(originalFilters: Filter[], newFilters: Filter[]): Filter[] {
  //   const filteredOut = originalFilters.filter(item1 =>
  //     !newFilters.some(item2 =>
  //       item1.filterOption.attributeName === item2.filterOption.attributeName &&
  //       item1.filterBy.operator === item2.filterBy.operator
  //     )
  //   );
  //   return [...filteredOut, ...newFilters];
  // }

  //const effectiveFilters = mergeFilters(filters, mapPersistentTableFiltersToFilters(tableFilterOptions));

  return (
    <>
      <Grid container sx={{ mb: 2 }}>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            {tableFilterOptions.map((f) => (
              <SingleValueFilterComponent
                key={f.id}
                attributeName={f.attributeName as keyof T}
                filterType={f.filterType}
                operator={getOperationFromFilterOperationType(f, f.defaultOperationType)}
                filters={filters}
                onFiltersChange={onFiltersChange}
                label={f.label ?? ''}
                col={f.col ?? 3}
              />
            ))}
          </Grid>

          {/* <TextField
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
          }}>Apply</Button> */}
        </Grid>
      </Grid>
    </>
  );
}
