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
  ServiceSelectAnswerVoteDefinition,
  ServiceSelectAnswerVoteDefinitionQueryCustomizer,
  ServiceSelectAnswerVoteDefinitionStored,
  ServiceSelectAnswerVoteEntry,
  ServiceSelectAnswerVoteEntryQueryCustomizer,
  ServiceSelectAnswerVoteEntryStored,
  ServiceSelectAnswerVoteSelection,
  ServiceSelectAnswerVoteSelectionQueryCustomizer,
  ServiceSelectAnswerVoteSelectionStored,
} from '~/services/data-api';
import type { ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteSelectionsComponentActionDefinitions } from './components/ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteSelectionsComponent';
import { ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteSelectionsComponent } from './components/ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteSelectionsComponent';
import type { ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntriesComponentActionDefinitions } from './components/ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntriesComponent';
import { ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntriesComponent } from './components/ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntriesComponent';
import type { ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryComponentActionDefinitions } from './components/ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryComponent';
import { ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryComponent } from './components/ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryComponent';

export interface ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditActionDefinitions
  extends ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryComponentActionDefinitions,
    ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntriesComponentActionDefinitions,
    ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteSelectionsComponentActionDefinitions {
  serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntryBaseVirtualIssueOpenPage?: (
    target?: ServiceIssueStored,
  ) => Promise<void>;
  serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntryBaseVirtualIssuePreFetch?: (
    target?: ServiceIssueStored,
  ) => Promise<ServiceIssueStored>;
  serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupTakeVoteVoteOpenSelector?: () => Promise<void>;
  serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupUserVoteVirtualForUserVoteTakeBackVote?: () => Promise<void>;
}

export interface ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditProps {
  refreshCounter: number;
  actions: ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditActionDefinitions;

  data: ServiceSelectAnswerVoteDefinition;
  isLoading: boolean;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof ServiceSelectAnswerVoteDefinition, value: any) => void;
  editMode: boolean;
  validation: Map<keyof ServiceSelectAnswerVoteDefinition, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof ServiceSelectAnswerVoteDefinition, string>>>;
}

// XMIID: User/(esm/_-cGrAH4XEe2cB7_PsKXsHQ)/TransferObjectViewPageContainer
// Name: service::SelectAnswerVoteDefinition::SelectAnswerVoteDefinition_View_Edit
export default function ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_Edit(
  props: ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditProps,
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
        <Card id="_fnkcIn2GEe6V8KKnnZfChA)/LabelWrapper">
          <CardContent>
            <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
              <Grid item xs={12} sm={12}>
                <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                  <Typography id="_fnkcIn2GEe6V8KKnnZfChA)/Label" variant="h5" component="h1">
                    {t(
                      'service.SelectAnswerVoteDefinition.SelectAnswerVoteDefinition.View.Edit.userVoteEntryGroup::Label.userVoteEntryGroup::LabelWrapper.SelectAnswerVoteDefinition_View_Edit.service::SelectAnswerVoteDefinition::SelectAnswerVoteDefinition_View_Edit',
                      { defaultValue: 'My vote entry' },
                    )}
                  </Typography>
                </Grid>
              </Grid>

              <Grid item xs={12} sm={12}>
                <Grid
                  id="User/(esm/_0SJy0FtuEe6Mx9dH3yj5gQ)/GroupVisualElement"
                  container
                  direction="row"
                  alignItems="stretch"
                  justifyContent="flex-start"
                  spacing={2}
                >
                  {!data.userHasNoVoteEntry && (
                    <Grid item xs={12} sm={12}>
                      <Grid
                        id="User/(esm/_0SJy0VtuEe6Mx9dH3yj5gQ)/GroupVisualElement"
                        container
                        direction="row"
                        alignItems="flex-start"
                        justifyContent="flex-start"
                        spacing={2}
                      >
                        <Grid item xs={12} sm={12}>
                          <Grid
                            id="User/(esm/_0SJy0ltuEe6Mx9dH3yj5gQ)/GroupVisualElement"
                            container
                            direction="row"
                            alignItems="flex-start"
                            justifyContent="flex-start"
                            spacing={2}
                          >
                            <Grid item xs={12} sm={12} md={4.0}>
                              <LoadingButton
                                id="User/(esm/_0SJy01tuEe6Mx9dH3yj5gQ)/OperationFormVisualElement"
                                loading={isLoading}
                                variant={undefined}
                                startIcon={<MdiIcon path="delete" />}
                                loadingPosition="start"
                                onClick={async () => {
                                  if (
                                    actions.serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupUserVoteVirtualForUserVoteTakeBackVote
                                  ) {
                                    await actions.serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupUserVoteVirtualForUserVoteTakeBackVote!();
                                  }
                                }}
                                disabled={
                                  !actions.serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryGroupUserVoteVirtualForUserVoteTakeBackVote ||
                                  !data.userHasVoteEntry ||
                                  editMode
                                }
                              >
                                <span>
                                  {t(
                                    'service.SelectAnswerVoteDefinition.SelectAnswerVoteDefinition.View.Edit.takeBackVote.VirtualForUserVote.userVote.userVoteEntryGroup.userVoteEntryGroup::LabelWrapper.SelectAnswerVoteDefinition_View_Edit.service::SelectAnswerVoteDefinition::SelectAnswerVoteDefinition_View_Edit',
                                    { defaultValue: 'TakeBackVote' },
                                  )}
                                </span>
                              </LoadingButton>
                            </Grid>

                            <Grid item xs={12} sm={12} md={4.0}>
                              <ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditUserVoteEntryComponent
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
                        id="User/(esm/_0SJy1ltuEe6Mx9dH3yj5gQ)/GroupVisualElement"
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
        <Card id="User/(esm/_0SJLwFtuEe6Mx9dH3yj5gQ)/GroupVisualElement">
          <CardContent>
            <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
              <Grid item xs={12} sm={12}>
                <Grid
                  id="User/(esm/_0SJLwVtuEe6Mx9dH3yj5gQ)/GroupVisualElement"
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
                      id="User/(esm/_0SJLwltuEe6Mx9dH3yj5gQ)/StringTypeTextInput"
                      autoFocus
                      label={
                        t(
                          'service.SelectAnswerVoteDefinition.SelectAnswerVoteDefinition.View.Edit.title.virtual.VoteEntryBase.SelectAnswerVoteDefinition_View_Edit.service::SelectAnswerVoteDefinition::SelectAnswerVoteDefinition_View_Edit',
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
                          id: 'User/(esm/_0SJLw1tuEe6Mx9dH3yj5gQ)/TimestampTypeDateTimeInput',
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
                          const copy = new Map<keyof ServiceSelectAnswerVoteDefinition, string>(prevValidation);
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
                          'service.SelectAnswerVoteDefinition.SelectAnswerVoteDefinition.View.Edit.closeAt.virtual.VoteEntryBase.SelectAnswerVoteDefinition_View_Edit.service::SelectAnswerVoteDefinition::SelectAnswerVoteDefinition_View_Edit',
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
                      id="_fosdg32GEe6V8KKnnZfChA)/LabelWrapper"
                      container
                      direction="column"
                      alignItems="center"
                      justifyContent="flex-start"
                      spacing={2}
                    >
                      <Grid item xs={12} sm={12}>
                        <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                          <MdiIcon path="list" sx={{ marginRight: 1 }} />
                          <Typography id="_fosdg32GEe6V8KKnnZfChA)/Label" variant="h5" component="h1">
                            {t(
                              'service.SelectAnswerVoteDefinition.SelectAnswerVoteDefinition.View.Edit.status::Label.status::LabelWrapper.virtual.VoteEntryBase.SelectAnswerVoteDefinition_View_Edit.service::SelectAnswerVoteDefinition::SelectAnswerVoteDefinition_View_Edit',
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
                            id="User/(esm/_0SJLxFtuEe6Mx9dH3yj5gQ)/EnumerationTypeRadio"
                            shrink={true}
                            size={'small'}
                          >
                            {t(
                              'service.SelectAnswerVoteDefinition.SelectAnswerVoteDefinition.View.Edit.status.status::LabelWrapper.virtual.VoteEntryBase.SelectAnswerVoteDefinition_View_Edit.service::SelectAnswerVoteDefinition::SelectAnswerVoteDefinition_View_Edit',
                              { defaultValue: 'Status' },
                            )}{' '}
                            *
                          </InputLabel>
                          <RadioGroup
                            sx={{ justifyContent: 'space-between', pl: '12px', pt: '6px' }}
                            name="status"
                            id="User/(esm/_0SJLxFtuEe6Mx9dH3yj5gQ)/EnumerationTypeRadio"
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
                      id="User/(esm/_0SJLxFtuEe6Mx9dH3yj5gQ)/EnumerationTypeCombo"
                      label={
                        t(
                          'service.SelectAnswerVoteDefinition.SelectAnswerVoteDefinition.View.Edit.status.virtual.VoteEntryBase.SelectAnswerVoteDefinition_View_Edit.service::SelectAnswerVoteDefinition::SelectAnswerVoteDefinition_View_Edit',
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
                      id="User/(esm/_0SJLyltuEe6Mx9dH3yj5gQ)/TabularReferenceFieldButton"
                      variant={undefined}
                      editMode={editMode}
                      navigateAction={
                        actions.serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntryBaseVirtualIssueOpenPage
                      }
                      refreshCounter={refreshCounter}
                      fetchCall={
                        actions.serviceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntryBaseVirtualIssuePreFetch
                      }
                    >
                      {t(
                        'service.SelectAnswerVoteDefinition.SelectAnswerVoteDefinition.View.Edit.issue.virtual.VoteEntryBase.SelectAnswerVoteDefinition_View_Edit.service::SelectAnswerVoteDefinition::SelectAnswerVoteDefinition_View_Edit',
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
                          id: 'User/(esm/_0SJL0ltuEe6Mx9dH3yj5gQ)/TimestampTypeDateTimeInput',
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
                          const copy = new Map<keyof ServiceSelectAnswerVoteDefinition, string>(prevValidation);
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
                          'service.SelectAnswerVoteDefinition.SelectAnswerVoteDefinition.View.Edit.created.virtual.VoteEntryBase.SelectAnswerVoteDefinition_View_Edit.service::SelectAnswerVoteDefinition::SelectAnswerVoteDefinition_View_Edit',
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
                      id="User/(esm/_0SJL01tuEe6Mx9dH3yj5gQ)/StringTypeTextArea"
                      label={
                        t(
                          'service.SelectAnswerVoteDefinition.SelectAnswerVoteDefinition.View.Edit.description.virtual.VoteEntryBase.SelectAnswerVoteDefinition_View_Edit.service::SelectAnswerVoteDefinition::SelectAnswerVoteDefinition_View_Edit',
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

                  <Grid item xs={12} sm={12}>
                    <Grid
                      id="User/(esm/_jwqEgFtwEe6Mx9dH3yj5gQ)/TabularReferenceFieldRelationDefinedTable)/LabelWrapper"
                      container
                      direction="column"
                      alignItems="center"
                      justifyContent="flex-start"
                      spacing={2}
                    >
                      <Grid item xs={12} sm={12}>
                        <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                          <MdiIcon path="table_rows" sx={{ marginRight: 1 }} />
                          <Typography
                            id="User/(esm/_jwqEgFtwEe6Mx9dH3yj5gQ)/TabularReferenceFieldRelationDefinedTable)/Label"
                            variant="h5"
                            component="h1"
                          >
                            {t(
                              'service.SelectAnswerVoteDefinition.SelectAnswerVoteDefinition.View.Edit.voteSelections::Label.voteSelections::LabelWrapper.virtual.VoteEntryBase.SelectAnswerVoteDefinition_View_Edit.service::SelectAnswerVoteDefinition::SelectAnswerVoteDefinition_View_Edit',
                              { defaultValue: 'VoteSelections' },
                            )}
                          </Typography>
                        </Grid>
                      </Grid>

                      <Grid item xs={12} sm={12}>
                        <Grid
                          id="User/(esm/_jwqEgFtwEe6Mx9dH3yj5gQ)/TabularReferenceFieldRelationDefinedTable"
                          container
                          direction="column"
                          alignItems="stretch"
                          justifyContent="flex-start"
                        >
                          <ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteSelectionsComponent
                            uniqueId={'TMP'}
                            actions={actions}
                            ownerData={data}
                            editMode={editMode}
                            isFormUpdateable={isFormUpdateable}
                            validationError={validation.get('voteSelections')}
                            refreshCounter={refreshCounter}
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={12}>
        <Grid
          id="_fnoGgH2GEe6V8KKnnZfChA)/LabelWrapper"
          container
          direction="column"
          alignItems="center"
          justifyContent="flex-start"
          spacing={2}
        >
          <Grid item xs={12} sm={12}>
            <Grid container direction="row" alignItems="center" justifyContent="flex-start">
              <Typography id="_fnoGgH2GEe6V8KKnnZfChA)/Label" variant="h5" component="h1">
                {t(
                  'service.SelectAnswerVoteDefinition.SelectAnswerVoteDefinition.View.Edit.entries::Label.entries::LabelWrapper.SelectAnswerVoteDefinition_View_Edit.service::SelectAnswerVoteDefinition::SelectAnswerVoteDefinition_View_Edit',
                  { defaultValue: 'Entries' },
                )}
              </Typography>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={12}>
            <Grid
              id="User/(esm/_0SJy2FtuEe6Mx9dH3yj5gQ)/GroupVisualElement"
              container
              direction="row"
              alignItems="stretch"
              justifyContent="flex-start"
              spacing={2}
            >
              <Grid item xs={12} sm={12}>
                <Grid
                  id="User/(esm/_0SJy2VtuEe6Mx9dH3yj5gQ)/TabularReferenceFieldRelationDefinedTable"
                  container
                  direction="column"
                  alignItems="stretch"
                  justifyContent="flex-start"
                >
                  <ServiceSelectAnswerVoteDefinitionSelectAnswerVoteDefinition_View_EditVoteEntriesComponent
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
