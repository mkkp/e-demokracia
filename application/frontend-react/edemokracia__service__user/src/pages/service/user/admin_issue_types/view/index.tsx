//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getViewDialogs(#application)
// Path expression: #pageIndexPath(#self)
// Template name: actor/src/pages/dialogs/index.tsx
// Template file: actor/src/pages/dialogs/index.tsx.hbs
// Page name: edemokracia::service::User.adminIssueTypes#View
// Page owner name: edemokracia::service::User
// Page DataElement name: adminIssueTypes
// Page DataElement owner name: edemokracia::service::User

import type { FC, Dispatch, SetStateAction } from 'react';
import { useEffect, useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Container, Grid, Button, Card, CardContent, InputAdornment, MenuItem, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import type { DateValidationError, DateTimeValidationError, TimeValidationError } from '@mui/x-date-pickers';
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
  EdemokraciaVoteType,
  ServiceIssueType,
  ServiceIssueTypeQueryCustomizer,
  ServiceIssueTypeStored,
} from '~/generated/data-api';
import { serviceIssueTypeServiceForClassImpl } from '~/generated/data-axios';
import {} from './actions';

export interface ServiceUserViewProps {
  entry: ServiceIssueTypeStored;
  successCallback: () => void;
  cancel: () => void;
}

export type ServiceUserViewPostRefreshAction = (
  data: ServiceIssueTypeStored,
  storeDiff: (attributeName: keyof ServiceIssueTypeStored, value: any) => void,
  setEditMode: Dispatch<SetStateAction<boolean>>,
  setValidation: Dispatch<SetStateAction<Map<keyof ServiceIssueType, string>>>,
) => Promise<void>;

export const SERVICE_USER_VIEW_POST_REFRESH_HOOK_INTERFACE_KEY = 'ServiceUserViewPostRefreshHook';
export type ServiceUserViewPostRefreshHook = () => ServiceUserViewPostRefreshAction;

/**
 * Name: edemokracia::service::User.adminIssueTypes#View
 * Is Access: true
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
  const handleUpdateError = useErrorHandler<ServiceIssueType>(
    `(&(${OBJECTCLASS}=${ERROR_PROCESSOR_HOOK_INTERFACE_KEY})(operation=Update)(component=ServiceUserView))`,
  );
  const handleDeleteError = useErrorHandler<ServiceIssueType>(
    `(&(${OBJECTCLASS}=${ERROR_PROCESSOR_HOOK_INTERFACE_KEY})(operation=Delete)(component=ServiceUserView))`,
  );

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [refreshCounter, setRefreshCounter] = useState<number>(0);
  const [data, setData] = useState<ServiceIssueTypeStored>(
    entry ? { ...entry } : ({} as unknown as ServiceIssueTypeStored),
  );
  const [payloadDiff, setPayloadDiff] = useState<Record<keyof ServiceIssueTypeStored, any>>(
    {} as unknown as Record<keyof ServiceIssueTypeStored, any>,
  );
  const [editMode, setEditMode] = useState<boolean>(false);
  const storeDiff: (attributeName: keyof ServiceIssueTypeStored, value: any) => void = useCallback(
    (attributeName: keyof ServiceIssueTypeStored, value: any) => {
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
  const [validation, setValidation] = useState<Map<keyof ServiceIssueType, string>>(
    new Map<keyof ServiceIssueType, string>(),
  );

  const queryCustomizer: ServiceIssueTypeQueryCustomizer = {
    _mask: '{title,voteType,description}',
  };

  const { service: postRefreshHook } = useTrackService<ServiceUserViewPostRefreshHook>(
    `(${OBJECTCLASS}=${SERVICE_USER_VIEW_POST_REFRESH_HOOK_INTERFACE_KEY})`,
  );
  const postRefreshAction: ServiceUserViewPostRefreshAction | undefined = postRefreshHook && postRefreshHook();

  const title: string = t('service.IssueTypeView', { defaultValue: 'IssueType View / Edit' });

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
      const res = await serviceIssueTypeServiceForClassImpl.refresh(
        { __signedIdentifier: entry.__signedIdentifier } as JudoIdentifiable<ServiceIssueType>,
        processQueryCustomizer(queryCustomizer),
      );

      setData(res);
      setPayloadDiff({
        __identifier: res.__identifier,
        __signedIdentifier: res.__signedIdentifier,
        __version: res.__version,
        __entityType: res.__entityType,
      } as Record<keyof ServiceIssueTypeStored, any>);
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
      const res = await serviceIssueTypeServiceForClassImpl.update(payloadDiff);

      if (res) {
        enqueueSnackbar(t('judo.action.save.success', { defaultValue: 'Changes saved' }), {
          variant: 'success',
          ...toastConfig.success,
        });
        setValidation(new Map<keyof ServiceIssueType, string>());
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
      await serviceIssueTypeServiceForClassImpl.delete(data);

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
            <Card id="FlexedemokraciaServiceUserEdemokraciaServiceUserAdminIssueTypesViewDefaultIssueTypeViewEditGroup">
              <CardContent>
                <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      required={true}
                      name="title"
                      id="TextInputedemokraciaServiceUserEdemokraciaServiceUserAdminIssueTypesViewDefaultIssueTypeViewEditGroupTitle"
                      label={t('service.IssueTypeView.title', { defaultValue: 'Title' }) as string}
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
                      required={false}
                      name="voteType"
                      id="EnumerationComboedemokraciaServiceUserEdemokraciaServiceUserAdminIssueTypesViewDefaultIssueTypeViewEditGroupVoteType"
                      label={t('service.IssueTypeView.voteType', { defaultValue: 'VoteType' }) as string}
                      value={data.voteType || ''}
                      className={clsx({
                        'JUDO-viewMode': !editMode,
                        'JUDO-required': false,
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
                      <MenuItem id="EnumerationMemberedemokraciaServiceUserEdemokraciaVoteTypeYESNO" value={'YES_NO'}>
                        {t('enumerations.EdemokraciaVoteType.YES_NO', { defaultValue: 'YES_NO' })}
                      </MenuItem>
                      <MenuItem
                        id="EnumerationMemberedemokraciaServiceUserEdemokraciaVoteTypeYESNOABSTAIN"
                        value={'YES_NO_ABSTAIN'}
                      >
                        {t('enumerations.EdemokraciaVoteType.YES_NO_ABSTAIN', { defaultValue: 'YES_NO_ABSTAIN' })}
                      </MenuItem>
                      <MenuItem
                        id="EnumerationMemberedemokraciaServiceUserEdemokraciaVoteTypeSELECTANSWER"
                        value={'SELECT_ANSWER'}
                      >
                        {t('enumerations.EdemokraciaVoteType.SELECT_ANSWER', { defaultValue: 'SELECT_ANSWER' })}
                      </MenuItem>
                      <MenuItem id="EnumerationMemberedemokraciaServiceUserEdemokraciaVoteTypeRATE" value={'RATE'}>
                        {t('enumerations.EdemokraciaVoteType.RATE', { defaultValue: 'RATE' })}
                      </MenuItem>
                      <MenuItem id="EnumerationMemberedemokraciaServiceUserEdemokraciaVoteTypeNOVOTE" value={'NO_VOTE'}>
                        {t('enumerations.EdemokraciaVoteType.NO_VOTE', { defaultValue: 'NO_VOTE' })}
                      </MenuItem>
                    </TextField>
                  </Grid>

                  <Grid item xs={12} sm={12}>
                    <TextField
                      required={true}
                      name="description"
                      id="TextAreaedemokraciaServiceUserEdemokraciaServiceUserAdminIssueTypesViewDefaultIssueTypeViewEditGroupDescription"
                      label={t('service.IssueTypeView.description', { defaultValue: 'Description' }) as string}
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
              </CardContent>
            </Card>
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
