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
  CloseDebateOutputVoteDefinitionReference,
  CloseDebateOutputVoteDefinitionReferenceQueryCustomizer,
  CloseDebateOutputVoteDefinitionReferenceStored,
} from '~/services/data-api';

export const CLOSE_DEBATE_OUTPUT_VOTE_DEFINITION_REFERENCE_CLOSE_DEBATE_OUTPUT_VOTE_DEFINITION_REFERENCE_FORM_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY =
  'CLOSE_DEBATE_OUTPUT_VOTE_DEFINITION_REFERENCE_CLOSE_DEBATE_OUTPUT_VOTE_DEFINITION_REFERENCE_FORM_CONTAINER_ACTIONS_HOOK';
export type CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_FormContainerHook = (
  data: CloseDebateOutputVoteDefinitionReferenceStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof CloseDebateOutputVoteDefinitionReference, value: any) => void,
) => CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_FormActionDefinitions;

export interface CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_FormActionDefinitions {
  getPageTitle?: (data: CloseDebateOutputVoteDefinitionReference) => string;
  isContextRequired?: (
    data: CloseDebateOutputVoteDefinitionReference | CloseDebateOutputVoteDefinitionReferenceStored,
    editMode?: boolean,
  ) => boolean;
  isContextDisabled?: (
    data: CloseDebateOutputVoteDefinitionReference | CloseDebateOutputVoteDefinitionReferenceStored,
    editMode?: boolean,
    isLoading?: boolean,
  ) => boolean;
}

export interface CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_FormProps {
  refreshCounter: number;
  isLoading: boolean;
  actions: CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_FormActionDefinitions;

  data: CloseDebateOutputVoteDefinitionReferenceStored;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof CloseDebateOutputVoteDefinitionReference, value: any) => void;
  editMode: boolean;
  validation: Map<keyof CloseDebateOutputVoteDefinitionReference, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof CloseDebateOutputVoteDefinitionReference, string>>>;
  submit: () => Promise<void>;
  isDraft?: boolean;
}

// XMIID: User/(esm/_YoAHuVu1Ee6Lb6PYNSnQSA)/TransferObjectFormPageContainer
// Name: CloseDebateOutputVoteDefinitionReference::CloseDebateOutputVoteDefinitionReference_Form
export default function CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_Form(
  props: CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_FormProps,
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
  const { service: customContainerHook } =
    useTrackService<CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_FormContainerHook>(
      `(${OBJECTCLASS}=${CLOSE_DEBATE_OUTPUT_VOTE_DEFINITION_REFERENCE_CLOSE_DEBATE_OUTPUT_VOTE_DEFINITION_REFERENCE_FORM_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY})`,
    );
  const containerActions: CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_FormActionDefinitions =
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
      <Grid item data-name="CloseDebateOutputVoteDefinitionReference_Form" xs={12} sm={12} md={36.0}>
        <Grid
          id="User/(esm/_YoAHuVu1Ee6Lb6PYNSnQSA)/TransferObjectFormVisualElement"
          data-name="CloseDebateOutputVoteDefinitionReference_Form"
          container
          direction="column"
          alignItems="stretch"
          justifyContent="flex-start"
          spacing={2}
        >
          <Grid item data-name="debate::LabelWrapper" xs={12} sm={12}>
            <Card
              id="(User/(esm/_YoAHulu1Ee6Lb6PYNSnQSA)/WrapAndLabelVisualElement)/LabelWrapper"
              data-name="debate::LabelWrapper"
            >
              <CardContent>
                <Grid container direction="row" alignItems="stretch" justifyContent="flex-start" spacing={2}>
                  <Grid item xs={12} sm={12}>
                    <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                      <MdiIcon path="wechat" sx={{ marginRight: 1 }} />
                      <Typography
                        id="User/(esm/_YoAHulu1Ee6Lb6PYNSnQSA)/WrapAndLabelVisualElement)/Label"
                        variant="h5"
                        component="h1"
                      >
                        {t(
                          'CloseDebateOutputVoteDefinitionReference.CloseDebateOutputVoteDefinitionReference_Form.debate.Label',
                          { defaultValue: 'Close debate' },
                        )}
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid item data-name="debate" xs={12} sm={12}>
                    <Grid
                      id="User/(esm/_YoAHulu1Ee6Lb6PYNSnQSA)/GroupVisualElement"
                      data-name="debate"
                      container
                      direction="row"
                      alignItems="stretch"
                      justifyContent="flex-start"
                      spacing={2}
                    ></Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={12} md={4.0}>
            <TextField
              required={actions?.isContextRequired ? actions.isContextRequired(data, editMode) : false}
              name="context"
              id="User/(esm/_f6jpUFv3Ee6nEc5rp_Qy4A)/StringTypeTextInput"
              inputRef={autoFocusInputRef}
              label={
                t('CloseDebateOutputVoteDefinitionReference.CloseDebateOutputVoteDefinitionReference_Form.context', {
                  defaultValue: 'Context',
                }) as string
              }
              value={data.context ?? ''}
              className={clsx({
                'JUDO-viewMode': !editMode,
                'JUDO-required': false,
              })}
              disabled={actions?.isContextDisabled ? actions.isContextDisabled(data, editMode, isLoading) : isLoading}
              error={!!validation.get('context')}
              helperText={validation.get('context')}
              onChange={(event) => {
                const realValue = event.target.value?.length === 0 ? null : event.target.value;
                storeDiff('context', realValue);
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
              inputProps={{
                maxLength: 255,
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
