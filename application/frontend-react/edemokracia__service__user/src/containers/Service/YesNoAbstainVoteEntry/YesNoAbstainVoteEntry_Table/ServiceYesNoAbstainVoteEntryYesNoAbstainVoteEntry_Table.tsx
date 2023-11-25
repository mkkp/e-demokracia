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
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useL10N } from '~/l10n/l10n-context';
import { MdiIcon, DropdownButton, useJudoNavigation } from '~/components';
import { isErrorOperationFault, useErrorHandler } from '~/utilities';
import {
  ServiceYesNoAbstainVoteEntry,
  ServiceYesNoAbstainVoteEntryQueryCustomizer,
  ServiceYesNoAbstainVoteEntryStored,
} from '~/services/data-api';

export interface ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_TableActionDefinitions {}

export interface ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_TableProps {
  refreshCounter: number;
  actions: ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_TableActionDefinitions;
}

// XMIID: User/(esm/_L2wXIFsjEe6Mx9dH3yj5gQ)/TransferObjectTablePageContainer
// Name: service::YesNoAbstainVoteEntry::YesNoAbstainVoteEntry_Table
export default function ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_Table(
  props: ServiceYesNoAbstainVoteEntryYesNoAbstainVoteEntry_TableProps,
) {
  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { refreshCounter, actions } = props;
  const { locale: l10nLocale } = useL10N();

  return (
    <Grid container spacing={2} direction="column" alignItems="stretch" justifyContent="flex-start">
      <Grid item xs={12} sm={12}>
        <Card>
          <CardContent>
            <Grid item xs={12} sm={12}>
              <Typography id="User/(esm/_L2wXIFsjEe6Mx9dH3yj5gQ)/TransferObjectTableEmpty">
                {
                  t('service.YesNoAbstainVoteEntry.YesNoAbstainVoteEntry_Table.YesNoAbstainVoteEntry_Table', {
                    defaultValue: 'No columns.',
                  }) as string
                }
              </Typography>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
