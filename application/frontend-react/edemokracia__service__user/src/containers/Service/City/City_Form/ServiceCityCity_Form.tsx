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
import { OBJECTCLASS } from '@pandino/pandino-api';
import { useTrackService } from '@pandino/react-hooks';
import { clsx } from 'clsx';
import type { Dispatch, FC, SetStateAction } from 'react';
import { forwardRef, useCallback, useEffect, useImperativeHandle, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { DropdownButton, MdiIcon, useJudoNavigation } from '~/components';
import { useConfirmDialog } from '~/components/dialog';
import { useL10N } from '~/l10n/l10n-context';
import type { JudoIdentifiable } from '~/services/data-api/common';
import { isErrorOperationFault, useErrorHandler } from '~/utilities';

import {} from '@mui/x-date-pickers';
import type {} from '@mui/x-date-pickers';
import {} from '~/components/widgets';
import { useConfirmationBeforeChange } from '~/hooks';
import { ServiceCity, ServiceCityQueryCustomizer, ServiceCityStored } from '~/services/data-api';

export const SERVICE_CITY_CITY_FORM_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY = 'ServiceCityCity_FormContainerHook';
export type ServiceCityCity_FormContainerHook = (
  data: ServiceCityStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof ServiceCity, value: any) => void,
) => ServiceCityCity_FormActionDefinitions;

export interface ServiceCityCity_FormActionDefinitions {
  isNameRequired?: (data: ServiceCity | ServiceCityStored, editMode?: boolean) => boolean;
  isNameDisabled?: (data: ServiceCity | ServiceCityStored, editMode?: boolean, isLoading?: boolean) => boolean;
}

export interface ServiceCityCity_FormProps {
  refreshCounter: number;
  actions: ServiceCityCity_FormActionDefinitions;

  data: ServiceCityStored;
  isLoading: boolean;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof ServiceCity, value: any) => void;
  editMode: boolean;
  validation: Map<keyof ServiceCity, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof ServiceCity, string>>>;
  submit: () => Promise<void>;
}

// XMIID: User/(esm/_a0Xktn2iEe2LTNnGda5kaw)/TransferObjectFormPageContainer
// Name: service::City::City_Form
export default function ServiceCityCity_Form(props: ServiceCityCity_FormProps) {
  // Container props
  const {
    refreshCounter,
    actions: pageActions,
    data,
    isLoading,
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
  const { service: customContainerHook } = useTrackService<ServiceCityCity_FormContainerHook>(
    `(${OBJECTCLASS}=${SERVICE_CITY_CITY_FORM_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const containerActions: ServiceCityCity_FormActionDefinitions =
    customContainerHook?.(data, editMode, storeDiff) || {};
  const actions = useMemo(() => ({ ...containerActions, ...pageActions }), [containerActions, pageActions]);

  return (
    <Grid container>
      <Grid item xs={12} sm={12}>
        <Grid
          id="User/(esm/_a0Xktn2iEe2LTNnGda5kaw)/TransferObjectFormVisualElement"
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
              id="User/(esm/_dL4qsH4bEe2j59SYy0JH0Q)/StringTypeTextInput"
              autoFocus
              label={t('service.City.City_Form.name', { defaultValue: 'City name' }) as string}
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
                maxlength: 255,
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
