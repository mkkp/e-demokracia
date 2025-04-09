import { FormControlLabel, InputAdornment, MenuItem } from '@mui/material';
import Checkbox from '@mui/material/Checkbox/Checkbox';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { DatePicker, DateTimePicker } from '@mui/x-date-pickers';
import { FC, useCallback, useEffect, useRef, useState } from 'react';
import { Filter, FilterType, Operation } from '~/components-api';
import { buildFilter } from '~/utilities';
import { MdiIcon } from '../MdiIcon';
import { TrinaryLogicCombobox } from '../widgets';

export interface SingleValueFilterComponentProps<T> {
  filters: Filter[];
  onFiltersChange: (newFilters: Filter[]) => void;
  filterType: FilterType;
  operator: Operation;
  attributeName: keyof T;
  label: string;
  col: number;
}

export const SingleValueFilterComponent: FC<SingleValueFilterComponentProps<any>> = ({
  filters,
  onFiltersChange,
  filterType,
  operator,
  attributeName,
  label,
  col,
}) => {
  const fallbackFilter: Filter = buildFilter(filterType, operator, attributeName as string, null);

  const [filter, setFilter] = useState<Filter>(
    filters?.find(
      (f) =>
        f.filterOption.attributeName === attributeName &&
        f.filterOption.filterType === filterType &&
        f.filterBy.operator === operator,
      ) || fallbackFilter,
    );

  const updateFilter = useCallback((value: any) => {
    setFilter(buildFilter(filterType, operator, attributeName as string, value));
  }, []);

  useEffect(() => {
    const newArr = filters?.filter(
      (f) =>
        f.filterOption.attributeName !== filter.filterOption.attributeName ||
        f.filterOption.filterType !== filter.filterOption.filterType ||
        f.filterBy.operator !== filter.filterBy.operator,
    );
    if (filter.filterBy.value) {
      newArr.push(filter);
    }
    onFiltersChange(newArr);
  }, [filter]);

  const [inputValue, setInputValue] = useState<any>(null);
  const inputValueRef = useRef(inputValue);

  // Keep the ref updated with the latest inputValue
  useEffect(() => {
    inputValueRef.current = inputValue;
  }, [inputValue]);

  // Debounce the API call
  useEffect(() => {
    const timer = setTimeout(() => {
      // Use the ref to get the CURRENT value
      const currentValue = inputValueRef.current;
      // Make API call with latest value
      updateFilter(currentValue);
    }, 500);

    return () => clearTimeout(timer);
  }, [inputValue]); // Re-run when inputValue changes

  // return (
  // <>
  //     <Grid item xs={col}>
  //       <TextField
  //         variant="standard"
  //         label={label}
  //         value={inputValue}
  //         onChange={(e) => setInputValue(e.target.value)}
  //       />
  //     </Grid>
  // </>);
  return (
    <>
      <Grid item xs={col}>
        {(() => {
          switch (filter.filterOption.filterType) {
            case FilterType.boolean:
              return (
                // <FormControlLabel
                //   control={
                //     <Checkbox value={inputValue ?? 'false'} checked={inputValue ?? false} onChange={(event) => {
                //       console.log("DDDD: " + event.target.value + ' ' + inputValue);
                //       setInputValue(!(inputValue ?? false))
                //     }} />
                //   }
                //   label={filter.filterOption.label ?? filter.filterOption.attributeName}
                // />
                <TrinaryLogicCombobox
                  label={filter.filterOption.label ?? filter.filterOption.attributeName}
                  value={inputValue ?? null}
                  onChange={(newValue: any) => setInputValue(newValue)}
                />

              );
            case FilterType.date:
              return (
                <DatePicker
                  label={filter.filterOption.label ?? filter.filterOption.attributeName}
                  value={inputValue ?? null}
                  views={['year', 'month', 'day']}
                  onChange={(newValue) => setInputValue(newValue)}
                  slotProps={{
                    textField: {
                      variant: 'standard',
                      InputProps: {
                        startAdornment: (
                          <InputAdornment position="start">
                            <MdiIcon path="calendar_month" />
                          </InputAdornment>
                        ),
                      },
                    },
                  }}
                />
              );
            case FilterType.dateTime:
              return (
                <DateTimePicker
                  label={filter.filterOption.label ?? filter.filterOption.attributeName}
                  value={inputValue ?? null}
                  ampm={false}
                  ampmInClock={false}
                  views={['year', 'month', 'day', 'hours', 'minutes', 'seconds']}
                  onChange={(newValue) => setInputValue(newValue)}
                  slotProps={{
                    textField: {
                      variant: 'standard',
                      InputProps: {
                        startAdornment: (
                          <InputAdornment position="start">
                            <MdiIcon path="calendar-range" />
                          </InputAdornment>
                        ),
                      },
                    },
                  }}
                />
              );
            // case FilterType.time:
            //   return (
            //     <TextField
            //       className={valueId}
            //       label={filter.filterOption.label ?? filter.filterOption.attributeName}
            //       value={filter.filterBy.value}
            //       onChange={(event) => setFilterValue(filter, event.target.value)}
            //       InputProps={{
            //         startAdornment: (
            //           <InputAdornment position="start">
            //             <MdiIcon path="clock-outline" />
            //           </InputAdornment>
            //         ),
            //       }}
            //     />
            //   );
            case FilterType.enumeration:
              return (
                <TextField
                  label={filter.filterOption.label ?? filter.filterOption.attributeName}
                  variant="standard"
                  value={inputValue ?? null}
                  select
                  onChange={(event) => setInputValue(event.target.value)}
                >
                  {filter.filterOption.enumValues?.map((item) => (
                    <MenuItem key={item.value} value={item.value}>
                      {item.label}
                    </MenuItem>
                  ))}
                </TextField>
              );
            case FilterType.numeric:
              return (
                <TextField
                  label={filter.filterOption.label ?? filter.filterOption.attributeName}
                  type="number"
                  variant="standard"
                  value={inputValue ?? null}
                  onChange={(event) => setInputValue(Number(event.target.value))}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <MdiIcon path="numbers" />
                      </InputAdornment>
                    ),
                  }}
                />
              );
            case FilterType.string:
              return (
                <TextField
                  label={filter.filterOption.label ?? filter.filterOption.attributeName}
                  value={inputValue ?? ''}
                  variant="standard"
                  onChange={(event) => setInputValue(event.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <MdiIcon path="abc" />
                      </InputAdornment>
                    ),
                  }}
                />
              );
            case FilterType.trinaryLogic:
              return (
                <TrinaryLogicCombobox
                  label={filter.filterOption.label ?? filter.filterOption.attributeName}
                  value={inputValue ?? ''}
                  onChange={(newValue: any) => setInputValue(newValue)}
                />
              );
          }
        })()}
      </Grid>
    </>
  );
};
