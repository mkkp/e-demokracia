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
import { useConfirmationBeforeChange } from '~/hooks';
import {
  ServiceSelectAnswerVoteSelection,
  ServiceSelectAnswerVoteSelectionQueryCustomizer,
  ServiceSelectAnswerVoteSelectionStored,
} from '~/services/data-api';

export const SERVICE_SELECT_ANSWER_VOTE_SELECTION_SELECT_ANSWER_VOTE_SELECTION_VIEW_EDIT_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_SELECT_ANSWER_VOTE_SELECTION_SELECT_ANSWER_VOTE_SELECTION_VIEW_EDIT_CONTAINER_ACTIONS_HOOK';
export type ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_View_EditContainerHook = (
  data: ServiceSelectAnswerVoteSelectionStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof ServiceSelectAnswerVoteSelection, value: any) => void,
) => ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_View_EditActionDefinitions;

export interface ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_View_EditActionDefinitions {
  getPageTitle?: (data: ServiceSelectAnswerVoteSelection) => string;
  isDescriptionRequired?: (
    data: ServiceSelectAnswerVoteSelection | ServiceSelectAnswerVoteSelectionStored,
    editMode?: boolean,
  ) => boolean;
  isDescriptionDisabled?: (
    data: ServiceSelectAnswerVoteSelection | ServiceSelectAnswerVoteSelectionStored,
    editMode?: boolean,
    isLoading?: boolean,
  ) => boolean;
  isTitleRequired?: (
    data: ServiceSelectAnswerVoteSelection | ServiceSelectAnswerVoteSelectionStored,
    editMode?: boolean,
  ) => boolean;
  isTitleDisabled?: (
    data: ServiceSelectAnswerVoteSelection | ServiceSelectAnswerVoteSelectionStored,
    editMode?: boolean,
    isLoading?: boolean,
  ) => boolean;
  getMask?: () => string;
}

export interface ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_View_EditProps {
  refreshCounter: number;
  isLoading: boolean;
  actions: ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_View_EditActionDefinitions;

  data: ServiceSelectAnswerVoteSelectionStored;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof ServiceSelectAnswerVoteSelection, value: any) => void;
  editMode: boolean;
  validation: Map<keyof ServiceSelectAnswerVoteSelection, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof ServiceSelectAnswerVoteSelection, string>>>;
  submit: () => Promise<void>;
  isDraft?: boolean;
}

// XMIID: User/(esm/_pSHJoFtqEe6Mx9dH3yj5gQ)/TransferObjectViewPageContainer
// Name: service::SelectAnswerVoteSelection::SelectAnswerVoteSelection_View_Edit
export default function ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_View_Edit(
  props: ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_View_EditProps,
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
    useTrackService<ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_View_EditContainerHook>(
      `(${OBJECTCLASS}=${SERVICE_SELECT_ANSWER_VOTE_SELECTION_SELECT_ANSWER_VOTE_SELECTION_VIEW_EDIT_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY})`,
    );
  const containerActions: ServiceSelectAnswerVoteSelectionSelectAnswerVoteSelection_View_EditActionDefinitions =
    customContainerHook?.(data, editMode, storeDiff) || {};
  const actions = useMemo(() => ({ ...containerActions, ...pageActions }), [containerActions, pageActions]);

  return (
    <Grid container>
      <Grid item data-name="SelectAnswerVoteSelection_View_Edit" xs={12} sm={12} md={36.0}>
        <Grid
          id="User/(esm/_pSHJoFtqEe6Mx9dH3yj5gQ)/TransferObjectViewVisualElement"
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
              id="User/(esm/_sHcH0Fv1Ee6nEc5rp_Qy4A)/StringTypeTextInput"
              label={
                t('service.SelectAnswerVoteSelection.SelectAnswerVoteSelection_View_Edit.title', {
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
              id="User/(esm/_teidoFv1Ee6nEc5rp_Qy4A)/StringTypeTextArea"
              label={
                t('service.SelectAnswerVoteSelection.SelectAnswerVoteSelection_View_Edit.description', {
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
