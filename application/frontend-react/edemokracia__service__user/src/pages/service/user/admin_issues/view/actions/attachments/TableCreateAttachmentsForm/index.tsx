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
// Action: CreateAction

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
import ServiceUserView from '~/pages/service/issue/attachments/view/index';

import {
  EdemokraciaAttachmentType,
  ServiceIssue,
  ServiceIssueAttachment,
  ServiceIssueAttachmentQueryCustomizer,
  ServiceIssueAttachmentStored,
  ServiceIssueStored,
} from '~/generated/data-api';
import {
  serviceIssueServiceForAttachmentsImpl,
  serviceIssueAttachmentServiceForClassImpl,
} from '~/generated/data-axios';

export interface TableCreateAttachmentsFormProps {
  successCallback: (result: ServiceIssueAttachmentStored, open?: boolean) => void;
  cancel: () => void;
  owner: JudoIdentifiable<ServiceIssue>;
}

export default function TableCreateAttachmentsForm({
  successCallback,
  cancel,
  owner,
}: TableCreateAttachmentsFormProps) {
  const { t } = useTranslation();
  const { openRangeDialog } = useRangeDialog();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const { locale: l10nLocale } = useL10N();
  const anchorRef = useRef<HTMLDivElement>(null);
  const { navigate } = useJudoNavigation();
  const [open, setOpen] = useState(false);
  const [createDialog, closeDialog] = useDialog();

  const handleFetchError = useErrorHandler(
    `(&(${OBJECTCLASS}=${ERROR_PROCESSOR_HOOK_INTERFACE_KEY})(operation=Fetch))`,
  );
  const handleCreateError = useErrorHandler<ServiceIssueAttachment>(
    `(&(${OBJECTCLASS}=${ERROR_PROCESSOR_HOOK_INTERFACE_KEY})(operation=Create)(component=TableCreateAttachmentsForm))`,
  );
  const { enqueueSnackbar } = useSnackbar();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<ServiceIssueAttachment>({
    __referenceId: uuidv1(),
  } as unknown as ServiceIssueAttachment);
  const [validation, setValidation] = useState<Map<keyof ServiceIssueAttachment, string>>(
    new Map<keyof ServiceIssueAttachment, string>(),
  );
  const [editMode, setEditMode] = useState<boolean>(true);
  const [payloadDiff, setPayloadDiff] = useState<Record<keyof ServiceIssueAttachment, any>>(
    {} as unknown as Record<keyof ServiceIssueAttachment, any>,
  );
  const storeDiff: (attributeName: keyof ServiceIssueAttachment, value: any) => void = useCallback(
    (attributeName: keyof ServiceIssueAttachment, value: any) => {
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
  const title: string = t('service.IssueAttachmentForm', { defaultValue: 'IssueAttachment Form' });

  const isFormUpdateable = useCallback(() => {
    return true;
  }, [data]);

  const isFormDeleteable = useCallback(() => {
    return false;
  }, [data]);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const res = await serviceIssueAttachmentServiceForClassImpl.getTemplate();
      setData((prevData) => ({ ...prevData, ...res }));
      setPayloadDiff({
        ...res,
      } as Record<keyof ServiceIssueAttachment, any>);
    } catch (error) {
      handleFetchError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const submit = async () => {
    setIsLoading(true);

    try {
      const res = await serviceIssueServiceForAttachmentsImpl.createAttachments(owner, payloadDiff);

      return res;
    } catch (error) {
      handleCreateError(error, { setValidation }, data);
    } finally {
      setIsLoading(false);
    }
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <DialogTitle>
        {title}
        <IconButton
          id="CreateActionedemokraciaServiceUserEdemokraciaServiceUserAdminIssuesViewEdemokraciaServiceUserEdemokraciaServiceIssueAttachmentsTableCreate-dialog-close"
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
              id="FlexedemokraciaServiceUserEdemokraciaServiceIssueAttachmentsCreateDefaultIssueAttachmentFormGroup"
              container
              direction="row"
              alignItems="flex-start"
              justifyContent="flex-start"
              spacing={2}
            >
              <Grid item xs={12} sm={12} md={4.0}>
                <TextField
                  required={true}
                  name="type"
                  id="EnumerationComboedemokraciaServiceUserEdemokraciaServiceIssueAttachmentsCreateDefaultIssueAttachmentFormGroupType"
                  autoFocus
                  label={t('service.IssueAttachmentForm.type', { defaultValue: 'Type' }) as string}
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
                  <MenuItem id="EnumerationMemberedemokraciaServiceUserEdemokraciaAttachmentTypeLINK" value={'LINK'}>
                    {t('enumerations.EdemokraciaAttachmentType.LINK', { defaultValue: 'LINK' })}
                  </MenuItem>
                  <MenuItem id="EnumerationMemberedemokraciaServiceUserEdemokraciaAttachmentTypeIMAGE" value={'IMAGE'}>
                    {t('enumerations.EdemokraciaAttachmentType.IMAGE', { defaultValue: 'IMAGE' })}
                  </MenuItem>
                  <MenuItem id="EnumerationMemberedemokraciaServiceUserEdemokraciaAttachmentTypeVIDEO" value={'VIDEO'}>
                    {t('enumerations.EdemokraciaAttachmentType.VIDEO', { defaultValue: 'VIDEO' })}
                  </MenuItem>
                  <MenuItem id="EnumerationMemberedemokraciaServiceUserEdemokraciaAttachmentTypeMAP" value={'MAP'}>
                    {t('enumerations.EdemokraciaAttachmentType.MAP', { defaultValue: 'MAP' })}
                  </MenuItem>
                </TextField>
              </Grid>

              <Grid item xs={12} sm={12} md={4.0}>
                <TextField
                  required={false}
                  name="link"
                  id="TextInputedemokraciaServiceUserEdemokraciaServiceIssueAttachmentsCreateDefaultIssueAttachmentFormGroupLink"
                  label={t('service.IssueAttachmentForm.link', { defaultValue: 'Link' }) as string}
                  value={data.link ?? ''}
                  className={clsx({
                    'JUDO-viewMode': !editMode,
                    'JUDO-required': false,
                  })}
                  disabled={isLoading}
                  error={!!validation.get('link')}
                  helperText={validation.get('link')}
                  onChange={(event) => {
                    const realValue = event.target.value?.length === 0 ? null : event.target.value;
                    storeDiff('link', realValue);
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
                <BinaryInput
                  required={false}
                  id="BinaryTypeInputedemokraciaServiceUserEdemokraciaServiceIssueAttachmentsCreateDefaultIssueAttachmentFormGroupFile"
                  label={t('service.IssueAttachmentForm.file', { defaultValue: 'File' }) as string}
                  icon="file-document-outline"
                  mimeType={{
                    type: '*',
                    subType: '*',
                  }}
                  editMode={editMode}
                  validation={validation}
                  data={data}
                  attributeName="file"
                  attributePath="service/IssueAttachment/file"
                  disabled={isLoading}
                  readonly={false || !isFormUpdateable()}
                  deleteCallback={async () => {
                    storeDiff('file', null);
                  }}
                  uploadCallback={async (uploadedData: { token: string }) => {
                    storeDiff('file', uploadedData.token);
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button
          id="CreateActionedemokraciaServiceUserEdemokraciaServiceUserAdminIssuesViewEdemokraciaServiceUserEdemokraciaServiceIssueAttachmentsTableCreate-action-form-action-cancel"
          variant="text"
          onClick={() => cancel()}
          disabled={isLoading}
        >
          {t('judo.pages.cancel', { defaultValue: 'Cancel' })}
        </Button>
        <ButtonGroup size="small" ref={anchorRef} aria-label="split button" disabled={isLoading}>
          <LoadingButton
            loading={isLoading}
            loadingPosition="start"
            id="CreateActionedemokraciaServiceUserEdemokraciaServiceUserAdminIssuesViewEdemokraciaServiceUserEdemokraciaServiceIssueAttachmentsTableCreate-action-form-action-create"
            variant="contained"
            onClick={async () => {
              const result = await submit();
              if (result) {
                successCallback(result);
              }
            }}
          >
            <span>{t('judo.pages.create', { defaultValue: 'Create' })}</span>
          </LoadingButton>
          <Button variant="contained" size="small" onClick={handleToggle}>
            <MdiIcon path="menu-down" />
          </Button>
        </ButtonGroup>
        <Popper sx={{ zIndex: 1 }} open={open} anchorEl={anchorRef.current} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList id="split-button-menu" autoFocusItem>
                    <MenuItem
                      key="create-and-navigate"
                      onClick={async (event: any) => {
                        const result: ServiceIssueAttachmentStored | undefined = await submit();

                        if (result) {
                          successCallback(result);
                          createDialog({
                            fullWidth: true,
                            maxWidth: 'lg',
                            onClose: (event: object, reason: string) => {
                              if (reason !== 'backdropClick') {
                                closeDialog();
                              }
                            },
                            children: (
                              <ServiceUserView
                                successCallback={() => {
                                  successCallback(result, true);
                                }}
                                cancel={closeDialog}
                                entry={result}
                              />
                            ),
                          });
                        }
                      }}
                      disabled={isLoading}
                    >
                      {t('judo.pages.create-and-navigate', { defaultValue: 'Create and navigate' })}
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </DialogActions>
    </>
  );
}
