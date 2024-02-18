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
  ServiceDistrict,
  ServiceDistrictQueryCustomizer,
  ServiceDistrictStored,
} from '~/services/data-api';
import type { ServiceCityCity_View_EditDistrictsComponentActionDefinitions } from './components/ServiceCityCity_View_EditDistrictsComponent';
import { ServiceCityCity_View_EditDistrictsComponent } from './components/ServiceCityCity_View_EditDistrictsComponent';

export const SERVICE_CITY_CITY_VIEW_EDIT_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_CITY_CITY_VIEW_EDIT_CONTAINER_ACTIONS_HOOK';
export type ServiceCityCity_View_EditContainerHook = (
  data: ServiceCityStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof ServiceCity, value: any) => void,
) => ServiceCityCity_View_EditActionDefinitions;

export interface ServiceCityCity_View_EditActionDefinitions
  extends ServiceCityCity_View_EditDistrictsComponentActionDefinitions {
  getPageTitle?: (data: ServiceCity) => string;
  isNameRequired?: (data: ServiceCity | ServiceCityStored, editMode?: boolean) => boolean;
  isNameDisabled?: (data: ServiceCity | ServiceCityStored, editMode?: boolean, isLoading?: boolean) => boolean;
  getMask?: () => string;
}

export interface ServiceCityCity_View_EditProps {
  refreshCounter: number;
  isLoading: boolean;
  actions: ServiceCityCity_View_EditActionDefinitions;

  data: ServiceCityStored;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof ServiceCity, value: any) => void;
  editMode: boolean;
  validation: Map<keyof ServiceCity, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof ServiceCity, string>>>;
  submit: () => Promise<void>;
  isDraft?: boolean;
}

// XMIID: User/(esm/_a0XkuH2iEe2LTNnGda5kaw)/TransferObjectViewPageContainer
// Name: service::City::City_View_Edit
export default function ServiceCityCity_View_Edit(props: ServiceCityCity_View_EditProps) {
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
  const { service: customContainerHook } = useTrackService<ServiceCityCity_View_EditContainerHook>(
    `(${OBJECTCLASS}=${SERVICE_CITY_CITY_VIEW_EDIT_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const containerActions: ServiceCityCity_View_EditActionDefinitions =
    customContainerHook?.(data, editMode, storeDiff) || {};
  const actions = useMemo(() => ({ ...containerActions, ...pageActions }), [containerActions, pageActions]);

  return (
    <Grid container>
      <Grid item data-name="City_View_Edit" xs={12} sm={12} md={36.0}>
        <Grid
          id="User/(esm/_a0XkuH2iEe2LTNnGda5kaw)/TransferObjectViewVisualElement"
          data-name="City_View_Edit"
          container
          direction="column"
          alignItems="stretch"
          justifyContent="flex-start"
          spacing={2}
        >
          <Grid item xs={12} sm={12} md={4.0}>
            <TextField
              required={actions?.isNameRequired ? actions.isNameRequired(data, editMode) : true}
              name="name"
              id="User/(esm/_dL1nYH4bEe2j59SYy0JH0Q)/StringTypeTextInput"
              label={t('service.City.City_View_Edit.name', { defaultValue: 'City name' }) as string}
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

          <Grid item xs={12} sm={12}>
            <Grid
              id="User/(esm/_cLC8gIXhEe2kLcMqsIbMgQ)/TabularReferenceFieldRelationDefinedTable"
              container
              direction="column"
              alignItems="stretch"
              justifyContent="flex-start"
            >
              <ServiceCityCity_View_EditDistrictsComponent
                uniqueId={'User/(esm/_cLC8gIXhEe2kLcMqsIbMgQ)/TabularReferenceFieldRelationDefinedTable'}
                actions={actions}
                ownerData={data}
                editMode={editMode}
                isFormUpdateable={isFormUpdateable}
                validationError={validation.get('districts')}
                refreshCounter={refreshCounter}
                isOwnerLoading={isLoading}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
