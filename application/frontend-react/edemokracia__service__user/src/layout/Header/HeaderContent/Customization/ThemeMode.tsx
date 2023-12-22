//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/layout/Header/HeaderContent/Customization/ThemeMode.tsx'
// Template name: actor/src/layout/Header/HeaderContent/Customization/ThemeMode.tsx
// Template file: actor/src/layout/Header/HeaderContent/Customization/ThemeMode.tsx.hbs

import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { useTheme } from '@mui/material/styles';
import type { ChangeEvent } from 'react';
import { ThemeMode as ThemeModeEnum } from '~/config';
import { useConfig } from '~/hooks';

export const ThemeMode = () => {
  const theme = useTheme();
  const { mode, onChangeMode } = useConfig();

  const handleModeChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChangeMode(event.target.value as ThemeModeEnum);
  };

  return (
    <RadioGroup row value={mode} onChange={handleModeChange}>
      <FormControlLabel
        control={<Radio value="light" />}
        sx={{ display: 'flex', '& .MuiFormControlLabel-label': { flex: 1 } }}
        label={'Light'}
      />
      <FormControlLabel
        control={<Radio value="dark" />}
        sx={{ display: 'flex', '& .MuiFormControlLabel-label': { flex: 1 } }}
        label={'Dark'}
      />
    </RadioGroup>
  );
};
