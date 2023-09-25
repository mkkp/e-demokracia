//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getViewDialogs(#application)
// Path expression: #pageIndexPath(#self)
// Template name: actor/src/pages/dialogs/index.tsx
// Template file: actor/src/pages/dialogs/index.tsx.hbs
// Page name: edemokracia::admin::YesNoAbstainVoteDefinition.voteEntries#View
// Page owner name: edemokracia::admin::Admin
// Page DataElement name: voteEntries
// Page DataElement owner name: edemokracia::admin::YesNoAbstainVoteDefinition

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

import { IconButton, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import { useConfirmDialog } from '~/components/dialog';
import {
  AdminUser,
  AdminUserQueryCustomizer,
  AdminUserStored,
  AdminYesNoAbstainVoteDefinition,
  AdminYesNoAbstainVoteDefinitionStored,
  AdminYesNoAbstainVoteEntry,
  AdminYesNoAbstainVoteEntryQueryCustomizer,
  AdminYesNoAbstainVoteEntryStored,
  EdemokraciaYesNoAbstainVoteValue,
} from '~/generated/data-api';
import { adminYesNoAbstainVoteEntryServiceForClassImpl } from '~/generated/data-axios';
import {} from './actions';

import { UserLink } from './components/UserLink';

export interface AdminAdminViewProps {
  entry: AdminYesNoAbstainVoteEntryStored;
  successCallback: () => void;
  cancel: () => void;
}

export type AdminAdminViewPostRefreshAction = (
  data: AdminYesNoAbstainVoteEntryStored,
  storeDiff: (attributeName: keyof AdminYesNoAbstainVoteEntryStored, value: any) => void,
  setEditMode: Dispatch<SetStateAction<boolean>>,
  setValidation: Dispatch<SetStateAction<Map<keyof AdminYesNoAbstainVoteEntry, string>>>,
) => Promise<void>;

export const ADMIN_ADMIN_VIEW_POST_REFRESH_HOOK_INTERFACE_KEY = 'AdminAdminViewPostRefreshHook';
export type AdminAdminViewPostRefreshHook = () => AdminAdminViewPostRefreshAction;

/**
 * Name: edemokracia::admin::YesNoAbstainVoteDefinition.voteEntries#View
 * Is Access: false
 * Type: View
 * Edit Mode Available: false
 **/
export default function AdminAdminView(props: AdminAdminViewProps) {
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

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [refreshCounter, setRefreshCounter] = useState<number>(0);
  const [data, setData] = useState<AdminYesNoAbstainVoteEntryStored>(
    entry ? { ...entry } : ({} as unknown as AdminYesNoAbstainVoteEntryStored),
  );
  const [payloadDiff, setPayloadDiff] = useState<Record<keyof AdminYesNoAbstainVoteEntryStored, any>>(
    {} as unknown as Record<keyof AdminYesNoAbstainVoteEntryStored, any>,
  );
  const [editMode, setEditMode] = useState<boolean>(false);
  const storeDiff: (attributeName: keyof AdminYesNoAbstainVoteEntryStored, value: any) => void = useCallback(
    (attributeName: keyof AdminYesNoAbstainVoteEntryStored, value: any) => {
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
  const [validation, setValidation] = useState<Map<keyof AdminYesNoAbstainVoteEntry, string>>(
    new Map<keyof AdminYesNoAbstainVoteEntry, string>(),
  );

  const queryCustomizer: AdminYesNoAbstainVoteEntryQueryCustomizer = {
    _mask: '{created,value,createdBy,owner{representation}}',
  };

  const { service: postRefreshHook } = useTrackService<AdminAdminViewPostRefreshHook>(
    `(${OBJECTCLASS}=${ADMIN_ADMIN_VIEW_POST_REFRESH_HOOK_INTERFACE_KEY})`,
  );
  const postRefreshAction: AdminAdminViewPostRefreshAction | undefined = postRefreshHook && postRefreshHook();

  const title: string = t('admin.YesNoAbstainVoteEntryView', { defaultValue: 'YesNoAbstainVoteEntry View / Edit' });

  const isFormUpdateable = useCallback(() => {
    return false;
  }, [data]);

  const isFormDeleteable = useCallback(() => {
    return false;
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
      const res = await adminYesNoAbstainVoteEntryServiceForClassImpl.refresh(
        { __signedIdentifier: entry.__signedIdentifier } as JudoIdentifiable<AdminYesNoAbstainVoteEntry>,
        processQueryCustomizer(queryCustomizer),
      );

      setData(res);
      setPayloadDiff({
        __identifier: res.__identifier,
        __signedIdentifier: res.__signedIdentifier,
        __version: res.__version,
        __entityType: res.__entityType,
      } as Record<keyof AdminYesNoAbstainVoteEntryStored, any>);
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
      <DialogTitle>
        {title}
        <IconButton
          id="AdminAdminView-dialog-close"
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
            <DateTimePicker
              ampm={false}
              ampmInClock={false}
              className={clsx({
                'JUDO-viewMode': !editMode,
                'JUDO-required': true,
              })}
              slotProps={{
                textField: {
                  id: 'DateTimeInputedemokraciaAdminAdminEdemokraciaAdminYesNoAbstainVoteDefinitionVoteEntriesViewDefaultYesNoAbstainVoteEntryViewEditCreated',
                  required: true,
                  helperText: validation.get('created'),
                  error: !!validation.get('created'),
                  InputProps: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <MdiIcon path="calendar-clock" />
                      </InputAdornment>
                    ),
                  },
                },
              }}
              onError={(newError: DateTimeValidationError, value: any) => {
                // https://mui.com/x/react-date-pickers/validation/#show-the-error
                setValidation((prevValidation) => {
                  const copy = new Map<keyof AdminYesNoAbstainVoteEntry, string>(prevValidation);
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
              label={t('admin.YesNoAbstainVoteEntryView.created', { defaultValue: 'Created' }) as string}
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
              name="value"
              id="EnumerationComboedemokraciaAdminAdminEdemokraciaAdminYesNoAbstainVoteDefinitionVoteEntriesViewDefaultYesNoAbstainVoteEntryViewEditValue"
              label={t('admin.YesNoAbstainVoteEntryView.value', { defaultValue: 'Value' }) as string}
              value={data.value || ''}
              className={clsx({
                'JUDO-viewMode': !editMode,
                'JUDO-required': true,
              })}
              disabled={isLoading}
              error={!!validation.get('value')}
              helperText={validation.get('value')}
              onChange={(event) => {
                storeDiff('value', event.target.value);
              }}
              InputLabelProps={{ shrink: true }}
              InputProps={{
                readOnly: false || !isFormUpdateable(),
                startAdornment: (
                  <InputAdornment position="start">
                    <MdiIcon path="format-list-numbered" />
                  </InputAdornment>
                ),
              }}
              select
            >
              <MenuItem id="EnumerationMemberedemokraciaAdminAdminEdemokraciaYesNoAbstainVoteValueYES" value={'YES'}>
                {t('enumerations.EdemokraciaYesNoAbstainVoteValue.YES', { defaultValue: 'YES' })}
              </MenuItem>
              <MenuItem id="EnumerationMemberedemokraciaAdminAdminEdemokraciaYesNoAbstainVoteValueNO" value={'NO'}>
                {t('enumerations.EdemokraciaYesNoAbstainVoteValue.NO', { defaultValue: 'NO' })}
              </MenuItem>
              <MenuItem
                id="EnumerationMemberedemokraciaAdminAdminEdemokraciaYesNoAbstainVoteValueABSTAIN"
                value={'ABSTAIN'}
              >
                {t('enumerations.EdemokraciaYesNoAbstainVoteValue.ABSTAIN', { defaultValue: 'ABSTAIN' })}
              </MenuItem>
            </TextField>
          </Grid>

          <Grid item xs={12} sm={12}>
            <UserLink
              ownerData={data}
              readOnly={false || !isFormUpdateable()}
              disabled={isLoading}
              editMode={editMode}
              fetchOwnerData={fetchData}
              onChange={(value: AdminUser | AdminUserStored | null) => {
                storeDiff('owner', value);
              }}
              validation={validation}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Grid className="page-action" item>
          <Button
            id="AdminAdminView-dialog-close"
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
      </DialogActions>
    </>
  );
}
