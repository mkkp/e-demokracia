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
import { forwardRef, useCallback, useEffect, useImperativeHandle, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { DropdownButton, MdiIcon, useJudoNavigation } from '~/components';
import { useConfirmDialog } from '~/components/dialog';
import { useL10N } from '~/l10n/l10n-context';
import { ServiceServiceUser, ServiceServiceUserQueryCustomizer, ServiceServiceUserStored } from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import { isErrorOperationFault, useErrorHandler } from '~/utilities';
import type { ServiceServiceUserServiceUser_TableSetSelectorServiceUser_TableSetSelectorComponentActionDefinitions } from './components/ServiceServiceUserServiceUser_TableSetSelectorServiceUser_TableSetSelectorComponent';
import { ServiceServiceUserServiceUser_TableSetSelectorServiceUser_TableSetSelectorComponent } from './components/ServiceServiceUserServiceUser_TableSetSelectorServiceUser_TableSetSelectorComponent';

export const SERVICE_SERVICE_USER_SERVICE_USER_TABLE_SET_SELECTOR_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY =
  'ServiceServiceUserServiceUser_TableSetSelectorContainerHook';
export type ServiceServiceUserServiceUser_TableSetSelectorContainerHook =
  () => ServiceServiceUserServiceUser_TableSetSelectorActionDefinitions;

export interface ServiceServiceUserServiceUser_TableSetSelectorActionDefinitions
  extends ServiceServiceUserServiceUser_TableSetSelectorServiceUser_TableSetSelectorComponentActionDefinitions {}

export interface ServiceServiceUserServiceUser_TableSetSelectorProps {
  refreshCounter: number;
  actions: ServiceServiceUserServiceUser_TableSetSelectorActionDefinitions;
  selectionDiff: ServiceServiceUserStored[];
  setSelectionDiff: Dispatch<SetStateAction<ServiceServiceUserStored[]>>;
  alreadySelected: ServiceServiceUserStored[];
}

// XMIID: User/(esm/_p141QGksEe25ONJ3V89cVA)/TransferObjectTableSetSelectorPageContainer
// Name: service::ServiceUser::ServiceUser_Table::SetSelector
export default function ServiceServiceUserServiceUser_TableSetSelector(
  props: ServiceServiceUserServiceUser_TableSetSelectorProps,
) {
  // Container props
  const { refreshCounter, actions: pageActions, selectionDiff, setSelectionDiff, alreadySelected } = props;

  // Container hooks
  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { locale: l10nLocale } = useL10N();
  const { openConfirmDialog } = useConfirmDialog();

  // Pandino Container Action overrides
  const { service: customContainerHook } = useTrackService<ServiceServiceUserServiceUser_TableSetSelectorContainerHook>(
    `(${OBJECTCLASS}=${SERVICE_SERVICE_USER_SERVICE_USER_TABLE_SET_SELECTOR_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const containerActions: ServiceServiceUserServiceUser_TableSetSelectorActionDefinitions =
    customContainerHook?.() || {};
  const actions = useMemo(() => ({ ...containerActions, ...pageActions }), [containerActions, pageActions]);

  return (
    <Grid container>
      <Grid item xs={12} sm={12}>
        <Card id="User/(esm/_p141QGksEe25ONJ3V89cVA)/TransferObjectTableSetSelectorVisualElement">
          <CardContent>
            <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
              <Grid item xs={12} sm={12}>
                <Grid
                  id="User/(esm/_p141QGksEe25ONJ3V89cVA)/TransferObjectTableSetSelectorTable"
                  container
                  direction="column"
                  alignItems="stretch"
                  justifyContent="flex-start"
                >
                  <ServiceServiceUserServiceUser_TableSetSelectorServiceUser_TableSetSelectorComponent
                    uniqueId={'User/(esm/_p141QGksEe25ONJ3V89cVA)/TransferObjectTableSetSelectorTable'}
                    actions={actions}
                    selectionDiff={selectionDiff}
                    setSelectionDiff={setSelectionDiff}
                    alreadySelected={alreadySelected}
                    refreshCounter={refreshCounter}
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
