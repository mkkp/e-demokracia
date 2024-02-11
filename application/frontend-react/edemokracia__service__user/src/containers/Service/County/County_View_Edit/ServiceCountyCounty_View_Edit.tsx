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
  ServiceCity,
  ServiceCityQueryCustomizer,
  ServiceCityStored,
  ServiceCounty,
  ServiceCountyQueryCustomizer,
  ServiceCountyStored,
} from '~/services/data-api';
import type { ServiceCountyCounty_View_EditCitiesComponentActionDefinitions } from './components/ServiceCountyCounty_View_EditCitiesComponent';
import { ServiceCountyCounty_View_EditCitiesComponent } from './components/ServiceCountyCounty_View_EditCitiesComponent';

export const SERVICE_COUNTY_COUNTY_VIEW_EDIT_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_COUNTY_COUNTY_VIEW_EDIT_CONTAINER_ACTIONS_HOOK';
export type ServiceCountyCounty_View_EditContainerHook = (
  data: ServiceCountyStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof ServiceCounty, value: any) => void,
) => ServiceCountyCounty_View_EditActionDefinitions;

export interface ServiceCountyCounty_View_EditActionDefinitions
  extends ServiceCountyCounty_View_EditCitiesComponentActionDefinitions {
  getPageTitle?: (data: ServiceCounty) => string;
  isNameRequired?: (data: ServiceCounty | ServiceCountyStored, editMode?: boolean) => boolean;
  isNameDisabled?: (data: ServiceCounty | ServiceCountyStored, editMode?: boolean, isLoading?: boolean) => boolean;
  getMask?: () => string;
}

export interface ServiceCountyCounty_View_EditProps {
  refreshCounter: number;
  isLoading: boolean;
  actions: ServiceCountyCounty_View_EditActionDefinitions;

  data: ServiceCountyStored;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof ServiceCounty, value: any) => void;
  editMode: boolean;
  validation: Map<keyof ServiceCounty, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof ServiceCounty, string>>>;
  submit: () => Promise<void>;
  isDraft?: boolean;
}

// XMIID: User/(esm/_a0aoCH2iEe2LTNnGda5kaw)/TransferObjectViewPageContainer
// Name: service::County::County_View_Edit
export default function ServiceCountyCounty_View_Edit(props: ServiceCountyCounty_View_EditProps) {
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
  const { service: customContainerHook } = useTrackService<ServiceCountyCounty_View_EditContainerHook>(
    `(${OBJECTCLASS}=${SERVICE_COUNTY_COUNTY_VIEW_EDIT_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const containerActions: ServiceCountyCounty_View_EditActionDefinitions =
    customContainerHook?.(data, editMode, storeDiff) || {};
  const actions = useMemo(() => ({ ...containerActions, ...pageActions }), [containerActions, pageActions]);

  return (
    <Grid container>
      <Grid item data-name="County_View_Edit" xs={12} sm={12} md={36.0}>
        <Grid
          id="User/(esm/_a0aoCH2iEe2LTNnGda5kaw)/TransferObjectViewVisualElement"
          data-name="County_View_Edit"
          container
          direction="column"
          alignItems="stretch"
          justifyContent="flex-start"
          spacing={2}
        >
          <Grid item xs={12} sm={12}>
            <TextField
              required={actions?.isNameRequired ? actions.isNameRequired(data, editMode) : true}
              name="name"
              id="User/(esm/_dLSNwH4bEe2j59SYy0JH0Q)/StringTypeTextInput"
              label={t('service.County.County_View_Edit.name', { defaultValue: 'County name' }) as string}
              value={data.name ?? ''}
              className={clsx({
                'JUDO-viewMode': !editMode,
                'JUDO-required': true,
              })}
              disabled={actions?.isNameDisabled ? actions.isNameDisabled(data, editMode, isLoading) : isLoading}
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
              inputProps={{
                maxLength: 255,
              }}
            />
          </Grid>

          <Grid item data-name="cities::LabelWrapper" xs={12} sm={12}>
            <Grid
              id="(User/(esm/_cK7AsIXhEe2kLcMqsIbMgQ)/WrapAndLabelVisualElement)/LabelWrapper"
              data-name="cities::LabelWrapper"
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
                    id="User/(esm/_cK7AsIXhEe2kLcMqsIbMgQ)/WrapAndLabelVisualElement)/Label"
                    variant="h5"
                    component="h1"
                  >
                    {t('service.County.County_View_Edit.cities.Label', { defaultValue: 'Cities' })}
                  </Typography>
                </Grid>
              </Grid>

              <Grid item xs={12} sm={12}>
                <Grid
                  id="User/(esm/_cK7AsIXhEe2kLcMqsIbMgQ)/TabularReferenceFieldRelationDefinedTable"
                  container
                  direction="column"
                  alignItems="stretch"
                  justifyContent="flex-start"
                >
                  <ServiceCountyCounty_View_EditCitiesComponent
                    uniqueId={'User/(esm/_cK7AsIXhEe2kLcMqsIbMgQ)/TabularReferenceFieldRelationDefinedTable'}
                    actions={actions}
                    ownerData={data}
                    editMode={editMode}
                    isFormUpdateable={isFormUpdateable}
                    validationError={validation.get('cities')}
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
