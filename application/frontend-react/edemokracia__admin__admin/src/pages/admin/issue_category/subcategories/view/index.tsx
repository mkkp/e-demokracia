//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPagesForRouting(#application)
// Path expression: #pageIndexPath(#self)
// Template name: actor/src/pages/index.tsx
// Template file: actor/src/pages/index.tsx.hbs
// Page name: edemokracia::admin::IssueCategory.subcategories#View
// Page owner name: edemokracia::admin::Admin
// Page DataElement name: subcategories
// Page DataElement owner name: edemokracia::admin::IssueCategory

import { useEffect, useState, useCallback, FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Container, Grid, Button, Card, CardContent, InputAdornment, TextField, Typography } from '@mui/material';
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
  AdminIssueCategory,
  AdminIssueCategoryQueryCustomizer,
  AdminIssueCategoryStored,
  AdminUser,
  AdminUserQueryCustomizer,
  AdminUserStored,
} from '~/generated/data-api';
import { adminIssueCategoryServiceImpl } from '~/generated/data-axios';

import {} from './actions';

import { PageActions } from './components/PageActions';
import { OwnerLink } from './components/OwnerLink';
import { SubcategoriesTable } from './components/SubcategoriesTable';

/**
 * Name: edemokracia::admin::IssueCategory.subcategories#View
 * Is Access: false
 * Type: View
 * Edit Mode Available: true
 **/
export default function AdminIssueCategorySubcategoriesView() {
  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { signedIdentifier } = useParams();

  const { openRangeDialog } = useRangeDialog();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const { locale: l10nLocale } = useL10N();

  const handleFetchError = useErrorHandler(
    `(&(${OBJECTCLASS}=${ERROR_PROCESSOR_HOOK_INTERFACE_KEY})(operation=Fetch))`,
  );
  const handleUpdateError = useErrorHandler<AdminIssueCategory>(
    `(&(${OBJECTCLASS}=${ERROR_PROCESSOR_HOOK_INTERFACE_KEY})(operation=Update)(component=AdminIssueCategorySubcategoriesView))`,
  );
  const handleDeleteError = useErrorHandler<AdminIssueCategory>(
    `(&(${OBJECTCLASS}=${ERROR_PROCESSOR_HOOK_INTERFACE_KEY})(operation=Delete)(component=AdminIssueCategorySubcategoriesView))`,
  );
  const { enqueueSnackbar } = useSnackbar();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<AdminIssueCategoryStored>({} as unknown as AdminIssueCategoryStored);
  const [payloadDiff, setPayloadDiff] = useState<Record<keyof AdminIssueCategoryStored, any>>(
    {} as unknown as Record<keyof AdminIssueCategoryStored, any>,
  );
  const [editMode, setEditMode] = useState<boolean>(false);
  const storeDiff: (attributeName: keyof AdminIssueCategoryStored, value: any) => void = useCallback(
    (attributeName: keyof AdminIssueCategoryStored, value: any) => {
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
  const [validation, setValidation] = useState<Map<keyof AdminIssueCategory, string>>(
    new Map<keyof AdminIssueCategory, string>(),
  );

  const queryCustomizer: AdminIssueCategoryQueryCustomizer = {
    _mask: '{title,description,owner{representation},subcategories{title,description}}',
  };

  const title: string = t('admin.IssueCategoryView', { defaultValue: 'View / Edit Category' });

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
      const res = await adminIssueCategoryServiceImpl.refresh(
        { __signedIdentifier: signedIdentifier } as JudoIdentifiable<AdminIssueCategory>,
        processQueryCustomizer(queryCustomizer),
      );

      setData(res);
      setPayloadDiff({
        __identifier: res.__identifier,
        __signedIdentifier: res.__signedIdentifier,
        __version: res.__version,
        __entityType: res.__entityType,
      } as Record<keyof AdminIssueCategoryStored, any>);
    } catch (error) {
      handleFetchError(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function saveData() {
    setIsLoading(true);

    try {
      const res = await adminIssueCategoryServiceImpl.update(payloadDiff);

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
      await adminIssueCategoryServiceImpl.delete(data);

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
    setValidation(new Map<keyof AdminIssueCategory, string>());
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
              <TextField
                required
                name="title"
                id="TextInputedemokraciaAdminAdminEdemokraciaAdminIssueCategorySubcategoriesViewDefaultCategoryViewTitle"
                label={t('admin.IssueCategoryView.title', { defaultValue: 'Title' }) as string}
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
                required
                name="description"
                id="TextInputedemokraciaAdminAdminEdemokraciaAdminIssueCategorySubcategoriesViewDefaultCategoryViewDescription"
                label={t('admin.IssueCategoryView.description', { defaultValue: 'Description' }) as string}
                value={data.description}
                className={!editMode ? 'JUDO-viewMode' : undefined}
                disabled={false || !isFormUpdateable()}
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

            <Grid item xs={12} sm={12}>
              <OwnerLink
                ownerData={data}
                disabled={false || !isFormUpdateable()}
                editMode={editMode}
                fetchOwnerData={fetchData}
                storeDiff={storeDiff}
                validation={validation}
              />
            </Grid>

            <Grid item xs={12} sm={12}>
              <Grid
                id="FlexedemokraciaAdminAdminEdemokraciaAdminIssueCategorySubcategoriesViewDefaultCategoryViewSubcategoriesLabelWrapper"
                container
                direction="column"
                alignItems="stretch"
                justifyContent="flex-start"
                spacing={2}
              >
                <Grid item xs={12} sm={12}>
                  <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                    <MdiIcon path="file-tree" />
                    <Typography
                      id="LabeledemokraciaAdminAdminEdemokraciaAdminIssueCategorySubcategoriesViewDefaultCategoryViewSubcategoriesLabelWrapperSubcategoriesLabel"
                      variant="h6"
                      component="h1"
                    >
                      {t('admin.IssueCategoryView.subcategories.Label', { defaultValue: 'Subcategories' })}
                    </Typography>
                  </Grid>
                </Grid>

                <Grid item xs={12} sm={12}>
                  <Grid
                    id="TableedemokraciaAdminAdminEdemokraciaAdminIssueCategorySubcategoriesViewDefaultCategoryViewSubcategoriesLabelWrapperSubcategories"
                    container
                    direction="column"
                    alignItems="stretch"
                    justifyContent="flex-start"
                  >
                    <SubcategoriesTable
                      isOwnerLoading={isLoading}
                      fetchOwnerData={fetchData}
                      ownerData={data}
                      editMode={editMode}
                      isFormUpdateable={isFormUpdateable}
                      storeDiff={storeDiff}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
