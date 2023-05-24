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

import { useState, useEffect, useRef, useCallback, Dispatch, SetStateAction, FC } from 'react';
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
import { OBJECTCLASS } from '@pandino/pandino-api';
import { ComponentProxy } from '@pandino/react-hooks';
import { JudoIdentifiable } from '@judo/data-api-common';
import { useSnackbar } from 'notistack';
import { v1 as uuidv1 } from 'uuid';
import { useJudoNavigation, MdiIcon, ModeledTabs } from '~/components';
import { useRangeDialog } from '~/components/dialog';
import {
  AggregationInput,
  AssociationButton,
  BinaryInput,
  CollectionAssociationButton,
  TrinaryLogicCombobox,
} from '~/components/widgets';
import {
  useErrorHandler,
  ERROR_PROCESSOR_HOOK_INTERFACE_KEY,
  fileHandling,
  uiDateToServiceDate,
  serviceDateToUiDate,
  uiTimeToServiceTime,
  serviceTimeToUiTime,
  stringToBooleanSelect,
  booleanToStringSelect,
} from '~/utilities';
import { toastConfig, dividerHeight } from '~/config';
import { CUSTOM_VISUAL_ELEMENT_INTERFACE_KEY, CustomFormVisualElementProps } from '~/custom';
import { useL10N } from '~/l10n/l10n-context';

import {
  AdminDebate,
  AdminDebateQueryCustomizer,
  AdminDebateStored,
  CreateCommentInput,
  CreateCommentInputQueryCustomizer,
  CreateCommentInputStored,
} from '~/generated/data-api';
import { createCommentInputServiceImpl, adminDebateServiceImpl } from '~/generated/data-axios';

export interface AdminDebateCreateCommentFormProps {
  successCallback: () => void;
  cancel: () => void;
  owner: AdminDebateStored;
}

export function AdminDebateCreateCommentForm({ successCallback, cancel, owner }: AdminDebateCreateCommentFormProps) {
  const { t } = useTranslation();
  const { openRangeDialog } = useRangeDialog();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const { locale: l10nLocale } = useL10N();

  const handleFetchError = useErrorHandler(
    `(&(${OBJECTCLASS}=${ERROR_PROCESSOR_HOOK_INTERFACE_KEY})(operation=Fetch))`,
  );
  const handleActionError = useErrorHandler<CreateCommentInput>(
    `(&(${OBJECTCLASS}=${ERROR_PROCESSOR_HOOK_INTERFACE_KEY})(operation=CallOperation)(component=AdminDebateCreateCommentForm))`,
  );
  const { enqueueSnackbar } = useSnackbar();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<CreateCommentInput>({} as unknown as CreateCommentInput);
  const [validation, setValidation] = useState<Map<keyof CreateCommentInput, string>>(
    new Map<keyof CreateCommentInput, string>(),
  );
  const [editMode, setEditMode] = useState<boolean>(true);
  const [payloadDiff, setPayloadDiff] = useState<Record<keyof CreateCommentInput, any>>(
    {} as unknown as Record<keyof CreateCommentInput, any>,
  );
  const storeDiff: (attributeName: keyof CreateCommentInput, value: any) => void = useCallback(
    (attributeName: keyof CreateCommentInput, value: any) => {
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
      setData({ ...data, [attributeName]: value });
      if (!editMode) {
        setEditMode(true);
      }
    },
    [data],
  );
  const title: string = t('CreateCommentInputForm', { defaultValue: 'Add comment' });

  const isFormUpdateable = useCallback(() => {
    return true;
  }, [data]);

  const isFormDeleteable = useCallback(() => {
    return false;
  }, [data]);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const res = await createCommentInputServiceImpl.getTemplate();
      setData(res);
      setPayloadDiff({
        ...res,
      } as Record<keyof CreateCommentInput, any>);
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
      await adminDebateServiceImpl.createComment(owner, payloadDiff);

      successCallback();
    } catch (error) {
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
          id="CallOperationActionedemokraciaAdminAdminEdemokraciaAdminAdminDebatesViewEdemokraciaAdminAdminEdemokraciaAdminDebateCreateCommentButtonCallOperation-dialog-close"
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
        <Grid container xs={12} sm={12} spacing={2} direction="column" alignItems="stretch" justifyContent="flex-start">
          <Grid item xs={12} sm={12}>
            <Card id="FlexedemokraciaAdminAdminEdemokraciaAdminDebateCreateCommentInputDefaultCreateCommentInputFormCommentLabelWrapper">
              <CardContent>
                <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
                  <Grid item xs={12} sm={12}>
                    <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                      <MdiIcon path="forum" />
                      <Typography
                        id="LabeledemokraciaAdminAdminEdemokraciaAdminDebateCreateCommentInputDefaultCreateCommentInputFormCommentLabelWrapperCommentLabel"
                        variant="h6"
                        component="h1"
                      >
                        {t('CreateCommentInputForm.comment.Label', { defaultValue: 'Add comment' })}
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid item xs={12} sm={12}>
                    <Grid
                      id="FlexedemokraciaAdminAdminEdemokraciaAdminDebateCreateCommentInputDefaultCreateCommentInputFormCommentLabelWrapperComment"
                      container
                      direction="row"
                      alignItems="stretch"
                      justifyContent="flex-start"
                      spacing={2}
                    >
                      <Grid item xs={12} sm={12}>
                        <TextField
                          required
                          name="comment"
                          id="TextAreaedemokraciaAdminAdminEdemokraciaAdminDebateCreateCommentInputDefaultCreateCommentInputFormCommentLabelWrapperCommentComment"
                          autoFocus
                          label={t('CreateCommentInputForm.comment', { defaultValue: 'Comment' }) as string}
                          value={data.comment}
                          className={!editMode ? 'JUDO-viewMode' : undefined}
                          disabled={false || !isFormUpdateable()}
                          multiline
                          minRows={4.0}
                          error={!!validation.get('comment')}
                          helperText={validation.get('comment')}
                          onChange={(event) => {
                            storeDiff('comment', event.target.value);
                          }}
                          InputLabelProps={{ shrink: true }}
                          InputProps={{
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
              id="FlexedemokraciaAdminAdminEdemokraciaAdminDebateCreateCommentInputDefaultCreateCommentInputFormButtons"
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
          id="CallOperationActionedemokraciaAdminAdminEdemokraciaAdminAdminDebatesViewEdemokraciaAdminAdminEdemokraciaAdminDebateCreateCommentButtonCallOperation-action-form-action-cancel"
          variant="text"
          onClick={() => cancel()}
          disabled={isLoading}
        >
          <MdiIcon path="close-thick" />
          {t('judo.pages.cancel', { defaultValue: 'Cancel' }) as string}
        </Button>
        <LoadingButton
          loading={isLoading}
          loadingPosition="start"
          id="CallOperationActionedemokraciaAdminAdminEdemokraciaAdminAdminDebatesViewEdemokraciaAdminAdminEdemokraciaAdminDebateCreateCommentButtonCallOperation-action-form-action-submit"
          variant="contained"
          onClick={() => submit()}
          startIcon={<MdiIcon path="check" />}
        >
          <span>{t('CreateCommentInputForm.input.ButtonSaveInput', { defaultValue: 'Ok' }) as string}</span>
        </LoadingButton>
      </DialogActions>
    </>
  );
}
