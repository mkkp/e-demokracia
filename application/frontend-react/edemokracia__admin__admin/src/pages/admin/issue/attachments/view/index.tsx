//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPagesForRouting(#application)
// Path expression: #pageIndexPath(#self)
// Template name: actor/src/pages/index.tsx
// Template file: actor/src/pages/index.tsx.hbs
// Page name: edemokracia::admin::Issue.attachments#View
// Page owner name: edemokracia::admin::Admin
// Page DataElement name: attachments
// Page DataElement owner name: edemokracia::admin::Issue

import type { FC } from 'react';
import { useEffect, useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Container,
  Grid,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  InputAdornment,
  MenuItem,
  TextField,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import type { DateValidationError, DateTimeValidationError, TimeValidationError } from '@mui/x-date-pickers';
import { OBJECTCLASS } from '@pandino/pandino-api';
import { useSnackbar } from 'notistack';
import { ComponentProxy } from '@pandino/react-hooks';
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
import { toastConfig, dividerHeight } from '~/config';
import { useL10N } from '~/l10n/l10n-context';
import { CUSTOM_VISUAL_ELEMENT_INTERFACE_KEY, CustomFormVisualElementProps } from '~/custom';
import type { JudoIdentifiable } from '@judo/data-api-common';
import { mainContainerPadding } from '~/theme';
import { PageContainerTransition } from '~/theme/animations';
import { clsx } from 'clsx';

import {
  AdminIssue,
  AdminIssueAttachment,
  AdminIssueAttachmentQueryCustomizer,
  AdminIssueAttachmentStored,
  AdminIssueStored,
  EdemokraciaAttachmentType,
} from '~/generated/data-api';
import { adminIssueServiceForClassImpl, adminIssueAttachmentServiceForClassImpl } from '~/generated/data-axios';

import {} from './actions';

import { PageActions } from './components/PageActions';

/**
 * Name: edemokracia::admin::Issue.attachments#View
 * Is Access: false
 * Type: View
 * Edit Mode Available: true
 **/
export default function AdminIssueAttachmentsView() {
  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { signedIdentifier } = useParams();

  const { openRangeDialog } = useRangeDialog();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const { locale: l10nLocale } = useL10N();

  const handleFetchError = useErrorHandler(
    `(&(${OBJECTCLASS}=${ERROR_PROCESSOR_HOOK_INTERFACE_KEY})(operation=Fetch))`,
  );
  const handleUpdateError = useErrorHandler<AdminIssueAttachment>(
    `(&(${OBJECTCLASS}=${ERROR_PROCESSOR_HOOK_INTERFACE_KEY})(operation=Update)(component=AdminIssueAttachmentsView))`,
  );
  const handleDeleteError = useErrorHandler<AdminIssueAttachment>(
    `(&(${OBJECTCLASS}=${ERROR_PROCESSOR_HOOK_INTERFACE_KEY})(operation=Delete)(component=AdminIssueAttachmentsView))`,
  );
  const { enqueueSnackbar } = useSnackbar();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [refreshCounter, setRefreshCounter] = useState<number>(0);
  const [data, setData] = useState<AdminIssueAttachmentStored>({} as unknown as AdminIssueAttachmentStored);
  const [payloadDiff, setPayloadDiff] = useState<Record<keyof AdminIssueAttachmentStored, any>>(
    {} as unknown as Record<keyof AdminIssueAttachmentStored, any>,
  );
  const [editMode, setEditMode] = useState<boolean>(false);
  const storeDiff: (attributeName: keyof AdminIssueAttachmentStored, value: any) => void = useCallback(
    (attributeName: keyof AdminIssueAttachmentStored, value: any) => {
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
  const [validation, setValidation] = useState<Map<keyof AdminIssueAttachment, string>>(
    new Map<keyof AdminIssueAttachment, string>(),
  );

  const queryCustomizer: AdminIssueAttachmentQueryCustomizer = {
    _mask: '{type,file,link}',
  };

  const title: string = t('admin.IssueAttachmentView', { defaultValue: 'View / Edit Attachment' });

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
      const res = await adminIssueAttachmentServiceForClassImpl.refresh(
        { __signedIdentifier: signedIdentifier } as JudoIdentifiable<AdminIssueAttachment>,
        processQueryCustomizer(queryCustomizer),
      );

      setData(res);
      setPayloadDiff({
        __identifier: res.__identifier,
        __signedIdentifier: res.__signedIdentifier,
        __version: res.__version,
        __entityType: res.__entityType,
      } as Record<keyof AdminIssueAttachmentStored, any>);
    } catch (error) {
      handleFetchError(error);
    } finally {
      setIsLoading(false);
      setRefreshCounter((prevCounter) => prevCounter + 1);
    }
  }

  async function saveData() {
    setIsLoading(true);

    try {
      const res = await adminIssueAttachmentServiceForClassImpl.update(payloadDiff);

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
      await adminIssueAttachmentServiceForClassImpl.delete(data);

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
    setValidation(new Map<keyof AdminIssueAttachment, string>());
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
        <PageContainerTransition>
          <Box sx={mainContainerPadding}>
            <Grid
              className="relation-page-data"
              container
              spacing={2}
              direction="column"
              alignItems="stretch"
              justifyContent="flex-start"
            >
              <Grid item xs={12} sm={12}>
                <Grid
                  id="FlexedemokraciaAdminAdminEdemokraciaAdminIssueAttachmentsViewDefaultAttachmentViewGroup"
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
                      id="EnumerationComboedemokraciaAdminAdminEdemokraciaAdminIssueAttachmentsViewDefaultAttachmentViewGroupType"
                      label={t('admin.IssueAttachmentView.type', { defaultValue: 'Type' }) as string}
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
                      <MenuItem id="EnumerationMemberedemokraciaAdminAdminEdemokraciaAttachmentTypeLINK" value={'LINK'}>
                        {t('enumerations.EdemokraciaAttachmentType.LINK', { defaultValue: 'LINK' })}
                      </MenuItem>
                      <MenuItem
                        id="EnumerationMemberedemokraciaAdminAdminEdemokraciaAttachmentTypeIMAGE"
                        value={'IMAGE'}
                      >
                        {t('enumerations.EdemokraciaAttachmentType.IMAGE', { defaultValue: 'IMAGE' })}
                      </MenuItem>
                      <MenuItem
                        id="EnumerationMemberedemokraciaAdminAdminEdemokraciaAttachmentTypeVIDEO"
                        value={'VIDEO'}
                      >
                        {t('enumerations.EdemokraciaAttachmentType.VIDEO', { defaultValue: 'VIDEO' })}
                      </MenuItem>
                      <MenuItem id="EnumerationMemberedemokraciaAdminAdminEdemokraciaAttachmentTypeMAP" value={'MAP'}>
                        {t('enumerations.EdemokraciaAttachmentType.MAP', { defaultValue: 'MAP' })}
                      </MenuItem>
                    </TextField>
                  </Grid>

                  <Grid item xs={12} sm={12} md={4.0}>
                    <BinaryInput
                      required={false}
                      id="BinaryTypeInputedemokraciaAdminAdminEdemokraciaAdminIssueAttachmentsViewDefaultAttachmentViewGroupFile"
                      label={t('admin.IssueAttachmentView.file', { defaultValue: 'File' }) as string}
                      icon="file-document-outline"
                      mimeType={{
                        type: 'image',
                        subType: '*',
                      }}
                      editMode={editMode}
                      validation={validation}
                      data={data}
                      attributeName="file"
                      attributePath="admin/IssueAttachment/file"
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

                  <Grid item xs={12} sm={12} md={4.0}>
                    <TextField
                      required={false}
                      name="link"
                      id="TextInputedemokraciaAdminAdminEdemokraciaAdminIssueAttachmentsViewDefaultAttachmentViewGroupLink"
                      label={t('admin.IssueAttachmentView.link', { defaultValue: 'Link' }) as string}
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
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </PageContainerTransition>
      </Container>
    </>
  );
}
