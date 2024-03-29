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
import MenuItem from '@mui/material/MenuItem';
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
import { useConfirmationBeforeChange } from '~/hooks';
import { CloseDebateInput, CloseDebateInputQueryCustomizer, CloseDebateInputStored } from '~/services/data-api';

export const CLOSE_DEBATE_INPUT_CLOSE_DEBATE_INPUT_VIEW_EDIT_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY =
  'CLOSE_DEBATE_INPUT_CLOSE_DEBATE_INPUT_VIEW_EDIT_CONTAINER_ACTIONS_HOOK';
export type CloseDebateInputCloseDebateInput_View_EditContainerHook = (
  data: CloseDebateInputStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof CloseDebateInput, value: any) => void,
) => CloseDebateInputCloseDebateInput_View_EditActionDefinitions;

export interface CloseDebateInputCloseDebateInput_View_EditActionDefinitions {
  getPageTitle?: (data: CloseDebateInput) => string;
  isVoteTypeRequired?: (data: CloseDebateInput | CloseDebateInputStored, editMode?: boolean) => boolean;
  isVoteTypeDisabled?: (
    data: CloseDebateInput | CloseDebateInputStored,
    editMode?: boolean,
    isLoading?: boolean,
  ) => boolean;
  getMask?: () => string;
}

export interface CloseDebateInputCloseDebateInput_View_EditProps {
  refreshCounter: number;
  isLoading: boolean;
  actions: CloseDebateInputCloseDebateInput_View_EditActionDefinitions;

  data: CloseDebateInputStored;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof CloseDebateInput, value: any) => void;
  editMode: boolean;
  validation: Map<keyof CloseDebateInput, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof CloseDebateInput, string>>>;
  submit: () => Promise<void>;
  isDraft?: boolean;
}

// XMIID: User/(esm/_NG3PIG6JEe2wNaja8kBvcQ)/TransferObjectViewPageContainer
// Name: CloseDebateInput::CloseDebateInput_View_Edit
export default function CloseDebateInputCloseDebateInput_View_Edit(
  props: CloseDebateInputCloseDebateInput_View_EditProps,
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
  const { service: customContainerHook } = useTrackService<CloseDebateInputCloseDebateInput_View_EditContainerHook>(
    `(${OBJECTCLASS}=${CLOSE_DEBATE_INPUT_CLOSE_DEBATE_INPUT_VIEW_EDIT_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const containerActions: CloseDebateInputCloseDebateInput_View_EditActionDefinitions =
    customContainerHook?.(data, editMode, storeDiff) || {};
  const actions = useMemo(() => ({ ...pageActions, ...containerActions }), [pageActions, containerActions]);

  return (
    <Grid container>
      <Grid item data-name="CloseDebateInput_View_Edit" xs={12} sm={12} md={36.0}>
        <Grid
          id="User/(esm/_NG3PIG6JEe2wNaja8kBvcQ)/TransferObjectViewVisualElement"
          data-name="CloseDebateInput_View_Edit"
          container
          direction="column"
          alignItems="stretch"
          justifyContent="flex-start"
          spacing={2}
        >
          <Grid item xs={12} sm={12} md={4.0}>
            <TextField
              required={actions?.isVoteTypeRequired ? actions.isVoteTypeRequired(data, editMode) : true}
              name="voteType"
              id="User/(esm/_ye8zUH5VEe2kLcMqsIbMgQ)/EnumerationTypeCombo"
              label={t('CloseDebateInput.CloseDebateInput_View_Edit.voteType', { defaultValue: 'VoteType' }) as string}
              value={data.voteType || ''}
              className={clsx({
                'JUDO-viewMode': !editMode,
                'JUDO-required': true,
              })}
              disabled={actions?.isVoteTypeDisabled ? actions.isVoteTypeDisabled(data, editMode, isLoading) : isLoading}
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
      </Grid>
    </Grid>
  );
}
