//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #application.pageContainers
// Path expression: 'src/containers/'+#containerPath(#self)+'/'+#containerComponentName(#self)+'.tsx'
// Template name: actor/src/containers/container.tsx
// Template file: actor/src/containers/container.tsx.hbs

import type { Dispatch, SetStateAction, FC } from 'react';
import { forwardRef, useEffect, useState, useCallback, useImperativeHandle } from 'react';
import { useTranslation } from 'react-i18next';
import { LoadingButton } from '@mui/lab';
import type { JudoIdentifiable } from '@judo/data-api-common';
import { clsx } from 'clsx';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useL10N } from '~/l10n/l10n-context';
import { MdiIcon, DropdownButton, useJudoNavigation } from '~/components';
import { isErrorOperationFault, useErrorHandler } from '~/utilities';
import { ServiceCity, ServiceCityQueryCustomizer, ServiceCityStored } from '~/services/data-api';
import type { ServiceCityCity_TableSetSelectorCity_TableSetSelectorComponentActionDefinitions } from './components/ServiceCityCity_TableSetSelectorCity_TableSetSelectorComponent';
import { ServiceCityCity_TableSetSelectorCity_TableSetSelectorComponent } from './components/ServiceCityCity_TableSetSelectorCity_TableSetSelectorComponent';

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
  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { refreshCounter, actions, selectionDiff, setSelectionDiff, alreadySelected } = props;
  const { locale: l10nLocale } = useL10N();

  return (
    <Grid container spacing={2} direction="column" alignItems="stretch" justifyContent="flex-start">
      <Grid item xs={12} sm={12}>
        <Card>
          <CardContent>
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
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
