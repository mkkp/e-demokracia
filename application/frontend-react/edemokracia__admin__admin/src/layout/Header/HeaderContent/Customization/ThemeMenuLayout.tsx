//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/layout/Header/HeaderContent/Customization/ThemeMenuLayout.tsx'
// Template name: actor/src/layout/Header/HeaderContent/Customization/ThemeMenuLayout.tsx
// Template file: actor/src/layout/Header/HeaderContent/Customization/ThemeMenuLayout.tsx.hbs

import { useTheme } from '@mui/material/styles';
import { FormControlLabel, Radio, RadioGroup, useMediaQuery } from '@mui/material';
import { useConfig } from '~/hooks';
import { MenuOrientation } from '~/config';

export const ThemeMenuLayout = () => {
  const theme = useTheme();
  const downLG = useMediaQuery(theme.breakpoints.down('lg'));

  const { menuOrientation, onChangeMenuOrientation, onChangeMiniDrawer } = useConfig();
  const isHorizontal = menuOrientation === MenuOrientation.HORIZONTAL && !downLG;

  const handleContainerChange = (e: any) => {
    // Commented out sections produced bugs, will remove them later once everything has been stable for long enough.
    if (e.target.value === MenuOrientation.HORIZONTAL) {
      // onChangeMiniDrawer(true);
      onChangeMenuOrientation(e.target.value);
    } else {
      // onChangeMiniDrawer(true);
      onChangeMenuOrientation(e.target.value);
      // onChangeMiniDrawer(false);
    }
  };

  return (
    <RadioGroup row value={menuOrientation} onChange={handleContainerChange}>
      <FormControlLabel
        control={<Radio value={MenuOrientation.VERTICAL} />}
        sx={{ display: 'flex', '& .MuiFormControlLabel-label': { flex: 1 } }}
        label={'Vertical'}
      />
      <FormControlLabel
        control={<Radio value={MenuOrientation.HORIZONTAL} />}
        sx={{ display: 'flex', '& .MuiFormControlLabel-label': { flex: 1 } }}
        label={'Horizontal'}
      />
    </RadioGroup>
  );
};