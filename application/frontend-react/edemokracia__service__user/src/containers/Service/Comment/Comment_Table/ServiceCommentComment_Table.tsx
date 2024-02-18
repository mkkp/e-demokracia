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
import CardHeader from '@mui/material/CardHeader';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { OBJECTCLASS } from '@pandino/pandino-api';
import { useTrackService } from '@pandino/react-hooks';
import { clsx } from 'clsx';
import type { Dispatch, FC, SetStateAction } from 'react';
import { forwardRef, useCallback, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { DropdownButton, MdiIcon, useJudoNavigation } from '~/components';
import { useConfirmDialog } from '~/components/dialog';
import { useL10N } from '~/l10n/l10n-context';
import { ServiceComment, ServiceCommentQueryCustomizer, ServiceCommentStored } from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import type { JudoRestResponse } from '~/services/data-api/rest';
import { isErrorOperationFault, useErrorHandler } from '~/utilities';
import type { ServiceCommentComment_TableComment_TableComponentActionDefinitions } from './components/ServiceCommentComment_TableComment_TableComponent';
import { ServiceCommentComment_TableComment_TableComponent } from './components/ServiceCommentComment_TableComment_TableComponent';

export const SERVICE_COMMENT_COMMENT_TABLE_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_COMMENT_COMMENT_TABLE_CONTAINER_ACTIONS_HOOK';
export type ServiceCommentComment_TableContainerHook = () => ServiceCommentComment_TableActionDefinitions;

export interface ServiceCommentComment_TableActionDefinitions
  extends ServiceCommentComment_TableComment_TableComponentActionDefinitions {
  getPageTitle?: () => string;
}

export interface ServiceCommentComment_TableProps {
  refreshCounter: number;
  isLoading: boolean;
  actions: ServiceCommentComment_TableActionDefinitions;

  isDraft?: boolean;
}

// XMIID: User/(esm/_p_So4GksEe25ONJ3V89cVA)/TransferObjectTablePageContainer
// Name: service::Comment::Comment_Table
export default function ServiceCommentComment_Table(props: ServiceCommentComment_TableProps) {
  // Container props
  const { refreshCounter, isLoading, isDraft, actions: pageActions } = props;

  // Container hooks
  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { locale: l10nLocale } = useL10N();
  const { openConfirmDialog } = useConfirmDialog();

  // Pandino Container Action overrides
  const { service: customContainerHook } = useTrackService<ServiceCommentComment_TableContainerHook>(
    `(${OBJECTCLASS}=${SERVICE_COMMENT_COMMENT_TABLE_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const containerActions: ServiceCommentComment_TableActionDefinitions = customContainerHook?.() || {};
  const actions = useMemo(() => ({ ...containerActions, ...pageActions }), [containerActions, pageActions]);

  return (
    <Grid container>
      <Grid item data-name="Comment_Table" xs={12} sm={12} md={36.0}>
        <Card id="User/(esm/_p_So4GksEe25ONJ3V89cVA)/TransferObjectTableVisualElement" data-name="Comment_Table">
          <CardContent>
            <Grid container direction="column" alignItems="stretch" justifyContent="flex-start" spacing={2}>
              <Grid item xs={12} sm={12}>
                <Grid
                  id="User/(esm/_p_So4GksEe25ONJ3V89cVA)/TransferObjectTableTable"
                  container
                  direction="column"
                  alignItems="stretch"
                  justifyContent="flex-start"
                >
                  <ServiceCommentComment_TableComment_TableComponent
                    uniqueId={'User/(esm/_p_So4GksEe25ONJ3V89cVA)/TransferObjectTableTable'}
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
