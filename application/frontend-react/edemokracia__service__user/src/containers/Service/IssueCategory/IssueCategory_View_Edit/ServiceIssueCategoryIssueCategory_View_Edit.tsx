//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #application.pageContainers
// Path expression: 'src/containers/'+#containerPath(#self)+'/'+#containerComponentName(#self)+'.tsx'
// Template name: actor/src/containers/container.tsx
// Template file: actor/src/containers/container.tsx.hbs

import { LoadingButton } from '@mui/lab';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { OBJECTCLASS } from '@pandino/pandino-api';
import { useTrackService } from '@pandino/react-hooks';
import { clsx } from 'clsx';
import type { Dispatch, FC, SetStateAction } from 'react';
import { forwardRef, useCallback, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { DropdownButton, MdiIcon, useJudoNavigation } from '~/components';
import { useConfirmDialog } from '~/components/dialog';
import { useL10N } from '~/l10n/l10n-context';
import type { JudoIdentifiable } from '~/services/data-api/common';
import type { JudoRestResponse } from '~/services/data-api/rest';
import { isErrorOperationFault, useErrorHandler } from '~/utilities';

import {} from '@mui/x-date-pickers';
import type {} from '@mui/x-date-pickers';
import {} from '~/components/widgets';
import { useConfirmationBeforeChange } from '~/hooks';
import {
  ServiceIssueCategory,
  ServiceIssueCategoryQueryCustomizer,
  ServiceIssueCategoryStored,
  ServiceServiceUser,
  ServiceServiceUserQueryCustomizer,
  ServiceServiceUserStored,
} from '~/services/data-api';
import type { ServiceIssueCategoryIssueCategory_View_EditOwnerComponentActionDefinitions } from './components/ServiceIssueCategoryIssueCategory_View_EditOwnerComponent';
import { ServiceIssueCategoryIssueCategory_View_EditOwnerComponent } from './components/ServiceIssueCategoryIssueCategory_View_EditOwnerComponent';
import type { ServiceIssueCategoryIssueCategory_View_EditSubcategoriesComponentActionDefinitions } from './components/ServiceIssueCategoryIssueCategory_View_EditSubcategoriesComponent';
import { ServiceIssueCategoryIssueCategory_View_EditSubcategoriesComponent } from './components/ServiceIssueCategoryIssueCategory_View_EditSubcategoriesComponent';

export const SERVICE_ISSUE_CATEGORY_ISSUE_CATEGORY_VIEW_EDIT_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_ISSUE_CATEGORY_ISSUE_CATEGORY_VIEW_EDIT_CONTAINER_ACTIONS_HOOK';
export type ServiceIssueCategoryIssueCategory_View_EditContainerHook = (
  data: ServiceIssueCategoryStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof ServiceIssueCategory, value: any) => void,
) => ServiceIssueCategoryIssueCategory_View_EditActionDefinitions;

export interface ServiceIssueCategoryIssueCategory_View_EditActionDefinitions
  extends ServiceIssueCategoryIssueCategory_View_EditOwnerComponentActionDefinitions,
    ServiceIssueCategoryIssueCategory_View_EditSubcategoriesComponentActionDefinitions {
  getPageTitle?: (data: ServiceIssueCategory) => string;
  isDescriptionRequired?: (data: ServiceIssueCategory | ServiceIssueCategoryStored, editMode?: boolean) => boolean;
  isDescriptionDisabled?: (
    data: ServiceIssueCategory | ServiceIssueCategoryStored,
    editMode?: boolean,
    isLoading?: boolean,
  ) => boolean;
  isTitleRequired?: (data: ServiceIssueCategory | ServiceIssueCategoryStored, editMode?: boolean) => boolean;
  isTitleDisabled?: (
    data: ServiceIssueCategory | ServiceIssueCategoryStored,
    editMode?: boolean,
    isLoading?: boolean,
  ) => boolean;
  getMask?: () => string;
}

export interface ServiceIssueCategoryIssueCategory_View_EditProps {
  refreshCounter: number;
  isLoading: boolean;
  actions: ServiceIssueCategoryIssueCategory_View_EditActionDefinitions;

  data: ServiceIssueCategoryStored;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof ServiceIssueCategory, value: any) => void;
  editMode: boolean;
  validation: Map<keyof ServiceIssueCategory, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof ServiceIssueCategory, string>>>;
  submit: () => Promise<void>;
  isDraft?: boolean;
}

// XMIID: User/(esm/_qJBzsGksEe25ONJ3V89cVA)/TransferObjectViewPageContainer
// Name: service::IssueCategory::IssueCategory_View_Edit
export default function ServiceIssueCategoryIssueCategory_View_Edit(
  props: ServiceIssueCategoryIssueCategory_View_EditProps,
) {
  // Container props
  const {
    refreshCounter,
    isLoading,
    isDraft,
    actions: pageActions,
    data,
    isFormUpdateable,
    isFormDeleteable,
    storeDiff,
    editMode,
    validation,
    setValidation,
    submit,
  } = props;

  // Container hooks
  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { locale: l10nLocale } = useL10N();
  const { openConfirmDialog } = useConfirmDialog();

  useConfirmationBeforeChange(
    editMode,
    t('judo.form.navigation.confirmation', {
      defaultValue: 'You have potential unsaved changes in your form, are you sure you would like to navigate away?',
    }),
  );
  // Pandino Container Action overrides
  const { service: customContainerHook } = useTrackService<ServiceIssueCategoryIssueCategory_View_EditContainerHook>(
    `(${OBJECTCLASS}=${SERVICE_ISSUE_CATEGORY_ISSUE_CATEGORY_VIEW_EDIT_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const containerActions: ServiceIssueCategoryIssueCategory_View_EditActionDefinitions =
    customContainerHook?.(data, editMode, storeDiff) || {};
  const actions = useMemo(() => ({ ...containerActions, ...pageActions }), [containerActions, pageActions]);

  return (
    <Grid container>
      <Grid item data-name="IssueCategory_View_Edit" xs={12} sm={12} md={36.0}>
        <Grid
          id="User/(esm/_qJBzsGksEe25ONJ3V89cVA)/TransferObjectViewVisualElement"
          data-name="IssueCategory_View_Edit"
          container
          direction="column"
          alignItems="stretch"
          justifyContent="flex-start"
          spacing={2}
        >
          <Grid item xs={12} sm={12} md={4.0}>
            <TextField
              required={actions?.isTitleRequired ? actions.isTitleRequired(data, editMode) : true}
              name="title"
              id="User/(esm/_T0J4EG49Ee2Q6M99rsfqSQ)/StringTypeTextInput"
              label={t('service.IssueCategory.IssueCategory_View_Edit.title', { defaultValue: 'Title' }) as string}
              value={data.title ?? ''}
              className={clsx({
                'JUDO-viewMode': !editMode,
                'JUDO-required': true,
              })}
              disabled={actions?.isTitleDisabled ? actions.isTitleDisabled(data, editMode, isLoading) : isLoading}
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
              inputProps={{
                maxLength: 255,
              }}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={4.0}>
            <TextField
              required={actions?.isDescriptionRequired ? actions.isDescriptionRequired(data, editMode) : true}
              name="description"
              id="User/(esm/_T0QlwG49Ee2Q6M99rsfqSQ)/StringTypeTextInput"
              label={
                t('service.IssueCategory.IssueCategory_View_Edit.description', {
                  defaultValue: 'Description',
                }) as string
              }
              value={data.description ?? ''}
              className={clsx({
                'JUDO-viewMode': !editMode,
                'JUDO-required': true,
              })}
              disabled={
                actions?.isDescriptionDisabled ? actions.isDescriptionDisabled(data, editMode, isLoading) : isLoading
              }
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
              inputProps={{
                maxLength: 16384,
              }}
            />
          </Grid>

          <Grid item xs={12} sm={12}>
            <ServiceIssueCategoryIssueCategory_View_EditOwnerComponent
              disabled={false}
              readOnly={false || !isFormUpdateable()}
              ownerData={data}
              editMode={editMode}
              isLoading={isLoading}
              isDraft={isDraft}
              storeDiff={storeDiff}
              validationError={validation.get('owner')}
              actions={actions}
              submit={submit}
            />
          </Grid>

          <Grid item data-name="subcategories::LabelWrapper" xs={12} sm={12}>
            <Grid
              id="(User/(esm/_8sbTAIdgEe2kLcMqsIbMgQ)/WrapAndLabelVisualElement)/LabelWrapper"
              data-name="subcategories::LabelWrapper"
              container
              direction="column"
              alignItems="stretch"
              justifyContent="flex-start"
              spacing={2}
            >
              <Grid item xs={12} sm={12}>
                <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                  <MdiIcon path="file-tree" sx={{ marginRight: 1 }} />
                  <Typography
                    id="User/(esm/_8sbTAIdgEe2kLcMqsIbMgQ)/WrapAndLabelVisualElement)/Label"
                    variant="h5"
                    component="h1"
                  >
                    {t('service.IssueCategory.IssueCategory_View_Edit.subcategories.Label', {
                      defaultValue: 'Subcategories',
                    })}
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
                    uniqueId={'User/(esm/_8sbTAIdgEe2kLcMqsIbMgQ)/TabularReferenceFieldRelationDefinedTable'}
                    actions={actions}
                    ownerData={data}
                    editMode={editMode}
                    isFormUpdateable={isFormUpdateable}
                    validationError={validation.get('subcategories')}
                    refreshCounter={refreshCounter}
                    isOwnerLoading={isLoading}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
