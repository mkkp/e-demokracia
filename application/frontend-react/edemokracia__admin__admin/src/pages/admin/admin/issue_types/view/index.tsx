//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPagesForRouting(#application)
// Path expression: #pageIndexPath(#self)
// Template name: actor/src/pages/index.tsx
// Template file: actor/src/pages/index.tsx.hbs
// Page name: edemokracia::admin::Admin.issueTypes#View
// Page owner name: edemokracia::admin::Admin
// Page DataElement name: issueTypes
// Page DataElement owner name: edemokracia::admin::Admin

import { useEffect, useState, useCallback, FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Container, Grid, Button, Card, CardContent, InputAdornment, MenuItem, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
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
  AdminIssueType,
  AdminIssueTypeQueryCustomizer,
  AdminIssueTypeStored,
  EdemokraciaVoteType,
} from '~/generated/data-api';
import { adminAdminServiceForIssueTypesImpl, adminIssueTypeServiceImpl } from '~/generated/data-axios';

import {} from './actions';

import { PageActions } from './components/PageActions';

/**
 * Name: edemokracia::admin::Admin.issueTypes#View
 * Is Access: true
 * Is Dashboard: false
 * Type: View
 * Edit Mode Available: true
 **/
export default function AdminAdminIssueTypesView() {
  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { signedIdentifier } = useParams();

  const { openRangeDialog } = useRangeDialog();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const { locale: l10nLocale } = useL10N();

  const handleFetchError = useErrorHandler(
    `(&(${OBJECTCLASS}=${ERROR_PROCESSOR_HOOK_INTERFACE_KEY})(operation=Fetch))`,
  );
  const handleUpdateError = useErrorHandler<AdminIssueType>(
    `(&(${OBJECTCLASS}=${ERROR_PROCESSOR_HOOK_INTERFACE_KEY})(operation=Update)(component=AdminAdminIssueTypesView))`,
  );
  const handleDeleteError = useErrorHandler<AdminIssueType>(
    `(&(${OBJECTCLASS}=${ERROR_PROCESSOR_HOOK_INTERFACE_KEY})(operation=Delete)(component=AdminAdminIssueTypesView))`,
  );
  const { enqueueSnackbar } = useSnackbar();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<AdminIssueTypeStored>({} as unknown as AdminIssueTypeStored);
  const [payloadDiff, setPayloadDiff] = useState<Record<keyof AdminIssueTypeStored, any>>(
    {} as unknown as Record<keyof AdminIssueTypeStored, any>,
  );
  const [editMode, setEditMode] = useState<boolean>(false);
  const storeDiff: (attributeName: keyof AdminIssueTypeStored, value: any) => void = useCallback(
    (attributeName: keyof AdminIssueTypeStored, value: any) => {
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
  const [validation, setValidation] = useState<Map<keyof AdminIssueType, string>>(
    new Map<keyof AdminIssueType, string>(),
  );

  const queryCustomizer: AdminIssueTypeQueryCustomizer = {
    _mask: '{title,voteType,description}',
  };

  const title: string = t('admin.IssueTypeView', { defaultValue: 'Issue Type View/Edit' });

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
      const res = await adminIssueTypeServiceImpl.refresh(
        { __signedIdentifier: signedIdentifier } as AdminIssueTypeStored,
        processQueryCustomizer(queryCustomizer),
      );

      setData(res);
      setPayloadDiff({
        __identifier: res.__identifier,
        __signedIdentifier: res.__signedIdentifier,
        __version: res.__version,
        __entityType: res.__entityType,
      } as Record<keyof AdminIssueTypeStored, any>);
    } catch (error) {
      handleFetchError(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function saveData() {
    setIsLoading(true);

    try {
      const res = await adminIssueTypeServiceImpl.update(payloadDiff);

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
      await adminIssueTypeServiceImpl.delete(data as AdminIssueTypeStored);

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
    setValidation(new Map<keyof AdminIssueType, string>());
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
            className="access-page-data"
            container
            xs={12}
            sm={12}
            spacing={2}
            direction="column"
            alignItems="stretch"
            justifyContent="flex-start"
          >
            <Grid item xs={12} sm={12}>
              <Card id="FlexedemokraciaAdminAdminEdemokraciaAdminAdminIssueTypesViewDefaultIssueTypeViewGroup">
                <CardContent>
                  <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
                    <Grid item xs={12} sm={12}>
                      <TextField
                        required
                        name="title"
                        id="TextInputedemokraciaAdminAdminEdemokraciaAdminAdminIssueTypesViewDefaultIssueTypeViewGroupTitle"
                        label={t('admin.IssueTypeView.title', { defaultValue: 'Title' }) as string}
                        value={data.title}
                        className={!editMode ? 'JUDO-viewMode' : undefined}
                        disabled={false || !isFormUpdateable()}
                        error={!!validation.get('title')}
                        helperText={validation.get('title')}
                        onChange={(event) => {
                          storeDiff('title', event.target.value);
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

                    <Grid item xs={12} sm={12}>
                      <TextField
                        name="voteType"
                        id="EnumerationComboedemokraciaAdminAdminEdemokraciaAdminAdminIssueTypesViewDefaultIssueTypeViewGroupVoteType"
                        label={t('admin.IssueTypeView.voteType', { defaultValue: 'VoteType' }) as string}
                        value={data.voteType || ''}
                        className={!editMode ? 'JUDO-viewMode' : undefined}
                        disabled={false || !isFormUpdateable()}
                        error={!!validation.get('voteType')}
                        helperText={validation.get('voteType')}
                        onChange={(event) => {
                          storeDiff('voteType', event.target.value);
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
                        <MenuItem id="EnumerationMemberedemokraciaAdminAdminEdemokraciaVoteTypeYESNO" value={'YES_NO'}>
                          {t('enumerations.EdemokraciaVoteType.YES_NO', { defaultValue: 'YES_NO' })}
                        </MenuItem>
                        <MenuItem
                          id="EnumerationMemberedemokraciaAdminAdminEdemokraciaVoteTypeYESNOABSTAIN"
                          value={'YES_NO_ABSTAIN'}
                        >
                          {t('enumerations.EdemokraciaVoteType.YES_NO_ABSTAIN', { defaultValue: 'YES_NO_ABSTAIN' })}
                        </MenuItem>
                        <MenuItem
                          id="EnumerationMemberedemokraciaAdminAdminEdemokraciaVoteTypeSELECTANSWER"
                          value={'SELECT_ANSWER'}
                        >
                          {t('enumerations.EdemokraciaVoteType.SELECT_ANSWER', { defaultValue: 'SELECT_ANSWER' })}
                        </MenuItem>
                        <MenuItem id="EnumerationMemberedemokraciaAdminAdminEdemokraciaVoteTypeRATE" value={'RATE'}>
                          {t('enumerations.EdemokraciaVoteType.RATE', { defaultValue: 'RATE' })}
                        </MenuItem>
                        <MenuItem
                          id="EnumerationMemberedemokraciaAdminAdminEdemokraciaVoteTypeNOVOTE"
                          value={'NO_VOTE'}
                        >
                          {t('enumerations.EdemokraciaVoteType.NO_VOTE', { defaultValue: 'NO_VOTE' })}
                        </MenuItem>
                      </TextField>
                    </Grid>

                    <Grid item xs={12} sm={12}>
                      <TextField
                        required
                        name="description"
                        id="TextAreaedemokraciaAdminAdminEdemokraciaAdminAdminIssueTypesViewDefaultIssueTypeViewGroupDescription"
                        label={t('admin.IssueTypeView.description', { defaultValue: 'Description' }) as string}
                        value={data.description}
                        className={!editMode ? 'JUDO-viewMode' : undefined}
                        disabled={false || !isFormUpdateable()}
                        multiline
                        minRows={4.0}
                        error={!!validation.get('description')}
                        helperText={validation.get('description')}
                        onChange={(event) => {
                          storeDiff('description', event.target.value);
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
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
