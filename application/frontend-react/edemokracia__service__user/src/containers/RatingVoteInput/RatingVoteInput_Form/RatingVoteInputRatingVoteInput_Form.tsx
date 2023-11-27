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
import { LoadingButton } from '@mui/lab';
import type { JudoIdentifiable } from '@judo/data-api-common';
import { clsx } from 'clsx';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { useL10N } from '~/l10n/l10n-context';
import { MdiIcon, DropdownButton, useJudoNavigation } from '~/components';
import { isErrorOperationFault, useErrorHandler } from '~/utilities';

import {} from '@mui/x-date-pickers';
import type {} from '@mui/x-date-pickers';
import { NumericInput } from '~/components/widgets';
import { useConfirmationBeforeChange } from '~/hooks';
import { RatingVoteInput, RatingVoteInputQueryCustomizer, RatingVoteInputStored } from '~/services/data-api';

export interface RatingVoteInputRatingVoteInput_FormActionDefinitions {}

export interface RatingVoteInputRatingVoteInput_FormProps {
  refreshCounter: number;
  actions: RatingVoteInputRatingVoteInput_FormActionDefinitions;

  data: RatingVoteInputStored;
  isLoading: boolean;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof RatingVoteInput, value: any) => void;
  editMode: boolean;
  validation: Map<keyof RatingVoteInput, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof RatingVoteInput, string>>>;
}

// XMIID: User/(esm/_LEKjo35YEe2kLcMqsIbMgQ)/TransferObjectFormPageContainer
// Name: RatingVoteInput::RatingVoteInput_Form
export default function RatingVoteInputRatingVoteInput_Form(props: RatingVoteInputRatingVoteInput_FormProps) {
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
        <NumericInput
          required={false}
          name="value"
          id="User/(esm/_UNECcOSNEe20cv3f2msZXg)/NumericTypeVisualInput"
          autoFocus
          label={t('RatingVoteInput.RatingVoteInput_Form.value', { defaultValue: 'Vote rate' }) as string}
          customInput={TextField}
          value={data.value ?? ''}
          className={clsx({
            'JUDO-viewMode': !editMode,
            'JUDO-required': false,
          })}
          disabled={isLoading}
          error={!!validation.get('value')}
          helperText={validation.get('value')}
          onValueChange={(values, sourceInfo) => {
            const newValue = values.floatValue === undefined ? null : values.floatValue;
            if (data.value !== newValue) {
              storeDiff('value', newValue);
            }
          }}
          InputLabelProps={{ shrink: true }}
          InputProps={{
            readOnly: false || !isFormUpdateable(),
            startAdornment: (
              <InputAdornment position="start">
                <MdiIcon path="calculator" />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
    </Grid>
  );
}
