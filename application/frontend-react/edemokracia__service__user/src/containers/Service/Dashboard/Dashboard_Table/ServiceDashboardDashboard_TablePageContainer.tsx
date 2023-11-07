//////////////////////////////////////////////////////////////////////////////
// G E N E R A T E D    S O U R C E
// --------------------------------
// Factory expression: #getPageContainersToGenerate(#application)
// Path expression: 'src/containers/'+#containerPath(#self)+'/'+#containerComponentName(#self)+'PageContainer.tsx'
// Template name: actor/src/containers/page.tsx
// Template file: actor/src/containers/page.tsx.hbs

import { lazy, Suspense } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import { Box, Grid, Button } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useTranslation } from 'react-i18next';
import { useJudoNavigation, MdiIcon, PageHeader } from '~/components';
import { useConfirmDialog } from '~/components/dialog';
import { mainContainerPadding } from '~/theme';
import type { ServiceDashboardDashboard_TableActionDefinitions } from './ServiceDashboardDashboard_Table';
import type { ServiceDashboard, ServiceDashboardStored, ServiceDashboardQueryCustomizer } from '~/services/data-api';

const ServiceDashboardDashboard_Table = lazy(
  () => import('~/containers/Service/Dashboard/Dashboard_Table/ServiceDashboardDashboard_Table'),
);

export interface ServiceDashboardDashboard_TablePageActions extends ServiceDashboardDashboard_TableActionDefinitions {
  serviceDashboardDashboard_TableBack?: () => Promise<void>;
}

export interface ServiceDashboardDashboard_TablePageProps {
  title: string;
  actions: ServiceDashboardDashboard_TablePageActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;
}

// Name: service::Dashboard::Dashboard_Table
export default function ServiceDashboardDashboard_TablePage(props: ServiceDashboardDashboard_TablePageProps) {
  const { openConfirmDialog } = useConfirmDialog();

  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { title, actions, isLoading, editMode, refreshCounter } = props;

  return (
    <>
      <PageHeader title={title}>
        {!editMode && actions.serviceDashboardDashboard_TableBack && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::Dashboard::Dashboard_Table::Back"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.serviceDashboardDashboard_TableBack!();
              }}
            >
              <span>
                {t('service.Dashboard.Dashboard.Table.service::Dashboard::Dashboard_Table::Back', {
                  defaultValue: 'Back',
                })}
              </span>
            </LoadingButton>
          </Grid>
        )}
        <div>{/* Placeholder */}</div>
      </PageHeader>
      <Suspense>
        <Box sx={mainContainerPadding}>
          <ServiceDashboardDashboard_Table actions={actions} refreshCounter={refreshCounter} />
        </Box>
      </Suspense>
    </>
  );
}
