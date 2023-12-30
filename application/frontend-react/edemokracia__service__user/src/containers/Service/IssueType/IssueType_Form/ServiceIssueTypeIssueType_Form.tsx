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
import MenuItem from '@mui/material/MenuItem';
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
import { ServiceIssueType, ServiceIssueTypeQueryCustomizer, ServiceIssueTypeStored } from '~/services/data-api';

export const SERVICE_ISSUE_TYPE_ISSUE_TYPE_FORM_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY =
  'ServiceIssueTypeIssueType_FormContainerHook';
export type ServiceIssueTypeIssueType_FormContainerHook = (
  data: ServiceIssueTypeStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof ServiceIssueType, value: any) => void,
) => ServiceIssueTypeIssueType_FormActionDefinitions;

export interface ServiceIssueTypeIssueType_FormActionDefinitions {
  isDescriptionRequired?: (data: ServiceIssueType | ServiceIssueTypeStored, editMode?: boolean) => boolean;
  isDescriptionDisabled?: (
    data: ServiceIssueType | ServiceIssueTypeStored,
    editMode?: boolean,
    isLoading?: boolean,
  ) => boolean;
  isTitleRequired?: (data: ServiceIssueType | ServiceIssueTypeStored, editMode?: boolean) => boolean;
  isTitleDisabled?: (
    data: ServiceIssueType | ServiceIssueTypeStored,
    editMode?: boolean,
    isLoading?: boolean,
  ) => boolean;
  isVoteTypeRequired?: (data: ServiceIssueType | ServiceIssueTypeStored, editMode?: boolean) => boolean;
  isVoteTypeDisabled?: (
    data: ServiceIssueType | ServiceIssueTypeStored,
    editMode?: boolean,
    isLoading?: boolean,
  ) => boolean;
}

export interface ServiceIssueTypeIssueType_FormProps {
  refreshCounter: number;
  actions: ServiceIssueTypeIssueType_FormActionDefinitions;

  data: ServiceIssueTypeStored;
  isLoading: boolean;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof ServiceIssueType, value: any) => void;
  editMode: boolean;
  validation: Map<keyof ServiceIssueType, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof ServiceIssueType, string>>>;
  submit: () => Promise<void>;
}

// XMIID: User/(esm/_J4WCwNu4Ee2Bgcx6em3jZg)/TransferObjectFormPageContainer
// Name: service::IssueType::IssueType_Form
export default function ServiceIssueTypeIssueType_Form(props: ServiceIssueTypeIssueType_FormProps) {
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
  const { service: customContainerHook } = useTrackService<ServiceIssueTypeIssueType_FormContainerHook>(
    `(${OBJECTCLASS}=${SERVICE_ISSUE_TYPE_ISSUE_TYPE_FORM_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const containerActions: ServiceIssueTypeIssueType_FormActionDefinitions =
    customContainerHook?.(data, editMode, storeDiff) || {};
  const actions = useMemo(() => ({ ...containerActions, ...pageActions }), [containerActions, pageActions]);

  return (
    <Grid container>
      <Grid item xs={12} sm={12}>
        <Grid
          id="User/(esm/_J4WCwNu4Ee2Bgcx6em3jZg)/TransferObjectFormVisualElement"
          container
          direction="column"
          alignItems="stretch"
          justifyContent="flex-start"
          spacing={2}
        >
          <Grid item xs={12} sm={12}>
            <Card id="User/(esm/_19au8NvDEe2Bgcx6em3jZg)/GroupVisualElement">
              <CardContent>
                <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      required={actions?.isTitleRequired ? actions.isTitleRequired(data, editMode) : true}
                      name="title"
                      id="User/(esm/_03iE8dvDEe2Bgcx6em3jZg)/StringTypeTextInput"
                      autoFocus
                      label={t('service.IssueType.IssueType_Form.title', { defaultValue: 'Title' }) as string}
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
                        maxlength: 255,
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} sm={12}>
                    <TextField
                      required={actions?.isVoteTypeRequired ? actions.isVoteTypeRequired(data, editMode) : false}
                      name="voteType"
                      id="User/(esm/_xWzhcOMcEe2Bgcx6em3jZg)/EnumerationTypeCombo"
                      label={t('service.IssueType.IssueType_Form.voteType', { defaultValue: 'VoteType' }) as string}
                      value={data.voteType || ''}
                      className={clsx({
                        'JUDO-viewMode': !editMode,
                        'JUDO-required': false,
                      })}
                      disabled={
                        actions?.isVoteTypeDisabled ? actions.isVoteTypeDisabled(data, editMode, isLoading) : isLoading
                      }
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
                      <MenuItem id="User/(esm/_r9r9IeMbEe2Bgcx6em3jZg)/EnumerationTypeMember" value={'YES_NO'}>
                        {t('enumerations.VoteType.YES_NO', { defaultValue: 'YES_NO' })}
                      </MenuItem>
                      <MenuItem id="User/(esm/_r9r9IuMbEe2Bgcx6em3jZg)/EnumerationTypeMember" value={'YES_NO_ABSTAIN'}>
                        {t('enumerations.VoteType.YES_NO_ABSTAIN', { defaultValue: 'YES_NO_ABSTAIN' })}
                      </MenuItem>
                      <MenuItem id="User/(esm/_r9r9I-MbEe2Bgcx6em3jZg)/EnumerationTypeMember" value={'SELECT_ANSWER'}>
                        {t('enumerations.VoteType.SELECT_ANSWER', { defaultValue: 'SELECT_ANSWER' })}
                      </MenuItem>
                      <MenuItem id="User/(esm/_r9r9JOMbEe2Bgcx6em3jZg)/EnumerationTypeMember" value={'RATE'}>
                        {t('enumerations.VoteType.RATE', { defaultValue: 'RATE' })}
                      </MenuItem>
                      <MenuItem id="User/(esm/_r9r9JeMbEe2Bgcx6em3jZg)/EnumerationTypeMember" value={'NO_VOTE'}>
                        {t('enumerations.VoteType.NO_VOTE', { defaultValue: 'NO_VOTE' })}
                      </MenuItem>
                    </TextField>
                  </Grid>

                  <Grid item xs={12} sm={12}>
                    <TextField
                      required={actions?.isDescriptionRequired ? actions.isDescriptionRequired(data, editMode) : true}
                      name="description"
                      id="User/(esm/_03iE8NvDEe2Bgcx6em3jZg)/StringTypeTextArea"
                      label={
                        t('service.IssueType.IssueType_Form.description', { defaultValue: 'Description' }) as string
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
                        maxlength: 16384,
                      }}
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
