//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPagesForRouting(#application)
// Path expression: #pageIndexPath(#self)
// Template name: actor/src/pages/index.tsx
// Template file: actor/src/pages/index.tsx.hbs
// Page name: edemokracia::admin::Con.pros#View
// Page owner name: edemokracia::admin::Admin
// Page DataElement name: pros
// Page DataElement owner name: edemokracia::admin::Con

import type { FC } from 'react';
import { useEffect, useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Container, Grid, Button, Card, CardContent, InputAdornment, TextField, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import type { DateValidationError, DateTimeValidationError, TimeValidationError } from '@mui/x-date-pickers';
import { DateTimePicker } from '@mui/x-date-pickers';
import { OBJECTCLASS } from '@pandino/pandino-api';
import { useSnackbar } from 'notistack';
import { ComponentProxy } from '@pandino/react-hooks';
import { useParams } from 'react-router-dom';
import { MdiIcon, ModeledTabs, PageHeader, DropdownButton, CustomBreadcrumb, useJudoNavigation } from '~/components';
import { useRangeDialog } from '~/components/dialog';
import { AssociationButton, BinaryInput, CollectionAssociationButton, NumericInput } from '~/components/widgets';
import {
  useErrorHandler,
  ERROR_PROCESSOR_HOOK_INTERFACE_KEY,
  fileHandling,
  passesLocalValidation,
  processQueryCustomizer,
  uiDateToServiceDate,
  serviceDateToUiDate,
  uiTimeToServiceTime,
  serviceTimeToUiTime,
  stringToBooleanSelect,
  booleanToStringSelect,
} from '~/utilities';
import { useConfirmationBeforeChange } from '~/hooks';
import { toastConfig, dividerHeight } from '~/config';
import { useL10N } from '~/l10n/l10n-context';
import { CUSTOM_VISUAL_ELEMENT_INTERFACE_KEY, CustomFormVisualElementProps } from '~/custom';
import type { JudoIdentifiable } from '@judo/data-api-common';
import { mainContainerPadding } from '~/theme';
import { PageContainerTransition } from '~/theme/animations';
import { clsx } from 'clsx';

import {
  AdminComment,
  AdminCommentQueryCustomizer,
  AdminCommentStored,
  AdminCon,
  AdminConQueryCustomizer,
  AdminConStored,
  AdminPro,
  AdminProQueryCustomizer,
  AdminProStored,
  AdminUser,
  AdminUserQueryCustomizer,
  AdminUserStored,
} from '~/generated/data-api';
import { adminConServiceForClassImpl, adminProServiceForClassImpl } from '~/generated/data-axios';

import {
  useAdminProVoteUpAction,
  useAdminProVoteDownAction,
  useButtonNavigateVotesAction,
  useAdminProCreateSubArgumentAction,
  useAdminProCreateCommentAction,
} from './actions';

import { PageActions } from './components/PageActions';
import { CreatedByLink } from './components/CreatedByLink';
import { ConsTable } from './components/ConsTable';
import { ProsTable } from './components/ProsTable';
import { CommentsTable } from './components/CommentsTable';

/**
 * Name: edemokracia::admin::Con.pros#View
 * Is Access: false
 * Type: View
 * Edit Mode Available: true
 **/
export default function AdminConProsView() {
  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { signedIdentifier } = useParams();

  const { openRangeDialog } = useRangeDialog();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const { locale: l10nLocale } = useL10N();

  const handleFetchError = useErrorHandler(
    `(&(${OBJECTCLASS}=${ERROR_PROCESSOR_HOOK_INTERFACE_KEY})(operation=Fetch))`,
  );
  const handleUpdateError = useErrorHandler<AdminPro>(
    `(&(${OBJECTCLASS}=${ERROR_PROCESSOR_HOOK_INTERFACE_KEY})(operation=Update)(component=AdminConProsView))`,
  );
  const handleDeleteError = useErrorHandler<AdminPro>(
    `(&(${OBJECTCLASS}=${ERROR_PROCESSOR_HOOK_INTERFACE_KEY})(operation=Delete)(component=AdminConProsView))`,
  );
  const { enqueueSnackbar } = useSnackbar();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [refreshCounter, setRefreshCounter] = useState<number>(0);
  const [data, setData] = useState<AdminProStored>({} as unknown as AdminProStored);
  const [payloadDiff, setPayloadDiff] = useState<Record<keyof AdminProStored, any>>(
    {} as unknown as Record<keyof AdminProStored, any>,
  );
  const [editMode, setEditMode] = useState<boolean>(false);
  const storeDiff: (attributeName: keyof AdminProStored, value: any) => void = useCallback(
    (attributeName: keyof AdminProStored, value: any) => {
      const dateTypes: string[] = [];
      const dateTimeTypes: string[] = ['created'];
      const timeTypes: string[] = [];
      if (dateTypes.includes(attributeName as string)) {
        payloadDiff[attributeName] = uiDateToServiceDate(value);
      } else if (dateTimeTypes.includes(attributeName as string)) {
        payloadDiff[attributeName] = value;
      } else if (timeTypes.includes(attributeName as string)) {
        payloadDiff[attributeName] = uiTimeToServiceTime(value);
      } else {
        payloadDiff[attributeName] = value;
      }
      setData({ ...data, [attributeName]: value });
      if (!editMode) {
        setEditMode(true);
      }
    },
    [data],
  );
  const [validation, setValidation] = useState<Map<keyof AdminPro, string>>(new Map<keyof AdminPro, string>());

  const queryCustomizer: AdminProQueryCustomizer = {
    _mask:
      '{title,created,description,upVotes,downVotes,createdByName,createdBy{representation},pros{title,upVotes,downVotes},cons{title,upVotes,downVotes},comments{created,comment,createdByName,upVotes,downVotes}}',
  };

  const adminProVoteUpAction = useAdminProVoteUpAction();
  const adminProVoteDownAction = useAdminProVoteDownAction();
  const buttonNavigateVotesAction = useButtonNavigateVotesAction();
  const adminProCreateSubArgumentAction = useAdminProCreateSubArgumentAction();
  const adminProCreateCommentAction = useAdminProCreateCommentAction();

  const title: string = t('admin.ProView', { defaultValue: 'View / Edit Pro' });

  const isFormUpdateable = useCallback(() => {
    return true && typeof data?.__updateable === 'boolean' && data?.__updateable;
  }, [data]);

  const isFormDeleteable = useCallback(() => {
    return true && typeof data?.__deleteable === 'boolean' && data?.__deleteable;
  }, [data]);

  useConfirmationBeforeChange(
    editMode,
    t('judo.form.navigation.confirmation', {
      defaultValue: 'You have potential unsaved changes in your form, are you sure you would like to navigate away?',
    }),
  );

  async function fetchData() {
    setIsLoading(true);

    try {
      const res = await adminProServiceForClassImpl.refresh(
        { __signedIdentifier: signedIdentifier } as JudoIdentifiable<AdminPro>,
        processQueryCustomizer(queryCustomizer),
      );

      setData(res);
      setPayloadDiff({
        __identifier: res.__identifier,
        __signedIdentifier: res.__signedIdentifier,
        __version: res.__version,
        __entityType: res.__entityType,
      } as Record<keyof AdminProStored, any>);
    } catch (error) {
      handleFetchError(error);
    } finally {
      setIsLoading(false);
      setRefreshCounter((prevCounter) => prevCounter + 1);
    }
  }

  async function saveData() {
    setIsLoading(true);

    try {
      const res = await adminProServiceForClassImpl.update(payloadDiff);

      if (res) {
        enqueueSnackbar(t('judo.action.save.success', { defaultValue: 'Changes saved' }), {
          variant: 'success',
          ...toastConfig.success,
        });
        await fetchData();
        setEditMode(false);
      }
    } catch (error) {
      handleUpdateError(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  }

  async function deleteData() {
    setIsLoading(true);

    try {
      await adminProServiceForClassImpl.delete(data);

      back();
    } catch (error) {
      handleDeleteError(error, undefined, data);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setValidation(new Map<keyof AdminPro, string>());
  }, [editMode]);

  return (
    <>
      <PageHeader title={title}>
        <PageActions
          data={data}
          fetchData={fetchData}
          editMode={editMode}
          setEditMode={setEditMode}
          isLoading={isLoading}
          saveData={saveData}
          deleteData={deleteData}
        />
      </PageHeader>
      <Container component="main" maxWidth="xl">
        <PageContainerTransition>
          <Box sx={mainContainerPadding}>
            <Grid
              className="relation-page-data"
              container
              spacing={2}
              direction="column"
              alignItems="stretch"
              justifyContent="flex-start"
            >
              <Grid item xs={12} sm={12}>
                <Card id="FlexedemokraciaAdminAdminEdemokraciaAdminConProsViewDefaultProViewProLabelWrapper">
                  <CardContent>
                    <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
                      <Grid item xs={12} sm={12}>
                        <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                          <MdiIcon path="chat-plus" sx={{ marginRight: 1 }} />
                          <Typography
                            id="LabeledemokraciaAdminAdminEdemokraciaAdminConProsViewDefaultProViewProLabelWrapperProLabel"
                            variant="h6"
                            component="h1"
                          >
                            {t('admin.ProView.pro.Label', { defaultValue: 'Pro' })}
                          </Typography>
                        </Grid>
                      </Grid>

                      <Grid item xs={12} sm={12}>
                        <Grid
                          id="FlexedemokraciaAdminAdminEdemokraciaAdminConProsViewDefaultProViewProLabelWrapperPro"
                          container
                          direction="row"
                          alignItems="stretch"
                          justifyContent="flex-start"
                          spacing={2}
                        >
                          <Grid item xs={12} sm={12} md={6.0}>
                            <TextField
                              required={true}
                              name="title"
                              id="TextInputedemokraciaAdminAdminEdemokraciaAdminConProsViewDefaultProViewProLabelWrapperProTitle"
                              label={t('admin.ProView.title', { defaultValue: 'Title' }) as string}
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

                          <Grid item xs={12} sm={12} md={3.0}>
                            <DateTimePicker
                              ampm={false}
                              ampmInClock={false}
                              className={clsx({
                                'JUDO-viewMode': !editMode,
                                'JUDO-required': true,
                              })}
                              slotProps={{
                                textField: {
                                  id: 'DateTimeInputedemokraciaAdminAdminEdemokraciaAdminConProsViewDefaultProViewProLabelWrapperProCreated',
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
                                  const copy = new Map<keyof AdminPro, string>(prevValidation);
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
                              label={t('admin.ProView.created', { defaultValue: 'Created' }) as string}
                              value={serviceDateToUiDate(data.created ?? null)}
                              readOnly={false || !isFormUpdateable()}
                              disabled={isLoading}
                              onChange={(newValue: Date) => {
                                storeDiff('created', newValue);
                              }}
                            />
                          </Grid>

                          <Grid item xs={12} sm={12} md={3.0}>
                            <CreatedByLink
                              ownerData={data}
                              readOnly={true || !isFormUpdateable()}
                              disabled={isLoading}
                              editMode={editMode}
                              fetchOwnerData={fetchData}
                              storeDiff={storeDiff}
                              validation={validation}
                            />
                          </Grid>

                          <Grid item xs={12} sm={12}>
                            <TextField
                              required={true}
                              name="description"
                              id="TextAreaedemokraciaAdminAdminEdemokraciaAdminConProsViewDefaultProViewProLabelWrapperProDescription"
                              label={t('admin.ProView.description', { defaultValue: 'Description' }) as string}
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

                          <Grid item xs={12} sm={12} md={1.0}>
                            <LoadingButton
                              id="CallOperationActionedemokraciaAdminAdminEdemokraciaAdminConProsViewEdemokraciaAdminAdminEdemokraciaAdminProVoteUpButtonCallOperation"
                              loading={isLoading}
                              variant={undefined}
                              startIcon={<MdiIcon path="thumb-up" />}
                              loadingPosition="start"
                              onClick={async () => {
                                try {
                                  setIsLoading(true);
                                  await adminProVoteUpAction(data, () => fetchData());
                                } finally {
                                  setIsLoading(false);
                                }
                              }}
                              disabled={editMode}
                            >
                              <span>{t('admin.ProView.pros.voteUp.ButtonCallOperation', { defaultValue: '' })}</span>
                            </LoadingButton>
                          </Grid>

                          <Grid item xs={12} sm={12} md={1.0}>
                            <NumericInput
                              required={false}
                              name="upVotes"
                              id="NumericInputedemokraciaAdminAdminEdemokraciaAdminConProsViewDefaultProViewProLabelWrapperProUpVotes"
                              label={t('admin.ProView.upVotes', { defaultValue: '' }) as string}
                              customInput={TextField}
                              value={data.upVotes ?? ''}
                              className={clsx({
                                'JUDO-viewMode': !editMode,
                                'JUDO-required': false,
                              })}
                              disabled={isLoading}
                              error={!!validation.get('upVotes')}
                              helperText={validation.get('upVotes')}
                              onValueChange={(values, sourceInfo) => {
                                storeDiff('upVotes', values.floatValue === undefined ? null : values.floatValue);
                              }}
                              InputLabelProps={{ shrink: true }}
                              InputProps={{
                                readOnly: true || !isFormUpdateable(),
                              }}
                            />
                          </Grid>

                          <Grid item xs={12} sm={12} md={1.0}>
                            <Grid container sx={{ height: dividerHeight }}></Grid>
                          </Grid>

                          <Grid item xs={12} sm={12} md={1.0}>
                            <LoadingButton
                              id="CallOperationActionedemokraciaAdminAdminEdemokraciaAdminConProsViewEdemokraciaAdminAdminEdemokraciaAdminProVoteDownButtonCallOperation"
                              loading={isLoading}
                              variant={undefined}
                              startIcon={<MdiIcon path="thumb-down" />}
                              loadingPosition="start"
                              onClick={async () => {
                                try {
                                  setIsLoading(true);
                                  await adminProVoteDownAction(data, () => fetchData());
                                } finally {
                                  setIsLoading(false);
                                }
                              }}
                              disabled={editMode}
                            >
                              <span>{t('admin.ProView.pros.voteDown.ButtonCallOperation', { defaultValue: '' })}</span>
                            </LoadingButton>
                          </Grid>

                          <Grid item xs={12} sm={12} md={1.0}>
                            <NumericInput
                              required={false}
                              name="downVotes"
                              id="NumericInputedemokraciaAdminAdminEdemokraciaAdminConProsViewDefaultProViewProLabelWrapperProDownVotes"
                              label={t('admin.ProView.downVotes', { defaultValue: '' }) as string}
                              customInput={TextField}
                              value={data.downVotes ?? ''}
                              className={clsx({
                                'JUDO-viewMode': !editMode,
                                'JUDO-required': false,
                              })}
                              disabled={isLoading}
                              error={!!validation.get('downVotes')}
                              helperText={validation.get('downVotes')}
                              onValueChange={(values, sourceInfo) => {
                                storeDiff('downVotes', values.floatValue === undefined ? null : values.floatValue);
                              }}
                              InputLabelProps={{ shrink: true }}
                              InputProps={{
                                readOnly: true || !isFormUpdateable(),
                              }}
                            />
                          </Grid>

                          <Grid item xs={12} sm={12} md={1.0}>
                            <Grid container sx={{ height: dividerHeight }}></Grid>
                          </Grid>

                          <Grid item xs={12} sm={12} md={2.0}>
                            <CollectionAssociationButton
                              id="NavigationToPageActionedemokraciaAdminAdminEdemokraciaAdminConProsViewEdemokraciaAdminAdminEdemokraciaAdminProVotesButtonNavigate"
                              variant={undefined}
                              editMode={editMode}
                              navigateAction={() => buttonNavigateVotesAction(data)}
                            >
                              {t('admin.ProView.votes.ButtonNavigate', { defaultValue: 'Votes' })}
                              <MdiIcon path="arrow-right" />
                            </CollectionAssociationButton>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>

              <Grid container item xs={12} sm={12}>
                <ModeledTabs
                  id="TabControlleredemokraciaAdminAdminEdemokraciaAdminConProsViewDefaultProViewTabBar"
                  ownerData={data}
                  validation={validation}
                  orientation='horizontal'
                  childTabs={[
                    {
                      id: 'TabedemokraciaAdminAdminEdemokraciaAdminConProsViewDefaultProViewTabBarArguments',
                      name: 'admin.ProView.arguments',
                      label: t('admin.ProView.arguments', { defaultValue: 'Arguments' }) as string,
                      disabled: isLoading,
                      hidden: false,
                      icon: 'account-voice',
                      nestedDataKeys: ['cons', 'pros'],
                    },
                    {
                      id: 'TabedemokraciaAdminAdminEdemokraciaAdminConProsViewDefaultProViewTabBarComments',
                      name: 'admin.ProView.comments',
                      label: t('admin.ProView.comments', { defaultValue: 'Comments' }) as string,
                      disabled: isLoading,
                      hidden: false,
                      icon: 'comment-text-multiple',
                      nestedDataKeys: ['comments'],
                    },
                  ]}
                >
                  <Grid item xs={12} sm={12}>
                    <Grid
                      id="FlexedemokraciaAdminAdminEdemokraciaAdminConProsViewDefaultProViewTabBarArgumentsArguments"
                      container
                      direction="row"
                      alignItems="flex-start"
                      justifyContent="flex-start"
                      spacing={2}
                    >
                      <Grid item xs={12} sm={12}>
                        <Grid
                          id="FlexedemokraciaAdminAdminEdemokraciaAdminConProsViewDefaultProViewTabBarArgumentsArgumentsActions"
                          container
                          direction="row"
                          alignItems="flex-start"
                          justifyContent="flex-start"
                          spacing={2}
                        >
                          <Grid item xs={12} sm={12} md={4.0}>
                            <LoadingButton
                              id="CallOperationActionedemokraciaAdminAdminEdemokraciaAdminConProsViewEdemokraciaAdminAdminEdemokraciaAdminProCreateSubArgumentButtonCallOperation"
                              loading={isLoading}
                              variant={undefined}
                              startIcon={<MdiIcon path="account-voice" />}
                              loadingPosition="start"
                              onClick={async () => {
                                try {
                                  setIsLoading(true);
                                  await adminProCreateSubArgumentAction(data, () => fetchData());
                                } finally {
                                  setIsLoading(false);
                                }
                              }}
                              disabled={editMode}
                            >
                              <span>
                                {t('admin.ProView.pros.createSubArgument.ButtonCallOperation', {
                                  defaultValue: 'Add argument',
                                })}
                              </span>
                            </LoadingButton>
                          </Grid>
                        </Grid>
                      </Grid>

                      <Grid item xs={12} sm={12} md={6.0}>
                        <Grid
                          id="FlexedemokraciaAdminAdminEdemokraciaAdminConProsViewDefaultProViewTabBarArgumentsArgumentsProsLabelWrapper"
                          container
                          direction="column"
                          alignItems="stretch"
                          justifyContent="flex-start"
                          spacing={2}
                        >
                          <Grid item xs={12} sm={12}>
                            <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                              <MdiIcon path="chat-plus" sx={{ marginRight: 1 }} />
                              <Typography
                                id="LabeledemokraciaAdminAdminEdemokraciaAdminConProsViewDefaultProViewTabBarArgumentsArgumentsProsLabelWrapperProsLabel"
                                variant="h6"
                                component="h1"
                              >
                                {t('admin.ProView.pros.Label', { defaultValue: 'Pros' })}
                              </Typography>
                            </Grid>
                          </Grid>

                          <Grid item xs={12} sm={12}>
                            <Grid
                              id="TableedemokraciaAdminAdminEdemokraciaAdminConProsViewDefaultProViewTabBarArgumentsArgumentsProsLabelWrapperPros"
                              container
                              direction="column"
                              alignItems="stretch"
                              justifyContent="flex-start"
                            >
                              <ProsTable
                                isOwnerLoading={isLoading}
                                validation={validation}
                                fetchOwnerData={fetchData}
                                ownerData={data}
                                editMode={editMode}
                                isFormUpdateable={isFormUpdateable}
                                storeDiff={storeDiff}
                              />
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>

                      <Grid item xs={12} sm={12} md={6.0}>
                        <Grid
                          id="FlexedemokraciaAdminAdminEdemokraciaAdminConProsViewDefaultProViewTabBarArgumentsArgumentsConsLabelWrapper"
                          container
                          direction="column"
                          alignItems="stretch"
                          justifyContent="flex-start"
                          spacing={2}
                        >
                          <Grid item xs={12} sm={12}>
                            <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                              <MdiIcon path="chat-minus" sx={{ marginRight: 1 }} />
                              <Typography
                                id="LabeledemokraciaAdminAdminEdemokraciaAdminConProsViewDefaultProViewTabBarArgumentsArgumentsConsLabelWrapperConsLabel"
                                variant="h6"
                                component="h1"
                              >
                                {t('admin.ProView.cons.Label', { defaultValue: 'Cons' })}
                              </Typography>
                            </Grid>
                          </Grid>

                          <Grid item xs={12} sm={12}>
                            <Grid
                              id="TableedemokraciaAdminAdminEdemokraciaAdminConProsViewDefaultProViewTabBarArgumentsArgumentsConsLabelWrapperCons"
                              container
                              direction="column"
                              alignItems="stretch"
                              justifyContent="flex-start"
                            >
                              <ConsTable
                                isOwnerLoading={isLoading}
                                validation={validation}
                                fetchOwnerData={fetchData}
                                ownerData={data}
                                editMode={editMode}
                                isFormUpdateable={isFormUpdateable}
                                storeDiff={storeDiff}
                              />
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item xs={12} sm={12}>
                    <Grid
                      id="FlexedemokraciaAdminAdminEdemokraciaAdminConProsViewDefaultProViewTabBarCommentsComments"
                      container
                      direction="row"
                      alignItems="flex-start"
                      justifyContent="flex-start"
                      spacing={2}
                    >
                      <Grid item xs={12} sm={12} md={4.0}>
                        <Grid
                          id="FlexedemokraciaAdminAdminEdemokraciaAdminConProsViewDefaultProViewTabBarCommentsCommentsActions"
                          container
                          direction="row"
                          alignItems="flex-start"
                          justifyContent="flex-start"
                          spacing={2}
                        >
                          <Grid item xs={12} sm={12}>
                            <LoadingButton
                              id="CallOperationActionedemokraciaAdminAdminEdemokraciaAdminConProsViewEdemokraciaAdminAdminEdemokraciaAdminProCreateCommentButtonCallOperation"
                              loading={isLoading}
                              variant={undefined}
                              startIcon={<MdiIcon path="comment-text-multiple" />}
                              loadingPosition="start"
                              onClick={async () => {
                                try {
                                  setIsLoading(true);
                                  await adminProCreateCommentAction(data, () => fetchData());
                                } finally {
                                  setIsLoading(false);
                                }
                              }}
                              disabled={editMode}
                            >
                              <span>
                                {t('admin.ProView.pros.createComment.ButtonCallOperation', {
                                  defaultValue: 'Add comment',
                                })}
                              </span>
                            </LoadingButton>
                          </Grid>
                        </Grid>
                      </Grid>

                      <Grid item xs={12} sm={12}>
                        <Grid
                          id="FlexedemokraciaAdminAdminEdemokraciaAdminConProsViewDefaultProViewTabBarCommentsCommentsCommentsLabelWrapper"
                          container
                          direction="column"
                          alignItems="stretch"
                          justifyContent="flex-start"
                          spacing={2}
                        >
                          <Grid item xs={12} sm={12}>
                            <Grid
                              id="TableedemokraciaAdminAdminEdemokraciaAdminConProsViewDefaultProViewTabBarCommentsCommentsCommentsLabelWrapperComments"
                              container
                              direction="column"
                              alignItems="stretch"
                              justifyContent="flex-start"
                            >
                              <CommentsTable
                                isOwnerLoading={isLoading}
                                validation={validation}
                                fetchOwnerData={fetchData}
                                ownerData={data}
                                editMode={editMode}
                                isFormUpdateable={isFormUpdateable}
                                storeDiff={storeDiff}
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
          </Box>
        </PageContainerTransition>
      </Container>
    </>
  );
}
