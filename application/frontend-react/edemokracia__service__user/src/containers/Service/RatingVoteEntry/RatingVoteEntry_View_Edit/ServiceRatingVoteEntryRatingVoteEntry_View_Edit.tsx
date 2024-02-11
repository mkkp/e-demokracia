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
import type { JudoRestResponse } from '~/services/data-api/rest';
import { isErrorOperationFault, serviceDateToUiDate, uiDateToServiceDate, useErrorHandler } from '~/utilities';

import { DateTimePicker } from '@mui/x-date-pickers';
import type { DateTimeValidationError } from '@mui/x-date-pickers';
import { NumericInput } from '~/components/widgets';
import { useConfirmationBeforeChange } from '~/hooks';
import {
  ServiceRatingVoteEntry,
  ServiceRatingVoteEntryQueryCustomizer,
  ServiceRatingVoteEntryStored,
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
} from '~/services/data-api';
import type { ServiceRatingVoteEntryRatingVoteEntry_View_EditOwnerComponentActionDefinitions } from './components/ServiceRatingVoteEntryRatingVoteEntry_View_EditOwnerComponent';
import { ServiceRatingVoteEntryRatingVoteEntry_View_EditOwnerComponent } from './components/ServiceRatingVoteEntryRatingVoteEntry_View_EditOwnerComponent';

export const SERVICE_RATING_VOTE_ENTRY_RATING_VOTE_ENTRY_VIEW_EDIT_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_RATING_VOTE_ENTRY_RATING_VOTE_ENTRY_VIEW_EDIT_CONTAINER_ACTIONS_HOOK';
export type ServiceRatingVoteEntryRatingVoteEntry_View_EditContainerHook = (
  data: ServiceRatingVoteEntryStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof ServiceRatingVoteEntry, value: any) => void,
) => ServiceRatingVoteEntryRatingVoteEntry_View_EditActionDefinitions;

export interface ServiceRatingVoteEntryRatingVoteEntry_View_EditActionDefinitions
  extends ServiceRatingVoteEntryRatingVoteEntry_View_EditOwnerComponentActionDefinitions {
  getPageTitle?: (data: ServiceRatingVoteEntry) => string;
  isCreatedRequired?: (data: ServiceRatingVoteEntry | ServiceRatingVoteEntryStored, editMode?: boolean) => boolean;
  isCreatedDisabled?: (
    data: ServiceRatingVoteEntry | ServiceRatingVoteEntryStored,
    editMode?: boolean,
    isLoading?: boolean,
  ) => boolean;
  isValueRequired?: (data: ServiceRatingVoteEntry | ServiceRatingVoteEntryStored, editMode?: boolean) => boolean;
  isValueDisabled?: (
    data: ServiceRatingVoteEntry | ServiceRatingVoteEntryStored,
    editMode?: boolean,
    isLoading?: boolean,
  ) => boolean;
  getMask?: () => string;
}

export interface ServiceRatingVoteEntryRatingVoteEntry_View_EditProps {
  refreshCounter: number;
  isLoading: boolean;
  actions: ServiceRatingVoteEntryRatingVoteEntry_View_EditActionDefinitions;

  data: ServiceRatingVoteEntryStored;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof ServiceRatingVoteEntry, value: any) => void;
  editMode: boolean;
  validation: Map<keyof ServiceRatingVoteEntry, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof ServiceRatingVoteEntry, string>>>;
  submit: () => Promise<void>;
  isDraft?: boolean;
}

// XMIID: User/(esm/_J1HkoFslEe6Mx9dH3yj5gQ)/TransferObjectViewPageContainer
// Name: service::RatingVoteEntry::RatingVoteEntry_View_Edit
export default function ServiceRatingVoteEntryRatingVoteEntry_View_Edit(
  props: ServiceRatingVoteEntryRatingVoteEntry_View_EditProps,
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
    useTrackService<ServiceRatingVoteEntryRatingVoteEntry_View_EditContainerHook>(
      `(${OBJECTCLASS}=${SERVICE_RATING_VOTE_ENTRY_RATING_VOTE_ENTRY_VIEW_EDIT_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY})`,
    );
  const containerActions: ServiceRatingVoteEntryRatingVoteEntry_View_EditActionDefinitions =
    customContainerHook?.(data, editMode, storeDiff) || {};
  const actions = useMemo(() => ({ ...containerActions, ...pageActions }), [containerActions, pageActions]);

  return (
    <Grid container>
      <Grid item data-name="RatingVoteEntry_View_Edit" xs={12} sm={12} md={36.0}>
        <Grid
          id="User/(esm/_J1HkoFslEe6Mx9dH3yj5gQ)/TransferObjectViewVisualElement"
          data-name="RatingVoteEntry_View_Edit"
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
                  id: 'User/(esm/_V523gFuWEe6T042_LMmSdQ)/TimestampTypeDateTimeInput',
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
                  const copy = new Map<keyof ServiceRatingVoteEntry, string>(prevValidation);
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
                t('service.RatingVoteEntry.RatingVoteEntry_View_Edit.created', { defaultValue: 'Created' }) as string
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
            <NumericInput
              required={actions?.isValueRequired ? actions.isValueRequired(data, editMode) : true}
              name="value"
              id="User/(esm/_V53ekVuWEe6T042_LMmSdQ)/NumericTypeVisualInput"
              label={t('service.RatingVoteEntry.RatingVoteEntry_View_Edit.value', { defaultValue: 'Value' }) as string}
              customInput={TextField}
              value={data.value ?? ''}
              className={clsx({
                'JUDO-viewMode': !editMode,
                'JUDO-required': true,
              })}
              disabled={actions?.isValueDisabled ? actions.isValueDisabled(data, editMode, isLoading) : isLoading}
              error={!!validation.get('value')}
              helperText={validation.get('value')}
              onValueChange={(values, sourceInfo) => {
                const newValue = values.floatValue === undefined ? null : values.floatValue;
                if (data.value !== newValue) {
                  storeDiff('value', newValue);
                }
              }}
              InputLabelProps={{ shrink: true }}
              InputProps={{
                readOnly: false || !isFormUpdateable(),
                startAdornment: (
                  <InputAdornment position="start">
                    <MdiIcon path="calculator" />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          <Grid item xs={12} sm={12}>
            <ServiceRatingVoteEntryRatingVoteEntry_View_EditOwnerComponent
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
