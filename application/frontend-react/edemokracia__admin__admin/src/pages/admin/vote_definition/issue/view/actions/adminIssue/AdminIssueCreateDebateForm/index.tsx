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
  AdminIssue,
  AdminIssueQueryCustomizer,
  AdminIssueStored,
  AdminVoteDefinition,
  AdminVoteDefinitionStored,
  CreateDebateInput,
  CreateDebateInputQueryCustomizer,
  CreateDebateInputStored,
  CreateDebateOutputDebateReference,
  CreateDebateOutputDebateReferenceQueryCustomizer,
  CreateDebateOutputDebateReferenceStored,
} from '~/generated/data-api';
import { createDebateInputServiceForClassImpl, adminIssueServiceForClassImpl } from '~/generated/data-axios';

export interface AdminIssueCreateDebateFormProps {
  successCallback: (result?: CreateDebateOutputDebateReferenceStored) => void;
  cancel: () => void;
  owner: AdminIssueStored;
}

export function AdminIssueCreateDebateForm({ successCallback, cancel, owner }: AdminIssueCreateDebateFormProps) {
  const { t } = useTranslation();
  const { openRangeDialog } = useRangeDialog();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const { locale: l10nLocale } = useL10N();

  const handleFetchError = useErrorHandler(
    `(&(${OBJECTCLASS}=${ERROR_PROCESSOR_HOOK_INTERFACE_KEY})(operation=Fetch))`,
  );
  const handleActionError = useErrorHandler<CreateDebateInput>(
    `(&(${OBJECTCLASS}=${ERROR_PROCESSOR_HOOK_INTERFACE_KEY})(operation=CallOperation)(component=AdminIssueCreateDebateForm))`,
  );
  const { enqueueSnackbar } = useSnackbar();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<CreateDebateInput>({} as unknown as CreateDebateInput);
  const [validation, setValidation] = useState<Map<keyof CreateDebateInput, string>>(
    new Map<keyof CreateDebateInput, string>(),
  );
  const [editMode, setEditMode] = useState<boolean>(true);
  const [payloadDiff, setPayloadDiff] = useState<Record<keyof CreateDebateInput, any>>(
    {} as unknown as Record<keyof CreateDebateInput, any>,
  );
  const storeDiff: (attributeName: keyof CreateDebateInput, value: any) => void = useCallback(
    (attributeName: keyof CreateDebateInput, value: any) => {
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
  const title: string = t('CreateDebateInputForm', { defaultValue: 'CreateDebateInput Form' });

  const isFormUpdateable = useCallback(() => {
    return true;
  }, [data]);

  const isFormDeleteable = useCallback(() => {
    return false;
  }, [data]);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const res = await createDebateInputServiceForClassImpl.getTemplate();
      setData(res);
      setPayloadDiff({
        ...res,
      } as Record<keyof CreateDebateInput, any>);
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
      const res = await adminIssueServiceForClassImpl.createDebate(owner, payloadDiff);

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
          id="CallOperationActionedemokraciaAdminAdminEdemokraciaAdminVoteDefinitionIssueViewEdemokraciaAdminAdminEdemokraciaAdminIssueCreateDebateButtonCallOperation-dialog-close"
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
            <Grid
              id="FlexedemokraciaAdminAdminEdemokraciaAdminIssueCreateDebateInputDefaultCreateDebateInputFormDebate"
              container
              direction="row"
              alignItems="flex-start"
              justifyContent="flex-start"
              spacing={2}
            >
              <Grid item xs={12} sm={12} md={8.0}>
                <TextField
                  required={true}
                  name="title"
                  id="TextInputedemokraciaAdminAdminEdemokraciaAdminIssueCreateDebateInputDefaultCreateDebateInputFormDebateTitle"
                  autoFocus
                  label={t('CreateDebateInputForm.title', { defaultValue: 'Title' }) as string}
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
                      id: 'DateTimeInputedemokraciaAdminAdminEdemokraciaAdminIssueCreateDebateInputDefaultCreateDebateInputFormDebateCloseAt',
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
                      const copy = new Map<keyof CreateDebateInput, string>(prevValidation);
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
                  label={t('CreateDebateInputForm.closeAt', { defaultValue: 'Close at' }) as string}
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
                  name="description"
                  id="TextAreaedemokraciaAdminAdminEdemokraciaAdminIssueCreateDebateInputDefaultCreateDebateInputFormDebateDescription"
                  label={t('CreateDebateInputForm.description', { defaultValue: 'Description' }) as string}
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

          <Grid item xs={12} sm={12}>
            <Grid
              id="FlexedemokraciaAdminAdminEdemokraciaAdminIssueCreateDebateInputDefaultCreateDebateInputFormButtons"
              container
              direction="row"
              alignItems="flex-start"
              justifyContent="center"
              spacing={2}
            >
              <Grid item xs={12} sm={12} md={4.0}></Grid>

              <Grid item xs={12} sm={12} md={4.0}></Grid>
            </Grid>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button
          id="CallOperationActionedemokraciaAdminAdminEdemokraciaAdminVoteDefinitionIssueViewEdemokraciaAdminAdminEdemokraciaAdminIssueCreateDebateButtonCallOperation-action-form-action-cancel"
          variant="text"
          onClick={() => cancel()}
          disabled={isLoading}
          startIcon={<MdiIcon path="close-circle-outline" />}
        >
          {t('CreateDebateInputForm.input.ButtonBack', { defaultValue: 'Cancel' }) as string}
        </Button>
        <LoadingButton
          loading={isLoading}
          loadingPosition="start"
          id="CallOperationActionedemokraciaAdminAdminEdemokraciaAdminVoteDefinitionIssueViewEdemokraciaAdminAdminEdemokraciaAdminIssueCreateDebateButtonCallOperation-action-form-action-submit"
          variant="contained"
          onClick={() => submit()}
          startIcon={<MdiIcon path="check" />}
        >
          <span>{t('CreateDebateInputForm.input.ButtonSaveInput', { defaultValue: 'OK' }) as string}</span>
        </LoadingButton>
      </DialogActions>
    </>
  );
}
