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
import type { CustomFormVisualElementProps } from '~/custom';
import { ComponentProxy } from '@pandino/react-hooks';
import { clsx } from 'clsx';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
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
import {
  AssociationButton,
  BinaryInput,
  CollectionAssociationButton,
  NumericInput,
  TrinaryLogicCombobox,
} from '~/components/widgets';
import { useConfirmationBeforeChange } from '~/hooks';
import {
  CloseDebateOutputVoteDefinitionReference,
  CloseDebateOutputVoteDefinitionReferenceQueryCustomizer,
  CloseDebateOutputVoteDefinitionReferenceStored,
} from '~/services/data-api';

export interface CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_FormActionDefinitions {}

export interface CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_FormProps {
  refreshCounter: number;
  actions: CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_FormActionDefinitions;

  data: CloseDebateOutputVoteDefinitionReferenceStored;
  isLoading: boolean;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof CloseDebateOutputVoteDefinitionReference, value: any) => void;
  editMode: boolean;
  validation: Map<keyof CloseDebateOutputVoteDefinitionReference, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof CloseDebateOutputVoteDefinitionReference, string>>>;
}

// XMIID: User/(esm/_YoAHuVu1Ee6Lb6PYNSnQSA)/TransferObjectFormPageContainer
// Name: CloseDebateOutputVoteDefinitionReference::CloseDebateOutputVoteDefinitionReference_Form
export default function CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_Form(
  props: CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_FormProps,
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
        <Card id="_Y7Q4wIpWEe6AtscSh_kd4w)/LabelWrapper">
          <CardContent>
            <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
              <Grid item xs={12} sm={12}>
                <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                  <MdiIcon path="debate::Icon" sx={{ marginRight: 1 }} />
                  <Typography id="_Y7Q4wIpWEe6AtscSh_kd4w)/Label" variant="h5" component="h1">
                    {t(
                      'CloseDebateOutputVoteDefinitionReference.CloseDebateOutputVoteDefinitionReference_Form.debate.Icon',
                      { defaultValue: 'Close debate' },
                    )}
                  </Typography>
                </Grid>
              </Grid>

              <Grid item xs={12} sm={12}>
                <Grid
                  id="User/(esm/_YoAHulu1Ee6Lb6PYNSnQSA)/GroupVisualElement"
                  container
                  direction="row"
                  alignItems="stretch"
                  justifyContent="flex-start"
                  spacing={2}
                ></Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={12}>
        <TextField
          required={false}
          name="context"
          id="User/(esm/_f6jpUFv3Ee6nEc5rp_Qy4A)/StringTypeTextInput"
          autoFocus
          label={
            t('CloseDebateOutputVoteDefinitionReference.CloseDebateOutputVoteDefinitionReference_Form.context', {
              defaultValue: 'Context',
            }) as string
          }
          value={data.context ?? ''}
          className={clsx({
            'JUDO-viewMode': !editMode,
            'JUDO-required': false,
          })}
          disabled={isLoading}
          error={!!validation.get('context')}
          helperText={validation.get('context')}
          onChange={(event) => {
            const realValue = event.target.value?.length === 0 ? null : event.target.value;
            storeDiff('context', realValue);
          }}
          InputLabelProps={{ shrink: true }}
          InputProps={{
            readOnly: false || !isFormUpdateable(),
            startAdornment: (
              <InputAdornment position="start">
                <MdiIcon path="format-size" />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
    </Grid>
  );
}
