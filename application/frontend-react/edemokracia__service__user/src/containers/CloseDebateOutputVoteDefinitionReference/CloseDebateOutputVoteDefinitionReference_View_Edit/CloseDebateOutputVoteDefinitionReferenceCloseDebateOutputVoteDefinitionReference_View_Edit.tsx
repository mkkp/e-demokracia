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
import { OBJECTCLASS } from '@pandino/pandino-api';
import { useTrackService } from '@pandino/react-hooks';
import { clsx } from 'clsx';
import type { Dispatch, FC, SetStateAction } from 'react';
import { forwardRef, useCallback, useEffect, useImperativeHandle, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { DropdownButton, MdiIcon, useJudoNavigation } from '~/components';
import { useConfirmDialog } from '~/components/dialog';
import { useL10N } from '~/l10n/l10n-context';
import type { JudoIdentifiable } from '~/services/data-api/common';
import { isErrorOperationFault, useErrorHandler } from '~/utilities';

import {} from '@mui/x-date-pickers';
import type {} from '@mui/x-date-pickers';
import {} from '~/components/widgets';
import { useConfirmationBeforeChange } from '~/hooks';
import {
  CloseDebateOutputVoteDefinitionReference,
  CloseDebateOutputVoteDefinitionReferenceQueryCustomizer,
  CloseDebateOutputVoteDefinitionReferenceStored,
} from '~/services/data-api';

export const CLOSE_DEBATE_OUTPUT_VOTE_DEFINITION_REFERENCE_CLOSE_DEBATE_OUTPUT_VOTE_DEFINITION_REFERENCE_VIEW_EDIT_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY =
  'CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_View_EditContainerHook';
export type CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_View_EditContainerHook = (
  data: CloseDebateOutputVoteDefinitionReferenceStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof CloseDebateOutputVoteDefinitionReference, value: any) => void,
) => CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_View_EditActionDefinitions;

export interface CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_View_EditActionDefinitions {
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

export interface CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_View_EditProps {
  refreshCounter: number;
  actions: CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_View_EditActionDefinitions;

  data: CloseDebateOutputVoteDefinitionReferenceStored;
  isLoading: boolean;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof CloseDebateOutputVoteDefinitionReference, value: any) => void;
  editMode: boolean;
  validation: Map<keyof CloseDebateOutputVoteDefinitionReference, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof CloseDebateOutputVoteDefinitionReference, string>>>;
  submit: () => Promise<void>;
}

// XMIID: User/(esm/_YoAHwVu1Ee6Lb6PYNSnQSA)/TransferObjectViewPageContainer
// Name: CloseDebateOutputVoteDefinitionReference::CloseDebateOutputVoteDefinitionReference_View_Edit
export default function CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_View_Edit(
  props: CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_View_EditProps,
) {
  // Container props
  const {
    refreshCounter,
    actions: pageActions,
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
    useTrackService<CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_View_EditContainerHook>(
      `(${OBJECTCLASS}=${CLOSE_DEBATE_OUTPUT_VOTE_DEFINITION_REFERENCE_CLOSE_DEBATE_OUTPUT_VOTE_DEFINITION_REFERENCE_VIEW_EDIT_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY})`,
    );
  const containerActions: CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_View_EditActionDefinitions =
    customContainerHook?.(data, editMode, storeDiff) || {};
  const actions = useMemo(() => ({ ...containerActions, ...pageActions }), [containerActions, pageActions]);

  return (
    <Grid container>
      <Grid item xs={12} sm={12}>
        <Grid
          id="User/(esm/_YoAHwVu1Ee6Lb6PYNSnQSA)/TransferObjectViewVisualElement"
          container
          direction="column"
          alignItems="stretch"
          justifyContent="flex-start"
          spacing={2}
        >
          <Grid item xs={12} sm={12}>
            <TextField
              required={actions?.isContextRequired ? actions.isContextRequired(data, editMode) : false}
              name="context"
              id="User/(esm/_f6ew0Fv3Ee6nEc5rp_Qy4A)/StringTypeTextInput"
              autoFocus
              label={
                t(
                  'CloseDebateOutputVoteDefinitionReference.CloseDebateOutputVoteDefinitionReference_View_Edit.context',
                  { defaultValue: 'Context' },
                ) as string
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
                maxlength: 255,
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
