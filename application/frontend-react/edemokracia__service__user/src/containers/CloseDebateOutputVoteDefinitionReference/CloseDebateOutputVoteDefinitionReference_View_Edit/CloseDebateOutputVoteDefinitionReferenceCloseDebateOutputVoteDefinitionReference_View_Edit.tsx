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
import { Box, Container, Grid, Button, Card, CardContent, InputAdornment, TextField } from '@mui/material';
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
  CloseDebateOutputVoteDefinitionReference,
  CloseDebateOutputVoteDefinitionReferenceQueryCustomizer,
  CloseDebateOutputVoteDefinitionReferenceStored,
} from '~/services/data-api';

export interface CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_View_EditActionDefinitions {}

export interface CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_View_EditProps {
  refreshCounter: number;
  actions: CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_View_EditActionDefinitions;

  data: CloseDebateOutputVoteDefinitionReference;
  isLoading: boolean;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof CloseDebateOutputVoteDefinitionReference, value: any) => void;
  editMode: boolean;
  validation: Map<keyof CloseDebateOutputVoteDefinitionReference, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof CloseDebateOutputVoteDefinitionReference, string>>>;
}

// XMIID: User/(esm/_YoAHwVu1Ee6Lb6PYNSnQSA)/TransferObjectViewPageContainer
// Name: CloseDebateOutputVoteDefinitionReference::CloseDebateOutputVoteDefinitionReference_View_Edit
export default function CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_View_Edit(
  props: CloseDebateOutputVoteDefinitionReferenceCloseDebateOutputVoteDefinitionReference_View_EditProps,
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
          required={false}
          name="context"
          id="User/(esm/_f6ew0Fv3Ee6nEc5rp_Qy4A)/StringTypeTextInput"
          autoFocus
          label={
            t(
              'CloseDebateOutputVoteDefinitionReference.CloseDebateOutputVoteDefinitionReference.View.Edit.context.CloseDebateOutputVoteDefinitionReference_View_Edit.CloseDebateOutputVoteDefinitionReference::CloseDebateOutputVoteDefinitionReference_View_Edit',
              { defaultValue: 'Context' },
            ) as string
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
