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
import { ComponentProxy } from '@pandino/react-hooks';
import { clsx } from 'clsx';
import {
  Box,
  Container,
  Grid,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  FormControl,
  FormControlLabel,
  FormHelperText,
  InputAdornment,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@mui/material';
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
import { AssociationButton, BinaryInput, CollectionAssociationButton, NumericInput } from '~/components/widgets';
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

  data: ServiceIssueAttachment;
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
            <Grid
              id="_foozI32GEe6V8KKnnZfChA)/LabelWrapper"
              container
              direction="column"
              alignItems="center"
              justifyContent="flex-start"
              spacing={2}
            >
              <Grid item xs={12} sm={12}>
                <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                  <MdiIcon path="list" sx={{ marginRight: 1 }} />
                  <Typography id="_foozI32GEe6V8KKnnZfChA)/Label" variant="h5" component="h1">
                    {t(
                      'service.IssueAttachment.IssueAttachment.View.Edit.type::Label.type::LabelWrapper.group.IssueAttachment_View_Edit.service::IssueAttachment::IssueAttachment_View_Edit',
                      { defaultValue: 'Type' },
                    )}
                  </Typography>
                </Grid>
              </Grid>

              <Grid item xs={12} sm={12}>
                <FormControl
                  fullWidth={true}
                  sx={{ mt: '10px' }}
                  className='MuiTextField-root'
                  disabled={false || !isFormUpdateable() || isLoading}
                  error={validation.has('type')}
                >
                  <InputLabel id="User/(esm/_Rd-4oG5CEe2Q6M99rsfqSQ)/EnumerationTypeRadio" shrink={true} size={'small'}>
                    {t(
                      'service.IssueAttachment.IssueAttachment.View.Edit.type.type::LabelWrapper.group.IssueAttachment_View_Edit.service::IssueAttachment::IssueAttachment_View_Edit',
                      { defaultValue: 'Type' },
                    )}{' '}
                    *
                  </InputLabel>
                  <RadioGroup
                    sx={{ justifyContent: 'space-between', pl: '12px', pt: '6px' }}
                    name="type"
                    id="User/(esm/_Rd-4oG5CEe2Q6M99rsfqSQ)/EnumerationTypeRadio"
                    value={data.type || ''}
                    onChange={(event) => {
                      storeDiff('type', event.target.value);
                    }}
                  >
                    <FormControlLabel
                      id="User/(esm/_GyGMEGkQEe25ONJ3V89cVA)/EnumerationTypeMember"
                      value={'LINK'}
                      control={<Radio size='small' />}
                      label={t('enumerations.AttachmentType.LINK', { defaultValue: 'LINK' })}
                      disabled={false || !isFormUpdateable()}
                    />
                    <FormControlLabel
                      id="User/(esm/_IlUdMGkQEe25ONJ3V89cVA)/EnumerationTypeMember"
                      value={'IMAGE'}
                      control={<Radio size='small' />}
                      label={t('enumerations.AttachmentType.IMAGE', { defaultValue: 'IMAGE' })}
                      disabled={false || !isFormUpdateable()}
                    />
                    <FormControlLabel
                      id="User/(esm/_ZFYWMGkQEe25ONJ3V89cVA)/EnumerationTypeMember"
                      value={'VIDEO'}
                      control={<Radio size='small' />}
                      label={t('enumerations.AttachmentType.VIDEO', { defaultValue: 'VIDEO' })}
                      disabled={false || !isFormUpdateable()}
                    />
                    <FormControlLabel
                      id="User/(esm/_a1lvkGkQEe25ONJ3V89cVA)/EnumerationTypeMember"
                      value={'MAP'}
                      control={<Radio size='small' />}
                      label={t('enumerations.AttachmentType.MAP', { defaultValue: 'MAP' })}
                      disabled={false || !isFormUpdateable()}
                    />
                  </RadioGroup>
                  {validation.has('type') && !data.type && <FormHelperText>{validation.get('type')}</FormHelperText>}
                </FormControl>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={12} md={4.0}>
            <TextField
              required={true}
              name="type"
              id="User/(esm/_Rd-4oG5CEe2Q6M99rsfqSQ)/EnumerationTypeCombo"
              label={
                t(
                  'service.IssueAttachment.IssueAttachment.View.Edit.type.group.IssueAttachment_View_Edit.service::IssueAttachment::IssueAttachment_View_Edit',
                  { defaultValue: 'Type' },
                ) as string
              }
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
              label={
                t(
                  'service.IssueAttachment.IssueAttachment.View.Edit.file.group.IssueAttachment_View_Edit.service::IssueAttachment::IssueAttachment_View_Edit',
                  { defaultValue: 'File' },
                ) as string
              }
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
              label={
                t(
                  'service.IssueAttachment.IssueAttachment.View.Edit.link.group.IssueAttachment_View_Edit.service::IssueAttachment::IssueAttachment_View_Edit',
                  { defaultValue: 'Link' },
                ) as string
              }
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
