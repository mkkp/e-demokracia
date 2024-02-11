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
import { ServiceUserIssues, ServiceUserIssuesQueryCustomizer, ServiceUserIssuesStored } from '~/services/data-api';
import type { JudoIdentifiable } from '~/services/data-api/common';
import type { JudoRestResponse } from '~/services/data-api/rest';
import { isErrorOperationFault, useErrorHandler } from '~/utilities';

export const SERVICE_USER_ISSUES_USER_ISSUES_TABLE_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY =
  'SERVICE_USER_ISSUES_USER_ISSUES_TABLE_CONTAINER_ACTIONS_HOOK';
export type ServiceUserIssuesUserIssues_TableContainerHook = () => ServiceUserIssuesUserIssues_TableActionDefinitions;

export interface ServiceUserIssuesUserIssues_TableActionDefinitions {
  getPageTitle?: () => string;
}

export interface ServiceUserIssuesUserIssues_TableProps {
  refreshCounter: number;
  isLoading: boolean;
  actions: ServiceUserIssuesUserIssues_TableActionDefinitions;

  isDraft?: boolean;
}

// XMIID: User/(esm/_jK51vlq4Ee6_67aMO2jOsw)/TransferObjectTablePageContainer
// Name: service::UserIssues::UserIssues_Table
export default function ServiceUserIssuesUserIssues_Table(props: ServiceUserIssuesUserIssues_TableProps) {
  // Container props
  const { refreshCounter, isLoading, isDraft, actions: pageActions } = props;

  // Container hooks
  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { locale: l10nLocale } = useL10N();
  const { openConfirmDialog } = useConfirmDialog();

  // Pandino Container Action overrides
  const { service: customContainerHook } = useTrackService<ServiceUserIssuesUserIssues_TableContainerHook>(
    `(${OBJECTCLASS}=${SERVICE_USER_ISSUES_USER_ISSUES_TABLE_CONTAINER_ACTIONS_HOOK_INTERFACE_KEY})`,
  );
  const containerActions: ServiceUserIssuesUserIssues_TableActionDefinitions = customContainerHook?.() || {};
  const actions = useMemo(() => ({ ...containerActions, ...pageActions }), [containerActions, pageActions]);

  return (
    <Grid container>
      <Grid item data-name="UserIssues_Table" xs={12} sm={12} md={36.0}>
        <Card id="User/(esm/_jK51vlq4Ee6_67aMO2jOsw)/TransferObjectTableVisualElement" data-name="UserIssues_Table">
          <CardContent>
            <Grid container direction="row" alignItems="stretch" justifyContent="flex-start" spacing={2}>
              <Grid item xs={12} sm={12}>
                <Typography id="User/(esm/_jK51vlq4Ee6_67aMO2jOsw)/TransferObjectTableEmpty">
                  {t('service.UserIssues.UserIssues_Table.UserIssues_Table', { defaultValue: 'No columns.' }) as string}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
