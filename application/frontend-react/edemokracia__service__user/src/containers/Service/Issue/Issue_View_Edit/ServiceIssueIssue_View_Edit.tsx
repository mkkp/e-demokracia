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
import { LoadingButton } from '@mui/lab';
import type { JudoIdentifiable } from '@judo/data-api-common';
import { clsx } from 'clsx';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useL10N } from '~/l10n/l10n-context';
import { MdiIcon, ModeledTabs, DropdownButton, useJudoNavigation } from '~/components';
import { isErrorOperationFault, useErrorHandler, uiDateToServiceDate, serviceDateToUiDate } from '~/utilities';

import { DateTimePicker } from '@mui/x-date-pickers';
import type { DateTimeValidationError } from '@mui/x-date-pickers';
import {} from '~/components/widgets';
import { useConfirmationBeforeChange } from '~/hooks';
import {
  ServiceCity,
  ServiceCityQueryCustomizer,
  ServiceCityStored,
  ServiceComment,
  ServiceCommentQueryCustomizer,
  ServiceCommentStored,
  ServiceCon,
  ServiceConQueryCustomizer,
  ServiceConStored,
  ServiceCounty,
  ServiceCountyQueryCustomizer,
  ServiceCountyStored,
  ServiceDistrict,
  ServiceDistrictQueryCustomizer,
  ServiceDistrictStored,
  ServiceIssue,
  ServiceIssueAttachment,
  ServiceIssueAttachmentQueryCustomizer,
  ServiceIssueAttachmentStored,
  ServiceIssueCategory,
  ServiceIssueCategoryQueryCustomizer,
  ServiceIssueCategoryStored,
  ServiceIssueQueryCustomizer,
  ServiceIssueStored,
  ServiceIssueType,
  ServiceIssueTypeQueryCustomizer,
  ServiceIssueTypeStored,
  ServicePro,
  ServiceProQueryCustomizer,
  ServiceProStored,
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
} from '~/services/data-api';
import type { ServiceIssueIssue_View_EditConsComponentActionDefinitions } from './components/ServiceIssueIssue_View_EditConsComponent';
import { ServiceIssueIssue_View_EditConsComponent } from './components/ServiceIssueIssue_View_EditConsComponent';
import type { ServiceIssueIssue_View_EditProsComponentActionDefinitions } from './components/ServiceIssueIssue_View_EditProsComponent';
import { ServiceIssueIssue_View_EditProsComponent } from './components/ServiceIssueIssue_View_EditProsComponent';
import type { ServiceIssueIssue_View_EditAttachmentsComponentActionDefinitions } from './components/ServiceIssueIssue_View_EditAttachmentsComponent';
import { ServiceIssueIssue_View_EditAttachmentsComponent } from './components/ServiceIssueIssue_View_EditAttachmentsComponent';
import type { ServiceIssueIssue_View_EditCategoriesComponentActionDefinitions } from './components/ServiceIssueIssue_View_EditCategoriesComponent';
import { ServiceIssueIssue_View_EditCategoriesComponent } from './components/ServiceIssueIssue_View_EditCategoriesComponent';
import type { ServiceIssueIssue_View_EditCommentsComponentActionDefinitions } from './components/ServiceIssueIssue_View_EditCommentsComponent';
import { ServiceIssueIssue_View_EditCommentsComponent } from './components/ServiceIssueIssue_View_EditCommentsComponent';
import type { ServiceIssueIssue_View_EditIssueTypeComponentActionDefinitions } from './components/ServiceIssueIssue_View_EditIssueTypeComponent';
import { ServiceIssueIssue_View_EditIssueTypeComponent } from './components/ServiceIssueIssue_View_EditIssueTypeComponent';
import type { ServiceIssueIssue_View_EditOwnerComponentActionDefinitions } from './components/ServiceIssueIssue_View_EditOwnerComponent';
import { ServiceIssueIssue_View_EditOwnerComponent } from './components/ServiceIssueIssue_View_EditOwnerComponent';
import type { ServiceIssueIssue_View_EditCityComponentActionDefinitions } from './components/ServiceIssueIssue_View_EditCityComponent';
import { ServiceIssueIssue_View_EditCityComponent } from './components/ServiceIssueIssue_View_EditCityComponent';
import type { ServiceIssueIssue_View_EditCountyComponentActionDefinitions } from './components/ServiceIssueIssue_View_EditCountyComponent';
import { ServiceIssueIssue_View_EditCountyComponent } from './components/ServiceIssueIssue_View_EditCountyComponent';
import type { ServiceIssueIssue_View_EditDistrictComponentActionDefinitions } from './components/ServiceIssueIssue_View_EditDistrictComponent';
import { ServiceIssueIssue_View_EditDistrictComponent } from './components/ServiceIssueIssue_View_EditDistrictComponent';

export interface ServiceIssueIssue_View_EditActionDefinitions
  extends ServiceIssueIssue_View_EditAttachmentsComponentActionDefinitions,
    ServiceIssueIssue_View_EditCategoriesComponentActionDefinitions,
    ServiceIssueIssue_View_EditCityComponentActionDefinitions,
    ServiceIssueIssue_View_EditCommentsComponentActionDefinitions,
    ServiceIssueIssue_View_EditConsComponentActionDefinitions,
    ServiceIssueIssue_View_EditCountyComponentActionDefinitions,
    ServiceIssueIssue_View_EditDistrictComponentActionDefinitions,
    ServiceIssueIssue_View_EditIssueTypeComponentActionDefinitions,
    ServiceIssueIssue_View_EditOwnerComponentActionDefinitions,
    ServiceIssueIssue_View_EditProsComponentActionDefinitions {
  activateForIssueAction?: () => Promise<void>;
  addToFavoritesForIssueAction?: () => Promise<void>;
  closeDebateAction?: () => Promise<void>;
  closeVoteForIssueAction?: () => Promise<void>;
  deleteOrArchiveForIssueAction?: () => Promise<void>;
  removeFromFavoritesForIssueAction?: () => Promise<void>;
  createConArgumentAction?: () => Promise<void>;
  createProArgumentAction?: () => Promise<void>;
  createCommentAction?: () => Promise<void>;
}

export interface ServiceIssueIssue_View_EditProps {
  refreshCounter: number;
  actions: ServiceIssueIssue_View_EditActionDefinitions;

  data: ServiceIssueStored;
  isLoading: boolean;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof ServiceIssue, value: any) => void;
  editMode: boolean;
  validation: Map<keyof ServiceIssue, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof ServiceIssue, string>>>;
  submit: () => Promise<void>;
}

// XMIID: User/(esm/_qCa1YGksEe25ONJ3V89cVA)/TransferObjectViewPageContainer
// Name: service::Issue::Issue_View_Edit
export default function ServiceIssueIssue_View_Edit(props: ServiceIssueIssue_View_EditProps) {
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
    submit,
  } = props;
  const { locale: l10nLocale } = useL10N();

  useConfirmationBeforeChange(
    editMode,
    t('judo.form.navigation.confirmation', {
      defaultValue: 'You have potential unsaved changes in your form, are you sure you would like to navigate away?',
    }),
  );

  return (
    <Grid container>
      <Grid item xs={12} sm={12}>
        <Grid
          id="User/(esm/_qCa1YGksEe25ONJ3V89cVA)/TransferObjectViewVisualElement"
          container
          direction="column"
          alignItems="stretch"
          justifyContent="flex-start"
          spacing={2}
        >
          <Grid item xs={12} sm={12}>
            <Grid
              id="User/(esm/_ZAHfwFxEEe6ma86ynyYZNw)/GroupVisualElement"
              container
              direction="row"
              alignItems="flex-start"
              justifyContent="flex-start"
              spacing={2}
            >
              <Grid item xs={12}>
                <Grid container spacing={2}>
                  {!data.isFavorite && (
                    <Grid item>
                      <LoadingButton
                        id="User/(esm/_knYd0FxEEe6ma86ynyYZNw)/OperationFormVisualElement"
                        loading={isLoading}
                        startIcon={<MdiIcon path="star-plus" />}
                        loadingPosition="start"
                        onClick={
                          actions.addToFavoritesForIssueAction
                            ? async () => {
                                await actions.addToFavoritesForIssueAction!();
                              }
                            : undefined
                        }
                        disabled={editMode}
                      >
                        <span>
                          {t('service.Issue.Issue_View_Edit.addToFavorites', { defaultValue: 'Add to favorites' })}
                        </span>
                      </LoadingButton>
                    </Grid>
                  )}
                  {!data.isNotFavorite && (
                    <Grid item>
                      <LoadingButton
                        id="User/(esm/_knZE4FxEEe6ma86ynyYZNw)/OperationFormVisualElement"
                        loading={isLoading}
                        startIcon={<MdiIcon path="star-minus" />}
                        loadingPosition="start"
                        onClick={
                          actions.removeFromFavoritesForIssueAction
                            ? async () => {
                                await actions.removeFromFavoritesForIssueAction!();
                              }
                            : undefined
                        }
                        disabled={editMode}
                      >
                        <span>
                          {t('service.Issue.Issue_View_Edit.removeFromFavorites', {
                            defaultValue: 'Remove from favorites',
                          })}
                        </span>
                      </LoadingButton>
                    </Grid>
                  )}
                  {!data.isIssueNotActive && (
                    <Grid item>
                      <LoadingButton
                        id="User/(esm/_8M4nYHj_Ee6cB8og8p0UuQ)/OperationFormVisualElement"
                        loading={isLoading}
                        startIcon={<MdiIcon path="vote" />}
                        loadingPosition="start"
                        onClick={
                          actions.closeDebateAction
                            ? async () => {
                                await actions.closeDebateAction!();
                              }
                            : undefined
                        }
                        disabled={editMode}
                      >
                        <span>
                          {t('service.Issue.Issue_View_Edit.closeDebate', {
                            defaultValue: 'Close debate and start vote',
                          })}
                        </span>
                      </LoadingButton>
                    </Grid>
                  )}
                  {!data.isVoteNotClosable && (
                    <Grid item>
                      <LoadingButton
                        id="User/(esm/_pXWdEHkFEe6cB8og8p0UuQ)/OperationFormVisualElement"
                        loading={isLoading}
                        startIcon={<MdiIcon path="lock-check" />}
                        loadingPosition="start"
                        onClick={
                          actions.closeVoteForIssueAction
                            ? async () => {
                                await actions.closeVoteForIssueAction!();
                              }
                            : undefined
                        }
                        disabled={editMode}
                      >
                        <span>{t('service.Issue.Issue_View_Edit.closeVote', { defaultValue: 'Close Vote' })}</span>
                      </LoadingButton>
                    </Grid>
                  )}
                  {!data.isIssueNotDraft && (
                    <Grid item>
                      <LoadingButton
                        id="User/(esm/_FzSAQHkIEe6cB8og8p0UuQ)/OperationFormVisualElement"
                        loading={isLoading}
                        startIcon={<MdiIcon path="lock-open" />}
                        loadingPosition="start"
                        onClick={
                          actions.activateForIssueAction
                            ? async () => {
                                await actions.activateForIssueAction!();
                              }
                            : undefined
                        }
                        disabled={editMode}
                      >
                        <span>{t('service.Issue.Issue_View_Edit.activate', { defaultValue: 'Activate' })}</span>
                      </LoadingButton>
                    </Grid>
                  )}
                  {!data.isIssueNotDeletable && (
                    <Grid item>
                      <LoadingButton
                        id="User/(esm/_FzSnUHkIEe6cB8og8p0UuQ)/OperationFormVisualElement"
                        loading={isLoading}
                        startIcon={<MdiIcon path="delete" />}
                        loadingPosition="start"
                        onClick={
                          actions.deleteOrArchiveForIssueAction
                            ? async () => {
                                await actions.deleteOrArchiveForIssueAction!();
                              }
                            : undefined
                        }
                        disabled={editMode}
                      >
                        <span>{t('service.Issue.Issue_View_Edit.deleteOrArchive', { defaultValue: 'Delete' })}</span>
                      </LoadingButton>
                    </Grid>
                  )}
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={12}>
            <Card id="_WXE2cI7EEe6rlbj78nBB0Q)/LabelWrapper">
              <CardContent>
                <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
                  <Grid item xs={12} sm={12}>
                    <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                      <MdiIcon path="clipboard" sx={{ marginRight: 1 }} />
                      <Typography id="_WXE2cI7EEe6rlbj78nBB0Q)/Label" variant="h5" component="h1">
                        {t('service.Issue.Issue_View_Edit.issue.Icon', { defaultValue: 'Issue' })}
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid item xs={12} sm={12}>
                    <Grid
                      id="User/(esm/_wB_RsG47Ee2siJt-xjHAyw)/GroupVisualElement"
                      container
                      direction="row"
                      alignItems="stretch"
                      justifyContent="flex-start"
                      spacing={2}
                    >
                      <Grid item xs={12} sm={12} md={8.0}>
                        <ServiceIssueIssue_View_EditIssueTypeComponent
                          disabled={false || !isFormUpdateable()}
                          ownerData={data}
                          editMode={editMode}
                          storeDiff={storeDiff}
                          validationError={validation.get('issueType')}
                          actions={actions}
                        />
                      </Grid>

                      <Grid item xs={12} sm={12} md={4.0}>
                        <TextField
                          required={false}
                          name="defaultVoteType"
                          id="User/(esm/_h1CAMOMdEe2Bgcx6em3jZg)/EnumerationTypeCombo"
                          autoFocus
                          label={
                            t('service.Issue.Issue_View_Edit.defaultVoteType', {
                              defaultValue: 'Default Vote Type',
                            }) as string
                          }
                          value={data.defaultVoteType || ''}
                          className={clsx({
                            'JUDO-viewMode': !editMode,
                            'JUDO-required': false,
                          })}
                          disabled={isLoading}
                          error={!!validation.get('defaultVoteType')}
                          helperText={validation.get('defaultVoteType')}
                          onChange={(event) => {
                            storeDiff('defaultVoteType', event.target.value);
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
                          <MenuItem
                            id="User/(esm/_r9r9IuMbEe2Bgcx6em3jZg)/EnumerationTypeMember"
                            value={'YES_NO_ABSTAIN'}
                          >
                            {t('enumerations.VoteType.YES_NO_ABSTAIN', { defaultValue: 'YES_NO_ABSTAIN' })}
                          </MenuItem>
                          <MenuItem
                            id="User/(esm/_r9r9I-MbEe2Bgcx6em3jZg)/EnumerationTypeMember"
                            value={'SELECT_ANSWER'}
                          >
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

                      <Grid item xs={12} sm={12} md={4.0}>
                        <TextField
                          required={true}
                          name="title"
                          id="User/(esm/_BvyiQGkwEe25ONJ3V89cVA)/StringTypeTextInput"
                          label={t('service.Issue.Issue_View_Edit.title', { defaultValue: 'Title' }) as string}
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
                        <TextField
                          required={true}
                          name="status"
                          id="User/(esm/_Bw7xwGkwEe25ONJ3V89cVA)/EnumerationTypeCombo"
                          label={t('service.Issue.Issue_View_Edit.status', { defaultValue: 'Status' }) as string}
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
                          <MenuItem id="User/(esm/_Es6EYGkUEe25ONJ3V89cVA)/EnumerationTypeMember" value={'CREATED'}>
                            {t('enumerations.IssueStatus.CREATED', { defaultValue: 'CREATED' })}
                          </MenuItem>
                          <MenuItem id="User/(esm/_F1DYMGkUEe25ONJ3V89cVA)/EnumerationTypeMember" value={'PENDING'}>
                            {t('enumerations.IssueStatus.PENDING', { defaultValue: 'PENDING' })}
                          </MenuItem>
                          <MenuItem id="User/(esm/_IO7ZoGkUEe25ONJ3V89cVA)/EnumerationTypeMember" value={'ACTIVE'}>
                            {t('enumerations.IssueStatus.ACTIVE', { defaultValue: 'ACTIVE' })}
                          </MenuItem>
                          <MenuItem id="User/(esm/_JnJJwGkUEe25ONJ3V89cVA)/EnumerationTypeMember" value={'CLOSED'}>
                            {t('enumerations.IssueStatus.CLOSED', { defaultValue: 'CLOSED' })}
                          </MenuItem>
                          <MenuItem id="User/(esm/_b31-cF4_Ee6vsex_cZNQbQ)/EnumerationTypeMember" value={'ARCHIVED'}>
                            {t('enumerations.IssueStatus.ARCHIVED', { defaultValue: 'ARCHIVED' })}
                          </MenuItem>
                          <MenuItem id="User/(esm/_pqmHAHj2Ee6cB8og8p0UuQ)/EnumerationTypeMember" value={'VOTING'}>
                            {t('enumerations.IssueStatus.VOTING', { defaultValue: 'VOTING' })}
                          </MenuItem>
                        </TextField>
                      </Grid>

                      <Grid item xs={12} sm={12} md={4.0}>
                        <DateTimePicker
                          ampm={false}
                          ampmInClock={false}
                          className={clsx({
                            'JUDO-viewMode': !editMode,
                            'JUDO-required': false,
                          })}
                          slotProps={{
                            textField: {
                              id: 'User/(esm/_BvJpEGkwEe25ONJ3V89cVA)/TimestampTypeDateTimeInput',
                              required: false,
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
                              const copy = new Map<keyof ServiceIssue, string>(prevValidation);
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
                          label={t('service.Issue.Issue_View_Edit.created', { defaultValue: 'Created' }) as string}
                          value={serviceDateToUiDate(data.created ?? null)}
                          readOnly={true || !isFormUpdateable()}
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
                          id="User/(esm/_BwVU0GkwEe25ONJ3V89cVA)/StringTypeTextArea"
                          label={
                            t('service.Issue.Issue_View_Edit.description', { defaultValue: 'Description' }) as string
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
                        <ServiceIssueIssue_View_EditOwnerComponent
                          disabled={false || !isFormUpdateable()}
                          ownerData={data}
                          editMode={editMode}
                          storeDiff={storeDiff}
                          validationError={validation.get('owner')}
                          actions={actions}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          <Grid container item xs={12} sm={12}>
            <ModeledTabs
              id="User/(esm/_hZfckId8Ee2kLcMqsIbMgQ)/TabBarVisualElement"
              ownerData={data}
              validation={validation}
              orientation='horizontal'
              childTabs={[
                {
                  id: 'User/(esm/_OgpR0Id9Ee2kLcMqsIbMgQ)/GroupTab',
                  name: 'service.Issue.Issue_View_Edit.arguments',
                  label: t('service.Issue.Issue_View_Edit.arguments', { defaultValue: 'Arguments' }) as string,
                  disabled: isLoading,
                  hidden: false,
                  icon: 'wechat',
                  nestedDataKeys: ['cons', 'pros'],
                },
                {
                  id: 'User/(esm/_yCDu0NvSEe2Bgcx6em3jZg)/GroupTab',
                  name: 'service.Issue.Issue_View_Edit.area',
                  label: t('service.Issue.Issue_View_Edit.area', { defaultValue: 'Area' }) as string,
                  disabled: isLoading,
                  hidden: false,
                  icon: 'map',
                  nestedDataKeys: ['city', 'county', 'district'],
                },
                {
                  id: 'User/(esm/_x23N8Id8Ee2kLcMqsIbMgQ)/GroupTab',
                  name: 'service.Issue.Issue_View_Edit.attachments',
                  label: t('service.Issue.Issue_View_Edit.attachments', { defaultValue: 'Attachments' }) as string,
                  disabled: isLoading,
                  hidden: false,
                  icon: 'paperclip',
                  nestedDataKeys: ['attachments'],
                },
                {
                  id: 'User/(esm/_Cb01EId9Ee2kLcMqsIbMgQ)/GroupTab',
                  name: 'service.Issue.Issue_View_Edit.categories',
                  label: t('service.Issue.Issue_View_Edit.categories', { defaultValue: 'Categories' }) as string,
                  disabled: isLoading,
                  hidden: false,
                  icon: 'file-tree',
                  nestedDataKeys: ['categories'],
                },
                {
                  id: 'User/(esm/__yV9oIybEe2VSOmaAz6G9Q)/GroupTab',
                  name: 'service.Issue.Issue_View_Edit.comments',
                  label: t('service.Issue.Issue_View_Edit.comments', { defaultValue: 'Comments' }) as string,
                  disabled: isLoading,
                  hidden: false,
                  icon: 'comment-text-multiple',
                  nestedDataKeys: ['comments'],
                },
              ]}
            >
              <Grid item xs={12} sm={12}>
                <Grid
                  id="User/(esm/_OgpR0Id9Ee2kLcMqsIbMgQ)/GroupVisualElement"
                  container
                  direction="row"
                  alignItems="flex-start"
                  justifyContent="flex-start"
                  spacing={2}
                >
                  <Grid item xs={12} sm={12} md={6.0}>
                    <Card id="_WXGroI7EEe6rlbj78nBB0Q)/LabelWrapper">
                      <CardContent>
                        <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
                          <Grid item xs={12} sm={12}>
                            <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                              <MdiIcon path="chat-minus" sx={{ marginRight: 1 }} />
                              <Typography id="_WXGroI7EEe6rlbj78nBB0Q)/Label" variant="h5" component="h1">
                                {t('service.Issue.Issue_View_Edit.cons.Icon', { defaultValue: 'Cons' })}
                              </Typography>
                            </Grid>
                          </Grid>

                          <Grid item xs={12} sm={12}>
                            <Grid
                              id="User/(esm/_qJPPCXjvEe6cB8og8p0UuQ)/GroupVisualElement"
                              container
                              direction="row"
                              alignItems="stretch"
                              justifyContent="flex-start"
                              spacing={2}
                            >
                              <Grid item xs={12} sm={12}>
                                <Grid
                                  id="User/(esm/_qJPPCnjvEe6cB8og8p0UuQ)/GroupVisualElement"
                                  container
                                  direction="row"
                                  alignItems="flex-start"
                                  justifyContent="flex-start"
                                  spacing={2}
                                >
                                  <Grid item xs={12} sm={12}>
                                    <LoadingButton
                                      id="User/(esm/_qJPPC3jvEe6cB8og8p0UuQ)/OperationFormVisualElement"
                                      loading={isLoading}
                                      variant={undefined}
                                      startIcon={<MdiIcon path="chat-minus" />}
                                      loadingPosition="start"
                                      onClick={async () => {
                                        if (actions.createConArgumentAction) {
                                          await actions.createConArgumentAction!();
                                        }
                                      }}
                                      disabled={!actions.createConArgumentAction || editMode}
                                    >
                                      <span>
                                        {t('service.Issue.Issue_View_Edit.createConArgument', {
                                          defaultValue: 'Add Con Argument',
                                        })}
                                      </span>
                                    </LoadingButton>
                                  </Grid>
                                </Grid>
                              </Grid>

                              <Grid item xs={12} sm={12}>
                                <Grid
                                  id="User/(esm/_qJPPDHjvEe6cB8og8p0UuQ)/GroupVisualElement"
                                  container
                                  direction="row"
                                  alignItems="flex-start"
                                  justifyContent="flex-start"
                                  spacing={2}
                                >
                                  <Grid item xs={12} sm={12}>
                                    <Grid
                                      id="User/(esm/_qJPPDXjvEe6cB8og8p0UuQ)/TabularReferenceFieldRelationDefinedTable"
                                      container
                                      direction="column"
                                      alignItems="stretch"
                                      justifyContent="flex-start"
                                    >
                                      <ServiceIssueIssue_View_EditConsComponent
                                        uniqueId={
                                          'User/(esm/_qJPPDXjvEe6cB8og8p0UuQ)/TabularReferenceFieldRelationDefinedTable'
                                        }
                                        actions={actions}
                                        ownerData={data}
                                        editMode={editMode}
                                        isFormUpdateable={isFormUpdateable}
                                        validationError={validation.get('cons')}
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

                  <Grid item xs={12} sm={12} md={6.0}>
                    <Card id="_WXJu8I7EEe6rlbj78nBB0Q)/LabelWrapper">
                      <CardContent>
                        <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
                          <Grid item xs={12} sm={12}>
                            <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                              <MdiIcon path="chat-plus" sx={{ marginRight: 1 }} />
                              <Typography id="_WXJu8I7EEe6rlbj78nBB0Q)/Label" variant="h5" component="h1">
                                {t('service.Issue.Issue_View_Edit.pros.Icon', { defaultValue: 'Pros' })}
                              </Typography>
                            </Grid>
                          </Grid>

                          <Grid item xs={12} sm={12}>
                            <Grid
                              id="User/(esm/_qJPPAXjvEe6cB8og8p0UuQ)/GroupVisualElement"
                              container
                              direction="row"
                              alignItems="stretch"
                              justifyContent="flex-start"
                              spacing={2}
                            >
                              <Grid item xs={12} sm={12}>
                                <Grid
                                  id="User/(esm/_qJPPAnjvEe6cB8og8p0UuQ)/GroupVisualElement"
                                  container
                                  direction="row"
                                  alignItems="flex-start"
                                  justifyContent="flex-start"
                                  spacing={2}
                                >
                                  <Grid item xs={12} sm={12}>
                                    <LoadingButton
                                      id="User/(esm/_qJPPA3jvEe6cB8og8p0UuQ)/OperationFormVisualElement"
                                      loading={isLoading}
                                      variant={undefined}
                                      startIcon={<MdiIcon path="chat-plus" />}
                                      loadingPosition="start"
                                      onClick={async () => {
                                        if (actions.createProArgumentAction) {
                                          await actions.createProArgumentAction!();
                                        }
                                      }}
                                      disabled={!actions.createProArgumentAction || editMode}
                                    >
                                      <span>
                                        {t('service.Issue.Issue_View_Edit.createProArgument', {
                                          defaultValue: 'Add Pro Argument',
                                        })}
                                      </span>
                                    </LoadingButton>
                                  </Grid>
                                </Grid>
                              </Grid>

                              <Grid item xs={12} sm={12}>
                                <Grid
                                  id="User/(esm/_qJPPBHjvEe6cB8og8p0UuQ)/GroupVisualElement"
                                  container
                                  direction="row"
                                  alignItems="flex-start"
                                  justifyContent="flex-start"
                                  spacing={2}
                                >
                                  <Grid item xs={12} sm={12}>
                                    <Grid
                                      id="User/(esm/_qJPPBXjvEe6cB8og8p0UuQ)/TabularReferenceFieldRelationDefinedTable"
                                      container
                                      direction="column"
                                      alignItems="stretch"
                                      justifyContent="flex-start"
                                    >
                                      <ServiceIssueIssue_View_EditProsComponent
                                        uniqueId={
                                          'User/(esm/_qJPPBXjvEe6cB8og8p0UuQ)/TabularReferenceFieldRelationDefinedTable'
                                        }
                                        actions={actions}
                                        ownerData={data}
                                        editMode={editMode}
                                        isFormUpdateable={isFormUpdateable}
                                        validationError={validation.get('pros')}
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
                </Grid>
              </Grid>

              <Grid item xs={12} sm={12}>
                <Grid
                  id="User/(esm/_yCDu0NvSEe2Bgcx6em3jZg)/GroupVisualElement"
                  container
                  direction="row"
                  alignItems="flex-start"
                  justifyContent="flex-start"
                  spacing={2}
                >
                  <Grid item xs={12} sm={12} md={4.0}>
                    <ServiceIssueIssue_View_EditCountyComponent
                      disabled={false || !isFormUpdateable()}
                      ownerData={data}
                      editMode={editMode}
                      storeDiff={storeDiff}
                      validationError={validation.get('county')}
                      actions={actions}
                    />
                  </Grid>

                  <Grid item xs={12} sm={12} md={4.0}>
                    <ServiceIssueIssue_View_EditCityComponent
                      disabled={false || !isFormUpdateable()}
                      ownerData={data}
                      editMode={editMode}
                      storeDiff={storeDiff}
                      validationError={validation.get('city')}
                      actions={actions}
                    />
                  </Grid>

                  <Grid item xs={12} sm={12} md={4.0}>
                    <ServiceIssueIssue_View_EditDistrictComponent
                      disabled={false || !isFormUpdateable()}
                      ownerData={data}
                      editMode={editMode}
                      storeDiff={storeDiff}
                      validationError={validation.get('district')}
                      actions={actions}
                    />
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12} sm={12}>
                <Grid
                  id="User/(esm/_x23N8Id8Ee2kLcMqsIbMgQ)/GroupVisualElement"
                  container
                  direction="row"
                  alignItems="flex-start"
                  justifyContent="flex-start"
                  spacing={2}
                >
                  <Grid item xs={12} sm={12}>
                    <Grid
                      id="User/(esm/_6kmaIId8Ee2kLcMqsIbMgQ)/TabularReferenceFieldRelationDefinedTable"
                      container
                      direction="column"
                      alignItems="stretch"
                      justifyContent="flex-start"
                    >
                      <ServiceIssueIssue_View_EditAttachmentsComponent
                        uniqueId={'User/(esm/_6kmaIId8Ee2kLcMqsIbMgQ)/TabularReferenceFieldRelationDefinedTable'}
                        actions={actions}
                        ownerData={data}
                        editMode={editMode}
                        isFormUpdateable={isFormUpdateable}
                        validationError={validation.get('attachments')}
                        refreshCounter={refreshCounter}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12} sm={12}>
                <Grid
                  id="User/(esm/_Cb01EId9Ee2kLcMqsIbMgQ)/GroupVisualElement"
                  container
                  direction="row"
                  alignItems="flex-start"
                  justifyContent="flex-start"
                  spacing={2}
                >
                  <Grid item xs={12} sm={12}>
                    <Grid
                      id="User/(esm/_LRJ3AId9Ee2kLcMqsIbMgQ)/TabularReferenceFieldRelationDefinedTable"
                      container
                      direction="column"
                      alignItems="stretch"
                      justifyContent="flex-start"
                    >
                      <ServiceIssueIssue_View_EditCategoriesComponent
                        uniqueId={'User/(esm/_LRJ3AId9Ee2kLcMqsIbMgQ)/TabularReferenceFieldRelationDefinedTable'}
                        actions={actions}
                        ownerData={data}
                        editMode={editMode}
                        isFormUpdateable={isFormUpdateable}
                        validationError={validation.get('categories')}
                        refreshCounter={refreshCounter}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12} sm={12}>
                <Grid
                  id="User/(esm/__yV9oIybEe2VSOmaAz6G9Q)/GroupVisualElement"
                  container
                  direction="row"
                  alignItems="flex-start"
                  justifyContent="flex-start"
                  spacing={2}
                >
                  <Grid item xs={12} sm={12}>
                    <Grid
                      id="User/(esm/_NSnZ0IyeEe2VSOmaAz6G9Q)/GroupVisualElement"
                      container
                      direction="row"
                      alignItems="flex-start"
                      justifyContent="flex-start"
                      spacing={2}
                    >
                      <Grid item xs={12} sm={12} md={4.0}>
                        <LoadingButton
                          id="User/(esm/_S8tEQIydEe2VSOmaAz6G9Q)/OperationFormVisualElement"
                          loading={isLoading}
                          variant={undefined}
                          startIcon={<MdiIcon path="comment-text-multiple" />}
                          loadingPosition="start"
                          onClick={async () => {
                            if (actions.createCommentAction) {
                              await actions.createCommentAction!();
                            }
                          }}
                          disabled={!actions.createCommentAction || editMode}
                        >
                          <span>
                            {t('service.Issue.Issue_View_Edit.createComment', { defaultValue: 'Add comment' })}
                          </span>
                        </LoadingButton>
                      </Grid>

                      <Grid item xs={12} sm={12}>
                        <Grid
                          id="User/(esm/_mvouIIybEe2VSOmaAz6G9Q)/TabularReferenceFieldRelationDefinedTable"
                          container
                          direction="column"
                          alignItems="stretch"
                          justifyContent="flex-start"
                        >
                          <ServiceIssueIssue_View_EditCommentsComponent
                            uniqueId={'User/(esm/_mvouIIybEe2VSOmaAz6G9Q)/TabularReferenceFieldRelationDefinedTable'}
                            actions={actions}
                            ownerData={data}
                            editMode={editMode}
                            isFormUpdateable={isFormUpdateable}
                            validationError={validation.get('comments')}
                            refreshCounter={refreshCounter}
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </ModeledTabs>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
