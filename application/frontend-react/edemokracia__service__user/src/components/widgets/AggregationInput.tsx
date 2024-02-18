//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/components/widgets/AggregationInput.tsx'
// Template name: actor/src/components/widgets/AggregationInput.tsx
// Template file: actor/src/components/widgets/AggregationInput.tsx.hbs

import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import CircularProgress from '@mui/material/CircularProgress';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grid from '@mui/material/Grid';
import Grow from '@mui/material/Grow';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import TextField from '@mui/material/TextField';
import { debounce } from '@mui/material/utils';
import { clsx } from 'clsx';
import { useEffect, useMemo, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { debounceInputs } from '~/config';
import type { JudoStored } from '~/services/data-api/common';
import { exists } from '../../utilities';
import { MdiIcon } from '../MdiIcon';

interface AggregationInputProps {
  name: string;
  id: string;
  required?: boolean;
  label?: string;
  ownerData: any;
  error?: boolean;
  helperText?: string;
  readOnly?: boolean;
  disabled?: boolean;
  editMode?: boolean;
  labelList: string[];
  icon?: ReactNode;
  onCreate?: () => Promise<void> | undefined;
  onDelete?: () => Promise<void> | undefined;
  onEdit?: () => Promise<void> | undefined;
  onRemove?: () => Promise<void> | undefined;
  onSet?: () => Promise<void> | undefined;
  onUnset?: () => Promise<void> | undefined;
  onView?: () => Promise<void> | undefined;
  autoCompleteAttribute: string;
  onAutoCompleteSearch?: (searchText: string) => Promise<JudoStored<any>[]>;
  onAutoCompleteSelect: (target?: JudoStored<any> | null) => void;
  isInlineCreatable?: boolean;
}

export const AggregationInput = ({
  name,
  id,
  required,
  label,
  ownerData,
  error = false,
  helperText,
  readOnly = false,
  disabled = false,
  editMode = true,
  labelList,
  icon,
  onCreate,
  onDelete,
  onEdit,
  onRemove,
  onSet,
  onUnset,
  onView,
  autoCompleteAttribute,
  onAutoCompleteSearch,
  onAutoCompleteSelect,
  isInlineCreatable,
}: AggregationInputProps) => {
  const [options, setOptions] = useState<JudoStored<any>[]>([]);
  const [loading, setLoading] = useState(false);
  const [allowFetch, setAllowFetch] = useState(false);
  const [value, setValue] = useState<any>(ownerData[name] || null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const anchorRef = useRef<HTMLDivElement>(null);

  const { t } = useTranslation();

  useEffect(() => {
    setValue(ownerData[name] || null);
  }, [ownerData[name]]);

  const handleSearch = async (searchText: string) => {
    try {
      if (onAutoCompleteSearch) {
        setLoading(true);
        const data = await onAutoCompleteSearch(searchText);
        setOptions(data);
      }
    } catch (error) {
      // Handle error
    } finally {
      setLoading(false);
    }
  };

  const onInputChange = useMemo(
    () =>
      debounce((event: any, value: string) => {
        if (allowFetch) {
          handleSearch(value);
        }
      }, debounceInputs),
    [ownerData, allowFetch],
  );

  const handleDropdownToggle = () => {
    setDropdownOpen((prevOpen) => !prevOpen);
  };

  const handleDropdownClose = (event: Event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return;
    }

    setDropdownOpen(false);
  };
  const effectiveReadOnly = readOnly || !onAutoCompleteSearch || !onSet;

  return (
    <Grid container item direction="row" justifyContent="stretch" alignContent="stretch">
      <Box sx={{ padding: 0, flexGrow: 1 }}>
        <Autocomplete
          freeSolo={true}
          forcePopupIcon={!!onAutoCompleteSearch}
          id={id}
          disabled={!effectiveReadOnly && disabled}
          readOnly={effectiveReadOnly}
          onOpen={() => {
            if (!readOnly) {
              setAllowFetch(true);
              handleSearch('');
            }
          }}
          isOptionEqualToValue={(option: any, value: any) =>
            option[autoCompleteAttribute] === value[autoCompleteAttribute]
          }
          getOptionLabel={(option) => (option[autoCompleteAttribute as keyof JudoStored<any>] as string) || ''}
          options={options}
          value={ownerData[name] || null}
          clearOnBlur={true}
          loading={loading}
          disableClearable={true}
          renderInput={(params) => (
            <TextField
              {...params}
              name={name}
              id={id}
              required={required}
              label={label}
              error={error}
              helperText={helperText}
              className={clsx({
                'JUDO-viewMode': !editMode,
                'JUDO-required': required,
              })}
              onFocus={(event) => {
                event.target.select();
              }}
              InputProps={{
                ...params.InputProps,
                readOnly: readOnly || !onSet,
                startAdornment: icon && (
                  <InputAdornment position="start" style={{ marginTop: 0 }}>
                    {icon}
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <ButtonGroup
                      ref={anchorRef}
                      aria-label="link button group"
                      className={clsx({
                        AggregationInputButtonGroup: true,
                        AggregationFilled: exists(value),
                      })}
                    >
                      {loading ? (
                        <CircularProgress color="inherit" size="1rem" className="AggregationInputLoading" />
                      ) : null}
                      {onSet && !exists(value) && !readOnly && (
                        <IconButton
                          className={`${name}-set`}
                          disabled={disabled}
                          onClick={(event: any) => {
                            handleDropdownClose(event);
                            onSet();
                          }}
                          title={
                            t('judo.component.AggregationInput.open-filter', {
                              defaultValue: 'Open selector dialog',
                            }) as string
                          }
                        >
                          <MdiIcon path="magnify" />
                        </IconButton>
                      )}
                      {exists(value) && onView && (
                        <IconButton
                          className={`${name}-view`}
                          disabled={editMode && !isInlineCreatable}
                          onClick={(event: any) => {
                            handleDropdownClose(event);
                            onView();
                          }}
                          title={
                            t('judo.component.AggregationInput.navigate', {
                              defaultValue: 'Navigate to element',
                            }) as string
                          }
                        >
                          <MdiIcon path="eye" />
                        </IconButton>
                      )}
                      {!exists(value) && onCreate && !readOnly && (
                        <IconButton
                          className={`${name}-create`}
                          disabled={disabled || (editMode && !isInlineCreatable)}
                          onClick={(event: any) => {
                            handleDropdownClose(event);
                            onCreate();
                          }}
                          title={t('judo.component.AggregationInput.create', { defaultValue: 'Create' }) as string}
                        >
                          <MdiIcon path="file_document_plus" />
                        </IconButton>
                      )}
                      {exists(value) && (onEdit || onDelete || onRemove || onSet || onUnset) && (
                        <IconButton className={`${name}-dropdown`} disabled={disabled} onClick={handleDropdownToggle}>
                          <MdiIcon path="chevron-down" />
                        </IconButton>
                      )}
                    </ButtonGroup>
                  </InputAdornment>
                ),
              }}
            />
          )}
          onInputChange={onInputChange}
          onChange={(event, target) => {
            setValue(target);
            onAutoCompleteSelect(target);
          }}
        />
      </Box>
      <Popper
        sx={{
          zIndex: 1,
        }}
        open={dropdownOpen}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleDropdownClose}>
                <MenuList id={`${name}-menu`} autoFocusItem>
                  {exists(value) && onSet && !readOnly && (
                    <MenuItem
                      className={`${name}-set`}
                      disabled={disabled}
                      onClick={(event: any) => {
                        handleDropdownClose(event);
                        onSet();
                      }}
                    >
                      <MdiIcon path="magnify" sx={{ mr: 2 }} />
                      {
                        t('judo.component.AggregationInput.open-filter', {
                          defaultValue: 'Open selector dialog',
                        }) as string
                      }
                    </MenuItem>
                  )}
                  {exists(value) && onEdit && (
                    <MenuItem
                      className={`${name}-edit`}
                      disabled={disabled || editMode}
                      onClick={(event: any) => {
                        handleDropdownClose(event);
                        onEdit();
                      }}
                    >
                      <MdiIcon path="pencil" sx={{ mr: 2 }} />
                      {t('judo.component.AggregationInput.open-editor', { defaultValue: 'Edit' }) as string}
                    </MenuItem>
                  )}
                  {exists(value) && onDelete && (
                    <MenuItem
                      className={`${name}-delete`}
                      disabled={disabled || editMode}
                      onClick={(event: any) => {
                        handleDropdownClose(event);
                        onDelete();
                      }}
                    >
                      <MdiIcon path="delete" sx={{ mr: 2 }} />
                      {t('judo.component.AggregationInput.delete', { defaultValue: 'Delete' }) as string}
                    </MenuItem>
                  )}
                  {exists(value) && onRemove && !readOnly && (
                    <MenuItem
                      className={`${name}-remove`}
                      disabled={disabled}
                      onClick={(event: any) => {
                        handleDropdownClose(event);
                        onRemove();
                      }}
                    >
                      <MdiIcon path="link_off" sx={{ mr: 2 }} />
                      {t('judo.component.AggregationInput.remove', { defaultValue: 'Remove' }) as string}
                    </MenuItem>
                  )}
                  {exists(value) && onUnset && !readOnly && (
                    <MenuItem
                      className={`${name}-unset`}
                      disabled={disabled}
                      onClick={(event: any) => {
                        handleDropdownClose(event);
                        onUnset();
                      }}
                    >
                      <MdiIcon path="link_off" sx={{ mr: 2 }} />
                      {t('judo.component.AggregationInput.unset', { defaultValue: 'Unset' }) as string}
                    </MenuItem>
                  )}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Grid>
  );
};
