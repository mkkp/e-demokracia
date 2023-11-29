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
import {
  SelectAnswerVoteSelection,
  SelectAnswerVoteSelectionQueryCustomizer,
  SelectAnswerVoteSelectionStored,
} from '~/services/data-api';

export interface SelectAnswerVoteSelectionSelectAnswerVoteSelection_FormActionDefinitions {}

export interface SelectAnswerVoteSelectionSelectAnswerVoteSelection_FormProps {
  refreshCounter: number;
  actions: SelectAnswerVoteSelectionSelectAnswerVoteSelection_FormActionDefinitions;

  data: SelectAnswerVoteSelectionStored;
  isLoading: boolean;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof SelectAnswerVoteSelection, value: any) => void;
  editMode: boolean;
  validation: Map<keyof SelectAnswerVoteSelection, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof SelectAnswerVoteSelection, string>>>;
  submit: () => Promise<void>;
}

// XMIID: User/(esm/_XwtdgG6bEe2wNaja8kBvcQ)/TransferObjectFormPageContainer
// Name: SelectAnswerVoteSelection::SelectAnswerVoteSelection_Form
export default function SelectAnswerVoteSelectionSelectAnswerVoteSelection_Form(
  props: SelectAnswerVoteSelectionSelectAnswerVoteSelection_FormProps,
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
          id="User/(esm/_XwtdgG6bEe2wNaja8kBvcQ)/TransferObjectFormVisualElement"
          container
          direction="column"
          alignItems="stretch"
          justifyContent="flex-start"
          spacing={2}
        >
          <Grid item xs={12} sm={12}>
            <TextField
              required={true}
              name="title"
              id="User/(esm/_OfPXEFv5Ee6nEc5rp_Qy4A)/StringTypeTextInput"
              autoFocus
              label={
                t('SelectAnswerVoteSelection.SelectAnswerVoteSelection_Form.title', { defaultValue: 'Title' }) as string
              }
              value={data.title ?? ''}
              className={clsx({
                'JUDO-viewMode': !editMode,
                'JUDO-required': true,
              })}
              disabled={isLoading}
              error={!!validation.get('title')}
              helperText={validation.get('title')}
              onChange={(event) => {
                const realValue = event.target.value?.length === 0 ? null : event.target.value;
                storeDiff('title', realValue);
              }}
              InputLabelProps={{ shrink: true }}
              InputProps={{
                readOnly: false || !isFormUpdateable(),
                startAdornment: (
                  <InputAdornment position="start">
                    <MdiIcon path="format-size" />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          <Grid item xs={12} sm={12}>
            <TextField
              required={false}
              name="description"
              id="User/(esm/_OfPXEVv5Ee6nEc5rp_Qy4A)/StringTypeTextArea"
              label={
                t('SelectAnswerVoteSelection.SelectAnswerVoteSelection_Form.description', {
                  defaultValue: 'Description',
                }) as string
              }
              value={data.description ?? ''}
              className={clsx({
                'JUDO-viewMode': !editMode,
                'JUDO-required': false,
              })}
              disabled={isLoading}
              multiline
              minRows={4.0}
              error={!!validation.get('description')}
              helperText={validation.get('description')}
              onChange={(event) => {
                const realValue = event.target.value?.length === 0 ? null : event.target.value;
                storeDiff('description', realValue);
              }}
              InputLabelProps={{ shrink: true }}
              InputProps={{
                readOnly: false || !isFormUpdateable(),
                startAdornment: (
                  <InputAdornment position="start">
                    <MdiIcon path="format-size" />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
