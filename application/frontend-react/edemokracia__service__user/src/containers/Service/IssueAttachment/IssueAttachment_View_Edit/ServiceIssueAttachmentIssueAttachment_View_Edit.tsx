//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #application.pageContainers
// Path expression: 'src/containers/'+#containerPath(#self)+'/'+#containerComponentName(#self)+'.tsx'
// Template name: actor/src/containers/container.tsx
// Template file: actor/src/containers/container.tsx.hbs

import type { Dispatch, SetStateAction, FC } from 'react';
import { forwardRef, useEffect, useState, useCallback, useImperativeHandle } from 'react';
import { useTranslation } from 'react-i18next';
import { NumericFormat } from 'react-number-format';
import { LoadingButton } from '@mui/lab';
import { OBJECTCLASS } from '@pandino/pandino-api';
import type { JudoIdentifiable } from '@judo/data-api-common';
import type { CustomFormVisualElementProps } from '~/custom';
import { ComponentProxy } from '@pandino/react-hooks';
import { clsx } from 'clsx';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import InputAdornment from '@mui/material/InputAdornment';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import type { GridFilterModel } from '@mui/x-data-grid';
import { useL10N } from '~/l10n/l10n-context';
import { CUSTOM_VISUAL_ELEMENT_INTERFACE_KEY } from '~/custom';
import { mainContainerPadding } from '~/theme';
import { DIVIDER_HEIGHT } from '~/config';
import type { Filter } from '~/components-api';
import { MdiIcon, ModeledTabs, DropdownButton, useJudoNavigation } from '~/components';
import {
  isErrorOperationFault,
  useErrorHandler,
  fileHandling,
  uiDateToServiceDate,
  serviceDateToUiDate,
  uiTimeToServiceTime,
  serviceTimeToUiTime,
  stringToBooleanSelect,
  booleanToStringSelect,
} from '~/utilities';

import { DatePicker, DateTimePicker, TimePicker } from '@mui/x-date-pickers';
import type { DateValidationError, DateTimeValidationError, TimeValidationError } from '@mui/x-date-pickers';
import {
  AssociationButton,
  BinaryInput,
  CollectionAssociationButton,
  NumericInput,
  TrinaryLogicCombobox,
} from '~/components/widgets';
import { useConfirmationBeforeChange } from '~/hooks';
import {
  ServiceIssueAttachment,
  ServiceIssueAttachmentQueryCustomizer,
  ServiceIssueAttachmentStored,
} from '~/services/data-api';

export interface ServiceIssueAttachmentIssueAttachment_View_EditActionDefinitions {}

export interface ServiceIssueAttachmentIssueAttachment_View_EditProps {
  refreshCounter: number;
  actions: ServiceIssueAttachmentIssueAttachment_View_EditActionDefinitions;

  data: ServiceIssueAttachmentStored;
  isLoading: boolean;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof ServiceIssueAttachment, value: any) => void;
  editMode: boolean;
  validation: Map<keyof ServiceIssueAttachment, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof ServiceIssueAttachment, string>>>;
}

// XMIID: User/(esm/_p5jNQGksEe25ONJ3V89cVA)/TransferObjectViewPageContainer
// Name: service::IssueAttachment::IssueAttachment_View_Edit
export default function ServiceIssueAttachmentIssueAttachment_View_Edit(
  props: ServiceIssueAttachmentIssueAttachment_View_EditProps,
) {
  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const {
    refreshCounter,
    actions,
    data,
    isLoading,
    isFormUpdateable,
    isFormDeleteable,
    storeDiff,
    editMode,
    validation,
    setValidation,
  } = props;
  const { locale: l10nLocale } = useL10N();

  useConfirmationBeforeChange(
    editMode,
    t('judo.form.navigation.confirmation', {
      defaultValue: 'You have potential unsaved changes in your form, are you sure you would like to navigate away?',
    }),
  );

  return (
    <Grid container spacing={2} direction="column" alignItems="stretch" justifyContent="flex-start">
      <Grid item xs={12} sm={12}>
        <Grid
          id="User/(esm/_XJwIoG5CEe2Q6M99rsfqSQ)/GroupVisualElement"
          container
          direction="row"
          alignItems="flex-start"
          justifyContent="flex-start"
          spacing={2}
        >
          <Grid item xs={12} sm={12} md={4.0}>
            <TextField
              required={true}
              name="type"
              id="User/(esm/_Rd-4oG5CEe2Q6M99rsfqSQ)/EnumerationTypeCombo"
              autoFocus
              label={t('service.IssueAttachment.IssueAttachment_View_Edit.type', { defaultValue: 'Type' }) as string}
              value={data.type || ''}
              className={clsx({
                'JUDO-viewMode': !editMode,
                'JUDO-required': true,
              })}
              disabled={isLoading}
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
            <BinaryInput
              required={false}
              id="User/(esm/_Rd8cYG5CEe2Q6M99rsfqSQ)/BinaryTypeInput"
              label={t('service.IssueAttachment.IssueAttachment_View_Edit.file', { defaultValue: 'File' }) as string}
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
              disabled={isLoading}
              readonly={false || !isFormUpdateable()}
              deleteCallback={async () => {
                storeDiff('file', null);
              }}
              uploadCallback={async (uploadedData: { token: string }) => {
                storeDiff('file', uploadedData.token);
              }}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={4.0}>
            <TextField
              required={false}
              name="link"
              id="User/(esm/_Rd6nMG5CEe2Q6M99rsfqSQ)/StringTypeTextInput"
              label={t('service.IssueAttachment.IssueAttachment_View_Edit.link', { defaultValue: 'Link' }) as string}
              value={data.link ?? ''}
              className={clsx({
                'JUDO-viewMode': !editMode,
                'JUDO-required': false,
              })}
              disabled={isLoading}
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
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
