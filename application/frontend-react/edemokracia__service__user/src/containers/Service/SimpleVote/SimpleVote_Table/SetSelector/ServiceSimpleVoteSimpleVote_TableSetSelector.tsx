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
import type { CustomFormVisualElementProps } from '~/custom';
import { ComponentProxy } from '@pandino/react-hooks';
import { clsx } from 'clsx';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
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
import { ServiceSimpleVote, ServiceSimpleVoteQueryCustomizer, ServiceSimpleVoteStored } from '~/services/data-api';
import type { ServiceSimpleVoteSimpleVote_TableSetSelectorSimpleVote_TableSetSelectorComponentActionDefinitions } from './components/ServiceSimpleVoteSimpleVote_TableSetSelectorSimpleVote_TableSetSelectorComponent';
import { ServiceSimpleVoteSimpleVote_TableSetSelectorSimpleVote_TableSetSelectorComponent } from './components/ServiceSimpleVoteSimpleVote_TableSetSelectorSimpleVote_TableSetSelectorComponent';

export interface ServiceSimpleVoteSimpleVote_TableSetSelectorActionDefinitions
  extends ServiceSimpleVoteSimpleVote_TableSetSelectorSimpleVote_TableSetSelectorComponentActionDefinitions {}

export interface ServiceSimpleVoteSimpleVote_TableSetSelectorProps {
  refreshCounter: number;
  actions: ServiceSimpleVoteSimpleVote_TableSetSelectorActionDefinitions;
  selectionDiff: ServiceSimpleVoteStored[];
  setSelectionDiff: Dispatch<SetStateAction<ServiceSimpleVoteStored[]>>;
  alreadySelected: ServiceSimpleVoteStored[];
}

// XMIID: User/(esm/_p9JT0GksEe25ONJ3V89cVA)/TransferObjectTableSetSelectorPageContainer
// Name: service::SimpleVote::SimpleVote_Table::SetSelector
export default function ServiceSimpleVoteSimpleVote_TableSetSelector(
  props: ServiceSimpleVoteSimpleVote_TableSetSelectorProps,
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
                id="User/(esm/_p9JT0GksEe25ONJ3V89cVA)/TransferObjectTableSetSelectorTable"
                container
                direction="column"
                alignItems="stretch"
                justifyContent="flex-start"
              >
                <ServiceSimpleVoteSimpleVote_TableSetSelectorSimpleVote_TableSetSelectorComponent
                  uniqueId={'User/(esm/_p9JT0GksEe25ONJ3V89cVA)/TransferObjectTableSetSelectorTable'}
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
