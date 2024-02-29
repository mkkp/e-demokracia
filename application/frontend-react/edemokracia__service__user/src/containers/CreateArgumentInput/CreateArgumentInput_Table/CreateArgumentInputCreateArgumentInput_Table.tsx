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
import CardHeader from '@mui/material/CardHeader';
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
  CreateArgumentInput,
  CreateArgumentInputQueryCustomizer,
  CreateArgumentInputStored,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import type { JudoRestResponse } from '~/services/data-api/rest';
import { isErrorOperationFault, useErrorHandler } from '~/utilities';
import type { CreateArgumentInputCreateArgumentInput_TableCreateArgumentInput_TableComponentActionDefinitions } from './components/CreateArgumentInputCreateArgumentInput_TableCreateArgumentInput_TableComponent';
import { CreateArgumentInputCreateArgumentInput_TableCreateArgumentInput_TableComponent } from './components/CreateArgumentInputCreateArgumentInput_TableCreateArgumentInput_TableComponent';

export const CREATE_ARGUMENT_INPUT_CREATE_ARGUMENT_INPUT_TABLE_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY =
  'CREATE_ARGUMENT_INPUT_CREATE_ARGUMENT_INPUT_TABLE_CONTAINER_ACTIONS_HOOK';
export type CreateArgumentInputCreateArgumentInput_TableContainerHook =
  () => CreateArgumentInputCreateArgumentInput_TableActionDefinitions;

export interface CreateArgumentInputCreateArgumentInput_TableActionDefinitions
  extends CreateArgumentInputCreateArgumentInput_TableCreateArgumentInput_TableComponentActionDefinitions {
  getPageTitle?: () => string;
}

export interface CreateArgumentInputCreateArgumentInput_TableProps {
  refreshCounter: number;
  isLoading: boolean;
  actions: CreateArgumentInputCreateArgumentInput_TableActionDefinitions;

  isDraft?: boolean;
}

// XMIID: User/(esm/_Ga4NMHW5Ee2LTNnGda5kaw)/TransferObjectTablePageContainer
// Name: CreateArgumentInput::CreateArgumentInput_Table
export default function CreateArgumentInputCreateArgumentInput_Table(
  props: CreateArgumentInputCreateArgumentInput_TableProps,
) {
  // Container props
  const { refreshCounter, isLoading, isDraft, actions: pageActions } = props;

  // Container hooks
  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { locale: l10nLocale } = useL10N();
  const { openConfirmDialog } = useConfirmDialog();

  // Pandino Container Action overrides
  const { service: customContainerHook } = useTrackService<CreateArgumentInputCreateArgumentInput_TableContainerHook>(
    `(${OBJECTCLASS}=${CREATE_ARGUMENT_INPUT_CREATE_ARGUMENT_INPUT_TABLE_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const containerActions: CreateArgumentInputCreateArgumentInput_TableActionDefinitions = customContainerHook?.() || {};
  const actions = useMemo(() => ({ ...pageActions, ...containerActions }), [pageActions, containerActions]);

  return (
    <Grid container>
      <Grid item data-name="CreateArgumentInput_Table" xs={12} sm={12} md={36.0}>
        <Card
          id="User/(esm/_Ga4NMHW5Ee2LTNnGda5kaw)/TransferObjectTableVisualElement"
          data-name="CreateArgumentInput_Table"
        >
          <CardContent>
            <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
              <Grid item xs={12} sm={12}>
                <Grid
                  id="User/(esm/_Ga4NMHW5Ee2LTNnGda5kaw)/TransferObjectTableTable"
                  container
                  direction="column"
                  alignItems="stretch"
                  justifyContent="flex-start"
                >
                  <CreateArgumentInputCreateArgumentInput_TableCreateArgumentInput_TableComponent
                    uniqueId={'User/(esm/_Ga4NMHW5Ee2LTNnGda5kaw)/TransferObjectTableTable'}
                    actions={actions}
                    refreshCounter={refreshCounter}
                    isOwnerLoading={isLoading}
                  />
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
