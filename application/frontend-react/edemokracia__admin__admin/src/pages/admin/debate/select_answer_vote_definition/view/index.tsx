//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPagesForRouting(#application)
// Path expression: #pageIndexPath(#self)
// Template name: actor/src/pages/index.tsx
// Template file: actor/src/pages/index.tsx.hbs
// Page name: edemokracia::admin::Debate.selectAnswerVoteDefinition#View
// Page owner name: edemokracia::admin::Admin
// Page DataElement name: selectAnswerVoteDefinition
// Page DataElement owner name: edemokracia::admin::Debate

import type { FC, Dispatch, SetStateAction } from 'react';
import { useEffect, useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Container, Grid, Button, Card, CardContent, InputAdornment, MenuItem, TextField } from '@mui/material';
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

import {
  AdminDebate,
  AdminDebateStored,
  AdminSelectAnswerVoteDefinition,
  AdminSelectAnswerVoteDefinitionQueryCustomizer,
  AdminSelectAnswerVoteDefinitionStored,
  EdemokraciaVoteStatus,
} from '~/generated/data-api';
import {
  adminDebateServiceForClassImpl,
  adminSelectAnswerVoteDefinitionServiceForClassImpl,
} from '~/generated/data-axios';
import { useAdminSelectAnswerVoteDefinitionVoteAction } from './actions';

import { PageActions } from './components/PageActions';

export type AdminDebateSelectAnswerVoteDefinitionViewPostRefreshAction = (
  data: AdminSelectAnswerVoteDefinitionStored,
  storeDiff: (attributeName: keyof AdminSelectAnswerVoteDefinitionStored, value: any) => void,
  setEditMode: Dispatch<SetStateAction<boolean>>,
  setValidation: Dispatch<SetStateAction<Map<keyof AdminSelectAnswerVoteDefinition, string>>>,
) => Promise<void>;

export const ADMIN_DEBATE_SELECT_ANSWER_VOTE_DEFINITION_VIEW_POST_REFRESH_HOOK_INTERFACE_KEY =
  'AdminDebateSelectAnswerVoteDefinitionViewPostRefreshHook';
export type AdminDebateSelectAnswerVoteDefinitionViewPostRefreshHook =
  () => AdminDebateSelectAnswerVoteDefinitionViewPostRefreshAction;

/**
 * Name: edemokracia::admin::Debate.selectAnswerVoteDefinition#View
 * Is Access: false
 * Type: View
 * Edit Mode Available: false
 **/
export default function AdminDebateSelectAnswerVoteDefinitionView() {
  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { signedIdentifier } = useParams();

  const { openRangeDialog } = useRangeDialog();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const { locale: l10nLocale } = useL10N();

  const handleFetchError = useErrorHandler(
    `(&(${OBJECTCLASS}=${ERROR_PROCESSOR_HOOK_INTERFACE_KEY})(operation=Fetch))`,
  );
  const { enqueueSnackbar } = useSnackbar();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [refreshCounter, setRefreshCounter] = useState<number>(0);
  const [data, setData] = useState<AdminSelectAnswerVoteDefinitionStored>(
    {} as unknown as AdminSelectAnswerVoteDefinitionStored,
  );
  const [payloadDiff, setPayloadDiff] = useState<Record<keyof AdminSelectAnswerVoteDefinitionStored, any>>(
    {} as unknown as Record<keyof AdminSelectAnswerVoteDefinitionStored, any>,
  );
  const [editMode, setEditMode] = useState<boolean>(false);
  const storeDiff: (attributeName: keyof AdminSelectAnswerVoteDefinitionStored, value: any) => void = useCallback(
    (attributeName: keyof AdminSelectAnswerVoteDefinitionStored, value: any) => {
      const dateTypes: string[] = [];
      const dateTimeTypes: string[] = [
        'closeAt',

        'created',
      ];
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
  const [validation, setValidation] = useState<Map<keyof AdminSelectAnswerVoteDefinition, string>>(
    new Map<keyof AdminSelectAnswerVoteDefinition, string>(),
  );

  const queryCustomizer: AdminSelectAnswerVoteDefinitionQueryCustomizer = {
    _mask: '{title,created,description,status,closeAt}',
  };

  const { service: postRefreshHook } = useTrackService<AdminDebateSelectAnswerVoteDefinitionViewPostRefreshHook>(
    `(${OBJECTCLASS}=${ADMIN_DEBATE_SELECT_ANSWER_VOTE_DEFINITION_VIEW_POST_REFRESH_HOOK_INTERFACE_KEY})`,
  );
  const postRefreshAction: AdminDebateSelectAnswerVoteDefinitionViewPostRefreshAction | undefined =
    postRefreshHook && postRefreshHook();

  const adminSelectAnswerVoteDefinitionVoteAction = useAdminSelectAnswerVoteDefinitionVoteAction();

  const title: string = t('admin.SelectAnswerVoteDefinitionView', {
    defaultValue: 'SelectAnswerVoteDefinition View / Edit',
  });

  const isFormUpdateable = useCallback(() => {
    return false && typeof data?.__updateable === 'boolean' && data?.__updateable;
  }, [data]);

  const isFormDeleteable = useCallback(() => {
    return false && typeof data?.__deleteable === 'boolean' && data?.__deleteable;
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
      const res = await adminSelectAnswerVoteDefinitionServiceForClassImpl.refresh(
        { __signedIdentifier: signedIdentifier } as JudoIdentifiable<AdminSelectAnswerVoteDefinition>,
        processQueryCustomizer(queryCustomizer),
      );

      setData(res);
      setPayloadDiff({
        __identifier: res.__identifier,
        __signedIdentifier: res.__signedIdentifier,
        __version: res.__version,
        __entityType: res.__entityType,
      } as Record<keyof AdminSelectAnswerVoteDefinitionStored, any>);
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
        />
      </PageHeader>
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
              <TextField
                required={true}
                name="title"
                id="TextInputedemokraciaAdminAdminEdemokraciaAdminDebateSelectAnswerVoteDefinitionViewDefaultSelectAnswerVoteDefinitionViewEditTitle"
                label={t('admin.SelectAnswerVoteDefinitionView.title', { defaultValue: 'Title' }) as string}
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

            <Grid item xs={12} sm={12}>
              <DateTimePicker
                ampm={false}
                ampmInClock={false}
                className={clsx({
                  'JUDO-viewMode': !editMode,
                  'JUDO-required': true,
                })}
                slotProps={{
                  textField: {
                    id: 'DateTimeInputedemokraciaAdminAdminEdemokraciaAdminDebateSelectAnswerVoteDefinitionViewDefaultSelectAnswerVoteDefinitionViewEditCreated',
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
                    const copy = new Map<keyof AdminSelectAnswerVoteDefinition, string>(prevValidation);
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
                label={t('admin.SelectAnswerVoteDefinitionView.created', { defaultValue: 'Created' }) as string}
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
                id="TextInputedemokraciaAdminAdminEdemokraciaAdminDebateSelectAnswerVoteDefinitionViewDefaultSelectAnswerVoteDefinitionViewEditDescription"
                label={t('admin.SelectAnswerVoteDefinitionView.description', { defaultValue: 'Description' }) as string}
                value={data.description ?? ''}
                className={clsx({
                  'JUDO-viewMode': !editMode,
                  'JUDO-required': true,
                })}
                disabled={isLoading}
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
              <TextField
                required={true}
                name="status"
                id="EnumerationComboedemokraciaAdminAdminEdemokraciaAdminDebateSelectAnswerVoteDefinitionViewDefaultSelectAnswerVoteDefinitionViewEditStatus"
                label={t('admin.SelectAnswerVoteDefinitionView.status', { defaultValue: 'Status' }) as string}
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
                <MenuItem id="EnumerationMemberedemokraciaAdminAdminEdemokraciaVoteStatusCREATED" value={'CREATED'}>
                  {t('enumerations.EdemokraciaVoteStatus.CREATED', { defaultValue: 'CREATED' })}
                </MenuItem>
                <MenuItem id="EnumerationMemberedemokraciaAdminAdminEdemokraciaVoteStatusPENDING" value={'PENDING'}>
                  {t('enumerations.EdemokraciaVoteStatus.PENDING', { defaultValue: 'PENDING' })}
                </MenuItem>
                <MenuItem id="EnumerationMemberedemokraciaAdminAdminEdemokraciaVoteStatusACTIVE" value={'ACTIVE'}>
                  {t('enumerations.EdemokraciaVoteStatus.ACTIVE', { defaultValue: 'ACTIVE' })}
                </MenuItem>
                <MenuItem id="EnumerationMemberedemokraciaAdminAdminEdemokraciaVoteStatusCLOSED" value={'CLOSED'}>
                  {t('enumerations.EdemokraciaVoteStatus.CLOSED', { defaultValue: 'CLOSED' })}
                </MenuItem>
              </TextField>
            </Grid>

            <Grid item xs={12} sm={12}>
              <DateTimePicker
                ampm={false}
                ampmInClock={false}
                className={clsx({
                  'JUDO-viewMode': !editMode,
                  'JUDO-required': true,
                })}
                slotProps={{
                  textField: {
                    id: 'DateTimeInputedemokraciaAdminAdminEdemokraciaAdminDebateSelectAnswerVoteDefinitionViewDefaultSelectAnswerVoteDefinitionViewEditCloseAt',
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
                    const copy = new Map<keyof AdminSelectAnswerVoteDefinition, string>(prevValidation);
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
                label={t('admin.SelectAnswerVoteDefinitionView.closeAt', { defaultValue: 'CloseAt' }) as string}
                value={serviceDateToUiDate(data.closeAt ?? null)}
                readOnly={false || !isFormUpdateable()}
                disabled={isLoading}
                onChange={(newValue: Date) => {
                  storeDiff('closeAt', newValue);
                }}
              />
            </Grid>

            <Grid item xs={12} sm={12}>
              <LoadingButton
                id="CallOperationActionedemokraciaAdminAdminEdemokraciaAdminDebateSelectAnswerVoteDefinitionViewEdemokraciaAdminAdminEdemokraciaAdminSelectAnswerVoteDefinitionVoteButtonCallOperation"
                loading={isLoading}
                variant={undefined}
                startIcon={<MdiIcon path="chevron_right" />}
                loadingPosition="start"
                onClick={async () => {
                  try {
                    setIsLoading(true);
                    await adminSelectAnswerVoteDefinitionVoteAction(data, () => fetchData());
                  } finally {
                    setIsLoading(false);
                  }
                }}
                disabled={editMode}
              >
                <span>
                  {t('admin.SelectAnswerVoteDefinitionView.vote.ButtonCallOperation', { defaultValue: 'Vote' })}
                </span>
              </LoadingButton>
            </Grid>
          </Grid>
        </Box>
      </PageContainerTransition>
    </>
  );
}
