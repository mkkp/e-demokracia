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
import { clsx } from 'clsx';
import type { Dispatch, FC, SetStateAction } from 'react';
import { forwardRef, useCallback, useEffect, useImperativeHandle, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { DropdownButton, MdiIcon, useJudoNavigation } from '~/components';
import { useConfirmDialog } from '~/components/dialog';
import { useL10N } from '~/l10n/l10n-context';
import { ServiceDistrict, ServiceDistrictQueryCustomizer, ServiceDistrictStored } from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import { isErrorOperationFault, useErrorHandler } from '~/utilities';
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
  const { openConfirmDialog } = useConfirmDialog();

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
