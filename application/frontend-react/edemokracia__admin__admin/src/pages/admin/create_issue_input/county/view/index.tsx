//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPagesForRouting(#application)
// Path expression: #pageIndexPath(#self)
// Template name: actor/src/pages/index.tsx
// Template file: actor/src/pages/index.tsx.hbs
// Page name: edemokracia::admin::CreateIssueInput.county#View
// Page owner name: edemokracia::admin::Admin
// Page DataElement name: county
// Page DataElement owner name: edemokracia::admin::CreateIssueInput

import type { FC } from 'react';
import { useEffect, useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Container, Grid, Button, Card, CardContent, InputAdornment, TextField, Typography } from '@mui/material';
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
  AdminCity,
  AdminCityQueryCustomizer,
  AdminCityStored,
  AdminCounty,
  AdminCountyQueryCustomizer,
  AdminCountyStored,
  AdminCreateIssueInput,
  AdminCreateIssueInputStored,
} from '~/generated/data-api';
import { adminCreateIssueInputServiceForClassImpl, adminCountyServiceForClassImpl } from '~/generated/data-axios';

import {} from './actions';

import { PageActions } from './components/PageActions';
import { CitiesTable } from './components/CitiesTable';

/**
 * Name: edemokracia::admin::CreateIssueInput.county#View
 * Is Access: false
 * Type: View
 * Edit Mode Available: false
 **/
export default function AdminCreateIssueInputCountyView() {
  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { signedIdentifier } = useParams();

  const { openRangeDialog } = useRangeDialog();
  const { downloadFile, extractFileNameFromToken, uploadFile } = fileHandling();
  const { locale: l10nLocale } = useL10N();

  const handleFetchError = useErrorHandler(
    `(&(${OBJECTCLASS}=${ERROR_PROCESSOR_HOOK_INTERFACE_KEY})(operation=Fetch))`,
  );
  const { enqueueSnackbar } = useSnackbar();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [refreshCounter, setRefreshCounter] = useState<number>(0);
  const [data, setData] = useState<AdminCountyStored>({} as unknown as AdminCountyStored);
  const [payloadDiff, setPayloadDiff] = useState<Record<keyof AdminCountyStored, any>>(
    {} as unknown as Record<keyof AdminCountyStored, any>,
  );
  const [editMode, setEditMode] = useState<boolean>(false);
  const storeDiff: (attributeName: keyof AdminCountyStored, value: any) => void = useCallback(
    (attributeName: keyof AdminCountyStored, value: any) => {
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
  const [validation, setValidation] = useState<Map<keyof AdminCounty, string>>(new Map<keyof AdminCounty, string>());

  const queryCustomizer: AdminCountyQueryCustomizer = {
    _mask: '{name,representation,cities{name}}',
  };

  const title: string = data.representation as string;

  const isFormUpdateable = useCallback(() => {
    return false && typeof data?.__updateable === 'boolean' && data?.__updateable;
  }, [data]);

  const isFormDeleteable = useCallback(() => {
    return false && typeof data?.__deleteable === 'boolean' && data?.__deleteable;
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
      const res = await adminCountyServiceForClassImpl.refresh(
        { __signedIdentifier: signedIdentifier } as JudoIdentifiable<AdminCounty>,
        processQueryCustomizer(queryCustomizer),
      );

      setData(res);
      setPayloadDiff({
        __identifier: res.__identifier,
        __signedIdentifier: res.__signedIdentifier,
        __version: res.__version,
        __entityType: res.__entityType,
      } as Record<keyof AdminCountyStored, any>);
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

  useEffect(() => {
    setValidation(new Map<keyof AdminCounty, string>());
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
                <TextField
                  required={true}
                  name="name"
                  id="TextInputedemokraciaAdminAdminEdemokraciaAdminCreateIssueInputCountyViewDefaultCountyViewName"
                  label={t('admin.CountyView.name', { defaultValue: 'County name' }) as string}
                  value={data.name ?? ''}
                  className={clsx({
                    'JUDO-viewMode': !editMode,
                    'JUDO-required': true,
                  })}
                  disabled={isLoading}
                  error={!!validation.get('name')}
                  helperText={validation.get('name')}
                  onChange={(event) => {
                    const realValue = event.target.value?.length === 0 ? null : event.target.value;
                    storeDiff('name', realValue);
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
                <Grid
                  id="FlexedemokraciaAdminAdminEdemokraciaAdminCreateIssueInputCountyViewDefaultCountyViewCitiesLabelWrapper"
                  container
                  direction="column"
                  alignItems="stretch"
                  justifyContent="flex-start"
                  spacing={2}
                >
                  <Grid item xs={12} sm={12}>
                    <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                      <MdiIcon path="city" sx={{ marginRight: 1 }} />
                      <Typography
                        id="LabeledemokraciaAdminAdminEdemokraciaAdminCreateIssueInputCountyViewDefaultCountyViewCitiesLabelWrapperCitiesLabel"
                        variant="h6"
                        component="h1"
                      >
                        {t('admin.CountyView.cities.Label', { defaultValue: 'Cities' })}
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid item xs={12} sm={12}>
                    <Grid
                      id="TableedemokraciaAdminAdminEdemokraciaAdminCreateIssueInputCountyViewDefaultCountyViewCitiesLabelWrapperCities"
                      container
                      direction="column"
                      alignItems="stretch"
                      justifyContent="flex-start"
                    >
                      <CitiesTable
                        isOwnerLoading={isLoading}
                        validation={validation}
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
        </PageContainerTransition>
      </Container>
    </>
  );
}
