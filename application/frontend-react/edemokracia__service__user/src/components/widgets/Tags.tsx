//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/components/widgets/Tags.tsx'
// Template name: actor/src/components/widgets/Tags.tsx
// Template file: actor/src/components/widgets/Tags.tsx.hbs

import { Button } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import ButtonGroup from '@mui/material/ButtonGroup';
import Chip from '@mui/material/Chip';
import CircularProgress from '@mui/material/CircularProgress';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { debounce } from '@mui/material/utils';
import clsx from 'clsx';
import { type MouseEvent, type SyntheticEvent, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { MdiIcon } from '~/components/MdiIcon';
import { debounceInputs } from '~/config/general';
import { QueryCustomizer } from '~/services/data-api/common/QueryCustomizer';
import { StringOperation } from '~/services/data-api/model/StringOperation';
import { fileHandling } from '~/utilities/file-handling';

export interface TagsProps<P, T> {
  id: string;
  label: string;
  ownerData: P;
  name: keyof P;
  error?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
  helperText?: string;
  editMode?: boolean;
  autoCompleteAttribute: keyof T;
  isBinary?: boolean;
  identifierAttribute: string | keyof T;
  onAutoCompleteSearch?: (searchText: string, preparedQueryCustomizer: QueryCustomizer<T>) => Promise<T[]>;
  additionalMaskAttributes?: string[];
  limitOptions?: number;
  onValueChange?: (target: T[], added: T[], removed: T[]) => Promise<void>;
  onItemClick?: (target: T) => void;
  onSearchDialogsClick?: () => void;
  searchDialogTitle?: string;
  searchDialogIcon?: string;
  onCreateDialogsClick?: () => void;
  createDialogTitle?: string;
  createDialogIcon?: string;
  onClearDialogsClick?: () => Promise<void>;
  clearTitle?: string;
  clearIcon?: string;
  refreshCounter?: number;
  isOwnerLoading?: boolean;
  onAsyncLoad?: (queryCustomizer: QueryCustomizer<T>) => Promise<T[]>;
  annotations?: string[];
}

/**
 * Experimental Tags component to serve as an alternative to aggregation->association collections.
 */
export function Tags<P, T>(props: TagsProps<P, T>) {
  const {
    id,
    label,
    ownerData,
    name,
    error,
    readOnly = false,
    disabled = false,
    helperText,
    editMode = false,
    autoCompleteAttribute,
    isBinary = false,
    onAutoCompleteSearch,
    onValueChange,
    onItemClick,
    onSearchDialogsClick,
    searchDialogTitle,
    searchDialogIcon = 'link',
    onCreateDialogsClick,
    createDialogTitle,
    createDialogIcon = 'file-document-plus',
    onClearDialogsClick,
    clearTitle = 'Clear',
    clearIcon = 'close',
    additionalMaskAttributes = [],
    limitOptions = 10,
    identifierAttribute,
    refreshCounter,
    isOwnerLoading = false,
    onAsyncLoad,
    annotations = [],
  } = props;
  const [options, setOptions] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(isOwnerLoading);
  const [values, setValues] = useState<T[]>((ownerData[name] as T[]) ?? []);
  const refreshRef = useRef<number>(refreshCounter || -1);
  const { downloadFile, extractFileNameFromToken } = fileHandling();

  const createQueryCustomizer = useCallback(
    (searchText?: string) => {
      const filter: { value: string; operator: any }[] = [];
      if (searchText) {
        filter.push({
          value: `%${searchText}%`,
          operator: StringOperation.like,
        });
      }
      return {
        _mask: `{${autoCompleteAttribute as string}${additionalMaskAttributes.length ? ',' + additionalMaskAttributes.join(',') : ''}}`,
        [autoCompleteAttribute]: filter,
        _orderBy: [
          {
            attribute: autoCompleteAttribute as string,
            descending: false,
          },
        ],
        _seek: {
          limit: limitOptions,
        },
      };
    },
    [autoCompleteAttribute, additionalMaskAttributes, limitOptions],
  );

  const handleSearch = useCallback(
    async (searchText: string) => {
      try {
        setLoading(true);
        const queryCustomizer: QueryCustomizer<any> = createQueryCustomizer(searchText);
        const response = await onAutoCompleteSearch!(searchText, queryCustomizer);
        setOptions(response);
      } catch (error) {
        console.error(error);
        setOptions([]);
      } finally {
        setLoading(false);
      }
    },
    [loading, options, onAutoCompleteSearch],
  );

  const onInputChange = useMemo(
    () =>
      debounce((event: any, value: string, reason: string) => {
        if (reason !== 'reset') {
          handleSearch(value);
        }
      }, debounceInputs),
    [handleSearch],
  );

  const onChange = useCallback(
    (event: SyntheticEvent, value: (string | any)[], reason: string) => {
      if (typeof onValueChange === 'function') {
        const added = value.filter(
          (v) => !values.some((vv) => vv[identifierAttribute as keyof T] === v[identifierAttribute as keyof T]),
        );
        const removed = values.filter(
          (v) => !value.some((vv) => vv[identifierAttribute as keyof T] === v[identifierAttribute as keyof T]),
        );
        onValueChange(value as any, added, removed);
      }
    },
    [onValueChange, values],
  );

  const onChipClicked = useCallback(
    (event: MouseEvent) => {
      const label = (event.target as HTMLSpanElement).textContent;
      if (label) {
        const data = values.find((c: any) => c[autoCompleteAttribute] === label);
        if (data && onItemClick && !editMode) {
          onItemClick(data);
        }
      }
    },
    [values, onItemClick, editMode],
  );

  useEffect(() => {
    if (
      typeof refreshCounter === 'number' &&
      refreshCounter > refreshRef.current &&
      typeof onAsyncLoad === 'function'
    ) {
      (async () => {
        try {
          const queryCustomizer: QueryCustomizer<any> = createQueryCustomizer();
          const response = await onAsyncLoad(queryCustomizer);
          refreshRef.current = refreshCounter;
          setValues(response);
        } catch (e) {
          console.error(e);
        }
      })();
    }
  }, [refreshCounter, onAsyncLoad]);

  useEffect(() => {
    if (typeof onAsyncLoad !== 'function') {
      setValues((ownerData[name] as T[]) || []);
    }
  }, [ownerData]);

  useEffect(() => {
    setLoading(isOwnerLoading);
  }, [isOwnerLoading]);

  return (
    <Autocomplete
      multiple
      freeSolo
      clearOnBlur
      id={id}
      disabled={!readOnly && disabled}
      readOnly={readOnly}
      options={options}
      loading={loading}
      value={values}
      disableClearable={true}
      getOptionKey={(option) => option[identifierAttribute]}
      getOptionLabel={(option) => option[autoCompleteAttribute] ?? ''}
      isOptionEqualToValue={(option, value) => option[identifierAttribute] === value[identifierAttribute]}
      onOpen={
        onAutoCompleteSearch
          ? () => {
              setOptions([]); // always start with a clean slate
              handleSearch('');
            }
          : undefined
      }
      onInputChange={onInputChange}
      onChange={onChange}
      renderTags={(tagValue, getTagProps) =>
        tagValue.map((option, index) => {
          const { key, ...rest } = getTagProps({ index });
          let deleteButton = <></>;
          if (isBinary) {
            if (!readOnly) {
              deleteButton = (
                <Button
                  id={`${id}-delete`}
                  onClick={(event: any) => {
                    event.preventDefault();
                    event.stopPropagation();
                    if (typeof onValueChange === 'function') {
                      onValueChange(values as any, [], [option]);
                    }
                  }}
                >
                  <MdiIcon path="delete-forever" sx={{ mr: 0.5 }} />
                </Button>
              );
            }
            return (
              <ButtonGroup key={key} size="small" variant="outlined" sx={{ marginRight: 1 }}>
                <Button
                  id={`${id}-download`}
                  startIcon={<MdiIcon path="file-document-outline" mimeType={{ type: '*', subType: '*' }} />}
                  onClick={(event: any) => {
                    event.preventDefault();
                    event.stopPropagation();
                    const data = option;
                    if (data && onItemClick && !editMode) {
                      onItemClick(data);
                    }
                  }}
                >
                  {extractFileNameFromToken(option[autoCompleteAttribute])}
                </Button>
                <Button
                  id={`${id}-view`}
                  onClick={(event: any) => {
                    event.preventDefault();
                    event.stopPropagation();
                    downloadFile(option, autoCompleteAttribute as string, 'inline');
                  }}
                >
                  <MdiIcon path="eye" sx={{ mr: 0.5 }} />
                </Button>
                <Button
                  id={`${id}-view`}
                  onClick={(event: any) => {
                    event.preventDefault();
                    event.stopPropagation();
                    downloadFile(option, autoCompleteAttribute as string, 'attachment');
                  }}
                >
                  <MdiIcon path="download" sx={{ mr: 0.5 }} />
                </Button>
                {deleteButton}
              </ButtonGroup>
            );
          } else {
            return (
              <Chip
                key={key}
                label={option[autoCompleteAttribute]}
                {...rest}
                sx={{ cursor: typeof onItemClick === 'function' && !editMode ? 'pointer' : undefined }}
                onClick={onChipClicked}
              />
            );
          }
        })
      }
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          className={clsx({
            'JUDO-viewMode': !editMode,
          })}
          error={error}
          helperText={helperText}
          InputLabelProps={{ shrink: true }}
          InputProps={{
            ...params.InputProps,
            readOnly: readOnly,
            endAdornment: (
              <InputAdornment position="end">
                <ButtonGroup
                  aria-label="tags button group"
                  className={clsx({
                    TagsButtonGroup: true,
                  })}
                >
                  {loading ? <CircularProgress color="inherit" size="1rem" className="TagsLoading" /> : null}
                  {!readOnly && onClearDialogsClick ? (
                    <IconButton disabled={disabled} onClick={onClearDialogsClick} title={clearTitle}>
                      <MdiIcon path={clearIcon} />
                    </IconButton>
                  ) : null}
                  {!readOnly && onCreateDialogsClick ? (
                    <IconButton disabled={disabled} onClick={onCreateDialogsClick} title={createDialogTitle}>
                      <MdiIcon path={createDialogIcon} />
                    </IconButton>
                  ) : null}
                  {!readOnly && onSearchDialogsClick ? (
                    <IconButton disabled={disabled} onClick={onSearchDialogsClick} title={searchDialogTitle}>
                      <MdiIcon path={searchDialogIcon} />
                    </IconButton>
                  ) : null}
                </ButtonGroup>
              </InputAdornment>
            ),
          }}
        />
      )}
    />
  );
}
