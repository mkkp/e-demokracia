//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getActionFormsForPages(#application)
// Path expression: #pagePath(#getActionContainer(#self))+'actions/'+#pageActionFormPathSuffix(#self)+'/index.tsx'
// Template name: actor/src/pages/actions/actionForm.tsx
// Template file: actor/src/pages/actions/actionForm.tsx.hbs

//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getActionFormsForPages(#application)
// Path expression: #pagePath(#getActionContainer(#self))+'actions/'+#pageActionFormPathSuffix(#self)+'/index.tsx'
// Template name: actor/src/pages/actions/actionForm.tsx
// Template file: actor/src/pages/actions/actionForm.tsx.hbs
// Action: CallOperationAction

import type { Dispatch, SetStateAction, FC } from 'react';
import { useState, useEffect, useRef, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { LoadingButton } from '@mui/lab';
import {
  Grid,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  ClickAwayListener,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grow,
  IconButton,
  InputAdornment,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  TextField,
  Typography,
} from '@mui/material';
import type { DateValidationError, DateTimeValidationError, TimeValidationError } from '@mui/x-date-pickers';
import { DateTimePicker } from '@mui/x-date-pickers';
import { OBJECTCLASS } from '@pandino/pandino-api';
import { ComponentProxy, useTrackService } from '@pandino/react-hooks';
import type { JudoIdentifiable } from '@judo/data-api-common';
import { useSnackbar } from 'notistack';
import { v1 as uuidv1 } from 'uuid';
import { useJudoNavigation, MdiIcon, ModeledTabs } from '~/components';
import { useDialog, useRangeDialog, OperationFaultDialog } from '~/components/dialog';
import {
  AggregationInput,
  AssociationButton,
  BinaryInput,
  CollectionAssociationButton,
  NumericInput,
  TrinaryLogicCombobox,
} from '~/components/widgets';
import {
  isErrorOperationFault,
  useErrorHandler,
  ERROR_PROCESSOR_HOOK_INTERFACE_KEY,
  passesLocalValidation,
  fileHandling,
  uiDateToServiceDate,
  serviceDateToUiDate,
  uiTimeToServiceTime,
  serviceTimeToUiTime,
  stringToBooleanSelect,
  booleanToStringSelect,
} from '~/utilities';
import { toastConfig, DIVIDER_HEIGHT } from '~/config';
import { CUSTOM_VISUAL_ELEMENT_INTERFACE_KEY, CustomFormVisualElementProps } from '~/custom';
import { PageContainerTransition } from '~/theme/animations';
import { useL10N } from '~/l10n/l10n-context';
import { clsx } from 'clsx';

import {
  CloseDebateInput,
  CloseDebateInputQueryCustomizer,
  CloseDebateInputStored,
  CloseDebateOutputVoteDefinitionReference,
  CloseDebateOutputVoteDefinitionReferenceQueryCustomizer,
  CloseDebateOutputVoteDefinitionReferenceStored,
  EdemokraciaVoteTypeOnCloseDebate,
  ServiceIssue,
  ServiceIssueQueryCustomizer,
  ServiceIssueStored,
} from '~/generated/data-api';
import { closeDebateInputServiceForClassImpl, serviceIssueServiceForClassImpl } from '~/generated/data-axios';

export interface ServiceIssueCloseDebateFormProps {
  successCallback: (result?: CloseDebateOutputVoteDefinitionReferenceStored) => void;
  cancel: () => void;
  owner: ServiceIssueStored;
}

export default function ServiceIssueCloseDebateForm({
  successCallback,
  cancel,
  owner,
}: ServiceIssueCloseDebateFormProps) {
  const { t } = useTranslation();
  const { openRangeDialog } = useRangeDialog();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const { locale: l10nLocale } = useL10N();

  const handleFetchError = useErrorHandler(
    `(&(${OBJECTCLASS}=${ERROR_PROCESSOR_HOOK_INTERFACE_KEY})(operation=Fetch))`,
  );
  const handleActionError = useErrorHandler<CloseDebateInput>(
    `(&(${OBJECTCLASS}=${ERROR_PROCESSOR_HOOK_INTERFACE_KEY})(operation=CallOperation)(component=ServiceIssueCloseDebateForm))`,
  );
  const { enqueueSnackbar } = useSnackbar();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<CloseDebateInput>({} as unknown as CloseDebateInput);
  const [validation, setValidation] = useState<Map<keyof CloseDebateInput, string>>(
    new Map<keyof CloseDebateInput, string>(),
  );
  const [editMode, setEditMode] = useState<boolean>(true);
  const [payloadDiff, setPayloadDiff] = useState<Record<keyof CloseDebateInput, any>>(
    {} as unknown as Record<keyof CloseDebateInput, any>,
  );
  const storeDiff: (attributeName: keyof CloseDebateInput, value: any) => void = useCallback(
    (attributeName: keyof CloseDebateInput, value: any) => {
      const dateTypes: string[] = [];
      const dateTimeTypes: string[] = ['closeAt'];
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
  const title: string = t('CloseDebateInputForm', { defaultValue: 'CloseDebateInput Form' });

  const isFormUpdateable = useCallback(() => {
    return true;
  }, [data]);

  const isFormDeleteable = useCallback(() => {
    return false;
  }, [data]);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const res = await closeDebateInputServiceForClassImpl.getTemplate();
      setData(res);
      setPayloadDiff({
        ...res,
      } as Record<keyof CloseDebateInput, any>);
    } catch (e) {
      handleFetchError(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // TODO: implement confirmation handling
  const submit = async () => {
    setIsLoading(true);

    try {
      const res = await serviceIssueServiceForClassImpl.closeDebate(owner, payloadDiff);

      if (res) {
        successCallback(res);
      }
    } catch (error: any) {
      handleActionError(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <DialogTitle>
        {title}
        <IconButton
          id="CallOperationActionedemokraciaServiceUserEdemokraciaServiceUserUserCreatedIssuesTableEdemokraciaServiceUserEdemokraciaServiceIssueCloseDebateButtonCallOperation-dialog-close"
          aria-label="close"
          onClick={() => cancel()}
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
            <Card id="FlexedemokraciaServiceUserEdemokraciaServiceIssueCloseDebateInputDefaultCloseDebateInputFormDebateLabelWrapper">
              <CardContent>
                <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
                  <Grid item xs={12} sm={12}>
                    <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                      <MdiIcon path="wechat" sx={{ marginRight: 1 }} />
                      <Typography
                        id="LabeledemokraciaServiceUserEdemokraciaServiceIssueCloseDebateInputDefaultCloseDebateInputFormDebateLabelWrapperDebateLabel"
                        variant="h5"
                        component="h1"
                      >
                        {t('CloseDebateInputForm.debate.Label', { defaultValue: 'Close debate' })}
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid item xs={12} sm={12}>
                    <Grid
                      id="FlexedemokraciaServiceUserEdemokraciaServiceIssueCloseDebateInputDefaultCloseDebateInputFormDebateLabelWrapperDebate"
                      container
                      direction="row"
                      alignItems="stretch"
                      justifyContent="flex-start"
                      spacing={2}
                    >
                      <Grid item xs={12} sm={12} md={4.0}>
                        <TextField
                          required={true}
                          name="voteType"
                          id="EnumerationComboedemokraciaServiceUserEdemokraciaServiceIssueCloseDebateInputDefaultCloseDebateInputFormDebateLabelWrapperDebateVoteType"
                          autoFocus
                          label={t('CloseDebateInputForm.voteType', { defaultValue: 'VoteType' }) as string}
                          value={data.voteType || ''}
                          className={clsx({
                            'JUDO-viewMode': !editMode,
                            'JUDO-required': true,
                          })}
                          disabled={isLoading}
                          error={!!validation.get('voteType')}
                          helperText={validation.get('voteType')}
                          onChange={(event) => {
                            storeDiff('voteType', event.target.value);
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
                          <MenuItem
                            id="EnumerationMemberedemokraciaServiceUserEdemokraciaVoteTypeOnCloseDebateYESNO"
                            value={'YES_NO'}
                          >
                            {t('enumerations.EdemokraciaVoteTypeOnCloseDebate.YES_NO', { defaultValue: 'YES_NO' })}
                          </MenuItem>
                          <MenuItem
                            id="EnumerationMemberedemokraciaServiceUserEdemokraciaVoteTypeOnCloseDebateYESNOABSTAIN"
                            value={'YES_NO_ABSTAIN'}
                          >
                            {t('enumerations.EdemokraciaVoteTypeOnCloseDebate.YES_NO_ABSTAIN', {
                              defaultValue: 'YES_NO_ABSTAIN',
                            })}
                          </MenuItem>
                          <MenuItem
                            id="EnumerationMemberedemokraciaServiceUserEdemokraciaVoteTypeOnCloseDebateSELECTANSWER"
                            value={'SELECT_ANSWER'}
                          >
                            {t('enumerations.EdemokraciaVoteTypeOnCloseDebate.SELECT_ANSWER', {
                              defaultValue: 'SELECT_ANSWER',
                            })}
                          </MenuItem>
                          <MenuItem
                            id="EnumerationMemberedemokraciaServiceUserEdemokraciaVoteTypeOnCloseDebateRATE"
                            value={'RATE'}
                          >
                            {t('enumerations.EdemokraciaVoteTypeOnCloseDebate.RATE', { defaultValue: 'RATE' })}
                          </MenuItem>
                          <MenuItem
                            id="EnumerationMemberedemokraciaServiceUserEdemokraciaVoteTypeOnCloseDebateNOVOTE"
                            value={'NO_VOTE'}
                          >
                            {t('enumerations.EdemokraciaVoteTypeOnCloseDebate.NO_VOTE', { defaultValue: 'NO_VOTE' })}
                          </MenuItem>
                        </TextField>
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
                              id: 'DateTimeInputedemokraciaServiceUserEdemokraciaServiceIssueCloseDebateInputDefaultCloseDebateInputFormDebateLabelWrapperDebateCloseAt',
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
                              const copy = new Map<keyof CloseDebateInput, string>(prevValidation);
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
                          label={t('CloseDebateInputForm.closeAt', { defaultValue: 'Vote close at' }) as string}
                          value={serviceDateToUiDate(data.closeAt ?? null)}
                          readOnly={false || !isFormUpdateable()}
                          disabled={isLoading}
                          onChange={(newValue: Date) => {
                            storeDiff('closeAt', newValue);
                          }}
                        />
                      </Grid>

                      <Grid item xs={12} sm={12}>
                        <TextField
                          required={true}
                          name="title"
                          id="TextInputedemokraciaServiceUserEdemokraciaServiceIssueCloseDebateInputDefaultCloseDebateInputFormDebateLabelWrapperDebateTitle"
                          label={t('CloseDebateInputForm.title', { defaultValue: 'Vote title' }) as string}
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
                        <TextField
                          required={true}
                          name="description"
                          id="TextAreaedemokraciaServiceUserEdemokraciaServiceIssueCloseDebateInputDefaultCloseDebateInputFormDebateLabelWrapperDebateDescription"
                          label={t('CloseDebateInputForm.description', { defaultValue: 'Vote description' }) as string}
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
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button
          id="CallOperationActionedemokraciaServiceUserEdemokraciaServiceUserUserCreatedIssuesTableEdemokraciaServiceUserEdemokraciaServiceIssueCloseDebateButtonCallOperation-action-form-action-cancel"
          variant="text"
          onClick={() => cancel()}
          disabled={isLoading}
          startIcon={<MdiIcon path="close-thick" />}
        >
          {t('judo.pages.cancel', { defaultValue: 'Cancel' }) as string}
        </Button>
        <LoadingButton
          loading={isLoading}
          loadingPosition="start"
          id="CallOperationActionedemokraciaServiceUserEdemokraciaServiceUserUserCreatedIssuesTableEdemokraciaServiceUserEdemokraciaServiceIssueCloseDebateButtonCallOperation-action-form-action-submit"
          variant="contained"
          onClick={() => submit()}
          startIcon={<MdiIcon path="check-bold" />}
        >
          <span>{t('judo.pages.submit', { defaultValue: 'Submit' }) as string}</span>
        </LoadingButton>
      </DialogActions>
    </>
  );
}
