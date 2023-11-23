//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/layout/Header/HeaderContent/Customization/ThemeWidth.tsx'
// Template name: actor/src/layout/Header/HeaderContent/Customization/ThemeWidth.tsx
// Template file: actor/src/layout/Header/HeaderContent/Customization/ThemeWidth.tsx.hbs

import { useTheme } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { useConfig } from '~/hooks';

export const ThemeWidth = () => {
  const theme = useTheme();
  const { container, onChangeContainer } = useConfig();

  return (
    <RadioGroup row value={container ? 'container' : 'fluid'} onChange={() => onChangeContainer()}>
      <FormControlLabel
        control={<Radio value="fluid" />}
        sx={{ display: 'flex', '& .MuiFormControlLabel-label': { flex: 1 } }}
        label={'Fluid'}
      />
      <FormControlLabel
        control={<Radio value="container" />}
        sx={{ display: 'flex', '& .MuiFormControlLabel-label': { flex: 1 } }}
        label={'Container'}
      />
    </RadioGroup>
  );
};
