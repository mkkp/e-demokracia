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
import ButtonGroup from '@mui/material/ButtonGroup';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
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
import {} from '~/components/widgets';
import { autoFocusRefDelay } from '~/config';
import { useConfirmationBeforeChange } from '~/hooks';
import { CreateCommentInput, CreateCommentInputQueryCustomizer, CreateCommentInputStored } from '~/services/data-api';

export const CREATE_COMMENT_INPUT_CREATE_COMMENT_INPUT_FORM_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY =
  'CREATE_COMMENT_INPUT_CREATE_COMMENT_INPUT_FORM_CONTAINER_ACTIONS_HOOK';
export type CreateCommentInputCreateCommentInput_FormContainerHook = (
  data: CreateCommentInputStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof CreateCommentInput, value: any) => void,
) => CreateCommentInputCreateCommentInput_FormActionDefinitions;

export interface CreateCommentInputCreateCommentInput_FormActionDefinitions {
  getPageTitle?: (data: CreateCommentInput) => string;
  createCommentForIssueAction?: () => Promise<void>;
  cancelAction?: () => Promise<void>;
  okAction?: () => Promise<void>;
  isCommentRequired?: (data: CreateCommentInput | CreateCommentInputStored, editMode?: boolean) => boolean;
  isCommentDisabled?: (
    data: CreateCommentInput | CreateCommentInputStored,
    editMode?: boolean,
    isLoading?: boolean,
  ) => boolean;
}

export interface CreateCommentInputCreateCommentInput_FormProps {
  refreshCounter: number;
  isLoading: boolean;
  actions: CreateCommentInputCreateCommentInput_FormActionDefinitions;

  data: CreateCommentInputStored;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof CreateCommentInput, value: any) => void;
  editMode: boolean;
  validation: Map<keyof CreateCommentInput, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof CreateCommentInput, string>>>;
  submit: () => Promise<void>;
  isDraft?: boolean;
}

// XMIID: User/(esm/_kYYi4Ie5Ee2kLcMqsIbMgQ)/TransferObjectFormPageContainer
// Name: CreateCommentInput::CreateCommentInput_Form
export default function CreateCommentInputCreateCommentInput_Form(
  props: CreateCommentInputCreateCommentInput_FormProps,
) {
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
  const { service: customContainerHook } = useTrackService<CreateCommentInputCreateCommentInput_FormContainerHook>(
    `(${OBJECTCLASS}=${CREATE_COMMENT_INPUT_CREATE_COMMENT_INPUT_FORM_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const containerActions: CreateCommentInputCreateCommentInput_FormActionDefinitions =
    customContainerHook?.(data, editMode, storeDiff) || {};
  const actions = useMemo(() => ({ ...pageActions, ...containerActions }), [pageActions, containerActions]);
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
      <Grid item data-name="CreateCommentInput_Form" xs={12} sm={12} md={36.0}>
        <Grid
          id="User/(esm/_kYYi4Ie5Ee2kLcMqsIbMgQ)/TransferObjectFormVisualElement"
          data-name="CreateCommentInput_Form"
          container
          direction="column"
          alignItems="stretch"
          justifyContent="flex-start"
          spacing={2}
        >
          <Grid item data-name="comment" xs={12} sm={12}>
            <Grid
              id="User/(esm/_QjzvsIe6Ee2kLcMqsIbMgQ)/GroupVisualElement"
              data-name="comment"
              container
              direction="row"
              alignItems="flex-start"
              justifyContent="flex-start"
              spacing={2}
            >
              <Grid item xs={12} sm={12}>
                <TextField
                  required={actions?.isCommentRequired ? actions.isCommentRequired(data, editMode) : true}
                  name="comment"
                  id="User/(esm/_a5DsQIe6Ee2kLcMqsIbMgQ)/StringTypeTextArea"
                  inputRef={autoFocusInputRef}
                  label={t('CreateCommentInput.CreateCommentInput_Form.comment', { defaultValue: 'Comment' }) as string}
                  value={data.comment ?? ''}
                  className={clsx({
                    'JUDO-viewMode': !editMode,
                    'JUDO-required': true,
                  })}
                  disabled={
                    actions?.isCommentDisabled ? actions.isCommentDisabled(data, editMode, isLoading) : isLoading
                  }
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
                  inputProps={{
                    maxLength: 255,
                  }}
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item data-name="buttons" xs={12} sm={12}>
            <Grid
              id="User/(esm/_4fOhEIfUEe2u0fVmwtP5bA)/GroupVisualElement"
              data-name="buttons"
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
