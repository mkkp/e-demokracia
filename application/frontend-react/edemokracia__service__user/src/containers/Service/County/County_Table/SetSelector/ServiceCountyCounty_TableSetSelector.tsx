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
import { NumericFormat } from 'react-number-format';
import { LoadingButton } from '@mui/lab';
import { OBJECTCLASS } from '@pandino/pandino-api';
import type { JudoIdentifiable } from '@judo/data-api-common';
import { ComponentProxy } from '@pandino/react-hooks';
import { clsx } from 'clsx';
import { Box, Container, Grid, Button, Card, CardContent } from '@mui/material';
import type { GridFilterModel } from '@mui/x-data-grid';
import { useL10N } from '~/l10n/l10n-context';
import { CUSTOM_VISUAL_ELEMENT_INTERFACE_KEY } from '~/custom';
import { mainContainerPadding } from '~/theme';
import { DIVIDER_HEIGHT } from '~/config';
import type { Filter } from '~/components-api';
import { MdiIcon, ModeledTabs, DropdownButton, useJudoNavigation } from '~/components';
import {
  isErrorOperationFault,
  useErrorHandler,
  fileHandling,
  uiDateToServiceDate,
  serviceDateToUiDate,
  uiTimeToServiceTime,
  serviceTimeToUiTime,
  stringToBooleanSelect,
  booleanToStringSelect,
} from '~/utilities';
import { ServiceCounty, ServiceCountyQueryCustomizer, ServiceCountyStored } from '~/services/data-api';
import type { ServiceCountyCounty_TableSetSelectorCounty_TableSetSelectorComponentActionDefinitions } from './components/ServiceCountyCounty_TableSetSelectorCounty_TableSetSelectorComponent';
import { ServiceCountyCounty_TableSetSelectorCounty_TableSetSelectorComponent } from './components/ServiceCountyCounty_TableSetSelectorCounty_TableSetSelectorComponent';

export interface ServiceCountyCounty_TableSetSelectorActionDefinitions
  extends ServiceCountyCounty_TableSetSelectorCounty_TableSetSelectorComponentActionDefinitions {}

export interface ServiceCountyCounty_TableSetSelectorProps {
  refreshCounter: number;
  actions: ServiceCountyCounty_TableSetSelectorActionDefinitions;
  selectionDiff: ServiceCountyStored[];
  setSelectionDiff: Dispatch<SetStateAction<ServiceCountyStored[]>>;
  alreadySelected: ServiceCountyStored[];
}

// XMIID: User/(esm/_a0aoB32iEe2LTNnGda5kaw)/TransferObjectTableSetSelectorPageContainer
// Name: service::County::County_Table::SetSelector
export default function ServiceCountyCounty_TableSetSelector(props: ServiceCountyCounty_TableSetSelectorProps) {
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
                id="User/(esm/_a0aoB32iEe2LTNnGda5kaw)/TransferObjectTableSetSelectorTable"
                container
                direction="column"
                alignItems="stretch"
                justifyContent="flex-start"
              >
                <ServiceCountyCounty_TableSetSelectorCounty_TableSetSelectorComponent
                  uniqueId={'TMP'}
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
