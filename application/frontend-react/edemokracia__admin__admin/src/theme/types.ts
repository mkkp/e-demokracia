//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: <actor>
// Path expression: 'src/theme/types.ts'
// Template name: actor/src/theme/types.ts
// Template file: actor/src/theme/types.ts.hbs

export interface Density {
  spacingMultiplier: number;
  fontSize: number;
  buttonSize: 'small' | 'medium' | 'large' | string;
  inputBaseSize: 'small' | 'medium' | string;
  borderRadius: number;
  dataGridDensity?: 'compact' | 'standard' | 'comfortable';
  isListDense?: boolean;
}
