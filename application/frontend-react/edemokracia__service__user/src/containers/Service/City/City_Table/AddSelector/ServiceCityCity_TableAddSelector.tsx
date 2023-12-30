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
import type { ServiceCityCity_TableAddSelectorCity_TableAddSelectorComponentActionDefinitions } from './components/ServiceCityCity_TableAddSelectorCity_TableAddSelectorComponent';
import { ServiceCityCity_TableAddSelectorCity_TableAddSelectorComponent } from './components/ServiceCityCity_TableAddSelectorCity_TableAddSelectorComponent';

export const SERVICE_CITY_CITY_TABLE_ADD_SELECTOR_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY =
  'ServiceCityCity_TableAddSelectorContainerHook';
export type ServiceCityCity_TableAddSelectorContainerHook = () => ServiceCityCity_TableAddSelectorActionDefinitions;

export interface ServiceCityCity_TableAddSelectorActionDefinitions
  extends ServiceCityCity_TableAddSelectorCity_TableAddSelectorComponentActionDefinitions {}

export interface ServiceCityCity_TableAddSelectorProps {
  refreshCounter: number;
  actions: ServiceCityCity_TableAddSelectorActionDefinitions;
  selectionDiff: ServiceCityStored[];
  setSelectionDiff: Dispatch<SetStateAction<ServiceCityStored[]>>;
  alreadySelected: ServiceCityStored[];
}

// XMIID: User/(esm/_a0Xkt32iEe2LTNnGda5kaw)/TransferObjectTableAddSelectorPageContainer
// Name: service::City::City_Table::AddSelector
export default function ServiceCityCity_TableAddSelector(props: ServiceCityCity_TableAddSelectorProps) {
  // Container props
  const { refreshCounter, actions: pageActions, selectionDiff, setSelectionDiff, alreadySelected } = props;

  // Container hooks
  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { locale: l10nLocale } = useL10N();
  const { openConfirmDialog } = useConfirmDialog();

  // Pandino Container Action overrides
  const { service: customContainerHook } = useTrackService<ServiceCityCity_TableAddSelectorContainerHook>(
    `(${OBJECTCLASS}=${SERVICE_CITY_CITY_TABLE_ADD_SELECTOR_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const containerActions: ServiceCityCity_TableAddSelectorActionDefinitions = customContainerHook?.() || {};
  const actions = useMemo(() => ({ ...containerActions, ...pageActions }), [containerActions, pageActions]);

  return (
    <Grid container>
      <Grid item xs={12} sm={12}>
        <Card id="User/(esm/_a0Xkt32iEe2LTNnGda5kaw)/TransferObjectTableAddSelectorVisualElement">
          <CardContent>
            <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
              <Grid item xs={12} sm={12}>
                <Grid
                  id="User/(esm/_a0Xkt32iEe2LTNnGda5kaw)/TransferObjectTableAddSelectorTable"
                  container
                  direction="column"
                  alignItems="stretch"
                  justifyContent="flex-start"
                >
                  <ServiceCityCity_TableAddSelectorCity_TableAddSelectorComponent
                    uniqueId={'User/(esm/_a0Xkt32iEe2LTNnGda5kaw)/TransferObjectTableAddSelectorTable'}
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
