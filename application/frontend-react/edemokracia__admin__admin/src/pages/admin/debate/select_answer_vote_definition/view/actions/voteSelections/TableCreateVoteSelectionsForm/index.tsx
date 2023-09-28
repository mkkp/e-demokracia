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
import AdminAdminView from '~/pages/admin/select_answer_vote_definition/vote_selections/view/index';

import {
  AdminSelectAnswerVoteDefinition,
  AdminSelectAnswerVoteDefinitionStored,
  AdminSelectAnswerVoteSelection,
  AdminSelectAnswerVoteSelectionQueryCustomizer,
  AdminSelectAnswerVoteSelectionStored,
} from '~/generated/data-api';
import {
  adminSelectAnswerVoteDefinitionServiceForVoteSelectionsImpl,
  adminSelectAnswerVoteSelectionServiceForClassImpl,
} from '~/generated/data-axios';

export interface TableCreateVoteSelectionsFormProps {
  successCallback: (result: AdminSelectAnswerVoteSelectionStored, open?: boolean) => void;
  cancel: () => void;
  owner: JudoIdentifiable<AdminSelectAnswerVoteDefinition>;
}

export default function TableCreateVoteSelectionsForm({
  successCallback,
  cancel,
  owner,
}: TableCreateVoteSelectionsFormProps) {
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
  const handleCreateError = useErrorHandler<AdminSelectAnswerVoteSelection>(
    `(&(${OBJECTCLASS}=${ERROR_PROCESSOR_HOOK_INTERFACE_KEY})(operation=Create)(component=TableCreateVoteSelectionsForm))`,
  );
  const { enqueueSnackbar } = useSnackbar();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<AdminSelectAnswerVoteSelection>({
    __referenceId: uuidv1(),
  } as unknown as AdminSelectAnswerVoteSelection);
  const [validation, setValidation] = useState<Map<keyof AdminSelectAnswerVoteSelection, string>>(
    new Map<keyof AdminSelectAnswerVoteSelection, string>(),
  );
  const [editMode, setEditMode] = useState<boolean>(true);
  const [payloadDiff, setPayloadDiff] = useState<Record<keyof AdminSelectAnswerVoteSelection, any>>(
    {} as unknown as Record<keyof AdminSelectAnswerVoteSelection, any>,
  );
  const storeDiff: (attributeName: keyof AdminSelectAnswerVoteSelection, value: any) => void = useCallback(
    (attributeName: keyof AdminSelectAnswerVoteSelection, value: any) => {
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
  const title: string = t('admin.SelectAnswerVoteSelectionForm', { defaultValue: 'SelectAnswerVoteSelection Form' });

  const isFormUpdateable = useCallback(() => {
    return true;
  }, [data]);

  const isFormDeleteable = useCallback(() => {
    return false;
  }, [data]);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const res = await adminSelectAnswerVoteSelectionServiceForClassImpl.getTemplate();
      setData((prevData) => ({ ...prevData, ...res }));
      setPayloadDiff({
        ...res,
      } as Record<keyof AdminSelectAnswerVoteSelection, any>);
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
      const res = await adminSelectAnswerVoteDefinitionServiceForVoteSelectionsImpl.createVoteSelections(
        owner,
        payloadDiff,
      );

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
          id="CreateActionedemokraciaAdminAdminEdemokraciaAdminDebateSelectAnswerVoteDefinitionViewEdemokraciaAdminAdminEdemokraciaAdminSelectAnswerVoteDefinitionVoteSelectionsTableCreate-dialog-close"
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
            <TextField
              required={true}
              name="title"
              id="TextInputedemokraciaAdminAdminEdemokraciaAdminSelectAnswerVoteDefinitionVoteSelectionsCreateDefaultSelectAnswerVoteSelectionFormTitle"
              autoFocus
              label={t('admin.SelectAnswerVoteSelectionForm.title', { defaultValue: 'Title' }) as string}
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
                    <MdiIcon path="format-size" />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          <Grid item xs={12} sm={12}>
            <TextField
              required={false}
              name="description"
              id="TextAreaedemokraciaAdminAdminEdemokraciaAdminSelectAnswerVoteDefinitionVoteSelectionsCreateDefaultSelectAnswerVoteSelectionFormDescription"
              label={t('admin.SelectAnswerVoteSelectionForm.description', { defaultValue: 'Description' }) as string}
              value={data.description ?? ''}
              className={clsx({
                'JUDO-viewMode': !editMode,
                'JUDO-required': false,
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
                    <MdiIcon path="format-size" />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button
          id="CreateActionedemokraciaAdminAdminEdemokraciaAdminDebateSelectAnswerVoteDefinitionViewEdemokraciaAdminAdminEdemokraciaAdminSelectAnswerVoteDefinitionVoteSelectionsTableCreate-action-form-action-cancel"
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
            id="CreateActionedemokraciaAdminAdminEdemokraciaAdminDebateSelectAnswerVoteDefinitionViewEdemokraciaAdminAdminEdemokraciaAdminSelectAnswerVoteDefinitionVoteSelectionsTableCreate-action-form-action-create"
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
                        const result: AdminSelectAnswerVoteSelectionStored | undefined = await submit();

                        if (result) {
                          successCallback(result);
                          createDialog({
                            fullWidth: true,
                            maxWidth: 'md',
                            onClose: (event: object, reason: string) => {
                              if (reason !== 'backdropClick') {
                                closeDialog();
                              }
                            },
                            children: (
                              <AdminAdminView
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
