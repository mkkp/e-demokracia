//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPageContainersToGenerate(#application)
// Path expression: 'src/containers/'+#containerPath(#self)+'/'+#containerComponentName(#self)+'PageContainer.tsx'
// Template name: actor/src/containers/page.tsx
// Template file: actor/src/containers/page.tsx.hbs

import { lazy, Suspense } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';
import { useTranslation } from 'react-i18next';
import { useJudoNavigation, MdiIcon, PageHeader } from '~/components';
import { useConfirmDialog } from '~/components/dialog';
import { mainContainerPadding } from '~/theme';
import type { ServiceUserIssuesUserIssues_TableActionDefinitions } from './ServiceUserIssuesUserIssues_Table';
import type { ServiceUserIssues, ServiceUserIssuesStored, ServiceUserIssuesQueryCustomizer } from '~/services/data-api';

const ServiceUserIssuesUserIssues_Table = lazy(
  () => import('~/containers/Service/UserIssues/UserIssues_Table/ServiceUserIssuesUserIssues_Table'),
);

export interface ServiceUserIssuesUserIssues_TablePageActions
  extends ServiceUserIssuesUserIssues_TableActionDefinitions {
  backAction?: () => Promise<void>;
}

export interface ServiceUserIssuesUserIssues_TablePageProps {
  title: string;
  actions: ServiceUserIssuesUserIssues_TablePageActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;
}

// Name: service::UserIssues::UserIssues_Table
export default function ServiceUserIssuesUserIssues_TablePage(props: ServiceUserIssuesUserIssues_TablePageProps) {
  const { openConfirmDialog } = useConfirmDialog();

  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { title, actions, isLoading, editMode, refreshCounter } = props;

  return (
    <>
      <PageHeader title={title}>
        {!editMode && actions.backAction && (
          <Grid className="page-action" item>
            <LoadingButton
              id="User/(esm/_jK51vlq4Ee6_67aMO2jOsw)/TransferObjectTableBackButton"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.backAction!();
              }}
            >
              <span>{t('service.UserIssues.UserIssues_Table.Back', { defaultValue: 'Back' })}</span>
            </LoadingButton>
          </Grid>
        )}
        <div>{/* Placeholder */}</div>
      </PageHeader>
      <Suspense>
        <Box sx={mainContainerPadding}>
          <ServiceUserIssuesUserIssues_Table actions={actions} refreshCounter={refreshCounter} />
        </Box>
      </Suspense>
    </>
  );
}
