//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPagesForRouting(#application)
// Path expression: #pageIndexPath(#self)
// Template name: actor/src/pages/index.tsx
// Template file: actor/src/pages/index.tsx.hbs
// Page name: edemokracia::admin::Comment.votes#View
// Page owner name: edemokracia::admin::Admin
// Page DataElement name: votes
// Page DataElement owner name: edemokracia::admin::Comment

import { useEffect, useState, useCallback, FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Container, Grid, Button, Card, CardContent, InputAdornment, MenuItem, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { DateTimePicker, DateTimeValidationError } from '@mui/x-date-pickers';
import { OBJECTCLASS } from '@pandino/pandino-api';
import { useSnackbar } from 'notistack';
import { ComponentProxy } from '@pandino/react-hooks';
import { useParams } from 'react-router-dom';
import { MdiIcon, ModeledTabs, PageHeader, DropdownButton, CustomBreadcrumb, useJudoNavigation } from '~/components';
import { useRangeDialog } from '~/components/dialog';
import { AssociationButton, BinaryInput, CollectionAssociationButton } from '~/components/widgets';
import {
  useErrorHandler,
  ERROR_PROCESSOR_HOOK_INTERFACE_KEY,
  fileHandling,
  processQueryCustomizer,
  uiDateToServiceDate,
  serviceDateToUiDate,
  uiTimeToServiceTime,
  serviceTimeToUiTime,
  stringToBooleanSelect,
  booleanToStringSelect,
} from '~/utilities';
import { useConfirmationBeforeChange } from '~/hooks';
import { toastConfig, dividerHeight } from '~/config';
import { useL10N } from '~/l10n/l10n-context';
import { CUSTOM_VISUAL_ELEMENT_INTERFACE_KEY, CustomFormVisualElementProps } from '~/custom';
import { JudoIdentifiable } from '@judo/data-api-common';
import { mainContainerPadding } from '~/theme';

import {
  AdminComment,
  AdminCommentStored,
  AdminSimpleVote,
  AdminSimpleVoteQueryCustomizer,
  AdminSimpleVoteStored,
  EdemokraciaSimpleVoteType,
} from '~/generated/data-api';
import { adminCommentServiceImpl, adminSimpleVoteServiceImpl } from '~/generated/data-axios';

import {} from './actions';

import { PageActions } from './components/PageActions';

/**
 * Name: edemokracia::admin::Comment.votes#View
 * Is Access: false
 * Type: View
 * Edit Mode Available: true
 **/
export default function AdminCommentVotesView() {
  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { signedIdentifier } = useParams();

  const { openRangeDialog } = useRangeDialog();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const { locale: l10nLocale } = useL10N();

  const handleFetchError = useErrorHandler(
    `(&(${OBJECTCLASS}=${ERROR_PROCESSOR_HOOK_INTERFACE_KEY})(operation=Fetch))`,
  );
  const handleUpdateError = useErrorHandler<AdminSimpleVote>(
    `(&(${OBJECTCLASS}=${ERROR_PROCESSOR_HOOK_INTERFACE_KEY})(operation=Update)(component=AdminCommentVotesView))`,
  );
  const handleDeleteError = useErrorHandler<AdminSimpleVote>(
    `(&(${OBJECTCLASS}=${ERROR_PROCESSOR_HOOK_INTERFACE_KEY})(operation=Delete)(component=AdminCommentVotesView))`,
  );
  const { enqueueSnackbar } = useSnackbar();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<AdminSimpleVoteStored>({} as unknown as AdminSimpleVoteStored);
  const [payloadDiff, setPayloadDiff] = useState<Record<keyof AdminSimpleVoteStored, any>>(
    {} as unknown as Record<keyof AdminSimpleVoteStored, any>,
  );
  const [editMode, setEditMode] = useState<boolean>(false);
  const storeDiff: (attributeName: keyof AdminSimpleVoteStored, value: any) => void = useCallback(
    (attributeName: keyof AdminSimpleVoteStored, value: any) => {
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
      setData({ ...data, [attributeName]: value });
      if (!editMode) {
        setEditMode(true);
      }
    },
    [data],
  );
  const [validation, setValidation] = useState<Map<keyof AdminSimpleVote, string>>(
    new Map<keyof AdminSimpleVote, string>(),
  );

  const queryCustomizer: AdminSimpleVoteQueryCustomizer = {
    _mask: '{created,type}',
  };

  const title: string = t('admin.SimpleVoteView', { defaultValue: 'Create / View Vote' });

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
      const res = await adminSimpleVoteServiceImpl.refresh(
        { __signedIdentifier: signedIdentifier } as JudoIdentifiable<AdminSimpleVote>,
        processQueryCustomizer(queryCustomizer),
      );

      setData(res);
      setPayloadDiff({
        __identifier: res.__identifier,
        __signedIdentifier: res.__signedIdentifier,
        __version: res.__version,
        __entityType: res.__entityType,
      } as Record<keyof AdminSimpleVoteStored, any>);
    } catch (error) {
      handleFetchError(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function saveData() {
    setIsLoading(true);

    try {
      const res = await adminSimpleVoteServiceImpl.update(payloadDiff);

      if (res) {
        enqueueSnackbar(t('judo.action.save.success', { defaultValue: 'Changes saved' }), {
          variant: 'success',
          ...toastConfig.success,
        });
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
      await adminSimpleVoteServiceImpl.delete(data);

      back();
    } catch (error) {
      handleDeleteError(error, undefined, data);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setValidation(new Map<keyof AdminSimpleVote, string>());
  }, [editMode]);

  return (
    <>
      <PageHeader title={title}>
        <PageActions
          data={data}
          fetchData={fetchData}
          editMode={editMode}
          setEditMode={setEditMode}
          isLoading={isLoading}
          saveData={saveData}
          deleteData={deleteData}
        />
      </PageHeader>
      <Container component="main" maxWidth="xl">
        <Box sx={mainContainerPadding}>
          <Grid
            className="relation-page-data"
            container
            xs={12}
            sm={12}
            spacing={2}
            direction="column"
            alignItems="stretch"
            justifyContent="flex-start"
          >
            <Grid item xs={12} sm={12}>
              <Grid
                id="FlexedemokraciaAdminAdminEdemokraciaAdminCommentVotesViewDefaultVoteViewGroup"
                container
                direction="row"
                alignItems="flex-start"
                justifyContent="flex-start"
                spacing={2}
              >
                <Grid item xs={12} sm={12} md={4.0}>
                  <DateTimePicker
                    ampm={false}
                    ampmInClock={false}
                    className={!editMode ? 'JUDO-viewMode' : undefined}
                    slotProps={{
                      textField: {
                        id: 'DateTimeInputedemokraciaAdminAdminEdemokraciaAdminCommentVotesViewDefaultVoteViewGroupCreated',
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
                        const copy = new Map<keyof AdminSimpleVote, string>(prevValidation);
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
                    label={t('admin.SimpleVoteView.created', { defaultValue: 'Created' }) as string}
                    value={serviceDateToUiDate(data.created ?? null)}
                    disabled={false || !isFormUpdateable()}
                    onChange={(newValue: Date) => {
                      storeDiff('created', newValue);
                    }}
                  />
                </Grid>

                <Grid item xs={12} sm={12} md={4.0}>
                  <TextField
                    required
                    name="type"
                    id="EnumerationComboedemokraciaAdminAdminEdemokraciaAdminCommentVotesViewDefaultVoteViewGroupType"
                    label={t('admin.SimpleVoteView.type', { defaultValue: 'Type' }) as string}
                    value={data.type || ''}
                    className={!editMode ? 'JUDO-viewMode' : undefined}
                    disabled={false || !isFormUpdateable()}
                    error={!!validation.get('type')}
                    helperText={validation.get('type')}
                    onChange={(event) => {
                      storeDiff('type', event.target.value);
                    }}
                    InputLabelProps={{ shrink: true }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <MdiIcon path="list" />
                        </InputAdornment>
                      ),
                    }}
                    select
                  >
                    <MenuItem id="EnumerationMemberedemokraciaAdminAdminEdemokraciaSimpleVoteTypeUP" value={'UP'}>
                      {t('enumerations.EdemokraciaSimpleVoteType.UP', { defaultValue: 'UP' })}
                    </MenuItem>
                    <MenuItem id="EnumerationMemberedemokraciaAdminAdminEdemokraciaSimpleVoteTypeDOWN" value={'DOWN'}>
                      {t('enumerations.EdemokraciaSimpleVoteType.DOWN', { defaultValue: 'DOWN' })}
                    </MenuItem>
                  </TextField>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} sm={12}>
              <Grid
                id="FlexedemokraciaAdminAdminEdemokraciaAdminCommentVotesViewDefaultVoteViewGroup2"
                container
                direction="row"
                alignItems="flex-start"
                justifyContent="flex-start"
                spacing={2}
              ></Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
