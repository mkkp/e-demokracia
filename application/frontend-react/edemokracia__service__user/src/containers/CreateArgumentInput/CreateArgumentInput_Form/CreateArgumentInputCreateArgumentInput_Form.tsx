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
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
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
import { isErrorOperationFault, useErrorHandler } from '~/utilities';

import {} from '@mui/x-date-pickers';
import type {} from '@mui/x-date-pickers';
import {} from '~/components/widgets';
import { autoFocusRefDelay } from '~/config';
import { useConfirmationBeforeChange } from '~/hooks';
import {
  CreateArgumentInput,
  CreateArgumentInputQueryCustomizer,
  CreateArgumentInputStored,
} from '~/services/data-api';

export const CREATE_ARGUMENT_INPUT_CREATE_ARGUMENT_INPUT_FORM_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY =
  'CREATE_ARGUMENT_INPUT_CREATE_ARGUMENT_INPUT_FORM_CONTAINER_ACTIONS_HOOK';
export type CreateArgumentInputCreateArgumentInput_FormContainerHook = (
  data: CreateArgumentInputStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof CreateArgumentInput, value: any) => void,
) => CreateArgumentInputCreateArgumentInput_FormActionDefinitions;

export interface CreateArgumentInputCreateArgumentInput_FormActionDefinitions {
  getPageTitle?: (data: CreateArgumentInput) => string;
  backAction?: () => Promise<void>;
  okAction?: () => Promise<void>;
  isDescriptionRequired?: (data: CreateArgumentInput | CreateArgumentInputStored, editMode?: boolean) => boolean;
  isDescriptionDisabled?: (
    data: CreateArgumentInput | CreateArgumentInputStored,
    editMode?: boolean,
    isLoading?: boolean,
  ) => boolean;
  isTitleRequired?: (data: CreateArgumentInput | CreateArgumentInputStored, editMode?: boolean) => boolean;
  isTitleDisabled?: (
    data: CreateArgumentInput | CreateArgumentInputStored,
    editMode?: boolean,
    isLoading?: boolean,
  ) => boolean;
}

export interface CreateArgumentInputCreateArgumentInput_FormProps {
  refreshCounter: number;
  isLoading: boolean;
  actions: CreateArgumentInputCreateArgumentInput_FormActionDefinitions;

  data: CreateArgumentInputStored;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof CreateArgumentInput, value: any) => void;
  editMode: boolean;
  validation: Map<keyof CreateArgumentInput, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof CreateArgumentInput, string>>>;
  submit: () => Promise<void>;
  isDraft?: boolean;
}

// XMIID: User/(esm/_GavqUHW5Ee2LTNnGda5kaw)/TransferObjectFormPageContainer
// Name: CreateArgumentInput::CreateArgumentInput_Form
export default function CreateArgumentInputCreateArgumentInput_Form(
  props: CreateArgumentInputCreateArgumentInput_FormProps,
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
  const { service: customContainerHook } = useTrackService<CreateArgumentInputCreateArgumentInput_FormContainerHook>(
    `(${OBJECTCLASS}=${CREATE_ARGUMENT_INPUT_CREATE_ARGUMENT_INPUT_FORM_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const containerActions: CreateArgumentInputCreateArgumentInput_FormActionDefinitions =
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
      <Grid item data-name="CreateArgumentInput_Form" xs={12} sm={12} md={36.0}>
        <Grid
          id="User/(esm/_GavqUHW5Ee2LTNnGda5kaw)/TransferObjectFormVisualElement"
          data-name="CreateArgumentInput_Form"
          container
          direction="column"
          alignItems="stretch"
          justifyContent="flex-start"
          spacing={2}
        >
          <Grid item data-name="group::LabelWrapper" xs={12} sm={12}>
            <Card
              id="(User/(esm/_h6ID0IfREe2u0fVmwtP5bA)/WrapAndLabelVisualElement)/LabelWrapper"
              data-name="group::LabelWrapper"
            >
              <CardContent>
                <Grid container direction="row" alignItems="stretch" justifyContent="flex-start" spacing={2}>
                  <Grid item xs={12} sm={12}>
                    <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                      <MdiIcon path="account-voice" sx={{ marginRight: 1 }} />
                      <Typography
                        id="User/(esm/_h6ID0IfREe2u0fVmwtP5bA)/WrapAndLabelVisualElement)/Label"
                        variant="h5"
                        component="h1"
                      >
                        {t('CreateArgumentInput.CreateArgumentInput_Form.group.Label', {
                          defaultValue: 'Add argument',
                        })}
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid item data-name="group" xs={12} sm={12}>
                    <Grid
                      id="User/(esm/_h6ID0IfREe2u0fVmwtP5bA)/GroupVisualElement"
                      data-name="group"
                      container
                      direction="row"
                      alignItems="stretch"
                      justifyContent="flex-start"
                      spacing={2}
                    >
                      <Grid item xs={12} sm={12} md={8.0}>
                        <TextField
                          required={actions?.isTitleRequired ? actions.isTitleRequired(data, editMode) : true}
                          name="title"
                          id="User/(esm/_3m5J4H4bEe2j59SYy0JH0Q)/StringTypeTextInput"
                          inputRef={autoFocusInputRef}
                          label={
                            t('CreateArgumentInput.CreateArgumentInput_Form.title', { defaultValue: 'Title' }) as string
                          }
                          value={data.title ?? ''}
                          className={clsx({
                            'JUDO-viewMode': !editMode,
                            'JUDO-required': true,
                          })}
                          disabled={
                            actions?.isTitleDisabled ? actions.isTitleDisabled(data, editMode, isLoading) : isLoading
                          }
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
                                <MdiIcon path="text_fields" />
                              </InputAdornment>
                            ),
                          }}
                          inputProps={{
                            maxLength: 255,
                          }}
                        />
                      </Grid>

                      <Grid item xs={12} sm={12}>
                        <TextField
                          required={
                            actions?.isDescriptionRequired ? actions.isDescriptionRequired(data, editMode) : true
                          }
                          name="description"
                          id="User/(esm/_3nC64H4bEe2j59SYy0JH0Q)/StringTypeTextArea"
                          label={
                            t('CreateArgumentInput.CreateArgumentInput_Form.description', {
                              defaultValue: 'Description',
                            }) as string
                          }
                          value={data.description ?? ''}
                          className={clsx({
                            'JUDO-viewMode': !editMode,
                            'JUDO-required': true,
                          })}
                          disabled={
                            actions?.isDescriptionDisabled
                              ? actions.isDescriptionDisabled(data, editMode, isLoading)
                              : isLoading
                          }
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
                                <MdiIcon path="text_fields" />
                              </InputAdornment>
                            ),
                          }}
                          inputProps={{
                            maxLength: 16384,
                          }}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          <Grid item data-name="buttons" xs={12} sm={12}>
            <Grid
              id="User/(esm/_KipKkIfSEe2u0fVmwtP5bA)/GroupVisualElement"
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
