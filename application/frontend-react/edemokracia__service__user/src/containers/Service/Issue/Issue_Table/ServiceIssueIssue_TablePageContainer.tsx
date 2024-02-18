//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPageContainersToGenerate(#application)
// Path expression: 'src/containers/'+#containerPath(#self)+'/'+#containerComponentName(#self)+'PageContainer.tsx'
// Template name: actor/src/containers/page.tsx
// Template file: actor/src/containers/page.tsx.hbs

import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Suspense, lazy } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { MdiIcon, PageHeader, useJudoNavigation } from '~/components';
import { useConfirmDialog } from '~/components/dialog';
import type { ServiceIssue, ServiceIssueQueryCustomizer, ServiceIssueStored } from '~/services/data-api';
import type { JudoRestResponse } from '~/services/data-api/rest';
import { mainContainerPadding } from '~/theme';
import type { ServiceIssueIssue_TableActionDefinitions } from './ServiceIssueIssue_Table';

const ServiceIssueIssue_Table = lazy(() => import('~/containers/Service/Issue/Issue_Table/ServiceIssueIssue_Table'));

export interface ServiceIssueIssue_TablePageActions extends ServiceIssueIssue_TableActionDefinitions {
  backAction?: () => Promise<void>;
}

export interface ServiceIssueIssue_TablePageProps {
  actions: ServiceIssueIssue_TablePageActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;
}

// Name: service::Issue::Issue_Table
export default function ServiceIssueIssue_TablePage(props: ServiceIssueIssue_TablePageProps) {
  const { openConfirmDialog } = useConfirmDialog();

  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { actions, isLoading, editMode, refreshCounter } = props;

  return (
    <>
      <PageHeader title={actions?.getPageTitle ? actions?.getPageTitle() : ''}>
        {!editMode && actions.backAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_qCtwUGksEe25ONJ3V89cVA)/TransferObjectTableBackButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              disabled={isLoading}
              onClick={async () => {
                await actions.backAction!();
              }}
            >
              <span>{t('judo.action.back', { defaultValue: 'Back' })}</span>
            </LoadingButton>
          </Grid>
        )}
        <div>{/* Placeholder */}</div>
      </PageHeader>
      <Suspense>
        <Box sx={mainContainerPadding}>
          <ServiceIssueIssue_Table actions={actions} refreshCounter={refreshCounter} isLoading={isLoading} />
        </Box>
      </Suspense>
    </>
  );
}
