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
import { ServiceDistrict, ServiceDistrictQueryCustomizer, ServiceDistrictStored } from '~/services/data-api';
import type { ServiceDistrictDistrict_TableSetSelectorDistrict_TableSetSelectorComponentActionDefinitions } from './components/ServiceDistrictDistrict_TableSetSelectorDistrict_TableSetSelectorComponent';
import { ServiceDistrictDistrict_TableSetSelectorDistrict_TableSetSelectorComponent } from './components/ServiceDistrictDistrict_TableSetSelectorDistrict_TableSetSelectorComponent';

export interface ServiceDistrictDistrict_TableSetSelectorActionDefinitions
  extends ServiceDistrictDistrict_TableSetSelectorDistrict_TableSetSelectorComponentActionDefinitions {}

export interface ServiceDistrictDistrict_TableSetSelectorProps {
  refreshCounter: number;
  actions: ServiceDistrictDistrict_TableSetSelectorActionDefinitions;
  selectionDiff: ServiceDistrictStored[];
  setSelectionDiff: Dispatch<SetStateAction<ServiceDistrictStored[]>>;
  alreadySelected: ServiceDistrictStored[];
}

// XMIID: User/(esm/_a0UhZX2iEe2LTNnGda5kaw)/TransferObjectTableSetSelectorPageContainer
// Name: service::District::District_Table::SetSelector
export default function ServiceDistrictDistrict_TableSetSelector(props: ServiceDistrictDistrict_TableSetSelectorProps) {
  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { refreshCounter, actions, selectionDiff, setSelectionDiff, alreadySelected } = props;
  const { locale: l10nLocale } = useL10N();

  return (
    <Grid container>
      <Grid item xs={12} sm={12}>
        <Card id="User/(esm/_a0UhZX2iEe2LTNnGda5kaw)/TransferObjectTableSetSelectorVisualElement">
          <CardContent>
            <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
              <Grid item xs={12} sm={12}>
                <Grid
                  id="User/(esm/_a0UhZX2iEe2LTNnGda5kaw)/TransferObjectTableSetSelectorTable"
                  container
                  direction="column"
                  alignItems="stretch"
                  justifyContent="flex-start"
                >
                  <ServiceDistrictDistrict_TableSetSelectorDistrict_TableSetSelectorComponent
                    uniqueId={'User/(esm/_a0UhZX2iEe2LTNnGda5kaw)/TransferObjectTableSetSelectorTable'}
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
