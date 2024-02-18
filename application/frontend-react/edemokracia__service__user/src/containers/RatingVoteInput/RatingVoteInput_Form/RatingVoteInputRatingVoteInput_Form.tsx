//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #application.pageContainers
// Path expression: 'src/containers/'+#containerPath(#self)+'/'+#containerComponentName(#self)+'.tsx'
// Template name: actor/src/containers/container.tsx
// Template file: actor/src/containers/container.tsx.hbs

import { LoadingButton } from '@mui/lab';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { OBJECTCLASS } from '@pandino/pandino-api';
import { useTrackService } from '@pandino/react-hooks';
import { clsx } from 'clsx';
import type { Dispatch, FC, SetStateAction } from 'react';
import { forwardRef, useCallback, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { DropdownButton, MdiIcon, useJudoNavigation } from '~/components';
import { useConfirmDialog } from '~/components/dialog';
import { useL10N } from '~/l10n/l10n-context';
import type { JudoIdentifiable } from '~/services/data-api/common';
import type { JudoRestResponse } from '~/services/data-api/rest';
import { isErrorOperationFault, useErrorHandler } from '~/utilities';

import {} from '@mui/x-date-pickers';
import type {} from '@mui/x-date-pickers';
import { NumericInput } from '~/components/widgets';
import { autoFocusRefDelay } from '~/config';
import { useConfirmationBeforeChange } from '~/hooks';
import { RatingVoteInput, RatingVoteInputQueryCustomizer, RatingVoteInputStored } from '~/services/data-api';

export const RATING_VOTE_INPUT_RATING_VOTE_INPUT_FORM_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY =
  'RATING_VOTE_INPUT_RATING_VOTE_INPUT_FORM_CONTAINER_ACTIONS_HOOK';
export type RatingVoteInputRatingVoteInput_FormContainerHook = (
  data: RatingVoteInputStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof RatingVoteInput, value: any) => void,
) => RatingVoteInputRatingVoteInput_FormActionDefinitions;

export interface RatingVoteInputRatingVoteInput_FormActionDefinitions {
  getPageTitle?: (data: RatingVoteInput) => string;
  voteForRatingVoteDefinitionAction?: () => Promise<void>;
  voteRatingForVoteDefinitionAction?: () => Promise<void>;
  isValueRequired?: (data: RatingVoteInput | RatingVoteInputStored, editMode?: boolean) => boolean;
  isValueDisabled?: (data: RatingVoteInput | RatingVoteInputStored, editMode?: boolean, isLoading?: boolean) => boolean;
}

export interface RatingVoteInputRatingVoteInput_FormProps {
  refreshCounter: number;
  isLoading: boolean;
  actions: RatingVoteInputRatingVoteInput_FormActionDefinitions;

  data: RatingVoteInputStored;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof RatingVoteInput, value: any) => void;
  editMode: boolean;
  validation: Map<keyof RatingVoteInput, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof RatingVoteInput, string>>>;
  submit: () => Promise<void>;
  isDraft?: boolean;
}

// XMIID: User/(esm/_LEKjo35YEe2kLcMqsIbMgQ)/TransferObjectFormPageContainer
// Name: RatingVoteInput::RatingVoteInput_Form
export default function RatingVoteInputRatingVoteInput_Form(props: RatingVoteInputRatingVoteInput_FormProps) {
  // Container props
  const {
    refreshCounter,
    isLoading,
    isDraft,
    actions: pageActions,
    data,
    isFormUpdateable,
    isFormDeleteable,
    storeDiff,
    editMode,
    validation,
    setValidation,
    submit,
  } = props;

  // Container hooks
  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { locale: l10nLocale } = useL10N();
  const { openConfirmDialog } = useConfirmDialog();

  useConfirmationBeforeChange(
    editMode,
    t('judo.form.navigation.confirmation', {
      defaultValue: 'You have potential unsaved changes in your form, are you sure you would like to navigate away?',
    }),
  );
  // Pandino Container Action overrides
  const { service: customContainerHook } = useTrackService<RatingVoteInputRatingVoteInput_FormContainerHook>(
    `(${OBJECTCLASS}=${RATING_VOTE_INPUT_RATING_VOTE_INPUT_FORM_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const containerActions: RatingVoteInputRatingVoteInput_FormActionDefinitions =
    customContainerHook?.(data, editMode, storeDiff) || {};
  const actions = useMemo(() => ({ ...containerActions, ...pageActions }), [containerActions, pageActions]);
  const autoFocusInputRef = useRef<any>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (typeof autoFocusInputRef?.current?.focus === 'function') {
        autoFocusInputRef.current.focus();
      }
    }, autoFocusRefDelay);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Grid container>
      <Grid item data-name="RatingVoteInput_Form" xs={12} sm={12} md={36.0}>
        <Grid
          id="User/(esm/_LEKjo35YEe2kLcMqsIbMgQ)/TransferObjectFormVisualElement"
          data-name="RatingVoteInput_Form"
          container
          direction="column"
          alignItems="stretch"
          justifyContent="flex-start"
          spacing={2}
        >
          <Grid item xs={12} sm={12} md={4.0}>
            <NumericInput
              required={actions?.isValueRequired ? actions.isValueRequired(data, editMode) : false}
              name="value"
              id="User/(esm/_UNECcOSNEe20cv3f2msZXg)/NumericTypeVisualInput"
              inputRef={autoFocusInputRef}
              label={t('RatingVoteInput.RatingVoteInput_Form.value', { defaultValue: 'Vote rate' }) as string}
              customInput={TextField}
              value={data.value ?? ''}
              formatValue={true}
              className={clsx({
                'JUDO-viewMode': !editMode,
                'JUDO-required': false,
              })}
              disabled={actions?.isValueDisabled ? actions.isValueDisabled(data, editMode, isLoading) : isLoading}
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
      </Grid>
    </Grid>
  );
}
