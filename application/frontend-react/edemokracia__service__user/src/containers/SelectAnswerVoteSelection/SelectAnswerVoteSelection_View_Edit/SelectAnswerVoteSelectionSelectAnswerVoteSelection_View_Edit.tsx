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
import {} from '~/components/widgets';
import { useConfirmationBeforeChange } from '~/hooks';
import {
  SelectAnswerVoteSelection,
  SelectAnswerVoteSelectionQueryCustomizer,
  SelectAnswerVoteSelectionStored,
} from '~/services/data-api';

export const SELECT_ANSWER_VOTE_SELECTION_SELECT_ANSWER_VOTE_SELECTION_VIEW_EDIT_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY =
  'SELECT_ANSWER_VOTE_SELECTION_SELECT_ANSWER_VOTE_SELECTION_VIEW_EDIT_CONTAINER_ACTIONS_HOOK';
export type SelectAnswerVoteSelectionSelectAnswerVoteSelection_View_EditContainerHook = (
  data: SelectAnswerVoteSelectionStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof SelectAnswerVoteSelection, value: any) => void,
) => SelectAnswerVoteSelectionSelectAnswerVoteSelection_View_EditActionDefinitions;

export interface SelectAnswerVoteSelectionSelectAnswerVoteSelection_View_EditActionDefinitions {
  getPageTitle?: (data: SelectAnswerVoteSelection) => string;
  isDescriptionRequired?: (
    data: SelectAnswerVoteSelection | SelectAnswerVoteSelectionStored,
    editMode?: boolean,
  ) => boolean;
  isDescriptionDisabled?: (
    data: SelectAnswerVoteSelection | SelectAnswerVoteSelectionStored,
    editMode?: boolean,
    isLoading?: boolean,
  ) => boolean;
  isTitleRequired?: (data: SelectAnswerVoteSelection | SelectAnswerVoteSelectionStored, editMode?: boolean) => boolean;
  isTitleDisabled?: (
    data: SelectAnswerVoteSelection | SelectAnswerVoteSelectionStored,
    editMode?: boolean,
    isLoading?: boolean,
  ) => boolean;
  getMask?: () => string;
}

export interface SelectAnswerVoteSelectionSelectAnswerVoteSelection_View_EditProps {
  refreshCounter: number;
  isLoading: boolean;
  actions: SelectAnswerVoteSelectionSelectAnswerVoteSelection_View_EditActionDefinitions;

  data: SelectAnswerVoteSelectionStored;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof SelectAnswerVoteSelection, value: any) => void;
  editMode: boolean;
  validation: Map<keyof SelectAnswerVoteSelection, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof SelectAnswerVoteSelection, string>>>;
  submit: () => Promise<void>;
  isDraft?: boolean;
}

// XMIID: User/(esm/_XwnW4G6bEe2wNaja8kBvcQ)/TransferObjectViewPageContainer
// Name: SelectAnswerVoteSelection::SelectAnswerVoteSelection_View_Edit
export default function SelectAnswerVoteSelectionSelectAnswerVoteSelection_View_Edit(
  props: SelectAnswerVoteSelectionSelectAnswerVoteSelection_View_EditProps,
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
    useTrackService<SelectAnswerVoteSelectionSelectAnswerVoteSelection_View_EditContainerHook>(
      `(${OBJECTCLASS}=${SELECT_ANSWER_VOTE_SELECTION_SELECT_ANSWER_VOTE_SELECTION_VIEW_EDIT_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY})`,
    );
  const containerActions: SelectAnswerVoteSelectionSelectAnswerVoteSelection_View_EditActionDefinitions =
    customContainerHook?.(data, editMode, storeDiff) || {};
  const actions = useMemo(() => ({ ...containerActions, ...pageActions }), [containerActions, pageActions]);

  return (
    <Grid container>
      <Grid item data-name="SelectAnswerVoteSelection_View_Edit" xs={12} sm={12} md={36.0}>
        <Grid
          id="User/(esm/_XwnW4G6bEe2wNaja8kBvcQ)/TransferObjectViewVisualElement"
          data-name="SelectAnswerVoteSelection_View_Edit"
          container
          direction="column"
          alignItems="stretch"
          justifyContent="flex-start"
          spacing={2}
        >
          <Grid item xs={12} sm={12}>
            <TextField
              required={actions?.isTitleRequired ? actions.isTitleRequired(data, editMode) : true}
              name="title"
              id="User/(esm/_JckucFv5Ee6nEc5rp_Qy4A)/StringTypeTextInput"
              label={
                t('SelectAnswerVoteSelection.SelectAnswerVoteSelection_View_Edit.title', {
                  defaultValue: 'Title',
                }) as string
              }
              value={data.title ?? ''}
              className={clsx({
                'JUDO-viewMode': !editMode,
                'JUDO-required': true,
              })}
              disabled={actions?.isTitleDisabled ? actions.isTitleDisabled(data, editMode, isLoading) : isLoading}
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
              inputProps={{
                maxLength: 255,
              }}
            />
          </Grid>

          <Grid item xs={12} sm={12}>
            <TextField
              required={actions?.isDescriptionRequired ? actions.isDescriptionRequired(data, editMode) : false}
              name="description"
              id="User/(esm/_JckucVv5Ee6nEc5rp_Qy4A)/StringTypeTextArea"
              label={
                t('SelectAnswerVoteSelection.SelectAnswerVoteSelection_View_Edit.description', {
                  defaultValue: 'Description',
                }) as string
              }
              value={data.description ?? ''}
              className={clsx({
                'JUDO-viewMode': !editMode,
                'JUDO-required': false,
              })}
              disabled={
                actions?.isDescriptionDisabled ? actions.isDescriptionDisabled(data, editMode, isLoading) : isLoading
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
