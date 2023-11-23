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
import { CloseDebateInput, CloseDebateInputQueryCustomizer, CloseDebateInputStored } from '~/services/data-api';

export interface CloseDebateInputCloseDebateInput_View_EditActionDefinitions {}

export interface CloseDebateInputCloseDebateInput_View_EditProps {
  refreshCounter: number;
  actions: CloseDebateInputCloseDebateInput_View_EditActionDefinitions;

  data: CloseDebateInputStored;
  isLoading: boolean;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof CloseDebateInput, value: any) => void;
  editMode: boolean;
  validation: Map<keyof CloseDebateInput, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof CloseDebateInput, string>>>;
}

// XMIID: User/(esm/_NG3PIG6JEe2wNaja8kBvcQ)/TransferObjectViewPageContainer
// Name: CloseDebateInput::CloseDebateInput_View_Edit
export default function CloseDebateInputCloseDebateInput_View_Edit(
  props: CloseDebateInputCloseDebateInput_View_EditProps,
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
          required={true}
          name="voteType"
          id="User/(esm/_ye8zUH5VEe2kLcMqsIbMgQ)/EnumerationTypeCombo"
          autoFocus
          label={t('CloseDebateInput.CloseDebateInput_View_Edit.voteType', { defaultValue: 'VoteType' }) as string}
          value={data.voteType || ''}
          className={clsx({
            'JUDO-viewMode': !editMode,
            'JUDO-required': true,
          })}
          disabled={isLoading}
          error={!!validation.get('voteType')}
          helperText={validation.get('voteType')}
          onChange={(event) => {
            storeDiff('voteType', event.target.value);
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
          <MenuItem id="User/(esm/_6eNosXMMEe2wNaja8kBvcQ)/EnumerationTypeMember" value={'YES_NO'}>
            {t('enumerations.VoteTypeOnCloseDebate.YES_NO', { defaultValue: 'YES_NO' })}
          </MenuItem>
          <MenuItem id="User/(esm/_6eNosnMMEe2wNaja8kBvcQ)/EnumerationTypeMember" value={'YES_NO_ABSTAIN'}>
            {t('enumerations.VoteTypeOnCloseDebate.YES_NO_ABSTAIN', { defaultValue: 'YES_NO_ABSTAIN' })}
          </MenuItem>
          <MenuItem id="User/(esm/_6eNos3MMEe2wNaja8kBvcQ)/EnumerationTypeMember" value={'SELECT_ANSWER'}>
            {t('enumerations.VoteTypeOnCloseDebate.SELECT_ANSWER', { defaultValue: 'SELECT_ANSWER' })}
          </MenuItem>
          <MenuItem id="User/(esm/_6eNotHMMEe2wNaja8kBvcQ)/EnumerationTypeMember" value={'RATE'}>
            {t('enumerations.VoteTypeOnCloseDebate.RATE', { defaultValue: 'RATE' })}
          </MenuItem>
          <MenuItem id="User/(esm/_XjfVwHMNEe2wNaja8kBvcQ)/EnumerationTypeMember" value={'NO_VOTE'}>
            {t('enumerations.VoteTypeOnCloseDebate.NO_VOTE', { defaultValue: 'NO_VOTE' })}
          </MenuItem>
        </TextField>
      </Grid>
    </Grid>
  );
}
