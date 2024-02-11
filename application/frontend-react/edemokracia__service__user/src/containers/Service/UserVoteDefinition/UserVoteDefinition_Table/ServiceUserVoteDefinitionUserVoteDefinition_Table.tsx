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
import {
  ServiceUserVoteDefinition,
  ServiceUserVoteDefinitionQueryCustomizer,
  ServiceUserVoteDefinitionStored,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import type { JudoRestResponse } from '~/services/data-api/rest';
import { isErrorOperationFault, useErrorHandler } from '~/utilities';

export const SERVICE_USER_VOTE_DEFINITION_USER_VOTE_DEFINITION_TABLE_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_USER_VOTE_DEFINITION_USER_VOTE_DEFINITION_TABLE_CONTAINER_ACTIONS_HOOK';
export type ServiceUserVoteDefinitionUserVoteDefinition_TableContainerHook =
  () => ServiceUserVoteDefinitionUserVoteDefinition_TableActionDefinitions;

export interface ServiceUserVoteDefinitionUserVoteDefinition_TableActionDefinitions {
  getPageTitle?: () => string;
}

export interface ServiceUserVoteDefinitionUserVoteDefinition_TableProps {
  refreshCounter: number;
  isLoading: boolean;
  actions: ServiceUserVoteDefinitionUserVoteDefinition_TableActionDefinitions;

  isDraft?: boolean;
}

// XMIID: User/(esm/_gTjKMF4-Ee6vsex_cZNQbQ)/TransferObjectTablePageContainer
// Name: service::UserVoteDefinition::UserVoteDefinition_Table
export default function ServiceUserVoteDefinitionUserVoteDefinition_Table(
  props: ServiceUserVoteDefinitionUserVoteDefinition_TableProps,
) {
  // Container props
  const { refreshCounter, isLoading, isDraft, actions: pageActions } = props;

  // Container hooks
  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { locale: l10nLocale } = useL10N();
  const { openConfirmDialog } = useConfirmDialog();

  // Pandino Container Action overrides
  const { service: customContainerHook } =
    useTrackService<ServiceUserVoteDefinitionUserVoteDefinition_TableContainerHook>(
      `(${OBJECTCLASS}=${SERVICE_USER_VOTE_DEFINITION_USER_VOTE_DEFINITION_TABLE_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY})`,
    );
  const containerActions: ServiceUserVoteDefinitionUserVoteDefinition_TableActionDefinitions =
    customContainerHook?.() || {};
  const actions = useMemo(() => ({ ...containerActions, ...pageActions }), [containerActions, pageActions]);

  return (
    <Grid container>
      <Grid item data-name="UserVoteDefinition_Table" xs={12} sm={12} md={36.0}>
        <Card
          id="User/(esm/_gTjKMF4-Ee6vsex_cZNQbQ)/TransferObjectTableVisualElement"
          data-name="UserVoteDefinition_Table"
        >
          <CardContent>
            <Grid container direction="row" alignItems="stretch" justifyContent="flex-start" spacing={2}>
              <Grid item xs={12} sm={12}>
                <Typography id="User/(esm/_gTjKMF4-Ee6vsex_cZNQbQ)/TransferObjectTableEmpty">
                  {
                    t('service.UserVoteDefinition.UserVoteDefinition_Table.UserVoteDefinition_Table', {
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
