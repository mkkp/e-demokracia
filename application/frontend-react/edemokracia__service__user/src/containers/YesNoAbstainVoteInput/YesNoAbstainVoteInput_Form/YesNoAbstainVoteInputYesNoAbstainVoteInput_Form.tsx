//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #application.pageContainers
// Path expression: 'src/containers/'+#containerPath(#self)+'/'+#containerComponentName(#self)+'.tsx'
// Template name: actor/src/containers/container.tsx
// Template file: actor/src/containers/container.tsx.hbs

import type { Dispatch, SetStateAction, FC } from 'react';
import { forwardRef, useEffect, useState, useCallback, useImperativeHandle } from 'react';
import { useTranslation } from 'react-i18next';
import { NumericFormat } from 'react-number-format';
import { LoadingButton } from '@mui/lab';
import { OBJECTCLASS } from '@pandino/pandino-api';
import type { JudoIdentifiable } from '@judo/data-api-common';
import type { CustomFormVisualElementProps } from '~/custom';
import { ComponentProxy } from '@pandino/react-hooks';
import { clsx } from 'clsx';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import InputAdornment from '@mui/material/InputAdornment';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import type { GridFilterModel } from '@mui/x-data-grid';
import { useL10N } from '~/l10n/l10n-context';
import { CUSTOM_VISUAL_ELEMENT_INTERFACE_KEY } from '~/custom';
import { mainContainerPadding } from '~/theme';
import { DIVIDER_HEIGHT } from '~/config';
import type { Filter } from '~/components-api';
import { MdiIcon, ModeledTabs, DropdownButton, useJudoNavigation } from '~/components';
import {
  isErrorOperationFault,
  useErrorHandler,
  fileHandling,
  uiDateToServiceDate,
  serviceDateToUiDate,
  uiTimeToServiceTime,
  serviceTimeToUiTime,
  stringToBooleanSelect,
  booleanToStringSelect,
} from '~/utilities';

import { DatePicker, DateTimePicker, TimePicker } from '@mui/x-date-pickers';
import type { DateValidationError, DateTimeValidationError, TimeValidationError } from '@mui/x-date-pickers';
import {
  AssociationButton,
  BinaryInput,
  CollectionAssociationButton,
  NumericInput,
  TrinaryLogicCombobox,
} from '~/components/widgets';
import { useConfirmationBeforeChange } from '~/hooks';
import {
  YesNoAbstainVoteInput,
  YesNoAbstainVoteInputQueryCustomizer,
  YesNoAbstainVoteInputStored,
} from '~/services/data-api';

export interface YesNoAbstainVoteInputYesNoAbstainVoteInput_FormActionDefinitions {}

export interface YesNoAbstainVoteInputYesNoAbstainVoteInput_FormProps {
  refreshCounter: number;
  actions: YesNoAbstainVoteInputYesNoAbstainVoteInput_FormActionDefinitions;

  data: YesNoAbstainVoteInputStored;
  isLoading: boolean;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof YesNoAbstainVoteInput, value: any) => void;
  editMode: boolean;
  validation: Map<keyof YesNoAbstainVoteInput, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof YesNoAbstainVoteInput, string>>>;
}

// XMIID: User/(esm/_-1U_03WyEe2LTNnGda5kaw)/TransferObjectFormPageContainer
// Name: YesNoAbstainVoteInput::YesNoAbstainVoteInput_Form
export default function YesNoAbstainVoteInputYesNoAbstainVoteInput_Form(
  props: YesNoAbstainVoteInputYesNoAbstainVoteInput_FormProps,
) {
  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const {
    refreshCounter,
    actions,
    data,
    isLoading,
    isFormUpdateable,
    isFormDeleteable,
    storeDiff,
    editMode,
    validation,
    setValidation,
  } = props;
  const { locale: l10nLocale } = useL10N();

  useConfirmationBeforeChange(
    editMode,
    t('judo.form.navigation.confirmation', {
      defaultValue: 'You have potential unsaved changes in your form, are you sure you would like to navigate away?',
    }),
  );

  return (
    <Grid container spacing={2} direction="column" alignItems="stretch" justifyContent="flex-start">
      <Grid item xs={12} sm={12}>
        <TextField
          required={false}
          name="value"
          id="User/(esm/_6ISHYOSLEe20cv3f2msZXg)/EnumerationTypeCombo"
          autoFocus
          label={t('YesNoAbstainVoteInput.YesNoAbstainVoteInput_Form.value', { defaultValue: 'Vote' }) as string}
          value={data.value || ''}
          className={clsx({
            'JUDO-viewMode': !editMode,
            'JUDO-required': false,
          })}
          disabled={isLoading}
          error={!!validation.get('value')}
          helperText={validation.get('value')}
          onChange={(event) => {
            storeDiff('value', event.target.value);
          }}
          InputLabelProps={{ shrink: true }}
          InputProps={{
            readOnly: false || !isFormUpdateable(),
            startAdornment: (
              <InputAdornment position="start">
                <MdiIcon path="list" />
              </InputAdornment>
            ),
          }}
          select
        >
          <MenuItem id="User/(esm/_ON5DcW6bEe2wNaja8kBvcQ)/EnumerationTypeMember" value={'YES'}>
            {t('enumerations.YesNoAbstainVoteValue.YES', { defaultValue: 'YES' })}
          </MenuItem>
          <MenuItem id="User/(esm/_ON5Dcm6bEe2wNaja8kBvcQ)/EnumerationTypeMember" value={'NO'}>
            {t('enumerations.YesNoAbstainVoteValue.NO', { defaultValue: 'NO' })}
          </MenuItem>
          <MenuItem id="User/(esm/_ON5Dc26bEe2wNaja8kBvcQ)/EnumerationTypeMember" value={'ABSTAIN'}>
            {t('enumerations.YesNoAbstainVoteValue.ABSTAIN', { defaultValue: 'ABSTAIN' })}
          </MenuItem>
        </TextField>
      </Grid>
    </Grid>
  );
}
