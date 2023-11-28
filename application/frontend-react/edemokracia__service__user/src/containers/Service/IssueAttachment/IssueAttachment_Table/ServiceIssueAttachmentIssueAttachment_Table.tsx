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
import {
  ServiceIssueAttachment,
  ServiceIssueAttachmentQueryCustomizer,
  ServiceIssueAttachmentStored,
} from '~/services/data-api';
import type { ServiceIssueAttachmentIssueAttachment_TableIssueAttachment_TableComponentActionDefinitions } from './components/ServiceIssueAttachmentIssueAttachment_TableIssueAttachment_TableComponent';
import { ServiceIssueAttachmentIssueAttachment_TableIssueAttachment_TableComponent } from './components/ServiceIssueAttachmentIssueAttachment_TableIssueAttachment_TableComponent';

export interface ServiceIssueAttachmentIssueAttachment_TableActionDefinitions
  extends ServiceIssueAttachmentIssueAttachment_TableIssueAttachment_TableComponentActionDefinitions {}

export interface ServiceIssueAttachmentIssueAttachment_TableProps {
  refreshCounter: number;
  actions: ServiceIssueAttachmentIssueAttachment_TableActionDefinitions;
}

// XMIID: User/(esm/_p51hIGksEe25ONJ3V89cVA)/TransferObjectTablePageContainer
// Name: service::IssueAttachment::IssueAttachment_Table
export default function ServiceIssueAttachmentIssueAttachment_Table(
  props: ServiceIssueAttachmentIssueAttachment_TableProps,
) {
  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { refreshCounter, actions } = props;
  const { locale: l10nLocale } = useL10N();

  return (
    <Grid container>
      <Grid item xs={12} sm={12}>
        <Card id="User/(esm/_p51hIGksEe25ONJ3V89cVA)/TransferObjectTableVisualElement">
          <CardContent>
            <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
              <Grid item xs={12} sm={12}>
                <Grid
                  id="User/(esm/_p51hIGksEe25ONJ3V89cVA)/TransferObjectTableTable"
                  container
                  direction="column"
                  alignItems="stretch"
                  justifyContent="flex-start"
                >
                  <ServiceIssueAttachmentIssueAttachment_TableIssueAttachment_TableComponent
                    uniqueId={'User/(esm/_p51hIGksEe25ONJ3V89cVA)/TransferObjectTableTable'}
                    actions={actions}
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
