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
import { ServiceCity, ServiceCityQueryCustomizer, ServiceCityStored } from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import { isErrorOperationFault, useErrorHandler } from '~/utilities';
import type { ServiceCityCity_TableSetSelectorCity_TableSetSelectorComponentActionDefinitions } from './components/ServiceCityCity_TableSetSelectorCity_TableSetSelectorComponent';
import { ServiceCityCity_TableSetSelectorCity_TableSetSelectorComponent } from './components/ServiceCityCity_TableSetSelectorCity_TableSetSelectorComponent';

export const SERVICE_CITY_CITY_TABLE_SET_SELECTOR_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY =
  'ServiceCityCity_TableSetSelectorContainerHook';
export type ServiceCityCity_TableSetSelectorContainerHook = () => ServiceCityCity_TableSetSelectorActionDefinitions;

export interface ServiceCityCity_TableSetSelectorActionDefinitions
  extends ServiceCityCity_TableSetSelectorCity_TableSetSelectorComponentActionDefinitions {}

export interface ServiceCityCity_TableSetSelectorProps {
  refreshCounter: number;
  actions: ServiceCityCity_TableSetSelectorActionDefinitions;
  selectionDiff: ServiceCityStored[];
  setSelectionDiff: Dispatch<SetStateAction<ServiceCityStored[]>>;
  alreadySelected: ServiceCityStored[];
}

// XMIID: User/(esm/_a0Xkt32iEe2LTNnGda5kaw)/TransferObjectTableSetSelectorPageContainer
// Name: service::City::City_Table::SetSelector
export default function ServiceCityCity_TableSetSelector(props: ServiceCityCity_TableSetSelectorProps) {
  // Container props
  const { refreshCounter, actions: pageActions, selectionDiff, setSelectionDiff, alreadySelected } = props;

  // Container hooks
  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { locale: l10nLocale } = useL10N();
  const { openConfirmDialog } = useConfirmDialog();

  // Pandino Container Action overrides
  const { service: customContainerHook } = useTrackService<ServiceCityCity_TableSetSelectorContainerHook>(
    `(${OBJECTCLASS}=${SERVICE_CITY_CITY_TABLE_SET_SELECTOR_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const containerActions: ServiceCityCity_TableSetSelectorActionDefinitions = customContainerHook?.() || {};
  const actions = useMemo(() => ({ ...containerActions, ...pageActions }), [containerActions, pageActions]);

  return (
    <Grid container>
      <Grid item xs={12} sm={12}>
        <Card id="User/(esm/_a0Xkt32iEe2LTNnGda5kaw)/TransferObjectTableSetSelectorVisualElement">
          <CardContent>
            <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
              <Grid item xs={12} sm={12}>
                <Grid
                  id="User/(esm/_a0Xkt32iEe2LTNnGda5kaw)/TransferObjectTableSetSelectorTable"
                  container
                  direction="column"
                  alignItems="stretch"
                  justifyContent="flex-start"
                >
                  <ServiceCityCity_TableSetSelectorCity_TableSetSelectorComponent
                    uniqueId={'User/(esm/_a0Xkt32iEe2LTNnGda5kaw)/TransferObjectTableSetSelectorTable'}
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
