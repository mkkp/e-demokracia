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
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
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
import { YesNoVoteInput, YesNoVoteInputQueryCustomizer, YesNoVoteInputStored } from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import { isErrorOperationFault, useErrorHandler } from '~/utilities';

export const YES_NO_VOTE_INPUT_YES_NO_VOTE_INPUT_TABLE_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY =
  'YES_NO_VOTE_INPUT_YES_NO_VOTE_INPUT_TABLE_CONTAINER_ACTIONS_HOOK';
export type YesNoVoteInputYesNoVoteInput_TableContainerHook = () => YesNoVoteInputYesNoVoteInput_TableActionDefinitions;

export interface YesNoVoteInputYesNoVoteInput_TableActionDefinitions {
  getPageTitle?: () => string;
}

export interface YesNoVoteInputYesNoVoteInput_TableProps {
  refreshCounter: number;
  isLoading: boolean;
  actions: YesNoVoteInputYesNoVoteInput_TableActionDefinitions;

  isDraft?: boolean;
}

// XMIID: User/(esm/_-1R8hHWyEe2LTNnGda5kaw)/TransferObjectTablePageContainer
// Name: YesNoVoteInput::YesNoVoteInput_Table
export default function YesNoVoteInputYesNoVoteInput_Table(props: YesNoVoteInputYesNoVoteInput_TableProps) {
  // Container props
  const { refreshCounter, isLoading, isDraft, actions: pageActions } = props;

  // Container hooks
  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { locale: l10nLocale } = useL10N();
  const { openConfirmDialog } = useConfirmDialog();

  // Pandino Container Action overrides
  const { service: customContainerHook } = useTrackService<YesNoVoteInputYesNoVoteInput_TableContainerHook>(
    `(${OBJECTCLASS}=${YES_NO_VOTE_INPUT_YES_NO_VOTE_INPUT_TABLE_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const containerActions: YesNoVoteInputYesNoVoteInput_TableActionDefinitions = customContainerHook?.() || {};
  const actions = useMemo(() => ({ ...containerActions, ...pageActions }), [containerActions, pageActions]);

  return (
    <Grid container>
      <Grid item data-name="YesNoVoteInput_Table" xs={12} sm={12} md={36.0}>
        <Card id="User/(esm/_-1R8hHWyEe2LTNnGda5kaw)/TransferObjectTableVisualElement" data-name="YesNoVoteInput_Table">
          <CardContent>
            <Grid container direction="row" alignItems="stretch" justifyContent="flex-start" spacing={2}>
              <Grid item xs={12} sm={12}>
                <Typography id="User/(esm/_-1R8hHWyEe2LTNnGda5kaw)/TransferObjectTableEmpty">
                  {
                    t('YesNoVoteInput.YesNoVoteInput_Table.YesNoVoteInput_Table', {
                      defaultValue: 'No columns.',
                    }) as string
                  }
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
