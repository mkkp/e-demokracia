//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/components/widgets/AggregationInput.tsx'
// Template name: actor/src/components/widgets/AggregationInput.tsx
// Template file: actor/src/components/widgets/AggregationInput.tsx.hbs

import { ButtonBase, Grid, IconButton, InputAdornment, TextField } from '@mui/material';
import { useState } from 'react';
import type { ReactNode } from 'react';
import { exists } from '../../utilities';
import { MdiIcon } from '../MdiIcon';

interface AggregationInputProps {
  name?: string;
  id?: string;
  label?: string;
  value: any | undefined | null;
  error?: boolean | undefined;
  helperText?: string | undefined;
  disabled?: boolean | undefined;
  editMode?: boolean | undefined;
  labelList: string[];
  icon?: ReactNode;
  onCreate?: () => Promise<void> | undefined;
  onDelete?: () => Promise<void> | undefined;
  onEdit?: () => Promise<void> | undefined;
  onRemove?: () => Promise<void> | undefined;
  onSet?: () => Promise<void> | undefined;
  onUnset?: () => Promise<void> | undefined;
  onView?: () => Promise<void> | undefined;
}

export const AggregationInput = ({
  name,
  id,
  label,
  value,
  error = false,
  helperText,
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
}: AggregationInputProps) => {
  const [focused, setFocused] = useState(false);

  return (
    <Grid container item direction="row" justifyContent="stretch" alignContent="stretch">
      <ButtonBase
        sx={{ padding: 0, flexGrow: 1 }}
        disabled={disabled || !onSet}
        onFocusCapture={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onClick={onSet}
      >
        <TextField
          name={name}
          id={id}
          label={label}
          error={error}
          helperText={helperText}
          focused={focused}
          fullWidth
          value={labelList.filter((l) => !!l && l.length > 0).join(' - ')}
          className={!editMode ? 'JUDO-viewMode' : undefined}
          sx={{
            ':hover': {
              cursor: 'pointer',
            },
            '.MuiFilledInput-input:hover': {
              cursor: 'pointer',
            },
          }}
          InputProps={{
            readOnly: !onSet || disabled,
            startAdornment: <InputAdornment position="start">{icon}</InputAdornment>,
          }}
        />
      </ButtonBase>
      {exists(value) && onView && (
        <IconButton className={`${name}-view`} disabled={disabled || editMode} onClick={onView}>
          <MdiIcon path="eye" />
        </IconButton>
      )}
      {exists(value) && onEdit && (
        <IconButton className={`${name}-edit`} disabled={disabled || editMode} onClick={onEdit}>
          <MdiIcon path="pencil" />
        </IconButton>
      )}
      {exists(value) && onDelete && (
        <IconButton className={`${name}-delete`} disabled={disabled || editMode} onClick={onDelete}>
          <MdiIcon path="delete" />
        </IconButton>
      )}
      {exists(value) && onRemove && (
        <IconButton className={`${name}-remove`} disabled={disabled} onClick={onRemove}>
          <MdiIcon path="link_off" />
        </IconButton>
      )}
      {exists(value) && onUnset && (
        <IconButton className={`${name}-unset`} disabled={disabled} onClick={onUnset}>
          <MdiIcon path="link_off" />
        </IconButton>
      )}
      {!exists(value) && onCreate && (
        <IconButton className={`${name}-create`} disabled={disabled || editMode} onClick={onCreate}>
          <MdiIcon path="file_document_plus" />
        </IconButton>
      )}
      {/*onSet && (
        <IconButton className={`${name}-set`} disabled={disabled} onClick={onSet}>
            <MdiIcon path="link" />
        </IconButton>
      )*/}
    </Grid>
  );
};
