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
import { ServiceCounty, ServiceCountyQueryCustomizer, ServiceCountyStored } from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import type { JudoRestResponse } from '~/services/data-api/rest';
import { isErrorOperationFault, useErrorHandler } from '~/utilities';
import type { ServiceCountyCounty_TableCounty_TableComponentActionDefinitions } from './components/ServiceCountyCounty_TableCounty_TableComponent';
import { ServiceCountyCounty_TableCounty_TableComponent } from './components/ServiceCountyCounty_TableCounty_TableComponent';

export const SERVICE_COUNTY_COUNTY_TABLE_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_COUNTY_COUNTY_TABLE_CONTAINER_ACTIONS_HOOK';
export type ServiceCountyCounty_TableContainerHook = () => ServiceCountyCounty_TableActionDefinitions;

export interface ServiceCountyCounty_TableActionDefinitions
  extends ServiceCountyCounty_TableCounty_TableComponentActionDefinitions {
  getPageTitle?: () => string;
}

export interface ServiceCountyCounty_TableProps {
  refreshCounter: number;
  isLoading: boolean;
  actions: ServiceCountyCounty_TableActionDefinitions;

  isDraft?: boolean;
}

// XMIID: User/(esm/_a0aoB32iEe2LTNnGda5kaw)/TransferObjectTablePageContainer
// Name: service::County::County_Table
export default function ServiceCountyCounty_Table(props: ServiceCountyCounty_TableProps) {
  // Container props
  const { refreshCounter, isLoading, isDraft, actions: pageActions } = props;

  // Container hooks
  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { locale: l10nLocale } = useL10N();
  const { openConfirmDialog } = useConfirmDialog();

  // Pandino Container Action overrides
  const { service: customContainerHook } = useTrackService<ServiceCountyCounty_TableContainerHook>(
    `(${OBJECTCLASS}=${SERVICE_COUNTY_COUNTY_TABLE_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const containerActions: ServiceCountyCounty_TableActionDefinitions = customContainerHook?.() || {};
  const actions = useMemo(() => ({ ...containerActions, ...pageActions }), [containerActions, pageActions]);

  return (
    <Grid container>
      <Grid item data-name="County_Table" xs={12} sm={12} md={36.0}>
        <Card id="User/(esm/_a0aoB32iEe2LTNnGda5kaw)/TransferObjectTableVisualElement" data-name="County_Table">
          <CardContent>
            <Grid container direction="row" alignItems="stretch" justifyContent="flex-start" spacing={2}>
              <Grid item xs={12} sm={12}>
                <Grid
                  id="User/(esm/_a0aoB32iEe2LTNnGda5kaw)/TransferObjectTableTable"
                  container
                  direction="column"
                  alignItems="stretch"
                  justifyContent="flex-start"
                >
                  <ServiceCountyCounty_TableCounty_TableComponent
                    uniqueId={'User/(esm/_a0aoB32iEe2LTNnGda5kaw)/TransferObjectTableTable'}
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
