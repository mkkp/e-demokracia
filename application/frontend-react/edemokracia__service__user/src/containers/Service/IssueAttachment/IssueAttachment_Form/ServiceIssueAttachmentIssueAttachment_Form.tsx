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
import { fileHandling, isErrorOperationFault, useErrorHandler } from '~/utilities';

import {} from '@mui/x-date-pickers';
import type {} from '@mui/x-date-pickers';
import { BinaryInput } from '~/components/widgets';
import { useConfirmationBeforeChange } from '~/hooks';
import {
  ServiceIssueAttachment,
  ServiceIssueAttachmentQueryCustomizer,
  ServiceIssueAttachmentStored,
} from '~/services/data-api';

export const SERVICE_ISSUE_ATTACHMENT_ISSUE_ATTACHMENT_FORM_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY =
  'ServiceIssueAttachmentIssueAttachment_FormContainerHook';
export type ServiceIssueAttachmentIssueAttachment_FormContainerHook = (
  data: ServiceIssueAttachmentStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof ServiceIssueAttachment, value: any) => void,
) => ServiceIssueAttachmentIssueAttachment_FormActionDefinitions;

export interface ServiceIssueAttachmentIssueAttachment_FormActionDefinitions {
  isFileRequired?: (data: ServiceIssueAttachment | ServiceIssueAttachmentStored, editMode?: boolean) => boolean;
  isFileDisabled?: (
    data: ServiceIssueAttachment | ServiceIssueAttachmentStored,
    editMode?: boolean,
    isLoading?: boolean,
  ) => boolean;
  isLinkRequired?: (data: ServiceIssueAttachment | ServiceIssueAttachmentStored, editMode?: boolean) => boolean;
  isLinkDisabled?: (
    data: ServiceIssueAttachment | ServiceIssueAttachmentStored,
    editMode?: boolean,
    isLoading?: boolean,
  ) => boolean;
  isTypeRequired?: (data: ServiceIssueAttachment | ServiceIssueAttachmentStored, editMode?: boolean) => boolean;
  isTypeDisabled?: (
    data: ServiceIssueAttachment | ServiceIssueAttachmentStored,
    editMode?: boolean,
    isLoading?: boolean,
  ) => boolean;
}

export interface ServiceIssueAttachmentIssueAttachment_FormProps {
  refreshCounter: number;
  actions: ServiceIssueAttachmentIssueAttachment_FormActionDefinitions;

  data: ServiceIssueAttachmentStored;
  isLoading: boolean;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof ServiceIssueAttachment, value: any) => void;
  editMode: boolean;
  validation: Map<keyof ServiceIssueAttachment, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof ServiceIssueAttachment, string>>>;
  submit: () => Promise<void>;
}

// XMIID: User/(esm/_p5sXMGksEe25ONJ3V89cVA)/TransferObjectFormPageContainer
// Name: service::IssueAttachment::IssueAttachment_Form
export default function ServiceIssueAttachmentIssueAttachment_Form(
  props: ServiceIssueAttachmentIssueAttachment_FormProps,
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
  const { service: customContainerHook } = useTrackService<ServiceIssueAttachmentIssueAttachment_FormContainerHook>(
    `(${OBJECTCLASS}=${SERVICE_ISSUE_ATTACHMENT_ISSUE_ATTACHMENT_FORM_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const containerActions: ServiceIssueAttachmentIssueAttachment_FormActionDefinitions =
    customContainerHook?.(data, editMode, storeDiff) || {};
  const actions = useMemo(() => ({ ...containerActions, ...pageActions }), [containerActions, pageActions]);

  return (
    <Grid container>
      <Grid item xs={12} sm={12}>
        <Grid
          id="User/(esm/_p5sXMGksEe25ONJ3V89cVA)/TransferObjectFormVisualElement"
          container
          direction="column"
          alignItems="stretch"
          justifyContent="flex-start"
          spacing={2}
        >
          <Grid item xs={12} sm={12}>
            <Grid
              id="User/(esm/_jr9sAG5CEe2Q6M99rsfqSQ)/GroupVisualElement"
              container
              direction="row"
              alignItems="flex-start"
              justifyContent="flex-start"
              spacing={2}
            >
              <Grid item xs={12} sm={12} md={4.0}>
                <TextField
                  required={actions?.isTypeRequired ? actions.isTypeRequired(data, editMode) : true}
                  name="type"
                  id="User/(esm/_Rd_fsG5CEe2Q6M99rsfqSQ)/EnumerationTypeCombo"
                  autoFocus
                  label={t('service.IssueAttachment.IssueAttachment_Form.type', { defaultValue: 'Type' }) as string}
                  value={data.type || ''}
                  className={clsx({
                    'JUDO-viewMode': !editMode,
                    'JUDO-required': true,
                  })}
                  disabled={actions?.isTypeDisabled ? actions.isTypeDisabled(data, editMode, isLoading) : isLoading}
                  error={!!validation.get('type')}
                  helperText={validation.get('type')}
                  onChange={(event) => {
                    storeDiff('type', event.target.value);
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
                  <MenuItem id="User/(esm/_GyGMEGkQEe25ONJ3V89cVA)/EnumerationTypeMember" value={'LINK'}>
                    {t('enumerations.AttachmentType.LINK', { defaultValue: 'LINK' })}
                  </MenuItem>
                  <MenuItem id="User/(esm/_IlUdMGkQEe25ONJ3V89cVA)/EnumerationTypeMember" value={'IMAGE'}>
                    {t('enumerations.AttachmentType.IMAGE', { defaultValue: 'IMAGE' })}
                  </MenuItem>
                  <MenuItem id="User/(esm/_ZFYWMGkQEe25ONJ3V89cVA)/EnumerationTypeMember" value={'VIDEO'}>
                    {t('enumerations.AttachmentType.VIDEO', { defaultValue: 'VIDEO' })}
                  </MenuItem>
                  <MenuItem id="User/(esm/_a1lvkGkQEe25ONJ3V89cVA)/EnumerationTypeMember" value={'MAP'}>
                    {t('enumerations.AttachmentType.MAP', { defaultValue: 'MAP' })}
                  </MenuItem>
                </TextField>
              </Grid>

              <Grid item xs={12} sm={12} md={4.0}>
                <TextField
                  required={actions?.isLinkRequired ? actions.isLinkRequired(data, editMode) : false}
                  name="link"
                  id="User/(esm/_Rd7OQG5CEe2Q6M99rsfqSQ)/StringTypeTextInput"
                  label={t('service.IssueAttachment.IssueAttachment_Form.link', { defaultValue: 'Link' }) as string}
                  value={data.link ?? ''}
                  className={clsx({
                    'JUDO-viewMode': !editMode,
                    'JUDO-required': false,
                  })}
                  disabled={actions?.isLinkDisabled ? actions.isLinkDisabled(data, editMode, isLoading) : isLoading}
                  error={!!validation.get('link')}
                  helperText={validation.get('link')}
                  onChange={(event) => {
                    const realValue = event.target.value?.length === 0 ? null : event.target.value;
                    storeDiff('link', realValue);
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
                    maxlength: 1024,
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={12} md={4.0}>
                <BinaryInput
                  required={actions?.isFileRequired ? actions.isFileRequired(data, editMode) : false}
                  id="User/(esm/_Rd9qgG5CEe2Q6M99rsfqSQ)/BinaryTypeInput"
                  label={t('service.IssueAttachment.IssueAttachment_Form.file', { defaultValue: 'File' }) as string}
                  icon="file-document-outline"
                  mimeType={{
                    type: '*',
                    subType: '*',
                  }}
                  editMode={editMode}
                  validation={validation}
                  data={data}
                  attributeName="file"
                  attributePath="service/IssueAttachment/file"
                  disabled={actions?.isFileDisabled ? actions.isFileDisabled(data, editMode, isLoading) : isLoading}
                  readonly={false || !isFormUpdateable()}
                  deleteCallback={async () => {
                    storeDiff('file', null);
                  }}
                  uploadCallback={async (uploadedData: { token: string }) => {
                    storeDiff('file', uploadedData.token);
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
