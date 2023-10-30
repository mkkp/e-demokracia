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
  CreateArgumentInput,
  CreateArgumentInputQueryCustomizer,
  CreateArgumentInputStored,
  EdemokraciaCreateArgumentInputType,
  ServiceDebate,
  ServiceDebateQueryCustomizer,
  ServiceDebateStored,
  ServiceUserDebates,
  ServiceUserDebatesStored,
} from '~/generated/data-api';
import { createArgumentInputServiceForClassImpl, serviceDebateServiceForClassImpl } from '~/generated/data-axios';

export interface ServiceDebateCreateArgumentFormProps {
  successCallback: () => void;
  cancel: () => void;
  owner: ServiceDebateStored;
}

export default function ServiceDebateCreateArgumentForm({
  successCallback,
  cancel,
  owner,
}: ServiceDebateCreateArgumentFormProps) {
  const { t } = useTranslation();
  const { openRangeDialog } = useRangeDialog();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const { locale: l10nLocale } = useL10N();

  const handleFetchError = useErrorHandler(
    `(&(${OBJECTCLASS}=${ERROR_PROCESSOR_HOOK_INTERFACE_KEY})(operation=Fetch))`,
  );
  const handleActionError = useErrorHandler<CreateArgumentInput>(
    `(&(${OBJECTCLASS}=${ERROR_PROCESSOR_HOOK_INTERFACE_KEY})(operation=CallOperation)(component=ServiceDebateCreateArgumentForm))`,
  );
  const { enqueueSnackbar } = useSnackbar();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<CreateArgumentInput>({} as unknown as CreateArgumentInput);
  const [validation, setValidation] = useState<Map<keyof CreateArgumentInput, string>>(
    new Map<keyof CreateArgumentInput, string>(),
  );
  const [editMode, setEditMode] = useState<boolean>(true);
  const [payloadDiff, setPayloadDiff] = useState<Record<keyof CreateArgumentInput, any>>(
    {} as unknown as Record<keyof CreateArgumentInput, any>,
  );
  const storeDiff: (attributeName: keyof CreateArgumentInput, value: any) => void = useCallback(
    (attributeName: keyof CreateArgumentInput, value: any) => {
      const dateTypes: string[] = [];
      const dateTimeTypes: string[] = [];
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
  const title: string = t('CreateArgumentInputForm', { defaultValue: 'CreateArgumentInput Form' });

  const isFormUpdateable = useCallback(() => {
    return true;
  }, [data]);

  const isFormDeleteable = useCallback(() => {
    return false;
  }, [data]);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const res = await createArgumentInputServiceForClassImpl.getTemplate();
      setData(res);
      setPayloadDiff({
        ...res,
      } as Record<keyof CreateArgumentInput, any>);
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
      await serviceDebateServiceForClassImpl.createArgument(owner, payloadDiff);

      successCallback();
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
          id="CallOperationActionedemokraciaServiceUserEdemokraciaServiceUserDebatesActiveDebatesInResidentDistrictViewEdemokraciaServiceUserEdemokraciaServiceDebateCreateArgumentButtonCallOperation-dialog-close"
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
            <Card id="FlexedemokraciaServiceUserEdemokraciaServiceDebateCreateArgumentInputDefaultCreateArgumentInputFormGroupLabelWrapper">
              <CardContent>
                <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
                  <Grid item xs={12} sm={12}>
                    <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                      <MdiIcon path="account-voice" sx={{ marginRight: 1 }} />
                      <Typography
                        id="LabeledemokraciaServiceUserEdemokraciaServiceDebateCreateArgumentInputDefaultCreateArgumentInputFormGroupLabelWrapperGroupLabel"
                        variant="h5"
                        component="h1"
                      >
                        {t('CreateArgumentInputForm.group.Label', { defaultValue: 'Add argument' })}
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid item xs={12} sm={12}>
                    <Grid
                      id="FlexedemokraciaServiceUserEdemokraciaServiceDebateCreateArgumentInputDefaultCreateArgumentInputFormGroupLabelWrapperGroup"
                      container
                      direction="row"
                      alignItems="stretch"
                      justifyContent="flex-start"
                      spacing={2}
                    >
                      <Grid item xs={12} sm={12} md={8.0}>
                        <TextField
                          required={true}
                          name="title"
                          id="TextInputedemokraciaServiceUserEdemokraciaServiceDebateCreateArgumentInputDefaultCreateArgumentInputFormGroupLabelWrapperGroupTitle"
                          autoFocus
                          label={t('CreateArgumentInputForm.title', { defaultValue: 'Title' }) as string}
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
                          name="type"
                          id="EnumerationComboedemokraciaServiceUserEdemokraciaServiceDebateCreateArgumentInputDefaultCreateArgumentInputFormGroupLabelWrapperGroupType"
                          label={t('CreateArgumentInputForm.type', { defaultValue: 'Type' }) as string}
                          value={data.type || ''}
                          className={clsx({
                            'JUDO-viewMode': !editMode,
                            'JUDO-required': true,
                          })}
                          disabled={isLoading}
                          error={!!validation.get('type')}
                          helperText={validation.get('type')}
                          onChange={(event) => {
                            storeDiff('type', event.target.value);
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
                            id="EnumerationMemberedemokraciaServiceUserEdemokraciaCreateArgumentInputTypePRO"
                            value={'PRO'}
                          >
                            {t('enumerations.EdemokraciaCreateArgumentInputType.PRO', { defaultValue: 'PRO' })}
                          </MenuItem>
                          <MenuItem
                            id="EnumerationMemberedemokraciaServiceUserEdemokraciaCreateArgumentInputTypeCON"
                            value={'CON'}
                          >
                            {t('enumerations.EdemokraciaCreateArgumentInputType.CON', { defaultValue: 'CON' })}
                          </MenuItem>
                        </TextField>
                      </Grid>

                      <Grid item xs={12} sm={12}>
                        <TextField
                          required={true}
                          name="description"
                          id="TextAreaedemokraciaServiceUserEdemokraciaServiceDebateCreateArgumentInputDefaultCreateArgumentInputFormGroupLabelWrapperGroupDescription"
                          label={t('CreateArgumentInputForm.description', { defaultValue: 'Description' }) as string}
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
              id="FlexedemokraciaServiceUserEdemokraciaServiceDebateCreateArgumentInputDefaultCreateArgumentInputFormButtons"
              container
              direction="row"
              alignItems="flex-start"
              justifyContent="flex-start"
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
          id="CallOperationActionedemokraciaServiceUserEdemokraciaServiceUserDebatesActiveDebatesInResidentDistrictViewEdemokraciaServiceUserEdemokraciaServiceDebateCreateArgumentButtonCallOperation-action-form-action-cancel"
          variant="text"
          onClick={() => cancel()}
          disabled={isLoading}
          startIcon={<MdiIcon path="close-circle-outline" />}
        >
          {t('CreateArgumentInputForm.input.ButtonBack', { defaultValue: 'cancel' }) as string}
        </Button>
        <LoadingButton
          loading={isLoading}
          loadingPosition="start"
          id="CallOperationActionedemokraciaServiceUserEdemokraciaServiceUserDebatesActiveDebatesInResidentDistrictViewEdemokraciaServiceUserEdemokraciaServiceDebateCreateArgumentButtonCallOperation-action-form-action-submit"
          variant="contained"
          onClick={() => submit()}
          startIcon={<MdiIcon path="check" />}
        >
          <span>{t('CreateArgumentInputForm.input.ButtonSaveInput', { defaultValue: 'Ok' }) as string}</span>
        </LoadingButton>
      </DialogActions>
    </>
  );
}
