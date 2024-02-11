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
import { ServicePro, ServiceProQueryCustomizer, ServiceProStored } from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import type { JudoRestResponse } from '~/services/data-api/rest';
import { isErrorOperationFault, useErrorHandler } from '~/utilities';
import type { ServiceProPro_TablePro_TableComponentActionDefinitions } from './components/ServiceProPro_TablePro_TableComponent';
import { ServiceProPro_TablePro_TableComponent } from './components/ServiceProPro_TablePro_TableComponent';

export const SERVICE_PRO_PRO_TABLE_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_PRO_PRO_TABLE_CONTAINER_ACTIONS_HOOK';
export type ServiceProPro_TableContainerHook = () => ServiceProPro_TableActionDefinitions;

export interface ServiceProPro_TableActionDefinitions extends ServiceProPro_TablePro_TableComponentActionDefinitions {
  getPageTitle?: () => string;
}

export interface ServiceProPro_TableProps {
  refreshCounter: number;
  isLoading: boolean;
  actions: ServiceProPro_TableActionDefinitions;

  isDraft?: boolean;
}

// XMIID: User/(esm/_qLrfEGksEe25ONJ3V89cVA)/TransferObjectTablePageContainer
// Name: service::Pro::Pro_Table
export default function ServiceProPro_Table(props: ServiceProPro_TableProps) {
  // Container props
  const { refreshCounter, isLoading, isDraft, actions: pageActions } = props;

  // Container hooks
  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { locale: l10nLocale } = useL10N();
  const { openConfirmDialog } = useConfirmDialog();

  // Pandino Container Action overrides
  const { service: customContainerHook } = useTrackService<ServiceProPro_TableContainerHook>(
    `(${OBJECTCLASS}=${SERVICE_PRO_PRO_TABLE_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const containerActions: ServiceProPro_TableActionDefinitions = customContainerHook?.() || {};
  const actions = useMemo(() => ({ ...containerActions, ...pageActions }), [containerActions, pageActions]);

  return (
    <Grid container>
      <Grid item data-name="Pro_Table" xs={12} sm={12} md={36.0}>
        <Card id="User/(esm/_qLrfEGksEe25ONJ3V89cVA)/TransferObjectTableVisualElement" data-name="Pro_Table">
          <CardContent>
            <Grid container direction="row" alignItems="stretch" justifyContent="flex-start" spacing={2}>
              <Grid item xs={12} sm={12}>
                <Grid
                  id="User/(esm/_qLrfEGksEe25ONJ3V89cVA)/TransferObjectTableTable"
                  container
                  direction="column"
                  alignItems="stretch"
                  justifyContent="flex-start"
                >
                  <ServiceProPro_TablePro_TableComponent
                    uniqueId={'User/(esm/_qLrfEGksEe25ONJ3V89cVA)/TransferObjectTableTable'}
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
