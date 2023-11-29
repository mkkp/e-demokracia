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
import { LoadingButton } from '@mui/lab';
import type { JudoIdentifiable } from '@judo/data-api-common';
import { clsx } from 'clsx';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { useL10N } from '~/l10n/l10n-context';
import { MdiIcon, DropdownButton, useJudoNavigation } from '~/components';
import { isErrorOperationFault, useErrorHandler } from '~/utilities';

import {} from '@mui/x-date-pickers';
import type {} from '@mui/x-date-pickers';
import {} from '~/components/widgets';
import { useConfirmationBeforeChange } from '~/hooks';
import { ServiceDistrict, ServiceDistrictQueryCustomizer, ServiceDistrictStored } from '~/services/data-api';

export interface ServiceDistrictDistrict_View_EditActionDefinitions {}

export interface ServiceDistrictDistrict_View_EditProps {
  refreshCounter: number;
  actions: ServiceDistrictDistrict_View_EditActionDefinitions;

  data: ServiceDistrictStored;
  isLoading: boolean;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof ServiceDistrict, value: any) => void;
  editMode: boolean;
  validation: Map<keyof ServiceDistrict, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof ServiceDistrict, string>>>;
  submit: () => Promise<void>;
}

// XMIID: User/(esm/_a0UhZn2iEe2LTNnGda5kaw)/TransferObjectViewPageContainer
// Name: service::District::District_View_Edit
export default function ServiceDistrictDistrict_View_Edit(props: ServiceDistrictDistrict_View_EditProps) {
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
    submit,
  } = props;
  const { locale: l10nLocale } = useL10N();

  useConfirmationBeforeChange(
    editMode,
    t('judo.form.navigation.confirmation', {
      defaultValue: 'You have potential unsaved changes in your form, are you sure you would like to navigate away?',
    }),
  );

  return (
    <Grid container>
      <Grid item xs={12} sm={12}>
        <Grid
          id="User/(esm/_a0UhZn2iEe2LTNnGda5kaw)/TransferObjectViewVisualElement"
          container
          direction="column"
          alignItems="stretch"
          justifyContent="flex-start"
          spacing={2}
        >
          <Grid item xs={12} sm={12}>
            <TextField
              required={true}
              name="name"
              id="User/(esm/_dMOo8H4bEe2j59SYy0JH0Q)/StringTypeTextInput"
              autoFocus
              label={t('service.District.District_View_Edit.name', { defaultValue: 'District name' }) as string}
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
        </Grid>
      </Grid>
    </Grid>
  );
}
