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
import type { ServiceProPro_TableActionDefinitions } from './ServiceProPro_Table';
import type { ServicePro, ServiceProStored, ServiceProQueryCustomizer } from '~/services/data-api';

const ServiceProPro_Table = lazy(() => import('~/containers/Service/Pro/Pro_Table/ServiceProPro_Table'));

export interface ServiceProPro_TablePageActions extends ServiceProPro_TableActionDefinitions {
  serviceProPro_TableBack?: () => Promise<void>;
}

export interface ServiceProPro_TablePageProps {
  title: string;
  actions: ServiceProPro_TablePageActions;
  isLoading: boolean;
  editMode: boolean;
  refreshCounter: number;
}

// Name: service::Pro::Pro_Table
export default function ServiceProPro_TablePage(props: ServiceProPro_TablePageProps) {
  const { openConfirmDialog } = useConfirmDialog();

  const { t } = useTranslation();
  const { navigate, back } = useJudoNavigation();
  const { title, actions, isLoading, editMode, refreshCounter } = props;

  return (
    <>
      <PageHeader title={title}>
        {!editMode && actions.serviceProPro_TableBack && (
          <Grid className="page-action" item>
            <LoadingButton
              id="service::Pro::Pro_Table::Back"
              loading={isLoading}
              loadingPosition="start"
              variant={'text'}
              startIcon={<MdiIcon path="arrow-left" />}
              onClick={async () => {
                await actions.serviceProPro_TableBack!();
              }}
            >
              <span>{t('service.Pro.Pro.Table.service::Pro::Pro_Table::Back', { defaultValue: 'Back' })}</span>
            </LoadingButton>
          </Grid>
        )}
        <div>{/* Placeholder */}</div>
      </PageHeader>
      <Suspense>
        <Box sx={mainContainerPadding}>
          <ServiceProPro_Table actions={actions} refreshCounter={refreshCounter} />
        </Box>
      </Suspense>
    </>
  );
}
