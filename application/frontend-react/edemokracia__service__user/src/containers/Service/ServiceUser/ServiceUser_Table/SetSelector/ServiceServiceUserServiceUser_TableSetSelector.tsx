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
import { ServiceServiceUser, ServiceServiceUserQueryCustomizer, ServiceServiceUserStored } from '~/services/data-api';
import type { ServiceServiceUserServiceUser_TableSetSelectorServiceUser_TableSetSelectorComponentActionDefinitions } from './components/ServiceServiceUserServiceUser_TableSetSelectorServiceUser_TableSetSelectorComponent';
import { ServiceServiceUserServiceUser_TableSetSelectorServiceUser_TableSetSelectorComponent } from './components/ServiceServiceUserServiceUser_TableSetSelectorServiceUser_TableSetSelectorComponent';

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
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
