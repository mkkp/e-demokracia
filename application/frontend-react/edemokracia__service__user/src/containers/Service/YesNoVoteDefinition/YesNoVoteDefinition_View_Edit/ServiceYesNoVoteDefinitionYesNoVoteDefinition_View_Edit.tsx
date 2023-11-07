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
  ServiceIssue,
  ServiceIssueStored,
  ServiceYesNoVoteDefinition,
  ServiceYesNoVoteDefinitionQueryCustomizer,
  ServiceYesNoVoteDefinitionStored,
  ServiceYesNoVoteEntry,
  ServiceYesNoVoteEntryQueryCustomizer,
  ServiceYesNoVoteEntryStored,
} from '~/services/data-api';
import type { ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditVoteEntriesComponentActionDefinitions } from './components/ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditVoteEntriesComponent';
import { ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditVoteEntriesComponent } from './components/ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditVoteEntriesComponent';
import type { ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditUserVoteEntryComponentActionDefinitions } from './components/ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditUserVoteEntryComponent';
import { ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditUserVoteEntryComponent } from './components/ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditUserVoteEntryComponent';

export interface ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditActionDefinitions
  extends ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditUserVoteEntryComponentActionDefinitions,
    ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditVoteEntriesComponentActionDefinitions {
  serviceYesNoVoteDefinitionYesNoVoteDefinition_View_EditVoteEntryBaseVirtualIssueOpenPage?: (
    target?: ServiceIssueStored,
  ) => Promise<void>;
  serviceYesNoVoteDefinitionYesNoVoteDefinition_View_EditVoteEntryBaseVirtualIssuePreFetch?: (
    target?: ServiceIssueStored,
  ) => Promise<ServiceIssueStored>;
  serviceYesNoVoteDefinitionYesNoVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteOpenForm?: () => Promise<void>;
  serviceYesNoVoteDefinitionYesNoVoteDefinition_View_EditUserVoteEntryGroupUserVoteVirtualForUserVoteTakeBackVote?: () => Promise<void>;
}

export interface ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditProps {
  refreshCounter: number;
  actions: ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditActionDefinitions;

  data: ServiceYesNoVoteDefinition;
  isLoading: boolean;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof ServiceYesNoVoteDefinition, value: any) => void;
  editMode: boolean;
  validation: Map<keyof ServiceYesNoVoteDefinition, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof ServiceYesNoVoteDefinition, string>>>;
}

// XMIID: User/(esm/_-ZmwoH4XEe2cB7_PsKXsHQ)/TransferObjectViewPageContainer
// Name: service::YesNoVoteDefinition::YesNoVoteDefinition_View_Edit
export default function ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_Edit(
  props: ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditProps,
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
        <Card id="_fn1h4H2GEe6V8KKnnZfChA)/LabelWrapper">
          <CardContent>
            <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
              <Grid item xs={12} sm={12}>
                <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                  <Typography id="_fn1h4H2GEe6V8KKnnZfChA)/Label" variant="h5" component="h1">
                    {t(
                      'service.YesNoVoteDefinition.YesNoVoteDefinition.View.Edit.userVoteEntryGroup::Label.userVoteEntryGroup::LabelWrapper.YesNoVoteDefinition_View_Edit.service::YesNoVoteDefinition::YesNoVoteDefinition_View_Edit',
                      { defaultValue: 'My vote entry' },
                    )}
                  </Typography>
                </Grid>
              </Grid>

              <Grid item xs={12} sm={12}>
                <Grid
                  id="User/(esm/_dZi8oFscEe6Mx9dH3yj5gQ)/GroupVisualElement"
                  container
                  direction="row"
                  alignItems="stretch"
                  justifyContent="flex-start"
                  spacing={2}
                >
                  {!data.userHasNoVoteEntry && (
                    <Grid item xs={12} sm={12}>
                      <Grid
                        id="User/(esm/_K-cscFouEe6_67aMO2jOsw)/GroupVisualElement"
                        container
                        direction="row"
                        alignItems="flex-start"
                        justifyContent="flex-start"
                        spacing={2}
                      >
                        <Grid item xs={12} sm={12}>
                          <Grid
                            id="User/(esm/_8uozYFsgEe6Mx9dH3yj5gQ)/GroupVisualElement"
                            container
                            direction="row"
                            alignItems="flex-start"
                            justifyContent="flex-start"
                            spacing={2}
                          >
                            <Grid item xs={12} sm={12} md={4.0}>
                              <LoadingButton
                                id="User/(esm/_--H4sFouEe6_67aMO2jOsw)/OperationFormVisualElement"
                                loading={isLoading}
                                variant={undefined}
                                startIcon={<MdiIcon path="delete" />}
                                loadingPosition="start"
                                onClick={async () => {
                                  if (
                                    actions.serviceYesNoVoteDefinitionYesNoVoteDefinition_View_EditUserVoteEntryGroupUserVoteVirtualForUserVoteTakeBackVote
                                  ) {
                                    await actions.serviceYesNoVoteDefinitionYesNoVoteDefinition_View_EditUserVoteEntryGroupUserVoteVirtualForUserVoteTakeBackVote!();
                                  }
                                }}
                                disabled={
                                  !actions.serviceYesNoVoteDefinitionYesNoVoteDefinition_View_EditUserVoteEntryGroupUserVoteVirtualForUserVoteTakeBackVote ||
                                  !data.userHasVoteEntry ||
                                  editMode
                                }
                              >
                                <span>
                                  {t(
                                    'service.YesNoVoteDefinition.YesNoVoteDefinition.View.Edit.takeBackVote.VirtualForUserVote.userVote.userVoteEntryGroup.userVoteEntryGroup::LabelWrapper.YesNoVoteDefinition_View_Edit.service::YesNoVoteDefinition::YesNoVoteDefinition_View_Edit',
                                    { defaultValue: 'TakeBackVote' },
                                  )}
                                </span>
                              </LoadingButton>
                            </Grid>

                            <Grid item xs={12} sm={12} md={4.0}>
                              <ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditUserVoteEntryComponent
                                disabled={true || !isFormUpdateable()}
                                ownerData={data}
                                editMode={editMode}
                                storeDiff={storeDiff}
                                validationError={validation.get('userVoteEntry')}
                                actions={actions}
                              />
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  )}

                  {!data.userHasVoteEntry && (
                    <Grid item xs={12} sm={12}>
                      <Grid
                        id="User/(esm/_Ud1NcFotEe6_67aMO2jOsw)/GroupVisualElement"
                        container
                        direction="row"
                        alignItems="flex-start"
                        justifyContent="flex-start"
                        spacing={2}
                      >
                        <Grid item xs={12} sm={12}></Grid>
                      </Grid>
                    </Grid>
                  )}
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={12}>
        <Card id="User/(esm/_ULRSEFoSEe6_67aMO2jOsw)/GroupVisualElement">
          <CardContent>
            <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
              <Grid item xs={12} sm={12}>
                <Grid
                  id="User/(esm/_X8gKkFprEe6_67aMO2jOsw)/GroupVisualElement"
                  container
                  direction="row"
                  alignItems="flex-start"
                  justifyContent="flex-start"
                  spacing={2}
                >
                  <Grid item xs={12} sm={12}>
                    <TextField
                      required={true}
                      name="title"
                      id="User/(esm/_ULRSEVoSEe6_67aMO2jOsw)/StringTypeTextInput"
                      autoFocus
                      label={
                        t(
                          'service.YesNoVoteDefinition.YesNoVoteDefinition.View.Edit.title.virtual.VoteEntryBase.YesNoVoteDefinition_View_Edit.service::YesNoVoteDefinition::YesNoVoteDefinition_View_Edit',
                          { defaultValue: 'Title' },
                        ) as string
                      }
                      value={data.title ?? ''}
                      className={clsx({
                        'JUDO-viewMode': !editMode,
                        'JUDO-required': true,
                      })}
                      disabled={isLoading}
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
                    />
                  </Grid>

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
                          id: 'User/(esm/_ULRSEloSEe6_67aMO2jOsw)/TimestampTypeDateTimeInput',
                          required: true,
                          helperText: validation.get('closeAt'),
                          error: !!validation.get('closeAt'),
                          InputProps: {
                            startAdornment: (
                              <InputAdornment position="start">
                                <MdiIcon path="schedule" />
                              </InputAdornment>
                            ),
                          },
                        },
                      }}
                      onError={(newError: DateTimeValidationError, value: any) => {
                        // https://mui.com/x/react-date-pickers/validation/#show-the-error
                        setValidation((prevValidation) => {
                          const copy = new Map<keyof ServiceYesNoVoteDefinition, string>(prevValidation);
                          copy.set(
                            'closeAt',
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
                        t(
                          'service.YesNoVoteDefinition.YesNoVoteDefinition.View.Edit.closeAt.virtual.VoteEntryBase.YesNoVoteDefinition_View_Edit.service::YesNoVoteDefinition::YesNoVoteDefinition_View_Edit',
                          { defaultValue: 'CloseAt' },
                        ) as string
                      }
                      value={serviceDateToUiDate(data.closeAt ?? null)}
                      readOnly={false || !isFormUpdateable()}
                      disabled={isLoading}
                      onChange={(newValue: Date) => {
                        storeDiff('closeAt', newValue);
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} sm={12} md={4.0}>
                    <Grid
                      id="_fox9E32GEe6V8KKnnZfChA)/LabelWrapper"
                      container
                      direction="column"
                      alignItems="center"
                      justifyContent="flex-start"
                      spacing={2}
                    >
                      <Grid item xs={12} sm={12}>
                        <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                          <MdiIcon path="list" sx={{ marginRight: 1 }} />
                          <Typography id="_fox9E32GEe6V8KKnnZfChA)/Label" variant="h5" component="h1">
                            {t(
                              'service.YesNoVoteDefinition.YesNoVoteDefinition.View.Edit.status::Label.status::LabelWrapper.virtual.VoteEntryBase.YesNoVoteDefinition_View_Edit.service::YesNoVoteDefinition::YesNoVoteDefinition_View_Edit',
                              { defaultValue: 'Status' },
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
                          error={validation.has('status')}
                        >
                          <InputLabel
                            id="User/(esm/_ULRSE1oSEe6_67aMO2jOsw)/EnumerationTypeRadio"
                            shrink={true}
                            size={'small'}
                          >
                            {t(
                              'service.YesNoVoteDefinition.YesNoVoteDefinition.View.Edit.status.status::LabelWrapper.virtual.VoteEntryBase.YesNoVoteDefinition_View_Edit.service::YesNoVoteDefinition::YesNoVoteDefinition_View_Edit',
                              { defaultValue: 'Status' },
                            )}{' '}
                            *
                          </InputLabel>
                          <RadioGroup
                            sx={{ justifyContent: 'space-between', pl: '12px', pt: '6px' }}
                            name="status"
                            id="User/(esm/_ULRSE1oSEe6_67aMO2jOsw)/EnumerationTypeRadio"
                            value={data.status || ''}
                            onChange={(event) => {
                              storeDiff('status', event.target.value);
                            }}
                          >
                            <FormControlLabel
                              id="User/(esm/_oDqCMW6IEe2wNaja8kBvcQ)/EnumerationTypeMember"
                              value={'CREATED'}
                              control={<Radio size='small' />}
                              label={t('enumerations.VoteStatus.CREATED', { defaultValue: 'CREATED' })}
                              disabled={false || !isFormUpdateable()}
                            />
                            <FormControlLabel
                              id="User/(esm/_oDqCMm6IEe2wNaja8kBvcQ)/EnumerationTypeMember"
                              value={'PENDING'}
                              control={<Radio size='small' />}
                              label={t('enumerations.VoteStatus.PENDING', { defaultValue: 'PENDING' })}
                              disabled={false || !isFormUpdateable()}
                            />
                            <FormControlLabel
                              id="User/(esm/_oDqCM26IEe2wNaja8kBvcQ)/EnumerationTypeMember"
                              value={'ACTIVE'}
                              control={<Radio size='small' />}
                              label={t('enumerations.VoteStatus.ACTIVE', { defaultValue: 'ACTIVE' })}
                              disabled={false || !isFormUpdateable()}
                            />
                            <FormControlLabel
                              id="User/(esm/_oDqCNG6IEe2wNaja8kBvcQ)/EnumerationTypeMember"
                              value={'CLOSED'}
                              control={<Radio size='small' />}
                              label={t('enumerations.VoteStatus.CLOSED', { defaultValue: 'CLOSED' })}
                              disabled={false || !isFormUpdateable()}
                            />
                            <FormControlLabel
                              id="User/(esm/_6lZ38F4_Ee6vsex_cZNQbQ)/EnumerationTypeMember"
                              value={'ARCHIVED'}
                              control={<Radio size='small' />}
                              label={t('enumerations.VoteStatus.ARCHIVED', { defaultValue: 'ARCHIVED' })}
                              disabled={false || !isFormUpdateable()}
                            />
                          </RadioGroup>
                          {validation.has('status') && !data.status && (
                            <FormHelperText>{validation.get('status')}</FormHelperText>
                          )}
                        </FormControl>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item xs={12} sm={12} md={4.0}>
                    <TextField
                      required={true}
                      name="status"
                      id="User/(esm/_ULRSE1oSEe6_67aMO2jOsw)/EnumerationTypeCombo"
                      label={
                        t(
                          'service.YesNoVoteDefinition.YesNoVoteDefinition.View.Edit.status.virtual.VoteEntryBase.YesNoVoteDefinition_View_Edit.service::YesNoVoteDefinition::YesNoVoteDefinition_View_Edit',
                          { defaultValue: 'Status' },
                        ) as string
                      }
                      value={data.status || ''}
                      className={clsx({
                        'JUDO-viewMode': !editMode,
                        'JUDO-required': true,
                      })}
                      disabled={isLoading}
                      error={!!validation.get('status')}
                      helperText={validation.get('status')}
                      onChange={(event) => {
                        storeDiff('status', event.target.value);
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
                      <MenuItem id="User/(esm/_oDqCMW6IEe2wNaja8kBvcQ)/EnumerationTypeMember" value={'CREATED'}>
                        {t('enumerations.VoteStatus.CREATED', { defaultValue: 'CREATED' })}
                      </MenuItem>
                      <MenuItem id="User/(esm/_oDqCMm6IEe2wNaja8kBvcQ)/EnumerationTypeMember" value={'PENDING'}>
                        {t('enumerations.VoteStatus.PENDING', { defaultValue: 'PENDING' })}
                      </MenuItem>
                      <MenuItem id="User/(esm/_oDqCM26IEe2wNaja8kBvcQ)/EnumerationTypeMember" value={'ACTIVE'}>
                        {t('enumerations.VoteStatus.ACTIVE', { defaultValue: 'ACTIVE' })}
                      </MenuItem>
                      <MenuItem id="User/(esm/_oDqCNG6IEe2wNaja8kBvcQ)/EnumerationTypeMember" value={'CLOSED'}>
                        {t('enumerations.VoteStatus.CLOSED', { defaultValue: 'CLOSED' })}
                      </MenuItem>
                      <MenuItem id="User/(esm/_6lZ38F4_Ee6vsex_cZNQbQ)/EnumerationTypeMember" value={'ARCHIVED'}>
                        {t('enumerations.VoteStatus.ARCHIVED', { defaultValue: 'ARCHIVED' })}
                      </MenuItem>
                    </TextField>
                  </Grid>

                  <Grid item xs={12} sm={12} md={6.0}>
                    <AssociationButton
                      id="User/(esm/_C5_asFoWEe6_67aMO2jOsw)/TabularReferenceFieldButton"
                      variant={undefined}
                      editMode={editMode}
                      navigateAction={
                        actions.serviceYesNoVoteDefinitionYesNoVoteDefinition_View_EditVoteEntryBaseVirtualIssueOpenPage
                      }
                      refreshCounter={refreshCounter}
                      fetchCall={
                        actions.serviceYesNoVoteDefinitionYesNoVoteDefinition_View_EditVoteEntryBaseVirtualIssuePreFetch
                      }
                    >
                      {t(
                        'service.YesNoVoteDefinition.YesNoVoteDefinition.View.Edit.issue.virtual.VoteEntryBase.YesNoVoteDefinition_View_Edit.service::YesNoVoteDefinition::YesNoVoteDefinition_View_Edit',
                        { defaultValue: 'Issue' },
                      )}
                      <MdiIcon path="arrow-right" />
                    </AssociationButton>
                  </Grid>

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
                          id: 'User/(esm/_ULRSGVoSEe6_67aMO2jOsw)/TimestampTypeDateTimeInput',
                          required: true,
                          helperText: validation.get('created'),
                          error: !!validation.get('created'),
                          InputProps: {
                            startAdornment: (
                              <InputAdornment position="start">
                                <MdiIcon path="schedule" />
                              </InputAdornment>
                            ),
                          },
                        },
                      }}
                      onError={(newError: DateTimeValidationError, value: any) => {
                        // https://mui.com/x/react-date-pickers/validation/#show-the-error
                        setValidation((prevValidation) => {
                          const copy = new Map<keyof ServiceYesNoVoteDefinition, string>(prevValidation);
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
                        t(
                          'service.YesNoVoteDefinition.YesNoVoteDefinition.View.Edit.created.virtual.VoteEntryBase.YesNoVoteDefinition_View_Edit.service::YesNoVoteDefinition::YesNoVoteDefinition_View_Edit',
                          { defaultValue: 'Created' },
                        ) as string
                      }
                      value={serviceDateToUiDate(data.created ?? null)}
                      readOnly={false || !isFormUpdateable()}
                      disabled={isLoading}
                      onChange={(newValue: Date) => {
                        storeDiff('created', newValue);
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} sm={12}>
                    <TextField
                      required={true}
                      name="description"
                      id="User/(esm/_ULRSGloSEe6_67aMO2jOsw)/StringTypeTextArea"
                      label={
                        t(
                          'service.YesNoVoteDefinition.YesNoVoteDefinition.View.Edit.description.virtual.VoteEntryBase.YesNoVoteDefinition_View_Edit.service::YesNoVoteDefinition::YesNoVoteDefinition_View_Edit',
                          { defaultValue: 'Description' },
                        ) as string
                      }
                      value={data.description ?? ''}
                      className={clsx({
                        'JUDO-viewMode': !editMode,
                        'JUDO-required': true,
                      })}
                      disabled={isLoading}
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
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={12}>
        <Grid
          id="_fn5MQH2GEe6V8KKnnZfChA)/LabelWrapper"
          container
          direction="column"
          alignItems="center"
          justifyContent="flex-start"
          spacing={2}
        >
          <Grid item xs={12} sm={12}>
            <Grid container direction="row" alignItems="center" justifyContent="flex-start">
              <Typography id="_fn5MQH2GEe6V8KKnnZfChA)/Label" variant="h5" component="h1">
                {t(
                  'service.YesNoVoteDefinition.YesNoVoteDefinition.View.Edit.entries::Label.entries::LabelWrapper.YesNoVoteDefinition_View_Edit.service::YesNoVoteDefinition::YesNoVoteDefinition_View_Edit',
                  { defaultValue: 'Entries' },
                )}
              </Typography>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={12}>
            <Grid
              id="User/(esm/_a8b9sFovEe6_67aMO2jOsw)/GroupVisualElement"
              container
              direction="row"
              alignItems="stretch"
              justifyContent="flex-start"
              spacing={2}
            >
              <Grid item xs={12} sm={12}>
                <Grid
                  id="User/(esm/_jimiQFovEe6_67aMO2jOsw)/TabularReferenceFieldRelationDefinedTable"
                  container
                  direction="column"
                  alignItems="stretch"
                  justifyContent="flex-start"
                >
                  <ServiceYesNoVoteDefinitionYesNoVoteDefinition_View_EditVoteEntriesComponent
                    uniqueId={'TMP'}
                    actions={actions}
                    ownerData={data}
                    editMode={editMode}
                    isFormUpdateable={isFormUpdateable}
                    validationError={validation.get('voteEntries')}
                    refreshCounter={refreshCounter}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
