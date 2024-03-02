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
import type { BaseDateValidationProps } from '~/utilities';
import { isErrorOperationFault, serviceDateToUiDate, uiDateToServiceDate, useErrorHandler } from '~/utilities';

import { DateTimePicker } from '@mui/x-date-pickers';
import type { DateTimeValidationError } from '@mui/x-date-pickers';
import {} from '~/components/widgets';
import { useConfirmationBeforeChange } from '~/hooks';
import {
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
  ServiceYesNoVoteEntry,
  ServiceYesNoVoteEntryQueryCustomizer,
  ServiceYesNoVoteEntryStored,
} from '~/services/data-api';
import type { ServiceYesNoVoteEntryYesNoVoteEntry_View_EditUserComponentActionDefinitions } from './components/ServiceYesNoVoteEntryYesNoVoteEntry_View_EditUserComponent';
import { ServiceYesNoVoteEntryYesNoVoteEntry_View_EditUserComponent } from './components/ServiceYesNoVoteEntryYesNoVoteEntry_View_EditUserComponent';

export const SERVICE_YES_NO_VOTE_ENTRY_YES_NO_VOTE_ENTRY_VIEW_EDIT_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_YES_NO_VOTE_ENTRY_YES_NO_VOTE_ENTRY_VIEW_EDIT_CONTAINER_ACTIONS_HOOK';
export type ServiceYesNoVoteEntryYesNoVoteEntry_View_EditContainerHook = (
  data: ServiceYesNoVoteEntryStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof ServiceYesNoVoteEntry, value: any) => void,
) => ServiceYesNoVoteEntryYesNoVoteEntry_View_EditActionDefinitions;

export interface ServiceYesNoVoteEntryYesNoVoteEntry_View_EditActionDefinitions
  extends ServiceYesNoVoteEntryYesNoVoteEntry_View_EditUserComponentActionDefinitions {
  getPageTitle?: (data: ServiceYesNoVoteEntry) => string;
  isCreatedRequired?: (data: ServiceYesNoVoteEntry | ServiceYesNoVoteEntryStored, editMode?: boolean) => boolean;
  isCreatedDisabled?: (
    data: ServiceYesNoVoteEntry | ServiceYesNoVoteEntryStored,
    editMode?: boolean,
    isLoading?: boolean,
  ) => boolean;
  isValueRequired?: (data: ServiceYesNoVoteEntry | ServiceYesNoVoteEntryStored, editMode?: boolean) => boolean;
  isValueDisabled?: (
    data: ServiceYesNoVoteEntry | ServiceYesNoVoteEntryStored,
    editMode?: boolean,
    isLoading?: boolean,
  ) => boolean;
  getCreatedValidationProps?: (data: ServiceYesNoVoteEntry) => BaseDateValidationProps;
  getMask?: () => string;
}

export interface ServiceYesNoVoteEntryYesNoVoteEntry_View_EditProps {
  refreshCounter: number;
  isLoading: boolean;
  actions: ServiceYesNoVoteEntryYesNoVoteEntry_View_EditActionDefinitions;

  data: ServiceYesNoVoteEntryStored;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof ServiceYesNoVoteEntry, value: any) => void;
  editMode: boolean;
  validation: Map<keyof ServiceYesNoVoteEntry, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof ServiceYesNoVoteEntry, string>>>;
  submit: () => Promise<void>;
  isDraft?: boolean;
}

// XMIID: User/(esm/_LNbaEFoiEe6_67aMO2jOsw)/TransferObjectViewPageContainer
// Name: service::YesNoVoteEntry::YesNoVoteEntry_View_Edit
export default function ServiceYesNoVoteEntryYesNoVoteEntry_View_Edit(
  props: ServiceYesNoVoteEntryYesNoVoteEntry_View_EditProps,
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
  const { service: customContainerHook } = useTrackService<ServiceYesNoVoteEntryYesNoVoteEntry_View_EditContainerHook>(
    `(${OBJECTCLASS}=${SERVICE_YES_NO_VOTE_ENTRY_YES_NO_VOTE_ENTRY_VIEW_EDIT_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const containerActions: ServiceYesNoVoteEntryYesNoVoteEntry_View_EditActionDefinitions =
    customContainerHook?.(data, editMode, storeDiff) || {};
  const actions = useMemo(() => ({ ...pageActions, ...containerActions }), [pageActions, containerActions]);

  return (
    <Grid container>
      <Grid item data-name="YesNoVoteEntry_View_Edit" xs={12} sm={12} md={36.0}>
        <Grid
          id="User/(esm/_LNbaEFoiEe6_67aMO2jOsw)/TransferObjectViewVisualElement"
          data-name="YesNoVoteEntry_View_Edit"
          container
          direction="column"
          alignItems="stretch"
          justifyContent="flex-start"
          spacing={2}
        >
          <Grid item xs={12} sm={12} md={4.0}>
            <DateTimePicker
              ampm={false}
              ampmInClock={false}
              className={clsx({
                'JUDO-viewMode': !editMode,
                'JUDO-required': true,
              })}
              slotProps={{
                textField: {
                  id: 'User/(esm/_88hicFowEe6_67aMO2jOsw)/TimestampTypeDateTimeInput',
                  required: actions?.isCreatedRequired ? actions.isCreatedRequired(data, editMode) : true,
                  helperText: validation.get('created'),
                  error: !!validation.get('created'),
                  InputProps: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <MdiIcon path="calendar-clock" />
                      </InputAdornment>
                    ),
                  },
                },
              }}
              onError={(newError: DateTimeValidationError, value: any) => {
                // https://mui.com/x/react-date-pickers/validation/#show-the-error
                setValidation((prevValidation) => {
                  const copy = new Map<keyof ServiceYesNoVoteEntry, string>(prevValidation);
                  copy.set(
                    'created',
                    newError === 'invalidDate'
                      ? (t('judo.error.validation-failed.PATTERN_VALIDATION_FAILED', {
                          defaultValue: 'Value does not match the pattern requirements.',
                        }) as string)
                      : '',
                  );
                  return copy;
                });
              }}
              views={['year', 'month', 'day', 'hours', 'minutes', 'seconds']}
              label={
                t('service.YesNoVoteEntry.YesNoVoteEntry_View_Edit.created', { defaultValue: 'Created' }) as string
              }
              value={serviceDateToUiDate(data.created ?? null)}
              readOnly={false || !isFormUpdateable()}
              disabled={actions?.isCreatedDisabled ? actions.isCreatedDisabled(data, editMode, isLoading) : isLoading}
              onChange={(newValue: Date) => {
                storeDiff('created', newValue);
              }}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={4.0}>
            <TextField
              required={actions?.isValueRequired ? actions.isValueRequired(data, editMode) : true}
              name="value"
              id="User/(esm/_88iJgFowEe6_67aMO2jOsw)/EnumerationTypeCombo"
              label={t('service.YesNoVoteEntry.YesNoVoteEntry_View_Edit.value', { defaultValue: 'Value' }) as string}
              value={data.value || ''}
              className={clsx({
                'JUDO-viewMode': !editMode,
                'JUDO-required': true,
              })}
              disabled={actions?.isValueDisabled ? actions.isValueDisabled(data, editMode, isLoading) : isLoading}
              error={!!validation.get('value')}
              helperText={validation.get('value')}
              onChange={(event) => {
                storeDiff('value', event.target.value);
              }}
              InputLabelProps={{ shrink: true }}
              InputProps={{
                readOnly: false || !isFormUpdateable(),
                startAdornment: (
                  <InputAdornment position="start">
                    <MdiIcon path="format-list-numbered" />
                  </InputAdornment>
                ),
              }}
              select
            >
              <MenuItem id="User/(esm/_2E9NMW6dEe2wNaja8kBvcQ)/EnumerationTypeMember" value={'YES'}>
                {t('enumerations.YesNoVoteValue.YES', { defaultValue: 'YES' })}
              </MenuItem>
              <MenuItem id="User/(esm/_2E9NMm6dEe2wNaja8kBvcQ)/EnumerationTypeMember" value={'NO'}>
                {t('enumerations.YesNoVoteValue.NO', { defaultValue: 'NO' })}
              </MenuItem>
            </TextField>
          </Grid>

          <Grid item xs={12} sm={12} md={4.0}>
            <ServiceYesNoVoteEntryYesNoVoteEntry_View_EditUserComponent
              disabled={false}
              readOnly={false || !isFormUpdateable()}
              ownerData={data}
              editMode={editMode}
              isLoading={isLoading}
              isDraft={isDraft}
              storeDiff={storeDiff}
              validationError={validation.get('owner')}
              actions={actions}
              submit={submit}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
