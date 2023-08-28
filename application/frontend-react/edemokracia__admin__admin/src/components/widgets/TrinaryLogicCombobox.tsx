//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/components/widgets/TrinaryLogicCombobox.tsx'
// Template name: actor/src/components/widgets/TrinaryLogicCombobox.tsx
// Template file: actor/src/components/widgets/TrinaryLogicCombobox.tsx.hbs

import { TextField, InputAdornment, MenuItem } from '@mui/material';
import { useTranslation } from 'react-i18next';
import type { ChangeEvent } from 'react';
import { clsx } from 'clsx';
import { TRINARY_LOGIC, TrinaryLogicProps } from '../../components-api';
import { MdiIcon } from '../MdiIcon';

export const TrinaryLogicCombobox = ({
  required = false,
  autoFocus = false,
  readOnly = false,
  disabled = false,
  editMode = false,
  value = null,
  id,
  label,
  name,
  error,
  helperText,
  onChange,
  className,
}: TrinaryLogicProps) => {
  const { t } = useTranslation();
  const onChangeHandler = onChange
    ? (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const index = Array.from(TRINARY_LOGIC.values()).indexOf(event.target.value);
        const keysArray = Array.from(TRINARY_LOGIC.keys());
        onChange(keysArray[index]);
      }
    : undefined;

  return (
    <TextField
      name={name}
      id={id}
      required={required}
      autoFocus={autoFocus}
      label={label}
      select
      value={TRINARY_LOGIC.get(value)}
      className={`${clsx({
        'JUDO-viewMode': !editMode,
        'JUDO-required': required,
      })} ${className}`}
      onChange={onChangeHandler}
      disabled={disabled}
      error={error}
      helperText={helperText}
      InputProps={{
        readOnly,
        startAdornment: (
          <InputAdornment position="start">
            <MdiIcon path="format-list-bulleted" />
          </InputAdornment>
        ),
      }}
    >
      <MenuItem className="trinary-logic-combobox-item" id={`${id}-true`} value={'Yes'}>
        {t('judo.component.TrinaryLogic.true', { defaultValue: 'Yes' }) as string}
      </MenuItem>
      <MenuItem className="trinary-logic-combobox-item" id={`${id}-false`} value={'No'}>
        {t('judo.component.TrinaryLogic.false', { defaultValue: 'No' }) as string}
      </MenuItem>
      <MenuItem className="trinary-logic-combobox-item" id={`${id}-undefined`} value={'Unknown'}>
        {t('judo.component.TrinaryLogic.unknown', { defaultValue: 'Unknown' }) as string}
      </MenuItem>
    </TextField>
  );
};
