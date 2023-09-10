//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPagesForRouting(#application)
// Path expression: #pageIndexPath(#self)
// Template name: actor/src/pages/index.tsx
// Template file: actor/src/pages/index.tsx.hbs
// Page name: edemokracia::admin::Con.cons#View
// Page owner name: edemokracia::admin::Admin
// Page DataElement name: cons
// Page DataElement owner name: edemokracia::admin::Con

import type { FC, Dispatch, SetStateAction } from 'react';
import { useEffect, useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Container, Grid, Button, Card, CardContent, InputAdornment, TextField, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import type { DateValidationError, DateTimeValidationError, TimeValidationError } from '@mui/x-date-pickers';
import { DateTimePicker } from '@mui/x-date-pickers';
import { OBJECTCLASS } from '@pandino/pandino-api';
import { useSnackbar } from 'notistack';
import { ComponentProxy, useTrackService } from '@pandino/react-hooks';
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
import { adminConServiceForClassImpl } from '~/generated/data-axios';
import {
  useVoteUpAction,
  useVoteDownAction,
  useButtonNavigateVotesAction,
  useCreateSubArgumentAction,
  useCreateCommentAction,
} from './actions';

import { PageActions } from './components/PageActions';
import { CreatedByLink } from './components/CreatedByLink';
import { ConsTable } from './components/ConsTable';
import { ProsTable } from './components/ProsTable';
import { CommentsTable } from './components/CommentsTable';

export type AdminConConsViewPostRefreshAction = (
  data: AdminConStored,
  storeDiff: (attributeName: keyof AdminConStored, value: any) => void,
  setEditMode: Dispatch<SetStateAction<boolean>>,
  setValidation: Dispatch<SetStateAction<Map<keyof AdminCon, string>>>,
) => Promise<void>;

export const ADMIN_CON_CONS_VIEW_POST_REFRESH_HOOK_INTERFACE_KEY = 'AdminConConsViewPostRefreshHook';
export type AdminConConsViewPostRefreshHook = () => AdminConConsViewPostRefreshAction;

/**
 * Name: edemokracia::admin::Con.cons#View
 * Is Access: false
 * Type: View
 * Edit Mode Available: true
 **/
export default function AdminConConsView() {
  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { signedIdentifier } = useParams();

  const { openRangeDialog } = useRangeDialog();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const { locale: l10nLocale } = useL10N();

  const handleFetchError = useErrorHandler(
    `(&(${OBJECTCLASS}=${ERROR_PROCESSOR_HOOK_INTERFACE_KEY})(operation=Fetch))`,
  );
  const handleUpdateError = useErrorHandler<AdminCon>(
    `(&(${OBJECTCLASS}=${ERROR_PROCESSOR_HOOK_INTERFACE_KEY})(operation=Update)(component=AdminConConsView))`,
  );
  const handleDeleteError = useErrorHandler<AdminCon>(
    `(&(${OBJECTCLASS}=${ERROR_PROCESSOR_HOOK_INTERFACE_KEY})(operation=Delete)(component=AdminConConsView))`,
  );
  const { enqueueSnackbar } = useSnackbar();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [refreshCounter, setRefreshCounter] = useState<number>(0);
  const [data, setData] = useState<AdminConStored>({} as unknown as AdminConStored);
  const [payloadDiff, setPayloadDiff] = useState<Record<keyof AdminConStored, any>>(
    {} as unknown as Record<keyof AdminConStored, any>,
  );
  const [editMode, setEditMode] = useState<boolean>(false);
  const storeDiff: (attributeName: keyof AdminConStored, value: any) => void = useCallback(
    (attributeName: keyof AdminConStored, value: any) => {
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
      setData((prevData) => ({
        ...prevData,
        [attributeName]: value,
      }));
      if (!editMode) {
        setEditMode(true);
      }
    },
    [data],
  );
  const [validation, setValidation] = useState<Map<keyof AdminCon, string>>(new Map<keyof AdminCon, string>());

  const queryCustomizer: AdminConQueryCustomizer = {
    _mask:
      '{title,created,description,upVotes,downVotes,createdByName,createdBy{representation},pros{title,upVotes,downVotes},cons{title,upVotes,downVotes},comments{created,comment,createdByName,upVotes,downVotes}}',
  };

  const { service: postRefreshHook } = useTrackService<AdminConConsViewPostRefreshHook>(
    `(${OBJECTCLASS}=${ADMIN_CON_CONS_VIEW_POST_REFRESH_HOOK_INTERFACE_KEY})`,
  );
  const postRefreshAction: AdminConConsViewPostRefreshAction | undefined = postRefreshHook && postRefreshHook();

  const voteUpAction = useVoteUpAction();
  const voteDownAction = useVoteDownAction();
  const buttonNavigateVotesAction = useButtonNavigateVotesAction();
  const createSubArgumentAction = useCreateSubArgumentAction();
  const createCommentAction = useCreateCommentAction();

  const title: string = t('admin.ConView', { defaultValue: 'Con View / Edit' });

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
      const res = await adminConServiceForClassImpl.refresh(
        { __signedIdentifier: signedIdentifier } as JudoIdentifiable<AdminCon>,
        processQueryCustomizer(queryCustomizer),
      );

      setData(res);
      setPayloadDiff({
        __identifier: res.__identifier,
        __signedIdentifier: res.__signedIdentifier,
        __version: res.__version,
        __entityType: res.__entityType,
      } as Record<keyof AdminConStored, any>);
      if (postRefreshAction) {
        try {
          await postRefreshAction(res, storeDiff, setEditMode, setValidation);
        } catch (error) {
          console.error(error);
        }
      }
    } catch (error) {
      handleFetchError(error);
    } finally {
      setIsLoading(false);
      setRefreshCounter((prevCounter) => prevCounter + 1);
    }
  }

  async function submit() {
    setIsLoading(true);

    try {
      const res = await adminConServiceForClassImpl.update(payloadDiff);

      if (res) {
        enqueueSnackbar(t('judo.action.save.success', { defaultValue: 'Changes saved' }), {
          variant: 'success',
          ...toastConfig.success,
        });
        setValidation(new Map<keyof AdminCon, string>());
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
      await adminConServiceForClassImpl.delete(data);

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

  return (
    <>
      <PageHeader title={title}>
        <PageActions
          data={data}
          fetchData={fetchData}
          editMode={editMode}
          setEditMode={setEditMode}
          isLoading={isLoading}
          submit={submit}
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
                <Card id="FlexedemokraciaAdminAdminEdemokraciaAdminConConsViewDefaultConViewEditConLabelWrapper">
                  <CardContent>
                    <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
                      <Grid item xs={12} sm={12}>
                        <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                          <MdiIcon path="chat-minus" sx={{ marginRight: 1 }} />
                          <Typography
                            id="LabeledemokraciaAdminAdminEdemokraciaAdminConConsViewDefaultConViewEditConLabelWrapperConLabel"
                            variant="h6"
                            component="h1"
                          >
                            {t('admin.ConView.con.Label', { defaultValue: 'Contra' })}
                          </Typography>
                        </Grid>
                      </Grid>

                      <Grid item xs={12} sm={12}>
                        <Grid
                          id="FlexedemokraciaAdminAdminEdemokraciaAdminConConsViewDefaultConViewEditConLabelWrapperCon"
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
                              id="TextInputedemokraciaAdminAdminEdemokraciaAdminConConsViewDefaultConViewEditConLabelWrapperConTitle"
                              label={t('admin.ConView.title', { defaultValue: 'Title' }) as string}
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
                                  id: 'DateTimeInputedemokraciaAdminAdminEdemokraciaAdminConConsViewDefaultConViewEditConLabelWrapperConCreated',
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
                                  const copy = new Map<keyof AdminCon, string>(prevValidation);
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
                              label={t('admin.ConView.created', { defaultValue: 'Created' }) as string}
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
                              onChange={(value: AdminUser | AdminUserStored | null) => {
                                storeDiff('createdBy', value);
                              }}
                              validation={validation}
                            />
                          </Grid>

                          <Grid item xs={12} sm={12}>
                            <TextField
                              required={true}
                              name="description"
                              id="TextAreaedemokraciaAdminAdminEdemokraciaAdminConConsViewDefaultConViewEditConLabelWrapperConDescription"
                              label={t('admin.ConView.description', { defaultValue: 'Description' }) as string}
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
                              id="CallOperationActionedemokraciaAdminAdminEdemokraciaAdminConConsViewEdemokraciaAdminAdminEdemokraciaAdminConVoteUpButtonCallOperation"
                              loading={isLoading}
                              variant={undefined}
                              startIcon={<MdiIcon path="thumb-up" />}
                              loadingPosition="start"
                              onClick={async () => {
                                try {
                                  setIsLoading(true);
                                  await voteUpAction(data, () => fetchData());
                                } finally {
                                  setIsLoading(false);
                                }
                              }}
                              disabled={editMode}
                            >
                              <span>{t('admin.ConView.cons.voteUp.ButtonCallOperation', { defaultValue: '' })}</span>
                            </LoadingButton>
                          </Grid>

                          <Grid item xs={12} sm={12} md={1.0}>
                            <NumericInput
                              required={false}
                              name="upVotes"
                              id="NumericInputedemokraciaAdminAdminEdemokraciaAdminConConsViewDefaultConViewEditConLabelWrapperConUpVotes"
                              label={t('admin.ConView.upVotes', { defaultValue: '' }) as string}
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
                              id="CallOperationActionedemokraciaAdminAdminEdemokraciaAdminConConsViewEdemokraciaAdminAdminEdemokraciaAdminConVoteDownButtonCallOperation"
                              loading={isLoading}
                              variant={undefined}
                              startIcon={<MdiIcon path="thumb-down" />}
                              loadingPosition="start"
                              onClick={async () => {
                                try {
                                  setIsLoading(true);
                                  await voteDownAction(data, () => fetchData());
                                } finally {
                                  setIsLoading(false);
                                }
                              }}
                              disabled={editMode}
                            >
                              <span>{t('admin.ConView.cons.voteDown.ButtonCallOperation', { defaultValue: '' })}</span>
                            </LoadingButton>
                          </Grid>

                          <Grid item xs={12} sm={12} md={1.0}>
                            <NumericInput
                              required={false}
                              name="downVotes"
                              id="NumericInputedemokraciaAdminAdminEdemokraciaAdminConConsViewDefaultConViewEditConLabelWrapperConDownVotes"
                              label={t('admin.ConView.downVotes', { defaultValue: '' }) as string}
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
                              id="NavigationToPageActionedemokraciaAdminAdminEdemokraciaAdminConConsViewEdemokraciaAdminAdminEdemokraciaAdminConVotesButtonNavigate"
                              variant={undefined}
                              editMode={editMode}
                              navigateAction={() => buttonNavigateVotesAction(data)}
                            >
                              {t('admin.ConView.votes.ButtonNavigate', { defaultValue: 'Votes' })}
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
                  id="TabControlleredemokraciaAdminAdminEdemokraciaAdminConConsViewDefaultConViewEditTabBar"
                  ownerData={data}
                  validation={validation}
                  orientation='horizontal'
                  childTabs={[
                    {
                      id: 'TabedemokraciaAdminAdminEdemokraciaAdminConConsViewDefaultConViewEditTabBarArguments',
                      name: 'admin.ConView.arguments',
                      label: t('admin.ConView.arguments', { defaultValue: 'Arguments' }) as string,
                      disabled: isLoading,
                      hidden: false,
                      icon: 'account-voice',
                      nestedDataKeys: ['cons', 'pros'],
                    },
                    {
                      id: 'TabedemokraciaAdminAdminEdemokraciaAdminConConsViewDefaultConViewEditTabBarComments',
                      name: 'admin.ConView.comments',
                      label: t('admin.ConView.comments', { defaultValue: 'Comments' }) as string,
                      disabled: isLoading,
                      hidden: false,
                      icon: 'comment-text-multiple',
                      nestedDataKeys: ['comments'],
                    },
                  ]}
                >
                  <Grid item xs={12} sm={12}>
                    <Grid
                      id="FlexedemokraciaAdminAdminEdemokraciaAdminConConsViewDefaultConViewEditTabBarArgumentsArguments"
                      container
                      direction="row"
                      alignItems="flex-start"
                      justifyContent="flex-start"
                      spacing={2}
                    >
                      <Grid item xs={12} sm={12}>
                        <Grid
                          id="FlexedemokraciaAdminAdminEdemokraciaAdminConConsViewDefaultConViewEditTabBarArgumentsArgumentsActions"
                          container
                          direction="row"
                          alignItems="flex-start"
                          justifyContent="flex-start"
                          spacing={2}
                        >
                          <Grid item xs={12} sm={12} md={4.0}>
                            <LoadingButton
                              id="CallOperationActionedemokraciaAdminAdminEdemokraciaAdminConConsViewEdemokraciaAdminAdminEdemokraciaAdminConCreateSubArgumentButtonCallOperation"
                              loading={isLoading}
                              variant={undefined}
                              startIcon={<MdiIcon path="account-voice" />}
                              loadingPosition="start"
                              onClick={async () => {
                                try {
                                  setIsLoading(true);
                                  await createSubArgumentAction(data, () => fetchData());
                                } finally {
                                  setIsLoading(false);
                                }
                              }}
                              disabled={editMode}
                            >
                              <span>
                                {t('admin.ConView.cons.createSubArgument.ButtonCallOperation', {
                                  defaultValue: 'Add argument',
                                })}
                              </span>
                            </LoadingButton>
                          </Grid>
                        </Grid>
                      </Grid>

                      <Grid item xs={12} sm={12} md={6.0}>
                        <Grid
                          id="FlexedemokraciaAdminAdminEdemokraciaAdminConConsViewDefaultConViewEditTabBarArgumentsArgumentsProsLabelWrapper"
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
                                id="LabeledemokraciaAdminAdminEdemokraciaAdminConConsViewDefaultConViewEditTabBarArgumentsArgumentsProsLabelWrapperProsLabel"
                                variant="h6"
                                component="h1"
                              >
                                {t('admin.ConView.pros.Label', { defaultValue: 'Pros' })}
                              </Typography>
                            </Grid>
                          </Grid>

                          <Grid item xs={12} sm={12}>
                            <Grid
                              id="TableedemokraciaAdminAdminEdemokraciaAdminConConsViewDefaultConViewEditTabBarArgumentsArgumentsProsLabelWrapperPros"
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
                          id="FlexedemokraciaAdminAdminEdemokraciaAdminConConsViewDefaultConViewEditTabBarArgumentsArgumentsConsLabelWrapper"
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
                                id="LabeledemokraciaAdminAdminEdemokraciaAdminConConsViewDefaultConViewEditTabBarArgumentsArgumentsConsLabelWrapperConsLabel"
                                variant="h6"
                                component="h1"
                              >
                                {t('admin.ConView.cons.Label', { defaultValue: 'Cons' })}
                              </Typography>
                            </Grid>
                          </Grid>

                          <Grid item xs={12} sm={12}>
                            <Grid
                              id="TableedemokraciaAdminAdminEdemokraciaAdminConConsViewDefaultConViewEditTabBarArgumentsArgumentsConsLabelWrapperCons"
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
                      id="FlexedemokraciaAdminAdminEdemokraciaAdminConConsViewDefaultConViewEditTabBarCommentsComments"
                      container
                      direction="row"
                      alignItems="flex-start"
                      justifyContent="flex-start"
                      spacing={2}
                    >
                      <Grid item xs={12} sm={12} md={4.0}>
                        <Grid
                          id="FlexedemokraciaAdminAdminEdemokraciaAdminConConsViewDefaultConViewEditTabBarCommentsCommentsActions"
                          container
                          direction="row"
                          alignItems="flex-start"
                          justifyContent="flex-start"
                          spacing={2}
                        >
                          <Grid item xs={12} sm={12}>
                            <LoadingButton
                              id="CallOperationActionedemokraciaAdminAdminEdemokraciaAdminConConsViewEdemokraciaAdminAdminEdemokraciaAdminConCreateCommentButtonCallOperation"
                              loading={isLoading}
                              variant={undefined}
                              startIcon={<MdiIcon path="comment-text-multiple" />}
                              loadingPosition="start"
                              onClick={async () => {
                                try {
                                  setIsLoading(true);
                                  await createCommentAction(data, () => fetchData());
                                } finally {
                                  setIsLoading(false);
                                }
                              }}
                              disabled={editMode}
                            >
                              <span>
                                {t('admin.ConView.cons.createComment.ButtonCallOperation', {
                                  defaultValue: 'Add comment',
                                })}
                              </span>
                            </LoadingButton>
                          </Grid>
                        </Grid>
                      </Grid>

                      <Grid item xs={12} sm={12}>
                        <Grid
                          id="FlexedemokraciaAdminAdminEdemokraciaAdminConConsViewDefaultConViewEditTabBarCommentsCommentsCommentsLabelWrapper"
                          container
                          direction="column"
                          alignItems="stretch"
                          justifyContent="flex-start"
                          spacing={2}
                        >
                          <Grid item xs={12} sm={12}>
                            <Grid
                              id="TableedemokraciaAdminAdminEdemokraciaAdminConConsViewDefaultConViewEditTabBarCommentsCommentsCommentsLabelWrapperComments"
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
