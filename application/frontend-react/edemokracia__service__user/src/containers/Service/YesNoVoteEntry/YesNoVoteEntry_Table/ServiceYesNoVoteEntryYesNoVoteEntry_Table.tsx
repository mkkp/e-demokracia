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
import { forwardRef, useCallback, useEffect, useImperativeHandle, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { DropdownButton, MdiIcon, useJudoNavigation } from '~/components';
import { useConfirmDialog } from '~/components/dialog';
import { useL10N } from '~/l10n/l10n-context';
import {
  ServiceYesNoVoteEntry,
  ServiceYesNoVoteEntryQueryCustomizer,
  ServiceYesNoVoteEntryStored,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import { isErrorOperationFault, useErrorHandler } from '~/utilities';

export const SERVICE_YES_NO_VOTE_ENTRY_YES_NO_VOTE_ENTRY_TABLE_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY =
  'ServiceYesNoVoteEntryYesNoVoteEntry_TableContainerHook';
export type ServiceYesNoVoteEntryYesNoVoteEntry_TableContainerHook =
  () => ServiceYesNoVoteEntryYesNoVoteEntry_TableActionDefinitions;

export interface ServiceYesNoVoteEntryYesNoVoteEntry_TableActionDefinitions {}

export interface ServiceYesNoVoteEntryYesNoVoteEntry_TableProps {
  refreshCounter: number;
  actions: ServiceYesNoVoteEntryYesNoVoteEntry_TableActionDefinitions;
}

// XMIID: User/(esm/_LNiu0FoiEe6_67aMO2jOsw)/TransferObjectTablePageContainer
// Name: service::YesNoVoteEntry::YesNoVoteEntry_Table
export default function ServiceYesNoVoteEntryYesNoVoteEntry_Table(
  props: ServiceYesNoVoteEntryYesNoVoteEntry_TableProps,
) {
  // Container props
  const { refreshCounter, actions: pageActions } = props;

  // Container hooks
  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { locale: l10nLocale } = useL10N();
  const { openConfirmDialog } = useConfirmDialog();

  // Pandino Container Action overrides
  const { service: customContainerHook } = useTrackService<ServiceYesNoVoteEntryYesNoVoteEntry_TableContainerHook>(
    `(${OBJECTCLASS}=${SERVICE_YES_NO_VOTE_ENTRY_YES_NO_VOTE_ENTRY_TABLE_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const containerActions: ServiceYesNoVoteEntryYesNoVoteEntry_TableActionDefinitions = customContainerHook?.() || {};
  const actions = useMemo(() => ({ ...containerActions, ...pageActions }), [containerActions, pageActions]);

  return (
    <Grid container>
      <Grid item xs={12} sm={12}>
        <Card id="User/(esm/_LNiu0FoiEe6_67aMO2jOsw)/TransferObjectTableVisualElement">
          <CardContent>
            <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
              <Grid item xs={12} sm={12}>
                <Typography id="User/(esm/_LNiu0FoiEe6_67aMO2jOsw)/TransferObjectTableEmpty">
                  {
                    t('service.YesNoVoteEntry.YesNoVoteEntry_Table.YesNoVoteEntry_Table', {
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
