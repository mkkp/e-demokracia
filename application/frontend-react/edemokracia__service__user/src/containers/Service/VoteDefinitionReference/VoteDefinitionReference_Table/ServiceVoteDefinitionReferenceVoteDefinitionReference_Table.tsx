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
import ButtonGroup from '@mui/material/ButtonGroup';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
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
  ServiceVoteDefinitionReference,
  ServiceVoteDefinitionReferenceQueryCustomizer,
  ServiceVoteDefinitionReferenceStored,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import type { JudoRestResponse } from '~/services/data-api/rest';
import { isErrorOperationFault, useErrorHandler } from '~/utilities';

export const SERVICE_VOTE_DEFINITION_REFERENCE_VOTE_DEFINITION_REFERENCE_TABLE_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_VOTE_DEFINITION_REFERENCE_VOTE_DEFINITION_REFERENCE_TABLE_CONTAINER_ACTIONS_HOOK';
export type ServiceVoteDefinitionReferenceVoteDefinitionReference_TableContainerHook =
  () => ServiceVoteDefinitionReferenceVoteDefinitionReference_TableActionDefinitions;

export interface ServiceVoteDefinitionReferenceVoteDefinitionReference_TableActionDefinitions {
  getPageTitle?: () => string;
}

export interface ServiceVoteDefinitionReferenceVoteDefinitionReference_TableProps {
  refreshCounter: number;
  isLoading: boolean;
  actions: ServiceVoteDefinitionReferenceVoteDefinitionReference_TableActionDefinitions;

  isDraft?: boolean;
}

// XMIID: User/(esm/_y8PgoM6tEe6ddqBfFzCBZg)/TransferObjectTablePageContainer
// Name: service::VoteDefinitionReference::VoteDefinitionReference_Table
export default function ServiceVoteDefinitionReferenceVoteDefinitionReference_Table(
  props: ServiceVoteDefinitionReferenceVoteDefinitionReference_TableProps,
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
    useTrackService<ServiceVoteDefinitionReferenceVoteDefinitionReference_TableContainerHook>(
      `(${OBJECTCLASS}=${SERVICE_VOTE_DEFINITION_REFERENCE_VOTE_DEFINITION_REFERENCE_TABLE_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY})`,
    );
  const containerActions: ServiceVoteDefinitionReferenceVoteDefinitionReference_TableActionDefinitions =
    customContainerHook?.() || {};
  const actions = useMemo(() => ({ ...pageActions, ...containerActions }), [pageActions, containerActions]);

  return (
    <Grid container>
      <Grid item data-name="VoteDefinitionReference_Table" xs={12} sm={12} md={36.0}>
        <Card
          id="User/(esm/_y8PgoM6tEe6ddqBfFzCBZg)/TransferObjectTableVisualElement"
          data-name="VoteDefinitionReference_Table"
        >
          <CardContent>
            <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
              <Grid item xs={12} sm={12}>
                <Typography id="User/(esm/_y8PgoM6tEe6ddqBfFzCBZg)/TransferObjectTableEmpty">
                  {
                    t('service.VoteDefinitionReference.VoteDefinitionReference_Table.VoteDefinitionReference_Table', {
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
