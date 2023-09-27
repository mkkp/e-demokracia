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
  AdminCity,
  AdminCityQueryCustomizer,
  AdminCityStored,
  AdminCounty,
  AdminCountyQueryCustomizer,
  AdminCountyStored,
  AdminCreateIssueInput,
  AdminCreateIssueInputQueryCustomizer,
  AdminCreateIssueInputStored,
  AdminDistrict,
  AdminDistrictQueryCustomizer,
  AdminDistrictStored,
  AdminIssue,
  AdminIssueQueryCustomizer,
  AdminIssueStored,
  AdminIssueType,
  AdminIssueTypeQueryCustomizer,
  AdminIssueTypeStored,
  AdminUserIssues,
  AdminUserIssuesQueryCustomizer,
  AdminUserIssuesStored,
} from '~/generated/data-api';
import { adminCreateIssueInputServiceForClassImpl, adminUserIssuesServiceForClassImpl } from '~/generated/data-axios';

import { CityLink } from './components/CityLink';
import { CountyLink } from './components/CountyLink';
import { DistrictLink } from './components/DistrictLink';
import { IssueTypeLink } from './components/IssueTypeLink';

export interface AdminUserIssuesCreateIssueFormProps {
  successCallback: (result?: AdminIssueStored) => void;
  cancel: () => void;
}

export default function AdminUserIssuesCreateIssueForm({
  successCallback,
  cancel,
}: AdminUserIssuesCreateIssueFormProps) {
  const { t } = useTranslation();
  const { openRangeDialog } = useRangeDialog();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const { locale: l10nLocale } = useL10N();

  const handleFetchError = useErrorHandler(
    `(&(${OBJECTCLASS}=${ERROR_PROCESSOR_HOOK_INTERFACE_KEY})(operation=Fetch))`,
  );
  const handleActionError = useErrorHandler<AdminCreateIssueInput>(
    `(&(${OBJECTCLASS}=${ERROR_PROCESSOR_HOOK_INTERFACE_KEY})(operation=CallOperation)(component=AdminUserIssuesCreateIssueForm))`,
  );
  const { enqueueSnackbar } = useSnackbar();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<AdminCreateIssueInput>({} as unknown as AdminCreateIssueInput);
  const [validation, setValidation] = useState<Map<keyof AdminCreateIssueInput, string>>(
    new Map<keyof AdminCreateIssueInput, string>(),
  );
  const [editMode, setEditMode] = useState<boolean>(true);
  const [payloadDiff, setPayloadDiff] = useState<Record<keyof AdminCreateIssueInput, any>>(
    {} as unknown as Record<keyof AdminCreateIssueInput, any>,
  );
  const storeDiff: (attributeName: keyof AdminCreateIssueInput, value: any) => void = useCallback(
    (attributeName: keyof AdminCreateIssueInput, value: any) => {
      const dateTypes: string[] = [];
      const dateTimeTypes: string[] = ['debateCloseAt'];
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
  const title: string = t('admin.CreateIssueInputForm', { defaultValue: 'CreateIssueInput Form' });

  const isFormUpdateable = useCallback(() => {
    return true;
  }, [data]);

  const isFormDeleteable = useCallback(() => {
    return false;
  }, [data]);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const res = await adminCreateIssueInputServiceForClassImpl.getTemplate();
      setData(res);
      setPayloadDiff({
        ...res,
      } as Record<keyof AdminCreateIssueInput, any>);
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
      const res = await adminUserIssuesServiceForClassImpl.createIssue(payloadDiff);

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
          id="CallOperationActionedemokraciaAdminAdminEdemokraciaAdminAdminUserIssuesViewEdemokraciaAdminAdminEdemokraciaAdminUserIssuesCreateIssueButtonCallOperation-dialog-close"
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
              id="FlexedemokraciaAdminAdminEdemokraciaAdminUserIssuesCreateIssueInputDefaultCreateIssueInputFormIssue"
              container
              direction="row"
              alignItems="flex-start"
              justifyContent="flex-start"
              spacing={2}
            >
              <Grid item xs={12} sm={12}>
                <IssueTypeLink
                  ownerData={data}
                  readOnly={false || !isFormUpdateable()}
                  disabled={isLoading}
                  editMode={editMode}
                  onChange={(value: AdminIssueType | AdminIssueTypeStored | null) => {
                    storeDiff('issueType', value);
                  }}
                  validation={validation}
                />
              </Grid>

              <Grid item xs={12} sm={12} md={4.0}>
                <TextField
                  required={true}
                  name="title"
                  id="TextInputedemokraciaAdminAdminEdemokraciaAdminUserIssuesCreateIssueInputDefaultCreateIssueInputFormIssueTitle"
                  autoFocus
                  label={t('admin.CreateIssueInputForm.title', { defaultValue: 'Title' }) as string}
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
                      id: 'DateTimeInputedemokraciaAdminAdminEdemokraciaAdminUserIssuesCreateIssueInputDefaultCreateIssueInputFormIssueDebateCloseAt',
                      required: true,
                      helperText: validation.get('debateCloseAt'),
                      error: !!validation.get('debateCloseAt'),
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
                      const copy = new Map<keyof AdminCreateIssueInput, string>(prevValidation);
                      copy.set(
                        'debateCloseAt',
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
                  label={t('admin.CreateIssueInputForm.debateCloseAt', { defaultValue: 'Debate close at' }) as string}
                  value={serviceDateToUiDate(data.debateCloseAt ?? null)}
                  readOnly={false || !isFormUpdateable()}
                  disabled={isLoading}
                  onChange={(newValue: Date) => {
                    storeDiff('debateCloseAt', newValue);
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={12}>
                <TextField
                  required={true}
                  name="description"
                  id="TextAreaedemokraciaAdminAdminEdemokraciaAdminUserIssuesCreateIssueInputDefaultCreateIssueInputFormIssueDescription"
                  label={t('admin.CreateIssueInputForm.description', { defaultValue: 'Description' }) as string}
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

              <Grid item xs={12} sm={12} md={4.0}>
                <CountyLink
                  ownerData={data}
                  readOnly={false || !isFormUpdateable()}
                  disabled={isLoading}
                  editMode={editMode}
                  onChange={(value: AdminCounty | AdminCountyStored | null) => {
                    storeDiff('county', value);
                  }}
                  validation={validation}
                />
              </Grid>

              <Grid item xs={12} sm={12} md={4.0}>
                <CityLink
                  ownerData={data}
                  readOnly={false || !isFormUpdateable()}
                  disabled={isLoading}
                  editMode={editMode}
                  onChange={(value: AdminCity | AdminCityStored | null) => {
                    storeDiff('city', value);
                  }}
                  validation={validation}
                />
              </Grid>

              <Grid item xs={12} sm={12} md={4.0}>
                <DistrictLink
                  ownerData={data}
                  readOnly={false || !isFormUpdateable()}
                  disabled={isLoading}
                  editMode={editMode}
                  onChange={(value: AdminDistrict | AdminDistrictStored | null) => {
                    storeDiff('district', value);
                  }}
                  validation={validation}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button
          id="CallOperationActionedemokraciaAdminAdminEdemokraciaAdminAdminUserIssuesViewEdemokraciaAdminAdminEdemokraciaAdminUserIssuesCreateIssueButtonCallOperation-action-form-action-cancel"
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
          id="CallOperationActionedemokraciaAdminAdminEdemokraciaAdminAdminUserIssuesViewEdemokraciaAdminAdminEdemokraciaAdminUserIssuesCreateIssueButtonCallOperation-action-form-action-submit"
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