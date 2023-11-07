//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #application.pageContainers
// Path expression: 'src/containers/'+#containerPath(#self)+'/'+#containerComponentName(#self)+'.tsx'
// Template name: actor/src/containers/container.tsx
// Template file: actor/src/containers/container.tsx.hbs

import type { Dispatch, SetStateAction, FC } from 'react';
import { forwardRef, useEffect, useState, useCallback, useImperativeHandle } from 'react';
import { useTranslation } from 'react-i18next';
import { NumericFormat } from 'react-number-format';
import { LoadingButton } from '@mui/lab';
import { OBJECTCLASS } from '@pandino/pandino-api';
import type { JudoIdentifiable } from '@judo/data-api-common';
import { ComponentProxy } from '@pandino/react-hooks';
import { clsx } from 'clsx';
import { Box, Container, Grid, Button, Card, CardContent, InputAdornment, TextField, Typography } from '@mui/material';
import type { GridFilterModel } from '@mui/x-data-grid';
import { useL10N } from '~/l10n/l10n-context';
import { CUSTOM_VISUAL_ELEMENT_INTERFACE_KEY } from '~/custom';
import { mainContainerPadding } from '~/theme';
import { DIVIDER_HEIGHT } from '~/config';
import type { Filter } from '~/components-api';
import { MdiIcon, ModeledTabs, DropdownButton, useJudoNavigation } from '~/components';
import {
  isErrorOperationFault,
  useErrorHandler,
  fileHandling,
  uiDateToServiceDate,
  serviceDateToUiDate,
  uiTimeToServiceTime,
  serviceTimeToUiTime,
  stringToBooleanSelect,
  booleanToStringSelect,
} from '~/utilities';

import { DatePicker, DateTimePicker, TimePicker } from '@mui/x-date-pickers';
import type { DateValidationError, DateTimeValidationError, TimeValidationError } from '@mui/x-date-pickers';
import { AssociationButton, BinaryInput, CollectionAssociationButton, NumericInput } from '~/components/widgets';
import { useConfirmationBeforeChange } from '~/hooks';
import {
  ServiceIssueCategory,
  ServiceIssueCategoryQueryCustomizer,
  ServiceIssueCategoryStored,
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
} from '~/services/data-api';
import type { ServiceIssueCategoryIssueCategory_View_EditSubcategoriesComponentActionDefinitions } from './components/ServiceIssueCategoryIssueCategory_View_EditSubcategoriesComponent';
import { ServiceIssueCategoryIssueCategory_View_EditSubcategoriesComponent } from './components/ServiceIssueCategoryIssueCategory_View_EditSubcategoriesComponent';
import type { ServiceIssueCategoryIssueCategory_View_EditOwnerComponentActionDefinitions } from './components/ServiceIssueCategoryIssueCategory_View_EditOwnerComponent';
import { ServiceIssueCategoryIssueCategory_View_EditOwnerComponent } from './components/ServiceIssueCategoryIssueCategory_View_EditOwnerComponent';

export interface ServiceIssueCategoryIssueCategory_View_EditActionDefinitions
  extends ServiceIssueCategoryIssueCategory_View_EditOwnerComponentActionDefinitions,
    ServiceIssueCategoryIssueCategory_View_EditSubcategoriesComponentActionDefinitions {}

export interface ServiceIssueCategoryIssueCategory_View_EditProps {
  refreshCounter: number;
  actions: ServiceIssueCategoryIssueCategory_View_EditActionDefinitions;

  data: ServiceIssueCategory;
  isLoading: boolean;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof ServiceIssueCategory, value: any) => void;
  editMode: boolean;
  validation: Map<keyof ServiceIssueCategory, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof ServiceIssueCategory, string>>>;
}

// XMIID: User/(esm/_qJBzsGksEe25ONJ3V89cVA)/TransferObjectViewPageContainer
// Name: service::IssueCategory::IssueCategory_View_Edit
export default function ServiceIssueCategoryIssueCategory_View_Edit(
  props: ServiceIssueCategoryIssueCategory_View_EditProps,
) {
  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const {
    refreshCounter,
    actions,
    data,
    isLoading,
    isFormUpdateable,
    isFormDeleteable,
    storeDiff,
    editMode,
    validation,
    setValidation,
  } = props;
  const { locale: l10nLocale } = useL10N();

  useConfirmationBeforeChange(
    editMode,
    t('judo.form.navigation.confirmation', {
      defaultValue: 'You have potential unsaved changes in your form, are you sure you would like to navigate away?',
    }),
  );

  return (
    <Grid container spacing={2} direction="column" alignItems="stretch" justifyContent="flex-start">
      <Grid item xs={12} sm={12}>
        <TextField
          required={true}
          name="title"
          id="User/(esm/_T0J4EG49Ee2Q6M99rsfqSQ)/StringTypeTextInput"
          autoFocus
          label={
            t(
              'service.IssueCategory.IssueCategory.View.Edit.title.IssueCategory_View_Edit.service::IssueCategory::IssueCategory_View_Edit',
              { defaultValue: 'Title' },
            ) as string
          }
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
          required={true}
          name="description"
          id="User/(esm/_T0QlwG49Ee2Q6M99rsfqSQ)/StringTypeTextInput"
          label={
            t(
              'service.IssueCategory.IssueCategory.View.Edit.description.IssueCategory_View_Edit.service::IssueCategory::IssueCategory_View_Edit',
              { defaultValue: 'Description' },
            ) as string
          }
          value={data.description ?? ''}
          className={clsx({
            'JUDO-viewMode': !editMode,
            'JUDO-required': true,
          })}
          disabled={isLoading}
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

      <Grid item xs={12} sm={12}>
        <ServiceIssueCategoryIssueCategory_View_EditOwnerComponent
          disabled={false || !isFormUpdateable()}
          ownerData={data}
          editMode={editMode}
          storeDiff={storeDiff}
          validationError={validation.get('owner')}
          actions={actions}
        />
      </Grid>

      <Grid item xs={12} sm={12}>
        <Grid
          id="User/(esm/_8sbTAIdgEe2kLcMqsIbMgQ)/TabularReferenceFieldRelationDefinedTable)/LabelWrapper"
          container
          direction="column"
          alignItems="center"
          justifyContent="flex-start"
          spacing={2}
        >
          <Grid item xs={12} sm={12}>
            <Grid container direction="row" alignItems="center" justifyContent="flex-start">
              <MdiIcon path="file-tree" sx={{ marginRight: 1 }} />
              <Typography
                id="User/(esm/_8sbTAIdgEe2kLcMqsIbMgQ)/TabularReferenceFieldRelationDefinedTable)/Label"
                variant="h5"
                component="h1"
              >
                {t(
                  'service.IssueCategory.IssueCategory.View.Edit.subcategories::Label.subcategories::LabelWrapper.IssueCategory_View_Edit.service::IssueCategory::IssueCategory_View_Edit',
                  { defaultValue: 'Subcategories' },
                )}
              </Typography>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={12}>
            <Grid
              id="User/(esm/_8sbTAIdgEe2kLcMqsIbMgQ)/TabularReferenceFieldRelationDefinedTable"
              container
              direction="column"
              alignItems="stretch"
              justifyContent="flex-start"
            >
              <ServiceIssueCategoryIssueCategory_View_EditSubcategoriesComponent
                uniqueId={'TMP'}
                actions={actions}
                ownerData={data}
                editMode={editMode}
                isFormUpdateable={isFormUpdateable}
                validationError={validation.get('subcategories')}
                refreshCounter={refreshCounter}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
