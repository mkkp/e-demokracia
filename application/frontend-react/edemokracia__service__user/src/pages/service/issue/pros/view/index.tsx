//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getViewDialogs(#application)
// Path expression: #pageIndexPath(#self)
// Template name: actor/src/pages/dialogs/index.tsx
// Template file: actor/src/pages/dialogs/index.tsx.hbs
// Page name: edemokracia::service::Issue.pros#View
// Page owner name: edemokracia::service::User
// Page DataElement name: pros
// Page DataElement owner name: edemokracia::service::Issue

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
import { toastConfig, DIVIDER_HEIGHT } from '~/config';
import { useL10N } from '~/l10n/l10n-context';
import { CUSTOM_VISUAL_ELEMENT_INTERFACE_KEY, CustomFormVisualElementProps } from '~/custom';
import type { JudoIdentifiable } from '@judo/data-api-common';
import { mainContainerPadding } from '~/theme';
import { PageContainerTransition } from '~/theme/animations';
import { clsx } from 'clsx';

import { IconButton, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import { useConfirmDialog } from '~/components/dialog';
import {
  ServiceCon,
  ServiceConQueryCustomizer,
  ServiceConStored,
  ServiceIssue,
  ServiceIssueStored,
  ServicePro,
  ServiceProQueryCustomizer,
  ServiceProStored,
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
} from '~/generated/data-api';
import { serviceProServiceForClassImpl } from '~/generated/data-axios';
import {
  useServiceProVoteUpAction,
  useServiceProVoteDownAction,
  useButtonNavigateVotesAction,
  useServiceProCreateProArgumentAction,
  useServiceProCreateConArgumentAction,
} from './actions';

import { CreatedByLink } from './components/CreatedByLink';
import { ConsTable } from './components/ConsTable';
import { ProsTable } from './components/ProsTable';

export interface ServiceUserViewProps {
  entry: ServiceProStored;
  successCallback: () => void;
  cancel: () => void;
}

export type ServiceUserViewPostRefreshAction = (
  data: ServiceProStored,
  storeDiff: (attributeName: keyof ServiceProStored, value: any) => void,
  setEditMode: Dispatch<SetStateAction<boolean>>,
  setValidation: Dispatch<SetStateAction<Map<keyof ServicePro, string>>>,
) => Promise<void>;

export const SERVICE_USER_VIEW_POST_REFRESH_HOOK_INTERFACE_KEY = 'ServiceUserViewPostRefreshHook';
export type ServiceUserViewPostRefreshHook = () => ServiceUserViewPostRefreshAction;

/**
 * Name: edemokracia::service::Issue.pros#View
 * Is Access: false
 * Type: View
 * Edit Mode Available: true
 **/
export default function ServiceUserView(props: ServiceUserViewProps) {
  const { entry, successCallback, cancel } = props;

  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const { locale: l10nLocale } = useL10N();
  const { enqueueSnackbar } = useSnackbar();
  const { openConfirmDialog } = useConfirmDialog();

  const handleFetchError = useErrorHandler(
    `(&(${OBJECTCLASS}=${ERROR_PROCESSOR_HOOK_INTERFACE_KEY})(operation=Fetch))`,
  );
  const handleUpdateError = useErrorHandler<ServicePro>(
    `(&(${OBJECTCLASS}=${ERROR_PROCESSOR_HOOK_INTERFACE_KEY})(operation=Update)(component=ServiceUserView))`,
  );
  const handleDeleteError = useErrorHandler<ServicePro>(
    `(&(${OBJECTCLASS}=${ERROR_PROCESSOR_HOOK_INTERFACE_KEY})(operation=Delete)(component=ServiceUserView))`,
  );

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [refreshCounter, setRefreshCounter] = useState<number>(0);
  const [data, setData] = useState<ServiceProStored>(entry ? { ...entry } : ({} as unknown as ServiceProStored));
  const [payloadDiff, setPayloadDiff] = useState<Record<keyof ServiceProStored, any>>(
    {} as unknown as Record<keyof ServiceProStored, any>,
  );
  const [editMode, setEditMode] = useState<boolean>(false);
  const storeDiff: (attributeName: keyof ServiceProStored, value: any) => void = useCallback(
    (attributeName: keyof ServiceProStored, value: any) => {
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
  const [validation, setValidation] = useState<Map<keyof ServicePro, string>>(new Map<keyof ServicePro, string>());

  const queryCustomizer: ServiceProQueryCustomizer = {
    _mask:
      '{title,created,description,upVotes,downVotes,createdByName,createdBy{representation},pros{title,upVotes,downVotes},cons{title,upVotes,downVotes}}',
  };

  const { service: postRefreshHook } = useTrackService<ServiceUserViewPostRefreshHook>(
    `(${OBJECTCLASS}=${SERVICE_USER_VIEW_POST_REFRESH_HOOK_INTERFACE_KEY})`,
  );
  const postRefreshAction: ServiceUserViewPostRefreshAction | undefined = postRefreshHook && postRefreshHook();

  const serviceProVoteUpAction = useServiceProVoteUpAction();
  const serviceProVoteDownAction = useServiceProVoteDownAction();
  const buttonNavigateVotesAction = useButtonNavigateVotesAction();
  const serviceProCreateProArgumentAction = useServiceProCreateProArgumentAction();
  const serviceProCreateConArgumentAction = useServiceProCreateConArgumentAction();

  const title: string = t('service.ProView', { defaultValue: 'Pro View / Edit' });

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
      const res = await serviceProServiceForClassImpl.refresh(
        { __signedIdentifier: entry.__signedIdentifier } as JudoIdentifiable<ServicePro>,
        processQueryCustomizer(queryCustomizer),
      );

      setData(res);
      setPayloadDiff({
        __identifier: res.__identifier,
        __signedIdentifier: res.__signedIdentifier,
        __version: res.__version,
        __entityType: res.__entityType,
      } as Record<keyof ServiceProStored, any>);
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
      const res = await serviceProServiceForClassImpl.update(payloadDiff);

      if (res) {
        enqueueSnackbar(t('judo.action.save.success', { defaultValue: 'Changes saved' }), {
          variant: 'success',
          ...toastConfig.success,
        });
        setValidation(new Map<keyof ServicePro, string>());
        successCallback();
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
      await serviceProServiceForClassImpl.delete(data);

      successCallback();
    } catch (error) {
      handleDeleteError(error, undefined, data);
    } finally {
      setIsLoading(false);
      cancel();
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <DialogTitle>
        {title}
        <IconButton
          id="ServiceUserView-dialog-close"
          aria-label="close"
          onClick={() => {
            cancel();
            if (!editMode) {
              successCallback();
            }
          }}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <MdiIcon path="close" />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <Grid container spacing={2} direction="column" alignItems="stretch" justifyContent="flex-start">
          <Grid item xs={12} sm={12}>
            <Card id="FlexedemokraciaServiceUserEdemokraciaServiceIssueProsViewDefaultProViewEditProLabelWrapper">
              <CardContent>
                <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
                  <Grid item xs={12} sm={12}>
                    <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                      <MdiIcon path="chat-plus" sx={{ marginRight: 1 }} />
                      <Typography
                        id="LabeledemokraciaServiceUserEdemokraciaServiceIssueProsViewDefaultProViewEditProLabelWrapperProLabel"
                        variant="h5"
                        component="h1"
                      >
                        {t('service.ProView.pro.Label', { defaultValue: 'Pro' })}
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid item xs={12} sm={12}>
                    <Grid
                      id="FlexedemokraciaServiceUserEdemokraciaServiceIssueProsViewDefaultProViewEditProLabelWrapperPro"
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
                          id="TextInputedemokraciaServiceUserEdemokraciaServiceIssueProsViewDefaultProViewEditProLabelWrapperProTitle"
                          label={t('service.ProView.title', { defaultValue: 'Title' }) as string}
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
                              id: 'DateTimeInputedemokraciaServiceUserEdemokraciaServiceIssueProsViewDefaultProViewEditProLabelWrapperProCreated',
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
                              const copy = new Map<keyof ServicePro, string>(prevValidation);
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
                          label={t('service.ProView.created', { defaultValue: 'Created' }) as string}
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
                          onChange={(value: ServiceServiceUser | ServiceServiceUserStored | null) => {
                            storeDiff('createdBy', value);
                          }}
                          validation={validation}
                        />
                      </Grid>

                      <Grid item xs={12} sm={12}>
                        <TextField
                          required={true}
                          name="description"
                          id="TextAreaedemokraciaServiceUserEdemokraciaServiceIssueProsViewDefaultProViewEditProLabelWrapperProDescription"
                          label={t('service.ProView.description', { defaultValue: 'Description' }) as string}
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
                          id="CallOperationActionedemokraciaServiceUserEdemokraciaServiceIssueProsViewEdemokraciaServiceUserEdemokraciaServiceProVoteUpButtonCallOperation"
                          loading={isLoading}
                          variant={undefined}
                          startIcon={<MdiIcon path="thumb-up" />}
                          loadingPosition="start"
                          onClick={async () => {
                            try {
                              setIsLoading(true);
                              await serviceProVoteUpAction(data, () => fetchData());
                            } finally {
                              setIsLoading(false);
                            }
                          }}
                          disabled={editMode}
                        >
                          <span>{t('service.ProView.pros.voteUp.ButtonCallOperation', { defaultValue: '' })}</span>
                        </LoadingButton>
                      </Grid>

                      <Grid item xs={12} sm={12} md={1.0}>
                        <NumericInput
                          required={false}
                          name="upVotes"
                          id="NumericInputedemokraciaServiceUserEdemokraciaServiceIssueProsViewDefaultProViewEditProLabelWrapperProUpVotes"
                          label={t('service.ProView.upVotes', { defaultValue: '' }) as string}
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
                        <Grid container sx={{ height: DIVIDER_HEIGHT }}></Grid>
                      </Grid>

                      <Grid item xs={12} sm={12} md={1.0}>
                        <LoadingButton
                          id="CallOperationActionedemokraciaServiceUserEdemokraciaServiceIssueProsViewEdemokraciaServiceUserEdemokraciaServiceProVoteDownButtonCallOperation"
                          loading={isLoading}
                          variant={undefined}
                          startIcon={<MdiIcon path="thumb-down" />}
                          loadingPosition="start"
                          onClick={async () => {
                            try {
                              setIsLoading(true);
                              await serviceProVoteDownAction(data, () => fetchData());
                            } finally {
                              setIsLoading(false);
                            }
                          }}
                          disabled={editMode}
                        >
                          <span>{t('service.ProView.pros.voteDown.ButtonCallOperation', { defaultValue: '' })}</span>
                        </LoadingButton>
                      </Grid>

                      <Grid item xs={12} sm={12} md={1.0}>
                        <NumericInput
                          required={false}
                          name="downVotes"
                          id="NumericInputedemokraciaServiceUserEdemokraciaServiceIssueProsViewDefaultProViewEditProLabelWrapperProDownVotes"
                          label={t('service.ProView.downVotes', { defaultValue: '' }) as string}
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
                        <Grid container sx={{ height: DIVIDER_HEIGHT }}></Grid>
                      </Grid>

                      <Grid item xs={12} sm={12} md={2.0}>
                        <CollectionAssociationButton
                          id="NavigationToPageActionedemokraciaServiceUserEdemokraciaServiceIssueProsViewEdemokraciaServiceUserEdemokraciaServiceProVotesButtonNavigate"
                          variant={undefined}
                          editMode={editMode}
                          navigateAction={() => buttonNavigateVotesAction(data)}
                        >
                          {t('service.ProView.votes.ButtonNavigate', { defaultValue: 'Votes' })}
                          <MdiIcon path="arrow-right" />
                        </CollectionAssociationButton>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={12}>
            <Grid
              id="FlexedemokraciaServiceUserEdemokraciaServiceIssueProsViewDefaultProViewEditArguments"
              container
              direction="row"
              alignItems="flex-start"
              justifyContent="flex-start"
              spacing={2}
            >
              <Grid item xs={12} sm={12} md={6.0}>
                <Card id="FlexedemokraciaServiceUserEdemokraciaServiceIssueProsViewDefaultProViewEditArgumentsProsLabelWrapper">
                  <CardContent>
                    <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
                      <Grid item xs={12} sm={12}>
                        <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                          <MdiIcon path="chat-plus" sx={{ marginRight: 1 }} />
                          <Typography
                            id="LabeledemokraciaServiceUserEdemokraciaServiceIssueProsViewDefaultProViewEditArgumentsProsLabelWrapperProsLabel"
                            variant="h5"
                            component="h1"
                          >
                            {t('service.ProView.pros.Label', { defaultValue: 'Pros' })}
                          </Typography>
                        </Grid>
                      </Grid>

                      <Grid item xs={12} sm={12}>
                        <Grid
                          id="FlexedemokraciaServiceUserEdemokraciaServiceIssueProsViewDefaultProViewEditArgumentsProsLabelWrapperPros"
                          container
                          direction="row"
                          alignItems="stretch"
                          justifyContent="flex-start"
                          spacing={2}
                        >
                          <Grid item xs={12} sm={12}>
                            <Grid
                              id="FlexedemokraciaServiceUserEdemokraciaServiceIssueProsViewDefaultProViewEditArgumentsProsLabelWrapperProsActions"
                              container
                              direction="row"
                              alignItems="flex-start"
                              justifyContent="flex-start"
                              spacing={2}
                            >
                              <Grid item xs={12} sm={12}>
                                <LoadingButton
                                  id="CallOperationActionedemokraciaServiceUserEdemokraciaServiceIssueProsViewEdemokraciaServiceUserEdemokraciaServiceProCreateProArgumentButtonCallOperation"
                                  loading={isLoading}
                                  variant={undefined}
                                  startIcon={<MdiIcon path="chat-plus" />}
                                  loadingPosition="start"
                                  onClick={async () => {
                                    try {
                                      setIsLoading(true);
                                      await serviceProCreateProArgumentAction(data, () => fetchData());
                                    } finally {
                                      setIsLoading(false);
                                    }
                                  }}
                                  disabled={editMode}
                                >
                                  <span>
                                    {t('service.ProView.pros.createProArgument.ButtonCallOperation', {
                                      defaultValue: 'Add Pro Argument',
                                    })}
                                  </span>
                                </LoadingButton>
                              </Grid>
                            </Grid>
                          </Grid>

                          <Grid item xs={12} sm={12}>
                            <Grid
                              id="FlexedemokraciaServiceUserEdemokraciaServiceIssueProsViewDefaultProViewEditArgumentsProsLabelWrapperProsTable"
                              container
                              direction="row"
                              alignItems="flex-start"
                              justifyContent="flex-start"
                              spacing={2}
                            >
                              <Grid item xs={12} sm={12}>
                                <Grid
                                  id="FlexedemokraciaServiceUserEdemokraciaServiceIssueProsViewDefaultProViewEditArgumentsProsLabelWrapperProsTableProsLabelWrapper"
                                  container
                                  direction="column"
                                  alignItems="stretch"
                                  justifyContent="flex-start"
                                  spacing={2}
                                >
                                  <Grid item xs={12} sm={12}>
                                    <Grid
                                      id="TableedemokraciaServiceUserEdemokraciaServiceIssueProsViewDefaultProViewEditArgumentsProsLabelWrapperProsTableProsLabelWrapperPros"
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
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} sm={12} md={6.0}>
                <Card id="FlexedemokraciaServiceUserEdemokraciaServiceIssueProsViewDefaultProViewEditArgumentsConsLabelWrapper">
                  <CardContent>
                    <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
                      <Grid item xs={12} sm={12}>
                        <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                          <MdiIcon path="chat-minus" sx={{ marginRight: 1 }} />
                          <Typography
                            id="LabeledemokraciaServiceUserEdemokraciaServiceIssueProsViewDefaultProViewEditArgumentsConsLabelWrapperConsLabel"
                            variant="h5"
                            component="h1"
                          >
                            {t('service.ProView.cons.Label', { defaultValue: 'Cons' })}
                          </Typography>
                        </Grid>
                      </Grid>

                      <Grid item xs={12} sm={12}>
                        <Grid
                          id="FlexedemokraciaServiceUserEdemokraciaServiceIssueProsViewDefaultProViewEditArgumentsConsLabelWrapperCons"
                          container
                          direction="row"
                          alignItems="stretch"
                          justifyContent="flex-start"
                          spacing={2}
                        >
                          <Grid item xs={12} sm={12}>
                            <Grid
                              id="FlexedemokraciaServiceUserEdemokraciaServiceIssueProsViewDefaultProViewEditArgumentsConsLabelWrapperConsActions"
                              container
                              direction="row"
                              alignItems="flex-start"
                              justifyContent="flex-start"
                              spacing={2}
                            >
                              <Grid item xs={12} sm={12}>
                                <LoadingButton
                                  id="CallOperationActionedemokraciaServiceUserEdemokraciaServiceIssueProsViewEdemokraciaServiceUserEdemokraciaServiceProCreateConArgumentButtonCallOperation"
                                  loading={isLoading}
                                  variant={undefined}
                                  startIcon={<MdiIcon path="chat-minus" />}
                                  loadingPosition="start"
                                  onClick={async () => {
                                    try {
                                      setIsLoading(true);
                                      await serviceProCreateConArgumentAction(data, () => fetchData());
                                    } finally {
                                      setIsLoading(false);
                                    }
                                  }}
                                  disabled={editMode}
                                >
                                  <span>
                                    {t('service.ProView.pros.createConArgument.ButtonCallOperation', {
                                      defaultValue: 'Add Con Argument',
                                    })}
                                  </span>
                                </LoadingButton>
                              </Grid>
                            </Grid>
                          </Grid>

                          <Grid item xs={12} sm={12}>
                            <Grid
                              id="FlexedemokraciaServiceUserEdemokraciaServiceIssueProsViewDefaultProViewEditArgumentsConsLabelWrapperConsTable"
                              container
                              direction="row"
                              alignItems="flex-start"
                              justifyContent="flex-start"
                              spacing={2}
                            >
                              <Grid item xs={12} sm={12}>
                                <Grid
                                  id="FlexedemokraciaServiceUserEdemokraciaServiceIssueProsViewDefaultProViewEditArgumentsConsLabelWrapperConsTableConsLabelWrapper"
                                  container
                                  direction="column"
                                  alignItems="stretch"
                                  justifyContent="flex-start"
                                  spacing={2}
                                >
                                  <Grid item xs={12} sm={12}>
                                    <Grid
                                      id="TableedemokraciaServiceUserEdemokraciaServiceIssueProsViewDefaultProViewEditArgumentsConsLabelWrapperConsTableConsLabelWrapperCons"
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
                        </Grid>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Grid className="page-action" item>
          <Button
            id="ServiceUserView-dialog-close"
            variant="text"
            onClick={() => {
              cancel();
              if (!editMode) {
                successCallback();
              }
            }}
            disabled={isLoading}
          >
            {t('judo.pages.close', { defaultValue: 'Close' })}
          </Button>
        </Grid>

        {editMode && isFormUpdateable() && (
          <Grid className="page-action" item>
            <Button
              id="page-action-edit-cancel"
              variant="outlined"
              startIcon={<MdiIcon path="cancel" />}
              onClick={() => {
                setEditMode(false);
                fetchData();
              }}
              disabled={isLoading}
            >
              {t('judo.pages.cancel', { defaultValue: 'Cancel' })}
            </Button>
          </Grid>
        )}
        {editMode && isFormUpdateable() && (
          <Grid className="page-action" item>
            <LoadingButton
              loading={isLoading}
              loadingPosition="start"
              id="page-action-edit-save"
              startIcon={<MdiIcon path="content-save" />}
              onClick={() => submit()}
            >
              <span>{t('judo.pages.save', { defaultValue: 'Save' })}</span>
            </LoadingButton>
          </Grid>
        )}
        {!editMode && (
          <Grid className="page-action" item>
            <LoadingButton
              loading={isLoading}
              loadingPosition="start"
              id="page-action-refresh"
              startIcon={<MdiIcon path="refresh" />}
              onClick={() => fetchData()}
            >
              <span>{t('judo.pages.refresh', { defaultValue: 'Refresh' })}</span>
            </LoadingButton>
          </Grid>
        )}
        {!editMode && isFormDeleteable() && (
          <Grid className="page-action" item>
            <LoadingButton
              id="page-action-delete"
              loading={isLoading}
              loadingPosition="start"
              startIcon={<MdiIcon path="delete" />}
              onClick={async () => {
                const confirmed = await openConfirmDialog(
                  'page-delete-action',
                  t('judo.modal.confirm.confirm-delete', {
                    defaultValue: 'Are you sure you would like to delete the selected element?',
                  }),
                  t('judo.modal.confirm.confirm-title', { defaultValue: 'Confirm action' }),
                );

                if (confirmed) {
                  deleteData();
                }
              }}
              disabled={!data.__deleteable}
            >
              <span>{t('judo.pages.delete', { defaultValue: 'Delete' })}</span>
            </LoadingButton>
          </Grid>
        )}
      </DialogActions>
    </>
  );
}
