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
import {} from '~/components/widgets';
import { useConfirmationBeforeChange } from '~/hooks';
import { CreateCommentInput, CreateCommentInputQueryCustomizer, CreateCommentInputStored } from '~/services/data-api';

export interface CreateCommentInputCreateCommentInput_FormActionDefinitions {
  cancelAction?: () => Promise<void>;
  okAction?: () => Promise<void>;
}

export interface CreateCommentInputCreateCommentInput_FormProps {
  refreshCounter: number;
  actions: CreateCommentInputCreateCommentInput_FormActionDefinitions;

  data: CreateCommentInputStored;
  isLoading: boolean;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof CreateCommentInput, value: any) => void;
  editMode: boolean;
  validation: Map<keyof CreateCommentInput, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof CreateCommentInput, string>>>;
  submit: () => Promise<void>;
}

// XMIID: User/(esm/_kYYi4Ie5Ee2kLcMqsIbMgQ)/TransferObjectFormPageContainer
// Name: CreateCommentInput::CreateCommentInput_Form
export default function CreateCommentInputCreateCommentInput_Form(
  props: CreateCommentInputCreateCommentInput_FormProps,
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
    submit,
  } = props;
  const { locale: l10nLocale } = useL10N();

  useConfirmationBeforeChange(
    editMode,
    t('judo.form.navigation.confirmation', {
      defaultValue: 'You have potential unsaved changes in your form, are you sure you would like to navigate away?',
    }),
  );

  return (
    <Grid container>
      <Grid item xs={12} sm={12}>
        <Grid
          id="User/(esm/_kYYi4Ie5Ee2kLcMqsIbMgQ)/TransferObjectFormVisualElement"
          container
          direction="column"
          alignItems="stretch"
          justifyContent="flex-start"
          spacing={2}
        >
          <Grid item xs={12} sm={12}>
            <Grid
              id="User/(esm/_QjzvsIe6Ee2kLcMqsIbMgQ)/GroupVisualElement"
              container
              direction="row"
              alignItems="flex-start"
              justifyContent="flex-start"
              spacing={2}
            >
              <Grid item xs={12} sm={12}>
                <TextField
                  required={true}
                  name="comment"
                  id="User/(esm/_a5DsQIe6Ee2kLcMqsIbMgQ)/StringTypeTextArea"
                  autoFocus
                  label={t('CreateCommentInput.CreateCommentInput_Form.comment', { defaultValue: 'Comment' }) as string}
                  value={data.comment ?? ''}
                  className={clsx({
                    'JUDO-viewMode': !editMode,
                    'JUDO-required': true,
                  })}
                  disabled={isLoading}
                  multiline
                  minRows={4.0}
                  error={!!validation.get('comment')}
                  helperText={validation.get('comment')}
                  onChange={(event) => {
                    const realValue = event.target.value?.length === 0 ? null : event.target.value;
                    storeDiff('comment', realValue);
                  }}
                  InputLabelProps={{ shrink: true }}
                  InputProps={{
                    readOnly: false || !isFormUpdateable(),
                    startAdornment: (
                      <InputAdornment position="start">
                        <MdiIcon path="text_fields" />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={12}>
            <Grid
              id="User/(esm/_4fOhEIfUEe2u0fVmwtP5bA)/GroupVisualElement"
              container
              direction="row"
              alignItems="flex-start"
              justifyContent="flex-start"
              spacing={2}
            >
              <Grid item xs={12} sm={12} md={4.0}></Grid>

              <Grid item xs={12} sm={12} md={4.0}></Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
