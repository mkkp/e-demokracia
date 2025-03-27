//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/components/widgets/CardsFilter.tsx'
// Template name: actor/src/components/widgets/CardsFilter.tsx
// Template file: actor/src/components/widgets/CardsFilter.tsx.hbs

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { debounce } from '@mui/material/utils';
import { type FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FilterType } from '~/components-api';
import { debounceInputs } from '~/config';
import { useL10N } from '~/l10n/l10n-context';

export interface CardsFilterDefinition<T> {
  type: FilterType;
  operator?: any;
  field: keyof T;
  label: string;
  inputType: 'options' | 'text';
  searchLabel?: string;
  allowSearch?: boolean;
  values?: { value: any; label: string }[];
}

export const CardsFilter: FC<{
  filterDefinitions: CardsFilterDefinition<any>[];
  onFiltersChanged?: (values: Record<string, any>) => void;
}> = ({ filterDefinitions, onFiltersChanged }) => {
  const { locale: l10nLocale } = useL10N();
  const { t } = useTranslation();

  const [values, setValues] = useState<Record<string, any>>({});
  const [searchValues, setSearchValues] = useState<Record<string, any>>({});
  const [visibleValues, setVisibleValues] = useState<Record<string, any[]>>({});

  const updateValue = useCallback(
    (field: string, value: any) => {
      const newValues = {
        ...values,
        [field]: values[field] === value ? null : value,
      };
      setValues(newValues);
      onFiltersChanged?.(newValues);
    },
    [values, onFiltersChanged],
  );

  const updateValueDebounced = useCallback(debounce(updateValue, debounceInputs), [
    values,
    onFiltersChanged,
    updateValue,
  ]);

  const clearFilters = useCallback(() => {
    // We need to explicitly null out values because our filter may refer to Transfer fields which are not in the list
    // of columns. Other framework features rely on column info for e.g. queryCustomizer cleanup.
    const newValues: Record<string, any> = {};
    for (const key in values) {
      newValues[key] = null;
    }
    setValues(newValues);
    onFiltersChanged?.(newValues);
  }, [values]);

  return (
    <Grid container direction="row" spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4">
          {t('judo.component.CardsContainer.Filter.filter', { defaultValue: 'Filter' })}
        </Typography>
        <Button variant={'text'} onClick={clearFilters}>
          {t('judo.component.CardsContainer.Filter.clearAll', { defaultValue: 'Filter' })}
        </Button>
      </Grid>
      {filterDefinitions.map((d) => (
        <Grid item xs={12} key={d.field as string}>
          <Typography variant="subtitle1">{d.label}:</Typography>
          {d.allowSearch ? (
            <TextField
              size="small"
              variant="standard"
              label={d.searchLabel}
              defaultValue={searchValues[d.field as string]}
              onChange={(evt) => {
                setSearchValues((prev) => {
                  return {
                    ...prev,
                    [d.field as string]: evt.target.value,
                  };
                });
                if (d.inputType === 'text') {
                  updateValueDebounced(d.field as string, evt.target.value);
                }
              }}
            />
          ) : null}
          {d.values ? (
            <Box sx={{ maxHeight: 170, overflowX: 'scroll' }}>
              <FormGroup>
                {d.values
                  .filter((v) =>
                    searchValues[d.field as string]
                      ? v.label.toLowerCase().includes(searchValues[d.field as string].toLowerCase())
                      : true,
                  )
                  .map((v) => (
                    <FormControlLabel
                      key={`${d.label}-${v.value}`}
                      control={
                        <Checkbox
                          size="small"
                          checked={values[d.field as string] === v.value}
                          onClick={() => updateValue(d.field as string, v.value)}
                        />
                      }
                      label={v.label}
                    />
                  ))}
              </FormGroup>
            </Box>
          ) : null}
        </Grid>
      ))}
    </Grid>
  );
};
