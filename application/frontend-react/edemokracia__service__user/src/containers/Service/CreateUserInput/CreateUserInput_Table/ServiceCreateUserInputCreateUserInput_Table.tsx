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
  ServiceCreateUserInput,
  ServiceCreateUserInputQueryCustomizer,
  ServiceCreateUserInputStored,
} from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import { isErrorOperationFault, useErrorHandler } from '~/utilities';
import type { ServiceCreateUserInputCreateUserInput_TableCreateUserInput_TableComponentActionDefinitions } from './components/ServiceCreateUserInputCreateUserInput_TableCreateUserInput_TableComponent';
import { ServiceCreateUserInputCreateUserInput_TableCreateUserInput_TableComponent } from './components/ServiceCreateUserInputCreateUserInput_TableCreateUserInput_TableComponent';

export const SERVICE_CREATE_USER_INPUT_CREATE_USER_INPUT_TABLE_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_CREATE_USER_INPUT_CREATE_USER_INPUT_TABLE_CONTAINER_ACTIONS_HOOK';
export type ServiceCreateUserInputCreateUserInput_TableContainerHook =
  () => ServiceCreateUserInputCreateUserInput_TableActionDefinitions;

export interface ServiceCreateUserInputCreateUserInput_TableActionDefinitions
  extends ServiceCreateUserInputCreateUserInput_TableCreateUserInput_TableComponentActionDefinitions {
  getPageTitle?: () => string;
}

export interface ServiceCreateUserInputCreateUserInput_TableProps {
  refreshCounter: number;
  isLoading: boolean;
  actions: ServiceCreateUserInputCreateUserInput_TableActionDefinitions;

  isDraft?: boolean;
}

// XMIID: User/(esm/_eNzsYI1eEe2J66C5CrhpQw)/TransferObjectTablePageContainer
// Name: service::CreateUserInput::CreateUserInput_Table
export default function ServiceCreateUserInputCreateUserInput_Table(
  props: ServiceCreateUserInputCreateUserInput_TableProps,
) {
  // Container props
  const { refreshCounter, isLoading, isDraft, actions: pageActions } = props;

  // Container hooks
  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { locale: l10nLocale } = useL10N();
  const { openConfirmDialog } = useConfirmDialog();

  // Pandino Container Action overrides
  const { service: customContainerHook } = useTrackService<ServiceCreateUserInputCreateUserInput_TableContainerHook>(
    `(${OBJECTCLASS}=${SERVICE_CREATE_USER_INPUT_CREATE_USER_INPUT_TABLE_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const containerActions: ServiceCreateUserInputCreateUserInput_TableActionDefinitions = customContainerHook?.() || {};
  const actions = useMemo(() => ({ ...containerActions, ...pageActions }), [containerActions, pageActions]);

  return (
    <Grid container>
      <Grid item data-name="CreateUserInput_Table" xs={12} sm={12} md={36.0}>
        <Card
          id="User/(esm/_eNzsYI1eEe2J66C5CrhpQw)/TransferObjectTableVisualElement"
          data-name="CreateUserInput_Table"
        >
          <CardContent>
            <Grid container direction="row" alignItems="stretch" justifyContent="flex-start" spacing={2}>
              <Grid item xs={12} sm={12}>
                <Grid
                  id="User/(esm/_eNzsYI1eEe2J66C5CrhpQw)/TransferObjectTableTable"
                  container
                  direction="column"
                  alignItems="stretch"
                  justifyContent="flex-start"
                >
                  <ServiceCreateUserInputCreateUserInput_TableCreateUserInput_TableComponent
                    uniqueId={'User/(esm/_eNzsYI1eEe2J66C5CrhpQw)/TransferObjectTableTable'}
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
