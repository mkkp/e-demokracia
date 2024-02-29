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
import MenuItem from '@mui/material/MenuItem';
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
import { autoFocusRefDelay } from '~/config';
import { useConfirmationBeforeChange } from '~/hooks';
import {
  YesNoAbstainVoteInput,
  YesNoAbstainVoteInputQueryCustomizer,
  YesNoAbstainVoteInputStored,
} from '~/services/data-api';

export const YES_NO_ABSTAIN_VOTE_INPUT_YES_NO_ABSTAIN_VOTE_INPUT_FORM_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY =
  'YES_NO_ABSTAIN_VOTE_INPUT_YES_NO_ABSTAIN_VOTE_INPUT_FORM_CONTAINER_ACTIONS_HOOK';
export type YesNoAbstainVoteInputYesNoAbstainVoteInput_FormContainerHook = (
  data: YesNoAbstainVoteInputStored,
  editMode: boolean,
  storeDiff: (attributeName: keyof YesNoAbstainVoteInput, value: any) => void,
) => YesNoAbstainVoteInputYesNoAbstainVoteInput_FormActionDefinitions;

export interface YesNoAbstainVoteInputYesNoAbstainVoteInput_FormActionDefinitions {
  getPageTitle?: (data: YesNoAbstainVoteInput) => string;
  voteYesNoAbstainForVoteDefinitionAction?: () => Promise<void>;
  voteForYesNoAbstainVoteDefinitionAction?: () => Promise<void>;
  isValueRequired?: (data: YesNoAbstainVoteInput | YesNoAbstainVoteInputStored, editMode?: boolean) => boolean;
  isValueDisabled?: (
    data: YesNoAbstainVoteInput | YesNoAbstainVoteInputStored,
    editMode?: boolean,
    isLoading?: boolean,
  ) => boolean;
}

export interface YesNoAbstainVoteInputYesNoAbstainVoteInput_FormProps {
  refreshCounter: number;
  isLoading: boolean;
  actions: YesNoAbstainVoteInputYesNoAbstainVoteInput_FormActionDefinitions;

  data: YesNoAbstainVoteInputStored;
  isFormUpdateable: () => boolean;
  isFormDeleteable: () => boolean;
  storeDiff: (attributeName: keyof YesNoAbstainVoteInput, value: any) => void;
  editMode: boolean;
  validation: Map<keyof YesNoAbstainVoteInput, string>;
  setValidation: Dispatch<SetStateAction<Map<keyof YesNoAbstainVoteInput, string>>>;
  submit: () => Promise<void>;
  isDraft?: boolean;
}

// XMIID: User/(esm/_-1U_03WyEe2LTNnGda5kaw)/TransferObjectFormPageContainer
// Name: YesNoAbstainVoteInput::YesNoAbstainVoteInput_Form
export default function YesNoAbstainVoteInputYesNoAbstainVoteInput_Form(
  props: YesNoAbstainVoteInputYesNoAbstainVoteInput_FormProps,
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
  const { service: customContainerHook } =
    useTrackService<YesNoAbstainVoteInputYesNoAbstainVoteInput_FormContainerHook>(
      `(${OBJECTCLASS}=${YES_NO_ABSTAIN_VOTE_INPUT_YES_NO_ABSTAIN_VOTE_INPUT_FORM_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY})`,
    );
  const containerActions: YesNoAbstainVoteInputYesNoAbstainVoteInput_FormActionDefinitions =
    customContainerHook?.(data, editMode, storeDiff) || {};
  const actions = useMemo(() => ({ ...pageActions, ...containerActions }), [pageActions, containerActions]);
  const autoFocusInputRef = useRef<any>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (typeof autoFocusInputRef?.current?.focus === 'function') {
        autoFocusInputRef.current.focus();
      }
    }, autoFocusRefDelay);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Grid container>
      <Grid item data-name="YesNoAbstainVoteInput_Form" xs={12} sm={12} md={36.0}>
        <Grid
          id="User/(esm/_-1U_03WyEe2LTNnGda5kaw)/TransferObjectFormVisualElement"
          data-name="YesNoAbstainVoteInput_Form"
          container
          direction="column"
          alignItems="stretch"
          justifyContent="flex-start"
          spacing={2}
        >
          <Grid item xs={12} sm={12} md={4.0}>
            <TextField
              required={actions?.isValueRequired ? actions.isValueRequired(data, editMode) : false}
              name="value"
              id="User/(esm/_6ISHYOSLEe20cv3f2msZXg)/EnumerationTypeCombo"
              inputRef={autoFocusInputRef}
              label={t('YesNoAbstainVoteInput.YesNoAbstainVoteInput_Form.value', { defaultValue: 'Vote' }) as string}
              value={data.value || ''}
              className={clsx({
                'JUDO-viewMode': !editMode,
                'JUDO-required': false,
              })}
              disabled={actions?.isValueDisabled ? actions.isValueDisabled(data, editMode, isLoading) : isLoading}
              error={!!validation.get('value')}
              helperText={validation.get('value')}
              onChange={(event) => {
                storeDiff('value', event.target.value);
              }}
              InputLabelProps={{ shrink: true }}
              InputProps={{
                readOnly: false || !isFormUpdateable(),
                startAdornment: (
                  <InputAdornment position="start">
                    <MdiIcon path="list" />
                  </InputAdornment>
                ),
              }}
              select
            >
              <MenuItem id="User/(esm/_ON5DcW6bEe2wNaja8kBvcQ)/EnumerationTypeMember" value={'YES'}>
                {t('enumerations.YesNoAbstainVoteValue.YES', { defaultValue: 'YES' })}
              </MenuItem>
              <MenuItem id="User/(esm/_ON5Dcm6bEe2wNaja8kBvcQ)/EnumerationTypeMember" value={'NO'}>
                {t('enumerations.YesNoAbstainVoteValue.NO', { defaultValue: 'NO' })}
              </MenuItem>
              <MenuItem id="User/(esm/_ON5Dc26bEe2wNaja8kBvcQ)/EnumerationTypeMember" value={'ABSTAIN'}>
                {t('enumerations.YesNoAbstainVoteValue.ABSTAIN', { defaultValue: 'ABSTAIN' })}
              </MenuItem>
            </TextField>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
